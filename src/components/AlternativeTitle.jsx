import styled from 'styled-components';
import { colors, setupBorder } from '../utils';

// A little different setup where the component is piped through the styles but it feels convoluted to me
// This also uses colors from a js utils
const AlternativeTitle = ({ title, className }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className="underline"></div>
      <div className="box"></div>
    </div>
  );
};

const Wrapper = styled(AlternativeTitle)`
  h1 {
    text-transform: capitalize;
    text-align: center;
    color: ${colors.primary};
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: ${colors.primary};
    margin: 2rem auto;
  }
  .box {
    height: 10px;
    border: ${setupBorder({
      width: 5,
      color: 'green',
    })}; // Not a very efficient way to do this / doesn't save time
  }
`;

export default Wrapper;
