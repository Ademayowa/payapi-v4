import { useState } from 'react';
import './Team.css';

const Team = () => {
  const [teams] = useState([
    {
      title: 'Team Members',
      count: '300+',
    },
    {
      title: 'Offices in the US',
      count: '3',
    },
    {
      title: 'Transactions analyzed',
      count: '10M+',
    },
  ]);

  return (
    <section className='team'>
      <div className='container' data-aos='fade-up'>
        <div className='row'>
          <div className='team__main col-md-12 d-flex justify-content-between'>
            {teams.map((team, index) => {
              const { title, count } = team;

              return (
                <div key={index}>
                  <hr />
                  <h2>{title}</h2>
                  <p>{count}</p>
                  <hr className='test' />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
