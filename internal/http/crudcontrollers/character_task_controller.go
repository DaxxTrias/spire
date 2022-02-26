package crudcontrollers

import (
	"fmt"
	"github.com/Akkadius/spire/internal/database"
	"github.com/Akkadius/spire/internal/http/routes"
	"github.com/Akkadius/spire/internal/models"
	"github.com/labstack/echo/v4"
	"github.com/sirupsen/logrus"
	"net/http"
	"strconv"
)

type CharacterTaskController struct {
	db	 *database.DatabaseResolver
	logger *logrus.Logger
}

func NewCharacterTaskController(
	db *database.DatabaseResolver,
	logger *logrus.Logger,
) *CharacterTaskController {
	return &CharacterTaskController{
		db:	 db,
		logger: logger,
	}
}

func (e *CharacterTaskController) Routes() []*routes.Route {
	return []*routes.Route{
		routes.RegisterRoute(http.MethodGet, "character_task/:charid", e.getCharacterTask, nil),
		routes.RegisterRoute(http.MethodGet, "character_tasks", e.listCharacterTasks, nil),
		routes.RegisterRoute(http.MethodPut, "character_task", e.createCharacterTask, nil),
		routes.RegisterRoute(http.MethodDelete, "character_task/:charid", e.deleteCharacterTask, nil),
		routes.RegisterRoute(http.MethodPatch, "character_task/:charid", e.updateCharacterTask, nil),
		routes.RegisterRoute(http.MethodPost, "character_tasks/bulk", e.getCharacterTasksBulk, nil),
	}
}

// listCharacterTasks godoc
// @Id listCharacterTasks
// @Summary Lists CharacterTasks
// @Accept json
// @Produce json
// @Tags CharacterTask
// @Param includes query string false "Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names "
// @Param where query string false "Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2"
// @Param whereOr query string false "Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2"
// @Param groupBy query string false "Group by field. Multiple conditions [.] separated Example: field1.field2"
// @Param limit query string false "Rows to limit in response (Default: 10,000)"
// @Param orderBy query string false "Order by [field]"
// @Param orderDirection query string false "Order by field direction"
// @Param select query string false "Column names [.] separated to fetch specific fields in response"
// @Success 200 {array} models.CharacterTask
// @Failure 500 {string} string "Bad query request"
// @Router /character_tasks [get]
func (e *CharacterTaskController) listCharacterTasks(c echo.Context) error {
	var results []models.CharacterTask
	err := e.db.QueryContext(models.CharacterTask{}, c).Find(&results).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": err})
	}

	return c.JSON(http.StatusOK, results)
}

// getCharacterTask godoc
// @Id getCharacterTask
// @Summary Gets CharacterTask
// @Accept json
// @Produce json
// @Tags CharacterTask
// @Param id path int true "Id"
// @Param includes query string false "Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names "
// @Param select query string false "Column names [.] separated to fetch specific fields in response"
// @Success 200 {array} models.CharacterTask
// @Failure 404 {string} string "Entity not found"
// @Failure 500 {string} string "Cannot find param"
// @Failure 500 {string} string "Bad query request"
// @Router /character_task/{id} [get]
func (e *CharacterTaskController) getCharacterTask(c echo.Context) error {
	var params []interface{}
	var keys []string

	// primary key param
	charid, err := strconv.Atoi(c.Param("charid"))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Cannot find param [Charid]"})
	}
	params = append(params, charid)
	keys = append(keys, "charid = ?")

	// key param [taskid] position [2] type [int]
	if len(c.QueryParam("taskid")) > 0 {
		taskidParam, err := strconv.Atoi(c.QueryParam("taskid"))
		if err != nil {
			return c.JSON(http.StatusInternalServerError, echo.Map{"error": fmt.Sprintf("Error parsing query param [taskid] err [%s]", err.Error())})
		}

		params = append(params, taskidParam)
		keys = append(keys, "taskid = ?")
	}

	// query builder
	var result models.CharacterTask
	query := e.db.QueryContext(models.CharacterTask{}, c)
	for i, _ := range keys {
		query = query.Where(keys[i], params[i])
	}

	// grab first entry
	err = query.First(&result).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": err.Error()})
	}

	// couldn't find entity
	if result.Charid == 0 {
		return c.JSON(http.StatusNotFound, echo.Map{"error": "Cannot find entity"})
	}

	return c.JSON(http.StatusOK, result)
}

// updateCharacterTask godoc
// @Id updateCharacterTask
// @Summary Updates CharacterTask
// @Accept json
// @Produce json
// @Tags CharacterTask
// @Param id path int true "Id"
// @Param character_task body models.CharacterTask true "CharacterTask"
// @Success 200 {array} models.CharacterTask
// @Failure 404 {string} string "Cannot find entity"
// @Failure 500 {string} string "Error binding to entity"
// @Failure 500 {string} string "Error updating entity"
// @Router /character_task/{id} [patch]
func (e *CharacterTaskController) updateCharacterTask(c echo.Context) error {
	request := new(models.CharacterTask)
	if err := c.Bind(request); err != nil {
		return c.JSON(
			http.StatusInternalServerError,
			echo.Map{"error": fmt.Sprintf("Error binding to entity [%v]", err.Error())},
		)
	}

	var params []interface{}
	var keys []string

	// primary key param
	charid, err := strconv.Atoi(c.Param("charid"))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Cannot find param [Charid]"})
	}
	params = append(params, charid)
	keys = append(keys, "charid = ?")

	// key param [taskid] position [2] type [int]
	if len(c.QueryParam("taskid")) > 0 {
		taskidParam, err := strconv.Atoi(c.QueryParam("taskid"))
		if err != nil {
			return c.JSON(http.StatusInternalServerError, echo.Map{"error": fmt.Sprintf("Error parsing query param [taskid] err [%s]", err.Error())})
		}

		params = append(params, taskidParam)
		keys = append(keys, "taskid = ?")
	}

	// query builder
	var result models.CharacterTask
	query := e.db.QueryContext(models.CharacterTask{}, c)
	for i, _ := range keys {
		query = query.Where(keys[i], params[i])
	}

	// grab first entry
	err = query.First(&result).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": fmt.Sprintf("Cannot find entity [%s]", err.Error())})
	}

	err = query.Select("*").Updates(&request).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": fmt.Sprintf("Error updating entity [%v]", err.Error())})
	}

	return c.JSON(http.StatusOK, request)
}

// createCharacterTask godoc
// @Id createCharacterTask
// @Summary Creates CharacterTask
// @Accept json
// @Produce json
// @Param character_task body models.CharacterTask true "CharacterTask"
// @Tags CharacterTask
// @Success 200 {array} models.CharacterTask
// @Failure 500 {string} string "Error binding to entity"
// @Failure 500 {string} string "Error inserting entity"
// @Router /character_task [put]
func (e *CharacterTaskController) createCharacterTask(c echo.Context) error {
	characterTask := new(models.CharacterTask)
	if err := c.Bind(characterTask); err != nil {
		return c.JSON(
			http.StatusInternalServerError,
			echo.Map{"error": fmt.Sprintf("Error binding to entity [%v]", err.Error())},
		)
	}

	err := e.db.Get(models.CharacterTask{}, c).Model(&models.CharacterTask{}).Create(&characterTask).Error
	if err != nil {
		return c.JSON(
			http.StatusInternalServerError,
			echo.Map{"error": fmt.Sprintf("Error inserting entity [%v]", err.Error())},
		)
	}

	return c.JSON(http.StatusOK, characterTask)
}

// deleteCharacterTask godoc
// @Id deleteCharacterTask
// @Summary Deletes CharacterTask
// @Accept json
// @Produce json
// @Tags CharacterTask
// @Param id path int true "charid"
// @Success 200 {string} string "Entity deleted successfully"
// @Failure 404 {string} string "Cannot find entity"
// @Failure 500 {string} string "Error binding to entity"
// @Failure 500 {string} string "Error deleting entity"
// @Router /character_task/{id} [delete]
func (e *CharacterTaskController) deleteCharacterTask(c echo.Context) error {
	var params []interface{}
	var keys []string

	// primary key param
	charid, err := strconv.Atoi(c.Param("charid"))
	if err != nil {
		e.logger.Error(err)
	}
	params = append(params, charid)
	keys = append(keys, "charid = ?")

	// key param [taskid] position [2] type [int]
	if len(c.QueryParam("taskid")) > 0 {
		taskidParam, err := strconv.Atoi(c.QueryParam("taskid"))
		if err != nil {
			return c.JSON(http.StatusInternalServerError, echo.Map{"error": fmt.Sprintf("Error parsing query param [taskid] err [%s]", err.Error())})
		}

		params = append(params, taskidParam)
		keys = append(keys, "taskid = ?")
	}

	// query builder
	var result models.CharacterTask
	query := e.db.QueryContext(models.CharacterTask{}, c)
	for i, _ := range keys {
		query = query.Where(keys[i], params[i])
	}

	// grab first entry
	err = query.First(&result).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": err.Error()})
	}

	err = e.db.Get(models.CharacterTask{}, c).Model(&models.CharacterTask{}).Delete(&result).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Error deleting entity"})
	}

	return c.JSON(http.StatusOK, echo.Map{"success": "Entity deleted successfully"})
}

// getCharacterTasksBulk godoc
// @Id getCharacterTasksBulk
// @Summary Gets CharacterTasks in bulk
// @Accept json
// @Produce json
// @Param Body body BulkFetchByIdsGetRequest true "body"
// @Tags CharacterTask
// @Success 200 {array} models.CharacterTask
// @Failure 500 {string} string "Bad query request"
// @Router /character_tasks/bulk [post]
func (e *CharacterTaskController) getCharacterTasksBulk(c echo.Context) error {
	var results []models.CharacterTask

	r := new(BulkFetchByIdsGetRequest)
	if err := c.Bind(r); err != nil {
		return c.JSON(
			http.StatusInternalServerError,
			echo.Map{"error": fmt.Sprintf("Error binding to bulk request: [%v]", err.Error())},
		)
	}

	if len(r.IDs) == 0 {
		return c.JSON(
			http.StatusOK,
			echo.Map{"error": fmt.Sprintf("Missing request field data 'ids'")},
		)
	}

	err := e.db.QueryContext(models.CharacterTask{}, c).Find(&results, r.IDs).Error
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": err.Error()})
	}

	return c.JSON(http.StatusOK, results)
}