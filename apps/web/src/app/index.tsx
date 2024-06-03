import React, { useState } from "react";
import "./styles.css";

import { FlowService } from "@repo/proto/flow/flow_connect.ts";
import { Flow } from "@repo/proto/flow/flow_pb.ts";
import { useClient } from "../hooks/useClient";

function App(): JSX.Element {
  const client = useClient(FlowService);
  const [flow, setFlow] = useState<Flow>();

  async function logMessage(): Promise<void> {
    client
      .getById({
        id: 1,
      })
      .then(({ flow }) => setFlow(flow));
  }

  return (
    <div className="container">
      <a
        href={`${import.meta.env.VITE_FLOW_API_URL}/api-docs`}
        target="_blank"
        rel="noreferrer"
      >
        flow api docs
      </a>
      <a
        href={`${import.meta.env.VITE_USER_API_URL}/api-docs`}
        target="_blank"
        rel="noreferrer"
      >
        user api docs
      </a>
      <button onClick={logMessage} type="button">
        Get Flow
      </button>
      {flow && (
        <>
          <p>id: {flow?.id}</p>
          <p>name: {flow?.name}</p>
        </>
      )}
    </div>
  );
}

export default App;
