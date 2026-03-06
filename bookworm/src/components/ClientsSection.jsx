// src/components/ClientsSection.jsx
import React from "react";
import "../App.css"; // or a separate CSS file if you prefer
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.jpg";
import { FaAccusoft } from "react-icons/fa6";
import { FaAtlassian } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { SiEventstore } from "react-icons/si";
import { RiHotelLine } from "react-icons/ri";
const ClientsSection = () => {
    return (
        <section className="clients-section">
            {/* Top part - Our Clients */}
            <div className="clients-header">
                <h2>Our Clients</h2>
                <p>We have been working with some Fortune 500+ clients</p>
            </div>

            {/* Client logos */}
            <div className="client-logos">
                <img src={logo1} alt="logo1" />
                <img src={logo2} alt="logo2" />
                <img src={logo3} alt="logo3" />
                <img src={logo4} alt="logo4" />
                <img src={logo5} alt="logo5" />
            </div>

            {/* Next section - Community management */}
            <div className="community-section">
                <h2>Manage your entire community in a single system</h2>
                <p>Who is Nextcent suitable for?</p>

                <div className="community-cards">
                    <div className="card  ">
                        <FaAccusoft className="size-20 " />
                        <h3>Membership Organisations</h3>
                        <p>Our membership management software provides full automation of membership renewals and payments.</p>
                    </div>
                    <div className="card">
                        {/* <img src="/icons/building.png" alt="National Associations" /> */}
                        <FaAtlassian className="size-20 " />
                        <h3>National Associations</h3>
                        <p>Our membership management software provides full automation of membership renewals and payments.</p>
                    </div>
                    <div className="card">
                        {/* <img src="/icons/bike.png" alt="Clubs And Groups" /> */}
                        <FaAppStoreIos className="size-20 " />
                        <h3>Clubs And Groups</h3>
                        <p>Our membership management software provides full automation of membership renewals and payments.</p>
                    </div>
                </div>
            </div>

            {/* a simple explanation divs  */}
            <div className="explain">
                <img src={image2} alt="image2"/>
                <div className="inform">
                <h2>The unseen  of spending three years at Pixelgrade</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus assumenda fuga repudiandae voluptates dolor
                    animi aut non quidem cumque quia perspiciatis natus
                    sequi ipsum quis libero facere,architecto repellat
                    culpa.
                </p>
                <button>Explore</button>
                </div>  
            </div>



            {/* creating tracking of users and mid section  */}

            <div className="smallSec">
                <div className="block-head">
                    <h2>Helping a local <span>business reinvent itself</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                </div>

                <div className="blocks">
                    <div className="block1">
                        <IoMdPerson />
                        
                        <div>

                        <h2>  224560</h2> 
                        <p>Members</p>
                        </div>

                    </div>
                    <div className="block1">
                        <RiHotelLine />
                        <div>

                        <h2>46000</h2>
                        <p>Clubs</p>
                        </div>
                    </div>
                    <div className="block1">
                        <SiEventstore />
                        <div>

                        <h2>150000</h2>
                        <p>Events Bookings</p>
                        </div>

                    </div>
                    <div className="block1">
                        <FaWallet />
                        <div>
                        <h2>145000</h2>
                        <p>Payments</p>
                        </div>

                    </div>

                </div>
            </div>



            {/* a simple  2nd explanation divs  */}
            <div className="explain">
                <img src={image3} alt="image2"/>
                <div className="inform">
                <h2>How to design your site footer like we did </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus assumenda fuga repudiandae voluptates dolor
                    animi aut non quidem cumque quia perspiciatis natus
                    sequi ipsum quis libero facere,architecto repellat
                    culpa.
                </p>
                <button>Explore</button>
                </div>  
            </div>
        </section>
    );
};

export default ClientsSection;
