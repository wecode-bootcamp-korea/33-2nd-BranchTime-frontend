import React from 'react';
import styled from 'styled-components';

const WriterList = ({ list }) => {
  return (
    <div>
      {list &&
        list.map(list => {
          const {
            id,
            author_thumbnail,
            author_name,
            author_introduction,
            author_subcategory,
          } = list;
          return (
            <li key={id}>
              <a href="#!">
                <WriterProfile src={author_thumbnail} alt="writer" />
                <WritersName>{author_name}</WritersName>
                <WritersJob>{author_subcategory}</WritersJob>
                <WriterDesc>{author_introduction}</WriterDesc>
              </a>
            </li>
          );
        })}
    </div>
  );
};

export default WriterList;

const WriterProfile = styled.img`
  width: 5rem;
  height: 5rem;
  border: 1px solid #efefef;
  border-radius: 50%;
`;

const WritersName = styled.span`
  font-size: 1.25rem;
`;

const WritersJob = styled.span`
  font-size: 0.8rem;
  color: #666;
`;

const WriterDesc = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin-top: 1rem;
`;
