import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>teste</h1>

      <GlobalStyle />
    </ThemeProvider>
  )
}
