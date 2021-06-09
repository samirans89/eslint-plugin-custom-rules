/**
 * @fileoverview browser.url should be used only once
 * @author Abhi Singh
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  type: "suggestion",
  meta: {
    docs: {
      description: "browser.url should be used only once",
      category: "Best Practice",
      recommended: true,
    },
    schema: [],
  },

  create: function (context) {
    return {
      ArrowFunctionExpression: function (node) {
        let count = 0;
        if (node.body.body) {
          const body = node.body.body;
          body.forEach((element) => {
            if (element.expression && element.expression.callee) {
              let member = element.expression.callee;
              if (
                member.object &&
                member.object.name === "browser" &&
                member.property &&
                member.property.name === "url"
              ) {
                count++;
              }
            }
          });
          if (count > 1) {
            context.report(
              node,
              "Multiple `browser.url` call in single function"
            );
          }
        }
      },
    };
  },
};
