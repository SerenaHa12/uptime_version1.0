import React from 'react';
import './homepage.css';
import SideBar from '../../Component/SideBar/SideBar';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Sidebar */}
      <SideBar />

      {/* Nội dung chính của trang */}
      <div className="main-content">
        
      </div>
    </div>
  );
};

export default HomePage;

