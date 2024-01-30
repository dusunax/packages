# hello-random-name

![GitHub](https://img.shields.io/github/license/dusunax/packages)
![npm version](https://img.shields.io/npm/v/hello-random-name.svg?style=square)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=hello-random-name&query=$.install.pretty&label=install%20size&style=square)](https://packagephobia.now.sh/result?p=hello-random-name)
[![npm downloads](https://img.shields.io/npm/dm/hello-random-name.svg?style=square)](https://npm-stat.com/charts.html?package=hello-random-name)

bolierplate from [modern-npm-package](https://github.com/snyk-snippets/modern-npm-package)

## Get Started

💃 Hello Random Name 🕺

```tsx
import helloRandomName from "hello-random-name";

const randomName = helloRandomName.getName();
/*{
 *  gender: 'male',
 *  name: { english: 'Hyunseok', japanese: 'ヒョンソク', korean: '현석' }
 *}
 */
const randomFemale = helloRandomName.getName("female");
const randomMale = helloRandomName.getName("male");
const allNameList = helloRandomName.getAllNames();
```
