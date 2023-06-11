import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Alert from '../components/Alert';


const Register = () => {

    const navigate = useNavigate();
    const [error, setError] = useState();

    const [user, setUser] = useState({
        email:'',
        username:'',
        password:'',
        password2:'',
    });

    const {signUp} = useAuth()

    const handleChange = ({target:{name, value}})=>{
        setUser({...user, [name]:value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        setError('')
        try {
            if (user.password.trim() !== user.password2.trim()) {
                setError('las contraseñas no coinciden')
            }else{
                await signUp(user.username,user.email,user.password)
                navigate('/')
            }
           
        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                setError('Email already in use')
            }
            else{
                setError(error.message)
            }
            
        }


        
    }



    return (
        <div className='w-full max-w-xs m-auto grid place-content-center h-screen '>
        <div className='mb-2'>
        {
            
            error && <Alert  massage={error}/>
        }</div>
        
            <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                
               <div className='mb-4'>
                <label htmlFor='email'>Name</label>
                <input 
                 type='text'
                 name='username'
                 placeholder='User Name'
                 className='shadow appearance-none border rounded
                 w-full py-2 px-3 text-grey-700 leading-tight
                 focus:outline-none focus:shadow.outline'
                 onChange={handleChange}
                 autoComplete='off'
                 />
                 </div>


                <div className='mb-4'>
                <label htmlFor='email'>Email</label>
                <input 
                 type='text'
                 name='email'
                 placeholder='example@gmail.com'
                 className='shadow appearance-none border rounded
                 w-full py-2 px-3 text-grey-700 leading-tight
                 focus:outline-none focus:shadow.outline'
                 onChange={handleChange}
                 autoComplete='off'
                 />
                 </div>

                 <div className='mb-4'>
                <label htmlFor='password'>Password</label>
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

                 <div className='mb-4'>
                <label htmlFor='password'>Password Confirmation</label>
                <input 
                 type='password'
                 name='password2'
                 id='password2'
                 placeholder='******'
                 className='shadow appearance-none border rounded
                 w-full py-2 px-3 text-grey-700 leading-tight
                 focus:outline-none focus:shadow.outline'
                 onChange={handleChange}
                 />
                 </div>

                 <button className='bg-blue-500 hover:bg-blue-600
                 text-white font-bold py-2 px-4 rounded
                 focus:outline-none focus:shadow-outline text-sm'>register</button>

            </form>
            <span className='my-4 text-sm flex justify-between px-3'>You already have an account<Link to='/login'>login</Link></span>
        </div>
    );
}

export default Register;
