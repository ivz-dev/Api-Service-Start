## API Start Service

### Contains:
 - [Express](https://github.com/expressjs/express)
 - [Body-Parser](https://github.com/expressjs/body-parser)
 - [ESLint](https://github.com/eslint/eslint)
 - [Winston](https://github.com/winstonjs/winston)
 - [fs](https://nodejs.org/docs/v0.3.1/api/fs.html)
 - [Config](https://github.com/lorenwest/node-config)
 - [Pre-commit](https://github.com/observing/pre-commit)
 - [Joi](https://github.com/hapijs/joi)

### Health check (For load balancers, etc)
GET HOST:PORT/ping should return 200 { payload: "pong" }
