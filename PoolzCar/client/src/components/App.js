import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import BookRide from './BookRide';
import Login from './Login';
import OfferRide from './OfferRide';
import RideDetails from './RideDetails';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/book" component={BookRide} />
        <Route path="/offer" component={OfferRide} />
        <Route path="/rides" component={RideDetails} />
      </BrowserRouter>
    </div>
  );
};
export default App;
