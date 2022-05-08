/* eslint-disable no-console */
import React from 'react'
import { ThemeProvider } from '@mui/material/styles'

// config
import theme from 'config/theme'

// component
import { render } from '@testing-library/react'
import PromptModal from './PromptModal'

describe('PromptDialog Component', () => {
	it('should render PromptDialog component without crashing awaitign response', () => {
		const { baseElement } = render(
			<ThemeProvider theme={theme}>
				<PromptModal
					title='Cancel Reservation'
					message='Are you sure you want to cancel this reservation?'
					open
					processing
					handleClose={() => {}}
					handleConfirm={() => {}}
					paperProps={{ sx: { width: '300px', height: '230px' } }}
				/>
			</ThemeProvider>
		)

		expect(baseElement).toMatchSnapshot()
	})

	it('should render PromptDialog component without crashing', () => {
		const { baseElement } = render(
			<ThemeProvider theme={theme}>
				<PromptModal
					title='Cancel Reservation'
					message='Are you sure you want to cancel this reservation?'
					open
					processing={false}
					handleClose={() => {}}
					handleConfirm={() => {}}
					paperProps={{ sx: { width: '300px', height: '230px' } }}
				/>
			</ThemeProvider>
		)

		expect(baseElement).toMatchSnapshot()
	})
})
