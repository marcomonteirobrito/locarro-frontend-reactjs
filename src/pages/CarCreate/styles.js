import styled from 'styled-components';
import { darken } from 'polished';

import background from '../../assets/login.jpg';

export const Main = styled.div`
  height: 100%;
  background: url(${background}) no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Container = styled.div`
  width: 450px;
  max-width: 450px;
  padding: 35px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 12px;  

  h1 {
    color: orange;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 35px;

    input {
      background: rgba(0, 0, 0, 0.6);
      border-radius: 4px;
      border: 0;
      height: 44px;
      padding: 0 15px;
      color: #ffffff;
      margin: 0 0 10px;

      &::placeholder {
        color: orange;
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
      background: rgba(255, 255, 255, 0.7);
      font-weight: bold;
      color: #081229;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.2, 'rgba(255, 255, 255, 0.7)')};
        color: black;
      } 
    }

    h2 {
      margin-top: 25px;;
      font-weight: bold;
      color: #fa7d5e;
      font-size: 16px;

      &:hover {
        color: ${darken(0.1, '#fa7d5e')}
      }
    }

  }

`;