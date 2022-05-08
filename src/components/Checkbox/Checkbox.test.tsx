import React from 'react'

// packages
import * as yup from 'yup'
import { ThemeProvider } from '@mui/material/styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import renderer from 'react-test-renderer'

// config
import theme from 'config/theme'

// components
import Checkbox from './Checkbox'

export const validationSchema = yup.object({
	test: yup.boolean(),
})
export interface IValidationSchema
	extends yup.InferType<typeof validationSchema> {}
export const defaultValues: IValidationSchema = {
	test: true,
}

describe('Checkbox component', () => {
	it('should create snapshot correctly', () => {
		const Component = () => {
			const { control } = useForm({
				mode: 'onTouched',
				defaultValues,
				resolver: yupResolver(validationSchema),
			})

			return (
				<ThemeProvider theme={theme}>
					<Checkbox control={control} label='Test' name='test' />
				</ThemeProvider>
			)
		}

		const tree = renderer.create(<Component />)

		expect(tree).toMatchSnapshot()
	})
})
