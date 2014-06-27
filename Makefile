.PHONY: all build test lint

all: build

build:

test: build
	./node_modules/.bin/mocha -C 

testd: build
	./node_modules/.bin/mocha -C debug

lint:
	./node_modules/jshint/bin/jshint src/
