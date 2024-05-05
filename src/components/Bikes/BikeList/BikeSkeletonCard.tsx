import styled from '@emotion/styled'
import { Skeleton } from '@mui/material'

const BikeSkeletonCard = () => {
	return (
		<MainWrapper>
			<Image variant="rectangular" />
			<ContentWrapper>
				<Skeleton variant="text" width={`calc(100% - 5rem)`} height={35} />
				{Array.from({ length: 2 }).map((_, i) => (
					<Skeleton key={i} variant="text" width={`calc(100% - 9rem)`} height={`2rem`} />
				))}
			</ContentWrapper>
		</MainWrapper>
	)
}

const MainWrapper = styled.div`
	display: grid;
	grid-template-columns: 40% minmax(0, 1fr);
	grid-auto-flow: column;
	gap: 0.5rem;
	box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.25);
	border-radius: 1rem;
	overflow: hidden;
	background: ${({ theme }) => theme.colors.gray100};
`

const Image = styled(Skeleton)`
	height: 165px !important;
	width: 100% !impoerant;
	border-radius: 1rem 0 0 1rem !impoerant;
`

const ContentWrapper = styled.div`
	display: grid;
	gap: 0.25rem;
	padding: 0.5rem;
`

export default BikeSkeletonCard
