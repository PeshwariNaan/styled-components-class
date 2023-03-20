import styled from 'styled-components';

// A little different setup where the component is piped through the styles but it feels convoluted to me
const AlternativeTitle = ({ title, className }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className="underline"></div>
    </div>
  );
};

const Wrapper = styled(AlternativeTitle)`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: #645cff;
    margin: 2rem auto;
  }
`;

export default Wrapper;
