# Tools

- **Protobuf**: language-neutral, platform-neutral extensible mechanisms for serializing structured data
- **Buf**: protobuf toolchain for code-generation, linting, detecting breaking changes, enforcing best practices
- **Connect RPC**

# Why Protobuf

- define API's as programmatic schemas (strongly-typed)
- share schema at build-time and run-time
- widely-used and battle-tested
- can enforce backward-compatibility when versioning API's
- provides a single source of truth using code generation
- language agnostic
- fast serialization
- small request/response payloads

# Connect protocol (vs gRPC-web)

- we don't need a proxy for browsers to talk to gRPC service
- typescript support out of the box
- uses JSON by default for browser requests which means we can inspect messages in dev tools

# Further reading

- https://buf.build/blog/the-real-reason-to-use-protobuf
