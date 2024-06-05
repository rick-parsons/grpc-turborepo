import React, { useState } from "react";
import "./styles.css";

import { FlowService } from "@repo/proto/gen/flow/flow_connect";
import { Flow } from "@repo/proto/gen/flow/flow_pb";
import { User } from "@repo/proto/gen/user/user_pb";
import { useClient } from "../hooks/useClient";

function App(): JSX.Element {
  const client = useClient(FlowService);
  const [flow, setFlow] = useState<Flow>();
  const [user, setUser] = useState<User>();

  async function logMessage(): Promise<void> {
    client
      .getById({
        id: 1,
      })
      .then(({ flow, user }) => {
        setFlow(flow);
        setUser(user);
      });
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
          <p>name: {flow?.name}</p>javascript
          <p>status: {flow?.status}</p>
          <p>tags: {flow?.tags.join(", ")}</p>
          <p>user: {user?.email}</p>
        </>
      )}
    </div>
  );
}

export default App;
