import React, { useState } from 'react';
import "./header.css";

const Header = () => {
    return(
        <div className="header">
            <div className="header-content">
                <div className="header-log">
                    <p>Last update: </p>
                </div>

                <div className="header-action">
                    <div className="header-noti">
                        <i class="fa-regular fa-bell"></i>
                    </div>

                    <div className="header-noti">
                        <i class="fa-regular fa-moon"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;