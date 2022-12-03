import React, { useState } from "react";
import { Nav } from "../BootstrapModule";

function DetailNav() {
  let [NavSwitch, setNavSwitch] = useState(0);
  const TapContents = [<div>1</div>, <div>2</div>, <div>3</div>];

  return (
    <>
      <Nav justify variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setNavSwitch(0);
            }}
          >
            Button1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setNavSwitch(1);
            }}
          >
            Button2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onClick={() => {
              setNavSwitch(2);
            }}
          >
            Button3
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {TapContents[NavSwitch]}
    </>
  );
}

export default DetailNav;

// 탭 ui 만들기
