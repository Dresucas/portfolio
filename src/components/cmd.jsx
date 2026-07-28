import React, { useState, useEffect } from 'react';

const Cmd = () => {
  // 1. Heading typing animation state
  const headingText = "portfolio@dresucas. Type `help` to list all commands.";
  const [displayedText, setDisplayedText] = useState('');
  const [headingFinished, setHeadingFinished] = useState(false);

  // 2. Interactive terminal state
  const [history, setHistory] = useState([]);
  const [inputVal, setInputVal] = useState('');

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
    <div className='terminal'>
        <div className="title" style={{
            width: '50vw',
            height: '10px',
            background: 'black',
            padding: '10px',
            position: 'fixed',
            borderTopLeftRadius:'10px',
            borderTopRightRadius:'10px',
            top: '0%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxSizing: 'border-box' 
        }}>
            <div className="dots" style={{
                display:'flex',
            }}>
<div className="dots" style={{
    display: 'flex',
    alignItems: 'center',
    width: '100%'
}}>
    {/* Window Control Buttons */}
    <div className="red" style={{width:'13px', height:'13px', borderRadius:'100%', background:'red', marginRight:'5px', marginTop:'-7px'}}></div>
    <div className="yellow" style={{width:'13px', height:'13px', borderRadius:'100%', background:'yellow', marginRight:'5px', marginTop:'-7px'}}></div>
    <div className="green" style={{width:'13px', height:'13px', borderRadius:'100%', background:'green', marginRight:'5px', marginTop:'-7px'}}></div>

    {/* Centered Title */}
    <div className="title" style={{
        flex: 1,
        textAlign: 'center',
        color: 'gray',
        fontSize: '13px',
        marginRight: '54px' ,
        marginTop:'-7px'
    }}>
        Hello world
    </div>
</div>
            </div>
        </div>

        {/* Animated & Interactive Terminal Content */}
        <div style={{
          position: 'fixed',
          top: '5%',
          left: '5px', // Matches the left boundary of your 50vw title bar
          width: '50vw',
          textAlign: 'left',
          fontFamily: 'monospace',
          color: '#38edf8'
        }}>
          {/* Animated Heading */}
          <h1 style={{ 
            fontSize: '1rem', 
            margin: '0 0 10px 0', 
            letterSpacing: '2px',
            display: 'flex',
            alignItems: 'center'
          }}>
            {displayedText}
            {!headingFinished && (
              <span style={{
                display: 'inline-block',
                width: '12px',
                height: '1.2em',
                backgroundColor: '#38edf8',
                marginLeft: '8px'
              }} />
            )}
          </h1>

          {/* Interactive Command Line Section (Shows after heading finishes) */}
          {headingFinished && (
            <div style={{ marginTop: '15px' }}>
              
              {/* Printed Output History */}
              {history.map((item, idx) => (
                <div key={idx} style={{ marginBottom: '10px', fontSize:'1rem'}}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#34d399', marginRight: '8px' }}>❯</span>
                    <span>{item.command}</span>
                  </div>
                  {item.response && (
                    <div style={{ color: '#94a3b8', whiteSpace: 'pre-wrap', marginTop: '4px', marginLeft: '16px' }}>
                      {item.response}
                    </div>
                  )}
                </div>
              ))}

              {/* Active Input Line */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#34d399', marginRight: '8px' }}>❯</span>
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
                    fontFamily: 'monospace',
                    fontSize: '1rem',
                    width: '100%'
                  }}
                />
              </div>

            </div>
          )}
        </div>
    </div>
  );
}

export default Cmd;