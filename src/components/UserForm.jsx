import React from 'react';

import RegisterPersonal from './RegisterPersonal';
import RegisterConfirmation from './RegisterConfirmation';
import Success from './Success';
import Register from './Register';
import StepperBar from './StepperBar';
import StepTitle from './StepTitle';
import InputText from './InputText';

import '../assets/styles/components/StepTitle.scss';
import Data from '../formschema/FormShema.json';

export class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      name: '',
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
  };

  showStep = () => {
    const { step } = this.state;
    const { name, lastname, email, occupation, city, biogra } = this.state;
    const values = { name, lastname, email, occupation, city, biogra };

    switch (step) {
      case 1:
        return (
          <Register
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
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

  render() {
    const { step } = this.state;

    return (
      <>
        {Data.map((input, i) => {
          console.log(Data[i]);
          return <InputText key={i} params={input} />;
        })}

        <StepperBar valor={step} />
        <StepTitle title={`${step}${' '}`} />
        {this.showStep()}
      </>
    );
  }
}

export default UserForm;
