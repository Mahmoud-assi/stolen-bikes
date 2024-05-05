import { BikesTotalCountAtom } from '@app/atoms/Bikes'
import { FONT_SIZE, FONT_WEIGHT } from '@app/contants/media'
import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'
import BikeListController from './Controller'
import BikesList from './BikeList'
import Filter from './Filter'

const Bikes = () => {
	const totalCount = useRecoilValue(BikesTotalCountAtom)

	return (
		<Container>
			<MainDataContainer>
				<TitleCountWrapper>
					<Title>Stolen Bikes</Title>
					<p>{totalCount.proximity}</p>
				</TitleCountWrapper>
			</MainDataContainer>
			<SecondSectionWrapper>
				<BikeListController />
				<BikesList />
				<Filter />
			</SecondSectionWrapper>
		</Container>
	)
}

const Container = styled.div`
	display: grid;
	width: 100%;
	gap: 1rem;
	padding: 2rem 1.5rem;
`

const MainDataContainer = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: minmax(0, 1fr) 30%;
	padding: 0;
	gap: 1rem;
	@media (max-width: ${992 - 0.02}px) {
		grid-auto-flow: row;
		grid-template-columns: 1fr;
	}
`

const SecondSectionWrapper = styled(MainDataContainer)`
	@media (max-width: ${992 - 0.02}px) {
		display: flex;
		flex-direction: column-reverse;
	}
`

const TitleCountWrapper = styled.div`
	display: inline-flex;
	gap: 0.5rem;
	align-items: center;

	p {
		color: ${({ theme }) => theme.colors.gray500};
		font-size: ${FONT_SIZE.sm};
	}
`

const Title = styled.h1`
	font-weight: ${FONT_WEIGHT.semibold};
	@media only screen and (max-width: ${568 - 0.02}px) {
		font-size: ${FONT_SIZE.md};
	}
	@media only screen and (min-width: 568px) and (max-width: ${768 - 0.02}px) {
		font-size: ${FONT_SIZE.xl};
	}
	@media only screen and (min-width: 768px) {
		font-size: 1.5rem;
	}
	span {
		color: ${({ theme }) => theme.colors.primary};
	}
`

export default Bikes
