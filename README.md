# Tezos Developer Portal

## Project setup & tech details

### Requirements
This project requires [npm](https://www.npmjs.com/get-npm)

### Setup
Run `npm install` to install the project.

### Local development server
Start the local server with `npm run develop` - live reload is enabled

The local server will then be reachable on [http://localhost:8000/](http://localhost:8000/) and the graphql explorer on [http://localhost:8000/___graphql](http://localhost:8000/___graphql)

For debugging, use `npm run develop --verbose`

### Build
To build the deployable website, run `npm run build`. This will create the output package in the `/public` folder.

### Known issues
* gatsby is now using some advanced caching on local dev (which is great!). Sometimes, you might need to clear the cache manually if you don't see assets (images) or some included resources (like the menu) updating. To clean, run: `npm run clean`.

### Notes
* When updating the gatsby configuration, you need to restart the server. There is now a message that will appear in the Browser, notifying you about this.
* Run and build tested on osx, unix and within WSL
* You can skip the automatic deployment of a commit by adding [CI Skip] to the commit message

## Information for content creators
You can find a markdown file in `features/feature_test.mdx` which demonstrates the use of all Markdown features and additional components. (This file will not be linked in the final version).
