SHELL := /bin/bash
BRANCH := $(shell git branch | sed -n -e 's/^\* \(.*\)/\1/p')
VERSION := $(shell git describe --abbrev=0 --tags)
# Install project and dependencies
.PHONY: install
install:
	npm install

# Lint and test
.PHONY: test
test:
	npm run lint
	npm run test

# Build
.PHONY: build
build:
	make install
	npm run build

# Release
.PHONY: release
release:
	make install
	npm run release

# publish
.PHONY: publish
publish:
	make release
	npm publish

# start
.PHONY: start
start:
	npm run start

# debug
.PHONY: debug
debug:
	npm run debug
