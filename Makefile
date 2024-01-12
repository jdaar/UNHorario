install:
	npm install -g yarn && yarn install

format:
	yarn format

lint:
	yarn lint

test:
	yarn test

build:
	yarn build-only

.PHONY: install format lint test build