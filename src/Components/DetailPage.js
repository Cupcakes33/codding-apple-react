import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Alert } from "../BootstrapModule";
import DetailNav from "./DetailNav";

// 컴포넌트의 lifecycle
// 페이지에 장착됨 (mount)
// 업데이트 됨 (update)
// 페이지에서 제거됨 (unmount)
// 갈고리를 달아서 코드를 실행시키게 함
// useEffect 사용하는 이유
// 실행 시점이 약간 다르다 -> useEffect 는 html 렌더링 이후에 동작한다.
// 복잡한 연산, ajax 요청, 타이머 장착 등 일단 렌더링을 하고 나서 해야하는 작업들에 유리하다.
// 좀 더 빠르다는 느낌을 줄 수 있다.
// Side Effect 함수의 핵심기능과 상관없는 부가기능
// useEffect(()=>{},[]) defendensy
// 디펜덴시가 없으면 mount, update 시에 실행되는데, 디펜덴시를 추가하면 해당 state가 변할때와 mount 될 때만 실행된다.
// [] 빈 배열로 넣으면 마운트할때만 실행됨
// return 을 추가하면 ()=>{} useEffect 동작 전에 실행됨 -> clean up Fuction
// 서버로 데이터 같은거 요청할 때, 데이터가 2~3초 걸릴텐데... 도중에 재 렌더링이 되어버린다면 ?
// 그걸 방지하기 위해서 기존 데이터 요청은 제거해주세요~ 하고 코드를 짜면 되겠다.
// clean up function 은 mount시 실행이 안되고 unmount시 실행됨

// useEffect(()=>{}) 1. 재렌더링마다 코드실행하고 싶으면
// useEffect(()=>{},[]) 2. mount시 1회만 실행하고 싶으면
// useEffect(()=>{return(()=>{})}) 3. unmount시에 실행하고 싶으면
// useEffect(()=>{return(()=>{})}) 3-1. 또는 useEffect 동작 전에 어떤 코드를 실행하고 싶다면
// useEffect(()=>{},[state]) 4. 특정 state 변경시에만 실행하고 싶으면

const DetailPage = ({ shoes }) => {
  const [alertSwitch, setalertSwitch] = useState(true);
  const navigate = useNavigate();

  let { id } = useParams();
  useEffect(() => {
    // !findRouteShoes && navigate("/");
    // findRouteShoes === {} && navigate("/");
    // !findRouteShoes.src && navigate("/");
    // JSON.stringify(findRouteShoes) === "{}" && navigate("/");
    findRouteShoes &&
      Object.keys(findRouteShoes).length === 0 &&
      findRouteShoes.constructor === Object &&
      navigate("/");
  }, []);

  const findRouteShoes = shoes.find((item) => item.id === Number(id)) ?? {};

  const { src, title, content, price } = findRouteShoes;

  return (
    <>
      {alertSwitch && (
        <Alert variant="danger">
          <Alert.Link href="/">3초 이내 클릭시 반값</Alert.Link>
        </Alert>
      )}

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={src} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{title}</h4>
            <p>{content}</p>
            <p>{price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
        <DetailNav />
      </div>
    </>
  );
};

export default DetailPage;
