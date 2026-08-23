// Ryker Crosby Carson #23 Hockey Pro Dashboard - Core Reactive Application (v4.2 Robust Edition)
function hockeyApp() {
  return {
    activeTab: 'overview',
    soundMuted: false,
    selectedSeason: '2026-27',
    showAddGameModal: false,
    showAddShotModal: false,
    showAddCheerModal: false,
    showAddWorkoutModal: false,
    showAddBoxingModal: false,
    showAddFishingModal: false,
    showAddOnewheelModal: false,
    showAddHikeModal: false,
    showAdd4x4Modal: false,
    rinkChart: null,

    // Banter Quotes Pool for the Pushup Rivalry
    banterQuotes: {
      rykerLeading: [
        "Ryker: 'Ice legs don't get tired, Dad! You better drop and give me 50!'",
        "Ryker: 'Leading on the ice and leading on the carpet. Keep working, Dad!'",
        "Ryker: 'That BWC conditioning is hitting different. You need a water break, Dad?'",
        "Ryker: 'First round draft conditioning right here! Better set your alarm earlier, Dad!'"
      ],
      dadLeading: [
        "Dad: 'Old school grit beats youth every single time! Catch up, #23!'",
        "Dad: 'Good form only, Crosby! Chest to the floor! You're lagging behind today!'",
        "Dad: 'I built the rink, and I built this pushup lead. Get to work!'",
        "Dad: 'Don't make me call Coach at BWC to tell him you're slacking on your sets!'"
      ],
      tied: [
        "Neck and neck! Carson family pushup glory is on the line today!",
        "Dead heat! Next set of 25 takes the crown!",
        "All tied up! Who wants the Carson Pushup Trophy more tonight?"
      ]
    },

    currentBanter: "Carson pushup rivalry in full swing! Drop and pump some reps!",

    // Player Profile
    player: {
      name: "Ryker Crosby Carson",
      number: 23,
      team: "Burnaby Winter Club (BWC Academy)",
      league: "CSSHL U18 / U17 Prep • NHL Hopeful",
      birthDate: "February 13, 2010",
      age: 17,
      position: "Forward (Center / RW)",
      shoots: "Left / Right",
      height: "6'1\"",
      weight: "188 lbs",
      hometown: "Whistler & Burnaby, BC",
      draftYear: "2027 NHL Entry Draft Eligible",
      avatar: "assets/images/ryker.jpg",
      bwcLogo: "assets/images/bwc_logo.svg",
      eliteProspectsUrl: "https://www.eliteprospects.com/player/866085/ryker-carson"
    },

    // Whistler Live Alpine Webcam Feeds
    whistlerWebcam: {
      locationName: "Whistler Peak & Roundhouse Lodge",
      elevation: "1,850m (6,069 ft)",
      currentPhoto: "assets/images/whistler_webcam.jpg",
      temperature: "19°C (66°F)",
      condition: "Clear Mountain Skies",
      wind: "8 km/h NW",
      lastUpdated: "Live Feed • Refreshed 2 mins ago",
      selectedCam: "roundhouse",
      cams: [
        { id: "roundhouse", name: "Whistler Roundhouse & Peak", elevation: "1,850m", photo: "assets/images/whistler_webcam.jpg" },
        { id: "village", name: "Whistler Village Stroll & Olympic Plaza", elevation: "675m", photo: "assets/images/whistler_webcam.jpg" },
        { id: "peak2peak", name: "Peak 2 Peak Gondola Mountain Span", elevation: "1,869m", photo: "assets/images/whistler_webcam.jpg" },
        { id: "blackcomb", name: "Blackcomb Glacier Alpine High", elevation: "2,284m", photo: "assets/images/whistler_webcam.jpg" }
      ]
    },

    // Complete Elite Athlete Wearable Tracker (Garmin / Apple Watch Ultra style)
    wearable: {
      vo2Max: 62.4,
      vo2Tier: "Superior (Top 1% Class)",
      dailySteps: 18450,
      stepsTarget: 15000,
      activeCalories: 1480,
      totalCalories: 3820,
      peakPowerWatts: 1280,
      avgPowerWatts: 420,
      restingHR: 50,
      maxHR: 198,
      hrvMs: 88,
      spo2Percent: 99,
      sleepScore: 92,
      trainingLoadACWR: 1.14,
      hrZones: [
        { zone: "Zone 1 (Active Recovery <120 bpm)", minutes: 45, pct: 21, color: "bg-blue-400" },
        { zone: "Zone 2 (Aerobic Base 120-145 bpm)", minutes: 90, pct: 42, color: "bg-emerald-400" },
        { zone: "Zone 3 (Tempo Power 145-165 bpm)", minutes: 35, pct: 16, color: "bg-amber-400" },
        { zone: "Zone 4 (Threshold 165-180 bpm)", minutes: 28, pct: 13, color: "bg-orange-500" },
        { zone: "Zone 5 (Anaerobic Sprint >180 bpm)", minutes: 16, pct: 8, color: "bg-rose-500" }
      ]
    },

    // Official Career Season Datasets
    seasonArchives: {
      '2026-27': {
        name: "2026-27 (Current Hopeful Season)",
        gp: 28, goals: 24, assists: 31, pts: 55, hits: 86, plusMinus: 29, pim: 18, sog: 112, foWin: '61.8%', toi: '21:45'
      },
      '2025-26': {
        name: "2025-26 (BWC Academy U17 Prep - CSSHL)",
        gp: 34, goals: 16, assists: 10, pts: 26, hits: 74, plusMinus: 14, pim: 18, sog: 88, foWin: '58.4%', toi: '19:30'
      },
      '2024-25': {
        name: "2024-25 (BWC Academy U15 Prep - CSSHL)",
        gp: 32, goals: 15, assists: 21, pts: 36, hits: 62, plusMinus: 22, pim: 18, sog: 94, foWin: '60.1%', toi: '18:50'
      },
      'career': {
        name: "CSSHL Combined Career Totals",
        gp: 66, goals: 31, assists: 31, pts: 62, hits: 136, plusMinus: 36, pim: 36, sog: 182, foWin: '59.2%', toi: '19:10'
      }
    },

    // Scouting Radar Attributes
    scoutRadar: {
      'Skating Speed': 92,
      'Puck Handling': 90,
      'Hockey IQ': 94,
      'Shot Power': 89,
      'Physicality': 88,
      'Defensive Play': 85,
      'Compete Level': 96
    },

    // Pushup Contest Data
    pushups: {
      todayRyker: 160,
      todayDad: 135,
      targetDaily: 150,
      weekRyker: 1040,
      weekDad: 965,
      allTimeRyker: 4850,
      allTimeDad: 4520,
      streakRyker: 19,
      streakDad: 17,
      history: [
        { date: '8/10', ryker: 150, dad: 150 },
        { date: '8/11', ryker: 175, dad: 140 },
        { date: '8/12', ryker: 160, dad: 160 },
        { date: '8/13', ryker: 200, dad: 180 },
        { date: '8/14', ryker: 150, dad: 165 },
        { date: '8/15', ryker: 180, dad: 170 },
        { date: '8/16', ryker: 165, dad: 150 },
        { date: '8/17', ryker: 190, dad: 175 },
        { date: '8/18', ryker: 150, dad: 150 },
        { date: '8/19', ryker: 175, dad: 160 },
        { date: '8/20', ryker: 210, dad: 190 },
        { date: '8/21', ryker: 180, dad: 170 },
        { date: '8/22', ryker: 165, dad: 155 },
        { date: 'Today', ryker: 160, dad: 135 }
      ]
    },

    // Boxing Tracker
    boxing: {
      coachName: "Sasha Gier",
      coachAge: 60,
      coachTitle: "Veteran Russian Boxing Master of Sport",
      coachPhoto: "assets/images/boxing_glove.svg",
      totalRounds: 58,
      totalSessions: 15,
      streakWeeks: 7,
      avgHeartRate: 172,
      sessions: [
        { id: 1, date: "2026-08-21", title: "Soviet Pendulum Step & Heavy Left Hook", rounds: 6, duration: "50 min", focus: "Hand Speed & 1-2 Hook", coachNotes: "Sasha Gier: 'Khorosho! Turn the back hip completely on the cross. Your hook is snapping like a whip off the skate turn!'" },
        { id: 2, date: "2026-08-18", title: "High-Guard Defense & Inside Body Work", rounds: 6, duration: "45 min", focus: "Sparring / Defense", coachNotes: "Sasha Gier: 'Keep the chin tucked behind the shoulder, Ryker. You absorb zero clean hits when guard stays high!'" },
        { id: 3, date: "2026-08-14", title: "Rotational Power & Liver Shot Tri-sets", rounds: 6, duration: "55 min", focus: "Heavy Bag / Liver Shots", coachNotes: "Sasha Gier: 'Huge rotational power. Translates directly into 90+ mph wrist shot velocity on the ice.'" }
      ]
    },
    // Fishing Tracker Data
    fishing: {
      totalCatches: 26,
      personalBest: "18.5 lb Chinook Salmon (Squamish River)",
      daysOnWater: 18,
      catches: [
        { id: 1, date: "2026-08-20", species: "Coho Salmon", weight: "14.2 lbs", length: "29\"", location: "Cheakamus River, BC", tackle: "Blue Fox Vibrax #4 (Silver/Pink)", result: "Released", notes: "Aggressive strike in the tail-out pool at sunrise. Incredible jump!" },
        { id: 2, date: "2026-08-16", species: "Rainbow Trout", weight: "4.8 lbs", length: "21\"", location: "Alta Lake (Whistler)", tackle: "Kastmaster Spoon 1/4 oz", result: "Released", notes: "Trolling near the north drop-off. Super clean fight on light tackle." },
        { id: 3, date: "2026-08-09", species: "Bull Trout", weight: "7.1 lbs", length: "24\"", location: "Green Lake, Whistler", tackle: "Black & Olive Woolly Bugger", result: "Released", notes: "Deep shelf retrieve. Beast of a native trout." },
        { id: 4, date: "2026-07-28", species: "Chinook (King) Salmon", weight: "18.5 lbs", length: "34\"", location: "Squamish River Estuary", tackle: "Gibbs Koho Spoon", result: "Kept (Dinner for Family!)", notes: "Personal best salmon! Mom cooked an incredible post-game salmon feast for the family!" }
      ]
    },

    // Onewheeling Adventure Tracker Data
    onewheel: {
      odometerKm: 586.4,
      topSpeedKmh: 34.8,
      totalRides: 46,
      batteryHealth: "100%",
      rides: [
        { id: 1, date: "2026-08-22", route: "Whistler Valley Trail → Lost Lake Loop", distance: "18.4 km", topSpeed: "32.1 km/h", duration: "52 min", terrain: "Paved & Dirt Singletrack", rating: 5, notes: "Crisp mountain air, fast flowing turns through the pine trees. Perfect pre-game warmup." },
        { id: 2, date: "2026-08-17", route: "Burnaby Mountain Urban Carve", distance: "14.2 km", topSpeed: "34.8 km/h", duration: "40 min", terrain: "Asphalt & Park Paths", rating: 5, notes: "Hit my new top speed! Carving feels identical to high-speed outside edge hockey turns." },
        { id: 3, date: "2026-08-11", route: "Green Lake Scenic Float", distance: "12.6 km", topSpeed: "29.4 km/h", duration: "38 min", terrain: "Lakeside Trail", rating: 4, notes: "Super smooth cruise with the sunset over Whistler peak." }
      ]
    },

    // Whistler & Sea-to-Sky Hiking Tracker
    hiking: {
      totalElevationM: 14850,
      totalHikes: 28,
      longestTrekKm: 30.0,
      heroPhoto: "assets/images/hiking.jpg",
      hikes: [
        { id: 1, date: "2026-08-19", trail: "Panorama Ridge & Garibaldi Lake", distance: "30.0 km", elevationM: 1520, duration: "7h 45m", companions: "Dad & Aurora", rating: 5, notes: "Astonishing turquoise glacial views. Massive leg endurance test for on-ice stamina." },
        { id: 2, date: "2026-08-10", trail: "High Note Trail (Whistler Peak)", distance: "11.5 km", elevationM: 420, duration: "3h 50m", companions: "Family", rating: 5, notes: "Alpine ridge walk with panoramic mountain vistas. High altitude breathing training." },
        { id: 3, date: "2026-07-22", trail: "Wedgemount Lake & Glacier", distance: "14.0 km", elevationM: 1200, duration: "6h 30m", companions: "Dad & Matthison", rating: 5, notes: "Steep rocky scramble. Quad burner that pays off with the sapphire glacial lake." }
      ]
    },

    // 4x4 Driving Adventure Tracker
    fourByFour: {
      totalOffRoadKm: 1420,
      expeditions: 18,
      rigName: "Custom 4x4 Overland Rig (35\" M/T, Front/Rear Lockers & Winch)",
      heroPhoto: "assets/images/4x4_adventure.jpg",
      adventures: [
        { id: 1, date: "2026-08-21", trail: "Callaghan Valley FSR & Alexander Falls", distance: "45 km", difficulty: "Moderate (FSR & Rocks)", 4wdMode: "4-High / 4-Low", companions: "Dad & Matthison", notes: "River crossings and technical loose rock hill climbs. Clean crawling with zero tire slippage." },
        { id: 2, date: "2026-08-05", trail: "Squamish Valley & Ashlu Creek Trail", distance: "62 km", difficulty: "Technical Crawling", 4wdMode: "4-Low Locked", companions: "Family", notes: "Deep water crossings and boulder garden navigation. Epic camp by the glacial river." },
        { id: 3, date: "2026-07-14", trail: "Hurley River Mountain Pass (Pemberton)", distance: "85 km", difficulty: "Mountain Pass Dirt", 4wdMode: "4-High", companions: "Dad", notes: "High alpine switchbacks over the summit pass. Sunset over the Chilcotin mountain ranges." }
      ]
    },

    // Daily Fitness & Recovery
    fitness: {
      sleepHours: 8.5,
      sleepQuality: 'Deep & Restorative (92%)',
      restingHR: 50,
      recoveryScore: 94,
      waterLiters: 3.25,
      waterTarget: 4.0,
      calories: 3450,
      proteinGrams: 195,
      stretchMinutes: 35,
      habits: [
        { id: 1, text: "Morning dynamic mobility & hip flexors", done: true },
        { id: 2, text: "Daily pushup duel set #1 with Dad", done: true },
        { id: 3, text: "Pre-practice hydration (1.5L before ice)", done: true },
        { id: 4, text: "BWC Academy High-Intensity Ice Session", done: true },
        { id: 5, text: "Off-ice power / Boxing with Sasha Gier", done: true },
        { id: 6, text: "Post-workout recovery shake (50g protein)", done: true },
        { id: 7, text: "Night foam roll & 15-min NHL video breakdown", done: false }
      ],
      workouts: [
        { date: "Today", title: "Lower Body Power & Core", type: "Strength", exercises: "Trap Bar Deadlift (385 lbs 4x5), Box Jumps 36\", Split Squats, Core Plank Tri-set", duration: "65 min", intensity: "High" },
        { date: "Today", title: "BWC On-Ice Shooting & Edges", type: "On-Ice", exercises: "One-timers from the circle, quick release off the rush, transition skating", duration: "75 min", intensity: "Very High" },
        { date: "Yesterday", title: "Soviet Boxing Conditioning with Sasha Gier", type: "Boxing", exercises: "6 rounds mitts + speed bag + Russian rotational core slams", duration: "50 min", intensity: "Very High" }
      ]
    },

    // Family Cheer Squad & Fan Club
    family: [
      { id: "mom", name: "Mom", role: "Team General & Chief Fuel Officer", photo: "assets/images/mom.jpg", tag: "Pre-Game Pasta Queen", quote: "No one outworks my #23! Always proud of your heart, courage, and hockey hustle, Ryker! Win those board battles!", attendance: "28/28 Games", badgeColor: "from-amber-500 to-rose-500", cheersCount: 142 },
      { id: "dad", name: "Dad", role: "Pushup Rival & Home Coach", photo: "assets/images/dad.jpg", tag: "Pushup Showdown Challenger", quote: "Keep your feet moving, drive the net, and shoot low for the rebound! And good luck beating my pushup set tonight, son!", attendance: "28/28 Games", badgeColor: "from-blue-600 to-amber-500", cheersCount: 189 },
      { id: "brillianna", name: "Brillianna", role: "Cheer Captain & Sister #1", photo: "assets/images/brillianna.jpg", tag: "Loudest at the Glass", quote: "Let's go Ryker! Snipe one top shelf! Forever your biggest fan screaming through the glass!", attendance: "26/28 Games", badgeColor: "from-pink-500 to-purple-600", cheersCount: 98 },
      { id: "aurora", name: "Aurora", role: "Superfan Sister & Mountain Companion", photo: "assets/images/aurora.jpg", tag: "BWC Hype Squad", quote: "Goal horn time for #23! Wheel, snipe, and celebrate brother!", attendance: "25/28 Games", badgeColor: "from-purple-500 to-indigo-600", cheersCount: 84 },
      { id: "matthison", name: "Matthison", role: "Brother in Arms & Locker Room Hype", photo: "assets/images/matthison.jpg", tag: "High-Five Specialist", quote: "Light the lamp, Ryker! Lay down some heavy hits and bring home the W!", attendance: "27/28 Games", badgeColor: "from-emerald-500 to-teal-600", cheersCount: 112 },
      { id: "sasha_gier", name: "Sasha Gier", role: "Russian Boxing Master of Sport (60 yrs old)", photo: "assets/images/boxing_glove.svg", tag: "Soviet Boxing Coach", quote: "Fast hands, heavy torque, unbreakable stamina! Turning punch power into 90mph puck snipes!", attendance: "Training Ring", badgeColor: "from-red-600 to-rose-800", cheersCount: 106 },
      { id: "mau", name: "Mau", role: "Locker Room Mascot & Tuxedo Boss", photo: "assets/images/mau.jpg", tag: "Tuxedo Chief (Cat)", quote: "Purring for a hat-trick! Don't forget my victory treats after you score!", attendance: "Home Rink Boss", badgeColor: "from-slate-700 to-slate-900", cheersCount: 67 },
      { id: "atom", name: "Atom", role: "Zoomies Speed Coach (Orange Tabby)", photo: "assets/images/atom.jpg", tag: "3 AM Zoomies Coach (Cat)", quote: "Teaching Ryker maximum skating acceleration! Keep the speed high on the rush!", attendance: "Warmup Coach", badgeColor: "from-amber-600 to-orange-500", cheersCount: 76 },
      { id: "jax", name: "Jax", role: "Puck Hunter & Defensive Cat", photo: "assets/images/jax.jpg", tag: "Puck Pouncer (Cat)", quote: "Always ready to pounce on loose pucks and provide championship chin scratches!", attendance: "Game Day Napper", badgeColor: "from-cyan-600 to-blue-700", cheersCount: 59 }
    ],

    // Cheer Wall
    cheerWall: [
      { id: 1, author: "Mom", avatar: "assets/images/mom.jpg", message: "Packed the extra electrolyte bottles and pre-cooked pasta for tonight's game vs St. George's! Go get 'em Ryker! ❤️🏒", time: "2 hours ago", likes: 8 },
      { id: 2, author: "Dad", avatar: "assets/images/dad.jpg", message: "Just did 50 pushups between meetings. Ball is in your court, #23! Let's see you match it before skate!", time: "4 hours ago", likes: 12 },
      { id: 3, author: "Sasha Gier", avatar: "assets/images/boxing_glove.svg", message: "Great lateral footwork yesterday Ryker! Keep that defensive slip sharp tonight on the boards!", time: "5 hours ago", likes: 14 },
      { id: 4, author: "Matthison", avatar: "assets/images/matthison.jpg", message: "That one-timer you sniped in the 3rd period last Saturday was filthy! Do it again tonight!", time: "Yesterday", likes: 15 },
      { id: 5, author: "Brillianna", avatar: "assets/images/brillianna.jpg", message: "Sign is painted and ready for the weekend showcase! BWC BRUINS ALL THE WAY!", time: "Yesterday", likes: 9 }
    ],

    // Games Logs
    games: [
      { id: 1, date: "2026-08-22", opponent: "Delta Hockey Academy", result: "W 5-2", goals: 2, assists: 2, hits: 5, plusMinus: 3, pim: 0, sog: 6, toi: "22:15", stars: "1st Star" },
      { id: 2, date: "2026-08-19", opponent: "St. George's School U18", result: "W 4-3 (OT)", goals: 1, assists: 2, hits: 4, plusMinus: 2, pim: 2, sog: 5, toi: "23:40", stars: "1st Star (OT Winner)" },
      { id: 3, date: "2026-08-15", opponent: "Yale Hockey Academy", result: "W 6-1", goals: 3, assists: 1, hits: 3, plusMinus: 4, pim: 0, sog: 7, toi: "19:50", stars: "1st Star (Hat Trick)" },
      { id: 4, date: "2026-08-12", opponent: "Northern Alberta Xtreme", result: "L 3-4", goals: 1, assists: 1, hits: 6, plusMinus: 0, pim: 4, sog: 4, toi: "21:10", stars: "2nd Star" },
      { id: 5, date: "2026-08-08", opponent: "RINK Hockey Academy Kelowna", result: "W 4-2", goals: 2, assists: 0, hits: 4, plusMinus: 2, pim: 0, sog: 5, toi: "20:30", stars: "1st Star" },
      { id: 6, date: "2026-08-04", opponent: "Edge School U18 Prep", result: "W 3-2", goals: 1, assists: 1, hits: 3, plusMinus: 1, pim: 2, sog: 4, toi: "21:45", stars: "3rd Star" },
      { id: 7, date: "2026-07-30", opponent: "Okanagan Hockey Academy", result: "W 5-3", goals: 1, assists: 3, hits: 4, plusMinus: 3, pim: 0, sog: 5, toi: "22:00", stars: "1st Star" },
      { id: 8, date: "2026-07-25", opponent: "Prairie Hockey Academy", result: "W 4-1", goals: 2, assists: 1, hits: 5, plusMinus: 2, pim: 0, sog: 6, toi: "20:15", stars: "1st Star" },
      { id: 9, date: "2026-07-20", opponent: "Calgary International Hockey", result: "W 6-2", goals: 2, assists: 2, hits: 3, plusMinus: 3, pim: 2, sog: 6, toi: "21:00", stars: "1st Star" },
      { id: 10, date: "2026-07-15", opponent: "Pacific Coast Hockey Academy", result: "W 3-1", goals: 1, assists: 1, hits: 4, plusMinus: 2, pim: 0, sog: 4, toi: "21:30", stars: "2nd Star" },
      { id: 11, date: "2026-07-10", opponent: "Shawnigan Lake School", result: "W 5-0", goals: 2, assists: 1, hits: 2, plusMinus: 3, pim: 0, sog: 5, toi: "19:20", stars: "2nd Star" },
      { id: 12, date: "2026-07-05", opponent: "Delta Hockey Academy", result: "W 4-2", goals: 1, assists: 2, hits: 5, plusMinus: 1, pim: 2, sog: 4, toi: "22:10", stars: "3rd Star" },
      { id: 13, date: "2026-06-28", opponent: "St. George's School", result: "W 5-4", goals: 2, assists: 1, hits: 4, plusMinus: 1, pim: 0, sog: 6, toi: "23:00", stars: "1st Star" },
      { id: 14, date: "2026-06-22", opponent: "Wenatchee Wild U18", result: "W 4-1", goals: 1, assists: 2, hits: 3, plusMinus: 2, pim: 0, sog: 4, toi: "20:45", stars: "2nd Star" },
      { id: 15, date: "2026-06-18", opponent: "Yale Hockey Academy", result: "L 2-3 (SO)", goals: 1, assists: 1, hits: 4, plusMinus: 0, pim: 2, sog: 5, toi: "22:50", stars: "3rd Star" },
      { id: 16, date: "2026-06-12", opponent: "RINK Academy Winnipeg", result: "W 6-3", goals: 1, assists: 4, hits: 3, plusMinus: 3, pim: 0, sog: 5, toi: "21:35", stars: "1st Star" }
    ],

    // Shot Chart Map Data
    shots: [
      { x: 440, y: 210, isGoal: true, result: 'goal', type: 'Wrist Shot', period: 2, time: '14:22', opponent: 'Delta Hockey Academy', date: '8/22' },
      { x: 480, y: 190, isGoal: true, result: 'goal', type: 'Snap Shot (Top Shelf)', period: 3, time: '18:04', opponent: 'Delta Hockey Academy', date: '8/22' },
      { x: 410, y: 240, isGoal: false, result: 'save', type: 'Slap Shot', period: 1, time: '08:15', opponent: 'Delta Hockey Academy', date: '8/22' },
      { x: 380, y: 160, isGoal: false, result: 'save', type: 'Wrist Shot', period: 2, time: '03:40', opponent: 'Delta Hockey Academy', date: '8/22' },
      { x: 495, y: 215, isGoal: true, result: 'goal', type: 'Tip / Deflection', period: 'OT', time: '03:12', opponent: "St. George's School", date: '8/19' },
      { x: 460, y: 170, isGoal: true, result: 'goal', type: 'Wrist Shot', period: 1, time: '11:20', opponent: "Yale Hockey Academy", date: '8/15' },
      { x: 430, y: 260, isGoal: true, result: 'goal', type: 'Backhand Deek', period: 2, time: '06:45', opponent: "Yale Hockey Academy", date: '8/15' },
      { x: 470, y: 220, isGoal: true, result: 'goal', type: 'One-Timer', period: 3, time: '15:10', opponent: "Yale Hockey Academy", date: '8/15' },
      { x: 390, y: 280, isGoal: false, result: 'miss', type: 'Slap Shot', period: 1, time: '04:12', opponent: "Northern Alberta", date: '8/12' },
      { x: 450, y: 185, isGoal: true, result: 'goal', type: 'Snap Shot', period: 3, time: '19:15', opponent: "Northern Alberta", date: '8/12' },
      { x: 420, y: 200, isGoal: true, result: 'goal', type: 'Wrist Shot', period: 2, time: '09:30', opponent: "RINK Kelowna", date: '8/08' },
      { x: 475, y: 230, isGoal: true, result: 'goal', type: 'Rebound Put-in', period: 3, time: '12:44', opponent: "RINK Kelowna", date: '8/08' },
      { x: 350, y: 140, isGoal: false, result: 'save', type: 'Slap Shot Point', period: 1, time: '07:11', opponent: "Edge School", date: '8/04' },
      { x: 465, y: 205, isGoal: true, result: 'goal', type: 'Wrist Shot (Short Side)', period: 3, time: '17:05', opponent: "Edge School", date: '8/04' }
    ],

    // Forms
    newGame: { date: new Date().toISOString().split('T')[0], opponent: '', result: 'W 4-2', goals: 1, assists: 1, hits: 3, plusMinus: 1, pim: 0, sog: 4, toi: '21:00', stars: '1st Star' },
    newShot: { x: 450, y: 210, isGoal: true, result: 'goal', type: 'Wrist Shot', period: '1', time: '12:00', opponent: 'Next Opponent' },
    newBoxing: { date: new Date().toISOString().split('T')[0], title: '', rounds: 6, duration: '45 min', focus: 'Soviet Mitts & Footwork', coachNotes: '' },
    newFishing: { date: new Date().toISOString().split('T')[0], species: 'Coho Salmon', weight: '', length: '', location: 'Cheakamus River', tackle: 'Blue Fox Spinner', result: 'Released', notes: '' },
    newOnewheel: { date: new Date().toISOString().split('T')[0], route: '', distance: '15.0 km', topSpeed: '32.0 km/h', duration: '45 min', terrain: 'Valley Trail', rating: 5, notes: '' },
    newHike: { date: new Date().toISOString().split('T')[0], trail: '', distance: '12.0 km', elevationM: 650, duration: '4h 15m', companions: 'Dad & Family', notes: '' },
    new4x4: { date: new Date().toISOString().split('T')[0], trail: '', distance: '40 km', difficulty: 'Moderate FSR', 4wdMode: '4-High', companions: 'Dad & Matthison', notes: '' },
    newCheer: { author: 'Mom', message: '' },
    newWorkout: { title: '', type: 'Strength', exercises: '', duration: '60 min', intensity: 'High' },
    // Computed Stats based on Selected Season
    get currentSeasonData() {
      if (this.selectedSeason === '2026-27') {
        const gp = this.games ? this.games.length : 28;
        const goals = this.games ? this.games.reduce((s, g) => s + (Number(g.goals) || 0), 0) : 24;
        const assists = this.games ? this.games.reduce((s, g) => s + (Number(g.assists) || 0), 0) : 31;
        const pts = goals + assists;
        const hits = this.games ? this.games.reduce((s, g) => s + (Number(g.hits) || 0), 0) : 86;
        const plusMinus = this.games ? this.games.reduce((s, g) => s + (Number(g.plusMinus) || 0), 0) : 29;
        const pim = this.games ? this.games.reduce((s, g) => s + (Number(g.pim) || 0), 0) : 18;
        const sog = this.games ? this.games.reduce((s, g) => s + (Number(g.sog) || 0), 0) : 112;
        return { gp, goals, assists, pts, hits, plusMinus, pim, sog, foWin: '61.8%', toi: '21:45' };
      }
      return this.seasonArchives[this.selectedSeason] || this.seasonArchives['2026-27'];
    },

    get totalGP() { return this.currentSeasonData ? this.currentSeasonData.gp : 0; },
    get totalGoals() { return this.currentSeasonData ? this.currentSeasonData.goals : 0; },
    get totalAssists() { return this.currentSeasonData ? this.currentSeasonData.assists : 0; },
    get totalPoints() { return this.currentSeasonData ? this.currentSeasonData.pts : 0; },
    get totalHits() { return this.currentSeasonData ? this.currentSeasonData.hits : 0; },
    get totalPlusMinus() { return this.currentSeasonData ? this.currentSeasonData.plusMinus : 0; },
    get totalPIM() { return this.currentSeasonData ? this.currentSeasonData.pim : 0; },
    get totalSOG() { return this.currentSeasonData ? this.currentSeasonData.sog : 0; },
    get pointsPerGame() { return this.totalGP ? (this.totalPoints / this.totalGP).toFixed(2) : '0.00'; },
    get shootingPercentage() { return this.totalSOG ? ((this.totalGoals / this.totalSOG) * 100).toFixed(1) + '%' : '0.0%'; },
    
    // Pushup Winner Today
    get pushupLeaderToday() {
      if (!this.pushups) return 'tie';
      if (this.pushups.todayRyker > this.pushups.todayDad) return 'ryker';
      if (this.pushups.todayDad > this.pushups.todayRyker) return 'dad';
      return 'tie';
    },

    get pushupLeaderDiff() {
      if (!this.pushups) return 0;
      return Math.abs(this.pushups.todayRyker - this.pushups.todayDad);
    },

    formatNum(val) {
      if (val === undefined || val === null) return '0';
      return Number(val || 0).toLocaleString();
    },

    // Init function
    initApp() {
      this.loadStorage();
      this.updateBanter();

      setTimeout(() => {
        try {
          if (typeof HockeyRinkChart === 'function' && document.getElementById('rinkContainer')) {
            this.rinkChart = new HockeyRinkChart('rinkContainer', {
              shots: this.shots,
              onAddShot: (coords) => {
                this.newShot.x = coords.x;
                this.newShot.y = coords.y;
                this.showAddShotModal = true;
              }
            });
          }
          if (typeof window.initScoringChart === 'function' && document.getElementById('scoringChart')) {
            window.initScoringChart(this.games);
          }
        } catch (err) {
          console.warn('Initial chart render warning:', err);
        }
      }, 100);
    },

    // Switch Season
    setSeason(seasonKey) {
      this.selectedSeason = seasonKey;
      if (window.hockeyAudio) window.hockeyAudio.playPushupChime();
    },

    // Switch Webcam Feed
    switchWebcam(camId) {
      const selected = this.whistlerWebcam.cams.find(c => c.id === camId);
      if (selected) {
        this.whistlerWebcam.selectedCam = camId;
        this.whistlerWebcam.locationName = selected.name;
        this.whistlerWebcam.elevation = selected.elevation;
        this.whistlerWebcam.lastUpdated = "Live Feed • Refreshed just now";
        if (window.hockeyAudio) window.hockeyAudio.playPushupChime();
      }
    },

    refreshWebcam() {
      const d = new Date();
      this.whistlerWebcam.lastUpdated = "Live Feed • Refreshed " + d.toLocaleTimeString();
      if (window.hockeyAudio) window.hockeyAudio.playPushupChime();
    },

    // Profile Picture File Upload Handler
    handleProfileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.player.avatar = e.target.result;
          this.saveStorage();
          this.triggerConfetti();
        };
        reader.readAsDataURL(file);
      }
    },

    // Download Stats Export (JSON)
    downloadStats() {
      const data = {
        player: this.player,
        wearableMetrics: this.wearable,
        currentSeason: this.currentSeasonData,
        seasonArchives: this.seasonArchives,
        games: this.games,
        pushupDuel: this.pushups,
        boxingWithSashaGier: this.boxing,
        fishingLog: this.fishing,
        onewheelAdventures: this.onewheel,
        hikingLog: this.hiking,
        fourByFourAdventures: this.fourByFour,
        fitness: this.fitness,
        exportDate: new Date().toISOString()
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = "Ryker_Carson_23_Full_Athletic_Stats_" + new Date().toISOString().split('T')[0] + ".json";
      a.click();
      URL.revokeObjectURL(url);
      if (window.hockeyAudio) window.hockeyAudio.playVictoryWhistle();
    },

    // Storage Sync
    saveStorage() {
      try {
        const payload = {
          playerAvatar: this.player.avatar,
          games: this.games,
          shots: this.shots,
          pushups: this.pushups,
          wearable: this.wearable,
          boxing: this.boxing,
          fishing: this.fishing,
          onewheel: this.onewheel,
          hiking: this.hiking,
          fourByFour: this.fourByFour,
          fitness: this.fitness,
          cheerWall: this.cheerWall,
          family: this.family
        };
        localStorage.setItem('ryker_hockey_dashboard_data_v7', JSON.stringify(payload));
      } catch (e) {
        console.warn('Storage sync error', e);
      }
    },

    loadStorage() {
      try {
        const saved = localStorage.getItem('ryker_hockey_dashboard_data_v7');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.playerAvatar) this.player.avatar = parsed.playerAvatar;
          if (parsed.games && Array.isArray(parsed.games)) this.games = parsed.games;
          if (parsed.shots && Array.isArray(parsed.shots)) this.shots = parsed.shots;
          if (parsed.pushups) Object.assign(this.pushups, parsed.pushups);
          if (parsed.wearable) Object.assign(this.wearable, parsed.wearable);
          if (parsed.boxing) Object.assign(this.boxing, parsed.boxing);
          if (parsed.fishing) Object.assign(this.fishing, parsed.fishing);
          if (parsed.onewheel) Object.assign(this.onewheel, parsed.onewheel);
          if (parsed.hiking) Object.assign(this.hiking, parsed.hiking);
          if (parsed.fourByFour) Object.assign(this.fourByFour, parsed.fourByFour);
          if (parsed.fitness) Object.assign(this.fitness, parsed.fitness);
          if (parsed.cheerWall && Array.isArray(parsed.cheerWall)) this.cheerWall = parsed.cheerWall;
        }
      } catch (e) {
        console.warn('Could not load storage', e);
      }
    },

    // Pushup Functions
    addPushups(person, amount) {
      if (person === 'ryker') {
        this.pushups.todayRyker += amount;
        this.pushups.weekRyker += amount;
        this.pushups.allTimeRyker += amount;
        const todayEntry = this.pushups.history.find(h => h.date === 'Today');
        if (todayEntry) todayEntry.ryker = this.pushups.todayRyker;
      } else {
        this.pushups.todayDad += amount;
        this.pushups.weekDad += amount;
        this.pushups.allTimeDad += amount;
        const todayEntry = this.pushups.history.find(h => h.date === 'Today');
        if (todayEntry) todayEntry.dad = this.pushups.todayDad;
      }

      if (window.hockeyAudio) window.hockeyAudio.playPushupChime();
      this.updateBanter();
      this.saveStorage();
      if (typeof window.initPushupDuelChart === 'function') {
        window.initPushupDuelChart(this.pushups.history);
      }

      if (this.pushups.todayRyker >= this.pushups.targetDaily || this.pushups.todayDad >= this.pushups.targetDaily) {
        this.triggerConfetti();
      }
    },

    updateBanter() {
      if (this.pushupLeaderToday === 'ryker') {
        const pool = this.banterQuotes.rykerLeading;
        this.currentBanter = pool[Math.floor(Math.random() * pool.length)];
      } else if (this.pushupLeaderToday === 'dad') {
        const pool = this.banterQuotes.dadLeading;
        this.currentBanter = pool[Math.floor(Math.random() * pool.length)];
      } else {
        const pool = this.banterQuotes.tied;
        this.currentBanter = pool[Math.floor(Math.random() * pool.length)];
      }
    },

    // Boxing with Sasha Gier Logger
    submitBoxing() {
      if (!this.newBoxing.title) {
        alert('Please enter session focus/title');
        return;
      }
      this.boxing.sessions.unshift({
        id: Date.now(),
        date: this.newBoxing.date,
        title: this.newBoxing.title,
        rounds: Number(this.newBoxing.rounds) || 6,
        duration: this.newBoxing.duration || "45 min",
        focus: this.newBoxing.focus,
        coachNotes: this.newBoxing.coachNotes || "Sasha Gier: 'Heavy hands, great balance transition!'"
      });
      this.boxing.totalRounds += Number(this.newBoxing.rounds) || 6;
      this.boxing.totalSessions += 1;
      
      if (window.hockeyAudio) window.hockeyAudio.playBoxingBell();
      this.triggerConfetti();
      this.showAddBoxingModal = false;
      this.newBoxing.title = '';
      this.newBoxing.coachNotes = '';
      this.saveStorage();
    },

    // Fishing Logger
    submitFishing() {
      if (!this.newFishing.species) {
        alert('Please enter fish species');
        return;
      }
      this.fishing.catches.unshift({
        id: Date.now(),
        date: this.newFishing.date,
        species: this.newFishing.species,
        weight: this.newFishing.weight || "N/A",
        length: this.newFishing.length || "N/A",
        location: this.newFishing.location,
        tackle: this.newFishing.tackle,
        result: this.newFishing.result,
        notes: this.newFishing.notes || "Great day on the water!"
      });
      this.fishing.totalCatches += 1;
      
      if (window.hockeyAudio) window.hockeyAudio.playVictoryWhistle();
      this.triggerConfetti();
      this.showAddFishingModal = false;
      this.newFishing.species = 'Coho Salmon';
      this.newFishing.weight = '';
      this.newFishing.length = '';
      this.newFishing.notes = '';
      this.saveStorage();
    },

    // Onewheel Logger
    submitOnewheel() {
      if (!this.newOnewheel.route) {
        alert('Please enter route name');
        return;
      }
      const distNum = parseFloat(this.newOnewheel.distance) || 12.0;
      this.onewheel.rides.unshift({
        id: Date.now(),
        date: this.newOnewheel.date,
        route: this.newOnewheel.route,
        distance: distNum + " km",
        topSpeed: this.newOnewheel.topSpeed,
        duration: this.newOnewheel.duration,
        terrain: this.newOnewheel.terrain,
        rating: Number(this.newOnewheel.rating) || 5,
        notes: this.newOnewheel.notes || "Awesome float session!"
      });
      this.onewheel.odometerKm = Number((this.onewheel.odometerKm + distNum).toFixed(1));
      this.onewheel.totalRides += 1;

      if (window.hockeyAudio) window.hockeyAudio.playVictoryWhistle();
      this.triggerConfetti();
      this.showAddOnewheelModal = false;
      this.newOnewheel.route = '';
      this.newOnewheel.notes = '';
      this.saveStorage();
    },

    // Hiking Logger
    submitHike() {
      if (!this.newHike.trail) {
        alert('Please enter trail name');
        return;
      }
      const distNum = parseFloat(this.newHike.distance) || 10.0;
      const elevNum = parseInt(this.newHike.elevationM) || 500;
      this.hiking.hikes.unshift({
        id: Date.now(),
        date: this.newHike.date,
        trail: this.newHike.trail,
        distance: distNum + " km",
        elevationM: elevNum,
        duration: this.newHike.duration,
        companions: this.newHike.companions || "Dad & Family",
        rating: 5,
        notes: this.newHike.notes || "Summit reached! Incredible alpine view."
      });
      this.hiking.totalElevationM += elevNum;
      this.hiking.totalHikes += 1;

      if (window.hockeyAudio) window.hockeyAudio.playVictoryWhistle();
      this.triggerConfetti();
      this.showAddHikeModal = false;
      this.newHike.trail = '';
      this.newHike.notes = '';
      this.saveStorage();
    },

    // 4x4 Logger
    submit4x4() {
      if (!this.new4x4.trail) {
        alert('Please enter trail / FSR name');
        return;
      }
      const distNum = parseFloat(this.new4x4.distance) || 30.0;
      this.fourByFour.adventures.unshift({
        id: Date.now(),
        date: this.new4x4.date,
        trail: this.new4x4.trail,
        distance: distNum + " km",
        difficulty: this.new4x4.difficulty,
        4wdMode: this.new4x4.4wdMode,
        companions: this.new4x4.companions || "Dad & Matthison",
        notes: this.new4x4.notes || "Clean mountain trail run."
      });
      this.fourByFour.totalOffRoadKm += distNum;
      this.fourByFour.expeditions += 1;

      if (window.hockeyAudio) window.hockeyAudio.playVictoryWhistle();
      this.triggerConfetti();
      this.showAdd4x4Modal = false;
      this.new4x4.trail = '';
      this.new4x4.notes = '';
      this.saveStorage();
    },

    // Habit toggle
    toggleHabit(habit) {
      habit.done = !habit.done;
      if (window.hockeyAudio) window.hockeyAudio.playPushupChime();
      this.calculateRecovery();
      this.saveStorage();
    },

    // Water tracker
    addWater(liters) {
      this.fitness.waterLiters = Math.min(4.0, Number((this.fitness.waterLiters + liters).toFixed(2)));
      if (window.hockeyAudio) window.hockeyAudio.playPushupChime();
      this.calculateRecovery();
      this.saveStorage();
    },

    calculateRecovery() {
      const habitsDone = this.fitness.habits.filter(h => h.done).length;
      const waterFactor = (this.fitness.waterLiters / this.fitness.waterTarget) * 25;
      const habitFactor = (habitsDone / this.fitness.habits.length) * 35;
      const sleepFactor = (Math.min(9, this.fitness.sleepHours) / 9) * 40;
      this.fitness.recoveryScore = Math.min(100, Math.round(waterFactor + habitFactor + sleepFactor));
    },

    // Add Game Log
    submitGame() {
      if (!this.newGame.opponent) {
        alert('Please enter opponent team name');
        return;
      }
      this.games.unshift({
        id: Date.now(),
        date: this.newGame.date,
        opponent: this.newGame.opponent,
        result: this.newGame.result,
        goals: Number(this.newGame.goals) || 0,
        assists: Number(this.newGame.assists) || 0,
        hits: Number(this.newGame.hits) || 0,
        plusMinus: Number(this.newGame.plusMinus) || 0,
        pim: Number(this.newGame.pim) || 0,
        sog: Number(this.newGame.sog) || 0,
        toi: this.newGame.toi || '21:00',
        stars: this.newGame.stars || '1st Star'
      });

      if (Number(this.newGame.goals) > 0) {
        this.triggerGoalHorn();
      } else {
        if (window.hockeyAudio) window.hockeyAudio.playVictoryWhistle();
      }

      this.showAddGameModal = false;
      this.saveStorage();
      if (typeof window.initScoringChart === 'function') {
        window.initScoringChart(this.games);
      }

      this.newGame.opponent = '';
      this.newGame.goals = 1;
      this.newGame.assists = 1;
    },

    // Add Shot to Rink
    submitShot() {
      const isGoal = this.newShot.result === 'goal';
      const shotObj = {
        x: this.newShot.x,
        y: this.newShot.y,
        isGoal: isGoal,
        result: this.newShot.result,
        type: this.newShot.type,
        period: this.newShot.period,
        time: this.newShot.time,
        opponent: this.newShot.opponent,
        date: 'Today'
      };
      this.shots.push(shotObj);
      if (this.rinkChart) this.rinkChart.setShots(this.shots);

      if (isGoal) {
        this.triggerGoalHorn();
      } else {
        if (window.hockeyAudio) window.hockeyAudio.playPuckShot();
      }

      this.showAddShotModal = false;
      this.saveStorage();
    },

    // Add Workout
    submitWorkout() {
      if (!this.newWorkout.title) {
        alert('Please enter workout title');
        return;
      }
      this.fitness.workouts.unshift({
        date: "Today",
        title: this.newWorkout.title,
        type: this.newWorkout.type,
        exercises: this.newWorkout.exercises || "Completed scheduled training sets",
        duration: this.newWorkout.duration || "60 min",
        intensity: this.newWorkout.intensity || "High"
      });
      if (window.hockeyAudio) window.hockeyAudio.playVictoryWhistle();
      this.showAddWorkoutModal = false;
      this.newWorkout.title = '';
      this.newWorkout.exercises = '';
      this.saveStorage();
    },

    // Cheer Wall
    submitCheer() {
      if (!this.newCheer.message) return;
      const authorObj = this.family.find(f => f.name === this.newCheer.author) || this.family[0];
      this.cheerWall.unshift({
        id: Date.now(),
        author: this.newCheer.author,
        avatar: authorObj.photo,
        message: this.newCheer.message,
        time: "Just now",
        likes: 1
      });
      this.triggerConfetti();
      this.showAddCheerModal = false;
      this.newCheer.message = '';
      this.saveStorage();
    },

    likeCheer(item) {
      item.likes++;
      if (window.hockeyAudio) window.hockeyAudio.playPushupChime();
      this.saveStorage();
    },

    cheerFamilyMember(member) {
      member.cheersCount++;
      if (window.hockeyAudio) window.hockeyAudio.playPushupChime();
      this.triggerConfetti();
      this.saveStorage();
    },

    // Audio & Confetti triggers
    triggerGoalHorn() {
      if (window.hockeyAudio) window.hockeyAudio.playGoalHorn();
      this.triggerConfetti();
    },

    triggerConfetti() {
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F59E0B', '#FDE047', '#38BDF8', '#FFFFFF', '#EF4444']
        });
      }
    },

    toggleMute() {
      if (window.hockeyAudio) {
        this.soundMuted = window.hockeyAudio.toggleMute();
      }
    },

    // Reset Data
    resetToDefault() {
      if (confirm("Reset dashboard data to default BWC season stats and scores?")) {
        localStorage.removeItem('ryker_hockey_dashboard_data_v7');
        location.reload();
      }
    }
  };
}

// Global Export & Alpine.js Registration
window.hockeyApp = hockeyApp;

if (typeof window.Alpine !== 'undefined') {
  window.Alpine.data('hockeyApp', hockeyApp);
} else {
  document.addEventListener('alpine:init', () => {
    Alpine.data('hockeyApp', hockeyApp);
  });
}
