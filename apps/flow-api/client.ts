import { createPromiseClient } from "@connectrpc/connect";
import { UserService } from "@repo/proto/user/user_connect.ts";
import { createConnectTransport } from "@connectrpc/connect-node";

const transport = createConnectTransport({
  baseUrl: "http://localhost:3020",
  httpVersion: "1.1",
});

export const userClient = createPromiseClient(UserService, transport);
