/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.CommandResDTO = (function() {

    /**
     * Properties of a CommandResDTO.
     * @exports ICommandResDTO
     * @interface ICommandResDTO
     * @property {number|null} [time] CommandResDTO time
     * @property {number|null} [action] CommandResDTO action
     * @property {number|null} [devKind] CommandResDTO devKind
     * @property {number|null} [packageNub] CommandResDTO packageNub
     * @property {number|null} [packageNow] CommandResDTO packageNow
     * @property {number|Long|null} [tid] CommandResDTO tid
     * @property {string|null} [data] CommandResDTO data
     * @property {Array.<string>|null} [esToSn] CommandResDTO esToSn
     * @property {Array.<number|Long>|null} [miToSn] CommandResDTO miToSn
     * @property {number|null} [systemTotalA] CommandResDTO systemTotalA
     * @property {number|null} [systemTotalB] CommandResDTO systemTotalB
     * @property {number|null} [systemTotalC] CommandResDTO systemTotalC
     * @property {Array.<number|Long>|null} [miSnItemA] CommandResDTO miSnItemA
     * @property {Array.<number|Long>|null} [miSnItemB] CommandResDTO miSnItemB
     * @property {Array.<number|Long>|null} [miSnItemC] CommandResDTO miSnItemC
     */

    /**
     * Constructs a new CommandResDTO.
     * @exports CommandResDTO
     * @classdesc Represents a CommandResDTO.
     * @implements ICommandResDTO
     * @constructor
     * @param {ICommandResDTO=} [properties] Properties to set
     */
    function CommandResDTO(properties) {
        this.esToSn = [];
        this.miToSn = [];
        this.miSnItemA = [];
        this.miSnItemB = [];
        this.miSnItemC = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CommandResDTO time.
     * @member {number} time
     * @memberof CommandResDTO
     * @instance
     */
    CommandResDTO.prototype.time = 0;

    /**
     * CommandResDTO action.
     * @member {number} action
     * @memberof CommandResDTO
     * @instance
     */
    CommandResDTO.prototype.action = 0;

    /**
     * CommandResDTO devKind.
     * @member {number} devKind
     * @memberof CommandResDTO
     * @instance
     */
    CommandResDTO.prototype.devKind = 0;

    /**
     * CommandResDTO packageNub.
     * @member {number} packageNub
     * @memberof CommandResDTO
     * @instance
     */
    CommandResDTO.prototype.packageNub = 0;

    /**
     * CommandResDTO packageNow.
     * @member {number} packageNow
     * @memberof CommandResDTO
     * @instance
     */
    CommandResDTO.prototype.packageNow = 0;

    /**
     * CommandResDTO tid.
     * @member {number|Long} tid
     * @memberof CommandResDTO
     * @instance
     */
    CommandResDTO.prototype.tid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CommandResDTO data.
     * @member {string} data
     * @memberof CommandResDTO
     * @instance
     */
    CommandResDTO.prototype.data = "";

    /**
     * CommandResDTO esToSn.
     * @member {Array.<string>} esToSn
     * @memberof CommandResDTO
     * @instance
     */
    CommandResDTO.prototype.esToSn = $util.emptyArray;

    /**
     * CommandResDTO miToSn.
     * @member {Array.<number|Long>} miToSn
     * @memberof CommandResDTO
     * @instance
     */
    CommandResDTO.prototype.miToSn = $util.emptyArray;

    /**
     * CommandResDTO systemTotalA.
     * @member {number} systemTotalA
     * @memberof CommandResDTO
     * @instance
     */
    CommandResDTO.prototype.systemTotalA = 0;

    /**
     * CommandResDTO systemTotalB.
     * @member {number} systemTotalB
     * @memberof CommandResDTO
     * @instance
     */
    CommandResDTO.prototype.systemTotalB = 0;

    /**
     * CommandResDTO systemTotalC.
     * @member {number} systemTotalC
     * @memberof CommandResDTO
     * @instance
     */
    CommandResDTO.prototype.systemTotalC = 0;

    /**
     * CommandResDTO miSnItemA.
     * @member {Array.<number|Long>} miSnItemA
     * @memberof CommandResDTO
     * @instance
     */
    CommandResDTO.prototype.miSnItemA = $util.emptyArray;

    /**
     * CommandResDTO miSnItemB.
     * @member {Array.<number|Long>} miSnItemB
     * @memberof CommandResDTO
     * @instance
     */
    CommandResDTO.prototype.miSnItemB = $util.emptyArray;

    /**
     * CommandResDTO miSnItemC.
     * @member {Array.<number|Long>} miSnItemC
     * @memberof CommandResDTO
     * @instance
     */
    CommandResDTO.prototype.miSnItemC = $util.emptyArray;

    /**
     * Creates a new CommandResDTO instance using the specified properties.
     * @function create
     * @memberof CommandResDTO
     * @static
     * @param {ICommandResDTO=} [properties] Properties to set
     * @returns {CommandResDTO} CommandResDTO instance
     */
    CommandResDTO.create = function create(properties) {
        return new CommandResDTO(properties);
    };

    /**
     * Encodes the specified CommandResDTO message. Does not implicitly {@link CommandResDTO.verify|verify} messages.
     * @function encode
     * @memberof CommandResDTO
     * @static
     * @param {ICommandResDTO} message CommandResDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommandResDTO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.time);
        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.action);
        if (message.devKind != null && Object.hasOwnProperty.call(message, "devKind"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.devKind);
        if (message.packageNub != null && Object.hasOwnProperty.call(message, "packageNub"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.packageNub);
        if (message.packageNow != null && Object.hasOwnProperty.call(message, "packageNow"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.packageNow);
        if (message.tid != null && Object.hasOwnProperty.call(message, "tid"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.tid);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.data);
        if (message.esToSn != null && message.esToSn.length)
            for (var i = 0; i < message.esToSn.length; ++i)
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.esToSn[i]);
        if (message.miToSn != null && message.miToSn.length) {
            writer.uint32(/* id 9, wireType 2 =*/74).fork();
            for (var i = 0; i < message.miToSn.length; ++i)
                writer.int64(message.miToSn[i]);
            writer.ldelim();
        }
        if (message.systemTotalA != null && Object.hasOwnProperty.call(message, "systemTotalA"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.systemTotalA);
        if (message.systemTotalB != null && Object.hasOwnProperty.call(message, "systemTotalB"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.systemTotalB);
        if (message.systemTotalC != null && Object.hasOwnProperty.call(message, "systemTotalC"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.systemTotalC);
        if (message.miSnItemA != null && message.miSnItemA.length) {
            writer.uint32(/* id 13, wireType 2 =*/106).fork();
            for (var i = 0; i < message.miSnItemA.length; ++i)
                writer.int64(message.miSnItemA[i]);
            writer.ldelim();
        }
        if (message.miSnItemB != null && message.miSnItemB.length) {
            writer.uint32(/* id 14, wireType 2 =*/114).fork();
            for (var i = 0; i < message.miSnItemB.length; ++i)
                writer.int64(message.miSnItemB[i]);
            writer.ldelim();
        }
        if (message.miSnItemC != null && message.miSnItemC.length) {
            writer.uint32(/* id 15, wireType 2 =*/122).fork();
            for (var i = 0; i < message.miSnItemC.length; ++i)
                writer.int64(message.miSnItemC[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified CommandResDTO message, length delimited. Does not implicitly {@link CommandResDTO.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommandResDTO
     * @static
     * @param {ICommandResDTO} message CommandResDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommandResDTO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CommandResDTO message from the specified reader or buffer.
     * @function decode
     * @memberof CommandResDTO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommandResDTO} CommandResDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommandResDTO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommandResDTO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.time = reader.int32();
                    break;
                }
            case 2: {
                    message.action = reader.int32();
                    break;
                }
            case 3: {
                    message.devKind = reader.int32();
                    break;
                }
            case 4: {
                    message.packageNub = reader.int32();
                    break;
                }
            case 5: {
                    message.packageNow = reader.int32();
                    break;
                }
            case 6: {
                    message.tid = reader.int64();
                    break;
                }
            case 7: {
                    message.data = reader.string();
                    break;
                }
            case 8: {
                    if (!(message.esToSn && message.esToSn.length))
                        message.esToSn = [];
                    message.esToSn.push(reader.string());
                    break;
                }
            case 9: {
                    if (!(message.miToSn && message.miToSn.length))
                        message.miToSn = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.miToSn.push(reader.int64());
                    } else
                        message.miToSn.push(reader.int64());
                    break;
                }
            case 10: {
                    message.systemTotalA = reader.int32();
                    break;
                }
            case 11: {
                    message.systemTotalB = reader.int32();
                    break;
                }
            case 12: {
                    message.systemTotalC = reader.int32();
                    break;
                }
            case 13: {
                    if (!(message.miSnItemA && message.miSnItemA.length))
                        message.miSnItemA = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.miSnItemA.push(reader.int64());
                    } else
                        message.miSnItemA.push(reader.int64());
                    break;
                }
            case 14: {
                    if (!(message.miSnItemB && message.miSnItemB.length))
                        message.miSnItemB = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.miSnItemB.push(reader.int64());
                    } else
                        message.miSnItemB.push(reader.int64());
                    break;
                }
            case 15: {
                    if (!(message.miSnItemC && message.miSnItemC.length))
                        message.miSnItemC = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.miSnItemC.push(reader.int64());
                    } else
                        message.miSnItemC.push(reader.int64());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CommandResDTO message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CommandResDTO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommandResDTO} CommandResDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommandResDTO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CommandResDTO message.
     * @function verify
     * @memberof CommandResDTO
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommandResDTO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time))
                return "time: integer expected";
        if (message.action != null && message.hasOwnProperty("action"))
            if (!$util.isInteger(message.action))
                return "action: integer expected";
        if (message.devKind != null && message.hasOwnProperty("devKind"))
            if (!$util.isInteger(message.devKind))
                return "devKind: integer expected";
        if (message.packageNub != null && message.hasOwnProperty("packageNub"))
            if (!$util.isInteger(message.packageNub))
                return "packageNub: integer expected";
        if (message.packageNow != null && message.hasOwnProperty("packageNow"))
            if (!$util.isInteger(message.packageNow))
                return "packageNow: integer expected";
        if (message.tid != null && message.hasOwnProperty("tid"))
            if (!$util.isInteger(message.tid) && !(message.tid && $util.isInteger(message.tid.low) && $util.isInteger(message.tid.high)))
                return "tid: integer|Long expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!$util.isString(message.data))
                return "data: string expected";
        if (message.esToSn != null && message.hasOwnProperty("esToSn")) {
            if (!Array.isArray(message.esToSn))
                return "esToSn: array expected";
            for (var i = 0; i < message.esToSn.length; ++i)
                if (!$util.isString(message.esToSn[i]))
                    return "esToSn: string[] expected";
        }
        if (message.miToSn != null && message.hasOwnProperty("miToSn")) {
            if (!Array.isArray(message.miToSn))
                return "miToSn: array expected";
            for (var i = 0; i < message.miToSn.length; ++i)
                if (!$util.isInteger(message.miToSn[i]) && !(message.miToSn[i] && $util.isInteger(message.miToSn[i].low) && $util.isInteger(message.miToSn[i].high)))
                    return "miToSn: integer|Long[] expected";
        }
        if (message.systemTotalA != null && message.hasOwnProperty("systemTotalA"))
            if (!$util.isInteger(message.systemTotalA))
                return "systemTotalA: integer expected";
        if (message.systemTotalB != null && message.hasOwnProperty("systemTotalB"))
            if (!$util.isInteger(message.systemTotalB))
                return "systemTotalB: integer expected";
        if (message.systemTotalC != null && message.hasOwnProperty("systemTotalC"))
            if (!$util.isInteger(message.systemTotalC))
                return "systemTotalC: integer expected";
        if (message.miSnItemA != null && message.hasOwnProperty("miSnItemA")) {
            if (!Array.isArray(message.miSnItemA))
                return "miSnItemA: array expected";
            for (var i = 0; i < message.miSnItemA.length; ++i)
                if (!$util.isInteger(message.miSnItemA[i]) && !(message.miSnItemA[i] && $util.isInteger(message.miSnItemA[i].low) && $util.isInteger(message.miSnItemA[i].high)))
                    return "miSnItemA: integer|Long[] expected";
        }
        if (message.miSnItemB != null && message.hasOwnProperty("miSnItemB")) {
            if (!Array.isArray(message.miSnItemB))
                return "miSnItemB: array expected";
            for (var i = 0; i < message.miSnItemB.length; ++i)
                if (!$util.isInteger(message.miSnItemB[i]) && !(message.miSnItemB[i] && $util.isInteger(message.miSnItemB[i].low) && $util.isInteger(message.miSnItemB[i].high)))
                    return "miSnItemB: integer|Long[] expected";
        }
        if (message.miSnItemC != null && message.hasOwnProperty("miSnItemC")) {
            if (!Array.isArray(message.miSnItemC))
                return "miSnItemC: array expected";
            for (var i = 0; i < message.miSnItemC.length; ++i)
                if (!$util.isInteger(message.miSnItemC[i]) && !(message.miSnItemC[i] && $util.isInteger(message.miSnItemC[i].low) && $util.isInteger(message.miSnItemC[i].high)))
                    return "miSnItemC: integer|Long[] expected";
        }
        return null;
    };

    /**
     * Creates a CommandResDTO message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CommandResDTO
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommandResDTO} CommandResDTO
     */
    CommandResDTO.fromObject = function fromObject(object) {
        if (object instanceof $root.CommandResDTO)
            return object;
        var message = new $root.CommandResDTO();
        if (object.time != null)
            message.time = object.time | 0;
        if (object.action != null)
            message.action = object.action | 0;
        if (object.devKind != null)
            message.devKind = object.devKind | 0;
        if (object.packageNub != null)
            message.packageNub = object.packageNub | 0;
        if (object.packageNow != null)
            message.packageNow = object.packageNow | 0;
        if (object.tid != null)
            if ($util.Long)
                (message.tid = $util.Long.fromValue(object.tid)).unsigned = false;
            else if (typeof object.tid === "string")
                message.tid = parseInt(object.tid, 10);
            else if (typeof object.tid === "number")
                message.tid = object.tid;
            else if (typeof object.tid === "object")
                message.tid = new $util.LongBits(object.tid.low >>> 0, object.tid.high >>> 0).toNumber();
        if (object.data != null)
            message.data = String(object.data);
        if (object.esToSn) {
            if (!Array.isArray(object.esToSn))
                throw TypeError(".CommandResDTO.esToSn: array expected");
            message.esToSn = [];
            for (var i = 0; i < object.esToSn.length; ++i)
                message.esToSn[i] = String(object.esToSn[i]);
        }
        if (object.miToSn) {
            if (!Array.isArray(object.miToSn))
                throw TypeError(".CommandResDTO.miToSn: array expected");
            message.miToSn = [];
            for (var i = 0; i < object.miToSn.length; ++i)
                if ($util.Long)
                    (message.miToSn[i] = $util.Long.fromValue(object.miToSn[i])).unsigned = false;
                else if (typeof object.miToSn[i] === "string")
                    message.miToSn[i] = parseInt(object.miToSn[i], 10);
                else if (typeof object.miToSn[i] === "number")
                    message.miToSn[i] = object.miToSn[i];
                else if (typeof object.miToSn[i] === "object")
                    message.miToSn[i] = new $util.LongBits(object.miToSn[i].low >>> 0, object.miToSn[i].high >>> 0).toNumber();
        }
        if (object.systemTotalA != null)
            message.systemTotalA = object.systemTotalA | 0;
        if (object.systemTotalB != null)
            message.systemTotalB = object.systemTotalB | 0;
        if (object.systemTotalC != null)
            message.systemTotalC = object.systemTotalC | 0;
        if (object.miSnItemA) {
            if (!Array.isArray(object.miSnItemA))
                throw TypeError(".CommandResDTO.miSnItemA: array expected");
            message.miSnItemA = [];
            for (var i = 0; i < object.miSnItemA.length; ++i)
                if ($util.Long)
                    (message.miSnItemA[i] = $util.Long.fromValue(object.miSnItemA[i])).unsigned = false;
                else if (typeof object.miSnItemA[i] === "string")
                    message.miSnItemA[i] = parseInt(object.miSnItemA[i], 10);
                else if (typeof object.miSnItemA[i] === "number")
                    message.miSnItemA[i] = object.miSnItemA[i];
                else if (typeof object.miSnItemA[i] === "object")
                    message.miSnItemA[i] = new $util.LongBits(object.miSnItemA[i].low >>> 0, object.miSnItemA[i].high >>> 0).toNumber();
        }
        if (object.miSnItemB) {
            if (!Array.isArray(object.miSnItemB))
                throw TypeError(".CommandResDTO.miSnItemB: array expected");
            message.miSnItemB = [];
            for (var i = 0; i < object.miSnItemB.length; ++i)
                if ($util.Long)
                    (message.miSnItemB[i] = $util.Long.fromValue(object.miSnItemB[i])).unsigned = false;
                else if (typeof object.miSnItemB[i] === "string")
                    message.miSnItemB[i] = parseInt(object.miSnItemB[i], 10);
                else if (typeof object.miSnItemB[i] === "number")
                    message.miSnItemB[i] = object.miSnItemB[i];
                else if (typeof object.miSnItemB[i] === "object")
                    message.miSnItemB[i] = new $util.LongBits(object.miSnItemB[i].low >>> 0, object.miSnItemB[i].high >>> 0).toNumber();
        }
        if (object.miSnItemC) {
            if (!Array.isArray(object.miSnItemC))
                throw TypeError(".CommandResDTO.miSnItemC: array expected");
            message.miSnItemC = [];
            for (var i = 0; i < object.miSnItemC.length; ++i)
                if ($util.Long)
                    (message.miSnItemC[i] = $util.Long.fromValue(object.miSnItemC[i])).unsigned = false;
                else if (typeof object.miSnItemC[i] === "string")
                    message.miSnItemC[i] = parseInt(object.miSnItemC[i], 10);
                else if (typeof object.miSnItemC[i] === "number")
                    message.miSnItemC[i] = object.miSnItemC[i];
                else if (typeof object.miSnItemC[i] === "object")
                    message.miSnItemC[i] = new $util.LongBits(object.miSnItemC[i].low >>> 0, object.miSnItemC[i].high >>> 0).toNumber();
        }
        return message;
    };

    /**
     * Creates a plain object from a CommandResDTO message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CommandResDTO
     * @static
     * @param {CommandResDTO} message CommandResDTO
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommandResDTO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.esToSn = [];
            object.miToSn = [];
            object.miSnItemA = [];
            object.miSnItemB = [];
            object.miSnItemC = [];
        }
        if (options.defaults) {
            object.time = 0;
            object.action = 0;
            object.devKind = 0;
            object.packageNub = 0;
            object.packageNow = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.tid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.tid = options.longs === String ? "0" : 0;
            object.data = "";
            object.systemTotalA = 0;
            object.systemTotalB = 0;
            object.systemTotalC = 0;
        }
        if (message.time != null && message.hasOwnProperty("time"))
            object.time = message.time;
        if (message.action != null && message.hasOwnProperty("action"))
            object.action = message.action;
        if (message.devKind != null && message.hasOwnProperty("devKind"))
            object.devKind = message.devKind;
        if (message.packageNub != null && message.hasOwnProperty("packageNub"))
            object.packageNub = message.packageNub;
        if (message.packageNow != null && message.hasOwnProperty("packageNow"))
            object.packageNow = message.packageNow;
        if (message.tid != null && message.hasOwnProperty("tid"))
            if (typeof message.tid === "number")
                object.tid = options.longs === String ? String(message.tid) : message.tid;
            else
                object.tid = options.longs === String ? $util.Long.prototype.toString.call(message.tid) : options.longs === Number ? new $util.LongBits(message.tid.low >>> 0, message.tid.high >>> 0).toNumber() : message.tid;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = message.data;
        if (message.esToSn && message.esToSn.length) {
            object.esToSn = [];
            for (var j = 0; j < message.esToSn.length; ++j)
                object.esToSn[j] = message.esToSn[j];
        }
        if (message.miToSn && message.miToSn.length) {
            object.miToSn = [];
            for (var j = 0; j < message.miToSn.length; ++j)
                if (typeof message.miToSn[j] === "number")
                    object.miToSn[j] = options.longs === String ? String(message.miToSn[j]) : message.miToSn[j];
                else
                    object.miToSn[j] = options.longs === String ? $util.Long.prototype.toString.call(message.miToSn[j]) : options.longs === Number ? new $util.LongBits(message.miToSn[j].low >>> 0, message.miToSn[j].high >>> 0).toNumber() : message.miToSn[j];
        }
        if (message.systemTotalA != null && message.hasOwnProperty("systemTotalA"))
            object.systemTotalA = message.systemTotalA;
        if (message.systemTotalB != null && message.hasOwnProperty("systemTotalB"))
            object.systemTotalB = message.systemTotalB;
        if (message.systemTotalC != null && message.hasOwnProperty("systemTotalC"))
            object.systemTotalC = message.systemTotalC;
        if (message.miSnItemA && message.miSnItemA.length) {
            object.miSnItemA = [];
            for (var j = 0; j < message.miSnItemA.length; ++j)
                if (typeof message.miSnItemA[j] === "number")
                    object.miSnItemA[j] = options.longs === String ? String(message.miSnItemA[j]) : message.miSnItemA[j];
                else
                    object.miSnItemA[j] = options.longs === String ? $util.Long.prototype.toString.call(message.miSnItemA[j]) : options.longs === Number ? new $util.LongBits(message.miSnItemA[j].low >>> 0, message.miSnItemA[j].high >>> 0).toNumber() : message.miSnItemA[j];
        }
        if (message.miSnItemB && message.miSnItemB.length) {
            object.miSnItemB = [];
            for (var j = 0; j < message.miSnItemB.length; ++j)
                if (typeof message.miSnItemB[j] === "number")
                    object.miSnItemB[j] = options.longs === String ? String(message.miSnItemB[j]) : message.miSnItemB[j];
                else
                    object.miSnItemB[j] = options.longs === String ? $util.Long.prototype.toString.call(message.miSnItemB[j]) : options.longs === Number ? new $util.LongBits(message.miSnItemB[j].low >>> 0, message.miSnItemB[j].high >>> 0).toNumber() : message.miSnItemB[j];
        }
        if (message.miSnItemC && message.miSnItemC.length) {
            object.miSnItemC = [];
            for (var j = 0; j < message.miSnItemC.length; ++j)
                if (typeof message.miSnItemC[j] === "number")
                    object.miSnItemC[j] = options.longs === String ? String(message.miSnItemC[j]) : message.miSnItemC[j];
                else
                    object.miSnItemC[j] = options.longs === String ? $util.Long.prototype.toString.call(message.miSnItemC[j]) : options.longs === Number ? new $util.LongBits(message.miSnItemC[j].low >>> 0, message.miSnItemC[j].high >>> 0).toNumber() : message.miSnItemC[j];
        }
        return object;
    };

    /**
     * Converts this CommandResDTO to JSON.
     * @function toJSON
     * @memberof CommandResDTO
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommandResDTO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CommandResDTO
     * @function getTypeUrl
     * @memberof CommandResDTO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CommandResDTO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CommandResDTO";
    };

    return CommandResDTO;
})();

$root.CommandReqDTO = (function() {

    /**
     * Properties of a CommandReqDTO.
     * @exports ICommandReqDTO
     * @interface ICommandReqDTO
     * @property {string|null} [dtuSn] CommandReqDTO dtuSn
     * @property {number|null} [time] CommandReqDTO time
     * @property {number|null} [action] CommandReqDTO action
     * @property {number|null} [packageNow] CommandReqDTO packageNow
     * @property {number|null} [errCode] CommandReqDTO errCode
     * @property {number|Long|null} [tid] CommandReqDTO tid
     */

    /**
     * Constructs a new CommandReqDTO.
     * @exports CommandReqDTO
     * @classdesc Represents a CommandReqDTO.
     * @implements ICommandReqDTO
     * @constructor
     * @param {ICommandReqDTO=} [properties] Properties to set
     */
    function CommandReqDTO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CommandReqDTO dtuSn.
     * @member {string} dtuSn
     * @memberof CommandReqDTO
     * @instance
     */
    CommandReqDTO.prototype.dtuSn = "";

    /**
     * CommandReqDTO time.
     * @member {number} time
     * @memberof CommandReqDTO
     * @instance
     */
    CommandReqDTO.prototype.time = 0;

    /**
     * CommandReqDTO action.
     * @member {number} action
     * @memberof CommandReqDTO
     * @instance
     */
    CommandReqDTO.prototype.action = 0;

    /**
     * CommandReqDTO packageNow.
     * @member {number} packageNow
     * @memberof CommandReqDTO
     * @instance
     */
    CommandReqDTO.prototype.packageNow = 0;

    /**
     * CommandReqDTO errCode.
     * @member {number} errCode
     * @memberof CommandReqDTO
     * @instance
     */
    CommandReqDTO.prototype.errCode = 0;

    /**
     * CommandReqDTO tid.
     * @member {number|Long} tid
     * @memberof CommandReqDTO
     * @instance
     */
    CommandReqDTO.prototype.tid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new CommandReqDTO instance using the specified properties.
     * @function create
     * @memberof CommandReqDTO
     * @static
     * @param {ICommandReqDTO=} [properties] Properties to set
     * @returns {CommandReqDTO} CommandReqDTO instance
     */
    CommandReqDTO.create = function create(properties) {
        return new CommandReqDTO(properties);
    };

    /**
     * Encodes the specified CommandReqDTO message. Does not implicitly {@link CommandReqDTO.verify|verify} messages.
     * @function encode
     * @memberof CommandReqDTO
     * @static
     * @param {ICommandReqDTO} message CommandReqDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommandReqDTO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.dtuSn != null && Object.hasOwnProperty.call(message, "dtuSn"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.dtuSn);
        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.time);
        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.action);
        if (message.packageNow != null && Object.hasOwnProperty.call(message, "packageNow"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.packageNow);
        if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.errCode);
        if (message.tid != null && Object.hasOwnProperty.call(message, "tid"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.tid);
        return writer;
    };

    /**
     * Encodes the specified CommandReqDTO message, length delimited. Does not implicitly {@link CommandReqDTO.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommandReqDTO
     * @static
     * @param {ICommandReqDTO} message CommandReqDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommandReqDTO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CommandReqDTO message from the specified reader or buffer.
     * @function decode
     * @memberof CommandReqDTO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommandReqDTO} CommandReqDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommandReqDTO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommandReqDTO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.dtuSn = reader.string();
                    break;
                }
            case 2: {
                    message.time = reader.int32();
                    break;
                }
            case 3: {
                    message.action = reader.int32();
                    break;
                }
            case 4: {
                    message.packageNow = reader.int32();
                    break;
                }
            case 5: {
                    message.errCode = reader.int32();
                    break;
                }
            case 6: {
                    message.tid = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CommandReqDTO message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CommandReqDTO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommandReqDTO} CommandReqDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommandReqDTO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CommandReqDTO message.
     * @function verify
     * @memberof CommandReqDTO
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommandReqDTO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.dtuSn != null && message.hasOwnProperty("dtuSn"))
            if (!$util.isString(message.dtuSn))
                return "dtuSn: string expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time))
                return "time: integer expected";
        if (message.action != null && message.hasOwnProperty("action"))
            if (!$util.isInteger(message.action))
                return "action: integer expected";
        if (message.packageNow != null && message.hasOwnProperty("packageNow"))
            if (!$util.isInteger(message.packageNow))
                return "packageNow: integer expected";
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            if (!$util.isInteger(message.errCode))
                return "errCode: integer expected";
        if (message.tid != null && message.hasOwnProperty("tid"))
            if (!$util.isInteger(message.tid) && !(message.tid && $util.isInteger(message.tid.low) && $util.isInteger(message.tid.high)))
                return "tid: integer|Long expected";
        return null;
    };

    /**
     * Creates a CommandReqDTO message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CommandReqDTO
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommandReqDTO} CommandReqDTO
     */
    CommandReqDTO.fromObject = function fromObject(object) {
        if (object instanceof $root.CommandReqDTO)
            return object;
        var message = new $root.CommandReqDTO();
        if (object.dtuSn != null)
            message.dtuSn = String(object.dtuSn);
        if (object.time != null)
            message.time = object.time | 0;
        if (object.action != null)
            message.action = object.action | 0;
        if (object.packageNow != null)
            message.packageNow = object.packageNow | 0;
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        if (object.tid != null)
            if ($util.Long)
                (message.tid = $util.Long.fromValue(object.tid)).unsigned = false;
            else if (typeof object.tid === "string")
                message.tid = parseInt(object.tid, 10);
            else if (typeof object.tid === "number")
                message.tid = object.tid;
            else if (typeof object.tid === "object")
                message.tid = new $util.LongBits(object.tid.low >>> 0, object.tid.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a CommandReqDTO message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CommandReqDTO
     * @static
     * @param {CommandReqDTO} message CommandReqDTO
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommandReqDTO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.dtuSn = "";
            object.time = 0;
            object.action = 0;
            object.packageNow = 0;
            object.errCode = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.tid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.tid = options.longs === String ? "0" : 0;
        }
        if (message.dtuSn != null && message.hasOwnProperty("dtuSn"))
            object.dtuSn = message.dtuSn;
        if (message.time != null && message.hasOwnProperty("time"))
            object.time = message.time;
        if (message.action != null && message.hasOwnProperty("action"))
            object.action = message.action;
        if (message.packageNow != null && message.hasOwnProperty("packageNow"))
            object.packageNow = message.packageNow;
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            object.errCode = message.errCode;
        if (message.tid != null && message.hasOwnProperty("tid"))
            if (typeof message.tid === "number")
                object.tid = options.longs === String ? String(message.tid) : message.tid;
            else
                object.tid = options.longs === String ? $util.Long.prototype.toString.call(message.tid) : options.longs === Number ? new $util.LongBits(message.tid.low >>> 0, message.tid.high >>> 0).toNumber() : message.tid;
        return object;
    };

    /**
     * Converts this CommandReqDTO to JSON.
     * @function toJSON
     * @memberof CommandReqDTO
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommandReqDTO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CommandReqDTO
     * @function getTypeUrl
     * @memberof CommandReqDTO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CommandReqDTO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CommandReqDTO";
    };

    return CommandReqDTO;
})();

$root.ESOperatingStatusMO = (function() {

    /**
     * Properties of a ESOperatingStatusMO.
     * @exports IESOperatingStatusMO
     * @interface IESOperatingStatusMO
     * @property {string|null} [esSn] ESOperatingStatusMO esSn
     * @property {number|null} [progressRate] ESOperatingStatusMO progressRate
     */

    /**
     * Constructs a new ESOperatingStatusMO.
     * @exports ESOperatingStatusMO
     * @classdesc Represents a ESOperatingStatusMO.
     * @implements IESOperatingStatusMO
     * @constructor
     * @param {IESOperatingStatusMO=} [properties] Properties to set
     */
    function ESOperatingStatusMO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ESOperatingStatusMO esSn.
     * @member {string} esSn
     * @memberof ESOperatingStatusMO
     * @instance
     */
    ESOperatingStatusMO.prototype.esSn = "";

    /**
     * ESOperatingStatusMO progressRate.
     * @member {number} progressRate
     * @memberof ESOperatingStatusMO
     * @instance
     */
    ESOperatingStatusMO.prototype.progressRate = 0;

    /**
     * Creates a new ESOperatingStatusMO instance using the specified properties.
     * @function create
     * @memberof ESOperatingStatusMO
     * @static
     * @param {IESOperatingStatusMO=} [properties] Properties to set
     * @returns {ESOperatingStatusMO} ESOperatingStatusMO instance
     */
    ESOperatingStatusMO.create = function create(properties) {
        return new ESOperatingStatusMO(properties);
    };

    /**
     * Encodes the specified ESOperatingStatusMO message. Does not implicitly {@link ESOperatingStatusMO.verify|verify} messages.
     * @function encode
     * @memberof ESOperatingStatusMO
     * @static
     * @param {IESOperatingStatusMO} message ESOperatingStatusMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ESOperatingStatusMO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.esSn != null && Object.hasOwnProperty.call(message, "esSn"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.esSn);
        if (message.progressRate != null && Object.hasOwnProperty.call(message, "progressRate"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.progressRate);
        return writer;
    };

    /**
     * Encodes the specified ESOperatingStatusMO message, length delimited. Does not implicitly {@link ESOperatingStatusMO.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ESOperatingStatusMO
     * @static
     * @param {IESOperatingStatusMO} message ESOperatingStatusMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ESOperatingStatusMO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ESOperatingStatusMO message from the specified reader or buffer.
     * @function decode
     * @memberof ESOperatingStatusMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ESOperatingStatusMO} ESOperatingStatusMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ESOperatingStatusMO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ESOperatingStatusMO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.esSn = reader.string();
                    break;
                }
            case 2: {
                    message.progressRate = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ESOperatingStatusMO message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ESOperatingStatusMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ESOperatingStatusMO} ESOperatingStatusMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ESOperatingStatusMO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ESOperatingStatusMO message.
     * @function verify
     * @memberof ESOperatingStatusMO
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ESOperatingStatusMO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.esSn != null && message.hasOwnProperty("esSn"))
            if (!$util.isString(message.esSn))
                return "esSn: string expected";
        if (message.progressRate != null && message.hasOwnProperty("progressRate"))
            if (!$util.isInteger(message.progressRate))
                return "progressRate: integer expected";
        return null;
    };

    /**
     * Creates a ESOperatingStatusMO message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ESOperatingStatusMO
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ESOperatingStatusMO} ESOperatingStatusMO
     */
    ESOperatingStatusMO.fromObject = function fromObject(object) {
        if (object instanceof $root.ESOperatingStatusMO)
            return object;
        var message = new $root.ESOperatingStatusMO();
        if (object.esSn != null)
            message.esSn = String(object.esSn);
        if (object.progressRate != null)
            message.progressRate = object.progressRate | 0;
        return message;
    };

    /**
     * Creates a plain object from a ESOperatingStatusMO message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ESOperatingStatusMO
     * @static
     * @param {ESOperatingStatusMO} message ESOperatingStatusMO
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ESOperatingStatusMO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.esSn = "";
            object.progressRate = 0;
        }
        if (message.esSn != null && message.hasOwnProperty("esSn"))
            object.esSn = message.esSn;
        if (message.progressRate != null && message.hasOwnProperty("progressRate"))
            object.progressRate = message.progressRate;
        return object;
    };

    /**
     * Converts this ESOperatingStatusMO to JSON.
     * @function toJSON
     * @memberof ESOperatingStatusMO
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ESOperatingStatusMO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ESOperatingStatusMO
     * @function getTypeUrl
     * @memberof ESOperatingStatusMO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ESOperatingStatusMO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ESOperatingStatusMO";
    };

    return ESOperatingStatusMO;
})();

$root.MIOperatingStatusMO = (function() {

    /**
     * Properties of a MIOperatingStatusMO.
     * @exports IMIOperatingStatusMO
     * @interface IMIOperatingStatusMO
     * @property {number|Long|null} [miSn] MIOperatingStatusMO miSn
     * @property {number|null} [progressRate] MIOperatingStatusMO progressRate
     */

    /**
     * Constructs a new MIOperatingStatusMO.
     * @exports MIOperatingStatusMO
     * @classdesc Represents a MIOperatingStatusMO.
     * @implements IMIOperatingStatusMO
     * @constructor
     * @param {IMIOperatingStatusMO=} [properties] Properties to set
     */
    function MIOperatingStatusMO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MIOperatingStatusMO miSn.
     * @member {number|Long} miSn
     * @memberof MIOperatingStatusMO
     * @instance
     */
    MIOperatingStatusMO.prototype.miSn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MIOperatingStatusMO progressRate.
     * @member {number} progressRate
     * @memberof MIOperatingStatusMO
     * @instance
     */
    MIOperatingStatusMO.prototype.progressRate = 0;

    /**
     * Creates a new MIOperatingStatusMO instance using the specified properties.
     * @function create
     * @memberof MIOperatingStatusMO
     * @static
     * @param {IMIOperatingStatusMO=} [properties] Properties to set
     * @returns {MIOperatingStatusMO} MIOperatingStatusMO instance
     */
    MIOperatingStatusMO.create = function create(properties) {
        return new MIOperatingStatusMO(properties);
    };

    /**
     * Encodes the specified MIOperatingStatusMO message. Does not implicitly {@link MIOperatingStatusMO.verify|verify} messages.
     * @function encode
     * @memberof MIOperatingStatusMO
     * @static
     * @param {IMIOperatingStatusMO} message MIOperatingStatusMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MIOperatingStatusMO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.miSn != null && Object.hasOwnProperty.call(message, "miSn"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.miSn);
        if (message.progressRate != null && Object.hasOwnProperty.call(message, "progressRate"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.progressRate);
        return writer;
    };

    /**
     * Encodes the specified MIOperatingStatusMO message, length delimited. Does not implicitly {@link MIOperatingStatusMO.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MIOperatingStatusMO
     * @static
     * @param {IMIOperatingStatusMO} message MIOperatingStatusMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MIOperatingStatusMO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MIOperatingStatusMO message from the specified reader or buffer.
     * @function decode
     * @memberof MIOperatingStatusMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MIOperatingStatusMO} MIOperatingStatusMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MIOperatingStatusMO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MIOperatingStatusMO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.miSn = reader.int64();
                    break;
                }
            case 2: {
                    message.progressRate = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MIOperatingStatusMO message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MIOperatingStatusMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MIOperatingStatusMO} MIOperatingStatusMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MIOperatingStatusMO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MIOperatingStatusMO message.
     * @function verify
     * @memberof MIOperatingStatusMO
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MIOperatingStatusMO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.miSn != null && message.hasOwnProperty("miSn"))
            if (!$util.isInteger(message.miSn) && !(message.miSn && $util.isInteger(message.miSn.low) && $util.isInteger(message.miSn.high)))
                return "miSn: integer|Long expected";
        if (message.progressRate != null && message.hasOwnProperty("progressRate"))
            if (!$util.isInteger(message.progressRate))
                return "progressRate: integer expected";
        return null;
    };

    /**
     * Creates a MIOperatingStatusMO message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MIOperatingStatusMO
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MIOperatingStatusMO} MIOperatingStatusMO
     */
    MIOperatingStatusMO.fromObject = function fromObject(object) {
        if (object instanceof $root.MIOperatingStatusMO)
            return object;
        var message = new $root.MIOperatingStatusMO();
        if (object.miSn != null)
            if ($util.Long)
                (message.miSn = $util.Long.fromValue(object.miSn)).unsigned = false;
            else if (typeof object.miSn === "string")
                message.miSn = parseInt(object.miSn, 10);
            else if (typeof object.miSn === "number")
                message.miSn = object.miSn;
            else if (typeof object.miSn === "object")
                message.miSn = new $util.LongBits(object.miSn.low >>> 0, object.miSn.high >>> 0).toNumber();
        if (object.progressRate != null)
            message.progressRate = object.progressRate | 0;
        return message;
    };

    /**
     * Creates a plain object from a MIOperatingStatusMO message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MIOperatingStatusMO
     * @static
     * @param {MIOperatingStatusMO} message MIOperatingStatusMO
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MIOperatingStatusMO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.miSn = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.miSn = options.longs === String ? "0" : 0;
            object.progressRate = 0;
        }
        if (message.miSn != null && message.hasOwnProperty("miSn"))
            if (typeof message.miSn === "number")
                object.miSn = options.longs === String ? String(message.miSn) : message.miSn;
            else
                object.miSn = options.longs === String ? $util.Long.prototype.toString.call(message.miSn) : options.longs === Number ? new $util.LongBits(message.miSn.low >>> 0, message.miSn.high >>> 0).toNumber() : message.miSn;
        if (message.progressRate != null && message.hasOwnProperty("progressRate"))
            object.progressRate = message.progressRate;
        return object;
    };

    /**
     * Converts this MIOperatingStatusMO to JSON.
     * @function toJSON
     * @memberof MIOperatingStatusMO
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MIOperatingStatusMO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MIOperatingStatusMO
     * @function getTypeUrl
     * @memberof MIOperatingStatusMO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MIOperatingStatusMO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MIOperatingStatusMO";
    };

    return MIOperatingStatusMO;
})();

$root.MIErrorStatusMO = (function() {

    /**
     * Properties of a MIErrorStatusMO.
     * @exports IMIErrorStatusMO
     * @interface IMIErrorStatusMO
     * @property {number|Long|null} [miSn] MIErrorStatusMO miSn
     * @property {number|Long|null} [errorCode] MIErrorStatusMO errorCode
     */

    /**
     * Constructs a new MIErrorStatusMO.
     * @exports MIErrorStatusMO
     * @classdesc Represents a MIErrorStatusMO.
     * @implements IMIErrorStatusMO
     * @constructor
     * @param {IMIErrorStatusMO=} [properties] Properties to set
     */
    function MIErrorStatusMO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MIErrorStatusMO miSn.
     * @member {number|Long} miSn
     * @memberof MIErrorStatusMO
     * @instance
     */
    MIErrorStatusMO.prototype.miSn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MIErrorStatusMO errorCode.
     * @member {number|Long} errorCode
     * @memberof MIErrorStatusMO
     * @instance
     */
    MIErrorStatusMO.prototype.errorCode = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new MIErrorStatusMO instance using the specified properties.
     * @function create
     * @memberof MIErrorStatusMO
     * @static
     * @param {IMIErrorStatusMO=} [properties] Properties to set
     * @returns {MIErrorStatusMO} MIErrorStatusMO instance
     */
    MIErrorStatusMO.create = function create(properties) {
        return new MIErrorStatusMO(properties);
    };

    /**
     * Encodes the specified MIErrorStatusMO message. Does not implicitly {@link MIErrorStatusMO.verify|verify} messages.
     * @function encode
     * @memberof MIErrorStatusMO
     * @static
     * @param {IMIErrorStatusMO} message MIErrorStatusMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MIErrorStatusMO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.miSn != null && Object.hasOwnProperty.call(message, "miSn"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.miSn);
        if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.errorCode);
        return writer;
    };

    /**
     * Encodes the specified MIErrorStatusMO message, length delimited. Does not implicitly {@link MIErrorStatusMO.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MIErrorStatusMO
     * @static
     * @param {IMIErrorStatusMO} message MIErrorStatusMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MIErrorStatusMO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MIErrorStatusMO message from the specified reader or buffer.
     * @function decode
     * @memberof MIErrorStatusMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MIErrorStatusMO} MIErrorStatusMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MIErrorStatusMO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MIErrorStatusMO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.miSn = reader.int64();
                    break;
                }
            case 2: {
                    message.errorCode = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MIErrorStatusMO message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MIErrorStatusMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MIErrorStatusMO} MIErrorStatusMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MIErrorStatusMO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MIErrorStatusMO message.
     * @function verify
     * @memberof MIErrorStatusMO
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MIErrorStatusMO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.miSn != null && message.hasOwnProperty("miSn"))
            if (!$util.isInteger(message.miSn) && !(message.miSn && $util.isInteger(message.miSn.low) && $util.isInteger(message.miSn.high)))
                return "miSn: integer|Long expected";
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            if (!$util.isInteger(message.errorCode) && !(message.errorCode && $util.isInteger(message.errorCode.low) && $util.isInteger(message.errorCode.high)))
                return "errorCode: integer|Long expected";
        return null;
    };

    /**
     * Creates a MIErrorStatusMO message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MIErrorStatusMO
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MIErrorStatusMO} MIErrorStatusMO
     */
    MIErrorStatusMO.fromObject = function fromObject(object) {
        if (object instanceof $root.MIErrorStatusMO)
            return object;
        var message = new $root.MIErrorStatusMO();
        if (object.miSn != null)
            if ($util.Long)
                (message.miSn = $util.Long.fromValue(object.miSn)).unsigned = false;
            else if (typeof object.miSn === "string")
                message.miSn = parseInt(object.miSn, 10);
            else if (typeof object.miSn === "number")
                message.miSn = object.miSn;
            else if (typeof object.miSn === "object")
                message.miSn = new $util.LongBits(object.miSn.low >>> 0, object.miSn.high >>> 0).toNumber();
        if (object.errorCode != null)
            if ($util.Long)
                (message.errorCode = $util.Long.fromValue(object.errorCode)).unsigned = false;
            else if (typeof object.errorCode === "string")
                message.errorCode = parseInt(object.errorCode, 10);
            else if (typeof object.errorCode === "number")
                message.errorCode = object.errorCode;
            else if (typeof object.errorCode === "object")
                message.errorCode = new $util.LongBits(object.errorCode.low >>> 0, object.errorCode.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a MIErrorStatusMO message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MIErrorStatusMO
     * @static
     * @param {MIErrorStatusMO} message MIErrorStatusMO
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MIErrorStatusMO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.miSn = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.miSn = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.errorCode = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.errorCode = options.longs === String ? "0" : 0;
        }
        if (message.miSn != null && message.hasOwnProperty("miSn"))
            if (typeof message.miSn === "number")
                object.miSn = options.longs === String ? String(message.miSn) : message.miSn;
            else
                object.miSn = options.longs === String ? $util.Long.prototype.toString.call(message.miSn) : options.longs === Number ? new $util.LongBits(message.miSn.low >>> 0, message.miSn.high >>> 0).toNumber() : message.miSn;
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            if (typeof message.errorCode === "number")
                object.errorCode = options.longs === String ? String(message.errorCode) : message.errorCode;
            else
                object.errorCode = options.longs === String ? $util.Long.prototype.toString.call(message.errorCode) : options.longs === Number ? new $util.LongBits(message.errorCode.low >>> 0, message.errorCode.high >>> 0).toNumber() : message.errorCode;
        return object;
    };

    /**
     * Converts this MIErrorStatusMO to JSON.
     * @function toJSON
     * @memberof MIErrorStatusMO
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MIErrorStatusMO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MIErrorStatusMO
     * @function getTypeUrl
     * @memberof MIErrorStatusMO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MIErrorStatusMO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MIErrorStatusMO";
    };

    return MIErrorStatusMO;
})();

$root.ESSucStatusMO = (function() {

    /**
     * Properties of a ESSucStatusMO.
     * @exports IESSucStatusMO
     * @interface IESSucStatusMO
     * @property {string|null} [esSn] ESSucStatusMO esSn
     */

    /**
     * Constructs a new ESSucStatusMO.
     * @exports ESSucStatusMO
     * @classdesc Represents a ESSucStatusMO.
     * @implements IESSucStatusMO
     * @constructor
     * @param {IESSucStatusMO=} [properties] Properties to set
     */
    function ESSucStatusMO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ESSucStatusMO esSn.
     * @member {string} esSn
     * @memberof ESSucStatusMO
     * @instance
     */
    ESSucStatusMO.prototype.esSn = "";

    /**
     * Creates a new ESSucStatusMO instance using the specified properties.
     * @function create
     * @memberof ESSucStatusMO
     * @static
     * @param {IESSucStatusMO=} [properties] Properties to set
     * @returns {ESSucStatusMO} ESSucStatusMO instance
     */
    ESSucStatusMO.create = function create(properties) {
        return new ESSucStatusMO(properties);
    };

    /**
     * Encodes the specified ESSucStatusMO message. Does not implicitly {@link ESSucStatusMO.verify|verify} messages.
     * @function encode
     * @memberof ESSucStatusMO
     * @static
     * @param {IESSucStatusMO} message ESSucStatusMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ESSucStatusMO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.esSn != null && Object.hasOwnProperty.call(message, "esSn"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.esSn);
        return writer;
    };

    /**
     * Encodes the specified ESSucStatusMO message, length delimited. Does not implicitly {@link ESSucStatusMO.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ESSucStatusMO
     * @static
     * @param {IESSucStatusMO} message ESSucStatusMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ESSucStatusMO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ESSucStatusMO message from the specified reader or buffer.
     * @function decode
     * @memberof ESSucStatusMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ESSucStatusMO} ESSucStatusMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ESSucStatusMO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ESSucStatusMO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.esSn = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ESSucStatusMO message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ESSucStatusMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ESSucStatusMO} ESSucStatusMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ESSucStatusMO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ESSucStatusMO message.
     * @function verify
     * @memberof ESSucStatusMO
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ESSucStatusMO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.esSn != null && message.hasOwnProperty("esSn"))
            if (!$util.isString(message.esSn))
                return "esSn: string expected";
        return null;
    };

    /**
     * Creates a ESSucStatusMO message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ESSucStatusMO
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ESSucStatusMO} ESSucStatusMO
     */
    ESSucStatusMO.fromObject = function fromObject(object) {
        if (object instanceof $root.ESSucStatusMO)
            return object;
        var message = new $root.ESSucStatusMO();
        if (object.esSn != null)
            message.esSn = String(object.esSn);
        return message;
    };

    /**
     * Creates a plain object from a ESSucStatusMO message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ESSucStatusMO
     * @static
     * @param {ESSucStatusMO} message ESSucStatusMO
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ESSucStatusMO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.esSn = "";
        if (message.esSn != null && message.hasOwnProperty("esSn"))
            object.esSn = message.esSn;
        return object;
    };

    /**
     * Converts this ESSucStatusMO to JSON.
     * @function toJSON
     * @memberof ESSucStatusMO
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ESSucStatusMO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ESSucStatusMO
     * @function getTypeUrl
     * @memberof ESSucStatusMO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ESSucStatusMO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ESSucStatusMO";
    };

    return ESSucStatusMO;
})();

$root.ESErrorStatusMO = (function() {

    /**
     * Properties of a ESErrorStatusMO.
     * @exports IESErrorStatusMO
     * @interface IESErrorStatusMO
     * @property {string|null} [esSn] ESErrorStatusMO esSn
     * @property {number|Long|null} [errorCode] ESErrorStatusMO errorCode
     */

    /**
     * Constructs a new ESErrorStatusMO.
     * @exports ESErrorStatusMO
     * @classdesc Represents a ESErrorStatusMO.
     * @implements IESErrorStatusMO
     * @constructor
     * @param {IESErrorStatusMO=} [properties] Properties to set
     */
    function ESErrorStatusMO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ESErrorStatusMO esSn.
     * @member {string} esSn
     * @memberof ESErrorStatusMO
     * @instance
     */
    ESErrorStatusMO.prototype.esSn = "";

    /**
     * ESErrorStatusMO errorCode.
     * @member {number|Long} errorCode
     * @memberof ESErrorStatusMO
     * @instance
     */
    ESErrorStatusMO.prototype.errorCode = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ESErrorStatusMO instance using the specified properties.
     * @function create
     * @memberof ESErrorStatusMO
     * @static
     * @param {IESErrorStatusMO=} [properties] Properties to set
     * @returns {ESErrorStatusMO} ESErrorStatusMO instance
     */
    ESErrorStatusMO.create = function create(properties) {
        return new ESErrorStatusMO(properties);
    };

    /**
     * Encodes the specified ESErrorStatusMO message. Does not implicitly {@link ESErrorStatusMO.verify|verify} messages.
     * @function encode
     * @memberof ESErrorStatusMO
     * @static
     * @param {IESErrorStatusMO} message ESErrorStatusMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ESErrorStatusMO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.esSn != null && Object.hasOwnProperty.call(message, "esSn"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.esSn);
        if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.errorCode);
        return writer;
    };

    /**
     * Encodes the specified ESErrorStatusMO message, length delimited. Does not implicitly {@link ESErrorStatusMO.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ESErrorStatusMO
     * @static
     * @param {IESErrorStatusMO} message ESErrorStatusMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ESErrorStatusMO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ESErrorStatusMO message from the specified reader or buffer.
     * @function decode
     * @memberof ESErrorStatusMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ESErrorStatusMO} ESErrorStatusMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ESErrorStatusMO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ESErrorStatusMO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.esSn = reader.string();
                    break;
                }
            case 2: {
                    message.errorCode = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ESErrorStatusMO message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ESErrorStatusMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ESErrorStatusMO} ESErrorStatusMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ESErrorStatusMO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ESErrorStatusMO message.
     * @function verify
     * @memberof ESErrorStatusMO
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ESErrorStatusMO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.esSn != null && message.hasOwnProperty("esSn"))
            if (!$util.isString(message.esSn))
                return "esSn: string expected";
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            if (!$util.isInteger(message.errorCode) && !(message.errorCode && $util.isInteger(message.errorCode.low) && $util.isInteger(message.errorCode.high)))
                return "errorCode: integer|Long expected";
        return null;
    };

    /**
     * Creates a ESErrorStatusMO message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ESErrorStatusMO
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ESErrorStatusMO} ESErrorStatusMO
     */
    ESErrorStatusMO.fromObject = function fromObject(object) {
        if (object instanceof $root.ESErrorStatusMO)
            return object;
        var message = new $root.ESErrorStatusMO();
        if (object.esSn != null)
            message.esSn = String(object.esSn);
        if (object.errorCode != null)
            if ($util.Long)
                (message.errorCode = $util.Long.fromValue(object.errorCode)).unsigned = false;
            else if (typeof object.errorCode === "string")
                message.errorCode = parseInt(object.errorCode, 10);
            else if (typeof object.errorCode === "number")
                message.errorCode = object.errorCode;
            else if (typeof object.errorCode === "object")
                message.errorCode = new $util.LongBits(object.errorCode.low >>> 0, object.errorCode.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a ESErrorStatusMO message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ESErrorStatusMO
     * @static
     * @param {ESErrorStatusMO} message ESErrorStatusMO
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ESErrorStatusMO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.esSn = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.errorCode = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.errorCode = options.longs === String ? "0" : 0;
        }
        if (message.esSn != null && message.hasOwnProperty("esSn"))
            object.esSn = message.esSn;
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            if (typeof message.errorCode === "number")
                object.errorCode = options.longs === String ? String(message.errorCode) : message.errorCode;
            else
                object.errorCode = options.longs === String ? $util.Long.prototype.toString.call(message.errorCode) : options.longs === Number ? new $util.LongBits(message.errorCode.low >>> 0, message.errorCode.high >>> 0).toNumber() : message.errorCode;
        return object;
    };

    /**
     * Converts this ESErrorStatusMO to JSON.
     * @function toJSON
     * @memberof ESErrorStatusMO
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ESErrorStatusMO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ESErrorStatusMO
     * @function getTypeUrl
     * @memberof ESErrorStatusMO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ESErrorStatusMO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ESErrorStatusMO";
    };

    return ESErrorStatusMO;
})();

$root.CommandStatusReqDTO = (function() {

    /**
     * Properties of a CommandStatusReqDTO.
     * @exports ICommandStatusReqDTO
     * @interface ICommandStatusReqDTO
     * @property {string|null} [dtuSn] CommandStatusReqDTO dtuSn
     * @property {number|null} [time] CommandStatusReqDTO time
     * @property {number|null} [action] CommandStatusReqDTO action
     * @property {number|null} [packageNub] CommandStatusReqDTO packageNub
     * @property {number|null} [packageNow] CommandStatusReqDTO packageNow
     * @property {number|Long|null} [tid] CommandStatusReqDTO tid
     * @property {Array.<string>|null} [esSnsSucs] CommandStatusReqDTO esSnsSucs
     * @property {Array.<number|Long>|null} [miSnsSucs] CommandStatusReqDTO miSnsSucs
     * @property {Array.<string>|null} [esSnsFailds] CommandStatusReqDTO esSnsFailds
     * @property {Array.<number|Long>|null} [miSnsFailds] CommandStatusReqDTO miSnsFailds
     * @property {Array.<IESOperatingStatusMO>|null} [esMOperatingStatus] CommandStatusReqDTO esMOperatingStatus
     * @property {Array.<IMIOperatingStatusMO>|null} [miMOperatingStatus] CommandStatusReqDTO miMOperatingStatus
     * @property {Array.<IMIErrorStatusMO>|null} [miMErrorStatus] CommandStatusReqDTO miMErrorStatus
     * @property {Array.<IESSucStatusMO>|null} [esMSucStatus] CommandStatusReqDTO esMSucStatus
     * @property {Array.<IESErrorStatusMO>|null} [esMErrorStatus] CommandStatusReqDTO esMErrorStatus
     */

    /**
     * Constructs a new CommandStatusReqDTO.
     * @exports CommandStatusReqDTO
     * @classdesc Represents a CommandStatusReqDTO.
     * @implements ICommandStatusReqDTO
     * @constructor
     * @param {ICommandStatusReqDTO=} [properties] Properties to set
     */
    function CommandStatusReqDTO(properties) {
        this.esSnsSucs = [];
        this.miSnsSucs = [];
        this.esSnsFailds = [];
        this.miSnsFailds = [];
        this.esMOperatingStatus = [];
        this.miMOperatingStatus = [];
        this.miMErrorStatus = [];
        this.esMSucStatus = [];
        this.esMErrorStatus = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CommandStatusReqDTO dtuSn.
     * @member {string} dtuSn
     * @memberof CommandStatusReqDTO
     * @instance
     */
    CommandStatusReqDTO.prototype.dtuSn = "";

    /**
     * CommandStatusReqDTO time.
     * @member {number} time
     * @memberof CommandStatusReqDTO
     * @instance
     */
    CommandStatusReqDTO.prototype.time = 0;

    /**
     * CommandStatusReqDTO action.
     * @member {number} action
     * @memberof CommandStatusReqDTO
     * @instance
     */
    CommandStatusReqDTO.prototype.action = 0;

    /**
     * CommandStatusReqDTO packageNub.
     * @member {number} packageNub
     * @memberof CommandStatusReqDTO
     * @instance
     */
    CommandStatusReqDTO.prototype.packageNub = 0;

    /**
     * CommandStatusReqDTO packageNow.
     * @member {number} packageNow
     * @memberof CommandStatusReqDTO
     * @instance
     */
    CommandStatusReqDTO.prototype.packageNow = 0;

    /**
     * CommandStatusReqDTO tid.
     * @member {number|Long} tid
     * @memberof CommandStatusReqDTO
     * @instance
     */
    CommandStatusReqDTO.prototype.tid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CommandStatusReqDTO esSnsSucs.
     * @member {Array.<string>} esSnsSucs
     * @memberof CommandStatusReqDTO
     * @instance
     */
    CommandStatusReqDTO.prototype.esSnsSucs = $util.emptyArray;

    /**
     * CommandStatusReqDTO miSnsSucs.
     * @member {Array.<number|Long>} miSnsSucs
     * @memberof CommandStatusReqDTO
     * @instance
     */
    CommandStatusReqDTO.prototype.miSnsSucs = $util.emptyArray;

    /**
     * CommandStatusReqDTO esSnsFailds.
     * @member {Array.<string>} esSnsFailds
     * @memberof CommandStatusReqDTO
     * @instance
     */
    CommandStatusReqDTO.prototype.esSnsFailds = $util.emptyArray;

    /**
     * CommandStatusReqDTO miSnsFailds.
     * @member {Array.<number|Long>} miSnsFailds
     * @memberof CommandStatusReqDTO
     * @instance
     */
    CommandStatusReqDTO.prototype.miSnsFailds = $util.emptyArray;

    /**
     * CommandStatusReqDTO esMOperatingStatus.
     * @member {Array.<IESOperatingStatusMO>} esMOperatingStatus
     * @memberof CommandStatusReqDTO
     * @instance
     */
    CommandStatusReqDTO.prototype.esMOperatingStatus = $util.emptyArray;

    /**
     * CommandStatusReqDTO miMOperatingStatus.
     * @member {Array.<IMIOperatingStatusMO>} miMOperatingStatus
     * @memberof CommandStatusReqDTO
     * @instance
     */
    CommandStatusReqDTO.prototype.miMOperatingStatus = $util.emptyArray;

    /**
     * CommandStatusReqDTO miMErrorStatus.
     * @member {Array.<IMIErrorStatusMO>} miMErrorStatus
     * @memberof CommandStatusReqDTO
     * @instance
     */
    CommandStatusReqDTO.prototype.miMErrorStatus = $util.emptyArray;

    /**
     * CommandStatusReqDTO esMSucStatus.
     * @member {Array.<IESSucStatusMO>} esMSucStatus
     * @memberof CommandStatusReqDTO
     * @instance
     */
    CommandStatusReqDTO.prototype.esMSucStatus = $util.emptyArray;

    /**
     * CommandStatusReqDTO esMErrorStatus.
     * @member {Array.<IESErrorStatusMO>} esMErrorStatus
     * @memberof CommandStatusReqDTO
     * @instance
     */
    CommandStatusReqDTO.prototype.esMErrorStatus = $util.emptyArray;

    /**
     * Creates a new CommandStatusReqDTO instance using the specified properties.
     * @function create
     * @memberof CommandStatusReqDTO
     * @static
     * @param {ICommandStatusReqDTO=} [properties] Properties to set
     * @returns {CommandStatusReqDTO} CommandStatusReqDTO instance
     */
    CommandStatusReqDTO.create = function create(properties) {
        return new CommandStatusReqDTO(properties);
    };

    /**
     * Encodes the specified CommandStatusReqDTO message. Does not implicitly {@link CommandStatusReqDTO.verify|verify} messages.
     * @function encode
     * @memberof CommandStatusReqDTO
     * @static
     * @param {ICommandStatusReqDTO} message CommandStatusReqDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommandStatusReqDTO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.dtuSn != null && Object.hasOwnProperty.call(message, "dtuSn"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.dtuSn);
        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.time);
        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.action);
        if (message.packageNub != null && Object.hasOwnProperty.call(message, "packageNub"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.packageNub);
        if (message.packageNow != null && Object.hasOwnProperty.call(message, "packageNow"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.packageNow);
        if (message.tid != null && Object.hasOwnProperty.call(message, "tid"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.tid);
        if (message.esSnsSucs != null && message.esSnsSucs.length)
            for (var i = 0; i < message.esSnsSucs.length; ++i)
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.esSnsSucs[i]);
        if (message.miSnsSucs != null && message.miSnsSucs.length) {
            writer.uint32(/* id 8, wireType 2 =*/66).fork();
            for (var i = 0; i < message.miSnsSucs.length; ++i)
                writer.int64(message.miSnsSucs[i]);
            writer.ldelim();
        }
        if (message.esSnsFailds != null && message.esSnsFailds.length)
            for (var i = 0; i < message.esSnsFailds.length; ++i)
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.esSnsFailds[i]);
        if (message.miSnsFailds != null && message.miSnsFailds.length) {
            writer.uint32(/* id 10, wireType 2 =*/82).fork();
            for (var i = 0; i < message.miSnsFailds.length; ++i)
                writer.int64(message.miSnsFailds[i]);
            writer.ldelim();
        }
        if (message.esMOperatingStatus != null && message.esMOperatingStatus.length)
            for (var i = 0; i < message.esMOperatingStatus.length; ++i)
                $root.ESOperatingStatusMO.encode(message.esMOperatingStatus[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.miMOperatingStatus != null && message.miMOperatingStatus.length)
            for (var i = 0; i < message.miMOperatingStatus.length; ++i)
                $root.MIOperatingStatusMO.encode(message.miMOperatingStatus[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.miMErrorStatus != null && message.miMErrorStatus.length)
            for (var i = 0; i < message.miMErrorStatus.length; ++i)
                $root.MIErrorStatusMO.encode(message.miMErrorStatus[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.esMSucStatus != null && message.esMSucStatus.length)
            for (var i = 0; i < message.esMSucStatus.length; ++i)
                $root.ESSucStatusMO.encode(message.esMSucStatus[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.esMErrorStatus != null && message.esMErrorStatus.length)
            for (var i = 0; i < message.esMErrorStatus.length; ++i)
                $root.ESErrorStatusMO.encode(message.esMErrorStatus[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CommandStatusReqDTO message, length delimited. Does not implicitly {@link CommandStatusReqDTO.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommandStatusReqDTO
     * @static
     * @param {ICommandStatusReqDTO} message CommandStatusReqDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommandStatusReqDTO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CommandStatusReqDTO message from the specified reader or buffer.
     * @function decode
     * @memberof CommandStatusReqDTO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommandStatusReqDTO} CommandStatusReqDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommandStatusReqDTO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommandStatusReqDTO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.dtuSn = reader.string();
                    break;
                }
            case 2: {
                    message.time = reader.int32();
                    break;
                }
            case 3: {
                    message.action = reader.int32();
                    break;
                }
            case 4: {
                    message.packageNub = reader.int32();
                    break;
                }
            case 5: {
                    message.packageNow = reader.int32();
                    break;
                }
            case 6: {
                    message.tid = reader.int64();
                    break;
                }
            case 7: {
                    if (!(message.esSnsSucs && message.esSnsSucs.length))
                        message.esSnsSucs = [];
                    message.esSnsSucs.push(reader.string());
                    break;
                }
            case 8: {
                    if (!(message.miSnsSucs && message.miSnsSucs.length))
                        message.miSnsSucs = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.miSnsSucs.push(reader.int64());
                    } else
                        message.miSnsSucs.push(reader.int64());
                    break;
                }
            case 9: {
                    if (!(message.esSnsFailds && message.esSnsFailds.length))
                        message.esSnsFailds = [];
                    message.esSnsFailds.push(reader.string());
                    break;
                }
            case 10: {
                    if (!(message.miSnsFailds && message.miSnsFailds.length))
                        message.miSnsFailds = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.miSnsFailds.push(reader.int64());
                    } else
                        message.miSnsFailds.push(reader.int64());
                    break;
                }
            case 11: {
                    if (!(message.esMOperatingStatus && message.esMOperatingStatus.length))
                        message.esMOperatingStatus = [];
                    message.esMOperatingStatus.push($root.ESOperatingStatusMO.decode(reader, reader.uint32()));
                    break;
                }
            case 12: {
                    if (!(message.miMOperatingStatus && message.miMOperatingStatus.length))
                        message.miMOperatingStatus = [];
                    message.miMOperatingStatus.push($root.MIOperatingStatusMO.decode(reader, reader.uint32()));
                    break;
                }
            case 13: {
                    if (!(message.miMErrorStatus && message.miMErrorStatus.length))
                        message.miMErrorStatus = [];
                    message.miMErrorStatus.push($root.MIErrorStatusMO.decode(reader, reader.uint32()));
                    break;
                }
            case 14: {
                    if (!(message.esMSucStatus && message.esMSucStatus.length))
                        message.esMSucStatus = [];
                    message.esMSucStatus.push($root.ESSucStatusMO.decode(reader, reader.uint32()));
                    break;
                }
            case 15: {
                    if (!(message.esMErrorStatus && message.esMErrorStatus.length))
                        message.esMErrorStatus = [];
                    message.esMErrorStatus.push($root.ESErrorStatusMO.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CommandStatusReqDTO message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CommandStatusReqDTO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommandStatusReqDTO} CommandStatusReqDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommandStatusReqDTO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CommandStatusReqDTO message.
     * @function verify
     * @memberof CommandStatusReqDTO
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommandStatusReqDTO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.dtuSn != null && message.hasOwnProperty("dtuSn"))
            if (!$util.isString(message.dtuSn))
                return "dtuSn: string expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time))
                return "time: integer expected";
        if (message.action != null && message.hasOwnProperty("action"))
            if (!$util.isInteger(message.action))
                return "action: integer expected";
        if (message.packageNub != null && message.hasOwnProperty("packageNub"))
            if (!$util.isInteger(message.packageNub))
                return "packageNub: integer expected";
        if (message.packageNow != null && message.hasOwnProperty("packageNow"))
            if (!$util.isInteger(message.packageNow))
                return "packageNow: integer expected";
        if (message.tid != null && message.hasOwnProperty("tid"))
            if (!$util.isInteger(message.tid) && !(message.tid && $util.isInteger(message.tid.low) && $util.isInteger(message.tid.high)))
                return "tid: integer|Long expected";
        if (message.esSnsSucs != null && message.hasOwnProperty("esSnsSucs")) {
            if (!Array.isArray(message.esSnsSucs))
                return "esSnsSucs: array expected";
            for (var i = 0; i < message.esSnsSucs.length; ++i)
                if (!$util.isString(message.esSnsSucs[i]))
                    return "esSnsSucs: string[] expected";
        }
        if (message.miSnsSucs != null && message.hasOwnProperty("miSnsSucs")) {
            if (!Array.isArray(message.miSnsSucs))
                return "miSnsSucs: array expected";
            for (var i = 0; i < message.miSnsSucs.length; ++i)
                if (!$util.isInteger(message.miSnsSucs[i]) && !(message.miSnsSucs[i] && $util.isInteger(message.miSnsSucs[i].low) && $util.isInteger(message.miSnsSucs[i].high)))
                    return "miSnsSucs: integer|Long[] expected";
        }
        if (message.esSnsFailds != null && message.hasOwnProperty("esSnsFailds")) {
            if (!Array.isArray(message.esSnsFailds))
                return "esSnsFailds: array expected";
            for (var i = 0; i < message.esSnsFailds.length; ++i)
                if (!$util.isString(message.esSnsFailds[i]))
                    return "esSnsFailds: string[] expected";
        }
        if (message.miSnsFailds != null && message.hasOwnProperty("miSnsFailds")) {
            if (!Array.isArray(message.miSnsFailds))
                return "miSnsFailds: array expected";
            for (var i = 0; i < message.miSnsFailds.length; ++i)
                if (!$util.isInteger(message.miSnsFailds[i]) && !(message.miSnsFailds[i] && $util.isInteger(message.miSnsFailds[i].low) && $util.isInteger(message.miSnsFailds[i].high)))
                    return "miSnsFailds: integer|Long[] expected";
        }
        if (message.esMOperatingStatus != null && message.hasOwnProperty("esMOperatingStatus")) {
            if (!Array.isArray(message.esMOperatingStatus))
                return "esMOperatingStatus: array expected";
            for (var i = 0; i < message.esMOperatingStatus.length; ++i) {
                var error = $root.ESOperatingStatusMO.verify(message.esMOperatingStatus[i]);
                if (error)
                    return "esMOperatingStatus." + error;
            }
        }
        if (message.miMOperatingStatus != null && message.hasOwnProperty("miMOperatingStatus")) {
            if (!Array.isArray(message.miMOperatingStatus))
                return "miMOperatingStatus: array expected";
            for (var i = 0; i < message.miMOperatingStatus.length; ++i) {
                var error = $root.MIOperatingStatusMO.verify(message.miMOperatingStatus[i]);
                if (error)
                    return "miMOperatingStatus." + error;
            }
        }
        if (message.miMErrorStatus != null && message.hasOwnProperty("miMErrorStatus")) {
            if (!Array.isArray(message.miMErrorStatus))
                return "miMErrorStatus: array expected";
            for (var i = 0; i < message.miMErrorStatus.length; ++i) {
                var error = $root.MIErrorStatusMO.verify(message.miMErrorStatus[i]);
                if (error)
                    return "miMErrorStatus." + error;
            }
        }
        if (message.esMSucStatus != null && message.hasOwnProperty("esMSucStatus")) {
            if (!Array.isArray(message.esMSucStatus))
                return "esMSucStatus: array expected";
            for (var i = 0; i < message.esMSucStatus.length; ++i) {
                var error = $root.ESSucStatusMO.verify(message.esMSucStatus[i]);
                if (error)
                    return "esMSucStatus." + error;
            }
        }
        if (message.esMErrorStatus != null && message.hasOwnProperty("esMErrorStatus")) {
            if (!Array.isArray(message.esMErrorStatus))
                return "esMErrorStatus: array expected";
            for (var i = 0; i < message.esMErrorStatus.length; ++i) {
                var error = $root.ESErrorStatusMO.verify(message.esMErrorStatus[i]);
                if (error)
                    return "esMErrorStatus." + error;
            }
        }
        return null;
    };

    /**
     * Creates a CommandStatusReqDTO message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CommandStatusReqDTO
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommandStatusReqDTO} CommandStatusReqDTO
     */
    CommandStatusReqDTO.fromObject = function fromObject(object) {
        if (object instanceof $root.CommandStatusReqDTO)
            return object;
        var message = new $root.CommandStatusReqDTO();
        if (object.dtuSn != null)
            message.dtuSn = String(object.dtuSn);
        if (object.time != null)
            message.time = object.time | 0;
        if (object.action != null)
            message.action = object.action | 0;
        if (object.packageNub != null)
            message.packageNub = object.packageNub | 0;
        if (object.packageNow != null)
            message.packageNow = object.packageNow | 0;
        if (object.tid != null)
            if ($util.Long)
                (message.tid = $util.Long.fromValue(object.tid)).unsigned = false;
            else if (typeof object.tid === "string")
                message.tid = parseInt(object.tid, 10);
            else if (typeof object.tid === "number")
                message.tid = object.tid;
            else if (typeof object.tid === "object")
                message.tid = new $util.LongBits(object.tid.low >>> 0, object.tid.high >>> 0).toNumber();
        if (object.esSnsSucs) {
            if (!Array.isArray(object.esSnsSucs))
                throw TypeError(".CommandStatusReqDTO.esSnsSucs: array expected");
            message.esSnsSucs = [];
            for (var i = 0; i < object.esSnsSucs.length; ++i)
                message.esSnsSucs[i] = String(object.esSnsSucs[i]);
        }
        if (object.miSnsSucs) {
            if (!Array.isArray(object.miSnsSucs))
                throw TypeError(".CommandStatusReqDTO.miSnsSucs: array expected");
            message.miSnsSucs = [];
            for (var i = 0; i < object.miSnsSucs.length; ++i)
                if ($util.Long)
                    (message.miSnsSucs[i] = $util.Long.fromValue(object.miSnsSucs[i])).unsigned = false;
                else if (typeof object.miSnsSucs[i] === "string")
                    message.miSnsSucs[i] = parseInt(object.miSnsSucs[i], 10);
                else if (typeof object.miSnsSucs[i] === "number")
                    message.miSnsSucs[i] = object.miSnsSucs[i];
                else if (typeof object.miSnsSucs[i] === "object")
                    message.miSnsSucs[i] = new $util.LongBits(object.miSnsSucs[i].low >>> 0, object.miSnsSucs[i].high >>> 0).toNumber();
        }
        if (object.esSnsFailds) {
            if (!Array.isArray(object.esSnsFailds))
                throw TypeError(".CommandStatusReqDTO.esSnsFailds: array expected");
            message.esSnsFailds = [];
            for (var i = 0; i < object.esSnsFailds.length; ++i)
                message.esSnsFailds[i] = String(object.esSnsFailds[i]);
        }
        if (object.miSnsFailds) {
            if (!Array.isArray(object.miSnsFailds))
                throw TypeError(".CommandStatusReqDTO.miSnsFailds: array expected");
            message.miSnsFailds = [];
            for (var i = 0; i < object.miSnsFailds.length; ++i)
                if ($util.Long)
                    (message.miSnsFailds[i] = $util.Long.fromValue(object.miSnsFailds[i])).unsigned = false;
                else if (typeof object.miSnsFailds[i] === "string")
                    message.miSnsFailds[i] = parseInt(object.miSnsFailds[i], 10);
                else if (typeof object.miSnsFailds[i] === "number")
                    message.miSnsFailds[i] = object.miSnsFailds[i];
                else if (typeof object.miSnsFailds[i] === "object")
                    message.miSnsFailds[i] = new $util.LongBits(object.miSnsFailds[i].low >>> 0, object.miSnsFailds[i].high >>> 0).toNumber();
        }
        if (object.esMOperatingStatus) {
            if (!Array.isArray(object.esMOperatingStatus))
                throw TypeError(".CommandStatusReqDTO.esMOperatingStatus: array expected");
            message.esMOperatingStatus = [];
            for (var i = 0; i < object.esMOperatingStatus.length; ++i) {
                if (typeof object.esMOperatingStatus[i] !== "object")
                    throw TypeError(".CommandStatusReqDTO.esMOperatingStatus: object expected");
                message.esMOperatingStatus[i] = $root.ESOperatingStatusMO.fromObject(object.esMOperatingStatus[i]);
            }
        }
        if (object.miMOperatingStatus) {
            if (!Array.isArray(object.miMOperatingStatus))
                throw TypeError(".CommandStatusReqDTO.miMOperatingStatus: array expected");
            message.miMOperatingStatus = [];
            for (var i = 0; i < object.miMOperatingStatus.length; ++i) {
                if (typeof object.miMOperatingStatus[i] !== "object")
                    throw TypeError(".CommandStatusReqDTO.miMOperatingStatus: object expected");
                message.miMOperatingStatus[i] = $root.MIOperatingStatusMO.fromObject(object.miMOperatingStatus[i]);
            }
        }
        if (object.miMErrorStatus) {
            if (!Array.isArray(object.miMErrorStatus))
                throw TypeError(".CommandStatusReqDTO.miMErrorStatus: array expected");
            message.miMErrorStatus = [];
            for (var i = 0; i < object.miMErrorStatus.length; ++i) {
                if (typeof object.miMErrorStatus[i] !== "object")
                    throw TypeError(".CommandStatusReqDTO.miMErrorStatus: object expected");
                message.miMErrorStatus[i] = $root.MIErrorStatusMO.fromObject(object.miMErrorStatus[i]);
            }
        }
        if (object.esMSucStatus) {
            if (!Array.isArray(object.esMSucStatus))
                throw TypeError(".CommandStatusReqDTO.esMSucStatus: array expected");
            message.esMSucStatus = [];
            for (var i = 0; i < object.esMSucStatus.length; ++i) {
                if (typeof object.esMSucStatus[i] !== "object")
                    throw TypeError(".CommandStatusReqDTO.esMSucStatus: object expected");
                message.esMSucStatus[i] = $root.ESSucStatusMO.fromObject(object.esMSucStatus[i]);
            }
        }
        if (object.esMErrorStatus) {
            if (!Array.isArray(object.esMErrorStatus))
                throw TypeError(".CommandStatusReqDTO.esMErrorStatus: array expected");
            message.esMErrorStatus = [];
            for (var i = 0; i < object.esMErrorStatus.length; ++i) {
                if (typeof object.esMErrorStatus[i] !== "object")
                    throw TypeError(".CommandStatusReqDTO.esMErrorStatus: object expected");
                message.esMErrorStatus[i] = $root.ESErrorStatusMO.fromObject(object.esMErrorStatus[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a CommandStatusReqDTO message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CommandStatusReqDTO
     * @static
     * @param {CommandStatusReqDTO} message CommandStatusReqDTO
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommandStatusReqDTO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.esSnsSucs = [];
            object.miSnsSucs = [];
            object.esSnsFailds = [];
            object.miSnsFailds = [];
            object.esMOperatingStatus = [];
            object.miMOperatingStatus = [];
            object.miMErrorStatus = [];
            object.esMSucStatus = [];
            object.esMErrorStatus = [];
        }
        if (options.defaults) {
            object.dtuSn = "";
            object.time = 0;
            object.action = 0;
            object.packageNub = 0;
            object.packageNow = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.tid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.tid = options.longs === String ? "0" : 0;
        }
        if (message.dtuSn != null && message.hasOwnProperty("dtuSn"))
            object.dtuSn = message.dtuSn;
        if (message.time != null && message.hasOwnProperty("time"))
            object.time = message.time;
        if (message.action != null && message.hasOwnProperty("action"))
            object.action = message.action;
        if (message.packageNub != null && message.hasOwnProperty("packageNub"))
            object.packageNub = message.packageNub;
        if (message.packageNow != null && message.hasOwnProperty("packageNow"))
            object.packageNow = message.packageNow;
        if (message.tid != null && message.hasOwnProperty("tid"))
            if (typeof message.tid === "number")
                object.tid = options.longs === String ? String(message.tid) : message.tid;
            else
                object.tid = options.longs === String ? $util.Long.prototype.toString.call(message.tid) : options.longs === Number ? new $util.LongBits(message.tid.low >>> 0, message.tid.high >>> 0).toNumber() : message.tid;
        if (message.esSnsSucs && message.esSnsSucs.length) {
            object.esSnsSucs = [];
            for (var j = 0; j < message.esSnsSucs.length; ++j)
                object.esSnsSucs[j] = message.esSnsSucs[j];
        }
        if (message.miSnsSucs && message.miSnsSucs.length) {
            object.miSnsSucs = [];
            for (var j = 0; j < message.miSnsSucs.length; ++j)
                if (typeof message.miSnsSucs[j] === "number")
                    object.miSnsSucs[j] = options.longs === String ? String(message.miSnsSucs[j]) : message.miSnsSucs[j];
                else
                    object.miSnsSucs[j] = options.longs === String ? $util.Long.prototype.toString.call(message.miSnsSucs[j]) : options.longs === Number ? new $util.LongBits(message.miSnsSucs[j].low >>> 0, message.miSnsSucs[j].high >>> 0).toNumber() : message.miSnsSucs[j];
        }
        if (message.esSnsFailds && message.esSnsFailds.length) {
            object.esSnsFailds = [];
            for (var j = 0; j < message.esSnsFailds.length; ++j)
                object.esSnsFailds[j] = message.esSnsFailds[j];
        }
        if (message.miSnsFailds && message.miSnsFailds.length) {
            object.miSnsFailds = [];
            for (var j = 0; j < message.miSnsFailds.length; ++j)
                if (typeof message.miSnsFailds[j] === "number")
                    object.miSnsFailds[j] = options.longs === String ? String(message.miSnsFailds[j]) : message.miSnsFailds[j];
                else
                    object.miSnsFailds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.miSnsFailds[j]) : options.longs === Number ? new $util.LongBits(message.miSnsFailds[j].low >>> 0, message.miSnsFailds[j].high >>> 0).toNumber() : message.miSnsFailds[j];
        }
        if (message.esMOperatingStatus && message.esMOperatingStatus.length) {
            object.esMOperatingStatus = [];
            for (var j = 0; j < message.esMOperatingStatus.length; ++j)
                object.esMOperatingStatus[j] = $root.ESOperatingStatusMO.toObject(message.esMOperatingStatus[j], options);
        }
        if (message.miMOperatingStatus && message.miMOperatingStatus.length) {
            object.miMOperatingStatus = [];
            for (var j = 0; j < message.miMOperatingStatus.length; ++j)
                object.miMOperatingStatus[j] = $root.MIOperatingStatusMO.toObject(message.miMOperatingStatus[j], options);
        }
        if (message.miMErrorStatus && message.miMErrorStatus.length) {
            object.miMErrorStatus = [];
            for (var j = 0; j < message.miMErrorStatus.length; ++j)
                object.miMErrorStatus[j] = $root.MIErrorStatusMO.toObject(message.miMErrorStatus[j], options);
        }
        if (message.esMSucStatus && message.esMSucStatus.length) {
            object.esMSucStatus = [];
            for (var j = 0; j < message.esMSucStatus.length; ++j)
                object.esMSucStatus[j] = $root.ESSucStatusMO.toObject(message.esMSucStatus[j], options);
        }
        if (message.esMErrorStatus && message.esMErrorStatus.length) {
            object.esMErrorStatus = [];
            for (var j = 0; j < message.esMErrorStatus.length; ++j)
                object.esMErrorStatus[j] = $root.ESErrorStatusMO.toObject(message.esMErrorStatus[j], options);
        }
        return object;
    };

    /**
     * Converts this CommandStatusReqDTO to JSON.
     * @function toJSON
     * @memberof CommandStatusReqDTO
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommandStatusReqDTO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CommandStatusReqDTO
     * @function getTypeUrl
     * @memberof CommandStatusReqDTO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CommandStatusReqDTO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CommandStatusReqDTO";
    };

    return CommandStatusReqDTO;
})();

$root.CommandStatusResDTO = (function() {

    /**
     * Properties of a CommandStatusResDTO.
     * @exports ICommandStatusResDTO
     * @interface ICommandStatusResDTO
     * @property {number|null} [time] CommandStatusResDTO time
     * @property {number|null} [action] CommandStatusResDTO action
     * @property {number|null} [packageNow] CommandStatusResDTO packageNow
     * @property {number|Long|null} [tid] CommandStatusResDTO tid
     * @property {number|null} [errCode] CommandStatusResDTO errCode
     */

    /**
     * Constructs a new CommandStatusResDTO.
     * @exports CommandStatusResDTO
     * @classdesc Represents a CommandStatusResDTO.
     * @implements ICommandStatusResDTO
     * @constructor
     * @param {ICommandStatusResDTO=} [properties] Properties to set
     */
    function CommandStatusResDTO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CommandStatusResDTO time.
     * @member {number} time
     * @memberof CommandStatusResDTO
     * @instance
     */
    CommandStatusResDTO.prototype.time = 0;

    /**
     * CommandStatusResDTO action.
     * @member {number} action
     * @memberof CommandStatusResDTO
     * @instance
     */
    CommandStatusResDTO.prototype.action = 0;

    /**
     * CommandStatusResDTO packageNow.
     * @member {number} packageNow
     * @memberof CommandStatusResDTO
     * @instance
     */
    CommandStatusResDTO.prototype.packageNow = 0;

    /**
     * CommandStatusResDTO tid.
     * @member {number|Long} tid
     * @memberof CommandStatusResDTO
     * @instance
     */
    CommandStatusResDTO.prototype.tid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CommandStatusResDTO errCode.
     * @member {number} errCode
     * @memberof CommandStatusResDTO
     * @instance
     */
    CommandStatusResDTO.prototype.errCode = 0;

    /**
     * Creates a new CommandStatusResDTO instance using the specified properties.
     * @function create
     * @memberof CommandStatusResDTO
     * @static
     * @param {ICommandStatusResDTO=} [properties] Properties to set
     * @returns {CommandStatusResDTO} CommandStatusResDTO instance
     */
    CommandStatusResDTO.create = function create(properties) {
        return new CommandStatusResDTO(properties);
    };

    /**
     * Encodes the specified CommandStatusResDTO message. Does not implicitly {@link CommandStatusResDTO.verify|verify} messages.
     * @function encode
     * @memberof CommandStatusResDTO
     * @static
     * @param {ICommandStatusResDTO} message CommandStatusResDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommandStatusResDTO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.time);
        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.action);
        if (message.packageNow != null && Object.hasOwnProperty.call(message, "packageNow"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.packageNow);
        if (message.tid != null && Object.hasOwnProperty.call(message, "tid"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.tid);
        if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.errCode);
        return writer;
    };

    /**
     * Encodes the specified CommandStatusResDTO message, length delimited. Does not implicitly {@link CommandStatusResDTO.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommandStatusResDTO
     * @static
     * @param {ICommandStatusResDTO} message CommandStatusResDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommandStatusResDTO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CommandStatusResDTO message from the specified reader or buffer.
     * @function decode
     * @memberof CommandStatusResDTO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommandStatusResDTO} CommandStatusResDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommandStatusResDTO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommandStatusResDTO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.time = reader.int32();
                    break;
                }
            case 2: {
                    message.action = reader.int32();
                    break;
                }
            case 3: {
                    message.packageNow = reader.int32();
                    break;
                }
            case 4: {
                    message.tid = reader.int64();
                    break;
                }
            case 5: {
                    message.errCode = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CommandStatusResDTO message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CommandStatusResDTO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommandStatusResDTO} CommandStatusResDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommandStatusResDTO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CommandStatusResDTO message.
     * @function verify
     * @memberof CommandStatusResDTO
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommandStatusResDTO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time))
                return "time: integer expected";
        if (message.action != null && message.hasOwnProperty("action"))
            if (!$util.isInteger(message.action))
                return "action: integer expected";
        if (message.packageNow != null && message.hasOwnProperty("packageNow"))
            if (!$util.isInteger(message.packageNow))
                return "packageNow: integer expected";
        if (message.tid != null && message.hasOwnProperty("tid"))
            if (!$util.isInteger(message.tid) && !(message.tid && $util.isInteger(message.tid.low) && $util.isInteger(message.tid.high)))
                return "tid: integer|Long expected";
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            if (!$util.isInteger(message.errCode))
                return "errCode: integer expected";
        return null;
    };

    /**
     * Creates a CommandStatusResDTO message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CommandStatusResDTO
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommandStatusResDTO} CommandStatusResDTO
     */
    CommandStatusResDTO.fromObject = function fromObject(object) {
        if (object instanceof $root.CommandStatusResDTO)
            return object;
        var message = new $root.CommandStatusResDTO();
        if (object.time != null)
            message.time = object.time | 0;
        if (object.action != null)
            message.action = object.action | 0;
        if (object.packageNow != null)
            message.packageNow = object.packageNow | 0;
        if (object.tid != null)
            if ($util.Long)
                (message.tid = $util.Long.fromValue(object.tid)).unsigned = false;
            else if (typeof object.tid === "string")
                message.tid = parseInt(object.tid, 10);
            else if (typeof object.tid === "number")
                message.tid = object.tid;
            else if (typeof object.tid === "object")
                message.tid = new $util.LongBits(object.tid.low >>> 0, object.tid.high >>> 0).toNumber();
        if (object.errCode != null)
            message.errCode = object.errCode | 0;
        return message;
    };

    /**
     * Creates a plain object from a CommandStatusResDTO message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CommandStatusResDTO
     * @static
     * @param {CommandStatusResDTO} message CommandStatusResDTO
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommandStatusResDTO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.time = 0;
            object.action = 0;
            object.packageNow = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.tid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.tid = options.longs === String ? "0" : 0;
            object.errCode = 0;
        }
        if (message.time != null && message.hasOwnProperty("time"))
            object.time = message.time;
        if (message.action != null && message.hasOwnProperty("action"))
            object.action = message.action;
        if (message.packageNow != null && message.hasOwnProperty("packageNow"))
            object.packageNow = message.packageNow;
        if (message.tid != null && message.hasOwnProperty("tid"))
            if (typeof message.tid === "number")
                object.tid = options.longs === String ? String(message.tid) : message.tid;
            else
                object.tid = options.longs === String ? $util.Long.prototype.toString.call(message.tid) : options.longs === Number ? new $util.LongBits(message.tid.low >>> 0, message.tid.high >>> 0).toNumber() : message.tid;
        if (message.errCode != null && message.hasOwnProperty("errCode"))
            object.errCode = message.errCode;
        return object;
    };

    /**
     * Converts this CommandStatusResDTO to JSON.
     * @function toJSON
     * @memberof CommandStatusResDTO
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommandStatusResDTO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CommandStatusResDTO
     * @function getTypeUrl
     * @memberof CommandStatusResDTO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CommandStatusResDTO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CommandStatusResDTO";
    };

    return CommandStatusResDTO;
})();

$root.HBReqDTO = (function() {

    /**
     * Properties of a HBReqDTO.
     * @exports IHBReqDTO
     * @interface IHBReqDTO
     * @property {number|null} [offset] HBReqDTO offset
     * @property {number|null} [time] HBReqDTO time
     * @property {number|null} [csq] HBReqDTO csq
     * @property {string|null} [dtuSerialNumber] HBReqDTO dtuSerialNumber
     * @property {string|null} [deviceSerialNumber] HBReqDTO deviceSerialNumber
     */

    /**
     * Constructs a new HBReqDTO.
     * @exports HBReqDTO
     * @classdesc Represents a HBReqDTO.
     * @implements IHBReqDTO
     * @constructor
     * @param {IHBReqDTO=} [properties] Properties to set
     */
    function HBReqDTO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HBReqDTO offset.
     * @member {number} offset
     * @memberof HBReqDTO
     * @instance
     */
    HBReqDTO.prototype.offset = 0;

    /**
     * HBReqDTO time.
     * @member {number} time
     * @memberof HBReqDTO
     * @instance
     */
    HBReqDTO.prototype.time = 0;

    /**
     * HBReqDTO csq.
     * @member {number} csq
     * @memberof HBReqDTO
     * @instance
     */
    HBReqDTO.prototype.csq = 0;

    /**
     * HBReqDTO dtuSerialNumber.
     * @member {string} dtuSerialNumber
     * @memberof HBReqDTO
     * @instance
     */
    HBReqDTO.prototype.dtuSerialNumber = "";

    /**
     * HBReqDTO deviceSerialNumber.
     * @member {string} deviceSerialNumber
     * @memberof HBReqDTO
     * @instance
     */
    HBReqDTO.prototype.deviceSerialNumber = "";

    /**
     * Creates a new HBReqDTO instance using the specified properties.
     * @function create
     * @memberof HBReqDTO
     * @static
     * @param {IHBReqDTO=} [properties] Properties to set
     * @returns {HBReqDTO} HBReqDTO instance
     */
    HBReqDTO.create = function create(properties) {
        return new HBReqDTO(properties);
    };

    /**
     * Encodes the specified HBReqDTO message. Does not implicitly {@link HBReqDTO.verify|verify} messages.
     * @function encode
     * @memberof HBReqDTO
     * @static
     * @param {IHBReqDTO} message HBReqDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HBReqDTO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.offset);
        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.time);
        if (message.csq != null && Object.hasOwnProperty.call(message, "csq"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.csq);
        if (message.dtuSerialNumber != null && Object.hasOwnProperty.call(message, "dtuSerialNumber"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.dtuSerialNumber);
        if (message.deviceSerialNumber != null && Object.hasOwnProperty.call(message, "deviceSerialNumber"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.deviceSerialNumber);
        return writer;
    };

    /**
     * Encodes the specified HBReqDTO message, length delimited. Does not implicitly {@link HBReqDTO.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HBReqDTO
     * @static
     * @param {IHBReqDTO} message HBReqDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HBReqDTO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HBReqDTO message from the specified reader or buffer.
     * @function decode
     * @memberof HBReqDTO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HBReqDTO} HBReqDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HBReqDTO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HBReqDTO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.offset = reader.int32();
                    break;
                }
            case 2: {
                    message.time = reader.int32();
                    break;
                }
            case 3: {
                    message.csq = reader.int32();
                    break;
                }
            case 4: {
                    message.dtuSerialNumber = reader.string();
                    break;
                }
            case 5: {
                    message.deviceSerialNumber = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HBReqDTO message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HBReqDTO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HBReqDTO} HBReqDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HBReqDTO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HBReqDTO message.
     * @function verify
     * @memberof HBReqDTO
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HBReqDTO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.offset != null && message.hasOwnProperty("offset"))
            if (!$util.isInteger(message.offset))
                return "offset: integer expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time))
                return "time: integer expected";
        if (message.csq != null && message.hasOwnProperty("csq"))
            if (!$util.isInteger(message.csq))
                return "csq: integer expected";
        if (message.dtuSerialNumber != null && message.hasOwnProperty("dtuSerialNumber"))
            if (!$util.isString(message.dtuSerialNumber))
                return "dtuSerialNumber: string expected";
        if (message.deviceSerialNumber != null && message.hasOwnProperty("deviceSerialNumber"))
            if (!$util.isString(message.deviceSerialNumber))
                return "deviceSerialNumber: string expected";
        return null;
    };

    /**
     * Creates a HBReqDTO message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HBReqDTO
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HBReqDTO} HBReqDTO
     */
    HBReqDTO.fromObject = function fromObject(object) {
        if (object instanceof $root.HBReqDTO)
            return object;
        var message = new $root.HBReqDTO();
        if (object.offset != null)
            message.offset = object.offset | 0;
        if (object.time != null)
            message.time = object.time | 0;
        if (object.csq != null)
            message.csq = object.csq | 0;
        if (object.dtuSerialNumber != null)
            message.dtuSerialNumber = String(object.dtuSerialNumber);
        if (object.deviceSerialNumber != null)
            message.deviceSerialNumber = String(object.deviceSerialNumber);
        return message;
    };

    /**
     * Creates a plain object from a HBReqDTO message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HBReqDTO
     * @static
     * @param {HBReqDTO} message HBReqDTO
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HBReqDTO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.offset = 0;
            object.time = 0;
            object.csq = 0;
            object.dtuSerialNumber = "";
            object.deviceSerialNumber = "";
        }
        if (message.offset != null && message.hasOwnProperty("offset"))
            object.offset = message.offset;
        if (message.time != null && message.hasOwnProperty("time"))
            object.time = message.time;
        if (message.csq != null && message.hasOwnProperty("csq"))
            object.csq = message.csq;
        if (message.dtuSerialNumber != null && message.hasOwnProperty("dtuSerialNumber"))
            object.dtuSerialNumber = message.dtuSerialNumber;
        if (message.deviceSerialNumber != null && message.hasOwnProperty("deviceSerialNumber"))
            object.deviceSerialNumber = message.deviceSerialNumber;
        return object;
    };

    /**
     * Converts this HBReqDTO to JSON.
     * @function toJSON
     * @memberof HBReqDTO
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HBReqDTO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for HBReqDTO
     * @function getTypeUrl
     * @memberof HBReqDTO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    HBReqDTO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/HBReqDTO";
    };

    return HBReqDTO;
})();

$root.HBResDTO = (function() {

    /**
     * Properties of a HBResDTO.
     * @exports IHBResDTO
     * @interface IHBResDTO
     * @property {number|null} [offset] HBResDTO offset
     * @property {number|null} [time] HBResDTO time
     * @property {Uint8Array|null} [timeYmdHms] HBResDTO timeYmdHms
     */

    /**
     * Constructs a new HBResDTO.
     * @exports HBResDTO
     * @classdesc Represents a HBResDTO.
     * @implements IHBResDTO
     * @constructor
     * @param {IHBResDTO=} [properties] Properties to set
     */
    function HBResDTO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HBResDTO offset.
     * @member {number} offset
     * @memberof HBResDTO
     * @instance
     */
    HBResDTO.prototype.offset = 0;

    /**
     * HBResDTO time.
     * @member {number} time
     * @memberof HBResDTO
     * @instance
     */
    HBResDTO.prototype.time = 0;

    /**
     * HBResDTO timeYmdHms.
     * @member {Uint8Array} timeYmdHms
     * @memberof HBResDTO
     * @instance
     */
    HBResDTO.prototype.timeYmdHms = $util.newBuffer([]);

    /**
     * Creates a new HBResDTO instance using the specified properties.
     * @function create
     * @memberof HBResDTO
     * @static
     * @param {IHBResDTO=} [properties] Properties to set
     * @returns {HBResDTO} HBResDTO instance
     */
    HBResDTO.create = function create(properties) {
        return new HBResDTO(properties);
    };

    /**
     * Encodes the specified HBResDTO message. Does not implicitly {@link HBResDTO.verify|verify} messages.
     * @function encode
     * @memberof HBResDTO
     * @static
     * @param {IHBResDTO} message HBResDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HBResDTO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.offset);
        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.time);
        if (message.timeYmdHms != null && Object.hasOwnProperty.call(message, "timeYmdHms"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.timeYmdHms);
        return writer;
    };

    /**
     * Encodes the specified HBResDTO message, length delimited. Does not implicitly {@link HBResDTO.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HBResDTO
     * @static
     * @param {IHBResDTO} message HBResDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HBResDTO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HBResDTO message from the specified reader or buffer.
     * @function decode
     * @memberof HBResDTO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HBResDTO} HBResDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HBResDTO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HBResDTO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.offset = reader.int32();
                    break;
                }
            case 2: {
                    message.time = reader.int32();
                    break;
                }
            case 3: {
                    message.timeYmdHms = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HBResDTO message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HBResDTO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HBResDTO} HBResDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HBResDTO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HBResDTO message.
     * @function verify
     * @memberof HBResDTO
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HBResDTO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.offset != null && message.hasOwnProperty("offset"))
            if (!$util.isInteger(message.offset))
                return "offset: integer expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time))
                return "time: integer expected";
        if (message.timeYmdHms != null && message.hasOwnProperty("timeYmdHms"))
            if (!(message.timeYmdHms && typeof message.timeYmdHms.length === "number" || $util.isString(message.timeYmdHms)))
                return "timeYmdHms: buffer expected";
        return null;
    };

    /**
     * Creates a HBResDTO message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HBResDTO
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HBResDTO} HBResDTO
     */
    HBResDTO.fromObject = function fromObject(object) {
        if (object instanceof $root.HBResDTO)
            return object;
        var message = new $root.HBResDTO();
        if (object.offset != null)
            message.offset = object.offset | 0;
        if (object.time != null)
            message.time = object.time | 0;
        if (object.timeYmdHms != null)
            if (typeof object.timeYmdHms === "string")
                $util.base64.decode(object.timeYmdHms, message.timeYmdHms = $util.newBuffer($util.base64.length(object.timeYmdHms)), 0);
            else if (object.timeYmdHms.length >= 0)
                message.timeYmdHms = object.timeYmdHms;
        return message;
    };

    /**
     * Creates a plain object from a HBResDTO message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HBResDTO
     * @static
     * @param {HBResDTO} message HBResDTO
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HBResDTO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.offset = 0;
            object.time = 0;
            if (options.bytes === String)
                object.timeYmdHms = "";
            else {
                object.timeYmdHms = [];
                if (options.bytes !== Array)
                    object.timeYmdHms = $util.newBuffer(object.timeYmdHms);
            }
        }
        if (message.offset != null && message.hasOwnProperty("offset"))
            object.offset = message.offset;
        if (message.time != null && message.hasOwnProperty("time"))
            object.time = message.time;
        if (message.timeYmdHms != null && message.hasOwnProperty("timeYmdHms"))
            object.timeYmdHms = options.bytes === String ? $util.base64.encode(message.timeYmdHms, 0, message.timeYmdHms.length) : options.bytes === Array ? Array.prototype.slice.call(message.timeYmdHms) : message.timeYmdHms;
        return object;
    };

    /**
     * Converts this HBResDTO to JSON.
     * @function toJSON
     * @memberof HBResDTO
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HBResDTO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for HBResDTO
     * @function getTypeUrl
     * @memberof HBResDTO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    HBResDTO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/HBResDTO";
    };

    return HBResDTO;
})();

$root.MeterMO = (function() {

    /**
     * Properties of a MeterMO.
     * @exports IMeterMO
     * @interface IMeterMO
     * @property {number|null} [deviceType] MeterMO deviceType
     * @property {number|Long|null} [serialNumber] MeterMO serialNumber
     * @property {number|null} [phaseTotalPower] MeterMO phaseTotalPower
     * @property {number|null} [phase_APower] MeterMO phase_APower
     * @property {number|null} [phase_BPower] MeterMO phase_BPower
     * @property {number|null} [phase_CPower] MeterMO phase_CPower
     * @property {number|null} [powerFactorTotal] MeterMO powerFactorTotal
     * @property {number|null} [energyTotalPower] MeterMO energyTotalPower
     * @property {number|null} [energyPhase_A] MeterMO energyPhase_A
     * @property {number|null} [energyPhase_B] MeterMO energyPhase_B
     * @property {number|null} [energyPhase_C] MeterMO energyPhase_C
     * @property {number|null} [energyTotalConsumed] MeterMO energyTotalConsumed
     * @property {number|null} [energyPhase_AConsumed] MeterMO energyPhase_AConsumed
     * @property {number|null} [energyPhase_BConsumed] MeterMO energyPhase_BConsumed
     * @property {number|null} [energyPhase_CConsumed] MeterMO energyPhase_CConsumed
     * @property {number|null} [faultCode] MeterMO faultCode
     * @property {number|null} [voltagePhase_A] MeterMO voltagePhase_A
     * @property {number|null} [voltagePhase_B] MeterMO voltagePhase_B
     * @property {number|null} [voltagePhase_C] MeterMO voltagePhase_C
     * @property {number|null} [currentPhase_A] MeterMO currentPhase_A
     * @property {number|null} [currentPhase_B] MeterMO currentPhase_B
     * @property {number|null} [currentPhase_C] MeterMO currentPhase_C
     * @property {number|null} [powerFactorPhase_A] MeterMO powerFactorPhase_A
     * @property {number|null} [powerFactorPhase_B] MeterMO powerFactorPhase_B
     * @property {number|null} [powerFactorPhase_C] MeterMO powerFactorPhase_C
     */

    /**
     * Constructs a new MeterMO.
     * @exports MeterMO
     * @classdesc Represents a MeterMO.
     * @implements IMeterMO
     * @constructor
     * @param {IMeterMO=} [properties] Properties to set
     */
    function MeterMO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MeterMO deviceType.
     * @member {number} deviceType
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.deviceType = 0;

    /**
     * MeterMO serialNumber.
     * @member {number|Long} serialNumber
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.serialNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MeterMO phaseTotalPower.
     * @member {number} phaseTotalPower
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.phaseTotalPower = 0;

    /**
     * MeterMO phase_APower.
     * @member {number} phase_APower
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.phase_APower = 0;

    /**
     * MeterMO phase_BPower.
     * @member {number} phase_BPower
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.phase_BPower = 0;

    /**
     * MeterMO phase_CPower.
     * @member {number} phase_CPower
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.phase_CPower = 0;

    /**
     * MeterMO powerFactorTotal.
     * @member {number} powerFactorTotal
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.powerFactorTotal = 0;

    /**
     * MeterMO energyTotalPower.
     * @member {number} energyTotalPower
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.energyTotalPower = 0;

    /**
     * MeterMO energyPhase_A.
     * @member {number} energyPhase_A
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.energyPhase_A = 0;

    /**
     * MeterMO energyPhase_B.
     * @member {number} energyPhase_B
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.energyPhase_B = 0;

    /**
     * MeterMO energyPhase_C.
     * @member {number} energyPhase_C
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.energyPhase_C = 0;

    /**
     * MeterMO energyTotalConsumed.
     * @member {number} energyTotalConsumed
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.energyTotalConsumed = 0;

    /**
     * MeterMO energyPhase_AConsumed.
     * @member {number} energyPhase_AConsumed
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.energyPhase_AConsumed = 0;

    /**
     * MeterMO energyPhase_BConsumed.
     * @member {number} energyPhase_BConsumed
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.energyPhase_BConsumed = 0;

    /**
     * MeterMO energyPhase_CConsumed.
     * @member {number} energyPhase_CConsumed
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.energyPhase_CConsumed = 0;

    /**
     * MeterMO faultCode.
     * @member {number} faultCode
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.faultCode = 0;

    /**
     * MeterMO voltagePhase_A.
     * @member {number} voltagePhase_A
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.voltagePhase_A = 0;

    /**
     * MeterMO voltagePhase_B.
     * @member {number} voltagePhase_B
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.voltagePhase_B = 0;

    /**
     * MeterMO voltagePhase_C.
     * @member {number} voltagePhase_C
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.voltagePhase_C = 0;

    /**
     * MeterMO currentPhase_A.
     * @member {number} currentPhase_A
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.currentPhase_A = 0;

    /**
     * MeterMO currentPhase_B.
     * @member {number} currentPhase_B
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.currentPhase_B = 0;

    /**
     * MeterMO currentPhase_C.
     * @member {number} currentPhase_C
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.currentPhase_C = 0;

    /**
     * MeterMO powerFactorPhase_A.
     * @member {number} powerFactorPhase_A
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.powerFactorPhase_A = 0;

    /**
     * MeterMO powerFactorPhase_B.
     * @member {number} powerFactorPhase_B
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.powerFactorPhase_B = 0;

    /**
     * MeterMO powerFactorPhase_C.
     * @member {number} powerFactorPhase_C
     * @memberof MeterMO
     * @instance
     */
    MeterMO.prototype.powerFactorPhase_C = 0;

    /**
     * Creates a new MeterMO instance using the specified properties.
     * @function create
     * @memberof MeterMO
     * @static
     * @param {IMeterMO=} [properties] Properties to set
     * @returns {MeterMO} MeterMO instance
     */
    MeterMO.create = function create(properties) {
        return new MeterMO(properties);
    };

    /**
     * Encodes the specified MeterMO message. Does not implicitly {@link MeterMO.verify|verify} messages.
     * @function encode
     * @memberof MeterMO
     * @static
     * @param {IMeterMO} message MeterMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MeterMO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deviceType != null && Object.hasOwnProperty.call(message, "deviceType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.deviceType);
        if (message.serialNumber != null && Object.hasOwnProperty.call(message, "serialNumber"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.serialNumber);
        if (message.phaseTotalPower != null && Object.hasOwnProperty.call(message, "phaseTotalPower"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.phaseTotalPower);
        if (message.phase_APower != null && Object.hasOwnProperty.call(message, "phase_APower"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.phase_APower);
        if (message.phase_BPower != null && Object.hasOwnProperty.call(message, "phase_BPower"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.phase_BPower);
        if (message.phase_CPower != null && Object.hasOwnProperty.call(message, "phase_CPower"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.phase_CPower);
        if (message.powerFactorTotal != null && Object.hasOwnProperty.call(message, "powerFactorTotal"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.powerFactorTotal);
        if (message.energyTotalPower != null && Object.hasOwnProperty.call(message, "energyTotalPower"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.energyTotalPower);
        if (message.energyPhase_A != null && Object.hasOwnProperty.call(message, "energyPhase_A"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.energyPhase_A);
        if (message.energyPhase_B != null && Object.hasOwnProperty.call(message, "energyPhase_B"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.energyPhase_B);
        if (message.energyPhase_C != null && Object.hasOwnProperty.call(message, "energyPhase_C"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.energyPhase_C);
        if (message.energyTotalConsumed != null && Object.hasOwnProperty.call(message, "energyTotalConsumed"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.energyTotalConsumed);
        if (message.energyPhase_AConsumed != null && Object.hasOwnProperty.call(message, "energyPhase_AConsumed"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.energyPhase_AConsumed);
        if (message.energyPhase_BConsumed != null && Object.hasOwnProperty.call(message, "energyPhase_BConsumed"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.energyPhase_BConsumed);
        if (message.energyPhase_CConsumed != null && Object.hasOwnProperty.call(message, "energyPhase_CConsumed"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.energyPhase_CConsumed);
        if (message.faultCode != null && Object.hasOwnProperty.call(message, "faultCode"))
            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.faultCode);
        if (message.voltagePhase_A != null && Object.hasOwnProperty.call(message, "voltagePhase_A"))
            writer.uint32(/* id 17, wireType 0 =*/136).int32(message.voltagePhase_A);
        if (message.voltagePhase_B != null && Object.hasOwnProperty.call(message, "voltagePhase_B"))
            writer.uint32(/* id 18, wireType 0 =*/144).int32(message.voltagePhase_B);
        if (message.voltagePhase_C != null && Object.hasOwnProperty.call(message, "voltagePhase_C"))
            writer.uint32(/* id 19, wireType 0 =*/152).int32(message.voltagePhase_C);
        if (message.currentPhase_A != null && Object.hasOwnProperty.call(message, "currentPhase_A"))
            writer.uint32(/* id 20, wireType 0 =*/160).int32(message.currentPhase_A);
        if (message.currentPhase_B != null && Object.hasOwnProperty.call(message, "currentPhase_B"))
            writer.uint32(/* id 21, wireType 0 =*/168).int32(message.currentPhase_B);
        if (message.currentPhase_C != null && Object.hasOwnProperty.call(message, "currentPhase_C"))
            writer.uint32(/* id 22, wireType 0 =*/176).int32(message.currentPhase_C);
        if (message.powerFactorPhase_A != null && Object.hasOwnProperty.call(message, "powerFactorPhase_A"))
            writer.uint32(/* id 23, wireType 0 =*/184).int32(message.powerFactorPhase_A);
        if (message.powerFactorPhase_B != null && Object.hasOwnProperty.call(message, "powerFactorPhase_B"))
            writer.uint32(/* id 24, wireType 0 =*/192).int32(message.powerFactorPhase_B);
        if (message.powerFactorPhase_C != null && Object.hasOwnProperty.call(message, "powerFactorPhase_C"))
            writer.uint32(/* id 25, wireType 0 =*/200).int32(message.powerFactorPhase_C);
        return writer;
    };

    /**
     * Encodes the specified MeterMO message, length delimited. Does not implicitly {@link MeterMO.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MeterMO
     * @static
     * @param {IMeterMO} message MeterMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MeterMO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MeterMO message from the specified reader or buffer.
     * @function decode
     * @memberof MeterMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MeterMO} MeterMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MeterMO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MeterMO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.deviceType = reader.int32();
                    break;
                }
            case 2: {
                    message.serialNumber = reader.int64();
                    break;
                }
            case 3: {
                    message.phaseTotalPower = reader.int32();
                    break;
                }
            case 4: {
                    message.phase_APower = reader.int32();
                    break;
                }
            case 5: {
                    message.phase_BPower = reader.int32();
                    break;
                }
            case 6: {
                    message.phase_CPower = reader.int32();
                    break;
                }
            case 7: {
                    message.powerFactorTotal = reader.int32();
                    break;
                }
            case 8: {
                    message.energyTotalPower = reader.int32();
                    break;
                }
            case 9: {
                    message.energyPhase_A = reader.int32();
                    break;
                }
            case 10: {
                    message.energyPhase_B = reader.int32();
                    break;
                }
            case 11: {
                    message.energyPhase_C = reader.int32();
                    break;
                }
            case 12: {
                    message.energyTotalConsumed = reader.int32();
                    break;
                }
            case 13: {
                    message.energyPhase_AConsumed = reader.int32();
                    break;
                }
            case 14: {
                    message.energyPhase_BConsumed = reader.int32();
                    break;
                }
            case 15: {
                    message.energyPhase_CConsumed = reader.int32();
                    break;
                }
            case 16: {
                    message.faultCode = reader.int32();
                    break;
                }
            case 17: {
                    message.voltagePhase_A = reader.int32();
                    break;
                }
            case 18: {
                    message.voltagePhase_B = reader.int32();
                    break;
                }
            case 19: {
                    message.voltagePhase_C = reader.int32();
                    break;
                }
            case 20: {
                    message.currentPhase_A = reader.int32();
                    break;
                }
            case 21: {
                    message.currentPhase_B = reader.int32();
                    break;
                }
            case 22: {
                    message.currentPhase_C = reader.int32();
                    break;
                }
            case 23: {
                    message.powerFactorPhase_A = reader.int32();
                    break;
                }
            case 24: {
                    message.powerFactorPhase_B = reader.int32();
                    break;
                }
            case 25: {
                    message.powerFactorPhase_C = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MeterMO message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MeterMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MeterMO} MeterMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MeterMO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MeterMO message.
     * @function verify
     * @memberof MeterMO
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MeterMO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.deviceType != null && message.hasOwnProperty("deviceType"))
            if (!$util.isInteger(message.deviceType))
                return "deviceType: integer expected";
        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
            if (!$util.isInteger(message.serialNumber) && !(message.serialNumber && $util.isInteger(message.serialNumber.low) && $util.isInteger(message.serialNumber.high)))
                return "serialNumber: integer|Long expected";
        if (message.phaseTotalPower != null && message.hasOwnProperty("phaseTotalPower"))
            if (!$util.isInteger(message.phaseTotalPower))
                return "phaseTotalPower: integer expected";
        if (message.phase_APower != null && message.hasOwnProperty("phase_APower"))
            if (!$util.isInteger(message.phase_APower))
                return "phase_APower: integer expected";
        if (message.phase_BPower != null && message.hasOwnProperty("phase_BPower"))
            if (!$util.isInteger(message.phase_BPower))
                return "phase_BPower: integer expected";
        if (message.phase_CPower != null && message.hasOwnProperty("phase_CPower"))
            if (!$util.isInteger(message.phase_CPower))
                return "phase_CPower: integer expected";
        if (message.powerFactorTotal != null && message.hasOwnProperty("powerFactorTotal"))
            if (!$util.isInteger(message.powerFactorTotal))
                return "powerFactorTotal: integer expected";
        if (message.energyTotalPower != null && message.hasOwnProperty("energyTotalPower"))
            if (!$util.isInteger(message.energyTotalPower))
                return "energyTotalPower: integer expected";
        if (message.energyPhase_A != null && message.hasOwnProperty("energyPhase_A"))
            if (!$util.isInteger(message.energyPhase_A))
                return "energyPhase_A: integer expected";
        if (message.energyPhase_B != null && message.hasOwnProperty("energyPhase_B"))
            if (!$util.isInteger(message.energyPhase_B))
                return "energyPhase_B: integer expected";
        if (message.energyPhase_C != null && message.hasOwnProperty("energyPhase_C"))
            if (!$util.isInteger(message.energyPhase_C))
                return "energyPhase_C: integer expected";
        if (message.energyTotalConsumed != null && message.hasOwnProperty("energyTotalConsumed"))
            if (!$util.isInteger(message.energyTotalConsumed))
                return "energyTotalConsumed: integer expected";
        if (message.energyPhase_AConsumed != null && message.hasOwnProperty("energyPhase_AConsumed"))
            if (!$util.isInteger(message.energyPhase_AConsumed))
                return "energyPhase_AConsumed: integer expected";
        if (message.energyPhase_BConsumed != null && message.hasOwnProperty("energyPhase_BConsumed"))
            if (!$util.isInteger(message.energyPhase_BConsumed))
                return "energyPhase_BConsumed: integer expected";
        if (message.energyPhase_CConsumed != null && message.hasOwnProperty("energyPhase_CConsumed"))
            if (!$util.isInteger(message.energyPhase_CConsumed))
                return "energyPhase_CConsumed: integer expected";
        if (message.faultCode != null && message.hasOwnProperty("faultCode"))
            if (!$util.isInteger(message.faultCode))
                return "faultCode: integer expected";
        if (message.voltagePhase_A != null && message.hasOwnProperty("voltagePhase_A"))
            if (!$util.isInteger(message.voltagePhase_A))
                return "voltagePhase_A: integer expected";
        if (message.voltagePhase_B != null && message.hasOwnProperty("voltagePhase_B"))
            if (!$util.isInteger(message.voltagePhase_B))
                return "voltagePhase_B: integer expected";
        if (message.voltagePhase_C != null && message.hasOwnProperty("voltagePhase_C"))
            if (!$util.isInteger(message.voltagePhase_C))
                return "voltagePhase_C: integer expected";
        if (message.currentPhase_A != null && message.hasOwnProperty("currentPhase_A"))
            if (!$util.isInteger(message.currentPhase_A))
                return "currentPhase_A: integer expected";
        if (message.currentPhase_B != null && message.hasOwnProperty("currentPhase_B"))
            if (!$util.isInteger(message.currentPhase_B))
                return "currentPhase_B: integer expected";
        if (message.currentPhase_C != null && message.hasOwnProperty("currentPhase_C"))
            if (!$util.isInteger(message.currentPhase_C))
                return "currentPhase_C: integer expected";
        if (message.powerFactorPhase_A != null && message.hasOwnProperty("powerFactorPhase_A"))
            if (!$util.isInteger(message.powerFactorPhase_A))
                return "powerFactorPhase_A: integer expected";
        if (message.powerFactorPhase_B != null && message.hasOwnProperty("powerFactorPhase_B"))
            if (!$util.isInteger(message.powerFactorPhase_B))
                return "powerFactorPhase_B: integer expected";
        if (message.powerFactorPhase_C != null && message.hasOwnProperty("powerFactorPhase_C"))
            if (!$util.isInteger(message.powerFactorPhase_C))
                return "powerFactorPhase_C: integer expected";
        return null;
    };

    /**
     * Creates a MeterMO message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MeterMO
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MeterMO} MeterMO
     */
    MeterMO.fromObject = function fromObject(object) {
        if (object instanceof $root.MeterMO)
            return object;
        var message = new $root.MeterMO();
        if (object.deviceType != null)
            message.deviceType = object.deviceType | 0;
        if (object.serialNumber != null)
            if ($util.Long)
                (message.serialNumber = $util.Long.fromValue(object.serialNumber)).unsigned = false;
            else if (typeof object.serialNumber === "string")
                message.serialNumber = parseInt(object.serialNumber, 10);
            else if (typeof object.serialNumber === "number")
                message.serialNumber = object.serialNumber;
            else if (typeof object.serialNumber === "object")
                message.serialNumber = new $util.LongBits(object.serialNumber.low >>> 0, object.serialNumber.high >>> 0).toNumber();
        if (object.phaseTotalPower != null)
            message.phaseTotalPower = object.phaseTotalPower | 0;
        if (object.phase_APower != null)
            message.phase_APower = object.phase_APower | 0;
        if (object.phase_BPower != null)
            message.phase_BPower = object.phase_BPower | 0;
        if (object.phase_CPower != null)
            message.phase_CPower = object.phase_CPower | 0;
        if (object.powerFactorTotal != null)
            message.powerFactorTotal = object.powerFactorTotal | 0;
        if (object.energyTotalPower != null)
            message.energyTotalPower = object.energyTotalPower | 0;
        if (object.energyPhase_A != null)
            message.energyPhase_A = object.energyPhase_A | 0;
        if (object.energyPhase_B != null)
            message.energyPhase_B = object.energyPhase_B | 0;
        if (object.energyPhase_C != null)
            message.energyPhase_C = object.energyPhase_C | 0;
        if (object.energyTotalConsumed != null)
            message.energyTotalConsumed = object.energyTotalConsumed | 0;
        if (object.energyPhase_AConsumed != null)
            message.energyPhase_AConsumed = object.energyPhase_AConsumed | 0;
        if (object.energyPhase_BConsumed != null)
            message.energyPhase_BConsumed = object.energyPhase_BConsumed | 0;
        if (object.energyPhase_CConsumed != null)
            message.energyPhase_CConsumed = object.energyPhase_CConsumed | 0;
        if (object.faultCode != null)
            message.faultCode = object.faultCode | 0;
        if (object.voltagePhase_A != null)
            message.voltagePhase_A = object.voltagePhase_A | 0;
        if (object.voltagePhase_B != null)
            message.voltagePhase_B = object.voltagePhase_B | 0;
        if (object.voltagePhase_C != null)
            message.voltagePhase_C = object.voltagePhase_C | 0;
        if (object.currentPhase_A != null)
            message.currentPhase_A = object.currentPhase_A | 0;
        if (object.currentPhase_B != null)
            message.currentPhase_B = object.currentPhase_B | 0;
        if (object.currentPhase_C != null)
            message.currentPhase_C = object.currentPhase_C | 0;
        if (object.powerFactorPhase_A != null)
            message.powerFactorPhase_A = object.powerFactorPhase_A | 0;
        if (object.powerFactorPhase_B != null)
            message.powerFactorPhase_B = object.powerFactorPhase_B | 0;
        if (object.powerFactorPhase_C != null)
            message.powerFactorPhase_C = object.powerFactorPhase_C | 0;
        return message;
    };

    /**
     * Creates a plain object from a MeterMO message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MeterMO
     * @static
     * @param {MeterMO} message MeterMO
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MeterMO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.deviceType = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.serialNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.serialNumber = options.longs === String ? "0" : 0;
            object.phaseTotalPower = 0;
            object.phase_APower = 0;
            object.phase_BPower = 0;
            object.phase_CPower = 0;
            object.powerFactorTotal = 0;
            object.energyTotalPower = 0;
            object.energyPhase_A = 0;
            object.energyPhase_B = 0;
            object.energyPhase_C = 0;
            object.energyTotalConsumed = 0;
            object.energyPhase_AConsumed = 0;
            object.energyPhase_BConsumed = 0;
            object.energyPhase_CConsumed = 0;
            object.faultCode = 0;
            object.voltagePhase_A = 0;
            object.voltagePhase_B = 0;
            object.voltagePhase_C = 0;
            object.currentPhase_A = 0;
            object.currentPhase_B = 0;
            object.currentPhase_C = 0;
            object.powerFactorPhase_A = 0;
            object.powerFactorPhase_B = 0;
            object.powerFactorPhase_C = 0;
        }
        if (message.deviceType != null && message.hasOwnProperty("deviceType"))
            object.deviceType = message.deviceType;
        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
            if (typeof message.serialNumber === "number")
                object.serialNumber = options.longs === String ? String(message.serialNumber) : message.serialNumber;
            else
                object.serialNumber = options.longs === String ? $util.Long.prototype.toString.call(message.serialNumber) : options.longs === Number ? new $util.LongBits(message.serialNumber.low >>> 0, message.serialNumber.high >>> 0).toNumber() : message.serialNumber;
        if (message.phaseTotalPower != null && message.hasOwnProperty("phaseTotalPower"))
            object.phaseTotalPower = message.phaseTotalPower;
        if (message.phase_APower != null && message.hasOwnProperty("phase_APower"))
            object.phase_APower = message.phase_APower;
        if (message.phase_BPower != null && message.hasOwnProperty("phase_BPower"))
            object.phase_BPower = message.phase_BPower;
        if (message.phase_CPower != null && message.hasOwnProperty("phase_CPower"))
            object.phase_CPower = message.phase_CPower;
        if (message.powerFactorTotal != null && message.hasOwnProperty("powerFactorTotal"))
            object.powerFactorTotal = message.powerFactorTotal;
        if (message.energyTotalPower != null && message.hasOwnProperty("energyTotalPower"))
            object.energyTotalPower = message.energyTotalPower;
        if (message.energyPhase_A != null && message.hasOwnProperty("energyPhase_A"))
            object.energyPhase_A = message.energyPhase_A;
        if (message.energyPhase_B != null && message.hasOwnProperty("energyPhase_B"))
            object.energyPhase_B = message.energyPhase_B;
        if (message.energyPhase_C != null && message.hasOwnProperty("energyPhase_C"))
            object.energyPhase_C = message.energyPhase_C;
        if (message.energyTotalConsumed != null && message.hasOwnProperty("energyTotalConsumed"))
            object.energyTotalConsumed = message.energyTotalConsumed;
        if (message.energyPhase_AConsumed != null && message.hasOwnProperty("energyPhase_AConsumed"))
            object.energyPhase_AConsumed = message.energyPhase_AConsumed;
        if (message.energyPhase_BConsumed != null && message.hasOwnProperty("energyPhase_BConsumed"))
            object.energyPhase_BConsumed = message.energyPhase_BConsumed;
        if (message.energyPhase_CConsumed != null && message.hasOwnProperty("energyPhase_CConsumed"))
            object.energyPhase_CConsumed = message.energyPhase_CConsumed;
        if (message.faultCode != null && message.hasOwnProperty("faultCode"))
            object.faultCode = message.faultCode;
        if (message.voltagePhase_A != null && message.hasOwnProperty("voltagePhase_A"))
            object.voltagePhase_A = message.voltagePhase_A;
        if (message.voltagePhase_B != null && message.hasOwnProperty("voltagePhase_B"))
            object.voltagePhase_B = message.voltagePhase_B;
        if (message.voltagePhase_C != null && message.hasOwnProperty("voltagePhase_C"))
            object.voltagePhase_C = message.voltagePhase_C;
        if (message.currentPhase_A != null && message.hasOwnProperty("currentPhase_A"))
            object.currentPhase_A = message.currentPhase_A;
        if (message.currentPhase_B != null && message.hasOwnProperty("currentPhase_B"))
            object.currentPhase_B = message.currentPhase_B;
        if (message.currentPhase_C != null && message.hasOwnProperty("currentPhase_C"))
            object.currentPhase_C = message.currentPhase_C;
        if (message.powerFactorPhase_A != null && message.hasOwnProperty("powerFactorPhase_A"))
            object.powerFactorPhase_A = message.powerFactorPhase_A;
        if (message.powerFactorPhase_B != null && message.hasOwnProperty("powerFactorPhase_B"))
            object.powerFactorPhase_B = message.powerFactorPhase_B;
        if (message.powerFactorPhase_C != null && message.hasOwnProperty("powerFactorPhase_C"))
            object.powerFactorPhase_C = message.powerFactorPhase_C;
        return object;
    };

    /**
     * Converts this MeterMO to JSON.
     * @function toJSON
     * @memberof MeterMO
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MeterMO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MeterMO
     * @function getTypeUrl
     * @memberof MeterMO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MeterMO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MeterMO";
    };

    return MeterMO;
})();

$root.RpMO = (function() {

    /**
     * Properties of a RpMO.
     * @exports IRpMO
     * @interface IRpMO
     * @property {number|Long|null} [serialNumber] RpMO serialNumber
     * @property {number|null} [signature] RpMO signature
     * @property {number|null} [channel] RpMO channel
     * @property {number|null} [pvNumber] RpMO pvNumber
     * @property {number|null} [linkStatus] RpMO linkStatus
     */

    /**
     * Constructs a new RpMO.
     * @exports RpMO
     * @classdesc Represents a RpMO.
     * @implements IRpMO
     * @constructor
     * @param {IRpMO=} [properties] Properties to set
     */
    function RpMO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RpMO serialNumber.
     * @member {number|Long} serialNumber
     * @memberof RpMO
     * @instance
     */
    RpMO.prototype.serialNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RpMO signature.
     * @member {number} signature
     * @memberof RpMO
     * @instance
     */
    RpMO.prototype.signature = 0;

    /**
     * RpMO channel.
     * @member {number} channel
     * @memberof RpMO
     * @instance
     */
    RpMO.prototype.channel = 0;

    /**
     * RpMO pvNumber.
     * @member {number} pvNumber
     * @memberof RpMO
     * @instance
     */
    RpMO.prototype.pvNumber = 0;

    /**
     * RpMO linkStatus.
     * @member {number} linkStatus
     * @memberof RpMO
     * @instance
     */
    RpMO.prototype.linkStatus = 0;

    /**
     * Creates a new RpMO instance using the specified properties.
     * @function create
     * @memberof RpMO
     * @static
     * @param {IRpMO=} [properties] Properties to set
     * @returns {RpMO} RpMO instance
     */
    RpMO.create = function create(properties) {
        return new RpMO(properties);
    };

    /**
     * Encodes the specified RpMO message. Does not implicitly {@link RpMO.verify|verify} messages.
     * @function encode
     * @memberof RpMO
     * @static
     * @param {IRpMO} message RpMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RpMO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.serialNumber != null && Object.hasOwnProperty.call(message, "serialNumber"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.serialNumber);
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.signature);
        if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.channel);
        if (message.pvNumber != null && Object.hasOwnProperty.call(message, "pvNumber"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.pvNumber);
        if (message.linkStatus != null && Object.hasOwnProperty.call(message, "linkStatus"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.linkStatus);
        return writer;
    };

    /**
     * Encodes the specified RpMO message, length delimited. Does not implicitly {@link RpMO.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RpMO
     * @static
     * @param {IRpMO} message RpMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RpMO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RpMO message from the specified reader or buffer.
     * @function decode
     * @memberof RpMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RpMO} RpMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RpMO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RpMO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.serialNumber = reader.int64();
                    break;
                }
            case 2: {
                    message.signature = reader.int32();
                    break;
                }
            case 3: {
                    message.channel = reader.int32();
                    break;
                }
            case 4: {
                    message.pvNumber = reader.int32();
                    break;
                }
            case 5: {
                    message.linkStatus = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RpMO message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RpMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RpMO} RpMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RpMO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RpMO message.
     * @function verify
     * @memberof RpMO
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RpMO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
            if (!$util.isInteger(message.serialNumber) && !(message.serialNumber && $util.isInteger(message.serialNumber.low) && $util.isInteger(message.serialNumber.high)))
                return "serialNumber: integer|Long expected";
        if (message.signature != null && message.hasOwnProperty("signature"))
            if (!$util.isInteger(message.signature))
                return "signature: integer expected";
        if (message.channel != null && message.hasOwnProperty("channel"))
            if (!$util.isInteger(message.channel))
                return "channel: integer expected";
        if (message.pvNumber != null && message.hasOwnProperty("pvNumber"))
            if (!$util.isInteger(message.pvNumber))
                return "pvNumber: integer expected";
        if (message.linkStatus != null && message.hasOwnProperty("linkStatus"))
            if (!$util.isInteger(message.linkStatus))
                return "linkStatus: integer expected";
        return null;
    };

    /**
     * Creates a RpMO message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RpMO
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RpMO} RpMO
     */
    RpMO.fromObject = function fromObject(object) {
        if (object instanceof $root.RpMO)
            return object;
        var message = new $root.RpMO();
        if (object.serialNumber != null)
            if ($util.Long)
                (message.serialNumber = $util.Long.fromValue(object.serialNumber)).unsigned = false;
            else if (typeof object.serialNumber === "string")
                message.serialNumber = parseInt(object.serialNumber, 10);
            else if (typeof object.serialNumber === "number")
                message.serialNumber = object.serialNumber;
            else if (typeof object.serialNumber === "object")
                message.serialNumber = new $util.LongBits(object.serialNumber.low >>> 0, object.serialNumber.high >>> 0).toNumber();
        if (object.signature != null)
            message.signature = object.signature | 0;
        if (object.channel != null)
            message.channel = object.channel | 0;
        if (object.pvNumber != null)
            message.pvNumber = object.pvNumber | 0;
        if (object.linkStatus != null)
            message.linkStatus = object.linkStatus | 0;
        return message;
    };

    /**
     * Creates a plain object from a RpMO message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RpMO
     * @static
     * @param {RpMO} message RpMO
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RpMO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.serialNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.serialNumber = options.longs === String ? "0" : 0;
            object.signature = 0;
            object.channel = 0;
            object.pvNumber = 0;
            object.linkStatus = 0;
        }
        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
            if (typeof message.serialNumber === "number")
                object.serialNumber = options.longs === String ? String(message.serialNumber) : message.serialNumber;
            else
                object.serialNumber = options.longs === String ? $util.Long.prototype.toString.call(message.serialNumber) : options.longs === Number ? new $util.LongBits(message.serialNumber.low >>> 0, message.serialNumber.high >>> 0).toNumber() : message.serialNumber;
        if (message.signature != null && message.hasOwnProperty("signature"))
            object.signature = message.signature;
        if (message.channel != null && message.hasOwnProperty("channel"))
            object.channel = message.channel;
        if (message.pvNumber != null && message.hasOwnProperty("pvNumber"))
            object.pvNumber = message.pvNumber;
        if (message.linkStatus != null && message.hasOwnProperty("linkStatus"))
            object.linkStatus = message.linkStatus;
        return object;
    };

    /**
     * Converts this RpMO to JSON.
     * @function toJSON
     * @memberof RpMO
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RpMO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RpMO
     * @function getTypeUrl
     * @memberof RpMO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RpMO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RpMO";
    };

    return RpMO;
})();

$root.RSDMO = (function() {

    /**
     * Properties of a RSDMO.
     * @exports IRSDMO
     * @interface IRSDMO
     * @property {number|Long|null} [serialNumber] RSDMO serialNumber
     * @property {number|null} [firmwareVersion] RSDMO firmwareVersion
     * @property {number|null} [voltage] RSDMO voltage
     * @property {number|null} [power] RSDMO power
     * @property {number|null} [temperature] RSDMO temperature
     * @property {number|null} [warningNumber] RSDMO warningNumber
     * @property {number|null} [crcChecksum] RSDMO crcChecksum
     * @property {number|null} [linkStatus] RSDMO linkStatus
     */

    /**
     * Constructs a new RSDMO.
     * @exports RSDMO
     * @classdesc Represents a RSDMO.
     * @implements IRSDMO
     * @constructor
     * @param {IRSDMO=} [properties] Properties to set
     */
    function RSDMO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RSDMO serialNumber.
     * @member {number|Long} serialNumber
     * @memberof RSDMO
     * @instance
     */
    RSDMO.prototype.serialNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RSDMO firmwareVersion.
     * @member {number} firmwareVersion
     * @memberof RSDMO
     * @instance
     */
    RSDMO.prototype.firmwareVersion = 0;

    /**
     * RSDMO voltage.
     * @member {number} voltage
     * @memberof RSDMO
     * @instance
     */
    RSDMO.prototype.voltage = 0;

    /**
     * RSDMO power.
     * @member {number} power
     * @memberof RSDMO
     * @instance
     */
    RSDMO.prototype.power = 0;

    /**
     * RSDMO temperature.
     * @member {number} temperature
     * @memberof RSDMO
     * @instance
     */
    RSDMO.prototype.temperature = 0;

    /**
     * RSDMO warningNumber.
     * @member {number} warningNumber
     * @memberof RSDMO
     * @instance
     */
    RSDMO.prototype.warningNumber = 0;

    /**
     * RSDMO crcChecksum.
     * @member {number} crcChecksum
     * @memberof RSDMO
     * @instance
     */
    RSDMO.prototype.crcChecksum = 0;

    /**
     * RSDMO linkStatus.
     * @member {number} linkStatus
     * @memberof RSDMO
     * @instance
     */
    RSDMO.prototype.linkStatus = 0;

    /**
     * Creates a new RSDMO instance using the specified properties.
     * @function create
     * @memberof RSDMO
     * @static
     * @param {IRSDMO=} [properties] Properties to set
     * @returns {RSDMO} RSDMO instance
     */
    RSDMO.create = function create(properties) {
        return new RSDMO(properties);
    };

    /**
     * Encodes the specified RSDMO message. Does not implicitly {@link RSDMO.verify|verify} messages.
     * @function encode
     * @memberof RSDMO
     * @static
     * @param {IRSDMO} message RSDMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RSDMO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.serialNumber != null && Object.hasOwnProperty.call(message, "serialNumber"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.serialNumber);
        if (message.firmwareVersion != null && Object.hasOwnProperty.call(message, "firmwareVersion"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.firmwareVersion);
        if (message.voltage != null && Object.hasOwnProperty.call(message, "voltage"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.voltage);
        if (message.power != null && Object.hasOwnProperty.call(message, "power"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.power);
        if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.temperature);
        if (message.warningNumber != null && Object.hasOwnProperty.call(message, "warningNumber"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.warningNumber);
        if (message.crcChecksum != null && Object.hasOwnProperty.call(message, "crcChecksum"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.crcChecksum);
        if (message.linkStatus != null && Object.hasOwnProperty.call(message, "linkStatus"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.linkStatus);
        return writer;
    };

    /**
     * Encodes the specified RSDMO message, length delimited. Does not implicitly {@link RSDMO.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RSDMO
     * @static
     * @param {IRSDMO} message RSDMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RSDMO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RSDMO message from the specified reader or buffer.
     * @function decode
     * @memberof RSDMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RSDMO} RSDMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RSDMO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RSDMO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.serialNumber = reader.int64();
                    break;
                }
            case 2: {
                    message.firmwareVersion = reader.int32();
                    break;
                }
            case 3: {
                    message.voltage = reader.int32();
                    break;
                }
            case 4: {
                    message.power = reader.int32();
                    break;
                }
            case 5: {
                    message.temperature = reader.int32();
                    break;
                }
            case 6: {
                    message.warningNumber = reader.int32();
                    break;
                }
            case 7: {
                    message.crcChecksum = reader.int32();
                    break;
                }
            case 8: {
                    message.linkStatus = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RSDMO message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RSDMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RSDMO} RSDMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RSDMO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RSDMO message.
     * @function verify
     * @memberof RSDMO
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RSDMO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
            if (!$util.isInteger(message.serialNumber) && !(message.serialNumber && $util.isInteger(message.serialNumber.low) && $util.isInteger(message.serialNumber.high)))
                return "serialNumber: integer|Long expected";
        if (message.firmwareVersion != null && message.hasOwnProperty("firmwareVersion"))
            if (!$util.isInteger(message.firmwareVersion))
                return "firmwareVersion: integer expected";
        if (message.voltage != null && message.hasOwnProperty("voltage"))
            if (!$util.isInteger(message.voltage))
                return "voltage: integer expected";
        if (message.power != null && message.hasOwnProperty("power"))
            if (!$util.isInteger(message.power))
                return "power: integer expected";
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            if (!$util.isInteger(message.temperature))
                return "temperature: integer expected";
        if (message.warningNumber != null && message.hasOwnProperty("warningNumber"))
            if (!$util.isInteger(message.warningNumber))
                return "warningNumber: integer expected";
        if (message.crcChecksum != null && message.hasOwnProperty("crcChecksum"))
            if (!$util.isInteger(message.crcChecksum))
                return "crcChecksum: integer expected";
        if (message.linkStatus != null && message.hasOwnProperty("linkStatus"))
            if (!$util.isInteger(message.linkStatus))
                return "linkStatus: integer expected";
        return null;
    };

    /**
     * Creates a RSDMO message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RSDMO
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RSDMO} RSDMO
     */
    RSDMO.fromObject = function fromObject(object) {
        if (object instanceof $root.RSDMO)
            return object;
        var message = new $root.RSDMO();
        if (object.serialNumber != null)
            if ($util.Long)
                (message.serialNumber = $util.Long.fromValue(object.serialNumber)).unsigned = false;
            else if (typeof object.serialNumber === "string")
                message.serialNumber = parseInt(object.serialNumber, 10);
            else if (typeof object.serialNumber === "number")
                message.serialNumber = object.serialNumber;
            else if (typeof object.serialNumber === "object")
                message.serialNumber = new $util.LongBits(object.serialNumber.low >>> 0, object.serialNumber.high >>> 0).toNumber();
        if (object.firmwareVersion != null)
            message.firmwareVersion = object.firmwareVersion | 0;
        if (object.voltage != null)
            message.voltage = object.voltage | 0;
        if (object.power != null)
            message.power = object.power | 0;
        if (object.temperature != null)
            message.temperature = object.temperature | 0;
        if (object.warningNumber != null)
            message.warningNumber = object.warningNumber | 0;
        if (object.crcChecksum != null)
            message.crcChecksum = object.crcChecksum | 0;
        if (object.linkStatus != null)
            message.linkStatus = object.linkStatus | 0;
        return message;
    };

    /**
     * Creates a plain object from a RSDMO message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RSDMO
     * @static
     * @param {RSDMO} message RSDMO
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RSDMO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.serialNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.serialNumber = options.longs === String ? "0" : 0;
            object.firmwareVersion = 0;
            object.voltage = 0;
            object.power = 0;
            object.temperature = 0;
            object.warningNumber = 0;
            object.crcChecksum = 0;
            object.linkStatus = 0;
        }
        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
            if (typeof message.serialNumber === "number")
                object.serialNumber = options.longs === String ? String(message.serialNumber) : message.serialNumber;
            else
                object.serialNumber = options.longs === String ? $util.Long.prototype.toString.call(message.serialNumber) : options.longs === Number ? new $util.LongBits(message.serialNumber.low >>> 0, message.serialNumber.high >>> 0).toNumber() : message.serialNumber;
        if (message.firmwareVersion != null && message.hasOwnProperty("firmwareVersion"))
            object.firmwareVersion = message.firmwareVersion;
        if (message.voltage != null && message.hasOwnProperty("voltage"))
            object.voltage = message.voltage;
        if (message.power != null && message.hasOwnProperty("power"))
            object.power = message.power;
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            object.temperature = message.temperature;
        if (message.warningNumber != null && message.hasOwnProperty("warningNumber"))
            object.warningNumber = message.warningNumber;
        if (message.crcChecksum != null && message.hasOwnProperty("crcChecksum"))
            object.crcChecksum = message.crcChecksum;
        if (message.linkStatus != null && message.hasOwnProperty("linkStatus"))
            object.linkStatus = message.linkStatus;
        return object;
    };

    /**
     * Converts this RSDMO to JSON.
     * @function toJSON
     * @memberof RSDMO
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RSDMO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RSDMO
     * @function getTypeUrl
     * @memberof RSDMO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RSDMO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RSDMO";
    };

    return RSDMO;
})();

$root.SGSMO = (function() {

    /**
     * Properties of a SGSMO.
     * @exports ISGSMO
     * @interface ISGSMO
     * @property {number|Long|null} [serialNumber] SGSMO serialNumber
     * @property {number|null} [firmwareVersion] SGSMO firmwareVersion
     * @property {number|null} [voltage] SGSMO voltage
     * @property {number|null} [frequency] SGSMO frequency
     * @property {number|null} [activePower] SGSMO activePower
     * @property {number|null} [reactivePower] SGSMO reactivePower
     * @property {number|null} [current] SGSMO current
     * @property {number|null} [powerFactor] SGSMO powerFactor
     * @property {number|null} [temperature] SGSMO temperature
     * @property {number|null} [warningNumber] SGSMO warningNumber
     * @property {number|null} [crcChecksum] SGSMO crcChecksum
     * @property {number|null} [linkStatus] SGSMO linkStatus
     * @property {number|null} [powerLimit] SGSMO powerLimit
     * @property {number|null} [modulationIndexSignal] SGSMO modulationIndexSignal
     */

    /**
     * Constructs a new SGSMO.
     * @exports SGSMO
     * @classdesc Represents a SGSMO.
     * @implements ISGSMO
     * @constructor
     * @param {ISGSMO=} [properties] Properties to set
     */
    function SGSMO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SGSMO serialNumber.
     * @member {number|Long} serialNumber
     * @memberof SGSMO
     * @instance
     */
    SGSMO.prototype.serialNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * SGSMO firmwareVersion.
     * @member {number} firmwareVersion
     * @memberof SGSMO
     * @instance
     */
    SGSMO.prototype.firmwareVersion = 0;

    /**
     * SGSMO voltage.
     * @member {number} voltage
     * @memberof SGSMO
     * @instance
     */
    SGSMO.prototype.voltage = 0;

    /**
     * SGSMO frequency.
     * @member {number} frequency
     * @memberof SGSMO
     * @instance
     */
    SGSMO.prototype.frequency = 0;

    /**
     * SGSMO activePower.
     * @member {number} activePower
     * @memberof SGSMO
     * @instance
     */
    SGSMO.prototype.activePower = 0;

    /**
     * SGSMO reactivePower.
     * @member {number} reactivePower
     * @memberof SGSMO
     * @instance
     */
    SGSMO.prototype.reactivePower = 0;

    /**
     * SGSMO current.
     * @member {number} current
     * @memberof SGSMO
     * @instance
     */
    SGSMO.prototype.current = 0;

    /**
     * SGSMO powerFactor.
     * @member {number} powerFactor
     * @memberof SGSMO
     * @instance
     */
    SGSMO.prototype.powerFactor = 0;

    /**
     * SGSMO temperature.
     * @member {number} temperature
     * @memberof SGSMO
     * @instance
     */
    SGSMO.prototype.temperature = 0;

    /**
     * SGSMO warningNumber.
     * @member {number} warningNumber
     * @memberof SGSMO
     * @instance
     */
    SGSMO.prototype.warningNumber = 0;

    /**
     * SGSMO crcChecksum.
     * @member {number} crcChecksum
     * @memberof SGSMO
     * @instance
     */
    SGSMO.prototype.crcChecksum = 0;

    /**
     * SGSMO linkStatus.
     * @member {number} linkStatus
     * @memberof SGSMO
     * @instance
     */
    SGSMO.prototype.linkStatus = 0;

    /**
     * SGSMO powerLimit.
     * @member {number} powerLimit
     * @memberof SGSMO
     * @instance
     */
    SGSMO.prototype.powerLimit = 0;

    /**
     * SGSMO modulationIndexSignal.
     * @member {number} modulationIndexSignal
     * @memberof SGSMO
     * @instance
     */
    SGSMO.prototype.modulationIndexSignal = 0;

    /**
     * Creates a new SGSMO instance using the specified properties.
     * @function create
     * @memberof SGSMO
     * @static
     * @param {ISGSMO=} [properties] Properties to set
     * @returns {SGSMO} SGSMO instance
     */
    SGSMO.create = function create(properties) {
        return new SGSMO(properties);
    };

    /**
     * Encodes the specified SGSMO message. Does not implicitly {@link SGSMO.verify|verify} messages.
     * @function encode
     * @memberof SGSMO
     * @static
     * @param {ISGSMO} message SGSMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SGSMO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.serialNumber != null && Object.hasOwnProperty.call(message, "serialNumber"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.serialNumber);
        if (message.firmwareVersion != null && Object.hasOwnProperty.call(message, "firmwareVersion"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.firmwareVersion);
        if (message.voltage != null && Object.hasOwnProperty.call(message, "voltage"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.voltage);
        if (message.frequency != null && Object.hasOwnProperty.call(message, "frequency"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.frequency);
        if (message.activePower != null && Object.hasOwnProperty.call(message, "activePower"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.activePower);
        if (message.reactivePower != null && Object.hasOwnProperty.call(message, "reactivePower"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.reactivePower);
        if (message.current != null && Object.hasOwnProperty.call(message, "current"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.current);
        if (message.powerFactor != null && Object.hasOwnProperty.call(message, "powerFactor"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.powerFactor);
        if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.temperature);
        if (message.warningNumber != null && Object.hasOwnProperty.call(message, "warningNumber"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.warningNumber);
        if (message.crcChecksum != null && Object.hasOwnProperty.call(message, "crcChecksum"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.crcChecksum);
        if (message.linkStatus != null && Object.hasOwnProperty.call(message, "linkStatus"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.linkStatus);
        if (message.powerLimit != null && Object.hasOwnProperty.call(message, "powerLimit"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.powerLimit);
        if (message.modulationIndexSignal != null && Object.hasOwnProperty.call(message, "modulationIndexSignal"))
            writer.uint32(/* id 20, wireType 0 =*/160).int32(message.modulationIndexSignal);
        return writer;
    };

    /**
     * Encodes the specified SGSMO message, length delimited. Does not implicitly {@link SGSMO.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SGSMO
     * @static
     * @param {ISGSMO} message SGSMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SGSMO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SGSMO message from the specified reader or buffer.
     * @function decode
     * @memberof SGSMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SGSMO} SGSMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SGSMO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SGSMO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.serialNumber = reader.int64();
                    break;
                }
            case 2: {
                    message.firmwareVersion = reader.int32();
                    break;
                }
            case 3: {
                    message.voltage = reader.int32();
                    break;
                }
            case 4: {
                    message.frequency = reader.int32();
                    break;
                }
            case 5: {
                    message.activePower = reader.int32();
                    break;
                }
            case 6: {
                    message.reactivePower = reader.int32();
                    break;
                }
            case 7: {
                    message.current = reader.int32();
                    break;
                }
            case 8: {
                    message.powerFactor = reader.int32();
                    break;
                }
            case 9: {
                    message.temperature = reader.int32();
                    break;
                }
            case 10: {
                    message.warningNumber = reader.int32();
                    break;
                }
            case 11: {
                    message.crcChecksum = reader.int32();
                    break;
                }
            case 12: {
                    message.linkStatus = reader.int32();
                    break;
                }
            case 13: {
                    message.powerLimit = reader.int32();
                    break;
                }
            case 20: {
                    message.modulationIndexSignal = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SGSMO message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SGSMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SGSMO} SGSMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SGSMO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SGSMO message.
     * @function verify
     * @memberof SGSMO
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SGSMO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
            if (!$util.isInteger(message.serialNumber) && !(message.serialNumber && $util.isInteger(message.serialNumber.low) && $util.isInteger(message.serialNumber.high)))
                return "serialNumber: integer|Long expected";
        if (message.firmwareVersion != null && message.hasOwnProperty("firmwareVersion"))
            if (!$util.isInteger(message.firmwareVersion))
                return "firmwareVersion: integer expected";
        if (message.voltage != null && message.hasOwnProperty("voltage"))
            if (!$util.isInteger(message.voltage))
                return "voltage: integer expected";
        if (message.frequency != null && message.hasOwnProperty("frequency"))
            if (!$util.isInteger(message.frequency))
                return "frequency: integer expected";
        if (message.activePower != null && message.hasOwnProperty("activePower"))
            if (!$util.isInteger(message.activePower))
                return "activePower: integer expected";
        if (message.reactivePower != null && message.hasOwnProperty("reactivePower"))
            if (!$util.isInteger(message.reactivePower))
                return "reactivePower: integer expected";
        if (message.current != null && message.hasOwnProperty("current"))
            if (!$util.isInteger(message.current))
                return "current: integer expected";
        if (message.powerFactor != null && message.hasOwnProperty("powerFactor"))
            if (!$util.isInteger(message.powerFactor))
                return "powerFactor: integer expected";
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            if (!$util.isInteger(message.temperature))
                return "temperature: integer expected";
        if (message.warningNumber != null && message.hasOwnProperty("warningNumber"))
            if (!$util.isInteger(message.warningNumber))
                return "warningNumber: integer expected";
        if (message.crcChecksum != null && message.hasOwnProperty("crcChecksum"))
            if (!$util.isInteger(message.crcChecksum))
                return "crcChecksum: integer expected";
        if (message.linkStatus != null && message.hasOwnProperty("linkStatus"))
            if (!$util.isInteger(message.linkStatus))
                return "linkStatus: integer expected";
        if (message.powerLimit != null && message.hasOwnProperty("powerLimit"))
            if (!$util.isInteger(message.powerLimit))
                return "powerLimit: integer expected";
        if (message.modulationIndexSignal != null && message.hasOwnProperty("modulationIndexSignal"))
            if (!$util.isInteger(message.modulationIndexSignal))
                return "modulationIndexSignal: integer expected";
        return null;
    };

    /**
     * Creates a SGSMO message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SGSMO
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SGSMO} SGSMO
     */
    SGSMO.fromObject = function fromObject(object) {
        if (object instanceof $root.SGSMO)
            return object;
        var message = new $root.SGSMO();
        if (object.serialNumber != null)
            if ($util.Long)
                (message.serialNumber = $util.Long.fromValue(object.serialNumber)).unsigned = false;
            else if (typeof object.serialNumber === "string")
                message.serialNumber = parseInt(object.serialNumber, 10);
            else if (typeof object.serialNumber === "number")
                message.serialNumber = object.serialNumber;
            else if (typeof object.serialNumber === "object")
                message.serialNumber = new $util.LongBits(object.serialNumber.low >>> 0, object.serialNumber.high >>> 0).toNumber();
        if (object.firmwareVersion != null)
            message.firmwareVersion = object.firmwareVersion | 0;
        if (object.voltage != null)
            message.voltage = object.voltage | 0;
        if (object.frequency != null)
            message.frequency = object.frequency | 0;
        if (object.activePower != null)
            message.activePower = object.activePower | 0;
        if (object.reactivePower != null)
            message.reactivePower = object.reactivePower | 0;
        if (object.current != null)
            message.current = object.current | 0;
        if (object.powerFactor != null)
            message.powerFactor = object.powerFactor | 0;
        if (object.temperature != null)
            message.temperature = object.temperature | 0;
        if (object.warningNumber != null)
            message.warningNumber = object.warningNumber | 0;
        if (object.crcChecksum != null)
            message.crcChecksum = object.crcChecksum | 0;
        if (object.linkStatus != null)
            message.linkStatus = object.linkStatus | 0;
        if (object.powerLimit != null)
            message.powerLimit = object.powerLimit | 0;
        if (object.modulationIndexSignal != null)
            message.modulationIndexSignal = object.modulationIndexSignal | 0;
        return message;
    };

    /**
     * Creates a plain object from a SGSMO message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SGSMO
     * @static
     * @param {SGSMO} message SGSMO
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SGSMO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.serialNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.serialNumber = options.longs === String ? "0" : 0;
            object.firmwareVersion = 0;
            object.voltage = 0;
            object.frequency = 0;
            object.activePower = 0;
            object.reactivePower = 0;
            object.current = 0;
            object.powerFactor = 0;
            object.temperature = 0;
            object.warningNumber = 0;
            object.crcChecksum = 0;
            object.linkStatus = 0;
            object.powerLimit = 0;
            object.modulationIndexSignal = 0;
        }
        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
            if (typeof message.serialNumber === "number")
                object.serialNumber = options.longs === String ? String(message.serialNumber) : message.serialNumber;
            else
                object.serialNumber = options.longs === String ? $util.Long.prototype.toString.call(message.serialNumber) : options.longs === Number ? new $util.LongBits(message.serialNumber.low >>> 0, message.serialNumber.high >>> 0).toNumber() : message.serialNumber;
        if (message.firmwareVersion != null && message.hasOwnProperty("firmwareVersion"))
            object.firmwareVersion = message.firmwareVersion;
        if (message.voltage != null && message.hasOwnProperty("voltage"))
            object.voltage = message.voltage;
        if (message.frequency != null && message.hasOwnProperty("frequency"))
            object.frequency = message.frequency;
        if (message.activePower != null && message.hasOwnProperty("activePower"))
            object.activePower = message.activePower;
        if (message.reactivePower != null && message.hasOwnProperty("reactivePower"))
            object.reactivePower = message.reactivePower;
        if (message.current != null && message.hasOwnProperty("current"))
            object.current = message.current;
        if (message.powerFactor != null && message.hasOwnProperty("powerFactor"))
            object.powerFactor = message.powerFactor;
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            object.temperature = message.temperature;
        if (message.warningNumber != null && message.hasOwnProperty("warningNumber"))
            object.warningNumber = message.warningNumber;
        if (message.crcChecksum != null && message.hasOwnProperty("crcChecksum"))
            object.crcChecksum = message.crcChecksum;
        if (message.linkStatus != null && message.hasOwnProperty("linkStatus"))
            object.linkStatus = message.linkStatus;
        if (message.powerLimit != null && message.hasOwnProperty("powerLimit"))
            object.powerLimit = message.powerLimit;
        if (message.modulationIndexSignal != null && message.hasOwnProperty("modulationIndexSignal"))
            object.modulationIndexSignal = message.modulationIndexSignal;
        return object;
    };

    /**
     * Converts this SGSMO to JSON.
     * @function toJSON
     * @memberof SGSMO
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SGSMO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SGSMO
     * @function getTypeUrl
     * @memberof SGSMO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SGSMO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SGSMO";
    };

    return SGSMO;
})();

$root.TGSMO = (function() {

    /**
     * Properties of a TGSMO.
     * @exports ITGSMO
     * @interface ITGSMO
     * @property {number|Long|null} [serialNumber] TGSMO serialNumber
     * @property {number|null} [firmwareVersion] TGSMO firmwareVersion
     * @property {number|null} [voltagePhase_A] TGSMO voltagePhase_A
     * @property {number|null} [voltagePhase_B] TGSMO voltagePhase_B
     * @property {number|null} [voltagePhase_C] TGSMO voltagePhase_C
     * @property {number|null} [voltageLine_AB] TGSMO voltageLine_AB
     * @property {number|null} [voltageLine_BC] TGSMO voltageLine_BC
     * @property {number|null} [voltageLine_CA] TGSMO voltageLine_CA
     * @property {number|null} [frequency] TGSMO frequency
     * @property {number|null} [activePower] TGSMO activePower
     * @property {number|null} [reactivePower] TGSMO reactivePower
     * @property {number|null} [currentPhase_A] TGSMO currentPhase_A
     * @property {number|null} [currentPhase_B] TGSMO currentPhase_B
     * @property {number|null} [currentPhase_C] TGSMO currentPhase_C
     * @property {number|null} [powerFactor] TGSMO powerFactor
     * @property {number|null} [temperature] TGSMO temperature
     * @property {number|null} [warningNumber] TGSMO warningNumber
     * @property {number|null} [crcChecksum] TGSMO crcChecksum
     * @property {number|null} [linkStatus] TGSMO linkStatus
     * @property {number|null} [modulationIndexSignal] TGSMO modulationIndexSignal
     */

    /**
     * Constructs a new TGSMO.
     * @exports TGSMO
     * @classdesc Represents a TGSMO.
     * @implements ITGSMO
     * @constructor
     * @param {ITGSMO=} [properties] Properties to set
     */
    function TGSMO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TGSMO serialNumber.
     * @member {number|Long} serialNumber
     * @memberof TGSMO
     * @instance
     */
    TGSMO.prototype.serialNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * TGSMO firmwareVersion.
     * @member {number} firmwareVersion
     * @memberof TGSMO
     * @instance
     */
    TGSMO.prototype.firmwareVersion = 0;

    /**
     * TGSMO voltagePhase_A.
     * @member {number} voltagePhase_A
     * @memberof TGSMO
     * @instance
     */
    TGSMO.prototype.voltagePhase_A = 0;

    /**
     * TGSMO voltagePhase_B.
     * @member {number} voltagePhase_B
     * @memberof TGSMO
     * @instance
     */
    TGSMO.prototype.voltagePhase_B = 0;

    /**
     * TGSMO voltagePhase_C.
     * @member {number} voltagePhase_C
     * @memberof TGSMO
     * @instance
     */
    TGSMO.prototype.voltagePhase_C = 0;

    /**
     * TGSMO voltageLine_AB.
     * @member {number} voltageLine_AB
     * @memberof TGSMO
     * @instance
     */
    TGSMO.prototype.voltageLine_AB = 0;

    /**
     * TGSMO voltageLine_BC.
     * @member {number} voltageLine_BC
     * @memberof TGSMO
     * @instance
     */
    TGSMO.prototype.voltageLine_BC = 0;

    /**
     * TGSMO voltageLine_CA.
     * @member {number} voltageLine_CA
     * @memberof TGSMO
     * @instance
     */
    TGSMO.prototype.voltageLine_CA = 0;

    /**
     * TGSMO frequency.
     * @member {number} frequency
     * @memberof TGSMO
     * @instance
     */
    TGSMO.prototype.frequency = 0;

    /**
     * TGSMO activePower.
     * @member {number} activePower
     * @memberof TGSMO
     * @instance
     */
    TGSMO.prototype.activePower = 0;

    /**
     * TGSMO reactivePower.
     * @member {number} reactivePower
     * @memberof TGSMO
     * @instance
     */
    TGSMO.prototype.reactivePower = 0;

    /**
     * TGSMO currentPhase_A.
     * @member {number} currentPhase_A
     * @memberof TGSMO
     * @instance
     */
    TGSMO.prototype.currentPhase_A = 0;

    /**
     * TGSMO currentPhase_B.
     * @member {number} currentPhase_B
     * @memberof TGSMO
     * @instance
     */
    TGSMO.prototype.currentPhase_B = 0;

    /**
     * TGSMO currentPhase_C.
     * @member {number} currentPhase_C
     * @memberof TGSMO
     * @instance
     */
    TGSMO.prototype.currentPhase_C = 0;

    /**
     * TGSMO powerFactor.
     * @member {number} powerFactor
     * @memberof TGSMO
     * @instance
     */
    TGSMO.prototype.powerFactor = 0;

    /**
     * TGSMO temperature.
     * @member {number} temperature
     * @memberof TGSMO
     * @instance
     */
    TGSMO.prototype.temperature = 0;

    /**
     * TGSMO warningNumber.
     * @member {number} warningNumber
     * @memberof TGSMO
     * @instance
     */
    TGSMO.prototype.warningNumber = 0;

    /**
     * TGSMO crcChecksum.
     * @member {number} crcChecksum
     * @memberof TGSMO
     * @instance
     */
    TGSMO.prototype.crcChecksum = 0;

    /**
     * TGSMO linkStatus.
     * @member {number} linkStatus
     * @memberof TGSMO
     * @instance
     */
    TGSMO.prototype.linkStatus = 0;

    /**
     * TGSMO modulationIndexSignal.
     * @member {number} modulationIndexSignal
     * @memberof TGSMO
     * @instance
     */
    TGSMO.prototype.modulationIndexSignal = 0;

    /**
     * Creates a new TGSMO instance using the specified properties.
     * @function create
     * @memberof TGSMO
     * @static
     * @param {ITGSMO=} [properties] Properties to set
     * @returns {TGSMO} TGSMO instance
     */
    TGSMO.create = function create(properties) {
        return new TGSMO(properties);
    };

    /**
     * Encodes the specified TGSMO message. Does not implicitly {@link TGSMO.verify|verify} messages.
     * @function encode
     * @memberof TGSMO
     * @static
     * @param {ITGSMO} message TGSMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TGSMO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.serialNumber != null && Object.hasOwnProperty.call(message, "serialNumber"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.serialNumber);
        if (message.firmwareVersion != null && Object.hasOwnProperty.call(message, "firmwareVersion"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.firmwareVersion);
        if (message.voltagePhase_A != null && Object.hasOwnProperty.call(message, "voltagePhase_A"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.voltagePhase_A);
        if (message.voltagePhase_B != null && Object.hasOwnProperty.call(message, "voltagePhase_B"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.voltagePhase_B);
        if (message.voltagePhase_C != null && Object.hasOwnProperty.call(message, "voltagePhase_C"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.voltagePhase_C);
        if (message.voltageLine_AB != null && Object.hasOwnProperty.call(message, "voltageLine_AB"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.voltageLine_AB);
        if (message.voltageLine_BC != null && Object.hasOwnProperty.call(message, "voltageLine_BC"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.voltageLine_BC);
        if (message.voltageLine_CA != null && Object.hasOwnProperty.call(message, "voltageLine_CA"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.voltageLine_CA);
        if (message.frequency != null && Object.hasOwnProperty.call(message, "frequency"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.frequency);
        if (message.activePower != null && Object.hasOwnProperty.call(message, "activePower"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.activePower);
        if (message.reactivePower != null && Object.hasOwnProperty.call(message, "reactivePower"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.reactivePower);
        if (message.currentPhase_A != null && Object.hasOwnProperty.call(message, "currentPhase_A"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.currentPhase_A);
        if (message.currentPhase_B != null && Object.hasOwnProperty.call(message, "currentPhase_B"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.currentPhase_B);
        if (message.currentPhase_C != null && Object.hasOwnProperty.call(message, "currentPhase_C"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.currentPhase_C);
        if (message.powerFactor != null && Object.hasOwnProperty.call(message, "powerFactor"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.powerFactor);
        if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.temperature);
        if (message.warningNumber != null && Object.hasOwnProperty.call(message, "warningNumber"))
            writer.uint32(/* id 17, wireType 0 =*/136).int32(message.warningNumber);
        if (message.crcChecksum != null && Object.hasOwnProperty.call(message, "crcChecksum"))
            writer.uint32(/* id 18, wireType 0 =*/144).int32(message.crcChecksum);
        if (message.linkStatus != null && Object.hasOwnProperty.call(message, "linkStatus"))
            writer.uint32(/* id 19, wireType 0 =*/152).int32(message.linkStatus);
        if (message.modulationIndexSignal != null && Object.hasOwnProperty.call(message, "modulationIndexSignal"))
            writer.uint32(/* id 20, wireType 0 =*/160).int32(message.modulationIndexSignal);
        return writer;
    };

    /**
     * Encodes the specified TGSMO message, length delimited. Does not implicitly {@link TGSMO.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TGSMO
     * @static
     * @param {ITGSMO} message TGSMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TGSMO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TGSMO message from the specified reader or buffer.
     * @function decode
     * @memberof TGSMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TGSMO} TGSMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TGSMO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TGSMO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.serialNumber = reader.int64();
                    break;
                }
            case 2: {
                    message.firmwareVersion = reader.int32();
                    break;
                }
            case 3: {
                    message.voltagePhase_A = reader.int32();
                    break;
                }
            case 4: {
                    message.voltagePhase_B = reader.int32();
                    break;
                }
            case 5: {
                    message.voltagePhase_C = reader.int32();
                    break;
                }
            case 6: {
                    message.voltageLine_AB = reader.int32();
                    break;
                }
            case 7: {
                    message.voltageLine_BC = reader.int32();
                    break;
                }
            case 8: {
                    message.voltageLine_CA = reader.int32();
                    break;
                }
            case 9: {
                    message.frequency = reader.int32();
                    break;
                }
            case 10: {
                    message.activePower = reader.int32();
                    break;
                }
            case 11: {
                    message.reactivePower = reader.int32();
                    break;
                }
            case 12: {
                    message.currentPhase_A = reader.int32();
                    break;
                }
            case 13: {
                    message.currentPhase_B = reader.int32();
                    break;
                }
            case 14: {
                    message.currentPhase_C = reader.int32();
                    break;
                }
            case 15: {
                    message.powerFactor = reader.int32();
                    break;
                }
            case 16: {
                    message.temperature = reader.int32();
                    break;
                }
            case 17: {
                    message.warningNumber = reader.int32();
                    break;
                }
            case 18: {
                    message.crcChecksum = reader.int32();
                    break;
                }
            case 19: {
                    message.linkStatus = reader.int32();
                    break;
                }
            case 20: {
                    message.modulationIndexSignal = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TGSMO message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TGSMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TGSMO} TGSMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TGSMO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TGSMO message.
     * @function verify
     * @memberof TGSMO
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TGSMO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
            if (!$util.isInteger(message.serialNumber) && !(message.serialNumber && $util.isInteger(message.serialNumber.low) && $util.isInteger(message.serialNumber.high)))
                return "serialNumber: integer|Long expected";
        if (message.firmwareVersion != null && message.hasOwnProperty("firmwareVersion"))
            if (!$util.isInteger(message.firmwareVersion))
                return "firmwareVersion: integer expected";
        if (message.voltagePhase_A != null && message.hasOwnProperty("voltagePhase_A"))
            if (!$util.isInteger(message.voltagePhase_A))
                return "voltagePhase_A: integer expected";
        if (message.voltagePhase_B != null && message.hasOwnProperty("voltagePhase_B"))
            if (!$util.isInteger(message.voltagePhase_B))
                return "voltagePhase_B: integer expected";
        if (message.voltagePhase_C != null && message.hasOwnProperty("voltagePhase_C"))
            if (!$util.isInteger(message.voltagePhase_C))
                return "voltagePhase_C: integer expected";
        if (message.voltageLine_AB != null && message.hasOwnProperty("voltageLine_AB"))
            if (!$util.isInteger(message.voltageLine_AB))
                return "voltageLine_AB: integer expected";
        if (message.voltageLine_BC != null && message.hasOwnProperty("voltageLine_BC"))
            if (!$util.isInteger(message.voltageLine_BC))
                return "voltageLine_BC: integer expected";
        if (message.voltageLine_CA != null && message.hasOwnProperty("voltageLine_CA"))
            if (!$util.isInteger(message.voltageLine_CA))
                return "voltageLine_CA: integer expected";
        if (message.frequency != null && message.hasOwnProperty("frequency"))
            if (!$util.isInteger(message.frequency))
                return "frequency: integer expected";
        if (message.activePower != null && message.hasOwnProperty("activePower"))
            if (!$util.isInteger(message.activePower))
                return "activePower: integer expected";
        if (message.reactivePower != null && message.hasOwnProperty("reactivePower"))
            if (!$util.isInteger(message.reactivePower))
                return "reactivePower: integer expected";
        if (message.currentPhase_A != null && message.hasOwnProperty("currentPhase_A"))
            if (!$util.isInteger(message.currentPhase_A))
                return "currentPhase_A: integer expected";
        if (message.currentPhase_B != null && message.hasOwnProperty("currentPhase_B"))
            if (!$util.isInteger(message.currentPhase_B))
                return "currentPhase_B: integer expected";
        if (message.currentPhase_C != null && message.hasOwnProperty("currentPhase_C"))
            if (!$util.isInteger(message.currentPhase_C))
                return "currentPhase_C: integer expected";
        if (message.powerFactor != null && message.hasOwnProperty("powerFactor"))
            if (!$util.isInteger(message.powerFactor))
                return "powerFactor: integer expected";
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            if (!$util.isInteger(message.temperature))
                return "temperature: integer expected";
        if (message.warningNumber != null && message.hasOwnProperty("warningNumber"))
            if (!$util.isInteger(message.warningNumber))
                return "warningNumber: integer expected";
        if (message.crcChecksum != null && message.hasOwnProperty("crcChecksum"))
            if (!$util.isInteger(message.crcChecksum))
                return "crcChecksum: integer expected";
        if (message.linkStatus != null && message.hasOwnProperty("linkStatus"))
            if (!$util.isInteger(message.linkStatus))
                return "linkStatus: integer expected";
        if (message.modulationIndexSignal != null && message.hasOwnProperty("modulationIndexSignal"))
            if (!$util.isInteger(message.modulationIndexSignal))
                return "modulationIndexSignal: integer expected";
        return null;
    };

    /**
     * Creates a TGSMO message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TGSMO
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TGSMO} TGSMO
     */
    TGSMO.fromObject = function fromObject(object) {
        if (object instanceof $root.TGSMO)
            return object;
        var message = new $root.TGSMO();
        if (object.serialNumber != null)
            if ($util.Long)
                (message.serialNumber = $util.Long.fromValue(object.serialNumber)).unsigned = false;
            else if (typeof object.serialNumber === "string")
                message.serialNumber = parseInt(object.serialNumber, 10);
            else if (typeof object.serialNumber === "number")
                message.serialNumber = object.serialNumber;
            else if (typeof object.serialNumber === "object")
                message.serialNumber = new $util.LongBits(object.serialNumber.low >>> 0, object.serialNumber.high >>> 0).toNumber();
        if (object.firmwareVersion != null)
            message.firmwareVersion = object.firmwareVersion | 0;
        if (object.voltagePhase_A != null)
            message.voltagePhase_A = object.voltagePhase_A | 0;
        if (object.voltagePhase_B != null)
            message.voltagePhase_B = object.voltagePhase_B | 0;
        if (object.voltagePhase_C != null)
            message.voltagePhase_C = object.voltagePhase_C | 0;
        if (object.voltageLine_AB != null)
            message.voltageLine_AB = object.voltageLine_AB | 0;
        if (object.voltageLine_BC != null)
            message.voltageLine_BC = object.voltageLine_BC | 0;
        if (object.voltageLine_CA != null)
            message.voltageLine_CA = object.voltageLine_CA | 0;
        if (object.frequency != null)
            message.frequency = object.frequency | 0;
        if (object.activePower != null)
            message.activePower = object.activePower | 0;
        if (object.reactivePower != null)
            message.reactivePower = object.reactivePower | 0;
        if (object.currentPhase_A != null)
            message.currentPhase_A = object.currentPhase_A | 0;
        if (object.currentPhase_B != null)
            message.currentPhase_B = object.currentPhase_B | 0;
        if (object.currentPhase_C != null)
            message.currentPhase_C = object.currentPhase_C | 0;
        if (object.powerFactor != null)
            message.powerFactor = object.powerFactor | 0;
        if (object.temperature != null)
            message.temperature = object.temperature | 0;
        if (object.warningNumber != null)
            message.warningNumber = object.warningNumber | 0;
        if (object.crcChecksum != null)
            message.crcChecksum = object.crcChecksum | 0;
        if (object.linkStatus != null)
            message.linkStatus = object.linkStatus | 0;
        if (object.modulationIndexSignal != null)
            message.modulationIndexSignal = object.modulationIndexSignal | 0;
        return message;
    };

    /**
     * Creates a plain object from a TGSMO message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TGSMO
     * @static
     * @param {TGSMO} message TGSMO
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TGSMO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.serialNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.serialNumber = options.longs === String ? "0" : 0;
            object.firmwareVersion = 0;
            object.voltagePhase_A = 0;
            object.voltagePhase_B = 0;
            object.voltagePhase_C = 0;
            object.voltageLine_AB = 0;
            object.voltageLine_BC = 0;
            object.voltageLine_CA = 0;
            object.frequency = 0;
            object.activePower = 0;
            object.reactivePower = 0;
            object.currentPhase_A = 0;
            object.currentPhase_B = 0;
            object.currentPhase_C = 0;
            object.powerFactor = 0;
            object.temperature = 0;
            object.warningNumber = 0;
            object.crcChecksum = 0;
            object.linkStatus = 0;
            object.modulationIndexSignal = 0;
        }
        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
            if (typeof message.serialNumber === "number")
                object.serialNumber = options.longs === String ? String(message.serialNumber) : message.serialNumber;
            else
                object.serialNumber = options.longs === String ? $util.Long.prototype.toString.call(message.serialNumber) : options.longs === Number ? new $util.LongBits(message.serialNumber.low >>> 0, message.serialNumber.high >>> 0).toNumber() : message.serialNumber;
        if (message.firmwareVersion != null && message.hasOwnProperty("firmwareVersion"))
            object.firmwareVersion = message.firmwareVersion;
        if (message.voltagePhase_A != null && message.hasOwnProperty("voltagePhase_A"))
            object.voltagePhase_A = message.voltagePhase_A;
        if (message.voltagePhase_B != null && message.hasOwnProperty("voltagePhase_B"))
            object.voltagePhase_B = message.voltagePhase_B;
        if (message.voltagePhase_C != null && message.hasOwnProperty("voltagePhase_C"))
            object.voltagePhase_C = message.voltagePhase_C;
        if (message.voltageLine_AB != null && message.hasOwnProperty("voltageLine_AB"))
            object.voltageLine_AB = message.voltageLine_AB;
        if (message.voltageLine_BC != null && message.hasOwnProperty("voltageLine_BC"))
            object.voltageLine_BC = message.voltageLine_BC;
        if (message.voltageLine_CA != null && message.hasOwnProperty("voltageLine_CA"))
            object.voltageLine_CA = message.voltageLine_CA;
        if (message.frequency != null && message.hasOwnProperty("frequency"))
            object.frequency = message.frequency;
        if (message.activePower != null && message.hasOwnProperty("activePower"))
            object.activePower = message.activePower;
        if (message.reactivePower != null && message.hasOwnProperty("reactivePower"))
            object.reactivePower = message.reactivePower;
        if (message.currentPhase_A != null && message.hasOwnProperty("currentPhase_A"))
            object.currentPhase_A = message.currentPhase_A;
        if (message.currentPhase_B != null && message.hasOwnProperty("currentPhase_B"))
            object.currentPhase_B = message.currentPhase_B;
        if (message.currentPhase_C != null && message.hasOwnProperty("currentPhase_C"))
            object.currentPhase_C = message.currentPhase_C;
        if (message.powerFactor != null && message.hasOwnProperty("powerFactor"))
            object.powerFactor = message.powerFactor;
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            object.temperature = message.temperature;
        if (message.warningNumber != null && message.hasOwnProperty("warningNumber"))
            object.warningNumber = message.warningNumber;
        if (message.crcChecksum != null && message.hasOwnProperty("crcChecksum"))
            object.crcChecksum = message.crcChecksum;
        if (message.linkStatus != null && message.hasOwnProperty("linkStatus"))
            object.linkStatus = message.linkStatus;
        if (message.modulationIndexSignal != null && message.hasOwnProperty("modulationIndexSignal"))
            object.modulationIndexSignal = message.modulationIndexSignal;
        return object;
    };

    /**
     * Converts this TGSMO to JSON.
     * @function toJSON
     * @memberof TGSMO
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TGSMO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TGSMO
     * @function getTypeUrl
     * @memberof TGSMO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TGSMO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TGSMO";
    };

    return TGSMO;
})();

$root.PvMO = (function() {

    /**
     * Properties of a PvMO.
     * @exports IPvMO
     * @interface IPvMO
     * @property {number|Long|null} [serialNumber] PvMO serialNumber
     * @property {number|null} [portNumber] PvMO portNumber
     * @property {number|null} [voltage] PvMO voltage
     * @property {number|null} [current] PvMO current
     * @property {number|null} [power] PvMO power
     * @property {number|null} [energyTotal] PvMO energyTotal
     * @property {number|null} [energyDaily] PvMO energyDaily
     * @property {number|null} [errorCode] PvMO errorCode
     */

    /**
     * Constructs a new PvMO.
     * @exports PvMO
     * @classdesc Represents a PvMO.
     * @implements IPvMO
     * @constructor
     * @param {IPvMO=} [properties] Properties to set
     */
    function PvMO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PvMO serialNumber.
     * @member {number|Long} serialNumber
     * @memberof PvMO
     * @instance
     */
    PvMO.prototype.serialNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PvMO portNumber.
     * @member {number} portNumber
     * @memberof PvMO
     * @instance
     */
    PvMO.prototype.portNumber = 0;

    /**
     * PvMO voltage.
     * @member {number} voltage
     * @memberof PvMO
     * @instance
     */
    PvMO.prototype.voltage = 0;

    /**
     * PvMO current.
     * @member {number} current
     * @memberof PvMO
     * @instance
     */
    PvMO.prototype.current = 0;

    /**
     * PvMO power.
     * @member {number} power
     * @memberof PvMO
     * @instance
     */
    PvMO.prototype.power = 0;

    /**
     * PvMO energyTotal.
     * @member {number} energyTotal
     * @memberof PvMO
     * @instance
     */
    PvMO.prototype.energyTotal = 0;

    /**
     * PvMO energyDaily.
     * @member {number} energyDaily
     * @memberof PvMO
     * @instance
     */
    PvMO.prototype.energyDaily = 0;

    /**
     * PvMO errorCode.
     * @member {number} errorCode
     * @memberof PvMO
     * @instance
     */
    PvMO.prototype.errorCode = 0;

    /**
     * Creates a new PvMO instance using the specified properties.
     * @function create
     * @memberof PvMO
     * @static
     * @param {IPvMO=} [properties] Properties to set
     * @returns {PvMO} PvMO instance
     */
    PvMO.create = function create(properties) {
        return new PvMO(properties);
    };

    /**
     * Encodes the specified PvMO message. Does not implicitly {@link PvMO.verify|verify} messages.
     * @function encode
     * @memberof PvMO
     * @static
     * @param {IPvMO} message PvMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PvMO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.serialNumber != null && Object.hasOwnProperty.call(message, "serialNumber"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.serialNumber);
        if (message.portNumber != null && Object.hasOwnProperty.call(message, "portNumber"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.portNumber);
        if (message.voltage != null && Object.hasOwnProperty.call(message, "voltage"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.voltage);
        if (message.current != null && Object.hasOwnProperty.call(message, "current"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.current);
        if (message.power != null && Object.hasOwnProperty.call(message, "power"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.power);
        if (message.energyTotal != null && Object.hasOwnProperty.call(message, "energyTotal"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.energyTotal);
        if (message.energyDaily != null && Object.hasOwnProperty.call(message, "energyDaily"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.energyDaily);
        if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.errorCode);
        return writer;
    };

    /**
     * Encodes the specified PvMO message, length delimited. Does not implicitly {@link PvMO.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PvMO
     * @static
     * @param {IPvMO} message PvMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PvMO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PvMO message from the specified reader or buffer.
     * @function decode
     * @memberof PvMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PvMO} PvMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PvMO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PvMO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.serialNumber = reader.int64();
                    break;
                }
            case 2: {
                    message.portNumber = reader.int32();
                    break;
                }
            case 3: {
                    message.voltage = reader.int32();
                    break;
                }
            case 4: {
                    message.current = reader.int32();
                    break;
                }
            case 5: {
                    message.power = reader.int32();
                    break;
                }
            case 6: {
                    message.energyTotal = reader.int32();
                    break;
                }
            case 7: {
                    message.energyDaily = reader.int32();
                    break;
                }
            case 8: {
                    message.errorCode = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PvMO message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PvMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PvMO} PvMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PvMO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PvMO message.
     * @function verify
     * @memberof PvMO
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PvMO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
            if (!$util.isInteger(message.serialNumber) && !(message.serialNumber && $util.isInteger(message.serialNumber.low) && $util.isInteger(message.serialNumber.high)))
                return "serialNumber: integer|Long expected";
        if (message.portNumber != null && message.hasOwnProperty("portNumber"))
            if (!$util.isInteger(message.portNumber))
                return "portNumber: integer expected";
        if (message.voltage != null && message.hasOwnProperty("voltage"))
            if (!$util.isInteger(message.voltage))
                return "voltage: integer expected";
        if (message.current != null && message.hasOwnProperty("current"))
            if (!$util.isInteger(message.current))
                return "current: integer expected";
        if (message.power != null && message.hasOwnProperty("power"))
            if (!$util.isInteger(message.power))
                return "power: integer expected";
        if (message.energyTotal != null && message.hasOwnProperty("energyTotal"))
            if (!$util.isInteger(message.energyTotal))
                return "energyTotal: integer expected";
        if (message.energyDaily != null && message.hasOwnProperty("energyDaily"))
            if (!$util.isInteger(message.energyDaily))
                return "energyDaily: integer expected";
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            if (!$util.isInteger(message.errorCode))
                return "errorCode: integer expected";
        return null;
    };

    /**
     * Creates a PvMO message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PvMO
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PvMO} PvMO
     */
    PvMO.fromObject = function fromObject(object) {
        if (object instanceof $root.PvMO)
            return object;
        var message = new $root.PvMO();
        if (object.serialNumber != null)
            if ($util.Long)
                (message.serialNumber = $util.Long.fromValue(object.serialNumber)).unsigned = false;
            else if (typeof object.serialNumber === "string")
                message.serialNumber = parseInt(object.serialNumber, 10);
            else if (typeof object.serialNumber === "number")
                message.serialNumber = object.serialNumber;
            else if (typeof object.serialNumber === "object")
                message.serialNumber = new $util.LongBits(object.serialNumber.low >>> 0, object.serialNumber.high >>> 0).toNumber();
        if (object.portNumber != null)
            message.portNumber = object.portNumber | 0;
        if (object.voltage != null)
            message.voltage = object.voltage | 0;
        if (object.current != null)
            message.current = object.current | 0;
        if (object.power != null)
            message.power = object.power | 0;
        if (object.energyTotal != null)
            message.energyTotal = object.energyTotal | 0;
        if (object.energyDaily != null)
            message.energyDaily = object.energyDaily | 0;
        if (object.errorCode != null)
            message.errorCode = object.errorCode | 0;
        return message;
    };

    /**
     * Creates a plain object from a PvMO message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PvMO
     * @static
     * @param {PvMO} message PvMO
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PvMO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.serialNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.serialNumber = options.longs === String ? "0" : 0;
            object.portNumber = 0;
            object.voltage = 0;
            object.current = 0;
            object.power = 0;
            object.energyTotal = 0;
            object.energyDaily = 0;
            object.errorCode = 0;
        }
        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
            if (typeof message.serialNumber === "number")
                object.serialNumber = options.longs === String ? String(message.serialNumber) : message.serialNumber;
            else
                object.serialNumber = options.longs === String ? $util.Long.prototype.toString.call(message.serialNumber) : options.longs === Number ? new $util.LongBits(message.serialNumber.low >>> 0, message.serialNumber.high >>> 0).toNumber() : message.serialNumber;
        if (message.portNumber != null && message.hasOwnProperty("portNumber"))
            object.portNumber = message.portNumber;
        if (message.voltage != null && message.hasOwnProperty("voltage"))
            object.voltage = message.voltage;
        if (message.current != null && message.hasOwnProperty("current"))
            object.current = message.current;
        if (message.power != null && message.hasOwnProperty("power"))
            object.power = message.power;
        if (message.energyTotal != null && message.hasOwnProperty("energyTotal"))
            object.energyTotal = message.energyTotal;
        if (message.energyDaily != null && message.hasOwnProperty("energyDaily"))
            object.energyDaily = message.energyDaily;
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            object.errorCode = message.errorCode;
        return object;
    };

    /**
     * Converts this PvMO to JSON.
     * @function toJSON
     * @memberof PvMO
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PvMO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PvMO
     * @function getTypeUrl
     * @memberof PvMO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PvMO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PvMO";
    };

    return PvMO;
})();

$root.RealDataNewReqDTO = (function() {

    /**
     * Properties of a RealDataNewReqDTO.
     * @exports IRealDataNewReqDTO
     * @interface IRealDataNewReqDTO
     * @property {string|null} [deviceSerialNumber] RealDataNewReqDTO deviceSerialNumber
     * @property {number|null} [timestamp] RealDataNewReqDTO timestamp
     * @property {number|null} [ap] RealDataNewReqDTO ap
     * @property {number|null} [cp] RealDataNewReqDTO cp
     * @property {number|null} [firmwareVersion] RealDataNewReqDTO firmwareVersion
     * @property {Array.<IMeterMO>|null} [meterData] RealDataNewReqDTO meterData
     * @property {Array.<IRpMO>|null} [rpData] RealDataNewReqDTO rpData
     * @property {Array.<IRSDMO>|null} [rsdData] RealDataNewReqDTO rsdData
     * @property {Array.<ISGSMO>|null} [sgsData] RealDataNewReqDTO sgsData
     * @property {Array.<ITGSMO>|null} [tgsData] RealDataNewReqDTO tgsData
     * @property {Array.<IPvMO>|null} [pvData] RealDataNewReqDTO pvData
     * @property {number|Long|null} [dtuPower] RealDataNewReqDTO dtuPower
     * @property {number|Long|null} [dtuDailyEnergy] RealDataNewReqDTO dtuDailyEnergy
     */

    /**
     * Constructs a new RealDataNewReqDTO.
     * @exports RealDataNewReqDTO
     * @classdesc Represents a RealDataNewReqDTO.
     * @implements IRealDataNewReqDTO
     * @constructor
     * @param {IRealDataNewReqDTO=} [properties] Properties to set
     */
    function RealDataNewReqDTO(properties) {
        this.meterData = [];
        this.rpData = [];
        this.rsdData = [];
        this.sgsData = [];
        this.tgsData = [];
        this.pvData = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RealDataNewReqDTO deviceSerialNumber.
     * @member {string} deviceSerialNumber
     * @memberof RealDataNewReqDTO
     * @instance
     */
    RealDataNewReqDTO.prototype.deviceSerialNumber = "";

    /**
     * RealDataNewReqDTO timestamp.
     * @member {number} timestamp
     * @memberof RealDataNewReqDTO
     * @instance
     */
    RealDataNewReqDTO.prototype.timestamp = 0;

    /**
     * RealDataNewReqDTO ap.
     * @member {number} ap
     * @memberof RealDataNewReqDTO
     * @instance
     */
    RealDataNewReqDTO.prototype.ap = 0;

    /**
     * RealDataNewReqDTO cp.
     * @member {number} cp
     * @memberof RealDataNewReqDTO
     * @instance
     */
    RealDataNewReqDTO.prototype.cp = 0;

    /**
     * RealDataNewReqDTO firmwareVersion.
     * @member {number} firmwareVersion
     * @memberof RealDataNewReqDTO
     * @instance
     */
    RealDataNewReqDTO.prototype.firmwareVersion = 0;

    /**
     * RealDataNewReqDTO meterData.
     * @member {Array.<IMeterMO>} meterData
     * @memberof RealDataNewReqDTO
     * @instance
     */
    RealDataNewReqDTO.prototype.meterData = $util.emptyArray;

    /**
     * RealDataNewReqDTO rpData.
     * @member {Array.<IRpMO>} rpData
     * @memberof RealDataNewReqDTO
     * @instance
     */
    RealDataNewReqDTO.prototype.rpData = $util.emptyArray;

    /**
     * RealDataNewReqDTO rsdData.
     * @member {Array.<IRSDMO>} rsdData
     * @memberof RealDataNewReqDTO
     * @instance
     */
    RealDataNewReqDTO.prototype.rsdData = $util.emptyArray;

    /**
     * RealDataNewReqDTO sgsData.
     * @member {Array.<ISGSMO>} sgsData
     * @memberof RealDataNewReqDTO
     * @instance
     */
    RealDataNewReqDTO.prototype.sgsData = $util.emptyArray;

    /**
     * RealDataNewReqDTO tgsData.
     * @member {Array.<ITGSMO>} tgsData
     * @memberof RealDataNewReqDTO
     * @instance
     */
    RealDataNewReqDTO.prototype.tgsData = $util.emptyArray;

    /**
     * RealDataNewReqDTO pvData.
     * @member {Array.<IPvMO>} pvData
     * @memberof RealDataNewReqDTO
     * @instance
     */
    RealDataNewReqDTO.prototype.pvData = $util.emptyArray;

    /**
     * RealDataNewReqDTO dtuPower.
     * @member {number|Long} dtuPower
     * @memberof RealDataNewReqDTO
     * @instance
     */
    RealDataNewReqDTO.prototype.dtuPower = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * RealDataNewReqDTO dtuDailyEnergy.
     * @member {number|Long} dtuDailyEnergy
     * @memberof RealDataNewReqDTO
     * @instance
     */
    RealDataNewReqDTO.prototype.dtuDailyEnergy = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new RealDataNewReqDTO instance using the specified properties.
     * @function create
     * @memberof RealDataNewReqDTO
     * @static
     * @param {IRealDataNewReqDTO=} [properties] Properties to set
     * @returns {RealDataNewReqDTO} RealDataNewReqDTO instance
     */
    RealDataNewReqDTO.create = function create(properties) {
        return new RealDataNewReqDTO(properties);
    };

    /**
     * Encodes the specified RealDataNewReqDTO message. Does not implicitly {@link RealDataNewReqDTO.verify|verify} messages.
     * @function encode
     * @memberof RealDataNewReqDTO
     * @static
     * @param {IRealDataNewReqDTO} message RealDataNewReqDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RealDataNewReqDTO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deviceSerialNumber != null && Object.hasOwnProperty.call(message, "deviceSerialNumber"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceSerialNumber);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.timestamp);
        if (message.ap != null && Object.hasOwnProperty.call(message, "ap"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ap);
        if (message.cp != null && Object.hasOwnProperty.call(message, "cp"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cp);
        if (message.firmwareVersion != null && Object.hasOwnProperty.call(message, "firmwareVersion"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.firmwareVersion);
        if (message.meterData != null && message.meterData.length)
            for (var i = 0; i < message.meterData.length; ++i)
                $root.MeterMO.encode(message.meterData[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.rpData != null && message.rpData.length)
            for (var i = 0; i < message.rpData.length; ++i)
                $root.RpMO.encode(message.rpData[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.rsdData != null && message.rsdData.length)
            for (var i = 0; i < message.rsdData.length; ++i)
                $root.RSDMO.encode(message.rsdData[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.sgsData != null && message.sgsData.length)
            for (var i = 0; i < message.sgsData.length; ++i)
                $root.SGSMO.encode(message.sgsData[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.tgsData != null && message.tgsData.length)
            for (var i = 0; i < message.tgsData.length; ++i)
                $root.TGSMO.encode(message.tgsData[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.pvData != null && message.pvData.length)
            for (var i = 0; i < message.pvData.length; ++i)
                $root.PvMO.encode(message.pvData[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.dtuPower != null && Object.hasOwnProperty.call(message, "dtuPower"))
            writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.dtuPower);
        if (message.dtuDailyEnergy != null && Object.hasOwnProperty.call(message, "dtuDailyEnergy"))
            writer.uint32(/* id 13, wireType 0 =*/104).uint64(message.dtuDailyEnergy);
        return writer;
    };

    /**
     * Encodes the specified RealDataNewReqDTO message, length delimited. Does not implicitly {@link RealDataNewReqDTO.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RealDataNewReqDTO
     * @static
     * @param {IRealDataNewReqDTO} message RealDataNewReqDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RealDataNewReqDTO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RealDataNewReqDTO message from the specified reader or buffer.
     * @function decode
     * @memberof RealDataNewReqDTO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RealDataNewReqDTO} RealDataNewReqDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RealDataNewReqDTO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RealDataNewReqDTO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.deviceSerialNumber = reader.string();
                    break;
                }
            case 2: {
                    message.timestamp = reader.int32();
                    break;
                }
            case 3: {
                    message.ap = reader.int32();
                    break;
                }
            case 4: {
                    message.cp = reader.int32();
                    break;
                }
            case 5: {
                    message.firmwareVersion = reader.int32();
                    break;
                }
            case 6: {
                    if (!(message.meterData && message.meterData.length))
                        message.meterData = [];
                    message.meterData.push($root.MeterMO.decode(reader, reader.uint32()));
                    break;
                }
            case 7: {
                    if (!(message.rpData && message.rpData.length))
                        message.rpData = [];
                    message.rpData.push($root.RpMO.decode(reader, reader.uint32()));
                    break;
                }
            case 8: {
                    if (!(message.rsdData && message.rsdData.length))
                        message.rsdData = [];
                    message.rsdData.push($root.RSDMO.decode(reader, reader.uint32()));
                    break;
                }
            case 9: {
                    if (!(message.sgsData && message.sgsData.length))
                        message.sgsData = [];
                    message.sgsData.push($root.SGSMO.decode(reader, reader.uint32()));
                    break;
                }
            case 10: {
                    if (!(message.tgsData && message.tgsData.length))
                        message.tgsData = [];
                    message.tgsData.push($root.TGSMO.decode(reader, reader.uint32()));
                    break;
                }
            case 11: {
                    if (!(message.pvData && message.pvData.length))
                        message.pvData = [];
                    message.pvData.push($root.PvMO.decode(reader, reader.uint32()));
                    break;
                }
            case 12: {
                    message.dtuPower = reader.uint64();
                    break;
                }
            case 13: {
                    message.dtuDailyEnergy = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RealDataNewReqDTO message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RealDataNewReqDTO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RealDataNewReqDTO} RealDataNewReqDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RealDataNewReqDTO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RealDataNewReqDTO message.
     * @function verify
     * @memberof RealDataNewReqDTO
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RealDataNewReqDTO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.deviceSerialNumber != null && message.hasOwnProperty("deviceSerialNumber"))
            if (!$util.isString(message.deviceSerialNumber))
                return "deviceSerialNumber: string expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp))
                return "timestamp: integer expected";
        if (message.ap != null && message.hasOwnProperty("ap"))
            if (!$util.isInteger(message.ap))
                return "ap: integer expected";
        if (message.cp != null && message.hasOwnProperty("cp"))
            if (!$util.isInteger(message.cp))
                return "cp: integer expected";
        if (message.firmwareVersion != null && message.hasOwnProperty("firmwareVersion"))
            if (!$util.isInteger(message.firmwareVersion))
                return "firmwareVersion: integer expected";
        if (message.meterData != null && message.hasOwnProperty("meterData")) {
            if (!Array.isArray(message.meterData))
                return "meterData: array expected";
            for (var i = 0; i < message.meterData.length; ++i) {
                var error = $root.MeterMO.verify(message.meterData[i]);
                if (error)
                    return "meterData." + error;
            }
        }
        if (message.rpData != null && message.hasOwnProperty("rpData")) {
            if (!Array.isArray(message.rpData))
                return "rpData: array expected";
            for (var i = 0; i < message.rpData.length; ++i) {
                var error = $root.RpMO.verify(message.rpData[i]);
                if (error)
                    return "rpData." + error;
            }
        }
        if (message.rsdData != null && message.hasOwnProperty("rsdData")) {
            if (!Array.isArray(message.rsdData))
                return "rsdData: array expected";
            for (var i = 0; i < message.rsdData.length; ++i) {
                var error = $root.RSDMO.verify(message.rsdData[i]);
                if (error)
                    return "rsdData." + error;
            }
        }
        if (message.sgsData != null && message.hasOwnProperty("sgsData")) {
            if (!Array.isArray(message.sgsData))
                return "sgsData: array expected";
            for (var i = 0; i < message.sgsData.length; ++i) {
                var error = $root.SGSMO.verify(message.sgsData[i]);
                if (error)
                    return "sgsData." + error;
            }
        }
        if (message.tgsData != null && message.hasOwnProperty("tgsData")) {
            if (!Array.isArray(message.tgsData))
                return "tgsData: array expected";
            for (var i = 0; i < message.tgsData.length; ++i) {
                var error = $root.TGSMO.verify(message.tgsData[i]);
                if (error)
                    return "tgsData." + error;
            }
        }
        if (message.pvData != null && message.hasOwnProperty("pvData")) {
            if (!Array.isArray(message.pvData))
                return "pvData: array expected";
            for (var i = 0; i < message.pvData.length; ++i) {
                var error = $root.PvMO.verify(message.pvData[i]);
                if (error)
                    return "pvData." + error;
            }
        }
        if (message.dtuPower != null && message.hasOwnProperty("dtuPower"))
            if (!$util.isInteger(message.dtuPower) && !(message.dtuPower && $util.isInteger(message.dtuPower.low) && $util.isInteger(message.dtuPower.high)))
                return "dtuPower: integer|Long expected";
        if (message.dtuDailyEnergy != null && message.hasOwnProperty("dtuDailyEnergy"))
            if (!$util.isInteger(message.dtuDailyEnergy) && !(message.dtuDailyEnergy && $util.isInteger(message.dtuDailyEnergy.low) && $util.isInteger(message.dtuDailyEnergy.high)))
                return "dtuDailyEnergy: integer|Long expected";
        return null;
    };

    /**
     * Creates a RealDataNewReqDTO message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RealDataNewReqDTO
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RealDataNewReqDTO} RealDataNewReqDTO
     */
    RealDataNewReqDTO.fromObject = function fromObject(object) {
        if (object instanceof $root.RealDataNewReqDTO)
            return object;
        var message = new $root.RealDataNewReqDTO();
        if (object.deviceSerialNumber != null)
            message.deviceSerialNumber = String(object.deviceSerialNumber);
        if (object.timestamp != null)
            message.timestamp = object.timestamp | 0;
        if (object.ap != null)
            message.ap = object.ap | 0;
        if (object.cp != null)
            message.cp = object.cp | 0;
        if (object.firmwareVersion != null)
            message.firmwareVersion = object.firmwareVersion | 0;
        if (object.meterData) {
            if (!Array.isArray(object.meterData))
                throw TypeError(".RealDataNewReqDTO.meterData: array expected");
            message.meterData = [];
            for (var i = 0; i < object.meterData.length; ++i) {
                if (typeof object.meterData[i] !== "object")
                    throw TypeError(".RealDataNewReqDTO.meterData: object expected");
                message.meterData[i] = $root.MeterMO.fromObject(object.meterData[i]);
            }
        }
        if (object.rpData) {
            if (!Array.isArray(object.rpData))
                throw TypeError(".RealDataNewReqDTO.rpData: array expected");
            message.rpData = [];
            for (var i = 0; i < object.rpData.length; ++i) {
                if (typeof object.rpData[i] !== "object")
                    throw TypeError(".RealDataNewReqDTO.rpData: object expected");
                message.rpData[i] = $root.RpMO.fromObject(object.rpData[i]);
            }
        }
        if (object.rsdData) {
            if (!Array.isArray(object.rsdData))
                throw TypeError(".RealDataNewReqDTO.rsdData: array expected");
            message.rsdData = [];
            for (var i = 0; i < object.rsdData.length; ++i) {
                if (typeof object.rsdData[i] !== "object")
                    throw TypeError(".RealDataNewReqDTO.rsdData: object expected");
                message.rsdData[i] = $root.RSDMO.fromObject(object.rsdData[i]);
            }
        }
        if (object.sgsData) {
            if (!Array.isArray(object.sgsData))
                throw TypeError(".RealDataNewReqDTO.sgsData: array expected");
            message.sgsData = [];
            for (var i = 0; i < object.sgsData.length; ++i) {
                if (typeof object.sgsData[i] !== "object")
                    throw TypeError(".RealDataNewReqDTO.sgsData: object expected");
                message.sgsData[i] = $root.SGSMO.fromObject(object.sgsData[i]);
            }
        }
        if (object.tgsData) {
            if (!Array.isArray(object.tgsData))
                throw TypeError(".RealDataNewReqDTO.tgsData: array expected");
            message.tgsData = [];
            for (var i = 0; i < object.tgsData.length; ++i) {
                if (typeof object.tgsData[i] !== "object")
                    throw TypeError(".RealDataNewReqDTO.tgsData: object expected");
                message.tgsData[i] = $root.TGSMO.fromObject(object.tgsData[i]);
            }
        }
        if (object.pvData) {
            if (!Array.isArray(object.pvData))
                throw TypeError(".RealDataNewReqDTO.pvData: array expected");
            message.pvData = [];
            for (var i = 0; i < object.pvData.length; ++i) {
                if (typeof object.pvData[i] !== "object")
                    throw TypeError(".RealDataNewReqDTO.pvData: object expected");
                message.pvData[i] = $root.PvMO.fromObject(object.pvData[i]);
            }
        }
        if (object.dtuPower != null)
            if ($util.Long)
                (message.dtuPower = $util.Long.fromValue(object.dtuPower)).unsigned = true;
            else if (typeof object.dtuPower === "string")
                message.dtuPower = parseInt(object.dtuPower, 10);
            else if (typeof object.dtuPower === "number")
                message.dtuPower = object.dtuPower;
            else if (typeof object.dtuPower === "object")
                message.dtuPower = new $util.LongBits(object.dtuPower.low >>> 0, object.dtuPower.high >>> 0).toNumber(true);
        if (object.dtuDailyEnergy != null)
            if ($util.Long)
                (message.dtuDailyEnergy = $util.Long.fromValue(object.dtuDailyEnergy)).unsigned = true;
            else if (typeof object.dtuDailyEnergy === "string")
                message.dtuDailyEnergy = parseInt(object.dtuDailyEnergy, 10);
            else if (typeof object.dtuDailyEnergy === "number")
                message.dtuDailyEnergy = object.dtuDailyEnergy;
            else if (typeof object.dtuDailyEnergy === "object")
                message.dtuDailyEnergy = new $util.LongBits(object.dtuDailyEnergy.low >>> 0, object.dtuDailyEnergy.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a RealDataNewReqDTO message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RealDataNewReqDTO
     * @static
     * @param {RealDataNewReqDTO} message RealDataNewReqDTO
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RealDataNewReqDTO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.meterData = [];
            object.rpData = [];
            object.rsdData = [];
            object.sgsData = [];
            object.tgsData = [];
            object.pvData = [];
        }
        if (options.defaults) {
            object.deviceSerialNumber = "";
            object.timestamp = 0;
            object.ap = 0;
            object.cp = 0;
            object.firmwareVersion = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.dtuPower = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.dtuPower = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.dtuDailyEnergy = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.dtuDailyEnergy = options.longs === String ? "0" : 0;
        }
        if (message.deviceSerialNumber != null && message.hasOwnProperty("deviceSerialNumber"))
            object.deviceSerialNumber = message.deviceSerialNumber;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = message.timestamp;
        if (message.ap != null && message.hasOwnProperty("ap"))
            object.ap = message.ap;
        if (message.cp != null && message.hasOwnProperty("cp"))
            object.cp = message.cp;
        if (message.firmwareVersion != null && message.hasOwnProperty("firmwareVersion"))
            object.firmwareVersion = message.firmwareVersion;
        if (message.meterData && message.meterData.length) {
            object.meterData = [];
            for (var j = 0; j < message.meterData.length; ++j)
                object.meterData[j] = $root.MeterMO.toObject(message.meterData[j], options);
        }
        if (message.rpData && message.rpData.length) {
            object.rpData = [];
            for (var j = 0; j < message.rpData.length; ++j)
                object.rpData[j] = $root.RpMO.toObject(message.rpData[j], options);
        }
        if (message.rsdData && message.rsdData.length) {
            object.rsdData = [];
            for (var j = 0; j < message.rsdData.length; ++j)
                object.rsdData[j] = $root.RSDMO.toObject(message.rsdData[j], options);
        }
        if (message.sgsData && message.sgsData.length) {
            object.sgsData = [];
            for (var j = 0; j < message.sgsData.length; ++j)
                object.sgsData[j] = $root.SGSMO.toObject(message.sgsData[j], options);
        }
        if (message.tgsData && message.tgsData.length) {
            object.tgsData = [];
            for (var j = 0; j < message.tgsData.length; ++j)
                object.tgsData[j] = $root.TGSMO.toObject(message.tgsData[j], options);
        }
        if (message.pvData && message.pvData.length) {
            object.pvData = [];
            for (var j = 0; j < message.pvData.length; ++j)
                object.pvData[j] = $root.PvMO.toObject(message.pvData[j], options);
        }
        if (message.dtuPower != null && message.hasOwnProperty("dtuPower"))
            if (typeof message.dtuPower === "number")
                object.dtuPower = options.longs === String ? String(message.dtuPower) : message.dtuPower;
            else
                object.dtuPower = options.longs === String ? $util.Long.prototype.toString.call(message.dtuPower) : options.longs === Number ? new $util.LongBits(message.dtuPower.low >>> 0, message.dtuPower.high >>> 0).toNumber(true) : message.dtuPower;
        if (message.dtuDailyEnergy != null && message.hasOwnProperty("dtuDailyEnergy"))
            if (typeof message.dtuDailyEnergy === "number")
                object.dtuDailyEnergy = options.longs === String ? String(message.dtuDailyEnergy) : message.dtuDailyEnergy;
            else
                object.dtuDailyEnergy = options.longs === String ? $util.Long.prototype.toString.call(message.dtuDailyEnergy) : options.longs === Number ? new $util.LongBits(message.dtuDailyEnergy.low >>> 0, message.dtuDailyEnergy.high >>> 0).toNumber(true) : message.dtuDailyEnergy;
        return object;
    };

    /**
     * Converts this RealDataNewReqDTO to JSON.
     * @function toJSON
     * @memberof RealDataNewReqDTO
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RealDataNewReqDTO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RealDataNewReqDTO
     * @function getTypeUrl
     * @memberof RealDataNewReqDTO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RealDataNewReqDTO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RealDataNewReqDTO";
    };

    return RealDataNewReqDTO;
})();

$root.RealDataNewResDTO = (function() {

    /**
     * Properties of a RealDataNewResDTO.
     * @exports IRealDataNewResDTO
     * @interface IRealDataNewResDTO
     * @property {Uint8Array|null} [timeYmdHms] RealDataNewResDTO timeYmdHms
     * @property {number|null} [cp] RealDataNewResDTO cp
     * @property {number|null} [errorCode] RealDataNewResDTO errorCode
     * @property {number|null} [offset] RealDataNewResDTO offset
     * @property {number|null} [time] RealDataNewResDTO time
     */

    /**
     * Constructs a new RealDataNewResDTO.
     * @exports RealDataNewResDTO
     * @classdesc Represents a RealDataNewResDTO.
     * @implements IRealDataNewResDTO
     * @constructor
     * @param {IRealDataNewResDTO=} [properties] Properties to set
     */
    function RealDataNewResDTO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RealDataNewResDTO timeYmdHms.
     * @member {Uint8Array} timeYmdHms
     * @memberof RealDataNewResDTO
     * @instance
     */
    RealDataNewResDTO.prototype.timeYmdHms = $util.newBuffer([]);

    /**
     * RealDataNewResDTO cp.
     * @member {number} cp
     * @memberof RealDataNewResDTO
     * @instance
     */
    RealDataNewResDTO.prototype.cp = 0;

    /**
     * RealDataNewResDTO errorCode.
     * @member {number} errorCode
     * @memberof RealDataNewResDTO
     * @instance
     */
    RealDataNewResDTO.prototype.errorCode = 0;

    /**
     * RealDataNewResDTO offset.
     * @member {number} offset
     * @memberof RealDataNewResDTO
     * @instance
     */
    RealDataNewResDTO.prototype.offset = 0;

    /**
     * RealDataNewResDTO time.
     * @member {number} time
     * @memberof RealDataNewResDTO
     * @instance
     */
    RealDataNewResDTO.prototype.time = 0;

    /**
     * Creates a new RealDataNewResDTO instance using the specified properties.
     * @function create
     * @memberof RealDataNewResDTO
     * @static
     * @param {IRealDataNewResDTO=} [properties] Properties to set
     * @returns {RealDataNewResDTO} RealDataNewResDTO instance
     */
    RealDataNewResDTO.create = function create(properties) {
        return new RealDataNewResDTO(properties);
    };

    /**
     * Encodes the specified RealDataNewResDTO message. Does not implicitly {@link RealDataNewResDTO.verify|verify} messages.
     * @function encode
     * @memberof RealDataNewResDTO
     * @static
     * @param {IRealDataNewResDTO} message RealDataNewResDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RealDataNewResDTO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timeYmdHms != null && Object.hasOwnProperty.call(message, "timeYmdHms"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.timeYmdHms);
        if (message.cp != null && Object.hasOwnProperty.call(message, "cp"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cp);
        if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.errorCode);
        if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.offset);
        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.time);
        return writer;
    };

    /**
     * Encodes the specified RealDataNewResDTO message, length delimited. Does not implicitly {@link RealDataNewResDTO.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RealDataNewResDTO
     * @static
     * @param {IRealDataNewResDTO} message RealDataNewResDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RealDataNewResDTO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RealDataNewResDTO message from the specified reader or buffer.
     * @function decode
     * @memberof RealDataNewResDTO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RealDataNewResDTO} RealDataNewResDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RealDataNewResDTO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RealDataNewResDTO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.timeYmdHms = reader.bytes();
                    break;
                }
            case 2: {
                    message.cp = reader.int32();
                    break;
                }
            case 3: {
                    message.errorCode = reader.int32();
                    break;
                }
            case 4: {
                    message.offset = reader.int32();
                    break;
                }
            case 5: {
                    message.time = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RealDataNewResDTO message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RealDataNewResDTO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RealDataNewResDTO} RealDataNewResDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RealDataNewResDTO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RealDataNewResDTO message.
     * @function verify
     * @memberof RealDataNewResDTO
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RealDataNewResDTO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.timeYmdHms != null && message.hasOwnProperty("timeYmdHms"))
            if (!(message.timeYmdHms && typeof message.timeYmdHms.length === "number" || $util.isString(message.timeYmdHms)))
                return "timeYmdHms: buffer expected";
        if (message.cp != null && message.hasOwnProperty("cp"))
            if (!$util.isInteger(message.cp))
                return "cp: integer expected";
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            if (!$util.isInteger(message.errorCode))
                return "errorCode: integer expected";
        if (message.offset != null && message.hasOwnProperty("offset"))
            if (!$util.isInteger(message.offset))
                return "offset: integer expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time))
                return "time: integer expected";
        return null;
    };

    /**
     * Creates a RealDataNewResDTO message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RealDataNewResDTO
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RealDataNewResDTO} RealDataNewResDTO
     */
    RealDataNewResDTO.fromObject = function fromObject(object) {
        if (object instanceof $root.RealDataNewResDTO)
            return object;
        var message = new $root.RealDataNewResDTO();
        if (object.timeYmdHms != null)
            if (typeof object.timeYmdHms === "string")
                $util.base64.decode(object.timeYmdHms, message.timeYmdHms = $util.newBuffer($util.base64.length(object.timeYmdHms)), 0);
            else if (object.timeYmdHms.length >= 0)
                message.timeYmdHms = object.timeYmdHms;
        if (object.cp != null)
            message.cp = object.cp | 0;
        if (object.errorCode != null)
            message.errorCode = object.errorCode | 0;
        if (object.offset != null)
            message.offset = object.offset | 0;
        if (object.time != null)
            message.time = object.time | 0;
        return message;
    };

    /**
     * Creates a plain object from a RealDataNewResDTO message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RealDataNewResDTO
     * @static
     * @param {RealDataNewResDTO} message RealDataNewResDTO
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RealDataNewResDTO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if (options.bytes === String)
                object.timeYmdHms = "";
            else {
                object.timeYmdHms = [];
                if (options.bytes !== Array)
                    object.timeYmdHms = $util.newBuffer(object.timeYmdHms);
            }
            object.cp = 0;
            object.errorCode = 0;
            object.offset = 0;
            object.time = 0;
        }
        if (message.timeYmdHms != null && message.hasOwnProperty("timeYmdHms"))
            object.timeYmdHms = options.bytes === String ? $util.base64.encode(message.timeYmdHms, 0, message.timeYmdHms.length) : options.bytes === Array ? Array.prototype.slice.call(message.timeYmdHms) : message.timeYmdHms;
        if (message.cp != null && message.hasOwnProperty("cp"))
            object.cp = message.cp;
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            object.errorCode = message.errorCode;
        if (message.offset != null && message.hasOwnProperty("offset"))
            object.offset = message.offset;
        if (message.time != null && message.hasOwnProperty("time"))
            object.time = message.time;
        return object;
    };

    /**
     * Converts this RealDataNewResDTO to JSON.
     * @function toJSON
     * @memberof RealDataNewResDTO
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RealDataNewResDTO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RealDataNewResDTO
     * @function getTypeUrl
     * @memberof RealDataNewResDTO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RealDataNewResDTO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RealDataNewResDTO";
    };

    return RealDataNewResDTO;
})();

module.exports = $root;
