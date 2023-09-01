import { ReactNode } from "react";
import { Container } from "./styles";

interface TextProps {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  weight?: 400 | 500 | 700;
  children: ReactNode;
}

export function Text({
  size = "md",
  variant = "primary",
  weight = 400,
  children,
}: TextProps) {
  return (
    <Container size={size} variant={variant} weight={weight}>
      {children}
    </Container>
  );
}
