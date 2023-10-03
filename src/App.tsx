import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { PostsProvider } from './contexts/PostsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PostsProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PostsProvider>
    </ThemeProvider>
  )
}
