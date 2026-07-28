import { useState } from 'react';
import Cmd from './components/cmd';
import Taskbar from './components/taskbar';

function App() {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleCmd = () => {
    setIsMinimized((prev) => !prev);
  };

  return (
    <div>
      <div
        className={`cmd-window ${isMinimized ? 'minimized' : ''}`}
        style={{
          height: '75vh',
          width: '60vw',
          borderRadius: '12px',
          background: 'rgba(0, 0, 0, 0.45)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 30px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
          padding: '10px',
          position: 'fixed',
          top: '50%',
          left: '50%',
            transform: 'translate(-50%, -55%)',
          boxSizing: 'border-box',
          
          /* Anchor to center-bottom of window */
          transformOrigin: 'center bottom',
          
          /* Perfectly symmetrical 0.35s ease for both entry and exit */
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.35s'
        }}
      >
        <Cmd />
      </div>

      <Taskbar isCliMinimized={isMinimized} onToggleCli={toggleCmd} />
    </div>
  );
}

export default App;