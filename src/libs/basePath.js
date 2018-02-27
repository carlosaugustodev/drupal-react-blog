import { getLanguage } from './language'

let basePath = ""

export const setBasePath = (basePathParam) => {

    basePath = basePathParam
}

export const getBasePath = () => {
	const language = getLanguage()
  	return `/${language}/`
}
