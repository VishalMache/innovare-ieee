export type TeamMember = {
  name: string;
  role: string;          // e.g., "Web Developer", "AI Lead"
  img: string;           // Image URL or absolute path (e.g., "/images/profiles/john.jpg")
  initials: string;      // 1 or 2 uppercase letters (e.g., "JD")
  bio: string;           // Short biography (keep it between 1-3 sentences)
  githubUrl?: string;    // Optional: Leave empty to hide GitHub icon
  linkedinUrl?: string;  // Optional: Leave empty to hide LinkedIn icon
  twitterUrl?: string;   // Optional: Leave empty to hide Twitter icon
};

/**
 * ------------------------------------------------------------------------
 * NETWORK ROSTER DATA
 * ------------------------------------------------------------------------
 * Manual Editor: Fill out the 25 profile items below.
 * Change the names, roles, and image links exactly as you want them to 
 * appear in the 3D Network Arc Carousel.
 * ------------------------------------------------------------------------
 */

export const TEAM_MEMBERS: TeamMember[] = [
  { // 01
    name: "Alex Chen",
    role: "Software Architect",
    img: "https://i.pravatar.cc/600?u=1",
    initials: "AC",
    bio: "Engineering scalable backend systems and high-throughput pipelines. Obsessed with elegant architecture.",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
  },
  { // 02
    name: "Sarah Jenkins",
    role: "Creative Developer",
    img: "https://i.pravatar.cc/600?u=2",
    initials: "SJ",
    bio: "Bridging the gap between breathtaking aesthetics and heavy computational physics on the web.",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
  },
  { // 03
    name: "David Kim",
    role: "AI Researcher",
    img: "https://i.pravatar.cc/600?u=3",
    initials: "DK",
    bio: "Training federated neural networks and exploring the bleeding-edge boundary of machine consciousness.",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
  },
  { // 04
    name: "Emily Watson",
    role: "UI/UX Designer",
    img: "https://i.pravatar.cc/600?u=4",
    initials: "EW",
    bio: "Crafting intuitive, immersive human-computer interfaces. Believes every pixel deserves a purpose.",
    githubUrl: "https://github.com",
  },
  { // 05
    name: "Member 5",
    role: "Role Title",
    img: "https://i.pravatar.cc/600?u=5",
    initials: "M5",
    bio: "Short bio description goes here.",
    githubUrl: "",
    linkedinUrl: "",
    twitterUrl: "",
  },
  { // 06
    name: "Member 6",
    role: "Role Title",
    img: "https://i.pravatar.cc/600?u=6",
    initials: "M6",
    bio: "Short bio description goes here.",
  },
  { // 07
    name: "Member 7",
    role: "Role Title",
    img: "https://i.pravatar.cc/600?u=7",
    initials: "M7",
    bio: "Short bio description goes here.",
  },
  { // 08
    name: "Member 8",
    role: "Role Title",
    img: "https://i.pravatar.cc/600?u=8",
    initials: "M8",
    bio: "Short bio description goes here.",
  },
  { // 09
    name: "Member 9",
    role: "Role Title",
    img: "https://i.pravatar.cc/600?u=9",
    initials: "M9",
    bio: "Short bio description goes here.",
  },
  { // 10
    name: "Member 10",
    role: "Role Title",
    img: "https://i.pravatar.cc/600?u=10",
    initials: "M10",
    bio: "Short bio description goes here.",
  },
  { // 11
    name: "Member 11",
    role: "Role Title",
    img: "https://i.pravatar.cc/600?u=11",
    initials: "M11",
    bio: "Short bio description goes here.",
  },
  { // 12
    name: "Member 12",
    role: "Role Title",
    img: "https://i.pravatar.cc/600?u=12",
    initials: "M12",
    bio: "Short bio description goes here.",
  },
  { // 13
    name: "Member 13",
    role: "Role Title",
    img: "https://i.pravatar.cc/600?u=13",
    initials: "M13",
    bio: "Short bio description goes here.",
  },
  { // 14
    name: "Member 14",
    role: "Role Title",
    img: "https://i.pravatar.cc/600?u=14",
    initials: "M14",
    bio: "Short bio description goes here.",
  },
  { // 15
    name: "Member 15",
    role: "Role Title",
    img: "https://i.pravatar.cc/600?u=15",
    initials: "M15",
    bio: "Short bio description goes here.",
  },
  { // 16
    name: "Member 16",
    role: "Role Title",
    img: "https://i.pravatar.cc/600?u=16",
    initials: "M16",
    bio: "Short bio description goes here.",
  },
  { // 17
    name: "Member 17",
    role: "Role Title",
    img: "https://i.pravatar.cc/600?u=17",
    initials: "M17",
    bio: "Short bio description goes here.",
  },
  { // 18
    name: "Member 18",
    role: "Role Title",
    img: "https://i.pravatar.cc/600?u=18",
    initials: "M18",
    bio: "Short bio description goes here.",
  },
  { // 19
    name: "Member 19",
    role: "Role Title",
    img: "https://i.pravatar.cc/600?u=19",
    initials: "M19",
    bio: "Short bio description goes here.",
  },
  { // 20
    name: "Member 20",
    role: "Role Title",
    img: "https://i.pravatar.cc/600?u=20",
    initials: "M20",
    bio: "Short bio description goes here.",
  },
  { // 21
    name: "Member 21",
    role: "Role Title",
    img: "https://i.pravatar.cc/600?u=21",
    initials: "M21",
    bio: "Short bio description goes here.",
  },
  { // 22
    name: "Member 22",
    role: "Role Title",
    img: "https://i.pravatar.cc/600?u=22",
    initials: "M22",
    bio: "Short bio description goes here.",
  },
  { // 23
    name: "Member 23",
    role: "Role Title",
    img: "https://i.pravatar.cc/600?u=23",
    initials: "M23",
    bio: "Short bio description goes here.",
  },
  { // 24
    name: "Member 24",
    role: "Role Title",
    img: "https://i.pravatar.cc/600?u=24",
    initials: "M24",
    bio: "Short bio description goes here.",
  },
  { // 25
    name: "Member 25",
    role: "Role Title",
    img: "https://i.pravatar.cc/600?u=25",
    initials: "M25",
    bio: "Short bio description goes here.",
  },
];
