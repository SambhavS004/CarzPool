import React from 'react';
import { Link } from 'react-router-dom';

class BookRide extends React.Component {
  render() {
    return (
      <div>
        <h4>Book a Ride</h4>
        <br />
        <p>Lets you to Book a Ride </p>
        <Link className="ui button" to="/offer">
          Show All Rides
        </Link>
        <Link className="ui button" to="/rides">
          Offer a Ride
        </Link>
      </div>
    );
  }
}

export default BookRide;
