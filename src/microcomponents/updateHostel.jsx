import React from 'react';
import { useHostelUpdateState } from '../services/states';

const HostelUpdateForm = ({ hostelId }) => {
  const { 
    updateData, 
    setUpdateData, 
    handleUpdateFormSubmit 
  } = useHostelUpdateState(hostelId);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateFormSubmit(); // Call the handleUpdateFormSubmit function from the states hook
  };

  return (
    <div>
      <h2>Update Hostel</h2>
      <form onSubmit={handleSubmit} className='devForm'>
          <label htmlFor="name">Hostel Name:</label>
          <input type="text" id="name" value={updateData.name}
                onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
                />
          <label htmlFor="location">Hostel Location:</label>
          <input type="text" id="location" value={updateData.location} 
                onChange={(e) => setUpdateData({ ...updateData, location: e.target.value })}
                />
          <label htmlFor="description">Hostel Description:</label>
          <textarea id="description" value={updateData.description} 
                onChange={(e) => setUpdateData({ ...updateData, description: e.target.value })}
                />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default HostelUpdateForm;
