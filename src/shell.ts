import 'dotenv/config'
import fs from 'fs'
import { jsonRender } from './index.js'
import { RewriteOptions } from './json_template.js'

const JsonFile = process.env.INPUT_JSON_FILE ?? ''
const HandlebarsDelimiters = process.env.HANDLEBARS_DELIMITERS

const content = fs.readFileSync(JsonFile)
const original = JSON.parse(content.toString())

const options: RewriteOptions = {}
if (HandlebarsDelimiters && HandlebarsDelimiters.split(',').length === 2) {
  options.delimiters = HandlebarsDelimiters.split(',') as [string, string]
}
const rewrited = await jsonRender(original, process, options)

console.log('rewrited', JSON.stringify(rewrited, null, 2))
