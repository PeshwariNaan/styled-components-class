import styled, { css } from 'styled-components/macro';
// Adding the macro can add a class that makes the classname more user friendly

export const DefaultButton = styled.button`
  background: #645cff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  margin: 1rem auto;
  ${({ large }) =>
    large
      ? css`
          padding: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
        `
      : css`
          padding: 0.5rem;
          font-size: 1rem;
          font-weight: 400;
        `}
`;

export const HipsterButton = styled(DefaultButton)`
  display: inline-block;
  width: 150px;
  background-color: transparent;
  color: #645cff;
  border: 1px solid #645cff;
  padding: 1rem;
  margin-right: 1rem;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
`;
