# Express API Starter [![CI](https://github.com/karlpawlowicz/express-api-starter/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/karlpawlowicz/express-api-starter/actions/workflows/main.yml)

A simple Express API starter with some sample middleware and routes that you can deploy to [AWS](https://aws.amazon.com/) or [Heroku](https://www.heroku.com/). This starter also includes some basic configuration files and tests.

## ✨ Features

- [Conventional Commits](https://www.conventionalcommits.org/) – As the specification for commit messages.
- [commitlint](https://commitlint.js.org/) - For commit message linting.
- [Commitizen](http://commitizen.github.io/cz-cli/) - For commit message formatting.
- [ESLint](https://eslint.org/) – For linting using the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).
- [Express](https://expressjs.com/) – As the [Node.js](https://nodejs.org/) framework.
- [GitHub Actions](https://github.com/features/actions) - For CI/CD.
- [Jest](https://jestjs.io/) – As the testing framework.
- [lint-staged](https://github.com/okonet/lint-staged) - For pre-commit code formatting and linting.
- [Node.js](https://nodejs.org/)
- [Passport](http://www.passportjs.org/) – As the authentication middleware.
- [PM2](https://pm2.keymetrics.io/) – As the process manager for [Node.js](https://nodejs.org/).
- [Prettier](https://prettier.io/) - For code formatting.
- [semantic-release](https://semantic-release.gitbook.io/) – For automating the package release workflow.
- [Serverless Express](https://github.com/vendia/serverless-express) – For deploying this starter to [AWS](https://aws.amazon.com/).
- [Swagger](https://swagger.io/) – For API documentation.

## 🚀 Quick Start

1. **Clone the repo.**

   Clone the repo. Run the `onClone.js` script after cloning.

   ```shell
   git clone https://github.com/karlpawlowicz/express-api-starter.git my-app && node my-app/scripts/onClone.js
   ```

2. **Install the dependencies.**

   Move into your new project’s directory and install the dependencies.

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

```
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
├── .env.example
├── .eslintrc.js
├── .gitignore
├── .nvmrc
├── .prettierignore
├── .prettierrc
├── app.json
├── commitlint.config.js
├── CONTRIBUTING.md
├── jest.config.js
├── LICENSE
├── package-lock.json
├── package.json
├── process.config.js
├── Procfile
├── README.md
└── release.config.js
```

1. **`/.github`**: This directory contains [GitHub](https://github.com/)-related files.

2. **`/.vscode`**: This directory contains the user and workspace settings file for [VS Code](https://code.visualstudio.com/).

3. **`/logs`**: This directory contains the log files.

4. **`/node_modules`**: This directory contains the project dependencies.

5. **`/scripts`**: This directory contains the script files.

6. **`/src`**: This directory contains the code source files.

7. **`/tests`**: This directory contains the tests.

8. **`.env`**: This file contains the environment variables.

9. **`.eslintrc.js`**: This file contains the configuration for [ESLint](https://eslint.org/).

10. **`.gitignore`**: This file tells [Git](https://git-scm.com/) which files to ignore.

11. **`.nvmrc`**: This file tells [nvm](https://github.com/nvm-sh/nvm) which version to use.

12. **`.prettierignore`**: This file tells [Prettier](https://prettier.io/) which files to ignore.

13. **`.prettierrc`**: This file contains the configuration for [Prettier](https://prettier.io/).

14. **`app.json`**: This file contains the manifest for [Heroku](https://www.heroku.com/) apps.

15. **`commitlint.config.js`**: This file contains the configuration for [commitlint](https://commitlint.js.org/).

16. **`CONTRIBUTING.MD`**: This file contains information about contributing.

17. **`jest.config.js`**: This file contains the configuration for [Jest](https://jestjs.io/).

18. **`LICENSE`**: This starter uses the [MIT License](./LICENSE).

19. **`package-lock.json`**: This file is generated automatically by [npm](https://www.npmjs.com/) and contains the exact versions of the installed project dependencies.

20. **`package.json`**: This file contains the manifest for this [Node.js](https://nodejs.org/) project.

21. **`process.config.js`**: This file contains the configuration for [PM2](https://pm2.keymetrics.io/).

22. **`Procfile`**: This file contains the commands that are executed by the app on startup on [Heroku](https://www.heroku.com/).

23. **`README.md`**: This file contains information about this project.

24. **`release.config.js`**: This file contains cofiguration for [semantic-release](https://github.com/semantic-release/semantic-release).

## 🤖 Available Commands

In your new project’s directory, you can run:

```shell
npm run format
```

Runs [Prettier](https://prettier.io/) on `css`, `js`, `json`, `jsx`, `md`, `scss`, `ts` and `tsx` file extensions.

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

Runs [Jest](https://jestjs.io/) in watch mode. You will see the test results in the console. [Jest](https://jestjs.io/) will re-run the tests if you make edits.

## 💫 Deploy

You can deploy this app to [Heroku](https://www.heroku.com/) with the included `Procfile`, which will run the `serve:heroku` command after the dependencies finish installing.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## 🤝 Contributing

See [CONTRIBUTING.MD](./CONTRIBUTING.MD).

## 🧐 License

Licensed under the [MIT License](./LICENSE).
