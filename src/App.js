import React, { Component } from 'react';
import './App.css';

import { Legend, Bar, BarChart, Scatter, ScatterChart, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip } from 'recharts';


const male = [
  { bevolking: 268, name: "Amsterdam" },
  { bevolking: 100, name: "Rotterdam" },
  { bevolking: 300, name: "Scheveningen" },
];

const female = [
  { bevolking: 568, name: "Amsterdam" },
  { bevolking: 300, name: "Rotterdam" },
  { bevolking: 300, name: "Scheveningen" },
];

const newborn = [
  { bevolking: 668, name: "Amsterdam" },
  { bevolking: 500, name: "Rotterdam" },
  { bevolking: 100, name: "Scheveningen" },
];

const deaths = [
  { bevolking: 368, name: "Amsterdam" },
  { bevolking: 200, name: "Rotterdam" },
  { bevolking: 100, name: "Scheveningen" },
];

const CustomTooltip  = React.createClass({
  propTypes: {
    type: React.PropTypes.string,
    payload: React.PropTypes.array,
    label: React.PropTypes.string,
  },

  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label } = this.props;
      return (
        <div className="custom-tooltip">
          <p className="label">{`Bevolking: ${payload[0].payload.bevolking}`}</p>
          <p className="label">{`Stad: ${payload[0].payload.name}`}</p>
        </div>
      );
    }

    return null;
  }
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: male,
    };

    this.onClickMale = this.onClickMale.bind(this);
    this.onClickFemale = this.onClickFemale.bind(this);
    this.onClickNewborn = this.onClickNewborn.bind(this);
    this.onClickDeaths = this.onClickDeaths.bind(this);
  }

  onClickMale() {
    this.setState({
      data: male
    });
  }
  onClickFemale() {
    this.setState({
      data: female
    });
  }
  onClickNewborn() {
    this.setState({
      data: newborn
    });
  }
  onClickDeaths() {
    this.setState({
      data: deaths
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Bevolking Breda 2014</h2>
        </div>
        <div>
          <button onClick={this.onClickMale}>Male</button>
          <button onClick={this.onClickFemale}>Female</button>
          <button onClick={this.onClickNewborn}>Newborn</button>
          <button onClick={this.onClickDeaths}>Deaths</button>
        </div>
        <br/>
        <div style={{margin: '0 auto'}}>
          <BarChart width={1000} height={300} data={this.state.data}
              margin={{top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip content={<CustomTooltip/>}/>
            <Legend />
            <Bar dataKey="bevolking" barSize={20} fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    );
  }
}

export default App;
