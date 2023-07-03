import { Container, Logo } from './styles'
import logo from '../../assets/shared/logo.svg'

export const Header = () => {
  return (
    <Container>
      <Logo src={logo} />
    </Container>
  )
}
