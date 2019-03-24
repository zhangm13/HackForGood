import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer
        className={
          "footer" +
          (this.props.transparent !== undefined ? " footer-transparent" : "")
        }
      >
        <div
          className={
            "container" + (this.props.fluid !== undefined ? "-fluid" : "")
          }
        >
          <p className="copyright pull-left">
            <a href="">LOOKOUT AI</a>
          </p>

          <p className="copyright pull-right">
            &copy; {1900 + new Date().getYear()}
          </p>
        </div>
      </footer>
    );
  }
}
export default Footer;
