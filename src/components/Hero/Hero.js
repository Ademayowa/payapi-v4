import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Img from '../../img/hero-phone.png';
import Shape from '../../img/hero-shape.png';
import Shape1 from '../../img/hero-shape-tablet.png';
import Shape2 from '../../img/hero-shape-mobile.png';
import Form from './Form';
import './Hero.css';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='row'>
          <div
            className='hero__marginTop col-md-9 mx-md-auto col-lg-6 order-md-6 order-lg-12'
            data-aos='fade-left'
            data-aos-easing='linear'
          >
            <img src={Img} alt='phone-img' className='hero__phone img-fluid' />
          </div>

          <div
            className='col-md-9 mx-md-auto col-lg-6 order-md-12 order-lg-6'
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-duration='1500'
            data-aos-anchor-placement='top-center'
          >
            <div className='hero__lead mb-3'>
              <h2>
                Start building <span>with our APIs for absolutely free.</span>
              </h2>
            </div>
            <Form />
            <p className='hero__contact mt-4'>
              Have any questions? <span className='hero__bold'>Contact Us</span>
            </p>
          </div>
        </div>
      </div>

      <img src={Shape} alt='shape' className='hero__shapeDesktop img-fluid' />
      <img src={Shape1} alt='shape' className='hero__shapeTablet img-fluid' />
      <img src={Shape2} alt='shape' className='hero__shapePhone img-fluid' />
    </section>
  );
};

export default Hero;
