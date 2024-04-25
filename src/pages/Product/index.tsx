import { useNavigate } from "react-router-dom";
import { usePrismicDocumentsByType } from "@prismicio/react";

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

  const subCategoryId = window.location.search.replace("?subCategoryId=", "");
  const [productDocuments] = usePrismicDocumentsByType("product");
  console.log(productDocuments);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleNavigateToProductDetail = (productId: string) => {
    // Adicionado tipo string para productId
    if (productId && typeof productId === "string") {
      navigate(`/product?productId=${productId}`);
    }
  };

  const products = productDocuments?.results
    ?.filter((result) => result.data.subcategoryid === subCategoryId)
    .map((result) => ({
      id: result.uid,
      name: result.data.name,
      image: result.data.image.url,
      price: result.data.value,
    }));

  return (
    <Container>
      <LogoContainer />

      <Title>Bebidas Garcia</Title>

      <Text size="lg" weight={700}>
        Produtos
      </Text>

      <Content>
        <ProductsContainer>
          {products?.map((product) => (
            <ProductItem
              key={product.id}
              onClick={() => handleNavigateToProductDetail(String(product.id))} // Convertendo para string
            >
              <ProductTitle>{product.name}</ProductTitle>
              <ProductPhotoContainer>
                <ProductPhoto src={product.image} />
              </ProductPhotoContainer>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductItem>
          ))}
        </ProductsContainer>

        <ButtonMenu onClick={handleGoBack}>
          <Text size="lg" weight={700} variant="secondary">
            Voltar
          </Text>
        </ButtonMenu>
      </Content>
    </Container>
  );
}
