import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../../config';

const Keyword = () => {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}contents/`)
      .then(res => res.json())
      .then(data => setKeywords(data.message));
  }, []);

  const navigate = useNavigate();

  const goToPostlist = id => {
    navigate(`/post_list/${id}`);
  };

  return (
    <KeywordList>
      {keywords.slice(0, 24).map(keyword => {
        const { id, main_category_name } = keyword;

        return (
          <KeywordOne onClick={() => goToPostlist(id)} key={id}>
            {main_category_name}
          </KeywordOne>
        );
      })}
    </KeywordList>
  );
};

export default Keyword;

const KeywordList = styled.div`
  ${theme => theme.theme.flex.flexBox()}
  flex-wrap: wrap;
  width: 60rem;
  height: 21.688rem;
  margin: 2rem 14.531rem;
  /* border: 1px solid black; */
`;

const KeywordOne = styled.span`
  width: 7.438rem;
  height: 7.438rem;
  ${theme => theme.theme.flex.flexBox()}
  text-align: center;
  border: 1px solid #efefef;

  :hover {
    border: 1px solid #02c3bd;
    color: #02c3bd;
    cursor: pointer;
  }
`;
