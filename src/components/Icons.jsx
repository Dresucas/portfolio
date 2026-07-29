import React from 'react';

// Desktop & Explorer Folder Icon
export const FolderIcon = () => (
<img width="70" height="70" src="https://img.icons8.com/color/96/mac-folder.png" alt="mac-folder"/>
);

// README.md File Icon
export const ReadmeIcon = () => (
<img width="70" height="70" src="https://img.icons8.com/fluency/96/file.png" alt="file"/>
);

// Settings Icon
export const SettingsIcon = ()=>(
    <img width="70" height="70" src="https://img.icons8.com/fluency/96/settings.png" alt="settings"/>
);

// Terminal Icon
export const TerminalIcon = ({ size = 48, color = "#34d399", className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="4" width="20" height="16" rx="3" fill={`${color}15`} />
    <polyline points="7 9 10 12 7 15" />
    <line x1="12" y1="15" x2="17" y2="15" />
  </svg>
);

// Generic Document / Text File Icon
export const FileIcon = ({ size = 48, color = "#94a3b8", className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path 
      d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" 
      fill={`${color}15`} 
    />
    <polyline points="13 2 13 9 20 9" />
  </svg>
);

// Code / React File Icon
export const CodeIcon = ({ size = 48, color = "#f59e0b", className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

// Link / External Window Icon
export const ExternalLinkIcon = ({ size = 18, color = "currentColor", className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default {
  FolderIcon,
  ReadmeIcon,
  SettingsIcon,
  TerminalIcon,
  FileIcon,
  CodeIcon,
  ExternalLinkIcon
};