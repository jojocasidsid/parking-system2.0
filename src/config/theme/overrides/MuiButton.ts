import palette from 'config/theme/palette'
import typography from 'config/theme/typography'

interface IMuiButton {
	styleOverrides: {
		[key: string]: {
			[key: string]: string | number
		}
	}
}

const MuiButton: IMuiButton = {
	styleOverrides: {
		root: typography.button,
		outlined: {
			textTransform: 'none',
			border: `1px solid ${palette.primary}`,
		},
		contained: {
			textTransform: 'none',
		},
		sizeSmall: typography.smallButton,
	},
}

export default MuiButton
