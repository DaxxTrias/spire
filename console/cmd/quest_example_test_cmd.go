package cmd

import (
	"errors"
	"github.com/Akkadius/spire/questapi"
	"github.com/sirupsen/logrus"
	"github.com/spf13/cobra"
	"strings"
)

type QuestExampleTestCommand struct {
	logger  *logrus.Logger
	command *cobra.Command
	sourcer *questapi.QuestExamplesProjectEqSourcer
}

func (g *QuestExampleTestCommand) Command() *cobra.Command {
	return g.command
}

// new instance of command
func NewQuestExampleTestCommand(
	logger *logrus.Logger,
) *QuestExampleTestCommand {
	i := &QuestExampleTestCommand{
		logger: logger,
		command: &cobra.Command{
			Use:   "quest:example-test",
			Short: "Parses ProjectEQ repo for examples",
		},
	}

	i.command.Args = i.Validate
	i.command.Run = i.Handle

	return i
}

// Handle implementation of the Command interface
func (c *QuestExampleTestCommand) Handle(_ *cobra.Command, args []string) {
	searchTerms := []string{}
	if len(args) > 0 {
		searchTerms = strings.Split(args[0], ",")
	}

	c.sourcer.Search(searchTerms, "lua")
}

// Validate
func (g *QuestExampleTestCommand) Validate(_ *cobra.Command, args []string) error {
	if len(args) < 2 {
		return errors.New("args required [methods] [language]")
	}

	return nil
}