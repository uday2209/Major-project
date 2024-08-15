import React from 'react';
import './Footer.css';        
        function Footer() {
            return (
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h4>About Us</h4>
                                <p>We offer the best pizzas in town with fresh ingredients and a passion for quality. Join us for a delicious experience.</p>
                            </div>
                            <div className="col-md-4">
                                <h4>Contact Us</h4>
                                <p><i className="fa fa-map-marker"></i> Shop-22 Food Street, Dinar City, DC 56568</p>
                                <p><i className="fa fa-phone"></i> +1 589 754 126</p>
                                <p><i className="fa fa-envelope"></i> info@pizzapalace.com</p>
                            </div>
                            <div className="col-md-4">
                                <h4>Follow Us</h4>
                                <div className="social-icons">
                                <a href="#" className="text-white"><i className="fa fa-facebook"></i><img src="https://cdn-icons-png.freepik.com/256/5968/5968764.png?semt=ais_hybrid" alt='/' height="20" width="20" /> Facebook</a>
                            <a href="#" className="text-white"><i className="fa fa-twitter"></i><img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/X_icon_2.svg" alt='/' height="20" width="20" /> Twitter</a>
                            <a href="#" className="text-white"><i className="fa fa-instagram"></i><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" alt='/' height="20" width="20" /> Instagram</a>
                            <a href="#" className="text-white"><i className="fa fa-youtube"></i><img src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png" alt='/' height="20" width="20" /> YouTube</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center mt-3">
                                <p>&copy; 2024 Pizza Palace. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            );
        }
        
        export default Footer;