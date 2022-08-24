import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 9;

  background-color: ${({ theme }) => theme.colors.brand};
  box-shadow: 0 4px 4px rgb(0 0 0 / 0.25);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-block: 0.6875rem;
  padding-inline: 1.25rem 1.4375rem;

  ${({ theme }) => css`
    @media ${theme.breakpoints.xs} {
      padding-block: 0.9rem;
      padding-inline: 2.1rem 1.9625rem;
    }

    @media ${theme.breakpoints.sm} {
      padding-block: 1.1125rem;
      padding-inline: 2.95rem 2.4875rem;
    }

    @media ${theme.breakpoints.md} {
      padding-block: 1.325rem;
      padding-inline: 3.8rem 3.0125rem;
    }

    @media ${theme.breakpoints.lg} {
      padding-block: 1.5375rem;
      padding-inline: 4.65rem 3.5375rem;
    }

    @media ${theme.breakpoints.xl} {
      padding-block: 1.75rem;
      padding-inline: 5.5rem 4.0625rem;
    }
  `}
`;

export const Logo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const LogoPrimaryText = styled.span`
  font-size: 2rem;
  font-weight: 600;
  line-height: 0.8;

  ${({ theme }) => css`
    @media ${theme.breakpoints.sm} {
      font-size: 2.25rem;
    }

    @media ${theme.breakpoints.lg} {
      font-size: 2.5rem;
    }
  `}
`;

export const LogoSecondaryText = styled.span`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1;

  ${({ theme }) => css`
    @media ${theme.breakpoints.sm} {
      font-size: 1.125rem;
    }

    @media ${theme.breakpoints.lg} {
      font-size: 1.25rem;
    }
  `}
`;

export const CartButton = styled.button`
  border-radius: 8px;
  padding-block: 0.5rem;
  padding-inline: 0.5rem 0.875rem;

  font-weight: 700;
  font-size: 0.75rem;

  background-color: ${({ theme }) => theme.colors.shape.primary};
  color: ${({ theme }) => theme.colors.text.tertiary};

  display: flex;
  align-items: center;
  gap: 0.625rem;

  ${({ theme }) => css`
    @media ${theme.breakpoints.sm} {
      font-size: 0.9375rem;
      gap: 0.875rem;
      padding-block: 0.625rem;
      padding-inline: 0.625rem 1.3125rem;
    }

    @media ${theme.breakpoints.lg} {
      font-size: 1.125rem;
      gap: 1rem;
      padding-block: 0.75rem;
      padding-inline: 0.9375rem 1.6875rem;
    }
  `}

  transition: filter 200ms linear;

  &:hover {
    filter: brightness(0.9);
  }
`;
