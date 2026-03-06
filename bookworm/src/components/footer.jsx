import React, { useContext } from 'react';
import "../App.css";
import { AuthContext } from '../context/AuthContext';

const Footer = () => {
    const { isAuthenticated, loading } = useContext(AuthContext);

    if (loading) return null; // don't render anything while verifying

    return (
        <>
            {!isAuthenticated && (
                <div className='footer'>
                    <div className='footer-logo'>
                        <h1>Logo</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Voluptate iusto saepe consectetur, illum laboriosam quo at minus ad ipsa voluptatem ipsum, 
                            expedita culpa? Eius voluptatem rerum facere, quidem ipsam iste?
                        </p>
                    </div>
                    <div className='footer-link'>
                        <ul>
                            <li>About</li>
                            <li>Community</li>
                            <li>Careers</li>
                            <li>Disclaimer</li>
                        </ul>
                    </div>
                    <div>
                        <button>Get Demo</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Footer;
