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
cp .env.example .env.local
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

### i18n

This project uses `react-intl` to manage the internationalisation. No user-facing messages should be hardcoded.

Messages are all listed in a dedicated json file in the `messages` folder at the root of the project.

When running `yarn run start` or `yarn run build` the messages are automatically compiled under `src/lib/lang`.

#### Usage

```jsx
// src/HelloWorld.tsx
const i18n = useIntl();
const helloWorld = i18n.formatMessage({
  defaultMessage: "Hello World!",
});

return <p>{helloWorld}</p>;
```

The default message should always be set as a fallback.

```json
//messages/en.json
{
  "hello.world": {
    "defaultMessage": "Hello World!"
  }
}
```

The message definition should always be copied into the json file in the messages folder.

See more information on the [react-intl documentation](https://formatjs.io/docs/getting-started/message-declaration).

### Build

```
yarn run build
```

Messages are compiled automatically before the build.

## Deployment

The repository is platform agnostic. The build process generates a `build` folder with the static files to be served.

Set the environment variables according to your platform. See the required variables in `.env.example`.
