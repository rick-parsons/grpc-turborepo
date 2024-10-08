import http from "node:http";
import express from "express";
import cors from "cors";
import { cors as connectCors } from "@connectrpc/connect";
import { expressConnectMiddleware } from "@connectrpc/connect-express";
import routes from "./connect";
import { logger } from "./interceptors/logger";
import swaggerUi from "swagger-ui-express";
import docsJson from "@repo/proto/gen/flow/flow.openapi.json";

const PORT = parseInt(process.argv[2] ?? 3010);
const app = express();
const corsOptions: cors.CorsOptions = {
  origin: true, // Production should explicitly specify an origin
  methods: [...connectCors.allowedMethods],
  allowedHeaders: [...connectCors.allowedHeaders],
  exposedHeaders: [...connectCors.exposedHeaders],
};

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(docsJson));
app.use(cors(corsOptions));
app.use(
  expressConnectMiddleware({
    routes,
    interceptors: [logger],
  })
);

app.get("/test", function (req, res) {
  res.status(410).send({ message: "This is a test" });
});

http.createServer(app).listen({ host: "localhost", port: PORT });
console.log(`The app is running on http://localhost:${PORT}`);
