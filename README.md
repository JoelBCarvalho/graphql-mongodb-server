<h1 align="center">
<br>
  <a href="https://github.com/leonardomso/xo"><img src="https://i.imgur.com/C4X4AUB.png" alt="GraphQL MongoDB Server" width="128"></a>
<br>
<br>
GraphQL MongoDB Server
</h1>

<p align="center">A server boilerplate using GraphQL and MongoDB.</p>

<p align="center">
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License MIT">
  </a>
</p>

<hr />

## Introduction

This is a server boilerplate using GraphQL and MongoDB. Support subscriptions using GraphQL Yoga. 

## Getting started

1. Clone this repo using `https://github.com/leonardomso/graphql-mongodb-server.git`
2. Move to the appropriate directory: `cd graphql-mongodb-server`.
4. Run `yarn` or `npm install` to install dependencies.
5. Set `.env` file with your mongoURI.
6. Run `npm start` to see the example app at `http://localhost:4000/playground`.

## Commands

- `npm start` - start the playground at `http://localhost:4000/playground`

## Query and mutation examples

mutation($input: CreateRouterInput!) {
  createRouter(router: $input) {_id}
}

{
  "input": {
    "activation_link": "dd"
  }
}

query {
  routers {
    activation_link,
    name,
    connected,
    bt_active,
    registered,
    created
  }
}

mutation($input: UpdateRouterInput!) {
  updateRouter(_id: "5ca0754f8e8a5c2b6723a404", router: $input) {_id}
}

{
  "input": {
    "name": "casa",
    "connected": true,
    "bt_active": true,
    "registered": true
  }
}

mutation {
  deleteRouter(_id: "5ca0754f8e8a5c2b6723a404") {_id}
}

## License

MIT license, Copyright (c) 2018 Leonardo Maldonado.
