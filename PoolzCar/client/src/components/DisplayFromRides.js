import React from 'react';

class DisplayFromRides extends React.Component {
  constructor() {
    super();
    this.state = {
      fromrides: [
        { id: 1, startPoint: 'Infosys', endPoint: 'Uppal', seatsAvailable: 4 },
        { id: 2, startPoint: 'Infosys', endPoint: 'Nagole', seatsAvailable: 5 }
      ]
    };
  }
  displayFromInfosysRides = () => {
    return this.fromrides.map(fromride => {
      const { id, startPoint, endPoint, seatsAvailable } = fromride;
      return (
        <tr key={id}>
          <td>{startPoint}</td>
          <td>{endPoint}</td>
          <td>{seatsAvailable}</td>
        </tr>
      );
    });
  };

  displayHeader() {
    let header = Object.keys(this.fromrides[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }
  render() {
    return (
      <div>
        <table id="torides">
          <tbody>
            <tr>{this.displayHeader()}</tr>
            {this.displayFromInfosysRides()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DisplayFromRides;
