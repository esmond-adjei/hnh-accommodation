import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';

const BackButton = ({ to, positionTop='32', positionLeft='8' }) => {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center fixed top-${positionTop} z-50 left-${positionLeft} md:left-${positionLeft} bg-white h-10 w-10 border border-gray-200 rounded-full hover:bg-gray-200`}
    >
      <ArrowLeftIcon className="h-5 w-5" />
      <span className="sr-only">Back</span>
    </Link>
  );
};

export default BackButton;
