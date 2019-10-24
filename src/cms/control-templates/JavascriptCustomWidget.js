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
    const changedValue = e.target.value;
    if (changedValue.indexOf('</script>') > -1
      && changedValue.length === changedValue.indexOf('</script>') + 9) {
      onChange(e.target.value);
    }
  };
  return (
    <textarea style={style} onChange={handleChange} value={value}/>
  );
};

JavascriptCustomWidget.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default JavascriptCustomWidget;
