import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BookRide from './BookRide';
import DisplayToRides from './DisplayToRides';
import DisplayFromRides from './DisplayFromRides';
import DisplayOthersRides from './DisplayOthersRides';

class OfferRide extends React.Component {
  render() {
    return (
      <div>
        <BookRide />
        <br />
        <p>Showing You All Rides</p>
        <br />
        <button className="ui button" onClick={this.renderToOffice()}>
          To Office
        </button>
        <button className="ui button" onClick={this.renderFromOffice()}>
          From Office
        </button>
        <button className="ui button" onClick={this.renderOthers()}>
          Others
        </button>
      </div>
    );
  }

  renderToOffice = () => {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" component={DisplayToRides} />
        </BrowserRouter>
      </div>
    );
  };

  renderFromOffice = () => {
    return <div>{DisplayFromRides}</div>;
  };

  renderOthers = () => {
    return <div>{DisplayOthersRides}</div>;
  };
}

export default OfferRide;
