import * as yup from 'yup'

const ERROR_FIELD_REQUIRED = 'This field is required'

export const validationSchema = yup.object({
	vehicle: yup.string().required(ERROR_FIELD_REQUIRED),
	parkedType: yup.string().required(ERROR_FIELD_REQUIRED),
	entrance: yup.string().required(ERROR_FIELD_REQUIRED),
})

export interface IValidationSchema
	extends yup.InferType<typeof validationSchema> {}
