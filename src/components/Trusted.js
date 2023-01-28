import React from 'react'
import styled from 'styled-components';

const Trusted = () => {
  return<Wrapper className="brand-section">
    <div className="container">
        <h3>Trusted by 1000+ Companies</h3>
        <div className="brand-section-slider">
            <div className="slide">
            <img src="https://img.freepik.com/free-vector/orange-logo-arrow-shape_1043-53.jpg?w=826&t=st=1673524568~exp=1673525168~hmac=8a9b146abcdf0c487275fd67d3b9335c722d3b721bb3b88be04ce2d21a1525d3" alt="company1" />

            </div>
            <div className="slide">
            <img src="https://img.freepik.com/free-vector/technological-logo-design_1424-39.jpg?w=826&t=st=1673524572~exp=1673525172~hmac=49577804a4345d47772aa16db79484c92167b1da9028614799f28d7de3331396" alt="company2" />
            </div>
            <div className="slide">
            <img src="https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg?w=826&t=st=1673524567~exp=1673525167~hmac=b6df0893812a2b9757640aa9d0c2f9c09bf752b0afb318f664dccb7bb5fc7593" alt="company3" />
            </div>
            <div className="slide">
            <img src="https://img.freepik.com/free-vector/letter-s-logo-negative-space-style-corporate-business-emblem-logotype_126523-2780.jpg?w=1380&t=st=1673524574~exp=1673525174~hmac=ece950c3c632705d0645bd867a4573c722e363c0745719cf0e4904cd5892e08b" alt="company4" />
            </div>
            <div className="slide">
            <img src="https://img.freepik.com/premium-psd/3d-logo-mockup-with-dark-wooden_204971-140.jpg?w=1380" alt="company2" />
            </div>
        </div>
    </div>
  </Wrapper> 
};
const Wrapper =styled.section`
padding:9rem;
background-color: ${({theme}) => theme.colors.bg};

.brand-section{
    padding: 12rem 0 0 0;
}
h3{
    text-align: center;
    text-transform: capitalize;
    color: ${({theme}) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
}
img{
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
}

.brand-section-slider{
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}
@media (max-width: ${({theme}) => theme.media.mobile}){

    .brand-section-slider{
        margin-top: 3.2rem;
        display: grid;
        grid-template-column: 1fr 1fr;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 1.5rem;
    }
}
`;

export default Trusted