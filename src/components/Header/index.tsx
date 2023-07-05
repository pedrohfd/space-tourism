import { Blur, Button, HeaderContainer, Line, Logo } from './styles'
import logo from '../../assets/shared/logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} />

      <Line />

      <Blur>
        <ul>
          <li>
            <Button to='/'>
              <strong>00</strong> HOME
            </Button>
          </li>
          <li>
            <Button to='/destination'>
              <strong>01</strong> DESTINATION
            </Button>
          </li>
          <li>
            <Button to='/crew'>
              <strong>02</strong> CREW
            </Button>
          </li>
          <li>
            <Button to='/technology'>
              <strong>03</strong> TECHNOLOGY
            </Button>
          </li>
        </ul>
      </Blur>
    </HeaderContainer>
  )
}
