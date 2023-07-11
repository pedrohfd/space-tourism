import { Blur, Button, HeaderContainer, Line, Logo } from './styles'
import logo from '../../assets/shared/logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt='Logo da aplicação' />

      <Line />

      <Blur>
        <ul>
          <li>
            <Button to='/'>HOME</Button>
          </li>
          <li>
            <Button to='/destination'>DESTINATION</Button>
          </li>
          <li>
            <Button to='/crew'>CREW</Button>
          </li>
          <li>
            <Button to='/technology'>TECHNOLOGY</Button>
          </li>
        </ul>
      </Blur>
    </HeaderContainer>
  )
}
