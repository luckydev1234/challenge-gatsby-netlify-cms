import React from 'react';
import PropTypes from 'prop-types';

const style = {
  display: 'block',
  width: '100%',
  boxShadow: 'none',
  backgroundColor: 'rgb(255, 255, 255)',
  color: 'rgb(68, 74, 87)',
  position: 'relative',
  fontSize: '15px',
  lineHeight: '1.5',
  padding: '16px 20px',
  margin: '0px',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: 'rgb(223, 223, 227)',
  borderImage: 'initial',
  borderRadius: '0px 5px 5px',
  outline: '0px',
  transition: 'border-color 0.2s ease 0s',
};
const JavascriptCustomWidget = ({ value, onChange }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    const startTagNum = value.indexOf('<script>');
    const endTagNum = value.indexOf('</script>');
    const noTagValue = value.substring(startTagNum + 8, value.length - 9);
    if (startTagNum === 0 && endTagNum === value.length - 9) {
      onChange(`<script>${noTagValue}</script>`);
    }
  };
  return (
    <textarea style={style} onChange={handleChange}>{value}</textarea>
  );
};

JavascriptCustomWidget.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default JavascriptCustomWidget;
