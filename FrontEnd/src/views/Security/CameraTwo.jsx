import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
import Button from 'components/CustomButton/CustomButton.jsx';
// react component used to create charts
import ChartistGraph from "react-chartist";
// react components used to create a SVG / Vector map
import { VectorMap } from "react-jvectormap";

import Card from "components/Card/Card.jsx";
import StatsCard from "components/Card/StatsCard.jsx";
import Tasks from "components/Tasks/Tasks.jsx";

import {
  dataPie,
  dataSales,
  optionsSales,
  responsiveSales,
  dataBar,
  optionsBar,
  responsiveBar,
  table_data
} from "variables/Variables.jsx";

class CameraTwo extends Component {
  render() {
    return (
      <div className="main-content camera-container">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <video src="http://192.168.8.223:8000" />
            </Col>
          </Row>
          <Row>
            <Col lg={3} sm={6}>
              <Button bsStyle="danger">Stop Attack</Button>
            </Col>
            <Col lg={3} sm={6}>
              <Button bsStyle="default">False Alarm</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CameraTwo;
