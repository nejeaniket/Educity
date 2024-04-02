import React from 'react'
import './Contact.css'
import mgs_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "f823a134-06ec-4516-bc7b-1c8081c10156");
  
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
      
        <div className='contact-col'>
            <h3>Sead a massege <img src={mgs_icon}></img> </h3>
            <p>Feel free to reach out us find as on contact below</p>
            <ul>
                <li><img src={mail_icon}></img> contact@gmail.com</li>
                <li><img src={phone_icon}></img> +91 9012137465</li>
                <li><img src={location_icon}></img> #1120 central rod New york,USA</li>
            </ul>
        </div>

        <div className='contact-col'>

            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter Your Name' required></input>

                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter Phone Number' required></input>

                <label>Enter Your massege</label>
                <textarea name='massege' rows="6" placeholder='Enter Your Massege Hare' required></textarea>

                <button type='submit' className='btn dark-btn'>submit now &#8594;</button>
            </form>

            <span>{result}</span>

        </div>

    </div>
  )
}

export default Contact
