.PHONY: all build test

all: build

build:

test: build
	./node_modules/.bin/mocha -C 
