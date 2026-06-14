import React, { useState } from 'react';
import linkedinImg from '../assets/linkdn.png';
import githubImg from '../assets/github.png';
import hackerRankImg from '../assets/hk logo.jpg';
import codechefImg from '../assets/codecef.jpg';
import leetcodeImg from '../assets/leetcode.png';

// Import Resume PDFs
import mainResume from '../assets/certificates/Main_resume.pdf';
import resume1 from '../assets/certificates/reaume 1.pdf';
import resume2 from '../assets/certificates/resume 2.pdf';
import resume3 from '../assets/certificates/resume 3.pdf';

function Connect() {
  const [viewingResume, setViewingResume] = useState(null);
  const socialLinks = [
    {
      platform: 'LinkedIn',
      desc: 'Connect professionally',
      img: linkedinImg,
      link: 'https://www.linkedin.com/in/md-khaja-eshaq-8862b532a',
      bgGradient: 'from-[#0077b5]/20 to-[#0077b5]/5',
      btnGradient: 'from-[#0077b5] to-[#00a0dc]'
    },
    {
      platform: 'GitHub',
      desc: 'View my repositories',
      img: githubImg,
      link: 'https://github.com/Sohel123-code',
      bgGradient: 'from-[#24292e]/20 to-[#24292e]/5',
      btnGradient: 'from-[#24292e] to-[#404448]'
    },
    {
      platform: 'HackerRank',
      desc: 'Check my coding problem logic',
      img: hackerRankImg,
      link: 'https://www.hackerrank.com/profile/mdsohel46940',
      bgGradient: 'from-[#00EA64]/20 to-[#00EA64]/5',
      btnGradient: 'from-[#00EA64] to-[#00cfa3]'
    },
    {
      platform: 'CodeChef',
      desc: 'View competitive programming',
      img: codechefImg,
      link: 'https://www.codechef.com/users/mdsohel123',
      bgGradient: 'from-[#5B4638]/20 to-[#5B4638]/5',
      btnGradient: 'from-[#5B4638] to-[#8B6B55]'
    },
    {
      platform: 'LeetCode',
      desc: 'View data structure skills',
      img: leetcodeImg,
      link: 'https://leetcode.com/u/mdsohel786/',
      bgGradient: 'from-[#FFA116]/20 to-[#FFA116]/5',
      btnGradient: 'from-[#FFA116] to-[#ffb84d]'
    }
  ];

  const resumes = [
    {
      title: 'Main Resume',
      pdf: mainResume,
      isMain: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
      )
    },
    {
      title: 'Resume-1',
      pdf: resume1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      )
    },
    {
      title: 'Resume-2',
      pdf: resume2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
      )
    },
    {
      title: 'Resume-3',
      pdf: resume3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
      )
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-secondary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 relative z-10">

        {/* Resumes Section */}
        <div className="reveal">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Download My Resume</h2>
            <p className="text-lg md:text-xl text-foreground/70 mt-4 max-w-2xl mx-auto">
              Choose the resume that best fits your requirement.
            </p>
            <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resumes.map((resume, idx) => (
              <div
                key={idx}
                className={`group relative backdrop-blur-md p-8 rounded-3xl border shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full overflow-hidden ${
                  resume.isMain
                    ? 'bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-400/40 ring-2 ring-amber-400/20'
                    : 'bg-card/40 border-border/50'
                }`}
              >
                {/* Decorative glow inside card */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl transition-all duration-500 ${
                  resume.isMain ? 'bg-amber-400/15 group-hover:bg-amber-400/25' : 'bg-primary/10 group-hover:bg-primary/20'
                }`}></div>

                {/* Featured badge for Main Resume */}
                {resume.isMain && (
                  <div className="absolute top-3 right-3 z-20">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-md animate-pulse">
                      ⭐ Main
                    </span>
                  </div>
                )}

                {/* PDF Preview */}
                <div className={`relative w-full h-56 rounded-xl overflow-hidden mb-5 z-10 border transition-all duration-300 ${
                  resume.isMain
                    ? 'border-amber-400/30 group-hover:border-amber-400/60'
                    : 'border-primary/20 group-hover:border-primary/40'
                }`}>
                  <iframe
                    src={`${resume.pdf}#view=FitH&toolbar=0&navpanes=0`}
                    className="w-full h-full"
                    title={`${resume.title} preview`}
                    style={{ border: 'none', background: '#fff' }}
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl font-bold text-card-foreground text-center mb-3 z-10">
                  {resume.title}
                </h3>

                <div className="flex gap-2 z-10 mt-auto pt-4">
                  <button
                    onClick={() => setViewingResume(resume)}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 text-sm font-semibold rounded-xl border-2 whitespace-nowrap transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] ${
                      resume.isMain
                        ? 'border-amber-500 text-amber-500 hover:bg-amber-500/10'
                        : 'border-blue-500 text-blue-500 hover:bg-blue-500/10'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    View
                  </button>
                  <a
                    href={resume.pdf}
                    download
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 text-sm text-white font-semibold rounded-xl shadow-md whitespace-nowrap transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] ${
                      resume.isMain
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 hover:shadow-amber-500/30'
                        : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 hover:shadow-cyan-500/30'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links Section */}
        <div className="reveal">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Connect with Me</h2>
            <p className="text-lg md:text-xl text-foreground/70 mt-4 max-w-2xl mx-auto">
              Find my work, algorithms, and professional history on these platforms.
            </p>
            <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {socialLinks.map((social, idx) => (
              <div
                key={idx}
                className={`group bg-gradient-to-b ${social.bgGradient} backdrop-blur-md p-6 rounded-3xl border border-white/10 dark:border-white/5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col text-center items-center`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center p-2 mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <img src={social.img} alt={social.platform} className="w-full h-full object-contain" />
                </div>

                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {social.platform}
                </h3>

                <p className="text-sm text-foreground/70 mb-6 flex-grow">
                  {social.desc}
                </p>

                <a
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-2.5 px-4 text-white text-sm font-semibold rounded-xl bg-gradient-to-r ${social.btnGradient} hover:shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]`}
                >
                  Visit Profile
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Fullscreen PDF Modal */}
      {viewingResume && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col bg-black/90 backdrop-blur-sm"
          onClick={() => setViewingResume(null)}
        >
          {/* Modal Header */}
          <div
            className="flex items-center justify-between px-6 py-4 bg-black/60"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-white text-lg font-bold flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
              {viewingResume.title}
              {viewingResume.isMain && (
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white">
                  ⭐ Main
                </span>
              )}
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={viewingResume.pdf}
                download
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all duration-200 text-sm font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download
              </a>
              <button
                onClick={() => setViewingResume(null)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-red-500/80 transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
          </div>
          {/* PDF iframe */}
          <div className="flex-1 p-4" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={viewingResume.pdf}
              className="w-full h-full rounded-lg"
              title={`${viewingResume.title} fullscreen`}
              style={{ border: 'none', background: '#fff' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Connect;


