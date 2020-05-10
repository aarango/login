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

   const field = React.createElement(fieldTemplate.component, { type: fieldTemplate.type, placeholder: fieldTemplate.placeholder, className: 'forminput' });
   return field;

 }

 render() {
   const { template } = this.props;
   return (
     <section className='register'>
       <section className='register__container'>
         <h1>{template.title}</h1>
         {template.fields.forEach((field) => {
           return this.createField(field);
         })}
       </section>
     </section>
   );
 }
}
export default CreateFormComponent;
