/**
 * @fileoverview Construct URL params with URLSearchParams not template literals
 * @author S Anand &lt;s.anand@gramener.com&gt;
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-url-params-template"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6, // or 2015
    sourceType: "module", // if you are using ES6 modules
  },
});
ruleTester.run("no-url-params-template", rule, {
  valid: [
    { code: "url = new URLSearchParams({ city: 'Rome', time: 'now' }).toString()" },
    { code: "url = 'path?' + new URLSearchParams({ city: 'Rome', time: 'now' }).toString()" },
    {
      code: "url = 'https://example.com/path?' + new URLSearchParams({ city: 'Rome', time: 'now' }).toString()",
    },
  ],

  invalid: [
    {
      code: "city = 'Rome'; url = `city=${city}`",
      errors: [{ message: "URL constructed with template literal", type: "TemplateLiteral" }],
    },
    {
      code: "`path?city=${city}&date=${now}`",
      errors: [{ message: "URL constructed with template literal", type: "TemplateLiteral" }],
    },
    {
      code: "`https://example.org/path?city=${city}&date=${now}`",
      errors: [{ message: "URL constructed with template literal", type: "TemplateLiteral" }],
    },
    {
      code: "url = `city=${city == valid && 'all' ? country : city}&date=${today}`",
      errors: [{ message: "URL constructed with template literal", type: "TemplateLiteral" }],
    },
  ],
});
