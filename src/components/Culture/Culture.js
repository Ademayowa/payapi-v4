import './Culture.css';
import CultureList from '../CultureList/CultureList';

const Culture = () => {
  return (
    <section className='culture' data-aos='fade-up'>
      <CultureList
        title='The Culture'
        text="We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title."
      />
      <CultureList
        title='The People'
        text="We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills."
      />
    </section>
  );
};

export default Culture;
