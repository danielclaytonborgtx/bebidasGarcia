import { useNavigate } from "react-router-dom";

import { products } from "../../data";

import { Text } from "../../components/Text";
import { Title } from "../../components/Title";

import {
  Container,
  Content,
  LogoContainer,
  ProductItem,
  ProductPhoto,
  ProductPhotoContainer,
  ProductTitle,
  ProductsContainer,
  ButtonMenu,
  ProductPrice,
} from "./styles";

export function Product() {
  const navigate = useNavigate();

  const categoryId = window.location.search.replace("?categoryId=", "");

  const handleNavigateToSubCategories = () => {
    navigate(-1);
  };
  const handleNavigateToProductDetail = (productId: number) => {
    navigate(`/product?productId=${productId}`); // Navegue para a página de detalhes do produto
  };

  return (
    <Container>
      <LogoContainer />

      <Title>Bebidas Garcia</Title>

      <Text size="lg" weight={700}>
        Produtos
      </Text>

      <Content>
        <ProductsContainer>
          {products
            .filter((product) => product.subCategoryId === Number(categoryId))
            .map((product) => (
              <ProductItem
                key={product.id}
                onClick={() => handleNavigateToProductDetail(product.id)}
              >
                <ProductTitle>{product.name}</ProductTitle>
                <ProductPhotoContainer>
                  <ProductPhoto src={product.image} />
                </ProductPhotoContainer>
                <ProductPrice>
                  {new Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.price)}
                </ProductPrice>
              </ProductItem>
            ))}
        </ProductsContainer>

        <ButtonMenu onClick={handleNavigateToSubCategories}>
          <Text size="lg" weight={700} variant="secondary">
            Voltar
          </Text>
        </ButtonMenu>
      </Content>
    </Container>
  );
}
