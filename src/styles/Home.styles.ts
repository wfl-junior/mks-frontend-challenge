import styled, { css } from "styled-components";

export const Products = styled.div`
  display: grid;
  gap: 1.125rem 1rem;
  grid-template-columns: 1fr;

  ${({ theme }) => css`
    @media ${theme.breakpoints.sm} {
      gap: 1.53125rem 1.1875rem;
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${theme.breakpoints.lg} {
      gap: 1.9375rem 1.375rem;
      grid-template-columns: repeat(4, 1fr);
    }
  `}
`;

export const ErrorMessage = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
`;
