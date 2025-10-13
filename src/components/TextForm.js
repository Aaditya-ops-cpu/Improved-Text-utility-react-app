import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState(' Enter text here ');
  const [fontSize, setFontSize] = useState(16); // Initial font size
  const [highlighted, setHighlighted] = useState(false);

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase', 'success');
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase', 'success');
  };

  const handleClrClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert('Cleared Text', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handlecopy = () => {
    var text = document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied Text', 'success ');
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Removed Extra Spaces', 'success ');
  };

  const handleHighlightClick = () => {
    setHighlighted(!highlighted);
    props.showAlert(highlighted ? 'Highlight removed' : 'Text highlighted', 'success');
  };

  const increaseFontSize = () => {
    setFontSize(fontSize + 2);
  }

  const decreaseFontSize = () => {
    setFontSize(fontSize - 2);
  }

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: highlighted ? 'yellow' : (props.mode === 'dark' ? '#343a40' : 'white'),
              color: props.mode === 'dark' ? 'white' : 'black',
              fontSize: `${fontSize}px`
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button className="btn btn-success" onClick={handleLoClick}>
            Convert to lowercase
          </button>
          <button className="btn btn-danger" onClick={handleClrClick}>
            Clear Text
          </button>
          <button className="btn btn-primary" onClick={handlecopy}>
            Copy Text
          </button>
          <button className="btn btn-success" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
          <button className="btn btn-info" onClick={handleHighlightClick}>
            {highlighted ? 'Remove Highlight' : 'Highlight Text'}
          </button>
          <button className="btn btn-secondary" onClick={increaseFontSize}>
            Increase Font Size
          </button>
          <button className="btn btn-secondary" onClick={decreaseFontSize}>
            Decrease Font Size
          </button>
        </div>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your text summary</h1>
        <p>
          {text.split(' ').length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(' ').length} Minutes read</p>
        <h3>preview</h3>
        <p>{text.length > 0 ? text : 'Enter something in text box above to preview it here'}</p>
      </div>
    </>
  );
}
