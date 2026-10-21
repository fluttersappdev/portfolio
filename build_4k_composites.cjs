const sharp = require('sharp');
const fs = require('fs');
const https = require('https');

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadImage(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log("Downloading curated 4K photo assets...");
  await downloadImage("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=85", "scratch/andrew.jpg");
  await downloadImage("https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=85", "scratch/stephanie.jpg");
  await downloadImage("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=85", "scratch/international.jpg");
  
  await downloadImage("https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=85", "scratch/creator.jpg");
  await downloadImage("https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=85", "scratch/doctor.jpg");
  await downloadImage("https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=85", "scratch/food.jpg");

  console.log("All raw photos downloaded!");

  // 1. Process Testimonial Avatars into 512x512 rounded HD
  await sharp("scratch/andrew.jpg").resize(512, 512).toFile("public/assets/testimonials/andrew-hd.png");
  await sharp("scratch/stephanie.jpg").resize(512, 512).toFile("public/assets/testimonials/stephanie-hd.png");
  await sharp("scratch/international.jpg").resize(512, 512).toFile("public/assets/testimonials/international-hd.png");
  console.log("Testimonial avatars processed!");

  // 2. Build Social Media 4K Composite
  // Resize creator photo to fit center phone screen
  await sharp("scratch/creator.jpg").resize(340, 520).toFile("scratch/creator_resized.png");
  const creatorBase64 = fs.readFileSync("scratch/creator_resized.png").toString('base64');

  const socialSvg = `
  <svg width="1376" height="768" viewBox="0 0 1376 768" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#140727"/>
        <stop offset="50%" stop-color="#240c42"/>
        <stop offset="100%" stop-color="#0b0317"/>
      </linearGradient>
      <linearGradient id="pBorder" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#a855f7"/>
        <stop offset="100%" stop-color="#4c1d95"/>
      </linearGradient>
      <filter id="glowS" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="20" stdDeviation="30" flood-color="#000000" flood-opacity="0.8"/>
      </filter>
      <clipPath id="centerPhoneClip">
        <rect x="542" y="79" width="292" height="612" rx="38" />
      </clipPath>
    </defs>
    <!-- Background -->
    <rect width="1376" height="768" fill="url(#sBg)"/>
    <circle cx="688" cy="384" r="350" fill="#a855f7" opacity="0.22" filter="blur(90px)"/>
    <circle cx="1150" cy="200" r="280" fill="#ec4899" opacity="0.18" filter="blur(80px)"/>

    <!-- Left Phone: Direct Messages & Stories -->
    <g transform="translate(180, 110) rotate(-6)" filter="url(#glowS)">
      <rect width="280" height="580" rx="42" fill="#180b2d" stroke="url(#pBorder)" stroke-width="4"/>
      <rect x="12" y="12" width="256" height="556" rx="32" fill="#0d041a"/>
      <rect x="85" y="20" width="86" height="18" rx="9" fill="#000000"/>
      <text x="30" y="70" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="18" fill="#ffffff">Stories</text>
      <!-- Stories bubbles -->
      <circle cx="45" cy="115" r="24" fill="none" stroke="#d946ef" stroke-width="3"/>
      <circle cx="45" cy="115" r="20" fill="#6b21a8"/>
      <circle cx="105" cy="115" r="24" fill="none" stroke="#d946ef" stroke-width="3"/>
      <circle cx="105" cy="115" r="20" fill="#3b82f6"/>
      <circle cx="165" cy="115" r="24" fill="none" stroke="#d946ef" stroke-width="3"/>
      <circle cx="165" cy="115" r="20" fill="#ec4899"/>
      <circle cx="225" cy="115" r="24" fill="none" stroke="#d946ef" stroke-width="3"/>
      <circle cx="225" cy="115" r="20" fill="#f59e0b"/>

      <text x="30" y="180" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="16" fill="#ffffff">Messages</text>
      <rect x="25" y="200" width="230" height="70" rx="16" fill="#1c0e35" stroke="#3b1d60"/>
      <circle cx="55" cy="235" r="18" fill="#ec4899"/>
      <text x="85" y="230" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13" fill="#ffffff">Sarah Miller</text>
      <text x="85" y="250" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#c084fc">Loved your video! 🔥</text>

      <rect x="25" y="285" width="230" height="70" rx="16" fill="#1c0e35" stroke="#3b1d60"/>
      <circle cx="55" cy="320" r="18" fill="#38bdf8"/>
      <text x="85" y="315" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13" fill="#ffffff">David Chen</text>
      <text x="85" y="335" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#94a3b8">Let's collaborate!</text>

      <rect x="25" y="370" width="230" height="70" rx="16" fill="#1c0e35" stroke="#3b1d60"/>
      <circle cx="55" cy="405" r="18" fill="#a855f7"/>
      <text x="85" y="400" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13" fill="#ffffff">Emma Watson</text>
      <text x="85" y="420" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#94a3b8">Sent a voice note</text>
    </g>

    <!-- Center Phone: Real Photo Reel UI -->
    <g filter="url(#glowS)">
      <rect x="528" y="65" width="320" height="640" rx="48" fill="#1e0c38" stroke="url(#pBorder)" stroke-width="4"/>
      
      <!-- Embedded Photo -->
      <g clip-path="url(#centerPhoneClip)">
        <image href="data:image/png;base64,${creatorBase64}" x="528" y="100" width="320" height="520" preserveAspectRatio="xMidYMid slice" />
        <!-- Top and Bottom Vignette Overlays -->
        <rect x="528" y="65" width="320" height="140" fill="url(#sBg)" opacity="0.6"/>
        <rect x="528" y="460" width="320" height="245" fill="url(#sBg)" opacity="0.85"/>
      </g>
      
      <!-- Dynamic Island -->
      <rect x="642" y="89" width="92" height="22" rx="11" fill="#000000"/>

      <!-- Creator Overlay info -->
      <text x="560" y="555" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="16" fill="#ffffff">@zara_creates</text>
      <rect x="690" y="538" width="64" height="24" rx="12" fill="#a855f7"/>
      <text x="722" y="554" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" fill="#ffffff" text-anchor="middle">Follow</text>
      <text x="560" y="582" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#f1f5f9">Building mobile apps with Flutter &amp; AI 🚀</text>
      <text x="560" y="602" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="11" fill="#d8b4fe">#flutter #developer #tech</text>

      <!-- Engagement actions -->
      <g transform="translate(775, 340)">
        <circle cx="16" cy="16" r="18" fill="rgba(0,0,0,0.5)"/>
        <path d="M16 23 L9 16 C5 12, 10 7, 16 12 C22 7, 27 12, 23 16 Z" fill="#ef4444"/>
        <text x="16" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="10" fill="#ffffff" text-anchor="middle">128K</text>

        <circle cx="16" cy="80" r="18" fill="rgba(0,0,0,0.5)"/>
        <circle cx="16" cy="80" r="8" fill="none" stroke="#ffffff" stroke-width="2"/>
        <text x="16" y="108" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="10" fill="#ffffff" text-anchor="middle">4.2K</text>

        <circle cx="16" cy="144" r="18" fill="rgba(0,0,0,0.5)"/>
        <path d="M10 144 L20 138 L20 150 Z" fill="#ffffff"/>
        <text x="16" y="172" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="10" fill="#ffffff" text-anchor="middle">Share</text>
      </g>
    </g>

    <!-- Right Phone: Live Stream -->
    <g transform="translate(916, 110) rotate(6)" filter="url(#glowS)">
      <rect width="280" height="580" rx="42" fill="#180b2d" stroke="url(#pBorder)" stroke-width="4"/>
      <rect x="12" y="12" width="256" height="556" rx="32" fill="#0d041a"/>
      <rect x="85" y="20" width="86" height="18" rx="9" fill="#000000"/>
      <rect x="30" y="55" width="58" height="24" rx="6" fill="#ef4444"/>
      <text x="59" y="72" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="11" fill="#ffffff" text-anchor="middle">LIVE</text>
      <text x="100" y="72" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="12" fill="#ffffff">👁 24.5K</text>

      <g transform="translate(25, 330)">
        <rect width="210" height="40" rx="12" fill="rgba(255,255,255,0.08)"/>
        <text x="15" y="25" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#c084fc">Alex: <tspan fill="#ffffff">This UI looks insane! 🔥</tspan></text>
      </g>
      <g transform="translate(25, 380)">
        <rect width="210" height="40" rx="12" fill="rgba(255,255,255,0.08)"/>
        <text x="15" y="25" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#38bdf8">DevGuru: <tspan fill="#ffffff">Top tier architecture ❤️</tspan></text>
      </g>
      <g transform="translate(25, 430)">
        <rect width="210" height="40" rx="12" fill="rgba(255,255,255,0.08)"/>
        <text x="15" y="25" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#4ade80">Sara: <tspan fill="#ffffff">Sent $50 super chat! ⭐</tspan></text>
      </g>
    </g>
  </svg>`;

  await sharp(Buffer.from(socialSvg)).png().toFile('public/assets/projects/social-app-hd.png');
  console.log("Social App 4K Composite generated!");

  // 3. Build Healthcare 4K Composite
  await sharp("scratch/doctor.jpg").resize(340, 420).toFile("scratch/doctor_resized.png");
  const doctorBase64 = fs.readFileSync("scratch/doctor_resized.png").toString('base64');

  const healthSvg = `
  <svg width="1376" height="768" viewBox="0 0 1376 768" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#071e3d"/>
        <stop offset="50%" stop-color="#113f67"/>
        <stop offset="100%" stop-color="#051329"/>
      </linearGradient>
      <linearGradient id="hBorder" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38bdf8"/>
        <stop offset="100%" stop-color="#0284c7"/>
      </linearGradient>
      <filter id="glowH" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="20" stdDeviation="30" flood-color="#000000" flood-opacity="0.75"/>
      </filter>
      <clipPath id="docPhotoClip">
        <rect x="553" y="160" width="90" height="90" rx="20"/>
      </clipPath>
      <clipPath id="videoCallClip">
        <rect x="941" y="180" width="206" height="240" rx="20"/>
      </clipPath>
    </defs>
    <rect width="1376" height="768" fill="url(#hBg)"/>
    <circle cx="688" cy="384" r="350" fill="#0284c7" opacity="0.25" filter="blur(90px)"/>
    <circle cx="200" cy="500" r="280" fill="#38bdf8" opacity="0.2" filter="blur(80px)"/>

    <!-- Left Phone: Health Stats -->
    <g transform="translate(180, 110) rotate(-6)" filter="url(#glowH)">
      <rect width="280" height="580" rx="42" fill="#0c2340" stroke="url(#hBorder)" stroke-width="4"/>
      <rect x="12" y="12" width="256" height="556" rx="32" fill="#f0f9ff"/>
      <rect x="85" y="20" width="86" height="18" rx="9" fill="#0f172a"/>
      <text x="30" y="70" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="18" fill="#0369a1">Health Portal</text>
      
      <rect x="25" y="90" width="230" height="100" rx="18" fill="#ffffff" stroke="#bae6fd"/>
      <circle cx="65" cy="140" r="24" fill="#fee2e2"/>
      <path d="M65 148 L58 141 C54 137, 58 132, 65 136 C72 132, 76 137, 72 141 Z" fill="#ef4444"/>
      <text x="105" y="132" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" fill="#0f172a">Heart Rate</text>
      <text x="105" y="156" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="20" fill="#ef4444">72 <tspan font-size="12" font-weight="500" fill="#64748b">BPM</tspan></text>

      <rect x="25" y="210" width="230" height="100" rx="18" fill="#ffffff" stroke="#bae6fd"/>
      <circle cx="65" cy="260" r="24" fill="#e0f2fe"/>
      <text x="105" y="252" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" fill="#0f172a">Blood Pressure</text>
      <text x="105" y="276" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="20" fill="#0284c7">120/80 <tspan font-size="12" font-weight="500" fill="#64748b">mmHg</tspan></text>

      <rect x="25" y="330" width="230" height="100" rx="18" fill="#ffffff" stroke="#bae6fd"/>
      <circle cx="65" cy="380" r="24" fill="#dcfce7"/>
      <text x="105" y="372" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" fill="#0f172a">Sleep Cycle</text>
      <text x="105" y="396" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="20" fill="#15803d">8.2 <tspan font-size="12" font-weight="500" fill="#64748b">Hours</tspan></text>
    </g>

    <!-- Center Phone: Doctor Profile & Booking -->
    <g filter="url(#glowH)">
      <rect x="528" y="65" width="320" height="640" rx="48" fill="#0c2340" stroke="url(#hBorder)" stroke-width="4"/>
      <rect x="14" y="14" width="292" height="612" rx="38" fill="#f8fafc"/>
      <rect x="642" y="89" width="92" height="22" rx="11" fill="#000000"/>
      <text x="558" y="140" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="20" fill="#0c4a6e">Doctor Profile</text>

      <!-- Doctor Card -->
      <rect x="548" y="150" width="252" height="220" rx="22" fill="#ffffff" stroke="#bae6fd"/>
      <image href="data:image/png;base64,${doctorBase64}" x="553" y="160" width="90" height="90" clip-path="url(#docPhotoClip)" preserveAspectRatio="xMidYMid slice" />
      <text x="655" y="188" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="15" fill="#0f172a">Dr. David Miller</text>
      <text x="655" y="208" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="12" fill="#0284c7">Senior Cardiologist</text>
      <text x="655" y="228" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" fill="#f59e0b">★ 4.9 (420 reviews)</text>

      <!-- Date selector -->
      <g transform="translate(560, 270)">
        <rect x="0" y="0" width="48" height="46" rx="10" fill="#e0f2fe"/>
        <text x="24" y="20" font-size="10" font-weight="700" fill="#0369a1" text-anchor="middle">MON</text>
        <text x="24" y="38" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">12</text>

        <rect x="58" y="0" width="48" height="46" rx="10" fill="#0284c7"/>
        <text x="82" y="20" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">TUE</text>
        <text x="82" y="38" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">13</text>

        <rect x="116" y="0" width="48" height="46" rx="10" fill="#e0f2fe"/>
        <text x="140" y="20" font-size="10" font-weight="700" fill="#0369a1" text-anchor="middle">WED</text>
        <text x="140" y="38" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">14</text>

        <rect x="174" y="0" width="48" height="46" rx="10" fill="#e0f2fe"/>
        <text x="198" y="20" font-size="10" font-weight="700" fill="#0369a1" text-anchor="middle">THU</text>
        <text x="198" y="38" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">15</text>
      </g>

      <!-- Booking CTA -->
      <rect x="548" y="390" width="252" height="50" rx="16" fill="#0284c7"/>
      <text x="674" y="421" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" fill="#ffffff" text-anchor="middle">Book Appointment</text>
    </g>

    <!-- Right Phone: Telehealth Video Call with Doctor photo -->
    <g transform="translate(916, 110) rotate(6)" filter="url(#glowH)">
      <rect width="280" height="580" rx="42" fill="#0c2340" stroke="url(#hBorder)" stroke-width="4"/>
      <rect x="12" y="12" width="256" height="556" rx="32" fill="#0f172a"/>
      <rect x="85" y="20" width="86" height="18" rx="9" fill="#000000"/>
      
      <g clip-path="url(#videoCallClip)">
        <image href="data:image/png;base64,${doctorBase64}" x="941" y="180" width="206" height="240" preserveAspectRatio="xMidYMid slice"/>
        <rect x="941" y="180" width="206" height="50" fill="#000000" opacity="0.4"/>
      </g>
      <rect x="955" y="195" width="60" height="22" rx="6" fill="#22c55e"/>
      <text x="985" y="210" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="10" fill="#ffffff" text-anchor="middle">● Live HD</text>

      <!-- Call controls -->
      <circle cx="980" cy="460" r="22" fill="#334155"/>
      <circle cx="1040" cy="460" r="26" fill="#ef4444"/>
      <circle cx="1100" cy="460" r="22" fill="#334155"/>
    </g>
  </svg>`;

  await sharp(Buffer.from(healthSvg)).png().toFile('public/assets/projects/healthcare-app-hd.png');
  console.log("Healthcare App 4K Composite generated!");
}

run();
