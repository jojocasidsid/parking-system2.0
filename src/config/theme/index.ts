import { createTheme, Theme as MuiTheme } from '@mui/material/styles'

import palette from './palette'
import typography from './typography'

import { MuiButton } from './overrides'

declare module '@emotion/react' {
	export interface Theme extends MuiTheme {}
}

const theme = createTheme({
	palette,
	typography,
	components: {
		MuiButton,
	},
	zIndex: {
		appBar: 1200,
		drawer: 1100,
	},
})

export default theme
