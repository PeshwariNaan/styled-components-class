import styled from 'styled-components';
import BasicTitle from './components/BasicTitle.styles';
import ComplexTitle from './components/ComplexTitle';
import { DefaultButton, HipsterButton } from './components/Buttons.styles';
import AlternativeTitle from './components/AlternativeTitle';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle special>Styled components</BasicTitle>
      <AlternativeTitle title="This is weird!" />
      <ComplexTitle title="More complex title" />
      <BasicTitle>Styled components</BasicTitle>
      <DefaultButton>Click me</DefaultButton>
      <HipsterButton>Click me</HipsterButton>
    </div>
  );
}

export default App;
