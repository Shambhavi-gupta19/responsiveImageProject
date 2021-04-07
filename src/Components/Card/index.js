import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './Card.css';

function Card(props) {
  const getRadomSize = () => {
    const size = Math.floor(Math.random() * 5)
    if (size < 2) {
      return 4
    }
    return size
  }


  const imgClass = `col-lg-${getRadomSize()}`
  return (
    <div className={imgClass}>
      <img
        className="w-100 shadow-1-strong rounded mb-4 cardImageStyle"
        src={props.imageUrl}
      />
    </div>
  );
}

export default React.memo(Card);
