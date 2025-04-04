import React, { useState } from 'react';
import PageHeader from '../Components/common/PageHeader';
import CommunicationCard from '../Components/ContactElements/CommunicationCard';
import Map from '../Components/ContactElements/Map';
import Banner from '../Containers/Banner';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';

const ContactPage = () => {
    const ContactData = [
        {
            id: '1',
            iconClass: 'ion-ios-telephone-outline',
            infoBody01: 'Phone No',
            infoBody02: '(780) 710-3640',
            // infoBody03: '+1-(780)-965-5819',
        },
        {
            id: '2',
            iconClass: 'fa fa-envelope-o',
            infoBody01: 'Email Address',
            infoBody02: 'cdchomes@hotmail.com',
        },
        {
            id: '3',
            iconClass: 'fa fa-map-marker',
            infoBody01: 'Office Address',
            infoBody02: '# 152, 134 Pembina Road,',
            infoBody03: 'Sherwood park, AB',
            infoBodyClass: 'd-none',
        },
    ];

    const [loading, setLoading] = useState(false);


    const HandleSubmit = async (e) => {
        e.preventDefault(); 
        setLoading(true);
        
        // Collect form data from input fields using their IDs
        let email = document.getElementById('email').value; 
        let subject = document.getElementById('subject').value; 
        let message = document.getElementById('message').value; 
        let contact = document.getElementById('contact').value; 
        let name = document.getElementById('name').value; 
    
        // Append sender details to the message for additional context
        message += `     Sender's Details - Name: ${name}  Contact: ${contact}  Email: ${email}`;
    
        // Define email sending credentials and recipient details
        const from = process.env.REACT_APP_EMAIL; 
        const fromPassword = process.env.REACT_APP_EMAIL_PASSWORD;
        const to = 'cdchomes@hotmail.com'; 

    
        // Create the payload for the API request
        const data = { from, fromPassword, to, subject, message };
        console.log(data, process.env.EMAIL);
        
        
        try {
            toast('Sending Email, please wait...');
            // Send a POST request to the backend API endpoint to handle email sending
            const response = await fetch('https://sending-email-flame.vercel.app/api/sendEmail', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(data), 
            });
    
            // Parse the JSON response from the server
            const result = await response.json();
            
            if (response.ok) {
                toast.success('Email sent successfully!');
            } else {
                toast.error(`Failed to send email: ${result.message}`);
            }
        } catch (error) {
            console.error('Error sending email:', error);
            toast.error('An error occurred while sending the email. Please try again later.');
        }
        setLoading(false);
    };
    

    return (
        <>
            <PageHeader activeClass01='active' activeClass02='d-none' routeName01='Contact Us' heading='Contact Us' />

            <div className="main_wrapper">
                <div className="section">
                    <div className="container">
                        <div className="gmapbox">
                            <div id="googleMap" className="map">
                                <Map />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact_inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-5">
                                <div className="keepintouch_3">
                                    {
                                        ContactData.map(data => <CommunicationCard
                                            key={data.id}
                                            data={data}
                                        />)
                                    }
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 offset-lg-1">
                                <div className="contact_us_1">
                                    <div className="section_header">
                                        <h6 className="section_sub_title">Contact Us</h6>
                                        <h1 className="section_title">Want to Ask anything?<br />
                                            Send Us a Mail Anytime</h1>
                                    </div>
                                    <form onSubmit={HandleSubmit} className="contact_form">
                                        <div className="form-container">
                                            <div className="row">
                                                <div className="col-md-6 col-lg-6">
                                                    <div className="form-group">
                                                        <input type="text" name="name" className="form-control" id='name' placeholder="Your Name*" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6">
                                                    <div className="form-group">
                                                        <input type="email" name="email" className="form-control" id='email' placeholder="Email Address*" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6">
                                                    <div className="form-group">
                                                        <input type="text" name="phone" className="form-control" id='contact' placeholder="Phone No" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6">
                                                    <div className="form-group">
                                                        <input type="text" name="subject" className="form-control" id='subject' placeholder="Subject" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-lg-12">
                                                    <div className="form-group">
                                                        <textarea name="message" className="form-control" id='message' placeholder="Message Here*" required></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-lg-12">
                                                    <div className="form-group">
                                                        <input className="button" disabled={loading} type="submit" value="Send Mail" name="submit" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Banner
                    title='Is Your House Secured Enough? Call Us to install Security Devices'
                    heading='Call Us Anytime'
                    phone='(780) 710-3640'
                    bannerType='banner banner_bg_color'
                />
            </div>

            <Helmet>
            <title>
      Contact CDC Homes | Edmonton's Custom Home Experts
  </title>
  <meta
      name="description"
      content="Get in touch with CDC Homes, the top home builder in Edmonton, AB. Contact us today for custom home design, quality construction, and personalized service"
  />
  
  <meta
      name="keywords"
      content="top home builder,
      best home builder,
      best home builders,
      builders in edmonton,
      best house builders,
      top home builders,
      custom home builders edmonton,
      best custom home builders,
      best quality home builders,
      top home builder,
      houses to be moved edmonton,
      top 10 list new home builders,
      home builders edmonton,
      edmonton home builders,
      edmonton builders,
      new home builders edmonton,
      best new home builders,
      the best home builders,
      best new home builder,
      top rated new home builders,
      what home builder is the best,
      top house builders,
      top 10 house builders"
  />
  <meta property="og:title" content="Top Home Builder in Edmonton, AB | Royal Villa Homes" />
  <meta
      property="og:description"
      content="Royal Villa Homes is the top home builder in Edmonton, AB, offering custom home design, quality construction, and exceptional craftsmanship to create your dream home."
  />
  <meta property="og:image" content="/images/logo.jpg" /> 
  <meta property="og:url" content="https://royalvillahomes.ca" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact Royal Villa Homes | Edmonton's Custom Home Experts" />
  <meta
      name="twitter:description"
      content="Get in touch with Royal Villa Homes, the top home builder in Edmonton, AB. Contact us today for custom home design, quality construction, and personalized service"
  />
  <meta name="twitter:image" content="/images/logo.jpg" /> 
            </Helmet>

        </>
    );
};

export default ContactPage;