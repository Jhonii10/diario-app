import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
// import { useDispatch } from "react-redux";

const FormAdd = () => {
  const [viewForm, setViewForm] = useState(false);
  const {saveNomina,getNomina}=useAuth();

  const [cantidadPago, setCantidadPago] = useState({
    precioHora: 0,
    horas: 0,
  });

  const { precioHora, horas } = cantidadPago;

  const handleAdd = () => {
    setViewForm(!viewForm);
  };

  const handleChange = (e) => {
    setCantidadPago({
      ...cantidadPago,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const cantidadFinal = horas * precioHora;
    saveNomina(cantidadFinal)
    getNomina();
    setCantidadPago({
      precioHora: 0,
      horas: 0,
    });
  };

  
    

  
  return (
    <div className="mb-4 max-w-7xl mx-auto" >
      <button onClick={handleAdd}   className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3'>
        {!viewForm ? "Agregar" : "Cerrar"}
      </button>
      {viewForm && (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-xs">
          <div className="mb-4" >
            <label htmlFor="icon_prefix1" className="block text-gray-700 text-sm font-bold mb-2">Pago Por Hora: </label>
            <input
              className="shadow appareance-none border rounded w-full py-2 px-3 text-gray-700 
              leading-tight focus:outline-none focus:shadow-outline"
              id="icon_prefix1"
              type="text"
              value={precioHora}
              onChange={handleChange}
              name="precioHora"
            />
          </div>

          <div className="input-field col s12 mb-4">
            <label htmlFor="icon_prefix2" className="block text-gray-700 text-sm font-bold mb-2">Horas Laboradas: </label>
            <input
              className="shadow appareance-none border rounded w-full py-2 px-3 text-gray-700 
              leading-tight focus:outline-none focus:shadow-outline"
              id="icon_prefix2"
              type="text"
              value={horas}
              onChange={handleChange}
              name="horas"
            />
          </div>
          <button onClick={handleSave} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>
            Calcular y Guardar
          </button>
        </div>
      )}
    </div>
  );
};

export default FormAdd;