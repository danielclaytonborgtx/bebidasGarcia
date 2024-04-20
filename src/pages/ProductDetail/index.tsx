import { useNavigate } from "react-router-dom";
import { usePrismicDocumentsByType } from "@prismicio/react";

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
  const [productDocuments] = usePrismicDocumentsByType("product");

  console.log("Product Documents:", productDocuments);

  const handleGoBack = () => {
    navigate(-1);
  };

  const product = productDocuments?.results?.find(
    (result) => result.uid === productId,
  );

  console.log("Product:", product);
  console.log("Product Data:", product?.data);

  return (
    <Container>
      <LogoContainer />

      <Title>Bebidas Garcia</Title>

      <Content>
        <ProductDetailsContainer>
          <ProductDetailItem>
            <ProductDetailTitle>
              {product?.data?.name
                ? product.data.name[0]?.text || ""
                : "Nome do Produto"}
            </ProductDetailTitle>
            <ProductDetailPhotoContainer>
              <ProductDetailPhoto
                src={product?.data?.image?.url || ""}
                alt={
                  product?.data?.name
                    ? product.data.name[0]?.text || "Nome do Produto"
                    : "Nome do Produto"
                }
              />
            </ProductDetailPhotoContainer>
            <ProductDetailPrice>
              {new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(product?.data?.value || 0)}
            </ProductDetailPrice>
          </ProductDetailItem>
        </ProductDetailsContainer>

        <ButtonMenu onClick={handleGoBack}>
          <Text size="lg" weight={700} variant="secondary">
            Voltar
          </Text>
        </ButtonMenu>
      </Content>
    </Container>
  );
}
