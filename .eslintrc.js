module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
      "indent": ["error", 2], // 缩进风格
      "semi": ["error", "always"],//语句强制分号结尾
      "semi-style": [2, "last"],
      "no-extra-semi": "error",
      "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
      "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
    }
};
