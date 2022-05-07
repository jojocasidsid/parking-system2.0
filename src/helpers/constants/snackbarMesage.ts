const snackbarMesages = {
	noValidSlot: 'This is not a valid slot',
	deleteReservation: 'Reservation has been successfully cancelled',
	parkTimeValidation: 'Leave time should be later than park time',
	noCarParked: 'There is no car parked in here',
	alreadyParked: (vehicle: string) => `Vehicle (${vehicle}) is already parked`,
	noSlot: 'There is no available slot',
	vehicleParked: 'Vehicle has been successfully parked.',
	leaveUncheck:
		'Leave Later field has no values while leaveNow checkbox is unchecked',
}

export default snackbarMesages
