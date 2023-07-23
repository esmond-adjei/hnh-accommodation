import React from 'react';
import '../styles/browse.css';

import Header from './Header';
import SideNav from './SideNav';
import PreviewCard from './Card';

const Browse = () => {
  return (
    <>
      <Header />
      <main>
        <SideNav />
        <div className="main-content">
          <div className="hostel-previews">
            {/* hostel Preview Cards  */}
            <PreviewCard
              imageSrc={'https://i.pinimg.com/originals/c2/d6/8b/c2d68ba7103b2e8882829812333e8e6f.jpg'}
              hostelName={'esmond Hostel'}
              hostelLocation={'home'}
              availableRooms={'50'}
              rating={3.4}
              description={'Nice place to live'}
              managerLink={'https://www.example.com'}
            />
            <PreviewCard
              imageSrc={'https://i.pinimg.com/originals/c2/d6/8b/c2d68ba7103b2e8882829812333e8e6f.jpg'}
              hostelName={'esmond Hostel'}
              hostelLocation={'home'}
              availableRooms={'50'}
              rating={3.4}
              description={'Nice place to live'}
              managerLink={'https://www.example.com'}
            />
            <PreviewCard
              imageSrc={'https://i.pinimg.com/originals/c2/d6/8b/c2d68ba7103b2e8882829812333e8e6f.jpg'}
              hostelName={'esmond Hostel'}
              hostelLocation={'home'}
              availableRooms={'50'}
              rating={3.4}
              description={'Nice place to live'}
              managerLink={'https://www.example.com'}
            />
            <PreviewCard
              imageSrc={'https://i.pinimg.com/originals/c2/d6/8b/c2d68ba7103b2e8882829812333e8e6f.jpg'}
              hostelName={'esmond Hostel'}
              hostelLocation={'home'}
              availableRooms={'50'}
              rating={3.4}
              description={'Nice place to live'}
              managerLink={'https://www.example.com'}
            />
            <PreviewCard
              imageSrc={'https://i.pinimg.com/originals/c2/d6/8b/c2d68ba7103b2e8882829812333e8e6f.jpg'}
              hostelName={'esmond Hostel'}
              hostelLocation={'home'}
              availableRooms={'50'}
              rating={3.4}
              description={'Nice place to live'}
              managerLink={'https://www.example.com'}
            />
            {/* More hostel Preview Cards */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Browse;
