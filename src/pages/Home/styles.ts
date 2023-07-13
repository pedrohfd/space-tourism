import styled from 'styled-components'
import bgDesktop from '../../assets/home/background-home-desktop.jpg'
import bgTablet from '../../assets/home/background-home-tablet.jpg'
import bgMobile from '../../assets/home/background-home-mobile.jpg'
import { colors } from '../../styles/colors'
import { Link } from 'react-router-dom'

export const HomeContainer = styled.div`
  height: 100vh;

  @media (min-width: 1008px) {
    background: url(${bgDesktop}) no-repeat center center/cover;
    padding: 24rem 10.31rem 8.19rem;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    background: url(${bgTablet}) no-repeat center center/cover;
    padding-top: 12.5rem;
  }

  @media (max-width: 640px) {
    background: url(${bgMobile}) no-repeat center center/cover;
    padding: 7rem 1.5rem 0;
  }
`

export const HomeContent = styled.div`
  @media (min-width: 1008px) {
    display: flex;

    align-items: flex-end;
    justify-content: space-between;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`

export const Title = styled.h1`
  @media (min-width: 1008px) {
    font-size: 9.375rem;
    color: ${colors.white};
    margin: 1.5rem 0;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    font-size: 9.375rem;
    color: ${colors.white};
    line-height: 9.375rem;
    margin: 1.5rem 0;
  }

  @media (max-width: 640px) {
    color: ${colors.white};
    font-size: 5rem;
    line-height: 6.25rem;
    margin: 1rem 0;
  }
`

export const SubTitle = styled.h5`
  @media (min-width: 1008px) {
    font-size: 1.75rem;
    color: ${colors.blue};
    letter-spacing: 0.29531rem;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    color: ${colors.blue};
    font-size: 1.25rem;
    letter-spacing: 0.21094rem;
  }

  @media (max-width: 640px) {
    color: ${colors.blue};
    font-size: 1rem;
    letter-spacing: 0.16875rem;
  }
`

export const Body = styled.p`
  @media (min-width: 1008px) {
    font-size: 1.125rem;
    line-height: 2rem;
    color: ${colors.blue};
    width: 27.75rem;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    display: inline-block;
    width: 27.75rem;
    color: ${colors.blue};
    line-height: 1.75rem;
  }

  @media (max-width: 640px) {
    color: ${colors.blue};
    font-size: 0.9375rem;
    line-height: 1.5625rem;
  }
`

export const ExploreButton = styled(Link)`
  @media (min-width: 1008px) {
    color: ${colors.black};
    font-family: 'Bellefair', serif;
    font-size: 2rem;
    letter-spacing: 0.125rem;

    min-width: 17.125rem;
    min-height: 17.125rem;

    display: flex;

    background: ${colors.white};
    width: 17.125rem;
    height: 17.125rem;

    text-decoration: none;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    transition: outline-width 0.2s;

    &:hover {
      outline: 5.5rem solid ${colors.white}1A;
    }
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    color: ${colors.black};
    font-size: 2rem;
    font-family: 'Bellefair', serif;
    letter-spacing: 0.125rem;

    min-width: 15.125rem;
    min-height: 15.125rem;

    display: inline-flex;

    background: ${colors.white};
    width: 15.125rem;
    height: 15.125rem;

    text-decoration: none;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    margin-top: 9.75rem;
  }

  @media (max-width: 640px) {
    color: ${colors.black};
    font-size: 1.25rem;
    font-family: 'Bellefair', serif;
    letter-spacing: 0.125rem;

    min-width: 9.375rem;
    min-height: 9.375rem;

    display: inline-flex;

    background: ${colors.white};
    width: 9.375rem;
    height: 9.375rem;

    text-decoration: none;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    margin-bottom: 3rem;
  }
`
