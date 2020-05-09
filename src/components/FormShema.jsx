import React from 'react';
import shema from '../formschema/FormShema';

class FormShema extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log('constr.super', this);

    this.state = {
      userFormData: {},
    };

    this.setUserFormData = this.setUserFormData.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  componentWillMount() {
    this.setUserFormData();
  }

  setUserFormData() {

    this.setState({
      userFormData: {
        title: 'foobar',
      },
    });

  }

  resetForm() {
    console.log('resetting form');
  }

  render() {
    return (
      <div className='myTestForm'>
        <Form
          schema={schema}
          formData={this.state.userFormData}
          onChange={
            console.log('changed')
          }
          onSubmit={
            console.log('submitted')
          }
          onError={
            console.log('errors')
          }
        >

          <button type='reset' onClick={this.resetForm}>Reset</button>
          <button type='submit'>Submit</button>

        </Form>
      </div>
    );
  };
}

export default FormShema
