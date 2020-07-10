import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  background: linear-gradient(-45deg, #192537, #314869);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-top: 25px;
    max-width: 600px;
    width: 500px;
    height: 72px;
    background: #E9E9E9;
    border-radius: 8px;
    border-color: #192537;
    color: black;
    font-weight: bold;

    &:hover {
        background-color: ${darken(0.2, 'rgba(255, 255, 255, 0.7)')}
    }
  }
`;

export const ButtonLogout = styled.div`
  
  button {
    color: red;
    background-color: rgb(231, 202, 202);
    font-weight: bold;
  }

`;


