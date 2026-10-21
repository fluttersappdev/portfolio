import React from "react";

export function TechIcon({ name, size = 28 }) {
  switch (name) {
    case "flutter":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M14.314 0L2.3 12l3.714 3.714L21.743 0H14.314zm0 13.714L8.6 19.429 12.314 23.143 21.743 13.714h-7.429z" fill="#02569B"/>
          <path d="M14.314 13.714L9.743 18.286l4.571 4.571h7.429L14.314 13.714z" fill="#0175C2"/>
          <path d="M17.171 16.571l-2.857 2.858 2.857 2.857h4.572l-2.857-2.857 2.857-2.858h-4.572z" fill="#29B6F6"/>
        </svg>
      );
    case "dart":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M4.1 20.3L2 17.5 13.2 2H20l-15.9 18.3zm-1.8-8.9L.1 8.7 6.9 2h6.8L2.3 11.4z" fill="#00B4AB"/>
          <path d="M18.9 4L4.1 20.3l1.8 1.7 13-1.4 3-3V6.2L18.9 4z" fill="#0175C2"/>
          <path d="M4.1 20.3l14.8-16.3 3 2.2V17.6l-3 3-14.8-.3z" fill="#02569B"/>
        </svg>
      );
    case "android":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#3DDC84">
          <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zm-4.97-4.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.68 2.24 12.61 2 11.5 2c-1.11 0-2.18.24-3.14.63L6.88 1.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C5.74 4.31 4.5 6.02 4.5 8h14c0-1.98-1.24-3.69-2.97-4.84zM9 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
        </svg>
      );
    case "apple":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#ffffff">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.76 1.05-1.83.94-2.9-.9.04-2 .6-2.65 1.36-.57.65-1.07 1.73-.93 2.78 1.01.08 2.01-.48 2.64-1.24z"/>
        </svg>
      );
    case "nodejs":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#5FA04E">
          <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4z"/>
          <path d="M12 6.5l5 3v5l-5 3-5-3v-5l5-3z" fill="#83CD29"/>
        </svg>
      );
    case "express":
      return (
        <svg width={size} height={size} viewBox="0 0 50 50" fill="#ffffff">
          <text x="25" y="32" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="28" textAnchor="middle" fill="#ffffff">ex</text>
        </svg>
      );
    case "mongodb":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 1.5s-4.5 4.6-4.5 10.4c0 4.2 3.1 7.8 4.5 8.6 1.4-.8 4.5-4.4 4.5-8.6C16.5 6.1 12 1.5 12 1.5z" fill="#47A248"/>
          <path d="M12 1.5v19c.1 0 4.5-4.4 4.5-8.6C16.5 6.1 12 1.5 12 1.5z" fill="#499D4A"/>
          <path d="M12 1.5v19c-1.4-.8-4.5-4.4-4.5-8.6C7.5 6.1 12 1.5 12 1.5z" fill="#3FA037"/>
          <path d="M11.9 20.5v2.8c0 .3.2.4.4.2l.6-.6c.2-.2.2-.4 0-.6l-1-1.8z" fill="#A6A498"/>
        </svg>
      );
    case "firebase":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M4.5 18.5l1.6-10.2c.1-.4.5-.6.8-.4l3.1 3.5L4.5 18.5z" fill="#FFA000"/>
          <path d="M12.8 2.3c-.3-.4-.9-.3-1 .1L8.9 9.8l3.9 4.3 1.8-10.3c.1-.4-.5-.7-.8-.4l-1 1.9z" fill="#FFCA28"/>
          <path d="M4.5 18.5l7.5 4.2c.4.2.8.2 1.1 0l7.5-4.2-7.8-14.8L4.5 18.5z" fill="#F57C00"/>
        </svg>
      );
    case "api":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12a8 8 0 0 1 14.93-4"/>
          <polyline points="20 4 20 9 15 9"/>
          <path d="M20 12a8 8 0 0 1-14.93 4"/>
          <polyline points="4 20 4 15 9 15"/>
        </svg>
      );
    case "websockets":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 16l-4-4 4-4"/>
          <path d="M17 8l4 4-4 4"/>
          <path d="M3 12h18"/>
          <circle cx="12" cy="12" r="3" fill="#ea580c"/>
        </svg>
      );
    case "ai":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#aiGrad)"/>
          <circle cx="19" cy="5" r="2.5" fill="#38bdf8"/>
          <circle cx="5" cy="19" r="2" fill="#ec4899"/>
          <defs>
            <linearGradient id="aiGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a855f7"/>
              <stop offset="0.5" stopColor="#ec4899"/>
              <stop offset="1" stopColor="#3b82f6"/>
            </linearGradient>
          </defs>
        </svg>
      );
    case "figma":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83"/>
          <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF"/>
          <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E"/>
          <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262"/>
          <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE"/>
        </svg>
      );
    case "git":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#F05032">
          <path d="M21.6 10.9L13.1 2.4a2.4 2.4 0 0 0-3.4 0L7.4 4.7l3.6 3.6a2.6 2.6 0 0 1 3.2 3.3l3.4 3.4a2.6 2.6 0 1 1-1.2 1.2l-3.3-3.3v4.6a2.6 2.6 0 1 1-1.7 0V12.7a2.6 2.6 0 0 1-1.4-3.4L6.4 5.7 2.4 9.7a2.4 2.4 0 0 0 0 3.4l8.5 8.5c.9.9 2.5.9 3.4 0l7.3-7.3c.9-.9.9-2.5 0-3.4z"/>
        </svg>
      );
    case "docker":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#2496ED">
          <path d="M13.9 8.2h2.2v2.2h-2.2V8.2zm-2.8 0h2.2v2.2h-2.2V8.2zm-2.8 0h2.2v2.2H8.3V8.2zm5.6-2.8h2.2v2.2h-2.2V5.4zm-2.8 0h2.2v2.2h-2.2V5.4zm-2.8 0h2.2v2.2H8.3V5.4zm-2.8 2.8h2.2v2.2H5.5V8.2zm18 4.4c-.4-.3-1.4-.4-2.2-.2-.2-.8-.7-1.4-1.3-1.8l-.6-.4-.4.6c-.6.9-.7 2.1-.2 3.1-.4.2-.9.5-1.5.6H2.6c-.4 0-.8.2-1.1.5-.5.6-.7 1.4-.6 2.2.3 2.1 1.7 4.1 3.7 5.2 2.3 1.2 5.1 1.6 7.7 1 3.2-.8 5.8-3.1 6.8-6.1 1.2-.2 2.6-.9 3.2-2.1.2-.4.1-.7-.1-.9z"/>
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#8b5cf6">
          <circle cx="12" cy="12" r="10"/>
        </svg>
      );
  }
}
