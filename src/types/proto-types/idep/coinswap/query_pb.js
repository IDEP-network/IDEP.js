// source: idep/coinswap/query.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var cosmos_base_v1beta1_coin_pb = require('../../cosmos/base/v1beta1/coin_pb.js');
goog.object.extend(proto, cosmos_base_v1beta1_coin_pb);
var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.idep.coinswap.QueryLiquidityRequest', null, global);
goog.exportSymbol('proto.idep.coinswap.QueryLiquidityResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.idep.coinswap.QueryLiquidityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.idep.coinswap.QueryLiquidityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.idep.coinswap.QueryLiquidityRequest.displayName =
    'proto.idep.coinswap.QueryLiquidityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.idep.coinswap.QueryLiquidityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.idep.coinswap.QueryLiquidityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.idep.coinswap.QueryLiquidityResponse.displayName =
    'proto.idep.coinswap.QueryLiquidityResponse';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.idep.coinswap.QueryLiquidityRequest.prototype.toObject = function(
    opt_includeInstance
  ) {
    return proto.idep.coinswap.QueryLiquidityRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.idep.coinswap.QueryLiquidityRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.idep.coinswap.QueryLiquidityRequest.toObject = function(
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id: jspb.Message.getFieldWithDefault(msg, 1, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.idep.coinswap.QueryLiquidityRequest}
 */
proto.idep.coinswap.QueryLiquidityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.idep.coinswap.QueryLiquidityRequest();
  return proto.idep.coinswap.QueryLiquidityRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.idep.coinswap.QueryLiquidityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.idep.coinswap.QueryLiquidityRequest}
 */
proto.idep.coinswap.QueryLiquidityRequest.deserializeBinaryFromReader = function(
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setId(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.idep.coinswap.QueryLiquidityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.idep.coinswap.QueryLiquidityRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.idep.coinswap.QueryLiquidityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.idep.coinswap.QueryLiquidityRequest.serializeBinaryToWriter = function(
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.idep.coinswap.QueryLiquidityRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.idep.coinswap.QueryLiquidityRequest} returns this
 */
proto.idep.coinswap.QueryLiquidityRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.idep.coinswap.QueryLiquidityResponse.prototype.toObject = function(
    opt_includeInstance
  ) {
    return proto.idep.coinswap.QueryLiquidityResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.idep.coinswap.QueryLiquidityResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.idep.coinswap.QueryLiquidityResponse.toObject = function(
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        standard:
          (f = msg.getStandard()) &&
          cosmos_base_v1beta1_coin_pb.Coin.toObject(includeInstance, f),
        token:
          (f = msg.getToken()) &&
          cosmos_base_v1beta1_coin_pb.Coin.toObject(includeInstance, f),
        liquidity:
          (f = msg.getLiquidity()) &&
          cosmos_base_v1beta1_coin_pb.Coin.toObject(includeInstance, f),
        fee: jspb.Message.getFieldWithDefault(msg, 4, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.idep.coinswap.QueryLiquidityResponse}
 */
proto.idep.coinswap.QueryLiquidityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.idep.coinswap.QueryLiquidityResponse();
  return proto.idep.coinswap.QueryLiquidityResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.idep.coinswap.QueryLiquidityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.idep.coinswap.QueryLiquidityResponse}
 */
proto.idep.coinswap.QueryLiquidityResponse.deserializeBinaryFromReader = function(
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new cosmos_base_v1beta1_coin_pb.Coin();
        reader.readMessage(
          value,
          cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader
        );
        msg.setStandard(value);
        break;
      case 2:
        var value = new cosmos_base_v1beta1_coin_pb.Coin();
        reader.readMessage(
          value,
          cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader
        );
        msg.setToken(value);
        break;
      case 3:
        var value = new cosmos_base_v1beta1_coin_pb.Coin();
        reader.readMessage(
          value,
          cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader
        );
        msg.setLiquidity(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readString());
        msg.setFee(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.idep.coinswap.QueryLiquidityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.idep.coinswap.QueryLiquidityResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.idep.coinswap.QueryLiquidityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.idep.coinswap.QueryLiquidityResponse.serializeBinaryToWriter = function(
  message,
  writer
) {
  var f = undefined;
  f = message.getStandard();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getLiquidity();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getFee();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
};

/**
 * optional cosmos.base.v1beta1.Coin standard = 1;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.idep.coinswap.QueryLiquidityResponse.prototype.getStandard = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (jspb.Message.getWrapperField(
    this,
    cosmos_base_v1beta1_coin_pb.Coin,
    1
  ));
};

/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.idep.coinswap.QueryLiquidityResponse} returns this
 */
proto.idep.coinswap.QueryLiquidityResponse.prototype.setStandard = function(
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.idep.coinswap.QueryLiquidityResponse} returns this
 */
proto.idep.coinswap.QueryLiquidityResponse.prototype.clearStandard = function() {
  return this.setStandard(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.idep.coinswap.QueryLiquidityResponse.prototype.hasStandard = function() {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional cosmos.base.v1beta1.Coin token = 2;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.idep.coinswap.QueryLiquidityResponse.prototype.getToken = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (jspb.Message.getWrapperField(
    this,
    cosmos_base_v1beta1_coin_pb.Coin,
    2
  ));
};

/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.idep.coinswap.QueryLiquidityResponse} returns this
 */
proto.idep.coinswap.QueryLiquidityResponse.prototype.setToken = function(
  value
) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.idep.coinswap.QueryLiquidityResponse} returns this
 */
proto.idep.coinswap.QueryLiquidityResponse.prototype.clearToken = function() {
  return this.setToken(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.idep.coinswap.QueryLiquidityResponse.prototype.hasToken = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional cosmos.base.v1beta1.Coin liquidity = 3;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.idep.coinswap.QueryLiquidityResponse.prototype.getLiquidity = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (jspb.Message.getWrapperField(
    this,
    cosmos_base_v1beta1_coin_pb.Coin,
    3
  ));
};

/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.idep.coinswap.QueryLiquidityResponse} returns this
 */
proto.idep.coinswap.QueryLiquidityResponse.prototype.setLiquidity = function(
  value
) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.idep.coinswap.QueryLiquidityResponse} returns this
 */
proto.idep.coinswap.QueryLiquidityResponse.prototype.clearLiquidity = function() {
  return this.setLiquidity(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.idep.coinswap.QueryLiquidityResponse.prototype.hasLiquidity = function() {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional string fee = 4;
 * @return {string}
 */
proto.idep.coinswap.QueryLiquidityResponse.prototype.getFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.idep.coinswap.QueryLiquidityResponse} returns this
 */
proto.idep.coinswap.QueryLiquidityResponse.prototype.setFee = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

goog.object.extend(exports, proto.idep.coinswap);
