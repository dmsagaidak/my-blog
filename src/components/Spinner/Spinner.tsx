import React from 'react';

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>

  );
};

export default Spinner;