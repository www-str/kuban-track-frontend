import { useState } from 'react'
import { useStore } from '../store/useStore';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { register } = useStore();
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (login !== '' || password !== '') {
      register({ login, password });
      navigate('/login');
    }
  }

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center gap-6'>
      <h3 className='font-bold text-4xl text-dark'>Register</h3>

      <Input type='text' value={login} setValue={setLogin} placeholder='Enter name' />
      <Input type='password' value={password} setValue={setPassword} placeholder='Enter password' />
      <Button onclick={handleRegister}>Sign up</Button>

      <div className="text-dark text-lg">
        Already have an account?{" "}
        <Link to={'/login'} className='text-blue underline'>Sign in</Link>
      </div>
    </div>
  )
}

export default RegisterPage