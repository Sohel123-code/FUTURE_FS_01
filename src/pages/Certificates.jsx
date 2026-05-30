import React, { useState, useRef } from 'react';

// ── NEW certificates (added recently) ────────────────────────────────────────
import devFestHackathon from '../assets/certificates/DEV_FEST Hacathaon.jpeg';
import iaOnlineTraining from '../assets/certificates/IA Online Training Certificate (1).pdf';
import iaParticipation from '../assets/certificates/IA Participation Certificate (3).pdf';
import ideBootCamp from '../assets/certificates/IDE BOOT CAMP certificate.jpeg';
import reSkilling from '../assets/certificates/Re skiiling certificate.pdf';
import wadhwaniFoundation from '../assets/certificates/Wadhwani foundation .pdf';
import promptWarWinner from '../assets/certificates/Prompt war winner.pdf';
import mdKhajaEshaq from '../assets/certificates/MD.KHAJA ESHAQ.pdf';

// ── Older certificates ────────────────────────────────────────────────────────
import innoyudhCert from '../assets/Innoyudh .pdf';
import gdgDevFestCert from '../assets/gdg dev fest.pdf';
import pistonCupCert from '../assets/piston cup hacakthon .pdf';
import microsoft1Cert from '../assets/MICROSOFT-1.PDF';
import microsoft2Cert from '../assets/MICROSOFT-2.PDF';
import microsoft3Cert from '../assets/MICROSOFT-3.PDF';
import ssdlcCert from '../assets/ssdlc .pdf';
import codeChefAchievement from '../assets/code chef achievement.pdf';
import hackerRankAchievement from '../assets/hacker rank achievement .pdf';
import leetcodeAchievement from '../assets/leetcode achievement .pdf';

// ─────────────────────────────────────────────────────────────────────────────
// Certificate data  (newest first)
// ─────────────────────────────────────────────────────────────────────────────
const certificates = [
  // ── NEW ──
  {
    id: 12,
    title: 'DEV FEST Hackathon',
    issuer: 'Google Developer Groups',
    date: '2026',
    filePath: devFestHackathon,
    fileType: 'image',
    description: 'Participated in the GDG DEV FEST Hackathon event.',
    category: 'hackathons',
    isNew: true,
  },
  {
    id: 13,
    title: 'IDE Boot Camp',
    issuer: 'IDE Boot Camp',
    date: '2026',
    filePath: ideBootCamp,
    fileType: 'image',
    description: 'Certificate of participation in the IDE Boot Camp program.',
    category: 'events',
    isNew: true,
  },
  {
    id: 14,
    title: 'Wadhwani Foundation Certificate',
    issuer: 'Wadhwani Foundation',
    date: '2026',
    filePath: wadhwaniFoundation,
    fileType: 'pdf',
    description: 'Certificate awarded by the Wadhwani Foundation.',
    category: 'courses',
    isNew: true,
  },
  {
    id: 15,
    title: 'IA Online Training Certificate',
    issuer: 'IA',
    date: '2026',
    filePath: iaOnlineTraining,
    fileType: 'pdf',
    description: 'Online training certificate from IA.',
    category: 'courses',
    isNew: true,
  },
  {
    id: 16,
    title: 'IA Participation Certificate',
    issuer: 'IA',
    date: '2026',
    filePath: iaParticipation,
    fileType: 'pdf',
    description: 'Certificate of participation awarded by IA.',
    category: 'events',
    isNew: true,
  },
  {
    id: 17,
    title: 'Re-Skilling Certificate',
    issuer: 'Re-Skilling Programme',
    date: '2026',
    filePath: reSkilling,
    fileType: 'pdf',
    description: 'Certificate of completion for re-skilling program.',
    category: 'courses',
    isNew: true,
  },
  {
    id: 18,
    title: 'Pitch Night Edition 2026 Certificate',
    issuer: 'Google Developer Groups',
    date: '2026',
    filePath: mdKhajaEshaq,
    fileType: 'pdf',
    description: 'Certificate awarded to MD. Khaja Eshaq.',
    category: 'courses',
    isNew: true,
  },

  // ── OLDER ──
  {
    id: 11,
    title: 'Prompt War Winner',
    issuer: 'Unstop Igniters Club - VIIT',
    date: '2025',
    filePath: promptWarWinner,
    fileType: 'pdf',
    description: 'Winner of the Prompt War Event.',
    category: 'achievements',
    isNew: false,
  },
  {
    id: 1,
    title: 'Innoyudh Certificate',
    issuer: 'Innoyudh',
    date: '2025',
    filePath: innoyudhCert,
    fileType: 'pdf',
    description: 'Innoyudh hackathon participation in NSRIT college Visakhapatnam on 12th December 2025.',
    category: 'hackathons',
    isNew: false,
  },
  {
    id: 2,
    title: 'GDG Dev Fest',
    issuer: 'Google Developer Groups',
    date: '2025',
    filePath: gdgDevFestCert,
    fileType: 'pdf',
    description: 'GDG Dev Fest participation in Gitam University Visakhapatnam.',
    category: 'events',
    isNew: false,
  },
  {
    id: 3,
    title: 'Piston Cup Hackathon',
    issuer: 'Piston Cup',
    date: '2025',
    filePath: pistonCupCert,
    fileType: 'pdf',
    description: 'Piston Cup hackathon participation held in Vignans institute of technology Visakhapatnam.',
    category: 'hackathons',
    isNew: false,
  },
  {
    id: 4,
    title: 'Microsoft Certificate 1',
    issuer: 'Microsoft',
    date: '2025',
    filePath: microsoft1Cert,
    fileType: 'pdf',
    description: 'Azure cloud computing course certification by Microsoft.',
    category: 'courses',
    isNew: false,
  },
  {
    id: 5,
    title: 'Microsoft Certificate 2',
    issuer: 'Microsoft',
    date: '2025',
    filePath: microsoft2Cert,
    fileType: 'pdf',
    description: 'Azure cloud computing course certification-2 by Microsoft.',
    category: 'courses',
    isNew: false,
  },
  {
    id: 6,
    title: 'Microsoft Certificate 3',
    issuer: 'Microsoft',
    date: '2025',
    filePath: microsoft3Cert,
    fileType: 'pdf',
    description: 'Azure cloud computing course certification-3 by Microsoft.',
    category: 'courses',
    isNew: false,
  },
  {
    id: 7,
    title: 'SSDLC Certificate',
    issuer: 'CDAC & Ministry of Electronics and IT',
    date: '2025',
    filePath: ssdlcCert,
    fileType: 'pdf',
    description: 'SSDLC Conference held in Gitam University Visakhapatnam by IIT Bhilai and CDAC.',
    category: 'events',
    isNew: false,
  },
  {
    id: 8,
    title: 'CodeChef Gold Badge',
    issuer: 'CodeChef',
    date: '2025',
    filePath: codeChefAchievement,
    fileType: 'pdf',
    description: 'Gold Badge achievement for participating in 50+ contests on CodeChef.',
    category: 'achievements',
    isNew: false,
  },
  {
    id: 9,
    title: 'HackerRank Achievement',
    issuer: 'HackerRank',
    date: '2025',
    filePath: hackerRankAchievement,
    fileType: 'pdf',
    description: 'HackerRank achievement certificate.',
    category: 'achievements',
    isNew: false,
  },
  {
    id: 10,
    title: 'LeetCode 50 Days Badge',
    issuer: 'LeetCode',
    date: '2025',
    filePath: leetcodeAchievement,
    fileType: 'pdf',
    description: '50-days consistency in problem solving on LeetCode.',
    category: 'achievements',
    isNew: false,
  },
];

// Category labels
const categoryLabels = {
  hackathons: 'Hackathon',
  events: 'Event',
  courses: 'Course',
  achievements: 'Achievement',
};

// ─────────────────────────────────────────────────────────────────────────────
// CertificateCard
// Uses .cert-card class (defined in index.html) for fade-in animation.
// Does NOT use the .reveal class because that relies on IntersectionObserver
// which never fires for cards injected into the viewport after "View More".
// ─────────────────────────────────────────────────────────────────────────────
function CertificateCard({ certificate, index }) {
  const categoryLabel = categoryLabels[certificate.category] || certificate.category;

  return (
    <div
      className="cert-card bg-card p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-primary/10 hover:border-primary/30 group hover:-translate-y-1 flex flex-col"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Document Preview */}
      <div className="space-y-3 mb-4">
        <div className="relative w-full h-64 rounded-lg overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:border-primary/40 transition-all duration-300">
          {certificate.fileType === 'image' ? (
            <img
              src={certificate.filePath}
              alt={`${certificate.title} preview`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <iframe
              src={`${certificate.filePath}#view=FitH&toolbar=0&navpanes=0`}
              className="w-full h-full"
              title={`${certificate.title} preview`}
              style={{ border: 'none', background: '#fff' }}
              loading="lazy"
            />
          )}

          {/* NEW badge */}
          {certificate.isNew && (
            <span className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-bold rounded-full bg-primary text-primary-foreground shadow-md animate-pulse">
              NEW
            </span>
          )}
        </div>

        {/* Category Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            {categoryLabel}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-4 flex-grow flex flex-col">
        <div className="transition-transform duration-300 group-hover:translate-x-1">
          <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {certificate.title}
          </h3>
          <p className="text-sm text-card-foreground/70 mb-1">
            <span className="font-semibold">Issuer:</span> {certificate.issuer}
          </p>
          <p className="text-xs text-card-foreground/60 mb-3">
            <span className="font-semibold">Date:</span> {certificate.date}
          </p>
          {certificate.description && (
            <p className="text-xs text-card-foreground/80 leading-relaxed">{certificate.description}</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2 mt-auto">
          <a
            href={certificate.filePath}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 text-sm"
          >
            View
          </a>
          <a
            href={certificate.filePath}
            download
            className="flex-1 text-center px-4 py-2 bg-secondary/10 text-secondary border border-secondary/40 rounded-lg font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 text-sm"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Certificates page
// ─────────────────────────────────────────────────────────────────────────────
const INITIAL_VISIBLE = 5;

function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const visibleCerts = showAll ? certificates : certificates.slice(0, INITIAL_VISIBLE);
  const totalCount = certificates.length;
  const hiddenCount = totalCount - INITIAL_VISIBLE;

  return (
    <section ref={sectionRef} className="py-24">
      {/* Header — uses .reveal (safe here, always in viewport on load) */}
      <div className="text-center mb-12 reveal">
        <h2 className="text-4xl font-bold">My Certificates</h2>
        <p className="text-lg text-foreground/70 mt-2">A collection of my achievements and certifications.</p>
        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />

        {/* Total Count */}
        <div className="mt-6 mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
            <span className="text-2xl">📜</span>
            <span className="text-lg font-bold text-foreground">
              Total Certificates: <span className="text-primary">{totalCount}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Certificate Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleCerts.map((certificate, index) => (
          <CertificateCard key={certificate.id} certificate={certificate} index={index} />
        ))}
      </div>

      {/* ── View More button ── */}
      {!showAll && hiddenCount > 0 && (
        <div className="flex flex-col items-center mt-12 gap-3">
          <p className="text-sm text-foreground/50">
            {hiddenCount} more certificate{hiddenCount !== 1 ? 's' : ''} available
          </p>
          <button
            onClick={() => setShowAll(true)}
            style={{
              background: 'linear-gradient(135deg, hsl(188, 84%, 48%), hsl(35, 92%, 55%))',
              color: '#fff',
            }}
            className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 text-base"
          >
            <span>View All Certificates</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}

      {/* ── Show Less button ── */}
      {showAll && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => {
              setShowAll(false);
              sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              border: '2px solid hsl(188, 84%, 48%)',
              color: 'hsl(188, 84%, 48%)',
            }}
            className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold hover:bg-primary/10 hover:scale-105 active:scale-95 transition-all duration-300 text-base bg-transparent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
            <span>Show Less</span>
          </button>
        </div>
      )}
    </section>
  );
}

export default Certificates;
