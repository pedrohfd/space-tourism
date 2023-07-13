import styled from 'styled-components'

import bgDesktop from '../../assets/destination/background-destination-desktop.jpg'
import bgTablet from '../../assets/destination/background-destination-tablet.jpg'
import bgMobile from '../../assets/destination/background-destination-mobile.jpg'
import { colors } from '../../styles/colors'

export const DestinationContainer = styled.div`
  height: 100vh;

  @media (min-width: 1008px) {
    background: url(${bgDesktop}) no-repeat center center/cover;
    padding: 16.3rem 10.1rem 10.5rem 10.1rem;
    overflow-y: hidden;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    background: url(${bgTablet}) no-repeat center center/cover;
    padding-top: 8.5rem;
  }

  @media (max-width: 640px) {
    background: url(${bgMobile}) no-repeat center center/cover;
  }
`

export const DestinationContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 641px) and (max-width: 1007px) {
    flex-direction: column;
  }

  @media (max-width: 640px) {
    overflow-x: hidden;
    overflow-y: scroll;
    overscroll-behavior-y: contain;
    scroll-padding-bottom: 5rem;
    height: 100%;

    flex-direction: column;
    align-items: center;
    text-align: center;

    padding: 5.5rem 1.5rem 0;
  }
`

export const LeftContent = styled.div`
  @media (min-width: 641px) and (max-width: 1007px) {
    text-align: center;

    h5 {
      text-align: left;
    }
  }
`

export const Title = styled.h5`
  @media (min-width: 1008px) {
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

  @media (min-width: 641px) and (max-width: 1007px) {
    color: ${colors.white};
    font-size: 1.25rem;
    letter-spacing: 0.21rem;

    margin-bottom: 3rem;
    margin-left: 2.5rem;

    strong {
      opacity: 0.25;
      font-weight: 700;
      margin-right: 1.1rem;
    }
  }

  @media (max-width: 640px) {
    color: ${colors.white};
    font-size: 1rem;
    letter-spacing: 0.16875rem;
    text-transform: uppercase;
    margin-bottom: 2.5rem;

    strong {
      opacity: 0.25;
      font-weight: 700;
      margin-right: 0.5rem;
    }
  }
`

export const Destiny = styled.img`
  @media (min-width: 1008px) {
    margin-left: 3rem;
    width: 27.8rem;
    height: 27.8rem;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    width: 19rem;
    height: 19rem;
  }

  @media (max-width: 640px) {
    width: 12rem;
    height: 12rem;
  }
`

export const RightContent = styled.div`
  @media (min-width: 1008px) {
    padding-top: 4rem;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    text-align: center;
  }
`

export const DestinyButtonArea = styled.div`
  @media (min-width: 1008px) {
    display: flex;
    gap: 2rem;
    height: 2rem;

    margin-bottom: 2rem;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    display: inline-flex;
    gap: 2rem;
    height: 2rem;

    margin-top: 3.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 640px) {
    display: inline-flex;
    gap: 1.5rem;
    height: 2rem;

    margin-top: 2rem;
    margin-bottom: 1.25rem;
  }
`

interface ButtonProps {
  isActive: boolean
}

export const DestinyButton = styled.button<ButtonProps>`
  @media (min-width: 1008px) {
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

  @media (min-width: 641px) and (max-width: 1007px) {
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
  }

  @media (max-width: 640px) {
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
  }
`

export const DestinyName = styled.h1`
  @media (min-width: 1008px) {
    color: ${colors.white};
    font-size: 6.25rem;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    color: ${colors.white};
    font-size: 5rem;
  }

  @media (max-width: 640px) {
    color: ${colors.white};
    font-size: 3.5rem;
  }
`

export const Body = styled.p`
  @media (min-width: 1008px) {
    width: 27.75rem;
    color: ${colors.blue};
    font-size: 1.125rem;
    line-height: 2rem;
    margin-top: 0.8rem;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    display: inline-block;
    width: 35.8rem;
    color: ${colors.blue};
    font-size: 1.125rem;
    line-height: 2rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 640px) {
    height: 7rem;
    color: ${colors.blue};
    font-size: 0.9375rem;
    line-height: 1.5625rem;
  }
`

export const Divider = styled.div`
  background: #383b4b;
  @media (min-width: 1008px) {
    height: 0.06rem;
    margin-top: 3.3rem;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    height: 0.06rem;
    margin: 3.06rem 6rem 0;
  }

  @media (max-width: 640px) {
    height: 0.06rem;
    margin: 2rem 0 0;
  }
`

export const DistanceArea = styled.div`
  @media (min-width: 1008px) {
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

  @media (min-width: 641px) and (max-width: 1007px) {
    display: inline-flex;
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
      font-size: 0.875rem;
      margin-bottom: 0.75rem;
      letter-spacing: 0.14rem;
    }
  }

  @media (max-width: 640px) {
    margin-top: 2rem;

    h4 {
      color: ${colors.white};
      font-size: 1.75rem;
      margin-bottom: 1rem;
    }

    h5 {
      color: ${colors.blue};
      font-size: 0.875rem;
      margin-bottom: 0.75rem;
      letter-spacing: 0.14rem;
    }
  }
`
