# json2dir

Convert JSON object to directory tree. Auto `mkdir` recursively.

## Install

```bash
npm install json2dir```

## Usage

```ts
import json2dir from 'json2dir'
import ini from 'ini'

json2dir(
    dir,
    {
        ini: ini.encode,
        json: JSON.stringify
    },
    {
        'a.json': bob,
        'b.ini': { INFO: bob },
        c: {
            d: {
                'e.json': bob
            }
        }
    }
)
```

Results

```
/root
│   a.json
│   b.json
│
└───c
    │
    └───d
        │
        │   e.json
```

## Sponsor

<img src="https://www.gitpod.io/svg/media-kit/logo-light-theme.svg" width="200">
<img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" width="200">
