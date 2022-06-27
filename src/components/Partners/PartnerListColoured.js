import React from 'react';
import { partners } from '../../data';
import './PartnerList.css';

const PartnerListColoured = () => {
  return (
    <div className='partnersColoured pl-lg-5' style={grid} data-aos='fade-left'>
      {partners.map((partner, index) => (
        <div key={index}>
          <img src={partner.img} alt='partners' className='img-fluid' />
        </div>
      ))}
    </div>
  );
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '2rem',
  height: '0',
};

export default PartnerListColoured;
