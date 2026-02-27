/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.MeterMO = (function() {

    /**
     * Properties of a MeterMO.
     * @exports IMeterMO
     * @interface IMeterMO
     * @property {number|null} [deviceType] MeterMO deviceType
     * @property {number|null} [serialNumber] MeterMO serialNumber
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
     * @member {number} serialNumber
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
     * @property {number|null} [serialNumber] RpMO serialNumber
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
     * @member {number} serialNumber
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
     * @property {number|null} [serialNumber] RSDMO serialNumber
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
     * @member {number} serialNumber
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
     * @property {number|null} [serialNumber] SGSMO serialNumber
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
     * @member {number} serialNumber
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
     * @property {number|null} [serialNumber] TGSMO serialNumber
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
     * @member {number} serialNumber
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
     * @property {number|null} [serialNumber] PvMO serialNumber
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
     * @member {number} serialNumber
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
     * @property {number|null} [dtuPower] RealDataNewReqDTO dtuPower
     * @property {number|null} [dtuDailyEnergy] RealDataNewReqDTO dtuDailyEnergy
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
     * @member {number} dtuPower
     * @memberof RealDataNewReqDTO
     * @instance
     */
    RealDataNewReqDTO.prototype.dtuPower = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * RealDataNewReqDTO dtuDailyEnergy.
     * @member {number} dtuDailyEnergy
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

$root.APPDtuInfoMO = (function() {

    /**
     * Properties of a APPDtuInfoMO.
     * @exports IAPPDtuInfoMO
     * @interface IAPPDtuInfoMO
     * @property {number|null} [deviceKind] APPDtuInfoMO deviceKind
     * @property {number|null} [dtuSwVersion] APPDtuInfoMO dtuSwVersion
     * @property {number|null} [dtuHwVersion] APPDtuInfoMO dtuHwVersion
     * @property {number|null} [dtuStepTime] APPDtuInfoMO dtuStepTime
     * @property {number|null} [dtuRfHwVersion] APPDtuInfoMO dtuRfHwVersion
     * @property {number|null} [dtuRfSwVersion] APPDtuInfoMO dtuRfSwVersion
     * @property {number|null} [accessModel] APPDtuInfoMO accessModel
     * @property {number|null} [communicationTime] APPDtuInfoMO communicationTime
     * @property {number|null} [signalStrength] APPDtuInfoMO signalStrength
     * @property {string|null} [gprsVersion] APPDtuInfoMO gprsVersion
     * @property {string|null} [wifiVersion] APPDtuInfoMO wifiVersion
     * @property {string|null} [kaNumber] APPDtuInfoMO kaNumber
     * @property {number|null} [dtuRuleId] APPDtuInfoMO dtuRuleId
     * @property {number|null} [dtuErrorCode] APPDtuInfoMO dtuErrorCode
     * @property {number|null} [dtu485Mode] APPDtuInfoMO dtu485Mode
     * @property {number|null} [dtu485Address] APPDtuInfoMO dtu485Address
     * @property {number|null} [sub1gFrequencyBand] APPDtuInfoMO sub1gFrequencyBand
     * @property {number|null} [sub1gChannelTotalNumber] APPDtuInfoMO sub1gChannelTotalNumber
     * @property {number|null} [sub1gChannelNumber] APPDtuInfoMO sub1gChannelNumber
     * @property {number|null} [sub1gRp] APPDtuInfoMO sub1gRp
     * @property {number|null} [sub1gChannelTotal] APPDtuInfoMO sub1gChannelTotal
     * @property {string|null} [gprsImei] APPDtuInfoMO gprsImei
     * @property {number|null} [dtuSwbTime] APPDtuInfoMO dtuSwbTime
     * @property {number|null} [dfs] APPDtuInfoMO dfs
     * @property {Array.<number>|null} [shls] APPDtuInfoMO shls
     * @property {number|null} [type] APPDtuInfoMO type
     * @property {Uint8Array|null} [encRand] APPDtuInfoMO encRand
     */

    /**
     * Constructs a new APPDtuInfoMO.
     * @exports APPDtuInfoMO
     * @classdesc Represents a APPDtuInfoMO.
     * @implements IAPPDtuInfoMO
     * @constructor
     * @param {IAPPDtuInfoMO=} [properties] Properties to set
     */
    function APPDtuInfoMO(properties) {
        this.shls = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * APPDtuInfoMO deviceKind.
     * @member {number} deviceKind
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.deviceKind = 0;

    /**
     * APPDtuInfoMO dtuSwVersion.
     * @member {number} dtuSwVersion
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.dtuSwVersion = 0;

    /**
     * APPDtuInfoMO dtuHwVersion.
     * @member {number} dtuHwVersion
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.dtuHwVersion = 0;

    /**
     * APPDtuInfoMO dtuStepTime.
     * @member {number} dtuStepTime
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.dtuStepTime = 0;

    /**
     * APPDtuInfoMO dtuRfHwVersion.
     * @member {number} dtuRfHwVersion
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.dtuRfHwVersion = 0;

    /**
     * APPDtuInfoMO dtuRfSwVersion.
     * @member {number} dtuRfSwVersion
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.dtuRfSwVersion = 0;

    /**
     * APPDtuInfoMO accessModel.
     * @member {number} accessModel
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.accessModel = 0;

    /**
     * APPDtuInfoMO communicationTime.
     * @member {number} communicationTime
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.communicationTime = 0;

    /**
     * APPDtuInfoMO signalStrength.
     * @member {number} signalStrength
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.signalStrength = 0;

    /**
     * APPDtuInfoMO gprsVersion.
     * @member {string} gprsVersion
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.gprsVersion = "";

    /**
     * APPDtuInfoMO wifiVersion.
     * @member {string} wifiVersion
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.wifiVersion = "";

    /**
     * APPDtuInfoMO kaNumber.
     * @member {string} kaNumber
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.kaNumber = "";

    /**
     * APPDtuInfoMO dtuRuleId.
     * @member {number} dtuRuleId
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.dtuRuleId = 0;

    /**
     * APPDtuInfoMO dtuErrorCode.
     * @member {number} dtuErrorCode
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.dtuErrorCode = 0;

    /**
     * APPDtuInfoMO dtu485Mode.
     * @member {number} dtu485Mode
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.dtu485Mode = 0;

    /**
     * APPDtuInfoMO dtu485Address.
     * @member {number} dtu485Address
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.dtu485Address = 0;

    /**
     * APPDtuInfoMO sub1gFrequencyBand.
     * @member {number} sub1gFrequencyBand
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.sub1gFrequencyBand = 0;

    /**
     * APPDtuInfoMO sub1gChannelTotalNumber.
     * @member {number} sub1gChannelTotalNumber
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.sub1gChannelTotalNumber = 0;

    /**
     * APPDtuInfoMO sub1gChannelNumber.
     * @member {number} sub1gChannelNumber
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.sub1gChannelNumber = 0;

    /**
     * APPDtuInfoMO sub1gRp.
     * @member {number} sub1gRp
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.sub1gRp = 0;

    /**
     * APPDtuInfoMO sub1gChannelTotal.
     * @member {number} sub1gChannelTotal
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.sub1gChannelTotal = 0;

    /**
     * APPDtuInfoMO gprsImei.
     * @member {string} gprsImei
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.gprsImei = "";

    /**
     * APPDtuInfoMO dtuSwbTime.
     * @member {number} dtuSwbTime
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.dtuSwbTime = 0;

    /**
     * APPDtuInfoMO dfs.
     * @member {number} dfs
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.dfs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * APPDtuInfoMO shls.
     * @member {Array.<number>} shls
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.shls = $util.emptyArray;

    /**
     * APPDtuInfoMO type.
     * @member {number} type
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.type = 0;

    /**
     * APPDtuInfoMO encRand.
     * @member {Uint8Array} encRand
     * @memberof APPDtuInfoMO
     * @instance
     */
    APPDtuInfoMO.prototype.encRand = $util.newBuffer([]);

    /**
     * Creates a new APPDtuInfoMO instance using the specified properties.
     * @function create
     * @memberof APPDtuInfoMO
     * @static
     * @param {IAPPDtuInfoMO=} [properties] Properties to set
     * @returns {APPDtuInfoMO} APPDtuInfoMO instance
     */
    APPDtuInfoMO.create = function create(properties) {
        return new APPDtuInfoMO(properties);
    };

    /**
     * Encodes the specified APPDtuInfoMO message. Does not implicitly {@link APPDtuInfoMO.verify|verify} messages.
     * @function encode
     * @memberof APPDtuInfoMO
     * @static
     * @param {IAPPDtuInfoMO} message APPDtuInfoMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    APPDtuInfoMO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deviceKind != null && Object.hasOwnProperty.call(message, "deviceKind"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.deviceKind);
        if (message.dtuSwVersion != null && Object.hasOwnProperty.call(message, "dtuSwVersion"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.dtuSwVersion);
        if (message.dtuHwVersion != null && Object.hasOwnProperty.call(message, "dtuHwVersion"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.dtuHwVersion);
        if (message.dtuStepTime != null && Object.hasOwnProperty.call(message, "dtuStepTime"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.dtuStepTime);
        if (message.dtuRfHwVersion != null && Object.hasOwnProperty.call(message, "dtuRfHwVersion"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.dtuRfHwVersion);
        if (message.dtuRfSwVersion != null && Object.hasOwnProperty.call(message, "dtuRfSwVersion"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.dtuRfSwVersion);
        if (message.accessModel != null && Object.hasOwnProperty.call(message, "accessModel"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.accessModel);
        if (message.communicationTime != null && Object.hasOwnProperty.call(message, "communicationTime"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.communicationTime);
        if (message.signalStrength != null && Object.hasOwnProperty.call(message, "signalStrength"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.signalStrength);
        if (message.gprsVersion != null && Object.hasOwnProperty.call(message, "gprsVersion"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.gprsVersion);
        if (message.wifiVersion != null && Object.hasOwnProperty.call(message, "wifiVersion"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.wifiVersion);
        if (message.kaNumber != null && Object.hasOwnProperty.call(message, "kaNumber"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.kaNumber);
        if (message.dtuRuleId != null && Object.hasOwnProperty.call(message, "dtuRuleId"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.dtuRuleId);
        if (message.dtuErrorCode != null && Object.hasOwnProperty.call(message, "dtuErrorCode"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.dtuErrorCode);
        if (message.dtu485Mode != null && Object.hasOwnProperty.call(message, "dtu485Mode"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.dtu485Mode);
        if (message.dtu485Address != null && Object.hasOwnProperty.call(message, "dtu485Address"))
            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.dtu485Address);
        if (message.sub1gFrequencyBand != null && Object.hasOwnProperty.call(message, "sub1gFrequencyBand"))
            writer.uint32(/* id 17, wireType 0 =*/136).int32(message.sub1gFrequencyBand);
        if (message.sub1gChannelTotalNumber != null && Object.hasOwnProperty.call(message, "sub1gChannelTotalNumber"))
            writer.uint32(/* id 18, wireType 0 =*/144).int32(message.sub1gChannelTotalNumber);
        if (message.sub1gChannelNumber != null && Object.hasOwnProperty.call(message, "sub1gChannelNumber"))
            writer.uint32(/* id 19, wireType 0 =*/152).int32(message.sub1gChannelNumber);
        if (message.sub1gRp != null && Object.hasOwnProperty.call(message, "sub1gRp"))
            writer.uint32(/* id 20, wireType 0 =*/160).int32(message.sub1gRp);
        if (message.sub1gChannelTotal != null && Object.hasOwnProperty.call(message, "sub1gChannelTotal"))
            writer.uint32(/* id 21, wireType 0 =*/168).int32(message.sub1gChannelTotal);
        if (message.gprsImei != null && Object.hasOwnProperty.call(message, "gprsImei"))
            writer.uint32(/* id 22, wireType 2 =*/178).string(message.gprsImei);
        if (message.dtuSwbTime != null && Object.hasOwnProperty.call(message, "dtuSwbTime"))
            writer.uint32(/* id 23, wireType 0 =*/184).int32(message.dtuSwbTime);
        if (message.dfs != null && Object.hasOwnProperty.call(message, "dfs"))
            writer.uint32(/* id 24, wireType 0 =*/192).int64(message.dfs);
        if (message.shls != null && message.shls.length) {
            writer.uint32(/* id 25, wireType 2 =*/202).fork();
            for (var i = 0; i < message.shls.length; ++i)
                writer.int64(message.shls[i]);
            writer.ldelim();
        }
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 26, wireType 0 =*/208).int32(message.type);
        if (message.encRand != null && Object.hasOwnProperty.call(message, "encRand"))
            writer.uint32(/* id 27, wireType 2 =*/218).bytes(message.encRand);
        return writer;
    };

    /**
     * Decodes a APPDtuInfoMO message from the specified reader or buffer.
     * @function decode
     * @memberof APPDtuInfoMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {APPDtuInfoMO} APPDtuInfoMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    APPDtuInfoMO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.APPDtuInfoMO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.deviceKind = reader.int32();
                    break;
                }
            case 2: {
                    message.dtuSwVersion = reader.int32();
                    break;
                }
            case 3: {
                    message.dtuHwVersion = reader.int32();
                    break;
                }
            case 4: {
                    message.dtuStepTime = reader.int32();
                    break;
                }
            case 5: {
                    message.dtuRfHwVersion = reader.int32();
                    break;
                }
            case 6: {
                    message.dtuRfSwVersion = reader.int32();
                    break;
                }
            case 7: {
                    message.accessModel = reader.int32();
                    break;
                }
            case 8: {
                    message.communicationTime = reader.int32();
                    break;
                }
            case 9: {
                    message.signalStrength = reader.int32();
                    break;
                }
            case 10: {
                    message.gprsVersion = reader.string();
                    break;
                }
            case 11: {
                    message.wifiVersion = reader.string();
                    break;
                }
            case 12: {
                    message.kaNumber = reader.string();
                    break;
                }
            case 13: {
                    message.dtuRuleId = reader.int32();
                    break;
                }
            case 14: {
                    message.dtuErrorCode = reader.int32();
                    break;
                }
            case 15: {
                    message.dtu485Mode = reader.int32();
                    break;
                }
            case 16: {
                    message.dtu485Address = reader.int32();
                    break;
                }
            case 17: {
                    message.sub1gFrequencyBand = reader.int32();
                    break;
                }
            case 18: {
                    message.sub1gChannelTotalNumber = reader.int32();
                    break;
                }
            case 19: {
                    message.sub1gChannelNumber = reader.int32();
                    break;
                }
            case 20: {
                    message.sub1gRp = reader.int32();
                    break;
                }
            case 21: {
                    message.sub1gChannelTotal = reader.int32();
                    break;
                }
            case 22: {
                    message.gprsImei = reader.string();
                    break;
                }
            case 23: {
                    message.dtuSwbTime = reader.int32();
                    break;
                }
            case 24: {
                    message.dfs = reader.int64();
                    break;
                }
            case 25: {
                    if (!(message.shls && message.shls.length))
                        message.shls = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.shls.push(reader.int64());
                    } else
                        message.shls.push(reader.int64());
                    break;
                }
            case 26: {
                    message.type = reader.int32();
                    break;
                }
            case 27: {
                    message.encRand = reader.bytes();
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
     * Gets the default type url for APPDtuInfoMO
     * @function getTypeUrl
     * @memberof APPDtuInfoMO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    APPDtuInfoMO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/APPDtuInfoMO";
    };

    return APPDtuInfoMO;
})();

$root.APPMeterInfoMO = (function() {

    /**
     * Properties of a APPMeterInfoMO.
     * @exports IAPPMeterInfoMO
     * @interface IAPPMeterInfoMO
     * @property {number|null} [deviceKind] APPMeterInfoMO deviceKind
     * @property {number|null} [meterSerialNumber] APPMeterInfoMO meterSerialNumber
     * @property {number|null} [meterModel] APPMeterInfoMO meterModel
     * @property {number|null} [meterCt] APPMeterInfoMO meterCt
     * @property {number|null} [communicationWay] APPMeterInfoMO communicationWay
     * @property {number|null} [accessMode] APPMeterInfoMO accessMode
     * @property {number|null} [swVersion] APPMeterInfoMO swVersion
     * @property {string|null} [meterValue] APPMeterInfoMO meterValue
     */

    /**
     * Constructs a new APPMeterInfoMO.
     * @exports APPMeterInfoMO
     * @classdesc Represents a APPMeterInfoMO.
     * @implements IAPPMeterInfoMO
     * @constructor
     * @param {IAPPMeterInfoMO=} [properties] Properties to set
     */
    function APPMeterInfoMO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * APPMeterInfoMO deviceKind.
     * @member {number} deviceKind
     * @memberof APPMeterInfoMO
     * @instance
     */
    APPMeterInfoMO.prototype.deviceKind = 0;

    /**
     * APPMeterInfoMO meterSerialNumber.
     * @member {number} meterSerialNumber
     * @memberof APPMeterInfoMO
     * @instance
     */
    APPMeterInfoMO.prototype.meterSerialNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * APPMeterInfoMO meterModel.
     * @member {number} meterModel
     * @memberof APPMeterInfoMO
     * @instance
     */
    APPMeterInfoMO.prototype.meterModel = 0;

    /**
     * APPMeterInfoMO meterCt.
     * @member {number} meterCt
     * @memberof APPMeterInfoMO
     * @instance
     */
    APPMeterInfoMO.prototype.meterCt = 0;

    /**
     * APPMeterInfoMO communicationWay.
     * @member {number} communicationWay
     * @memberof APPMeterInfoMO
     * @instance
     */
    APPMeterInfoMO.prototype.communicationWay = 0;

    /**
     * APPMeterInfoMO accessMode.
     * @member {number} accessMode
     * @memberof APPMeterInfoMO
     * @instance
     */
    APPMeterInfoMO.prototype.accessMode = 0;

    /**
     * APPMeterInfoMO swVersion.
     * @member {number} swVersion
     * @memberof APPMeterInfoMO
     * @instance
     */
    APPMeterInfoMO.prototype.swVersion = 0;

    /**
     * APPMeterInfoMO meterValue.
     * @member {string} meterValue
     * @memberof APPMeterInfoMO
     * @instance
     */
    APPMeterInfoMO.prototype.meterValue = "";

    /**
     * Creates a new APPMeterInfoMO instance using the specified properties.
     * @function create
     * @memberof APPMeterInfoMO
     * @static
     * @param {IAPPMeterInfoMO=} [properties] Properties to set
     * @returns {APPMeterInfoMO} APPMeterInfoMO instance
     */
    APPMeterInfoMO.create = function create(properties) {
        return new APPMeterInfoMO(properties);
    };

    /**
     * Encodes the specified APPMeterInfoMO message. Does not implicitly {@link APPMeterInfoMO.verify|verify} messages.
     * @function encode
     * @memberof APPMeterInfoMO
     * @static
     * @param {IAPPMeterInfoMO} message APPMeterInfoMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    APPMeterInfoMO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deviceKind != null && Object.hasOwnProperty.call(message, "deviceKind"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.deviceKind);
        if (message.meterSerialNumber != null && Object.hasOwnProperty.call(message, "meterSerialNumber"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.meterSerialNumber);
        if (message.meterModel != null && Object.hasOwnProperty.call(message, "meterModel"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.meterModel);
        if (message.meterCt != null && Object.hasOwnProperty.call(message, "meterCt"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.meterCt);
        if (message.communicationWay != null && Object.hasOwnProperty.call(message, "communicationWay"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.communicationWay);
        if (message.accessMode != null && Object.hasOwnProperty.call(message, "accessMode"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.accessMode);
        if (message.swVersion != null && Object.hasOwnProperty.call(message, "swVersion"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.swVersion);
        if (message.meterValue != null && Object.hasOwnProperty.call(message, "meterValue"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.meterValue);
        return writer;
    };

    /**
     * Decodes a APPMeterInfoMO message from the specified reader or buffer.
     * @function decode
     * @memberof APPMeterInfoMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {APPMeterInfoMO} APPMeterInfoMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    APPMeterInfoMO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.APPMeterInfoMO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.deviceKind = reader.int32();
                    break;
                }
            case 2: {
                    message.meterSerialNumber = reader.int64();
                    break;
                }
            case 3: {
                    message.meterModel = reader.int32();
                    break;
                }
            case 4: {
                    message.meterCt = reader.int32();
                    break;
                }
            case 5: {
                    message.communicationWay = reader.int32();
                    break;
                }
            case 6: {
                    message.accessMode = reader.int32();
                    break;
                }
            case 7: {
                    message.swVersion = reader.int32();
                    break;
                }
            case 8: {
                    message.meterValue = reader.string();
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
     * Gets the default type url for APPMeterInfoMO
     * @function getTypeUrl
     * @memberof APPMeterInfoMO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    APPMeterInfoMO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/APPMeterInfoMO";
    };

    return APPMeterInfoMO;
})();

$root.APPRpInfoMO = (function() {

    /**
     * Properties of a APPRpInfoMO.
     * @exports IAPPRpInfoMO
     * @interface IAPPRpInfoMO
     * @property {number|null} [deviceKind] APPRpInfoMO deviceKind
     * @property {number|null} [rpSerialNumber] APPRpInfoMO rpSerialNumber
     * @property {number|null} [rpSwVersion] APPRpInfoMO rpSwVersion
     * @property {number|null} [rpHwVersion] APPRpInfoMO rpHwVersion
     * @property {number|null} [rpRuleId] APPRpInfoMO rpRuleId
     */

    /**
     * Constructs a new APPRpInfoMO.
     * @exports APPRpInfoMO
     * @classdesc Represents a APPRpInfoMO.
     * @implements IAPPRpInfoMO
     * @constructor
     * @param {IAPPRpInfoMO=} [properties] Properties to set
     */
    function APPRpInfoMO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * APPRpInfoMO deviceKind.
     * @member {number} deviceKind
     * @memberof APPRpInfoMO
     * @instance
     */
    APPRpInfoMO.prototype.deviceKind = 0;

    /**
     * APPRpInfoMO rpSerialNumber.
     * @member {number} rpSerialNumber
     * @memberof APPRpInfoMO
     * @instance
     */
    APPRpInfoMO.prototype.rpSerialNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * APPRpInfoMO rpSwVersion.
     * @member {number} rpSwVersion
     * @memberof APPRpInfoMO
     * @instance
     */
    APPRpInfoMO.prototype.rpSwVersion = 0;

    /**
     * APPRpInfoMO rpHwVersion.
     * @member {number} rpHwVersion
     * @memberof APPRpInfoMO
     * @instance
     */
    APPRpInfoMO.prototype.rpHwVersion = 0;

    /**
     * APPRpInfoMO rpRuleId.
     * @member {number} rpRuleId
     * @memberof APPRpInfoMO
     * @instance
     */
    APPRpInfoMO.prototype.rpRuleId = 0;

    /**
     * Creates a new APPRpInfoMO instance using the specified properties.
     * @function create
     * @memberof APPRpInfoMO
     * @static
     * @param {IAPPRpInfoMO=} [properties] Properties to set
     * @returns {APPRpInfoMO} APPRpInfoMO instance
     */
    APPRpInfoMO.create = function create(properties) {
        return new APPRpInfoMO(properties);
    };

    /**
     * Encodes the specified APPRpInfoMO message. Does not implicitly {@link APPRpInfoMO.verify|verify} messages.
     * @function encode
     * @memberof APPRpInfoMO
     * @static
     * @param {IAPPRpInfoMO} message APPRpInfoMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    APPRpInfoMO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deviceKind != null && Object.hasOwnProperty.call(message, "deviceKind"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.deviceKind);
        if (message.rpSerialNumber != null && Object.hasOwnProperty.call(message, "rpSerialNumber"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.rpSerialNumber);
        if (message.rpSwVersion != null && Object.hasOwnProperty.call(message, "rpSwVersion"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.rpSwVersion);
        if (message.rpHwVersion != null && Object.hasOwnProperty.call(message, "rpHwVersion"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.rpHwVersion);
        if (message.rpRuleId != null && Object.hasOwnProperty.call(message, "rpRuleId"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.rpRuleId);
        return writer;
    };

    /**
     * Decodes a APPRpInfoMO message from the specified reader or buffer.
     * @function decode
     * @memberof APPRpInfoMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {APPRpInfoMO} APPRpInfoMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    APPRpInfoMO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.APPRpInfoMO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.deviceKind = reader.int32();
                    break;
                }
            case 2: {
                    message.rpSerialNumber = reader.int64();
                    break;
                }
            case 3: {
                    message.rpSwVersion = reader.int32();
                    break;
                }
            case 4: {
                    message.rpHwVersion = reader.int32();
                    break;
                }
            case 5: {
                    message.rpRuleId = reader.int32();
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
     * Gets the default type url for APPRpInfoMO
     * @function getTypeUrl
     * @memberof APPRpInfoMO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    APPRpInfoMO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/APPRpInfoMO";
    };

    return APPRpInfoMO;
})();

$root.APPPvInfoMO = (function() {

    /**
     * Properties of a APPPvInfoMO.
     * @exports IAPPPvInfoMO
     * @interface IAPPPvInfoMO
     * @property {number|null} [deviceKind] APPPvInfoMO deviceKind
     * @property {number|null} [pvSerialNumber] APPPvInfoMO pvSerialNumber
     * @property {number|null} [pvUsfw] APPPvInfoMO pvUsfw
     * @property {number|null} [pvSwVersion] APPPvInfoMO pvSwVersion
     * @property {number|null} [pvHwPartNumber] APPPvInfoMO pvHwPartNumber
     * @property {number|null} [pvHwVersion] APPPvInfoMO pvHwVersion
     * @property {number|null} [pvGridProfileCode] APPPvInfoMO pvGridProfileCode
     * @property {number|null} [pvGridProfile] APPPvInfoMO pvGridProfile
     * @property {number|null} [pvRfHwVersion] APPPvInfoMO pvRfHwVersion
     * @property {number|null} [pvRfSwVersion] APPPvInfoMO pvRfSwVersion
     * @property {number|null} [miRuleId] APPPvInfoMO miRuleId
     */

    /**
     * Constructs a new APPPvInfoMO.
     * @exports APPPvInfoMO
     * @classdesc Represents a APPPvInfoMO.
     * @implements IAPPPvInfoMO
     * @constructor
     * @param {IAPPPvInfoMO=} [properties] Properties to set
     */
    function APPPvInfoMO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * APPPvInfoMO deviceKind.
     * @member {number} deviceKind
     * @memberof APPPvInfoMO
     * @instance
     */
    APPPvInfoMO.prototype.deviceKind = 0;

    /**
     * APPPvInfoMO pvSerialNumber.
     * @member {number} pvSerialNumber
     * @memberof APPPvInfoMO
     * @instance
     */
    APPPvInfoMO.prototype.pvSerialNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * APPPvInfoMO pvUsfw.
     * @member {number} pvUsfw
     * @memberof APPPvInfoMO
     * @instance
     */
    APPPvInfoMO.prototype.pvUsfw = 0;

    /**
     * APPPvInfoMO pvSwVersion.
     * @member {number} pvSwVersion
     * @memberof APPPvInfoMO
     * @instance
     */
    APPPvInfoMO.prototype.pvSwVersion = 0;

    /**
     * APPPvInfoMO pvHwPartNumber.
     * @member {number} pvHwPartNumber
     * @memberof APPPvInfoMO
     * @instance
     */
    APPPvInfoMO.prototype.pvHwPartNumber = 0;

    /**
     * APPPvInfoMO pvHwVersion.
     * @member {number} pvHwVersion
     * @memberof APPPvInfoMO
     * @instance
     */
    APPPvInfoMO.prototype.pvHwVersion = 0;

    /**
     * APPPvInfoMO pvGridProfileCode.
     * @member {number} pvGridProfileCode
     * @memberof APPPvInfoMO
     * @instance
     */
    APPPvInfoMO.prototype.pvGridProfileCode = 0;

    /**
     * APPPvInfoMO pvGridProfile.
     * @member {number} pvGridProfile
     * @memberof APPPvInfoMO
     * @instance
     */
    APPPvInfoMO.prototype.pvGridProfile = 0;

    /**
     * APPPvInfoMO pvRfHwVersion.
     * @member {number} pvRfHwVersion
     * @memberof APPPvInfoMO
     * @instance
     */
    APPPvInfoMO.prototype.pvRfHwVersion = 0;

    /**
     * APPPvInfoMO pvRfSwVersion.
     * @member {number} pvRfSwVersion
     * @memberof APPPvInfoMO
     * @instance
     */
    APPPvInfoMO.prototype.pvRfSwVersion = 0;

    /**
     * APPPvInfoMO miRuleId.
     * @member {number} miRuleId
     * @memberof APPPvInfoMO
     * @instance
     */
    APPPvInfoMO.prototype.miRuleId = 0;

    /**
     * Creates a new APPPvInfoMO instance using the specified properties.
     * @function create
     * @memberof APPPvInfoMO
     * @static
     * @param {IAPPPvInfoMO=} [properties] Properties to set
     * @returns {APPPvInfoMO} APPPvInfoMO instance
     */
    APPPvInfoMO.create = function create(properties) {
        return new APPPvInfoMO(properties);
    };

    /**
     * Encodes the specified APPPvInfoMO message. Does not implicitly {@link APPPvInfoMO.verify|verify} messages.
     * @function encode
     * @memberof APPPvInfoMO
     * @static
     * @param {IAPPPvInfoMO} message APPPvInfoMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    APPPvInfoMO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deviceKind != null && Object.hasOwnProperty.call(message, "deviceKind"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.deviceKind);
        if (message.pvSerialNumber != null && Object.hasOwnProperty.call(message, "pvSerialNumber"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.pvSerialNumber);
        if (message.pvUsfw != null && Object.hasOwnProperty.call(message, "pvUsfw"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.pvUsfw);
        if (message.pvSwVersion != null && Object.hasOwnProperty.call(message, "pvSwVersion"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.pvSwVersion);
        if (message.pvHwPartNumber != null && Object.hasOwnProperty.call(message, "pvHwPartNumber"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.pvHwPartNumber);
        if (message.pvHwVersion != null && Object.hasOwnProperty.call(message, "pvHwVersion"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.pvHwVersion);
        if (message.pvGridProfileCode != null && Object.hasOwnProperty.call(message, "pvGridProfileCode"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.pvGridProfileCode);
        if (message.pvGridProfile != null && Object.hasOwnProperty.call(message, "pvGridProfile"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.pvGridProfile);
        if (message.pvRfHwVersion != null && Object.hasOwnProperty.call(message, "pvRfHwVersion"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.pvRfHwVersion);
        if (message.pvRfSwVersion != null && Object.hasOwnProperty.call(message, "pvRfSwVersion"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.pvRfSwVersion);
        if (message.miRuleId != null && Object.hasOwnProperty.call(message, "miRuleId"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.miRuleId);
        return writer;
    };

    /**
     * Decodes a APPPvInfoMO message from the specified reader or buffer.
     * @function decode
     * @memberof APPPvInfoMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {APPPvInfoMO} APPPvInfoMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    APPPvInfoMO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.APPPvInfoMO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.deviceKind = reader.int32();
                    break;
                }
            case 2: {
                    message.pvSerialNumber = reader.int64();
                    break;
                }
            case 3: {
                    message.pvUsfw = reader.int32();
                    break;
                }
            case 4: {
                    message.pvSwVersion = reader.int32();
                    break;
                }
            case 5: {
                    message.pvHwPartNumber = reader.int32();
                    break;
                }
            case 6: {
                    message.pvHwVersion = reader.int32();
                    break;
                }
            case 7: {
                    message.pvGridProfileCode = reader.int32();
                    break;
                }
            case 8: {
                    message.pvGridProfile = reader.int32();
                    break;
                }
            case 9: {
                    message.pvRfHwVersion = reader.int32();
                    break;
                }
            case 10: {
                    message.pvRfSwVersion = reader.int32();
                    break;
                }
            case 11: {
                    message.miRuleId = reader.int32();
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
     * Gets the default type url for APPPvInfoMO
     * @function getTypeUrl
     * @memberof APPPvInfoMO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    APPPvInfoMO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/APPPvInfoMO";
    };

    return APPPvInfoMO;
})();

$root.APPFeatureMO = (function() {

    /**
     * Properties of a APPFeatureMO.
     * @exports IAPPFeatureMO
     * @interface IAPPFeatureMO
     * @property {number|null} [key] APPFeatureMO key
     * @property {string|null} [value] APPFeatureMO value
     */

    /**
     * Constructs a new APPFeatureMO.
     * @exports APPFeatureMO
     * @classdesc Represents a APPFeatureMO.
     * @implements IAPPFeatureMO
     * @constructor
     * @param {IAPPFeatureMO=} [properties] Properties to set
     */
    function APPFeatureMO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * APPFeatureMO key.
     * @member {number} key
     * @memberof APPFeatureMO
     * @instance
     */
    APPFeatureMO.prototype.key = 0;

    /**
     * APPFeatureMO value.
     * @member {string} value
     * @memberof APPFeatureMO
     * @instance
     */
    APPFeatureMO.prototype.value = "";

    /**
     * Creates a new APPFeatureMO instance using the specified properties.
     * @function create
     * @memberof APPFeatureMO
     * @static
     * @param {IAPPFeatureMO=} [properties] Properties to set
     * @returns {APPFeatureMO} APPFeatureMO instance
     */
    APPFeatureMO.create = function create(properties) {
        return new APPFeatureMO(properties);
    };

    /**
     * Encodes the specified APPFeatureMO message. Does not implicitly {@link APPFeatureMO.verify|verify} messages.
     * @function encode
     * @memberof APPFeatureMO
     * @static
     * @param {IAPPFeatureMO} message APPFeatureMO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    APPFeatureMO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.key);
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
        return writer;
    };

    /**
     * Decodes a APPFeatureMO message from the specified reader or buffer.
     * @function decode
     * @memberof APPFeatureMO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {APPFeatureMO} APPFeatureMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    APPFeatureMO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.APPFeatureMO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.key = reader.int32();
                    break;
                }
            case 2: {
                    message.value = reader.string();
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
     * Gets the default type url for APPFeatureMO
     * @function getTypeUrl
     * @memberof APPFeatureMO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    APPFeatureMO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/APPFeatureMO";
    };

    return APPFeatureMO;
})();

$root.APPInfoDataReqDTO = (function() {

    /**
     * Properties of a APPInfoDataReqDTO.
     * @exports IAPPInfoDataReqDTO
     * @interface IAPPInfoDataReqDTO
     * @property {string|null} [dtuSerialNumber] APPInfoDataReqDTO dtuSerialNumber
     * @property {number|null} [timestamp] APPInfoDataReqDTO timestamp
     * @property {number|null} [deviceNumber] APPInfoDataReqDTO deviceNumber
     * @property {number|null} [pvNumber] APPInfoDataReqDTO pvNumber
     * @property {number|null} [packageNumber] APPInfoDataReqDTO packageNumber
     * @property {number|null} [currentPackage] APPInfoDataReqDTO currentPackage
     * @property {number|null} [channel] APPInfoDataReqDTO channel
     * @property {IAPPDtuInfoMO|null} [dtuInfo] APPInfoDataReqDTO dtuInfo
     * @property {Array.<IAPPMeterInfoMO>|null} [meterInfo] APPInfoDataReqDTO meterInfo
     * @property {Array.<IAPPRpInfoMO>|null} [rpInfo] APPInfoDataReqDTO rpInfo
     * @property {Array.<IAPPPvInfoMO>|null} [pvInfo] APPInfoDataReqDTO pvInfo
     * @property {number|null} [unknownField] APPInfoDataReqDTO unknownField
     * @property {Array.<IAPPFeatureMO>|null} [appFeatures] APPInfoDataReqDTO appFeatures
     */

    /**
     * Constructs a new APPInfoDataReqDTO.
     * @exports APPInfoDataReqDTO
     * @classdesc Represents a APPInfoDataReqDTO.
     * @implements IAPPInfoDataReqDTO
     * @constructor
     * @param {IAPPInfoDataReqDTO=} [properties] Properties to set
     */
    function APPInfoDataReqDTO(properties) {
        this.meterInfo = [];
        this.rpInfo = [];
        this.pvInfo = [];
        this.appFeatures = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * APPInfoDataReqDTO dtuSerialNumber.
     * @member {string} dtuSerialNumber
     * @memberof APPInfoDataReqDTO
     * @instance
     */
    APPInfoDataReqDTO.prototype.dtuSerialNumber = "";

    /**
     * APPInfoDataReqDTO timestamp.
     * @member {number} timestamp
     * @memberof APPInfoDataReqDTO
     * @instance
     */
    APPInfoDataReqDTO.prototype.timestamp = 0;

    /**
     * APPInfoDataReqDTO deviceNumber.
     * @member {number} deviceNumber
     * @memberof APPInfoDataReqDTO
     * @instance
     */
    APPInfoDataReqDTO.prototype.deviceNumber = 0;

    /**
     * APPInfoDataReqDTO pvNumber.
     * @member {number} pvNumber
     * @memberof APPInfoDataReqDTO
     * @instance
     */
    APPInfoDataReqDTO.prototype.pvNumber = 0;

    /**
     * APPInfoDataReqDTO packageNumber.
     * @member {number} packageNumber
     * @memberof APPInfoDataReqDTO
     * @instance
     */
    APPInfoDataReqDTO.prototype.packageNumber = 0;

    /**
     * APPInfoDataReqDTO currentPackage.
     * @member {number} currentPackage
     * @memberof APPInfoDataReqDTO
     * @instance
     */
    APPInfoDataReqDTO.prototype.currentPackage = 0;

    /**
     * APPInfoDataReqDTO channel.
     * @member {number} channel
     * @memberof APPInfoDataReqDTO
     * @instance
     */
    APPInfoDataReqDTO.prototype.channel = 0;

    /**
     * APPInfoDataReqDTO dtuInfo.
     * @member {IAPPDtuInfoMO|null|undefined} dtuInfo
     * @memberof APPInfoDataReqDTO
     * @instance
     */
    APPInfoDataReqDTO.prototype.dtuInfo = null;

    /**
     * APPInfoDataReqDTO meterInfo.
     * @member {Array.<IAPPMeterInfoMO>} meterInfo
     * @memberof APPInfoDataReqDTO
     * @instance
     */
    APPInfoDataReqDTO.prototype.meterInfo = $util.emptyArray;

    /**
     * APPInfoDataReqDTO rpInfo.
     * @member {Array.<IAPPRpInfoMO>} rpInfo
     * @memberof APPInfoDataReqDTO
     * @instance
     */
    APPInfoDataReqDTO.prototype.rpInfo = $util.emptyArray;

    /**
     * APPInfoDataReqDTO pvInfo.
     * @member {Array.<IAPPPvInfoMO>} pvInfo
     * @memberof APPInfoDataReqDTO
     * @instance
     */
    APPInfoDataReqDTO.prototype.pvInfo = $util.emptyArray;

    /**
     * APPInfoDataReqDTO unknownField.
     * @member {number} unknownField
     * @memberof APPInfoDataReqDTO
     * @instance
     */
    APPInfoDataReqDTO.prototype.unknownField = 0;

    /**
     * APPInfoDataReqDTO appFeatures.
     * @member {Array.<IAPPFeatureMO>} appFeatures
     * @memberof APPInfoDataReqDTO
     * @instance
     */
    APPInfoDataReqDTO.prototype.appFeatures = $util.emptyArray;

    /**
     * Creates a new APPInfoDataReqDTO instance using the specified properties.
     * @function create
     * @memberof APPInfoDataReqDTO
     * @static
     * @param {IAPPInfoDataReqDTO=} [properties] Properties to set
     * @returns {APPInfoDataReqDTO} APPInfoDataReqDTO instance
     */
    APPInfoDataReqDTO.create = function create(properties) {
        return new APPInfoDataReqDTO(properties);
    };

    /**
     * Encodes the specified APPInfoDataReqDTO message. Does not implicitly {@link APPInfoDataReqDTO.verify|verify} messages.
     * @function encode
     * @memberof APPInfoDataReqDTO
     * @static
     * @param {IAPPInfoDataReqDTO} message APPInfoDataReqDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    APPInfoDataReqDTO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.dtuSerialNumber != null && Object.hasOwnProperty.call(message, "dtuSerialNumber"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.dtuSerialNumber);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.timestamp);
        if (message.deviceNumber != null && Object.hasOwnProperty.call(message, "deviceNumber"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.deviceNumber);
        if (message.pvNumber != null && Object.hasOwnProperty.call(message, "pvNumber"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.pvNumber);
        if (message.packageNumber != null && Object.hasOwnProperty.call(message, "packageNumber"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.packageNumber);
        if (message.currentPackage != null && Object.hasOwnProperty.call(message, "currentPackage"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.currentPackage);
        if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.channel);
        if (message.dtuInfo != null && Object.hasOwnProperty.call(message, "dtuInfo"))
            $root.APPDtuInfoMO.encode(message.dtuInfo, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.meterInfo != null && message.meterInfo.length)
            for (var i = 0; i < message.meterInfo.length; ++i)
                $root.APPMeterInfoMO.encode(message.meterInfo[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.rpInfo != null && message.rpInfo.length)
            for (var i = 0; i < message.rpInfo.length; ++i)
                $root.APPRpInfoMO.encode(message.rpInfo[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.pvInfo != null && message.pvInfo.length)
            for (var i = 0; i < message.pvInfo.length; ++i)
                $root.APPPvInfoMO.encode(message.pvInfo[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.unknownField != null && Object.hasOwnProperty.call(message, "unknownField"))
            writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.unknownField);
        if (message.appFeatures != null && message.appFeatures.length)
            for (var i = 0; i < message.appFeatures.length; ++i)
                $root.APPFeatureMO.encode(message.appFeatures[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        return writer;
    };

    /**
     * Decodes a APPInfoDataReqDTO message from the specified reader or buffer.
     * @function decode
     * @memberof APPInfoDataReqDTO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {APPInfoDataReqDTO} APPInfoDataReqDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    APPInfoDataReqDTO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.APPInfoDataReqDTO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.dtuSerialNumber = reader.string();
                    break;
                }
            case 2: {
                    message.timestamp = reader.uint32();
                    break;
                }
            case 3: {
                    message.deviceNumber = reader.int32();
                    break;
                }
            case 4: {
                    message.pvNumber = reader.int32();
                    break;
                }
            case 5: {
                    message.packageNumber = reader.int32();
                    break;
                }
            case 6: {
                    message.currentPackage = reader.int32();
                    break;
                }
            case 7: {
                    message.channel = reader.int32();
                    break;
                }
            case 8: {
                    message.dtuInfo = $root.APPDtuInfoMO.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    if (!(message.meterInfo && message.meterInfo.length))
                        message.meterInfo = [];
                    message.meterInfo.push($root.APPMeterInfoMO.decode(reader, reader.uint32()));
                    break;
                }
            case 10: {
                    if (!(message.rpInfo && message.rpInfo.length))
                        message.rpInfo = [];
                    message.rpInfo.push($root.APPRpInfoMO.decode(reader, reader.uint32()));
                    break;
                }
            case 11: {
                    if (!(message.pvInfo && message.pvInfo.length))
                        message.pvInfo = [];
                    message.pvInfo.push($root.APPPvInfoMO.decode(reader, reader.uint32()));
                    break;
                }
            case 12: {
                    message.unknownField = reader.uint32();
                    break;
                }
            case 13: {
                    if (!(message.appFeatures && message.appFeatures.length))
                        message.appFeatures = [];
                    message.appFeatures.push($root.APPFeatureMO.decode(reader, reader.uint32()));
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
     * Gets the default type url for APPInfoDataReqDTO
     * @function getTypeUrl
     * @memberof APPInfoDataReqDTO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    APPInfoDataReqDTO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/APPInfoDataReqDTO";
    };

    return APPInfoDataReqDTO;
})();

$root.APPInfoDataResDTO = (function() {

    /**
     * Properties of a APPInfoDataResDTO.
     * @exports IAPPInfoDataResDTO
     * @interface IAPPInfoDataResDTO
     * @property {Uint8Array|null} [timeYmdHms] APPInfoDataResDTO timeYmdHms
     * @property {number|null} [offset] APPInfoDataResDTO offset
     * @property {number|null} [currentPackage] APPInfoDataResDTO currentPackage
     * @property {number|null} [errorCode] APPInfoDataResDTO errorCode
     * @property {number|null} [time] APPInfoDataResDTO time
     */

    /**
     * Constructs a new APPInfoDataResDTO.
     * @exports APPInfoDataResDTO
     * @classdesc Represents a APPInfoDataResDTO.
     * @implements IAPPInfoDataResDTO
     * @constructor
     * @param {IAPPInfoDataResDTO=} [properties] Properties to set
     */
    function APPInfoDataResDTO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * APPInfoDataResDTO timeYmdHms.
     * @member {Uint8Array} timeYmdHms
     * @memberof APPInfoDataResDTO
     * @instance
     */
    APPInfoDataResDTO.prototype.timeYmdHms = $util.newBuffer([]);

    /**
     * APPInfoDataResDTO offset.
     * @member {number} offset
     * @memberof APPInfoDataResDTO
     * @instance
     */
    APPInfoDataResDTO.prototype.offset = 0;

    /**
     * APPInfoDataResDTO currentPackage.
     * @member {number} currentPackage
     * @memberof APPInfoDataResDTO
     * @instance
     */
    APPInfoDataResDTO.prototype.currentPackage = 0;

    /**
     * APPInfoDataResDTO errorCode.
     * @member {number} errorCode
     * @memberof APPInfoDataResDTO
     * @instance
     */
    APPInfoDataResDTO.prototype.errorCode = 0;

    /**
     * APPInfoDataResDTO time.
     * @member {number} time
     * @memberof APPInfoDataResDTO
     * @instance
     */
    APPInfoDataResDTO.prototype.time = 0;

    /**
     * Creates a new APPInfoDataResDTO instance using the specified properties.
     * @function create
     * @memberof APPInfoDataResDTO
     * @static
     * @param {IAPPInfoDataResDTO=} [properties] Properties to set
     * @returns {APPInfoDataResDTO} APPInfoDataResDTO instance
     */
    APPInfoDataResDTO.create = function create(properties) {
        return new APPInfoDataResDTO(properties);
    };

    /**
     * Encodes the specified APPInfoDataResDTO message. Does not implicitly {@link APPInfoDataResDTO.verify|verify} messages.
     * @function encode
     * @memberof APPInfoDataResDTO
     * @static
     * @param {IAPPInfoDataResDTO} message APPInfoDataResDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    APPInfoDataResDTO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timeYmdHms != null && Object.hasOwnProperty.call(message, "timeYmdHms"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.timeYmdHms);
        if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.offset);
        if (message.currentPackage != null && Object.hasOwnProperty.call(message, "currentPackage"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.currentPackage);
        if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.errorCode);
        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.time);
        return writer;
    };

    /**
     * Decodes a APPInfoDataResDTO message from the specified reader or buffer.
     * @function decode
     * @memberof APPInfoDataResDTO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {APPInfoDataResDTO} APPInfoDataResDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    APPInfoDataResDTO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.APPInfoDataResDTO();
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
                    message.offset = reader.int32();
                    break;
                }
            case 3: {
                    message.currentPackage = reader.int32();
                    break;
                }
            case 4: {
                    message.errorCode = reader.int32();
                    break;
                }
            case 5: {
                    message.time = reader.uint32();
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
     * Gets the default type url for APPInfoDataResDTO
     * @function getTypeUrl
     * @memberof APPInfoDataResDTO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    APPInfoDataResDTO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/APPInfoDataResDTO";
    };

    return APPInfoDataResDTO;
})();

$root.GetConfigResDTO = (function() {

    /**
     * Properties of a GetConfigResDTO.
     * @exports IGetConfigResDTO
     * @interface IGetConfigResDTO
     * @property {number|null} [offset] GetConfigResDTO offset
     * @property {number|null} [time] GetConfigResDTO time
     */

    /**
     * Constructs a new GetConfigResDTO.
     * @exports GetConfigResDTO
     * @classdesc Represents a GetConfigResDTO.
     * @implements IGetConfigResDTO
     * @constructor
     * @param {IGetConfigResDTO=} [properties] Properties to set
     */
    function GetConfigResDTO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetConfigResDTO offset.
     * @member {number} offset
     * @memberof GetConfigResDTO
     * @instance
     */
    GetConfigResDTO.prototype.offset = 0;

    /**
     * GetConfigResDTO time.
     * @member {number} time
     * @memberof GetConfigResDTO
     * @instance
     */
    GetConfigResDTO.prototype.time = 0;

    /**
     * Creates a new GetConfigResDTO instance using the specified properties.
     * @function create
     * @memberof GetConfigResDTO
     * @static
     * @param {IGetConfigResDTO=} [properties] Properties to set
     * @returns {GetConfigResDTO} GetConfigResDTO instance
     */
    GetConfigResDTO.create = function create(properties) {
        return new GetConfigResDTO(properties);
    };

    /**
     * Encodes the specified GetConfigResDTO message. Does not implicitly {@link GetConfigResDTO.verify|verify} messages.
     * @function encode
     * @memberof GetConfigResDTO
     * @static
     * @param {IGetConfigResDTO} message GetConfigResDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetConfigResDTO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.offset);
        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.time);
        return writer;
    };

    /**
     * Decodes a GetConfigResDTO message from the specified reader or buffer.
     * @function decode
     * @memberof GetConfigResDTO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetConfigResDTO} GetConfigResDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetConfigResDTO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetConfigResDTO();
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
                    message.time = reader.uint32();
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
     * Gets the default type url for GetConfigResDTO
     * @function getTypeUrl
     * @memberof GetConfigResDTO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetConfigResDTO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetConfigResDTO";
    };

    return GetConfigResDTO;
})();

$root.GetConfigReqDTO = (function() {

    /**
     * Properties of a GetConfigReqDTO.
     * @exports IGetConfigReqDTO
     * @interface IGetConfigReqDTO
     * @property {number|null} [requestOffset] GetConfigReqDTO requestOffset
     * @property {number|null} [requestTime] GetConfigReqDTO requestTime
     * @property {number|null} [lockPassword] GetConfigReqDTO lockPassword
     * @property {number|null} [lockTime] GetConfigReqDTO lockTime
     * @property {number|null} [limitPowerMypower] GetConfigReqDTO limitPowerMypower
     * @property {number|null} [zeroExport_433Addr] GetConfigReqDTO zeroExport_433Addr
     * @property {number|null} [zeroExportEnable] GetConfigReqDTO zeroExportEnable
     * @property {number|null} [netmodeSelect] GetConfigReqDTO netmodeSelect
     * @property {number|null} [channelSelect] GetConfigReqDTO channelSelect
     * @property {number|null} [serverSendTime] GetConfigReqDTO serverSendTime
     * @property {number|null} [wifiRssi] GetConfigReqDTO wifiRssi
     * @property {number|null} [serverport] GetConfigReqDTO serverport
     * @property {string|null} [apnSet] GetConfigReqDTO apnSet
     * @property {string|null} [meterKind] GetConfigReqDTO meterKind
     * @property {string|null} [meterInterface] GetConfigReqDTO meterInterface
     * @property {string|null} [wifiSsid] GetConfigReqDTO wifiSsid
     * @property {string|null} [wifiPassword] GetConfigReqDTO wifiPassword
     * @property {string|null} [serverDomainName] GetConfigReqDTO serverDomainName
     * @property {number|null} [invType] GetConfigReqDTO invType
     * @property {string|null} [dtuSn] GetConfigReqDTO dtuSn
     * @property {number|null} [accessModel] GetConfigReqDTO accessModel
     * @property {number|null} [mac_0] GetConfigReqDTO mac_0
     * @property {number|null} [mac_1] GetConfigReqDTO mac_1
     * @property {number|null} [mac_2] GetConfigReqDTO mac_2
     * @property {number|null} [mac_3] GetConfigReqDTO mac_3
     * @property {number|null} [dhcpSwitch] GetConfigReqDTO dhcpSwitch
     * @property {number|null} [ipAddr_0] GetConfigReqDTO ipAddr_0
     * @property {number|null} [ipAddr_1] GetConfigReqDTO ipAddr_1
     * @property {number|null} [ipAddr_2] GetConfigReqDTO ipAddr_2
     * @property {number|null} [ipAddr_3] GetConfigReqDTO ipAddr_3
     * @property {number|null} [subnetMask_0] GetConfigReqDTO subnetMask_0
     * @property {number|null} [subnetMask_1] GetConfigReqDTO subnetMask_1
     * @property {number|null} [subnetMask_2] GetConfigReqDTO subnetMask_2
     * @property {number|null} [subnetMask_3] GetConfigReqDTO subnetMask_3
     * @property {number|null} [defaultGateway_0] GetConfigReqDTO defaultGateway_0
     * @property {number|null} [defaultGateway_1] GetConfigReqDTO defaultGateway_1
     * @property {number|null} [defaultGateway_2] GetConfigReqDTO defaultGateway_2
     * @property {number|null} [defaultGateway_3] GetConfigReqDTO defaultGateway_3
     * @property {string|null} [kaNub] GetConfigReqDTO kaNub
     * @property {string|null} [apnName] GetConfigReqDTO apnName
     * @property {string|null} [apnPassword] GetConfigReqDTO apnPassword
     * @property {number|null} [sub1gSweepSwitch] GetConfigReqDTO sub1gSweepSwitch
     * @property {number|null} [sub1gWorkChannel] GetConfigReqDTO sub1gWorkChannel
     * @property {number|null} [cableDns_0] GetConfigReqDTO cableDns_0
     * @property {number|null} [cableDns_1] GetConfigReqDTO cableDns_1
     * @property {number|null} [cableDns_2] GetConfigReqDTO cableDns_2
     * @property {number|null} [cableDns_3] GetConfigReqDTO cableDns_3
     * @property {number|null} [wifiIpAddr_0] GetConfigReqDTO wifiIpAddr_0
     * @property {number|null} [wifiIpAddr_1] GetConfigReqDTO wifiIpAddr_1
     * @property {number|null} [wifiIpAddr_2] GetConfigReqDTO wifiIpAddr_2
     * @property {number|null} [wifiIpAddr_3] GetConfigReqDTO wifiIpAddr_3
     * @property {number|null} [mac_4] GetConfigReqDTO mac_4
     * @property {number|null} [mac_5] GetConfigReqDTO mac_5
     * @property {number|null} [wifiMac_0] GetConfigReqDTO wifiMac_0
     * @property {number|null} [wifiMac_1] GetConfigReqDTO wifiMac_1
     * @property {number|null} [wifiMac_2] GetConfigReqDTO wifiMac_2
     * @property {number|null} [wifiMac_3] GetConfigReqDTO wifiMac_3
     * @property {number|null} [wifiMac_4] GetConfigReqDTO wifiMac_4
     * @property {number|null} [wifiMac_5] GetConfigReqDTO wifiMac_5
     * @property {string|null} [gprsImei] GetConfigReqDTO gprsImei
     * @property {string|null} [dtuApSsid] GetConfigReqDTO dtuApSsid
     * @property {string|null} [dtuApPass] GetConfigReqDTO dtuApPass
     */

    /**
     * Constructs a new GetConfigReqDTO.
     * @exports GetConfigReqDTO
     * @classdesc Represents a GetConfigReqDTO.
     * @implements IGetConfigReqDTO
     * @constructor
     * @param {IGetConfigReqDTO=} [properties] Properties to set
     */
    function GetConfigReqDTO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetConfigReqDTO requestOffset.
     * @member {number} requestOffset
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.requestOffset = 0;

    /**
     * GetConfigReqDTO requestTime.
     * @member {number} requestTime
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.requestTime = 0;

    /**
     * GetConfigReqDTO lockPassword.
     * @member {number} lockPassword
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.lockPassword = 0;

    /**
     * GetConfigReqDTO lockTime.
     * @member {number} lockTime
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.lockTime = 0;

    /**
     * GetConfigReqDTO limitPowerMypower.
     * @member {number} limitPowerMypower
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.limitPowerMypower = 0;

    /**
     * GetConfigReqDTO zeroExport_433Addr.
     * @member {number} zeroExport_433Addr
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.zeroExport_433Addr = 0;

    /**
     * GetConfigReqDTO zeroExportEnable.
     * @member {number} zeroExportEnable
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.zeroExportEnable = 0;

    /**
     * GetConfigReqDTO netmodeSelect.
     * @member {number} netmodeSelect
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.netmodeSelect = 0;

    /**
     * GetConfigReqDTO channelSelect.
     * @member {number} channelSelect
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.channelSelect = 0;

    /**
     * GetConfigReqDTO serverSendTime.
     * @member {number} serverSendTime
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.serverSendTime = 0;

    /**
     * GetConfigReqDTO wifiRssi.
     * @member {number} wifiRssi
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.wifiRssi = 0;

    /**
     * GetConfigReqDTO serverport.
     * @member {number} serverport
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.serverport = 0;

    /**
     * GetConfigReqDTO apnSet.
     * @member {string} apnSet
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.apnSet = "";

    /**
     * GetConfigReqDTO meterKind.
     * @member {string} meterKind
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.meterKind = "";

    /**
     * GetConfigReqDTO meterInterface.
     * @member {string} meterInterface
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.meterInterface = "";

    /**
     * GetConfigReqDTO wifiSsid.
     * @member {string} wifiSsid
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.wifiSsid = "";

    /**
     * GetConfigReqDTO wifiPassword.
     * @member {string} wifiPassword
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.wifiPassword = "";

    /**
     * GetConfigReqDTO serverDomainName.
     * @member {string} serverDomainName
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.serverDomainName = "";

    /**
     * GetConfigReqDTO invType.
     * @member {number} invType
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.invType = 0;

    /**
     * GetConfigReqDTO dtuSn.
     * @member {string} dtuSn
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.dtuSn = "";

    /**
     * GetConfigReqDTO accessModel.
     * @member {number} accessModel
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.accessModel = 0;

    /**
     * GetConfigReqDTO mac_0.
     * @member {number} mac_0
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.mac_0 = 0;

    /**
     * GetConfigReqDTO mac_1.
     * @member {number} mac_1
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.mac_1 = 0;

    /**
     * GetConfigReqDTO mac_2.
     * @member {number} mac_2
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.mac_2 = 0;

    /**
     * GetConfigReqDTO mac_3.
     * @member {number} mac_3
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.mac_3 = 0;

    /**
     * GetConfigReqDTO dhcpSwitch.
     * @member {number} dhcpSwitch
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.dhcpSwitch = 0;

    /**
     * GetConfigReqDTO ipAddr_0.
     * @member {number} ipAddr_0
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.ipAddr_0 = 0;

    /**
     * GetConfigReqDTO ipAddr_1.
     * @member {number} ipAddr_1
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.ipAddr_1 = 0;

    /**
     * GetConfigReqDTO ipAddr_2.
     * @member {number} ipAddr_2
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.ipAddr_2 = 0;

    /**
     * GetConfigReqDTO ipAddr_3.
     * @member {number} ipAddr_3
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.ipAddr_3 = 0;

    /**
     * GetConfigReqDTO subnetMask_0.
     * @member {number} subnetMask_0
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.subnetMask_0 = 0;

    /**
     * GetConfigReqDTO subnetMask_1.
     * @member {number} subnetMask_1
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.subnetMask_1 = 0;

    /**
     * GetConfigReqDTO subnetMask_2.
     * @member {number} subnetMask_2
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.subnetMask_2 = 0;

    /**
     * GetConfigReqDTO subnetMask_3.
     * @member {number} subnetMask_3
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.subnetMask_3 = 0;

    /**
     * GetConfigReqDTO defaultGateway_0.
     * @member {number} defaultGateway_0
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.defaultGateway_0 = 0;

    /**
     * GetConfigReqDTO defaultGateway_1.
     * @member {number} defaultGateway_1
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.defaultGateway_1 = 0;

    /**
     * GetConfigReqDTO defaultGateway_2.
     * @member {number} defaultGateway_2
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.defaultGateway_2 = 0;

    /**
     * GetConfigReqDTO defaultGateway_3.
     * @member {number} defaultGateway_3
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.defaultGateway_3 = 0;

    /**
     * GetConfigReqDTO kaNub.
     * @member {string} kaNub
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.kaNub = "";

    /**
     * GetConfigReqDTO apnName.
     * @member {string} apnName
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.apnName = "";

    /**
     * GetConfigReqDTO apnPassword.
     * @member {string} apnPassword
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.apnPassword = "";

    /**
     * GetConfigReqDTO sub1gSweepSwitch.
     * @member {number} sub1gSweepSwitch
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.sub1gSweepSwitch = 0;

    /**
     * GetConfigReqDTO sub1gWorkChannel.
     * @member {number} sub1gWorkChannel
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.sub1gWorkChannel = 0;

    /**
     * GetConfigReqDTO cableDns_0.
     * @member {number} cableDns_0
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.cableDns_0 = 0;

    /**
     * GetConfigReqDTO cableDns_1.
     * @member {number} cableDns_1
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.cableDns_1 = 0;

    /**
     * GetConfigReqDTO cableDns_2.
     * @member {number} cableDns_2
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.cableDns_2 = 0;

    /**
     * GetConfigReqDTO cableDns_3.
     * @member {number} cableDns_3
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.cableDns_3 = 0;

    /**
     * GetConfigReqDTO wifiIpAddr_0.
     * @member {number} wifiIpAddr_0
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.wifiIpAddr_0 = 0;

    /**
     * GetConfigReqDTO wifiIpAddr_1.
     * @member {number} wifiIpAddr_1
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.wifiIpAddr_1 = 0;

    /**
     * GetConfigReqDTO wifiIpAddr_2.
     * @member {number} wifiIpAddr_2
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.wifiIpAddr_2 = 0;

    /**
     * GetConfigReqDTO wifiIpAddr_3.
     * @member {number} wifiIpAddr_3
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.wifiIpAddr_3 = 0;

    /**
     * GetConfigReqDTO mac_4.
     * @member {number} mac_4
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.mac_4 = 0;

    /**
     * GetConfigReqDTO mac_5.
     * @member {number} mac_5
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.mac_5 = 0;

    /**
     * GetConfigReqDTO wifiMac_0.
     * @member {number} wifiMac_0
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.wifiMac_0 = 0;

    /**
     * GetConfigReqDTO wifiMac_1.
     * @member {number} wifiMac_1
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.wifiMac_1 = 0;

    /**
     * GetConfigReqDTO wifiMac_2.
     * @member {number} wifiMac_2
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.wifiMac_2 = 0;

    /**
     * GetConfigReqDTO wifiMac_3.
     * @member {number} wifiMac_3
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.wifiMac_3 = 0;

    /**
     * GetConfigReqDTO wifiMac_4.
     * @member {number} wifiMac_4
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.wifiMac_4 = 0;

    /**
     * GetConfigReqDTO wifiMac_5.
     * @member {number} wifiMac_5
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.wifiMac_5 = 0;

    /**
     * GetConfigReqDTO gprsImei.
     * @member {string} gprsImei
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.gprsImei = "";

    /**
     * GetConfigReqDTO dtuApSsid.
     * @member {string} dtuApSsid
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.dtuApSsid = "";

    /**
     * GetConfigReqDTO dtuApPass.
     * @member {string} dtuApPass
     * @memberof GetConfigReqDTO
     * @instance
     */
    GetConfigReqDTO.prototype.dtuApPass = "";

    /**
     * Creates a new GetConfigReqDTO instance using the specified properties.
     * @function create
     * @memberof GetConfigReqDTO
     * @static
     * @param {IGetConfigReqDTO=} [properties] Properties to set
     * @returns {GetConfigReqDTO} GetConfigReqDTO instance
     */
    GetConfigReqDTO.create = function create(properties) {
        return new GetConfigReqDTO(properties);
    };

    /**
     * Encodes the specified GetConfigReqDTO message. Does not implicitly {@link GetConfigReqDTO.verify|verify} messages.
     * @function encode
     * @memberof GetConfigReqDTO
     * @static
     * @param {IGetConfigReqDTO} message GetConfigReqDTO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetConfigReqDTO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestOffset != null && Object.hasOwnProperty.call(message, "requestOffset"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.requestOffset);
        if (message.requestTime != null && Object.hasOwnProperty.call(message, "requestTime"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.requestTime);
        if (message.lockPassword != null && Object.hasOwnProperty.call(message, "lockPassword"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.lockPassword);
        if (message.lockTime != null && Object.hasOwnProperty.call(message, "lockTime"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.lockTime);
        if (message.limitPowerMypower != null && Object.hasOwnProperty.call(message, "limitPowerMypower"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.limitPowerMypower);
        if (message.zeroExport_433Addr != null && Object.hasOwnProperty.call(message, "zeroExport_433Addr"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.zeroExport_433Addr);
        if (message.zeroExportEnable != null && Object.hasOwnProperty.call(message, "zeroExportEnable"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.zeroExportEnable);
        if (message.netmodeSelect != null && Object.hasOwnProperty.call(message, "netmodeSelect"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.netmodeSelect);
        if (message.channelSelect != null && Object.hasOwnProperty.call(message, "channelSelect"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.channelSelect);
        if (message.serverSendTime != null && Object.hasOwnProperty.call(message, "serverSendTime"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.serverSendTime);
        if (message.wifiRssi != null && Object.hasOwnProperty.call(message, "wifiRssi"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.wifiRssi);
        if (message.serverport != null && Object.hasOwnProperty.call(message, "serverport"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.serverport);
        if (message.apnSet != null && Object.hasOwnProperty.call(message, "apnSet"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.apnSet);
        if (message.meterKind != null && Object.hasOwnProperty.call(message, "meterKind"))
            writer.uint32(/* id 14, wireType 2 =*/114).string(message.meterKind);
        if (message.meterInterface != null && Object.hasOwnProperty.call(message, "meterInterface"))
            writer.uint32(/* id 15, wireType 2 =*/122).string(message.meterInterface);
        if (message.wifiSsid != null && Object.hasOwnProperty.call(message, "wifiSsid"))
            writer.uint32(/* id 16, wireType 2 =*/130).string(message.wifiSsid);
        if (message.wifiPassword != null && Object.hasOwnProperty.call(message, "wifiPassword"))
            writer.uint32(/* id 17, wireType 2 =*/138).string(message.wifiPassword);
        if (message.serverDomainName != null && Object.hasOwnProperty.call(message, "serverDomainName"))
            writer.uint32(/* id 18, wireType 2 =*/146).string(message.serverDomainName);
        if (message.invType != null && Object.hasOwnProperty.call(message, "invType"))
            writer.uint32(/* id 19, wireType 0 =*/152).int32(message.invType);
        if (message.dtuSn != null && Object.hasOwnProperty.call(message, "dtuSn"))
            writer.uint32(/* id 20, wireType 2 =*/162).string(message.dtuSn);
        if (message.accessModel != null && Object.hasOwnProperty.call(message, "accessModel"))
            writer.uint32(/* id 21, wireType 0 =*/168).int32(message.accessModel);
        if (message.mac_0 != null && Object.hasOwnProperty.call(message, "mac_0"))
            writer.uint32(/* id 22, wireType 0 =*/176).int32(message.mac_0);
        if (message.mac_1 != null && Object.hasOwnProperty.call(message, "mac_1"))
            writer.uint32(/* id 23, wireType 0 =*/184).int32(message.mac_1);
        if (message.mac_2 != null && Object.hasOwnProperty.call(message, "mac_2"))
            writer.uint32(/* id 24, wireType 0 =*/192).int32(message.mac_2);
        if (message.mac_3 != null && Object.hasOwnProperty.call(message, "mac_3"))
            writer.uint32(/* id 25, wireType 0 =*/200).int32(message.mac_3);
        if (message.dhcpSwitch != null && Object.hasOwnProperty.call(message, "dhcpSwitch"))
            writer.uint32(/* id 26, wireType 0 =*/208).int32(message.dhcpSwitch);
        if (message.ipAddr_0 != null && Object.hasOwnProperty.call(message, "ipAddr_0"))
            writer.uint32(/* id 27, wireType 0 =*/216).int32(message.ipAddr_0);
        if (message.ipAddr_1 != null && Object.hasOwnProperty.call(message, "ipAddr_1"))
            writer.uint32(/* id 28, wireType 0 =*/224).int32(message.ipAddr_1);
        if (message.ipAddr_2 != null && Object.hasOwnProperty.call(message, "ipAddr_2"))
            writer.uint32(/* id 29, wireType 0 =*/232).int32(message.ipAddr_2);
        if (message.ipAddr_3 != null && Object.hasOwnProperty.call(message, "ipAddr_3"))
            writer.uint32(/* id 30, wireType 0 =*/240).int32(message.ipAddr_3);
        if (message.subnetMask_0 != null && Object.hasOwnProperty.call(message, "subnetMask_0"))
            writer.uint32(/* id 31, wireType 0 =*/248).int32(message.subnetMask_0);
        if (message.subnetMask_1 != null && Object.hasOwnProperty.call(message, "subnetMask_1"))
            writer.uint32(/* id 32, wireType 0 =*/256).int32(message.subnetMask_1);
        if (message.subnetMask_2 != null && Object.hasOwnProperty.call(message, "subnetMask_2"))
            writer.uint32(/* id 33, wireType 0 =*/264).int32(message.subnetMask_2);
        if (message.subnetMask_3 != null && Object.hasOwnProperty.call(message, "subnetMask_3"))
            writer.uint32(/* id 34, wireType 0 =*/272).int32(message.subnetMask_3);
        if (message.defaultGateway_0 != null && Object.hasOwnProperty.call(message, "defaultGateway_0"))
            writer.uint32(/* id 35, wireType 0 =*/280).int32(message.defaultGateway_0);
        if (message.defaultGateway_1 != null && Object.hasOwnProperty.call(message, "defaultGateway_1"))
            writer.uint32(/* id 36, wireType 0 =*/288).int32(message.defaultGateway_1);
        if (message.defaultGateway_2 != null && Object.hasOwnProperty.call(message, "defaultGateway_2"))
            writer.uint32(/* id 37, wireType 0 =*/296).int32(message.defaultGateway_2);
        if (message.defaultGateway_3 != null && Object.hasOwnProperty.call(message, "defaultGateway_3"))
            writer.uint32(/* id 38, wireType 0 =*/304).int32(message.defaultGateway_3);
        if (message.kaNub != null && Object.hasOwnProperty.call(message, "kaNub"))
            writer.uint32(/* id 39, wireType 2 =*/314).string(message.kaNub);
        if (message.apnName != null && Object.hasOwnProperty.call(message, "apnName"))
            writer.uint32(/* id 40, wireType 2 =*/322).string(message.apnName);
        if (message.apnPassword != null && Object.hasOwnProperty.call(message, "apnPassword"))
            writer.uint32(/* id 41, wireType 2 =*/330).string(message.apnPassword);
        if (message.sub1gSweepSwitch != null && Object.hasOwnProperty.call(message, "sub1gSweepSwitch"))
            writer.uint32(/* id 42, wireType 0 =*/336).int32(message.sub1gSweepSwitch);
        if (message.sub1gWorkChannel != null && Object.hasOwnProperty.call(message, "sub1gWorkChannel"))
            writer.uint32(/* id 43, wireType 0 =*/344).int32(message.sub1gWorkChannel);
        if (message.cableDns_0 != null && Object.hasOwnProperty.call(message, "cableDns_0"))
            writer.uint32(/* id 44, wireType 0 =*/352).int32(message.cableDns_0);
        if (message.cableDns_1 != null && Object.hasOwnProperty.call(message, "cableDns_1"))
            writer.uint32(/* id 45, wireType 0 =*/360).int32(message.cableDns_1);
        if (message.cableDns_2 != null && Object.hasOwnProperty.call(message, "cableDns_2"))
            writer.uint32(/* id 46, wireType 0 =*/368).int32(message.cableDns_2);
        if (message.cableDns_3 != null && Object.hasOwnProperty.call(message, "cableDns_3"))
            writer.uint32(/* id 47, wireType 0 =*/376).int32(message.cableDns_3);
        if (message.wifiIpAddr_0 != null && Object.hasOwnProperty.call(message, "wifiIpAddr_0"))
            writer.uint32(/* id 48, wireType 0 =*/384).int32(message.wifiIpAddr_0);
        if (message.wifiIpAddr_1 != null && Object.hasOwnProperty.call(message, "wifiIpAddr_1"))
            writer.uint32(/* id 49, wireType 0 =*/392).int32(message.wifiIpAddr_1);
        if (message.wifiIpAddr_2 != null && Object.hasOwnProperty.call(message, "wifiIpAddr_2"))
            writer.uint32(/* id 50, wireType 0 =*/400).int32(message.wifiIpAddr_2);
        if (message.wifiIpAddr_3 != null && Object.hasOwnProperty.call(message, "wifiIpAddr_3"))
            writer.uint32(/* id 51, wireType 0 =*/408).int32(message.wifiIpAddr_3);
        if (message.mac_4 != null && Object.hasOwnProperty.call(message, "mac_4"))
            writer.uint32(/* id 52, wireType 0 =*/416).int32(message.mac_4);
        if (message.mac_5 != null && Object.hasOwnProperty.call(message, "mac_5"))
            writer.uint32(/* id 53, wireType 0 =*/424).int32(message.mac_5);
        if (message.wifiMac_0 != null && Object.hasOwnProperty.call(message, "wifiMac_0"))
            writer.uint32(/* id 54, wireType 0 =*/432).int32(message.wifiMac_0);
        if (message.wifiMac_1 != null && Object.hasOwnProperty.call(message, "wifiMac_1"))
            writer.uint32(/* id 55, wireType 0 =*/440).int32(message.wifiMac_1);
        if (message.wifiMac_2 != null && Object.hasOwnProperty.call(message, "wifiMac_2"))
            writer.uint32(/* id 56, wireType 0 =*/448).int32(message.wifiMac_2);
        if (message.wifiMac_3 != null && Object.hasOwnProperty.call(message, "wifiMac_3"))
            writer.uint32(/* id 57, wireType 0 =*/456).int32(message.wifiMac_3);
        if (message.wifiMac_4 != null && Object.hasOwnProperty.call(message, "wifiMac_4"))
            writer.uint32(/* id 58, wireType 0 =*/464).int32(message.wifiMac_4);
        if (message.wifiMac_5 != null && Object.hasOwnProperty.call(message, "wifiMac_5"))
            writer.uint32(/* id 59, wireType 0 =*/472).int32(message.wifiMac_5);
        if (message.gprsImei != null && Object.hasOwnProperty.call(message, "gprsImei"))
            writer.uint32(/* id 60, wireType 2 =*/482).string(message.gprsImei);
        if (message.dtuApSsid != null && Object.hasOwnProperty.call(message, "dtuApSsid"))
            writer.uint32(/* id 61, wireType 2 =*/490).string(message.dtuApSsid);
        if (message.dtuApPass != null && Object.hasOwnProperty.call(message, "dtuApPass"))
            writer.uint32(/* id 62, wireType 2 =*/498).string(message.dtuApPass);
        return writer;
    };

    /**
     * Decodes a GetConfigReqDTO message from the specified reader or buffer.
     * @function decode
     * @memberof GetConfigReqDTO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetConfigReqDTO} GetConfigReqDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetConfigReqDTO.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetConfigReqDTO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.requestOffset = reader.int32();
                    break;
                }
            case 2: {
                    message.requestTime = reader.uint32();
                    break;
                }
            case 3: {
                    message.lockPassword = reader.int32();
                    break;
                }
            case 4: {
                    message.lockTime = reader.int32();
                    break;
                }
            case 5: {
                    message.limitPowerMypower = reader.int32();
                    break;
                }
            case 6: {
                    message.zeroExport_433Addr = reader.int32();
                    break;
                }
            case 7: {
                    message.zeroExportEnable = reader.int32();
                    break;
                }
            case 8: {
                    message.netmodeSelect = reader.int32();
                    break;
                }
            case 9: {
                    message.channelSelect = reader.int32();
                    break;
                }
            case 10: {
                    message.serverSendTime = reader.int32();
                    break;
                }
            case 11: {
                    message.wifiRssi = reader.int32();
                    break;
                }
            case 12: {
                    message.serverport = reader.int32();
                    break;
                }
            case 13: {
                    message.apnSet = reader.string();
                    break;
                }
            case 14: {
                    message.meterKind = reader.string();
                    break;
                }
            case 15: {
                    message.meterInterface = reader.string();
                    break;
                }
            case 16: {
                    message.wifiSsid = reader.string();
                    break;
                }
            case 17: {
                    message.wifiPassword = reader.string();
                    break;
                }
            case 18: {
                    message.serverDomainName = reader.string();
                    break;
                }
            case 19: {
                    message.invType = reader.int32();
                    break;
                }
            case 20: {
                    message.dtuSn = reader.string();
                    break;
                }
            case 21: {
                    message.accessModel = reader.int32();
                    break;
                }
            case 22: {
                    message.mac_0 = reader.int32();
                    break;
                }
            case 23: {
                    message.mac_1 = reader.int32();
                    break;
                }
            case 24: {
                    message.mac_2 = reader.int32();
                    break;
                }
            case 25: {
                    message.mac_3 = reader.int32();
                    break;
                }
            case 26: {
                    message.dhcpSwitch = reader.int32();
                    break;
                }
            case 27: {
                    message.ipAddr_0 = reader.int32();
                    break;
                }
            case 28: {
                    message.ipAddr_1 = reader.int32();
                    break;
                }
            case 29: {
                    message.ipAddr_2 = reader.int32();
                    break;
                }
            case 30: {
                    message.ipAddr_3 = reader.int32();
                    break;
                }
            case 31: {
                    message.subnetMask_0 = reader.int32();
                    break;
                }
            case 32: {
                    message.subnetMask_1 = reader.int32();
                    break;
                }
            case 33: {
                    message.subnetMask_2 = reader.int32();
                    break;
                }
            case 34: {
                    message.subnetMask_3 = reader.int32();
                    break;
                }
            case 35: {
                    message.defaultGateway_0 = reader.int32();
                    break;
                }
            case 36: {
                    message.defaultGateway_1 = reader.int32();
                    break;
                }
            case 37: {
                    message.defaultGateway_2 = reader.int32();
                    break;
                }
            case 38: {
                    message.defaultGateway_3 = reader.int32();
                    break;
                }
            case 39: {
                    message.kaNub = reader.string();
                    break;
                }
            case 40: {
                    message.apnName = reader.string();
                    break;
                }
            case 41: {
                    message.apnPassword = reader.string();
                    break;
                }
            case 42: {
                    message.sub1gSweepSwitch = reader.int32();
                    break;
                }
            case 43: {
                    message.sub1gWorkChannel = reader.int32();
                    break;
                }
            case 44: {
                    message.cableDns_0 = reader.int32();
                    break;
                }
            case 45: {
                    message.cableDns_1 = reader.int32();
                    break;
                }
            case 46: {
                    message.cableDns_2 = reader.int32();
                    break;
                }
            case 47: {
                    message.cableDns_3 = reader.int32();
                    break;
                }
            case 48: {
                    message.wifiIpAddr_0 = reader.int32();
                    break;
                }
            case 49: {
                    message.wifiIpAddr_1 = reader.int32();
                    break;
                }
            case 50: {
                    message.wifiIpAddr_2 = reader.int32();
                    break;
                }
            case 51: {
                    message.wifiIpAddr_3 = reader.int32();
                    break;
                }
            case 52: {
                    message.mac_4 = reader.int32();
                    break;
                }
            case 53: {
                    message.mac_5 = reader.int32();
                    break;
                }
            case 54: {
                    message.wifiMac_0 = reader.int32();
                    break;
                }
            case 55: {
                    message.wifiMac_1 = reader.int32();
                    break;
                }
            case 56: {
                    message.wifiMac_2 = reader.int32();
                    break;
                }
            case 57: {
                    message.wifiMac_3 = reader.int32();
                    break;
                }
            case 58: {
                    message.wifiMac_4 = reader.int32();
                    break;
                }
            case 59: {
                    message.wifiMac_5 = reader.int32();
                    break;
                }
            case 60: {
                    message.gprsImei = reader.string();
                    break;
                }
            case 61: {
                    message.dtuApSsid = reader.string();
                    break;
                }
            case 62: {
                    message.dtuApPass = reader.string();
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
     * Gets the default type url for GetConfigReqDTO
     * @function getTypeUrl
     * @memberof GetConfigReqDTO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetConfigReqDTO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetConfigReqDTO";
    };

    return GetConfigReqDTO;
})();

module.exports = $root;
