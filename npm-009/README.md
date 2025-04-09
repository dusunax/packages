# React Multi Touch

![GitHub](https://img.shields.io/github/license/dusunax/packages) [![npm version](https://img.shields.io/npm/v/react-multi-touch.svg?style=square)](https://www.npmjs.org/package/react-multi-touch)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=react-multi-touch&query=$.install.pretty&label=install%20size&style=square)](https://packagephobia.now.sh/result?p=react-multi-touch)
[![npm downloads](https://img.shields.io/npm/dm/react-multi-touch.svg?style=square)](https://npm-stat.com/charts.html?package=react-multi-touch)

> [!NOTE]
> - This package need to be used in touch devices.

## Overview

React Multi Touch is a easy-to-use React-based npm package that enables multi-touch support for web applications in touch devices. 

It's version 1. Still in development, many room for improvement😉

## Installation

```bash
npm install react-multi-touch
```

## Usage
```tsx
import { MultiTouch } from "react-multi-touch";
...
<MultiTouch
  id="your-element-id"
>
  <div>
    This Element is draggable, scalable and rotatable
  </div>
  
  {/* Optional: Handles for scaling on corner by 1 finger */}
  <MultiTouch.Handles /> 

  {/* Optional: Control toggle setting for dragging, rotation, scaling and reset buttons */}
  <MultiTouch.ControlSetting />
</MultiTouch>
```

## Components
- `<MultiTouch />`
- `<MultiTouch.Handles />`
- `<MultiTouch.ControlSetting />`

## Options
```tsx
<MultiTouch
  id="test-1" // required
  maxTrashhold={window.innerWidth}
  minTrashhold={60}
  handleMode="touching" // "always" | "touching"(default) | "none"
  className="custom-class"
  cornerStyle="custom-style"
  cornerImageSrc="/path/to/image.png"
  actionModes={new Set(["drag", "scale", "rotate"])}
  events={{
    onTouchStart: () => {},
    onTouchMove: () => {},
    onTouchEnd: () => {},
  }}
>
  {/* Your element */}
</MultiTouch>
```
