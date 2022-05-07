import React, { useState, useEffect } from 'react'

import { Button, Typography } from '@mui/material'
import moment from 'moment'
import pluralize from 'pluralize'

import numbertToType from 'helpers/numberToType/numberToType'

import Card from 'components/Card'

import { IProps } from './types'

import { StyledImage, StyledBody } from './styles'

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
		<Card
			header={
				<>
					<Typography variant='h1'>{data.id}</Typography>
					<StyledImage color={data.parkedType ? 'primary' : 'secondary'} />
				</>
			}
		>
			<StyledBody>
				{data.parkedType !== 0 ? (
					<Typography variant='h4'>
						Plate: {data.vehicle} || Type: {`${numbertToType(data.parkedType)}`}
					</Typography>
				) : (
					<Typography variant='h3'>Available</Typography>
				)}

				<Typography variant='h3'>
					Parking Type: {numbertToType(data.type)} <br />
				</Typography>
				<br />

				<Typography variant='h4'>
					Distances: [ {pluralize('unit', data.west, true)} ,{' '}
					{pluralize('unit', data.east, true)} ,{' '}
					{pluralize('unit', data.south, true)} ]{' '}
				</Typography>

				<br />
				{data.parkedType ? (
					<Typography variant='h4'>
						{pluralize('Hour', timeDiff, true)} /{' '}
						{moment(data.parkTime).format('YYYY-MM-DD HH:mm:ss')}{' '}
					</Typography>
				) : (
					<div />
				)}

				<br />
				{data.parkedType && !data.unparkTime ? (
					<Button variant='contained' fullWidth onClick={() => handleLeave(data.id)}>
						<Typography variant='h4' color='white'>
							Leave
						</Typography>
					</Button>
				) : (
					<div />
				)}

				{data.unparkTime ? (
					<Typography variant='h4'>
						Unpark Time: {moment(data.unparkTime).format('YYYY-MM-DD HH:mm:ss')}{' '}
					</Typography>
				) : (
					<div />
				)}
			</StyledBody>
		</Card>
	)
}

export default Slot
