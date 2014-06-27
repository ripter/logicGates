.PHONY: all build test lint clean

all: build

build: node_modules/

test: build
	./node_modules/.bin/mocha -C 

testd: build
	./node_modules/.bin/mocha -C debug

lint:
	./node_modules/jshint/bin/jshint src/

clean:
	npm cache clear
	-rm -R ./node_modules

node_modules/:
	npm install

