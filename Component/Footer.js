import React from "react";
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import '../Css/FooterStyle.css';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container container-flex">
                    <div className="icons">
                        <a href="https://mail.google.com" className="icon-link">
                            <EmailIcon className="icon" />
                        </a>
                        <a href="https://www.instagram.com/?hl=en" className="icon-link">
                            <InstagramIcon className="icon" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=+250780520520" className="icon-link">
                            <WhatsAppIcon className="icon" />
                        </a>
                        <a href="https://twitter.com/" className="icon-link">
                            <TwitterIcon className="icon" />
                        </a>
                    </div>
                    <div className="line">
                        <hr></hr>
                    </div>
                    <div className="copyright">
                        <p> All rights reserved &copy;</p>
                        <p> 2024 by Fabrice</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
