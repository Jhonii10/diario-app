import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export const ProtectedRoute = ({children}) => {
    const {user,loading} = useAuth()

    if (loading) {
        <div className="spinner-container"><div className="spinner"></div></div>
    }

    if (!user) {
        return <Navigate to='/login'/>
    }

    return <>{children}</>

}