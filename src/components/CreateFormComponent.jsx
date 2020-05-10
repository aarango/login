import React from 'react';
import '../assets/styles/components/Register.scss';

class CreateFormComponent extends React.Component {

  /*
  createField = (fieldTemplate) => {
    const container = document.createElement('div');
    const field = `
      <span> ${fieldTemplate.name} </span>
      <${fieldTemplate.component}
        type="${fieldTemplate.type}"
        placeholder="${fieldTemplate.placeholder}"
        ${fieldTemplate.required ? 'required' : ''}>
    `;
    container.innerHTML = field;
    debugger;
    return container;
  };
  */
 createField = (fieldTemplate) => {
   debugger
   const field = React.createElement(fieldTemplate.Component, { type: fieldTemplate.type, placeholder: fieldTemplate.placeholder });
   return field;
   
 }

 render() {
   const { template } = this.props;
   return (
     <section className='register'>
       <section className='register__container'>
         <h1>{template.title}</h1>

       </section>
     </section>
   );
 }
}
export default CreateFormComponent;
