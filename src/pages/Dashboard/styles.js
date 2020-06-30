import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  background-color: #192537;
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

    &:hover {
        background-color: ${darken(0.2, 'rgba(255, 255, 255, 0.7)')}
    }
  }
`;


