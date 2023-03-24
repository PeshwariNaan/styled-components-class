import styled from 'styled-components';

const ComplexTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
      <div className="underlineHipster"></div>
      <h2 className="title">Random from global styles</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: var(--primary);
    margin: 2rem auto;
  }

  .underlineHipster {
    width: 5rem;
    height: 0.25rem;
    background: var(--secondary);
    margin: 2rem auto;
  }
  .title {
    color: blue;
  }
`;

export default ComplexTitle;
