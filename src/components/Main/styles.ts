import styled, { css } from "styled-components";

export const MainContainer = styled.main`
  padding: 1.125rem 3rem;

  ${({ theme }) => css`
    @media ${theme.breakpoints.xs} {
      padding: 2.35rem 3.875rem;
    }

    @media ${theme.breakpoints.sm} {
      padding-block: 3.575rem;
    }

    @media ${theme.breakpoints.md} {
      padding-block: 4.8rem;
    }

    @media ${theme.breakpoints.lg} {
      padding: 6.025rem 2rem;
    }

    @media ${theme.breakpoints.xl} {
      padding-block: 7.25rem;
    }
  `}
`;

export const ContentContainer = styled.div`
  max-width: 938px;
  margin-inline: auto;
`;
