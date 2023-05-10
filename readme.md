# BancoMail Test Project

Test project for BancoMail with Node.js/Express.js and Next.js/React.js


## Table of contents

- [Quick start](#quick-start)
- [Project requirements](#project-requirements)
- [Prerequisites](#prerequisites)
- [Run API application](#run-api-application)
- [Run Frontend application](#run-frontend-application)
- [API Authorization](#api-authorization)
- [API Get Users](#api-get-users)
- [API Add User](#api-add-user)


## Quick start

- Clone the repo: git clone https://github.com/razib92/bm-test-app.git


## Project requirements

- Node.js
- PNPM
- MySQL


## Prerequisites

- Create MySQL database: example testbm
- Install dependencies: `pnpm install`


## Run API application

- Go to apps/api folder: `cd apps/api`
- Config .env file

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
pnpm run build
pnpm run start
```


## Run Frontend application

- Go to apps/main folder: `cd apps/main`
- Config .env file

```bash
pnpm run build
pnpm run start
```


## API Authorization

All API request require "Basic Authentication" with username and password encoded to Base 64.
Header example:
| Key | Value |
| ------------- | ------------- |
| Authorization | Basic <Base 64 <username:password>> |


## API Get Users

```http
GET /api/users
```

Response

```json
[
    {
      "id" : number,
      "email" : string,
      "username" : string,
      "createdAt" : date
    }
]
```


## API Add User

```http
POST /api/user
```

Body

```json
{
  "email" : string,
  "password" : string,
  "username" : string
}
```

Response

```json
{
  "success" : bool,
}
```
