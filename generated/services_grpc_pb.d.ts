// package: 
// file: services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as services_pb from "./services_pb";
import * as messages_pb from "./messages_pb";

interface IRoomManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    joinRoom: IRoomManagerService_IjoinRoom;
    listenZone: IRoomManagerService_IlistenZone;
    listenRoom: IRoomManagerService_IlistenRoom;
    adminRoom: IRoomManagerService_IadminRoom;
    sendAdminMessage: IRoomManagerService_IsendAdminMessage;
    sendGlobalAdminMessage: IRoomManagerService_IsendGlobalAdminMessage;
    ban: IRoomManagerService_Iban;
    sendAdminMessageToRoom: IRoomManagerService_IsendAdminMessageToRoom;
    sendWorldFullWarningToRoom: IRoomManagerService_IsendWorldFullWarningToRoom;
    sendRefreshRoomPrompt: IRoomManagerService_IsendRefreshRoomPrompt;
    sendChatMessagePrompt: IRoomManagerService_IsendChatMessagePrompt;
    getRooms: IRoomManagerService_IgetRooms;
    ping: IRoomManagerService_Iping;
}

interface IRoomManagerService_IjoinRoom extends grpc.MethodDefinition<messages_pb.PusherToBackMessage, messages_pb.ServerToClientMessage> {
    path: "/RoomManager/joinRoom";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<messages_pb.PusherToBackMessage>;
    requestDeserialize: grpc.deserialize<messages_pb.PusherToBackMessage>;
    responseSerialize: grpc.serialize<messages_pb.ServerToClientMessage>;
    responseDeserialize: grpc.deserialize<messages_pb.ServerToClientMessage>;
}
interface IRoomManagerService_IlistenZone extends grpc.MethodDefinition<messages_pb.ZoneMessage, messages_pb.BatchToPusherMessage> {
    path: "/RoomManager/listenZone";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<messages_pb.ZoneMessage>;
    requestDeserialize: grpc.deserialize<messages_pb.ZoneMessage>;
    responseSerialize: grpc.serialize<messages_pb.BatchToPusherMessage>;
    responseDeserialize: grpc.deserialize<messages_pb.BatchToPusherMessage>;
}
interface IRoomManagerService_IlistenRoom extends grpc.MethodDefinition<messages_pb.RoomMessage, messages_pb.BatchToPusherRoomMessage> {
    path: "/RoomManager/listenRoom";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<messages_pb.RoomMessage>;
    requestDeserialize: grpc.deserialize<messages_pb.RoomMessage>;
    responseSerialize: grpc.serialize<messages_pb.BatchToPusherRoomMessage>;
    responseDeserialize: grpc.deserialize<messages_pb.BatchToPusherRoomMessage>;
}
interface IRoomManagerService_IadminRoom extends grpc.MethodDefinition<messages_pb.AdminPusherToBackMessage, messages_pb.ServerToAdminClientMessage> {
    path: "/RoomManager/adminRoom";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<messages_pb.AdminPusherToBackMessage>;
    requestDeserialize: grpc.deserialize<messages_pb.AdminPusherToBackMessage>;
    responseSerialize: grpc.serialize<messages_pb.ServerToAdminClientMessage>;
    responseDeserialize: grpc.deserialize<messages_pb.ServerToAdminClientMessage>;
}
interface IRoomManagerService_IsendAdminMessage extends grpc.MethodDefinition<messages_pb.AdminMessage, messages_pb.EmptyMessage> {
    path: "/RoomManager/sendAdminMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.AdminMessage>;
    requestDeserialize: grpc.deserialize<messages_pb.AdminMessage>;
    responseSerialize: grpc.serialize<messages_pb.EmptyMessage>;
    responseDeserialize: grpc.deserialize<messages_pb.EmptyMessage>;
}
interface IRoomManagerService_IsendGlobalAdminMessage extends grpc.MethodDefinition<messages_pb.AdminGlobalMessage, messages_pb.EmptyMessage> {
    path: "/RoomManager/sendGlobalAdminMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.AdminGlobalMessage>;
    requestDeserialize: grpc.deserialize<messages_pb.AdminGlobalMessage>;
    responseSerialize: grpc.serialize<messages_pb.EmptyMessage>;
    responseDeserialize: grpc.deserialize<messages_pb.EmptyMessage>;
}
interface IRoomManagerService_Iban extends grpc.MethodDefinition<messages_pb.BanMessage, messages_pb.EmptyMessage> {
    path: "/RoomManager/ban";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.BanMessage>;
    requestDeserialize: grpc.deserialize<messages_pb.BanMessage>;
    responseSerialize: grpc.serialize<messages_pb.EmptyMessage>;
    responseDeserialize: grpc.deserialize<messages_pb.EmptyMessage>;
}
interface IRoomManagerService_IsendAdminMessageToRoom extends grpc.MethodDefinition<messages_pb.AdminRoomMessage, messages_pb.EmptyMessage> {
    path: "/RoomManager/sendAdminMessageToRoom";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.AdminRoomMessage>;
    requestDeserialize: grpc.deserialize<messages_pb.AdminRoomMessage>;
    responseSerialize: grpc.serialize<messages_pb.EmptyMessage>;
    responseDeserialize: grpc.deserialize<messages_pb.EmptyMessage>;
}
interface IRoomManagerService_IsendWorldFullWarningToRoom extends grpc.MethodDefinition<messages_pb.WorldFullWarningToRoomMessage, messages_pb.EmptyMessage> {
    path: "/RoomManager/sendWorldFullWarningToRoom";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.WorldFullWarningToRoomMessage>;
    requestDeserialize: grpc.deserialize<messages_pb.WorldFullWarningToRoomMessage>;
    responseSerialize: grpc.serialize<messages_pb.EmptyMessage>;
    responseDeserialize: grpc.deserialize<messages_pb.EmptyMessage>;
}
interface IRoomManagerService_IsendRefreshRoomPrompt extends grpc.MethodDefinition<messages_pb.RefreshRoomPromptMessage, messages_pb.EmptyMessage> {
    path: "/RoomManager/sendRefreshRoomPrompt";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.RefreshRoomPromptMessage>;
    requestDeserialize: grpc.deserialize<messages_pb.RefreshRoomPromptMessage>;
    responseSerialize: grpc.serialize<messages_pb.EmptyMessage>;
    responseDeserialize: grpc.deserialize<messages_pb.EmptyMessage>;
}
interface IRoomManagerService_IsendChatMessagePrompt extends grpc.MethodDefinition<messages_pb.ChatMessagePrompt, messages_pb.EmptyMessage> {
    path: "/RoomManager/sendChatMessagePrompt";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.ChatMessagePrompt>;
    requestDeserialize: grpc.deserialize<messages_pb.ChatMessagePrompt>;
    responseSerialize: grpc.serialize<messages_pb.EmptyMessage>;
    responseDeserialize: grpc.deserialize<messages_pb.EmptyMessage>;
}
interface IRoomManagerService_IgetRooms extends grpc.MethodDefinition<messages_pb.EmptyMessage, messages_pb.RoomsList> {
    path: "/RoomManager/getRooms";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.EmptyMessage>;
    requestDeserialize: grpc.deserialize<messages_pb.EmptyMessage>;
    responseSerialize: grpc.serialize<messages_pb.RoomsList>;
    responseDeserialize: grpc.deserialize<messages_pb.RoomsList>;
}
interface IRoomManagerService_Iping extends grpc.MethodDefinition<messages_pb.PingMessage, messages_pb.PingMessage> {
    path: "/RoomManager/ping";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.PingMessage>;
    requestDeserialize: grpc.deserialize<messages_pb.PingMessage>;
    responseSerialize: grpc.serialize<messages_pb.PingMessage>;
    responseDeserialize: grpc.deserialize<messages_pb.PingMessage>;
}

export const RoomManagerService: IRoomManagerService;

export interface IRoomManagerServer extends grpc.UntypedServiceImplementation {
    joinRoom: grpc.handleBidiStreamingCall<messages_pb.PusherToBackMessage, messages_pb.ServerToClientMessage>;
    listenZone: grpc.handleServerStreamingCall<messages_pb.ZoneMessage, messages_pb.BatchToPusherMessage>;
    listenRoom: grpc.handleServerStreamingCall<messages_pb.RoomMessage, messages_pb.BatchToPusherRoomMessage>;
    adminRoom: grpc.handleBidiStreamingCall<messages_pb.AdminPusherToBackMessage, messages_pb.ServerToAdminClientMessage>;
    sendAdminMessage: grpc.handleUnaryCall<messages_pb.AdminMessage, messages_pb.EmptyMessage>;
    sendGlobalAdminMessage: grpc.handleUnaryCall<messages_pb.AdminGlobalMessage, messages_pb.EmptyMessage>;
    ban: grpc.handleUnaryCall<messages_pb.BanMessage, messages_pb.EmptyMessage>;
    sendAdminMessageToRoom: grpc.handleUnaryCall<messages_pb.AdminRoomMessage, messages_pb.EmptyMessage>;
    sendWorldFullWarningToRoom: grpc.handleUnaryCall<messages_pb.WorldFullWarningToRoomMessage, messages_pb.EmptyMessage>;
    sendRefreshRoomPrompt: grpc.handleUnaryCall<messages_pb.RefreshRoomPromptMessage, messages_pb.EmptyMessage>;
    sendChatMessagePrompt: grpc.handleUnaryCall<messages_pb.ChatMessagePrompt, messages_pb.EmptyMessage>;
    getRooms: grpc.handleUnaryCall<messages_pb.EmptyMessage, messages_pb.RoomsList>;
    ping: grpc.handleUnaryCall<messages_pb.PingMessage, messages_pb.PingMessage>;
}

export interface IRoomManagerClient {
    joinRoom(): grpc.ClientDuplexStream<messages_pb.PusherToBackMessage, messages_pb.ServerToClientMessage>;
    joinRoom(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<messages_pb.PusherToBackMessage, messages_pb.ServerToClientMessage>;
    joinRoom(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<messages_pb.PusherToBackMessage, messages_pb.ServerToClientMessage>;
    listenZone(request: messages_pb.ZoneMessage, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_pb.BatchToPusherMessage>;
    listenZone(request: messages_pb.ZoneMessage, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_pb.BatchToPusherMessage>;
    listenRoom(request: messages_pb.RoomMessage, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_pb.BatchToPusherRoomMessage>;
    listenRoom(request: messages_pb.RoomMessage, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_pb.BatchToPusherRoomMessage>;
    adminRoom(): grpc.ClientDuplexStream<messages_pb.AdminPusherToBackMessage, messages_pb.ServerToAdminClientMessage>;
    adminRoom(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<messages_pb.AdminPusherToBackMessage, messages_pb.ServerToAdminClientMessage>;
    adminRoom(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<messages_pb.AdminPusherToBackMessage, messages_pb.ServerToAdminClientMessage>;
    sendAdminMessage(request: messages_pb.AdminMessage, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    sendAdminMessage(request: messages_pb.AdminMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    sendAdminMessage(request: messages_pb.AdminMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    sendGlobalAdminMessage(request: messages_pb.AdminGlobalMessage, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    sendGlobalAdminMessage(request: messages_pb.AdminGlobalMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    sendGlobalAdminMessage(request: messages_pb.AdminGlobalMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    ban(request: messages_pb.BanMessage, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    ban(request: messages_pb.BanMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    ban(request: messages_pb.BanMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    sendAdminMessageToRoom(request: messages_pb.AdminRoomMessage, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    sendAdminMessageToRoom(request: messages_pb.AdminRoomMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    sendAdminMessageToRoom(request: messages_pb.AdminRoomMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    sendWorldFullWarningToRoom(request: messages_pb.WorldFullWarningToRoomMessage, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    sendWorldFullWarningToRoom(request: messages_pb.WorldFullWarningToRoomMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    sendWorldFullWarningToRoom(request: messages_pb.WorldFullWarningToRoomMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    sendRefreshRoomPrompt(request: messages_pb.RefreshRoomPromptMessage, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    sendRefreshRoomPrompt(request: messages_pb.RefreshRoomPromptMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    sendRefreshRoomPrompt(request: messages_pb.RefreshRoomPromptMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    sendChatMessagePrompt(request: messages_pb.ChatMessagePrompt, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    sendChatMessagePrompt(request: messages_pb.ChatMessagePrompt, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    sendChatMessagePrompt(request: messages_pb.ChatMessagePrompt, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    getRooms(request: messages_pb.EmptyMessage, callback: (error: grpc.ServiceError | null, response: messages_pb.RoomsList) => void): grpc.ClientUnaryCall;
    getRooms(request: messages_pb.EmptyMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.RoomsList) => void): grpc.ClientUnaryCall;
    getRooms(request: messages_pb.EmptyMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.RoomsList) => void): grpc.ClientUnaryCall;
    ping(request: messages_pb.PingMessage, callback: (error: grpc.ServiceError | null, response: messages_pb.PingMessage) => void): grpc.ClientUnaryCall;
    ping(request: messages_pb.PingMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.PingMessage) => void): grpc.ClientUnaryCall;
    ping(request: messages_pb.PingMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.PingMessage) => void): grpc.ClientUnaryCall;
}

export class RoomManagerClient extends grpc.Client implements IRoomManagerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public joinRoom(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<messages_pb.PusherToBackMessage, messages_pb.ServerToClientMessage>;
    public joinRoom(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<messages_pb.PusherToBackMessage, messages_pb.ServerToClientMessage>;
    public listenZone(request: messages_pb.ZoneMessage, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_pb.BatchToPusherMessage>;
    public listenZone(request: messages_pb.ZoneMessage, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_pb.BatchToPusherMessage>;
    public listenRoom(request: messages_pb.RoomMessage, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_pb.BatchToPusherRoomMessage>;
    public listenRoom(request: messages_pb.RoomMessage, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_pb.BatchToPusherRoomMessage>;
    public adminRoom(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<messages_pb.AdminPusherToBackMessage, messages_pb.ServerToAdminClientMessage>;
    public adminRoom(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<messages_pb.AdminPusherToBackMessage, messages_pb.ServerToAdminClientMessage>;
    public sendAdminMessage(request: messages_pb.AdminMessage, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    public sendAdminMessage(request: messages_pb.AdminMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    public sendAdminMessage(request: messages_pb.AdminMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    public sendGlobalAdminMessage(request: messages_pb.AdminGlobalMessage, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    public sendGlobalAdminMessage(request: messages_pb.AdminGlobalMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    public sendGlobalAdminMessage(request: messages_pb.AdminGlobalMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    public ban(request: messages_pb.BanMessage, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    public ban(request: messages_pb.BanMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    public ban(request: messages_pb.BanMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    public sendAdminMessageToRoom(request: messages_pb.AdminRoomMessage, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    public sendAdminMessageToRoom(request: messages_pb.AdminRoomMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    public sendAdminMessageToRoom(request: messages_pb.AdminRoomMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    public sendWorldFullWarningToRoom(request: messages_pb.WorldFullWarningToRoomMessage, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    public sendWorldFullWarningToRoom(request: messages_pb.WorldFullWarningToRoomMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    public sendWorldFullWarningToRoom(request: messages_pb.WorldFullWarningToRoomMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    public sendRefreshRoomPrompt(request: messages_pb.RefreshRoomPromptMessage, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    public sendRefreshRoomPrompt(request: messages_pb.RefreshRoomPromptMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    public sendRefreshRoomPrompt(request: messages_pb.RefreshRoomPromptMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    public sendChatMessagePrompt(request: messages_pb.ChatMessagePrompt, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    public sendChatMessagePrompt(request: messages_pb.ChatMessagePrompt, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    public sendChatMessagePrompt(request: messages_pb.ChatMessagePrompt, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.EmptyMessage) => void): grpc.ClientUnaryCall;
    public getRooms(request: messages_pb.EmptyMessage, callback: (error: grpc.ServiceError | null, response: messages_pb.RoomsList) => void): grpc.ClientUnaryCall;
    public getRooms(request: messages_pb.EmptyMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.RoomsList) => void): grpc.ClientUnaryCall;
    public getRooms(request: messages_pb.EmptyMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.RoomsList) => void): grpc.ClientUnaryCall;
    public ping(request: messages_pb.PingMessage, callback: (error: grpc.ServiceError | null, response: messages_pb.PingMessage) => void): grpc.ClientUnaryCall;
    public ping(request: messages_pb.PingMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.PingMessage) => void): grpc.ClientUnaryCall;
    public ping(request: messages_pb.PingMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.PingMessage) => void): grpc.ClientUnaryCall;
}

interface IMapStorageService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    ping: IMapStorageService_Iping;
    handleEditMapCommandWithKeyMessage: IMapStorageService_IhandleEditMapCommandWithKeyMessage;
}

interface IMapStorageService_Iping extends grpc.MethodDefinition<messages_pb.PingMessage, messages_pb.PingMessage> {
    path: "/MapStorage/ping";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.PingMessage>;
    requestDeserialize: grpc.deserialize<messages_pb.PingMessage>;
    responseSerialize: grpc.serialize<messages_pb.PingMessage>;
    responseDeserialize: grpc.deserialize<messages_pb.PingMessage>;
}
interface IMapStorageService_IhandleEditMapCommandWithKeyMessage extends grpc.MethodDefinition<messages_pb.EditMapCommandWithKeyMessage, messages_pb.EditMapCommandMessage> {
    path: "/MapStorage/handleEditMapCommandWithKeyMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_pb.EditMapCommandWithKeyMessage>;
    requestDeserialize: grpc.deserialize<messages_pb.EditMapCommandWithKeyMessage>;
    responseSerialize: grpc.serialize<messages_pb.EditMapCommandMessage>;
    responseDeserialize: grpc.deserialize<messages_pb.EditMapCommandMessage>;
}

export const MapStorageService: IMapStorageService;

export interface IMapStorageServer extends grpc.UntypedServiceImplementation {
    ping: grpc.handleUnaryCall<messages_pb.PingMessage, messages_pb.PingMessage>;
    handleEditMapCommandWithKeyMessage: grpc.handleUnaryCall<messages_pb.EditMapCommandWithKeyMessage, messages_pb.EditMapCommandMessage>;
}

export interface IMapStorageClient {
    ping(request: messages_pb.PingMessage, callback: (error: grpc.ServiceError | null, response: messages_pb.PingMessage) => void): grpc.ClientUnaryCall;
    ping(request: messages_pb.PingMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.PingMessage) => void): grpc.ClientUnaryCall;
    ping(request: messages_pb.PingMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.PingMessage) => void): grpc.ClientUnaryCall;
    handleEditMapCommandWithKeyMessage(request: messages_pb.EditMapCommandWithKeyMessage, callback: (error: grpc.ServiceError | null, response: messages_pb.EditMapCommandMessage) => void): grpc.ClientUnaryCall;
    handleEditMapCommandWithKeyMessage(request: messages_pb.EditMapCommandWithKeyMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.EditMapCommandMessage) => void): grpc.ClientUnaryCall;
    handleEditMapCommandWithKeyMessage(request: messages_pb.EditMapCommandWithKeyMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.EditMapCommandMessage) => void): grpc.ClientUnaryCall;
}

export class MapStorageClient extends grpc.Client implements IMapStorageClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public ping(request: messages_pb.PingMessage, callback: (error: grpc.ServiceError | null, response: messages_pb.PingMessage) => void): grpc.ClientUnaryCall;
    public ping(request: messages_pb.PingMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.PingMessage) => void): grpc.ClientUnaryCall;
    public ping(request: messages_pb.PingMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.PingMessage) => void): grpc.ClientUnaryCall;
    public handleEditMapCommandWithKeyMessage(request: messages_pb.EditMapCommandWithKeyMessage, callback: (error: grpc.ServiceError | null, response: messages_pb.EditMapCommandMessage) => void): grpc.ClientUnaryCall;
    public handleEditMapCommandWithKeyMessage(request: messages_pb.EditMapCommandWithKeyMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_pb.EditMapCommandMessage) => void): grpc.ClientUnaryCall;
    public handleEditMapCommandWithKeyMessage(request: messages_pb.EditMapCommandWithKeyMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_pb.EditMapCommandMessage) => void): grpc.ClientUnaryCall;
}
