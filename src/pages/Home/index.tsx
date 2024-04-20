import { useNavigate } from "react-router-dom";

import { Text } from "../../components/Text";
import { Title } from "../../components/Title";

import {
  ButtonMenu,
  Container,
  Content,
  LogoContainer,
  Sale,
  SaleDescription,
  SalePhoto,
  SalePhotoContainer,
  SalePrice,
  SaleTitle,
  SalesContainer,
} from "./styles";

import { sales } from "../../data";

export function Home() {
  const navigate = useNavigate();

  const handleNavigateToCategories = () => {
    navigate("/categories");
  };

  return (
    <Container>
      <LogoContainer />

      <Title>Bebidas Garcia</Title>

      <Text>Seja bem-vindo</Text>

      <Content>
        <ButtonMenu onClick={handleNavigateToCategories}>
          <Text size="lg" weight={700} variant="secondary">
            Ver menu
          </Text>
        </ButtonMenu>

        {/* <SalesContainer>
          {sales.map((sale) => (
            <Sale key={sale.id}>
              <SaleTitle>{sale.title}</SaleTitle>
              <SaleDescription>{sale.description}</SaleDescription>
              <SalePhotoContainer>
                <SalePhoto src={sale.image} />
              </SalePhotoContainer>
              <SalePrice>
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(sale.price)}
              </SalePrice>
            </Sale>
          ))}
        </SalesContainer> */}
      </Content>
    </Container>
  );
}
