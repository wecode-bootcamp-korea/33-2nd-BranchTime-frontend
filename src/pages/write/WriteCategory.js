import { TiBackspace } from 'react-icons/ti';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const WriteCategory = ({
  mainCategoryId,
  setMainCategoryId,
  setSubCategory,
}) => {
  const [mainCategoryName, setMainCategoryName] = useState('');
  const [category, setCategory] = useState();

  const selectMainCategory = (e, id) => {
    setMainCategoryId(id);
    setMainCategoryName(e.target.innerHTML);
  };

  const selectSubCategory = id => {
    setSubCategory(id);
  };

  const setMainCategory = () => {
    setMainCategoryId('');
    setMainCategoryName('');
    setSubCategory('');
  };

  useEffect(() => {
    fetch(`http://10.58.1.170:8001/contents/`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(result => {
        setCategory(result.message);
      });
  }, []);

  return (
    <CategoryWrapper>
      <ResetMainBtn onClick={setMainCategory} mainCategoryId={mainCategoryId}>
        <TiBackspace />
      </ResetMainBtn>
      {category && (
        <>
          <MainCategory>
            <MainList mainCategoryId={mainCategoryId}>
              {category.map(({ id, main_category_name }) => {
                return (
                  <div key={id} onClick={e => selectMainCategory(e, id)}>
                    {main_category_name}
                  </div>
                );
              })}
            </MainList>
          </MainCategory>
          <SelectedMainCategory mainCategoryName={mainCategoryName}>
            <div>{mainCategoryName}</div>
          </SelectedMainCategory>
          {mainCategoryId && (
            <SubCategory mainCategoryId={mainCategoryId}>
              {category[mainCategoryId - 1].sub_category.map(({ id, name }) => {
                return (
                  <span key={id} onClick={e => selectSubCategory(id)}>
                    {name}
                  </span>
                );
              })}
            </SubCategory>
          )}
        </>
      )}
    </CategoryWrapper>
  );
};

const ResetMainBtn = styled.button`
  position: absolute;
  left: 0;
  top: 15%;
  transition: 500ms;

  ${props =>
    !props.mainCategoryId &&
    css`
      display: none;
    `}
`;

const CategoryWrapper = styled.div`
  ${({ theme }) => theme.flex.flexBox}
  transition: 500ms;
`;

const MainCategory = styled.div`
  position: absolute;
  left: 5%;
  top: 15%;
  font-size: small;
  color: white;
  cursor: pointer;
  overflow: scroll;
  transition: 500ms;
`;

const SelectedMainCategory = styled.div`
  position: absolute;
  left: 5%;
  top: 15%;
  font-size: small;
  color: white;
  cursor: pointer;
  transition: 500ms;

  div {
    margin-bottom: 1.5rem;
    background-color: ${({ theme }) => theme.colors.mint};
    border-radius: 10rem;
    margin: 0 0.4rem 0 0;
    padding: 0.4rem 0.8rem;
    transition: 500ms;
  }

  ${props =>
    !props.mainCategoryName &&
    css`
      display: none;
    `}
`;

const MainList = styled.div`
  ${({ theme }) => theme.flex.flexBox}

  div {
    margin-bottom: 1.5rem;
    background-color: ${({ theme }) => theme.colors.mint};
    border-radius: 10rem;
    margin: 0 0.4rem 0 0;
    padding: 0.4rem 0.8rem;
    transition: 500ms;

    &:hover {
      opacity: 0.5;
    }
  }

  ${props =>
    props.mainCategoryId &&
    css`
      display: none;
    `}
`;

const SubCategory = styled.div`
  ${({ theme }) => theme.flex.flexBox}
  color: ${({ theme }) => theme.colors.mint};
  flex-wrap: wrap;
  position: absolute;
  left: 5%;
  top: 24%;
  font-size: small;
  cursor: pointer;
  overflow: scroll;
  transition: 500ms;

  div {
    margin-bottom: 1.5rem;
  }

  span {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10rem;
    margin-right: 0.4rem;
    padding: 0.4rem 0.8rem;
    transition: 500ms;

    &:hover {
      opacity: 0.5;
    }

    ${props =>
      !props.mainCategoryId &&
      css`
        display: none;
      `}
  }
`;

export default WriteCategory;
