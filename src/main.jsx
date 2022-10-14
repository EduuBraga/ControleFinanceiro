import React from 'react'
import ReactDOM from 'react-dom/client'
import { EntriesProvider } from "./provider/EntriesProvider"
import { ThemeProvider } from 'styled-components'

import { Home } from './components/home'
import { GlobalStyles } from './styles/GlobalStyles'
import { dark } from "./styles/Themes/dark"
import { light } from "./styles/Themes/light"

ReactDOM.createRoot(document.getElementById('root')).render(
  <EntriesProvider>
    <>
      <ThemeProvider theme={dark}>
        <Home />
        <GlobalStyles />
      </ThemeProvider>
    </>
  </EntriesProvider>
)
