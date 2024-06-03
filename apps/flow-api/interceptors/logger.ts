import type { Interceptor } from "@connectrpc/connect";

export const logger: Interceptor = (next) => async (req) => {
  console.log(`recevied message on ${req.url}`);
  return await next(req);
};
