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


```
├── config
│   ├── config.json
│   ├── default.json
│   ├── production.json
│   ├── stage.json
│   └── test.json
├── docs
│   ├── parameters.yaml
│   └── swaggerConfig.js
├── index.js
├── middlewares
│   ├── endpoint.js
│   └── validator.js
├── migrations
│   └── create-users-table.js
├── models
│   ├── index.js
│   └── Users.js
├── modules
│   └── example
│       ├── example.routes.js
│       ├── getData.js
│       ├── getHello.js
│       └── getPow.js
├── package.json
├── package-lock.json
├── README.md
├── seeders
│   └── user_data.js
├── tests
│   └── getData.test.js
└── utils
    ├── exceptions
    │   ├── BadGateway.js
    │   ├── BadRequest.js
    │   └── NotFound.js
    └── logger.js
```