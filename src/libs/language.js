import i18n from '../libs/i18n';
let language = ""
const langcodes = {
	"pt" : "pt-br",
	"en" : "en"
}

export const setLanguage = (languageParam) => {
	language = languageParam
}

export const getLanguage = () => {
	
	if (language === "") {

		language = i18n.language
	}

  	return language
}

export const getLangCode = () => {
	return langcodes[language]
}

