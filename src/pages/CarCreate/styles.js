import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  background: linear-gradient(-45deg, #192537, #314869);
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Main = styled.div`
  width: 500px;
  max-width: 500px;
  padding: 24px;
  text-align: center;
  border-radius: 12px;

  h1 {
    color: #fff;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      border: 0;
      height: 44px;
      width: 500px;
      padding: 0 15px;
      color: #ffffff;
      margin: 0 0 10px;
      text-align: center;

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
      width: 500px;
      height: 44px;
      background: rgb(196, 216, 247);
      font-weight: bold;
      color: #081229;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, 'rgb(196, 216, 247)')};
      }
    }

  }

`;
