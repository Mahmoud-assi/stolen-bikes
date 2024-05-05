import { AdmixThemeProvider, ignoreRecoilErrors } from '@admixltd/admix-component-library'
import { SnackbarUtilsConfigurator } from '@admixltd/admix-component-library/Snackbar'
import { Global, CacheProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { ModalProvider } from 'mui-modal-provider'
import { SnackbarProvider } from 'notistack'
import { RecoilRoot } from 'recoil'
import GlobalStyles from '@app/styles/global'
import theme from '@app/styles/theme'
import '@fontsource/montserrat'
import { AppRouter } from '@app/components/Router/AppRouter'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'

/**
 * Fix for annoying recoil messages
 * because of hot module replacement on development mode
 */

ignoreRecoilErrors()

const App = () => (
	<CacheProvider
		value={createCache({
			key: 'muirtl',
			stylisPlugins: [prefixer],
		})}
	>
		<AdmixThemeProvider theme={theme}>
			<CssBaseline />
			<Global styles={GlobalStyles({ theme })} />
			<RecoilRoot>
				<ModalProvider>
					<SnackbarProvider
						maxSnack={3}
						hideIconVariant
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right',
						}}
					>
						<SnackbarUtilsConfigurator />
						<AppRouter />
					</SnackbarProvider>
				</ModalProvider>
			</RecoilRoot>
		</AdmixThemeProvider>
	</CacheProvider>
)

export default App
