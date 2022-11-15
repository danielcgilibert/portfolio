import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import { css, Global } from '@emotion/react'
import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'
import theme from '../theme'
import { prismDarkTheme, prismLightTheme } from '../theme/prism'

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
        `}
      />
      {children}
    </>
  )
}
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle>
        <>
          <Component {...pageProps} />
          <Analytics />
        </>
      </GlobalStyle>
    </ChakraProvider>
  )
}

export default MyApp
