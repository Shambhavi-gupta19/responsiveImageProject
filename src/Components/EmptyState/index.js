import React from 'react';

import empty from './Images/empty.png'

import 'bootstrap/dist/css/bootstrap.min.css';

import './EmptyState.css';

function EmptyState() {

  return (
    <div >
      <img src={empty} />
    </div>
  );
}

export default React.memo(EmptyState);
