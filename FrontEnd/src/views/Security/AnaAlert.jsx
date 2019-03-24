import React from 'react';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CustomButton from "components/CustomButton/CustomButton.jsx"
import banana from "assets/img/banana2.png";

import { withStyles } from '@material-ui/core/styles';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = {
    root: {
      fontSize: '25px'
    }
  };

class AnaAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
  }

  handleCloseFalse = () => {
    this.setState({ open: false });
    this.props.setAlarmFalse()
  };

  handleCloseTrue = () => {
    this.setState({ open: false });
  }


  render() {
    return (
      <div className="dialog-ana">
        <Dialog
          classes={{ root: this.props.classes.root }}
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
          ALERT: Threat Detected
          </DialogTitle>
          <DialogContent classes={{ root: this.props.classes.root }}>
            <DialogContentText id="alert-dialog-slide-description">
            Starbucks - 1st Floor, Unit 103
              <div className="banana">
                <img src={banana} />
              </div>
              <a href="http://192.168.8.223:8000">  See live video </a>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <CustomButton bsStyle="danger" fill onClick={this.handleCloseTrue}>Emergency Lockdown</CustomButton>
            <CustomButton bsStyle="primary" onClick={this.handleCloseFalse}>
              False Alarm
            </CustomButton>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(AnaAlert);
