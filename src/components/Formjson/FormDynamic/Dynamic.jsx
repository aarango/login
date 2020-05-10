import React, { useState, useEffect } from 'react';
import '../../../assets/styles/components/Register.scss';

const Dynamic = ({ onSubmit_, title,  properties }) => {
  const [form, setForm] = useState({});
  const [keys, setkeys] = useState([]);
  const [render, setRender] = useState([]);
  useEffect(() => {
    let datos = [];
    let initForm = {};
    for (const element in properties) {
      datos = [...datos, properties[element]];
      console.log(element);
      if (properties[element].default) {
        initForm = { ...initForm, [element]: properties[element].default };
      }
    }
    setForm(initForm);
    setkeys(Object.keys(properties));
    setRender(datos);
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    if (onSubmit_) {
      onSubmit_(form);
    }
  };
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <section className='register'>
      <section className='register__container'>
      <h1>{title}</h1>
        <form onSubmit={onSubmit} className='register__container--form'>
          {render.map((r, i) => {
            return (
              <div key={keys[i]} className='form-group'>
                <label>{r.title}</label>
                <input
                  type={r.type}
                  name={keys[i]}
                  className='input'
                  placeholder={r.title}
                  defaultValue={r.default}
                  onChange={onChange}
                  required={r.required || false}
                />
              </div>
            );
          })}
          <button className='button' type='submit'>
            Continuar
          </button>
        </form>
      </section>
    </section>
  );
};
export default Dynamic;
