import * as yup from 'yup'

export const validationSchema = yup.object({
	unparkTime: yup.string(),
	leaveNow: yup.boolean(),
})

export interface IValidationSchema
	extends yup.InferType<typeof validationSchema> {}

export const defaultValues: IValidationSchema = {
	unparkTime: '',
	leaveNow: true,
}
