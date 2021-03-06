# scoretrackr

> A next-gen high score tracking system for retro games.

<hr />

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build Status](https://travis-ci.com/wescopeland/scoretrackr.svg?branch=production)](https://travis-ci.com/wescopeland/scoretrackr)
[![Maintainability](https://api.codeclimate.com/v1/badges/a1b5eddfa3712441cce8/maintainability)](https://codeclimate.com/github/wescopeland/scoretrackr/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a1b5eddfa3712441cce8/test_coverage)](https://codeclimate.com/github/wescopeland/scoretrackr/test_coverage)

## Table of Contents

- [Project Setup](#project-setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running a local dev server](#running-a-local-dev-server)
- [Contributors](#contributors)

## Project Setup

### Prerequisites

Before beginning, please make sure you have the following tools installed.

- Node.js (>= 12.x, [download](https://nodejs.org/en/download/))
- `yarn` (>= 1.0, [instructions](https://yarnpkg.com/lang/en/docs/install/))
- Postgres ([macOS](https://postgresapp.com/), or [others](https://www.postgresql.org/download/))

### Installation

```
git clone https://github.com/wescopeland/scoretrackr.git
cd scoretrackr
yarn
```

### Running a local dev server

You will need to [create a new local Postgres database](https://www.postgresql.org/docs/10/tutorial-createdb.html) called `scoretrackr`.

You should also open this repository's `.env` file and change it to reflect your database credentials. On macOS, the default username and password will be the same as your user account name.

Once these steps are done, the local database can be seeded with:

```
yarn db:seed
```

The webapp can be started with:

```
yarn start:dev-server
```

Once you've started the the dev server, you can visit the app by navigating to http://localhost:3000.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/wescopeland"><img src="https://avatars0.githubusercontent.com/u/3984985?v=4" width="100px;" alt=""/><br /><sub><b>Wes Copeland</b></sub></a><br /><a href="https://github.com/wescopeland/scoretrackr/commits?author=wescopeland" title="Code">💻</a> <a href="#infra-wescopeland" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#design-wescopeland" title="Design">🎨</a> <a href="#financial-wescopeland" title="Financial">💵</a> <a href="https://github.com/wescopeland/scoretrackr/commits?author=wescopeland" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/purplem1lk"><img src="https://avatars2.githubusercontent.com/u/49956513?v=4" width="100px;" alt=""/><br /><sub><b>Susan Ma</b></sub></a><br /><a href="https://github.com/wescopeland/scoretrackr/commits?author=purplem1lk" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
