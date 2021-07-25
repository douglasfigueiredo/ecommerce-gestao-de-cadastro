import { Container, Button } from './styles';

const Menu = () => {
  

  return (
    <Container>
      <Button to="/clientes">Clientes</Button>
      <Button  to="/produtos">Produtos</Button>
    </Container>
  );
}

export default Menu;
