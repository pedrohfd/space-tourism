import styled from 'styled-components'

import bgDesktop from '../../assets/destination/background-destination-desktop.jpg'
import bgTablet from '../../assets/destination/background-destination-tablet.jpg'
import bgMobile from '../../assets/destination/background-destination-mobile.jpg'
import { colors } from '../../styles/colors'

export const DestinationContainer = styled.div`
  height: 100vh;

  @media (min-width: 1200px) {
    background: url(${bgDesktop}) no-repeat center center/cover;
    padding: 16.3rem 10.1rem 10.5rem 10.1rem;
  }

  @media (min-width: 400px) and (max-width: 1199px) {
    background: url(${bgTablet}) no-repeat center center/cover;
  }

  @media (max-width: 399px) {
    background: url(${bgMobile}) no-repeat center center/cover;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LeftContent = styled.div``

export const Title = styled.h5`
  @media (min-width: 1200px) {
    color: ${colors.white};
    font-size: 1.75rem;

    letter-spacing: 0.29rem;

    margin-bottom: 6rem;

    strong {
      opacity: 0.25;
      font-weight: 700;
      margin-right: 1.5rem;
    }
  }
`

export const Destiny = styled.img`
  @media (min-width: 1200px) {
    margin-left: 3rem;
    width: 27.8rem;
    height: 27.8rem;
  }
`

export const RightContent = styled.div`
  @media (min-width: 1200px) {
    padding-top: 4rem;
  }
`

export const DestinyButtonArea = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    gap: 2rem;
    height: 2rem;

    margin-bottom: 2rem;
  }
`

interface ButtonProps {
  isActive: boolean
}

export const DestinyButton = styled.button<ButtonProps>`
  @media (min-width: 1200px) {
    font-size: 1.125rem;
    font-family: 'Barlow Condensed', sans-serif;
    color: ${colors.blue};
    background: transparent;
    border: 0;
    outline: none;
    letter-spacing: 0.16rem;
    padding-bottom: 0.75rem;
    border-bottom: 0.187rem solid
      ${(props) => (props.isActive ? ` ${colors.white}` : 'transparent')};

    transition: border-color 0.2s;

    &:hover {
      border-color: ${(props) =>
        props.isActive ? `${colors.white}` : `${colors.white}80`};
    }
  }
`

export const DestinyName = styled.h1`
  @media (min-width: 1200px) {
    color: ${colors.white};
    font-size: 6.25rem;
  }
`

export const Body = styled.p`
  @media (min-width: 1200px) {
    width: 27.75rem;
    color: ${colors.blue};
    font-size: 1.125rem;
    line-height: 2rem;
    margin-top: 0.8rem;
  }
`

export const Divider = styled.div`
  @media (min-width: 1200px) {
    width: 100%;
    height: 0.06rem;
    background: #383b4b;
    margin-top: 3.3rem;
  }
`

export const DistanceArea = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    margin-top: 1.75rem;

    div + div {
      margin-left: 5rem;
    }

    h4 {
      color: ${colors.white};
      font-size: 1.75rem;
    }

    h5 {
      color: ${colors.blue};
      font-size: 1.025rem;
      margin-bottom: 0.75rem;
      letter-spacing: 0.14rem;
    }
  }
`
