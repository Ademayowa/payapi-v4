import React from 'react';

const BankingList = ({ bank }) => {
  const { img, title, info } = bank;

  return (
    <div className='col-sm-6 col-md-4 text-center'>
      <img src={img} alt='banking' className='img-fluid mb-5' />
      <h4 className='mb-4'>{title}</h4>
      <p>{info}</p>
    </div>
  );
};

export default BankingList;
