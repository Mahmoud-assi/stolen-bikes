import { css } from '@emotion/react'
import { PropsWithTheme } from '@app/styles/theme'
import resetStyles from '@app/styles/reset'
import '@fontsource/montserrat'
import { tooltipClasses } from '@mui/material'

const GlobalStyles = ({ theme }: PropsWithTheme) => css`
	${resetStyles()}

	:root {
		// disable zoom
		touch-action: pan-x pan-y;
		height: 100%;
	}

	* {
		box-sizing: border-box;
	}

	body {
		min-height: 100%;
		display: flex;
		flex-direction: column;
		position: relative;
		background-color: ${theme.colors.pageBackground};
		color: ${theme.colors.text};
		font-family: Montserrat, sans-serif !important;
		.${tooltipClasses.tooltipPlacementBottom} {
			background: ${theme.colors.gray500} !important;
			color: ${theme.colors.gray200} !important;
			text-align: justify !important;
			> span {
				color: ${theme.colors.gray500} !important;
			}
		}
	}
`

export default GlobalStyles
