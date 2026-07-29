import { useState } from 'react';
import Cmd from './components/cmd';
import Taskbar from './components/taskbar';
import Projects from './components/Projects';
import DesktopIcons from './components/DesktopIcons';

function App() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const toggleCmd = () => setIsMinimized((prev) => !prev);
  const handleOpenProjects = () => setShowProjects(true);
  const handleCloseProjects = () => setShowProjects(false);

  const handleOpenReadme = () => {
    alert("Opening README.md...");
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      
      {/* Desktop Icons on the wallpaper background */}
      <DesktopIcons 
        onOpenProjects={handleOpenProjects}
        onOpenReadme={handleOpenReadme}
      />

      {/* Terminal / CMD Window */}
      <div
        className={`cmd-window ${isMinimized ? 'minimized' : ''}`}
        style={{
          height: '75vh',
          width: '60vw',
          borderRadius: '12px',
          background: 'rgba(0, 0, 0, 0.45)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 30px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
          padding: '10px',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -55%)',
          boxSizing: 'border-box',
          transformOrigin: 'center bottom',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.35s',
          zIndex: 10
        }}
      >
        <Cmd onOpenProjects={handleOpenProjects} />
      </div>

      {/* Projects File Explorer Window */}
      {showProjects && <Projects onClose={handleCloseProjects} />}

      {/* Taskbar */}
      <Taskbar isCliMinimized={isMinimized} onToggleCli={toggleCmd} />
    </div>
  );
}

export default App;