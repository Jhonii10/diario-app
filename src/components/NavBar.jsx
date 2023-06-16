import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const NavBar = () => {

   const {user, logout}=useAuth()
   const navigate = useNavigate()

   const handleLogout = async()=>{
    await logout(user)
    navigate('/login')
   }


    return (
        <div className='bg-white '>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-16 flex  items-center justify-between ">
                 <h2 className='text-white'>Diario de notas</h2>
                 <button
                  onClick={handleLogout}
                  className='bg-blue-500 hover:bg-blue-600
                  text-white font-bold py-2 px-4 rounded
                  focus:outline-none focus:shadow-outline text-sm'
                  >logout
                 </button>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
