import React, { useState, useEffect, useRef } from 'react'

import { Button, Typography } from '@mui/material'
import moment from 'moment'
import pluralize from 'pluralize'

import numbertToType from 'helpers/numberToType/numberToType'

import Card from 'components/Card'

import { getTimeDifference } from 'helpers'
import { IProps } from './types'

import { StyledImage, StyledBody } from './styles'

const Slot = ({ data, handleLeave, handleCancelReservation }: IProps) => {
	const [timeDiff, setTimeDiff] = useState(0)
	const [timeReservation, setTimeReservation] = useState(0)
	const [trigger, setTrigger] = useState(0)
	const counter = useRef(0)

	useEffect(() => {
		const dateNow = moment().format()
		if (data.parkTime) {
			const timeBetween = getTimeDifference(data.parkTime).toFixed(2)
			setTimeDiff(Number(timeBetween))

			const timeUntilReserved = getTimeDifference(dateNow, data.parkTime).toFixed(
				2
			)

			if (Number(timeUntilReserved) > 0) {
				setTimeReservation(Number(timeUntilReserved))
			}
		}

		// trigger useEffect every 20 seconds
		if (counter.current < 20) {
			counter.current += 1
			const timer = setTimeout(() => setTrigger(trigger + 1), 1000)
			return () => clearTimeout(timer)
		}

		return () => {}
	}, [JSON.stringify(data), trigger])

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
						{Boolean(timeReservation) && '|| Reserved'}
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
						{timeReservation
							? pluralize('Hour', timeReservation, true)
							: pluralize('Hour', timeDiff, true)}{' '}
						/ {moment(data.parkTime).format('YYYY-MM-DD HH:mm:ss')}{' '}
					</Typography>
				) : (
					<div />
				)}

				<br />
				{data.parkedType && !data.unparkTime && !timeReservation ? (
					<Button variant='contained' fullWidth onClick={() => handleLeave(data.id)}>
						<Typography variant='h4' color='white'>
							Leave
						</Typography>
					</Button>
				) : (
					<div />
				)}

				{Boolean(timeReservation) && (
					<Button
						variant='contained'
						fullWidth
						color='secondary'
						onClick={() => handleCancelReservation(data.id)}
					>
						<Typography variant='h4' color='white'>
							Cancel Reservation
						</Typography>
					</Button>
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
