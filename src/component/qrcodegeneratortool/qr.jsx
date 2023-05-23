import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './qr.css';

function QR() {
  const [input, setInput] = useState('');
  
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  
  return (
    <div className="qr-container">
      <h1>QR Code Generator</h1>
      <div className="qr-input">
        <input type="text" placeholder="Enter text or URL" onChange={handleInput} />
        <button disabled={!input}>Generate QR Code</button>
      </div>
      {input && (
        <div className="qr-code">
          <QRCode value={input} size={200} />
        </div>
      )}
    </div>
  );
}

export default QR;
