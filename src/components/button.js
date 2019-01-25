import styled from 'styled-components';

const Button = styled.button`
  margin: 20px auto;
  display: flex;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  padding: 15px 35px;
  border: 0;
  border-radius: 50px;
  color: #fff;
  box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
  text-decoration: none;
  font-weight: 500;
  justify-content: center;
  text-align: center;
  letter-spacing: 1px;
  @media screen and (max-width: 576px) {
      width: 50%;
  }
`;

export default Button;
