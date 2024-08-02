import { useNavigate } from 'react-router-dom';

function Nav() {
  const history = useNavigate();

  return (
    <>
      <input
        id="tab-1"
        type="radio"
        name="tab"
        className="sign-in"
        defaultChecked
        onChange={e => {
          e.target.checked = true;
          history(`/login`);
        }}
      />
      <label htmlFor="tab-1" className="tab">
        Вход
      </label>
      <input
        id="tab-2"
        type="radio"
        name="tab"
        className="sign-up"
        onChange={e => {
          e.target.checked = true;
          history(`/register`);
        }}
      />
      <label htmlFor="tab-2" className="tab">
        Регистрация
      </label>
    </>
  );
}

export default Nav;
