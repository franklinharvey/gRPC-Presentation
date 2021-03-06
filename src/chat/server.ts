import grpc from "grpc";
import { IChatServer } from "../proto-gen/chat_grpc_pb";
import {
  CreateUserRequest,
  GetUserRequest,
  User,
  Void,
} from "../proto-gen/chat_pb";

export default class ChatServer implements IChatServer {
  db!: DB;

  public createUser = (
    call: grpc.ServerUnaryCall<CreateUserRequest>,
    callback: grpc.sendUnaryData<Void>
  ) => {
    this.db.save(call.request.toObject());
    callback(null, null);
  };

  public getUser = (
    call: grpc.ServerUnaryCall<GetUserRequest>,
    callback: grpc.sendUnaryData<User>
  ) => {
    const user: any = this.db.get(call.request.getId());

    const response = new User();
    response.setName(user.name);
    response.setEmail(user.email);
    response.setId(user.id);

    callback(null, response);
  };

  getAllUsers = () => {};
  updateUser = () => {};
  deleteUser = () => {};

  messageUser = () => {};
  subscribeUserMessages = () => {};
}

class DB {
  save = (...args: any): any => {};
  get = (...args: any): any => {};
}
