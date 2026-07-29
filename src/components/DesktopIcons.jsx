import React, { useState } from 'react';
import { FolderIcon, ReadmeIcon } from './Icons';
import { SettingsIcon } from './Icons';
import { TerminalIcon } from './Icons';

const DesktopIcons = ({ onOpenProjects, onOpenReadme }) => {
  const [selectedId, setSelectedId] = useState(null);

  const desktopItems = [
    {
      id: 'projects-folder',
      title: 'Projects',
      icon: <FolderIcon size={48} color="#60a5fa" />,
      onDoubleClick: onOpenProjects
    },
    {
      id: 'readme-file',
      title: 'README.md',
      icon: <ReadmeIcon size={48} color="#38edf8" />,
      onDoubleClick: onOpenReadme
    }, 
    {
      id: 'settings-icon',
      title: 'Settings',
      icon: <SettingsIcon size={48} color="#38edf8" />,
      onDoubleClick: onOpenReadme
    }
  ];
  const handleDesktopClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedId(null);
    }
  };

  return (
    <>
      <style>{`
        .desktop-canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: auto;
          z-index: 1; /* Below open windows (which are z-index: 10+), above background */
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          align-content: flex-start;
          gap: 16px;
          box-sizing: border-box;
        }

        .desktop-shortcut {
          width: 86px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 8px 4px;
          border-radius: 8px;
          cursor: pointer;
          user-select: none;
          background: rgba(255, 255, 255, 0);
          border: 1px solid transparent;
          transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
        }

        .desktop-shortcut:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .desktop-shortcut.selected {
          background: rgba(56, 237, 248, 0.15);
          border-color: rgba(56, 237, 248, 0.4);
        }

        .desktop-shortcut:active {
          transform: scale(0.96);
        }

        .desktop-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 6px;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4));
        }

        .desktop-shortcut-title {
          color: #f8fafc;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 500;
          text-align: center;
          word-break: break-word;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8), 0 0 2px rgba(0,0,0,0.9);
          line-height: 1.2;
          padding: 2px 4px;
          border-radius: 4px;
        }

        .desktop-shortcut.selected .desktop-shortcut-title {
          background: rgba(56, 237, 248, 0.8);
          color: #000000;
          font-weight: 600;
          text-shadow: none;
        }
      `}</style>

      <div className="desktop-canvas" onClick={handleDesktopClick}>
        {desktopItems.map((item) => (
          <div
            key={item.id}
            className={`desktop-shortcut ${selectedId === item.id ? 'selected' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedId(item.id);
            }}
            onDoubleClick={(e) => {
              e.stopPropagation();
              if (item.onDoubleClick) item.onDoubleClick();
            }}
          >
            <div className="desktop-icon-wrapper">
              {item.icon}
            </div>
            <span className="desktop-shortcut-title">{item.title}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default DesktopIcons;