/* eslint-disable no-console */
import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { SnackbarProvider } from 'notistack'

// config
import theme from 'config/theme'

// component
import { render } from '@testing-library/react'
import UnparkDialog from './UnparkDialog'

describe('Unpark Component', () => {
	it('should render unpark component without crashing', () => {
		const { baseElement } = render(
			<ThemeProvider theme={theme}>
				<SnackbarProvider
					maxSnack={5}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right',
					}}
					preventDuplicate
					autoHideDuration={5000}
				>
					<UnparkDialog
						open
						slot={1}
						submitting={false}
						onConfirmLeave={(leaveNow: boolean, leaveDate: string) => {
							console.log(leaveNow)
							console.log(leaveDate)
						}}
						handleClose={() => {}}
					/>
				</SnackbarProvider>
			</ThemeProvider>
		)

		expect(baseElement).toMatchSnapshot()
	})
})
