  import { createUserWithEmailAndPassword,
          GoogleAuthProvider,
          onAuthStateChanged,
          sendPasswordResetEmail,
          signInWithEmailAndPassword,
          signInWithPopup,
          signOut, 
          updateProfile} from "firebase/auth";
  import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
  import { createContext, useContext, useEffect, useState } from "react";
  import {auth} from '../firebase/firebase'
  import { db } from "../firebase/firebase";


  export const authContext =createContext();


  export const useAuth = () =>{
      const context = useContext(authContext);
      if (!context) {
          throw new console.error('there is not provider');
      }
      return context
  }

  export const AuthProvider = ({children})=>{

      const [user, setUser] = useState({});
      const [loading, setLoading] = useState(true);
      

      const signUp = (name,email, password) => {
          return new Promise((resolve, reject) => {
            createUserWithEmailAndPassword(auth,email, password)
              .then((userCredential) => {
                // Operación de registro exitosa
                resolve(userCredential.user);
                updateProfile(userCredential.user,{displayName:name})
                .then(()=>{
                  resolve(userCredential.user)
                })
              }) 
              .catch((error) => {
                // Error en la operación de registro
                reject(error);
              });
          });
        };


        const login = (email, password) => {
          return new Promise((resolve, reject) => {
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Operación de registro exitosa
                resolve(userCredential.user);
              })
              .catch((error) => {
                // Error en la operación de registro
                reject(error);
              });
          });
        };


        const logout = () => {
          signOut(auth)
        }

        const loginWithGoogle = () =>{
          const googleAuthProvider = new GoogleAuthProvider()
          signInWithPopup(auth,googleAuthProvider)
          
        }

        const resetPassword = (email)=>{
          sendPasswordResetEmail(auth,email)
        }


        useEffect(() => {
          onAuthStateChanged(auth,currentUser =>{
              setUser(currentUser);
              setLoading(false);
          })
        }, []);


  /*--------------------------------------------------------------------------------------------------------------*/

  const saveNomina = (pago)=>{
    const data = {
      fecha: new Date().toLocaleDateString(),
      pago
    }
    addDoc(collection(db,`${user.uid}/nominas/nomina`),data)
  }

  const [nominas, setnominas] = useState([]); 

  const getNomina=async()=>{
    const querySnapshot = await getDocs(collection(db, `${user.uid}/nominas/nomina`));
    const nominasData = [];
    querySnapshot.forEach(doc =>{
      const data = doc.data();
      const docId = doc.id; // Obtenemos el docId del documento
      nominasData.push({ docId, ...data }); 
    })
    setnominas(nominasData)
  }

  const deleteNomina = async (docId) => {
    await deleteDoc(doc(db, `${user.uid}/nominas/nomina/${docId}`));
    // Actualizar el estado de nominas eliminando el documento eliminado
    console.log(docId)
    setnominas((prevNominas) =>
      prevNominas.filter((nomina) => nomina.docId !== docId)
    );
  };
      
      return(
          <authContext.Provider value={{signUp,login,user,logout,loading,loginWithGoogle,resetPassword,saveNomina,getNomina,nominas,deleteNomina}}>
              {children}
          </authContext.Provider>
      )
  }