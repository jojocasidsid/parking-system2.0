import React from 'react'
import renderer from 'react-test-renderer'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SnackbarProvider } from 'notistack'
import { ThemeProvider } from '@mui/material/styles'
// config
import theme from 'config/theme'

// component
import Entrance from './Entrance'

const queryClient = new QueryClient()

describe('Entrance Component', () => {
	it('should render east entrance component without crashing', () => {
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
						<Entrance entranceTitle='East' slotRefetch={() => {}} />
					</SnackbarProvider>
				</ThemeProvider>
			</QueryClientProvider>
		)

		expect(tree).toMatchSnapshot()
	})

	it('should render west entrance component without crashing', () => {
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
						<Entrance entranceTitle='West' slotRefetch={() => {}} />
					</SnackbarProvider>
				</ThemeProvider>
			</QueryClientProvider>
		)

		expect(tree).toMatchSnapshot()
	})

	it('should render south entrance component without crashing', () => {
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
						<Entrance entranceTitle='South' slotRefetch={() => {}} />
					</SnackbarProvider>
				</ThemeProvider>
			</QueryClientProvider>
		)

		expect(tree).toMatchSnapshot()
	})
})
