import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ztable from "ztable";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import masterList from "./assets/masterList";
import PositionSummary from "./components/PositionSummary";
import OddsCalc from "./components/OddsCalc";

function App() {
  const [draftList, setDraftList] = useState([
    { num: 3, position: "generic", odds: "" },
  ]);

  let positionList = [];

  masterList.map((main) => {
    if (positionList.indexOf(main.position) == -1) {
      positionList.push(main.position);
    }
  });

  let positionObj = [];

  let avg;
  let stDev;

  positionList.map((position) => {
    switch (position) {
      case "QB":
        avg = 48;
        stDev = 62;
        break;
      case "RB":
        avg = 63;
        stDev = 64;
        break;
      case "WR":
        avg = 66;
        stDev = 53;
        break;
      case "TE":
        avg = 75;
        stDev = 51;
        break;
      case "T":
        avg = 42;
        stDev = 57;
        break;
      case "G":
        avg = 43;
        stDev = 39;
        break;
      case "C":
        avg = 67;
        stDev = 70;
        break;
      case "DE":
        avg = 37;
        stDev = 38;
        break;
      case "DT":
        avg = 45;
        stDev = 41;
        break;
      case "OLB":
        avg = 37;
        stDev = 42;
        break;
      case "ILB":
        avg = 36;
        stDev = 21;
        break;
      case "CB":
        avg = 20;
        stDev = 17;
        break;
      case "S":
        avg = 54;
        stDev = 52;
        break;
      case "P":
        avg = 113;
        stDev = 43;
        break;
      case "K":
        avg = 149;
        stDev = 4;
        break;
    }

    positionObj.push({
      position: position,
      values: [],
      avg: avg,
      stDev: stDev,
    });
  });

  masterList.map((entry) => {
    positionObj.map((pos) => {
      if (entry.position == pos.position) {
        pos.values.push(entry.drafted);
      }
    });
  });

let orderList = []

  


  let picks = [1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className="App">
      <Container>
        <Row>
          {" "}
          <header>NFL Pro Bowl and Draft Position Statistics</header>
        </Row>
        <Row>
          <Col md="4">
            <Row>
              <Col md="3">
                <p>Draft#</p>
              </Col>
              <Col md="3">
                <p>Position</p>
              </Col>
              <Col md="3">
                <p>Odds</p>
              </Col>
            </Row>
            {picks.map((pick, index) => {
              return (

                  <OddsCalc
                  number={index}
                  data={positionObj}
                  />
              )
            })}
            
          </Col>
          <Col md="8">
            <Row>
              {positionObj.map((pos) => {
                return (
                  <Col md="3">
                    <PositionSummary info={pos} />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
