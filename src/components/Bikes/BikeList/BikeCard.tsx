import { Dates } from '@app/contants/Dates'
import { FONT_SIZE } from '@app/contants/media'
import { Bike } from '@app/services/Bikes/types'
import styled from '@emotion/styled'
import { ReactComponent as BikeIcon } from '@app/assets/svg/bike.svg'
import { Tooltip } from '@admixltd/admix-component-library'

const ListCarCard = ({ bike }: { bike: Bike }) => {
	return (
		<MainWrapper>
			{bike?.large_img && <Image src={bike.large_img} alt={bike?.registry_name ?? ''} />}
			{!bike?.large_img && (
				<IconWrapper>
					<BikeIcon />
					<p>there is no image!</p>
				</IconWrapper>
			)}
			<ContentWrapper>
				<Tooltip title={bike.title}>
					<Name>{bike?.title || '-'}</Name>
				</Tooltip>

				<Tooltip title={bike.description}>
					<Text>{bike.description || '-'}</Text>
				</Tooltip>

				{(() => {
					if (bike.date_stolen)
						return (
							<Text>
								Stolen date -{' '}
								{Dates.format(
									Dates.getDate(bike?.date_stolen * 1000),
									`DD MMMM YYYY`
								)}
							</Text>
						)
					else return <Text>date stolen not avaiable</Text>
				})()}
				{(() => {
					if (bike.date_stolen)
						return <Text>Stolen location - {bike.stolen_location}</Text>
					else return <Text>Stolen location not avaiable</Text>
				})()}
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

const Image = styled.img`
	height: 165px !important;
	object-fit: cover;
	width: 100%;
	border-radius: 1rem 0 0 1rem;
`

const IconWrapper = styled.div`
	display: grid;
	place-items: center;
	place-content: center;
	height: 165px !important;

	p {
		font-size: ${FONT_SIZE.xxs};
	}
	svg {
		width: 4rem !important;
		height: 4rem !important;
		fill: ${({ theme }) => theme.colors.gray750} !important;
	}
`

const ContentWrapper = styled.div`
	display: grid;
	gap: 0.25rem;
	padding: 0.5rem;
	overflow: hidden;
`

const Name = styled.h1`
	font-weight: bold;
	font-size: ${FONT_SIZE.md};
	line-height: normal;
	text-align: start;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

const Text = styled.p`
	font-size: ${FONT_SIZE.xs};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

export default ListCarCard
