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

        {/* 1. Title */}
        <div className="home-title">
          <div className="title-description">
            <div className="title-status"></div>

            <div className="title-details">
              <h2>Glasswallets.app</h2>
              <p>http://glasswallets.app</p>
            </div>

            <div className="title-action">
              <label class="switch">
                <input type="checkbox"/>
                <span class="slider"></span>
              </label>
            </div>
          </div>

          <div className="title-feature">
            <button class="title-btn_request">
              <span>Request</span>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            <button class="title-btn_config">
              <span>Config</span>
              <i class="fa-solid fa-pen"></i>
            </button>
          </div>
        </div>

        {/* 2. List */}

        {/* 3. Chart Status */}

        {/* 4. Line Chart */}

        {/* 5. Table */}
      </div>
    </div>
  );
};

export default HomePage;

