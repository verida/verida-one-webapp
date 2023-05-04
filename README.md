# Verida One Webapp

## Overview

Your identity in one place

## Development

The application is composed of a frontend and a server. The server merely allows the update of the meta tags dynamically before serving the index.html.

On a local development environment, due to current limitations, the server only serves the build folder of the frontend, so doesn't allow hot reloading of the frontend.

We recommend to focus on either the frontend or the server at a time.

### Install

```
// frontend
yarn install

// server
cd ./server
yarn install
```

Some environment variables are required for the application to run. Have a look at the provided examples.

Copy `.env.example`, rename it to `.env` and modify the variables for your local environment.

```
// frontend
cp .env.example .env

//server
cd ./server
cp .env.example .env
```

### Run

The frontend can be started with its dedicated development server supporting hot reloading:

```
// frontend
yarn run start:dev
```

The server can be started via the following command (serving the build folder of the frontend):

```
// server
cd ./server
yarn run start:dev
```

### Features in development

Non production-ready features must be disabled in Production deployment. To ensure this, add a feature flag in `/lib/config`. It can be simply based on the existing `process.env.REACT_APP_ENABLE_DEV_FEATURES=true` or it can have a dedicated environment variable.

Check for `.env.example` for the exact variables.

### Mock data

In a similar way as the development features, a set of mock data is available. It can be enabled by setting the environment variable `REACT_APP_ENABLE_MOCK_DATA=true`.

The mock profile can found by searching for the Username "ryan-demo.vda".

### Linting and Formatting

We use eslint for the linting and prettier for the formatting.

Scripts are available to check and fix issues.

```
// frontend
yarn run check
```

```
// frontend
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
};
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

You can run a dedicated script to extract all messages into the json file.

```
// frontend
yarn run messages:extract
```

See more information on the [react-intl documentation](https://formatjs.io/docs/getting-started/message-declaration).

### Test

```
// frontend
yarn run test
```

### Build

```
// frontend
yarn run build
```

Messages are compiled automatically before the build.

Note: The server part is currently written in javascript and doesn't require any build phase.

## Deployment

Before building and deploying, set the environment variables according to your platform. See the required variables in `.env.example`.
The variables `NODE_ENV` must be set to the value `production` for an optimised bundle. This is usually done by default on most platform.

The build command fo the frontend generates a build folder with the bundled static files of the frontend.

From there, several deployment options are possible.

- Static files on a CDN or equivalent
- Server + local static files
- A mix of the above: server + static files a CDN location.

### Static files

Note that this option prevents the meta tags from being dynamically updated before serving the page.

The build folder can be deployed to a CDN or equivalent (Netlify, Amplify, S3 web hosting, ..., heroku with the create-react-app buildpack fall in this options as well).

### Server + local static files

This option allows dynamically setting the meta tags before serving the page.

Deploy the repository, build the frontend then run the server so that it serves the static files straight from the build folder.

The server has two entry points under the folder `./server/src`:

- `servers.js` for a server environment (EC2, Heroku with no particular buildpack, ...)
- `handler.js` for a serverless environment (Lambda, ...), a `serverless.yml` is provided in the repository (although, in its current state it doesn't bundle the frontend build folder)

Note that a serverless deployment is not recommended with this option because all the static files will be requested through it, without the delivery optimisation that a CDN could provide. Check the next option.

### Server + external static files

This option allows dynamically setting the meta tags before serving the page.

For this method to work, all the resources must be referenced with an absolute path, for instance `https://cdn.verida.one/favicon.png` instead of just `/favicon.png`. The environment variable `PUBLIC_URL` is use to that effect. CRA/Webpack prepends the variable to the path to the resources when building the frontend, so ensure to set this environment variable with the location where you will deploy the static files before building the frontend. After building, you can deploy on a CDN such as S3 + CloudFront.

The server, is deployed in a similar way as the previous option. The difference being it must be aware of the location of the resources. The environment variable `RESOURCES_URL` is used to determine if it should fetch the `index.html` locally or from the specified location. So do not forget to set the variable before running the server, for instance `RESOURCES_URL=https://cdn.verida.one`

Once again, the server has two entry points:

- `servers.js` for a server environment (EC2, Heroku with no particular buildpack, ...)
- `handler.js` for a serverless environment (Lambda, ...), a `serverless.yml` is provided in the repository
