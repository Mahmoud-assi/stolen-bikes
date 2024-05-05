import { AdmixLibraryTheme } from '@admixltd/admix-component-library'
import '@emotion/react'

/**
 * Red
 */

const red500 = `#B01010`
const red400 = '#CF595F'
const tomatoRed = '#FB6F43'
const salmonRed = '#FC7B7B'
const glamPink = '#FC4DE4'

/**
 * White
 */
const white = `#ffffff`

/**
 * Black
 */
const black = `#151617`
const black50 = `#262628`
const black850 = '#1e1e1c'
const vulkan = '#363738'

/**
 * Blue
 */
const blue400 = '#6CAAF8'

/**
 * Gray
 */
const gray50 = '#F6F7FA'
const gray100 = '#EAEDF5'
const gray150 = `#F4F6F9`
const gray200 = `#f7f8f9`
const gray500 = '#999999'
const gray600 = '#666666'
const gray650 = '#5E6064'
const gray700 = '#4D4D4D'
const gray750 = '#343433'
const gray800 = '#333333'
const gray900 = '#000000'

/**
 * Blue
 */

const blue500 = '#644DFC'

/**
 * Main Colors
 */

const mainTheme = {
	...AdmixLibraryTheme,
	fontFamily: {},
	colors: {
		...AdmixLibraryTheme.colors,
		black,
		black850,
		black50,
		vulkan,
		text: black,
		red: red500,
		red400,
		gray: gray650,
		gray50,
		gray100,
		gray150,
		gray200,
		gray500,
		gray600,
		gray650,
		gray700,
		gray750,
		gray800,
		gray900,
		blue400,
		white,
		primary: AdmixLibraryTheme.colors['gray400'],
		blue500,
		tomatoRed,
		salmonRed,
		glamPink,
		pageBackground: white,
	},
}

const theme = {
	...mainTheme,
}

/**
 * Extend style-components with theme type
 */

export type ITheme = typeof theme

export type PropsWithTheme<T = unknown> = T & {
	theme: ITheme
}

export default theme
