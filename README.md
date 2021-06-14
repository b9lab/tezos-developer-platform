# Tezos Developer Portal

## Project setup & tech details

### Requirements
This project requires [npm](https://www.npmjs.com/get-npm)

### Setup

To clone, use:
```sh
git clone --recursive THIS_PROJECT
```
To install this project run:
```sh
npm install && (cd plugins/gatsby-advanced-readingtime/ && npm install)
```

Some plugins are included as submodules, if you did not clone with `-r`, you can fetch it initially with:

```sh
git submodule init
git submodule update
```


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

## Git workflow
Branch naming scheme: xx-feature-description, where `xx` are the name initials of the developer, lowercase.
Merging scheme: `feature-branch` --> `master` --> `review` --> `production`

## CI & CD
Pushes to the `master` and `review` branch are automatically deployed
* `master` on http://preview-uqq8yju5was05rgy.b9lab.com/
* `review` on http://preview-uqq8yju5was05rgy-review.b9lab.com/

## Review process
We use Gitlab Merge Requests to organize content reviews. To start a review, content creators will prepare an update on the `review` branch, and then open a Merge Request towards `production` with the content for review. Comments, discussions and updates should start on the Merge Request page. If you move discussions outside (slack/email), please indicate on the Merge Request once an issue has been resolved.

### Review finalization
Once a reviewer has completed a review, they should indicate so by adding a comment to the Merge Request, stating that they have completed their review of part x (in most cases, x is a module or a specific section).

When all reviewers have completed their review and no further changes are required, the Merge Request is closed, moving the content changes to the `production` branch.

### Support
In case of any problems with the app (dev, build and deployment), git or any associated services, please contact Ibo (ibo@b9lab.com).
