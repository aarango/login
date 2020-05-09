import React from 'react';
import '../assets/styles/components/StepTitle.scss';

const Success = ({ children, message }) => (
  <section className='register'>
    <section className='register__container'>
      <form className='register__container--form'>
        <h1>{message}</h1>
        {children}
      </form>
    </section>
  </section>
);

export default Success;
