import palette from './palette'

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		nav: true
		body: true
		body2: true
		thead: true
		tbody: true
		tbody2: true
		link: true
		button: true
		smallButton: true
	}
}

const typography = {
	h1: {
		color: palette.text.primary,
		fontWeight: 600,
		fontSize: '32px',
		lineHeight: '38px',
	},
	h2: {
		color: palette.text.primary,
		fontWeight: 600,
		fontSize: '26px',
		lineHeight: '42px',
	},
	h3: {
		color: palette.text.primary,
		fontWeight: 600,
		fontSize: '20px',
		lineHeight: '24px',
	},
	h4: {
		color: palette.text.primary,
		fontWeight: 400,
		fontSize: '16px',
		lineHeight: '20px',
	},
	h5: {
		color: palette.text.primary,
		fontWeight: 600,
		fontSize: '16px',
		lineHeight: '20px',
	},
	h6: {
		color: palette.text.primary,
		fontWeight: 'normal',
		fontSize: '14px',
		lineHeight: '20px',
	},
	nav: {
		color: palette.text.white,
		fontStyle: 'normal',
		fontWeight: 600,
		fontSize: '16px',
		lineHeight: '22px',
	},
	body: {
		color: palette.text.primary,
		fontStyle: 'normal',
		fontWeight: 300,
		fontSize: '16px',
		lineHeight: '24px',
	},
	body2: {
		color: palette.text.primary,
		fontStyle: 'normal',
		fontWeight: 300,
		fontSize: '14px',
		lineHeight: '24px',
	},
	thead: {
		color: palette.text.primary,
		fontStyle: 'normal',
		fontWeight: 500,
		fontSize: '12px',
		lineHeight: '16px',
	},

	tbody: {
		color: palette.text.primary,
		fontStyle: 'normal',
		fontWeight: 300,
		fontSize: '12px',
		lineHeight: '16px',
	},
	tbody2: {
		color: palette.text.primary,
		fontStyle: 'normal',
		fontWeight: 500,
		fontSize: '16px',
		lineHeight: '19px',
		textTransform: 'none',
	},
	link: {
		color: palette.text.primary,
		fontStyle: 'normal',
		fontWeight: 500,
		fontSize: '14px',
		lineHeight: '17px',
		textDecoration: 'underline',
		textTransform: 'lowercase',
	},
	button: {
		color: palette.text.primary,
		fontStyle: 'normal',
		fontWeight: 600,
		fontSize: '16x',
		lineHeight: '22px',
		letterSpacing: '-0.02em',
	},
	smallButton: {
		color: palette.text.primary,
		fontStyle: 'normal',
		fontWeight: 600,
		fontSize: '14x',
		lineHeight: '19px',
	},
	fontFamily: 'Rubik',
	fontWeightStrong: 700,
	fontWeightBold: 600,
	fontWeightMedium: 500,
	fontWeightRegular: 400,
	fontWeightLight: 300,
}

export default typography
