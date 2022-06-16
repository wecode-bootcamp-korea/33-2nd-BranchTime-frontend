import { TiBackspace } from 'react-icons/ti';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const WriteCategory = ({
  mainCategoryId,
  setMainCategoryId,
  subCategory,
  setSubCategory,
}) => {
  const [mainCategoryName, setMainCategoryName] = useState('');
  const [category, setCategory] = useState();
  const [subCategoryName, setSubCategoryName] = useState('');

  const selectMainCategory = (e, id) => {
    setMainCategoryId(id);
    setMainCategoryName(e.target.innerHTML);
  };

  const selectSubCategory = (e, id) => {
    setSubCategory(id);
    setSubCategoryName(e.target.innerHTML);
  };

  const setMainCategory = () => {
    setMainCategoryId('');
    setMainCategoryName('');
    setSubCategory('');
    setSubCategoryName('');
  };

  useEffect(() => {
    fetch(`http://10.58.2.42:8000/contents/`, {
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
                  <MainListElement
                    key={id}
                    onClick={e => selectMainCategory(e, id)}
                  >
                    {main_category_name}
                  </MainListElement>
                );
              })}
            </MainList>
          </MainCategory>
          <SelectedMainCategory mainCategoryName={mainCategoryName}>
            <div>{mainCategoryName}</div>
          </SelectedMainCategory>
          {mainCategoryId && (
            <SubCategory
              subCategoryName={subCategoryName}
              mainCategoryId={mainCategoryId}
            >
              {category[mainCategoryId - 1].sub_category.map(({ id, name }) => {
                return (
                  <span key={id} onClick={e => selectSubCategory(e, id)}>
                    {name}
                  </span>
                );
              })}
            </SubCategory>
          )}
          <SelectedSubCategory subCategoryName={subCategoryName}>
            <div>{subCategoryName}</div>
          </SelectedSubCategory>
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
  transition: 500ms;
  width: 100%;
  height: 100%;
  overflow: scroll;
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

const MainList = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 40px;
  overflow: scroll;
  writing-mode: vertical-lr;

  ${props =>
    props.mainCategoryId &&
    css`
      display: none;
    `}
`;

const MainListElement = styled.div`
  display: flex;

  text-align: center;
  margin-bottom: 1.5rem;
  border-radius: 10rem;
  margin: 0 0.4rem 0.8rem 0;
  padding: 0.4rem 0.6rem;
  width: 7rem;
  color: ${({ theme }) => theme.colors.mint};
  border: 1px solid ${({ theme }) => theme.colors.mint};
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    opacity: 0.5;
  }
`;

const SelectedMainCategory = styled.div`
  position: absolute;
  left: 5%;
  top: 15%;
  font-size: small;
  color: white;
  cursor: pointer;

  div {
    text-align: center;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.mint};
    background-color: ${({ theme }) => theme.colors.mint};
    border-radius: 10rem;
    margin: 0 0.4rem 0.8rem 0;
    padding: 0.4rem 0.6rem;
    width: 6.5rem;
  }

  ${props =>
    !props.mainCategoryName &&
    css`
      display: none;
    `}
`;

const SelectedSubCategory = styled.div`
  ${({ theme }) => theme.flex.flexBox}
  color: ${({ theme }) => theme.colors.mint};
  flex-wrap: wrap;
  position: absolute;
  left: 5%;
  top: 24%;
  font-size: small;
  cursor: pointer;
  overflow: scroll;

  div {
    margin-bottom: 1.5rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10rem;
    margin-right: 0.4rem;
    padding: 0.4rem 0.8rem;
    transition: 500ms;
  }

  ${props =>
    !props.subCategoryName &&
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
      props.subCategoryName &&
      css`
        display: none;
      `}

    ${props =>
      !props.mainCategoryId &&
      css`
        display: none;
      `}
  }
`;

export default WriteCategory;
