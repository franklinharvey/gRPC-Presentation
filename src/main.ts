import * as grpc from "grpc";
import { ReplaySubject } from "rxjs";
import ChatServer from "./chat/server";
import { IChatServer, ChatService, ChatClient } from "./proto-gen/chat_grpc_pb";

const server = new grpc.Server();
server.addService<IChatServer>(ChatService, new ChatServer());
console.log(`Listening on ${process.env.PORT}`);
server.bind(
  `localhost:${process.env.PORT}`,
  grpc.ServerCredentials.createInsecure()
);
server.start();

/*

    Make believe, this is in a different service

*/

import {
  Message,
  SendMessage,
  Void,
  UserList,
  GetUserRequest,
} from "./proto-gen/chat_pb";

const client = new ChatClient("", {} as any); // this won't work cause you need a real config

function getUsers(): Promise<UserList> {
  return new Promise((resolve, reject) => {
    client.getAllUsers(new Void(), (error, reponse) => {
      if (error) {
        reject(error);
      } else resolve(reponse);
    });
  });
}

function sendMessage(body: string, title: string): Promise<Void> {
  const sendMessageRequest = new SendMessage();
  const message = new Message();
  message.setBody(body);
  message.setTitle(title);
  sendMessageRequest.setMessage(message);

  return new Promise((resolve, reject) => {
    client.messageUser(sendMessageRequest, (error, response) => {
      if (error) {
        reject(error);
      } else resolve(response);
    });
  });
}

function listenForMessages(id: string) {
  const request = new GetUserRequest();
  request.setId(id);

  const returnObservable = new ReplaySubject<Message.AsObject>();

  const stream = client.subscribeUserMessages(request);
  stream.on("data", (message: Message) => {
    returnObservable.next(message.toObject());
  });
  stream.on("error", () => {
    returnObservable.error(new Error());
  });
  stream.on("end", () => {
    returnObservable.complete();
  });

  return returnObservable.asObservable();
}
