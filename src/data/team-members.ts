export type TeamMember = {
  name: string;
  role: string;          // e.g., "Web Developer", "AI Lead"
  img: string;           // Image URL or absolute path (e.g., "/images/profiles/john.jpg")
  githubUrl?: string;    // Optional: Leave empty to hide GitHub icon
  linkedinUrl?: string;  // Optional: Leave empty to hide LinkedIn icon
  twitterUrl?: string;   // Optional: Leave empty to hide Twitter icon
};

/**
 * ------------------------------------------------------------------------
 * NETWORK ROSTER DATA
 * ------------------------------------------------------------------------
 * Manual Editor: Fill out the profile items below.
 * Change the names, roles, and image links exactly as you want them to 
 * appear in the 3D Network Arc Carousel.
 * ------------------------------------------------------------------------
 */

export const TEAM_MEMBERS: TeamMember[] = [
  // ==========================================
  // LEFT SIDE (12 MEMBERS)
  // ==========================================
  { // LEFT-01
    name: "Arko Mistry",
    role: "Volunteer",
    img: "/images/arko.png",
  },
  { // LEFT-02
    name: "Pushpak Patel",
    role: "Document Head",
    img: "/images/pushpak.png",
  },
  { // LEFT-03
    name: "Yash Yewale",
    role: "Workshop Head",
    img: "/images/yash.png",
  },
  { // LEFT-04
    name: "Parth Chopade",
    role: "Vice People Management Head",
    img: "/images/parthc.png",
  },
  { // LEFT-05
    name: "Ishwar Bagal",
    role: "People Management Head",
    img: "/images/ishwar.png",
  },
  { // LEFT-06
    name: "Vedant Ingle",
    role: "Event Head",
    img: "/images/vedant.png",
  },
  { // LEFT-07
    name: "Ishwari Tapkir",
    role: "Vice Promotion Head",
    img: "/images/ishwari.png",
  },
  { // LEFT-08
    name: "Saniya Motwani",
    role: "Promotion Head",
    img: "/images/saniya.png",
  },
  { // LEFT-09
    name: "Payal Tambe",
    role: "Newsletter Head",
    img: "/images/payal.png",
  },
  { // LEFT-10
    name: "Jayada Jodh",
    role: "Vice Newsletter Head",
    img: "/images/jayada.png",
  },
  { // LEFT-11
    name: "Parth Petkar",
    role: "Vice Technical Head",
    img: "/images/parth.png",
  },
  { // LEFT-12
    name: "Vishal Mache",
    role: "Technical Head",
    img: "/images/vishall.png",
  },

  // ==========================================
  // MIDDLE (CENTER MEMBER)
  // ==========================================
  { // MIDDLE-01 (CENTER)
    name: "Aditya Jadhav",
    role: "President",
    img: "/images/aditya.png",
  },

  // ==========================================
  // RIGHT SIDE (13 MEMBERS)
  // ==========================================
  { // RIGHT-01
    name: "Punya Surana",
    role: "Vice President",
    img: "/images/punya.png",
  },
  { // RIGHT-02
    name: "Aryan Chavan",
    role: "Vice President",
    img: "/images/aryan.png",
  },
  { // RIGHT-03
    name: "Rajvardhan Bhosale",
    role: "Vice President",
    img: "/images/rajvardhan.png",
  },
  { // RIGHT-04
    name: "Pratik Rakshe",
    role: "Secretary",
    img: "/images/pratik.png",
  },
  { // RIGHT-05
    name: "Soham Adgatla",
    role: "Secretary",
    img: "/images/soham.png",
  },
  { // RIGHT-06
    name: "Atharva Patil",
    role: "Secretary",
    img: "/images/atharva.png",
  },
  { // RIGHT-07
    name: "Mohit More",
    role: "Treasurer",
    img: "/images/mohit.png",
  },
  { // RIGHT-08
    name: "Yugandhar Thakre",
    role: "Treasurer",
    img: "/images/yugandhar.png",
  },
  { // RIGHT-09
    name: "Tiya Manwani",
    role: "Treasurer",
    img: "/images/tiya.png",
  },
  { // RIGHT-10
    name: "Rujul",
    role: "Design Head",
    img: "/images/rujul.png",
  },
  { // RIGHT-11
    name: "Aditya Dhumal",
    role: "Vice Design Head",
    img: "/images/adityadh.png",
  },
  { // RIGHT-12
    name: "Meet Patil",
    role: "Volunteer",
    img: "/images/meet.png",
  },
  { // RIGHT-13 (Extra Slot / Placeholder)
    name: "Chaitali Rane",
    role: "Volunteer",
    img: "/images/chaitali.png",
  },
];



