import styled from 'styled-components';
import { darken } from 'polished';

import background from '../../assets/img1.jpg';

export const Header = styled.div`
  height: 60px;
  color: #F8F8FF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(70, 80, 90, 0.7);

  h1 {
    margin-left: 30px;
    font-size: 50px;
  }

  a {
    color: #FFF;
    margin: 0 30px 0 30px;
   
    &:hover {
      color: ${darken(0.09, '#FFF')}
    }

  }
 
`;

export const Wrapper = styled.div`
  height: 100%;
  background: url(${background}) no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Container = styled.div`
  width: 100%;
  max-width: 350px;
  text-align: center;

  header {
    display: flex;
    justify-content: space-between;
    margin-top: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 35px;

    input {
      background: rgba(0, 0, 0, 0.4);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #ffffff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span{ 
      color: red;
      align-self: flex-start;
      font-weight: bold;
      margin: 0 0 10px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #fff;
      font-weight: bold;
      color: #707070;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#fff')};
        color: black;
      } 
    }

    h2 {
      margin-top: 25px;;
      font-weight: bold;
      color: red;
      font-size: 16px;

      &:hover {
        color: ${darken(0.09, 'red')}
      }
    }

  }

`;