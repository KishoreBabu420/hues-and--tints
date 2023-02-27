import React, { useState } from 'react';

import Color from './components/Color';

import Values from 'values.js';

const App = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const submitHandler = function (e) {
    e.preventDefault();
    // try catch block
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);
    } catch (err) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            value={color}
            placeholder='#1c2042'
            name='color'
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? 'error' : null}`}
          />

          <button
            type='submit'
            className='btn'
          >
            Submit
          </button>
        </form>
      </section>

      <section className='colors'>
        {list.map((color, index) => {
          return (
            <Color
              key={index}
              {...color}
              index={index}
            />
          );
        })}
      </section>
    </>
  );
};

export default App;
