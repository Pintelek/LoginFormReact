import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LogInForm from './LogInForm';
import LogUpForm from './SingUpForm';
import ForgotForm from './ForgotForm';

function FormPage() {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === 'register' ? type : 'login'
  );

  const history = useNavigate();

  useEffect(() => {
    setFormType(type);
  }, [type]);

  useEffect(() => {
    history(`/login`);
  }, []);
  return (
    <>
      <div className="login-form">
        {formType === 'forgot' ? (
          <ForgotForm />
        ) : formType === 'login' ? (
          <LogInForm />
        ) : (
          <LogUpForm />
        )}
      </div>
    </>
  );
}

export default FormPage;
