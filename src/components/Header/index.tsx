import { Blur, Button, Hamburger, HeaderContainer, Line, Logo } from './styles'
import logo from '../../assets/shared/logo.svg'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const handleToggleHamburger = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  return (
    <HeaderContainer isOpen={isMenuOpen}>
      <Logo src={logo} alt='Logo da aplicação' />

      <Line />

      <Hamburger>
        <input
          type='checkbox'
          onClick={handleToggleHamburger}
          checked={isMenuOpen}
        />
        <svg viewBox='0 0 32 32'>
          <path
            className='line line-top-bottom'
            d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'
          ></path>
          <path className='line' d='M7 16 27 16'></path>
        </svg>
      </Hamburger>

      <div onClick={() => setIsMenuOpen(false)} />

      <Blur isOpen={isMenuOpen}>
        <ul>
          <li>
            <Button to='/'>
              HOME <span />
            </Button>
          </li>
          <li>
            <Button to='/destination'>
              DESTINATION <span />
            </Button>
          </li>
          <li>
            <Button to='/crew'>
              CREW <span />
            </Button>
          </li>
          <li>
            <Button to='/technology'>
              TECHNOLOGY <span />
            </Button>
          </li>
        </ul>
      </Blur>
    </HeaderContainer>
  )
}
