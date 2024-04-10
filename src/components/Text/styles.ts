import styled from "styled-components";

interface TextProps {
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary";
  weight: 400 | 500 | 600 | 700;
}

export const Container = styled.div<TextProps>`
  font-size: ${(props) =>
    props.size === "sm" ? "14px" : props.size === "md" ? "16px" : "18px"};
  font-weight: ${(props) => props.weight};
  color: ${(props) => (props.variant === "secondary" ? "gray200" : "gray500")};
  /* Outros estilos de texto que você deseja aplicar */
`;
