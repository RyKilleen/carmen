dev:
	npx concurrently "npm run watch" "npm run serve"

build:
	npm run build

tunnel:
	npx localtunnel --port 8000
