import styled from "styled-components";

export const FooterContainer = styled.div`
  margin-top: auto;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  padding: 0.5rem;
`;

export const CopyrightText = styled.p`
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-weight: 400;
  font-size: 0.75rem;
  text-align: center;
`;
