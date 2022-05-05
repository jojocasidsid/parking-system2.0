import { render, screen } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'

import LoadingIndicator from './LoadingIndicator'

describe('Loading Indicator Component', () => {
	it('should render component without crashing', () => {
		const tree = renderer.create(<LoadingIndicator />)

		expect(tree).toMatchSnapshot()
	})

	it('should be visible', () => {
		render(<LoadingIndicator />)
		const component = screen.getByTestId('loading-indicator')

		expect(component).toBeVisible()
	})
})
