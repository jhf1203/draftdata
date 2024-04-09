import React from "react";

import { Row, Col } from "react-bootstrap";

function PositionSummary(props) {
  return (
    <div className="summary-wrapper">
      <Row><p className="summary-position">
        {props.info.position}
        </p></Row>
      <Row>
        <h2>Pro Bowl Draft Pos.</h2>
      </Row>
      <Row>
        <Col md="6">
          <p className="summary-label">Avg</p>
        </Col>
        <Col md="6">
          <p className="summary-value">{props.info.avg}</p>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <p className="summary-label">StDev</p>
        </Col>
        <Col md="6">
          <p className="summary-value">{props.info.stDev}</p>
        </Col>
      </Row>
    </div>
  );
}

export default PositionSummary;
