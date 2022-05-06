import styled from '@emotion/styled'

export const StyledRoot = styled('div')`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 20px;
`

export const ParkingWrapper = styled('div')`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 20px;
	flex-wrap: nowrap;
`

export const SlotsWrapper = styled('div')`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(5, 1fr);
	grid-gap: 10px;
	width: 90vw;
`
