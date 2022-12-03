import { Col } from "../BootstrapModule";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ShoesBox = ({ item }) => {
  const { src, title, content, price, id } = item;
  const navigate = useNavigate();

  return (
    <Col
      md={4}
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={src}
        style={{ cursor: "pointer" }}
        width="80%"
        onClick={() => {
          navigate(`detail/${id}`);
        }}
      />
      <h1>{title}</h1>
      <p>{content}</p>
      <p>{price}</p>
    </Col>
  );
};

export default ShoesBox;
