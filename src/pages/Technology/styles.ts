import styled from 'styled-components'

import bgDesktop from '../../assets/technology/background-technology-desktop.jpg'
import bgTablet from '../../assets/technology/background-technology-tablet.jpg'
import bgMobile from '../../assets/technology/background-technology-mobile.jpg'
import { colors } from '../../styles/colors'

export const TechnologyContainer = styled.div`
  height: 100vh;

  @media (min-width: 1200px) {
    background: url(${bgDesktop}) no-repeat center center/cover;
  }

  @media (min-width: 400px) and (max-width: 1199px) {
    background: url(${bgTablet}) no-repeat center center/cover;
  }

  @media (max-width: 399px) {
    background: url(${bgMobile}) no-repeat center center/cover;
  }
`

export const TechnologyContent = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    padding: 16.3rem 0rem 10.5rem 10rem;
    justify-content: space-between;

    div.flex {
      display: flex;

      margin-top: 8.5rem;
    }
  }
`

export const LeftContent = styled.div``

export const RightContent = styled.div``

export const Informative = styled.h5`
  @media (min-width: 1200px) {
    color: ${colors.white};
    font-size: 1.75rem;

    letter-spacing: 0.29rem;

    strong {
      opacity: 0.25;
      font-weight: 700;
      margin-right: 1.5rem;
    }
  }
`

export const TechnologyButtonArea = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    margin-right: 5rem;
  }
`

interface TechnologyButtonProps {
  isActive: boolean
}

export const TechnologyButton = styled.button<TechnologyButtonProps>`
  @media (min-width: 1200px) {
    background: ${(props) => (props.isActive ? colors.white : 'transparent')};
    border: 1px solid ${colors.white}40;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    color: ${(props) => (props.isActive ? colors.black : colors.white)};
    font-family: 'Bellefair', serif;
    font-size: 2rem;

    transition: all 0.2s;

    &:hover {
      border: 1px solid ${colors.white};
    }

    & + button {
      margin-top: 2rem;
    }
  }
`

export const Title = styled.h1`
  @media (min-width: 1200px) {
    font-size: 3.5rem;
    text-transform: uppercase;
    color: ${colors.white};

    margin-top: 0.69rem;
  }
`

export const Subtitle = styled.h5`
  @media (min-width: 1200px) {
    color: ${colors.blue};
    font-size: 1.25rem;
    letter-spacing: 0.16875rem;
  }
`

export const Description = styled.p`
  @media (min-width: 1200px) {
    color: ${colors.blue};
    font-size: 1.25rem;
    line-height: 2rem;
    width: 27.75rem;

    margin-top: 1rem;
  }
`

export const TechnologyImage = styled.img``
