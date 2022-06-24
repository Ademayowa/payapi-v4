import './VisionList.css';

const VisionList = ({ text, title }) => {
  return (
    <section className='visionList about__infoText d-flex'>
      <div className='about__title col-md-4'>
        <h4>{title}</h4>
      </div>
      <div className='about__text col-md-8 pl-lg-5'>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default VisionList;
