import styled, { css, keyframes } from 'styled-components'
import { colors } from '../../styles/colors'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  position: absolute;

  @media (min-width: 1008px) {
    padding: 4rem 0 0 3.44rem;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    padding-left: 2.5rem;
    justify-content: space-between;
    width: 100vw;
  }

  @media (max-width: 640px) {
    width: 100vw;
    justify-content: space-between;
    padding: 1.5rem 1.5rem 0 1.5rem;
  }
`

export const Logo = styled.img`
  width: 3rem;
  height: 3rem;

  @media (max-width: 640px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`

export const Line = styled.div`
  @media (min-width: 1008px) {
    position: relative;

    margin-right: 1rem;

    width: 29.5625rem;
    height: 0.0625rem;
    flex-shrink: 0;
    background: ${colors.white};
    opacity: 0.25;

    left: 3.44rem;

    z-index: 1;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    display: none;
  }
`

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`

interface HamburgerProps {
  isOpen: boolean
}

export const Blur = styled.nav<HamburgerProps>`
  @media (min-width: 1008px) {
    ul {
      display: flex;
      gap: 3rem;
      list-style: none;
      height: 100%;
      align-items: center;
      margin-left: 7.5rem;
      counter-reset: item -1;
    }

    width: 100vw;

    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    ul {
      display: flex;
      gap: 3rem;
      list-style: none;
      height: 100%;
      align-items: center;
      margin: 0 3rem;
    }

    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
  }

  @media (max-width: 640px) {
    position: absolute;
    top: 0;
    right: 0;

    ul {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      list-style: none;
      margin: 7rem 0 0 2rem;
      counter-reset: item -1;
    }

    flex: 1;
    height: 100vh;
    width: 15rem;

    animation: ${({ isOpen }) =>
      isOpen
        ? css`
            ${slideIn} 0.5s forwards
          `
        : css`
            ${slideOut} 0.5s forwards
          `};

    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
  }
`

export const Hamburger = styled.label`
  @media (min-width: 1008px) {
    display: none;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    display: none;
  }

  @media (max-width: 640px) {
    z-index: 2;

    & input {
      display: none;
    }

    & svg {
      height: 2rem;
      transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .line {
      fill: none;
      stroke: ${colors.blue};
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 3;
      transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
        stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .line-top-bottom {
      stroke-dasharray: 12 63;
    }

    & input:checked + svg {
      transform: rotate(-45deg);
    }

    & input:checked + svg .line-top-bottom {
      stroke-dasharray: 20 300;
      stroke-dashoffset: -32.42;
    }
  }
`

export const Button = styled(NavLink)`
  @media (min-width: 1008px) {
    display: flex;
    height: 6rem;
    align-items: center;

    color: ${colors.white};
    text-decoration: none;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.25rem;
    letter-spacing: 0.16rem;

    border-bottom: 0.2rem solid transparent;

    transition: border-color 0.2s;

    &::before {
      content: counter(item, decimal-leading-zero);
      counter-increment: item;
      font-weight: 700;
      margin-right: 0.6rem;
    }

    &.active {
      border-color: ${colors.white};
    }

    &:hover {
      &.active {
        border-color: ${colors.white};
      }
      border-color: ${colors.white}80;
    }
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    display: flex;
    height: 6rem;
    align-items: center;

    color: ${colors.white};
    text-decoration: none;
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 0.14763rem;

    border-bottom: 0.2rem solid transparent;

    transition: border-color 0.2s;

    &.active {
      border-color: ${colors.white};
    }
  }

  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    height: 2rem;

    color: ${colors.white};
    text-decoration: none;
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 0.14763rem;

    border-right: 0.2rem solid transparent;

    transition: border-color 0.2s;

    &.active {
      border-color: ${colors.white};
    }

    &::before {
      content: counter(item, decimal-leading-zero);
      counter-increment: item;
      font-weight: 700;
      margin-right: 0.6rem;
    }
  }
`
