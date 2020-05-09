import React from 'react';

import RegisterPersonal from './RegisterPersonal';
import RegisterConfirmation from './RegisterConfirmation';
import Success from './Success';
import Register from './Register';

export class User extends React.Component {
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
        return <Success />;
      default:
    }
  }

  render() {
    const { step } = this.state;

    return (
      <>
        <h2>
          Step
          {step}
          {' '}
          of 3.
        </h2>
        {this.showStep()}
      </>
    );
  }
}

export default User;
