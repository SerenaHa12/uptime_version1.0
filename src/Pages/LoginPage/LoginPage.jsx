import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo_dark from "../../assets/img/logo-dark.svg";
import item_0 from "../../assets/img/item-0.png";
import "./loginpage.css";

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Kiểm tra thông tin đăng nhập
        if (email === 'workspace@gmail.com' && password === '123') {
            // Đăng nhập thành công, điều hướng đến trang chủ
            navigate('/home');
        } else {
            // Xử lý lỗi đăng nhập không thành công (vd: hiển thị thông báo lỗi)
            console.log('Đăng nhập không thành công');
        }
    };

  return (
    <div className="login">

        {/* Login Intro */}
        <div className="login-intro">
            <a href="#"><img src={logo_dark} alt="logo" /></a>
            <h1>SMART EASM</h1>
            <p>
                SMART EASM - a comprehensive solution to proactively 
                protect your online presence. Identify vulnerabilities, 
                receive actionable insights, and ensure continuous 
                monitoring for enhanced security. Safeguard your 
                critical assets with confidence.
            </p>
            <div className="logo-tool">
                <h2>Monitoring</h2>
                <p>
                    Uptime monitoring tools track and monitor online 
                    resources, minimizing downtime and maximizing availability 
                    for optimal user experience. They ensure business continuity 
                    by promptly alerting to issues and enabling proactive 
                    problem resolution...
                </p>
                <button>Try Demo</button>
            </div>
            <h2 className="login-feature">Vulnerabilities</h2>
            <h2 className="login-feature">Digital Risk Protection</h2>
            <h2 className="login-feature">Threat Intelligence</h2>
            <div className="login-demo">
                <img src={item_0} alt="product demo" className="animate-img"/>
            </div>
        </div>

        {/* Login Form */}
        <div className="login-form">
            <form>
                <h1>SIGN IN</h1>
                <p className="sub-title">Please sign in using your organization SSO credentials</p>
                <div className="form-input">
                    <div className="input-item">
                        <input 
                            type="email" 
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <p>Enter your email organization</p>
                    </div>
                    <div className="input-item">
                        <input 
                            type="password" 
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <p>Enter your password</p>
                    </div>
                </div>
                <p><a href="#">Forgot Password?</a></p>
                <button type="button" onClick={handleSignIn}>Sign In</button>
            </form>
            <div className="login-license">
                <p>+84 373506620 . <span><a href="#">workspace@gmail.com</a></span></p>
                <p>@ 2022 - 2023 Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
    </div>
  );
};

export default LoginPage;