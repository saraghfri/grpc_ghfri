/**
 * @fileoverview gRPC-Web generated client stub for ifno
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.ifno = require('./api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ifno.APIClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ifno.APIPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ifno.SendSMSRequest,
 *   !proto.ifno.SendSMSResponse>}
 */
const methodDescriptor_API_SendSMS = new grpc.web.MethodDescriptor(
  '/ifno.API/SendSMS',
  grpc.web.MethodType.UNARY,
  proto.ifno.SendSMSRequest,
  proto.ifno.SendSMSResponse,
  /**
   * @param {!proto.ifno.SendSMSRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ifno.SendSMSResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ifno.SendSMSRequest,
 *   !proto.ifno.SendSMSResponse>}
 */
const methodInfo_API_SendSMS = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ifno.SendSMSResponse,
  /**
   * @param {!proto.ifno.SendSMSRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ifno.SendSMSResponse.deserializeBinary
);


/**
 * @param {!proto.ifno.SendSMSRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ifno.SendSMSResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ifno.SendSMSResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ifno.APIClient.prototype.sendSMS =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ifno.API/SendSMS',
      request,
      metadata || {},
      methodDescriptor_API_SendSMS,
      callback);
};


/**
 * @param {!proto.ifno.SendSMSRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ifno.SendSMSResponse>}
 *     Promise that resolves to the response
 */
proto.ifno.APIPromiseClient.prototype.sendSMS =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ifno.API/SendSMS',
      request,
      metadata || {},
      methodDescriptor_API_SendSMS);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ifno.LoginRequest,
 *   !proto.ifno.LoginResponse>}
 */
const methodDescriptor_API_Login = new grpc.web.MethodDescriptor(
  '/ifno.API/Login',
  grpc.web.MethodType.UNARY,
  proto.ifno.LoginRequest,
  proto.ifno.LoginResponse,
  /**
   * @param {!proto.ifno.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ifno.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ifno.LoginRequest,
 *   !proto.ifno.LoginResponse>}
 */
const methodInfo_API_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ifno.LoginResponse,
  /**
   * @param {!proto.ifno.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ifno.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.ifno.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ifno.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ifno.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ifno.APIClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ifno.API/Login',
      request,
      metadata || {},
      methodDescriptor_API_Login,
      callback);
};


/**
 * @param {!proto.ifno.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ifno.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.ifno.APIPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ifno.API/Login',
      request,
      metadata || {},
      methodDescriptor_API_Login);
};


module.exports = proto.ifno;

