import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-weight: 400;
  }

  html, body {
    overflow-x: hidden;
  }

  body {
    height: 100vh;
    overflow-y: hidden;
    position: relative;
  }

  h1, h2, h3, h4, h6 {
    font-family: 'Bellefair', serif;
  }

  h5, span, a {
    font-family: 'Barlow Condensed', sans-serif;
  }

  p {
    font-family: 'Barlow', sans-serif;
  }
`
