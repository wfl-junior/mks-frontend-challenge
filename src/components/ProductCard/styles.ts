import styled, { css } from "styled-components";

export const ProductCardContainer = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.shape.primary};
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1352);
  overflow: hidden;
  padding-top: 1.125rem;

  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  height: 138px;
`;

export const Content = styled.div`
  padding: 0.875rem 0.75rem 0.75rem 0.875rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.25rem;
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const PriceBadge = styled.div`
  background-color: ${({ theme }) => theme.colors.shape.secondary};
  padding: 0.375rem;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 0.9375rem;
  line-height: 1;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Description = styled.p`
  margin-top: 0.5rem;
  font-weight: 300;
  font-size: 0.625rem;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const BuyButton = styled.button`
  margin-top: auto;
  width: 100%;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;

  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;

  ${({ theme }) => css`
    color: ${theme.colors.text.secondary};
    background-color: ${theme.colors.brand};
  `}

  transition: filter 200ms linear;

  &:hover {
    filter: brightness(0.9);
  }
`;
