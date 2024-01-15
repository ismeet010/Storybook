import React from 'react'

const Buttons = ({ variant, text, ...rest }) => {
  return (
    <button className={`button ${variant}`} {...rest}>
      {text}
    </button>
  );
};

export default Buttons