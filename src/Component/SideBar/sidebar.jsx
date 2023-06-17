import React, { useState } from 'react';
import "./sidebar.css";
import logo_light from "../../assets/img/logo-light.svg";


const SideBar = () => {
    const [activeFeature, setActiveFeature] = useState(null);

    const handleFeatureClick = (index) => {
        setActiveFeature(index);
    };

    return(
        <div className="sidebar">
            {/* 1. logo */}
            <div className="sidebar-logo">
                <img src={ logo_light } alt="logo" />
            </div>

            {/* 2.feature */}
            <div className="sidebar-feature">

                <div 
                    className={`feature ${activeFeature === 0 ? 'active' : ''}`}
                    onClick={() => handleFeatureClick(0)}
                >
                    <i class="fa fa-house"></i>
                    <p>Dashboard</p>
                </div>

                <div
                    className={`feature ${activeFeature === 1 ? 'active' : ''}`}
                    onClick={() => handleFeatureClick(1)}
                >
                    <i class="fa fa-database"></i>
                    <p>Assets</p>
                </div>

                <div
                    className={`feature ${activeFeature === 2 ? 'active' : ''}`}
                    onClick={() => handleFeatureClick(2)}
                >
                    <i class="fa fa-comment"></i>
                    <p>Ticket</p>
                </div>

                <div
                    className={`feature ${activeFeature === 3 ? 'active' : ''}`}
                    onClick={() => handleFeatureClick(3)}
                >
                    <i class="fa fa-file-pen"></i>
                    <p>Reports</p>
                </div>

                <div
                    className={`feature ${activeFeature === 4 ? 'active' : ''}`}
                    onClick={() => handleFeatureClick(4)}
                >
                    <i class="fa fa-newspaper"></i>
                    <p>News</p>
                </div>

                <div
                    className={`feature ${activeFeature === 5 ? 'active' : ''}`}
                    onClick={() => handleFeatureClick(5)}
                >
                    <i class="fa fa-gear"></i>
                    <p>Settings</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar;