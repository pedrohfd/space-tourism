import styled from 'styled-components'
import bgDesktop from '../../assets/home/background-home-desktop.jpg'
import bgTablet from '../../assets/home/background-home-tablet.jpg'
import bgMobile from '../../assets/home/background-home-mobile.jpg'
import { colors } from '../../styles/colors'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  height: 100vh;

  @media (min-width: 1200px) {
    background: url(${bgDesktop}) no-repeat center center/cover;
    padding: 24rem 10.31rem 8.19rem;
  }

  @media (min-width: 400px) and (max-width: 1199px) {
    background: url(${bgTablet}) no-repeat center center/cover;
  }

  @media (max-width: 399px) {
    background: url(${bgMobile}) no-repeat center center/cover;
  }
`

export const Content = styled.div`
  @media (min-width: 1200px) {
    display: flex;

    align-items: flex-end;
    justify-content: space-between;
  }
`

export const Title = styled.h1`
  @media (min-width: 1200px) {
    font-size: 9.375rem;
    color: ${colors.white};
    margin: 1.5rem 0;
  }
`

export const SubTitle = styled.h5`
  @media (min-width: 1200px) {
    font-size: 1.75rem;
    color: ${colors.blue};
    letter-spacing: 0.29531rem;
  }
`

export const Body = styled.p`
  @media (min-width: 1200px) {
    font-size: 1.125rem;
    line-height: 2rem;
    color: ${colors.blue};
    width: 27.75rem;
  }
`

export const ExploreButton = styled(Link)`
  @media (min-width: 1200px) {
    h4 {
      color: ${colors.black};
      font-size: 2rem;
      letter-spacing: 0.125rem;
    }

    min-width: 274px;
    min-height: 274px;

    display: flex;

    background: ${colors.white};
    width: 274px;
    height: 274px;

    text-decoration: none;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    transition: outline-width 0.2s;

    &:hover {
      outline: 5.5rem solid ${colors.white}1A;
    }
  }
`
