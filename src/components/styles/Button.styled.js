import styled from "styled-components";

export const StyledButton = styled.button`
  background: none;
  padding: 0.5rem 1rem;
  min-height: 2.75rem;
  color: ${(props) => props.theme.colors.green};
  border: 1px solid ${(props) => props.theme.colors.green};
  border-radius: 6px;
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
  font-size: 0.9rem;
  @media (max-width: 768px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
  }
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  place-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
`;
