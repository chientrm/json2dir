import { writeFileSync, mkdirSync } from 'fs'

const json2dir = (
    dir: string,
    serializers: Record<string, (obj: any) => string>,
    obj: any
) => {
    mkdirSync(dir, { recursive: true })
    Object.entries(obj).forEach(([key, value]) => {
        if (!value) return
        const a = key.split('.')
        a.shift()
        const ext = a.join('.')
        if (ext) {
            const serializer = serializers[ext]
            if (!serializer)
                throw new Error(`No serializer for extension '${ext}'`)
            writeFileSync(`${dir}/${key}`, serializer(value))
        } else json2dir(`${dir}/${key}`, serializers, value)
    })
}

export default json2dir
