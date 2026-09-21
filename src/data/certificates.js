import devFestHackathon from "../assets/certificates/DEV_FEST Hacathaon.jpeg";
import iaOnlineTraining from "../assets/certificates/IA Online Training Certificate (1).pdf";
import iaParticipation from "../assets/certificates/IA Participation Certificate (3).pdf";
import ideBootCamp from "../assets/certificates/IDE BOOT CAMP certificate.jpeg";
import reSkilling from "../assets/certificates/Re skiiling certificate.pdf";
import wadhwaniFoundation from "../assets/certificates/Wadhwani foundation .pdf";
import promptWarWinner from "../assets/certificates/Prompt war winner.pdf";
import mdKhajaEshaq from "../assets/certificates/MD.KHAJA ESHAQ.pdf";
import mdKhajaEshaqInternship from "../assets/certificates/MD KHAJA ESHAQ Internship Certificate.pdf";
import mdKhajaEshaqLoR from "../assets/certificates/MD KHAJA ESHAQ LoR.pdf";
import openAiCert from "../assets/certificates/open ai.png";
import outskillCert from "../assets/certificates/outskill.png";

// ── Older certificates ────────────────────────────────────────────────────────
import innoyudhCert from "../assets/Innoyudh .pdf";
import gdgDevFestCert from "../assets/gdg dev fest.pdf";
import pistonCupCert from "../assets/piston cup hacakthon .pdf";
import microsoft1Cert from "../assets/MICROSOFT-1.PDF";
import microsoft2Cert from "../assets/MICROSOFT-2.PDF";
import microsoft3Cert from "../assets/MICROSOFT-3.PDF";
import ssdlcCert from "../assets/ssdlc .pdf";
import codeChefAchievement from "../assets/code chef achievement.pdf";
import hackerRankAchievement from "../assets/hacker rank achievement .pdf";
import leetcodeAchievement from "../assets/leetcode achievement .pdf";

// ─────────────────────────────────────────────────────────────────────────────
// Certificate data  (newest first)
// ─────────────────────────────────────────────────────────────────────────────
export const certificates = [
  // ── NEW ──
  {
    id: 22,
    title: "OpenAI Certificate",
    issuer: "OpenAI",
    date: "2026",
    filePath: openAiCert,
    fileType: "image",
    description: "Certificate awarded by OpenAI.",
    category: "courses",
    isNew: true,
  },
  {
    id: 21,
    title: "Outskill Certificate",
    issuer: "Outskill",
    date: "2026",
    filePath: outskillCert,
    fileType: "image",
    description: "Certificate awarded by Outskill.",
    category: "courses",
    isNew: true,
  },
  {
    id: 20,
    title: "Full Stack Web Development Internship",
    issuer: "Future Interns",
    date: "April 2026",
    filePath: mdKhajaEshaqInternship,
    fileType: "pdf",
    description:
      "Completed a 1-month internship program in Full Stack Web Development.",
    category: "courses",
    isNew: true,
  },
  {
    id: 19,
    title: "Letter of Recommendation",
    issuer: "Future Interns",
    date: "April 2026",
    filePath: mdKhajaEshaqLoR,
    fileType: "pdf",
    description:
      "Recommendation letter for outstanding performance as a Full Stack Web Development Intern.",
    category: "achievements",
    isNew: true,
  },
  {
    id: 12,
    title: "DEV FEST Hackathon",
    issuer: "Google Developer Groups",
    date: "2026",
    filePath: devFestHackathon,
    fileType: "image",
    description: "Participated in the GDG DEV FEST Hackathon event.",
    category: "hackathons",
    isNew: true,
  },
  {
    id: 13,
    title: "IDE Boot Camp",
    issuer: "IDE Boot Camp",
    date: "2026",
    filePath: ideBootCamp,
    fileType: "image",
    description: "Certificate of participation in the IDE Boot Camp program.",
    category: "events",
    isNew: true,
  },
  {
    id: 14,
    title: "Wadhwani Foundation Certificate",
    issuer: "Wadhwani Foundation",
    date: "2026",
    filePath: wadhwaniFoundation,
    fileType: "pdf",
    description: "Certificate awarded by the Wadhwani Foundation.",
    category: "courses",
    isNew: true,
  },
  {
    id: 15,
    title: "IA Online Training Certificate",
    issuer: "IA",
    date: "2026",
    filePath: iaOnlineTraining,
    fileType: "pdf",
    description: "Online training certificate from IA.",
    category: "courses",
    isNew: true,
  },
  {
    id: 16,
    title: "IA Participation Certificate",
    issuer: "IA",
    date: "2026",
    filePath: iaParticipation,
    fileType: "pdf",
    description: "Certificate of participation awarded by IA.",
    category: "events",
    isNew: true,
  },
  {
    id: 17,
    title: "Re-Skilling Certificate",
    issuer: "Re-Skilling Programme",
    date: "2026",
    filePath: reSkilling,
    fileType: "pdf",
    description: "Certificate of completion for re-skilling program.",
    category: "courses",
    isNew: true,
  },
  {
    id: 18,
    title: "Pitch Night Edition 2026 Certificate",
    issuer: "Google Developer Groups",
    date: "2026",
    filePath: mdKhajaEshaq,
    fileType: "pdf",
    description: "Certificate awarded to MD. Khaja Eshaq.",
    category: "courses",
    isNew: true,
  },

  // ── OLDER ──
  {
    id: 11,
    title: "Prompt War Winner",
    issuer: "Unstop Igniters Club - VIIT",
    date: "2025",
    filePath: promptWarWinner,
    fileType: "pdf",
    description: "Winner of the Prompt War Event.",
    category: "achievements",
    isNew: false,
  },
  {
    id: 1,
    title: "Innoyudh Certificate",
    issuer: "Innoyudh",
    date: "2025",
    filePath: innoyudhCert,
    fileType: "pdf",
    description:
      "Innoyudh hackathon participation in NSRIT college Visakhapatnam on 12th December 2025.",
    category: "hackathons",
    isNew: false,
  },
  {
    id: 2,
    title: "GDG Dev Fest",
    issuer: "Google Developer Groups",
    date: "2025",
    filePath: gdgDevFestCert,
    fileType: "pdf",
    description:
      "GDG Dev Fest participation in Gitam University Visakhapatnam.",
    category: "events",
    isNew: false,
  },
  {
    id: 3,
    title: "Piston Cup Hackathon",
    issuer: "Piston Cup",
    date: "2025",
    filePath: pistonCupCert,
    fileType: "pdf",
    description:
      "Piston Cup hackathon participation held in Vignans institute of technology Visakhapatnam.",
    category: "hackathons",
    isNew: false,
  },
  {
    id: 4,
    title: "Microsoft Certificate 1",
    issuer: "Microsoft",
    date: "2025",
    filePath: microsoft1Cert,
    fileType: "pdf",
    description: "Azure cloud computing course certification by Microsoft.",
    category: "courses",
    isNew: false,
  },
  {
    id: 5,
    title: "Microsoft Certificate 2",
    issuer: "Microsoft",
    date: "2025",
    filePath: microsoft2Cert,
    fileType: "pdf",
    description: "Azure cloud computing course certification-2 by Microsoft.",
    category: "courses",
    isNew: false,
  },
  {
    id: 6,
    title: "Microsoft Certificate 3",
    issuer: "Microsoft",
    date: "2025",
    filePath: microsoft3Cert,
    fileType: "pdf",
    description: "Azure cloud computing course certification-3 by Microsoft.",
    category: "courses",
    isNew: false,
  },
  {
    id: 7,
    title: "SSDLC Certificate",
    issuer: "CDAC & Ministry of Electronics and IT",
    date: "2025",
    filePath: ssdlcCert,
    fileType: "pdf",
    description:
      "SSDLC Conference held in Gitam University Visakhapatnam by IIT Bhilai and CDAC.",
    category: "events",
    isNew: false,
  },
  {
    id: 8,
    title: "CodeChef Gold Badge",
    issuer: "CodeChef",
    date: "2025",
    filePath: codeChefAchievement,
    fileType: "pdf",
    description:
      "Gold Badge achievement for participating in 50+ contests on CodeChef.",
    category: "achievements",
    isNew: false,
  },
  {
    id: 9,
    title: "HackerRank Achievement",
    issuer: "HackerRank",
    date: "2025",
    filePath: hackerRankAchievement,
    fileType: "pdf",
    description: "HackerRank achievement certificate.",
    category: "achievements",
    isNew: false,
  },
  {
    id: 10,
    title: "LeetCode 50 Days Badge",
    issuer: "LeetCode",
    date: "2025",
    filePath: leetcodeAchievement,
    fileType: "pdf",
    description: "50-days consistency in problem solving on LeetCode.",
    category: "achievements",
    isNew: false,
  },
];
