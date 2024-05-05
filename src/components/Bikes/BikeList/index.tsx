import { useRecoilValue } from 'recoil'
import ListFooter from './ListFooter'
import styled from '@emotion/styled'
import { FONT_SIZE, FONT_WEIGHT } from '@app/contants/media'
import { LoadingDataAtom, DataListAtom, PageSizeAtom } from '@app/atoms/Bikes'
import { Bike } from '@app/services/Bikes/types'
import BikeCard from './BikeCard'
import BikeSkeletonCard from './BikeSkeletonCard'

const BikesList = () => {
	const loading = useRecoilValue(LoadingDataAtom)
	const items = useRecoilValue(DataListAtom)
	const pageSize = useRecoilValue(PageSizeAtom)

	return (
		<Wrapper>
			{items && items.length > 0 && (
				<CardWrapper>
					{loading &&
						items?.map((_, i) => {
							return <BikeSkeletonCard key={i} />
						})}
					{!loading &&
						items?.map((bike: Bike) => {
							return <BikeCard {...{ bike, key: bike.id }} />
						})}
				</CardWrapper>
			)}
			{(!items || !items.length) && loading && (
				<CardWrapper>
					{Array.from({ length: pageSize }).map((_, i) => (
						<BikeSkeletonCard key={i} />
					))}
				</CardWrapper>
			)}
			{(!items || !items.length) && !loading && <NoData>There is no data avaiable!</NoData>}
			{items && items.length > 0 && <ListFooter />}
		</Wrapper>
	)
}

const CardWrapper = styled.div`
	display: grid;
	grid-gap: 24px;
	grid-template-columns: repeat(2, minmax(100px, 1fr));
	width: 100% !important;
	@media only screen and (max-width: ${768 - 0.02}px) {
		grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
		width: 100% !important;
	}
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`

const NoData = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	gap: 1rem;
	font-size: ${FONT_SIZE.lg};
	font-weight: ${FONT_WEIGHT.semibold};
	color: ${({ theme }) => theme.colors.gray900};
	min-height: 300px;
`

export default BikesList
