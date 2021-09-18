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
import { ModelsAaAbility } from '../models';
/**
 * AaAbilityApi - axios parameter creator
 * @export
 */
export const AaAbilityApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates AaAbility
         * @param {ModelsAaAbility} aaAbility AaAbility
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAaAbility: async (aaAbility: ModelsAaAbility, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'aaAbility' is not null or undefined
            if (aaAbility === null || aaAbility === undefined) {
                throw new RequiredError('aaAbility','Required parameter aaAbility was null or undefined when calling createAaAbility.');
            }
            const localVarPath = `/aa_ability`;
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
            const nonString = typeof aaAbility !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(aaAbility !== undefined ? aaAbility : {})
                : (aaAbility || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes AaAbility
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAaAbility: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteAaAbility.');
            }
            const localVarPath = `/aa_ability/{id}`
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
         * @summary Gets AaAbility
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAaAbility: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getAaAbility.');
            }
            const localVarPath = `/aa_ability/{id}`
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
         * @summary Lists AaAbilities
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
        listAaAbilities: async (includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/aa_abilities`;
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
         * @summary Updates AaAbility
         * @param {number} id Id
         * @param {ModelsAaAbility} aaAbility AaAbility
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAaAbility: async (id: number, aaAbility: ModelsAaAbility, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateAaAbility.');
            }
            // verify required parameter 'aaAbility' is not null or undefined
            if (aaAbility === null || aaAbility === undefined) {
                throw new RequiredError('aaAbility','Required parameter aaAbility was null or undefined when calling updateAaAbility.');
            }
            const localVarPath = `/aa_ability/{id}`
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
            const nonString = typeof aaAbility !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(aaAbility !== undefined ? aaAbility : {})
                : (aaAbility || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AaAbilityApi - functional programming interface
 * @export
 */
export const AaAbilityApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates AaAbility
         * @param {ModelsAaAbility} aaAbility AaAbility
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAaAbility(aaAbility: ModelsAaAbility, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAaAbility>>> {
            const localVarAxiosArgs = await AaAbilityApiAxiosParamCreator(configuration).createAaAbility(aaAbility, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes AaAbility
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAaAbility(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await AaAbilityApiAxiosParamCreator(configuration).deleteAaAbility(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets AaAbility
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAaAbility(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAaAbility>>> {
            const localVarAxiosArgs = await AaAbilityApiAxiosParamCreator(configuration).getAaAbility(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists AaAbilities
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
        async listAaAbilities(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAaAbility>>> {
            const localVarAxiosArgs = await AaAbilityApiAxiosParamCreator(configuration).listAaAbilities(includes, where, whereOr, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates AaAbility
         * @param {number} id Id
         * @param {ModelsAaAbility} aaAbility AaAbility
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAaAbility(id: number, aaAbility: ModelsAaAbility, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsAaAbility>>> {
            const localVarAxiosArgs = await AaAbilityApiAxiosParamCreator(configuration).updateAaAbility(id, aaAbility, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AaAbilityApi - factory interface
 * @export
 */
export const AaAbilityApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates AaAbility
         * @param {ModelsAaAbility} aaAbility AaAbility
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAaAbility(aaAbility: ModelsAaAbility, options?: any): AxiosPromise<Array<ModelsAaAbility>> {
            return AaAbilityApiFp(configuration).createAaAbility(aaAbility, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes AaAbility
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAaAbility(id: number, options?: any): AxiosPromise<string> {
            return AaAbilityApiFp(configuration).deleteAaAbility(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets AaAbility
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAaAbility(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsAaAbility>> {
            return AaAbilityApiFp(configuration).getAaAbility(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists AaAbilities
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
        listAaAbilities(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsAaAbility>> {
            return AaAbilityApiFp(configuration).listAaAbilities(includes, where, whereOr, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates AaAbility
         * @param {number} id Id
         * @param {ModelsAaAbility} aaAbility AaAbility
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAaAbility(id: number, aaAbility: ModelsAaAbility, options?: any): AxiosPromise<Array<ModelsAaAbility>> {
            return AaAbilityApiFp(configuration).updateAaAbility(id, aaAbility, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createAaAbility operation in AaAbilityApi.
 * @export
 * @interface AaAbilityApiCreateAaAbilityRequest
 */
export interface AaAbilityApiCreateAaAbilityRequest {
    /**
     * AaAbility
     * @type {ModelsAaAbility}
     * @memberof AaAbilityApiCreateAaAbility
     */
    readonly aaAbility: ModelsAaAbility
}

/**
 * Request parameters for deleteAaAbility operation in AaAbilityApi.
 * @export
 * @interface AaAbilityApiDeleteAaAbilityRequest
 */
export interface AaAbilityApiDeleteAaAbilityRequest {
    /**
     * Id
     * @type {number}
     * @memberof AaAbilityApiDeleteAaAbility
     */
    readonly id: number
}

/**
 * Request parameters for getAaAbility operation in AaAbilityApi.
 * @export
 * @interface AaAbilityApiGetAaAbilityRequest
 */
export interface AaAbilityApiGetAaAbilityRequest {
    /**
     * Id
     * @type {number}
     * @memberof AaAbilityApiGetAaAbility
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof AaAbilityApiGetAaAbility
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof AaAbilityApiGetAaAbility
     */
    readonly select?: string
}

/**
 * Request parameters for listAaAbilities operation in AaAbilityApi.
 * @export
 * @interface AaAbilityApiListAaAbilitiesRequest
 */
export interface AaAbilityApiListAaAbilitiesRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof AaAbilityApiListAaAbilities
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof AaAbilityApiListAaAbilities
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof AaAbilityApiListAaAbilities
     */
    readonly whereOr?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof AaAbilityApiListAaAbilities
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof AaAbilityApiListAaAbilities
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof AaAbilityApiListAaAbilities
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof AaAbilityApiListAaAbilities
     */
    readonly select?: string
}

/**
 * Request parameters for updateAaAbility operation in AaAbilityApi.
 * @export
 * @interface AaAbilityApiUpdateAaAbilityRequest
 */
export interface AaAbilityApiUpdateAaAbilityRequest {
    /**
     * Id
     * @type {number}
     * @memberof AaAbilityApiUpdateAaAbility
     */
    readonly id: number

    /**
     * AaAbility
     * @type {ModelsAaAbility}
     * @memberof AaAbilityApiUpdateAaAbility
     */
    readonly aaAbility: ModelsAaAbility
}

/**
 * AaAbilityApi - object-oriented interface
 * @export
 * @class AaAbilityApi
 * @extends {BaseAPI}
 */
export class AaAbilityApi extends BaseAPI {
    /**
     * 
     * @summary Creates AaAbility
     * @param {AaAbilityApiCreateAaAbilityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AaAbilityApi
     */
    public createAaAbility(requestParameters: AaAbilityApiCreateAaAbilityRequest, options?: any) {
        return AaAbilityApiFp(this.configuration).createAaAbility(requestParameters.aaAbility, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes AaAbility
     * @param {AaAbilityApiDeleteAaAbilityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AaAbilityApi
     */
    public deleteAaAbility(requestParameters: AaAbilityApiDeleteAaAbilityRequest, options?: any) {
        return AaAbilityApiFp(this.configuration).deleteAaAbility(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets AaAbility
     * @param {AaAbilityApiGetAaAbilityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AaAbilityApi
     */
    public getAaAbility(requestParameters: AaAbilityApiGetAaAbilityRequest, options?: any) {
        return AaAbilityApiFp(this.configuration).getAaAbility(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists AaAbilities
     * @param {AaAbilityApiListAaAbilitiesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AaAbilityApi
     */
    public listAaAbilities(requestParameters: AaAbilityApiListAaAbilitiesRequest = {}, options?: any) {
        return AaAbilityApiFp(this.configuration).listAaAbilities(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates AaAbility
     * @param {AaAbilityApiUpdateAaAbilityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AaAbilityApi
     */
    public updateAaAbility(requestParameters: AaAbilityApiUpdateAaAbilityRequest, options?: any) {
        return AaAbilityApiFp(this.configuration).updateAaAbility(requestParameters.id, requestParameters.aaAbility, options).then((request) => request(this.axios, this.basePath));
    }
}