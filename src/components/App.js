import React, { useState, useEffect } from 'react';

const KeyboardApp = () => {
  const [previewText, setPreviewText] = useState('');
  const [quote, setQuote] = useState('');

  useEffect(() => {
    if (previewText.toLowerCase() === 'forty two') {
      fetchQuote();
    } else {
      setQuote('');
    }
  }, [previewText]);

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => setQuote(data.content));
  };

  const handleKeyPress = (keyValue) => {
    setPreviewText(prevText => prevText + keyValue);
  };

  return (
    <div>
      <div className="preview">{previewText}</div>
      {quote && <div className="quote">{quote}</div>}
      <div className="keyboard">
        <button id="key-a" onClick={() => handleKeyPress('a')}>A</button>
        <button id="key-b" onClick={() => handleKeyPress('b')}>B</button>
        {/* Add other keys for all letters and alphabets */}
        <button id="key-space" onClick={() => handleKeyPress(' ')}>Space</button>
      </div>
    </div>
  );
};

export default KeyboardApp;
