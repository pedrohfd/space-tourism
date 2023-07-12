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
    padding-top: 8.5rem;
  }

  @media (max-width: 399px) {
    background: url(${bgMobile}) no-repeat center center/cover;
  }
`

export const TechnologyContent = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 1200px) {
    padding: 16.3rem 0rem 10.5rem 10rem;

    div.flex {
      display: flex;

      margin-top: 8.5rem;
    }
  }

  @media (min-width: 400px) and (max-width: 1199px) {
    flex-direction: column;
  }
`

export const LeftContent = styled.div`
  @media (min-width: 400px) and (max-width: 1199px) {
    text-align: center;

    h5 {
      text-align: left;
    }
  }
`

export const RightContent = styled.div`
  @media (min-width: 400px) and (max-width: 1199px) {
    text-align: center;
  }
`

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

  @media (min-width: 400px) and (max-width: 1199px) {
    color: ${colors.white};
    font-size: 1.25rem;
    letter-spacing: 0.21rem;

    margin-bottom: 2.5rem;
    margin-left: 2.5rem;

    strong {
      opacity: 0.25;
      font-weight: 700;
      margin-right: 1.1rem;
    }
  }
`

export const TechnologyButtonArea = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    margin-right: 5rem;
  }

  @media (min-width: 400px) and (max-width: 1199px) {
    margin: 2.75rem 0;
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
    padding-top: 0.4rem;
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

  @media (min-width: 400px) and (max-width: 1199px) {
    background: ${(props) => (props.isActive ? colors.white : 'transparent')};
    border: 1px solid ${colors.white}40;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    color: ${(props) => (props.isActive ? colors.black : colors.white)};
    font-family: 'Bellefair', serif;
    font-size: 2rem;

    transition: all 0.2s;

    & + button {
      margin-left: 1rem;
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

  @media (min-width: 400px) and (max-width: 1199px) {
    color: ${colors.white};
    font-size: 2.5rem;
    text-transform: uppercase;
    margin: 1rem 0;
  }
`

export const Subtitle = styled.h5`
  @media (min-width: 1200px) {
    color: ${colors.blue};
    font-size: 1.25rem;
    letter-spacing: 0.16875rem;
  }

  @media (min-width: 400px) and (max-width: 1199px) {
    display: inline-block;
    color: ${colors.blue};
    font-size: 1rem;
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

  @media (min-width: 400px) and (max-width: 1199px) {
    display: inline-block;
    width: 35.8rem;
    color: ${colors.blue};
    line-height: 1.75rem;
  }
`

export const TechnologyImage = styled.img`
  @media (min-width: 1200px) {
    &.landscape {
      display: none;
    }
  }

  @media (min-width: 400px) and (max-width: 1199px) {
    &.portrait {
      display: none;
    }

    &.landscape {
      width: 105%;
    }
  }
`
