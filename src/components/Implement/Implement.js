import React from 'react';
import Title from '../Title/Title';
import Img from '../../img/implement.svg';
import './Implement.css';

const Implement = () => {
  return (
    <section className='implement'>
      <div className='container'>
        <div className='row'>
          <div
            className='col-md-9 mx-md-auto col-lg-6 pl-lg-0'
            data-aos='fade-left'
            data-aos-anchor-placement='top-center'
          >
            <img src={Img} alt='' className='implement__img img-fluid' />
          </div>

          <div
            className='implement__info col-md-9 mx-md-auto col-lg-6 pl-lg-5'
            data-aos='fade-right'
            data-aos-anchor-placement='top-center'
          >
            <Title
              title='Easy to implement'
              info=' Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implement;
