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
import { ModelsLoginServerListType } from '../models';
/**
 * LoginServerListTypeApi - axios parameter creator
 * @export
 */
export const LoginServerListTypeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates LoginServerListType
         * @param {ModelsLoginServerListType} loginServerListType LoginServerListType
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createLoginServerListType: async (loginServerListType: ModelsLoginServerListType, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loginServerListType' is not null or undefined
            if (loginServerListType === null || loginServerListType === undefined) {
                throw new RequiredError('loginServerListType','Required parameter loginServerListType was null or undefined when calling createLoginServerListType.');
            }
            const localVarPath = `/login_server_list_type`;
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
            const nonString = typeof loginServerListType !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(loginServerListType !== undefined ? loginServerListType : {})
                : (loginServerListType || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes LoginServerListType
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteLoginServerListType: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteLoginServerListType.');
            }
            const localVarPath = `/login_server_list_type/{id}`
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
         * @summary Gets LoginServerListType
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLoginServerListType: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getLoginServerListType.');
            }
            const localVarPath = `/login_server_list_type/{id}`
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
         * @summary Gets LoginServerListTypes in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLoginServerListTypesBulk: async (body: CrudcontrollersBulkFetchByIdsGetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getLoginServerListTypesBulk.');
            }
            const localVarPath = `/login_server_list_types/bulk`;
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
         * @summary Lists LoginServerListTypes
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listLoginServerListTypes: async (includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/login_server_list_types`;
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
         * @summary Updates LoginServerListType
         * @param {number} id Id
         * @param {ModelsLoginServerListType} loginServerListType LoginServerListType
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLoginServerListType: async (id: number, loginServerListType: ModelsLoginServerListType, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateLoginServerListType.');
            }
            // verify required parameter 'loginServerListType' is not null or undefined
            if (loginServerListType === null || loginServerListType === undefined) {
                throw new RequiredError('loginServerListType','Required parameter loginServerListType was null or undefined when calling updateLoginServerListType.');
            }
            const localVarPath = `/login_server_list_type/{id}`
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
            const nonString = typeof loginServerListType !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(loginServerListType !== undefined ? loginServerListType : {})
                : (loginServerListType || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LoginServerListTypeApi - functional programming interface
 * @export
 */
export const LoginServerListTypeApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates LoginServerListType
         * @param {ModelsLoginServerListType} loginServerListType LoginServerListType
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createLoginServerListType(loginServerListType: ModelsLoginServerListType, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsLoginServerListType>>> {
            const localVarAxiosArgs = await LoginServerListTypeApiAxiosParamCreator(configuration).createLoginServerListType(loginServerListType, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes LoginServerListType
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteLoginServerListType(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await LoginServerListTypeApiAxiosParamCreator(configuration).deleteLoginServerListType(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets LoginServerListType
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLoginServerListType(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsLoginServerListType>>> {
            const localVarAxiosArgs = await LoginServerListTypeApiAxiosParamCreator(configuration).getLoginServerListType(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets LoginServerListTypes in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLoginServerListTypesBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsLoginServerListType>>> {
            const localVarAxiosArgs = await LoginServerListTypeApiAxiosParamCreator(configuration).getLoginServerListTypesBulk(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists LoginServerListTypes
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listLoginServerListTypes(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsLoginServerListType>>> {
            const localVarAxiosArgs = await LoginServerListTypeApiAxiosParamCreator(configuration).listLoginServerListTypes(includes, where, whereOr, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates LoginServerListType
         * @param {number} id Id
         * @param {ModelsLoginServerListType} loginServerListType LoginServerListType
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateLoginServerListType(id: number, loginServerListType: ModelsLoginServerListType, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsLoginServerListType>>> {
            const localVarAxiosArgs = await LoginServerListTypeApiAxiosParamCreator(configuration).updateLoginServerListType(id, loginServerListType, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * LoginServerListTypeApi - factory interface
 * @export
 */
export const LoginServerListTypeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates LoginServerListType
         * @param {ModelsLoginServerListType} loginServerListType LoginServerListType
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createLoginServerListType(loginServerListType: ModelsLoginServerListType, options?: any): AxiosPromise<Array<ModelsLoginServerListType>> {
            return LoginServerListTypeApiFp(configuration).createLoginServerListType(loginServerListType, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes LoginServerListType
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteLoginServerListType(id: number, options?: any): AxiosPromise<string> {
            return LoginServerListTypeApiFp(configuration).deleteLoginServerListType(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets LoginServerListType
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLoginServerListType(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsLoginServerListType>> {
            return LoginServerListTypeApiFp(configuration).getLoginServerListType(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets LoginServerListTypes in bulk
         * @param {CrudcontrollersBulkFetchByIdsGetRequest} body body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLoginServerListTypesBulk(body: CrudcontrollersBulkFetchByIdsGetRequest, options?: any): AxiosPromise<Array<ModelsLoginServerListType>> {
            return LoginServerListTypeApiFp(configuration).getLoginServerListTypesBulk(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists LoginServerListTypes
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listLoginServerListTypes(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsLoginServerListType>> {
            return LoginServerListTypeApiFp(configuration).listLoginServerListTypes(includes, where, whereOr, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates LoginServerListType
         * @param {number} id Id
         * @param {ModelsLoginServerListType} loginServerListType LoginServerListType
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLoginServerListType(id: number, loginServerListType: ModelsLoginServerListType, options?: any): AxiosPromise<Array<ModelsLoginServerListType>> {
            return LoginServerListTypeApiFp(configuration).updateLoginServerListType(id, loginServerListType, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createLoginServerListType operation in LoginServerListTypeApi.
 * @export
 * @interface LoginServerListTypeApiCreateLoginServerListTypeRequest
 */
export interface LoginServerListTypeApiCreateLoginServerListTypeRequest {
    /**
     * LoginServerListType
     * @type {ModelsLoginServerListType}
     * @memberof LoginServerListTypeApiCreateLoginServerListType
     */
    readonly loginServerListType: ModelsLoginServerListType
}

/**
 * Request parameters for deleteLoginServerListType operation in LoginServerListTypeApi.
 * @export
 * @interface LoginServerListTypeApiDeleteLoginServerListTypeRequest
 */
export interface LoginServerListTypeApiDeleteLoginServerListTypeRequest {
    /**
     * Id
     * @type {number}
     * @memberof LoginServerListTypeApiDeleteLoginServerListType
     */
    readonly id: number
}

/**
 * Request parameters for getLoginServerListType operation in LoginServerListTypeApi.
 * @export
 * @interface LoginServerListTypeApiGetLoginServerListTypeRequest
 */
export interface LoginServerListTypeApiGetLoginServerListTypeRequest {
    /**
     * Id
     * @type {number}
     * @memberof LoginServerListTypeApiGetLoginServerListType
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof LoginServerListTypeApiGetLoginServerListType
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof LoginServerListTypeApiGetLoginServerListType
     */
    readonly select?: string
}

/**
 * Request parameters for getLoginServerListTypesBulk operation in LoginServerListTypeApi.
 * @export
 * @interface LoginServerListTypeApiGetLoginServerListTypesBulkRequest
 */
export interface LoginServerListTypeApiGetLoginServerListTypesBulkRequest {
    /**
     * body
     * @type {CrudcontrollersBulkFetchByIdsGetRequest}
     * @memberof LoginServerListTypeApiGetLoginServerListTypesBulk
     */
    readonly body: CrudcontrollersBulkFetchByIdsGetRequest
}

/**
 * Request parameters for listLoginServerListTypes operation in LoginServerListTypeApi.
 * @export
 * @interface LoginServerListTypeApiListLoginServerListTypesRequest
 */
export interface LoginServerListTypeApiListLoginServerListTypesRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof LoginServerListTypeApiListLoginServerListTypes
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof LoginServerListTypeApiListLoginServerListTypes
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof LoginServerListTypeApiListLoginServerListTypes
     */
    readonly whereOr?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof LoginServerListTypeApiListLoginServerListTypes
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof LoginServerListTypeApiListLoginServerListTypes
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof LoginServerListTypeApiListLoginServerListTypes
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof LoginServerListTypeApiListLoginServerListTypes
     */
    readonly select?: string
}

/**
 * Request parameters for updateLoginServerListType operation in LoginServerListTypeApi.
 * @export
 * @interface LoginServerListTypeApiUpdateLoginServerListTypeRequest
 */
export interface LoginServerListTypeApiUpdateLoginServerListTypeRequest {
    /**
     * Id
     * @type {number}
     * @memberof LoginServerListTypeApiUpdateLoginServerListType
     */
    readonly id: number

    /**
     * LoginServerListType
     * @type {ModelsLoginServerListType}
     * @memberof LoginServerListTypeApiUpdateLoginServerListType
     */
    readonly loginServerListType: ModelsLoginServerListType
}

/**
 * LoginServerListTypeApi - object-oriented interface
 * @export
 * @class LoginServerListTypeApi
 * @extends {BaseAPI}
 */
export class LoginServerListTypeApi extends BaseAPI {
    /**
     * 
     * @summary Creates LoginServerListType
     * @param {LoginServerListTypeApiCreateLoginServerListTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginServerListTypeApi
     */
    public createLoginServerListType(requestParameters: LoginServerListTypeApiCreateLoginServerListTypeRequest, options?: any) {
        return LoginServerListTypeApiFp(this.configuration).createLoginServerListType(requestParameters.loginServerListType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes LoginServerListType
     * @param {LoginServerListTypeApiDeleteLoginServerListTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginServerListTypeApi
     */
    public deleteLoginServerListType(requestParameters: LoginServerListTypeApiDeleteLoginServerListTypeRequest, options?: any) {
        return LoginServerListTypeApiFp(this.configuration).deleteLoginServerListType(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets LoginServerListType
     * @param {LoginServerListTypeApiGetLoginServerListTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginServerListTypeApi
     */
    public getLoginServerListType(requestParameters: LoginServerListTypeApiGetLoginServerListTypeRequest, options?: any) {
        return LoginServerListTypeApiFp(this.configuration).getLoginServerListType(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets LoginServerListTypes in bulk
     * @param {LoginServerListTypeApiGetLoginServerListTypesBulkRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginServerListTypeApi
     */
    public getLoginServerListTypesBulk(requestParameters: LoginServerListTypeApiGetLoginServerListTypesBulkRequest, options?: any) {
        return LoginServerListTypeApiFp(this.configuration).getLoginServerListTypesBulk(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists LoginServerListTypes
     * @param {LoginServerListTypeApiListLoginServerListTypesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginServerListTypeApi
     */
    public listLoginServerListTypes(requestParameters: LoginServerListTypeApiListLoginServerListTypesRequest = {}, options?: any) {
        return LoginServerListTypeApiFp(this.configuration).listLoginServerListTypes(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates LoginServerListType
     * @param {LoginServerListTypeApiUpdateLoginServerListTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginServerListTypeApi
     */
    public updateLoginServerListType(requestParameters: LoginServerListTypeApiUpdateLoginServerListTypeRequest, options?: any) {
        return LoginServerListTypeApiFp(this.configuration).updateLoginServerListType(requestParameters.id, requestParameters.loginServerListType, options).then((request) => request(this.axios, this.basePath));
    }
}
