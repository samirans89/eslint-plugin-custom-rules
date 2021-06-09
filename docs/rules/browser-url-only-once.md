# browser.url should be used only once (browser-url-only-once)

## Rule Details

This rule aims to enforce the standard of using browser.url only once.

Examples of **incorrect** code for this rule:

```js
it(() => {
  browser.url("");
  a = b + c;
  k++;
  browser.url("");
});
```

Examples of **correct** code for this rule:

```js
it(() => {
  a = b + c;
  k++;
  browser.url("");
});
```
