package generators

import (
	"fmt"
	"github.com/Akkadius/spire/internal/logger"
	"github.com/spf13/cobra"
	"gorm.io/gorm"
	"os"
	"strings"
)

type ControllerGeneratorCmd struct {
	db      *gorm.DB
	logger  *logger.AppLogger
	command *cobra.Command
}

func (g *ControllerGeneratorCmd) Command() *cobra.Command {
	return g.command
}

func NewControllerGeneratorCommand(db *gorm.DB, logger *logger.AppLogger) *ControllerGeneratorCmd {
	i := &ControllerGeneratorCmd{
		db:     db,
		logger: logger,
		command: &cobra.Command{
			Use:   "generate:controllers [all|table_name]",
			Short: "Generates application controller from template",
		},
	}

	i.command.Args = i.Validate
	i.command.Run = i.Handle

	return i
}

// Handle implementation of the Command interface
func (g *ControllerGeneratorCmd) Handle(_ *cobra.Command, args []string) {
	//plural := pluralize.NewClient()

	g.writeTypesFile()

	for table, keys := range GetDbSchemaKeysConfig() {
		if len(args) > 0 && table != args[0] {
			continue
		}

		for _, key := range keys {

			// todo: this needs to change later
			//isKey := strings.Contains(key.ColumnType, "int") && !strings.Contains(key.ColumnType, "unsigned")
			isKey := key.ColumnKey.String == "PRI" && strings.Contains(key.ColumnType, "int")
			if isKey {
				fmt.Printf("Generating models and controllers for [%v]\n", table)

				NewControllerGenerator(
					GenerateControllerContext{
						EntityName: table,
					},
					g.logger,
				).Generate()
			}
		}
	}

	NewSyncControllersToInjector().Sync()
}

func (g *ControllerGeneratorCmd) Validate(_ *cobra.Command, _ []string) error {
	return nil
}

func (g *ControllerGeneratorCmd) writeTypesFile() {
	b, err := os.ReadFile("./internal/generators/templates/crud_controller_types.go")
	if err != nil {
		g.logger.Fatal().Err(err).Msg("Failed to read template file")
	}

	// create file
	file, err := os.Create("./internal/http/crudcontrollers/a_types.go")
	if err != nil {
		g.logger.Fatal().Err(err).Msg("Failed to create file")
	}

	defer file.Close()

	// write contents
	_, err = file.WriteString(string(b))
	if err != nil {
		g.logger.Fatal().Err(err).Msg("Failed to write file")
	}
}
