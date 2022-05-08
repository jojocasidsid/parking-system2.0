import React from 'react'
import renderer from 'react-test-renderer'

// packages
import { ThemeProvider } from '@mui/material/styles'

// config
import theme from 'config/theme'

// component
import Card from './Card'

describe('Card Component', () => {
	it('should render card component without crashing', () => {
		const tree = renderer.create(
			<ThemeProvider theme={theme}>
				<Card header={<h1>Hello World</h1>}>
					<h1>Hello World</h1>
				</Card>
			</ThemeProvider>
		)

		expect(tree).toMatchSnapshot()
	})
})
