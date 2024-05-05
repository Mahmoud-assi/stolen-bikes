import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { debounce } from '@mui/material'
import { Snackbar } from '@admixltd/admix-component-library/Snackbar'
import BikeService from '@app/services/Bikes'
import {
	PageIndexAtom,
	PageSizeAtom,
	DataListAtom,
	LoadingDataAtom,
	BikeFilterAtom,
	BikesTotalCountAtom,
	FilterLoadingAtom,
} from '@app/atoms/Bikes'
import queryParams from '@app/utils/queryParams'
import { Bike } from '@app/services/Bikes/types'

const BikesController = () => {
	const pageSize = useRecoilValue(PageSizeAtom)
	const pageIndex = useRecoilValue(PageIndexAtom)
	const filters = useRecoilValue(BikeFilterAtom)
	const [, setLoading] = useRecoilState(LoadingDataAtom)
	const [, setData] = useRecoilState(DataListAtom)
	const [, setTotalCount] = useRecoilState(BikesTotalCountAtom)
	const [, setFilterLoading] = useRecoilState(FilterLoadingAtom)

	useEffect(() => {
		let query = queryParams({ pageIndex, pageSize })
		Object.keys(filters).forEach(key => {
			if (filters[key]) {
				query += `&${key}=${filters[key]}`
			}
		})

		debounce(async () => {
			setLoading(true)
			setFilterLoading(true)
			const request = await BikeService.getAllBike(query).catch(error => {
				Snackbar.error(error || 'Error happened while trying to fetch data!')
				setLoading(false)
				setFilterLoading(false)
				return
			})
			const totalCountRequest = await BikeService.getBikeTotalCount(query).catch(error => {
				Snackbar.error(error || 'Error happened while trying to fetch data!')
				setLoading(false)
				setFilterLoading(false)
				return
			})

			if (request && request.data) {
				if (request.data && 'bikes' in request.data) setData(request.data.bikes as Bike[])
			}
			if (totalCountRequest && totalCountRequest.data) setTotalCount(totalCountRequest.data)
			setLoading(false)
			setFilterLoading(false)
		}, 500)()
	}, [pageSize, pageIndex, filters])

	return null
}

export default BikesController
