import React from 'react';
import { Routes , Route, Navigate} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { ProtectedRoute } from './pages/ProtectedRoute';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className="App">
    <AuthProvider>
      <Routes>
        <Route  path='/nomina' element={
        <ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
         <Route path='/*' element={<Navigate to='/login' replace/>}/>
      </Routes>
    </AuthProvider>
    </div>
  );
}

export default App;
