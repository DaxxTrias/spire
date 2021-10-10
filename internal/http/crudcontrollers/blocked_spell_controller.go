package crudcontrollers

import (
	"github.com/Akkadius/spire/internal/database"
	"github.com/Akkadius/spire/internal/http/routes"
	"github.com/Akkadius/spire/internal/models"
	"fmt"
	"github.com/labstack/echo/v4"
	"github.com/sirupsen/logrus"
	"net/http"
	"strconv"
)

type BlockedSpellController struct {
	db     *database.DatabaseResolver
	logger *logrus.Logger
}

func NewBlockedSpellController(
	db *database.DatabaseResolver,
	logger *logrus.Logger,
) *BlockedSpellController {
	return &BlockedSpellController{
		db:     db,
		logger: logger,
	}
}

func (e *BlockedSpellController) Routes() []*routes.Route {
	return []*routes.Route{
		routes.RegisterRoute(http.MethodDelete, "blocked_spell/:blocked_spell", e.deleteBlockedSpell, nil),
		routes.RegisterRoute(http.MethodGet, "blocked_spell/:blocked_spell", e.getBlockedSpell, nil),
		routes.RegisterRoute(http.MethodGet, "blocked_spells", e.listBlockedSpells, nil),
		routes.RegisterRoute(http.MethodPost, "blocked_spells/bulk", e.getBlockedSpellsBulk, nil),
		routes.RegisterRoute(http.MethodPatch, "blocked_spell/:blocked_spell", e.updateBlockedSpell, nil),
		routes.RegisterRoute(http.MethodPut, "blocked_spell", e.createBlockedSpell, nil),
	}
}

// listBlockedSpells godoc
// @Id listBlockedSpells
// @Summary Lists BlockedSpells
// @Accept json
// @Produce json
// @Tags BlockedSpell
// @Param includes query string false "Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names "
// @Param where query string false "Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2"
// @Param whereOr query string false "Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2"
// @Param limit query string false "Rows to limit in response (Default: 10,000)"
// @Param orderBy query string false "Order by [field]"
// @Param orderDirection query string false "Order by field direction"
// @Param select query string false "Column names [.] separated to fetch specific fields in response"
// @Success 200 {array} models.BlockedSpell
// @Failure 500 {string} string "Bad query request"
// @Router /blocked_spells [get]
func (e *BlockedSpellController) listBlockedSpells(c echo.Context) error {
	var results []models.BlockedSpell
	err := e.db.QueryContext(models.BlockedSpell{}, c).Find(&results).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": err})
	}

	return c.JSON(http.StatusOK, results)
}

// getBlockedSpell godoc
// @Id getBlockedSpell
// @Summary Gets BlockedSpell
// @Accept json
// @Produce json
// @Tags BlockedSpell
// @Param id path int true "Id"
// @Param includes query string false "Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names "
// @Param select query string false "Column names [.] separated to fetch specific fields in response"
// @Success 200 {array} models.BlockedSpell
// @Failure 404 {string} string "Entity not found"
// @Failure 500 {string} string "Cannot find param"
// @Failure 500 {string} string "Bad query request"
// @Router /blocked_spell/{id} [get]
func (e *BlockedSpellController) getBlockedSpell(c echo.Context) error {
	blockedSpellId, err := strconv.Atoi(c.Param("blocked_spell"))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Cannot find param"})
	}

	var result models.BlockedSpell
	err = e.db.QueryContext(models.BlockedSpell{}, c).First(&result, blockedSpellId).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": err})
	}

	if result.ID == 0 {
		return c.JSON(http.StatusNotFound, echo.Map{"error": "Cannot find entity"})
	}

	return c.JSON(http.StatusOK, result)
}

// updateBlockedSpell godoc
// @Id updateBlockedSpell
// @Summary Updates BlockedSpell
// @Accept json
// @Produce json
// @Tags BlockedSpell
// @Param id path int true "Id"
// @Param blocked_spell body models.BlockedSpell true "BlockedSpell"
// @Success 200 {array} models.BlockedSpell
// @Failure 404 {string} string "Cannot find entity"
// @Failure 500 {string} string "Error binding to entity"
// @Failure 500 {string} string "Error updating entity"
// @Router /blocked_spell/{id} [patch]
func (e *BlockedSpellController) updateBlockedSpell(c echo.Context) error {
	blockedSpell := new(models.BlockedSpell)
	if err := c.Bind(blockedSpell); err != nil {
		return c.JSON(
			http.StatusInternalServerError,
			echo.Map{"error": fmt.Sprintf("Error binding to entity: [%v]", err)},
		)
	}

    entity := models.BlockedSpell{}
	err := e.db.Get(models.BlockedSpell{}, c).Model(&models.BlockedSpell{}).First(&entity, blockedSpell.ID).Error
	if err != nil || blockedSpell.ID == 0 {
		return c.JSON(http.StatusNotFound, echo.Map{"error": "Cannot find entity"})
	}

	err = e.db.Get(models.BlockedSpell{}, c).Model(&entity).Updates(&blockedSpell).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": fmt.Sprintf("Error updating entity: [%v]", err)})
	}

	return c.JSON(http.StatusOK, blockedSpell)
}

// createBlockedSpell godoc
// @Id createBlockedSpell
// @Summary Creates BlockedSpell
// @Accept json
// @Produce json
// @Param blocked_spell body models.BlockedSpell true "BlockedSpell"
// @Tags BlockedSpell
// @Success 200 {array} models.BlockedSpell
// @Failure 500 {string} string "Error binding to entity"
// @Failure 500 {string} string "Error inserting entity"
// @Router /blocked_spell [put]
func (e *BlockedSpellController) createBlockedSpell(c echo.Context) error {
	blockedSpell := new(models.BlockedSpell)
	if err := c.Bind(blockedSpell); err != nil {
		return c.JSON(
			http.StatusInternalServerError,
			echo.Map{"error": fmt.Sprintf("Error binding to entity: [%v]", err)},
		)
	}

	err := e.db.Get(models.BlockedSpell{}, c).Model(&models.BlockedSpell{}).Create(&blockedSpell).Error
	if err != nil {
		return c.JSON(
			http.StatusInternalServerError,
			echo.Map{"error": fmt.Sprintf("Error inserting entity: [%v]", err)},
		)
	}

	return c.JSON(http.StatusOK, blockedSpell)
}

// deleteBlockedSpell godoc
// @Id deleteBlockedSpell
// @Summary Deletes BlockedSpell
// @Accept json
// @Produce json
// @Tags BlockedSpell
// @Param id path int true "Id"
// @Success 200 {string} string "Entity deleted successfully"
// @Failure 404 {string} string "Cannot find entity"
// @Failure 500 {string} string "Error binding to entity"
// @Failure 500 {string} string "Error deleting entity"
// @Router /blocked_spell/{id} [delete]
func (e *BlockedSpellController) deleteBlockedSpell(c echo.Context) error {
	blockedSpellId, err := strconv.Atoi(c.Param("blocked_spell"))
	if err != nil {
		e.logger.Error(err)
	}

	blockedSpell := new(models.BlockedSpell)
	err = e.db.Get(models.BlockedSpell{}, c).Model(&models.BlockedSpell{}).First(&blockedSpell, blockedSpellId).Error
	if err != nil || blockedSpell.ID == 0 {
		return c.JSON(http.StatusNotFound, echo.Map{"error": "Cannot find entity"})
	}

	err = e.db.Get(models.BlockedSpell{}, c).Model(&models.BlockedSpell{}).Delete(&blockedSpell).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Error deleting entity"})
	}

	return c.JSON(http.StatusOK, echo.Map{"success": "Entity deleted successfully"})
}

// getBlockedSpellsBulk godoc
// @Id getBlockedSpellsBulk
// @Summary Gets BlockedSpells in bulk
// @Accept json
// @Produce json
// @Param Body body BulkFetchByIdsGetRequest true "body"
// @Tags BlockedSpell
// @Success 200 {array} models.BlockedSpell
// @Failure 500 {string} string "Bad query request"
// @Router /blocked_spells/bulk [post]
func (e *BlockedSpellController) getBlockedSpellsBulk(c echo.Context) error {
	var results []models.BlockedSpell

	r := new(BulkFetchByIdsGetRequest)
	if err := c.Bind(r); err != nil {
		return c.JSON(
			http.StatusInternalServerError,
			echo.Map{"error": fmt.Sprintf("Error binding to bulk request: [%v]", err)},
		)
	}

	if len(r.IDs) == 0 {
		return c.JSON(
			http.StatusOK,
			echo.Map{"error": fmt.Sprintf("Missing request field data 'ids'")},
		)
	}

	err := e.db.QueryContext(models.BlockedSpell{}, c).Find(&results, r.IDs).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": err})
	}

	return c.JSON(http.StatusOK, results)
}