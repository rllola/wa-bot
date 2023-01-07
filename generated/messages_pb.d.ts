// package: 
// file: messages.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class PositionMessage extends jspb.Message { 
    getX(): number;
    setX(value: number): PositionMessage;
    getY(): number;
    setY(value: number): PositionMessage;
    getDirection(): PositionMessage.Direction;
    setDirection(value: PositionMessage.Direction): PositionMessage;
    getMoving(): boolean;
    setMoving(value: boolean): PositionMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionMessage.AsObject;
    static toObject(includeInstance: boolean, msg: PositionMessage): PositionMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionMessage;
    static deserializeBinaryFromReader(message: PositionMessage, reader: jspb.BinaryReader): PositionMessage;
}

export namespace PositionMessage {
    export type AsObject = {
        x: number,
        y: number,
        direction: PositionMessage.Direction,
        moving: boolean,
    }

    export enum Direction {
    UP = 0,
    RIGHT = 1,
    DOWN = 2,
    LEFT = 3,
    }

}

export class PointMessage extends jspb.Message { 
    getX(): number;
    setX(value: number): PointMessage;
    getY(): number;
    setY(value: number): PointMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PointMessage.AsObject;
    static toObject(includeInstance: boolean, msg: PointMessage): PointMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PointMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PointMessage;
    static deserializeBinaryFromReader(message: PointMessage, reader: jspb.BinaryReader): PointMessage;
}

export namespace PointMessage {
    export type AsObject = {
        x: number,
        y: number,
    }
}

export class ViewportMessage extends jspb.Message { 
    getLeft(): number;
    setLeft(value: number): ViewportMessage;
    getTop(): number;
    setTop(value: number): ViewportMessage;
    getRight(): number;
    setRight(value: number): ViewportMessage;
    getBottom(): number;
    setBottom(value: number): ViewportMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ViewportMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ViewportMessage): ViewportMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ViewportMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ViewportMessage;
    static deserializeBinaryFromReader(message: ViewportMessage, reader: jspb.BinaryReader): ViewportMessage;
}

export namespace ViewportMessage {
    export type AsObject = {
        left: number,
        top: number,
        right: number,
        bottom: number,
    }
}

export class CharacterLayerMessage extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): CharacterLayerMessage;
    getName(): string;
    setName(value: string): CharacterLayerMessage;
    getLayer(): string;
    setLayer(value: string): CharacterLayerMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CharacterLayerMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CharacterLayerMessage): CharacterLayerMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CharacterLayerMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CharacterLayerMessage;
    static deserializeBinaryFromReader(message: CharacterLayerMessage, reader: jspb.BinaryReader): CharacterLayerMessage;
}

export namespace CharacterLayerMessage {
    export type AsObject = {
        url: string,
        name: string,
        layer: string,
    }
}

export class ApplicationMessage extends jspb.Message { 
    getName(): string;
    setName(value: string): ApplicationMessage;
    getScript(): string;
    setScript(value: string): ApplicationMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApplicationMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ApplicationMessage): ApplicationMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApplicationMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApplicationMessage;
    static deserializeBinaryFromReader(message: ApplicationMessage, reader: jspb.BinaryReader): ApplicationMessage;
}

export namespace ApplicationMessage {
    export type AsObject = {
        name: string,
        script: string,
    }
}

export class CompanionMessage extends jspb.Message { 
    getName(): string;
    setName(value: string): CompanionMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompanionMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CompanionMessage): CompanionMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompanionMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompanionMessage;
    static deserializeBinaryFromReader(message: CompanionMessage, reader: jspb.BinaryReader): CompanionMessage;
}

export namespace CompanionMessage {
    export type AsObject = {
        name: string,
    }
}

export class PingMessage extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PingMessage.AsObject;
    static toObject(includeInstance: boolean, msg: PingMessage): PingMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PingMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PingMessage;
    static deserializeBinaryFromReader(message: PingMessage, reader: jspb.BinaryReader): PingMessage;
}

export namespace PingMessage {
    export type AsObject = {
    }
}

export class SetPlayerDetailsMessage extends jspb.Message { 

    hasOutlinecolor(): boolean;
    clearOutlinecolor(): void;
    getOutlinecolor(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setOutlinecolor(value?: google_protobuf_wrappers_pb.UInt32Value): SetPlayerDetailsMessage;

    hasRemoveoutlinecolor(): boolean;
    clearRemoveoutlinecolor(): void;
    getRemoveoutlinecolor(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setRemoveoutlinecolor(value?: google_protobuf_wrappers_pb.BoolValue): SetPlayerDetailsMessage;

    hasShowvoiceindicator(): boolean;
    clearShowvoiceindicator(): void;
    getShowvoiceindicator(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setShowvoiceindicator(value?: google_protobuf_wrappers_pb.BoolValue): SetPlayerDetailsMessage;
    getAvailabilitystatus(): AvailabilityStatus;
    setAvailabilitystatus(value: AvailabilityStatus): SetPlayerDetailsMessage;

    hasSetvariable(): boolean;
    clearSetvariable(): void;
    getSetvariable(): SetPlayerVariableMessage | undefined;
    setSetvariable(value?: SetPlayerVariableMessage): SetPlayerDetailsMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPlayerDetailsMessage.AsObject;
    static toObject(includeInstance: boolean, msg: SetPlayerDetailsMessage): SetPlayerDetailsMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPlayerDetailsMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPlayerDetailsMessage;
    static deserializeBinaryFromReader(message: SetPlayerDetailsMessage, reader: jspb.BinaryReader): SetPlayerDetailsMessage;
}

export namespace SetPlayerDetailsMessage {
    export type AsObject = {
        outlinecolor?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        removeoutlinecolor?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        showvoiceindicator?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        availabilitystatus: AvailabilityStatus,
        setvariable?: SetPlayerVariableMessage.AsObject,
    }
}

export class UserMovesMessage extends jspb.Message { 

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): PositionMessage | undefined;
    setPosition(value?: PositionMessage): UserMovesMessage;

    hasViewport(): boolean;
    clearViewport(): void;
    getViewport(): ViewportMessage | undefined;
    setViewport(value?: ViewportMessage): UserMovesMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserMovesMessage.AsObject;
    static toObject(includeInstance: boolean, msg: UserMovesMessage): UserMovesMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserMovesMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserMovesMessage;
    static deserializeBinaryFromReader(message: UserMovesMessage, reader: jspb.BinaryReader): UserMovesMessage;
}

export namespace UserMovesMessage {
    export type AsObject = {
        position?: PositionMessage.AsObject,
        viewport?: ViewportMessage.AsObject,
    }
}

export class WebRtcSignalToServerMessage extends jspb.Message { 
    getReceiverid(): number;
    setReceiverid(value: number): WebRtcSignalToServerMessage;
    getSignal(): string;
    setSignal(value: string): WebRtcSignalToServerMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebRtcSignalToServerMessage.AsObject;
    static toObject(includeInstance: boolean, msg: WebRtcSignalToServerMessage): WebRtcSignalToServerMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebRtcSignalToServerMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebRtcSignalToServerMessage;
    static deserializeBinaryFromReader(message: WebRtcSignalToServerMessage, reader: jspb.BinaryReader): WebRtcSignalToServerMessage;
}

export namespace WebRtcSignalToServerMessage {
    export type AsObject = {
        receiverid: number,
        signal: string,
    }
}

export class ReportPlayerMessage extends jspb.Message { 
    getReporteduseruuid(): string;
    setReporteduseruuid(value: string): ReportPlayerMessage;
    getReportcomment(): string;
    setReportcomment(value: string): ReportPlayerMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportPlayerMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ReportPlayerMessage): ReportPlayerMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportPlayerMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportPlayerMessage;
    static deserializeBinaryFromReader(message: ReportPlayerMessage, reader: jspb.BinaryReader): ReportPlayerMessage;
}

export namespace ReportPlayerMessage {
    export type AsObject = {
        reporteduseruuid: string,
        reportcomment: string,
    }
}

export class EmotePromptMessage extends jspb.Message { 
    getEmote(): string;
    setEmote(value: string): EmotePromptMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmotePromptMessage.AsObject;
    static toObject(includeInstance: boolean, msg: EmotePromptMessage): EmotePromptMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmotePromptMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmotePromptMessage;
    static deserializeBinaryFromReader(message: EmotePromptMessage, reader: jspb.BinaryReader): EmotePromptMessage;
}

export namespace EmotePromptMessage {
    export type AsObject = {
        emote: string,
    }
}

export class EmoteEventMessage extends jspb.Message { 
    getActoruserid(): number;
    setActoruserid(value: number): EmoteEventMessage;
    getEmote(): string;
    setEmote(value: string): EmoteEventMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmoteEventMessage.AsObject;
    static toObject(includeInstance: boolean, msg: EmoteEventMessage): EmoteEventMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmoteEventMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmoteEventMessage;
    static deserializeBinaryFromReader(message: EmoteEventMessage, reader: jspb.BinaryReader): EmoteEventMessage;
}

export namespace EmoteEventMessage {
    export type AsObject = {
        actoruserid: number,
        emote: string,
    }
}

export class FollowRequestMessage extends jspb.Message { 
    getLeader(): number;
    setLeader(value: number): FollowRequestMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FollowRequestMessage.AsObject;
    static toObject(includeInstance: boolean, msg: FollowRequestMessage): FollowRequestMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FollowRequestMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FollowRequestMessage;
    static deserializeBinaryFromReader(message: FollowRequestMessage, reader: jspb.BinaryReader): FollowRequestMessage;
}

export namespace FollowRequestMessage {
    export type AsObject = {
        leader: number,
    }
}

export class FollowConfirmationMessage extends jspb.Message { 
    getLeader(): number;
    setLeader(value: number): FollowConfirmationMessage;
    getFollower(): number;
    setFollower(value: number): FollowConfirmationMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FollowConfirmationMessage.AsObject;
    static toObject(includeInstance: boolean, msg: FollowConfirmationMessage): FollowConfirmationMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FollowConfirmationMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FollowConfirmationMessage;
    static deserializeBinaryFromReader(message: FollowConfirmationMessage, reader: jspb.BinaryReader): FollowConfirmationMessage;
}

export namespace FollowConfirmationMessage {
    export type AsObject = {
        leader: number,
        follower: number,
    }
}

export class FollowAbortMessage extends jspb.Message { 
    getLeader(): number;
    setLeader(value: number): FollowAbortMessage;
    getFollower(): number;
    setFollower(value: number): FollowAbortMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FollowAbortMessage.AsObject;
    static toObject(includeInstance: boolean, msg: FollowAbortMessage): FollowAbortMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FollowAbortMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FollowAbortMessage;
    static deserializeBinaryFromReader(message: FollowAbortMessage, reader: jspb.BinaryReader): FollowAbortMessage;
}

export namespace FollowAbortMessage {
    export type AsObject = {
        leader: number,
        follower: number,
    }
}

export class LockGroupPromptMessage extends jspb.Message { 
    getLock(): boolean;
    setLock(value: boolean): LockGroupPromptMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LockGroupPromptMessage.AsObject;
    static toObject(includeInstance: boolean, msg: LockGroupPromptMessage): LockGroupPromptMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LockGroupPromptMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LockGroupPromptMessage;
    static deserializeBinaryFromReader(message: LockGroupPromptMessage, reader: jspb.BinaryReader): LockGroupPromptMessage;
}

export namespace LockGroupPromptMessage {
    export type AsObject = {
        lock: boolean,
    }
}

export class EditMapMessage extends jspb.Message { 

    hasModifyareamessage(): boolean;
    clearModifyareamessage(): void;
    getModifyareamessage(): ModifyAreaMessage | undefined;
    setModifyareamessage(value?: ModifyAreaMessage): EditMapMessage;

    hasCreateareamessage(): boolean;
    clearCreateareamessage(): void;
    getCreateareamessage(): CreateAreaMessage | undefined;
    setCreateareamessage(value?: CreateAreaMessage): EditMapMessage;

    hasDeleteareamessage(): boolean;
    clearDeleteareamessage(): void;
    getDeleteareamessage(): DeleteAreaMessage | undefined;
    setDeleteareamessage(value?: DeleteAreaMessage): EditMapMessage;

    getMessageCase(): EditMapMessage.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EditMapMessage.AsObject;
    static toObject(includeInstance: boolean, msg: EditMapMessage): EditMapMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EditMapMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EditMapMessage;
    static deserializeBinaryFromReader(message: EditMapMessage, reader: jspb.BinaryReader): EditMapMessage;
}

export namespace EditMapMessage {
    export type AsObject = {
        modifyareamessage?: ModifyAreaMessage.AsObject,
        createareamessage?: CreateAreaMessage.AsObject,
        deleteareamessage?: DeleteAreaMessage.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        MODIFYAREAMESSAGE = 1,
        CREATEAREAMESSAGE = 2,
        DELETEAREAMESSAGE = 3,
    }

}

export class EditMapCommandMessage extends jspb.Message { 
    getId(): string;
    setId(value: string): EditMapCommandMessage;

    hasEditmapmessage(): boolean;
    clearEditmapmessage(): void;
    getEditmapmessage(): EditMapMessage | undefined;
    setEditmapmessage(value?: EditMapMessage): EditMapCommandMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EditMapCommandMessage.AsObject;
    static toObject(includeInstance: boolean, msg: EditMapCommandMessage): EditMapCommandMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EditMapCommandMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EditMapCommandMessage;
    static deserializeBinaryFromReader(message: EditMapCommandMessage, reader: jspb.BinaryReader): EditMapCommandMessage;
}

export namespace EditMapCommandMessage {
    export type AsObject = {
        id: string,
        editmapmessage?: EditMapMessage.AsObject,
    }
}

export class EditMapCommandWithKeyMessage extends jspb.Message { 
    getMapkey(): string;
    setMapkey(value: string): EditMapCommandWithKeyMessage;

    hasEditmapcommandmessage(): boolean;
    clearEditmapcommandmessage(): void;
    getEditmapcommandmessage(): EditMapCommandMessage | undefined;
    setEditmapcommandmessage(value?: EditMapCommandMessage): EditMapCommandWithKeyMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EditMapCommandWithKeyMessage.AsObject;
    static toObject(includeInstance: boolean, msg: EditMapCommandWithKeyMessage): EditMapCommandWithKeyMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EditMapCommandWithKeyMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EditMapCommandWithKeyMessage;
    static deserializeBinaryFromReader(message: EditMapCommandWithKeyMessage, reader: jspb.BinaryReader): EditMapCommandWithKeyMessage;
}

export namespace EditMapCommandWithKeyMessage {
    export type AsObject = {
        mapkey: string,
        editmapcommandmessage?: EditMapCommandMessage.AsObject,
    }
}

export class ModifyAreaMessage extends jspb.Message { 
    getId(): number;
    setId(value: number): ModifyAreaMessage;

    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): ModifyAreaMessage;

    hasX(): boolean;
    clearX(): void;
    getX(): number | undefined;
    setX(value: number): ModifyAreaMessage;

    hasY(): boolean;
    clearY(): void;
    getY(): number | undefined;
    setY(value: number): ModifyAreaMessage;

    hasWidth(): boolean;
    clearWidth(): void;
    getWidth(): number | undefined;
    setWidth(value: number): ModifyAreaMessage;

    hasHeight(): boolean;
    clearHeight(): void;
    getHeight(): number | undefined;
    setHeight(value: number): ModifyAreaMessage;

    hasProperties(): boolean;
    clearProperties(): void;
    getProperties(): AreaProperties | undefined;
    setProperties(value?: AreaProperties): ModifyAreaMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModifyAreaMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ModifyAreaMessage): ModifyAreaMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModifyAreaMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModifyAreaMessage;
    static deserializeBinaryFromReader(message: ModifyAreaMessage, reader: jspb.BinaryReader): ModifyAreaMessage;
}

export namespace ModifyAreaMessage {
    export type AsObject = {
        id: number,
        name?: string,
        x?: number,
        y?: number,
        width?: number,
        height?: number,
        properties?: AreaProperties.AsObject,
    }
}

export class AreaProperties extends jspb.Message { 

    hasFocusable(): boolean;
    clearFocusable(): void;
    getFocusable(): boolean | undefined;
    setFocusable(value: boolean): AreaProperties;

    hasZoomMargin(): boolean;
    clearZoomMargin(): void;
    getZoomMargin(): number | undefined;
    setZoomMargin(value: number): AreaProperties;

    hasSilent(): boolean;
    clearSilent(): void;
    getSilent(): boolean | undefined;
    setSilent(value: boolean): AreaProperties;

    getCustompropertiesMap(): jspb.Map<string, google_protobuf_struct_pb.Value>;
    clearCustompropertiesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AreaProperties.AsObject;
    static toObject(includeInstance: boolean, msg: AreaProperties): AreaProperties.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AreaProperties, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AreaProperties;
    static deserializeBinaryFromReader(message: AreaProperties, reader: jspb.BinaryReader): AreaProperties;
}

export namespace AreaProperties {
    export type AsObject = {
        focusable?: boolean,
        zoomMargin?: number,
        silent?: boolean,

        custompropertiesMap: Array<[string, google_protobuf_struct_pb.Value.AsObject]>,
    }
}

export class CustomAreaProperty extends jspb.Message { 

    hasBoolval(): boolean;
    clearBoolval(): void;
    getBoolval(): boolean;
    setBoolval(value: boolean): CustomAreaProperty;

    hasNumberval(): boolean;
    clearNumberval(): void;
    getNumberval(): number;
    setNumberval(value: number): CustomAreaProperty;

    hasStringval(): boolean;
    clearStringval(): void;
    getStringval(): string;
    setStringval(value: string): CustomAreaProperty;

    getValueCase(): CustomAreaProperty.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomAreaProperty.AsObject;
    static toObject(includeInstance: boolean, msg: CustomAreaProperty): CustomAreaProperty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomAreaProperty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomAreaProperty;
    static deserializeBinaryFromReader(message: CustomAreaProperty, reader: jspb.BinaryReader): CustomAreaProperty;
}

export namespace CustomAreaProperty {
    export type AsObject = {
        boolval: boolean,
        numberval: number,
        stringval: string,
    }

    export enum ValueCase {
        VALUE_NOT_SET = 0,
        BOOLVAL = 1,
        NUMBERVAL = 2,
        STRINGVAL = 3,
    }

}

export class DeleteAreaMessage extends jspb.Message { 
    getId(): number;
    setId(value: number): DeleteAreaMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAreaMessage.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAreaMessage): DeleteAreaMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAreaMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAreaMessage;
    static deserializeBinaryFromReader(message: DeleteAreaMessage, reader: jspb.BinaryReader): DeleteAreaMessage;
}

export namespace DeleteAreaMessage {
    export type AsObject = {
        id: number,
    }
}

export class CreateAreaMessage extends jspb.Message { 
    getId(): number;
    setId(value: number): CreateAreaMessage;
    getX(): number;
    setX(value: number): CreateAreaMessage;
    getY(): number;
    setY(value: number): CreateAreaMessage;
    getWidth(): number;
    setWidth(value: number): CreateAreaMessage;
    getHeight(): number;
    setHeight(value: number): CreateAreaMessage;
    getName(): string;
    setName(value: string): CreateAreaMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAreaMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAreaMessage): CreateAreaMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAreaMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAreaMessage;
    static deserializeBinaryFromReader(message: CreateAreaMessage, reader: jspb.BinaryReader): CreateAreaMessage;
}

export namespace CreateAreaMessage {
    export type AsObject = {
        id: number,
        x: number,
        y: number,
        width: number,
        height: number,
        name: string,
    }
}

export class ClientToServerMessage extends jspb.Message { 

    hasUsermovesmessage(): boolean;
    clearUsermovesmessage(): void;
    getUsermovesmessage(): UserMovesMessage | undefined;
    setUsermovesmessage(value?: UserMovesMessage): ClientToServerMessage;

    hasViewportmessage(): boolean;
    clearViewportmessage(): void;
    getViewportmessage(): ViewportMessage | undefined;
    setViewportmessage(value?: ViewportMessage): ClientToServerMessage;

    hasItemeventmessage(): boolean;
    clearItemeventmessage(): void;
    getItemeventmessage(): ItemEventMessage | undefined;
    setItemeventmessage(value?: ItemEventMessage): ClientToServerMessage;

    hasSetplayerdetailsmessage(): boolean;
    clearSetplayerdetailsmessage(): void;
    getSetplayerdetailsmessage(): SetPlayerDetailsMessage | undefined;
    setSetplayerdetailsmessage(value?: SetPlayerDetailsMessage): ClientToServerMessage;

    hasWebrtcsignaltoservermessage(): boolean;
    clearWebrtcsignaltoservermessage(): void;
    getWebrtcsignaltoservermessage(): WebRtcSignalToServerMessage | undefined;
    setWebrtcsignaltoservermessage(value?: WebRtcSignalToServerMessage): ClientToServerMessage;

    hasWebrtcscreensharingsignaltoservermessage(): boolean;
    clearWebrtcscreensharingsignaltoservermessage(): void;
    getWebrtcscreensharingsignaltoservermessage(): WebRtcSignalToServerMessage | undefined;
    setWebrtcscreensharingsignaltoservermessage(value?: WebRtcSignalToServerMessage): ClientToServerMessage;

    hasPlayglobalmessage(): boolean;
    clearPlayglobalmessage(): void;
    getPlayglobalmessage(): PlayGlobalMessage | undefined;
    setPlayglobalmessage(value?: PlayGlobalMessage): ClientToServerMessage;

    hasStopglobalmessage(): boolean;
    clearStopglobalmessage(): void;
    getStopglobalmessage(): StopGlobalMessage | undefined;
    setStopglobalmessage(value?: StopGlobalMessage): ClientToServerMessage;

    hasReportplayermessage(): boolean;
    clearReportplayermessage(): void;
    getReportplayermessage(): ReportPlayerMessage | undefined;
    setReportplayermessage(value?: ReportPlayerMessage): ClientToServerMessage;

    hasEmotepromptmessage(): boolean;
    clearEmotepromptmessage(): void;
    getEmotepromptmessage(): EmotePromptMessage | undefined;
    setEmotepromptmessage(value?: EmotePromptMessage): ClientToServerMessage;

    hasVariablemessage(): boolean;
    clearVariablemessage(): void;
    getVariablemessage(): VariableMessage | undefined;
    setVariablemessage(value?: VariableMessage): ClientToServerMessage;

    hasFollowrequestmessage(): boolean;
    clearFollowrequestmessage(): void;
    getFollowrequestmessage(): FollowRequestMessage | undefined;
    setFollowrequestmessage(value?: FollowRequestMessage): ClientToServerMessage;

    hasFollowconfirmationmessage(): boolean;
    clearFollowconfirmationmessage(): void;
    getFollowconfirmationmessage(): FollowConfirmationMessage | undefined;
    setFollowconfirmationmessage(value?: FollowConfirmationMessage): ClientToServerMessage;

    hasFollowabortmessage(): boolean;
    clearFollowabortmessage(): void;
    getFollowabortmessage(): FollowAbortMessage | undefined;
    setFollowabortmessage(value?: FollowAbortMessage): ClientToServerMessage;

    hasLockgrouppromptmessage(): boolean;
    clearLockgrouppromptmessage(): void;
    getLockgrouppromptmessage(): LockGroupPromptMessage | undefined;
    setLockgrouppromptmessage(value?: LockGroupPromptMessage): ClientToServerMessage;

    hasQuerymessage(): boolean;
    clearQuerymessage(): void;
    getQuerymessage(): QueryMessage | undefined;
    setQuerymessage(value?: QueryMessage): ClientToServerMessage;

    hasPingmessage(): boolean;
    clearPingmessage(): void;
    getPingmessage(): PingMessage | undefined;
    setPingmessage(value?: PingMessage): ClientToServerMessage;

    hasAskpositionmessage(): boolean;
    clearAskpositionmessage(): void;
    getAskpositionmessage(): AskPositionMessage | undefined;
    setAskpositionmessage(value?: AskPositionMessage): ClientToServerMessage;

    hasEditmapcommandmessage(): boolean;
    clearEditmapcommandmessage(): void;
    getEditmapcommandmessage(): EditMapCommandMessage | undefined;
    setEditmapcommandmessage(value?: EditMapCommandMessage): ClientToServerMessage;

    getMessageCase(): ClientToServerMessage.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientToServerMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ClientToServerMessage): ClientToServerMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientToServerMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientToServerMessage;
    static deserializeBinaryFromReader(message: ClientToServerMessage, reader: jspb.BinaryReader): ClientToServerMessage;
}

export namespace ClientToServerMessage {
    export type AsObject = {
        usermovesmessage?: UserMovesMessage.AsObject,
        viewportmessage?: ViewportMessage.AsObject,
        itemeventmessage?: ItemEventMessage.AsObject,
        setplayerdetailsmessage?: SetPlayerDetailsMessage.AsObject,
        webrtcsignaltoservermessage?: WebRtcSignalToServerMessage.AsObject,
        webrtcscreensharingsignaltoservermessage?: WebRtcSignalToServerMessage.AsObject,
        playglobalmessage?: PlayGlobalMessage.AsObject,
        stopglobalmessage?: StopGlobalMessage.AsObject,
        reportplayermessage?: ReportPlayerMessage.AsObject,
        emotepromptmessage?: EmotePromptMessage.AsObject,
        variablemessage?: VariableMessage.AsObject,
        followrequestmessage?: FollowRequestMessage.AsObject,
        followconfirmationmessage?: FollowConfirmationMessage.AsObject,
        followabortmessage?: FollowAbortMessage.AsObject,
        lockgrouppromptmessage?: LockGroupPromptMessage.AsObject,
        querymessage?: QueryMessage.AsObject,
        pingmessage?: PingMessage.AsObject,
        askpositionmessage?: AskPositionMessage.AsObject,
        editmapcommandmessage?: EditMapCommandMessage.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        USERMOVESMESSAGE = 2,
        VIEWPORTMESSAGE = 4,
        ITEMEVENTMESSAGE = 5,
        SETPLAYERDETAILSMESSAGE = 6,
        WEBRTCSIGNALTOSERVERMESSAGE = 7,
        WEBRTCSCREENSHARINGSIGNALTOSERVERMESSAGE = 8,
        PLAYGLOBALMESSAGE = 9,
        STOPGLOBALMESSAGE = 10,
        REPORTPLAYERMESSAGE = 11,
        EMOTEPROMPTMESSAGE = 13,
        VARIABLEMESSAGE = 14,
        FOLLOWREQUESTMESSAGE = 15,
        FOLLOWCONFIRMATIONMESSAGE = 16,
        FOLLOWABORTMESSAGE = 17,
        LOCKGROUPPROMPTMESSAGE = 18,
        QUERYMESSAGE = 20,
        PINGMESSAGE = 21,
        ASKPOSITIONMESSAGE = 23,
        EDITMAPCOMMANDMESSAGE = 24,
    }

}

export class ItemEventMessage extends jspb.Message { 
    getItemid(): number;
    setItemid(value: number): ItemEventMessage;
    getEvent(): string;
    setEvent(value: string): ItemEventMessage;
    getStatejson(): string;
    setStatejson(value: string): ItemEventMessage;
    getParametersjson(): string;
    setParametersjson(value: string): ItemEventMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ItemEventMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ItemEventMessage): ItemEventMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ItemEventMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ItemEventMessage;
    static deserializeBinaryFromReader(message: ItemEventMessage, reader: jspb.BinaryReader): ItemEventMessage;
}

export namespace ItemEventMessage {
    export type AsObject = {
        itemid: number,
        event: string,
        statejson: string,
        parametersjson: string,
    }
}

export class VariableMessage extends jspb.Message { 
    getName(): string;
    setName(value: string): VariableMessage;
    getValue(): string;
    setValue(value: string): VariableMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VariableMessage.AsObject;
    static toObject(includeInstance: boolean, msg: VariableMessage): VariableMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VariableMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VariableMessage;
    static deserializeBinaryFromReader(message: VariableMessage, reader: jspb.BinaryReader): VariableMessage;
}

export namespace VariableMessage {
    export type AsObject = {
        name: string,
        value: string,
    }
}

export class SetPlayerVariableMessage extends jspb.Message { 
    getName(): string;
    setName(value: string): SetPlayerVariableMessage;
    getValue(): string;
    setValue(value: string): SetPlayerVariableMessage;
    getPublic(): boolean;
    setPublic(value: boolean): SetPlayerVariableMessage;
    getPersist(): boolean;
    setPersist(value: boolean): SetPlayerVariableMessage;

    hasTtl(): boolean;
    clearTtl(): void;
    getTtl(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setTtl(value?: google_protobuf_wrappers_pb.Int32Value): SetPlayerVariableMessage;
    getScope(): SetPlayerVariableMessage.Scope;
    setScope(value: SetPlayerVariableMessage.Scope): SetPlayerVariableMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPlayerVariableMessage.AsObject;
    static toObject(includeInstance: boolean, msg: SetPlayerVariableMessage): SetPlayerVariableMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPlayerVariableMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPlayerVariableMessage;
    static deserializeBinaryFromReader(message: SetPlayerVariableMessage, reader: jspb.BinaryReader): SetPlayerVariableMessage;
}

export namespace SetPlayerVariableMessage {
    export type AsObject = {
        name: string,
        value: string,
        pb_public: boolean,
        persist: boolean,
        ttl?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        scope: SetPlayerVariableMessage.Scope,
    }

    export enum Scope {
    ROOM = 0,
    WORLD = 1,
    }

}

export class VariableWithTagMessage extends jspb.Message { 
    getName(): string;
    setName(value: string): VariableWithTagMessage;
    getValue(): string;
    setValue(value: string): VariableWithTagMessage;
    getReadableby(): string;
    setReadableby(value: string): VariableWithTagMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VariableWithTagMessage.AsObject;
    static toObject(includeInstance: boolean, msg: VariableWithTagMessage): VariableWithTagMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VariableWithTagMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VariableWithTagMessage;
    static deserializeBinaryFromReader(message: VariableWithTagMessage, reader: jspb.BinaryReader): VariableWithTagMessage;
}

export namespace VariableWithTagMessage {
    export type AsObject = {
        name: string,
        value: string,
        readableby: string,
    }
}

export class PlayGlobalMessage extends jspb.Message { 
    getType(): string;
    setType(value: string): PlayGlobalMessage;
    getContent(): string;
    setContent(value: string): PlayGlobalMessage;
    getBroadcasttoworld(): boolean;
    setBroadcasttoworld(value: boolean): PlayGlobalMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayGlobalMessage.AsObject;
    static toObject(includeInstance: boolean, msg: PlayGlobalMessage): PlayGlobalMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayGlobalMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayGlobalMessage;
    static deserializeBinaryFromReader(message: PlayGlobalMessage, reader: jspb.BinaryReader): PlayGlobalMessage;
}

export namespace PlayGlobalMessage {
    export type AsObject = {
        type: string,
        content: string,
        broadcasttoworld: boolean,
    }
}

export class StopGlobalMessage extends jspb.Message { 
    getId(): string;
    setId(value: string): StopGlobalMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopGlobalMessage.AsObject;
    static toObject(includeInstance: boolean, msg: StopGlobalMessage): StopGlobalMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopGlobalMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopGlobalMessage;
    static deserializeBinaryFromReader(message: StopGlobalMessage, reader: jspb.BinaryReader): StopGlobalMessage;
}

export namespace StopGlobalMessage {
    export type AsObject = {
        id: string,
    }
}

export class QueryMessage extends jspb.Message { 
    getId(): number;
    setId(value: number): QueryMessage;

    hasJitsijwtquery(): boolean;
    clearJitsijwtquery(): void;
    getJitsijwtquery(): JitsiJwtQuery | undefined;
    setJitsijwtquery(value?: JitsiJwtQuery): QueryMessage;

    hasJoinbbbmeetingquery(): boolean;
    clearJoinbbbmeetingquery(): void;
    getJoinbbbmeetingquery(): JoinBBBMeetingQuery | undefined;
    setJoinbbbmeetingquery(value?: JoinBBBMeetingQuery): QueryMessage;

    getQueryCase(): QueryMessage.QueryCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryMessage.AsObject;
    static toObject(includeInstance: boolean, msg: QueryMessage): QueryMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryMessage;
    static deserializeBinaryFromReader(message: QueryMessage, reader: jspb.BinaryReader): QueryMessage;
}

export namespace QueryMessage {
    export type AsObject = {
        id: number,
        jitsijwtquery?: JitsiJwtQuery.AsObject,
        joinbbbmeetingquery?: JoinBBBMeetingQuery.AsObject,
    }

    export enum QueryCase {
        QUERY_NOT_SET = 0,
        JITSIJWTQUERY = 2,
        JOINBBBMEETINGQUERY = 20,
    }

}

export class JitsiJwtQuery extends jspb.Message { 
    getJitsiroom(): string;
    setJitsiroom(value: string): JitsiJwtQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JitsiJwtQuery.AsObject;
    static toObject(includeInstance: boolean, msg: JitsiJwtQuery): JitsiJwtQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JitsiJwtQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JitsiJwtQuery;
    static deserializeBinaryFromReader(message: JitsiJwtQuery, reader: jspb.BinaryReader): JitsiJwtQuery;
}

export namespace JitsiJwtQuery {
    export type AsObject = {
        jitsiroom: string,
    }
}

export class JoinBBBMeetingQuery extends jspb.Message { 
    getMeetingid(): string;
    setMeetingid(value: string): JoinBBBMeetingQuery;
    getLocalmeetingid(): string;
    setLocalmeetingid(value: string): JoinBBBMeetingQuery;
    getMeetingname(): string;
    setMeetingname(value: string): JoinBBBMeetingQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JoinBBBMeetingQuery.AsObject;
    static toObject(includeInstance: boolean, msg: JoinBBBMeetingQuery): JoinBBBMeetingQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JoinBBBMeetingQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JoinBBBMeetingQuery;
    static deserializeBinaryFromReader(message: JoinBBBMeetingQuery, reader: jspb.BinaryReader): JoinBBBMeetingQuery;
}

export namespace JoinBBBMeetingQuery {
    export type AsObject = {
        meetingid: string,
        localmeetingid: string,
        meetingname: string,
    }
}

export class AnswerMessage extends jspb.Message { 
    getId(): number;
    setId(value: number): AnswerMessage;

    hasError(): boolean;
    clearError(): void;
    getError(): ErrorMessage | undefined;
    setError(value?: ErrorMessage): AnswerMessage;

    hasJitsijwtanswer(): boolean;
    clearJitsijwtanswer(): void;
    getJitsijwtanswer(): JitsiJwtAnswer | undefined;
    setJitsijwtanswer(value?: JitsiJwtAnswer): AnswerMessage;

    hasJoinbbbmeetinganswer(): boolean;
    clearJoinbbbmeetinganswer(): void;
    getJoinbbbmeetinganswer(): JoinBBBMeetingAnswer | undefined;
    setJoinbbbmeetinganswer(value?: JoinBBBMeetingAnswer): AnswerMessage;

    getAnswerCase(): AnswerMessage.AnswerCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnswerMessage.AsObject;
    static toObject(includeInstance: boolean, msg: AnswerMessage): AnswerMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnswerMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnswerMessage;
    static deserializeBinaryFromReader(message: AnswerMessage, reader: jspb.BinaryReader): AnswerMessage;
}

export namespace AnswerMessage {
    export type AsObject = {
        id: number,
        error?: ErrorMessage.AsObject,
        jitsijwtanswer?: JitsiJwtAnswer.AsObject,
        joinbbbmeetinganswer?: JoinBBBMeetingAnswer.AsObject,
    }

    export enum AnswerCase {
        ANSWER_NOT_SET = 0,
        ERROR = 2,
        JITSIJWTANSWER = 3,
        JOINBBBMEETINGANSWER = 4,
    }

}

export class JitsiJwtAnswer extends jspb.Message { 
    getJwt(): string;
    setJwt(value: string): JitsiJwtAnswer;
    getUrl(): string;
    setUrl(value: string): JitsiJwtAnswer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JitsiJwtAnswer.AsObject;
    static toObject(includeInstance: boolean, msg: JitsiJwtAnswer): JitsiJwtAnswer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JitsiJwtAnswer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JitsiJwtAnswer;
    static deserializeBinaryFromReader(message: JitsiJwtAnswer, reader: jspb.BinaryReader): JitsiJwtAnswer;
}

export namespace JitsiJwtAnswer {
    export type AsObject = {
        jwt: string,
        url: string,
    }
}

export class JoinBBBMeetingAnswer extends jspb.Message { 
    getMeetingid(): string;
    setMeetingid(value: string): JoinBBBMeetingAnswer;
    getClienturl(): string;
    setClienturl(value: string): JoinBBBMeetingAnswer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JoinBBBMeetingAnswer.AsObject;
    static toObject(includeInstance: boolean, msg: JoinBBBMeetingAnswer): JoinBBBMeetingAnswer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JoinBBBMeetingAnswer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JoinBBBMeetingAnswer;
    static deserializeBinaryFromReader(message: JoinBBBMeetingAnswer, reader: jspb.BinaryReader): JoinBBBMeetingAnswer;
}

export namespace JoinBBBMeetingAnswer {
    export type AsObject = {
        meetingid: string,
        clienturl: string,
    }
}

export class UserMovedMessage extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): UserMovedMessage;

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): PositionMessage | undefined;
    setPosition(value?: PositionMessage): UserMovedMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserMovedMessage.AsObject;
    static toObject(includeInstance: boolean, msg: UserMovedMessage): UserMovedMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserMovedMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserMovedMessage;
    static deserializeBinaryFromReader(message: UserMovedMessage, reader: jspb.BinaryReader): UserMovedMessage;
}

export namespace UserMovedMessage {
    export type AsObject = {
        userid: number,
        position?: PositionMessage.AsObject,
    }
}

export class MoveToPositionMessage extends jspb.Message { 

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): PositionMessage | undefined;
    setPosition(value?: PositionMessage): MoveToPositionMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveToPositionMessage.AsObject;
    static toObject(includeInstance: boolean, msg: MoveToPositionMessage): MoveToPositionMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveToPositionMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveToPositionMessage;
    static deserializeBinaryFromReader(message: MoveToPositionMessage, reader: jspb.BinaryReader): MoveToPositionMessage;
}

export namespace MoveToPositionMessage {
    export type AsObject = {
        position?: PositionMessage.AsObject,
    }
}

export class SubMessage extends jspb.Message { 

    hasUsermovedmessage(): boolean;
    clearUsermovedmessage(): void;
    getUsermovedmessage(): UserMovedMessage | undefined;
    setUsermovedmessage(value?: UserMovedMessage): SubMessage;

    hasGroupupdatemessage(): boolean;
    clearGroupupdatemessage(): void;
    getGroupupdatemessage(): GroupUpdateMessage | undefined;
    setGroupupdatemessage(value?: GroupUpdateMessage): SubMessage;

    hasGroupdeletemessage(): boolean;
    clearGroupdeletemessage(): void;
    getGroupdeletemessage(): GroupDeleteMessage | undefined;
    setGroupdeletemessage(value?: GroupDeleteMessage): SubMessage;

    hasUserjoinedmessage(): boolean;
    clearUserjoinedmessage(): void;
    getUserjoinedmessage(): UserJoinedMessage | undefined;
    setUserjoinedmessage(value?: UserJoinedMessage): SubMessage;

    hasUserleftmessage(): boolean;
    clearUserleftmessage(): void;
    getUserleftmessage(): UserLeftMessage | undefined;
    setUserleftmessage(value?: UserLeftMessage): SubMessage;

    hasItemeventmessage(): boolean;
    clearItemeventmessage(): void;
    getItemeventmessage(): ItemEventMessage | undefined;
    setItemeventmessage(value?: ItemEventMessage): SubMessage;

    hasEmoteeventmessage(): boolean;
    clearEmoteeventmessage(): void;
    getEmoteeventmessage(): EmoteEventMessage | undefined;
    setEmoteeventmessage(value?: EmoteEventMessage): SubMessage;

    hasVariablemessage(): boolean;
    clearVariablemessage(): void;
    getVariablemessage(): VariableMessage | undefined;
    setVariablemessage(value?: VariableMessage): SubMessage;

    hasErrormessage(): boolean;
    clearErrormessage(): void;
    getErrormessage(): ErrorMessage | undefined;
    setErrormessage(value?: ErrorMessage): SubMessage;

    hasPlayerdetailsupdatedmessage(): boolean;
    clearPlayerdetailsupdatedmessage(): void;
    getPlayerdetailsupdatedmessage(): PlayerDetailsUpdatedMessage | undefined;
    setPlayerdetailsupdatedmessage(value?: PlayerDetailsUpdatedMessage): SubMessage;

    hasPingmessage(): boolean;
    clearPingmessage(): void;
    getPingmessage(): PingMessage | undefined;
    setPingmessage(value?: PingMessage): SubMessage;

    hasEditmapcommandmessage(): boolean;
    clearEditmapcommandmessage(): void;
    getEditmapcommandmessage(): EditMapCommandMessage | undefined;
    setEditmapcommandmessage(value?: EditMapCommandMessage): SubMessage;

    hasJoinmucroommessage(): boolean;
    clearJoinmucroommessage(): void;
    getJoinmucroommessage(): JoinMucRoomMessage | undefined;
    setJoinmucroommessage(value?: JoinMucRoomMessage): SubMessage;

    hasLeavemucroommessage(): boolean;
    clearLeavemucroommessage(): void;
    getLeavemucroommessage(): LeaveMucRoomMessage | undefined;
    setLeavemucroommessage(value?: LeaveMucRoomMessage): SubMessage;

    getMessageCase(): SubMessage.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubMessage.AsObject;
    static toObject(includeInstance: boolean, msg: SubMessage): SubMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubMessage;
    static deserializeBinaryFromReader(message: SubMessage, reader: jspb.BinaryReader): SubMessage;
}

export namespace SubMessage {
    export type AsObject = {
        usermovedmessage?: UserMovedMessage.AsObject,
        groupupdatemessage?: GroupUpdateMessage.AsObject,
        groupdeletemessage?: GroupDeleteMessage.AsObject,
        userjoinedmessage?: UserJoinedMessage.AsObject,
        userleftmessage?: UserLeftMessage.AsObject,
        itemeventmessage?: ItemEventMessage.AsObject,
        emoteeventmessage?: EmoteEventMessage.AsObject,
        variablemessage?: VariableMessage.AsObject,
        errormessage?: ErrorMessage.AsObject,
        playerdetailsupdatedmessage?: PlayerDetailsUpdatedMessage.AsObject,
        pingmessage?: PingMessage.AsObject,
        editmapcommandmessage?: EditMapCommandMessage.AsObject,
        joinmucroommessage?: JoinMucRoomMessage.AsObject,
        leavemucroommessage?: LeaveMucRoomMessage.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        USERMOVEDMESSAGE = 1,
        GROUPUPDATEMESSAGE = 2,
        GROUPDELETEMESSAGE = 3,
        USERJOINEDMESSAGE = 4,
        USERLEFTMESSAGE = 5,
        ITEMEVENTMESSAGE = 6,
        EMOTEEVENTMESSAGE = 7,
        VARIABLEMESSAGE = 8,
        ERRORMESSAGE = 9,
        PLAYERDETAILSUPDATEDMESSAGE = 10,
        PINGMESSAGE = 11,
        EDITMAPCOMMANDMESSAGE = 13,
        JOINMUCROOMMESSAGE = 14,
        LEAVEMUCROOMMESSAGE = 15,
    }

}

export class BatchMessage extends jspb.Message { 
    getEvent(): string;
    setEvent(value: string): BatchMessage;
    clearPayloadList(): void;
    getPayloadList(): Array<SubMessage>;
    setPayloadList(value: Array<SubMessage>): BatchMessage;
    addPayload(value?: SubMessage, index?: number): SubMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchMessage.AsObject;
    static toObject(includeInstance: boolean, msg: BatchMessage): BatchMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchMessage;
    static deserializeBinaryFromReader(message: BatchMessage, reader: jspb.BinaryReader): BatchMessage;
}

export namespace BatchMessage {
    export type AsObject = {
        event: string,
        payloadList: Array<SubMessage.AsObject>,
    }
}

export class GroupUpdateMessage extends jspb.Message { 
    getGroupid(): number;
    setGroupid(value: number): GroupUpdateMessage;

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): PointMessage | undefined;
    setPosition(value?: PointMessage): GroupUpdateMessage;

    hasGroupsize(): boolean;
    clearGroupsize(): void;
    getGroupsize(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setGroupsize(value?: google_protobuf_wrappers_pb.UInt32Value): GroupUpdateMessage;

    hasLocked(): boolean;
    clearLocked(): void;
    getLocked(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setLocked(value?: google_protobuf_wrappers_pb.BoolValue): GroupUpdateMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GroupUpdateMessage.AsObject;
    static toObject(includeInstance: boolean, msg: GroupUpdateMessage): GroupUpdateMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GroupUpdateMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GroupUpdateMessage;
    static deserializeBinaryFromReader(message: GroupUpdateMessage, reader: jspb.BinaryReader): GroupUpdateMessage;
}

export namespace GroupUpdateMessage {
    export type AsObject = {
        groupid: number,
        position?: PointMessage.AsObject,
        groupsize?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        locked?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    }
}

export class GroupDeleteMessage extends jspb.Message { 
    getGroupid(): number;
    setGroupid(value: number): GroupDeleteMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GroupDeleteMessage.AsObject;
    static toObject(includeInstance: boolean, msg: GroupDeleteMessage): GroupDeleteMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GroupDeleteMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GroupDeleteMessage;
    static deserializeBinaryFromReader(message: GroupDeleteMessage, reader: jspb.BinaryReader): GroupDeleteMessage;
}

export namespace GroupDeleteMessage {
    export type AsObject = {
        groupid: number,
    }
}

export class UserJoinedMessage extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): UserJoinedMessage;
    getUserjid(): string;
    setUserjid(value: string): UserJoinedMessage;
    getName(): string;
    setName(value: string): UserJoinedMessage;
    clearCharacterlayersList(): void;
    getCharacterlayersList(): Array<CharacterLayerMessage>;
    setCharacterlayersList(value: Array<CharacterLayerMessage>): UserJoinedMessage;
    addCharacterlayers(value?: CharacterLayerMessage, index?: number): CharacterLayerMessage;

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): PositionMessage | undefined;
    setPosition(value?: PositionMessage): UserJoinedMessage;

    hasCompanion(): boolean;
    clearCompanion(): void;
    getCompanion(): CompanionMessage | undefined;
    setCompanion(value?: CompanionMessage): UserJoinedMessage;
    getVisitcardurl(): string;
    setVisitcardurl(value: string): UserJoinedMessage;
    getUseruuid(): string;
    setUseruuid(value: string): UserJoinedMessage;
    getOutlinecolor(): number;
    setOutlinecolor(value: number): UserJoinedMessage;
    getHasoutline(): boolean;
    setHasoutline(value: boolean): UserJoinedMessage;
    getAvailabilitystatus(): AvailabilityStatus;
    setAvailabilitystatus(value: AvailabilityStatus): UserJoinedMessage;

    getVariablesMap(): jspb.Map<string, string>;
    clearVariablesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserJoinedMessage.AsObject;
    static toObject(includeInstance: boolean, msg: UserJoinedMessage): UserJoinedMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserJoinedMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserJoinedMessage;
    static deserializeBinaryFromReader(message: UserJoinedMessage, reader: jspb.BinaryReader): UserJoinedMessage;
}

export namespace UserJoinedMessage {
    export type AsObject = {
        userid: number,
        userjid: string,
        name: string,
        characterlayersList: Array<CharacterLayerMessage.AsObject>,
        position?: PositionMessage.AsObject,
        companion?: CompanionMessage.AsObject,
        visitcardurl: string,
        useruuid: string,
        outlinecolor: number,
        hasoutline: boolean,
        availabilitystatus: AvailabilityStatus,

        variablesMap: Array<[string, string]>,
    }
}

export class UserLeftMessage extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): UserLeftMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserLeftMessage.AsObject;
    static toObject(includeInstance: boolean, msg: UserLeftMessage): UserLeftMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserLeftMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserLeftMessage;
    static deserializeBinaryFromReader(message: UserLeftMessage, reader: jspb.BinaryReader): UserLeftMessage;
}

export namespace UserLeftMessage {
    export type AsObject = {
        userid: number,
    }
}

export class ErrorMessage extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): ErrorMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorMessage): ErrorMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorMessage;
    static deserializeBinaryFromReader(message: ErrorMessage, reader: jspb.BinaryReader): ErrorMessage;
}

export namespace ErrorMessage {
    export type AsObject = {
        message: string,
    }
}

export class ErrorScreenMessage extends jspb.Message { 
    getType(): string;
    setType(value: string): ErrorScreenMessage;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCode(value?: google_protobuf_wrappers_pb.StringValue): ErrorScreenMessage;

    hasTitle(): boolean;
    clearTitle(): void;
    getTitle(): google_protobuf_wrappers_pb.StringValue | undefined;
    setTitle(value?: google_protobuf_wrappers_pb.StringValue): ErrorScreenMessage;

    hasSubtitle(): boolean;
    clearSubtitle(): void;
    getSubtitle(): google_protobuf_wrappers_pb.StringValue | undefined;
    setSubtitle(value?: google_protobuf_wrappers_pb.StringValue): ErrorScreenMessage;

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): google_protobuf_wrappers_pb.StringValue | undefined;
    setDetails(value?: google_protobuf_wrappers_pb.StringValue): ErrorScreenMessage;

    hasTimetoretry(): boolean;
    clearTimetoretry(): void;
    getTimetoretry(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setTimetoretry(value?: google_protobuf_wrappers_pb.Int32Value): ErrorScreenMessage;

    hasCanretrymanual(): boolean;
    clearCanretrymanual(): void;
    getCanretrymanual(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setCanretrymanual(value?: google_protobuf_wrappers_pb.BoolValue): ErrorScreenMessage;

    hasUrltoredirect(): boolean;
    clearUrltoredirect(): void;
    getUrltoredirect(): google_protobuf_wrappers_pb.StringValue | undefined;
    setUrltoredirect(value?: google_protobuf_wrappers_pb.StringValue): ErrorScreenMessage;

    hasButtontitle(): boolean;
    clearButtontitle(): void;
    getButtontitle(): google_protobuf_wrappers_pb.StringValue | undefined;
    setButtontitle(value?: google_protobuf_wrappers_pb.StringValue): ErrorScreenMessage;

    hasImage(): boolean;
    clearImage(): void;
    getImage(): google_protobuf_wrappers_pb.StringValue | undefined;
    setImage(value?: google_protobuf_wrappers_pb.StringValue): ErrorScreenMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ErrorScreenMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ErrorScreenMessage): ErrorScreenMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ErrorScreenMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ErrorScreenMessage;
    static deserializeBinaryFromReader(message: ErrorScreenMessage, reader: jspb.BinaryReader): ErrorScreenMessage;
}

export namespace ErrorScreenMessage {
    export type AsObject = {
        type: string,
        code?: google_protobuf_wrappers_pb.StringValue.AsObject,
        title?: google_protobuf_wrappers_pb.StringValue.AsObject,
        subtitle?: google_protobuf_wrappers_pb.StringValue.AsObject,
        details?: google_protobuf_wrappers_pb.StringValue.AsObject,
        timetoretry?: google_protobuf_wrappers_pb.Int32Value.AsObject,
        canretrymanual?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        urltoredirect?: google_protobuf_wrappers_pb.StringValue.AsObject,
        buttontitle?: google_protobuf_wrappers_pb.StringValue.AsObject,
        image?: google_protobuf_wrappers_pb.StringValue.AsObject,
    }
}

export class ItemStateMessage extends jspb.Message { 
    getItemid(): number;
    setItemid(value: number): ItemStateMessage;
    getStatejson(): string;
    setStatejson(value: string): ItemStateMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ItemStateMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ItemStateMessage): ItemStateMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ItemStateMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ItemStateMessage;
    static deserializeBinaryFromReader(message: ItemStateMessage, reader: jspb.BinaryReader): ItemStateMessage;
}

export namespace ItemStateMessage {
    export type AsObject = {
        itemid: number,
        statejson: string,
    }
}

export class GroupUsersUpdateMessage extends jspb.Message { 
    getGroupid(): number;
    setGroupid(value: number): GroupUsersUpdateMessage;
    clearUseridsList(): void;
    getUseridsList(): Array<number>;
    setUseridsList(value: Array<number>): GroupUsersUpdateMessage;
    addUserids(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GroupUsersUpdateMessage.AsObject;
    static toObject(includeInstance: boolean, msg: GroupUsersUpdateMessage): GroupUsersUpdateMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GroupUsersUpdateMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GroupUsersUpdateMessage;
    static deserializeBinaryFromReader(message: GroupUsersUpdateMessage, reader: jspb.BinaryReader): GroupUsersUpdateMessage;
}

export namespace GroupUsersUpdateMessage {
    export type AsObject = {
        groupid: number,
        useridsList: Array<number>,
    }
}

export class RoomJoinedMessage extends jspb.Message { 
    clearItemList(): void;
    getItemList(): Array<ItemStateMessage>;
    setItemList(value: Array<ItemStateMessage>): RoomJoinedMessage;
    addItem(value?: ItemStateMessage, index?: number): ItemStateMessage;
    getCurrentuserid(): number;
    setCurrentuserid(value: number): RoomJoinedMessage;
    clearTagList(): void;
    getTagList(): Array<string>;
    setTagList(value: Array<string>): RoomJoinedMessage;
    addTag(value: string, index?: number): string;
    clearVariableList(): void;
    getVariableList(): Array<VariableMessage>;
    setVariableList(value: Array<VariableMessage>): RoomJoinedMessage;
    addVariable(value?: VariableMessage, index?: number): VariableMessage;
    getUserroomtoken(): string;
    setUserroomtoken(value: string): RoomJoinedMessage;
    clearCharacterlayerList(): void;
    getCharacterlayerList(): Array<CharacterLayerMessage>;
    setCharacterlayerList(value: Array<CharacterLayerMessage>): RoomJoinedMessage;
    addCharacterlayer(value?: CharacterLayerMessage, index?: number): CharacterLayerMessage;
    getActivatedinviteuser(): boolean;
    setActivatedinviteuser(value: boolean): RoomJoinedMessage;
    clearPlayervariableList(): void;
    getPlayervariableList(): Array<VariableMessage>;
    setPlayervariableList(value: Array<VariableMessage>): RoomJoinedMessage;
    addPlayervariable(value?: VariableMessage, index?: number): VariableMessage;
    clearApplicationsList(): void;
    getApplicationsList(): Array<ApplicationMessage>;
    setApplicationsList(value: Array<ApplicationMessage>): RoomJoinedMessage;
    addApplications(value?: ApplicationMessage, index?: number): ApplicationMessage;
    getUserjid(): string;
    setUserjid(value: string): RoomJoinedMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RoomJoinedMessage.AsObject;
    static toObject(includeInstance: boolean, msg: RoomJoinedMessage): RoomJoinedMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RoomJoinedMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RoomJoinedMessage;
    static deserializeBinaryFromReader(message: RoomJoinedMessage, reader: jspb.BinaryReader): RoomJoinedMessage;
}

export namespace RoomJoinedMessage {
    export type AsObject = {
        itemList: Array<ItemStateMessage.AsObject>,
        currentuserid: number,
        tagList: Array<string>,
        variableList: Array<VariableMessage.AsObject>,
        userroomtoken: string,
        characterlayerList: Array<CharacterLayerMessage.AsObject>,
        activatedinviteuser: boolean,
        playervariableList: Array<VariableMessage.AsObject>,
        applicationsList: Array<ApplicationMessage.AsObject>,
        userjid: string,
    }
}

export class WebRtcStartMessage extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): WebRtcStartMessage;
    getInitiator(): boolean;
    setInitiator(value: boolean): WebRtcStartMessage;
    getWebrtcusername(): string;
    setWebrtcusername(value: string): WebRtcStartMessage;
    getWebrtcpassword(): string;
    setWebrtcpassword(value: string): WebRtcStartMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebRtcStartMessage.AsObject;
    static toObject(includeInstance: boolean, msg: WebRtcStartMessage): WebRtcStartMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebRtcStartMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebRtcStartMessage;
    static deserializeBinaryFromReader(message: WebRtcStartMessage, reader: jspb.BinaryReader): WebRtcStartMessage;
}

export namespace WebRtcStartMessage {
    export type AsObject = {
        userid: number,
        initiator: boolean,
        webrtcusername: string,
        webrtcpassword: string,
    }
}

export class WebRtcDisconnectMessage extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): WebRtcDisconnectMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebRtcDisconnectMessage.AsObject;
    static toObject(includeInstance: boolean, msg: WebRtcDisconnectMessage): WebRtcDisconnectMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebRtcDisconnectMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebRtcDisconnectMessage;
    static deserializeBinaryFromReader(message: WebRtcDisconnectMessage, reader: jspb.BinaryReader): WebRtcDisconnectMessage;
}

export namespace WebRtcDisconnectMessage {
    export type AsObject = {
        userid: number,
    }
}

export class WebRtcSignalToClientMessage extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): WebRtcSignalToClientMessage;
    getSignal(): string;
    setSignal(value: string): WebRtcSignalToClientMessage;
    getWebrtcusername(): string;
    setWebrtcusername(value: string): WebRtcSignalToClientMessage;
    getWebrtcpassword(): string;
    setWebrtcpassword(value: string): WebRtcSignalToClientMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebRtcSignalToClientMessage.AsObject;
    static toObject(includeInstance: boolean, msg: WebRtcSignalToClientMessage): WebRtcSignalToClientMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebRtcSignalToClientMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebRtcSignalToClientMessage;
    static deserializeBinaryFromReader(message: WebRtcSignalToClientMessage, reader: jspb.BinaryReader): WebRtcSignalToClientMessage;
}

export namespace WebRtcSignalToClientMessage {
    export type AsObject = {
        userid: number,
        signal: string,
        webrtcusername: string,
        webrtcpassword: string,
    }
}

export class TeleportMessageMessage extends jspb.Message { 
    getMap(): string;
    setMap(value: string): TeleportMessageMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TeleportMessageMessage.AsObject;
    static toObject(includeInstance: boolean, msg: TeleportMessageMessage): TeleportMessageMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TeleportMessageMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TeleportMessageMessage;
    static deserializeBinaryFromReader(message: TeleportMessageMessage, reader: jspb.BinaryReader): TeleportMessageMessage;
}

export namespace TeleportMessageMessage {
    export type AsObject = {
        map: string,
    }
}

export class SendUserMessage extends jspb.Message { 
    getType(): string;
    setType(value: string): SendUserMessage;
    getMessage(): string;
    setMessage(value: string): SendUserMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendUserMessage.AsObject;
    static toObject(includeInstance: boolean, msg: SendUserMessage): SendUserMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendUserMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendUserMessage;
    static deserializeBinaryFromReader(message: SendUserMessage, reader: jspb.BinaryReader): SendUserMessage;
}

export namespace SendUserMessage {
    export type AsObject = {
        type: string,
        message: string,
    }
}

export class WorldFullWarningMessage extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorldFullWarningMessage.AsObject;
    static toObject(includeInstance: boolean, msg: WorldFullWarningMessage): WorldFullWarningMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorldFullWarningMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorldFullWarningMessage;
    static deserializeBinaryFromReader(message: WorldFullWarningMessage, reader: jspb.BinaryReader): WorldFullWarningMessage;
}

export namespace WorldFullWarningMessage {
    export type AsObject = {
    }
}

export class WorldFullWarningToRoomMessage extends jspb.Message { 
    getRoomid(): string;
    setRoomid(value: string): WorldFullWarningToRoomMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorldFullWarningToRoomMessage.AsObject;
    static toObject(includeInstance: boolean, msg: WorldFullWarningToRoomMessage): WorldFullWarningToRoomMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorldFullWarningToRoomMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorldFullWarningToRoomMessage;
    static deserializeBinaryFromReader(message: WorldFullWarningToRoomMessage, reader: jspb.BinaryReader): WorldFullWarningToRoomMessage;
}

export namespace WorldFullWarningToRoomMessage {
    export type AsObject = {
        roomid: string,
    }
}

export class RefreshRoomPromptMessage extends jspb.Message { 
    getRoomid(): string;
    setRoomid(value: string): RefreshRoomPromptMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RefreshRoomPromptMessage.AsObject;
    static toObject(includeInstance: boolean, msg: RefreshRoomPromptMessage): RefreshRoomPromptMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RefreshRoomPromptMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RefreshRoomPromptMessage;
    static deserializeBinaryFromReader(message: RefreshRoomPromptMessage, reader: jspb.BinaryReader): RefreshRoomPromptMessage;
}

export namespace RefreshRoomPromptMessage {
    export type AsObject = {
        roomid: string,
    }
}

export class RefreshRoomMessage extends jspb.Message { 
    getRoomid(): string;
    setRoomid(value: string): RefreshRoomMessage;
    getVersionnumber(): number;
    setVersionnumber(value: number): RefreshRoomMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RefreshRoomMessage.AsObject;
    static toObject(includeInstance: boolean, msg: RefreshRoomMessage): RefreshRoomMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RefreshRoomMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RefreshRoomMessage;
    static deserializeBinaryFromReader(message: RefreshRoomMessage, reader: jspb.BinaryReader): RefreshRoomMessage;
}

export namespace RefreshRoomMessage {
    export type AsObject = {
        roomid: string,
        versionnumber: number,
    }
}

export class WorldFullMessage extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorldFullMessage.AsObject;
    static toObject(includeInstance: boolean, msg: WorldFullMessage): WorldFullMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorldFullMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorldFullMessage;
    static deserializeBinaryFromReader(message: WorldFullMessage, reader: jspb.BinaryReader): WorldFullMessage;
}

export namespace WorldFullMessage {
    export type AsObject = {
    }
}

export class TokenExpiredMessage extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TokenExpiredMessage.AsObject;
    static toObject(includeInstance: boolean, msg: TokenExpiredMessage): TokenExpiredMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TokenExpiredMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TokenExpiredMessage;
    static deserializeBinaryFromReader(message: TokenExpiredMessage, reader: jspb.BinaryReader): TokenExpiredMessage;
}

export namespace TokenExpiredMessage {
    export type AsObject = {
    }
}

export class InvalidTextureMessage extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InvalidTextureMessage.AsObject;
    static toObject(includeInstance: boolean, msg: InvalidTextureMessage): InvalidTextureMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InvalidTextureMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InvalidTextureMessage;
    static deserializeBinaryFromReader(message: InvalidTextureMessage, reader: jspb.BinaryReader): InvalidTextureMessage;
}

export namespace InvalidTextureMessage {
    export type AsObject = {
    }
}

export class WorldConnexionMessage extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): WorldConnexionMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WorldConnexionMessage.AsObject;
    static toObject(includeInstance: boolean, msg: WorldConnexionMessage): WorldConnexionMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WorldConnexionMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WorldConnexionMessage;
    static deserializeBinaryFromReader(message: WorldConnexionMessage, reader: jspb.BinaryReader): WorldConnexionMessage;
}

export namespace WorldConnexionMessage {
    export type AsObject = {
        message: string,
    }
}

export class BanUserMessage extends jspb.Message { 
    getType(): string;
    setType(value: string): BanUserMessage;
    getMessage(): string;
    setMessage(value: string): BanUserMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BanUserMessage.AsObject;
    static toObject(includeInstance: boolean, msg: BanUserMessage): BanUserMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BanUserMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BanUserMessage;
    static deserializeBinaryFromReader(message: BanUserMessage, reader: jspb.BinaryReader): BanUserMessage;
}

export namespace BanUserMessage {
    export type AsObject = {
        type: string,
        message: string,
    }
}

export class AskPositionMessage extends jspb.Message { 
    getUseridentifier(): string;
    setUseridentifier(value: string): AskPositionMessage;
    getPlayuri(): string;
    setPlayuri(value: string): AskPositionMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AskPositionMessage.AsObject;
    static toObject(includeInstance: boolean, msg: AskPositionMessage): AskPositionMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AskPositionMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AskPositionMessage;
    static deserializeBinaryFromReader(message: AskPositionMessage, reader: jspb.BinaryReader): AskPositionMessage;
}

export namespace AskPositionMessage {
    export type AsObject = {
        useridentifier: string,
        playuri: string,
    }
}

export class ServerToClientMessage extends jspb.Message { 

    hasBatchmessage(): boolean;
    clearBatchmessage(): void;
    getBatchmessage(): BatchMessage | undefined;
    setBatchmessage(value?: BatchMessage): ServerToClientMessage;

    hasErrormessage(): boolean;
    clearErrormessage(): void;
    getErrormessage(): ErrorMessage | undefined;
    setErrormessage(value?: ErrorMessage): ServerToClientMessage;

    hasRoomjoinedmessage(): boolean;
    clearRoomjoinedmessage(): void;
    getRoomjoinedmessage(): RoomJoinedMessage | undefined;
    setRoomjoinedmessage(value?: RoomJoinedMessage): ServerToClientMessage;

    hasWebrtcstartmessage(): boolean;
    clearWebrtcstartmessage(): void;
    getWebrtcstartmessage(): WebRtcStartMessage | undefined;
    setWebrtcstartmessage(value?: WebRtcStartMessage): ServerToClientMessage;

    hasWebrtcsignaltoclientmessage(): boolean;
    clearWebrtcsignaltoclientmessage(): void;
    getWebrtcsignaltoclientmessage(): WebRtcSignalToClientMessage | undefined;
    setWebrtcsignaltoclientmessage(value?: WebRtcSignalToClientMessage): ServerToClientMessage;

    hasWebrtcscreensharingsignaltoclientmessage(): boolean;
    clearWebrtcscreensharingsignaltoclientmessage(): void;
    getWebrtcscreensharingsignaltoclientmessage(): WebRtcSignalToClientMessage | undefined;
    setWebrtcscreensharingsignaltoclientmessage(value?: WebRtcSignalToClientMessage): ServerToClientMessage;

    hasWebrtcdisconnectmessage(): boolean;
    clearWebrtcdisconnectmessage(): void;
    getWebrtcdisconnectmessage(): WebRtcDisconnectMessage | undefined;
    setWebrtcdisconnectmessage(value?: WebRtcDisconnectMessage): ServerToClientMessage;

    hasTeleportmessagemessage(): boolean;
    clearTeleportmessagemessage(): void;
    getTeleportmessagemessage(): TeleportMessageMessage | undefined;
    setTeleportmessagemessage(value?: TeleportMessageMessage): ServerToClientMessage;

    hasSendusermessage(): boolean;
    clearSendusermessage(): void;
    getSendusermessage(): SendUserMessage | undefined;
    setSendusermessage(value?: SendUserMessage): ServerToClientMessage;

    hasBanusermessage(): boolean;
    clearBanusermessage(): void;
    getBanusermessage(): BanUserMessage | undefined;
    setBanusermessage(value?: BanUserMessage): ServerToClientMessage;

    hasWorldfullwarningmessage(): boolean;
    clearWorldfullwarningmessage(): void;
    getWorldfullwarningmessage(): WorldFullWarningMessage | undefined;
    setWorldfullwarningmessage(value?: WorldFullWarningMessage): ServerToClientMessage;

    hasWorldfullmessage(): boolean;
    clearWorldfullmessage(): void;
    getWorldfullmessage(): WorldFullMessage | undefined;
    setWorldfullmessage(value?: WorldFullMessage): ServerToClientMessage;

    hasRefreshroommessage(): boolean;
    clearRefreshroommessage(): void;
    getRefreshroommessage(): RefreshRoomMessage | undefined;
    setRefreshroommessage(value?: RefreshRoomMessage): ServerToClientMessage;

    hasWorldconnexionmessage(): boolean;
    clearWorldconnexionmessage(): void;
    getWorldconnexionmessage(): WorldConnexionMessage | undefined;
    setWorldconnexionmessage(value?: WorldConnexionMessage): ServerToClientMessage;

    hasTokenexpiredmessage(): boolean;
    clearTokenexpiredmessage(): void;
    getTokenexpiredmessage(): TokenExpiredMessage | undefined;
    setTokenexpiredmessage(value?: TokenExpiredMessage): ServerToClientMessage;

    hasFollowrequestmessage(): boolean;
    clearFollowrequestmessage(): void;
    getFollowrequestmessage(): FollowRequestMessage | undefined;
    setFollowrequestmessage(value?: FollowRequestMessage): ServerToClientMessage;

    hasFollowconfirmationmessage(): boolean;
    clearFollowconfirmationmessage(): void;
    getFollowconfirmationmessage(): FollowConfirmationMessage | undefined;
    setFollowconfirmationmessage(value?: FollowConfirmationMessage): ServerToClientMessage;

    hasFollowabortmessage(): boolean;
    clearFollowabortmessage(): void;
    getFollowabortmessage(): FollowAbortMessage | undefined;
    setFollowabortmessage(value?: FollowAbortMessage): ServerToClientMessage;

    hasInvalidtexturemessage(): boolean;
    clearInvalidtexturemessage(): void;
    getInvalidtexturemessage(): InvalidTextureMessage | undefined;
    setInvalidtexturemessage(value?: InvalidTextureMessage): ServerToClientMessage;

    hasGroupusersupdatemessage(): boolean;
    clearGroupusersupdatemessage(): void;
    getGroupusersupdatemessage(): GroupUsersUpdateMessage | undefined;
    setGroupusersupdatemessage(value?: GroupUsersUpdateMessage): ServerToClientMessage;

    hasErrorscreenmessage(): boolean;
    clearErrorscreenmessage(): void;
    getErrorscreenmessage(): ErrorScreenMessage | undefined;
    setErrorscreenmessage(value?: ErrorScreenMessage): ServerToClientMessage;

    hasAnswermessage(): boolean;
    clearAnswermessage(): void;
    getAnswermessage(): AnswerMessage | undefined;
    setAnswermessage(value?: AnswerMessage): ServerToClientMessage;

    hasXmppsettingsmessage(): boolean;
    clearXmppsettingsmessage(): void;
    getXmppsettingsmessage(): XmppSettingsMessage | undefined;
    setXmppsettingsmessage(value?: XmppSettingsMessage): ServerToClientMessage;

    hasMovetopositionmessage(): boolean;
    clearMovetopositionmessage(): void;
    getMovetopositionmessage(): MoveToPositionMessage | undefined;
    setMovetopositionmessage(value?: MoveToPositionMessage): ServerToClientMessage;

    getMessageCase(): ServerToClientMessage.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServerToClientMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServerToClientMessage): ServerToClientMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServerToClientMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServerToClientMessage;
    static deserializeBinaryFromReader(message: ServerToClientMessage, reader: jspb.BinaryReader): ServerToClientMessage;
}

export namespace ServerToClientMessage {
    export type AsObject = {
        batchmessage?: BatchMessage.AsObject,
        errormessage?: ErrorMessage.AsObject,
        roomjoinedmessage?: RoomJoinedMessage.AsObject,
        webrtcstartmessage?: WebRtcStartMessage.AsObject,
        webrtcsignaltoclientmessage?: WebRtcSignalToClientMessage.AsObject,
        webrtcscreensharingsignaltoclientmessage?: WebRtcSignalToClientMessage.AsObject,
        webrtcdisconnectmessage?: WebRtcDisconnectMessage.AsObject,
        teleportmessagemessage?: TeleportMessageMessage.AsObject,
        sendusermessage?: SendUserMessage.AsObject,
        banusermessage?: BanUserMessage.AsObject,
        worldfullwarningmessage?: WorldFullWarningMessage.AsObject,
        worldfullmessage?: WorldFullMessage.AsObject,
        refreshroommessage?: RefreshRoomMessage.AsObject,
        worldconnexionmessage?: WorldConnexionMessage.AsObject,
        tokenexpiredmessage?: TokenExpiredMessage.AsObject,
        followrequestmessage?: FollowRequestMessage.AsObject,
        followconfirmationmessage?: FollowConfirmationMessage.AsObject,
        followabortmessage?: FollowAbortMessage.AsObject,
        invalidtexturemessage?: InvalidTextureMessage.AsObject,
        groupusersupdatemessage?: GroupUsersUpdateMessage.AsObject,
        errorscreenmessage?: ErrorScreenMessage.AsObject,
        answermessage?: AnswerMessage.AsObject,
        xmppsettingsmessage?: XmppSettingsMessage.AsObject,
        movetopositionmessage?: MoveToPositionMessage.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        BATCHMESSAGE = 1,
        ERRORMESSAGE = 2,
        ROOMJOINEDMESSAGE = 3,
        WEBRTCSTARTMESSAGE = 4,
        WEBRTCSIGNALTOCLIENTMESSAGE = 5,
        WEBRTCSCREENSHARINGSIGNALTOCLIENTMESSAGE = 6,
        WEBRTCDISCONNECTMESSAGE = 7,
        TELEPORTMESSAGEMESSAGE = 10,
        SENDUSERMESSAGE = 12,
        BANUSERMESSAGE = 13,
        WORLDFULLWARNINGMESSAGE = 15,
        WORLDFULLMESSAGE = 16,
        REFRESHROOMMESSAGE = 17,
        WORLDCONNEXIONMESSAGE = 18,
        TOKENEXPIREDMESSAGE = 20,
        FOLLOWREQUESTMESSAGE = 21,
        FOLLOWCONFIRMATIONMESSAGE = 22,
        FOLLOWABORTMESSAGE = 23,
        INVALIDTEXTUREMESSAGE = 24,
        GROUPUSERSUPDATEMESSAGE = 25,
        ERRORSCREENMESSAGE = 26,
        ANSWERMESSAGE = 28,
        XMPPSETTINGSMESSAGE = 29,
        MOVETOPOSITIONMESSAGE = 31,
    }

}

export class JoinRoomMessage extends jspb.Message { 

    hasPositionmessage(): boolean;
    clearPositionmessage(): void;
    getPositionmessage(): PositionMessage | undefined;
    setPositionmessage(value?: PositionMessage): JoinRoomMessage;
    getName(): string;
    setName(value: string): JoinRoomMessage;
    clearCharacterlayerList(): void;
    getCharacterlayerList(): Array<CharacterLayerMessage>;
    setCharacterlayerList(value: Array<CharacterLayerMessage>): JoinRoomMessage;
    addCharacterlayer(value?: CharacterLayerMessage, index?: number): CharacterLayerMessage;
    getUseruuid(): string;
    setUseruuid(value: string): JoinRoomMessage;
    getRoomid(): string;
    setRoomid(value: string): JoinRoomMessage;
    clearTagList(): void;
    getTagList(): Array<string>;
    setTagList(value: Array<string>): JoinRoomMessage;
    addTag(value: string, index?: number): string;
    getIpaddress(): string;
    setIpaddress(value: string): JoinRoomMessage;

    hasCompanion(): boolean;
    clearCompanion(): void;
    getCompanion(): CompanionMessage | undefined;
    setCompanion(value?: CompanionMessage): JoinRoomMessage;
    getVisitcardurl(): string;
    setVisitcardurl(value: string): JoinRoomMessage;
    getUserroomtoken(): string;
    setUserroomtoken(value: string): JoinRoomMessage;
    getAvailabilitystatus(): AvailabilityStatus;
    setAvailabilitystatus(value: AvailabilityStatus): JoinRoomMessage;
    getActivatedinviteuser(): boolean;
    setActivatedinviteuser(value: boolean): JoinRoomMessage;
    getIslogged(): boolean;
    setIslogged(value: boolean): JoinRoomMessage;
    clearApplicationsList(): void;
    getApplicationsList(): Array<ApplicationMessage>;
    setApplicationsList(value: Array<ApplicationMessage>): JoinRoomMessage;
    addApplications(value?: ApplicationMessage, index?: number): ApplicationMessage;
    getUserjid(): string;
    setUserjid(value: string): JoinRoomMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JoinRoomMessage.AsObject;
    static toObject(includeInstance: boolean, msg: JoinRoomMessage): JoinRoomMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JoinRoomMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JoinRoomMessage;
    static deserializeBinaryFromReader(message: JoinRoomMessage, reader: jspb.BinaryReader): JoinRoomMessage;
}

export namespace JoinRoomMessage {
    export type AsObject = {
        positionmessage?: PositionMessage.AsObject,
        name: string,
        characterlayerList: Array<CharacterLayerMessage.AsObject>,
        useruuid: string,
        roomid: string,
        tagList: Array<string>,
        ipaddress: string,
        companion?: CompanionMessage.AsObject,
        visitcardurl: string,
        userroomtoken: string,
        availabilitystatus: AvailabilityStatus,
        activatedinviteuser: boolean,
        islogged: boolean,
        applicationsList: Array<ApplicationMessage.AsObject>,
        userjid: string,
    }
}

export class UserJoinedZoneMessage extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): UserJoinedZoneMessage;
    getUserjid(): string;
    setUserjid(value: string): UserJoinedZoneMessage;
    getName(): string;
    setName(value: string): UserJoinedZoneMessage;
    clearCharacterlayersList(): void;
    getCharacterlayersList(): Array<CharacterLayerMessage>;
    setCharacterlayersList(value: Array<CharacterLayerMessage>): UserJoinedZoneMessage;
    addCharacterlayers(value?: CharacterLayerMessage, index?: number): CharacterLayerMessage;

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): PositionMessage | undefined;
    setPosition(value?: PositionMessage): UserJoinedZoneMessage;

    hasFromzone(): boolean;
    clearFromzone(): void;
    getFromzone(): Zone | undefined;
    setFromzone(value?: Zone): UserJoinedZoneMessage;

    hasCompanion(): boolean;
    clearCompanion(): void;
    getCompanion(): CompanionMessage | undefined;
    setCompanion(value?: CompanionMessage): UserJoinedZoneMessage;
    getVisitcardurl(): string;
    setVisitcardurl(value: string): UserJoinedZoneMessage;
    getUseruuid(): string;
    setUseruuid(value: string): UserJoinedZoneMessage;
    getOutlinecolor(): number;
    setOutlinecolor(value: number): UserJoinedZoneMessage;
    getHasoutline(): boolean;
    setHasoutline(value: boolean): UserJoinedZoneMessage;
    getAvailabilitystatus(): AvailabilityStatus;
    setAvailabilitystatus(value: AvailabilityStatus): UserJoinedZoneMessage;

    getVariablesMap(): jspb.Map<string, string>;
    clearVariablesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserJoinedZoneMessage.AsObject;
    static toObject(includeInstance: boolean, msg: UserJoinedZoneMessage): UserJoinedZoneMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserJoinedZoneMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserJoinedZoneMessage;
    static deserializeBinaryFromReader(message: UserJoinedZoneMessage, reader: jspb.BinaryReader): UserJoinedZoneMessage;
}

export namespace UserJoinedZoneMessage {
    export type AsObject = {
        userid: number,
        userjid: string,
        name: string,
        characterlayersList: Array<CharacterLayerMessage.AsObject>,
        position?: PositionMessage.AsObject,
        fromzone?: Zone.AsObject,
        companion?: CompanionMessage.AsObject,
        visitcardurl: string,
        useruuid: string,
        outlinecolor: number,
        hasoutline: boolean,
        availabilitystatus: AvailabilityStatus,

        variablesMap: Array<[string, string]>,
    }
}

export class UserLeftZoneMessage extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): UserLeftZoneMessage;

    hasTozone(): boolean;
    clearTozone(): void;
    getTozone(): Zone | undefined;
    setTozone(value?: Zone): UserLeftZoneMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserLeftZoneMessage.AsObject;
    static toObject(includeInstance: boolean, msg: UserLeftZoneMessage): UserLeftZoneMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserLeftZoneMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserLeftZoneMessage;
    static deserializeBinaryFromReader(message: UserLeftZoneMessage, reader: jspb.BinaryReader): UserLeftZoneMessage;
}

export namespace UserLeftZoneMessage {
    export type AsObject = {
        userid: number,
        tozone?: Zone.AsObject,
    }
}

export class GroupUpdateZoneMessage extends jspb.Message { 
    getGroupid(): number;
    setGroupid(value: number): GroupUpdateZoneMessage;

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): PointMessage | undefined;
    setPosition(value?: PointMessage): GroupUpdateZoneMessage;
    getGroupsize(): number;
    setGroupsize(value: number): GroupUpdateZoneMessage;

    hasFromzone(): boolean;
    clearFromzone(): void;
    getFromzone(): Zone | undefined;
    setFromzone(value?: Zone): GroupUpdateZoneMessage;
    getLocked(): boolean;
    setLocked(value: boolean): GroupUpdateZoneMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GroupUpdateZoneMessage.AsObject;
    static toObject(includeInstance: boolean, msg: GroupUpdateZoneMessage): GroupUpdateZoneMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GroupUpdateZoneMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GroupUpdateZoneMessage;
    static deserializeBinaryFromReader(message: GroupUpdateZoneMessage, reader: jspb.BinaryReader): GroupUpdateZoneMessage;
}

export namespace GroupUpdateZoneMessage {
    export type AsObject = {
        groupid: number,
        position?: PointMessage.AsObject,
        groupsize: number,
        fromzone?: Zone.AsObject,
        locked: boolean,
    }
}

export class GroupLeftZoneMessage extends jspb.Message { 
    getGroupid(): number;
    setGroupid(value: number): GroupLeftZoneMessage;

    hasTozone(): boolean;
    clearTozone(): void;
    getTozone(): Zone | undefined;
    setTozone(value?: Zone): GroupLeftZoneMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GroupLeftZoneMessage.AsObject;
    static toObject(includeInstance: boolean, msg: GroupLeftZoneMessage): GroupLeftZoneMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GroupLeftZoneMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GroupLeftZoneMessage;
    static deserializeBinaryFromReader(message: GroupLeftZoneMessage, reader: jspb.BinaryReader): GroupLeftZoneMessage;
}

export namespace GroupLeftZoneMessage {
    export type AsObject = {
        groupid: number,
        tozone?: Zone.AsObject,
    }
}

export class PlayerDetailsUpdatedMessage extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): PlayerDetailsUpdatedMessage;

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): SetPlayerDetailsMessage | undefined;
    setDetails(value?: SetPlayerDetailsMessage): PlayerDetailsUpdatedMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayerDetailsUpdatedMessage.AsObject;
    static toObject(includeInstance: boolean, msg: PlayerDetailsUpdatedMessage): PlayerDetailsUpdatedMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayerDetailsUpdatedMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayerDetailsUpdatedMessage;
    static deserializeBinaryFromReader(message: PlayerDetailsUpdatedMessage, reader: jspb.BinaryReader): PlayerDetailsUpdatedMessage;
}

export namespace PlayerDetailsUpdatedMessage {
    export type AsObject = {
        userid: number,
        details?: SetPlayerDetailsMessage.AsObject,
    }
}

export class Zone extends jspb.Message { 
    getX(): number;
    setX(value: number): Zone;
    getY(): number;
    setY(value: number): Zone;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Zone.AsObject;
    static toObject(includeInstance: boolean, msg: Zone): Zone.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Zone, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Zone;
    static deserializeBinaryFromReader(message: Zone, reader: jspb.BinaryReader): Zone;
}

export namespace Zone {
    export type AsObject = {
        x: number,
        y: number,
    }
}

export class ZoneMessage extends jspb.Message { 
    getRoomid(): string;
    setRoomid(value: string): ZoneMessage;
    getX(): number;
    setX(value: number): ZoneMessage;
    getY(): number;
    setY(value: number): ZoneMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZoneMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ZoneMessage): ZoneMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZoneMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZoneMessage;
    static deserializeBinaryFromReader(message: ZoneMessage, reader: jspb.BinaryReader): ZoneMessage;
}

export namespace ZoneMessage {
    export type AsObject = {
        roomid: string,
        x: number,
        y: number,
    }
}

export class RoomMessage extends jspb.Message { 
    getRoomid(): string;
    setRoomid(value: string): RoomMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RoomMessage.AsObject;
    static toObject(includeInstance: boolean, msg: RoomMessage): RoomMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RoomMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RoomMessage;
    static deserializeBinaryFromReader(message: RoomMessage, reader: jspb.BinaryReader): RoomMessage;
}

export namespace RoomMessage {
    export type AsObject = {
        roomid: string,
    }
}

export class PusherToBackMessage extends jspb.Message { 

    hasJoinroommessage(): boolean;
    clearJoinroommessage(): void;
    getJoinroommessage(): JoinRoomMessage | undefined;
    setJoinroommessage(value?: JoinRoomMessage): PusherToBackMessage;

    hasUsermovesmessage(): boolean;
    clearUsermovesmessage(): void;
    getUsermovesmessage(): UserMovesMessage | undefined;
    setUsermovesmessage(value?: UserMovesMessage): PusherToBackMessage;

    hasItemeventmessage(): boolean;
    clearItemeventmessage(): void;
    getItemeventmessage(): ItemEventMessage | undefined;
    setItemeventmessage(value?: ItemEventMessage): PusherToBackMessage;

    hasSetplayerdetailsmessage(): boolean;
    clearSetplayerdetailsmessage(): void;
    getSetplayerdetailsmessage(): SetPlayerDetailsMessage | undefined;
    setSetplayerdetailsmessage(value?: SetPlayerDetailsMessage): PusherToBackMessage;

    hasWebrtcsignaltoservermessage(): boolean;
    clearWebrtcsignaltoservermessage(): void;
    getWebrtcsignaltoservermessage(): WebRtcSignalToServerMessage | undefined;
    setWebrtcsignaltoservermessage(value?: WebRtcSignalToServerMessage): PusherToBackMessage;

    hasWebrtcscreensharingsignaltoservermessage(): boolean;
    clearWebrtcscreensharingsignaltoservermessage(): void;
    getWebrtcscreensharingsignaltoservermessage(): WebRtcSignalToServerMessage | undefined;
    setWebrtcscreensharingsignaltoservermessage(value?: WebRtcSignalToServerMessage): PusherToBackMessage;

    hasReportplayermessage(): boolean;
    clearReportplayermessage(): void;
    getReportplayermessage(): ReportPlayerMessage | undefined;
    setReportplayermessage(value?: ReportPlayerMessage): PusherToBackMessage;

    hasSendusermessage(): boolean;
    clearSendusermessage(): void;
    getSendusermessage(): SendUserMessage | undefined;
    setSendusermessage(value?: SendUserMessage): PusherToBackMessage;

    hasBanusermessage(): boolean;
    clearBanusermessage(): void;
    getBanusermessage(): BanUserMessage | undefined;
    setBanusermessage(value?: BanUserMessage): PusherToBackMessage;

    hasEmotepromptmessage(): boolean;
    clearEmotepromptmessage(): void;
    getEmotepromptmessage(): EmotePromptMessage | undefined;
    setEmotepromptmessage(value?: EmotePromptMessage): PusherToBackMessage;

    hasVariablemessage(): boolean;
    clearVariablemessage(): void;
    getVariablemessage(): VariableMessage | undefined;
    setVariablemessage(value?: VariableMessage): PusherToBackMessage;

    hasFollowrequestmessage(): boolean;
    clearFollowrequestmessage(): void;
    getFollowrequestmessage(): FollowRequestMessage | undefined;
    setFollowrequestmessage(value?: FollowRequestMessage): PusherToBackMessage;

    hasFollowconfirmationmessage(): boolean;
    clearFollowconfirmationmessage(): void;
    getFollowconfirmationmessage(): FollowConfirmationMessage | undefined;
    setFollowconfirmationmessage(value?: FollowConfirmationMessage): PusherToBackMessage;

    hasFollowabortmessage(): boolean;
    clearFollowabortmessage(): void;
    getFollowabortmessage(): FollowAbortMessage | undefined;
    setFollowabortmessage(value?: FollowAbortMessage): PusherToBackMessage;

    hasLockgrouppromptmessage(): boolean;
    clearLockgrouppromptmessage(): void;
    getLockgrouppromptmessage(): LockGroupPromptMessage | undefined;
    setLockgrouppromptmessage(value?: LockGroupPromptMessage): PusherToBackMessage;

    hasQuerymessage(): boolean;
    clearQuerymessage(): void;
    getQuerymessage(): QueryMessage | undefined;
    setQuerymessage(value?: QueryMessage): PusherToBackMessage;

    hasAskpositionmessage(): boolean;
    clearAskpositionmessage(): void;
    getAskpositionmessage(): AskPositionMessage | undefined;
    setAskpositionmessage(value?: AskPositionMessage): PusherToBackMessage;

    hasEditmapcommandwithkeymessage(): boolean;
    clearEditmapcommandwithkeymessage(): void;
    getEditmapcommandwithkeymessage(): EditMapCommandWithKeyMessage | undefined;
    setEditmapcommandwithkeymessage(value?: EditMapCommandWithKeyMessage): PusherToBackMessage;

    getMessageCase(): PusherToBackMessage.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PusherToBackMessage.AsObject;
    static toObject(includeInstance: boolean, msg: PusherToBackMessage): PusherToBackMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PusherToBackMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PusherToBackMessage;
    static deserializeBinaryFromReader(message: PusherToBackMessage, reader: jspb.BinaryReader): PusherToBackMessage;
}

export namespace PusherToBackMessage {
    export type AsObject = {
        joinroommessage?: JoinRoomMessage.AsObject,
        usermovesmessage?: UserMovesMessage.AsObject,
        itemeventmessage?: ItemEventMessage.AsObject,
        setplayerdetailsmessage?: SetPlayerDetailsMessage.AsObject,
        webrtcsignaltoservermessage?: WebRtcSignalToServerMessage.AsObject,
        webrtcscreensharingsignaltoservermessage?: WebRtcSignalToServerMessage.AsObject,
        reportplayermessage?: ReportPlayerMessage.AsObject,
        sendusermessage?: SendUserMessage.AsObject,
        banusermessage?: BanUserMessage.AsObject,
        emotepromptmessage?: EmotePromptMessage.AsObject,
        variablemessage?: VariableMessage.AsObject,
        followrequestmessage?: FollowRequestMessage.AsObject,
        followconfirmationmessage?: FollowConfirmationMessage.AsObject,
        followabortmessage?: FollowAbortMessage.AsObject,
        lockgrouppromptmessage?: LockGroupPromptMessage.AsObject,
        querymessage?: QueryMessage.AsObject,
        askpositionmessage?: AskPositionMessage.AsObject,
        editmapcommandwithkeymessage?: EditMapCommandWithKeyMessage.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        JOINROOMMESSAGE = 1,
        USERMOVESMESSAGE = 2,
        ITEMEVENTMESSAGE = 4,
        SETPLAYERDETAILSMESSAGE = 5,
        WEBRTCSIGNALTOSERVERMESSAGE = 6,
        WEBRTCSCREENSHARINGSIGNALTOSERVERMESSAGE = 7,
        REPORTPLAYERMESSAGE = 10,
        SENDUSERMESSAGE = 12,
        BANUSERMESSAGE = 13,
        EMOTEPROMPTMESSAGE = 14,
        VARIABLEMESSAGE = 15,
        FOLLOWREQUESTMESSAGE = 16,
        FOLLOWCONFIRMATIONMESSAGE = 17,
        FOLLOWABORTMESSAGE = 18,
        LOCKGROUPPROMPTMESSAGE = 19,
        QUERYMESSAGE = 21,
        ASKPOSITIONMESSAGE = 22,
        EDITMAPCOMMANDWITHKEYMESSAGE = 23,
    }

}

export class BatchToPusherMessage extends jspb.Message { 
    clearPayloadList(): void;
    getPayloadList(): Array<SubToPusherMessage>;
    setPayloadList(value: Array<SubToPusherMessage>): BatchToPusherMessage;
    addPayload(value?: SubToPusherMessage, index?: number): SubToPusherMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchToPusherMessage.AsObject;
    static toObject(includeInstance: boolean, msg: BatchToPusherMessage): BatchToPusherMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchToPusherMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchToPusherMessage;
    static deserializeBinaryFromReader(message: BatchToPusherMessage, reader: jspb.BinaryReader): BatchToPusherMessage;
}

export namespace BatchToPusherMessage {
    export type AsObject = {
        payloadList: Array<SubToPusherMessage.AsObject>,
    }
}

export class SubToPusherMessage extends jspb.Message { 

    hasUserjoinedzonemessage(): boolean;
    clearUserjoinedzonemessage(): void;
    getUserjoinedzonemessage(): UserJoinedZoneMessage | undefined;
    setUserjoinedzonemessage(value?: UserJoinedZoneMessage): SubToPusherMessage;

    hasGroupupdatezonemessage(): boolean;
    clearGroupupdatezonemessage(): void;
    getGroupupdatezonemessage(): GroupUpdateZoneMessage | undefined;
    setGroupupdatezonemessage(value?: GroupUpdateZoneMessage): SubToPusherMessage;

    hasUsermovedmessage(): boolean;
    clearUsermovedmessage(): void;
    getUsermovedmessage(): UserMovedMessage | undefined;
    setUsermovedmessage(value?: UserMovedMessage): SubToPusherMessage;

    hasGroupleftzonemessage(): boolean;
    clearGroupleftzonemessage(): void;
    getGroupleftzonemessage(): GroupLeftZoneMessage | undefined;
    setGroupleftzonemessage(value?: GroupLeftZoneMessage): SubToPusherMessage;

    hasUserleftzonemessage(): boolean;
    clearUserleftzonemessage(): void;
    getUserleftzonemessage(): UserLeftZoneMessage | undefined;
    setUserleftzonemessage(value?: UserLeftZoneMessage): SubToPusherMessage;

    hasItemeventmessage(): boolean;
    clearItemeventmessage(): void;
    getItemeventmessage(): ItemEventMessage | undefined;
    setItemeventmessage(value?: ItemEventMessage): SubToPusherMessage;

    hasSendusermessage(): boolean;
    clearSendusermessage(): void;
    getSendusermessage(): SendUserMessage | undefined;
    setSendusermessage(value?: SendUserMessage): SubToPusherMessage;

    hasBanusermessage(): boolean;
    clearBanusermessage(): void;
    getBanusermessage(): BanUserMessage | undefined;
    setBanusermessage(value?: BanUserMessage): SubToPusherMessage;

    hasEmoteeventmessage(): boolean;
    clearEmoteeventmessage(): void;
    getEmoteeventmessage(): EmoteEventMessage | undefined;
    setEmoteeventmessage(value?: EmoteEventMessage): SubToPusherMessage;

    hasErrormessage(): boolean;
    clearErrormessage(): void;
    getErrormessage(): ErrorMessage | undefined;
    setErrormessage(value?: ErrorMessage): SubToPusherMessage;

    hasPlayerdetailsupdatedmessage(): boolean;
    clearPlayerdetailsupdatedmessage(): void;
    getPlayerdetailsupdatedmessage(): PlayerDetailsUpdatedMessage | undefined;
    setPlayerdetailsupdatedmessage(value?: PlayerDetailsUpdatedMessage): SubToPusherMessage;

    getMessageCase(): SubToPusherMessage.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubToPusherMessage.AsObject;
    static toObject(includeInstance: boolean, msg: SubToPusherMessage): SubToPusherMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubToPusherMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubToPusherMessage;
    static deserializeBinaryFromReader(message: SubToPusherMessage, reader: jspb.BinaryReader): SubToPusherMessage;
}

export namespace SubToPusherMessage {
    export type AsObject = {
        userjoinedzonemessage?: UserJoinedZoneMessage.AsObject,
        groupupdatezonemessage?: GroupUpdateZoneMessage.AsObject,
        usermovedmessage?: UserMovedMessage.AsObject,
        groupleftzonemessage?: GroupLeftZoneMessage.AsObject,
        userleftzonemessage?: UserLeftZoneMessage.AsObject,
        itemeventmessage?: ItemEventMessage.AsObject,
        sendusermessage?: SendUserMessage.AsObject,
        banusermessage?: BanUserMessage.AsObject,
        emoteeventmessage?: EmoteEventMessage.AsObject,
        errormessage?: ErrorMessage.AsObject,
        playerdetailsupdatedmessage?: PlayerDetailsUpdatedMessage.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        USERJOINEDZONEMESSAGE = 1,
        GROUPUPDATEZONEMESSAGE = 2,
        USERMOVEDMESSAGE = 3,
        GROUPLEFTZONEMESSAGE = 4,
        USERLEFTZONEMESSAGE = 5,
        ITEMEVENTMESSAGE = 6,
        SENDUSERMESSAGE = 7,
        BANUSERMESSAGE = 8,
        EMOTEEVENTMESSAGE = 9,
        ERRORMESSAGE = 10,
        PLAYERDETAILSUPDATEDMESSAGE = 11,
    }

}

export class BatchToPusherRoomMessage extends jspb.Message { 
    clearPayloadList(): void;
    getPayloadList(): Array<SubToPusherRoomMessage>;
    setPayloadList(value: Array<SubToPusherRoomMessage>): BatchToPusherRoomMessage;
    addPayload(value?: SubToPusherRoomMessage, index?: number): SubToPusherRoomMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchToPusherRoomMessage.AsObject;
    static toObject(includeInstance: boolean, msg: BatchToPusherRoomMessage): BatchToPusherRoomMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchToPusherRoomMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchToPusherRoomMessage;
    static deserializeBinaryFromReader(message: BatchToPusherRoomMessage, reader: jspb.BinaryReader): BatchToPusherRoomMessage;
}

export namespace BatchToPusherRoomMessage {
    export type AsObject = {
        payloadList: Array<SubToPusherRoomMessage.AsObject>,
    }
}

export class SubToPusherRoomMessage extends jspb.Message { 

    hasVariablemessage(): boolean;
    clearVariablemessage(): void;
    getVariablemessage(): VariableWithTagMessage | undefined;
    setVariablemessage(value?: VariableWithTagMessage): SubToPusherRoomMessage;

    hasErrormessage(): boolean;
    clearErrormessage(): void;
    getErrormessage(): ErrorMessage | undefined;
    setErrormessage(value?: ErrorMessage): SubToPusherRoomMessage;

    hasEditmapcommandmessage(): boolean;
    clearEditmapcommandmessage(): void;
    getEditmapcommandmessage(): EditMapCommandMessage | undefined;
    setEditmapcommandmessage(value?: EditMapCommandMessage): SubToPusherRoomMessage;

    hasJoinmucroommessage(): boolean;
    clearJoinmucroommessage(): void;
    getJoinmucroommessage(): JoinMucRoomMessage | undefined;
    setJoinmucroommessage(value?: JoinMucRoomMessage): SubToPusherRoomMessage;

    hasLeavemucroommessage(): boolean;
    clearLeavemucroommessage(): void;
    getLeavemucroommessage(): LeaveMucRoomMessage | undefined;
    setLeavemucroommessage(value?: LeaveMucRoomMessage): SubToPusherRoomMessage;

    getMessageCase(): SubToPusherRoomMessage.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubToPusherRoomMessage.AsObject;
    static toObject(includeInstance: boolean, msg: SubToPusherRoomMessage): SubToPusherRoomMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubToPusherRoomMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubToPusherRoomMessage;
    static deserializeBinaryFromReader(message: SubToPusherRoomMessage, reader: jspb.BinaryReader): SubToPusherRoomMessage;
}

export namespace SubToPusherRoomMessage {
    export type AsObject = {
        variablemessage?: VariableWithTagMessage.AsObject,
        errormessage?: ErrorMessage.AsObject,
        editmapcommandmessage?: EditMapCommandMessage.AsObject,
        joinmucroommessage?: JoinMucRoomMessage.AsObject,
        leavemucroommessage?: LeaveMucRoomMessage.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        VARIABLEMESSAGE = 1,
        ERRORMESSAGE = 2,
        EDITMAPCOMMANDMESSAGE = 3,
        JOINMUCROOMMESSAGE = 4,
        LEAVEMUCROOMMESSAGE = 5,
    }

}

export class UserJoinedRoomMessage extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): UserJoinedRoomMessage;
    getIpaddress(): string;
    setIpaddress(value: string): UserJoinedRoomMessage;
    getName(): string;
    setName(value: string): UserJoinedRoomMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserJoinedRoomMessage.AsObject;
    static toObject(includeInstance: boolean, msg: UserJoinedRoomMessage): UserJoinedRoomMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserJoinedRoomMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserJoinedRoomMessage;
    static deserializeBinaryFromReader(message: UserJoinedRoomMessage, reader: jspb.BinaryReader): UserJoinedRoomMessage;
}

export namespace UserJoinedRoomMessage {
    export type AsObject = {
        uuid: string,
        ipaddress: string,
        name: string,
    }
}

export class UserLeftRoomMessage extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): UserLeftRoomMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserLeftRoomMessage.AsObject;
    static toObject(includeInstance: boolean, msg: UserLeftRoomMessage): UserLeftRoomMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserLeftRoomMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserLeftRoomMessage;
    static deserializeBinaryFromReader(message: UserLeftRoomMessage, reader: jspb.BinaryReader): UserLeftRoomMessage;
}

export namespace UserLeftRoomMessage {
    export type AsObject = {
        uuid: string,
    }
}

export class ServerToAdminClientMessage extends jspb.Message { 

    hasUserjoinedroom(): boolean;
    clearUserjoinedroom(): void;
    getUserjoinedroom(): UserJoinedRoomMessage | undefined;
    setUserjoinedroom(value?: UserJoinedRoomMessage): ServerToAdminClientMessage;

    hasUserleftroom(): boolean;
    clearUserleftroom(): void;
    getUserleftroom(): UserLeftRoomMessage | undefined;
    setUserleftroom(value?: UserLeftRoomMessage): ServerToAdminClientMessage;

    hasErrormessage(): boolean;
    clearErrormessage(): void;
    getErrormessage(): ErrorMessage | undefined;
    setErrormessage(value?: ErrorMessage): ServerToAdminClientMessage;

    getMessageCase(): ServerToAdminClientMessage.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServerToAdminClientMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServerToAdminClientMessage): ServerToAdminClientMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServerToAdminClientMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServerToAdminClientMessage;
    static deserializeBinaryFromReader(message: ServerToAdminClientMessage, reader: jspb.BinaryReader): ServerToAdminClientMessage;
}

export namespace ServerToAdminClientMessage {
    export type AsObject = {
        userjoinedroom?: UserJoinedRoomMessage.AsObject,
        userleftroom?: UserLeftRoomMessage.AsObject,
        errormessage?: ErrorMessage.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        USERJOINEDROOM = 1,
        USERLEFTROOM = 2,
        ERRORMESSAGE = 3,
    }

}

export class AdminPusherToBackMessage extends jspb.Message { 

    hasSubscribetoroom(): boolean;
    clearSubscribetoroom(): void;
    getSubscribetoroom(): string;
    setSubscribetoroom(value: string): AdminPusherToBackMessage;

    getMessageCase(): AdminPusherToBackMessage.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AdminPusherToBackMessage.AsObject;
    static toObject(includeInstance: boolean, msg: AdminPusherToBackMessage): AdminPusherToBackMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AdminPusherToBackMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AdminPusherToBackMessage;
    static deserializeBinaryFromReader(message: AdminPusherToBackMessage, reader: jspb.BinaryReader): AdminPusherToBackMessage;
}

export namespace AdminPusherToBackMessage {
    export type AsObject = {
        subscribetoroom: string,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        SUBSCRIBETOROOM = 1,
    }

}

export class AdminMessage extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): AdminMessage;
    getRecipientuuid(): string;
    setRecipientuuid(value: string): AdminMessage;
    getRoomid(): string;
    setRoomid(value: string): AdminMessage;
    getType(): string;
    setType(value: string): AdminMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AdminMessage.AsObject;
    static toObject(includeInstance: boolean, msg: AdminMessage): AdminMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AdminMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AdminMessage;
    static deserializeBinaryFromReader(message: AdminMessage, reader: jspb.BinaryReader): AdminMessage;
}

export namespace AdminMessage {
    export type AsObject = {
        message: string,
        recipientuuid: string,
        roomid: string,
        type: string,
    }
}

export class AdminRoomMessage extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): AdminRoomMessage;
    getRoomid(): string;
    setRoomid(value: string): AdminRoomMessage;
    getType(): string;
    setType(value: string): AdminRoomMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AdminRoomMessage.AsObject;
    static toObject(includeInstance: boolean, msg: AdminRoomMessage): AdminRoomMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AdminRoomMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AdminRoomMessage;
    static deserializeBinaryFromReader(message: AdminRoomMessage, reader: jspb.BinaryReader): AdminRoomMessage;
}

export namespace AdminRoomMessage {
    export type AsObject = {
        message: string,
        roomid: string,
        type: string,
    }
}

export class AdminGlobalMessage extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): AdminGlobalMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AdminGlobalMessage.AsObject;
    static toObject(includeInstance: boolean, msg: AdminGlobalMessage): AdminGlobalMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AdminGlobalMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AdminGlobalMessage;
    static deserializeBinaryFromReader(message: AdminGlobalMessage, reader: jspb.BinaryReader): AdminGlobalMessage;
}

export namespace AdminGlobalMessage {
    export type AsObject = {
        message: string,
    }
}

export class BanMessage extends jspb.Message { 
    getRecipientuuid(): string;
    setRecipientuuid(value: string): BanMessage;
    getRoomid(): string;
    setRoomid(value: string): BanMessage;
    getType(): string;
    setType(value: string): BanMessage;
    getMessage(): string;
    setMessage(value: string): BanMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BanMessage.AsObject;
    static toObject(includeInstance: boolean, msg: BanMessage): BanMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BanMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BanMessage;
    static deserializeBinaryFromReader(message: BanMessage, reader: jspb.BinaryReader): BanMessage;
}

export namespace BanMessage {
    export type AsObject = {
        recipientuuid: string,
        roomid: string,
        type: string,
        message: string,
    }
}

export class RoomDescription extends jspb.Message { 
    getRoomid(): string;
    setRoomid(value: string): RoomDescription;
    getNbusers(): number;
    setNbusers(value: number): RoomDescription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RoomDescription.AsObject;
    static toObject(includeInstance: boolean, msg: RoomDescription): RoomDescription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RoomDescription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RoomDescription;
    static deserializeBinaryFromReader(message: RoomDescription, reader: jspb.BinaryReader): RoomDescription;
}

export namespace RoomDescription {
    export type AsObject = {
        roomid: string,
        nbusers: number,
    }
}

export class RoomsList extends jspb.Message { 
    clearRoomdescriptionList(): void;
    getRoomdescriptionList(): Array<RoomDescription>;
    setRoomdescriptionList(value: Array<RoomDescription>): RoomsList;
    addRoomdescription(value?: RoomDescription, index?: number): RoomDescription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RoomsList.AsObject;
    static toObject(includeInstance: boolean, msg: RoomsList): RoomsList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RoomsList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RoomsList;
    static deserializeBinaryFromReader(message: RoomsList, reader: jspb.BinaryReader): RoomsList;
}

export namespace RoomsList {
    export type AsObject = {
        roomdescriptionList: Array<RoomDescription.AsObject>,
    }
}

export class EmptyMessage extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmptyMessage.AsObject;
    static toObject(includeInstance: boolean, msg: EmptyMessage): EmptyMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmptyMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmptyMessage;
    static deserializeBinaryFromReader(message: EmptyMessage, reader: jspb.BinaryReader): EmptyMessage;
}

export namespace EmptyMessage {
    export type AsObject = {
    }
}

export class ChatMessagePrompt extends jspb.Message { 
    getRoomid(): string;
    setRoomid(value: string): ChatMessagePrompt;

    hasJoinmucroommessage(): boolean;
    clearJoinmucroommessage(): void;
    getJoinmucroommessage(): JoinMucRoomMessage | undefined;
    setJoinmucroommessage(value?: JoinMucRoomMessage): ChatMessagePrompt;

    hasLeavemucroommessage(): boolean;
    clearLeavemucroommessage(): void;
    getLeavemucroommessage(): LeaveMucRoomMessage | undefined;
    setLeavemucroommessage(value?: LeaveMucRoomMessage): ChatMessagePrompt;

    getMessageCase(): ChatMessagePrompt.MessageCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChatMessagePrompt.AsObject;
    static toObject(includeInstance: boolean, msg: ChatMessagePrompt): ChatMessagePrompt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChatMessagePrompt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChatMessagePrompt;
    static deserializeBinaryFromReader(message: ChatMessagePrompt, reader: jspb.BinaryReader): ChatMessagePrompt;
}

export namespace ChatMessagePrompt {
    export type AsObject = {
        roomid: string,
        joinmucroommessage?: JoinMucRoomMessage.AsObject,
        leavemucroommessage?: LeaveMucRoomMessage.AsObject,
    }

    export enum MessageCase {
        MESSAGE_NOT_SET = 0,
        JOINMUCROOMMESSAGE = 2,
        LEAVEMUCROOMMESSAGE = 3,
    }

}

export class JoinMucRoomMessage extends jspb.Message { 

    hasMucroomdefinitionmessage(): boolean;
    clearMucroomdefinitionmessage(): void;
    getMucroomdefinitionmessage(): MucRoomDefinitionMessage | undefined;
    setMucroomdefinitionmessage(value?: MucRoomDefinitionMessage): JoinMucRoomMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JoinMucRoomMessage.AsObject;
    static toObject(includeInstance: boolean, msg: JoinMucRoomMessage): JoinMucRoomMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JoinMucRoomMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JoinMucRoomMessage;
    static deserializeBinaryFromReader(message: JoinMucRoomMessage, reader: jspb.BinaryReader): JoinMucRoomMessage;
}

export namespace JoinMucRoomMessage {
    export type AsObject = {
        mucroomdefinitionmessage?: MucRoomDefinitionMessage.AsObject,
    }
}

export class LeaveMucRoomMessage extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): LeaveMucRoomMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LeaveMucRoomMessage.AsObject;
    static toObject(includeInstance: boolean, msg: LeaveMucRoomMessage): LeaveMucRoomMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LeaveMucRoomMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LeaveMucRoomMessage;
    static deserializeBinaryFromReader(message: LeaveMucRoomMessage, reader: jspb.BinaryReader): LeaveMucRoomMessage;
}

export namespace LeaveMucRoomMessage {
    export type AsObject = {
        url: string,
    }
}

export class MucRoomDefinitionMessage extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): MucRoomDefinitionMessage;
    getName(): string;
    setName(value: string): MucRoomDefinitionMessage;
    getType(): string;
    setType(value: string): MucRoomDefinitionMessage;
    getSubscribe(): boolean;
    setSubscribe(value: boolean): MucRoomDefinitionMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MucRoomDefinitionMessage.AsObject;
    static toObject(includeInstance: boolean, msg: MucRoomDefinitionMessage): MucRoomDefinitionMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MucRoomDefinitionMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MucRoomDefinitionMessage;
    static deserializeBinaryFromReader(message: MucRoomDefinitionMessage, reader: jspb.BinaryReader): MucRoomDefinitionMessage;
}

export namespace MucRoomDefinitionMessage {
    export type AsObject = {
        url: string,
        name: string,
        type: string,
        subscribe: boolean,
    }
}

export class XmppSettingsMessage extends jspb.Message { 
    getJid(): string;
    setJid(value: string): XmppSettingsMessage;
    getConferencedomain(): string;
    setConferencedomain(value: string): XmppSettingsMessage;
    clearRoomsList(): void;
    getRoomsList(): Array<MucRoomDefinitionMessage>;
    setRoomsList(value: Array<MucRoomDefinitionMessage>): XmppSettingsMessage;
    addRooms(value?: MucRoomDefinitionMessage, index?: number): MucRoomDefinitionMessage;
    getJabberid(): string;
    setJabberid(value: string): XmppSettingsMessage;
    getJabberpassword(): string;
    setJabberpassword(value: string): XmppSettingsMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): XmppSettingsMessage.AsObject;
    static toObject(includeInstance: boolean, msg: XmppSettingsMessage): XmppSettingsMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: XmppSettingsMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): XmppSettingsMessage;
    static deserializeBinaryFromReader(message: XmppSettingsMessage, reader: jspb.BinaryReader): XmppSettingsMessage;
}

export namespace XmppSettingsMessage {
    export type AsObject = {
        jid: string,
        conferencedomain: string,
        roomsList: Array<MucRoomDefinitionMessage.AsObject>,
        jabberid: string,
        jabberpassword: string,
    }
}

export class BanUserByUuidMessage extends jspb.Message { 
    getPlayuri(): string;
    setPlayuri(value: string): BanUserByUuidMessage;
    getUuidtoban(): string;
    setUuidtoban(value: string): BanUserByUuidMessage;
    getName(): string;
    setName(value: string): BanUserByUuidMessage;
    getMessage(): string;
    setMessage(value: string): BanUserByUuidMessage;
    getByuseremail(): string;
    setByuseremail(value: string): BanUserByUuidMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BanUserByUuidMessage.AsObject;
    static toObject(includeInstance: boolean, msg: BanUserByUuidMessage): BanUserByUuidMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BanUserByUuidMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BanUserByUuidMessage;
    static deserializeBinaryFromReader(message: BanUserByUuidMessage, reader: jspb.BinaryReader): BanUserByUuidMessage;
}

export namespace BanUserByUuidMessage {
    export type AsObject = {
        playuri: string,
        uuidtoban: string,
        name: string,
        message: string,
        byuseremail: string,
    }
}

export enum AvailabilityStatus {
    UNCHANGED = 0,
    ONLINE = 1,
    SILENT = 2,
    AWAY = 3,
    JITSI = 4,
    BBB = 5,
    DENY_PROXIMITY_MEETING = 6,
}
