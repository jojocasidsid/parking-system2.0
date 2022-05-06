import React from 'react'

// packages
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@mui/material/styles'

// config
import theme from 'config/theme'

import FormSubmit from './FormSubmit'

describe('FormSubmit Component', () => {
	it('should render component without crashing on loading', () => {
		const tree = renderer.create(
			<ThemeProvider theme={theme}>
				<FormSubmit submitting handleClose={() => {}} actionText='Park' />
			</ThemeProvider>
		)

		expect(tree).toMatchSnapshot()
	})

	it('should render component without crashing', () => {
		const tree = renderer.create(
			<ThemeProvider theme={theme}>
				<FormSubmit submitting={false} handleClose={() => {}} actionText='Unpark' />
			</ThemeProvider>
		)

		expect(tree).toMatchSnapshot()
	})
})
