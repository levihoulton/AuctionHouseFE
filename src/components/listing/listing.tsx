import React from 'react';
import ListingEntity from './ListingEntity';

export default function Listing(props: any) {

  return (
    <div className="container">
      <div className="row">
          <div className="col-md-4" key={props.listing.id}>
            <div className="card mb-4">
              {/* <img src={listing.imageURL} className="card-img-top" alt={listing.product} /> */}
              <div className="card-body">
                <h5 className="card-title">{props.listing.product}</h5>
                <h5 className="card-text">Price: ${props.listing.price}</h5>
                {/* <a href={`/listings/${listing.id}`} className="btn btn-primary">View Listing</a> */}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
