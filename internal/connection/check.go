package connection

import (
	"database/sql"
	"errors"
	"fmt"
	"github.com/Akkadius/spire/internal/database"
	"github.com/Akkadius/spire/internal/encryption"
	"github.com/Akkadius/spire/internal/models"
)

type Check struct {
	db    *database.Resolver
	crypt *encryption.Encrypter
}

func NewCheck(
	db *database.Resolver,
	crypt *encryption.Encrypter,
) *Check {
	return &Check{db: db, crypt: crypt}
}

func (c *Check) GetEncKey(userId uint) string {
	return fmt.Sprintf("%v-%v", c.crypt.GetEncryptionKey(), userId)
}

func (c *Check) Handle(userId uint, connectionId string) error {
	var result models.UserServerDatabaseConnection
	relationships := models.UserServerDatabaseConnection{}.Relationships()

	query := c.db.GetSpireDb().Model(&models.UserServerDatabaseConnection{})
	for _, relationship := range relationships {
		query = query.Preload(relationship)
	}

	err := query.Where("user_id = ? AND id = ?", userId, connectionId).First(&result).Error
	if err != nil {
		return err
	}

	dsn := fmt.Sprintf(
		"%v:%v@tcp(%v:%v)/%v?charset=utf8&parseTime=True&loc=Local&timeout=1s",
		result.ServerDatabaseConnection.DbUsername,
		c.crypt.Decrypt(result.ServerDatabaseConnection.DbPassword, c.GetEncKey(userId)),
		result.ServerDatabaseConnection.DbHost,
		result.ServerDatabaseConnection.DbPort,
		result.ServerDatabaseConnection.DbName,
	)

	db, err := sql.Open("mysql", dsn)
	if err != nil {
		return errors.New(fmt.Sprintf("database connection error: %v", err))
	}

	err = db.Ping()
	if err != nil {
		return errors.New(fmt.Sprintf("database connection error: %v", err))
	}

	if result.ServerDatabaseConnection.ContentDbUsername != "" {
		dsn := fmt.Sprintf(
			"%v:%v@tcp(%v:%v)/%v?charset=utf8&parseTime=True&loc=Local&timeout=1s",
			result.ServerDatabaseConnection.ContentDbUsername,
			c.crypt.Decrypt(result.ServerDatabaseConnection.ContentDbPassword, c.GetEncKey(userId)),
			result.ServerDatabaseConnection.ContentDbHost,
			result.ServerDatabaseConnection.ContentDbPort,
			result.ServerDatabaseConnection.ContentDbName,
		)

		db, err := sql.Open("mysql", dsn)
		if err != nil {
			return errors.New(fmt.Sprintf("content database connection error: %v", err))
		}

		err = db.Ping()
		if err != nil {
			return errors.New(fmt.Sprintf("content database connection error: %v", err))
		}
	}

	return nil
}
