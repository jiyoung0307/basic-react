import React from 'react';
// 함수형 컴포넌트 방식(요즘 추세)
// 방법1
// function Home() {
//     return (
//         <div>
//             <h1>Home 화면 입니다.</h1>
//         </div>
//     )
// }

// 방법2(arrow 함수)
const Home = () => {
  return (
    <h1>Home 화면 입니다.</h1>
  );
}

export default Home;

// export default Home;

// 클레스 컴포넌트 방식
// import React, { Component } from 'react';

// class Home extends Component {
//     render() {
//         return (
//             <h1>Home 화면</h1>
//         )
//     }
// }

// export default Home;