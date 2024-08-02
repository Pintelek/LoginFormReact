import PropTypes from 'prop-types';
import { useState } from 'react';

function TextField({ name, type, label, state, onChange, error }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  const handleClick = () => {
    setIsVisible(prev => !prev);
  };
  return (
    <div className="group">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <div>
        <div className="input-group has-validation">
          <input
            type={isVisible ? 'text' : type}
            onChange={handleChange}
            id={name}
            name={name}
            value={state[name]}
            className={'input' + (error[name] ? ' is-invalid' : '')}
          />
          {type === 'password' ? (
            <img
              className="show-password"
              onClick={handleClick}
              src={`./src/assets/eye${!isVisible ? '-slash' : ''}.svg`}
            />
          ) : null}
        </div>
        {error[name] !== '' ? (
          <div className="invalid-feedback">{error[name]}</div>
        ) : null}
      </div>
    </div>
  );
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  state: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object,
};

// TextField.defaultProps = {
//   type: 'text',
//   error: {},
// };

export default TextField;
