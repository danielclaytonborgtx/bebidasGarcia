import { useNavigate } from "react-router-dom";
import { Title } from "../../components/Title";
import { Container, Content, LogoContainer } from "./styles";
import { ButtonMenu } from "../Home/styles";
import { Text } from "../../components/Text";

export function Product() {
  const navigate = useNavigate();

  const handleNavigateToCategories = () => {
    navigate("/categories");
  };

  return (
    <Container>
      <LogoContainer />

      <Title>Bebidas Garcia</Title>
      <Text size="lg" weight={700}>
        Produtos
      </Text>
      <Content>
        <ButtonMenu onClick={handleNavigateToCategories}>
          <Text size="lg" weight={700} variant="secondary">
            Voltar
          </Text>
        </ButtonMenu>
      </Content>
    </Container>
  );
}
