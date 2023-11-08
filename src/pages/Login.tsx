import { useNavigate } from 'react-router-dom';
import { BsDiscord } from 'react-icons/bs';
import useForm from '../hooks/useForm';

function Login() {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: { email: '', password: '' },
    validation: {
      email: { filter: 'email' },
      password: { filter: 'length', length: 7 },
    },
    onSubmit: () => {
      navigate('/dashboard');
    },
  });

  return (
    <div>
      <form
        onSubmit={ form.handleSubmit }
      >
        <BsDiscord size={ 40 } />
        <h1>Login</h1>
        <input
          name="email"
          type="text"
          value={ form.values.email }
          onChange={ form.handleChange }
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          value={ form.values.password }
          onChange={ form.handleChange }
          placeholder="Password"
        />
        <button
          disabled={ !form.validate }
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
