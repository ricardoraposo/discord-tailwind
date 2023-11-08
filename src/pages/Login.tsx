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
    <div
      className="h-screen w-screen bg-gray-800 flex justify-center items-center
      bg-login-bg bg-cover"
    >
      <form
        className="flex flex-col w-1/4 justify-center items-center
        bg-gray-800 p-12 gap-4 rounded-xl drop-shadow-xl"
        onSubmit={ form.handleSubmit }
      >
        <BsDiscord size={ 40 } className="text-gray-300" />
        <h1 className="text-2xl text-gray-300">Login</h1>
        <input
          name="email"
          type="text"
          value={ form.values.email }
          onChange={ form.handleChange }
          placeholder="Email"
          className="bg-gray-800 py-2 px-3 rounded-lg placeholder-gray-300
          border-2 border-blue-500
          placeholder:opacity-60 w-full"
        />
        <input
          name="password"
          type="password"
          value={ form.values.password }
          onChange={ form.handleChange }
          placeholder="Password"
          className="bg-gray-800 py-2 px-3 rounded-lg placeholder-gray-300
          border-2 border-blue-500
          placeholder:opacity-60 w-full"
        />
        <button
          disabled={ !form.validate }
          className="bg-blue-500 py-2 px-3 rounded-lg w-3/4
          disabled:opacity-60"
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;