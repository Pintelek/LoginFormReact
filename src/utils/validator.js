export function validator(data, config) {
  const errors = {};
  function validate(method, value, config) {
    switch (method) {
      case 'isRequired':
        {
          if (typeof value === 'boolean') {
            return value ? false : config.message;
          } else if (typeof value === 'object') {
            return value._id ? false : config.message;
          } else if (value.trim() === '') return config.message;
        }
        break;
      case 'minSymbol':
        if (value.trim().length < 8) return config.message;
        break;
      case 'isEmail':
        if (!/^\S+@\S+\.[a-z]+$/g.test(value.trim())) return config.message;
        break;
      case 'isPassword':
        if (
          !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}/g.test(
            value.trim()
          )
        )
          return config.message;
        break;
      case 'isName':
        if (/[^А-Яа-я]/gu.test(value.trim())) return config.message;
        break;
      case 'isRepeat':
        if (value !== data.password) return config.message;
        break;

      default:
        break;
    }
  }
  for (let fieldName in data) {
    for (let validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (!errors[fieldName] && error) {
        errors[fieldName] = error;
      }
    }
  }

  return errors;
}
