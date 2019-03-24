import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx"
import MallStore from "components/MallStore/MallStore.jsx";
import starbucks2 from "assets/img/starbucks2.jpg";
import lobby from "assets/img/lobby.jpg";
import rexall from "assets/img/rexall.jpeg";
import foodcourt from "assets/img/foodcourt.jpg";
import Dialog from '@material-ui/core/Dialog';
import AnaAlert from "views/Security/AnaAlert.jsx";
import { subscribe } from 'mqtt-react';


class Security extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false
    }
  }

  tick = () => {
    this.setState({
      alert: true
    });
  }

  setAlarmFalse = () => {
    console.log('setting alarm false')
    this.setState({
      alert: false
    })
  }


  componentDidMount() {
    console.log('mounting this.props', this.props);
    // this.intervalID = setTimeout(
    //   () => this.tick(),
    //   5000
    // );
  }

  componentDidUpdate() {
    console.log('update this.props', this.props)
  }
  render() {
    const { data } = this.props;

    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
          <Col sm={8} mdOffset={2}>
            <MallStore
              onClick={this.tick}
              alert={this.state.alert}
              photoUrl={starbucks2}
              title="Starbucks"
              category="1st Floor, Unit 103"
              liveUrl="http://192.168.8.223:8000/index.html"
            />
            <MallStore
              onClick={this.tick}
              title="Rexall"
              photoUrl={rexall}
              category="2st Floor, Unit 212"
              liveUrl="http://192.168.8.130:8000/index.html"
            />
            <MallStore
              onClick={this.tick}

              title="Main Lobby"
              photoUrl={lobby}
              category="1st Floor, East Side"
              liveUrl=""
            />
            <MallStore
              onClick={this.tick}

              title="Food Court"
              photoUrl={foodcourt}
              category="3nd Floor, South Side"
              liveUrl=""
            />
          {this.state.alert ? <AnaAlert setAlarmFalse={this.setAlarmFalse}/> : null}

          </Col>

          </Row>

        </Grid>

      </div>
    );
  }
}

// export default subscribe({
//   topic: 'triggered'
// })(Security);
export default Security;
