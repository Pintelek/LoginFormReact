import PropTypes from 'prop-types';

function CheckBoxField({ name, onChange, children, value, errors }) {
  const handleChange = ({ target }) => {
    onChange({ name: name, value: target.checked });
  };

  return (
    <>
      <div className="group">
        <input
          className={
            'check' + (errors ? (errors[name] ? ' is-invalid' : '') : '')
          }
          id={name}
          type="checkbox"
          role="switch"
          checked={value}
          onChange={handleChange}
        />
        <label htmlFor={name}>{children}</label>
        {errors &&
          (errors[name] ? (
            <div className="invalid-feedback">{errors[name]}</div>
          ) : null)}
      </div>
    </>
  );
}

CheckBoxField.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  value: PropTypes.bool,
};

export default CheckBoxField;
