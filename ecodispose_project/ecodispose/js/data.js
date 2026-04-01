
/* ============================================================
   1. CENTERS
   Each center object has:
     name   — display name
     city   — key used for filtering (lowercase, no spaces)
     label  — display name for the city
     addr   — full address string
     phone  — contact number
     cats   — array of accepted device categories
     src    — data source label shown on card
     lat    — latitude for Google Maps link
     lng    — longitude for Google Maps link
   ============================================================ */
const centers = [

  /* ── Kakinada ──────────────────────────────────────────── */
  {
    name  : "KKD E-Waste Collectors",
    city  : "kakinada",
    label : "Kakinada",
    addr  : "Auto Nagar, Kakinada, East Godavari, AP 533003",
    phone : "9848001122",
    cats  : ["mobile","laptop","battery","printer"],
    src   : "Google Maps",
    lat   : 16.9891,
    lng   : 82.2475
  },
  {
    name  : "Green Tech Recyclers Kakinada",
    city  : "kakinada",
    label : "Kakinada",
    addr  : "Jagannaikpur, Kakinada, AP 533003",
    phone : "9849556677",
    cats  : ["tv","appliance","mobile"],
    src   : "CPCB / AP PCB",
    lat   : 16.9944,
    lng   : 82.2376
  },
  {
    name  : "Sri Sai E-Waste Centre",
    city  : "kakinada",
    label : "Kakinada",
    addr  : "Suryaraopet, Kakinada, AP 533001",
    phone : "9441223344",
    cats  : ["mobile","battery","printer","laptop"],
    src   : "Google Maps",
    lat   : 16.9802,
    lng   : 82.2460
  },
  {
    name  : "Kakinada Scrap & Recycle Hub",
    city  : "kakinada",
    label : "Kakinada",
    addr  : "Industrial Estate, Kakinada, AP 533003",
    phone : "9866112200",
    cats  : ["appliance","tv","laptop","mobile"],
    src   : "AP PCB Directory",
    lat   : 16.9750,
    lng   : 82.2390
  },

  /* ── Rajahmundry ───────────────────────────────────────── */
  {
    name  : "Rajahmundry E-Collect",
    city  : "rajahmundry",
    label : "Rajahmundry",
    addr  : "Morampudi Road, Rajahmundry, AP 533103",
    phone : "9866334455",
    cats  : ["laptop","mobile","battery"],
    src   : "AP PCB Directory",
    lat   : 17.0057,
    lng   : 81.7845
  },
  {
    name  : "EcoGodavari Recyclers",
    city  : "rajahmundry",
    label : "Rajahmundry",
    addr  : "Innispeta, Rajahmundry, AP 533101",
    phone : "9701223344",
    cats  : ["appliance","tv","mobile","laptop"],
    src   : "Google Maps",
    lat   : 17.0048,
    lng   : 81.7760
  },
  {
    name  : "Rajam Green Waste Solutions",
    city  : "rajahmundry",
    label : "Rajahmundry",
    addr  : "Kotipalli Road, Rajahmundry, AP 533102",
    phone : "9440556677",
    cats  : ["battery","printer","mobile"],
    src   : "Google Maps",
    lat   : 17.0110,
    lng   : 81.7690
  },

  /* ── Draksharama ───────────────────────────────────────── */
  {
    name  : "Draksharama Scrap & Recycle",
    city  : "draksharama",
    label : "Draksharama",
    addr  : "Main Road, Draksharama, East Godavari, AP 533224",
    phone : "9440112233",
    cats  : ["mobile","battery","tv"],
    src   : "Google Maps",
    lat   : 16.7944,
    lng   : 82.0635
  },
  {
    name  : "Sri Bhavani E-Waste",
    city  : "draksharama",
    label : "Draksharama",
    addr  : "Bus Stand Area, Draksharama, AP 533224",
    phone : "9848334411",
    cats  : ["laptop","mobile","appliance"],
    src   : "Google Maps",
    lat   : 16.7900,
    lng   : 82.0600
  },

  /* ── Yanam ─────────────────────────────────────────────── */
  {
    name  : "Yanam E-Waste Drop Point",
    city  : "yanam",
    label : "Yanam",
    addr  : "Market Road, Yanam, Puducherry UT 533464",
    phone : "9848223366",
    cats  : ["mobile","laptop","battery"],
    src   : "Google Maps",
    lat   : 16.7320,
    lng   : 82.2130
  },
  {
    name  : "Yanam Eco Collect",
    city  : "yanam",
    label : "Yanam",
    addr  : "NH16 Area, Yanam, Puducherry UT 533464",
    phone : "9701445566",
    cats  : ["appliance","tv","mobile"],
    src   : "Google Maps",
    lat   : 16.7340,
    lng   : 82.2160
  },

  /* ── Amalapuram ────────────────────────────────────────── */
  {
    name  : "Amalapuram E-Waste Centre",
    city  : "amalapuram",
    label : "Amalapuram",
    addr  : "RTC Bus Stand Road, Amalapuram, AP 533201",
    phone : "9848667788",
    cats  : ["mobile","laptop","battery"],
    src   : "Google Maps",
    lat   : 16.5770,
    lng   : 81.8946
  },
  {
    name  : "Green Circle Recyclers",
    city  : "amalapuram",
    label : "Amalapuram",
    addr  : "Main Road, Amalapuram, East Godavari, AP",
    phone : "9440998877",
    cats  : ["appliance","tv","printer"],
    src   : "AP PCB Directory",
    lat   : 16.5800,
    lng   : 81.8970
  },

  /* ── Pithapuram ────────────────────────────────────────── */
  {
    name  : "Pithapuram Scrap Hub",
    city  : "pithapuram",
    label : "Pithapuram",
    addr  : "Station Road, Pithapuram, AP 533450",
    phone : "9849112200",
    cats  : ["mobile","battery","laptop"],
    src   : "Google Maps",
    lat   : 17.1148,
    lng   : 82.2549
  },

  /* ── Samalkot ──────────────────────────────────────────── */
  {
    name  : "Samalkot E-Collect Point",
    city  : "samalkot",
    label : "Samalkot",
    addr  : "Market Area, Samalkot, East Godavari, AP 533440",
    phone : "9701334455",
    cats  : ["mobile","tv","appliance"],
    src   : "Google Maps",
    lat   : 17.0555,
    lng   : 82.1787
  },

  /* ── Hyderabad ─────────────────────────────────────────── */
  {
    name  : "Green Recycling Pvt Ltd",
    city  : "hyderabad",
    label : "Hyderabad",
    addr  : "Jeedimetla Industrial Area, Hyderabad, TS 500055",
    phone : "9876543210",
    cats  : ["mobile","laptop","battery","printer"],
    src   : "CPCB Authorized",
    lat   : 17.4914,
    lng   : 78.3697
  },
  {
    name  : "Renew IT Recyclers",
    city  : "hyderabad",
    label : "Hyderabad",
    addr  : "Uppal Industrial Area, Hyderabad, TS 500039",
    phone : "9865432100",
    cats  : ["laptop","printer","mobile","battery"],
    src   : "CPCB Authorized",
    lat   : 17.4014,
    lng   : 78.5598
  },

  /* ── Other Major Cities ────────────────────────────────── */
  {
    name  : "Eco E-Waste Solutions",
    city  : "bangalore",
    label : "Bangalore",
    addr  : "Peenya Industrial Area, Bengaluru, KA 560058",
    phone : "9123456780",
    cats  : ["tv","appliance","mobile","laptop"],
    src   : "CPCB Authorized",
    lat   : 13.0275,
    lng   : 77.5179
  },
  {
    name  : "GreenCycle Hub",
    city  : "bangalore",
    label : "Bangalore",
    addr  : "Electronic City Phase 1, Bengaluru, KA 560100",
    phone : "9876001122",
    cats  : ["laptop","mobile","battery","tv"],
    src   : "Google Maps",
    lat   : 12.8455,
    lng   : 77.6603
  },
  {
    name  : "TechRecycle India",
    city  : "chennai",
    label : "Chennai",
    addr  : "Ambattur Industrial Estate, Chennai, TN 600058",
    phone : "9988776655",
    cats  : ["laptop","printer","battery","mobile"],
    src   : "CPCB Authorized",
    lat   : 13.0949,
    lng   : 80.1534
  },
  {
    name  : "EcoTronics Recycling",
    city  : "chennai",
    label : "Chennai",
    addr  : "Perungudi, Chennai, TN 600096",
    phone : "9940123456",
    cats  : ["appliance","tv","printer"],
    src   : "Google Maps",
    lat   : 12.9726,
    lng   : 80.2467
  },
  {
    name  : "Earth Care Recyclers",
    city  : "mumbai",
    label : "Mumbai",
    addr  : "Andheri East, Mumbai, MH 400069",
    phone : "9900112233",
    cats  : ["mobile","tv","appliance","battery"],
    src   : "CPCB Authorized",
    lat   : 19.1136,
    lng   : 72.8697
  },
  {
    name  : "CycleTech E-Waste",
    city  : "delhi",
    label : "Delhi",
    addr  : "Okhla Industrial Area Phase 2, Delhi 110020",
    phone : "9811223344",
    cats  : ["laptop","mobile","printer","battery"],
    src   : "CPCB Authorized",
    lat   : 28.5355,
    lng   : 77.2750
  },
  {
    name  : "WasteToWealth India",
    city  : "delhi",
    label : "Delhi",
    addr  : "Mayapuri Industrial Area, Delhi 110064",
    phone : "9810987654",
    cats  : ["mobile","tv","battery","appliance"],
    src   : "Google Maps",
    lat   : 28.6368,
    lng   : 77.1023
  },
  {
    name  : "PureGreen Recyclers",
    city  : "pune",
    label : "Pune",
    addr  : "Bhosari MIDC, Pune, MH 411026",
    phone : "9922334455",
    cats  : ["appliance","tv","mobile"],
    src   : "CPCB Authorized",
    lat   : 18.6279,
    lng   : 73.8500
  },
  {
    name  : "SafeDispose Systems",
    city  : "kolkata",
    label : "Kolkata",
    addr  : "Kasba Industrial Estate, Kolkata, WB 700107",
    phone : "9832211445",
    cats  : ["tv","appliance","battery"],
    src   : "CPCB Authorized",
    lat   : 22.5144,
    lng   : 88.3796
  },
  {
    name  : "MetalRecover India",
    city  : "ahmedabad",
    label : "Ahmedabad",
    addr  : "Naroda Industrial Area, Ahmedabad, GJ 382330",
    phone : "9978654321",
    cats  : ["mobile","laptop","battery","printer"],
    src   : "CPCB Authorized",
    lat   : 23.0505,
    lng   : 72.6190
  }
];


/* ============================================================
   2. IMPACT DATA
   Used by the Environmental Impact Calculator.
   co2    = kg of CO2 emissions avoided per 1 device recycled
   metals = kg of metals recovered per 1 device recycled
   label  = display label in the calculator UI
   ============================================================ */
const impactData = {
  mobile   : { co2: 55,  metals: 0.015, label: "Mobile Phones"    },
  laptop   : { co2: 180, metals: 0.12,  label: "Laptops"          },
  battery  : { co2: 22,  metals: 0.20,  label: "Batteries"        },
  tv       : { co2: 250, metals: 0.80,  label: "TVs / Monitors"   },
  appliance: { co2: 300, metals: 1.50,  label: "Appliances"       },
  printer  : { co2: 90,  metals: 0.35,  label: "Printers"         }
};


/* ============================================================
   3. WIPE GUIDES
   Step-by-step secure data erasure guides per device type.
   Each step has:
     t = title (short action label)
     d = description (full instruction, may include HTML <strong>)
   ============================================================ */
const wipeGuides = {

  android: [
    {
      t: "Backup your data",
      d: "Go to <strong>Settings → Google → Backup</strong> and enable backup to Google Drive. Wait for it to complete."
    },
    {
      t: "Sign out of all accounts",
      d: "Go to <strong>Settings → Accounts</strong> and remove your Google account and all other accounts."
    },
    {
      t: "Remove SIM card",
      d: "Eject the SIM tray and keep your SIM card before handing over the phone."
    },
    {
      t: "Remove memory card",
      d: "If a microSD card is inserted, eject and keep it separately."
    },
    {
      t: "Factory reset",
      d: "Go to <strong>Settings → General Management → Reset → Factory Data Reset</strong> and confirm the action."
    },
    {
      t: "Verify reset",
      d: "After reset, the phone should show the initial setup screen. Your data is now wiped."
    }
  ],

  iphone: [
    {
      t: "Backup to iCloud",
      d: "Go to <strong>Settings → [Your Name] → iCloud → iCloud Backup → Back Up Now</strong>. Wait for completion."
    },
    {
      t: "Sign out of Apple ID",
      d: "Go to <strong>Settings → [Your Name] → Sign Out</strong>. Enter your Apple ID password and confirm."
    },
    {
      t: "Remove SIM card",
      d: "Use the SIM ejector tool to remove and keep your SIM card."
    },
    {
      t: "Erase all content",
      d: "Go to <strong>Settings → General → Transfer or Reset iPhone → Erase All Content and Settings</strong>."
    },
    {
      t: "Confirm erasure",
      d: "Enter your passcode and Apple ID password to confirm. This triggers a cryptographic secure wipe."
    },
    {
      t: "Verify",
      d: "The phone should now show the Hello setup screen, confirming all data is removed."
    }
  ],

  laptop: [
    {
      t: "Backup your files",
      d: "Copy important files to an external drive or upload to Google Drive / OneDrive."
    },
    {
      t: "Sign out of all accounts",
      d: "Sign out of Microsoft account, browser profiles (Chrome, Edge), and all other apps."
    },
    {
      t: "Open Reset settings",
      d: "Go to <strong>Settings → System → Recovery → Reset this PC → Remove everything</strong>."
    },
    {
      t: "Enable secure data erasure",
      d: "Click <strong>Change settings → Data erasure: ON</strong>. This overwrites the drive so data cannot be recovered."
    },
    {
      t: "Confirm and wait",
      d: "Click Reset and wait 30–90 minutes. Do not interrupt the process."
    },
    {
      t: "Verify",
      d: "PC should boot to the Windows setup screen. If the drive contains very sensitive data, consider physical removal."
    }
  ],

  mac: [
    {
      t: "Backup with Time Machine",
      d: "Connect an external drive and run a Time Machine backup via <strong>System Settings → General → Time Machine</strong>."
    },
    {
      t: "Sign out of Apple ID",
      d: "Go to <strong>System Settings → [Your Name] → Sign Out</strong>."
    },
    {
      t: "Erase (macOS Ventura and later)",
      d: "Go to <strong>System Settings → General → Transfer or Reset → Erase All Content and Settings</strong>."
    },
    {
      t: "Older macOS — use Recovery Mode",
      d: "Restart holding <strong>Cmd + R</strong>. Open Disk Utility → Select Macintosh HD → Erase."
    },
    {
      t: "Reinstall macOS",
      d: "After erasing, reinstall a clean macOS from Recovery so the next user can set up fresh."
    },
    {
      t: "Verify",
      d: "Mac should show the setup assistant screen. Your data is now fully wiped."
    }
  ],

  hdd: [
    {
      t: "Copy all important files",
      d: "Transfer everything you want to keep to another drive or cloud storage before proceeding."
    },
    {
      t: "Download DBAN erasure tool",
      d: "Download <strong>DBAN (Darik's Boot and Nuke)</strong> — a free, open-source secure disk wipe tool."
    },
    {
      t: "Create bootable USB",
      d: "Write DBAN to a USB drive using a tool like Rufus. Boot from the USB on any PC."
    },
    {
      t: "Run DoD 3-pass wipe",
      d: "Select the drive in DBAN and run the <strong>DoD 5220.22-M 3-pass wipe</strong> for secure erasure."
    },
    {
      t: "Physical destruction (optional)",
      d: "For maximum security — scratch or shred the disk platters before recycling the casing."
    },
    {
      t: "Recycle the casing",
      d: "The metal casing and circuit board can be safely sent to an authorized e-waste recycler."
    }
  ]

};
