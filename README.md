# Express API Starter

A simple [Express](https://expressjs.com/) API starter with some sample middleware and routes that you can deploy to [Heroku](https://www.heroku.com/). This starter also includes some basic [ESLint](https://eslint.org/), [Jest](https://jestjs.io/) and [Prettier](https://prettier.io/) configuration files.

## 💯 Features

- ES6
- [ESLint](https://eslint.org/) – For linting using the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript).
- [Express](https://expressjs.com/) – As the API framework.
- [Jest](https://jestjs.io/) – For testing.
- [JWT](https://jwt.io/) – As the token signing and verification library.
- [Node.js](https://nodejs.org/)
- [PM2](http://pm2.keymetrics.io/) – As the process manager for [Node.js](https://nodejs.org/).

## 🚀 Quick Start

1. **Clone the repo.**

   Clone the repo. Remove the `.git` directory and rename the `.env.example` file after cloning.

   ```sh
   git clone git@github.com:karlpawlowicz/express-api-starter.git my-app && rm -rf my-app/.git && mv .env.example .env
   ```

2. **Install the dependencies.**

   Move into your new project’s directory and install the dependencies.

   ```sh
   cd my-app && yarn
   ```

3. **Run the server.**

   Run the server in development mode. The server is now running at `http://localhost:3001` and will reload if you make edits.

   ```sh
   yarn start
   ```

## 🏗️ Project Structure

Initial project structure:

```
my-app
├── node_modules
├── src
│   ├── middleware
│   ├── routes
│   │   ├── auth
│   │   └── health
│   ├── utils
│   ├── router.js
│   └── server.js
├── tests
│   ├── integration
│   ├── mockData
│   └── unit
├── .env.example
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── package.json
├── process.config.js
├── Procfile
├── README.md
└── yarn.lock
```

1. **`/node_modules`**: This directory contains the project dependencies.

2. **`/src`**: This directory contains the code source files.

3. **`/tests`**: This directory contains the tests.

4. **`.env`**: This file contains the environment variables.

5. **`.eslintrc.js`**: This file contains the configuration for [ESLint](https://eslint.org/).

6. **`.gitignore`**: This file tells Git which files to ignore.

7. **`.prettierrc`**: This file contains the configuration for [Prettier](https://prettier.io/).

8. **`jest.config.js`**: This file contains the configuration for [Jest](https://jestjs.io/).

9. **`package.json`**: This file contains the manifest for this [Node.js](https://nodejs.org/) project.

10. **`.process.config.js`**: This file contains the configuration for [PM2](http://pm2.keymetrics.io/).

11. **`Procfile`**: This file contains the commands that are executed by the app on startup on [Heroku](https://www.heroku.com/).

12. **`README.md`**: This file contains information about this project.

13. **`yarn.lock`**: This file is generated automatically by [Yarn](https://yarnpkg.com/) and contains the exact versions of the installed project dependencies.

## 💥 Available Commands

In your new project’s directory you can run:

```sh
yarn start
```

Runs the server in development mode. The server is now running at `http://localhost:3001` and will reload if you make edits.

```sh
yarn stop
```

Stops the server.

```sh
yarn logs
```

Runs the server logs. You will see any server errors in the console.

```sh
yarn lint
```

Runs [ESLint](https://eslint.org/) using the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript). You will see any lint errors in the console.

```sh
yarn test
```

Runs [Jest](https://jestjs.io/). You will see the test results in the console.

```sh
yarn test:watch
```

Runs [Jest](https://jestjs.io/) in watch mode. You will see the test results in the console. [Jest](https://jestjs.io/) will re-run the tests if you make edits.

```sh
yarn serve
```

Runs the server in production mode.

```sh
yarn serve:heroku
```

Runs the server without [PM2](http://pm2.keymetrics.io/).

## 🎉 Deploy

You can deploy this app to [Heroku](https://www.heroku.com/) with the included `Procfile` which will run the `serve:heroku` command after the dependencies finish installing.
