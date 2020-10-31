import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="Contact">
            <div className="container py-5">
                <div className="header text-center">
                    <h2>CONTACT ME</h2>
                    <div className="wrapper">
                        <div className="divider div-transparent "></div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md mt-md-0 mt-5">
                        <form action="https://formspree.io/f/shakibhossain1020@gmail.com" method="POST">
                            <div className="form-group">
                                <input type="text" placeholder="Name" name="name" className="form-control p-4"/>
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email" name="email" className="form-control p-4"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control p-4" rows="4" placeholder="Message" name="message"></textarea>
                            </div>
                            <input type="submit" className="btn btn-block py-3" value="SEND"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;