// 페이지를 켰을 때 제일 먼저 실행되는 파일
import React from 'react';
import ReactDOM from 'react-dom/client';
// BrowserRouter - 웹 브라우저 라우팅처리를 할 때 보편적으로 많이 쓰임
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 나중에 HTML로 rendering되는 부분
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 리액트 웹 퍼포먼스 성능 측정 목적
reportWebVitals();
