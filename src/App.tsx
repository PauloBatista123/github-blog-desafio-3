import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GithubProvider } from './context/GithubContext'
import { routesApp } from './routes'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GithubProvider>
        <RouterProvider router={routesApp} />
      </GithubProvider>

      <GlobalStyles />
    </ThemeProvider>
  )
}
