import { useState } from 'react';
import Tesla from '../../img/tesla.svg';
import Microsoft from '../../img/microsoft.png';
import Hp from '../../img/hp.png';
import Oracle from '../../img/oracle.svg';
import Google from '../../img/google.png';
import Nvidia from '../../img/nvidia.png';
import './PartnerList.css';

const PartnerList = () => {
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
    <div className='partnerList' style={grid}>
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
};

export default PartnerList;
