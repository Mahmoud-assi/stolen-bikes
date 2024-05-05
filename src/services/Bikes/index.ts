import { httpApi } from '@app/api/httpApi'
import apiPrefixes from '@app/contants/apiPrefixes'
import { Bike, BikeCountResponse } from './types'

const getAllBike = (queryParams?: string) =>
	httpApi.get<Bike[]>(
		`${apiPrefixes.search}${(() => {
			if (queryParams)
				return `${queryParams}&location=Munich&distance=100&stolenness=proximity`
			else return `?location=Munich&distance=100&stolenness=proximity`
		})()}`
	)

const getBikeTotalCount = (queryParams?: string) =>
	httpApi.get<BikeCountResponse>(
		`${apiPrefixes.search}/count${(() => {
			if (queryParams)
				return `${queryParams}&location=Munich&distance=100&stolenness=proximity`
			else return `?location=Munich&distance=100&stolenness=proximity`
		})()}`
	)

const getAllColors = (queryParams?: string) =>
	httpApi.get<BikeCountResponse>(
		`${apiPrefixes.selections}/colors${(() => {
			if (queryParams) return queryParams
			else return ``
		})()}`
	)

export default { getAllBike, getBikeTotalCount, getAllColors }
