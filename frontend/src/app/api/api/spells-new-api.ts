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
import { ModelsSpellsNew } from '../models';
/**
 * SpellsNewApi - axios parameter creator
 * @export
 */
export const SpellsNewApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates SpellsNew
         * @param {ModelsSpellsNew} spellsNew SpellsNew
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSpellsNew: async (spellsNew: ModelsSpellsNew, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'spellsNew' is not null or undefined
            if (spellsNew === null || spellsNew === undefined) {
                throw new RequiredError('spellsNew','Required parameter spellsNew was null or undefined when calling createSpellsNew.');
            }
            const localVarPath = `/spells_new`;
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
            const nonString = typeof spellsNew !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(spellsNew !== undefined ? spellsNew : {})
                : (spellsNew || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes SpellsNew
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSpellsNew: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteSpellsNew.');
            }
            const localVarPath = `/spells_new/{id}`
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
         * @summary Gets SpellsNew
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;Aura&lt;br&gt;BlockedSpells&lt;br&gt;Damageshieldtypes&lt;br&gt;SpellBuckets&lt;br&gt;SpellGlobals
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpellsNew: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getSpellsNew.');
            }
            const localVarPath = `/spells_new/{id}`
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
         * @summary Lists SpellsNews
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;Aura&lt;br&gt;BlockedSpells&lt;br&gt;Damageshieldtypes&lt;br&gt;SpellBuckets&lt;br&gt;SpellGlobals
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSpellsNews: async (includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/spells_news`;
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
         * @summary Updates SpellsNew
         * @param {number} id Id
         * @param {ModelsSpellsNew} spellsNew SpellsNew
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSpellsNew: async (id: number, spellsNew: ModelsSpellsNew, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateSpellsNew.');
            }
            // verify required parameter 'spellsNew' is not null or undefined
            if (spellsNew === null || spellsNew === undefined) {
                throw new RequiredError('spellsNew','Required parameter spellsNew was null or undefined when calling updateSpellsNew.');
            }
            const localVarPath = `/spells_new/{id}`
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
            const nonString = typeof spellsNew !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(spellsNew !== undefined ? spellsNew : {})
                : (spellsNew || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SpellsNewApi - functional programming interface
 * @export
 */
export const SpellsNewApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates SpellsNew
         * @param {ModelsSpellsNew} spellsNew SpellsNew
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSpellsNew(spellsNew: ModelsSpellsNew, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsSpellsNew>>> {
            const localVarAxiosArgs = await SpellsNewApiAxiosParamCreator(configuration).createSpellsNew(spellsNew, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes SpellsNew
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSpellsNew(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await SpellsNewApiAxiosParamCreator(configuration).deleteSpellsNew(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets SpellsNew
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;Aura&lt;br&gt;BlockedSpells&lt;br&gt;Damageshieldtypes&lt;br&gt;SpellBuckets&lt;br&gt;SpellGlobals
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSpellsNew(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsSpellsNew>>> {
            const localVarAxiosArgs = await SpellsNewApiAxiosParamCreator(configuration).getSpellsNew(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists SpellsNews
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;Aura&lt;br&gt;BlockedSpells&lt;br&gt;Damageshieldtypes&lt;br&gt;SpellBuckets&lt;br&gt;SpellGlobals
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listSpellsNews(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsSpellsNew>>> {
            const localVarAxiosArgs = await SpellsNewApiAxiosParamCreator(configuration).listSpellsNews(includes, where, whereOr, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates SpellsNew
         * @param {number} id Id
         * @param {ModelsSpellsNew} spellsNew SpellsNew
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSpellsNew(id: number, spellsNew: ModelsSpellsNew, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsSpellsNew>>> {
            const localVarAxiosArgs = await SpellsNewApiAxiosParamCreator(configuration).updateSpellsNew(id, spellsNew, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SpellsNewApi - factory interface
 * @export
 */
export const SpellsNewApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates SpellsNew
         * @param {ModelsSpellsNew} spellsNew SpellsNew
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSpellsNew(spellsNew: ModelsSpellsNew, options?: any): AxiosPromise<Array<ModelsSpellsNew>> {
            return SpellsNewApiFp(configuration).createSpellsNew(spellsNew, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes SpellsNew
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSpellsNew(id: number, options?: any): AxiosPromise<string> {
            return SpellsNewApiFp(configuration).deleteSpellsNew(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets SpellsNew
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;Aura&lt;br&gt;BlockedSpells&lt;br&gt;Damageshieldtypes&lt;br&gt;SpellBuckets&lt;br&gt;SpellGlobals
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpellsNew(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsSpellsNew>> {
            return SpellsNewApiFp(configuration).getSpellsNew(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists SpellsNews
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;Aura&lt;br&gt;BlockedSpells&lt;br&gt;Damageshieldtypes&lt;br&gt;SpellBuckets&lt;br&gt;SpellGlobals
         * @param {string} [where] Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [whereOr] Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
         * @param {string} [limit] Rows to limit in response (Default: 10,000)
         * @param {string} [orderBy] Order by [field]
         * @param {string} [orderDirection] Order by field direction
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSpellsNews(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsSpellsNew>> {
            return SpellsNewApiFp(configuration).listSpellsNews(includes, where, whereOr, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates SpellsNew
         * @param {number} id Id
         * @param {ModelsSpellsNew} spellsNew SpellsNew
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSpellsNew(id: number, spellsNew: ModelsSpellsNew, options?: any): AxiosPromise<Array<ModelsSpellsNew>> {
            return SpellsNewApiFp(configuration).updateSpellsNew(id, spellsNew, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createSpellsNew operation in SpellsNewApi.
 * @export
 * @interface SpellsNewApiCreateSpellsNewRequest
 */
export interface SpellsNewApiCreateSpellsNewRequest {
    /**
     * SpellsNew
     * @type {ModelsSpellsNew}
     * @memberof SpellsNewApiCreateSpellsNew
     */
    readonly spellsNew: ModelsSpellsNew
}

/**
 * Request parameters for deleteSpellsNew operation in SpellsNewApi.
 * @export
 * @interface SpellsNewApiDeleteSpellsNewRequest
 */
export interface SpellsNewApiDeleteSpellsNewRequest {
    /**
     * Id
     * @type {number}
     * @memberof SpellsNewApiDeleteSpellsNew
     */
    readonly id: number
}

/**
 * Request parameters for getSpellsNew operation in SpellsNewApi.
 * @export
 * @interface SpellsNewApiGetSpellsNewRequest
 */
export interface SpellsNewApiGetSpellsNewRequest {
    /**
     * Id
     * @type {number}
     * @memberof SpellsNewApiGetSpellsNew
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;Aura&lt;br&gt;BlockedSpells&lt;br&gt;Damageshieldtypes&lt;br&gt;SpellBuckets&lt;br&gt;SpellGlobals
     * @type {string}
     * @memberof SpellsNewApiGetSpellsNew
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof SpellsNewApiGetSpellsNew
     */
    readonly select?: string
}

/**
 * Request parameters for listSpellsNews operation in SpellsNewApi.
 * @export
 * @interface SpellsNewApiListSpellsNewsRequest
 */
export interface SpellsNewApiListSpellsNewsRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names &lt;h4&gt;Relationships&lt;/h4&gt;Aura&lt;br&gt;BlockedSpells&lt;br&gt;Damageshieldtypes&lt;br&gt;SpellBuckets&lt;br&gt;SpellGlobals
     * @type {string}
     * @memberof SpellsNewApiListSpellsNews
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof SpellsNewApiListSpellsNews
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof SpellsNewApiListSpellsNews
     */
    readonly whereOr?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof SpellsNewApiListSpellsNews
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof SpellsNewApiListSpellsNews
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof SpellsNewApiListSpellsNews
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof SpellsNewApiListSpellsNews
     */
    readonly select?: string
}

/**
 * Request parameters for updateSpellsNew operation in SpellsNewApi.
 * @export
 * @interface SpellsNewApiUpdateSpellsNewRequest
 */
export interface SpellsNewApiUpdateSpellsNewRequest {
    /**
     * Id
     * @type {number}
     * @memberof SpellsNewApiUpdateSpellsNew
     */
    readonly id: number

    /**
     * SpellsNew
     * @type {ModelsSpellsNew}
     * @memberof SpellsNewApiUpdateSpellsNew
     */
    readonly spellsNew: ModelsSpellsNew
}

/**
 * SpellsNewApi - object-oriented interface
 * @export
 * @class SpellsNewApi
 * @extends {BaseAPI}
 */
export class SpellsNewApi extends BaseAPI {
    /**
     * 
     * @summary Creates SpellsNew
     * @param {SpellsNewApiCreateSpellsNewRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpellsNewApi
     */
    public createSpellsNew(requestParameters: SpellsNewApiCreateSpellsNewRequest, options?: any) {
        return SpellsNewApiFp(this.configuration).createSpellsNew(requestParameters.spellsNew, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes SpellsNew
     * @param {SpellsNewApiDeleteSpellsNewRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpellsNewApi
     */
    public deleteSpellsNew(requestParameters: SpellsNewApiDeleteSpellsNewRequest, options?: any) {
        return SpellsNewApiFp(this.configuration).deleteSpellsNew(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets SpellsNew
     * @param {SpellsNewApiGetSpellsNewRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpellsNewApi
     */
    public getSpellsNew(requestParameters: SpellsNewApiGetSpellsNewRequest, options?: any) {
        return SpellsNewApiFp(this.configuration).getSpellsNew(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists SpellsNews
     * @param {SpellsNewApiListSpellsNewsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpellsNewApi
     */
    public listSpellsNews(requestParameters: SpellsNewApiListSpellsNewsRequest = {}, options?: any) {
        return SpellsNewApiFp(this.configuration).listSpellsNews(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates SpellsNew
     * @param {SpellsNewApiUpdateSpellsNewRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpellsNewApi
     */
    public updateSpellsNew(requestParameters: SpellsNewApiUpdateSpellsNewRequest, options?: any) {
        return SpellsNewApiFp(this.configuration).updateSpellsNew(requestParameters.id, requestParameters.spellsNew, options).then((request) => request(this.axios, this.basePath));
    }
}