import React from 'react';
import styled from 'styled-components';
import InfoSuggestion from './components/InfoSuggestion';
import SuggestionCont from './components/SuggestionCont';

const Suggestion = () => {
  return (
    <SuggestionWarrper>
      <ProposeForm name="proposeForm">
        <SuggestionCont />
        <InfoSuggestion />
      </ProposeForm>
    </SuggestionWarrper>
  );
};

export default Suggestion;

const SuggestionWarrper = styled.section`
  background-color: #f8f8f8;
  width: 100%;
  height: 100%;
  padding: 81px 0 80px;
`;

const ProposeForm = styled.form`
  width: 43.75rem;
  margin: 0 auto;
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.white};
`;
