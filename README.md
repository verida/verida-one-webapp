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

### Features in development

Non production-ready features must be disabled in Production deployment. To ensure this, add a feature flag in `/lib/config`. It can be simply based on `process.env.NODE_ENV=development` or it can have a dedicated environment variable.

Check for `.env.example` for the exact variables.

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

This project uses `react-intl` to manage the internationalisation. No user-facing messages should be hardcoded, there is a eslint rule throwing an error in such case.

Messages are all listed in a dedicated json file in the `messages` folder at the root of the project. Supporting multiple languages is about providing translations in the appropriate json files.

When running `yarn run start` or `yarn run build` the messages are automatically compiled under `src/lib/lang`. The compiled messages are the one used by the app

#### Usage

Use the hook `useIntl` which provides a set of functions such as `formatMessage`.

For messages, the `id` must be unique and following the naming convention `<ComponentName>.<variableName>`. The default message should always be set as it can be used as a fallback. It's also a good practice to give a description right away.

```jsx
const SubmitButton = () => {
  const i18n = useIntl();

  const buttonLabel = i18n.formatMessage({
    id: "SubmitButton.buttonLabel",
    description: "Label of the Submit button",
    defaultMessage: "Submit",
  });

  return <button>{buttonLabel}</button>;
}
```

The message definition should always be copied into the json files in the messages folder (`messages/en.json`).

```json
{
  "SubmitButton.buttonLabel": {
    "description": "Label of the Submit button",
    "defaultMessage": "Submit"
  }
}
```

See more information on the [react-intl documentation](https://formatjs.io/docs/getting-started/message-declaration).

### Test

```
yarn run test
```

### Build

```
yarn run build
```

Messages are compiled automatically before the build.

## Deployment

The repository is platform agnostic. The build process generates a `build` folder with the static files to be served.

Set the environment variables according to your platform. See the required variables in `.env.example`.
The variables `NODE_ENV` must be set to the value `production`. This is usually done by default on most platform.
