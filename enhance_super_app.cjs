const sharp = require('sharp');
const fs = require('fs');

async function enhanceSuperApp() {
  await sharp("scratch/food.jpg").resize(256, 160).toFile("scratch/food_resized.png");
  const foodBase64 = fs.readFileSync("scratch/food_resized.png").toString("base64");

  const svg = `
  <svg width="1376" height="768" viewBox="0 0 1376 768" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0a2618"/>
        <stop offset="50%" stop-color="#144d2d"/>
        <stop offset="100%" stop-color="#071a10"/>
      </linearGradient>
      <linearGradient id="borderGreen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#22c55e"/>
        <stop offset="100%" stop-color="#15803d"/>
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="20" stdDeviation="30" flood-color="#000000" flood-opacity="0.75"/>
      </filter>
      <clipPath id="foodClip">
        <rect x="548" y="110" width="252" height="130" rx="18"/>
      </clipPath>
    </defs>
    <rect width="1376" height="768" fill="url(#bg)"/>
    <circle cx="688" cy="384" r="350" fill="#22c55e" opacity="0.2" filter="blur(90px)"/>
    <circle cx="200" cy="200" r="280" fill="#10b981" opacity="0.18" filter="blur(80px)"/>

    <!-- Left Phone: Food Express -->
    <g transform="translate(180, 110) rotate(-6)" filter="url(#shadow)">
      <rect width="280" height="580" rx="42" fill="#0d281a" stroke="url(#borderGreen)" stroke-width="4"/>
      <rect x="12" y="12" width="256" height="556" rx="32" fill="#f8fafc"/>
      <rect x="85" y="20" width="86" height="18" rx="9" fill="#0f172a"/>
      <text x="30" y="70" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="18" fill="#15803d">Food Delivery</text>

      <rect x="25" y="90" width="230" height="100" rx="18" fill="#ffffff" stroke="#bbf7d0"/>
      <rect x="35" y="100" width="60" height="80" rx="12" fill="#ffedd5"/>
      <circle cx="65" cy="140" r="22" fill="#ea580c"/>
      <text x="105" y="130" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" fill="#0f172a">Italian Gourmet Pizza</text>
      <text x="105" y="150" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="12" fill="#16a34a">★ 4.9 (1.2k+)</text>
      <text x="105" y="170" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="15" fill="#ea580c">$18.99</text>

      <rect x="25" y="205" width="230" height="100" rx="18" fill="#ffffff" stroke="#bbf7d0"/>
      <rect x="35" y="215" width="60" height="80" rx="12" fill="#fef3c7"/>
      <circle cx="65" cy="255" r="22" fill="#d97706"/>
      <text x="105" y="245" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" fill="#0f172a">Classic Smash Burger</text>
      <text x="105" y="265" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="12" fill="#16a34a">★ 4.8 (850)</text>
      <text x="105" y="285" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="15" fill="#ea580c">$14.50</text>

      <rect x="25" y="320" width="230" height="100" rx="18" fill="#ffffff" stroke="#bbf7d0"/>
      <rect x="35" y="330" width="60" height="80" rx="12" fill="#e0f2fe"/>
      <circle cx="65" cy="370" r="22" fill="#0284c7"/>
      <text x="105" y="360" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" fill="#0f172a">Organic Caesar Bowl</text>
      <text x="105" y="380" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="12" fill="#16a34a">★ 4.9 (420)</text>
      <text x="105" y="400" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="15" fill="#ea580c">$12.99</text>
    </g>

    <!-- Center Phone: Multi-Service Super App -->
    <g filter="url(#shadow)">
      <rect x="528" y="65" width="320" height="640" rx="48" fill="#0d281a" stroke="url(#borderGreen)" stroke-width="4"/>
      <rect x="542" y="79" width="292" height="612" rx="38" fill="#f8fafc"/>
      <rect x="642" y="89" width="92" height="22" rx="11" fill="#000000"/>

      <text x="558" y="138" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="20" fill="#0f172a">SuperApp</text>
      <text x="558" y="156" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#64748b">All essential services in one app</text>

      <rect x="548" y="170" width="252" height="40" rx="12" fill="#e2e8f0"/>
      <text x="568" y="195" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#64748b">🔍  Search food, grocery, cabs...</text>

      <!-- 6 Service Tiles Grid -->
      <!-- Row 1 -->
      <rect x="548" y="225" width="76" height="76" rx="18" fill="#dcfce7" stroke="#86efac"/>
      <circle cx="586" cy="255" r="18" fill="#22c55e"/>
      <text x="586" y="295" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" fill="#15803d" text-anchor="middle">Taxi</text>

      <rect x="636" y="225" width="76" height="76" rx="18" fill="#ffedd5" stroke="#fdba74"/>
      <circle cx="674" cy="255" r="18" fill="#f97316"/>
      <text x="674" y="295" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" fill="#c2410c" text-anchor="middle">Food</text>

      <rect x="724" y="225" width="76" height="76" rx="18" fill="#e0e7ff" stroke="#a5b4fc"/>
      <circle cx="762" cy="255" r="18" fill="#6366f1"/>
      <text x="762" y="295" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" fill="#4338ca" text-anchor="middle">Grocery</text>

      <!-- Row 2 -->
      <rect x="548" y="320" width="76" height="76" rx="18" fill="#fce7f3" stroke="#f472b6"/>
      <circle cx="586" cy="350" r="18" fill="#ec4899"/>
      <text x="586" y="390" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" fill="#be185d" text-anchor="middle">Salon</text>

      <rect x="636" y="320" width="76" height="76" rx="18" fill="#e0f2fe" stroke="#7dd3fc"/>
      <circle cx="674" cy="350" r="18" fill="#0284c7"/>
      <text x="674" y="390" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" fill="#0369a1" text-anchor="middle">Cleaning</text>

      <rect x="724" y="320" width="76" height="76" rx="18" fill="#fef3c7" stroke="#fcd34d"/>
      <circle cx="762" cy="350" r="18" fill="#eab308"/>
      <text x="762" y="390" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" fill="#b45309" text-anchor="middle">Courier</text>

      <!-- Promotion Banner with real food photo -->
      <g clip-path="url(#foodClip)">
        <image href="data:image/png;base64,${foodBase64}" x="548" y="420" width="252" height="140" preserveAspectRatio="xMidYMid slice" />
        <rect x="548" y="420" width="252" height="140" fill="#0f172a" opacity="0.6"/>
      </g>
      <text x="568" y="460" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="15" fill="#ffffff">50% OFF FIRST ORDER</text>
      <text x="568" y="480" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="#e2e8f0">Use promo code SUPER50</text>
      <rect x="568" y="495" width="96" height="24" rx="12" fill="#22c55e"/>
      <text x="616" y="511" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="10" fill="#0f172a" text-anchor="middle">Order Now</text>
    </g>

    <!-- Right Phone: Delivery GPS Tracking -->
    <g transform="translate(916, 110) rotate(6)" filter="url(#shadow)">
      <rect width="280" height="580" rx="42" fill="#0d281a" stroke="url(#borderGreen)" stroke-width="4"/>
      <rect x="12" y="12" width="256" height="556" rx="32" fill="#0f172a"/>
      <rect x="85" y="20" width="86" height="18" rx="9" fill="#000000"/>
      <text x="30" y="70" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="18" fill="#ffffff">Live Tracking</text>
      
      <rect x="25" y="90" width="230" height="240" rx="18" fill="#1e293b"/>
      <path d="M50 140 Q 120 180 140 220 T 210 260" stroke="#22c55e" stroke-width="6" fill="none" stroke-linecap="round" stroke-dasharray="6 6"/>
      <circle cx="50" cy="140" r="10" fill="#3b82f6"/>
      <circle cx="210" cy="260" r="12" fill="#22c55e"/>

      <rect x="25" y="345" width="230" height="120" rx="18" fill="#1e293b" stroke="#334155"/>
      <text x="45" y="375" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" fill="#ffffff">Driver on the way</text>
      <text x="45" y="395" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#94a3b8">Estimated arrival: 6 mins</text>
      <rect x="45" y="415" width="190" height="34" rx="10" fill="#22c55e"/>
      <text x="140" y="437" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="12" fill="#0f172a" text-anchor="middle">Call Driver</text>
    </g>
  </svg>`;

  await sharp(Buffer.from(svg)).png().toFile("public/assets/projects/super-app-hd.png");
  console.log("Super App 4K enhanced!");
}

enhanceSuperApp();
