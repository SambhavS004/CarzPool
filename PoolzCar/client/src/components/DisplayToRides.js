import React from 'react';

class DisplayToRides extends React.Component {
  constructor() {
    super();
    this.state = {
      torides: [
        {
          id: 3,
          startPoint: 'Habisguda',
          endPoint: 'Infosys',
          seatsAvailable: 3
        },
        { id: 4, startPoint: 'Airport', endPoint: 'Infosys', seatsAvailable: 2 }
      ]
    };
  }
  displayToInfosysRides = () => {
    return this.torides.map(toride => {
      const { id, startPoint, endPoint, seatsAvailable } = toride;
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
    let header = Object.keys(this.torides[0]);
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
            {this.displayToInfosysRides()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DisplayToRides;
