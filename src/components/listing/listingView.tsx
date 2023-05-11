import React from 'react';
import ListingEntity from './ListingEntity';

interface ListingProps {
  key: string;
  listing: ListingEntity;
}

const ListingView: React.FC<ListingProps> = ({ key, listing }) => {
  return (
    <div className="container">
      <h1>Welcome to the Auction House!</h1>
      <div className="row">
        <div className="col-md-4" key={key}>
          <div className="card mb-4">
            <img src={listing.imageURL} className="card-img-top" alt={listing.product} />
            <div className="card-body">
              <h5 className="card-title">{listing.product}</h5>
              <p className="card-text">Price: ${listing.price}</p>
              {/* <a href={`/listings/${listing.id}`} className="btn btn-primary">View Listing</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingView;