FROM golang:1.21.8-alpine3.19 AS builder

RUN go install github.com/bufbuild/buf/cmd/buf@latest && \
    go install github.com/sudorandom/protoc-gen-connect-openapi@latest

WORKDIR /root
COPY /src buf.gen.yaml ./

WORKDIR /go/app

FROM alpine:latest
CMD ["buf generate"]
