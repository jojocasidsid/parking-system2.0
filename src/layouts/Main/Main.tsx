import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Box, Button, Toolbar, Typography } from '@mui/material'
import URLHelpers from 'helpers/constants/url'
import { StyledImage, StyledAppBar, StyledWrapper } from './styles'

const Main = () => (
	<div className='main-root'>
		<StyledAppBar position='static' color='primary'>
			<div className='main-container'>
				<Toolbar disableGutters>
					<StyledImage className='image' src='/logo.png' alt='logo' />

					<Box
						sx={{ marginLeft: 2, flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}
					>
						<Button component={Link} to={URLHelpers.parking}>
							<Typography variant='nav'>Parking</Typography>
						</Button>

						<Button component={Link} to={URLHelpers.transactions}>
							<Typography variant='nav'>Transactions</Typography>
						</Button>
					</Box>

					<Box sx={{ flexGrow: 0, mr: 2 }} />

					<Box sx={{ flexGrow: 0 }} />
				</Toolbar>
			</div>
		</StyledAppBar>
		<StyledWrapper>
			<Outlet />
		</StyledWrapper>
	</div>
)

export default Main
