import type { ConnectRouter } from "@connectrpc/connect";
import { FlowService } from "@repo/proto/flow/flow_connect.ts";
import { userClient } from "./client";
import { Status } from "@repo/proto/flow/flow_pb.ts";

export default (router: ConnectRouter) =>
  router.service(FlowService, {
    async getById(req) {
      const { user } = await userClient.get({ id: 1 });

      return {
        flow: {
          id: req.id,
          name: `Flow ${req.id}`,
          status: Status.LIVE,
          tags: ["tag1", "tag2"],
        },
        user,
      };
    },
  });
