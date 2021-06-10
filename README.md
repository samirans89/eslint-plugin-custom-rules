# eslint-plugin-custom-rules

Custom Eslint Plugin example

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-custom-rules`:

```
$ npm install eslint-plugin-custom-rules --save-dev
```

## Usage

Add `custom-rules` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["custom-rules"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "custom-rules/rule-name": 2
  }
}
```

## Supported Rules

- [browser-url-only-once](docs/rules/browser-url-only-once.md)
