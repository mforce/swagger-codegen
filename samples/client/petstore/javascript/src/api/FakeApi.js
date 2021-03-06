/**
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Client'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Client'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerPetstore) {
      root.SwaggerPetstore = {};
    }
    root.SwaggerPetstore.FakeApi = factory(root.SwaggerPetstore.ApiClient, root.SwaggerPetstore.Client);
  }
}(this, function(ApiClient, Client) {
  'use strict';

  /**
   * Fake service.
   * @module api/FakeApi
   * @version 1.0.0
   */

  /**
   * Constructs a new FakeApi. 
   * @alias module:api/FakeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the testClientModel operation.
     * @callback module:api/FakeApi~testClientModelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Client} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To test \&quot;client\&quot; model
     * @param {module:model/Client} body client model
     * @param {module:api/FakeApi~testClientModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Client}
     */
    this.testClientModel = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling testClientModel";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Client;

      return this.apiClient.callApi(
        '/fake', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testEndpointParameters operation.
     * @callback module:api/FakeApi~testEndpointParametersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     * Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
     * @param {Number} _number None
     * @param {Number} _double None
     * @param {String} patternWithoutDelimiter None
     * @param {String} _byte None
     * @param {Object} opts Optional parameters
     * @param {Number} opts.integer None
     * @param {Number} opts.int32 None
     * @param {Number} opts.int64 None
     * @param {Number} opts._float None
     * @param {String} opts._string None
     * @param {String} opts.binary None
     * @param {Date} opts._date None
     * @param {Date} opts.dateTime None
     * @param {String} opts.password None
     * @param {String} opts.callback None
     * @param {module:api/FakeApi~testEndpointParametersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.testEndpointParameters = function(_number, _double, patternWithoutDelimiter, _byte, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter '_number' is set
      if (_number == undefined || _number == null) {
        throw "Missing the required parameter '_number' when calling testEndpointParameters";
      }

      // verify the required parameter '_double' is set
      if (_double == undefined || _double == null) {
        throw "Missing the required parameter '_double' when calling testEndpointParameters";
      }

      // verify the required parameter 'patternWithoutDelimiter' is set
      if (patternWithoutDelimiter == undefined || patternWithoutDelimiter == null) {
        throw "Missing the required parameter 'patternWithoutDelimiter' when calling testEndpointParameters";
      }

      // verify the required parameter '_byte' is set
      if (_byte == undefined || _byte == null) {
        throw "Missing the required parameter '_byte' when calling testEndpointParameters";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'integer': opts['integer'],
        'int32': opts['int32'],
        'int64': opts['int64'],
        'number': _number,
        'float': opts['_float'],
        'double': _double,
        'string': opts['_string'],
        'pattern_without_delimiter': patternWithoutDelimiter,
        'byte': _byte,
        'binary': opts['binary'],
        'date': opts['_date'],
        'dateTime': opts['dateTime'],
        'password': opts['password'],
        'callback': opts['callback']
      };

      var authNames = ['http_basic_test'];
      var contentTypes = ['application/xml; charset=utf-8', 'application/json; charset=utf-8'];
      var accepts = ['application/xml; charset=utf-8', 'application/json; charset=utf-8'];
      var returnType = null;

      return this.apiClient.callApi(
        '/fake', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testEnumParameters operation.
     * @callback module:api/FakeApi~testEnumParametersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To test enum parameters
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.enumFormStringArray Form parameter enum test (string array)
     * @param {module:model/String} opts.enumFormString Form parameter enum test (string) (default to -efg)
     * @param {Array.<module:model/String>} opts.enumHeaderStringArray Header parameter enum test (string array)
     * @param {module:model/String} opts.enumHeaderString Header parameter enum test (string) (default to -efg)
     * @param {Array.<module:model/String>} opts.enumQueryStringArray Query parameter enum test (string array)
     * @param {module:model/String} opts.enumQueryString Query parameter enum test (string) (default to -efg)
     * @param {Number} opts.enumQueryInteger Query parameter enum test (double)
     * @param {Number} opts.enumQueryDouble Query parameter enum test (double)
     * @param {module:api/FakeApi~testEnumParametersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.testEnumParameters = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'enum_query_string_array': this.apiClient.buildCollectionParam(opts['enumQueryStringArray'], 'csv'),
        'enum_query_string': opts['enumQueryString'],
        'enum_query_integer': opts['enumQueryInteger']
      };
      var headerParams = {
        'enum_header_string_array': opts['enumHeaderStringArray'],
        'enum_header_string': opts['enumHeaderString']
      };
      var formParams = {
        'enum_form_string_array': this.apiClient.buildCollectionParam(opts['enumFormStringArray'], 'csv'),
        'enum_form_string': opts['enumFormString'],
        'enum_query_double': opts['enumQueryDouble']
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/fake', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
