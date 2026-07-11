export const profile = {
  name: "Aakash Srividhya",
  role: "Writer & Filmmaker",
  location: "Chennai",
  oneLine:
    "Writer and filmmaker based in Chennai, exploring political narratives and cultural commentary through long-form journalism and short-form content.",
  aboutLead:
    "I build a practice at the meeting point of media analysis, independent storytelling, and leftist cultural criticism.",
  aboutBody: [
    "I work as Writer-Coordinator at Narrativ, developing reels and LinkedIn analysis on news, politics, and cinema. It is part of a growing creator presence in Chennai's media and arts spaces.",
    "This is early-career work, documenting the intersection of politics, culture, and everyday life through writing, video, and visual narratives. I am still finding my full voice, and I am intentional about depth over reach.",
  ],
  politicalIdentity: [
    "Leftist",
    "Factually grounded",
    "Tamil Nadu focus",
    "Data-driven",
    "Accountability-oriented",
  ],
  links: {
    instagram: "https://instagram.com/aj.aakashhh",
    instagramHandle: "@aj.aakashhh",
    linkedin: "https://linkedin.com",
    email: "content@narrativ.in",
  },
};

export const work = [
  {
    org: "Narrativ",
    title: "Writer-Coordinator",
    period: "Sep 2025 to present",
    current: true,
    body:
      "End-to-end reel production across EV, crypto, quantum computing, electronics manufacturing, and industrial real estate. Political and government policy communications, including work managing communications for a minister under the previous Tamil Nadu government tenure, and media content produced for the Tamil Nadu State Planning Commission.",
    tags: ["Raptee (EV)", "Giottus (Crypto)", "XeedQ (Quantum)", "OneAlpha Ventures", "Policy comms"],
  },
  {
    org: "IBC Tamil",
    title: "Social Media Executive & Show Producer",
    period: "Jun 2024 to Sep 2025",
    body:
      "End-to-end content and social strategy across Instagram, Facebook, Twitter, Threads, WhatsApp, Telegram, and YouTube. Producer, R&D lead, and script writer for Kaalam Pesum Kadhai, with ground reporting when required.",
    tags: ["Show production", "Social strategy", "Scriptwriting", "Ground reporting"],
  },
  {
    org: "Galatta Media",
    title: "Social Media Executive & Executive Producer",
    period: "Feb 2023 to May 2024",
    body:
      "Cinema news articles in English, social media management, and post-production for YouTube Shorts.",
    tags: ["Cinema journalism", "Post-production", "YouTube Shorts"],
  },
  {
    org: "Nautone",
    title: "Content Writing Intern",
    period: "Mar 2022 to Oct 2022",
    body:
      "Digital marketing and e-commerce content under senior strategist supervision.",
    tags: ["Digital marketing", "E-commerce copy"],
  },
];

export const reels = [
  { title: "Minister Keerthana's misleading claims, debunked", views: 611000, featured: true, theme: "Fact-check" },
  { title: "Vijay did not break caste calculations", views: 337000, theme: "Political analysis" },
  { title: "Minister Keerthana's misleading claims, debunked", views: 124000, theme: "Fact-check" },
  { title: "Aavin vs Amul", views: 77000, theme: "Policy" },
  { title: "Mekadatu is problematic for Karnataka as well", views: 73800, theme: "Policy" },
  { title: "Jal Jeevan 2.0 signed while JJM 1 funds are pending", views: 49000, theme: "Accountability" },
  { title: "Tamil Nadu debt claim by CM Vijay is misleading", views: 28000, theme: "Fact-check" },
  { title: "Minister Keerthana's Sivakasi export claim, debunked", views: 23700, theme: "Fact-check" },
];

export const writingThemes = [
  {
    theme: "Politics & Accountability",
    blurb:
      "Op-ed style long-form on Tamil Nadu politics, policy, and the claims that need checking. Published on LinkedIn as 800 to 1200 word pieces.",
    outlets: ["LinkedIn long-form", "Medium essays"],
  },
  {
    theme: "Cinema & Culture",
    blurb:
      "Cultural commentary and cinema criticism, carried over from years covering the industry as a working journalist.",
    outlets: ["Medium essays", "Independent reviews"],
  },
  {
    theme: "Fact-checking & Data",
    blurb:
      "Debunking, historical analysis, and data-driven journalism, published as reels and written breakdowns for a second commentary presence.",
    outlets: ["Instagram (3.7k)", "Written breakdowns"],
  },
];

export const governmentWork = [
  {
    title: "Minister communications",
    body:
      "Managed communications for a minister under the previous Tamil Nadu government tenure. Described in general terms out of respect for confidentiality.",
  },
  {
    title: "Tamil Nadu State Planning Commission",
    body:
      "Produced media content supporting the work of the State Planning Commission.",
  },
  {
    title: "Political freelance",
    body:
      "Freelance work for political parties, political organisations, and production houses.",
  },
];

export const creativeWork = [
  {
    kind: "Poetry",
    title: "Kattamaippudaithal",
    body: "Published author of a Tamil poetry collection.",
  },
  {
    kind: "Short film",
    title: "Pugaiyadal",
    body: "Dialogue writer for the short film.",
  },
  {
    kind: "Audiobook",
    title: "Pocket FM",
    body: "Story writer for an audiobook on Pocket FM.",
  },
];

export const cadence = [
  { label: "Reels", value: "4", unit: "a month" },
  { label: "Long-form analysis", value: "1+", unit: "a month" },
  { label: "LinkedIn", value: "Regular", unit: "op-ed posting" },
];

export function formatViews(n: number): string {
  if (n >= 1000) {
    const v = n / 1000;
    return (v % 1 === 0 ? v.toFixed(0) : v.toFixed(1)) + "K";
  }
  return String(n);
}
