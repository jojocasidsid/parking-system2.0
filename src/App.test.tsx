import React from 'react'
import renderer from 'react-test-renderer'

import App from './App'

describe('App', () => {
	it('should render app without crashing', () => {
		const tree = renderer.create(<App />)

		expect(tree).toMatchSnapshot()
	})
})
