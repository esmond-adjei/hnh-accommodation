import React, {useState} from 'react';
import {useLoginState} from '../services/states'

const Login = () => {
    
  const [loginResponse, setLoginResponse] = useState(null);
  const { username, setUsername, password, setPassword, handleLogin } = useLoginState();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const response = handleLogin();
    setLoginResponse(response);
    console.log("Login response in component:", response);
  };


  return (
    <div>
      {loginResponse && (
        <div className='devView'>
          <h2>Response:</h2>
          <pre>{JSON.stringify(loginResponse, null, 2)}</pre>
        </div>
      )}
      <form onSubmit={handleSubmit} className='devForm'>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
