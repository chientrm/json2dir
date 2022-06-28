import json2dir from "json2dir";
console.log(json2dir)

json2dir('.test', { json: JSON.stringify }, { 'a.json': { name: 'bob' } })