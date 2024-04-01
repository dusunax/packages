# hello-md-gen

![GitHub](https://img.shields.io/github/license/dusunax/packages)
[![npm version](https://img.shields.io/npm/v/hello-md-gen.svg?style=square)](https://www.npmjs.org/package/hello-md-gen)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=hello-md-gen&query=$.install.pretty&label=install%20size&style=square)](https://packagephobia.now.sh/result?p=hello-md-gen)
[![npm downloads](https://img.shields.io/npm/dm/hello-md-gen.svg?style=square)](https://npm-stat.com/charts.html?package=hello-md-gen)

boilerplate from [modern-npm-package](https://github.com/snyk-snippets/modern-npm-package)

## Get Started

📠 Hello MD Gen 📄

- currently using `template/markdown.md` for the md generator
- it generates the following markup for TIL format at `/docs/your-name/` path

```markdown
# TIL: {{dateString}} // yyyy-mm-dd

---

## {{title}}, {{username}}
```

- use command line to generate the markup file
- need to set up the directory first, by command line `--username` arguments
- you can set up the title also.

```
# CLI
$ npx hello-md-gen

# arguments
--username dusunax
--title "Title Turtle"
```

### CLI messages

#### `🚫 Please enter your name`

- Name is required for directory settings. You need to set username first. (it will be saved later in the config.json file)

#### `✅ Created 2024-04-01.md`

- Created a new md file at `/docs/your-name/` by `yyyy-mm-dd.md`

#### `✅ Configuration saved`

- New configuration is saved in config.json

#### `🚫 "docs/dusunax/2024-04-01.md" already exists 😅`

- Today's TIL file is already exist.
