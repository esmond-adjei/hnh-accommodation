import './authPage.css';

import Histograph from './histograph';
import AuthCard from './authCard';

const AuthPage = () => {
    return (
        <div id='login-page'>
            <div className='left-half flex justify-center items-center' style={{ backgroundImage: "url('/images/people-blue.png')" }}>
                <Histograph />
            </div>
            <div className='right-half flex justify-center items-center'>
                <AuthCard />
            </div>
        </div>
    )
}

export default AuthPage;