import React from 'react';

const Icons = {
  Terminal: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  Github: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  Linkedin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Twitter: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  Email: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
};

const Taskbar = ({ isCliMinimized, onToggleCli }) => {
  const socials = [
    { 
      id: 'terminal', 
      label: isCliMinimized ? 'Open CLI Terminal' : 'Minimize CLI Terminal', 
      icon: <Icons.Terminal />, 
      active: true, 
      color: '#38edf8',
      onClick: (e) => {
        e.preventDefault();
        onToggleCli();
      }
    },
    { id: 'github', label: 'GitHub', icon: <Icons.Github />, href: 'https://github.com/your-username', active: false, color: '#f8fafc' },
    { id: 'linkedin', label: 'LinkedIn', icon: <Icons.Linkedin />, href: 'https://linkedin.com/in/your-username', active: false, color: '#0a66c2' },
    { id: 'twitter', label: 'X / Twitter', icon: <Icons.Twitter />, href: 'https://x.com/your-username', active: false, color: '#ffffff' },
    { id: 'email', label: 'Email', icon: <Icons.Email />, href: 'mailto:your-email@example.com', active: false, color: '#f43f5e' }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap');

        .cli-dock {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          display: flex;
          align-items: flex-end;
          gap: 12px;
          padding: 8px 16px;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
          height: 60px;
          box-sizing: border-box;
          font-family: 'Montserrat', sans-serif;
        }

        .dock-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          cursor: pointer;
        }

        .icon-tile {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brand-color);
          will-change: transform;
          transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.2s, border-color 0.2s, color 0.2s;
        }

        .dock-tooltip {
          position: absolute;
          top: -42px;
          background: transparent;
          color: var(--brand-color);
          font-size: 11px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 0.3px;
          padding: 4px 10px;
          border-radius: 6px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transform: translateY(6px);
          transition: all 0.2s ease;
        }

        .dock-item:hover .icon-tile {
          transform: scale(1.1) translateY(-8px);
          background: var(--brand-color);
          border-color: var(--brand-color);
          color: black;
        }

        .dock-item:hover .dock-tooltip {
          opacity: 1;
          transform: translateY(0);
        }

        .active-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          margin-top: 4px;
          transition: opacity 0.3s;
        }

        .active-dot.is-active {
          background-color: var(--brand-color);
          box-shadow: 0 0 8px var(--brand-color);
          animation: dot-blink 1.2s ease-in-out infinite alternate;
        }

        @keyframes dot-blink {
          0% {
            opacity: 0.25;
            box-shadow: 0 0 2px var(--brand-color);
            transform: scale(0.85);
          }
          100% {
            opacity: 1;
            box-shadow: 0 0 10px var(--brand-color);
            transform: scale(1.1);
          }
        }
      `}</style>

      <div className="cli-dock">
        {socials.map((item) => (
          <a
            key={item.id}
            href={item.href || '#'}
            onClick={item.onClick}
            target={item.href && item.href.startsWith('http') ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="dock-item"
            style={{ '--brand-color': item.color }}
          >
            <div className="dock-tooltip">
              {item.label}
            </div>

            <div className="icon-tile">
              {item.icon}
            </div>

            <span
              className={`active-dot ${item.active && !isCliMinimized ? 'is-active' : ''}`}
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default Taskbar;