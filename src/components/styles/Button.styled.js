import styled from "styled-components";

export const StyledButton = styled.button`
  background: none;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.green};
  border: 1px solid ${(props) => props.theme.colors.green};
  border-radius: 6px;
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  place-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
`;
