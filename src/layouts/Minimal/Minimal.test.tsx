import React from 'react'
import renderer from 'react-test-renderer'

import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom'

import Minimal from './Minimal'

describe('Minimal layout', () => {
	it('should render Minimal without crashing', () => {
		const tree = renderer.create(
			<Router>
				<Switch>
					<Route path='*' element={<Minimal />} />
				</Switch>
			</Router>
		)

		expect(tree).toMatchSnapshot()
	})
})
