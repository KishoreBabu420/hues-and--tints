import React, { useState, useEffect } from 'react';

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  console.log(r, g, b);
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const Color = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeOut);
  }, [alert]);
  const hexValue = rgbToHex(...rgb);
  return (
    <article
      className={`color ${index > 9 ? 'color-light' : null}`}
      style={{ backgroundColor: hexValue }}
      onClick={() => {
        navigator.clipboard.writeText(hexValue);
        setAlert(true);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>Copied to clipboard</p>}
    </article>
  );
};

export default Color;
