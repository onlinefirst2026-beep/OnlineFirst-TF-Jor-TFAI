import React from 'react';
import { useJournalConfig } from '../../context/JournalConfigContext';
import { SubPages } from './SubPages';
import {
  subjectTaxonomies,
  maidenCallForPapers,
} from '../../data/journalData';
import {
  BookOpen,
  Calendar,
  ChevronRight,
  Download,
  FileText,
  Award,
  Clock,
  ShieldCheck,
  Send,
  Building,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Bookmark,
  Landmark,
  Scale,
  Users,
  Check,
  ArrowRight,
} from 'lucide-react';

export const Demo1Institutional: React.FC = () => {
  const {
    currentSubPage,
    setCurrentSubPage,
    config,
    articles,
    setSelectedArticle,
  } = useJournalConfig();

  // If viewing a subpage (e.g., 'about', 'aims-scope', 'submit', etc.)
  if (currentSubPage !== 'home') {
    return (
      <div className="bg-[#FCFAF8] text-slate-900 min-h-screen font-d1-body">
        {/* Institutional Utility Top Strip */}
        <div className="bg-[#012509] text-[#DFD5CE] text-[11px] py-1.5 px-4 sm:px-6 border-b border-[#012509]">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C48A36]" />
              <span className="font-semibold text-white">Joint Academic & Professional Journal</span>
              <span className="text-[#C48A36]">•</span>
              <span className="text-[#DFD5CE]">CITN Umuahia Chapter & MOUAU COLMAS</span>
            </div>
            <div className="flex items-center gap-4 text-[10px] text-[#DFD5CE]/80">
              <span>ISSN Online Pending</span>
              <span>Biannual Publication (June / Dec)</span>
            </div>
          </div>
        </div>

        {/* Structured University-Style Main Header */}
        <header className="bg-white border-b border-[#DFD5CE] shadow-2xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentSubPage('home')}
                className="w-12 h-12 rounded-xl bg-[#012509] text-[#C48A36] font-d1-heading font-bold text-2xl flex items-center justify-center border border-[#C48A36]/40 shadow-xs shrink-0 hover:border-[#C48A36] transition-colors"
              >
                TF
              </button>
              <div>
                <button
                  onClick={() => setCurrentSubPage('home')}
                  className="text-2xl sm:text-3xl font-d1-heading font-bold text-[#012509] tracking-tight block hover:text-[#C48A36] transition-colors text-left"
                >
                  Tax Frontier
                </button>
                <p className="text-xs text-slate-600 font-medium">
                  Navigating the New Era of Taxation • Joint CITN-MOUAU Publishing
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentSubPage('submit')}
                className="px-4 py-2 bg-[#C48A36] hover:bg-[#b0782b] text-white font-semibold rounded-xl text-xs flex items-center gap-1.5 shadow-xs transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Paper</span>
              </button>
            </div>
          </div>

          {/* Institutional Primary Navigation */}
          <nav className="bg-[#012509] text-white text-xs px-4 border-t border-[#012509]">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-1 py-1.5">
              <button
                onClick={() => setCurrentSubPage('home')}
                className="px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors text-[#DFD5CE] hover:text-white"
              >
                Overview
              </button>
              <button
                onClick={() => setCurrentSubPage('about')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  currentSubPage === 'about' ? 'bg-white/15 text-[#C48A36] font-semibold border-b-2 border-[#BF6521]' : 'text-[#DFD5CE] hover:bg-white/10 hover:text-white'
                }`}
              >
                Institutional Mandate
              </button>
              <button
                onClick={() => setCurrentSubPage('aims-scope')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  currentSubPage === 'aims-scope' ? 'bg-white/15 text-[#C48A36] font-semibold border-b-2 border-[#BF6521]' : 'text-[#DFD5CE] hover:bg-white/10 hover:text-white'
                }`}
              >
                Aims & Scope (26 Areas)
              </button>
              <button
                onClick={() => setCurrentSubPage('call-for-papers')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  currentSubPage === 'call-for-papers' ? 'bg-white/15 text-[#C48A36] font-semibold border-b-2 border-[#BF6521]' : 'text-[#DFD5CE] hover:bg-white/10 hover:text-white'
                }`}
              >
                Call for Papers
              </button>
              <button
                onClick={() => setCurrentSubPage('editorial-board')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  currentSubPage === 'editorial-board' ? 'bg-white/15 text-[#C48A36] font-semibold border-b-2 border-[#BF6521]' : 'text-[#DFD5CE] hover:bg-white/10 hover:text-white'
                }`}
              >
                Editorial Council
              </button>
              <button
                onClick={() => setCurrentSubPage('peer-review')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  currentSubPage === 'peer-review' ? 'bg-white/15 text-[#C48A36] font-semibold border-b-2 border-[#BF6521]' : 'text-[#DFD5CE] hover:bg-white/10 hover:text-white'
                }`}
              >
                Peer Review Process
              </button>
            </div>
          </nav>
        </header>

        <main>
          <SubPages />
        </main>
      </div>
    );
  }

  return (
    <div className="bg-[#FCFAF8] text-slate-900 min-h-screen font-d1-body">
      {/* 1. Structured Institutional Top Bar */}
      <div className="bg-[#012509] text-[#DFD5CE] text-[11px] py-2 px-4 sm:px-6 border-b border-[#012509]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C48A36] shadow-xs" />
            <span className="font-semibold text-white">CITN Umuahia Chapter</span>
            <span className="text-[#C48A36]">×</span>
            <span className="font-semibold text-white">MOUAU College of Management Sciences (COLMAS)</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#DFD5CE]/90">
            <span className="hidden sm:inline">ISSN (Online): Pending Confirmation</span>
            <span className="hidden md:inline text-[#C48A36]">•</span>
            <span>Biannual Release: June & December</span>
            <button
              onClick={() => setCurrentSubPage('submit')}
              className="text-[#C48A36] hover:text-white font-semibold transition-colors flex items-center gap-1"
            >
              <span>Author Portal</span>
              <span className="text-[#BF6521]">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Structured Institutional Masthead & Primary Navigation */}
      <header className="bg-white border-b border-[#DFD5CE] shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#012509] text-[#C48A36] font-d1-heading font-bold text-2xl flex items-center justify-center border border-[#C48A36]/40 shadow-xs shrink-0">
              TF
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-d1-heading font-bold text-[#012509] tracking-tight">
                  Tax Frontier
                </h1>
                <span className="text-[10px] font-semibold uppercase tracking-wider bg-[#DFD5CE]/40 text-[#012509] px-2 py-0.5 rounded border border-[#D7A37B]/40">
                  Volume 1 • Issue 1 (2026)
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                Navigating the New Era of Taxation — Joint Academic & Professional Publishing
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentSubPage('call-for-papers')}
              className="px-4 py-2.5 bg-white hover:bg-[#DFD5CE]/20 text-[#012509] font-medium rounded-xl text-xs border border-[#DFD5CE] transition-colors"
            >
              Maiden Call for Papers
            </button>
            <button
              onClick={() => setCurrentSubPage('submit')}
              className="px-5 py-2.5 bg-[#C48A36] hover:bg-[#b0782b] text-white font-semibold rounded-xl text-xs flex items-center gap-1.5 shadow-xs transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Manuscript</span>
            </button>
          </div>
        </div>

        {/* Institutional Section Nav */}
        <nav className="bg-[#012509] text-white text-xs px-4 border-t border-[#012509]">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-1 py-1.5">
            <button
              onClick={() => setCurrentSubPage('home')}
              className="px-3.5 py-1.5 rounded-lg bg-white/15 text-[#C48A36] font-semibold border-b-2 border-[#BF6521] transition-colors"
            >
              Journal Overview
            </button>
            <button
              onClick={() => setCurrentSubPage('about')}
              className="px-3.5 py-1.5 rounded-lg hover:bg-white/10 text-[#DFD5CE] hover:text-white transition-colors"
            >
              Institutional Mandate
            </button>
            <button
              onClick={() => setCurrentSubPage('aims-scope')}
              className="px-3.5 py-1.5 rounded-lg hover:bg-white/10 text-[#DFD5CE] hover:text-white transition-colors"
            >
              Aims & Scope (26 Areas)
            </button>
            <button
              onClick={() => setCurrentSubPage('editorial-board')}
              className="px-3.5 py-1.5 rounded-lg hover:bg-white/10 text-[#DFD5CE] hover:text-white transition-colors"
            >
              Editorial Council
            </button>
            <button
              onClick={() => setCurrentSubPage('author-guidelines')}
              className="px-3.5 py-1.5 rounded-lg hover:bg-white/10 text-[#DFD5CE] hover:text-white transition-colors"
            >
              Author Guidelines
            </button>
            <button
              onClick={() => setCurrentSubPage('peer-review')}
              className="px-3.5 py-1.5 rounded-lg hover:bg-white/10 text-[#DFD5CE] hover:text-white transition-colors"
            >
              14-Step Review
            </button>
            <button
              onClick={() => setCurrentSubPage('fees')}
              className="px-3.5 py-1.5 rounded-lg hover:bg-white/10 text-[#DFD5CE] hover:text-white transition-colors"
            >
              Publication Fees
            </button>
          </div>
        </nav>
      </header>

      {/* 3. SNHU-Inspired Structured Institutional Hero */}
      <section className="bg-white border-b border-[#DFD5CE] py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFD5CE]/30 border border-[#DFD5CE] text-xs text-[#012509]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C48A36]" />
                <span className="font-semibold">Official Refereed Publication • Established 2026</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-d1-hero-title text-[#012509]">
                Bridging Academic Rigor & Practical Tax Governance
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                Tax Frontier is an internationally indexed, double-blind peer-reviewed journal jointly published by <strong>The Chartered Institute of Taxation of Nigeria (CITN Umuahia Chapter)</strong> and the <strong>College of Management Sciences, MOUAU</strong>. We publish pioneering empirical research, statutory case analyses, and revenue administration reforms.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setCurrentSubPage('submit')}
                  className="px-6 py-3 bg-[#012509] hover:bg-[#023b0f] text-[#C48A36] border border-[#C48A36]/40 font-semibold rounded-xl text-xs flex items-center gap-2 shadow-xs transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit to Maiden Issue</span>
                </button>
                <button
                  onClick={() => setCurrentSubPage('call-for-papers')}
                  className="px-5 py-3 bg-white hover:bg-[#DFD5CE]/20 text-[#012509] font-medium rounded-xl text-xs border border-[#DFD5CE] transition-colors flex items-center gap-1.5"
                >
                  <span>Read Author Call for Papers</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#BF6521]" />
                </button>
              </div>
            </div>

            {/* Structured Institutional Highlights Box */}
            <div className="lg:col-span-4 bg-[#DFD5CE]/20 rounded-2xl border border-[#DFD5CE] p-6 space-y-4">
              <h3 className="text-xs font-d1-heading font-bold uppercase tracking-wider text-[#012509] border-b border-[#DFD5CE] pb-2">
                Institutional Partnership Highlights
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-[#C48A36] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">CITN Umuahia Chapter</strong>
                    <span className="text-slate-600 text-[11px]">Direct grounding in Nigerian tax administration practice & statutory tribunals.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Landmark className="w-4 h-4 text-[#C48A36] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">COLMAS, MOUAU</strong>
                    <span className="text-slate-600 text-[11px]">Academic oversight across Accounting, Economics, and Management faculty.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Scale className="w-4 h-4 text-[#BF6521] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Double-Blind Editorial Standard</strong>
                    <span className="text-slate-600 text-[11px]">Turnitin similarity ceiling ≤15% with two external peer assessments.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Structured Metrics Strip (SNHU-Style High-Contrast Blocks) */}
      <section className="bg-[#FCFAF8] border-b border-[#DFD5CE] py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="bg-white p-4 rounded-xl border border-[#DFD5CE] shadow-2xs">
            <span className="text-slate-500 text-[11px] block font-medium">Publishing Frequency</span>
            <strong className="text-[#012509] text-base font-d1-heading font-bold block mt-0.5">Biannual Issues</strong>
            <span className="text-[11px] text-[#C48A36] font-semibold">June & December Release</span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-[#DFD5CE] shadow-2xs">
            <span className="text-slate-500 text-[11px] block font-medium">Review Standard</span>
            <strong className="text-[#012509] text-base font-d1-heading font-bold block mt-0.5">Double-Blind Review</strong>
            <span className="text-[11px] text-[#C48A36] font-semibold">4–6 Week Average Turnaround</span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-[#DFD5CE] shadow-2xs">
            <span className="text-slate-500 text-[11px] block font-medium">Access License</span>
            <strong className="text-[#012509] text-base font-d1-heading font-bold block mt-0.5">CC BY 4.0 Open Access</strong>
            <span className="text-[11px] text-[#C48A36] font-semibold">Immediate Global Availability</span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-[#DFD5CE] shadow-2xs">
            <span className="text-slate-500 text-[11px] block font-medium">Scientific Integrity</span>
            <strong className="text-[#012509] text-base font-d1-heading font-bold block mt-0.5">≤15% Turnitin Match</strong>
            <span className="text-[11px] text-[#BF6521] font-semibold">Strict Plagiarism Filtering</span>
          </div>
        </div>
      </section>

      {/* 5. Main 2-Column Content Grid: Articles & Institutional Fast-Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Column (8 cols): Volume 1 Spotlight + Published Articles Feed */}
          <div className="lg:col-span-8 space-y-8">
            {/* Maiden Issue Announcement Block */}
            <div className="bg-white rounded-2xl border border-[#DFD5CE] p-6 sm:p-8 shadow-2xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#012509] text-[#C48A36] px-2.5 py-1 rounded border border-[#C48A36]/30">
                  Inaugural Issue CFP
                </span>
                <span className="text-xs text-[#BF6521] bg-[#BF6521]/10 px-2.5 py-1 rounded-md border border-[#BF6521]/20 font-medium">
                  Deadline: <strong className="font-bold">{config.submissionDeadline}</strong>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-d1-heading font-bold text-[#012509]">
                {maidenCallForPapers.theme}
              </h3>

              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                The joint editorial board invites original research contributions examining the restructuring of fiscal institutions, digital economic taxation, and revenue administration technology across Africa.
              </p>

              <div className="mt-5 p-4 rounded-xl bg-[#DFD5CE]/20 border border-[#DFD5CE] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-slate-600 block text-[11px]">Maiden Edition Author Benefit:</span>
                  <strong className="text-[#012509] text-sm">
                    30% Publication Fee Waiver (₦{(config.publicationFee * 0.7).toLocaleString()})
                  </strong>
                </div>
                <button
                  onClick={() => setCurrentSubPage('submit')}
                  className="px-4 py-2 bg-[#012509] hover:bg-[#023b0f] text-[#C48A36] border border-[#C48A36]/40 font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Online</span>
                </button>
              </div>
            </div>

            {/* Featured Scholarly Articles Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#DFD5CE] pb-3">
                <div>
                  <h3 className="text-lg font-d1-heading font-bold text-[#012509]">
                    Current Articles • Volume 1 (2026)
                  </h3>
                  <p className="text-xs text-slate-500">Peer-reviewed preprints and maiden edition acceptances.</p>
                </div>
                <button
                  onClick={() => setCurrentSubPage('articles')}
                  className="text-xs font-semibold text-[#C48A36] hover:text-[#BF6521] flex items-center gap-1 transition-colors"
                >
                  Browse Archive <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-4">
                {articles.map((article) => (
                  <article
                    key={article.id}
                    className="bg-white rounded-2xl border border-[#DFD5CE] p-6 shadow-2xs hover:border-[#C48A36] hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                      <div className="flex flex-wrap gap-1">
                        {(article.subjectAreas || []).slice(0, 2).map((sub) => (
                          <span
                            key={sub}
                            className="text-[10px] font-semibold uppercase tracking-wider bg-[#DFD5CE]/40 text-[#012509] px-2 py-0.5 rounded border border-[#D7A37B]/40"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                      <span className="text-[10px] font-mono text-[#BF6521] bg-[#BF6521]/10 px-1.5 py-0.5 rounded border border-[#BF6521]/20 font-bold">
                        DEMO DATA
                      </span>
                    </div>

                    <h4
                      onClick={() => {
                        setSelectedArticle(article);
                        setCurrentSubPage('article-detail');
                      }}
                      className="text-base font-d1-heading font-bold text-slate-900 group-hover:text-[#012509] cursor-pointer transition-colors leading-snug"
                    >
                      {article.title}
                    </h4>

                    <p className="text-xs text-slate-500 mt-1 font-medium">
                      {article.authors.map((a) => a.name).join(', ')} • {article.authors[0]?.affiliation}
                    </p>

                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {article.abstract}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-mono text-[11px] text-slate-400">
                        DOI: 10.5897/TF.{article.volume}.{article.issue}
                      </span>
                      <button
                        onClick={() => {
                          setSelectedArticle(article);
                          setCurrentSubPage('article-detail');
                        }}
                        className="font-semibold text-[#012509] hover:text-[#C48A36] flex items-center gap-1 text-xs transition-colors"
                      >
                        Read Full Article <ChevronRight className="w-3 h-3 text-[#BF6521]" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Institutional Sidebar (4 cols): Fast Facts, Guidelines, Governance */}
          <div className="lg:col-span-4 space-y-6">
            {/* Author Quick Action Card */}
            <div className="bg-[#DFD5CE]/20 rounded-2xl border border-[#DFD5CE] p-5 space-y-3">
              <h4 className="text-xs font-d1-heading font-bold uppercase tracking-wider text-[#012509]">
                Author Submission Checklist
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C48A36] shrink-0 mt-0.5" />
                  <span>Word (.docx) format using APA 7th edition referencing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C48A36] shrink-0 mt-0.5" />
                  <span>Structured abstract between 200–250 words</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C48A36] shrink-0 mt-0.5" />
                  <span>ORCID identifiers for all contributing authors</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#BF6521] shrink-0 mt-0.5" />
                  <span>Anonymized manuscript for double-blind review</span>
                </li>
              </ul>
              <div className="pt-2">
                <button
                  onClick={() => setCurrentSubPage('author-guidelines')}
                  className="w-full py-2 bg-white hover:bg-slate-50 text-[#012509] font-semibold rounded-xl text-xs border border-[#DFD5CE] transition-colors text-center block"
                >
                  View Full Author Guidelines
                </button>
              </div>
            </div>

            {/* JORMASS Federation Status Card */}
            <div className="bg-white rounded-2xl border border-[#DFD5CE] p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">MOUAU Scholarly Network</span>
                <span className="text-[10px] font-mono bg-[#012509] text-[#C48A36] px-1.5 py-0.5 rounded font-bold">
                  Configured
                </span>
              </div>
              <h4 className="text-sm font-d1-heading font-bold text-[#012509]">
                JORMASS Cross-Connection
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tax Frontier maintains pre-engineered federation gateways with the Journal of Management Sciences (JORMASS, MOUAU) under Option {config.jormassRelationship.replace('option', '')}.
              </p>
            </div>

            {/* Editorial Secretariat Card */}
            <div className="bg-white rounded-2xl border border-[#DFD5CE] p-5 space-y-2 text-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Secretariat</span>
              <h4 className="text-sm font-d1-heading font-bold text-[#012509]">
                Editorial Office
              </h4>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                College of Management Sciences, Michael Okpara University of Agriculture, Umudike, Abia State, Nigeria.
              </p>
              <p className="font-mono text-xs text-[#012509] font-semibold pt-1">
                {config.editorialEmail}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Institutional Footer */}
      <footer className="bg-[#012509] text-[#DFD5CE] border-t border-[#012509] text-xs py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-black/25 text-[#C48A36] flex items-center justify-center font-bold text-sm border border-[#C48A36]/40">
                TF
              </div>
              <span className="font-d1-heading font-bold text-white text-base">Tax Frontier</span>
            </div>
            <p className="text-[11px] text-[#DFD5CE]/80 leading-relaxed">
              Joint academic and professional journal published by CITN Umuahia Chapter and MOUAU College of Management Sciences.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase text-[10px] tracking-wider mb-2">Journal Governance</h5>
            <ul className="space-y-1.5 text-[#DFD5CE]/80 text-[11px]">
              <li><button onClick={() => setCurrentSubPage('about')} className="hover:text-white">Institutional Mandate</button></li>
              <li><button onClick={() => setCurrentSubPage('editorial-board')} className="hover:text-white">Editorial Board</button></li>
              <li><button onClick={() => setCurrentSubPage('peer-review')} className="hover:text-white">14-Step Peer Review</button></li>
              <li><button onClick={() => setCurrentSubPage('ethics')} className="hover:text-white">COPE Ethics Statement</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase text-[10px] tracking-wider mb-2">Author Resources</h5>
            <ul className="space-y-1.5 text-[#DFD5CE]/80 text-[11px]">
              <li><button onClick={() => setCurrentSubPage('author-guidelines')} className="hover:text-white">Author Guidelines</button></li>
              <li><button onClick={() => setCurrentSubPage('fees')} className="hover:text-white">Publication Fee Schedule</button></li>
              <li><button onClick={() => setCurrentSubPage('call-for-papers')} className="hover:text-white">Maiden Call for Papers</button></li>
              <li><button onClick={() => setCurrentSubPage('submit')} className="hover:text-white">Manuscript Submission</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase text-[10px] tracking-wider mb-2">Licensing & Indexing</h5>
            <p className="text-[11px] text-[#DFD5CE]/80 leading-relaxed">
              All articles published under Creative Commons Attribution 4.0 International (CC BY 4.0). Crossref DOI allocation and Google Scholar meta tag compliance.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-[#DFD5CE]/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-[#DFD5CE]/70">
          <span>© 2026 Tax Frontier. CITN Umuahia Chapter & MOUAU COLMAS.</span>
          <span>OnlineFirst Proposal Architecture & Implementation Framework.</span>
        </div>
      </footer>
    </div>
  );
};
