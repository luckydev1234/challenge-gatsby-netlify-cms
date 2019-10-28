import React from 'react';
import PropTypes from 'prop-types';

const rootStyle = {
  display: 'block',
  width: '100%',
  boxShadow: 'none',
  backgroundColor: 'rgb(255, 255, 255)',
  color: 'rgb(68, 74, 87)',
  position: 'relative',
  fontSize: '15px',
  lineHeight: '1.5',
  margin: '0px',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: 'rgb(223, 223, 227)',
  borderImage: 'initial',
  borderRadius: '0px 5px 5px',
  outline: '0px',
  transition: 'border-color 0.2s ease 0s',
};
const buttonStyle = {
  cursor: 'pointer',
  fontSize: '13px',
  lineHeight: 1,
  display: 'block',
  textAlign: 'center',
  color: 'rgb(58, 105, 199)',
  backgroundColor: 'rgb(232, 245, 254)',
  borderWidth: 0,
  borderStyle: 'initial',
  borderColor: 'initial',
  borderImage: 'initial',
  borderRadius: '5px',
  padding: '4px 10px',
};
const textAreaStyle = {
  padding: '16px 20px',
  border: 'none',
  width: '100%',
  display: 'block',
};
const JavascriptCustomWidget = ({ value, onChange }) => {
  let inputElement = React.useRef();
  const handleChangeText = (e) => {
    onChange(e.target.value);
  };
  const handleChangeFile = (e) => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      onChange(`<script>${fileReader.result}</script>`);
    };
    fileReader.readAsText(e.target.files[0]);
  };
  return (
    <div style={rootStyle}>
      <input
        style={{ display: 'none' }}
        type="file"
        accept=".js"
        ref={node => inputElement = node}
        onChange={handleChangeFile}/>
      <button style={buttonStyle} onClick={() => inputElement.click()}>Upload Script</button>
      <textarea style={textAreaStyle} onChange={handleChangeText} value={value}/>
    </div>
  );
};

JavascriptCustomWidget.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default JavascriptCustomWidget;
