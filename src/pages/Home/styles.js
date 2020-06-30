import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: url('https://images.unsplash.com/photo-1471174617910-3e9c04f58ff5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80') no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

main {
  max-width: 600px;
  height: 600px;
  padding: 50px;
  margin-top: 60px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

main h1 {
  font-size: 54px;
  color: #f8f8ff;
}

 main p {
  font-size: 24px;
  margin-top: 24px;
  line-height: 38px;
  color: white;
}

 main a {
  width: 100%;
  max-width: 360px;
  height: 72px;
  background: rgba(08, 12, 32, 0.7);
  border-radius: 9px;
  text-decoration: none;

  display: flex;
  align-items: center;
  overflow: hidden;

  margin-top: 40px;
}

main a span {
  display: block;
  background: rgba(08, 12, 32, 0.7);
  width: 72px;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

main a span svg {
  color: #f8f8ff;
  width: 20px;
  height: 20px;
}

main a strong {
  flex: 1;
  text-align: center;
  color: orange;
}

main a:hover {
  background: rgba(08, 12, 32, 0.9);
}

@media(max-width: 900px) {
  #page-home .content {
    align-items: center;
    text-align: center;
  }

  header {
    margin: 48px auto 0;
  }

  main {
    align-items: center;
  }

  main h1 {
    font-size: 42px;
  }

  main p {
    font-size: 24px;
  }
}

`;



