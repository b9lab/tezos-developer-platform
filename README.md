# B9lab Tezos Developer Portal

This repository contains the B9lab Tezos Developer Portal, hosted at [tezos.b9lab.com](https://tezos.b9lab.com).

## Setup

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


## Local development server

Start the local server with `npm run develop` - live reload is enabled

The local server will then be reachable on [http://localhost:8000/](http://localhost:8000/) and the graphql explorer on [http://localhost:8000/___graphql](http://localhost:8000/___graphql)

For debugging, use `npm run develop --verbose`


## Build

To build the deployable website, run `npm run build`. This will create the output package in the `/public` folder.


## Known issues

* The Gatsby cache sometimes doesn't reload properly. In this case, you might need to clear the cache manually if you don't see assets (images) or some included resources (like the menu) updating. To clean, run: `npm run clean`.
* When building, the build process might fail with a message `[BABEL] Note: The code generator has deoptimised the styling of xxx` or also `Failed to launch chrome! [...] No usable sandbox! Update your kernel`. In this case, just run the build again (it's a cache related issue).


## Notes

* When updating the gatsby configuration, you need to restart the server. There is now a message that will appear in the Browser, notifying you about this.
* Run and build tested on osx, unix and within WSL


## Information for contributors

You can find a markdown file in `features/feature_test.mdx` which demonstrates the use of all Markdown features and additional components. This file is not linked in the menu, but accessible via the url `/features/content-features`. You can also view it [online](https://tezos.b9lab.com/features/content-features).
