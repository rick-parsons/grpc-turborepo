import type { ConnectRouter } from "@connectrpc/connect";
import { UserService } from "@repo/proto/gen/user/user_connect";

export default (router: ConnectRouter) =>
  router.service(UserService, {
    async get(req) {
      return {
        user: {
          id: req.id,
          email: "test@test.com",
          name: "Test User",
        },
      };
    },
  });
