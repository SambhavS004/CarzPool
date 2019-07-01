import React from 'react';

class DisplayOthersRides extends React.Component {
  constructor() {
    super();
    this.state = {
      otherrides: [
        {
          id: 6,
          startPoint: 'Airport',
          endPoint: 'Township',
          seatsAvailable: 4
        },
        {
          id: 7,
          startPoint: 'Township',
          endPoint: 'Malasia',
          seatsAvailable: 5
        }
      ]
    };
  }
  otherRides = () => {
    return this.otherrides.map(otherride => {
      const { id, startPoint, endPoint, seatsAvailable } = otherride;
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
    let header = Object.keys(this.otherRides[0]);
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
            {this.otherRides()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DisplayOthersRides;
