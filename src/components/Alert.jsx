import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ text }) => <div className="alert alert-warning" role="alert">{ text }</div>;

Alert.propTypes = {
  text: PropTypes.string,
};

Alert.defaultProps = {
  text: '',
};

export default Alert;
