import React from 'react';
import AuthForm from "../components/authForm";


const Auth = (formType) => {

  return (
    <div className="main-content">
      <AuthForm formType={formType} />
    </div>
  )
};

export default Auth;