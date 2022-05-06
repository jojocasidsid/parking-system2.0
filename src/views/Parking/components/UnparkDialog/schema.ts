import * as yup from 'yup'

import validateLaterDate from 'helpers/validateLaterDate'

const ERROR_DATE_INVALID =
	'Park time should be later than the current date and time'

export const validationSchema = yup.object({
	unparkTime: yup.string().test({
		name: 'validateLaterDate',
		test: validateLaterDate,
		message: ERROR_DATE_INVALID,
	}),
	leaveNow: yup.boolean(),
})

export interface IValidationSchema
	extends yup.InferType<typeof validationSchema> {}

export const defaultValues: IValidationSchema = {
	unparkTime: '',
	leaveNow: true,
}
