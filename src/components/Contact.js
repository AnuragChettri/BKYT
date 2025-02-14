import React from 'react';
import '../style/Contact.css';

function Contact()
{
    const[formData,setformData] = React.useState({
        name: '',
        email: '',
        address: '',
        comment: ''
    });

    function handleChange(event)
    {
        const {name,value} = event.target;
        setformData(prevState => {
            return {
                ...prevState,
                [name] : value
            }
        });
    }

    const handleSubmit = (event)=>{
        event.preventDefault();

        console.log(formData);
    }

    return (
        <div className="contact-main-div">
            <div className="contact-heading">
                <h1> Want to Contact Us? </h1>
                <p> Fill out the form below to contact us with any query </p>
            </div>
            <div className="contact-body">
                <div className="contact-form">
                    <h2>Contact Form</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                               placeholder="Name"
                               name="name"
                               onChange={handleChange} 
                        />
                        <input type="text"
                               placeholder="Email"
                               name="email"
                               onChange={handleChange} 
                        />
                        <input type="text"
                               placeholder="Address"
                               name="address"
                               onChange={handleChange} 
                        />
                        <textarea name="comment" onChange={handleChange} placeholder="Your Message...."></textarea>
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
                <div className="contact-details">
                    <h2>Need to reach us?</h2>
                    <p> we would love to hear your feedback and suggestion. If 
                        you have any complain or any message feel free to reach us
                    </p>
                    <div className="contact-info">
                        <div className="contact-address">
                            <img className="contact-logo" src="./icons/location-icon.jpg" />
                            <h2>Address</h2>
                            <p>Gangtok, Sikkim</p>
                        </div>
                        <div className="contact-phone">
                        <img className="contact-logo" src="./icons/phone-icon.jpg" />
                            <h2>Contact</h2>
                            <p>+91 9876543211</p>
                        </div>
                        <div className="contact-email">
                        <img className="contact-logo" src="./icons/email-icon.jpg" />
                            <h2>Email</h2>
                            <p>demo@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-map">
                        <h1>Contact GPS MAP</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;