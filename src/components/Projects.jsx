import React, { useState, useRef, useEffect } from 'react';
import projectsData from '../data/projects.json';

const Projects = ({ onClose }) => {
  const [position, setPosition] = useState({ x: 40, y: -20 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0, initialX: 0, initialY: 0 });

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: position.x,
      initialY: position.y,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - dragRef.current.startX;
      const deltaY = e.clientY - dragRef.current.startY;
      setPosition({
        x: dragRef.current.initialX + deltaX,
        y: dragRef.current.initialY + deltaY,
      });
    };

    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: `${position.y}px`,
        marginLeft: `${position.x}px`,
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '75vh',
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        zIndex: 950,
        fontFamily: "'Montserrat', sans-serif",
        userSelect: isDragging ? 'none' : 'auto',
      }}
    >
      {/* Title Bar (Mac Finder Style) */}
      <div
        onMouseDown={handleMouseDown}
        style={{
          height: '38px',
          background: 'rgba(0, 0, 0, 0.4)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 14px',
          cursor: isDragging ? 'grabbing' : 'grab',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', gap: '8px' }}>
          <div
            onClick={onClose}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#ff0d00',
              cursor: 'pointer',
            }}
          />
          <div style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#ffd900' }} />
          <div style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#00ff26' }} />
        </div>

        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#94a3b8',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.5px',
          }}
        >
          📁 Finder — Projects
        </div>
      </div>

      {/* Main Content Body */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left Finder Sidebar */}
        <div
          style={{
            width: '180px',
            background: 'rgba(0, 0, 0, 0.25)',
            borderRight: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '16px 12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
            Favorites
          </div>
          <div
            style={{
              padding: '6px 10px',
              borderRadius: '6px',
              background: 'rgba(56, 237, 248, 0.15)',
              color: '#38edf8',
              fontSize: '13px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>📂</span> All Projects
          </div>
        </div>

        {/* Right Projects Grid View */}
        <div
          style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '20px',
            alignContent: 'start',
          }}
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
              }}
            >
              {/* Project Image Preview */}
              <div style={{ height: '130px', width: '100%', overflow: 'hidden', background: '#000' }}>
                <img
                  src={project.imgUrl}
                  alt={project.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Project Info */}
              <div style={{ padding: '14px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 6px 0', fontSize: '15px', color: '#f8fafc', fontWeight: 600 }}>
                  {project.name}
                </h3>
                <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#94a3b8', lineHeight: '1.4', flex: 1 }}>
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '10px',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        background: 'rgba(56, 237, 248, 0.1)',
                        color: '#38edf8',
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '6px 0',
                        fontSize: '11px',
                        fontWeight: 600,
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        color: '#fff',
                        textDecoration: 'none',
                      }}
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '6px 0',
                        fontSize: '11px',
                        fontWeight: 600,
                        borderRadius: '6px',
                        background: '#38edf8',
                        color: '#000',
                        textDecoration: 'none',
                      }}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;