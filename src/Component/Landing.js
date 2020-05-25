import React, { Component } from "react";
import { covidlist } from "../Action/Index";
import { connect } from "react-redux";
import StateList from "./StateList";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.covidlist();
  }
  render() {
    // console.log(this.props.list)
    // console.log(this.props.list.statewise&&this.props.list.statewise.length)
    const { list } = this.props;
    return (
      <div>
           <StateList index="Index"
           state="State"
           confirmed="Confirmed"
            Active="Active"
            Recovered="Recovered"
            Death="Death"
           />

        {list && list.statewise && list.statewise.length > 0 &&
          list.statewise.map((data, index) => {
            // console.log(data);
            return (
              <StateList
                state={data.state}
                confirmed={data.confirmed}
                Active={data.active}
                Recovered={data.recovered}
                Death={data.deaths}
                index={index + 1 }
              />
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.list,
});

export default connect(mapStateToProps, { covidlist })(Landing);
