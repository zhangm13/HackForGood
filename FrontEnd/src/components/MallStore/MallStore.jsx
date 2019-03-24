import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

class MallStore extends Component {
  render() {
    const { alert, title, category, liveUrl, photoUrl, setAlarmFalse, onClick } = this.props;
    return (
            <Card
               flex
               alert={alert}
               title={title}
               category={category}
               content={
                   <div>
                       <div className="store-image" onClick={onClick}>
                          <img src={photoUrl} />
                        </div>
                       <div className="store-button-container">
                        <Button bsStyle="primary">
                          <a href={liveUrl}>
                            <div className="status-div">
                              <p className="text-button-style"> Watch live </p>
                              <p className="pe-7s-video icon-medium" />
                            </div>
                        </a></Button>
                         <div className="status-div"> Status: { alert ? <p className="text-danger"> Threat </p> : <p className="text-success"> OK </p> } </div>
                        </div>
                        { alert ? <div className="threat-button-container"> <Button bsStyle="danger" fill block> <p> Active Threat </p> </Button> </div>: null }
                   </div>
               }
            />
    );
  }
}
export default MallStore;
