import { Container } from "./styles";

import { Title } from "../../components/Title";
import { Person } from "../../components/Person";
import { Text } from "../../components/Text";

export function Home() {
  return (
    <Container>
      <Title>Bebidas Garcia</Title>
      <Text>teste</Text>

      <Person name="Paulo" age={29} profession="Programador" />
      <Person name="Daniel" age={80} profession="Futuro Programador" />
      <Person name="Mirelle" age={34} profession="Enferemeira" />
    </Container>
  );
}
