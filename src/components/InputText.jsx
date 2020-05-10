import React from 'react';
import '../assets/styles/components/Register.scss';

class InputText extends React.Component {

  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue =() => {
    console.log('');
  }

  render() {
    const { type, name, classname, placeholder } = this.props.params;
    return (
      <div className={classname}>
        <label htmlFor={name}>Test</label>
        <input
          onChange={this.changeValue}
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default InputText;
