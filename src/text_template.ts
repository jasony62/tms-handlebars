import { setDelimiters } from './delimiters.js'

export type RewriteOptions = {
  delimiters?: [string, string]
}

export async function textRender(
  template: string,
  parameters: any,
  options: RewriteOptions = {}
) {
  const { delimiters } = options

  const { Handlebars } = await import('./ex_handlebars.js')
  if (Array.isArray(delimiters) && delimiters.length === 2) {
    setDelimiters(Handlebars, delimiters)
  }

  const rewrited = Handlebars.compile(template)(parameters)

  return rewrited
}
