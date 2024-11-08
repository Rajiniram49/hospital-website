import React from 'react'
import './Contact.css'
import white_arrow from '../../assets/white-arrow.png'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "85af1460-006e-4e28-b882-5e33f53d7b1f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message  <img src={msg_icon} alt="" /></h3>
            <p>Hit us up on your requirement and get cured soon.</p>
            <ul>
                <li><a href="mailto:shirdihomoeo@gmail.com"><img src={mail_icon} alt="" />shirdihomoeo@gmail.com</a></li>
                <li> <a href="tel:+91 9003014568"><img src={phone_icon} alt="" />+91 9003014568</a></li>
                <li> <a href="https://maps.app.goo.gl/pLko9UJw1FxNXoeUA" target='_blank'><img src={location_icon} alt="" />36 1st Floor, Ayyapakkam Main Road, Ambattur, Chennai - 600053</a></li>
            </ul>
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label >Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" id="" cols="30" rows="10" placeholder='Enter Your message here' required></textarea>
                <button type='submit' className='btn dar-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>


    </div>
  )
}

export default Contact