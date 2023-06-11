import React from 'react';
import Element from '../components/Element';
import FormAdd from '../components/FormsAdd';
import NavBar from '../components/NavBar';
import { useAuth } from '../context/AuthContext';
import Error from '../components/Error';


const Home = () => {


    const {user,loading,nominas,getNomina} = useAuth();


    if (loading) {
        return <div className="spinner-container w-full max-w-xs m-auto grid place-content-center h-screen"><div className="spinner"></div></div>
      }
    
    
     getNomina()

    return (
        <>
        
        <NavBar/>
        <div className='m-6'>
            <h2 className='text-center text-xl sm:text-2xl
                md:text-3xl lg:text-4xl m-4'
                >Bienvenido: {user.displayName || user.email}
            </h2>
            <hr/>
            <FormAdd/>


            <div className="bg-white overflow-x-auto max-w-7xl mx-auto rounded-lg shadow-md" >
            <table className='table-auto w-full' >
          <thead className=''>
            <tr>
              <th   className="px-4 py-3 text-center">Fecha</th>
              <th  className="px-4 py-3 text-centerr">Cantidad</th>
              <th className="px-4 py-3 text-center" data-id='id'>Borrar</th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-200'>
            {nominas.map((elemento) => {
              return (
                <tr
                  className="bg-white border-b text-center"
                  key={elemento.id}
                  data-id='id'
                  
                >
                  <Element nominas={elemento} />
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
        <Error user={user.displayName}/>
        </div> 
        </>
    );
}

export default Home;
