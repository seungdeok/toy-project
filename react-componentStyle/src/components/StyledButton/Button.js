import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  /* props 로 넣어준 값을 직접 전달해줄 수 있습니다. */
  background: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;
  /* 기본적으로는 1024px 에 가운데 정렬을 하고
    가로 크기가 작아짐에 따라 사이즈를 줄이고
    768px 미만으로 되면 꽉 채웁니다 */
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
//props로 넣어준 값 직접 전달

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
        background: rgba(255 ,255 ,255, 0.9);
    }

    ${props =>
        props.inverted &&
        css`
            background: none;
            border: 2px solid white;
            color: white;
            &:hover {
                background: white;
                color: black;
            }
    `};

    & + button {
        margin-left: 1rem;
    }
`;

const StyledButton = () => {
    return(
        <Container>
            <Button>HELLO</Button>
            <Button inverted={true}>테두리만</Button>
        </Container>
    );
    
}

export default StyledButton;