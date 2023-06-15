import './login.css';
export const Login = () => {
    return (
        <div className='login'>
            <div className='login-intro'>
                <div className='login-logo'></div>
                    <h1>SMART EASM</h1>
                    <p>
                        SMART EASM - a comprehensive solution to proactively protect your online presence. 
                        Identify vulnerabilities, receive actionable insights, and ensure continuous monitoring 
                        for enhanced security. Safeguard your critical assets with confidence.
                    </p>
                    <h2 className='logo-title'>Threat Intelligence</h2>
                     <div className='logo-tool'>
                        <h2>Uptime Monitoring</h2>
                        <p>
                        Uptime monitoring tools track and monitor online resources, minimizing downtime and 
                        maximizing availability for optimal user experience. They ensure business continuity 
                        by promptly alerting to issues and enabling proactive problem resolution.
                        </p>
                        <button>Try Demo</button>
                    </div>
                    <h2>Fraud Protection</h2>
                    <h2>Digital Risk Protection</h2>
                </div>
            <div className='login-form'>
                <form>
                    <h1>SIGN IN</h1>
                    <p>Please sign in using your organization SSO credentials</p>
                    <div className='login-email'>
                    <input type="email" placeholder='Email'></input>
                    <p>Enter your email organization</p>
                    </div>
                    <div className='login-password'>
                    <input type="password" placeholder='Password'></input>
                    <p>Enter your password</p>
                    </div>
                    <p><a href="#">Forgot your password?</a></p>
                    <button>Sign in</button>
                </form>
                <div className='login-lisence'>
                    <p>+84 373506620 . <span><a href='#'>workspace@gmail.com</a></span></p>
                    <p>@ 2022 - 2023 Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
      </div>
    )
}