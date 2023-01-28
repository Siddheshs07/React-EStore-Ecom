import { useProductContext } from '../context/ProductContext';
import HeroSection from './HeroSection';

const About = () => {


  const {myName} = useProductContext();
  const data= {
    name: "About US"
  };
  return (
  <>
  {myName}
  <HeroSection myData={data} /> {""}
  </>
  );
};

export default About;