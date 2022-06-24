import Banking from '../Banking/Banking';
import Hero from '../Hero/Hero';
import Implement from '../Implement/Implement';
import Ready from '../Ready/Ready';
import SimpleUI from '../SimpleUI/SimpleUI';
import Work from '../Work/Work';
import './Home.css';

const Home = () => {
  return (
    <>
      <Hero />
      <Work />
      <Implement />
      <SimpleUI />
      <Banking />
      <Ready />
    </>
  );
};

export default Home;
