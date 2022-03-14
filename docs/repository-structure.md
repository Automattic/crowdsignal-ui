# Repository structure

Automattic/crowdsignal-ui is using a monorepo approach to host the code for the Crowdsignal dashboard, Crowdsignal widgets, as well as all additional shared packages utilized inside of [Crowdsignal Forms](https://github.com/Automattic/crowdsignal-forms) WordPress plugin.

## Apps and packages

The modules inside the respository are split between two directories: `/apps` and `/packages`. The difference between the two being `apps` can produce independent, deployable outputs whereas packages are more like your typical NPM libraries.

## Creating new modules

Add new modules manually by creating the directory and initiating a yarn project. All packages in this directory are published under `@crowdsignal/` organization.

```
$ mkdir packages/my-module
$ cd packages/my-module
$ yarn init
```

All modules inside the repo should follow the same layout convention for consistency:

```
# Source code for the module
src/
        # Main entrypoint for the package - responsible for exporting the public API
        index.js

        # Any additional modules internal to the package
        util.js
        ...

# Tests go here
test/
        # Tests are names the same as the modules they're for
        index.js
        util.js


# Local package.json
package.json

# Make sure to include a radme file describing the package
README.md

# Any build settings specific to the package/app
babel.config.js
webpack.config.js
```

## Building packages

Build specific packages from the root directory like:

```
yarn workspace @crowdsignal/feedback-widget run build
```

## Dev dependencies

All development dependencies should be added to the root `package.json`. Thanks to `yarn` workspaces they will be available in any package inside the repo.

