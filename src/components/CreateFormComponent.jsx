import React from 'react';
import '../assets/styles/components/Register.scss';

class CreateFormComponent extends React.Component {

  createField = (fieldTemplate, key, _onChange) => {
    const field = React.createElement(
      fieldTemplate.component,
      { type: fieldTemplate.type,
        placeholder: fieldTemplate.placeholder,
        className: 'forminput',
        key: `form-input-${key}`,
        label: fieldTemplate.label,
        title: fieldTemplate.title,
        required: fieldTemplate.required,
        onChange: _onChange,
      },
    );
    return field;
  }

  render() {
    const { template, _onChange } = this.props;
    return (
      <>
        <h1>{template.title}</h1>
        {
          template.fields
            .map((field, index) => {
              return this.createField(field, index, _onChange);
            })
        }
      </>
    );
  }
}

export default CreateFormComponent;
