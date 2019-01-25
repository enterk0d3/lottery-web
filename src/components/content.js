import styled from 'styled-components';

const Content = styled.div`
  padding-right: 25px;

  @media screen and (max-width: 768px) {
      text-align: center;
      padding: 0 30px;
  }

  @media screen and (max-width: 576px) {
      padding: 0;
  }
`;

export default Content;
