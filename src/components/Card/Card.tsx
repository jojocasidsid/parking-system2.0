import React from 'react'
import { CardWrapper, StyledSlotHeader } from './styles'
import { IProps } from './types'

const Card = ({ header, children }: IProps) => (
	<CardWrapper>
		<StyledSlotHeader>{header}</StyledSlotHeader>
		<div>{children}</div>
	</CardWrapper>
)

export default Card
