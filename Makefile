install:
	npm install -g yarn && yarn install

format:
	yarn format

lint:
	yarn lint

test:
	yarn test

build:
	yarn build

.PHONY: install format lint test build