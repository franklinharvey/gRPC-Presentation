// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var chat_pb = require('./chat_pb.js');

function serialize_chat_CreateUserRequest(arg) {
  if (!(arg instanceof chat_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type chat.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_CreateUserRequest(buffer_arg) {
  return chat_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_DeleteUserRequest(arg) {
  if (!(arg instanceof chat_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type chat.DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_DeleteUserRequest(buffer_arg) {
  return chat_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_GetUserRequest(arg) {
  if (!(arg instanceof chat_pb.GetUserRequest)) {
    throw new Error('Expected argument of type chat.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_GetUserRequest(buffer_arg) {
  return chat_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_Message(arg) {
  if (!(arg instanceof chat_pb.Message)) {
    throw new Error('Expected argument of type chat.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_Message(buffer_arg) {
  return chat_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_SendMessage(arg) {
  if (!(arg instanceof chat_pb.SendMessage)) {
    throw new Error('Expected argument of type chat.SendMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_SendMessage(buffer_arg) {
  return chat_pb.SendMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_UpdateUserRequest(arg) {
  if (!(arg instanceof chat_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type chat.UpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_UpdateUserRequest(buffer_arg) {
  return chat_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_User(arg) {
  if (!(arg instanceof chat_pb.User)) {
    throw new Error('Expected argument of type chat.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_User(buffer_arg) {
  return chat_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_UserList(arg) {
  if (!(arg instanceof chat_pb.UserList)) {
    throw new Error('Expected argument of type chat.UserList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_UserList(buffer_arg) {
  return chat_pb.UserList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_Void(arg) {
  if (!(arg instanceof chat_pb.Void)) {
    throw new Error('Expected argument of type chat.Void');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_Void(buffer_arg) {
  return chat_pb.Void.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatService = exports.ChatService = {
  createUser: {
    path: '/chat.Chat/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.CreateUserRequest,
    responseType: chat_pb.Void,
    requestSerialize: serialize_chat_CreateUserRequest,
    requestDeserialize: deserialize_chat_CreateUserRequest,
    responseSerialize: serialize_chat_Void,
    responseDeserialize: deserialize_chat_Void,
  },
  getUser: {
    path: '/chat.Chat/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.GetUserRequest,
    responseType: chat_pb.User,
    requestSerialize: serialize_chat_GetUserRequest,
    requestDeserialize: deserialize_chat_GetUserRequest,
    responseSerialize: serialize_chat_User,
    responseDeserialize: deserialize_chat_User,
  },
  getAllUsers: {
    path: '/chat.Chat/GetAllUsers',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.Void,
    responseType: chat_pb.UserList,
    requestSerialize: serialize_chat_Void,
    requestDeserialize: deserialize_chat_Void,
    responseSerialize: serialize_chat_UserList,
    responseDeserialize: deserialize_chat_UserList,
  },
  updateUser: {
    path: '/chat.Chat/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.UpdateUserRequest,
    responseType: chat_pb.Void,
    requestSerialize: serialize_chat_UpdateUserRequest,
    requestDeserialize: deserialize_chat_UpdateUserRequest,
    responseSerialize: serialize_chat_Void,
    responseDeserialize: deserialize_chat_Void,
  },
  deleteUser: {
    path: '/chat.Chat/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.DeleteUserRequest,
    responseType: chat_pb.Void,
    requestSerialize: serialize_chat_DeleteUserRequest,
    requestDeserialize: deserialize_chat_DeleteUserRequest,
    responseSerialize: serialize_chat_Void,
    responseDeserialize: deserialize_chat_Void,
  },
  messageUser: {
    path: '/chat.Chat/MessageUser',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.SendMessage,
    responseType: chat_pb.Void,
    requestSerialize: serialize_chat_SendMessage,
    requestDeserialize: deserialize_chat_SendMessage,
    responseSerialize: serialize_chat_Void,
    responseDeserialize: deserialize_chat_Void,
  },
  subscribeUserMessages: {
    path: '/chat.Chat/SubscribeUserMessages',
    requestStream: false,
    responseStream: true,
    requestType: chat_pb.GetUserRequest,
    responseType: chat_pb.Message,
    requestSerialize: serialize_chat_GetUserRequest,
    requestDeserialize: deserialize_chat_GetUserRequest,
    responseSerialize: serialize_chat_Message,
    responseDeserialize: deserialize_chat_Message,
  },
};

exports.ChatClient = grpc.makeGenericClientConstructor(ChatService);
