import styled, { css } from "styled-components";

export const CartProductCardContainer = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.shape.primary};
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1352);

  position: relative;

  display: flex;
  flex-direction: column;

  padding: 1.3125rem 1rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: row;
    align-items: center;
    padding: 1.5rem 1.125rem;
  }
`;

export const DeleteFromCartButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  aspect-ratio: 1 / 1;
  width: 2rem;
  border-radius: 50%;

  font-size: 2rem;
  font-weight: 400;
  line-height: 1;

  ${({ theme }) => css`
    color: ${theme.colors.text.tertiary};

    @media ${theme.breakpoints.sm} {
      top: -0.375rem;
      right: -0.425rem;

      width: 1.125rem;
      background-color: ${theme.colors.shape.tertiary};

      font-size: 0.625rem;
      color: ${theme.colors.text.secondary};
    }
  `}

  transition: filter 200ms linear;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Image = styled.img`
  object-fit: contain;
  height: 100px;

  @media ${({ theme }) => theme.breakpoints.sm} {
    height: 60px;
  }
`;

export const Title = styled.strong`
  margin-top: 0.875rem;

  font-size: 1rem;
  line-height: 1.1875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-top: 0;
    margin-inline: 1.3125rem 0.5625rem;
    text-align: left;
  }
`;

export const QuantityPriceContainer = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-top: 0;
    margin-left: auto;
  }
`;

export const QuantityContainer = styled.div`
  height: 2.125rem;
  border-radius: 4px;
  padding: 0.25rem;
  display: flex;
  align-items: center;

  position: relative;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    color: ${theme.colors.text.tertiary};

    @media ${theme.breakpoints.sm} {
      height: 1.5rem;
    }
  `}
`;

export const QuantityLabel = styled.label`
  font-weight: 400;
  font-size: 0.5rem;
  display: none;

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: block;
    position: absolute;
    left: 0;
    top: -0.75rem;
  }
`;

export const QuantityButton = styled.button`
  height: 100%;
  width: 1.75rem;
  line-height: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  font-weight: 400;

  transition: filter 200ms linear;

  &:hover {
    filter: brightness(0.9);
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 1.125rem;
    font-size: 0.75rem;
  }
`;

interface QuantityInputProps {
  length: number;
}

export const QuantityInput = styled.input<QuantityInputProps>`
  height: 100%;
  padding-inline: 0.25rem;
  width: ${({ length }) => Math.min(length, 3) + 2}ch;
  text-align: center;
  border-inline: 1px solid ${({ theme }) => theme.colors.border};

  font-size: 1.125rem;
  font-weight: 400;

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 4ch;
    font-size: 0.625rem;
  }
`;

export const PriceBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 1.125rem;
  border-radius: 5px;

  ${({ theme }) => css`
    background-color: ${theme.colors.shape.secondary};

    @media ${theme.breakpoints.sm} {
      padding: 0;
      background-color: transparent;
    }
  `}
`;

export const Price = styled.span`
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 1;

  color: ${({ theme }) => theme.colors.text.secondary};

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;
