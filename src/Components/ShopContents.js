import { Container, Row } from "../BootstrapModule";
import ShoesBox from "./ShoesBox";

const ShopContents = ({ shoes }) => {
  return (
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <Row>
        {shoes.map((item) => {
          return <ShoesBox key={`Shoes${item.id}`} item={item} />;
        })}
      </Row>
    </Container>
  );
};

export default ShopContents;
