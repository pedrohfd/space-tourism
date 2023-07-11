import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  position: absolute;

  @media (min-width: 1200px) {
    padding: 4rem 0 0 3.44rem;
  }

  @media (min-width: 400px) and (max-width: 1199px) {
    padding-left: 2.5rem;
    justify-content: space-between;
    width: 100vw;
  }
`

export const Logo = styled.img`
  width: 3rem;
  height: 3rem;

  @media (max-width: 399px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`

export const Line = styled.div`
  @media (min-width: 1200px) {
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
`

export const Blur = styled.nav`
  @media (min-width: 1200px) {
    ul {
      display: flex;
      gap: 3rem;
      list-style: none;
      height: 100%;
      align-items: center;
      margin-left: 7.5rem;
      counter-reset: item;
    }

    width: 100vw;
    height: 6rem;

    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
  }

  @media (min-width: 400px) and (max-width: 1199px) {
    ul {
      display: flex;
      gap: 3rem;
      list-style: none;
      height: 100%;
      align-items: center;
      margin: 0 3rem;
    }

    height: 6rem;

    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
  }
`

export const Button = styled(NavLink)`
  @media (min-width: 1200px) {
    color: ${colors.white};
    text-decoration: none;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.25rem;

    border-bottom: 0.2rem solid transparent;

    padding: 2.05rem 0;

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

  @media (min-width: 400px) and (max-width: 1199px) {
    color: ${colors.white};
    text-decoration: none;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1rem;

    border-bottom: 0.2rem solid transparent;

    padding: 2.22rem 0;

    transition: border-color 0.2s;

    &.active {
      border-color: ${colors.white};
    }
  }
`
