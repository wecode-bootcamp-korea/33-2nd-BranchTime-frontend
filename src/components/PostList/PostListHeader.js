import React from 'react';
import styled from 'styled-components';

const PostListHeader = () => {
  return (
    <Wrapper>
      <Title>IT 트렌드</Title>
      <Ul>
        {subCategories.map(({ id, title }) => (
          <SubCate key={id}>
            <Button>{title}</Button>
          </SubCate>
        ))}
      </Ul>
    </Wrapper>
  );
};

export default PostListHeader;

const subCategories = [
  {
    id: 1,
    title: 'IT',
  },
  {
    id: 2,
    title: 'HTML/CSS',
  },
  {
    id: 3,
    title: 'JavaScript',
  },
  {
    id: 4,
    title: 'React',
  },
  {
    id: 5,
    title: 'TypeScript',
  },
];

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
