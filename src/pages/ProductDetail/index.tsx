import { useNavigate } from "react-router-dom";
import { products } from "../../data";
import { useMemo } from "react";

import { Text } from "../../components/Text";
import { Title } from "../../components/Title";

import {
  Container,
  Content,
  LogoContainer,
  ProductDetailItem,
  ProductDetailPhoto,
  ProductDetailPhotoContainer,
  ProductDetailTitle,
  ProductDetailsContainer,
  ButtonMenu,
  ProductDetailPrice,
} from "./styles";

export function ProductDetail() {
  const navigate = useNavigate();
  const productId = window.location.search.replace("?productId=", "");
  console.log(productId);

  const handleGoBack = () => {
    navigate(-1);
  };

  const product = useMemo(() => {
    const findProduct = products.find(
      (productItem) => productItem.id === Number(productId),
    );
    if (findProduct) {
      return findProduct;
    }
    return undefined;
  }, [productId]);

  return (
    <Container>
      <LogoContainer />

      <Title>Bebidas Garcia</Title>
      {product && (
        <Text size="lg" weight={700}>
          {product.name}
        </Text>
      )}
      {product && (
        <Content>
          <ProductDetailsContainer>
            <ProductDetailItem key={product.id}>
              <ProductDetailTitle>{product.name}</ProductDetailTitle>
              <ProductDetailPhotoContainer>
                <ProductDetailPhoto src={product.image} alt={product.name} />
              </ProductDetailPhotoContainer>
              <ProductDetailPrice>
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.price)}
              </ProductDetailPrice>
            </ProductDetailItem>
          </ProductDetailsContainer>

          <ButtonMenu onClick={handleGoBack}>
            <Text size="lg" weight={700} variant="secondary">
              Voltar
            </Text>
          </ButtonMenu>
        </Content>
      )}
    </Container>
  );
}
