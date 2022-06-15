import React, { useState, useEffect } from 'react';
import MyPageContent from '../../components/MyPage/MyPageContent';
import styled, { keyframes } from 'styled-components';
import Nav from '../../components/Nav/Nav';

const BookAnimation = () => {
  const [contentList, setContentList] = useState([]);
  useEffect(() => {
    fetch('/data/contentData.json')
      .then(res => res.json())
      .then(contentData => setContentList(contentData));
  }, []);

  return (
    <>
      <Nav />
      <BookAnimationContainer>
        <BookContainer>
          <BookSubject>
            <img src="/images/BookAnimation/book.PNG" alt="표지" />
          </BookSubject>
          <BookPage1>
            <img src="/images/BookAnimation/page1.PNG" alt="page1" />
          </BookPage1>
          <BookPage2>
            <img src="/images/BookAnimation/page2.PNG" alt="page2" />
          </BookPage2>
          <BookPage3>
            <img src="/images/BookAnimation/page3.PNG" alt="page3" />
          </BookPage3>
          <BookCover>
            <img src="/images/BookAnimation/bookCover.PNG" alt="cover" />
          </BookCover>
        </BookContainer>
        {contentList.map(contentDatas => (
          <AnimationContainer key={contentDatas.id}>
            <MyPageContent postItem={contentDatas} />
          </AnimationContainer>
        ))}
      </BookAnimationContainer>
    </>
  );
};

const contentUp = keyframes`
0%{
  opacity: 0;

}

90% {
  transform: translateY(0);
  opacity: 0;
}

100%{
  transform: translateY(-1rem);
  opacity: 1;
}
`;

const gone = keyframes`
0% {
}

50% {
  transform: translateX(0);
}


75% {
  transform: translateX(5rem);
  opacity: 1;
}

100% {
  transform: translateX(5rem);
  opacity: 0;
}
`;

const leftGo = keyframes`
0% {
}

50% {
  transform: translateX(0);
}

75% {
  transform: translateX(-8rem);
}

100% {
  transform: translateX(-8rem);
}
`;

const rightPage1 = keyframes`
0% {
}

50% {
  transform: translateX(0);
}

75% {
  transform: translateX(-5rem);
}


95% {
  transform: translateX(15.1rem);
}

100% {
  transform: translateX(15.1rem);
}
`;
const rightPage2 = keyframes`
0% {
}

50% {
  transform: translateX(0);
}

75% {
  transform: translateX(-5rem);
}


97% {
  transform: translateX(35.1rem);
}

100% {
  transform: translateX(35.1rem);
}
`;

const rightPage3 = keyframes`
0% {
}

50% {
  transform: translateX(0);
}

75% {
  transform: translateX(-5rem);
}


98% {
  transform: translateX(55.1rem);
}

100% {
  transform: translateX(55.1rem);
}
`;

const AnimationContainer = styled.div`
  animation: ${contentUp} 3s ease-out;
  animation-fill-mode: forwards;
`;

const BookAnimationContainer = styled.div`
  height: 60vh;
`;

const BookContainer = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 3rem;
`;

const BookSubject = styled.div`
  z-index: 4;
  position: absolute;
  left: 40%;
  animation: ${leftGo} 3s ease-out;
  animation-fill-mode: forwards;
`;

const BookPage1 = styled.div`
  z-index: 3;
  position: absolute;
  left: 40%;
  animation: ${rightPage1} 3s ease-in;
  animation-fill-mode: forwards;
`;
const BookPage2 = styled.div`
  z-index: 2;
  position: absolute;
  left: 40%;
  animation: ${rightPage2} 3s ease-in;
  animation-fill-mode: forwards;
`;
const BookPage3 = styled.div`
  z-index: 1;
  position: absolute;
  left: 40%;
  animation: ${rightPage3} 3s ease-in;
  animation-fill-mode: forwards;
`;

const BookCover = styled.div`
  z-index: 5;
  animation: ${gone} 3s ease-out;
  position: absolute;
  left: 40%;
  animation-fill-mode: forwards;
`;
export default BookAnimation;
