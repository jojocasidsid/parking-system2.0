import React from 'react'

// packages
import { QueryClient, QueryClientProvider } from 'react-query'
import { SnackbarProvider } from 'notistack'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider } from '@mui/material/styles'

// config
import theme from 'config/theme'
import RouteList from 'config/RouteList'

const queryClient = new QueryClient()
const nodeEnv = process.env.NODE_ENV

const App = () => (
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
				<RouteList />
				{nodeEnv === 'development' ? (
					<ReactQueryDevtools initialIsOpen={false} />
				) : null}
			</SnackbarProvider>
		</ThemeProvider>
	</QueryClientProvider>
)

export default App
