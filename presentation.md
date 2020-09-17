build-lists: true



# Why I like gRPC
## Frank Harvey

---

# Boring Benefits

- Highly performant
	- leverages http/2 (lets be honest google probably designed http/2 with Stubby/gRPC in mind)
	- uses Protocol Buffers (protobufs) for *tiny* messages and very fast API's
- Designed for microservice communications
- Client library code-generation
- Hides underlying http methods
- Strongly typed DTO's (via protobufs)
- Multi-language support

---

# The cool benefits
## Code Generation
- server side is lit
- client side is lit
- integrates very nicely with an IDE

--- 

# IDE Integration you say?
#### A plain HTTP Get

```typescript
https.get(`${chatHost}/users/get`, res => {
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
  });
});
```

###### Ugh, no types

--- 

# IDE Integration you say?
#### A Gloo-flavored inter-service HTTP Get

```typescript
const response = await this.httpService
      .get<Organization>(`${this.organizationHost}/organizations/${orgId}`, {
        headers: {
          Authorization: authorizationHeader,
        },
      })
      .toPromise();
```

###### The function is type cast, but *could* be wrong, the DTO could be *anything*

--- 

# IDE Integration you say?


```typescript
const client = new ChatClient("", {} as any); 

function getUserById(id: string): Promise<User> {
  const request = new GetUserRequest();
  request.setId(id);
  return new Promise((resolve, reject) => {
    client.getUser(request, (error, response) => {
      if (error) {
        reject(error);
      } else resolve(response);
    });
  });
}
```

###### This *cannot* return anything that isn't a User entity, because protobufs

--- 
# Well ok fine but even that's a lot of boilerplate

---
# Take a look at Nest's gRPC example


```typescript
@Injectable()
export class AppService implements OnModuleInit {
  private userService: UserService;

  constructor(@Inject('USER_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.client.getService<UserService>('userService');
  }

  getUser(): Observable<User> {
    return this.userService.findOne({ id: 1 });
  }
}
```

