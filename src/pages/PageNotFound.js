import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <>
      <h2>PageNotFound</h2>
      <Link to='/'>Home</Link>
    </>
  );
}
