import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="page-content-wrapper">
    <h2>
        You seem to be lost. Go
      {' '}
      <Link to="/home">Home</Link>
    </h2>
  </div>
);

export default NotFound;
