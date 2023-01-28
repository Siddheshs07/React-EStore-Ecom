import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';

const HeroSection = ({myData}) => {
  const {name}= myData;
  const {Slogan}= myData;
  return <Wrapper>
    <div className="container">
        <div className="grid grid-two-column">
            <div className="hero-section-data">
                <p className='intro-data'> WelCome To </p>
                <h1>{name} <p className="slogan"> {Slogan} </p> </h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Libero dolorum, veniam veritatis et molestias nihil accusamus 
                hic quos eligendi facilis accusantium nisi illo. 
                Ullam veniam molestias dignissimos adipisci fugiat quasi.
                </p>
                <NavLink to="/products" >
                  <Button>Shop Now</Button>
                </NavLink>
            </div>
            {/* Hero  Image or Family Shopping Image */}
             <div className="hero-section-image">
                  <figure>
                     <img src="images/hero.jpg" alt="heroImg" className="img-style"/>
                  </figure>
              </div>
        </div>
    </div>
  </Wrapper>;
  
};

const Wrapper = styled.section`
padding: 12rem 0;

img{
  min-width: 10rem;
  height: 10rem;
}

.hero-section-data{
  p {
    margin: 2rem 0;
  }

  h1{
    text-transform: capitalize;
    font-weight: bold;
  }
  .intro-data {
    margin-bottom: 0;
  }
  
  .slogan{
    margin-top: 0;
    color:${({theme}) => theme.colors.slogan};
  }
}

.hero-section-image {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

figure{
  position: relative;

  &::after{
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    border-radius: 1.5rem;
    left 50%;
    top: -5rem;
    z-index: -1;
  }

}

.img-style {
  width: 100%;
  height: auto;
  border-radius: 1rem;
}

@media (max-width: ${({theme}) => theme.media.mobile}){
  .grid {
    gap: 10rem;
  }

  figure::after {
    content: "";
    width:50%;
    height: 100%;
    left: 0;
    top: 10%;
    background-color: rgba(81, 56, 238, 0.4);
  }


}
`;

export default HeroSection;