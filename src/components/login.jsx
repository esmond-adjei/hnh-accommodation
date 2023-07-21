import React, {useState} from 'react';
import {useLoginState} from '../services/states'

const Login = () => {
    
  const [loginResponse, setLoginResponse] = useState(null);
  const { username, setUsername, password, setPassword, handleLogin } = useLoginState();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const response = await handleLogin();
    setLoginResponse(response);
  };


  return (
    <div>
      <h2>Login</h2>
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
