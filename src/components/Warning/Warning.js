import React from 'react';
import PropTypes from 'prop-types';

import './Warning.css';

const Warning = props => {
  if (props.isError) {
    return <div className="warning">
      <h2>{ props.clientErrorMessage }</h2>
    </div>
  }
  return null;
}

Warning.propTypes = {
  clientErrorMessage: PropTypes.string
};

Warning.defaultProps = {
  clientErrorMessage: 'There has been an error. Please try again later.'
}

export default Warning;
