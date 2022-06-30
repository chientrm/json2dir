# json2dir

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/271657e339754e6eb5b6fb9c0ee8c30e)](https://app.codacy.com/gh/chientrm/json2dir?utm_source=github.com&utm_medium=referral&utm_content=chientrm/json2dir&utm_campaign=Badge_Grade_Settings)
[![CI](https://github.com/chientrm/json2dir/actions/workflows/ci.yml/badge.svg)](https://github.com/chientrm/json2dir/actions/workflows/ci.yml)
[![](https://img.shields.io/bundlephobia/min/json2dir)](https://www.npmjs.com/package/json2dir)
[![](https://img.shields.io/discord/457912077277855764)](https://discord.com/invite/yy75DKs)
[![](https://img.shields.io/npm/v/json2dir)](https://www.npmjs.com/package/json2dir)
[![](https://img.shields.io/npm/dt/json2dir)](https://www.npmjs.com/package/json2dir)

-   Convert JSON object to directory tree
-   Auto `mkdir` recursively
-   Zero dependencies
-   Lightweight ~1 KB

## Install

```bash
npm install json2dir
```

## Types

```ts
json2dir(
    dir: string,
    serializers: Record<string, (obj: any) => string>,
    obj: any
) : void
```

## Usage

```ts
import json2dir from 'json2dir'
import ini from 'ini'

const bob = { name: 'Bob', age: 23 }

json2dir(
    '/root',
    {
        '.ini': ini.encode,
        '.json': JSON.stringify
    },
    {
        'a.json': bob,
        'b.ini': { INFO: bob },
        c: { d: { 'e.json': bob } },
        '.sub/foo.bar/f.json': bob
    }
)
```

### Results

```bash
/root
│   a.json
│   b.json
│
└───c/d
│   │
│   │   e.json
│
└───.sub/foo.bar
    │
    │   f.json
```

### Exceptions

If serializer is not provided, an exception will occur.
For example: `Error: No serializer for extension '.json'`

## Sponsor

<img src="https://www.gitpod.io/svg/media-kit/logo-light-theme.svg" width="200">

<img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" width="50">

<a href="https://www.buymeacoffee.com/chientrm" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="60" width="217"></a>
