const primary = '#F0781F'

const secondary = '#0266CC'
const white = '#FFFFFF'

const success = '#2FB182'
const successLight = '#0000001A'

const warning = '#FFAE00'
const warningLight = '#FFF4E5 '

const info = '#1AB1F5'
const infoDark = '#303643'
const infoLight = '#E5F7FD'

const rejected = '#FF5353'
const rejectedLight = '#FEEDEE'

const disabledInput = '#30364314'

const baseText = '#303643'

const exportColors = {
	primary: {
		contrastText: white,
		main: primary,
	},
	secondary: {
		contrastText: white,
		main: secondary,
	},
	success: {
		contrastText: white,
		main: success,
		light: successLight,
	},
	info: {
		contrastText: white,
		dark: infoDark,
		main: info,
		light: infoLight,
	},
	warning: {
		contrastText: white,
		main: warning,
		light: warningLight,
	},
	error: {
		contrastText: white,
		main: rejected,
		light: rejectedLight,
	},
	text: {
		primary: baseText,
		button: baseText,
		secondary: disabledInput,
		link: baseText,
		accent: baseText,
		white,
	},
	background: {
		default: white,
		paper: white,
	},

	icon: baseText,
}

export default exportColors
