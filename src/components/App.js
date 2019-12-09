import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { createGlobalStyle } from 'styled-components';
import Sidebar from './Sidebar';
import ContentArea from './ContentArea';

const Style = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  #root, #app {
    height: 100%;
    width: 100%;
  }
`;

function App() {
  useEffect(() => {
    if ('Kakao' in window) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    }
  });

  return (
    <>
      <Style />
      <Row id="app">
        <Sidebar />
        <ContentArea />
      </Row>
    </>
  );
}

export default App;
