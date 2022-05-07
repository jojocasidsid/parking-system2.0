import styled from '@emotion/styled'

export const CardWrapper = styled('div')`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 20px;
	flex-direction: column;
	border-radius: 30px;
	border: 2px solid ${({ theme }) => theme.palette.secondary.main};
`
export const StyledSlotHeader = styled('div')`
	display: flex;
	justify-content: space-around;
	align-items: center;
`
