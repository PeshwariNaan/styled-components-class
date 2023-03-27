import styled, { css } from 'styled-components';

const fruits = ['orange', 'apple', 'banana', 'peach'];

const StyledItem = styled.li`
  list-style-type: none;
  ${({ odd }) => {
    return odd
      ? css`
          color: white;
          background: red;
          font-size: 1.5rem;
          padding: 1.5rem;
        `
      : css`
          color: #222;
          padding: 1rem;
        `;
  }}
`;

const List = () => {
  return (
    <ul>
      {fruits.map((fruit, index) => {
        return (
          <StyledItem key={index} odd={(index + 1) % 2 !== 0}>
            {fruit}
          </StyledItem>
        );
      })}
    </ul>
  );
};
export default List;
