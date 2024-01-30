# hello-

![GitHub](https://img.shields.io/github/license/dusunax/packages)
![GitHub](https://img.shields.io/github/license/hello-name/.github) [![npm version](https://img.shields.io/npm/v/hello-name.svg?style=square)](https://www.npmjs.org/package/hello-name)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=hello-name&query=$.install.pretty&label=install%20size&style=square)](https://packagephobia.now.sh/result?p=hello-name)
[![npm downloads](https://img.shields.io/npm/dm/hello-name.svg?style=square)](https://npm-stat.com/charts.html?package=hello-name)

bolierplate from [modern-npm-package](https://github.com/snyk-snippets/modern-npm-package)

## Get Started

💃 Hello Random Name 🕺

```tsx
import helloName from "hello-name";

const randomName = helloName.getName();
/*{
 *  gender: 'male',
 *  name: { english: 'Hyunseok', japanese: 'ヒョンソク', korean: '현석' }
 *}
 */
const randomFemale = helloName.getName("female");
const randomMale = helloName.getName("male");
const allNameList = helloName.getAllNames();
```
