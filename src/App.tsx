import { Router } from './router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/globalStyle.ts'

function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
