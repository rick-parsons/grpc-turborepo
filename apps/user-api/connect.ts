import type { ConnectRouter } from "@connectrpc/connect";
import { UserService } from "@repo/proto/user/user_connect.ts";

export default (router: ConnectRouter) =>
  router.service(UserService, {
    async get(req) {
      return {
        id: req.id,
        email: "test@test.com",
        name: "Test User",
      };
    },
  });
