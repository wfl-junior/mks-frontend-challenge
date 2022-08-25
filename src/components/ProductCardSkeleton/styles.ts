import styled from "styled-components";

export const ProductCardSkeletonContainer = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.shape.primary};
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1352);
  overflow: hidden;

  display: flex;
  flex-direction: column;

  @media (prefers-reduced-motion: no-preference) {
    animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
`;

export const SkeletonImage = styled.div`
  width: 100%;
  height: calc(138px + 1.125rem);

  background-color: ${({ theme }) => theme.colors.background.secondary};
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

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const SkeletonTitle = styled.div`
  height: 1rem;
  width: 90%;
  border-radius: 100vmax;

  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const SkeletonPrice = styled.div`
  padding: 0.375rem;
  border-radius: 5px;
  height: 1.5rem;
  width: 4rem;

  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const Description = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const SkeletonDescription = styled.div`
  height: 0.625rem;
  width: 100%;
  border-radius: 100vmax;

  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const SkeletonBuyButton = styled.div`
  margin-top: 0.875rem;
  width: 100%;
  padding: 0.5rem;
  height: 2rem;

  background-color: ${({ theme }) => theme.colors.background.secondary};
`;
