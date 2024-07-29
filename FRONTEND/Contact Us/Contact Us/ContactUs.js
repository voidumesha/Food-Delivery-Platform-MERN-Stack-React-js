import React from 'react';
import {useState} from 'react';
import './ContactUs.css';

import envelope_icon from './envelope.png'
import phone_icon from './smartphone.png'
import img_icon from './img1.jpeg'

function ContactUs() {

  
  const [formData,setFormData]= useState({
    name: "",
    phone:"",
    email:"",
    reason:"",
    errors:{},
    loading: false,
  });

   const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  

  const validateForm = () => {
    const errors = {};
   
    if (!formData.name) {
      errors.name = "Your  Name is required";
    }

    if (!formData.phone) {
      errors.phone= "Phone Number is required";
    }

    if(!formData.email){
      errors.email="Email is required"
    }

    if (!formData.reason) {
      errors.reason = "Reason is required";
    }

    setFormData((prevState) => ({ ...prevState, errors }));

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      ...formData,
      loading: true,
    });

    // Simulate form submission delay
    setTimeout(() => {
      console.log(formData);
      setFormData({
        ...formData,
        loading: false,
      });
    }, 2000);
  

    if (validateForm()) {
    console.log(formData);
    }
    else{

    }
  };

  



  return (
    
    
  
   < div className='container'>

   <h1 className='head'>Contact Us</h1>
   <link href='https://fonts.googleapis.com/css?family=Irish Grover' rel='stylesheet'></link>
    <form className='form' onSubmit={handleSubmit} >
       
        <label><br></br><input type="text" placeholder="Name" className='input' name="name" value={formData.fname} onChange={handleChange}/>
        {formData.errors.name && (
          <p className='error-message'>{formData.errors.name}</p>
        )}
        </label>
        
        <br></br>
        <label ><br></br><input type="text" placeholder="Phone Number" className='input' name="phone" value={formData.phone} onChange={handleChange} />
        {formData.errors.phone && (
          
          <p className='error-message'>{formData.errors.phone}</p>
        )}
        </label>
        
        <br></br>
        <label ><br></br><input type="text" placeholder="Email" className='input' name="email" value={formData.email} onChange={handleChange} />
        {formData.errors.email && (
          
          <p className='error-message'>{formData.errors.email}</p>
        )}
        </label>
      
        <br></br>
        <div className='taxtarea'>
        <label><br></br>
          <textarea name="reason" placeholder="Reason and Message" className='input' value={formData.reason} onChange={handleChange}/>
          {formData.errors.reason && (
            <p className='error-message'>{formData.errors.reason}</p>
          )}
        </label>
        </div>
        <div className='phone'>
        <img src={phone_icon} alt=""/>
        </div>
        <input type="submit" value="Submit"  className="Submit-button" disabled={formData.loading} />
        {formData.loading && (
        <div>Loading...</div>
      )}
        <div className='message'>
        <img src={envelope_icon} alt=""/>
        </div>

      </form>
       
      <div class="image1">
                    <img src={img_icon} alt=" "/>
                </div>

      </div>

      

  );
}


export default ContactUs;
