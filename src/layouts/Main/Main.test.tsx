import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@mui/material/styles'

import theme from 'config/theme'

import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom'

import MainLayout from './Main'

describe('Main layout', () => {
	it('should render without crashing', () => {
		const tree = renderer.create(
			<ThemeProvider theme={theme}>
				<Router>
					<Switch>
						<Route path='*' element={<MainLayout />} />
					</Switch>
				</Router>
			</ThemeProvider>
		)

		expect(tree).toMatchSnapshot()
	})
})
