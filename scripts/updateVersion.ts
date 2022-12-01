import fs from 'fs'
import consola from 'consola'
import parseArgs from 'minimist'
import { capitalize } from '@chengdx/shared'
import { getFile } from './getPackages'

type UpdateType = 'major' | 'minor' | 'patch'
const { _: [type = 'patch'] } = parseArgs(process.argv.slice(2))

getFile('package.json', { createOnNotExisted: false })
  .concat({
    pkg: 'workspace-root' as any,
    existed: true,
    path: './package.json',
  })
  .forEach(({ pkg, path, existed }) => {
    if (!existed)
      return

    const content = JSON.parse(fs.readFileSync(path, 'utf-8'))
    const { version } = content
    let newVersion
    try {
      newVersion = core(version, type as UpdateType)
      content.version = newVersion
    }
    catch (e) {
      consola.error(`${e} for ${pkg}`)
      return
    }
    fs.writeFileSync(path, JSON.stringify(content, null, 2))
    consola.success(`${capitalize(type)} ${pkg} from ${version} => ${newVersion}`)
  })

function core(version: string, type: UpdateType) {
  const splited = version.split('.').map(v => parseInt(v))
  if (splited.length !== 3)
    throw new Error(`Invalid version ${version}`)

  const [major, minor, patch] = splited
  let newVersion

  switch (type as UpdateType) {
    case 'major':
      newVersion = `${major + 1}.0.0`
      break
    case 'minor':
      newVersion = `${major}.${minor + 1}.0`
      break
    case 'patch':
      newVersion = `${major}.${minor}.${patch + 1}`
      break
    default:
      consola.error(`Invalid type ${type}`)
  }

  return newVersion
}
