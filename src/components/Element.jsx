import React from "react";
import { useAuth } from "../context/AuthContext";
//import { useDispatch } from "react-redux";
//import { borrarRegistro } from "../actions/nomina";

const Element = ({ nominas }) => {
  const {deleteNomina} = useAuth()
  const { fecha, pago, id } = nominas;

  const handleDelete = () => {
     deleteNomina(id)
  };

  return (
    <>
      <td className="border px-4 py-2">{fecha}</td>
      <td className=" border px-4 py-2 whitespace-nowrap px-4 py-2 font-medium text-gray-900"> {pago}</td>
      <td className=" border px-4 py-2 whitespace-nowrap px-4 py-2"> 
        <button onClick={handleDelete} className="bg-red-600 hover:red-700 text-white font-bold p-3 px-4 rounded-lg">
        <span className="material-symbols-outlined">
delete_forever
</span>
        </button>
      </td>
    </>
  );
};

export default Element;