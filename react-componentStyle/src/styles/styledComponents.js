//반응형 사이즈 함수

const sizes = {
    desktop: 1024,
    tablet: 768
  };
  
  // 위에있는 size 객체에 따라 자동으로 media 쿼리 함수를 만들어줍니다.
  // 참고: https://www.styled-components.com/docs/advanced#media-templates
  const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)};
      }
    `;
  
    return acc;
  }, {});
  
  const Box = styled.div`
    /* props 로 넣어준 값을 직접 전달해줄 수 있습니다. */
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
    width: 1024px;
    margin: 0 auto;
    ${media.desktop`width: 768px;`};
    ${media.tablet`width: 768px;`};
  `;