// package: chat
// file: chat.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as chat_pb from "./chat_pb";

interface IChatService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IChatService_ICreateUser;
    getUser: IChatService_IGetUser;
    getAllUsers: IChatService_IGetAllUsers;
    updateUser: IChatService_IUpdateUser;
    deleteUser: IChatService_IDeleteUser;
    messageUser: IChatService_IMessageUser;
    subscribeUserMessages: IChatService_ISubscribeUserMessages;
}

interface IChatService_ICreateUser extends grpc.MethodDefinition<chat_pb.CreateUserRequest, chat_pb.Void> {
    path: string; // "/chat.Chat/CreateUser"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<chat_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<chat_pb.Void>;
    responseDeserialize: grpc.deserialize<chat_pb.Void>;
}
interface IChatService_IGetUser extends grpc.MethodDefinition<chat_pb.GetUserRequest, chat_pb.User> {
    path: string; // "/chat.Chat/GetUser"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<chat_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<chat_pb.User>;
    responseDeserialize: grpc.deserialize<chat_pb.User>;
}
interface IChatService_IGetAllUsers extends grpc.MethodDefinition<chat_pb.Void, chat_pb.UserList> {
    path: string; // "/chat.Chat/GetAllUsers"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_pb.Void>;
    requestDeserialize: grpc.deserialize<chat_pb.Void>;
    responseSerialize: grpc.serialize<chat_pb.UserList>;
    responseDeserialize: grpc.deserialize<chat_pb.UserList>;
}
interface IChatService_IUpdateUser extends grpc.MethodDefinition<chat_pb.UpdateUserRequest, chat_pb.Void> {
    path: string; // "/chat.Chat/UpdateUser"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_pb.UpdateUserRequest>;
    requestDeserialize: grpc.deserialize<chat_pb.UpdateUserRequest>;
    responseSerialize: grpc.serialize<chat_pb.Void>;
    responseDeserialize: grpc.deserialize<chat_pb.Void>;
}
interface IChatService_IDeleteUser extends grpc.MethodDefinition<chat_pb.DeleteUserRequest, chat_pb.Void> {
    path: string; // "/chat.Chat/DeleteUser"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_pb.DeleteUserRequest>;
    requestDeserialize: grpc.deserialize<chat_pb.DeleteUserRequest>;
    responseSerialize: grpc.serialize<chat_pb.Void>;
    responseDeserialize: grpc.deserialize<chat_pb.Void>;
}
interface IChatService_IMessageUser extends grpc.MethodDefinition<chat_pb.SendMessage, chat_pb.Void> {
    path: string; // "/chat.Chat/MessageUser"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_pb.SendMessage>;
    requestDeserialize: grpc.deserialize<chat_pb.SendMessage>;
    responseSerialize: grpc.serialize<chat_pb.Void>;
    responseDeserialize: grpc.deserialize<chat_pb.Void>;
}
interface IChatService_ISubscribeUserMessages extends grpc.MethodDefinition<chat_pb.GetUserRequest, chat_pb.Message> {
    path: string; // "/chat.Chat/SubscribeUserMessages"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<chat_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<chat_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<chat_pb.Message>;
    responseDeserialize: grpc.deserialize<chat_pb.Message>;
}

export const ChatService: IChatService;

export interface IChatServer {
    createUser: grpc.handleUnaryCall<chat_pb.CreateUserRequest, chat_pb.Void>;
    getUser: grpc.handleUnaryCall<chat_pb.GetUserRequest, chat_pb.User>;
    getAllUsers: grpc.handleUnaryCall<chat_pb.Void, chat_pb.UserList>;
    updateUser: grpc.handleUnaryCall<chat_pb.UpdateUserRequest, chat_pb.Void>;
    deleteUser: grpc.handleUnaryCall<chat_pb.DeleteUserRequest, chat_pb.Void>;
    messageUser: grpc.handleUnaryCall<chat_pb.SendMessage, chat_pb.Void>;
    subscribeUserMessages: grpc.handleServerStreamingCall<chat_pb.GetUserRequest, chat_pb.Message>;
}

export interface IChatClient {
    createUser(request: chat_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    createUser(request: chat_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    createUser(request: chat_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    getUser(request: chat_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: chat_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: chat_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.User) => void): grpc.ClientUnaryCall;
    getAllUsers(request: chat_pb.Void, callback: (error: grpc.ServiceError | null, response: chat_pb.UserList) => void): grpc.ClientUnaryCall;
    getAllUsers(request: chat_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.UserList) => void): grpc.ClientUnaryCall;
    getAllUsers(request: chat_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.UserList) => void): grpc.ClientUnaryCall;
    updateUser(request: chat_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    updateUser(request: chat_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    updateUser(request: chat_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    deleteUser(request: chat_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    deleteUser(request: chat_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    deleteUser(request: chat_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    messageUser(request: chat_pb.SendMessage, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    messageUser(request: chat_pb.SendMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    messageUser(request: chat_pb.SendMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    subscribeUserMessages(request: chat_pb.GetUserRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_pb.Message>;
    subscribeUserMessages(request: chat_pb.GetUserRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_pb.Message>;
}

export class ChatClient extends grpc.Client implements IChatClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createUser(request: chat_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    public createUser(request: chat_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    public createUser(request: chat_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    public getUser(request: chat_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: chat_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: chat_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.User) => void): grpc.ClientUnaryCall;
    public getAllUsers(request: chat_pb.Void, callback: (error: grpc.ServiceError | null, response: chat_pb.UserList) => void): grpc.ClientUnaryCall;
    public getAllUsers(request: chat_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.UserList) => void): grpc.ClientUnaryCall;
    public getAllUsers(request: chat_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.UserList) => void): grpc.ClientUnaryCall;
    public updateUser(request: chat_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    public updateUser(request: chat_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    public updateUser(request: chat_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    public deleteUser(request: chat_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    public deleteUser(request: chat_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    public deleteUser(request: chat_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    public messageUser(request: chat_pb.SendMessage, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    public messageUser(request: chat_pb.SendMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    public messageUser(request: chat_pb.SendMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.Void) => void): grpc.ClientUnaryCall;
    public subscribeUserMessages(request: chat_pb.GetUserRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_pb.Message>;
    public subscribeUserMessages(request: chat_pb.GetUserRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_pb.Message>;
}
