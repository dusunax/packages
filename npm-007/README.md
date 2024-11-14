# Colored Status Code

> [!NOTE]
>
> - Color your HTTP status code in the console, terminal, etc.
> - Improve the readability of your log.
> - Easy to use & customize.
> - Also it's type safe & tested by 100% coverage.

![GitHub](https://img.shields.io/github/license/dusunax/packages)
[![npm version](https://img.shields.io/npm/v/colored-status-code.svg?style=square)](https://www.npmjs.org/package/colored-status-code)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=colored-status-code&query=$.install.pretty&label=install%20size&style=square)](https://packagephobia.now.sh/result?p=colored-status-code)
[![npm downloads](https://img.shields.io/npm/dm/colored-status-code.svg?style=square)](https://npm-stat.com/charts.html?package=colored-status-code)

boilerplate from [modern-npm-package](https://github.com/snyk-snippets/modern-npm-package)

## Get Started

🎨 Colored Status Code 🔢

```bash
npm install colored-status-code
```

```typescript
import { coloredStatusCode } from "colored-status-code";

console.log(coloredStatusCode(101)); // 101 in grey
console.log(coloredStatusCode(200)); // 200 in green
console.log(coloredStatusCode(302)); // 302 in cyan
console.log(coloredStatusCode(404)); // 404 in red
console.log(coloredStatusCode(500)); // 500 in red
```

---

### Examples

You can use it in the `try-catch` statement

```typescript
// try-catch example
try {
  // ...
} catch (error) {
  if (error instanceof HTTPError) {
    console.error(
      `Error fetching data [${coloredStatusCode(error.statusCode)}] ${
        error.message
      }`
    );
  }
}
```

or as an Axios interceptor.

```typescript
// Axios interceptor example
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(
      `Error fetching data [${coloredStatusCode(error.response.status)}] ${
        error.message
      }`
    );
    return Promise.reject(error);
  }
);
```

or anywhere you want!

---

### Features

- 100-599 status code range is supported.
- Customize the color of the status code.

```typescript
import { changeStatusColorSettings } from "colored-status-code";

changeStatusColorSettings(100, "yellow"); // now 100 is yellow.
```

- supports the color code of `ansi-colors`.

```
COLOR_CODES = {
  grey: "\x1b[90m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  purple: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  reset: "\x1b[0m",
} as const;
```

### Test Coverage

<img width="500px" src="https://github.com/user-attachments/assets/c6472cc0-2b67-41c6-8a46-90487968ff8a"/>

