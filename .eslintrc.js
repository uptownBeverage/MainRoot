module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
    "mocha": true,
    "es6": true
  },
  "plugins": [
    "react",
    "jsx-a11y"
  ],
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 6,
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    "ecmaFeatures": {
      "jsx": true,
      "spread": true,
      "experimentalObjectRestSpread": true
    }
  },
  "rules": {
    "arrow-parens": [
      "error",
      "always"
    ],
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "comma-dangle": [
      2,
      "always-multiline"
    ],
    "camelcase": 0,
    "no-self-assign": 1,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/imports-first": 1,
    "import/newline-after-import": 1,
    "import/no-dynamic-require": 1,
    "import/no-extraneous-dependencies": 1,
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "import/no-cycle": 0,
    "jsx-a11y/aria-props": 2,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/label-has-for": 2,
    "jsx-a11y/mouse-events-have-key-events": 2,
    "jsx-a11y/role-has-required-aria-props": 2,
    "jsx-a11y/role-supports-aria-props": 2,
    "jsx-a11y/no-static-element-interactions": 0,
    "max-len": 0,
    "newline-per-chained-call": 0,
    "no-console": 0,
    "no-alert": 1,
    "no-use-before-define": 0,
    "no-restricted-syntax": 0,
    "guard-for-in": 0,
    "prefer-template": 0,
    "class-methods-use-this": 0,
    "prefer-object-spread": 1,
    "react/forbid-prop-types": 0,
    "react/jsx-first-prop-new-line": [
      2,
      "multiline-multiprop"
    ],
    "react/prefer-stateless-function": 1,
    "react/jsx-filename-extension": 0,
    "react/jsx-no-target-blank": 0,
    "react/jsx-fragments": 0,
    "react/jsx-no-bind": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-curly-newline": 1,
    "react/require-extension": 0,
    "react/self-closing-comp": 2,
    "react/require-default-props": 0,
    "react/no-array-index-key": 0,
    "react/no-danger": 0,
    "react/no-danger-with-children": 0,
    "react/no-unescaped-entities": 1,
    "no-underscore-dangle": 0,
    "react/destructuring-assignment": 0,
    "react/no-access-state-in-setstate": 1,
    "react/button-has-type": 1,
    "react/static-property-placement": 0,
    "no-plusplus": [2, {
      "allowForLoopAfterthoughts": true
    }],
  },
  "globals": {
    "__webpack_public_path__": true,
    "window": true,
    "document": true,
    isNaN: true
  }
};