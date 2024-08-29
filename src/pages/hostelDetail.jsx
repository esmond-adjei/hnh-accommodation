// src/pages/HostelDetail.js
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { StarIcon, HomeIcon, UserIcon } from 'lucide-react';
import { fetchHostelDetail, clearSelectedHostel } from '../redux/hostelSlice';
import BackButton from '../components/backButton';

const HostelDetail = () => {
  const { uuid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedHostel, isLoading, error } = useSelector((state) => state.hostelListing);
  
  useEffect(() => {
    dispatch(fetchHostelDetail(uuid));
    return () => {
      dispatch(clearSelectedHostel());
    };
  }, [dispatch, uuid]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <StarIcon
        key={index}
        className={`h-5 w-5 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-grey'}`}
      />
    ));
  };

  if (isLoading) {
    return <h1 className="preloader-context">😴 Loading Hostel Details...</h1>;
  }

  if (error) {
    return <h1 className="preloader-context">{error}</h1>;
  }

  if (!selectedHostel) {
    return (
      <div className="text-center mt-8">
        <h1 className="text-2xl mb-4 text-text-color">📭 Hostel Not Found</h1>
        <button 
          onClick={() => navigate('/hostels')}
          className="bg-secondary-color text-whitish px-4 py-2 hover:bg-secondary-color-dark transition duration-300"
        >
          Back to Hostel Listings
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <BackButton to="/hostels" />
      <div className="bg-whitish overflow-hidden">
        <img
          src={selectedHostel.hostel_img_url}
          alt={selectedHostel.name}
          className="w-full h-64 object-cover object-center"
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-primary-color mb-2">{selectedHostel.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {renderStars(selectedHostel.rating)}
            </div>
            <span className="text-text-color-light">({selectedHostel.rating})</span>
          </div>
          <p className="flex items-center text-text-color mb-4">
            <HomeIcon className="h-5 w-5 mr-2 text-secondary-color" />
            <span className="font-semibold mr-2">Location:</span> {selectedHostel.location}
          </p>
          <p className="flex items-center text-text-color mb-4">
            <UserIcon className="h-5 w-5 mr-2 text-secondary-color" />
            <span className="font-semibold mr-2">Manager:</span> {selectedHostel.manager_username}
          </p>
          <p className="text-text-color mb-4">
            <span className="font-semibold">Available Rooms:</span> {selectedHostel.available_rooms}
          </p>
          {selectedHostel.description && (
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-primary-color mb-2">Description</h2>
              <p className="text-text-color">{selectedHostel.description}</p>
            </div>
          )}
          <div className="mt-6 flex space-x-4">
            <button className="bg-secondary-color text-whitish px-4 py-2 hover:bg-secondary-color-dark transition duration-300">
              Contact Manager
            </button>
            <button className="bg-primary-color text-whitish px-4 py-2 hover:bg-primary-color-dark transition duration-300">
              View Rooms
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelDetail;
