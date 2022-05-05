import React, { useState, useEffect } from 'react'

import { Button, Typography } from '@mui/material'
import moment from 'moment'

import numbertToType from 'helpers/numberToType'

import { IProps } from './types'

import { ThumbnailWrapper, ActionWrapper, StyledImage } from './styles'

const Slot = ({ data, handleLeave }: IProps) => {
	const [timeDiff, setTimeDiff] = useState(0)

	useEffect(() => {
		const dateNow = moment()
		if (data.parkTime) {
			const dateParked = moment(data.parkTime)
			const timeBetween = moment.duration(dateNow.diff(dateParked))

			setTimeDiff(Math.ceil(timeBetween.asHours()))
		}
	}, [data])

	return (
		<ThumbnailWrapper>
			<div>
				<StyledImage color='primary' />
			</div>
			<Typography variant='body'>
				Slot:{' '}
				{data.parkedType
					? `Type ${numbertToType(data.parkedType)} vehicle is parked`
					: 'Available'}
			</Typography>

			<Typography variant='body'>
				Parking Type: {numbertToType(data.type)}{' '}
			</Typography>

			<Typography variant='body'>Exit A: {data.exitA} units</Typography>
			<Typography variant='body'>Exit B: {data.exitB} units</Typography>
			<Typography variant='body'>Exit C: {data.exitC} units</Typography>

			{data.parkedType ? (
				<>
					<Typography variant='body'>Hours: {timeDiff}</Typography>
					<Typography variant='body'>
						Date Time: {moment(data.parkTime).format('YYYY-MM-DD HH:mm:ss')}{' '}
					</Typography>
				</>
			) : (
				<div />
			)}

			<ActionWrapper>
				{data.parkedType ? (
					<Button variant='contained' onClick={() => handleLeave(data.id)}>
						Leave
					</Button>
				) : (
					<div />
				)}
			</ActionWrapper>
		</ThumbnailWrapper>
	)
}

export default Slot
