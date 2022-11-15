import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', 'colors.900')(props),
      color: mode('gray.900', 'whiteAlpha.900')(props),
      // bgGradient:
      //   'linear-gradient( 110.1deg,  rgba(30,2,83,1) 44.2%, rgba(198,55,160,1) 138.2% )',
    },
  }),
}

const colors = {
  colors: {
    900: '#1D1C1B',
    700: '#383531',
    600: '#403D39',
    400: '#CCC5B9',
    300: '#313134',
    200: '#FFFCF2',
    100: '#F7B267',
  },
}
const components = {
  menu: {
    boxShadow: 'lg',
    rounded: 'lg',
    flexDirection: 'column',
    py: '25',
  },
}

const fonts = {
  heading: `'Open Sans', sans-serif`,
  body: `'Open Sans', sans-serif`,
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config, colors, styles, components, fonts })

export default theme
