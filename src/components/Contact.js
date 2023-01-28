import { useAuth0 } from '@auth0/auth0-react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import styled from 'styled-components';

const Contact = () => {

  const{isAuthenticated, user} = useAuth0();
  return <Wrapper>
  <h2 className="common-heading">Contact Page</h2>
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d579.8791361741852!2d75.91600751593592!3d17.63481600218405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1673873596597!5m2!1sen!2sin" width="100%" height="400" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="This is a unique title" ></iframe>
  <div className="container">
    <div className="contact-form">
      <form action="https://formspree.io/f/xjvdkgze" method= "POST" className="contact-inputs">
        <input type="text" placeholder="User Name" name="Username" autoComplete="off" value={isAuthenticated ? user.name : ""} required />
        <input type="email" name="Email"  placeholder="Email" autoComplete="off" value={isAuthenticated ? user.email : ""} required  />
        <textarea name="Message" cols="30" rows="10" autoComplete="off" placeholder="Enter Your Message" required />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
  </Wrapper>
};

const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
text-align: center;

.container{
 margin-top: 6rem;


 .contact-form{
   max-width: 50rem;
   margin: auto;


   .contact-inputs{
     display: flex;
     flex-direction: column;
     gap: 3rem;


     input[type= "submit"] {
       cursor: pointer;
       transition: all 0.2s;

       &:hover{
         background-color: ${({theme}) => theme.colors.white};
         border: 1px solid ${({theme}) => theme.colors.btn};
         color: ${({theme}) => theme.colors.btn};
         transform: scale(0.9);
       }
     }
   }
 }
}
`; 

export default Contact;