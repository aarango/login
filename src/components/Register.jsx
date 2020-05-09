import React from 'react';
import '../assets/styles/components/Register.scss';

class Register extends React.Component {

  PressContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <section className='register'>
        <section className='register__container'>
          <form className='register__container--form'>
            <input className='input' defaultValue={values.name} onChange={handleChange('name')} label='name' type='text' placeholder='Nombre' />
            <input className='input' defaultValue={values.lastname} onChange={handleChange('lastname')} label='lastname' type='text' placeholder='Apellido' />
            <input className='input' defaultValue={values.email} onChange={handleChange('email')} label='email' type='text' ctype='text' placeholder='Correo' />
            <button className='button' type='submit' onClick={this.PressContinue}>Continuar</button>
          </form>
        </section>
      </section>
    );
  }
}

export default Register;
