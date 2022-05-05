import React, { useState } from 'react'
import { Button } from '@mui/material'

import { IProps } from './types'

const Entrances = ({ entrance }: IProps) => {
	const [, setIsOpen] = useState(false)

	return (
		<div>
			<Button onClick={() => setIsOpen(true)}>Park {entrance} Center)</Button>
		</div>
	)
}

export default Entrances
