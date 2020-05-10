import React from 'react';
import '../assets/styles/components/Register.scss';

class RegisterPersonal extends React.Component {
  pressContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  pressBack = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <section className='register '>
        <section className='register__container'>
          <form className='register__container--form'>
            <input className='input' onChange={handleChange('occupation')} label='occupation' type='text' placeholder='Ocupación' />
            <input className='input' onChange={handleChange('city')} label='city' type='text' placeholder='Ciudad' />
            <input className='input' onChange={handleChange('biogra')} label='biogra' type='text' ctype='text' placeholder='Biografía' />
            <button type='button' className='button' onClick={this.pressContinue}>Continuar</button>
            <button type='button' className='button' onClick={this.pressBack}>Regresar</button>
          </form>
        </section>
      </section>
    );
  }
}

export default RegisterPersonal;
