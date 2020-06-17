import styled from 'styled-components';
import { darken } from 'polished';

import background from '../../assets/login.jpg';

export const Container = styled.div`
  height: 100%;
  background: url(${background}) no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Wrapper = styled.div`
  width: 600px;
  max-width: 600px;
  padding: 35px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 12px;  

  form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    input {
      background: rgba(0, 0, 0, 0.6);
      border-radius: 4px;
      border: 0;
      height: 44px;
      padding: 0 150px;
      color: #ffffff;
      margin: 0 0 10px;

      &::placeholder {
        color: orange;
      }
    }

    select {
      background: rgba(0, 0, 0, 0.6);
      border-radius: 4px;
      border: 0;
      height: 44px;
      padding-left: 147px;
      width: 457px;
      color: orange;
      margin: 0 0 10px;

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
  }

  a {
    text-decoration: none;
  }

  span {
    color: #f8f8ff;

    &:hover {
        color: ${darken(0.2, 'rgba(255, 255, 255, 0.7)')};
      } 
  }

`;