import validateDate from 'helpers/validateDate'
import * as yup from 'yup'

const ERROR_FIELD_REQUIRED = 'This field is required'
const ERROR_DATE_INVALID =
	'Park time should be earlier than the current date and time'

export const validationSchema = yup.object({
	vehicle: yup.string().required(ERROR_FIELD_REQUIRED),
	parkedType: yup.number().positive().required(ERROR_FIELD_REQUIRED),
	parkTime: yup.string().test({
		name: 'validateDate',
		test: validateDate,
		message: ERROR_DATE_INVALID,
	}),
	parkNow: yup.boolean(),
})

export interface IValidationSchema
	extends yup.InferType<typeof validationSchema> {}

export const defaultValues: IValidationSchema = {
	vehicle: '',
	parkedType: 0,
	parkTime: '',
	parkNow: true,
}
