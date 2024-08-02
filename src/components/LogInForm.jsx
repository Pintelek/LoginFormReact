import { useState, useEffect } from 'react';
import { validator } from '../utils/validator';
import TextField from './TextField';
import CheckBoxField from './CheckBoxField';
import { Link } from 'react-router-dom';

function LogInForm({ onToggle }) {
  const [data, setData] = useState({ email: '', password: '', stayOn: true });
  const [errors, setErrors] = useState({});

  const validateConfig = {
    email: {
      isRequired: {
        message: 'Електронная почта обязательна для заполнения',
      },
      isEmail: {
        message: 'Email введен не корректно.',
      },
    },
    password: {
      isRequired: {
        message: 'Пароль обязателен для заполнения',
      },
      minSymbol: {
        message: 'Минимальный размер введенных символов 8',
      },
      isPassword: {
        message:
          'Пароль должен содержать хотя бы одну прописную и одну строчную букву, а также цифру',
      },
    },
  };

  const validate = () => {
    const errors = validator(data, validateConfig);
    setErrors(errors);
    return Object.keys(errors).length !== 0;
  };

  useEffect(() => {
    validate();
  }, [data]);

  const handleChange = target => {
    setData(prev => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) return;
  };

  return (
    <>
      <form className="sign-in-htm" onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          name={'email'}
          label={'Введите ваш Email'}
          state={data}
          error={errors}
        />
        <TextField
          onChange={handleChange}
          name={'password'}
          label={'Введите пароль'}
          state={data}
          type={'password'}
          error={errors}
        />
        <CheckBoxField
          value={data.stayOn}
          name={'stayOn'}
          onChange={handleChange}
        >
          <span className="icon"></span>Оставаться в системе
        </CheckBoxField>
        <div className="group">
          <button
            className="button"
            type="submit"
            disabled={Object.keys(errors).length !== 0}
          >
            Войти
          </button>
          <div className="hr"></div>
          <div className="foot-lnk">
            <Link to="/forgot">Забыли пароль?</Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default LogInForm;
