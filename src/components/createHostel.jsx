// HostelCreateForm.js

import React from 'react';
import { useHostelCreateState } from '../services/states';

const HostelCreateForm = () => {

  const {
    hostelFormData,
    setHostelFormData,
    handleCreateFormSubmit
  } = useHostelCreateState();
  
  const handleSubmit = (e) => {
      e.preventDefault();
      handleCreateFormSubmit();
  };

  return (
    <div>
      <h2>Create Hostel</h2>
      <form onSubmit={handleSubmit}  className='devForm'>
        <label htmlFor="name">Hostel Name</label>
        <input type='text' name='name' id='name' 
            value={hostelFormData.name} 
            onChange={(e) => setHostelFormData({ ...hostelFormData, name: e.target.value })}
            />

        <label htmlFor="location">Hostel Location</label>
        <input type='text' name='location' id='location' 
            value={hostelFormData.location} 
            onChange={(e) => setHostelFormData({ ...hostelFormData, location: e.target.value })}
            />

        <label htmlFor="descrioption">Hostel Description</label>
        <textarea type='text' name='description' id='description' 
            value={hostelFormData.description} 
            onChange={(e) => setHostelFormData({ ...hostelFormData, description: e.target.value })}
        ></textarea>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default HostelCreateForm;
