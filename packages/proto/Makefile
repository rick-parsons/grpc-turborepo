.PHONY: run proto-check clean

export DOCKER_EXEC = docker exec -it golang-protobuf-docker

# Create a long running container to optimize for build speed.
run-base:
	@if [ "$(shell docker ps --filter=name=golang-protobuf-docker -q)" = "" ]; then \
		DOCKER_SCAN_SUGGEST=false docker build --target builder -t golang-protobuf-docker-base . && \
		docker run \
			-v $(shell pwd):/go/app \
			--name golang-protobuf-docker \
			-td golang-protobuf-docker-base; \
	fi;

# Exec into the docker container to rerun code generation.
run: run-base
	@$(DOCKER_EXEC) buf generate

# Check proto definitions against linting rules and fix some linting issues automatically.
proto-check: run-base
	@$(DOCKER_EXEC) buf lint
	@$(DOCKER_EXEC) buf format -w --exit-code

# Remove the container and generated code.
clean:
	@docker stop golang-protobuf-docker && docker rm golang-protobuf-docker || exit 0
	rm -rf gen
