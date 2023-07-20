import React from 'react';

const API = ({responseMessage}) => {

  return (
    <div>
      <h2>API output</h2>
      <h2>
      {responseMessage.id}
      </h2>
      <p>
      {responseMessage.username}
      </p>
      <p>
      {responseMessage.email}
      </p>
    </div>
  );
};

export default API;