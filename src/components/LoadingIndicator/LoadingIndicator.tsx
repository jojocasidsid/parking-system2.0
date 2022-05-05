import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const LoadingIndicator = () => (
	<Box
		sx={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}}
		data-testid='loading-indicator'
	>
		<CircularProgress />
	</Box>
)

export default LoadingIndicator
