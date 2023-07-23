import React from 'react';
import './App.css';
import Register from './components/register';
import Login from './components/login';
import HostelCreateForm from './components/createHostel';
import HostelListings from './components/hostelListings';


const App = () => {

  return (
    <div>
      <h1>Hostel Accommodation App</h1>
      <Register/>
      <Login/>
      <hr/>
      <HostelListings />
      <hr/>
      <HostelCreateForm />
    </div>
  );
};

export default App;



// import hnhLogo from './images/hnh-gradient-logo.png';
// import './App.css';
// import API from './components/hnh-api'
// import Auth from './components/auth';
// import React, { useState } from 'react';
// import axios from 'axios';





// function App() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [responseMessage, setResponseMessage] = useState('');

//   const handleFormSubmit = () => {
//     const formData = {
//       username: username,
//       password: password
//     };

//     axios.post('http://localhost:8000/api/login/', formData)
//       .then(response => {
//         // Update the response message state with the received data
//         setResponseMessage(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={hnhLogo} className="App-logo hnh-logo" alt="logo"/>
//         <p>
//           A Student Accommodation Webapp. <code>comming soon...</code>
//         </p>
//         <a
//           className="App-link"
//           href="https://github.com/esmond-adjei/hnh-accommodation"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           contribute to project
//         </a>
//       </header>
//         <div style={
//           {
//           'width': '720px',
//           'minHeight': '200px',
//           'backgroundColor': '#9caccc',
//           'margin': 'auto',
//           'marginTop': '20px',
//           'marginBottom': '20px',
//           'borderRadius': '12px',
//           'padding': '20px'
//           }
//           }>
//             <API
//               responseMessage={responseMessage}
//             />
//         </div>
//         <div style={
//           {
//           'width': '720px',
//           'minHeight': '300px',
//           'border': '2px solid #f3f0ff',
//           'margin': 'auto',
//           'marginTop': '20px',
//           'marginBottom': '20px',
//           'borderRadius': '12px',
//           'padding': '20px'
//           }
//           }>
//             <Auth
//               setUsername={setUsername}
//               setPassword={setPassword}
//               handleFormSubmit={handleFormSubmit}
//               username={username}
//               password={password}
//             />
//         </div>
//     </div>
//   );
// }

// export default App;
