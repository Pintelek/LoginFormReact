import { useState, useEffect } from 'react';
import { validator } from '../utils/validator';
import TextField from './TextField';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SingUpForm({ onToggle }) {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [errors, setErrors] = useState({});

  const validateConfig = {
    name: {
      isRequired: {
        message: 'Имя обязательно для заполнения',
      },
      isName: {
        message: 'Имя должно содержать только русские буквы',
      },
    },
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
    repeatPassword: {
      isRequired: {
        message: 'Пароль обязателен для заполнения',
      },
      isRepeat: {
        message: 'Пароли не совпадают',
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
      <form className="sign-up-htm" onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          name={'name'}
          label={'Введите ваше Имя'}
          state={data}
          error={errors}
          type={'text'}
        />

        <TextField
          onChange={handleChange}
          name={'email'}
          label={'Введите ваш Email'}
          state={data}
          error={errors}
          type={'text'}
        />
        <TextField
          onChange={handleChange}
          name={'password'}
          label={'Введите пароль'}
          state={data}
          type={'password'}
          error={errors}
        />
        <TextField
          onChange={handleChange}
          name={'repeatPassword'}
          label={'Подтвердите пароль'}
          state={data}
          type={'password'}
          error={errors}
        />

        <div className="group">
          <button
            className="button"
            type="submit"
            disabled={Object.keys(errors).length !== 0}
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
    </>
  );
}

SingUpForm.propTypes = {
  onToggle: PropTypes.func,
};

export default SingUpForm;
