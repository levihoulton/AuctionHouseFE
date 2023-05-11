import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Listing from '../listing/listing';
import ListingEntity from '../listing/ListingEntity';

export default function Home() {
  const [listings, setListings] = useState<Array<ListingEntity>>([]);

  useEffect(() => {
    // Fetch listings from the backend API
    fetch('http://localhost:8080/listings/')
    .then(response => response.json())
    .then(data => {
      setListings(data)
    })
    .catch(error => {
      console.error('Error fetching listings:', error);
    });
  }, []);

  return (
    <div className="container">
      <h1>Welcome to the Auction House!</h1>
      <div className="row">
        {listings.map(listing => (
          <Listing listing={listing} />
        ))}
      </div>
    </div>
  );
};

