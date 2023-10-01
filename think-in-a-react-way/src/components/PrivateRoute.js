import useAuth from '../hooks/useAuth';
import {Route,Redirect} from 'react-router-dom';

export default function PrivateRoute({children,...rest}) {
    const auth = useAuth();    

    return <Route {...rest}>{auth?children:<Redirect to='/login'/>}</Route>;
}