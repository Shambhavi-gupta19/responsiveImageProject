import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './Loader.css';

function Loader() {

  return (
    <div className="loadingDots">
      <div className="loadingDots--dot" />
      <div className="loadingDots--dot" />
      <div className="loadingDots--dot" />
    </div>
  );
}

export default React.memo(Loader);
