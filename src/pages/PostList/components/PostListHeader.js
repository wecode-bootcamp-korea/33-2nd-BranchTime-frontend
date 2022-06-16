import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PostListHeader = () => {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    fetch('http://10.58.2.42:8000/contents/postlist/1')
      .then(res => res.json())
      .then(data => {
        setCategory(data.post_list.title_list);
        setSubCategory(data.post_list.sub_title);
      });
  }, []);

  return (
    <>
      {category.map(({ main_id, main_title }) => (
        <Wrapper key={main_id}>
          <Title>{main_title}</Title>
          <Ul>
            {subCategory.map(({ sub_id, sub_title }) => (
              <SubCate key={sub_id}>
                <Button>{sub_title}</Button>
              </SubCate>
            ))}
          </Ul>
        </Wrapper>
      ))}
    </>
  );
};

export default PostListHeader;

const Wrapper = styled.section`
  padding: 4rem 0 2rem 0;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Ul = styled.ul`
  ${theme => theme.theme.flex.flexBox()}
`;

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 14px;
  color: #959595;
  font-size: 0.5rem;
  margin: 0 8px 10px 0;
  padding: 8px 20px;
  cursor: pointer;
`;

const SubCate = styled.li`
  font-size: 1rem;
  text-align: center;
`;
