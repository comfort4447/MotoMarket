import React, { useState } from 'react';
import bar from '../Images/Bar1.png';

const Contact = () => {
  const secondaryTextColor100 = 'bg-secondary-600'; // Apply secondaryTextColor100 as the background color
  const textColorWhite = 'text-secondary-700'; // Apply text color as white
  const buttonColour = 'bg-secondary-500';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };

  return (
    <div className={`py-16 h-screen ${secondaryTextColor100} `} id='contact'>
      <div className="container mx-auto text-center">
        <img src={bar} alt="Small Image" className="mt-8 text-center mx-auto" />
        <h1 className={`text-3xl font-semibold mb-2  ${textColorWhite}`}>Contact Us</h1>
        <p className={`max-w-xl mx-auto ${textColorWhite}`}>
          For more enquiries, send us a message below
        </p>
      </div>
      <div className="flex justify-center items-center h-screen">
        <form 
        action="https://formspree.io/f/mpzgkbon"
        method="POST"
        className="p-8 rounded-lg -mt-60"
         onSubmit={handleSubmit}>
          {/* Added mt-4 to reduce top margin */}
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-1/2 px-2 mb-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-3 py-2 rounded-lg border-0"
              />
            </div>
            <div className="w-1/2 px-2 mb-4">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-3 py-2 rounded-lg border-0"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-1/2 px-2 mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-3 py-2 rounded-lg border-0"
              />
            </div>
            <div className="w-1/2 px-2 mb-4">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-3 py-2 rounded-lg border-0"
              />
            </div>
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here"
              rows="4"
              className="w-full px-3 py-2 rounded-lg border-0"
            ></textarea>
          </div>
          <button
            type="submit"
            className={` w-full ${buttonColour} text-white py-2 rounded-lg hover:bg-yellow-600`}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
