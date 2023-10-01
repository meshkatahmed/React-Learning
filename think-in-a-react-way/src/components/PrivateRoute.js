import useAuth from '../hooks/useAuth';
// import {Route,Redirect,} from 'react-router-dom';
import {Route,Navigate} from 'react-router-dom';

export default function PrivateRoute({children}) {
    const auth = useAuth();    

    return auth ? children : <Navigate to='/login' />;
}