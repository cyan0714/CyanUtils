import path from 'path'
import fs from 'fs'
import array from '../src/array.js'
import browser from '../src/browser.js'
import date from '../src/date.js'
import equipment from '../src/equipment.js'
import number from '../src/number.js'
import object from '../src/object.js'
import string from '../src/string.js'
import url from '../src/url.js'
import utils from '../src/utils.js'
import validate from '../src/validate.js'

// path.resolve() will return the absolute path of the current working directory.
const __dirname = path.resolve()
const targetPath = path.resolve(__dirname, './index.js')
const jsFiles = [
  {
    fileKey: 'array',
    fileValue: array
  },
  {
    fileKey: 'browser',
    fileValue: browser
  },
  {
    fileKey: 'date',
    fileValue: date
  },
  {
    fileKey: 'equipment',
    fileValue: equipment
  },
  {
    fileKey: 'number',
    fileValue: number
  },
  {
    fileKey: 'object',
    fileValue: object
  },
  {
    fileKey: 'string',
    fileValue: string
  },
  {
    fileKey: 'url',
    fileValue: url
  },
  {
    fileKey: 'utils',
    fileValue: utils
  },
  {
    fileKey: 'validate',
    fileValue: validate
  }
]

fs.writeFileSync(
  targetPath,
  ``
)

jsFiles.forEach(f => {
  let exportStr = ''
  for (let func in f.fileValue) {
    exportStr += `${func}, `
  }
  fs.appendFileSync(
    targetPath,
    `export { ${exportStr}} from './${f.fileKey}.js'\n\n`
  )
})
