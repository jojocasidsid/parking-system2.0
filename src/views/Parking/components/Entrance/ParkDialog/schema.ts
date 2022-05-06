import * as yup from 'yup'

const ERROR_FIELD_REQUIRED = 'This field is required'

export const validationSchema = yup.object({
	vehicle: yup.string().required(ERROR_FIELD_REQUIRED),
	parkedType: yup.number().positive().required(ERROR_FIELD_REQUIRED),
})

export interface IValidationSchema
	extends yup.InferType<typeof validationSchema> {}
