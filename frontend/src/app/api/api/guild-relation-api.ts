/* tslint:disable */
/* eslint-disable */
/**
 * Spire
 * Spire API documentation
 *
 * The version of the OpenAPI document: 3.0
 * Contact: akkadius1@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CrudcontrollersBulkFetchByIdsGetRequest } from '../models';
// @ts-ignore
import { ModelsGuildRelation } from '../models';
/**
 * GuildRelationApi - axios parameter creator
 * @export
 */
export const GuildRelationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates GuildRelation
         * @param {ModelsGuildRelation} guildRelation GuildRelation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createGuildRelation: async (guildRelation: ModelsGuildRelation, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'guildRelation' is not null or undefined
            if (guildRelation === null || guildRelation === undefined) {
                throw new RequiredError('guildRelation','Required parameter guildRelation was null or undefined when calling createGuildRelation.');
            }
            const localVarPath = `/guild_relation`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof guildRelation !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(guildRelation !== undefined ? guildRelation : {})
                : (guildRelation || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes GuildRelation
         * @param {number} id guild1
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteGuildRelation: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteGuildRelation.');
            }
            const localVarPath = `/guild_relation/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets GuildRelation
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGuildRelation: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getGuildRelation.');
            }
            const localVarPath = `/guild_relation/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (includes !== undefined) {
                localVarQueryParameter['includes'] = includes;
            }

            if (select !== undefined) {
                localVarQueryParameter['select'] = select;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets GuildRelations in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGuildRelationsBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getGuildRelationsBulk.');
            }
            const localVarPath = `/guild_relations/bulk`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof body !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(body !== undefined ? body : {})
                : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Lists GuildRelations
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [groupBy] Group by field. Multiple conditions [.] separated Example: field1.field2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listGuildRelations: async (includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/guild_relations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (includes !== undefined) {
                localVarQueryParameter['includes'] = includes;
            }

            if (where !== undefined) {
                localVarQueryParameter['where'] = where;
            }

            if (whereOr !== undefined) {
                localVarQueryParameter['whereOr'] = whereOr;
            }

            if (groupBy !== undefined) {
                localVarQueryParameter['groupBy'] = groupBy;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }

            if (orderDirection !== undefined) {
                localVarQueryParameter['orderDirection'] = orderDirection;
            }

            if (select !== undefined) {
                localVarQueryParameter['select'] = select;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates GuildRelation
         * @param {number} id Id
         * @param {ModelsGuildRelation} guildRelation GuildRelation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGuildRelation: async (id: number, guildRelation: ModelsGuildRelation, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateGuildRelation.');
            }
            // verify required parameter 'guildRelation' is not null or undefined
            if (guildRelation === null || guildRelation === undefined) {
                throw new RequiredError('guildRelation','Required parameter guildRelation was null or undefined when calling updateGuildRelation.');
            }
            const localVarPath = `/guild_relation/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof guildRelation !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(guildRelation !== undefined ? guildRelation : {})
                : (guildRelation || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GuildRelationApi - functional programming interface
 * @export
 */
export const GuildRelationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates GuildRelation
         * @param {ModelsGuildRelation} guildRelation GuildRelation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createGuildRelation(guildRelation: ModelsGuildRelation, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsGuildRelation>>> {
            const localVarAxiosArgs = await GuildRelationApiAxiosParamCreator(configuration).createGuildRelation(guildRelation, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes GuildRelation
         * @param {number} id guild1
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteGuildRelation(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await GuildRelationApiAxiosParamCreator(configuration).deleteGuildRelation(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets GuildRelation
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGuildRelation(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsGuildRelation>>> {
            const localVarAxiosArgs = await GuildRelationApiAxiosParamCreator(configuration).getGuildRelation(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets GuildRelations in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGuildRelationsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsGuildRelation>>> {
            const localVarAxiosArgs = await GuildRelationApiAxiosParamCreator(configuration).getGuildRelationsBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists GuildRelations
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [groupBy] Group by field. Multiple conditions [.] separated Example: field1.field2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listGuildRelations(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsGuildRelation>>> {
            const localVarAxiosArgs = await GuildRelationApiAxiosParamCreator(configuration).listGuildRelations(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates GuildRelation
         * @param {number} id Id
         * @param {ModelsGuildRelation} guildRelation GuildRelation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateGuildRelation(id: number, guildRelation: ModelsGuildRelation, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsGuildRelation>>> {
            const localVarAxiosArgs = await GuildRelationApiAxiosParamCreator(configuration).updateGuildRelation(id, guildRelation, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * GuildRelationApi - factory interface
 * @export
 */
export const GuildRelationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates GuildRelation
         * @param {ModelsGuildRelation} guildRelation GuildRelation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createGuildRelation(guildRelation: ModelsGuildRelation, options?: any): AxiosPromise<Array<ModelsGuildRelation>> {
            return GuildRelationApiFp(configuration).createGuildRelation(guildRelation, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes GuildRelation
         * @param {number} id guild1
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteGuildRelation(id: number, options?: any): AxiosPromise<string> {
            return GuildRelationApiFp(configuration).deleteGuildRelation(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets GuildRelation
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGuildRelation(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsGuildRelation>> {
            return GuildRelationApiFp(configuration).getGuildRelation(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets GuildRelations in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGuildRelationsBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsGuildRelation>> {
            return GuildRelationApiFp(configuration).getGuildRelationsBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists GuildRelations
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [groupBy] Group by field. Multiple conditions [.] separated Example: field1.field2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listGuildRelations(includes?: string, where?: string, whereOr?: string, groupBy?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsGuildRelation>> {
            return GuildRelationApiFp(configuration).listGuildRelations(includes, where, whereOr, groupBy, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates GuildRelation
         * @param {number} id Id
         * @param {ModelsGuildRelation} guildRelation GuildRelation
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGuildRelation(id: number, guildRelation: ModelsGuildRelation, options?: any): AxiosPromise<Array<ModelsGuildRelation>> {
            return GuildRelationApiFp(configuration).updateGuildRelation(id, guildRelation, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createGuildRelation operation in GuildRelationApi.
 * @export
 * @interface GuildRelationApiCreateGuildRelationRequest
 */
export interface GuildRelationApiCreateGuildRelationRequest {
    /**
     * GuildRelation
     * @type {ModelsGuildRelation}
     * @memberof GuildRelationApiCreateGuildRelation
     */
    readonly guildRelation: ModelsGuildRelation
}

/**
 * Request parameters for deleteGuildRelation operation in GuildRelationApi.
 * @export
 * @interface GuildRelationApiDeleteGuildRelationRequest
 */
export interface GuildRelationApiDeleteGuildRelationRequest {
    /**
     * guild1
     * @type {number}
     * @memberof GuildRelationApiDeleteGuildRelation
     */
    readonly id: number
}

/**
 * Request parameters for getGuildRelation operation in GuildRelationApi.
 * @export
 * @interface GuildRelationApiGetGuildRelationRequest
 */
export interface GuildRelationApiGetGuildRelationRequest {
    /**
     * Id
     * @type {number}
     * @memberof GuildRelationApiGetGuildRelation
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof GuildRelationApiGetGuildRelation
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof GuildRelationApiGetGuildRelation
     */
    readonly select?: string
}

/**
 * Request parameters for getGuildRelationsBulk operation in GuildRelationApi.
 * @export
 * @interface GuildRelationApiGetGuildRelationsBulkRequest
 */
export interface GuildRelationApiGetGuildRelationsBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof GuildRelationApiGetGuildRelationsBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for listGuildRelations operation in GuildRelationApi.
 * @export
 * @interface GuildRelationApiListGuildRelationsRequest
 */
export interface GuildRelationApiListGuildRelationsRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof GuildRelationApiListGuildRelations
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof GuildRelationApiListGuildRelations
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof GuildRelationApiListGuildRelations
     */
    readonly whereOr?: string

    /**
     * Group by field. Multiple conditions [.] separated Example: field1.field2
     * @type {string}
     * @memberof GuildRelationApiListGuildRelations
     */
    readonly groupBy?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof GuildRelationApiListGuildRelations
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof GuildRelationApiListGuildRelations
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof GuildRelationApiListGuildRelations
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof GuildRelationApiListGuildRelations
     */
    readonly select?: string
}

/**
 * Request parameters for updateGuildRelation operation in GuildRelationApi.
 * @export
 * @interface GuildRelationApiUpdateGuildRelationRequest
 */
export interface GuildRelationApiUpdateGuildRelationRequest {
    /**
     * Id
     * @type {number}
     * @memberof GuildRelationApiUpdateGuildRelation
     */
    readonly id: number

    /**
     * GuildRelation
     * @type {ModelsGuildRelation}
     * @memberof GuildRelationApiUpdateGuildRelation
     */
    readonly guildRelation: ModelsGuildRelation
}

/**
 * GuildRelationApi - object-oriented interface
 * @export
 * @class GuildRelationApi
 * @extends {BaseAPI}
 */
export class GuildRelationApi extends BaseAPI {
    /**
     * 
     * @summary Creates GuildRelation
     * @param {GuildRelationApiCreateGuildRelationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GuildRelationApi
     */
    public createGuildRelation(requestParameters: GuildRelationApiCreateGuildRelationRequest, options?: any) {
        return GuildRelationApiFp(this.configuration).createGuildRelation(requestParameters.guildRelation, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes GuildRelation
     * @param {GuildRelationApiDeleteGuildRelationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GuildRelationApi
     */
    public deleteGuildRelation(requestParameters: GuildRelationApiDeleteGuildRelationRequest, options?: any) {
        return GuildRelationApiFp(this.configuration).deleteGuildRelation(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets GuildRelation
     * @param {GuildRelationApiGetGuildRelationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GuildRelationApi
     */
    public getGuildRelation(requestParameters: GuildRelationApiGetGuildRelationRequest, options?: any) {
        return GuildRelationApiFp(this.configuration).getGuildRelation(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets GuildRelations in bulk
     * @param {GuildRelationApiGetGuildRelationsBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GuildRelationApi
     */
    public getGuildRelationsBulk(requestParameters: GuildRelationApiGetGuildRelationsBulkRequest, options?: any) {
        return GuildRelationApiFp(this.configuration).getGuildRelationsBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists GuildRelations
     * @param {GuildRelationApiListGuildRelationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GuildRelationApi
     */
    public listGuildRelations(requestParameters: GuildRelationApiListGuildRelationsRequest = {}, options?: any) {
        return GuildRelationApiFp(this.configuration).listGuildRelations(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.groupBy, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates GuildRelation
     * @param {GuildRelationApiUpdateGuildRelationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GuildRelationApi
     */
    public updateGuildRelation(requestParameters: GuildRelationApiUpdateGuildRelationRequest, options?: any) {
        return GuildRelationApiFp(this.configuration).updateGuildRelation(requestParameters.id, requestParameters.guildRelation, options).then((request) => request(this.axios, this.basePath));
    }
}