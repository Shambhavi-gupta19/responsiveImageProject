import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './FailedState.css';

function FailedState() {

  return (
    <div className="centerAlign verticalAlign">
      <span className="material-icons errorIconStyle">error</span>
      <div className="errorIconStyle">Failed to load data</div>
    </div>
  );
}

export default React.memo(FailedState);
