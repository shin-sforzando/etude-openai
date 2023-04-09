# etude-openai

<!-- Badges -->

[![Last Commit](https://img.shields.io/github/last-commit/shin-sforzando/etude-openai)](https://github.com/shin-sforzando/etude-openai/graphs/commit-activity)
[![CI](https://github.com/shin-sforzando/etude-openai/actions/workflows/ci.yml/badge.svg)](https://github.com/shin-sforzando/etude-openai/actions/workflows/ci.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

<!-- Screenshots -->

| ![Screenshot 1](https://placehold.jp/32/3d4070/ffffff/720x480.png?text=Screenshot%201) | ![Screenshot 2](https://placehold.jp/32/703d40/ffffff/720x480.png?text=Screenshot%202) |
| :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
|                                      Screenshot 1                                      |                                      Screenshot 2                                      |

<!-- Synopsis -->

Etude for OpenAI.

<!-- TOC -->

- [Prerequisites](#prerequisites)
- [How to](#how-to)
  - [Develop](#develop)
  - [Launch Dev Server](#launch-dev-server)
  - [Lint](#lint)
  - [Format](#format)
  - [Build](#build)
  - [Storybook](#storybook)
  - [Deploy](#deploy)
- [Misc](#misc)
- [Notes](#notes)
  - [LICENSE](#license)
  - [Contributors](#contributors)

## Prerequisites

- Node.js (Version 18)
  - Next.js (Version 13)
    - React (Version 18)
  - Stylelint (Version 15) *as linter for styles*
  - Storybook (Version 7)

## How to

```shell
$ npm run
Lifecycle scripts included in etude-openai@0.1.0:
  start
    next start

available via `npm run-script`:
  prepare
    husky install
  dev
    next dev
  build
    next build
  lint
    npm-run-all --parallel lint:*
  lint:code
    next lint
  lint:style
    stylelint --fix './src/**/*.{css,scss}'
  storybook
    storybook dev -p 6006
  build-storybook
    storybook build
```

### Develop

`npm install` to install dependencies.

### Launch Dev Server

`npm run dev` to launch development server on `http://localhost:3000/`.

### Lint

`npm run lint` to lint all scripts.

### Format

`npm run format` to format all scripts.

### Build

`npm run build` to build for production.

### Storybook

`npm run storybook` to run Storybook server on `http://localhost:6006/`.

### Deploy

(T. B. D.)

## Misc

## Notes

This repository is [Commitizen](https://commitizen.github.io/cz-cli/) friendly, following [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow).
See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

### LICENSE

See [LICENSE](LICENSE).

### Contributors

- [sforzando LLC. and Inc.](https://sforzando.co.jp/)
  - [Shin'ichiro Suzuki](https://github.com/shin-sforzando)
