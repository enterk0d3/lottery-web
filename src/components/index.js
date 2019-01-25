import { createGlobalStyle } from 'styled-components';

import Button from './button';
import Card from './card';
import Content from './content';
import Input from './input';
import Loading from './loading';

export {
  Button,
  Card,
  Content,
  Input,
  Loading
}

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800");

* {
  box-sizing: border-box;
}

body {
  background-color: #FFE53B;
  background-image: linear-gradient(147deg, #FFE53B 0%, #fd3838 74%);
  min-height: 100vh;
  font-family: 'Fira Sans', sans-serif;
  display: flex;
}

body #root {
  display: flex;
  margin: auto;
}

@-webkit-keyframes drift {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  from {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes drift {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  from {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
