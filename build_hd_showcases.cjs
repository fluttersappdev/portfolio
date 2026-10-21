const sharp = require('sharp');
const fs = require('fs');

async function createSuperAppHD() {
  const svg = `
  <svg width="1376" height="768" viewBox="0 0 1376 768" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#143622"/>
        <stop offset="50%" stop-color="#1b4d30"/>
        <stop offset="100%" stop-color="#0d2417"/>
      </linearGradient>
      <linearGradient id="phoneBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#2a2e39"/>
        <stop offset="100%" stop-color="#111318"/>
      </linearGradient>
      <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="25" stdDeviation="30" flood-color="#000000" flood-opacity="0.6"/>
      </filter>
    </defs>
    <rect width="1376" height="768" fill="url(#bg)"/>
    <circle cx="200" cy="150" r="280" fill="#22c55e" opacity="0.12" filter="blur(60px)"/>
    <circle cx="1180" cy="600" r="320" fill="#10b981" opacity="0.15" filter="blur(70px)"/>

    <!-- Left Phone (Food Menu) -->
    <g transform="translate(180, 110) rotate(-6)" filter="url(#shadow)">
      <rect width="280" height="580" rx="42" fill="url(#phoneBody)" stroke="#475569" stroke-width="4"/>
      <rect x="12" y="12" width="256" height="556" rx="32" fill="#f8fafc"/>
      <rect x="85" y="20" width="86" height="18" rx="9" fill="#0f172a"/>
      <text x="30" y="70" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="18" fill="#0f172a">Food Express</text>
      
      <rect x="25" y="90" width="230" height="95" rx="16" fill="#ffffff" stroke="#e2e8f0"/>
      <circle cx="65" cy="138" r="28" fill="#ffedd5"/>
      <text x="65" y="145" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="24" fill="#ea580c" text-anchor="middle">🍕</text>
      <text x="110" y="128" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" fill="#0f172a">Artisan Pizza</text>
      <text x="110" y="146" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="12" fill="#16a34a">★ 4.9 (1.2k)</text>
      <text x="110" y="166" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="13" fill="#ea580c">$18.50</text>

      <rect x="25" y="200" width="230" height="95" rx="16" fill="#ffffff" stroke="#e2e8f0"/>
      <circle cx="65" cy="248" r="28" fill="#fef3c7"/>
      <text x="65" y="255" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="24" fill="#d97706" text-anchor="middle">🍔</text>
      <text x="110" y="238" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" fill="#0f172a">Gourmet Burger</text>
      <text x="110" y="256" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="12" fill="#16a34a">★ 4.8 (850)</text>
      <text x="110" y="276" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="13" fill="#ea580c">$14.00</text>

      <rect x="25" y="310" width="230" height="95" rx="16" fill="#ffffff" stroke="#e2e8f0"/>
      <circle cx="65" cy="358" r="28" fill="#e0f2fe"/>
      <text x="65" y="365" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="24" fill="#0284c7" text-anchor="middle">🥗</text>
      <text x="110" y="348" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" fill="#0f172a">Avocado Salad</text>
      <text x="110" y="366" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="12" fill="#16a34a">★ 4.9 (420)</text>
      <text x="110" y="386" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="13" fill="#ea580c">$12.50</text>
    </g>

    <!-- Center Phone (Super App Home Grid) -->
    <g transform="translate(528, 65)" filter="url(#shadow)">
      <rect width="320" height="640" rx="48" fill="url(#phoneBody)" stroke="#64748b" stroke-width="4"/>
      <rect x="14" y="14" width="292" height="612" rx="38" fill="#f8fafc"/>
      <rect x="100" y="24" width="92" height="22" rx="11" fill="#000000"/>
      <text x="30" y="78" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="20" fill="#0f172a">SuperApp</text>
      <text x="30" y="98" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="12" fill="#64748b">All services at your fingertips</text>
      
      <rect x="25" y="112" width="242" height="42" rx="12" fill="#e2e8f0"/>
      <text x="45" y="138" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#64748b">🔍  Search food, grocery, cabs...</text>

      <!-- Row 1 -->
      <rect x="25" y="170" width="74" height="74" rx="18" fill="#dcfce7"/>
      <text x="62" y="212" font-size="28" text-anchor="middle">🚕</text>
      <text x="62" y="258" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" fill="#15803d" text-anchor="middle">Taxi</text>

      <rect x="109" y="170" width="74" height="74" rx="18" fill="#ffedd5"/>
      <text x="146" y="212" font-size="28" text-anchor="middle">🍕</text>
      <text x="146" y="258" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" fill="#c2410c" text-anchor="middle">Food</text>

      <rect x="193" y="170" width="74" height="74" rx="18" fill="#e0e7ff"/>
      <text x="230" y="212" font-size="28" text-anchor="middle">🛒</text>
      <text x="230" y="258" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" fill="#4338ca" text-anchor="middle">Grocery</text>

      <!-- Row 2 -->
      <rect x="25" y="280" width="74" height="74" rx="18" fill="#fce7f3"/>
      <text x="62" y="322" font-size="28" text-anchor="middle">💇</text>
      <text x="62" y="368" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" fill="#be185d" text-anchor="middle">Salon</text>

      <rect x="109" y="280" width="74" height="74" rx="18" fill="#e0f2fe"/>
      <text x="146" y="322" font-size="28" text-anchor="middle">🧹</text>
      <text x="146" y="368" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" fill="#0369a1" text-anchor="middle">Cleaning</text>

      <rect x="193" y="280" width="74" height="74" rx="18" fill="#fef3c7"/>
      <text x="230" y="322" font-size="28" text-anchor="middle">📦</text>
      <text x="230" y="368" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" fill="#b45309" text-anchor="middle">Courier</text>

      <!-- Promotion Banner -->
      <rect x="25" y="390" width="242" height="110" rx="18" fill="#15803d"/>
      <text x="45" y="425" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="16" fill="#ffffff">50% OFF FIRST ORDER</text>
      <text x="45" y="445" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#bbf7d0">Use code SUPER50 at checkout</text>
      <rect x="45" y="460" width="90" height="26" rx="13" fill="#ffffff"/>
      <text x="90" y="478" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" fill="#15803d" text-anchor="middle">Claim Now</text>

      <!-- Bottom Nav -->
      <rect x="14" y="560" width="292" height="66" fill="#ffffff" stroke="#e2e8f0"/>
      <text x="50" y="600" font-size="18" text-anchor="middle">🏠</text>
      <text x="115" y="600" font-size="18" text-anchor="middle">🔍</text>
      <text x="175" y="600" font-size="18" text-anchor="middle">🧾</text>
      <text x="240" y="600" font-size="18" text-anchor="middle">👤</text>
    </g>

    <!-- Right Phone (Delivery Tracking) -->
    <g transform="translate(916, 110) rotate(6)" filter="url(#shadow)">
      <rect width="280" height="580" rx="42" fill="url(#phoneBody)" stroke="#475569" stroke-width="4"/>
      <rect x="12" y="12" width="256" height="556" rx="32" fill="#0f172a"/>
      <rect x="85" y="20" width="86" height="18" rx="9" fill="#000000"/>
      <text x="30" y="70" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="18" fill="#ffffff">Live Tracking</text>
      <rect x="25" y="90" width="230" height="240" rx="16" fill="#1e293b"/>
      <path d="M50 140 Q 120 180 140 220 T 210 260" stroke="#22c55e" stroke-width="5" fill="none" stroke-dasharray="6 4"/>
      <circle cx="50" cy="140" r="10" fill="#3b82f6"/>
      <circle cx="210" cy="260" r="12" fill="#22c55e"/>
      <text x="210" y="265" font-size="12" text-anchor="middle">🛵</text>
      <rect x="25" y="345" width="230" height="120" rx="16" fill="#1e293b" stroke="#334155"/>
      <text x="45" y="375" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" fill="#ffffff">Driver on the way</text>
      <text x="45" y="395" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#94a3b8">Estimated arrival: 8 mins</text>
      <rect x="45" y="415" width="190" height="34" rx="8" fill="#22c55e"/>
      <text x="140" y="437" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="12" fill="#0f172a" text-anchor="middle">Call Driver</text>
    </g>
  </svg>`;

  await sharp(Buffer.from(svg))
    .png()
    .toFile('public/assets/projects/super-app-hd.png');
  console.log("Super App HD generated!");
}

async function createSocialAppHD() {
  const svg = `
  <svg width="1376" height="768" viewBox="0 0 1376 768" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="socialBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e0b36"/>
        <stop offset="50%" stop-color="#2d1254"/>
        <stop offset="100%" stop-color="#120524"/>
      </linearGradient>
      <linearGradient id="reelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#833ab4"/>
        <stop offset="50%" stop-color="#fd1d1d"/>
        <stop offset="100%" stop-color="#fcb045"/>
      </linearGradient>
      <linearGradient id="purplePhone" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b1d60"/>
        <stop offset="100%" stop-color="#190a2c"/>
      </linearGradient>
      <filter id="shadowSocial" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="25" stdDeviation="30" flood-color="#000000" flood-opacity="0.75"/>
      </filter>
    </defs>
    <rect width="1376" height="768" fill="url(#socialBg)"/>
    <circle cx="688" cy="384" r="350" fill="#a855f7" opacity="0.2" filter="blur(90px)"/>
    <circle cx="1100" cy="200" r="280" fill="#ec4899" opacity="0.18" filter="blur(80px)"/>

    <!-- Left Phone: Direct Messages -->
    <g transform="translate(180, 110) rotate(-6)" filter="url(#shadowSocial)">
      <rect width="280" height="580" rx="42" fill="url(#purplePhone)" stroke="#6b21a8" stroke-width="4"/>
      <rect x="12" y="12" width="256" height="556" rx="32" fill="#0b0514"/>
      <rect x="85" y="20" width="86" height="18" rx="9" fill="#000000"/>
      <text x="30" y="70" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="18" fill="#ffffff">Messages</text>
      <g transform="translate(25, 90)">
        <rect width="230" height="65" rx="14" fill="#180c2b" stroke="#3b1d60"/>
        <circle cx="32" cy="32" r="20" fill="url(#reelGrad)"/>
        <text x="65" y="28" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13" fill="#ffffff">Elena Rossi</text>
        <text x="65" y="46" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#a855f7">Loved your latest reel! 🔥</text>
        <circle cx="210" cy="32" r="6" fill="#a855f7"/>
      </g>
      <g transform="translate(25, 170)">
        <rect width="230" height="65" rx="14" fill="#180c2b" stroke="#3b1d60"/>
        <circle cx="32" cy="32" r="20" fill="#3b82f6"/>
        <text x="65" y="28" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13" fill="#ffffff">Marcus Chen</text>
        <text x="65" y="46" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#94a3b8">Let's collab next week</text>
      </g>
      <g transform="translate(25, 250)">
        <rect width="230" height="65" rx="14" fill="#180c2b" stroke="#3b1d60"/>
        <circle cx="32" cy="32" r="20" fill="#ec4899"/>
        <text x="65" y="28" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13" fill="#ffffff">Sarah Blake</text>
        <text x="65" y="46" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#94a3b8">Sent an attachment</text>
      </g>
    </g>

    <!-- Center Phone: Creator Reel UI -->
    <g transform="translate(528, 65)" filter="url(#shadowSocial)">
      <rect width="320" height="640" rx="48" fill="url(#purplePhone)" stroke="#a855f7" stroke-width="4"/>
      <rect x="14" y="14" width="292" height="612" rx="38" fill="#120722"/>
      <rect x="100" y="24" width="92" height="22" rx="11" fill="#000000"/>

      <rect x="14" y="55" width="292" height="480" fill="#1a0b30"/>
      <circle cx="160" cy="220" r="90" fill="#d946ef" opacity="0.3"/>
      <circle cx="160" cy="210" r="55" fill="#f43f5e"/>
      <text x="160" y="225" font-size="44" text-anchor="middle">👩‍🎤</text>

      <g transform="translate(260, 260)">
        <circle cx="14" cy="14" r="18" fill="rgba(0,0,0,0.5)"/>
        <text x="14" y="20" font-size="16" text-anchor="middle">❤️</text>
        <text x="14" y="42" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#ffffff" text-anchor="middle">128k</text>

        <circle cx="14" cy="74" r="18" fill="rgba(0,0,0,0.5)"/>
        <text x="14" y="80" font-size="16" text-anchor="middle">💬</text>
        <text x="14" y="102" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#ffffff" text-anchor="middle">3.4k</text>

        <circle cx="14" cy="134" r="18" fill="rgba(0,0,0,0.5)"/>
        <text x="14" y="140" font-size="16" text-anchor="middle">↗️</text>
        <text x="14" y="162" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#ffffff" text-anchor="middle">Share</text>
      </g>

      <g transform="translate(30, 430)">
        <text x="0" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="15" fill="#ffffff">@zara_creates</text>
        <rect x="120" y="6" width="60" height="20" rx="10" fill="#a855f7"/>
        <text x="150" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="10" fill="#ffffff" text-anchor="middle">Follow</text>
        <text x="0" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#e2e8f0">Building modern mobile apps with Flutter 🚀</text>
        <text x="0" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11" fill="#c084fc">#developer #tech #coding</text>
      </g>

      <rect x="14" y="555" width="292" height="71" fill="#090310" stroke="#25103c"/>
      <text x="50" y="598" font-size="20" text-anchor="middle">🏠</text>
      <text x="115" y="598" font-size="20" text-anchor="middle">🔍</text>
      <circle cx="160" cy="590" r="18" fill="#a855f7"/>
      <text x="160" y="597" font-size="22" fill="#ffffff" text-anchor="middle">+</text>
      <text x="215" y="598" font-size="20" text-anchor="middle">🎬</text>
      <text x="270" y="598" font-size="20" text-anchor="middle">👤</text>
    </g>

    <!-- Right Phone: Live Stream -->
    <g transform="translate(916, 110) rotate(6)" filter="url(#shadowSocial)">
      <rect width="280" height="580" rx="42" fill="url(#purplePhone)" stroke="#6b21a8" stroke-width="4"/>
      <rect x="12" y="12" width="256" height="556" rx="32" fill="#150826"/>
      <rect x="85" y="20" width="86" height="18" rx="9" fill="#000000"/>
      <rect x="30" y="50" width="56" height="24" rx="6" fill="#ef4444"/>
      <text x="58" y="67" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#ffffff" text-anchor="middle">LIVE</text>
      <text x="96" y="67" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#ffffff">👁 18.5k</text>
      <g transform="translate(25, 340)">
        <rect width="210" height="36" rx="10" fill="rgba(0,0,0,0.6)"/>
        <text x="15" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#a855f7">Alex: <tspan fill="#ffffff">This UI is amazing! ❤️</tspan></text>
      </g>
      <g transform="translate(25, 385)">
        <rect width="210" height="36" rx="10" fill="rgba(0,0,0,0.6)"/>
        <text x="15" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#38bdf8">DevGuru: <tspan fill="#ffffff">Clean architecture 🔥</tspan></text>
      </g>
      <g transform="translate(25, 430)">
        <rect width="210" height="36" rx="10" fill="rgba(0,0,0,0.6)"/>
        <text x="15" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#4ade80">Sara: <tspan fill="#ffffff">Sending stars! ⭐⭐⭐</tspan></text>
      </g>
    </g>
  </svg>`;

  await sharp(Buffer.from(svg))
    .png()
    .toFile('public/assets/projects/social-app-hd.png');
  console.log("Social App HD generated!");
}

async function createHealthcareAppHD() {
  const svg = `
  <svg width="1376" height="768" viewBox="0 0 1376 768" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="healthBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0c2d48"/>
        <stop offset="50%" stop-color="#145da0"/>
        <stop offset="100%" stop-color="#0b2239"/>
      </linearGradient>
      <linearGradient id="bluePhone" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e3a5f"/>
        <stop offset="100%" stop-color="#0d1b2a"/>
      </linearGradient>
      <filter id="shadowHealth" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="25" stdDeviation="30" flood-color="#000000" flood-opacity="0.6"/>
      </filter>
    </defs>
    <rect width="1376" height="768" fill="url(#healthBg)"/>
    <circle cx="688" cy="384" r="320" fill="#38bdf8" opacity="0.2" filter="blur(80px)"/>
    <circle cx="200" cy="500" r="280" fill="#0284c7" opacity="0.18" filter="blur(70px)"/>

    <!-- Left Phone: Vital Stats -->
    <g transform="translate(180, 110) rotate(-6)" filter="url(#shadowHealth)">
      <rect width="280" height="580" rx="42" fill="url(#bluePhone)" stroke="#38bdf8" stroke-width="4"/>
      <rect x="12" y="12" width="256" height="556" rx="32" fill="#f0f9ff"/>
      <rect x="85" y="20" width="86" height="18" rx="9" fill="#0f172a"/>
      <text x="30" y="70" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="18" fill="#0369a1">Vital Stats</text>
      
      <rect x="25" y="90" width="230" height="95" rx="16" fill="#ffffff" stroke="#bae6fd"/>
      <circle cx="65" cy="138" r="24" fill="#fee2e2"/>
      <text x="65" y="145" font-size="20" text-anchor="middle">❤️</text>
      <text x="105" y="130" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" fill="#0f172a">Heart Rate</text>
      <text x="105" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="18" fill="#ef4444">74 <tspan font-size="12" font-weight="500" fill="#64748b">BPM</tspan></text>

      <rect x="25" y="200" width="230" height="95" rx="16" fill="#ffffff" stroke="#bae6fd"/>
      <circle cx="65" cy="248" r="24" fill="#e0f2fe"/>
      <text x="65" y="255" font-size="20" text-anchor="middle">🩸</text>
      <text x="105" y="238" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" fill="#0f172a">Blood Pressure</text>
      <text x="105" y="260" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="18" fill="#0284c7">120/80 <tspan font-size="12" font-weight="500" fill="#64748b">mmHg</tspan></text>
    </g>

    <!-- Center Phone: Doctor Profile -->
    <g transform="translate(528, 65)" filter="url(#shadowHealth)">
      <rect width="320" height="640" rx="48" fill="url(#bluePhone)" stroke="#0284c7" stroke-width="4"/>
      <rect x="14" y="14" width="292" height="612" rx="38" fill="#f8fafc"/>
      <rect x="100" y="24" width="92" height="22" rx="11" fill="#000000"/>
      <text x="30" y="78" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="20" fill="#0c4a6e">Find a Doctor</text>
      <rect x="25" y="95" width="242" height="40" rx="12" fill="#e0f2fe"/>
      <text x="45" y="120" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#0284c7">🔍  Search specialists, clinics...</text>

      <rect x="25" y="150" width="242" height="190" rx="20" fill="#ffffff" stroke="#bae6fd"/>
      <circle cx="80" cy="205" r="34" fill="#e0f2fe"/>
      <text x="80" y="215" font-size="34" text-anchor="middle">👨‍⚕️</text>
      <text x="130" y="195" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="15" fill="#0f172a">Dr. David Miller</text>
      <text x="130" y="213" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#0284c7">Cardiologist</text>
      <text x="130" y="232" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" fill="#f59e0b">★ 4.9 (520 reviews)</text>

      <rect x="40" y="260" width="46" height="42" rx="8" fill="#e0f2fe"/>
      <text x="63" y="278" font-size="10" font-weight="700" fill="#0369a1" text-anchor="middle">MON</text>
      <text x="63" y="295" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">12</text>

      <rect x="94" y="260" width="46" height="42" rx="8" fill="#0284c7"/>
      <text x="117" y="278" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">TUE</text>
      <text x="117" y="295" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">13</text>

      <rect x="148" y="260" width="46" height="42" rx="8" fill="#e0f2fe"/>
      <text x="171" y="278" font-size="10" font-weight="700" fill="#0369a1" text-anchor="middle">WED</text>
      <text x="171" y="295" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">14</text>

      <rect x="202" y="260" width="46" height="42" rx="8" fill="#e0f2fe"/>
      <text x="225" y="278" font-size="10" font-weight="700" fill="#0369a1" text-anchor="middle">THU</text>
      <text x="225" y="295" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">15</text>

      <rect x="25" y="360" width="242" height="48" rx="14" fill="#0284c7"/>
      <text x="146" y="390" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" fill="#ffffff" text-anchor="middle">Book Appointment</text>
    </g>

    <!-- Right Phone: Telehealth Video Call -->
    <g transform="translate(916, 110) rotate(6)" filter="url(#shadowHealth)">
      <rect width="280" height="580" rx="42" fill="url(#bluePhone)" stroke="#38bdf8" stroke-width="4"/>
      <rect x="12" y="12" width="256" height="556" rx="32" fill="#0f172a"/>
      <rect x="85" y="20" width="86" height="18" rx="9" fill="#000000"/>
      <rect x="25" y="55" width="230" height="340" rx="20" fill="#1e293b"/>
      <circle cx="140" cy="180" r="60" fill="#0284c7" opacity="0.3"/>
      <text x="140" y="195" font-size="64" text-anchor="middle">👨‍⚕️</text>
      <rect x="35" y="70" width="70" height="24" rx="6" fill="rgba(0,0,0,0.6)"/>
      <text x="70" y="86" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" fill="#4ade80" text-anchor="middle">● 14:28</text>
      
      <circle cx="85" cy="430" r="22" fill="#334155"/>
      <text x="85" y="437" font-size="16" text-anchor="middle">🎤</text>
      <circle cx="140" cy="430" r="24" fill="#ef4444"/>
      <text x="140" y="437" font-size="18" text-anchor="middle">📞</text>
      <circle cx="195" cy="430" r="22" fill="#334155"/>
      <text x="195" y="437" font-size="16" text-anchor="middle">📹</text>
    </g>
  </svg>`;

  await sharp(Buffer.from(svg))
    .png()
    .toFile('public/assets/projects/healthcare-app-hd.png');
  console.log("Healthcare App HD generated!");
}

async function createAvatarsAndLogos() {
  // Andrew
  const andrewSvg = `
  <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="aBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e293b"/>
        <stop offset="100%" stop-color="#0f172a"/>
      </linearGradient>
    </defs>
    <rect width="512" height="512" rx="256" fill="url(#aBg)"/>
    <circle cx="256" cy="210" r="110" fill="#e2e8f0"/>
    <path d="M140 450 C 140 330, 372 330, 372 450 Z" fill="#3b82f6"/>
    <polygon points="256,360 236,440 276,440" fill="#1e40af"/>
    <path d="M150 190 Q 256 120 362 190 Q 360 100 256 90 Q 150 100 150 190 Z" fill="#1e293b"/>
    <path d="M190 230 C 190 310, 322 310, 322 230 C 290 280, 220 280, 190 230 Z" fill="#1e293b"/>
  </svg>`;
  await sharp(Buffer.from(andrewSvg)).png().toFile('public/assets/testimonials/andrew-hd.png');

  // Stephanie
  const stephanieSvg = `
  <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b1d60"/>
        <stop offset="100%" stop-color="#190a2c"/>
      </linearGradient>
    </defs>
    <rect width="512" height="512" rx="256" fill="url(#sBg)"/>
    <circle cx="256" cy="205" r="105" fill="#fde68a"/>
    <path d="M140 450 C 140 335, 372 335, 372 450 Z" fill="#a855f7"/>
    <path d="M140 180 C 120 320, 170 380, 170 380 C 160 220, 210 100, 256 100 C 302 100, 352 220, 342 380 C 342 380, 392 320, 372 180 C 352 80, 160 80, 140 180 Z" fill="#451a03"/>
  </svg>`;
  await sharp(Buffer.from(stephanieSvg)).png().toFile('public/assets/testimonials/stephanie-hd.png');

  // International Client
  const intlSvg = `
  <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f2b3e"/>
        <stop offset="100%" stop-color="#071520"/>
      </linearGradient>
    </defs>
    <rect width="512" height="512" rx="256" fill="url(#iBg)"/>
    <circle cx="256" cy="205" r="105" fill="#fecaca"/>
    <path d="M140 450 C 140 335, 372 335, 372 450 Z" fill="#0284c7"/>
    <path d="M150 190 C 130 330, 175 360, 175 360 C 170 240, 205 110, 256 110 C 307 110, 342 240, 337 360 C 337 360, 382 330, 362 190 C 345 80, 167 80, 150 190 Z" fill="#1c1917"/>
  </svg>`;
  await sharp(Buffer.from(intlSvg)).png().toFile('public/assets/testimonials/international-hd.png');

  // Elluminati Inc. Logo
  const elluminatiSvg = `
  <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="elGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#15803d"/>
        <stop offset="100%" stop-color="#22c55e"/>
      </linearGradient>
    </defs>
    <rect width="512" height="512" rx="256" fill="#091b11"/>
    <circle cx="256" cy="256" r="236" fill="none" stroke="url(#elGrad)" stroke-width="16" opacity="0.6"/>
    <path d="M140 360 L140 180 L256 300 L372 180 L372 360" fill="none" stroke="url(#elGrad)" stroke-width="42" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="256" cy="150" r="22" fill="#22c55e"/>
  </svg>`;
  await sharp(Buffer.from(elluminatiSvg)).png().toFile('public/assets/logos/elluminati-hd.png');

  // Empire Tech Logo
  const empireSvg = `
  <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="empGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0284c7"/>
        <stop offset="100%" stop-color="#38bdf8"/>
      </linearGradient>
    </defs>
    <rect width="512" height="512" rx="256" fill="#071b2c"/>
    <circle cx="256" cy="256" r="236" fill="none" stroke="url(#empGrad)" stroke-width="16" opacity="0.6"/>
    <path d="M130 256 L190 256 L220 170 L260 342 L290 210 L320 256 L382 256" fill="none" stroke="url(#empGrad)" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  await sharp(Buffer.from(empireSvg)).png().toFile('public/assets/logos/empire-tech-hd.png');

  console.log("All Avatars & Logos HD generated!");
}

async function run() {
  await createSuperAppHD();
  await createSocialAppHD();
  await createHealthcareAppHD();
  await createAvatarsAndLogos();
}

run();
