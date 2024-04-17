import { useNavigate, useParams } from "react-router-dom";
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
  const { categoryId } = useParams();

  const [productDocuments] = usePrismicDocumentsByType("product");

  const handleNavigateToSubCategories = () => {
    navigate("/categories");
  };

  const handleNavigateToProductDetail = (productId) => {
    navigate(`/product?productId=${productId}`);
  };

  const products = productDocuments?.results
    ?.filter((result) => result.data.subCategoryId === categoryId)
    .map((result) => ({
      id: result.uid,
      name: result.data.name[0]?.text || "", // Acessando o texto do campo 'name'
      image: result.data.image.url,
      price: parseFloat(result.data.price) || 0,
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
