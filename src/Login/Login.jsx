import "./login.css";
import logo_dark from "../assets/img/logo-dark.svg";
import item_0 from "../assets/img/item-0.png";
export const Login = () => {
  return (
    <div className="login">

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
                <h2>Uptime Monitoring</h2>
                <p>
                    Uptime monitoring tools track and monitor online 
                    resources, minimizing downtime and maximizing availability 
                    for optimal user experience. They ensure business continuity 
                    by promptly alerting to issues and enabling proactive 
                    problem resolution.
                </p>
                <button>Try Demo</button>
            </div>
            <h2>Fraud Protection</h2>
            <h2>Digital Risk Protection</h2>
            <h2>Threat Intelligence</h2>
            <div className="login-demo">
                <img src={item_0} alt="product demo" />
            </div>
        </div>
    </div>
  );
};
