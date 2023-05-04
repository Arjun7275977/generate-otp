import React, { useState } from 'react';
import axios from 'axios';

 export default function OtpSent() {
  const [mobile, setMobile] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleOtpSend = () => {
    // Validation: Check if the mobile number is a valid 10-digit Indian number
    const mobileRegex = /^[1-9]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
      setErrorMessage('Please enter a valid 10-digit Indian mobile number');
      return;
    }

    // Send the mobile number to the generateOTP API
    axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', {
      mobile: parseInt(mobile)
    })
      .then(response => {
        console.log(response);
        setMobile('');
        setErrorMessage('');
        // TODO: Handle OTP send success
      })
      .catch(error => {
        console.log(error);
        setErrorMessage('Unable to send OTP. Please try again later.');
        // TODO: Handle OTP send failure
      });
  };

  return (
    <div>
      <h1>Send OTP</h1>
      <label htmlFor="mobileInput">Mobile Number:</label>
      <input type="number" id="mobileInput" value={mobile} onChange={handleMobileChange} />
      <button onClick={handleOtpSend}>Send OTP</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

