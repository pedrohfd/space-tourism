import styled from 'styled-components'

import bgDesktop from '../../assets/crew/background-crew-desktop.jpg'
import bgTablet from '../../assets/crew/background-crew-tablet.jpg'
import bgMobile from '../../assets/crew/background-crew-mobile.jpg'
import { colors } from '../../styles/colors'

interface CrewProps {
  name: string
}

export const CrewContainer = styled.div`
  height: 100vh;

  @media (min-width: 1008px) {
    background: url(${bgDesktop}) no-repeat center center/cover;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    background: url(${bgTablet}) no-repeat center center/cover;
    padding-top: 8.5rem;
  }

  @media (max-width: 640px) {
    background: url(${bgMobile}) no-repeat center center/cover;
  }
`

export const CrewContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 641px) and (max-width: 1007px) {
    flex-direction: column;
  }

  @media (max-width: 640px) {
    text-align: center;
    padding: 5.5rem 1.5rem 0;
  }
`

export const LeftContent = styled.div`
  @media (min-width: 1008px) {
    padding: 16.3rem 0 10.5rem 10rem;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    text-align: center;

    h5 {
      text-align: left;
    }
  }
`

export const RightContent = styled.div<CrewProps>`
  @media (min-width: 1008px) {
    padding: ${(props) =>
      props.name === 'Douglas Hurley' ? '17rem 10rem 0 0' : '22rem 10rem 0 0'};
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    text-align: center;
  }
`

export const Informative = styled.h5`
  @media (min-width: 1008px) {
    color: ${colors.white};
    font-size: 1.75rem;

    letter-spacing: 0.29rem;

    margin-bottom: 9rem;

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
      margin-right: 1rem;
    }
  }

  @media (max-width: 640px) {
    color: ${colors.white};
    font-size: 1rem;
    letter-spacing: 0.16rem;

    margin-bottom: 3rem;

    strong {
      opacity: 0.25;
      font-weight: 700;
      margin-right: 1rem;
    }
  }
`

export const Name = styled.h1`
  @media (min-width: 1008px) {
    color: ${colors.white};
    font-size: 3.5rem;
    text-transform: uppercase;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    color: ${colors.white};
    font-size: 2.5rem;
    text-transform: uppercase;
  }

  @media (max-width: 640px) {
    color: ${colors.white};
    font-size: 1.5rem;
    text-transform: uppercase;

    margin-top: 0.5rem;
  }
`

export const Role = styled.h2`
  @media (min-width: 1008px) {
    color: ${colors.white};
    font-size: 2rem;
    text-transform: uppercase;
    opacity: 0.5;
    margin-bottom: 1rem;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    color: ${colors.white};
    font-size: 1.5rem;
    text-transform: uppercase;
    opacity: 0.5;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 640px) {
    color: ${colors.white};
    font-size: 1rem;
    text-transform: uppercase;
    opacity: 0.5;

    margin-top: 2rem;
  }
`

export const Body = styled.p<CrewProps>`
  @media (min-width: 1008px) {
    width: ${(props) =>
      props.name === 'Victor Glover' ? '35rem' : '27.75rem'};
    color: ${colors.blue};
    font-size: 1.125rem;
    line-height: 2rem;
    margin-top: 1.5rem;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    display: inline-block;
    width: ${(props) => (props.name === 'Victor Glover' ? '37rem' : '28rem')};
    color: ${colors.blue};
    font-size: 1.1rem;
    line-height: 1.75rem;
    margin-top: 1rem;
  }

  @media (max-width: 640px) {
    color: ${colors.blue};
    font-size: 0.9375rem;
    line-height: 1.5625rem;
    margin-top: 1rem;
  }
`

export const CrewButtonArea = styled.div`
  @media (min-width: 1008px) {
    margin-top: 7.5rem;
    display: flex;
    justify-content: space-between;
    width: 9rem;

    &.mobile {
      display: none;
    }
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    margin-top: 2.5rem;
    display: inline-flex;
    justify-content: space-between;
    width: 5.5rem;

    &.mobile {
      display: none;
    }
  }

  @media (max-width: 640px) {
    margin-top: 2rem;
    display: inline-flex;
    justify-content: space-between;
    width: 5.5rem;

    &.desktop {
      display: none;
    }
  }
`

interface CrewButtonProps {
  isActive: boolean
}

export const CrewButton = styled.button<CrewButtonProps>`
  @media (min-width: 1008px) {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    border: 0;
    background: ${colors.white};
    opacity: ${(props) => (props.isActive ? '1' : '0.17')};
    cursor: pointer;

    transition: opacity 0.2s;

    &:hover {
      opacity: ${(props) => (props.isActive ? '1' : '0.5')};
    }
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    height: 0.625rem;
    width: 0.625rem;
    border-radius: 50%;
    border: 0;
    background: ${colors.white};
    opacity: ${(props) => (props.isActive ? '1' : '0.17')};
    cursor: pointer;

    transition: opacity 0.2s;
  }

  @media (max-width: 640px) {
    height: 0.625rem;
    width: 0.625rem;
    border-radius: 50%;
    border: 0;
    background: ${colors.white};
    opacity: ${(props) => (props.isActive ? '1' : '0.17')};
    cursor: pointer;

    transition: opacity 0.2s;
  }
`

export const CrewMember = styled.img`
  @media (min-width: 1008px) {
    &.mobile {
      display: none;
    }
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    margin-top: 2.5rem;

    &.mobile {
      display: none;
    }
  }

  @media (max-width: 640px) {
    &.desktop {
      display: none;
    }

    &.mobile {
      height: 13.875rem;
    }
  }
`

export const Divider = styled.div`
  @media (min-width: 1008px) {
    display: none;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    display: none;
  }

  @media (max-width: 640px) {
    height: 0.0625rem;
    background: #383b4b;
    margin-top: -0.25rem;
  }
`
