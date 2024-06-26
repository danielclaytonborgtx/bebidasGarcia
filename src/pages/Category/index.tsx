import { useNavigate } from "react-router-dom";
import { usePrismicDocumentsByType } from "@prismicio/react";

import { Title } from "../../components/Title";
import { Text } from "../../components/Text";

import {
  Container,
  Content,
  LogoContainer,
  CategoryItem,
  CategoryPhoto,
  CategoryPhotoContainer,
  CategoryTitle,
  CategoriesContainer,
  ButtonMenu,
} from "./styles";

export function Category() {
  const [document] = usePrismicDocumentsByType("categories");

  console.log("Document", document?.results);

  const categories = document?.results.map((result) => {
    return {
      id: result.uid,
      name: result.data.name,
      image: result.data.image.url,
    };
  });

  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate("/");
  };

  const handleNavigateToProducts = (categoryId: string | null) => {
    if (!categoryId) return;

    navigate(`/sub-categories?categoryId=${categoryId}`);
  };

  return (
    <Container>
      <LogoContainer />

      <Title>Bebidas Garcia</Title>

      <Text size="lg" weight={700}>
        Categorias
      </Text>

      <Content>
        <CategoriesContainer>
          {categories &&
            categories.map((category) => (
              <CategoryItem
                key={category.id}
                onClick={() => handleNavigateToProducts(category.id)}
              >
                <CategoryTitle>{category.name}</CategoryTitle>
                <CategoryPhotoContainer>
                  <CategoryPhoto src={category.image} />
                </CategoryPhotoContainer>
              </CategoryItem>
            ))}
        </CategoriesContainer>
        <ButtonMenu onClick={handleNavigateToHome}>
          <Text size="lg" weight={700} variant="secondary">
            Voltar
          </Text>
        </ButtonMenu>
      </Content>
    </Container>
  );
}
