import { createPromiseClient } from "@connectrpc/connect";
import { UserService } from "@repo/proto/gen/user/user_connect";
import { createConnectTransport } from "@connectrpc/connect-node";

const transport = createConnectTransport({
  baseUrl: "http://localhost:3020",
  httpVersion: "1.1",
});

export const userClient = createPromiseClient(UserService, transport);
