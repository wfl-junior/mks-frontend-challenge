import styled, { css } from "styled-components";

interface CartDrawerContainerProps {
  isOpen: boolean;
}

export const CartDrawerContainer = styled.aside<CartDrawerContainerProps>`
  position: fixed;
  z-index: 10;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  width: min(330px, 100vw);
  box-shadow: -5px 0 6px rgb(0 0 0 / 0.13);

  transition: transform 300ms ease-in-out;

  ${({ theme, isOpen }) => css`
    background-color: ${theme.colors.brand};

    transform: translateX(${isOpen ? "0" : "100%"});

    @media ${theme.breakpoints.sm} {
      width: 486px;
    }
  `}
`;

export const Content = styled.div`
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding-top: 2.25rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding-inline: 2rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding-inline: 3rem;
  }
`;

export const Title = styled.strong`
  font-size: 1.6875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const CloseButton = styled.button`
  aspect-ratio: 1 / 1;
  width: 2.375rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;

  font-size: 1.25rem;
  font-weight: 400;

  ${({ theme }) => css`
    color: ${theme.colors.text.secondary};
    background-color: ${theme.colors.shape.tertiary};
  `}

  transition: filter 200ms linear;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Products = styled.div`
  overflow-y: auto;
  max-height: 55vh;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding: 0.5rem 1.75rem;
  margin-top: 3.4375rem;
  margin-inline: 0.25rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    max-height: 59vh;
    margin-top: 4rem;
    padding-inline: 2.75rem;
    gap: 1.75rem;
  }

  /* custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.shape.secondary};
    border-radius: 100vmax;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.text.primary};
    border-radius: 100vmax;
  }

  @supports (scrollbar-color: black white) {
    & {
      scrollbar-width: thin;
      scrollbar-color: ${({ theme }) =>
        `${theme.colors.text.primary} ${theme.colors.shape.secondary}`};
    }
  }
`;

export const NoProductsText = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.secondary};

  padding: 1.5rem 2rem 2.625rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 2.25rem 3rem 2.625rem;
  }
`;

export const CompletePurchaseButton = styled.button`
  width: 100%;
  padding: 2.625rem 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.75rem;
  font-weight: 700;

  ${({ theme }) => css`
    color: ${theme.colors.text.secondary};
    background-color: ${theme.colors.shape.tertiary};
  `}

  transition: filter 200ms linear;

  &:hover {
    filter: brightness(0.8);
  }
`;
