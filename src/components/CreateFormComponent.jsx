import React from 'react';
import '../assets/styles/components/Register.scss';

class CreateFormComponent extends React.Component {

  createField = (fieldTemplate, key) => {
    const field = React.createElement(
      fieldTemplate.component,
      { type: fieldTemplate.type,
        placeholder: fieldTemplate.placeholder,
        className: 'forminput',
        key: `form-input-${key}`
      }
    );
   return field;
  }

  render() {
    const { template } = this.props;
    return (
      <section className='register'>
        <section className='register__container'>
          <h1>{template.title}</h1>
          {
            template.fields
              .map((field, index) => {
                return this.createField(field, index)
              })
          }
        </section>
      </section>
   );
  }
}

export default CreateFormComponent;
