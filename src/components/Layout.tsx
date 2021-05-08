import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import baseTheme from '../themes/baseTheme'
import AppToolbar from './AppToolbar'

const pageStyles = {
  padding: 0,
  margin: 0,
  overflowX: 'hidden',
}
const Layout = ({ children }) => {
  return (
    //@ts-ignore
    <main style={pageStyles}>
      <CssBaseline />
      <ThemeProvider theme={baseTheme}>
        <AppToolbar />
        {children}
      </ThemeProvider>
    </main>
  )
}
export default Layout
