import fs from 'fs'
import consola from 'consola'
import parseArgs from 'minimist'
import { capitalize } from '@chengdx/shared'
import { getFile } from './getPackages'

type UpdateType = 'major' | 'minor' | 'patch'

getFile('package.json', { createOnNotExisted: false }).forEach(({ pkg, path, existed }) => {
  if (!existed)
    return

  const content = JSON.parse(fs.readFileSync(path, 'utf-8'))
  const { version } = content
  const splited = (version as string).split('.').map(v => parseInt(v))
  if (splited.length !== 3)
    consola.error(`Invalid version ${version} for ${pkg}`)

  const [major, minor, patch] = splited
  const { _: [type = 'patch'] } = parseArgs(process.argv.slice(2))
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

  content.version = newVersion
  fs.writeFileSync(path, JSON.stringify(content, null, 2))
  consola.success(`${capitalize(type)} ${pkg} from ${version} => ${newVersion}`)
})
