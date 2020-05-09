import React from 'react';

class RegisterConfirmation extends React.Component {

  pressContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  pressBack
   = (e) => {
     e.preventDefault();
     this.props.prevStep();
   };

  render() {
    const {
      values: { name, lastname, email, occupation, city, biogra },
    } = this.props;
    return (
      <section className='register'>
        <section className='register__container'>
          <form className='register__container--form'>
            <dl>

              <dt className='text'>Nombre:</dt>
              <dd>{name}</dd>
              <dt className='text'>Apellido:</dt>
              <dd>{lastname}</dd>
              <dt className='text'>Email:</dt>
              <dd>{email}</dd>
              <dt className='text'>Ocupación:</dt>
              <dd>{occupation}</dd>
              <dt className='text'>Ciudad:</dt>
              <dd>{city}</dd>
              <dt className='text'>Biografia:</dt>
              <dd>{biogra}</dd>
            </dl>
            <button className='button' type='submit' onClick={this.pressContinue}>Continuar</button>
            <button className='button' type='submit' onClick={this.pressBack}>Regresar</button>
          </form>
        </section>
      </section>

    );
  }
}

export default RegisterConfirmation;
