import { useNavigate } from "react-router-dom";

import { subCategories, categories } from "../../data";

import { Title } from "../../components/Title";
import { Text } from "../../components/Text";

import {
  Container,
  Content,
  LogoContainer,
  SubCategoryItem,
  SubCategoryPhoto,
  SubCategoryPhotoContainer,
  SubCategoryTitle,
  CategoriesContainer,
  ButtonMenu,
} from "./styles";

export function SubCategory() {
  const navigate = useNavigate();

  const categoryId = window.location.search.replace("?categoryId=", "");

  const handleNavigateToHome = () => {
    navigate("/categories");
  };

  const handleNavigateToProducts = (categoryId: number) => {
    navigate(`/products?categoryId=${categoryId}`);
  };

  return (
    <Container>
      <LogoContainer />

      <Title>Bebidas Garcia</Title>

      <Text size="lg" weight={700}>
        {
          categories.find((category) => category.id === Number(categoryId))
            ?.name
        }
      </Text>

      <Content>
        <CategoriesContainer>
          {subCategories
            .filter(
              (subCategory) => subCategory.categoryId === Number(categoryId),
            )
            .map((subCategory) => (
              <SubCategoryItem
                key={subCategory.id}
                onClick={() => handleNavigateToProducts(subCategory.id)}
              >
                <SubCategoryTitle>{subCategory.name}</SubCategoryTitle>
                <SubCategoryPhotoContainer>
                  <SubCategoryPhoto src={subCategory.image} />
                </SubCategoryPhotoContainer>
              </SubCategoryItem>
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
