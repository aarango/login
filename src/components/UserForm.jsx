import React from 'react';

import StepperBar from './StepperBar';
import Form from '../formschema/FormTemplate';
import CreateFormComponent from './CreateFormComponent';

import '../assets/styles/components/Register.scss';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      disablePrevButton: true,
      disableNextButton: false
    };
    this.template = Form.template;
  }

  nextForm = (event) => {
    const { step } = this.state;
    const disableNext = this.disableButton("next", step + 1);
    const disablePrev = this.disableButton("prev", step + 1)
    this.setState({ step: step + 1, disableNextButton: disableNext, disablePrevButton: disablePrev });
    event.preventDefault();
  };

  prevForm = (event) => {
    const { step } = this.state;
    const disableNext = this.disableButton("next", step - 1);
    const disablePrev = this.disableButton("prev", step - 1)
    this.setState({ step: step - 1, disableNextButton: disableNext, disablePrevButton: disablePrev });
    event.preventDefault();
  };

  getFormFields = (formIndex = 0) => {
    const templateFields = this.template[formIndex];
    const formFields = <CreateFormComponent template={templateFields} />;
    return formFields;
  }

  disableButton = (type, step) => {
    let disableButton = true;
    switch(type) {
      case 'prev':
        disableButton = step <= 0;
        break;
      case 'next':
        disableButton = step >= this.template.length - 1;
        break;
      default:
    }
    return disableButton;
  }

  render() {
    const { step } = this.state;
    return (
      <>
        <form className='register__container--form'>
          {this.getFormFields(step)}
          <button onClick={this.prevForm} disabled={this.state.disablePrevButton}>Previos</button>
          <button onClick={this.nextForm} disabled={this.state.disableNextButton}>Next</button>
        </form>
        <StepperBar valor={step} />
      </>
    );
  }
}

export default UserForm;
