import React from 'react'
import { render } from '@testing-library/react'

// packages
import { ThemeProvider } from '@mui/material/styles'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

// config
import theme from 'config/theme'

// schema
import { defaultValues, IValidationSchema, validationSchema } from '../schema'

// component
import ParkDialog from './ParkDialog'

describe('Park dialog', () => {
	it('should render without any errors', () => {
		const Component = () => {
			const {
				handleSubmit,
				control,
				reset,
				watch,
				setValue,
				formState: { errors },
			} = useForm({
				mode: 'all',
				reValidateMode: 'onChange',
				defaultValues,
				resolver: yupResolver(validationSchema),
			})

			return (
				<ParkDialog
					open
					handleClose={() => {}}
					entranceTitle='South'
					onSubmit={(data: IValidationSchema) => {
						// eslint-disable-next-line no-console
						console.log(data)
					}}
					submitting={false}
					handleSubmit={handleSubmit}
					control={control}
					errors={errors}
					watch={watch}
					reset={reset}
					setValue={setValue}
				/>
			)
		}

		const { baseElement } = render(
			<ThemeProvider theme={theme}>
				<Component />
			</ThemeProvider>
		)
		expect(baseElement).toMatchSnapshot()
	})
})
