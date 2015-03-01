
default: test

test: node_modules $(wildcard test/*.js)
	@node_modules/.bin/mocha test/test.js

clean:
	@rm -rf build.js numd.js numd.min.js components node_modules

node_modules: package.json
	@npm install

bundle: index.js
	@duo --standalone numd --stdout index.js > numd.js
	@uglifyjs numd.js --mangle --compress --output numd.min.js

.PHONY: clean test
