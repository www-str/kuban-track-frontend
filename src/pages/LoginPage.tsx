import { useState } from 'react'
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useStore } from '../store/useStore';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const { auth } = useStore();
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (login !== '' || password !== '') {
            await auth({ login, password });
            navigate('/profile');
            location.reload();
        }
    }

    return (
        <div className='w-full h-screen flex flex-col items-center justify-center gap-6'>
            <h3 className='font-bold text-4xl text-dark'>Login</h3>
            <Input type='text' value={login} setValue={setLogin} placeholder='Enter name' />
            <Input type='password' value={password} setValue={setPassword} placeholder='Enter password' />
            <Button onclick={handleLogin}>Sign in</Button>

            {location.href.includes('reg=true') && (
                <p className='text-green text-center border border-blue50 p-4 rounded-2xl'>You have successfully registered, <br /> now you can log in</p>
            )}
            
            <div className="text-dark text-lg">
                Don't have an account?{" "}
                <Link to={'/register'} className='text-blue underline'>Sign up</Link>
            </div>
        </div>
    )
}

export default LoginPage