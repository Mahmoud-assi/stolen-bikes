import {
	BikesTotalCountAtom,
	DataListAtom,
	FilterLoadingAtom,
	LoadingDataAtom,
} from '@app/atoms/Bikes'
import Bikes from '@app/components/Bikes'
import { PageTitle } from '@app/components/common/PageTitle'
import { useMemo } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import BikeService from '@app/services/Bikes'
import queryParams from '@app/utils/queryParams'
import { Snackbar } from '@admixltd/admix-component-library/Snackbar'
import { Bike } from '@app/services/Bikes/types'
import styled from '@emotion/styled'

const BikesPage = () => {
	const [bikeData, setBikeData] = useRecoilState(DataListAtom)
	const [bikeTotalCount, setBikeTotalCount] = useRecoilState(BikesTotalCountAtom)
	const [loading, setLoading] = useRecoilState(LoadingDataAtom)
	const filterLoading = useRecoilValue(FilterLoadingAtom)

	const getBikes = async () => {
		const queryRequest = queryParams({ pageIndex: 1, pageSize: 10 })
		setLoading(true)
		const request = await BikeService.getAllBike(queryRequest).catch(error => {
			Snackbar.error(
				error || 'Error happened while trying to fetch bikes list, try again later!'
			)
			setLoading(false)
		})
		if (request && request.data) {
			if (request.data && 'bikes' in request.data) setBikeData(request.data.bikes as Bike[])
		}
		setLoading(false)
	}

	const getBikeTotalCount = async () => {
		setLoading(true)

		const request = await BikeService.getBikeTotalCount().catch(error =>
			Snackbar.error(error || 'Error happened while trying to fetch bikes count')
		)

		if (request && request.data) {
			setBikeTotalCount(request.data)
		}
		setLoading(false)
	}

	useMemo(() => {
		if ((!bikeData || !bikeData.length) && !loading && !filterLoading) getBikes()
	}, [bikeData, loading, filterLoading])

	useMemo(() => {
		if ((!bikeTotalCount || !Object.keys(bikeTotalCount).length) && !loading && !filterLoading)
			getBikeTotalCount()
	}, [bikeTotalCount, loading, filterLoading])

	return (
		<Wrapper>
			<PageTitle>Bikes thefts</PageTitle>
			<Bikes />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	max-width: 100vw;
	gap: 1rem;
	background: ${({ theme }) => theme.colors.gray200};
`

export default BikesPage
