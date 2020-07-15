import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  background: linear-gradient(-45deg, #192537, #314869);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style-type: none;

`;

export const CarInfo = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  height: 120px;

  div {
    display: flex;
    flex-direction: column;
  }

`;

export const Preview = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  background-repeat: no-repeat;
  margin-right: 13px;
  padding: 5px;
  margin-left: 16px;
`;


export const Content = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  width: 700px;
  height: 120px;
  border-radius: 8px;
  justify-content: space-between;


  &:hover {
        background: rgb(196, 216, 247);
      }

`;

export const Observation = styled.div`
  height: 120px;
  width: 240px;

`;


export const Button = styled.div`
  margin-right: 16px;
  cursor: pointer;

`;
