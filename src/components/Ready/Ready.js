import React from 'react';
import Form from '../Hero/Form';
import './Ready.css';

const Ready = () => {
  return (
    <section className='ready'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9 mx-md-auto col-lg-6'>
            <h2 className='ready__title'>Ready to start</h2>
          </div>

          <div className='ready__form col-md-9 mx-md-auto col-lg-6'>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ready;
