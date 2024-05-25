# eslint-plugin-no-url-params-template

Construct URL params with URLSearchParams not template literals

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-url-params-template`:

```sh
npm install eslint-plugin-no-url-params-template --save-dev
```

## Usage

Add `no-url-params-template` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["no-url-params-template"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "no-url-params-template/rule-name": 2
  }
}
```

## Rules

<!-- begin auto-generated rules list -->

| Name                                                           | Description                                                     |
| :------------------------------------------------------------- | :-------------------------------------------------------------- |
| [no-url-params-template](docs/rules/no-url-params-template.md) | Construct URL params with URLSearchParams not template literals |

<!-- end auto-generated rules list -->
