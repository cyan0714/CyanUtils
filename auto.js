import path from 'path'
import fs from 'fs'
import array from './array.js'
import browser from './browser.js'
import date from './date.js'
import equipment from './equipment.js'
import number from './number.js'
import object from './object.js'
import string from './string.js'
import url from './url.js'
import utils from './utils.js'
import validate from './validate.js'

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
