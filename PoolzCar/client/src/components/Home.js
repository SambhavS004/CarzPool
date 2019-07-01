import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h4 className="ui container">Welcome to the Car Pool App</h4>
        <br />
        <p>This App Allows you to share the Ride with Others</p>
        <br />
        <h5>Navigate to below URL's for more options</h5>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/offers">To see the Offered Rides</Link>
        <br />
        <Link to="/book">To Book A Ride</Link>
        <br />
        <Link to="/rides">To see your Rides Details</Link>
      </div>
    );
  }
}

export default Home;
