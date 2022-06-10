.DEFAULT_GOAL := default
.PHONY: default site deploy

default:
	until wrangler dev; do sleep 1; done

site:
	(cd public/; python3 -m http.server 8000)

deploy:
	wrangler pages publish public/ --project-name=memiux
	wrangler publish
