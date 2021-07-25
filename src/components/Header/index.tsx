import { Container } from './styles';

interface HeaderProps {
  logo: string,
  title: string
}

const Header = ( {logo, title}: HeaderProps) => {
  return (
    <Container>
      <img src={logo} alt="El.Vino" width="64" height="64" /> 
      <h1>{title}</h1>
    </Container>
  );
}

export default Header;
