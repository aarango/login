import React from 'react';

import '../assets/styles/components/StepTitle.scss';

const StepTitle = ({ children, title }) => (
  <section className='main'>
    <h3 className='main__title'>{title}</h3>
    {children}
  </section>
);

export default StepTitle;
