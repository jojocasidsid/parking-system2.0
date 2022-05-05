import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'
import URLHelpers from 'helpers/url'

import MainLayout from 'layouts/Main'
import MinimalLayout from 'layouts/Minimal'

import Parking from 'views/Parking'
import Transactions from 'views/Transactions/Transactions'

const RouteList = () => (
	<Router>
		<Routes>
			<Route element={<MainLayout />}>
				<Route path={URLHelpers.parking} element={<Parking />} />
				<Route path={URLHelpers.transactions} element={<Transactions />} />
			</Route>
			<Route element={<MinimalLayout />} />
			<Route path='*' element={<Navigate to={URLHelpers.parking} replace />} />
		</Routes>
	</Router>
)

export default RouteList
