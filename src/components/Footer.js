import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <Link to="/">All</Link>
      <Link to="/active">Active</Link>
      <Link to="/done">Done</Link>
    </div>
  )
}
