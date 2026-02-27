import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a MeterMO. */
export interface IMeterMO {

    /** MeterMO deviceType */
    deviceType?: (number|null);

    /** MeterMO serialNumber */
    serialNumber?: (number|null);

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
    public serialNumber: number;

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
     * Decodes a MeterMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MeterMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MeterMO;

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
    serialNumber?: (number|null);

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
    public serialNumber: number;

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
     * Decodes a RpMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RpMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RpMO;

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
    serialNumber?: (number|null);

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
    public serialNumber: number;

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
     * Decodes a RSDMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RSDMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RSDMO;

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
    serialNumber?: (number|null);

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
    public serialNumber: number;

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
     * Decodes a SGSMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SGSMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SGSMO;

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
    serialNumber?: (number|null);

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
    public serialNumber: number;

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
     * Decodes a TGSMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TGSMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TGSMO;

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
    serialNumber?: (number|null);

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
    public serialNumber: number;

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
     * Decodes a PvMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PvMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PvMO;

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
    dtuPower?: (number|null);

    /** RealDataNewReqDTO dtuDailyEnergy */
    dtuDailyEnergy?: (number|null);
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
    public dtuPower: number;

    /** RealDataNewReqDTO dtuDailyEnergy. */
    public dtuDailyEnergy: number;

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
     * Decodes a RealDataNewReqDTO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RealDataNewReqDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RealDataNewReqDTO;

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
     * Decodes a RealDataNewResDTO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RealDataNewResDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RealDataNewResDTO;

    /**
     * Gets the default type url for RealDataNewResDTO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a APPDtuInfoMO. */
export interface IAPPDtuInfoMO {

    /** APPDtuInfoMO deviceKind */
    deviceKind?: (number|null);

    /** APPDtuInfoMO dtuSwVersion */
    dtuSwVersion?: (number|null);

    /** APPDtuInfoMO dtuHwVersion */
    dtuHwVersion?: (number|null);

    /** APPDtuInfoMO dtuStepTime */
    dtuStepTime?: (number|null);

    /** APPDtuInfoMO dtuRfHwVersion */
    dtuRfHwVersion?: (number|null);

    /** APPDtuInfoMO dtuRfSwVersion */
    dtuRfSwVersion?: (number|null);

    /** APPDtuInfoMO accessModel */
    accessModel?: (number|null);

    /** APPDtuInfoMO communicationTime */
    communicationTime?: (number|null);

    /** APPDtuInfoMO signalStrength */
    signalStrength?: (number|null);

    /** APPDtuInfoMO gprsVersion */
    gprsVersion?: (string|null);

    /** APPDtuInfoMO wifiVersion */
    wifiVersion?: (string|null);

    /** APPDtuInfoMO kaNumber */
    kaNumber?: (string|null);

    /** APPDtuInfoMO dtuRuleId */
    dtuRuleId?: (number|null);

    /** APPDtuInfoMO dtuErrorCode */
    dtuErrorCode?: (number|null);

    /** APPDtuInfoMO dtu485Mode */
    dtu485Mode?: (number|null);

    /** APPDtuInfoMO dtu485Address */
    dtu485Address?: (number|null);

    /** APPDtuInfoMO sub1gFrequencyBand */
    sub1gFrequencyBand?: (number|null);

    /** APPDtuInfoMO sub1gChannelTotalNumber */
    sub1gChannelTotalNumber?: (number|null);

    /** APPDtuInfoMO sub1gChannelNumber */
    sub1gChannelNumber?: (number|null);

    /** APPDtuInfoMO sub1gRp */
    sub1gRp?: (number|null);

    /** APPDtuInfoMO sub1gChannelTotal */
    sub1gChannelTotal?: (number|null);

    /** APPDtuInfoMO gprsImei */
    gprsImei?: (string|null);

    /** APPDtuInfoMO dtuSwbTime */
    dtuSwbTime?: (number|null);

    /** APPDtuInfoMO dfs */
    dfs?: (number|null);

    /** APPDtuInfoMO shls */
    shls?: (number[]|null);

    /** APPDtuInfoMO type */
    type?: (number|null);

    /** APPDtuInfoMO encRand */
    encRand?: (Uint8Array|null);
}

/** Represents a APPDtuInfoMO. */
export class APPDtuInfoMO implements IAPPDtuInfoMO {

    /**
     * Constructs a new APPDtuInfoMO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAPPDtuInfoMO);

    /** APPDtuInfoMO deviceKind. */
    public deviceKind: number;

    /** APPDtuInfoMO dtuSwVersion. */
    public dtuSwVersion: number;

    /** APPDtuInfoMO dtuHwVersion. */
    public dtuHwVersion: number;

    /** APPDtuInfoMO dtuStepTime. */
    public dtuStepTime: number;

    /** APPDtuInfoMO dtuRfHwVersion. */
    public dtuRfHwVersion: number;

    /** APPDtuInfoMO dtuRfSwVersion. */
    public dtuRfSwVersion: number;

    /** APPDtuInfoMO accessModel. */
    public accessModel: number;

    /** APPDtuInfoMO communicationTime. */
    public communicationTime: number;

    /** APPDtuInfoMO signalStrength. */
    public signalStrength: number;

    /** APPDtuInfoMO gprsVersion. */
    public gprsVersion: string;

    /** APPDtuInfoMO wifiVersion. */
    public wifiVersion: string;

    /** APPDtuInfoMO kaNumber. */
    public kaNumber: string;

    /** APPDtuInfoMO dtuRuleId. */
    public dtuRuleId: number;

    /** APPDtuInfoMO dtuErrorCode. */
    public dtuErrorCode: number;

    /** APPDtuInfoMO dtu485Mode. */
    public dtu485Mode: number;

    /** APPDtuInfoMO dtu485Address. */
    public dtu485Address: number;

    /** APPDtuInfoMO sub1gFrequencyBand. */
    public sub1gFrequencyBand: number;

    /** APPDtuInfoMO sub1gChannelTotalNumber. */
    public sub1gChannelTotalNumber: number;

    /** APPDtuInfoMO sub1gChannelNumber. */
    public sub1gChannelNumber: number;

    /** APPDtuInfoMO sub1gRp. */
    public sub1gRp: number;

    /** APPDtuInfoMO sub1gChannelTotal. */
    public sub1gChannelTotal: number;

    /** APPDtuInfoMO gprsImei. */
    public gprsImei: string;

    /** APPDtuInfoMO dtuSwbTime. */
    public dtuSwbTime: number;

    /** APPDtuInfoMO dfs. */
    public dfs: number;

    /** APPDtuInfoMO shls. */
    public shls: number[];

    /** APPDtuInfoMO type. */
    public type: number;

    /** APPDtuInfoMO encRand. */
    public encRand: Uint8Array;

    /**
     * Creates a new APPDtuInfoMO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns APPDtuInfoMO instance
     */
    public static create(properties?: IAPPDtuInfoMO): APPDtuInfoMO;

    /**
     * Encodes the specified APPDtuInfoMO message. Does not implicitly {@link APPDtuInfoMO.verify|verify} messages.
     * @param message APPDtuInfoMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAPPDtuInfoMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a APPDtuInfoMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns APPDtuInfoMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): APPDtuInfoMO;

    /**
     * Gets the default type url for APPDtuInfoMO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a APPMeterInfoMO. */
export interface IAPPMeterInfoMO {

    /** APPMeterInfoMO deviceKind */
    deviceKind?: (number|null);

    /** APPMeterInfoMO meterSerialNumber */
    meterSerialNumber?: (number|null);

    /** APPMeterInfoMO meterModel */
    meterModel?: (number|null);

    /** APPMeterInfoMO meterCt */
    meterCt?: (number|null);

    /** APPMeterInfoMO communicationWay */
    communicationWay?: (number|null);

    /** APPMeterInfoMO accessMode */
    accessMode?: (number|null);

    /** APPMeterInfoMO swVersion */
    swVersion?: (number|null);

    /** APPMeterInfoMO meterValue */
    meterValue?: (string|null);
}

/** Represents a APPMeterInfoMO. */
export class APPMeterInfoMO implements IAPPMeterInfoMO {

    /**
     * Constructs a new APPMeterInfoMO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAPPMeterInfoMO);

    /** APPMeterInfoMO deviceKind. */
    public deviceKind: number;

    /** APPMeterInfoMO meterSerialNumber. */
    public meterSerialNumber: number;

    /** APPMeterInfoMO meterModel. */
    public meterModel: number;

    /** APPMeterInfoMO meterCt. */
    public meterCt: number;

    /** APPMeterInfoMO communicationWay. */
    public communicationWay: number;

    /** APPMeterInfoMO accessMode. */
    public accessMode: number;

    /** APPMeterInfoMO swVersion. */
    public swVersion: number;

    /** APPMeterInfoMO meterValue. */
    public meterValue: string;

    /**
     * Creates a new APPMeterInfoMO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns APPMeterInfoMO instance
     */
    public static create(properties?: IAPPMeterInfoMO): APPMeterInfoMO;

    /**
     * Encodes the specified APPMeterInfoMO message. Does not implicitly {@link APPMeterInfoMO.verify|verify} messages.
     * @param message APPMeterInfoMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAPPMeterInfoMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a APPMeterInfoMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns APPMeterInfoMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): APPMeterInfoMO;

    /**
     * Gets the default type url for APPMeterInfoMO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a APPRpInfoMO. */
export interface IAPPRpInfoMO {

    /** APPRpInfoMO deviceKind */
    deviceKind?: (number|null);

    /** APPRpInfoMO rpSerialNumber */
    rpSerialNumber?: (number|null);

    /** APPRpInfoMO rpSwVersion */
    rpSwVersion?: (number|null);

    /** APPRpInfoMO rpHwVersion */
    rpHwVersion?: (number|null);

    /** APPRpInfoMO rpRuleId */
    rpRuleId?: (number|null);
}

/** Represents a APPRpInfoMO. */
export class APPRpInfoMO implements IAPPRpInfoMO {

    /**
     * Constructs a new APPRpInfoMO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAPPRpInfoMO);

    /** APPRpInfoMO deviceKind. */
    public deviceKind: number;

    /** APPRpInfoMO rpSerialNumber. */
    public rpSerialNumber: number;

    /** APPRpInfoMO rpSwVersion. */
    public rpSwVersion: number;

    /** APPRpInfoMO rpHwVersion. */
    public rpHwVersion: number;

    /** APPRpInfoMO rpRuleId. */
    public rpRuleId: number;

    /**
     * Creates a new APPRpInfoMO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns APPRpInfoMO instance
     */
    public static create(properties?: IAPPRpInfoMO): APPRpInfoMO;

    /**
     * Encodes the specified APPRpInfoMO message. Does not implicitly {@link APPRpInfoMO.verify|verify} messages.
     * @param message APPRpInfoMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAPPRpInfoMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a APPRpInfoMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns APPRpInfoMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): APPRpInfoMO;

    /**
     * Gets the default type url for APPRpInfoMO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a APPPvInfoMO. */
export interface IAPPPvInfoMO {

    /** APPPvInfoMO deviceKind */
    deviceKind?: (number|null);

    /** APPPvInfoMO pvSerialNumber */
    pvSerialNumber?: (number|null);

    /** APPPvInfoMO pvUsfw */
    pvUsfw?: (number|null);

    /** APPPvInfoMO pvSwVersion */
    pvSwVersion?: (number|null);

    /** APPPvInfoMO pvHwPartNumber */
    pvHwPartNumber?: (number|null);

    /** APPPvInfoMO pvHwVersion */
    pvHwVersion?: (number|null);

    /** APPPvInfoMO pvGridProfileCode */
    pvGridProfileCode?: (number|null);

    /** APPPvInfoMO pvGridProfile */
    pvGridProfile?: (number|null);

    /** APPPvInfoMO pvRfHwVersion */
    pvRfHwVersion?: (number|null);

    /** APPPvInfoMO pvRfSwVersion */
    pvRfSwVersion?: (number|null);

    /** APPPvInfoMO miRuleId */
    miRuleId?: (number|null);
}

/** Represents a APPPvInfoMO. */
export class APPPvInfoMO implements IAPPPvInfoMO {

    /**
     * Constructs a new APPPvInfoMO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAPPPvInfoMO);

    /** APPPvInfoMO deviceKind. */
    public deviceKind: number;

    /** APPPvInfoMO pvSerialNumber. */
    public pvSerialNumber: number;

    /** APPPvInfoMO pvUsfw. */
    public pvUsfw: number;

    /** APPPvInfoMO pvSwVersion. */
    public pvSwVersion: number;

    /** APPPvInfoMO pvHwPartNumber. */
    public pvHwPartNumber: number;

    /** APPPvInfoMO pvHwVersion. */
    public pvHwVersion: number;

    /** APPPvInfoMO pvGridProfileCode. */
    public pvGridProfileCode: number;

    /** APPPvInfoMO pvGridProfile. */
    public pvGridProfile: number;

    /** APPPvInfoMO pvRfHwVersion. */
    public pvRfHwVersion: number;

    /** APPPvInfoMO pvRfSwVersion. */
    public pvRfSwVersion: number;

    /** APPPvInfoMO miRuleId. */
    public miRuleId: number;

    /**
     * Creates a new APPPvInfoMO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns APPPvInfoMO instance
     */
    public static create(properties?: IAPPPvInfoMO): APPPvInfoMO;

    /**
     * Encodes the specified APPPvInfoMO message. Does not implicitly {@link APPPvInfoMO.verify|verify} messages.
     * @param message APPPvInfoMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAPPPvInfoMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a APPPvInfoMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns APPPvInfoMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): APPPvInfoMO;

    /**
     * Gets the default type url for APPPvInfoMO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a APPFeatureMO. */
export interface IAPPFeatureMO {

    /** APPFeatureMO key */
    key?: (number|null);

    /** APPFeatureMO value */
    value?: (string|null);
}

/** Represents a APPFeatureMO. */
export class APPFeatureMO implements IAPPFeatureMO {

    /**
     * Constructs a new APPFeatureMO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAPPFeatureMO);

    /** APPFeatureMO key. */
    public key: number;

    /** APPFeatureMO value. */
    public value: string;

    /**
     * Creates a new APPFeatureMO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns APPFeatureMO instance
     */
    public static create(properties?: IAPPFeatureMO): APPFeatureMO;

    /**
     * Encodes the specified APPFeatureMO message. Does not implicitly {@link APPFeatureMO.verify|verify} messages.
     * @param message APPFeatureMO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAPPFeatureMO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a APPFeatureMO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns APPFeatureMO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): APPFeatureMO;

    /**
     * Gets the default type url for APPFeatureMO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a APPInfoDataReqDTO. */
export interface IAPPInfoDataReqDTO {

    /** APPInfoDataReqDTO dtuSerialNumber */
    dtuSerialNumber?: (string|null);

    /** APPInfoDataReqDTO timestamp */
    timestamp?: (number|null);

    /** APPInfoDataReqDTO deviceNumber */
    deviceNumber?: (number|null);

    /** APPInfoDataReqDTO pvNumber */
    pvNumber?: (number|null);

    /** APPInfoDataReqDTO packageNumber */
    packageNumber?: (number|null);

    /** APPInfoDataReqDTO currentPackage */
    currentPackage?: (number|null);

    /** APPInfoDataReqDTO channel */
    channel?: (number|null);

    /** APPInfoDataReqDTO dtuInfo */
    dtuInfo?: (IAPPDtuInfoMO|null);

    /** APPInfoDataReqDTO meterInfo */
    meterInfo?: (IAPPMeterInfoMO[]|null);

    /** APPInfoDataReqDTO rpInfo */
    rpInfo?: (IAPPRpInfoMO[]|null);

    /** APPInfoDataReqDTO pvInfo */
    pvInfo?: (IAPPPvInfoMO[]|null);

    /** APPInfoDataReqDTO unknownField */
    unknownField?: (number|null);

    /** APPInfoDataReqDTO appFeatures */
    appFeatures?: (IAPPFeatureMO[]|null);
}

/** Represents a APPInfoDataReqDTO. */
export class APPInfoDataReqDTO implements IAPPInfoDataReqDTO {

    /**
     * Constructs a new APPInfoDataReqDTO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAPPInfoDataReqDTO);

    /** APPInfoDataReqDTO dtuSerialNumber. */
    public dtuSerialNumber: string;

    /** APPInfoDataReqDTO timestamp. */
    public timestamp: number;

    /** APPInfoDataReqDTO deviceNumber. */
    public deviceNumber: number;

    /** APPInfoDataReqDTO pvNumber. */
    public pvNumber: number;

    /** APPInfoDataReqDTO packageNumber. */
    public packageNumber: number;

    /** APPInfoDataReqDTO currentPackage. */
    public currentPackage: number;

    /** APPInfoDataReqDTO channel. */
    public channel: number;

    /** APPInfoDataReqDTO dtuInfo. */
    public dtuInfo?: (IAPPDtuInfoMO|null);

    /** APPInfoDataReqDTO meterInfo. */
    public meterInfo: IAPPMeterInfoMO[];

    /** APPInfoDataReqDTO rpInfo. */
    public rpInfo: IAPPRpInfoMO[];

    /** APPInfoDataReqDTO pvInfo. */
    public pvInfo: IAPPPvInfoMO[];

    /** APPInfoDataReqDTO unknownField. */
    public unknownField: number;

    /** APPInfoDataReqDTO appFeatures. */
    public appFeatures: IAPPFeatureMO[];

    /**
     * Creates a new APPInfoDataReqDTO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns APPInfoDataReqDTO instance
     */
    public static create(properties?: IAPPInfoDataReqDTO): APPInfoDataReqDTO;

    /**
     * Encodes the specified APPInfoDataReqDTO message. Does not implicitly {@link APPInfoDataReqDTO.verify|verify} messages.
     * @param message APPInfoDataReqDTO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAPPInfoDataReqDTO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a APPInfoDataReqDTO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns APPInfoDataReqDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): APPInfoDataReqDTO;

    /**
     * Gets the default type url for APPInfoDataReqDTO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a APPInfoDataResDTO. */
export interface IAPPInfoDataResDTO {

    /** APPInfoDataResDTO timeYmdHms */
    timeYmdHms?: (Uint8Array|null);

    /** APPInfoDataResDTO offset */
    offset?: (number|null);

    /** APPInfoDataResDTO currentPackage */
    currentPackage?: (number|null);

    /** APPInfoDataResDTO errorCode */
    errorCode?: (number|null);

    /** APPInfoDataResDTO time */
    time?: (number|null);
}

/** Represents a APPInfoDataResDTO. */
export class APPInfoDataResDTO implements IAPPInfoDataResDTO {

    /**
     * Constructs a new APPInfoDataResDTO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAPPInfoDataResDTO);

    /** APPInfoDataResDTO timeYmdHms. */
    public timeYmdHms: Uint8Array;

    /** APPInfoDataResDTO offset. */
    public offset: number;

    /** APPInfoDataResDTO currentPackage. */
    public currentPackage: number;

    /** APPInfoDataResDTO errorCode. */
    public errorCode: number;

    /** APPInfoDataResDTO time. */
    public time: number;

    /**
     * Creates a new APPInfoDataResDTO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns APPInfoDataResDTO instance
     */
    public static create(properties?: IAPPInfoDataResDTO): APPInfoDataResDTO;

    /**
     * Encodes the specified APPInfoDataResDTO message. Does not implicitly {@link APPInfoDataResDTO.verify|verify} messages.
     * @param message APPInfoDataResDTO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAPPInfoDataResDTO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a APPInfoDataResDTO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns APPInfoDataResDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): APPInfoDataResDTO;

    /**
     * Gets the default type url for APPInfoDataResDTO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GetConfigResDTO. */
export interface IGetConfigResDTO {

    /** GetConfigResDTO offset */
    offset?: (number|null);

    /** GetConfigResDTO time */
    time?: (number|null);
}

/** Represents a GetConfigResDTO. */
export class GetConfigResDTO implements IGetConfigResDTO {

    /**
     * Constructs a new GetConfigResDTO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetConfigResDTO);

    /** GetConfigResDTO offset. */
    public offset: number;

    /** GetConfigResDTO time. */
    public time: number;

    /**
     * Creates a new GetConfigResDTO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetConfigResDTO instance
     */
    public static create(properties?: IGetConfigResDTO): GetConfigResDTO;

    /**
     * Encodes the specified GetConfigResDTO message. Does not implicitly {@link GetConfigResDTO.verify|verify} messages.
     * @param message GetConfigResDTO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetConfigResDTO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetConfigResDTO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetConfigResDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetConfigResDTO;

    /**
     * Gets the default type url for GetConfigResDTO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GetConfigReqDTO. */
export interface IGetConfigReqDTO {

    /** GetConfigReqDTO requestOffset */
    requestOffset?: (number|null);

    /** GetConfigReqDTO requestTime */
    requestTime?: (number|null);

    /** GetConfigReqDTO lockPassword */
    lockPassword?: (number|null);

    /** GetConfigReqDTO lockTime */
    lockTime?: (number|null);

    /** GetConfigReqDTO limitPowerMypower */
    limitPowerMypower?: (number|null);

    /** GetConfigReqDTO zeroExport_433Addr */
    zeroExport_433Addr?: (number|null);

    /** GetConfigReqDTO zeroExportEnable */
    zeroExportEnable?: (number|null);

    /** GetConfigReqDTO netmodeSelect */
    netmodeSelect?: (number|null);

    /** GetConfigReqDTO channelSelect */
    channelSelect?: (number|null);

    /** GetConfigReqDTO serverSendTime */
    serverSendTime?: (number|null);

    /** GetConfigReqDTO wifiRssi */
    wifiRssi?: (number|null);

    /** GetConfigReqDTO serverport */
    serverport?: (number|null);

    /** GetConfigReqDTO apnSet */
    apnSet?: (string|null);

    /** GetConfigReqDTO meterKind */
    meterKind?: (string|null);

    /** GetConfigReqDTO meterInterface */
    meterInterface?: (string|null);

    /** GetConfigReqDTO wifiSsid */
    wifiSsid?: (string|null);

    /** GetConfigReqDTO wifiPassword */
    wifiPassword?: (string|null);

    /** GetConfigReqDTO serverDomainName */
    serverDomainName?: (string|null);

    /** GetConfigReqDTO invType */
    invType?: (number|null);

    /** GetConfigReqDTO dtuSn */
    dtuSn?: (string|null);

    /** GetConfigReqDTO accessModel */
    accessModel?: (number|null);

    /** GetConfigReqDTO mac_0 */
    mac_0?: (number|null);

    /** GetConfigReqDTO mac_1 */
    mac_1?: (number|null);

    /** GetConfigReqDTO mac_2 */
    mac_2?: (number|null);

    /** GetConfigReqDTO mac_3 */
    mac_3?: (number|null);

    /** GetConfigReqDTO dhcpSwitch */
    dhcpSwitch?: (number|null);

    /** GetConfigReqDTO ipAddr_0 */
    ipAddr_0?: (number|null);

    /** GetConfigReqDTO ipAddr_1 */
    ipAddr_1?: (number|null);

    /** GetConfigReqDTO ipAddr_2 */
    ipAddr_2?: (number|null);

    /** GetConfigReqDTO ipAddr_3 */
    ipAddr_3?: (number|null);

    /** GetConfigReqDTO subnetMask_0 */
    subnetMask_0?: (number|null);

    /** GetConfigReqDTO subnetMask_1 */
    subnetMask_1?: (number|null);

    /** GetConfigReqDTO subnetMask_2 */
    subnetMask_2?: (number|null);

    /** GetConfigReqDTO subnetMask_3 */
    subnetMask_3?: (number|null);

    /** GetConfigReqDTO defaultGateway_0 */
    defaultGateway_0?: (number|null);

    /** GetConfigReqDTO defaultGateway_1 */
    defaultGateway_1?: (number|null);

    /** GetConfigReqDTO defaultGateway_2 */
    defaultGateway_2?: (number|null);

    /** GetConfigReqDTO defaultGateway_3 */
    defaultGateway_3?: (number|null);

    /** GetConfigReqDTO kaNub */
    kaNub?: (string|null);

    /** GetConfigReqDTO apnName */
    apnName?: (string|null);

    /** GetConfigReqDTO apnPassword */
    apnPassword?: (string|null);

    /** GetConfigReqDTO sub1gSweepSwitch */
    sub1gSweepSwitch?: (number|null);

    /** GetConfigReqDTO sub1gWorkChannel */
    sub1gWorkChannel?: (number|null);

    /** GetConfigReqDTO cableDns_0 */
    cableDns_0?: (number|null);

    /** GetConfigReqDTO cableDns_1 */
    cableDns_1?: (number|null);

    /** GetConfigReqDTO cableDns_2 */
    cableDns_2?: (number|null);

    /** GetConfigReqDTO cableDns_3 */
    cableDns_3?: (number|null);

    /** GetConfigReqDTO wifiIpAddr_0 */
    wifiIpAddr_0?: (number|null);

    /** GetConfigReqDTO wifiIpAddr_1 */
    wifiIpAddr_1?: (number|null);

    /** GetConfigReqDTO wifiIpAddr_2 */
    wifiIpAddr_2?: (number|null);

    /** GetConfigReqDTO wifiIpAddr_3 */
    wifiIpAddr_3?: (number|null);

    /** GetConfigReqDTO mac_4 */
    mac_4?: (number|null);

    /** GetConfigReqDTO mac_5 */
    mac_5?: (number|null);

    /** GetConfigReqDTO wifiMac_0 */
    wifiMac_0?: (number|null);

    /** GetConfigReqDTO wifiMac_1 */
    wifiMac_1?: (number|null);

    /** GetConfigReqDTO wifiMac_2 */
    wifiMac_2?: (number|null);

    /** GetConfigReqDTO wifiMac_3 */
    wifiMac_3?: (number|null);

    /** GetConfigReqDTO wifiMac_4 */
    wifiMac_4?: (number|null);

    /** GetConfigReqDTO wifiMac_5 */
    wifiMac_5?: (number|null);

    /** GetConfigReqDTO gprsImei */
    gprsImei?: (string|null);

    /** GetConfigReqDTO dtuApSsid */
    dtuApSsid?: (string|null);

    /** GetConfigReqDTO dtuApPass */
    dtuApPass?: (string|null);
}

/** Represents a GetConfigReqDTO. */
export class GetConfigReqDTO implements IGetConfigReqDTO {

    /**
     * Constructs a new GetConfigReqDTO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetConfigReqDTO);

    /** GetConfigReqDTO requestOffset. */
    public requestOffset: number;

    /** GetConfigReqDTO requestTime. */
    public requestTime: number;

    /** GetConfigReqDTO lockPassword. */
    public lockPassword: number;

    /** GetConfigReqDTO lockTime. */
    public lockTime: number;

    /** GetConfigReqDTO limitPowerMypower. */
    public limitPowerMypower: number;

    /** GetConfigReqDTO zeroExport_433Addr. */
    public zeroExport_433Addr: number;

    /** GetConfigReqDTO zeroExportEnable. */
    public zeroExportEnable: number;

    /** GetConfigReqDTO netmodeSelect. */
    public netmodeSelect: number;

    /** GetConfigReqDTO channelSelect. */
    public channelSelect: number;

    /** GetConfigReqDTO serverSendTime. */
    public serverSendTime: number;

    /** GetConfigReqDTO wifiRssi. */
    public wifiRssi: number;

    /** GetConfigReqDTO serverport. */
    public serverport: number;

    /** GetConfigReqDTO apnSet. */
    public apnSet: string;

    /** GetConfigReqDTO meterKind. */
    public meterKind: string;

    /** GetConfigReqDTO meterInterface. */
    public meterInterface: string;

    /** GetConfigReqDTO wifiSsid. */
    public wifiSsid: string;

    /** GetConfigReqDTO wifiPassword. */
    public wifiPassword: string;

    /** GetConfigReqDTO serverDomainName. */
    public serverDomainName: string;

    /** GetConfigReqDTO invType. */
    public invType: number;

    /** GetConfigReqDTO dtuSn. */
    public dtuSn: string;

    /** GetConfigReqDTO accessModel. */
    public accessModel: number;

    /** GetConfigReqDTO mac_0. */
    public mac_0: number;

    /** GetConfigReqDTO mac_1. */
    public mac_1: number;

    /** GetConfigReqDTO mac_2. */
    public mac_2: number;

    /** GetConfigReqDTO mac_3. */
    public mac_3: number;

    /** GetConfigReqDTO dhcpSwitch. */
    public dhcpSwitch: number;

    /** GetConfigReqDTO ipAddr_0. */
    public ipAddr_0: number;

    /** GetConfigReqDTO ipAddr_1. */
    public ipAddr_1: number;

    /** GetConfigReqDTO ipAddr_2. */
    public ipAddr_2: number;

    /** GetConfigReqDTO ipAddr_3. */
    public ipAddr_3: number;

    /** GetConfigReqDTO subnetMask_0. */
    public subnetMask_0: number;

    /** GetConfigReqDTO subnetMask_1. */
    public subnetMask_1: number;

    /** GetConfigReqDTO subnetMask_2. */
    public subnetMask_2: number;

    /** GetConfigReqDTO subnetMask_3. */
    public subnetMask_3: number;

    /** GetConfigReqDTO defaultGateway_0. */
    public defaultGateway_0: number;

    /** GetConfigReqDTO defaultGateway_1. */
    public defaultGateway_1: number;

    /** GetConfigReqDTO defaultGateway_2. */
    public defaultGateway_2: number;

    /** GetConfigReqDTO defaultGateway_3. */
    public defaultGateway_3: number;

    /** GetConfigReqDTO kaNub. */
    public kaNub: string;

    /** GetConfigReqDTO apnName. */
    public apnName: string;

    /** GetConfigReqDTO apnPassword. */
    public apnPassword: string;

    /** GetConfigReqDTO sub1gSweepSwitch. */
    public sub1gSweepSwitch: number;

    /** GetConfigReqDTO sub1gWorkChannel. */
    public sub1gWorkChannel: number;

    /** GetConfigReqDTO cableDns_0. */
    public cableDns_0: number;

    /** GetConfigReqDTO cableDns_1. */
    public cableDns_1: number;

    /** GetConfigReqDTO cableDns_2. */
    public cableDns_2: number;

    /** GetConfigReqDTO cableDns_3. */
    public cableDns_3: number;

    /** GetConfigReqDTO wifiIpAddr_0. */
    public wifiIpAddr_0: number;

    /** GetConfigReqDTO wifiIpAddr_1. */
    public wifiIpAddr_1: number;

    /** GetConfigReqDTO wifiIpAddr_2. */
    public wifiIpAddr_2: number;

    /** GetConfigReqDTO wifiIpAddr_3. */
    public wifiIpAddr_3: number;

    /** GetConfigReqDTO mac_4. */
    public mac_4: number;

    /** GetConfigReqDTO mac_5. */
    public mac_5: number;

    /** GetConfigReqDTO wifiMac_0. */
    public wifiMac_0: number;

    /** GetConfigReqDTO wifiMac_1. */
    public wifiMac_1: number;

    /** GetConfigReqDTO wifiMac_2. */
    public wifiMac_2: number;

    /** GetConfigReqDTO wifiMac_3. */
    public wifiMac_3: number;

    /** GetConfigReqDTO wifiMac_4. */
    public wifiMac_4: number;

    /** GetConfigReqDTO wifiMac_5. */
    public wifiMac_5: number;

    /** GetConfigReqDTO gprsImei. */
    public gprsImei: string;

    /** GetConfigReqDTO dtuApSsid. */
    public dtuApSsid: string;

    /** GetConfigReqDTO dtuApPass. */
    public dtuApPass: string;

    /**
     * Creates a new GetConfigReqDTO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetConfigReqDTO instance
     */
    public static create(properties?: IGetConfigReqDTO): GetConfigReqDTO;

    /**
     * Encodes the specified GetConfigReqDTO message. Does not implicitly {@link GetConfigReqDTO.verify|verify} messages.
     * @param message GetConfigReqDTO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetConfigReqDTO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetConfigReqDTO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetConfigReqDTO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetConfigReqDTO;

    /**
     * Gets the default type url for GetConfigReqDTO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
