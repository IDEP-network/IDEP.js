// source: idep/record/record.proto
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

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.idep.record.Content', null, global);
goog.exportSymbol('proto.idep.record.Record', null, global);
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
proto.idep.record.Content = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.idep.record.Content, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.idep.record.Content.displayName = 'proto.idep.record.Content';
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
proto.idep.record.Record = function(opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.idep.record.Record.repeatedFields_,
    null
  );
};
goog.inherits(proto.idep.record.Record, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.idep.record.Record.displayName = 'proto.idep.record.Record';
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
  proto.idep.record.Content.prototype.toObject = function(opt_includeInstance) {
    return proto.idep.record.Content.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.idep.record.Content} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.idep.record.Content.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        digest: jspb.Message.getFieldWithDefault(msg, 1, ''),
        digestAlgo: jspb.Message.getFieldWithDefault(msg, 2, ''),
        uri: jspb.Message.getFieldWithDefault(msg, 3, ''),
        meta: jspb.Message.getFieldWithDefault(msg, 4, ''),
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
 * @return {!proto.idep.record.Content}
 */
proto.idep.record.Content.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.idep.record.Content();
  return proto.idep.record.Content.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.idep.record.Content} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.idep.record.Content}
 */
proto.idep.record.Content.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setDigest(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setDigestAlgo(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setUri(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readString());
        msg.setMeta(value);
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
proto.idep.record.Content.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.idep.record.Content.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.idep.record.Content} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.idep.record.Content.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDigest();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getDigestAlgo();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getMeta();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
};

/**
 * optional string digest = 1;
 * @return {string}
 */
proto.idep.record.Content.prototype.getDigest = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.idep.record.Content} returns this
 */
proto.idep.record.Content.prototype.setDigest = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string digest_algo = 2;
 * @return {string}
 */
proto.idep.record.Content.prototype.getDigestAlgo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.idep.record.Content} returns this
 */
proto.idep.record.Content.prototype.setDigestAlgo = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string uri = 3;
 * @return {string}
 */
proto.idep.record.Content.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.idep.record.Content} returns this
 */
proto.idep.record.Content.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string meta = 4;
 * @return {string}
 */
proto.idep.record.Content.prototype.getMeta = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.idep.record.Content} returns this
 */
proto.idep.record.Content.prototype.setMeta = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.idep.record.Record.repeatedFields_ = [2];

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
  proto.idep.record.Record.prototype.toObject = function(opt_includeInstance) {
    return proto.idep.record.Record.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.idep.record.Record} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.idep.record.Record.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        txHash: jspb.Message.getFieldWithDefault(msg, 1, ''),
        contentsList: jspb.Message.toObjectList(
          msg.getContentsList(),
          proto.idep.record.Content.toObject,
          includeInstance
        ),
        creator: jspb.Message.getFieldWithDefault(msg, 3, ''),
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
 * @return {!proto.idep.record.Record}
 */
proto.idep.record.Record.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.idep.record.Record();
  return proto.idep.record.Record.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.idep.record.Record} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.idep.record.Record}
 */
proto.idep.record.Record.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setTxHash(value);
        break;
      case 2:
        var value = new proto.idep.record.Content();
        reader.readMessage(
          value,
          proto.idep.record.Content.deserializeBinaryFromReader
        );
        msg.addContents(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setCreator(value);
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
proto.idep.record.Record.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.idep.record.Record.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.idep.record.Record} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.idep.record.Record.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxHash();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getContentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.idep.record.Content.serializeBinaryToWriter
    );
  }
  f = message.getCreator();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional string tx_hash = 1;
 * @return {string}
 */
proto.idep.record.Record.prototype.getTxHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.idep.record.Record} returns this
 */
proto.idep.record.Record.prototype.setTxHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * repeated Content contents = 2;
 * @return {!Array<!proto.idep.record.Content>}
 */
proto.idep.record.Record.prototype.getContentsList = function() {
  return /** @type{!Array<!proto.idep.record.Content>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.idep.record.Content,
    2
  ));
};

/**
 * @param {!Array<!proto.idep.record.Content>} value
 * @return {!proto.idep.record.Record} returns this
 */
proto.idep.record.Record.prototype.setContentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.idep.record.Content=} opt_value
 * @param {number=} opt_index
 * @return {!proto.idep.record.Content}
 */
proto.idep.record.Record.prototype.addContents = function(
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.idep.record.Content,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.idep.record.Record} returns this
 */
proto.idep.record.Record.prototype.clearContentsList = function() {
  return this.setContentsList([]);
};

/**
 * optional string creator = 3;
 * @return {string}
 */
proto.idep.record.Record.prototype.getCreator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.idep.record.Record} returns this
 */
proto.idep.record.Record.prototype.setCreator = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

goog.object.extend(exports, proto.idep.record);