package spire

import (
	"fmt"
	"github.com/shirou/gopsutil/v3/mem"
	"github.com/spf13/cobra"
	"log"
	"runtime"
)

type InitCommand struct {
	command   *cobra.Command
	spireinit *Init
}

func (c *InitCommand) Command() *cobra.Command {
	return c.command
}

// flagAuthEnabled is a flag that can be passed to the spire:init command
var flagAuthEnabled bool
var compileServer bool
var compileLocation string

// NewInitCommand creates a new spire:init command
func NewInitCommand(
	spireinit *Init,
) *InitCommand {
	i := &InitCommand{
		spireinit: spireinit,
		command: &cobra.Command{
			Use:   "spire:init [username] [password]",
			Short: "Bootstraps Spire from the command-line without using the web interface",
			Args:  cobra.MinimumNArgs(2),
		},
	}

	// TODO: Change these later
	i.command.PersistentFlags().BoolVarP(&flagAuthEnabled, "auth-enabled", "a", true, "Whether or not Spire has authentication / authorization enabled")
	i.command.PersistentFlags().BoolVarP(&compileServer, "compile-server", "c", false, "Whether or not the server should be compiled (default: false - uses releases)")
	i.command.PersistentFlags().StringVarP(&compileLocation, "compile-build-location", "l", "~/code/build", "Determines where the binaries should be built")
	i.command.Run = i.Handle

	return i
}

// Handle implementation of the Command interface
func (c *InitCommand) Handle(_ *cobra.Command, args []string) {
	username := args[0]
	password := args[1]

	// Convert bool to int
	var authEnabled int
	if flagAuthEnabled {
		authEnabled = 1
	}
	cores := 1

	// get system memory available
	memory, err := mem.VirtualMemory()
	if err != nil {
		log.Fatalf("Failed to get system memory: %v", err)
	}

	// get system memory available in GB
	memoryAvailableGb := memory.Available / 1024 / 1024 / 1024
	if memoryAvailableGb >= 10 {
		cores = runtime.NumCPU() - 4
		if cores < 1 {
			cores = 1
		}
	} else if memoryAvailableGb >= 6 {
		cores = 4
	}

	// Run the spire:init command
	err = c.spireinit.InitApp(
		&InitAppRequest{
			AuthEnabled:   authEnabled,
			Username:      username,
			Password:      password,
			SelfCompiled:  compileServer,
			BuildLocation: compileLocation,
			BuildCores:    cores,
		},
	)
	if err != nil {
		fmt.Println(err)
	}
}
