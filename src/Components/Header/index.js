import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.css';

function Header() {

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div className="col l1 ">
          <div className="headerLogoStyle" >LOGO</div>
        </div>
        <div className="col l11">
          <div className="headerLogoStyle"> SITE TITLE</div>
        </div>
      </div>
      <div className="headerLineStyle" />
      <div className="headerHeaderImageStyle">
        <div >HEADER IMAGE</div>
      </div>
      <div className="headerLineStyle" />
    </div>
  );
}

export default React.memo(Header);
