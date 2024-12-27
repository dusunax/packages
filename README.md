# Packages

---

| id  | Project                                                              | Version                                                                                                                            | ⚙️  | 📅     |
| --- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --- | ------ |
| 001 | [hello-emoji](https://www.npmjs.com/package/hello-emoji)             | [![npm version](https://img.shields.io/npm/v/hello-emoji.svg?style=square)](https://www.npmjs.org/package/hello-emoji)             | 🐣  | 240122 |
| 002 | [hello-ascii](https://www.npmjs.com/package/hello-ascii)             | [![npm version](https://img.shields.io/npm/v/hello-ascii.svg?style=square)](https://www.npmjs.org/package/hello-ascii)             | 🔡  | 240124 |
| 003 | [hello-random-name](https://www.npmjs.com/package/hello-random-name) | [![npm version](https://img.shields.io/npm/v/hello-random-name.svg?style=square)](https://www.npmjs.org/package/hello-random-name) | 💃  | 240130 |
| 004 | [hello-help](https://www.npmjs.com/package/hello-help)               | [![npm version](https://img.shields.io/npm/v/hello-help.svg?style=square)](https://www.npmjs.org/package/hello-help)               | 🦄  | 240204 |
| 005 | [hello-md-gen](https://www.npmjs.com/package/hello-md-gen)               | [![npm version](https://img.shields.io/npm/v/hello-md-gen.svg?style=square)](https://www.npmjs.org/package/hello-md-gen)               | 📠  | 240401 |
| 007 | [colored-status-code](https://www.npmjs.com/package/colored-status-code)               | [![npm version](https://img.shields.io/npm/v/colored-status-code.svg?style=square)](https://www.npmjs.org/package/colored-status-code)               | 🎨  | 241114 |
| 008 | [color-weaver](https://www.npmjs.com/package/color-weaver)               | [![npm version](https://img.shields.io/npm/v/color-weaver.svg?style=square)](https://www.npmjs.org/package/color-weaver)               | 🎨  | 241227 |

### [package-001] 🐣 Hello Emoji 🐣

```tsx
import helloEmoji from "hello-emoji";

const heart = helloEmoji.heart(); // ❤️
const check = helloEmoji.check(); // ✅
const fire = helloEmoji.fire(); // 🔥
```

### [package-002] 🔡 Hello Ascii 🔢

![image](https://github.com/dusunax/packages/assets/94776135/b4d7a364-bc63-436f-8019-fe9ff050ac8e)

### [package-003] 💃 Hello Random Name 🕺

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

### [package-004] 🦄 Hello Help ✨

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

### [package-005] 📠 Hello MD Gen 📄

- create `yyyy-mm-dd.md` file at `/docs/your-name/` with `src/template/markdown.md`

```
# CLI
$ npx hello-md-gen

# arguments
--username dusunax
--title "Title Turtle"

# CLI messages
// 🚫 Please enter your name
// ✅ Created 2024-04-01.md
// ✅ Configuration saved
// 🚫 "docs/dusunax/2024-04-01.md" already exists 😅
```

### [package-007] 🎨 Colored Status Code 🔢

- Color your HTTP status code in the console, terminal, etc.
- Improve the readability of your log.

![image](https://github.com/user-attachments/assets/cbb31574-47f7-48e7-b852-768a10727425)


### [package-008] 🎨 Color Weaver 🔢

- Make your UI colorful.
- Adjust text color to match the background.

![image](https://github.com/user-attachments/assets/15baf894-d283-456d-8c60-f3f055958042)
