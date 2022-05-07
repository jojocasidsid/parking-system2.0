import * as yup from 'yup'

const ERROR_FIELD_REQUIRED = 'This field is required'

export const validationSchema = yup.object({
	vehicle: yup.string().required(ERROR_FIELD_REQUIRED),
	parkedType: yup.number().positive().required(ERROR_FIELD_REQUIRED),
	parkTime: yup.string(),
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
