import React from 'react'
import { Outlet } from 'react-router-dom'

const Minimal = () => (
	<div className='minimal-root' style={{ height: '100vh' }}>
		<Outlet />
	</div>
)

export default Minimal
