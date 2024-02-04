# hello-help

![GitHub](https://img.shields.io/github/license/hello-help/.github) [![npm version](https://img.shields.io/npm/v/hello-help.svg?style=square)](https://www.npmjs.org/package/hello-help)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=hello-help&query=$.install.pretty&label=install%20size&style=square)](https://packagephobia.now.sh/result?p=hello-help)
[![npm downloads](https://img.shields.io/npm/dm/hello-help.svg?style=square)](https://npm-stat.com/charts.html?package=hello-help)

boilerplate from [modern-npm-package](https://github.com/snyk-snippets/modern-npm-package)

## Get Started

🦄 Hello Help ✨

- simple code example at: `example/cli.ts`

```tsx
import { HelloHelp, helloHelpCli } from "hello-help";

const helloHelp = new HelloHelp(
  "🦄 hello-help ✨",
  "print your --help option easy",
  {
    hello: {
      optionName: "hello",
      description: "nice to say hello to you 👋",
    },
    heart: {
      optionName: "heart",
      shortenOptionName: "ht",
      description: "need a heart? 🩷",
    },
  }
);

helloHelpCli(helloHelp);
```

### A. command with no --help option

```
🦄 hello-help ✨
print your --help option easy
```

### B. command with --help option

```
🦄 hello-help ✨ options
--hello: nice to say hello to you 👋
--heart, -ht: need a heart? 🩷
```
