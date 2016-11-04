import React, { Component } from 'react';
import randomColor from 'randomcolor';
import objectAssign from 'object-assign';
import './App.css';

import { Legend, Bar, BarChart, Scatter, ScatterChart, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip } from 'recharts';

const male_2013 = [
  { male2013: 4036, name: "-3 years" },
  { male2013: 8022, name: "4-11 years" },
  { male2013: 5893, name: "12-17 years" },
  { male2013: 8705, name: "18-24 years" },
  { male2013: 17744, name: "25-39 years" },
  { male2013: 19274, name: "40-54 years" },
  { male2013: 10556, name: "55-64 years" },
  { male2013: 7694, name: "65-74 years" },
  { male2013: 3976, name: "75-84 years" },
  { male2013: 1130, name: "85+ years" },
];

const male_2014 = [
  { male2014: 3946, name: "-3 years" },
  { male2014: 7989, name: "4-11 years" },
  { male2014: 5979, name: "12-17 years" },
  { male2014: 8951, name: "18-24 years" },
  { male2014: 17762, name: "25-39 years" },
  { male2014: 19341, name: "40-54 years" },
  { male2014: 10497, name: "55-64 years" },
  { male2014: 8074, name: "65-74 years" },
  { male2014: 4106, name: "75-84 years" },
  { male2014: 1150, name: "85+ years" },
];

const female_2013 = [
  { female2013: 3833, name: "-3 years" },
  { female2013: 7778, name: "4-11 years" },
  { female2013: 5867, name: "12-17 years" },
  { female2013: 9674, name: "18-24 years" },
  { female2013: 17880, name: "25-39 years" },
  { female2013: 19039, name: "40-54 years" },
  { female2013: 10555, name: "55-64 years" },
  { female2013: 8316, name: "65-74 years" },
  { female2013: 5588, name: "75-84 years" },
  { female2013: 2580, name: "85+ years" },
];

const female_2014 = [
  { female2014: 3776, name: "-3 years" },
  { female2014: 7725, name: "4-11 years" },
  { female2014: 5891, name: "12-17 years" },
  { female2014: 10002, name: "18-24 years" },
  { female2014: 17958, name: "25-39 years" },
  { female2014: 19002, name: "40-54 years" },
  { female2014: 10670, name: "55-64 years" },
  { female2014: 8572, name: "65-74 years" },
  { female2014: 5579, name: "75-84 years" },
  { female2014: 2653, name: "85+ years" },
];

const newborns_deaths_2013  = [
  { population2013: 1883, name: "Newborns" },
  { population2013: 1606, name: "Deaths" },
];

const newborns_deaths_2014  = [
  { population2014: 1918, name: "Newborns" },
  { population2014: 1564, name: "Deaths" },
];

const other_states_2013 = [
  { population2013: 95, name: "Alphen-Chaam" },
  { population2013: 226, name: "Amsterdam" },
  { population2013: 135, name: "Bergen op Zoom" },
  { population2013: 112, name: "Dordrecht" },
  { population2013: 214, name: "Drimmelen" },
  { population2013: 190, name: "Eindhoven" },
  { population2013: 397, name: "Etten-Leur" },
  { population2013: 133, name: "Gilze en Rijen" },
  { population2013: 143, name: "'s-Gravenhage (gemeente)" },
  { population2013: 110, name: "Halderberge" },
  { population2013: 118, name: "'s-Hertogenbosch" },
  { population2013: 185, name: "Moerdijk" },
  { population2013: 462, name: "Oosterhout" },
  { population2013: 258, name: "Roosendaal" },
  { population2013: 315, name: "Rotterdam" },
  { population2013: 142, name: "Utrecht (gemeente)" },
  { population2013: 146, name: "Zundert" },
];

const other_states_2014 = [
  { population2014: 100, name: "Alphen-Chaam" },
  { population2014: 268, name: "Amsterdam" },
  { population2014: 137, name: "Bergen op Zoom" },
  { population2014: 106, name: "Dordrecht" },
  { population2014: 212, name: "Drimmelen" },
  { population2014: 168, name: "Eindhoven" },
  { population2014: 406, name: "Etten-Leur" },
  { population2014: 159, name: "Gilze en Rijen" },
  { population2014: 144, name: "'s-Gravenhage (gemeente)" },
  { population2014: 143, name: "Halderberge" },
  { population2014: 102, name: "'s-Hertogenbosch" },
  { population2014: 213, name: "Moerdijk" },
  { population2014: 469, name: "Oosterhout" },
  { population2014: 289, name: "Roosendaal" },
  { population2014: 312, name: "Rotterdam" },
  { population2014: 171, name: "Utrecht (gemeente)" },
  { population2014: 199, name: "Zundert" },
];

const CustomTooltip  = React.createClass({
  propTypes: {
    type: React.PropTypes.string,
    payload: React.PropTypes.array,
    label: React.PropTypes.string,
  },

  render() {
    const { active } = this.props;

    // if (active) {
    //   const { payload, label } = this.props;
    //   return (
    //     <div className="custom-tooltip">
    //       <p className="label">{`Bevolking: ${payload[0].payload.bevolking}`}</p>
    //       <p className="label">{`Stad: ${payload[0].payload.name}`}</p>
    //     </div>
    //   );
    // }

    return null;
  }
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      male2013: false,
      male2014: false,
      female2013: false,
      female: false,
      female2014: false,
      newborn_deaths2013: false,
      newborn_deaths2014: false,
      other_states2013: false,
      other_states2014: false,
    };

    this.getData = this.getData.bind(this);
  }

  getData() {
    let data = [];

    if (this.state.male2013) {
      male_2013.map((row, i) => {
        data[i] = objectAssign({}, data[i], row);
      });
    }

    if (this.state.male2014) {
      male_2014.map((row, i) => {
        data[i] = objectAssign({}, data[i], row);
      });
    }

    if (this.state.female2013) {
      female_2013.map((row, i) => {
        data[i] = objectAssign({}, data[i], row);
      });
    }

    if (this.state.female2014) {
      female_2014.map((row, i) => {
        data[i] = objectAssign({}, data[i], row);
      });
    }

    if (this.state.newborn_deaths2013) {
     newborns_deaths_2013.map((row, i) => {
        data[i] = objectAssign({}, data[i], row);
      });
    }

    if (this.state.newborn_deaths2014) {
     newborns_deaths_2014.map((row, i) => {
        data[i] = objectAssign({}, data[i], row);
      });
    }

    if (this.state.other_states2013) {
     other_states_2013.map((row, i) => {
        data[i] = objectAssign({}, data[i], row);
      });
    }

    if (this.state.other_states2014) {
     other_states_2014.map((row, i) => {
        data[i] = objectAssign({}, data[i], row);
      });
    }

    return data;
  }

  onActivateMale2013(e) {
    const checked = e.target.checked;
    this.setState({
      male2013: checked,
    }, () => {
      if (this.state.male2013 || this.state.male2014 || this.state.female2013 || this.state.female2014) {
        this.setState({
          newborn_deaths2013: false,
          newborn_deaths2014: false,
          other_states2013: false,
          other_states2014: false,
        });
      }

      const data = this.getData();
      this.setState({ data });
    });
  }
  onActivateMale2014(e) {
    const checked = e.target.checked;
    this.setState({
      male2014: checked,
    }, () => {
      if (this.state.male2013 || this.state.male2014 || this.state.female2013 || this.state.female2014) {
        this.setState({
          newborn_deaths2013: false,
          newborn_deaths2014: false,
          other_states2013: false,
          other_states2014: false,
        });
      }

      const data = this.getData();
      this.setState({ data });
    });
  }

  onActivateFemale2013(e) {
    const checked = e.target.checked;
    this.setState({
      female2013: checked,
    }, () => {
      if (this.state.male2013 || this.state.male2014 || this.state.female2013 || this.state.female2014) {
        this.setState({
          newborn_deaths2013: false,
          newborn_deaths2014: false,
          other_states2013: false,
          other_states2014: false,
        });
      }

      const data = this.getData();
      this.setState({ data });
    });
  }
  onActivateFemale2014(e) {
    const checked = e.target.checked;
    this.setState({
      female2014: checked,
    }, () => {
      if (this.state.male2013 || this.state.male2014 || this.state.female2013 || this.state.female2014) {
        this.setState({
          newborn_deaths2013: false,
          newborn_deaths2014: false,
          other_states2013: false,
          other_states2014: false,
        });
      }

      const data = this.getData();
      this.setState({ data });
    });
  }

  onActivateNewbornDeaths2013(e) {
    this.setState({
      data: newborns_deaths_2013,
      newborn_deaths2013: e.target.checked,
    }, () => {
      if (this.state.newborn_deaths2013 || this.state.newborn_deaths2014) {
        this.setState({
          male2013: false,
          male2014: false,
          female2013: false,
          female2014: false,
          other_states2013: false,
          other_states2014: false,
        });
      }

      const data = this.getData();
      this.setState({ data });
    });
  }
  onActivateNewbornDeaths2014(e) {
    this.setState({
      data: newborns_deaths_2014,
      newborn_deaths2014: e.target.checked,
    }, () => {
      if (this.state.newborn_deaths2013 || this.state.newborn_deaths2014) {
        this.setState({
          male2013: false,
          male2014: false,
          female2013: false,
          female2014: false,
          other_states2013: false,
          other_states2014: false,
        });
      }

      const data = this.getData();
      this.setState({ data });
    });
  }

  onActivateOtherStates2013(e) {
    this.setState({
      data: other_states_2013,
      other_states2013: e.target.checked,
    }, () => {
      if (this.state.other_states2013 || this.state.other_states2014) {
        this.setState({
          male2013: false,
          male2014: false,
          female2013: false,
          female2014: false,
          newborn_deaths2013: false,
          newborn_deaths2014: false,
        });
      }

      const data = this.getData();
      this.setState({ data });
    });
  }
  onActivateOtherStates2014(e) {
    this.setState({
      data: other_states_2014,
      other_states2014: e.target.checked,
    }, () => {
      if (this.state.other_states2013 || this.state.other_states2014) {
        this.setState({
          male2013: false,
          male2014: false,
          female2013: false,
          female2014: false,
          newborn_deaths2013: false,
          newborn_deaths2014: false,
        });
      }

      const data = this.getData();
      this.setState({ data });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Breda Population Growth 2013 - 2014</h2>
          <p>Between the years 2013 and 2014 there was a big growing population in Breda
and from that population there was a big impact in the theather world (article).
the target group from ages 25 to 60 years enjoyes the theatrical scene in Breda and from this chart you can see this target group grew bigger between 2013 and 2014.</p>
        </div>
        <div>
          <table style={{margin: '0 auto'}}>
            <thead>
              <tr>
                <td></td>
                <td>2013</td>
                <td>2014</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Male</td>
                <td><input type="checkbox" onChange={this.onActivateMale2013.bind(this)} checked={this.state.male2013} /></td>
                <td><input type="checkbox" onChange={this.onActivateMale2014.bind(this)} checked={this.state.male2014} /></td>
              </tr>
              <tr>
                <td>Female</td>
                <td><input type="checkbox" onChange={this.onActivateFemale2013.bind(this)} checked={this.state.female2013} /></td>
                <td><input type="checkbox" onChange={this.onActivateFemale2014.bind(this)} checked={this.state.female2014} /></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Newborn / Deaths</td>
                <td><input type="checkbox" onChange={this.onActivateNewbornDeaths2013.bind(this)} checked={this.state.newborn_deaths2013} /></td>
                <td><input type="checkbox" onChange={this.onActivateNewbornDeaths2014.bind(this)} checked={this.state.newborn_deaths2014} /></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Other States</td>
                <td><input type="checkbox" onChange={this.onActivateOtherStates2013.bind(this)} checked={this.state.other_states2013} /></td>
                <td><input type="checkbox" onChange={this.onActivateOtherStates2014.bind(this)} checked={this.state.other_states2014} /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <br/>
        <div style={{margin: '0 auto'}}>
          <BarChart width={1000} height={300} data={this.state.data} style={{margin: '0 auto'}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            {/*<Tooltip content={<CustomTooltip/>}/>*/}
            <Legend />
            { this.state.data[0] && this.state.data[0].male2013 ? (
              <Bar dataKey="male2013" fill={randomColor()} />
            ) : null }
            { this.state.data[0] && this.state.data[0].male2014 ? (
              <Bar dataKey="male2014" fill={randomColor()} />
            ) : null }
            { this.state.data[0] && this.state.data[0].female2013 ? (
              <Bar dataKey="female2013" fill={randomColor()} />
            ) : null }
            { this.state.data[0] && this.state.data[0].female2014 ? (
              <Bar dataKey="female2014" fill={randomColor()} />
            ) : null }
            { this.state.data[0] && this.state.data[0].population2013 ? (
              <Bar dataKey="population2013" fill={randomColor()} />
            ) : null }
            { this.state.data[0] && this.state.data[0].population2014 ? (
              <Bar dataKey="population2014" fill={randomColor()} />
            ) : null }
          </BarChart>
        </div>
      </div>
    );
  }
}

export default App;
