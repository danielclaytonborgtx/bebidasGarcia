import styled from "styled-components";

interface ContainerProps {
  size: "md" | "lg";
}

export const Container = styled.h1<ContainerProps>`
  font-size: ${({ size }) => (size === "md" ? "1.5rem" : "2rem")};
  font-weight: 500;
  color: ${({ theme }) => theme["gray-500"]};
  margin-bottom: 1rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;
