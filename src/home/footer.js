import React, {Component} from 'react';
import './css/footer.css'
import './css/footer-distribution.css'

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br/><br/><br/><br/><br/>
                <footer className="footer-distributed">
                    <div className="footer-left">
                        <h3><span>AASTU</span></h3>
                        
                        <p  className="footer-company-name">AASTU &copy; 2021</p>
                    </div>

                    <div className="footer-center">

                        <div>
                            <i className="fa fa-map-marker"/>
                            <p><span>AASTU , Akaky Kaliti subcity</span> Addis Ababa, Ethiopia</p>
                        </div>

                        <div>
                            <i className="fa fa-phone"/>
                            <p>+25194 546 7825</p>
                        </div>

                        <div>
                            <i className="fa fa-envelope"/>
                            <p><a href="#">info@aastu.edu.et</a></p>
                        </div>

                    </div>

                    <div className="footer-right">

                        <p className="footer-company-about">
                            <span>About the company</span>
                            This conference management system (CMS) provides administrative support to conference
administrators by structuring and partially automating many of the workflows and management
tasks that arise during the preparation of the conference.
                        </p>

                        <div className="footer-icons">

                            <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                            <a href="/"><i className="fab fa-twitter"></i></a>
                            <a href="/"><i className="fab fa-linkedin-in"></i></a>
                            <a href="/"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;