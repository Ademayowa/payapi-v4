import React from 'react';
import './Title.css';

const Title = ({ title, info }) => {
  return (
    <div className='title'>
      <h2>{title}</h2>
      <p>{info}</p>
    </div>
  );
};

export default Title;
