import React from 'react';

import '../../App.css';
import './Warning.css';

const Warning = props => {
  if (props.isError) {
    return <div className="warning">
      <h2>There has been an error. Please try again later.</h2>
    </div>
  }
  return null;
}

export default Warning;
