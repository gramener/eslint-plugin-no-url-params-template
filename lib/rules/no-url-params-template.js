/**
 * @fileoverview Construct URL params with URLSearchParams not template literals
 * @author S Anand <s.anand@gramener.com>
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Construct URL params with URLSearchParams not template literals",
      recommended: false,
      url: "https://github.com/gramener/eslint-plugin-no-url-params-template/blob/HEAD/docs/rules/no-url-params-template.md",
    },
    fixable: null,
    schema: [],
    messages: {
      "no-url-params-template": "URL constructed with template literal",
    },
  },

  create(context) {
    const regex = /\?\w*=\$\{[^}]+\}(&\w*=\$\{[^}]+\})*/;
    return {
      TemplateLiteral(node) {
        const text = context.sourceCode.getText(node);
        if (regex.test(text)) context.report({ node, messageId: "no-url-params-template" });
      },
    };
  },
};
