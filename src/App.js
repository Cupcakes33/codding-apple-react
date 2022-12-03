import React, { useState, useRef } from "react";
import "./App.css";
import bg from "./img/bg.png";
import styled from "styled-components";
import ShopContents from "./Components/ShopContents";
import ShopNavbar from "./Components/ShopNavbar";
import ShopData from "./DATA/ShopData";
import DetailPage from "./Components/DetailPage";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";

function App() {
  const [shoes, setShoes] = useState(ShopData);
  const counter = useRef(2);
  const dataAjaxHandler = () => {
    if (counter.current > 1 && counter.current < 4) {
      axios
        .get(`https://codingapple1.github.io/shop/data${counter.current}.json`)
        .then((res) => {
          setShoes((prev) => {
            return [...prev, ...res.data];
          });
          console.log(res.data);
          counter.current += 1;
        })
        .catch(() => {
          console.log("Ajax 요청에 실패하였습니다.");
          counter.current += 1;
        });
    } else {
    }
  };

  return (
    <>
      <ShopNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <StyledBgImg />
              <ShopContents shoes={shoes} />
              <button onClick={dataAjaxHandler}>button</button>
            </>
          }
        />
        <Route path="/detail/:id" element={<DetailPage shoes={shoes} />} />

        {/* react nested route 404 page ? */}
        {/* 중첩 라우팅 < ? */}
        <Route path="/about" element={<About />}>
          <Route path="one" element={<p>첫번째 주문시 배추즙 서비스</p>} />
          <Route path="two" element={<p>두번째 주문시 배즙 서비스</p>} />
          <Route path="three" element={<p>세번째 주문시 양배추즙 서비스</p>} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </>
  );
}

const About = () => {
  const navigator = useNavigate();
  return (
    <div>
      <h1>오늘의 이벤트</h1>
      <Outlet></Outlet>
      <button
        onClick={() => {
          navigator("one");
        }}
      >
        one
      </button>
      <button
        onClick={() => {
          navigator("two");
        }}
      >
        two
      </button>
      <button
        onClick={() => {
          navigator("three");
        }}
      >
        three
      </button>
    </div>
  );
};

let StyledBgImg = styled.div`
  /* background-image: url(${bg}); */
  background-image: url(${process.env.PUBLIC_URL + "/img/bg.png"});
  //styled-component 에서도 이렇게 따 와야 된다고 함
  //css 파일에서는 그냥 이미지 경로 잘 입력하기
  //public 폴더에도 이미지 보관이 가능한데
  // src={process.env.PUBLIC_URL + '/img.png'}
  // 위 키워드를 이용하면 경로가 달라져도 자동으로 바인딩해준다.
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 35vh;
`;

export default App;

// 서버 : 부탁하면 진짜로 들어주는 프로그램
// 어떤방법? (GET/POST) 어떤자료? (URL)
// 브라우저 검색창이 가장 대표적인 get 요청
// = ajax 요청
// 서버로 데이터 전송하는 post 요청
// promise.all([axios.get(1), axios.get(2)]).then(()=>{})
//
