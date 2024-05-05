import { FONT_SIZE, FONT_WEIGHT } from '@app/contants/media'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const FooterWrapper = styled.div`
	display: inline-flex;
	justify-content: center;
	width: 100%;
	@media only screen and (max-width: ${568 - 0.02}px) {
		min-height: 2rem;
	}
	min-height: 2.125rem;
	user-select: none;

	.pagination {
		display: grid;
		grid-auto-flow: column;
		align-items: center;
		list-style: none;
		gap: 0.625rem;
		@media only screen and (max-width: ${400 - 0.02}px) {
			gap: 0.5rem !important;
		}

		> li {
			display: grid;
			border-radius: 0.25rem;
			cursor: pointer;
			height: 100%;

			@media only screen and (max-width: ${568 - 0.02}px) {
				min-width: 1.925rem;
			}
			min-width: 2.225rem;
			box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.07);
			background: ${({ theme }) => theme.colors.gray900O30};

			> a {
				display: grid;
				place-items: center;
				min-height: 100%;
				min-width: 100%;
				font-weight: ${FONT_WEIGHT.semibold};
				font-size: ${FONT_SIZE.xs};
				color: ${({ theme }) => theme.colors.gray750};
			}
		}
	}

	.pagination__prev,
	.pagination__next {
		@media only screen and (min-width: 568px) {
			min-width: 4.25rem !important;
		}
		min-width: 3.825rem !important;
		background: ${({ theme }) => theme.colors.gray900O30};
	}
	.pagination__prev.pagination__link__disable a,
	.pagination__next.pagination__link__disable a {
		color: ${({ theme }) => theme.colors.gray500} !important;
	}
	.pagination__prev a,
	.pagination__next a {
		color: ${({ theme }) => theme.colors.gray900} !important;
	}

	.pagination__link__active {
		${({ theme }) => {
			return css`
				box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.25) !important;
				a {
					color: ${theme.colors.gray900} !important;
				}
			`
		}}
	}
`
