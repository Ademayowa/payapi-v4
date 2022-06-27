import React from 'react';
import { data } from '../../data';
import BankingList from '../BankingList/BankingList';
import './Banking.css';

const Banking = () => {
  return (
    <section className='banking container'>
      <div className='row' data-aos='fade-up'>
        {data.map((bank, index) => (
          <BankingList key={index} bank={bank} />
        ))}
      </div>
    </section>
  );
};

export default Banking;
