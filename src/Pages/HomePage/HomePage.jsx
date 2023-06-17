import React from 'react';
import './homepage.css';
import SideBar from '../../Component/SideBar/SideBar';
import Header from '../../Component/Header/Header';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Sidebar */}
      <SideBar />

      {/* Header */}
      <Header />
      
      {/* Nội dung chính của trang */}
      <div className="main-content">
        
      </div>
    </div>
  );
};

export default HomePage;

