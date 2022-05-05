interface IArr {
	[key: string]: string | null | number
}

const getSumByKey = (arr: IArr[], key: string) =>
	arr.reduce(
		(accumulator: number, current: IArr) => accumulator + Number(current[key]),
		0
	)

export default getSumByKey
