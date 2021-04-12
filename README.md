# Express API Starter [![CI](https://github.com/karlpawlowicz/express-api-starter/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/karlpawlowicz/express-api-starter/actions/workflows/main.yml)

A simple Express API starter with some sample middleware and routes that you can deploy to [AWS](https://aws.amazon.com/) or [Heroku](https://www.heroku.com/). This starter also includes some basic configuration files and tests.

## ✨ Features

- [Commitizen](http://commitizen.github.io/cz-cli/)—for commit message formatting.
- [commitlint](https://commitlint.js.org/)—for commit message linting.
- [Conventional Commits](https://www.conventionalcommits.org/)—as the specification for commit messages.
- [ESLint](https://eslint.org/)—for linting using the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).
- [Express](https://expressjs.com/)—as the [Node.js](https://nodejs.org/) framework.
- [GitHub Actions](https://github.com/features/actions)—for CI/CD.
- [Jest](https://jestjs.io/)—as the testing framework.
- [lint-staged](https://github.com/okonet/lint-staged)—for pre-commit code formatting and linting.
- [Node.js](https://nodejs.org/)
- [Passport](http://www.passportjs.org/)—as the authentication middleware.
- [PM2](https://pm2.keymetrics.io/)—as the process manager for [Node.js](https://nodejs.org/).
- [Prettier](https://prettier.io/)—for code formatting.
- [semantic-release](https://semantic-release.gitbook.io/)—for automating the package release workflow.
- [Serverless Framework](https://www.serverless.com/)—for deploying to [AWS](https://aws.amazon.com/).
- [Swagger](https://swagger.io/)—for API documentation.

## 🚀 Quick Start

1. **Clone the repo.**

   Clone the repo and run the `onClone.js` script.

   ```shell
   git clone https://github.com/karlpawlowicz/express-api-starter.git my-app && node my-app/scripts/onClone.js
   ```

2. **Install the dependencies.**

   Move into the project directory and install the dependencies.

   ```shell
   cd my-app && npm install
   ```

3. **Run the server.**

   Run the server in development mode. The server is now running at `http://localhost:3001` and will reload if you make edits.

   ```shell
   npm start
   ```

## 🏗️ Project Structure

Initial project structure:

```shell
my-app
├── .github
├── .vscode
├── logs
├── node_modules
├── scripts
├── src
│   ├── middleware
│   ├── routes
│   │   ├── auth
│   │   └── health
│   └── utils
├── tests
│   ├── integration
│   ├── mockData
│   └── unit
├── .env
├── .eslintrc.js
├── .gitignore
├── .nvmrc
├── .prettierignore
├── .prettierrc.js
├── app.json
├── commitlint.config.js
├── CONTRIBUTING.md
├── ecosystem.config.js
├── jest.config.js
├── LICENSE
├── package-lock.json
├── package.json
├── Procfile
├── README.md
└── release.config.js
```

1. `/.github`—this directory contains [GitHub](https://github.com/)-related files.

2. `/.vscode`—this directory contains the user and workspace settings file for [VS Code](https://code.visualstudio.com/).

3. `/logs`—this directory contains the log files.

4. `/node_modules`—this directory contains the project dependencies.

5. `/scripts`—this directory contains the script files.

6. `/src`—this directory contains the source code files.

7. `/tests`—this directory contains the tests.

8. `.env`—this file contains the environment variables.

9. `.eslintrc.js`—this file contains the configuration for [ESLint](https://eslint.org/).

10. `.gitignore`—this file tells [Git](https://git-scm.com/) which files to ignore.

11. `.nvmrc`—this file tells [nvm](https://github.com/nvm-sh/nvm) which version to use.

12. `.prettierignore`—this file tells [Prettier](https://prettier.io/) which files to ignore.

13. `.prettierrc.js`—this file contains the configuration for [Prettier](https://prettier.io/).

14. `app.json`—this file contains the manifest for this [Heroku](https://www.heroku.com/) app.

15. `commitlint.config.js`—this file contains the configuration for [commitlint](https://commitlint.js.org/).

16. `CONTRIBUTING.MD`—this file contains information about contributing.

17. `ecosystem.config.js`—this file contains the configuration for [PM2](https://pm2.keymetrics.io/).

18. `jest.config.js`—this file contains the configuration for [Jest](https://jestjs.io/).

19. `LICENSE`—this starter uses the [MIT License](./LICENSE).

20. `package-lock.json`—this file is generated automatically by [npm](https://www.npmjs.com/) and contains the exact versions of the installed project dependencies.

21. `package.json`—this file contains the manifest for this [Node.js](https://nodejs.org/) project.

22. `Procfile`—this file contains the commands that are executed by the app on startup on [Heroku](https://www.heroku.com/).

23. `README.md`—this file contains information about this project.

24. `release.config.js`—this file contains the configuration for [semantic-release](https://github.com/semantic-release/semantic-release).

## 🤖 Available Commands

In the project directory, you can run:

```shell
npm run format
```

Runs [Prettier](https://prettier.io/) on `css`, `js`, `json`, `jsx`, `md`, `scss`, `ts`, and `tsx` file extensions.

```shell
npm run lint
```

Runs [ESLint](https://eslint.org/) using the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). You will see any lint errors in the console.

```shell
npm run lint:fix
```

Runs [ESLint](https://eslint.org/) and automatically fixes problems using the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). You will see any lint errors in the console.

```shell
npm run logs
```

Runs the server logs. You will see any server errors in the console.

```shell
npm run serve
```

Runs the server in production mode.

```shell
npm run serve:heroku
```

Runs the server without [PM2](https://pm2.keymetrics.io/).

```shell
npm start
```

Runs the server in development mode. The server is now running at `http://localhost:3001` and will reload if you make edits.

```shell
npm stop
```

Stops the server.

```shell
npm test
```

Runs [Jest](https://jestjs.io/). You will see the test results in the console.

```shell
npm run test:watch
```

Runs [Jest](https://jestjs.io/) in watch mode. You will see the test results in the console. [Jest](https://jestjs.io/) will rerun the tests if you make edits.

## 💫 Deploy

### AWS

1. **Install the Serverless Framework CLI.**

   ```shell
   npm install -g serverless
   ```

2. **Add your AWS Credentials.**

   Add your AWS credentials to the `.env` file. For more information read [this](https://github.com/serverless/serverless/blob/master/docs/providers/aws/guide/credentials.md).

### Heroku

You can deploy this app to [Heroku](https://www.heroku.com/) with the included `Procfile`, which will run the `serve:heroku` command after the dependencies finish installing.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## 🤝 Contributing

See [CONTRIBUTING.MD](./CONTRIBUTING.MD).

## 🧐 License

Licensed under the [MIT License](./LICENSE).
