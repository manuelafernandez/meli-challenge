import React from 'react';
import NotFound from './component';
import Navbar from '../../components/Navbar';

function Error() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <NotFound />
    </>
  );
}

export default Error;