# Branch Time

- FE : 박슬기, 김형겸, 박주영, 신윤지
- BE : 임한구, 김민정

  <br/>

# 클론코딩 사이트

- [브런치](https://brunch.co.kr/)

<br/>

# 작업 기간

- 2022.06.07 - 2022.06.17 (11일간)

<br/>


# 구현 내용

### Nav & sideDrawer
- 반응형 UI 구현
- woff 웹 폰트 내장을 통한 golbal style 지정
- scroll event에 따른 UI 변경
- 엔드 포인트에 따른 컴포넌트 변경
- useNavigate를 통한 페이지 이동
- localStorage를 통한 로그인 상태에 따른 UI 변경 구현
<br/>

### write 페이지
- markdown editor Library 설정
- Form Data를 이용한 write Header 배경 이미지 삽입 및 삭제 구현
- write Header color infinite 변경을 통한 꾸미기 구현
- Title align 변경 구현
<br/>

# Coding Convention

- 들여쓰기는 tab, 혹은 공백 문자 2개를 사용한다.
- 변수와 함수, className 명명 규칙은 Camel Case를 사용한다.
- 값이 변하지 않는 변수는 const를, 값이 변하는 변수는 let을 사용하여 선언하고 var는 절대로 사용하지 않는다.
- 함수 선언시 arrow function(() => {}) 위주로 사용한다.
- 주석은 코드 설명보다는 수정 사항이나 미구현 사항을 기재할 때 사용하기로 한다.
- 함수 네이밍 규칙은 해당 함수의 동작을 앞에, 동작이 적용될 태그를 뒤에 위치하게 작명한다. (ex) handleInput)
- component의 전체를 감싸는 최상단 태그의 className은 컴포넌트 이름으로 명명한다. (ex) product, productlist)
- styled-components를 사용한다.
- 인라인 스타일링은 지양한다.
