import React, { Component } from "react";

class StateList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container mt-2">
        <div className="row">
          <div className="col-sm-1 border ">{this.props.index}</div>
          <div className="col-sm-3 text-info border font-weight-bolder">
            {this.props.state}
          </div>
          <div className="col-sm-2 text-warning font-weight-bolder border">
            {this.props.confirmed}
          </div>
          <div className="col-sm-2 text-primary border">
            {this.props.Active}
          </div>
          <div className="col-sm-2 text-success border">
            {this.props.Recovered}
          </div>
          <div className="col-sm-2 text-danger font-weight-bolder border">
            {this.props.Death}
          </div>
        </div>
      </div>
    );
  }
}
export default StateList;
