# Color Weaver

> [!NOTE]
>
> - Help you to make colorful UI.
> - Easy to use & customize.
> - Also it's type safe & tested by 100% coverage.

![GitHub](https://img.shields.io/github/license/dusunax/packages)
[![npm version](https://img.shields.io/npm/v/color-weaver.svg?style=square)](https://www.npmjs.org/package/color-weaver)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=color-weaver&query=$.install.pretty&label=install%20size&style=square)](https://packagephobia.now.sh/result?p=color-weaver)
[![npm downloads](https://img.shields.io/npm/dm/color-weaver.svg?style=square)](https://npm-stat.com/charts.html?package=color-weaver)

boilerplate from [modern-npm-package](https://github.com/snyk-snippets/modern-npm-package)

## Get Started

🎨 Color Weaver 🔢

```bash
npm install color-weaver
yarn add color-weaver
```

## How to use

### by default

```typescript
import { ColorWeaver } from "color-weaver";

const colorWeaver = new ColorWeaver();

// get text color for background color
console.log(colorWeaver.getTextColor("#000000")); // #EEEEEE
console.log(colorWeaver.getTextColor("#FFFFFF")); // #000000

// check if the color is dark
console.log(colorWeaver.isColorDark("#000000")); // true
console.log(colorWeaver.isColorDark("#FFFFFF")); // false
```

### by options

```typescript
const colorWeaver = new ColorWeaver({
  lightTextColor: "#ffff00",
  darkTextColor: "#222222",
});

// get custom text color for background color
console.log(colorWeaver.getTextColor("#000000")); // #ffff00
console.log(colorWeaver.getTextColor("#FFFFFF")); // #222222
```

## Examples

![image](https://github.com/user-attachments/assets/7690bcfe-5c01-4650-b741-16d03fcd8b99)

### Javascript
```js
const colorWeaver = new ColorWeaver();
const backgroundColor = "#000000";

const TagElement = document.querySelector(".tag");
TagElement.style.backgroundColor = backgroundColor;
TagElement.style.color = colorWeaver.getTextColor(backgroundColor);
```

### React
```tsx
{selectedConcepts.map((e) => {
  return (
    <Concept
      key={e.en}
      style={{
        backgroundColor: e.color,
        color: colorWeaver.getTextColor(e.color),
      }}
      onClick={() => handleSelectConcept(e)}
    >
      {e.en} <XIcon width={16} />
    </Concept>
  );
})}
```

### React & TailwindCSS
```tsx
const colorWeaver = new ColorWeaver({
  lightTextColor: "text-grey-800",
  darkTextColor: "text-white",
});
...
className={`flex items-center justify-center rounded-xl px-2 py-[2px] ${colorWeaver.getTextColor(concept.color)}`}
```
