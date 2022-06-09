import React from 'react';
import styled from 'styled-components';

const PostDetailBody = ({ data }) => {
  return (
    <>
      {data.map(({ id, post_content }) => (
        <PostDetailBodyWarpper key={id}>
          <p>{post_content}</p>

          {/* <H1>🍋Custom Hook</H1>
          <P>Custom Hook은 이름이 use로 시작하는 자바스크립트 함수입니다.</P>
          <P>
            React에서 Hook의 동작을 처리하는 내부적인 규칙과도 관련이 되어 있고,
            공식적인 컨벤션이기 때문에 Custom Hook을 작성하실 때는 꼭 use- 로
            시작하는 이름을 지어주셔야 합니다.
          </P>
          <P>
            동일한 관심사의 코드끼리 모일 수 있도록 각각 분리하는 행위를
            관심사의 분리라고 합니다.
          </P>
          <P>
            Custom Hook을 사용하면 지금까지 컴포넌트 내부에 한 덩이로 결합하여
            사용했던 State와 Effect를 다음과 같이 분리하여 사용할 수 있습니다.
          </P>
          <H1>🍋View와 Logic이 분리 예시</H1>
          <Img
            src="/images/PostDetail/detail_page_image1.png"
            alt="임시 이미지"
          /> */}
        </PostDetailBodyWarpper>
      ))}
    </>
  );
};

export default PostDetailBody;

const PostDetailBodyWarpper = styled.section`
  width: 43.75rem;
  margin: 3.125rem auto;
`;

// const H1 = styled.h1`
//   font-size: 2.5rem;
//   font-weight: 700;
//   line-height: 1.5;
//   margin: 2rem 0 1rem 0;
// `;

// const P = styled.p`
//   font-size: 1.125rem;
//   transition: color 0.125s ease-in 0s;
//   line-height: 1.7;
// `;

// const Img = styled.img`
//   width: 100%;
// `;
