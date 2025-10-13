import React, { useState } from 'react';

export default function About() {
  const [mystyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black',
  });
  const [btnText, setBtnText] = useState('Enable Light mode');
  const toggleStyle = () => {
    if (mystyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
        border: '1px white solid',
      });
      setBtnText('Enable Dark mode');
    } else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
      });
      setBtnText('Enable dark mode');
    }
  };
  return (
    <div className="container" style={mystyle}>
      <h1 className="my2">About TextUtils</h1>
      <p>
        TextUtils is a simple and easy-to-use utility to manipulate your text. It provides several features to help you with your text-based tasks.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Convert text to uppercase or lowercase.</li>
        <li>Clear all text from the text area.</li>
        <li>Copy the text to your clipboard.</li>
        <li>Remove extra spaces from your text.</li>
        <li>Highlight the text for better focus.</li>
        <li>Adjust the font size for readability.</li>
      </ul>
      <h2>Our Mission</h2>
      <p>
        We aim to provide simple and effective tools to make your life easier. TextUtils is designed to be intuitive and straightforward, allowing you to perform text manipulations without any hassle.
      </p>
      <div className="container my-3">
        <button type="button" onClick={toggleStyle} className="btn btn-primary">
          {btnText}
        </button>
      </div>
    </div>
  );
}
