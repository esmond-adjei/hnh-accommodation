import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { StarIcon, UserIcon, House, TextIcon, MapPinIcon, BedDoubleIcon } from 'lucide-react';
import { fetchHostelDetail, clearSelectedHostel } from '../redux/hostelSlice';
import BackButton from '../components/backButton';
import { fetchHostelRooms } from '../redux/roomSlice';
import { RoomCard, RoomCardv2, ExpandableRoomCard } from '../components/cardRoom';
import GalleryView from '../containers/GalleryView';
import Reviews from '../containers/reveiw';

const HostelDetail = () => {
  const { uuid } = useParams();
  const dispatch = useDispatch();
  const { selectedHostel, isLoading, error } = useSelector((state) => state.hostelListing);
  const { data: rooms } = useSelector((state) => state.roomListing);

  const gallery = rooms.map((room) => room.room_img_url);
  
  useEffect(() => {
    dispatch(fetchHostelDetail(uuid));
    dispatch(fetchHostelRooms(uuid));
    window.scrollTo(0, 0);
    return () => {
      dispatch(clearSelectedHostel());
    };
  }, [dispatch, uuid]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <StarIcon
        key={index}
        className={`h-5 w-5 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-400'}`}
        style={{ fill: index < Math.floor(rating) ? 'currentColor' : 'none', stroke: 'currentColor' }}
      />
    ));
  };
  

  if (isLoading) {
    return <h1 className="text-center text-xl mt-8">😴 Loading Hostel Details...</h1>;
  }

  if (error) {
    return <h1 className="text-center text-xl mt-8">{error}</h1>;
  }

  if (!selectedHostel) {
    return (
      <div className="text-center mt-8">
        <h1 className="text-2xl mb-8 text-text-color">📭 Hostel Not Found</h1>
        <BackButton to="/hostels" />
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back Button */}
      <BackButton to="/hostels" />

      {/* Header Section */}
      <div className="bg-white rounded-lg overflow-hidden mt-2 mb-6">
        <img
          src={selectedHostel.hostel_img_url}
          alt={selectedHostel.name}
          className="w-full h-64 object-cover object-center"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* HOSTEL INFO */}
        <div className="flex-1 bg-white p-6 rounded-lg border border-gray-200">
          {/* Name */}
          <div className='flex gap-4 mb-8'>
            <House size={48} strokeWidth={1} />
            <div>
            <h1 className="text-4xl font-bold ">{selectedHostel.name}</h1>
            {/* Rating */}
            <div className="flex items-center">
              <div className="flex mr-2">
                {renderStars(selectedHostel.rating)}
              </div>
              <span className="text-text-color-light">({selectedHostel.rating})</span>
            </div>
            </div>
          </div>

          <hr />
          
          <p className="text-text-color mb-4 rounded-xl bg-greyish px-2 py-1 text-sm my-4">
            {selectedHostel.available_rooms} rooms available
          </p>
          
          {/* Description */}
          {selectedHostel.description && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold  mb-2 flex items-center">
                <TextIcon className="h-5 w-5 mr-2 "/>
                Description
              </h2>
              <p className="text-text-color">{selectedHostel.description}</p>
            </div>
          )}

          {/* Location */}
          <div className="mb-8">
              <h2 className="text-2xl font-semibold  mb-2 flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2 "/>
                Location
              </h2>
              <p className="flex items-center text-text-color">{selectedHostel.location}</p>
          </div>
        </div>
        {/* MANAGER'S INFO */}
        <div className="sticky top-32 w-full md:w-1/3 bg-white p-6 rounded-lg border border-gray-200"> 
          {/* Manager */}
          <div className="mb-8">
              <h2 className="text-2xl font-semibold  mb-2 flex items-center">
                <UserIcon className="h-5 w-5 mr-2 "/>
                Manager
              </h2>
              <p className="text-text-color">{selectedHostel.manager_username}</p>
          </div>
          
          {/* Contact Manager Button */}
          <button className="bg-secondary-color text-whitish px-4 py-2 hover:bg-secondary-color-dark transition duration-300 rounded-md">
            Contact Manager
          </button>
        </div>
      </div>

      <br />
      {/* ROOM GALLERY */}
      <div className="w-full bg-white p-6 rounded-lg border border-gray-200">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold  mb-2 flex items-center hover:text-primary-color">
            <BedDoubleIcon className="h-5 w-5 mr-2 "/>
            Room Gallery
          </h2>
        </div>

        {rooms.length === 0 ? (
          <h3 className="text-center text-xl">👻 No rooms available.</h3>
        ) : (
          <div className="grid md:grid-cols-2 gap-2">
            {rooms.map((room, index) => (
              <GalleryView key={index} gallery={gallery} >
                <RoomCard key={room.room_id} room={room}/>
              </GalleryView>
            ))}
          </div>
        )}
      </div>

      <br />
      {/* REVIEWS */}
        <Reviews />
    </div>
  );
};

export default HostelDetail;
