import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import MobileMenus from '../layout/headers/mobile-menus';
 
// images import 
import logo from "../../public/assets/img/logo/mainlogo-white.png"
import canvus_img_1 from "../../public/assets/img/project/project-inner-4.jpg"
import canvus_img_2 from "../../public/assets/img/project/project-inner-5.jpg";
import canvus_img_3 from "../../public/assets/img/project/project-inner-6.jpg";
import canvus_img_4 from "../../public/assets/img/project/project-inner-7.jpg";

const Offcanvus = ({sidebarOpen, setSidebarOpen}) => {
    return (
        <>
            <div className="tpoffcanvas-area">
                <div className={`tpoffcanvas ${sidebarOpen && "opened"}`}>
                    <div className="tpoffcanvas__close-btn">
                    <button className="close-btn" onClick={() => setSidebarOpen(false)}><i className="fal fa-times"></i></button>
                    </div>
                    <div className="tpoffcanvas__logo text-center">
                    <Link href="/" onClick={() => setSidebarOpen(false)}>
                        <Image src={logo} alt="theme-pure" />
                    </Link>
                    </div>
                    <div className="mobile-menu mean-container">
                        <MobileMenus />
                    </div>
                    {/* <div className="tpoffcanvas__instagram text-center">
                    <div className="tpoffcanvas__instagram-title">
                        <h4>instagram</h4>
                    </div>  
                    <Link href="#"><Image src={canvus_img_1}  alt="theme-pure" /></Link>
                    <Link href="#"><Image src={canvus_img_2}  alt="theme-pure" /></Link>
                    <Link href="#"><Image src={canvus_img_3}  alt="theme-pure" /></Link>
                    <Link href="#"><Image src={canvus_img_4}  alt="theme-pure" /></Link>
                    </div> */}
                    <div className="tpoffcanvas__info text-center">
                    <h4 className="offcanva-title">we are here</h4>
                    <Link href="https://maps.app.goo.gl/p2i4aHosuNqXx5Un6" target="_blank">
                    Ontario Tower - Office no 1801<br />18th Floor - Business Bay <br/> Dubai - United Arab Emirates
                    </Link>
                    </div>
                    <div className="tpoffcanvas__social">
                    <div className="social-icon text-center">
                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                        <Link href="#"><i className="fab fa-facebook-square"></i></Link>
                        <Link href="#"><i className="fab fa-dribbble"></i></Link>
                    </div>
                    </div>
                </div>
            </div>
            <div className={`body-overlay ${sidebarOpen &&  "apply"}`} onClick={() => setSidebarOpen(false)}></div>
        </>
    );
};

export default Offcanvus;