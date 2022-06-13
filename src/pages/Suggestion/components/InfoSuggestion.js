import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const InfoSuggestion = () => {
  const [suggestion, setSuggestion] = useState([]);
  const [userValue, setUserValue] = useState({
    suggestionTypeValue: '',
    emailValue: '',
    writeValue: '',
  });
  const [userCheck, setUserCheck] = useState('');

  const { suggestionTypeValue, emailValue, writeValue } = userValue;

  useEffect(() => {
    fetch('/data/SUGGESTION_TYPE.json')
      .then(res => res.json())
      .then(data => setSuggestion(data));
  }, []);

  const onSuggestion = e => {
    // TODO : 로그인 통신 후 token 삭제 예정
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.lQ0EbuckiDJz6Ep5ZCQQ4dEp7q09ePyuW2tm4ijSo4Y';
    e.preventDefault();
    fetch(`http://10.58.7.130:8000/authors/2`, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        proposal_object: suggestionTypeValue,
        sender_email: emailValue,
        content: writeValue,
      }),
    });
  };

  const inputValue = e => {
    const { name, value } = e.target;
    setUserValue({
      ...userValue,
      [name]: value,
    });
  };

  const inputUserCheck = e => {
    setUserCheck(e.target.checked);
  };

  const navigate = useNavigate();
  const onClickCancel = () => {
    navigate('/post_detail');
  };

  const requiredValue =
    suggestionTypeValue && emailValue && writeValue && userCheck;

  return (
    <Fieldset>
      <InfoPropose>
        <Li>
          <Title>제안 목적</Title>
          <SuggestionTypeWarpper>
            {suggestion.map(({ id, text, value, htmlFor }) => (
              <ProposeType key={id}>
                <RadioInput
                  onChange={inputValue}
                  type="radio"
                  name="suggestionTypeValue"
                  id={htmlFor}
                  value={value}
                />
                <label htmlFor={htmlFor}>{text}</label>
              </ProposeType>
            ))}
          </SuggestionTypeWarpper>
        </Li>
        <Li>
          <Title htmlFor="proposeEmail">이메일</Title>
          <Input
            onChange={inputValue}
            type="email"
            id="proposeEmail"
            name="emailValue"
            placeholder="연락 받을 메일을 입력해 주세요."
          />
        </Li>
        <Li>
          <Title htmlFor="proposeEmail">제안 내용</Title>
          <Textarea
            onChange={inputValue}
            type="text"
            name="writeValue"
            placeholder="요청할 업무 등 제안 작업과 관련된 정보를 상세히 입력해 주세요. 광고/홍보/스팸성 제안하기로 인한 신고 인입 시, 서비스 이용이 제한될 수 있습니다."
          />
        </Li>
      </InfoPropose>

      <CheckAgreeWarp>
        <CheckAgree>
          <CheckInput
            type="checkbox"
            name="agree"
            id="proposeAgree"
            onChange={inputUserCheck}
          />
          <CheckLabel htmlFor="proposeAgree">
            개인정보 수집 이용 동의
          </CheckLabel>
        </CheckAgree>

        <Table>
          <Colgroup>
            <Col />
            <Col />
            <Col />
          </Colgroup>

          <thead>
            <tr>
              <Th>목적</Th>
              <Th>항목</Th>
              <Th>보유기간</Th>
            </tr>
          </thead>
          <Tbody>
            <Tr>
              <Td>
                제안 메일 발송 및 오류 시<br />재 발송을 위한 CS처리
              </Td>
              <Td>이메일</Td>
              <Td>
                메일 발송 후 5일 간<br />
                보관 후 파기
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <MsgPropose>
          위 동의를 거부 할 권리가 있으면, 동의 거부 시 제안하기 메일을 발송할
          수 없습니다.
        </MsgPropose>
      </CheckAgreeWarp>

      <ButtonWrapp>
        <Button onClick={onClickCancel}>취소하기</Button>
        <Button disabled={!requiredValue} onClick={onSuggestion}>
          제안 메일 보내기
        </Button>
      </ButtonWrapp>
    </Fieldset>
  );
};

export default InfoSuggestion;

const Fieldset = styled.fieldset`
  width: 32.625rem;
  margin: 0 auto;
`;

const InfoPropose = styled.ul`
  background-color: #fff;
`;

const Li = styled.li`
  ${({ theme }) => theme.flex.flexBox('', '', '')};
  margin-top: 0.625rem;
  padding: 1.5rem 1.25rem 1.438rem 1.188rem;
  font-size: 0.813rem;
  line-height: 0.813rem;
  border: 1px solid #eee;
`;

const Title = styled.label`
  width: 5.438rem;
  color: ${({ theme }) => theme.colors.black};
`;

const SuggestionTypeWarpper = styled.div`
  ${({ theme }) => theme.flex.flexBox()};
`;

const ProposeType = styled.div`
  margin-left: ${({ theme }) => theme.margins.large};

  :first-child {
    margin-left: 0;
  }
`;

const RadioInput = styled.input`
  vertical-align: text-top;
`;

const Input = styled.input`
  border: 0;
  font-size: 0.813rem;
  line-height: 0.813rem;
  outline: 0;
  width: 100%;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 18.5rem;
  line-height: 1.5rem;
  padding: 0;
  font-size: 0.813rem;
  border: 0;
  outline: none;
  resize: none;
  overflow: hidden;
`;

const CheckAgreeWarp = styled.section`
  padding: ${({ theme }) => theme.paddings.large} 0;
`;

const CheckAgree = styled.div`
  ${({ theme }) => theme.flex.flexBox('', '', 'flex-start')};
`;

const CheckInput = styled.input``;

const CheckLabel = styled.label`
  margin-left: ${({ theme }) => theme.margins.base};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #666;
  letter-spacing: -0.063rem;
`;

const Table = styled.table`
  width: 100%;
  margin-top: 0.625rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: #666;
  border-top: 1px solid #eee;
  border-left: 1px solid #eee;
`;

const Colgroup = styled.colgroup``;

const Col = styled.col`
  :nth-child(1) {
    border-right: 1px solid #eee;
    width: 40.8%;
  }
  :nth-child(2) {
    border-right: 1px solid #eee;
    width: 23.6%;
  }
  :nth-child(3) {
    width: 35.6%;
  }
`;

const Th = styled.th`
  height: 2.188rem;
  line-height: 0.75rem;
  padding: 0.688rem 0;
  font-weight: normal;
  letter-spacing: 0.013rem;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  background-color: #fbfbfb;
`;

const Tbody = styled.tbody`
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

const Tr = styled.tr`
  height: 3.563rem;
`;

const Td = styled.td`
  line-height: 1.125rem;
  padding: 0.625rem 0;
  text-align: center;
  background-color: #fff;
`;

const MsgPropose = styled.p`
  color: #666;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin: 0.75rem 0;
`;

const ButtonWrapp = styled.div`
  ${({ theme }) => theme.flex.flexBox()};
`;

const Button = styled.button`
  width: 7.75rem;
  height: 2rem;
  font-size: 0.813rem;
  color: ${({ theme }) => theme.colors.mint};
  border: 1px solid ${({ theme }) => theme.colors.mint};
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  :disabled {
    opacity: 0.5;
    cursor: default;
  }

  :first-child {
    margin-right: 0.625rem;
    color: #bbb;
    border-color: #bbb;
  }
`;
