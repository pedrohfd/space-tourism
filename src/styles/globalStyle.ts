import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-weight: 400;
  }

  html, body {
    overflow: hidden;
  }

  body {
    position: relative;
    height: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
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
