import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import baseTheme from '../themes/baseTheme'
import AppToolbar from './AppToolbar'

const pageStyles = {
  padding: 0,
  height: '100vh',
  margin: 0,
}
const App = ({ children }) => {
  return (
    <main style={pageStyles}>
      <CssBaseline />
      <ThemeProvider theme={baseTheme}>
        <AppToolbar />
        {children}
      </ThemeProvider>
    </main>
  )
}
export default App
