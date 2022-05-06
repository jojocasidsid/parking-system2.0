import styled from '@emotion/styled'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'

export const ThumbnailWrapper = styled('div')`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 20px;
	flex-direction: column;
	border-radius: 30px;
	border: 2px solid ${({ theme }) => theme.palette.secondary.main};
`
export const StyledSlot = styled('div')`
	display: flex;
	justify-content: space-around;
	align-items: center;
`

export const StyledImage = styled(DirectionsCarIcon)`
	font-size: 45px;
`

export const ActionWrapper = styled('div')`
	& > button {
		margin: 20px;
	}
`
