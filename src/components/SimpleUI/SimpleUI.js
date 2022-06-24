import React from 'react';
import Title from '../Title/Title';
import Img1 from '../../img/phone1.svg';
import Img2 from '../../img/phone2.svg';
import Shape from '../../img/simple-shape.png';
import './SimpleUI.css';

const SimpleUI = () => {
  return (
    <section className='simpleUI'>
      <div className='container'>
        <div className='row no-gutters'>
          <div
            className='col-md-9 mx-md-auto order-md-6 col-lg-6 order-lg-12 simpleUI__img mt-md-5 '
            style={grid}
            data-aos='fade-left'
            data-aos-anchor-placement='top-center'
          >
            <img src={Img1} alt='phone' className='img-fluid ml-lg-3' />
            <img src={Img2} alt='phone2' className='phone2 img-fluid' />
          </div>

          <div
            className='simpleUI__info col-md-9 order-md-12 mx-md-auto col-lg-6 order-lg-6'
            data-aos='fade-right'
            data-aos-anchor-placement='top-center'
          >
            <Title
              title='Simple UI & UX'
              info='Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.'
            />
          </div>
        </div>
      </div>

      <img src={Shape} alt='shape' className='simpleUI__shape img-fluid' />
    </section>
  );
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
};

export default SimpleUI;
