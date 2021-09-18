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
import { ModelsBugReport } from '../models';
/**
 * BugReportApi - axios parameter creator
 * @export
 */
export const BugReportApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates BugReport
         * @param {ModelsBugReport} bugReport BugReport
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBugReport: async (bugReport: ModelsBugReport, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'bugReport' is not null or undefined
            if (bugReport === null || bugReport === undefined) {
                throw new RequiredError('bugReport','Required parameter bugReport was null or undefined when calling createBugReport.');
            }
            const localVarPath = `/bug_report`;
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
            const nonString = typeof bugReport !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(bugReport !== undefined ? bugReport : {})
                : (bugReport || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes BugReport
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBugReport: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteBugReport.');
            }
            const localVarPath = `/bug_report/{id}`
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
         * @summary Gets BugReport
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBugReport: async (id: number, includes?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getBugReport.');
            }
            const localVarPath = `/bug_report/{id}`
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
         * @summary Lists BugReports
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
        listBugReports: async (includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/bug_reports`;
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
         * @summary Updates BugReport
         * @param {number} id Id
         * @param {ModelsBugReport} bugReport BugReport
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBugReport: async (id: number, bugReport: ModelsBugReport, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateBugReport.');
            }
            // verify required parameter 'bugReport' is not null or undefined
            if (bugReport === null || bugReport === undefined) {
                throw new RequiredError('bugReport','Required parameter bugReport was null or undefined when calling updateBugReport.');
            }
            const localVarPath = `/bug_report/{id}`
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
            const nonString = typeof bugReport !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(bugReport !== undefined ? bugReport : {})
                : (bugReport || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BugReportApi - functional programming interface
 * @export
 */
export const BugReportApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates BugReport
         * @param {ModelsBugReport} bugReport BugReport
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createBugReport(bugReport: ModelsBugReport, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsBugReport>>> {
            const localVarAxiosArgs = await BugReportApiAxiosParamCreator(configuration).createBugReport(bugReport, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes BugReport
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteBugReport(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await BugReportApiAxiosParamCreator(configuration).deleteBugReport(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets BugReport
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBugReport(id: number, includes?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsBugReport>>> {
            const localVarAxiosArgs = await BugReportApiAxiosParamCreator(configuration).getBugReport(id, includes, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Lists BugReports
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
        async listBugReports(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsBugReport>>> {
            const localVarAxiosArgs = await BugReportApiAxiosParamCreator(configuration).listBugReports(includes, where, whereOr, limit, orderBy, orderDirection, select, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates BugReport
         * @param {number} id Id
         * @param {ModelsBugReport} bugReport BugReport
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateBugReport(id: number, bugReport: ModelsBugReport, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsBugReport>>> {
            const localVarAxiosArgs = await BugReportApiAxiosParamCreator(configuration).updateBugReport(id, bugReport, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * BugReportApi - factory interface
 * @export
 */
export const BugReportApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Creates BugReport
         * @param {ModelsBugReport} bugReport BugReport
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBugReport(bugReport: ModelsBugReport, options?: any): AxiosPromise<Array<ModelsBugReport>> {
            return BugReportApiFp(configuration).createBugReport(bugReport, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes BugReport
         * @param {number} id Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBugReport(id: number, options?: any): AxiosPromise<string> {
            return BugReportApiFp(configuration).deleteBugReport(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets BugReport
         * @param {number} id Id
         * @param {string} [includes] Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
         * @param {string} [select] Column names [.] separated to fetch specific fields in response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBugReport(id: number, includes?: string, select?: string, options?: any): AxiosPromise<Array<ModelsBugReport>> {
            return BugReportApiFp(configuration).getBugReport(id, includes, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Lists BugReports
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
        listBugReports(includes?: string, where?: string, whereOr?: string, limit?: string, orderBy?: string, orderDirection?: string, select?: string, options?: any): AxiosPromise<Array<ModelsBugReport>> {
            return BugReportApiFp(configuration).listBugReports(includes, where, whereOr, limit, orderBy, orderDirection, select, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates BugReport
         * @param {number} id Id
         * @param {ModelsBugReport} bugReport BugReport
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBugReport(id: number, bugReport: ModelsBugReport, options?: any): AxiosPromise<Array<ModelsBugReport>> {
            return BugReportApiFp(configuration).updateBugReport(id, bugReport, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createBugReport operation in BugReportApi.
 * @export
 * @interface BugReportApiCreateBugReportRequest
 */
export interface BugReportApiCreateBugReportRequest {
    /**
     * BugReport
     * @type {ModelsBugReport}
     * @memberof BugReportApiCreateBugReport
     */
    readonly bugReport: ModelsBugReport
}

/**
 * Request parameters for deleteBugReport operation in BugReportApi.
 * @export
 * @interface BugReportApiDeleteBugReportRequest
 */
export interface BugReportApiDeleteBugReportRequest {
    /**
     * Id
     * @type {number}
     * @memberof BugReportApiDeleteBugReport
     */
    readonly id: number
}

/**
 * Request parameters for getBugReport operation in BugReportApi.
 * @export
 * @interface BugReportApiGetBugReportRequest
 */
export interface BugReportApiGetBugReportRequest {
    /**
     * Id
     * @type {number}
     * @memberof BugReportApiGetBugReport
     */
    readonly id: number

    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof BugReportApiGetBugReport
     */
    readonly includes?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof BugReportApiGetBugReport
     */
    readonly select?: string
}

/**
 * Request parameters for listBugReports operation in BugReportApi.
 * @export
 * @interface BugReportApiListBugReportsRequest
 */
export interface BugReportApiListBugReportsRequest {
    /**
     * Relationships [all] for all [number] for depth of relationships to load or [.] separated relationship names 
     * @type {string}
     * @memberof BugReportApiListBugReports
     */
    readonly includes?: string

    /**
     * Filter on specific fields. Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof BugReportApiListBugReports
     */
    readonly where?: string

    /**
     * Filter on specific fields (Chained ors). Multiple conditions [.] separated Example: col_like_value.col2__val2
     * @type {string}
     * @memberof BugReportApiListBugReports
     */
    readonly whereOr?: string

    /**
     * Rows to limit in response (Default: 10,000)
     * @type {string}
     * @memberof BugReportApiListBugReports
     */
    readonly limit?: string

    /**
     * Order by [field]
     * @type {string}
     * @memberof BugReportApiListBugReports
     */
    readonly orderBy?: string

    /**
     * Order by field direction
     * @type {string}
     * @memberof BugReportApiListBugReports
     */
    readonly orderDirection?: string

    /**
     * Column names [.] separated to fetch specific fields in response
     * @type {string}
     * @memberof BugReportApiListBugReports
     */
    readonly select?: string
}

/**
 * Request parameters for updateBugReport operation in BugReportApi.
 * @export
 * @interface BugReportApiUpdateBugReportRequest
 */
export interface BugReportApiUpdateBugReportRequest {
    /**
     * Id
     * @type {number}
     * @memberof BugReportApiUpdateBugReport
     */
    readonly id: number

    /**
     * BugReport
     * @type {ModelsBugReport}
     * @memberof BugReportApiUpdateBugReport
     */
    readonly bugReport: ModelsBugReport
}

/**
 * BugReportApi - object-oriented interface
 * @export
 * @class BugReportApi
 * @extends {BaseAPI}
 */
export class BugReportApi extends BaseAPI {
    /**
     * 
     * @summary Creates BugReport
     * @param {BugReportApiCreateBugReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BugReportApi
     */
    public createBugReport(requestParameters: BugReportApiCreateBugReportRequest, options?: any) {
        return BugReportApiFp(this.configuration).createBugReport(requestParameters.bugReport, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deletes BugReport
     * @param {BugReportApiDeleteBugReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BugReportApi
     */
    public deleteBugReport(requestParameters: BugReportApiDeleteBugReportRequest, options?: any) {
        return BugReportApiFp(this.configuration).deleteBugReport(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets BugReport
     * @param {BugReportApiGetBugReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BugReportApi
     */
    public getBugReport(requestParameters: BugReportApiGetBugReportRequest, options?: any) {
        return BugReportApiFp(this.configuration).getBugReport(requestParameters.id, requestParameters.includes, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Lists BugReports
     * @param {BugReportApiListBugReportsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BugReportApi
     */
    public listBugReports(requestParameters: BugReportApiListBugReportsRequest = {}, options?: any) {
        return BugReportApiFp(this.configuration).listBugReports(requestParameters.includes, requestParameters.where, requestParameters.whereOr, requestParameters.limit, requestParameters.orderBy, requestParameters.orderDirection, requestParameters.select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates BugReport
     * @param {BugReportApiUpdateBugReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BugReportApi
     */
    public updateBugReport(requestParameters: BugReportApiUpdateBugReportRequest, options?: any) {
        return BugReportApiFp(this.configuration).updateBugReport(requestParameters.id, requestParameters.bugReport, options).then((request) => request(this.axios, this.basePath));
    }
}