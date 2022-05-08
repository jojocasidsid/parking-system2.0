import React from 'react'
import renderer from 'react-test-renderer'

// packages
import { ThemeProvider } from '@mui/material/styles'

// config
import theme from 'config/theme'

// component
import Slot from './Slot'

describe('Slot parking Component', () => {
	it('should render slot component without crashing', () => {
		const tree = renderer.create(
			<ThemeProvider theme={theme}>
				<Slot
					data={{
						id: 1,
						west: 1,
						south: 1,
						east: 1,
						vehicle: '123-123',
						type: 1,
						parkedType: 1,
						parkTime: null,
						unparkTime: null,
					}}
					handleLeave={() => {}}
					handleCancelReservation={() => {}}
				/>
			</ThemeProvider>
		)

		expect(tree).toMatchSnapshot()
	})

	it('should render slot component with park time', () => {
		const time: string = '2022-05-06T22:12:32.222Z'
		const tree = renderer.create(
			<ThemeProvider theme={theme}>
				<Slot
					data={{
						id: 1,
						west: 1,
						south: 1,
						east: 1,
						vehicle: '123-123',
						type: 1,
						parkedType: 1,
						parkTime: time,
						unparkTime: null,
					}}
					handleLeave={() => {}}
					handleCancelReservation={() => {}}
				/>
			</ThemeProvider>
		)

		expect(tree).toMatchSnapshot()
	})

	it('should render slot component with later park time', () => {
		const time: string = '2030-05-06T22:12:32.222Z'
		const tree = renderer.create(
			<ThemeProvider theme={theme}>
				<Slot
					data={{
						id: 1,
						west: 1,
						south: 1,
						east: 1,
						vehicle: '123-123',
						type: 1,
						parkedType: 1,
						parkTime: time,
						unparkTime: null,
					}}
					handleLeave={() => {}}
					handleCancelReservation={() => {}}
				/>
			</ThemeProvider>
		)

		expect(tree).toMatchSnapshot()
	})

	it('should render slot component with unpark time', () => {
		const time: string = '2022-05-06T22:12:32.222Z'
		const tree = renderer.create(
			<ThemeProvider theme={theme}>
				<Slot
					data={{
						id: 1,
						west: 1,
						south: 1,
						east: 1,
						vehicle: '123-123',
						type: 1,
						parkedType: 1,
						parkTime: time,
						unparkTime: '2025-05-06T22:12:32.222Z',
					}}
					handleLeave={() => {}}
					handleCancelReservation={() => {}}
				/>
			</ThemeProvider>
		)

		expect(tree).toMatchSnapshot()
	})

	it('should render slot component with available slot', () => {
		const tree = renderer.create(
			<ThemeProvider theme={theme}>
				<Slot
					data={{
						id: 1,
						west: 1,
						south: 1,
						east: 1,
						vehicle: '',
						type: 1,
						parkedType: 0,
						parkTime: '',
						unparkTime: '',
					}}
					handleLeave={() => {}}
					handleCancelReservation={() => {}}
				/>
			</ThemeProvider>
		)

		expect(tree).toMatchSnapshot()
	})
})
