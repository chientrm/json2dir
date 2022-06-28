const json2dir = require('../dist')
const { rmSync, readFileSync } = require('fs')
const ini = require('ini')

test('json2dir', () => {
    const dir = '.test'
    rmSync(dir, { recursive: true, force: true })
    const bob = { name: 'Bob', age: 23 }
    json2dir(
        dir,
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
    expect(readFileSync(`${dir}/a.json`, 'utf8')).toBe(JSON.stringify(bob))
    expect(readFileSync(`${dir}/b.ini`, 'utf8')).toBe(ini.encode({ INFO: bob }))
    expect(readFileSync(`${dir}/c/d/e.json`, 'utf8')).toBe(JSON.stringify(bob))
    expect(readFileSync(`${dir}/.sub/foo.bar/f.json`, 'utf8')).toBe(
        JSON.stringify(bob)
    )
})
