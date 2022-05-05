import React from 'react'
import renderer from 'react-test-renderer'

import { QueryClient, QueryClientProvider } from 'react-query'
import { SnackbarProvider } from 'notistack'
import { ThemeProvider } from '@mui/material/styles'

import theme from 'config/theme'

import Parking from './Parking'

const queryClient = new QueryClient()

describe('Parking Page', () => {
	it('should render Parking Page without crashing', () => {
		const tree = renderer.create(
			<QueryClientProvider client={queryClient}>
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
						<Parking />
					</SnackbarProvider>
				</ThemeProvider>
			</QueryClientProvider>
		)

		expect(tree).toMatchSnapshot()
	})
})
