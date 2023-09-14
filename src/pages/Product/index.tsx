import { useNavigate } from "react-router-dom";

import { Text } from "../../components/Text";
import { Title } from "../../components/Title";

import { products } from "../../data";

import { ButtonMenu } from "../Home/styles";
import { Container, Content, LogoContainer } from "./styles";

export function Product() {
  const navigate = useNavigate();

  const categoryId = window.location.search.replace("?categoryId=", "");

  console.log(categoryId);

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
