import React, { useState } from 'react';

export default function OtpGenerator() {
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mobile: parseInt(mobile) }),
    });

    if (response.ok) {
      setMessage('OTP sent successfully!');
      setMobile('');
    } else {
      setMessage('Failed to send OTP. Please check your mobile number.');
    }
  };

  const handleChange = (e) => {
    setMobile(e.target.value);
  };

  const isValidMobile = (mobile) => {
    const regex = /^[6-9]\d{9}$/;
    return regex.test(mobile);
  };

  const handleBlur = () => {
    if (!isValidMobile(mobile)) {
      setMessage('Please enter a valid 10-digit mobile number.');
    } else {
      setMessage('');
    }
  };

  return (
    <div>
      <h1>OTP Generator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mobile">Mobile Number:</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={mobile}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {message && <p>{message}</p>}
        <button type="submit" disabled={!isValidMobile(mobile)}>
          Send OTP
        </button>
      </form>
    </div>
  );
}


