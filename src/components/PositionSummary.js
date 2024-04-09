import React from "react";

import { Row, Col } from "react-bootstrap";

function PositionSummary(props) {
  return (
    <div>
      <Row>{props.info.position}</Row>
      <Row>
        <Col md="6">Avg Draft Position</Col>
        <Col md="6">{props.info.avg}</Col>
      </Row>
      <Row>
        <Col md="6">StDev Draft Position</Col>
        <Col md="6">{props.info.stDev}</Col>
      </Row>
    </div>
  );
}

export default PositionSummary;
