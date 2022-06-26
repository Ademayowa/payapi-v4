import React from 'react';
import Title from '../Title/Title';
import PartnerList from '../Partners/PartnerList';
import Shape from '../../img/work-shape.png';
import Shape1 from '../../img/work-shape-tablet.png';
import { Link } from 'react-router-dom';
import './Work.css';

const Work = ({ title, info }) => {
  return (
    <section className='work'>
      <div className='container text-white'>
        <div className='row'>
          <div className='work__partners col-md-8 mx-md-auto col-lg-6 order-md-6 order-lg-12 mb-5'>
            <PartnerList />
          </div>

          <div className='work__about col-md-8 mx-md-auto col-lg-6 order-md-12 order-lg-6'>
            <h2 className='work__title' data-aos='fade-up'>
              Who we work with
            </h2>
            <Title
              className='work__stories'
              info='Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.'
            />
            <div className='work__btn'>
              <Link to='/about' className='btn btn-light btn-rounded'>
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <img src={Shape} alt='shape' className='work__shape img-fluid' />
      <img src={Shape1} alt='shape' className='work__shapeTablet img-fluid' />
    </section>
  );
};

export default Work;
