# hello-md-log

![GitHub](https://img.shields.io/github/license/dusunax/packages)
[![npm version](https://img.shields.io/npm/v/hello-md-log.svg?style=square)](https://www.npmjs.org/package/hello-md-log)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=hello-md-log&query=$.install.pretty&label=install%20size&style=square)](https://packagephobia.now.sh/result?p=hello-md-log)
[![npm downloads](https://img.shields.io/npm/dm/hello-md-log.svg?style=square)](https://npm-stat.com/charts.html?package=hello-md-log)

boilerplate from [modern-npm-package](https://github.com/snyk-snippets/modern-npm-package)

## Get Started

📠 Hello Markdown Log 📡

- currently using `template/markdown.md` for the md generator
- it generates the following markdown for TIL format at `/docs/your-name/` path

```markdown
# TIL: {{dateString}} // yyyy-mm-dd

---

## {{title}}, {{username}}
```

- use command line to generate the markdown file
- your name is `github username` by default, and save in `mdconfig.json`
- you can change name with command line `--username` arguments or change `mdconfig.json` file.
- you can set up the title with command line `--title` argument or change `template/markdown.md` file.

```
# CLI
$ npx hello-md-log

# arguments
--username dusunax
--title "Title Turtle"
```

### CLI messages

#### `🚫 Please set up your name first!`

- Name is required for directory settings. You need to set username first. (it will be saved later in the config.json file)

#### `✅ Created 2024-04-01.md`

- Created a new md file at `/docs/your-name/` by `yyyy-mm-dd.md`

#### `✅ Configuration saved`

- New configuration is saved in config.json

#### `🚫 "docs/dusunax/2024-04-01.md" already exists 😅`

- Today's TIL file is already exist.
