import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>oops! 404 page not found</h1>
        <Link to='/' className='btn btn-primary'>
          Back To Home
        </Link>
      </div>
    </section>
  );
}
