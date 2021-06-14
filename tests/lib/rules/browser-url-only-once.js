/**
 * @fileoverview browser.url should be used only once
 * @author Abhi Singh
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/browser-url-only-once"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2020 } });
ruleTester.run("browser-url-only-once", rule, {
  valid: [
    "foo(a => a);",
    "foo(a => {a=b+c});",
    "it(() => { a=b+c; k++; browser.url(''); });",
  ],

  invalid: [
    {
      code: "it(() => { browser.url(''); a=b+c; k++; browser.url(''); });",
      errors: [
        {
          message: "Multiple `browser.url` call in single function",
        },
      ],
    },
    {
      code: "it(async () => { await browser.url(''); a=b+c; k++; browser.url(''); });",
      errors: [
        {
          message: "Multiple `browser.url` call in single function",
        },
      ],
    },
    {
      code: "it(async () => { await browser.url(''); a=b+c; await k++; browser.url(''); });",
      errors: [
        {
          message: "Multiple `browser.url` call in single function",
        },
      ],
    },
  ],
});
