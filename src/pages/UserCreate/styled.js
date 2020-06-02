import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #483D8B, #6A5ACD);
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Container = styled.div`
  width: 100%;
  max-width: 350px;
  text-align: center;

  h1 {
    color: #fff;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 35px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      } 
    }

    button#register {
      margin: 10px 0 0 0;
      height: 44px;
      width: 350px;
      background: #DC143C;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#DC143C')};
      }
    }

  }

`;