import { Container } from "./styles";

import { Title } from "../../components/Title";
import { Person } from "../../components/Person";

export function Home() {
  return (
    <Container>
      <Title>Bebidas Garcia</Title>

      <Person name="Paulo" age={29} profession="Programador" />
      <Person name="Daniel" age={80} profession="Futuro Programador" />
      <Person name="Mirelle" age={34} profession="Enferemeira" />
    </Container>
  );
}
