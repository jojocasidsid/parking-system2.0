import React from 'react'
import renderer from 'react-test-renderer'

import Page from './Page'

describe('Page Component', () => {
	it('should render page component without crashing', () => {
		const tree = renderer.create(
			<Page title='Test title'>
				<h1>Test Header</h1>
			</Page>
		)

		expect(tree).toMatchSnapshot()
	})
})
