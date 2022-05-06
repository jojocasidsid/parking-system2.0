import React, { useState, useEffect } from 'react'

import { Button, Typography } from '@mui/material'
import moment from 'moment'
import pluralize from 'pluralize'

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
			<Typography variant='h3'>
				Slot:{' '}
				{data.parkedType
					? `Type ${numbertToType(data.parkedType)} vehicle is parked`
					: 'Available'}
				<br />
			</Typography>

			<Typography variant='h3'>
				Parking Type: {numbertToType(data.type)} <br />
				<br />
			</Typography>

			<Typography variant='h3'>Distances</Typography>
			<Typography variant='h4'>
				West: {pluralize('unit', data.west, true)} || East:{' '}
				{pluralize('unit', data.east, true)} || South:{' '}
				{pluralize('unit', data.south, true)}
			</Typography>

			<br />
			<br />

			{data.parkedType ? (
				<>
					<Typography variant='h3'>Hours: {timeDiff}</Typography>
					<Typography variant='h3'>
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
