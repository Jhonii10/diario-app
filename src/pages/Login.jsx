import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Alert from '../components/Alert';


const Login = () => {

    const navigate = useNavigate();
    const [error, setError] = useState();

    const [user, setUser] = useState({
        email:'',
        password:'',
    });

    const {login, loginWithGoogle, resetPassword} = useAuth()

    const handleChange = ({target:{name, value}})=>{
        setUser({...user, [name]:value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        setError('')
        try {
           await login(user.email,user.password)
           navigate('/nomina')
           
        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                setError('Email already in use')
            }
            else{
                setError(error.message)
            }
            
        }


        
    }


    const handleLoginGoogle = async() =>{
        await loginWithGoogle()
        navigate('/')
    }

    const handleResetPassword = async()=>{
        if (!user.email) {
          return setError('Please enter your email')
        }

        try {
            await resetPassword(user.email)
            setError('te enviamos un correo para que puedas restablezar tu contraseña')
        } catch (error) {
            setError(error.massage)
        }
        
    }



    return (
        <div className='w-full max-w-xs m-auto grid place-content-center h-screen '>
        <div className='mb-2'>
        {
            
            error && <Alert massage={error}/>
        }</div>
        
            <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                
                <div className='mb-4'>
                <label htmlFor='email' className='block text-grey-700 text-sm font-fold mb-2 '>Email</label>
                <input 
                 type='text'
                 name='email'
                 placeholder='example@gmail.com'
                 className='shadow appearance-none border rounded
                 w-full py-2 px-3 text-grey-700 leading-tight
                 focus:outline-none focus:shadow.outline' 
                 onChange={handleChange}
                 />
                 </div>

                <div className='mb-4'>
                <label htmlFor='password' className='block text-grey-700 text-sm font-fold mb-2 '>Password</label>
                <input 
                 type='password'
                 name='password'
                 id='password'
                 placeholder='******'
                 className='shadow appearance-none border rounded
                 w-full py-2 px-3 text-grey-700 leading-tight
                 focus:outline-none focus:shadow.outline'
                 onChange={handleChange}
                 />
                 </div>

                 <div className='flex items-center justify-between'>
                 <button 
                 className='bg-blue-500 hover:bg-blue-600
                 text-white font-bold py-2 px-4 rounded
                 focus:outline-none focus:shadow-outline text-sm'>login</button>

                 

                 <a href='#!' className='inline-block align.baseline font-bold
                 text-sm text-blue-500 hover:text-blue-800'
                 onClick={handleResetPassword}
                 >Forgot password</a>

                 </div>

                 

            </form>

            <span className='my-4 text-sm flex justify-between px-3'>Don't have an Account<Link to='/register'>Register</Link></span>

            <button 
             onClick={handleLoginGoogle}
             className='bg-slate-50 hover:bg-slate-200 text-black
             shadow-md round border-2 border-gray-300 py-2 px-4 w-full'
             >Google login</button>
        </div>
    );
}

export default Login;
