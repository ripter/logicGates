.PHONY: all build test lint

all: build

build:

test: build
	./node_modules/.bin/mocha -C 

lint:
	./node_modules/jshint/bin/jshint src/
