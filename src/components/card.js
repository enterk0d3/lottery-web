import styled from 'styled-components';

const Card = styled.div`
  width: 95%;
  position: relative;
  max-width: 800px;
  margin: auto;
  background: #fff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 20px;
  text-align: center;
  overflow: hidden;
  transition: all .3s;

  @media screen and (max-width: 992px) {
      max-width: 680px;
  }

  @media screen and (max-width: 768px) {
      min-height: 500px;
      height: auto;
      margin: 20px auto;
  }

  @media screen and (max-height: 500px) and (min-width: 992px) {
      height: 350px;
  }
`;

export default Card;
