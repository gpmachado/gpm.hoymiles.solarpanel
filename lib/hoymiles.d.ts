import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a CommandResDTO. */
export interface ICommandResDTO {

    /** CommandResDTO time */
    time?: (number|null);

    /** CommandResDTO action */
    action?: (number|null);

    /** CommandResDTO devKind */
    devKind?: (number|null);

    /** CommandResDTO packageNub */
    packageNub?: (number|null);

    /** CommandResDTO packageNow */
    packageNow?: (number|null);

    /** CommandResDTO tid */
    tid?: (number|Long|null);

    /** CommandResDTO data */
    data?: (string|null);

    /** CommandResDTO esToSn */
    esToSn?: (string[]|null);

    /** CommandResDTO miToSn */
    miToSn?: ((number|Long)[]|null);

    /** CommandResDTO systemTotalA */
    systemTotalA?: (number|null);

    /** CommandResDTO systemTotalB */
    systemTotalB?: (number|null);

    /** CommandResDTO systemTotalC */
    systemTotalC?: (number|null);

    /** CommandResDTO miSnItemA */
    miSnItemA?: ((number|Long)[]|null);

    /** CommandResDTO miSnItemB */
    miSnItemB?: ((number|Long)[]|null);

    /** CommandResDTO miSnItemC */
    miSnItemC?: ((number|Long)[]|null);
}

/** Represents a CommandResDTO. */
export class CommandResDTO implements ICommandResDTO {

    /**
     * Constructs a new CommandResDTO.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommandResDTO);

    /** CommandResDTO time. */
    public time: number;

    /** CommandResDTO action. */
    public action: number;

    /** CommandResDTO devKind. */
    public devKind: number;

    /** CommandResDTO packageNub. */
    public packageNub: number;

    /** CommandResDTO packageNow. */
    public packageNow: number;

    /** CommandResDTO tid. */
    public tid: (number|Long);

    /** CommandResDTO data. */
    public data: string;

    /** CommandResDTO esToSn. */
    public esToSn: string[];

    /** CommandResDTO miToSn. */
    public miToSn: (number|Long)[];

    /** CommandResDTO systemTotalA. */
    public systemTotalA: number;

    /** CommandResDTO systemTotalB. */
    public systemTotalB: number;

    /** CommandResDTO systemTotalC. */
    public systemTotalC: number;

    /** CommandResDTO miSnItemA. */
    public miSnItemA: (number|Long)[];

    /** CommandResDTO miSnItemB. */
    public miSnItemB: (number|Long)[];

    /** CommandResDTO miSnItemC. */
    public miSnItemC: (number|Long)[];

    /**
     * Creates a new CommandResDTO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommandResDTO instance
     */
    public static create(properties?: ICommandResDTO): CommandResDTO;

    /**
     * Encodes the specified CommandResDTO message. Does not implicitly {@link CommandResDTO.verify|verify} messages.
     * @param message CommandResDTO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommandResDTO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommandResDTO message, length delimited. Does not implicitly {@link CommandResDTO.verify|verify} messages.
     * @param message CommandResDTO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommandResDTO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommandResDTO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommandResDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommandResDTO;

    /**
     * Decodes a CommandResDTO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommandResDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommandResDTO;

    /**
     * Verifies a CommandResDTO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommandResDTO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommandResDTO
     */
    public static fromObject(object: { [k: string]: any }): CommandResDTO;

    /**
     * Creates a plain object from a CommandResDTO message. Also converts values to other types if specified.
     * @param message CommandResDTO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommandResDTO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommandResDTO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CommandResDTO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CommandReqDTO. */
export interface ICommandReqDTO {

    /** CommandReqDTO dtuSn */
    dtuSn?: (string|null);

    /** CommandReqDTO time */
    time?: (number|null);

    /** CommandReqDTO action */
    action?: (number|null);

    /** CommandReqDTO packageNow */
    packageNow?: (number|null);

    /** CommandReqDTO errCode */
    errCode?: (number|null);

    /** CommandReqDTO tid */
    tid?: (number|Long|null);
}

/** Represents a CommandReqDTO. */
export class CommandReqDTO implements ICommandReqDTO {

    /**
     * Constructs a new CommandReqDTO.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommandReqDTO);

    /** CommandReqDTO dtuSn. */
    public dtuSn: string;

    /** CommandReqDTO time. */
    public time: number;

    /** CommandReqDTO action. */
    public action: number;

    /** CommandReqDTO packageNow. */
    public packageNow: number;

    /** CommandReqDTO errCode. */
    public errCode: number;

    /** CommandReqDTO tid. */
    public tid: (number|Long);

    /**
     * Creates a new CommandReqDTO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommandReqDTO instance
     */
    public static create(properties?: ICommandReqDTO): CommandReqDTO;

    /**
     * Encodes the specified CommandReqDTO message. Does not implicitly {@link CommandReqDTO.verify|verify} messages.
     * @param message CommandReqDTO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommandReqDTO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommandReqDTO message, length delimited. Does not implicitly {@link CommandReqDTO.verify|verify} messages.
     * @param message CommandReqDTO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommandReqDTO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommandReqDTO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommandReqDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommandReqDTO;

    /**
     * Decodes a CommandReqDTO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommandReqDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommandReqDTO;

    /**
     * Verifies a CommandReqDTO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommandReqDTO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommandReqDTO
     */
    public static fromObject(object: { [k: string]: any }): CommandReqDTO;

    /**
     * Creates a plain object from a CommandReqDTO message. Also converts values to other types if specified.
     * @param message CommandReqDTO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommandReqDTO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommandReqDTO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CommandReqDTO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ESOperatingStatusMO. */
export interface IESOperatingStatusMO {

    /** ESOperatingStatusMO esSn */
    esSn?: (string|null);

    /** ESOperatingStatusMO progressRate */
    progressRate?: (number|null);
}

/** Represents a ESOperatingStatusMO. */
export class ESOperatingStatusMO implements IESOperatingStatusMO {

    /**
     * Constructs a new ESOperatingStatusMO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IESOperatingStatusMO);

    /** ESOperatingStatusMO esSn. */
    public esSn: string;

    /** ESOperatingStatusMO progressRate. */
    public progressRate: number;

    /**
     * Creates a new ESOperatingStatusMO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ESOperatingStatusMO instance
     */
    public static create(properties?: IESOperatingStatusMO): ESOperatingStatusMO;

    /**
     * Encodes the specified ESOperatingStatusMO message. Does not implicitly {@link ESOperatingStatusMO.verify|verify} messages.
     * @param message ESOperatingStatusMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IESOperatingStatusMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ESOperatingStatusMO message, length delimited. Does not implicitly {@link ESOperatingStatusMO.verify|verify} messages.
     * @param message ESOperatingStatusMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IESOperatingStatusMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ESOperatingStatusMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ESOperatingStatusMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ESOperatingStatusMO;

    /**
     * Decodes a ESOperatingStatusMO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ESOperatingStatusMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ESOperatingStatusMO;

    /**
     * Verifies a ESOperatingStatusMO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ESOperatingStatusMO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ESOperatingStatusMO
     */
    public static fromObject(object: { [k: string]: any }): ESOperatingStatusMO;

    /**
     * Creates a plain object from a ESOperatingStatusMO message. Also converts values to other types if specified.
     * @param message ESOperatingStatusMO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ESOperatingStatusMO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ESOperatingStatusMO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ESOperatingStatusMO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a MIOperatingStatusMO. */
export interface IMIOperatingStatusMO {

    /** MIOperatingStatusMO miSn */
    miSn?: (number|Long|null);

    /** MIOperatingStatusMO progressRate */
    progressRate?: (number|null);
}

/** Represents a MIOperatingStatusMO. */
export class MIOperatingStatusMO implements IMIOperatingStatusMO {

    /**
     * Constructs a new MIOperatingStatusMO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMIOperatingStatusMO);

    /** MIOperatingStatusMO miSn. */
    public miSn: (number|Long);

    /** MIOperatingStatusMO progressRate. */
    public progressRate: number;

    /**
     * Creates a new MIOperatingStatusMO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MIOperatingStatusMO instance
     */
    public static create(properties?: IMIOperatingStatusMO): MIOperatingStatusMO;

    /**
     * Encodes the specified MIOperatingStatusMO message. Does not implicitly {@link MIOperatingStatusMO.verify|verify} messages.
     * @param message MIOperatingStatusMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMIOperatingStatusMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MIOperatingStatusMO message, length delimited. Does not implicitly {@link MIOperatingStatusMO.verify|verify} messages.
     * @param message MIOperatingStatusMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMIOperatingStatusMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MIOperatingStatusMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MIOperatingStatusMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MIOperatingStatusMO;

    /**
     * Decodes a MIOperatingStatusMO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MIOperatingStatusMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MIOperatingStatusMO;

    /**
     * Verifies a MIOperatingStatusMO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MIOperatingStatusMO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MIOperatingStatusMO
     */
    public static fromObject(object: { [k: string]: any }): MIOperatingStatusMO;

    /**
     * Creates a plain object from a MIOperatingStatusMO message. Also converts values to other types if specified.
     * @param message MIOperatingStatusMO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MIOperatingStatusMO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MIOperatingStatusMO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MIOperatingStatusMO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a MIErrorStatusMO. */
export interface IMIErrorStatusMO {

    /** MIErrorStatusMO miSn */
    miSn?: (number|Long|null);

    /** MIErrorStatusMO errorCode */
    errorCode?: (number|Long|null);
}

/** Represents a MIErrorStatusMO. */
export class MIErrorStatusMO implements IMIErrorStatusMO {

    /**
     * Constructs a new MIErrorStatusMO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMIErrorStatusMO);

    /** MIErrorStatusMO miSn. */
    public miSn: (number|Long);

    /** MIErrorStatusMO errorCode. */
    public errorCode: (number|Long);

    /**
     * Creates a new MIErrorStatusMO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MIErrorStatusMO instance
     */
    public static create(properties?: IMIErrorStatusMO): MIErrorStatusMO;

    /**
     * Encodes the specified MIErrorStatusMO message. Does not implicitly {@link MIErrorStatusMO.verify|verify} messages.
     * @param message MIErrorStatusMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMIErrorStatusMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MIErrorStatusMO message, length delimited. Does not implicitly {@link MIErrorStatusMO.verify|verify} messages.
     * @param message MIErrorStatusMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMIErrorStatusMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MIErrorStatusMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MIErrorStatusMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MIErrorStatusMO;

    /**
     * Decodes a MIErrorStatusMO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MIErrorStatusMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MIErrorStatusMO;

    /**
     * Verifies a MIErrorStatusMO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MIErrorStatusMO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MIErrorStatusMO
     */
    public static fromObject(object: { [k: string]: any }): MIErrorStatusMO;

    /**
     * Creates a plain object from a MIErrorStatusMO message. Also converts values to other types if specified.
     * @param message MIErrorStatusMO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MIErrorStatusMO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MIErrorStatusMO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MIErrorStatusMO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ESSucStatusMO. */
export interface IESSucStatusMO {

    /** ESSucStatusMO esSn */
    esSn?: (string|null);
}

/** Represents a ESSucStatusMO. */
export class ESSucStatusMO implements IESSucStatusMO {

    /**
     * Constructs a new ESSucStatusMO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IESSucStatusMO);

    /** ESSucStatusMO esSn. */
    public esSn: string;

    /**
     * Creates a new ESSucStatusMO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ESSucStatusMO instance
     */
    public static create(properties?: IESSucStatusMO): ESSucStatusMO;

    /**
     * Encodes the specified ESSucStatusMO message. Does not implicitly {@link ESSucStatusMO.verify|verify} messages.
     * @param message ESSucStatusMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IESSucStatusMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ESSucStatusMO message, length delimited. Does not implicitly {@link ESSucStatusMO.verify|verify} messages.
     * @param message ESSucStatusMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IESSucStatusMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ESSucStatusMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ESSucStatusMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ESSucStatusMO;

    /**
     * Decodes a ESSucStatusMO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ESSucStatusMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ESSucStatusMO;

    /**
     * Verifies a ESSucStatusMO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ESSucStatusMO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ESSucStatusMO
     */
    public static fromObject(object: { [k: string]: any }): ESSucStatusMO;

    /**
     * Creates a plain object from a ESSucStatusMO message. Also converts values to other types if specified.
     * @param message ESSucStatusMO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ESSucStatusMO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ESSucStatusMO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ESSucStatusMO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ESErrorStatusMO. */
export interface IESErrorStatusMO {

    /** ESErrorStatusMO esSn */
    esSn?: (string|null);

    /** ESErrorStatusMO errorCode */
    errorCode?: (number|Long|null);
}

/** Represents a ESErrorStatusMO. */
export class ESErrorStatusMO implements IESErrorStatusMO {

    /**
     * Constructs a new ESErrorStatusMO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IESErrorStatusMO);

    /** ESErrorStatusMO esSn. */
    public esSn: string;

    /** ESErrorStatusMO errorCode. */
    public errorCode: (number|Long);

    /**
     * Creates a new ESErrorStatusMO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ESErrorStatusMO instance
     */
    public static create(properties?: IESErrorStatusMO): ESErrorStatusMO;

    /**
     * Encodes the specified ESErrorStatusMO message. Does not implicitly {@link ESErrorStatusMO.verify|verify} messages.
     * @param message ESErrorStatusMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IESErrorStatusMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ESErrorStatusMO message, length delimited. Does not implicitly {@link ESErrorStatusMO.verify|verify} messages.
     * @param message ESErrorStatusMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IESErrorStatusMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ESErrorStatusMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ESErrorStatusMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ESErrorStatusMO;

    /**
     * Decodes a ESErrorStatusMO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ESErrorStatusMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ESErrorStatusMO;

    /**
     * Verifies a ESErrorStatusMO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ESErrorStatusMO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ESErrorStatusMO
     */
    public static fromObject(object: { [k: string]: any }): ESErrorStatusMO;

    /**
     * Creates a plain object from a ESErrorStatusMO message. Also converts values to other types if specified.
     * @param message ESErrorStatusMO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ESErrorStatusMO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ESErrorStatusMO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ESErrorStatusMO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CommandStatusReqDTO. */
export interface ICommandStatusReqDTO {

    /** CommandStatusReqDTO dtuSn */
    dtuSn?: (string|null);

    /** CommandStatusReqDTO time */
    time?: (number|null);

    /** CommandStatusReqDTO action */
    action?: (number|null);

    /** CommandStatusReqDTO packageNub */
    packageNub?: (number|null);

    /** CommandStatusReqDTO packageNow */
    packageNow?: (number|null);

    /** CommandStatusReqDTO tid */
    tid?: (number|Long|null);

    /** CommandStatusReqDTO esSnsSucs */
    esSnsSucs?: (string[]|null);

    /** CommandStatusReqDTO miSnsSucs */
    miSnsSucs?: ((number|Long)[]|null);

    /** CommandStatusReqDTO esSnsFailds */
    esSnsFailds?: (string[]|null);

    /** CommandStatusReqDTO miSnsFailds */
    miSnsFailds?: ((number|Long)[]|null);

    /** CommandStatusReqDTO esMOperatingStatus */
    esMOperatingStatus?: (IESOperatingStatusMO[]|null);

    /** CommandStatusReqDTO miMOperatingStatus */
    miMOperatingStatus?: (IMIOperatingStatusMO[]|null);

    /** CommandStatusReqDTO miMErrorStatus */
    miMErrorStatus?: (IMIErrorStatusMO[]|null);

    /** CommandStatusReqDTO esMSucStatus */
    esMSucStatus?: (IESSucStatusMO[]|null);

    /** CommandStatusReqDTO esMErrorStatus */
    esMErrorStatus?: (IESErrorStatusMO[]|null);
}

/** Represents a CommandStatusReqDTO. */
export class CommandStatusReqDTO implements ICommandStatusReqDTO {

    /**
     * Constructs a new CommandStatusReqDTO.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommandStatusReqDTO);

    /** CommandStatusReqDTO dtuSn. */
    public dtuSn: string;

    /** CommandStatusReqDTO time. */
    public time: number;

    /** CommandStatusReqDTO action. */
    public action: number;

    /** CommandStatusReqDTO packageNub. */
    public packageNub: number;

    /** CommandStatusReqDTO packageNow. */
    public packageNow: number;

    /** CommandStatusReqDTO tid. */
    public tid: (number|Long);

    /** CommandStatusReqDTO esSnsSucs. */
    public esSnsSucs: string[];

    /** CommandStatusReqDTO miSnsSucs. */
    public miSnsSucs: (number|Long)[];

    /** CommandStatusReqDTO esSnsFailds. */
    public esSnsFailds: string[];

    /** CommandStatusReqDTO miSnsFailds. */
    public miSnsFailds: (number|Long)[];

    /** CommandStatusReqDTO esMOperatingStatus. */
    public esMOperatingStatus: IESOperatingStatusMO[];

    /** CommandStatusReqDTO miMOperatingStatus. */
    public miMOperatingStatus: IMIOperatingStatusMO[];

    /** CommandStatusReqDTO miMErrorStatus. */
    public miMErrorStatus: IMIErrorStatusMO[];

    /** CommandStatusReqDTO esMSucStatus. */
    public esMSucStatus: IESSucStatusMO[];

    /** CommandStatusReqDTO esMErrorStatus. */
    public esMErrorStatus: IESErrorStatusMO[];

    /**
     * Creates a new CommandStatusReqDTO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommandStatusReqDTO instance
     */
    public static create(properties?: ICommandStatusReqDTO): CommandStatusReqDTO;

    /**
     * Encodes the specified CommandStatusReqDTO message. Does not implicitly {@link CommandStatusReqDTO.verify|verify} messages.
     * @param message CommandStatusReqDTO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommandStatusReqDTO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommandStatusReqDTO message, length delimited. Does not implicitly {@link CommandStatusReqDTO.verify|verify} messages.
     * @param message CommandStatusReqDTO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommandStatusReqDTO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommandStatusReqDTO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommandStatusReqDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommandStatusReqDTO;

    /**
     * Decodes a CommandStatusReqDTO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommandStatusReqDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommandStatusReqDTO;

    /**
     * Verifies a CommandStatusReqDTO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommandStatusReqDTO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommandStatusReqDTO
     */
    public static fromObject(object: { [k: string]: any }): CommandStatusReqDTO;

    /**
     * Creates a plain object from a CommandStatusReqDTO message. Also converts values to other types if specified.
     * @param message CommandStatusReqDTO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommandStatusReqDTO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommandStatusReqDTO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CommandStatusReqDTO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CommandStatusResDTO. */
export interface ICommandStatusResDTO {

    /** CommandStatusResDTO time */
    time?: (number|null);

    /** CommandStatusResDTO action */
    action?: (number|null);

    /** CommandStatusResDTO packageNow */
    packageNow?: (number|null);

    /** CommandStatusResDTO tid */
    tid?: (number|Long|null);

    /** CommandStatusResDTO errCode */
    errCode?: (number|null);
}

/** Represents a CommandStatusResDTO. */
export class CommandStatusResDTO implements ICommandStatusResDTO {

    /**
     * Constructs a new CommandStatusResDTO.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommandStatusResDTO);

    /** CommandStatusResDTO time. */
    public time: number;

    /** CommandStatusResDTO action. */
    public action: number;

    /** CommandStatusResDTO packageNow. */
    public packageNow: number;

    /** CommandStatusResDTO tid. */
    public tid: (number|Long);

    /** CommandStatusResDTO errCode. */
    public errCode: number;

    /**
     * Creates a new CommandStatusResDTO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommandStatusResDTO instance
     */
    public static create(properties?: ICommandStatusResDTO): CommandStatusResDTO;

    /**
     * Encodes the specified CommandStatusResDTO message. Does not implicitly {@link CommandStatusResDTO.verify|verify} messages.
     * @param message CommandStatusResDTO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommandStatusResDTO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommandStatusResDTO message, length delimited. Does not implicitly {@link CommandStatusResDTO.verify|verify} messages.
     * @param message CommandStatusResDTO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommandStatusResDTO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommandStatusResDTO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommandStatusResDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommandStatusResDTO;

    /**
     * Decodes a CommandStatusResDTO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommandStatusResDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommandStatusResDTO;

    /**
     * Verifies a CommandStatusResDTO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommandStatusResDTO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommandStatusResDTO
     */
    public static fromObject(object: { [k: string]: any }): CommandStatusResDTO;

    /**
     * Creates a plain object from a CommandStatusResDTO message. Also converts values to other types if specified.
     * @param message CommandStatusResDTO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommandStatusResDTO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommandStatusResDTO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CommandStatusResDTO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a HBReqDTO. */
export interface IHBReqDTO {

    /** HBReqDTO offset */
    offset?: (number|null);

    /** HBReqDTO time */
    time?: (number|null);

    /** HBReqDTO csq */
    csq?: (number|null);

    /** HBReqDTO dtuSerialNumber */
    dtuSerialNumber?: (string|null);

    /** HBReqDTO deviceSerialNumber */
    deviceSerialNumber?: (string|null);
}

/** Represents a HBReqDTO. */
export class HBReqDTO implements IHBReqDTO {

    /**
     * Constructs a new HBReqDTO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHBReqDTO);

    /** HBReqDTO offset. */
    public offset: number;

    /** HBReqDTO time. */
    public time: number;

    /** HBReqDTO csq. */
    public csq: number;

    /** HBReqDTO dtuSerialNumber. */
    public dtuSerialNumber: string;

    /** HBReqDTO deviceSerialNumber. */
    public deviceSerialNumber: string;

    /**
     * Creates a new HBReqDTO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HBReqDTO instance
     */
    public static create(properties?: IHBReqDTO): HBReqDTO;

    /**
     * Encodes the specified HBReqDTO message. Does not implicitly {@link HBReqDTO.verify|verify} messages.
     * @param message HBReqDTO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHBReqDTO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HBReqDTO message, length delimited. Does not implicitly {@link HBReqDTO.verify|verify} messages.
     * @param message HBReqDTO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHBReqDTO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HBReqDTO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HBReqDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HBReqDTO;

    /**
     * Decodes a HBReqDTO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HBReqDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HBReqDTO;

    /**
     * Verifies a HBReqDTO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HBReqDTO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HBReqDTO
     */
    public static fromObject(object: { [k: string]: any }): HBReqDTO;

    /**
     * Creates a plain object from a HBReqDTO message. Also converts values to other types if specified.
     * @param message HBReqDTO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HBReqDTO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HBReqDTO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HBReqDTO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a HBResDTO. */
export interface IHBResDTO {

    /** HBResDTO offset */
    offset?: (number|null);

    /** HBResDTO time */
    time?: (number|null);

    /** HBResDTO timeYmdHms */
    timeYmdHms?: (Uint8Array|null);
}

/** Represents a HBResDTO. */
export class HBResDTO implements IHBResDTO {

    /**
     * Constructs a new HBResDTO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHBResDTO);

    /** HBResDTO offset. */
    public offset: number;

    /** HBResDTO time. */
    public time: number;

    /** HBResDTO timeYmdHms. */
    public timeYmdHms: Uint8Array;

    /**
     * Creates a new HBResDTO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HBResDTO instance
     */
    public static create(properties?: IHBResDTO): HBResDTO;

    /**
     * Encodes the specified HBResDTO message. Does not implicitly {@link HBResDTO.verify|verify} messages.
     * @param message HBResDTO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHBResDTO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HBResDTO message, length delimited. Does not implicitly {@link HBResDTO.verify|verify} messages.
     * @param message HBResDTO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHBResDTO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HBResDTO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HBResDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HBResDTO;

    /**
     * Decodes a HBResDTO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HBResDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HBResDTO;

    /**
     * Verifies a HBResDTO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HBResDTO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HBResDTO
     */
    public static fromObject(object: { [k: string]: any }): HBResDTO;

    /**
     * Creates a plain object from a HBResDTO message. Also converts values to other types if specified.
     * @param message HBResDTO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HBResDTO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HBResDTO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HBResDTO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a MeterMO. */
export interface IMeterMO {

    /** MeterMO deviceType */
    deviceType?: (number|null);

    /** MeterMO serialNumber */
    serialNumber?: (number|Long|null);

    /** MeterMO phaseTotalPower */
    phaseTotalPower?: (number|null);

    /** MeterMO phase_APower */
    phase_APower?: (number|null);

    /** MeterMO phase_BPower */
    phase_BPower?: (number|null);

    /** MeterMO phase_CPower */
    phase_CPower?: (number|null);

    /** MeterMO powerFactorTotal */
    powerFactorTotal?: (number|null);

    /** MeterMO energyTotalPower */
    energyTotalPower?: (number|null);

    /** MeterMO energyPhase_A */
    energyPhase_A?: (number|null);

    /** MeterMO energyPhase_B */
    energyPhase_B?: (number|null);

    /** MeterMO energyPhase_C */
    energyPhase_C?: (number|null);

    /** MeterMO energyTotalConsumed */
    energyTotalConsumed?: (number|null);

    /** MeterMO energyPhase_AConsumed */
    energyPhase_AConsumed?: (number|null);

    /** MeterMO energyPhase_BConsumed */
    energyPhase_BConsumed?: (number|null);

    /** MeterMO energyPhase_CConsumed */
    energyPhase_CConsumed?: (number|null);

    /** MeterMO faultCode */
    faultCode?: (number|null);

    /** MeterMO voltagePhase_A */
    voltagePhase_A?: (number|null);

    /** MeterMO voltagePhase_B */
    voltagePhase_B?: (number|null);

    /** MeterMO voltagePhase_C */
    voltagePhase_C?: (number|null);

    /** MeterMO currentPhase_A */
    currentPhase_A?: (number|null);

    /** MeterMO currentPhase_B */
    currentPhase_B?: (number|null);

    /** MeterMO currentPhase_C */
    currentPhase_C?: (number|null);

    /** MeterMO powerFactorPhase_A */
    powerFactorPhase_A?: (number|null);

    /** MeterMO powerFactorPhase_B */
    powerFactorPhase_B?: (number|null);

    /** MeterMO powerFactorPhase_C */
    powerFactorPhase_C?: (number|null);
}

/** Represents a MeterMO. */
export class MeterMO implements IMeterMO {

    /**
     * Constructs a new MeterMO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMeterMO);

    /** MeterMO deviceType. */
    public deviceType: number;

    /** MeterMO serialNumber. */
    public serialNumber: (number|Long);

    /** MeterMO phaseTotalPower. */
    public phaseTotalPower: number;

    /** MeterMO phase_APower. */
    public phase_APower: number;

    /** MeterMO phase_BPower. */
    public phase_BPower: number;

    /** MeterMO phase_CPower. */
    public phase_CPower: number;

    /** MeterMO powerFactorTotal. */
    public powerFactorTotal: number;

    /** MeterMO energyTotalPower. */
    public energyTotalPower: number;

    /** MeterMO energyPhase_A. */
    public energyPhase_A: number;

    /** MeterMO energyPhase_B. */
    public energyPhase_B: number;

    /** MeterMO energyPhase_C. */
    public energyPhase_C: number;

    /** MeterMO energyTotalConsumed. */
    public energyTotalConsumed: number;

    /** MeterMO energyPhase_AConsumed. */
    public energyPhase_AConsumed: number;

    /** MeterMO energyPhase_BConsumed. */
    public energyPhase_BConsumed: number;

    /** MeterMO energyPhase_CConsumed. */
    public energyPhase_CConsumed: number;

    /** MeterMO faultCode. */
    public faultCode: number;

    /** MeterMO voltagePhase_A. */
    public voltagePhase_A: number;

    /** MeterMO voltagePhase_B. */
    public voltagePhase_B: number;

    /** MeterMO voltagePhase_C. */
    public voltagePhase_C: number;

    /** MeterMO currentPhase_A. */
    public currentPhase_A: number;

    /** MeterMO currentPhase_B. */
    public currentPhase_B: number;

    /** MeterMO currentPhase_C. */
    public currentPhase_C: number;

    /** MeterMO powerFactorPhase_A. */
    public powerFactorPhase_A: number;

    /** MeterMO powerFactorPhase_B. */
    public powerFactorPhase_B: number;

    /** MeterMO powerFactorPhase_C. */
    public powerFactorPhase_C: number;

    /**
     * Creates a new MeterMO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MeterMO instance
     */
    public static create(properties?: IMeterMO): MeterMO;

    /**
     * Encodes the specified MeterMO message. Does not implicitly {@link MeterMO.verify|verify} messages.
     * @param message MeterMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMeterMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MeterMO message, length delimited. Does not implicitly {@link MeterMO.verify|verify} messages.
     * @param message MeterMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMeterMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MeterMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MeterMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MeterMO;

    /**
     * Decodes a MeterMO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MeterMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MeterMO;

    /**
     * Verifies a MeterMO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MeterMO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MeterMO
     */
    public static fromObject(object: { [k: string]: any }): MeterMO;

    /**
     * Creates a plain object from a MeterMO message. Also converts values to other types if specified.
     * @param message MeterMO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MeterMO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MeterMO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MeterMO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a RpMO. */
export interface IRpMO {

    /** RpMO serialNumber */
    serialNumber?: (number|Long|null);

    /** RpMO signature */
    signature?: (number|null);

    /** RpMO channel */
    channel?: (number|null);

    /** RpMO pvNumber */
    pvNumber?: (number|null);

    /** RpMO linkStatus */
    linkStatus?: (number|null);
}

/** Represents a RpMO. */
export class RpMO implements IRpMO {

    /**
     * Constructs a new RpMO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRpMO);

    /** RpMO serialNumber. */
    public serialNumber: (number|Long);

    /** RpMO signature. */
    public signature: number;

    /** RpMO channel. */
    public channel: number;

    /** RpMO pvNumber. */
    public pvNumber: number;

    /** RpMO linkStatus. */
    public linkStatus: number;

    /**
     * Creates a new RpMO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RpMO instance
     */
    public static create(properties?: IRpMO): RpMO;

    /**
     * Encodes the specified RpMO message. Does not implicitly {@link RpMO.verify|verify} messages.
     * @param message RpMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRpMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RpMO message, length delimited. Does not implicitly {@link RpMO.verify|verify} messages.
     * @param message RpMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRpMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RpMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RpMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RpMO;

    /**
     * Decodes a RpMO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RpMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RpMO;

    /**
     * Verifies a RpMO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RpMO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RpMO
     */
    public static fromObject(object: { [k: string]: any }): RpMO;

    /**
     * Creates a plain object from a RpMO message. Also converts values to other types if specified.
     * @param message RpMO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RpMO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RpMO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RpMO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a RSDMO. */
export interface IRSDMO {

    /** RSDMO serialNumber */
    serialNumber?: (number|Long|null);

    /** RSDMO firmwareVersion */
    firmwareVersion?: (number|null);

    /** RSDMO voltage */
    voltage?: (number|null);

    /** RSDMO power */
    power?: (number|null);

    /** RSDMO temperature */
    temperature?: (number|null);

    /** RSDMO warningNumber */
    warningNumber?: (number|null);

    /** RSDMO crcChecksum */
    crcChecksum?: (number|null);

    /** RSDMO linkStatus */
    linkStatus?: (number|null);
}

/** Represents a RSDMO. */
export class RSDMO implements IRSDMO {

    /**
     * Constructs a new RSDMO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRSDMO);

    /** RSDMO serialNumber. */
    public serialNumber: (number|Long);

    /** RSDMO firmwareVersion. */
    public firmwareVersion: number;

    /** RSDMO voltage. */
    public voltage: number;

    /** RSDMO power. */
    public power: number;

    /** RSDMO temperature. */
    public temperature: number;

    /** RSDMO warningNumber. */
    public warningNumber: number;

    /** RSDMO crcChecksum. */
    public crcChecksum: number;

    /** RSDMO linkStatus. */
    public linkStatus: number;

    /**
     * Creates a new RSDMO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RSDMO instance
     */
    public static create(properties?: IRSDMO): RSDMO;

    /**
     * Encodes the specified RSDMO message. Does not implicitly {@link RSDMO.verify|verify} messages.
     * @param message RSDMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRSDMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RSDMO message, length delimited. Does not implicitly {@link RSDMO.verify|verify} messages.
     * @param message RSDMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRSDMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RSDMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RSDMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RSDMO;

    /**
     * Decodes a RSDMO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RSDMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RSDMO;

    /**
     * Verifies a RSDMO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RSDMO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RSDMO
     */
    public static fromObject(object: { [k: string]: any }): RSDMO;

    /**
     * Creates a plain object from a RSDMO message. Also converts values to other types if specified.
     * @param message RSDMO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RSDMO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RSDMO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RSDMO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a SGSMO. */
export interface ISGSMO {

    /** SGSMO serialNumber */
    serialNumber?: (number|Long|null);

    /** SGSMO firmwareVersion */
    firmwareVersion?: (number|null);

    /** SGSMO voltage */
    voltage?: (number|null);

    /** SGSMO frequency */
    frequency?: (number|null);

    /** SGSMO activePower */
    activePower?: (number|null);

    /** SGSMO reactivePower */
    reactivePower?: (number|null);

    /** SGSMO current */
    current?: (number|null);

    /** SGSMO powerFactor */
    powerFactor?: (number|null);

    /** SGSMO temperature */
    temperature?: (number|null);

    /** SGSMO warningNumber */
    warningNumber?: (number|null);

    /** SGSMO crcChecksum */
    crcChecksum?: (number|null);

    /** SGSMO linkStatus */
    linkStatus?: (number|null);

    /** SGSMO powerLimit */
    powerLimit?: (number|null);

    /** SGSMO modulationIndexSignal */
    modulationIndexSignal?: (number|null);
}

/** Represents a SGSMO. */
export class SGSMO implements ISGSMO {

    /**
     * Constructs a new SGSMO.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISGSMO);

    /** SGSMO serialNumber. */
    public serialNumber: (number|Long);

    /** SGSMO firmwareVersion. */
    public firmwareVersion: number;

    /** SGSMO voltage. */
    public voltage: number;

    /** SGSMO frequency. */
    public frequency: number;

    /** SGSMO activePower. */
    public activePower: number;

    /** SGSMO reactivePower. */
    public reactivePower: number;

    /** SGSMO current. */
    public current: number;

    /** SGSMO powerFactor. */
    public powerFactor: number;

    /** SGSMO temperature. */
    public temperature: number;

    /** SGSMO warningNumber. */
    public warningNumber: number;

    /** SGSMO crcChecksum. */
    public crcChecksum: number;

    /** SGSMO linkStatus. */
    public linkStatus: number;

    /** SGSMO powerLimit. */
    public powerLimit: number;

    /** SGSMO modulationIndexSignal. */
    public modulationIndexSignal: number;

    /**
     * Creates a new SGSMO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SGSMO instance
     */
    public static create(properties?: ISGSMO): SGSMO;

    /**
     * Encodes the specified SGSMO message. Does not implicitly {@link SGSMO.verify|verify} messages.
     * @param message SGSMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISGSMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SGSMO message, length delimited. Does not implicitly {@link SGSMO.verify|verify} messages.
     * @param message SGSMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISGSMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SGSMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SGSMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SGSMO;

    /**
     * Decodes a SGSMO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SGSMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SGSMO;

    /**
     * Verifies a SGSMO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SGSMO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SGSMO
     */
    public static fromObject(object: { [k: string]: any }): SGSMO;

    /**
     * Creates a plain object from a SGSMO message. Also converts values to other types if specified.
     * @param message SGSMO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SGSMO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SGSMO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SGSMO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a TGSMO. */
export interface ITGSMO {

    /** TGSMO serialNumber */
    serialNumber?: (number|Long|null);

    /** TGSMO firmwareVersion */
    firmwareVersion?: (number|null);

    /** TGSMO voltagePhase_A */
    voltagePhase_A?: (number|null);

    /** TGSMO voltagePhase_B */
    voltagePhase_B?: (number|null);

    /** TGSMO voltagePhase_C */
    voltagePhase_C?: (number|null);

    /** TGSMO voltageLine_AB */
    voltageLine_AB?: (number|null);

    /** TGSMO voltageLine_BC */
    voltageLine_BC?: (number|null);

    /** TGSMO voltageLine_CA */
    voltageLine_CA?: (number|null);

    /** TGSMO frequency */
    frequency?: (number|null);

    /** TGSMO activePower */
    activePower?: (number|null);

    /** TGSMO reactivePower */
    reactivePower?: (number|null);

    /** TGSMO currentPhase_A */
    currentPhase_A?: (number|null);

    /** TGSMO currentPhase_B */
    currentPhase_B?: (number|null);

    /** TGSMO currentPhase_C */
    currentPhase_C?: (number|null);

    /** TGSMO powerFactor */
    powerFactor?: (number|null);

    /** TGSMO temperature */
    temperature?: (number|null);

    /** TGSMO warningNumber */
    warningNumber?: (number|null);

    /** TGSMO crcChecksum */
    crcChecksum?: (number|null);

    /** TGSMO linkStatus */
    linkStatus?: (number|null);

    /** TGSMO modulationIndexSignal */
    modulationIndexSignal?: (number|null);
}

/** Represents a TGSMO. */
export class TGSMO implements ITGSMO {

    /**
     * Constructs a new TGSMO.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITGSMO);

    /** TGSMO serialNumber. */
    public serialNumber: (number|Long);

    /** TGSMO firmwareVersion. */
    public firmwareVersion: number;

    /** TGSMO voltagePhase_A. */
    public voltagePhase_A: number;

    /** TGSMO voltagePhase_B. */
    public voltagePhase_B: number;

    /** TGSMO voltagePhase_C. */
    public voltagePhase_C: number;

    /** TGSMO voltageLine_AB. */
    public voltageLine_AB: number;

    /** TGSMO voltageLine_BC. */
    public voltageLine_BC: number;

    /** TGSMO voltageLine_CA. */
    public voltageLine_CA: number;

    /** TGSMO frequency. */
    public frequency: number;

    /** TGSMO activePower. */
    public activePower: number;

    /** TGSMO reactivePower. */
    public reactivePower: number;

    /** TGSMO currentPhase_A. */
    public currentPhase_A: number;

    /** TGSMO currentPhase_B. */
    public currentPhase_B: number;

    /** TGSMO currentPhase_C. */
    public currentPhase_C: number;

    /** TGSMO powerFactor. */
    public powerFactor: number;

    /** TGSMO temperature. */
    public temperature: number;

    /** TGSMO warningNumber. */
    public warningNumber: number;

    /** TGSMO crcChecksum. */
    public crcChecksum: number;

    /** TGSMO linkStatus. */
    public linkStatus: number;

    /** TGSMO modulationIndexSignal. */
    public modulationIndexSignal: number;

    /**
     * Creates a new TGSMO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TGSMO instance
     */
    public static create(properties?: ITGSMO): TGSMO;

    /**
     * Encodes the specified TGSMO message. Does not implicitly {@link TGSMO.verify|verify} messages.
     * @param message TGSMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITGSMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TGSMO message, length delimited. Does not implicitly {@link TGSMO.verify|verify} messages.
     * @param message TGSMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITGSMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TGSMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TGSMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TGSMO;

    /**
     * Decodes a TGSMO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TGSMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TGSMO;

    /**
     * Verifies a TGSMO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TGSMO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TGSMO
     */
    public static fromObject(object: { [k: string]: any }): TGSMO;

    /**
     * Creates a plain object from a TGSMO message. Also converts values to other types if specified.
     * @param message TGSMO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TGSMO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TGSMO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TGSMO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PvMO. */
export interface IPvMO {

    /** PvMO serialNumber */
    serialNumber?: (number|Long|null);

    /** PvMO portNumber */
    portNumber?: (number|null);

    /** PvMO voltage */
    voltage?: (number|null);

    /** PvMO current */
    current?: (number|null);

    /** PvMO power */
    power?: (number|null);

    /** PvMO energyTotal */
    energyTotal?: (number|null);

    /** PvMO energyDaily */
    energyDaily?: (number|null);

    /** PvMO errorCode */
    errorCode?: (number|null);
}

/** Represents a PvMO. */
export class PvMO implements IPvMO {

    /**
     * Constructs a new PvMO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPvMO);

    /** PvMO serialNumber. */
    public serialNumber: (number|Long);

    /** PvMO portNumber. */
    public portNumber: number;

    /** PvMO voltage. */
    public voltage: number;

    /** PvMO current. */
    public current: number;

    /** PvMO power. */
    public power: number;

    /** PvMO energyTotal. */
    public energyTotal: number;

    /** PvMO energyDaily. */
    public energyDaily: number;

    /** PvMO errorCode. */
    public errorCode: number;

    /**
     * Creates a new PvMO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PvMO instance
     */
    public static create(properties?: IPvMO): PvMO;

    /**
     * Encodes the specified PvMO message. Does not implicitly {@link PvMO.verify|verify} messages.
     * @param message PvMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPvMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PvMO message, length delimited. Does not implicitly {@link PvMO.verify|verify} messages.
     * @param message PvMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPvMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PvMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PvMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PvMO;

    /**
     * Decodes a PvMO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PvMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PvMO;

    /**
     * Verifies a PvMO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PvMO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PvMO
     */
    public static fromObject(object: { [k: string]: any }): PvMO;

    /**
     * Creates a plain object from a PvMO message. Also converts values to other types if specified.
     * @param message PvMO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PvMO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PvMO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PvMO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a RealDataNewReqDTO. */
export interface IRealDataNewReqDTO {

    /** RealDataNewReqDTO deviceSerialNumber */
    deviceSerialNumber?: (string|null);

    /** RealDataNewReqDTO timestamp */
    timestamp?: (number|null);

    /** RealDataNewReqDTO ap */
    ap?: (number|null);

    /** RealDataNewReqDTO cp */
    cp?: (number|null);

    /** RealDataNewReqDTO firmwareVersion */
    firmwareVersion?: (number|null);

    /** RealDataNewReqDTO meterData */
    meterData?: (IMeterMO[]|null);

    /** RealDataNewReqDTO rpData */
    rpData?: (IRpMO[]|null);

    /** RealDataNewReqDTO rsdData */
    rsdData?: (IRSDMO[]|null);

    /** RealDataNewReqDTO sgsData */
    sgsData?: (ISGSMO[]|null);

    /** RealDataNewReqDTO tgsData */
    tgsData?: (ITGSMO[]|null);

    /** RealDataNewReqDTO pvData */
    pvData?: (IPvMO[]|null);

    /** RealDataNewReqDTO dtuPower */
    dtuPower?: (number|Long|null);

    /** RealDataNewReqDTO dtuDailyEnergy */
    dtuDailyEnergy?: (number|Long|null);
}

/** Represents a RealDataNewReqDTO. */
export class RealDataNewReqDTO implements IRealDataNewReqDTO {

    /**
     * Constructs a new RealDataNewReqDTO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRealDataNewReqDTO);

    /** RealDataNewReqDTO deviceSerialNumber. */
    public deviceSerialNumber: string;

    /** RealDataNewReqDTO timestamp. */
    public timestamp: number;

    /** RealDataNewReqDTO ap. */
    public ap: number;

    /** RealDataNewReqDTO cp. */
    public cp: number;

    /** RealDataNewReqDTO firmwareVersion. */
    public firmwareVersion: number;

    /** RealDataNewReqDTO meterData. */
    public meterData: IMeterMO[];

    /** RealDataNewReqDTO rpData. */
    public rpData: IRpMO[];

    /** RealDataNewReqDTO rsdData. */
    public rsdData: IRSDMO[];

    /** RealDataNewReqDTO sgsData. */
    public sgsData: ISGSMO[];

    /** RealDataNewReqDTO tgsData. */
    public tgsData: ITGSMO[];

    /** RealDataNewReqDTO pvData. */
    public pvData: IPvMO[];

    /** RealDataNewReqDTO dtuPower. */
    public dtuPower: (number|Long);

    /** RealDataNewReqDTO dtuDailyEnergy. */
    public dtuDailyEnergy: (number|Long);

    /**
     * Creates a new RealDataNewReqDTO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RealDataNewReqDTO instance
     */
    public static create(properties?: IRealDataNewReqDTO): RealDataNewReqDTO;

    /**
     * Encodes the specified RealDataNewReqDTO message. Does not implicitly {@link RealDataNewReqDTO.verify|verify} messages.
     * @param message RealDataNewReqDTO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRealDataNewReqDTO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RealDataNewReqDTO message, length delimited. Does not implicitly {@link RealDataNewReqDTO.verify|verify} messages.
     * @param message RealDataNewReqDTO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRealDataNewReqDTO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RealDataNewReqDTO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RealDataNewReqDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RealDataNewReqDTO;

    /**
     * Decodes a RealDataNewReqDTO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RealDataNewReqDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RealDataNewReqDTO;

    /**
     * Verifies a RealDataNewReqDTO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RealDataNewReqDTO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RealDataNewReqDTO
     */
    public static fromObject(object: { [k: string]: any }): RealDataNewReqDTO;

    /**
     * Creates a plain object from a RealDataNewReqDTO message. Also converts values to other types if specified.
     * @param message RealDataNewReqDTO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RealDataNewReqDTO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RealDataNewReqDTO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RealDataNewReqDTO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a RealDataNewResDTO. */
export interface IRealDataNewResDTO {

    /** RealDataNewResDTO timeYmdHms */
    timeYmdHms?: (Uint8Array|null);

    /** RealDataNewResDTO cp */
    cp?: (number|null);

    /** RealDataNewResDTO errorCode */
    errorCode?: (number|null);

    /** RealDataNewResDTO offset */
    offset?: (number|null);

    /** RealDataNewResDTO time */
    time?: (number|null);
}

/** Represents a RealDataNewResDTO. */
export class RealDataNewResDTO implements IRealDataNewResDTO {

    /**
     * Constructs a new RealDataNewResDTO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRealDataNewResDTO);

    /** RealDataNewResDTO timeYmdHms. */
    public timeYmdHms: Uint8Array;

    /** RealDataNewResDTO cp. */
    public cp: number;

    /** RealDataNewResDTO errorCode. */
    public errorCode: number;

    /** RealDataNewResDTO offset. */
    public offset: number;

    /** RealDataNewResDTO time. */
    public time: number;

    /**
     * Creates a new RealDataNewResDTO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RealDataNewResDTO instance
     */
    public static create(properties?: IRealDataNewResDTO): RealDataNewResDTO;

    /**
     * Encodes the specified RealDataNewResDTO message. Does not implicitly {@link RealDataNewResDTO.verify|verify} messages.
     * @param message RealDataNewResDTO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRealDataNewResDTO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RealDataNewResDTO message, length delimited. Does not implicitly {@link RealDataNewResDTO.verify|verify} messages.
     * @param message RealDataNewResDTO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRealDataNewResDTO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RealDataNewResDTO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RealDataNewResDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RealDataNewResDTO;

    /**
     * Decodes a RealDataNewResDTO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RealDataNewResDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RealDataNewResDTO;

    /**
     * Verifies a RealDataNewResDTO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RealDataNewResDTO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RealDataNewResDTO
     */
    public static fromObject(object: { [k: string]: any }): RealDataNewResDTO;

    /**
     * Creates a plain object from a RealDataNewResDTO message. Also converts values to other types if specified.
     * @param message RealDataNewResDTO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RealDataNewResDTO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RealDataNewResDTO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RealDataNewResDTO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
