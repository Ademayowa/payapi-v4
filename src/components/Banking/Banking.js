import React, { useState } from 'react';
import Img1 from '../../img/finances.svg';
import Img2 from '../../img/banking.svg';
import Img3 from '../../img/payments.svg';
import BankingList from '../BankingList/BankingList';
import './Banking.css';

const Banking = () => {
  const [banking] = useState([
    {
      img: Img1,
      title: 'Personal Finances',
      info: 'Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.',
    },
    {
      img: Img2,
      title: 'Banking & Coverage',
      info: 'With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.',
    },
    {
      img: Img3,
      title: 'Consumer Payments',
      info: 'It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.',
    },
  ]);

  return (
    <section className='banking container'>
      <div className='row' data-aos='fade-up'>
        {banking.map((bank, index) => (
          <BankingList key={index} bank={bank} />
        ))}
      </div>
    </section>
  );
};

export default Banking;