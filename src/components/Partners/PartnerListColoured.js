import React, { useState } from 'react';
import Tesla from '../../img/coloured-teslsa.png';
import Microsoft from '../../img/coloured-microsoft.png';
import Hp from '../../img/coloured-hp.png';
import Oracle from '../../img/coloured-oracle.png';
import Google from '../../img/coloured-google.png';
import Nvidia from '../../img/coloured-nvidia.png';
import './PartnerList.css';

const PartnerListColoured = () => {
  const [partners] = useState([
    {
      img: Tesla,
    },
    {
      img: Microsoft,
    },
    {
      img: Hp,
    },
    {
      img: Oracle,
    },
    {
      img: Google,
    },
    {
      img: Nvidia,
    },
  ]);

  return (
    <div className='partnersColoured pl-lg-5' style={grid}>
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
