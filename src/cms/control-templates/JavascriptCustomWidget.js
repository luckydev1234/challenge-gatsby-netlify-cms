import React from 'react';
import PropTypes from 'prop-types';

const JavascriptCustomWidget = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <textarea onChange={handleChange}>{value}</textarea>
  );
};

JavascriptCustomWidget.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default JavascriptCustomWidget;
