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
      <Container fluid>
        <Row>
          {" "}
          <header>
            <h1>
          NFL Pro Bowl and Draft Position Statistics

          </h1>
            </header>
        </Row>
        <Row>
          <Col md="1"></Col>
          <Col md="10">
            <p>Welcome!</p>
            <p>This is a simple application, using data from profootball-reference.com, to help us understand a given position's probability of making a Pro-Bowl based off of when they were drafted.</p>
<p>The purpose of this page is to help us understand the level of impact we can expect by various players, in various draft picks.  Specifically, it lets us measure the average Pro-Bowl potential of a given position vs. another one at a specific point in the draft. </p>
<p>Here are a couple of things to keep in mind when consuming this data:</p>
<li>The sample size used here was for the last five Pro Bowls</li>
<li>Undrafted Free Agents are not included, with the exception of any QB, RB, or WRs</li>
<li>Fullbacks & Special Teams selections (besides Kickers and Punters) are not included, as teams typically do not draft for those positions specifically.</li>
<li>The MLB designation used for some years was rolled into the "ILB" category.  Similarly, the NT position was rolled into "DT"</li>
<p className="last-p"> Thank you for taking a look around...happy exploring!</p>



          </Col>
          <Col md="1"></Col>
        </Row>
        
        <Row>
          <Col md="1"></Col>
          <Col md="5">
            <Row>
              <Col md="3">
                <p className="toggle-header">Pick#</p>
              </Col>
              <Col md="3">
                <p className="toggle-header">Position</p>
              </Col>
              <Col md="3">
                <p className="toggle-header">Odds</p>
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
          <Col md="1"></Col>
          <Col md="4">
            <Row>
              {positionObj.map((pos) => {
                return (
                  <Col md="4">
                    <PositionSummary info={pos} />
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col md="1"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
