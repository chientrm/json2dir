import { writeFileSync, mkdirSync } from 'fs'
import path from 'path'

const json2dir = (
    dir: string,
    serializers: Record<string, (obj: any) => string>,
    obj: any
) =>
    Object.entries(obj).forEach(([key, value]) => {
        if (!value) return
        const _path = path.join(dir, key)
        const ext = path.extname(_path)
        if (ext.length) {
            const serializer = serializers[ext]
            if (!serializer)
                throw new Error(`No serializer for extension '${ext}'`)
            mkdirSync(path.dirname(_path), { recursive: true })
            writeFileSync(_path, serializer(value), {})
        } else json2dir(_path, serializers, value)
    })

export default json2dir
