import React from 'react';

import StepperBar from './StepperBar';
import Form from '../formschema/FormTemplate';
import CreateFormComponent from './CreateFormComponent';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      firstName: '',
      lastname: '',
      email: '',
      occupation: '',
      city: '',
      biogra: '',
    };
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
    console.log(input);
  };

  showStep = () => {
    const { step } = this.state;
    const { firstName, lastname, email, occupation, city, biogra } = this.state;
    const values = { firstName, lastname, email, occupation, city, biogra };

    switch (step) {
      case 1:
        return (
          <Dynamic
            title={json.title}
            description={json.description}
            properties={json.properties}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            onSubmit_={this.handleChange}
          />
        );
      case 2:
        return (
          <RegisterPersonal
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <RegisterConfirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success message='Gracias por suscriberte uno de nuestros asesores se comunicará contigo.' />;
      default:
    }
  }

  getFormFields = (formIndex = 0) => {
    const templateFields = Form.template[formIndex];
    const formFields = <CreateFormComponent template={templateFields} />;
    return formFields;
  }

  render() {
    const { step } = this.state;

    return (
      <>
        <form>
          {this.getFormFields(step)}
        </form>
        <StepperBar valor={step} />
      </>
    );
  }
}

export default UserForm;
