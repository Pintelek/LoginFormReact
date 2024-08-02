import { useState, useEffect } from 'react';
import { validator } from '../utils/validator';
import TextField from './TextField';

function ForgotForm() {
  const [data, setData] = useState({ email: '' });
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
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          name={'email'}
          label={'Введите ваш Email'}
          state={data}
          error={errors}
        />
        <div className="group">
          <button
            className="button"
            type="submit"
            disabled={Object.keys(errors).length !== 0}
          >
            Восстановить
          </button>
        </div>
      </form>
    </>
  );
}

export default ForgotForm;
