package questapi

import (
	"errors"
	"fmt"
	"github.com/spf13/cobra"
	"strings"
)

type ExampleTestCommand struct {
	command *cobra.Command
	sourcer *ExamplesGithubSourcer
}

func (c *ExampleTestCommand) Command() *cobra.Command {
	return c.command
}

func NewExampleTestCommand(
	sourcer *ExamplesGithubSourcer,
) *ExampleTestCommand {
	i := &ExampleTestCommand{
		sourcer: sourcer,
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
func (c *ExampleTestCommand) Handle(_ *cobra.Command, args []string) {
	searchTerms := []string{}
	if len(args) > 0 {
		searchTerms = strings.Split(args[0], ",")
	}

	language := args[1]

	// inputs
	org := "ProjectEQ"
	repo := "projecteqquests"
	branch := "master"

	result := c.sourcer.Search(org, repo, branch, searchTerms, language, true)

	fmt.Println(result)
}

func (c *ExampleTestCommand) Validate(_ *cobra.Command, args []string) error {
	if len(args) < 2 {
		return errors.New("args required [methods] [language]")
	}

	return nil
}
