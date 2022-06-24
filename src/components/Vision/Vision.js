import VisionList from '../VisionList/VisionList';
import './Vision.css';

const Vision = () => {
  return (
    <section className='vision'>
      <VisionList
        title='Our Vision'
        text="Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.'"
      />
      <VisionList
        title='Our Business'
        text='At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.'
      />
    </section>
  );
};

export default Vision;
