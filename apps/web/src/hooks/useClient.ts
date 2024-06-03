import { useMemo } from "react";
import { ServiceType } from "@bufbuild/protobuf";
import { createConnectTransport } from "@connectrpc/connect-web";
import { createPromiseClient, PromiseClient } from "@connectrpc/connect";

const transport = createConnectTransport({
  baseUrl: import.meta.env.VITE_FLOW_API_URL!,
});

export function useClient<T extends ServiceType>(service: T): PromiseClient<T> {
  return useMemo(() => createPromiseClient(service, transport), [service]);
}
