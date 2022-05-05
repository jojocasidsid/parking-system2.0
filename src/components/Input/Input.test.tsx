import React from 'react'

// packages
import { ThemeProvider } from '@mui/material/styles'
import { render, screen } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import renderer from 'react-test-renderer'

// config
import theme from 'config/theme'
import Input from './Input'

const ERROR_FIELD_REQUIRED = 'This field is required'
export const validationSchema = yup.object({
	test: yup.string().required(ERROR_FIELD_REQUIRED).nullable(),
	test1: yup.string().required(ERROR_FIELD_REQUIRED).nullable(),
})
export interface IValidationSchema
	extends yup.InferType<typeof validationSchema> {}
export const defaultValues: IValidationSchema = {
	test: '',
	test1: 'test1',
}

describe('Input component', () => {
	it('should render correctly with a name on it', () => {
		const Component = () => {
			const {
				control,

				formState: { errors },
			} = useForm({
				mode: 'onTouched',
				defaultValues,
				resolver: yupResolver(validationSchema),
			})

			return (
				<ThemeProvider theme={theme}>
					<Input
						control={control}
						error={errors.test?.message}
						fullWidth
						required
						label='Test'
						name='test'
						placeholder='test'
						type='text'
						acceptsOnly='alpha'
					/>
				</ThemeProvider>
			)
		}

		render(<Component />)

		const input = screen.getByRole('textbox') as HTMLInputElement

		expect(input).toBeVisible()
		expect(input.name).toBe('test')
	})

	it('should create snapshot correctly', () => {
		const Component = () => {
			const {
				control,

				formState: { errors },
			} = useForm({
				mode: 'onTouched',
				defaultValues,
				resolver: yupResolver(validationSchema),
			})

			return (
				<ThemeProvider theme={theme}>
					<Input
						control={control}
						error={errors.test?.message}
						fullWidth
						required
						label='Test'
						name='test'
						placeholder='test'
						type='text'
						acceptsOnly='alpha'
					/>
				</ThemeProvider>
			)
		}

		const tree = renderer.create(<Component />)

		expect(tree).toMatchSnapshot()
	})
})
