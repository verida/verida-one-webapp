# Verida One Webapp

## Overview

Your identity in one place

## Development

### Install

```
yarn install
```

Some environment variables are required for the application to run. Have a look at the provided examples.

Copy `.env.example`, rename it to `.env.local` and modify the variables for your local environment.

```
cp .env.example .env
```

### Run

```
yarn run start
```

### Linting and Formatting

We use eslint for th elinting and prettier for the formatting.

Scripts are available to check and fix issues.

```
yarn run check
```

```
yarn run fix
```

### Build

```
yarn run build
```

## Deployment

The repository is platform agnostic. The build process generates a `build` folder with the static files to be served.

Set the environment variables according to your platform. See the required variables in `.env.example`.
