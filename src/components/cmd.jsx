import React, { useState, useEffect, useRef } from 'react';

const Cmd = () => {
  // 1. Heading typing animation state
  const headingText = "portfolio@dresucas. Type `help` to list all commands.";
  const [displayedText, setDisplayedText] = useState('');
  const [headingFinished, setHeadingFinished] = useState(false);

  // 2. Interactive terminal state
  const [history, setHistory] = useState([]);
  const [inputVal, setInputVal] = useState('');

  // 3. Auto-scroll ref
  const terminalEndRef = useRef(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Initial typing effect for the large heading
  useEffect(() => {
    if (displayedText.length < headingText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(headingText.slice(0, displayedText.length + 1));
      }, 70);
      return () => clearTimeout(timer);
    } else {
      setHeadingFinished(true);
    }
  }, [displayedText]);

  // Scroll on history update
  useEffect(() => {
    scrollToBottom();
  }, [history, displayedText]);

  // Handle keypresses for commands
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const trimmed = inputVal.trim();
      let response = null;

      if (trimmed.toLowerCase() === 'help') {
        response = "Available commands:\n  help - Displays available commands\n  clear - Clears the terminal screen";
      } else if (trimmed.toLowerCase() === 'clear') {
        setHistory([]);
        setInputVal('');
        return;
      } else if (trimmed !== '') {
        response = `Command not recognized: '${trimmed}'. Type 'help' for available commands.`;
      }

      setHistory((prev) => [...prev, { command: inputVal, response }]);
      setInputVal('');
    }
  };

  return (
    <div 
      className='terminal-wrapper'
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '75vh',
        background: 'rgba(0, 0, 0, 0.19)',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        boxSizing: 'border-box',
        fontFamily: "'Montserrat', monospace"
      }}
    >
      {/* Title Bar */}
      <div 
        className="title" 
        style={{
          width: '100%',
          height: '35px',
          background: 'black',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          boxSizing: 'border-box'
        }}
      >
        <div className="dots" style={{ display: 'flex', alignItems: 'center', width: '100%', position: 'relative' }}>
          {/* Window Control Buttons */}
          <div className="red" style={{ width: '13px', height: '13px', borderRadius: '100%', background: 'red', marginRight: '5px' }}></div>
          <div className="yellow" style={{ width: '13px', height: '13px', borderRadius: '100%', background: 'yellow', marginRight: '5px' }}></div>
          <div className="green" style={{ width: '13px', height: '13px', borderRadius: '100%', background: 'green', marginRight: '5px' }}></div>

          {/* Centered Title */}
          <div 
            className="title-text" 
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'gray',
              fontSize: '13px',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              fontFamily: "'Montserrat', sans-serif"
            }}
          >
            Developer Portfolio - Dresucas | 2026
          </div>
        </div>
      </div>

      {/* Animated & Interactive Terminal Body */}
      <div 
        style={{
          flex: 1,
          padding: '20px',
          overflowY: 'auto',
          textAlign: 'left',
          fontFamily: "'Montserrat', monospace",
          color: '#38edf8'
        }}
      >
        {/* Animated Heading */}
        <h1 style={{ 
          fontSize: '1rem', 
          fontWeight: 600,
          margin: '0 0 10px 0', 
          letterSpacing: '1px',
          display: 'flex',
          alignItems: 'center',
          fontFamily: "'Montserrat', monospace"
        }}>
          {displayedText}
          {!headingFinished && (
            <span style={{
              display: 'inline-block',
              width: '10px',
              height: '1.2em',
              backgroundColor: '#38edf8',
              marginLeft: '8px'
            }} />
          )}
        </h1>

        {/* Interactive Command Line Section */}
        {headingFinished && (
          <div style={{ marginTop: '15px' }}>
            
            {/* Printed Output History */}
            {history.map((item, idx) => (
              <div key={idx} style={{ marginBottom: '10px', fontSize: '1rem', fontFamily: "'Montserrat', monospace" }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#34d399', marginRight: '8px', fontWeight: 700 }}>❯</span>
                  <span style={{ fontWeight: 500 }}>{item.command}</span>
                </div>
                {item.response && (
                  <div style={{ color: '#94a3b8', whiteSpace: 'pre-wrap', marginTop: '4px', marginLeft: '16px', fontWeight: 400 }}>
                    {item.response}
                  </div>
                )}
              </div>
            ))}

            {/* Active Input Line */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#34d399', marginRight: '8px', fontWeight: 700 }}>❯</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#38edf8',
                  fontFamily: "'Montserrat', monospace",
                  fontSize: '1rem',
                  fontWeight: 500,
                  width: '100%'
                }}
              />
            </div>

            {/* Scroll Anchor */}
            <div ref={terminalEndRef} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cmd;