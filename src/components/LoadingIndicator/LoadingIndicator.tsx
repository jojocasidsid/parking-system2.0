import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const LoadingIndicator = () => (
	<Box
		sx={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}}
	>
		<CircularProgress />
	</Box>
)

export default LoadingIndicator
