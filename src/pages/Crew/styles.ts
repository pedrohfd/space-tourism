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

export const CrewContent = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
  }
`

export const LeftContent = styled.div`
  @media (min-width: 1200px) {
    padding: 16.3rem 0 10.5rem 10rem;
  }
`

export const RightContent = styled.div<CrewProps>`
  @media (min-width: 1200px) {
    padding: ${(props) =>
      props.name === 'Douglas Hurley' ? '17rem 10rem 0 0' : '22rem 10rem 0 0'};
  }
`

export const Informative = styled.h5`
  @media (min-width: 1200px) {
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
`

export const Name = styled.h1`
  @media (min-width: 1200px) {
    color: ${colors.white};
    font-size: 3.5rem;
    text-transform: uppercase;
  }
`

export const Role = styled.h2`
  @media (min-width: 1200px) {
    color: ${colors.white};
    font-size: 2rem;
    text-transform: uppercase;
    opacity: 0.5;
    margin-bottom: 1rem;
  }
`

export const Body = styled.p<CrewProps>`
  @media (min-width: 1200px) {
    width: ${(props) =>
      props.name === 'Victor Glover' ? '35rem' : '27.75rem'};
    color: ${colors.blue};
    font-size: 1.125rem;
    line-height: 2rem;
    margin-top: 1.5rem;
  }
`

export const CrewButtonArea = styled.div`
  @media (min-width: 1200px) {
    margin-top: 7.5rem;
    display: flex;
    justify-content: space-between;
    width: 9rem;
  }
`

interface CrewButtonProps {
  isActive: boolean
}

export const CrewButton = styled.button<CrewButtonProps>`
  @media (min-width: 1200px) {
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
`

export const CrewMember = styled.img``
