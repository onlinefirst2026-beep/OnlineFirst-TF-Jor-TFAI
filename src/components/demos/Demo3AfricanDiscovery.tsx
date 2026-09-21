import React, { useState, useEffect } from 'react';
import { useJournalConfig } from '../../context/JournalConfigContext';
import { SubPages } from './SubPages';
import {
  subjectTaxonomies,
  maidenCallForPapers,
  peerReviewWorkflowSteps,
} from '../../data/journalData';
import {
  Search,
  Globe2,
  BookOpen,
  ArrowUpRight,
  Sparkles,
  Share2,
  Download,
  Filter,
  Layers,
  ChevronRight,
  ChevronLeft,
  Send,
  ExternalLink,
  Award,
  Database,
  Compass,
  FileCheck2,
  CheckCircle,
  Hash,
  Microscope,
  FileText,
  Bookmark,
  TrendingUp,
  BarChart3,
  Copy,
  Check,
  Activity,
  Cpu,
  ShieldCheck,
  Scale,
  ArrowRight,
  Eye,
  SlidersHorizontal,
} from 'lucide-react';
import { JournalArticle } from '../../types';

export const Demo3AfricanDiscovery: React.FC = () => {
  const {
    currentSubPage,
    setCurrentSubPage,
    config,
    articles,
    setSelectedArticle,
    setNotification,
  } = useJournalConfig();

  // Carousel State
  const [activeSlide, setActiveSlide] = useState(0);
  const [isCarouselPlaying, setIsCarouselPlaying] = useState(true);

  // Rotating Highlight Banner State
  const [highlightIdx, setHighlightIdx] = useState(0);

  // Research Matrix State
  const [selectedTaxonomyCategory, setSelectedTaxonomyCategory] = useState<string>('all');
  const [searchFilter, setSearchFilter] = useState('');
  const [copiedDoi, setCopiedDoi] = useState<string | null>(null);
  const [citationModalArticle, setCitationModalArticle] = useState<JournalArticle | null>(null);
  const [activeCitationTab, setActiveCitationTab] = useState<'apa' | 'bibtex' | 'harvard'>('apa');

  // Interactive Review Step Inspector
  const [selectedReviewStep, setSelectedReviewStep] = useState<number>(3);

  const dispatches = [
    {
      id: 1,
      tag: 'CFP Spotlight',
      headline: 'Maiden Issue Call for Papers: 30% fee waiver for inaugural accepted manuscripts',
      action: () => setCurrentSubPage('call-for-papers'),
    },
    {
      id: 2,
      tag: 'DOI Pipeline',
      headline: 'Crossref digital object identifiers active for all Volume 1 empirical research articles',
      action: () => setCurrentSubPage('indexing'),
    },
    {
      id: 3,
      tag: 'Peer Rigor',
      headline: 'COPE-compliant double-blind peer review enforced with ≤15% Turnitin similarity threshold',
      action: () => setCurrentSubPage('peer-review'),
    },
    {
      id: 4,
      tag: 'Open Science',
      headline: 'Gold Open Access publication under Creative Commons Attribution 4.0 International license',
      action: () => setCurrentSubPage('about'),
    },
  ];

  // Carousel auto-advance
  useEffect(() => {
    if (!isCarouselPlaying || articles.length === 0) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % articles.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isCarouselPlaying, articles.length]);

  // Dispatch ticker auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIdx((prev) => (prev + 1) % dispatches.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [dispatches.length]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const activeArticle = articles[activeSlide] || articles[0];

  // Filtered articles
  const filteredArticles = articles.filter((a) => {
    const matchesCategory =
      selectedTaxonomyCategory === 'all' ||
      (a.subjectAreas && a.subjectAreas.some((cat) => cat.toLowerCase().includes(selectedTaxonomyCategory.toLowerCase())));
    const matchesSearch =
      !searchFilter ||
      a.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      a.abstract.toLowerCase().includes(searchFilter.toLowerCase()) ||
      a.authors.some((au) => au.name.toLowerCase().includes(searchFilter.toLowerCase())) ||
      a.keywords.some((kw) => kw.toLowerCase().includes(searchFilter.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Copy citation helper
  const copyCitationText = (art: JournalArticle, format: 'apa' | 'bibtex' | 'harvard') => {
    let text = '';
    const authorNames = art.authors.map((a) => a.name).join(', ');
    const year = art.publicationDate.split(' ')[1] || '2026';
    if (format === 'apa') {
      text = `${authorNames} (${year}). ${art.title}. Tax Frontier Discovery, ${art.volume}(${art.issue}), ${art.pages}. https://doi.org/${art.doi}`;
    } else if (format === 'harvard') {
      text = `${authorNames}, ${year}. '${art.title}', Tax Frontier Discovery, vol. ${art.volume}, no. ${art.issue}, pp. ${art.pages}. Available at: <https://doi.org/${art.doi}>.`;
    } else {
      text = `@article{taxfrontier_${art.id},\n  title={${art.title}},\n  author={${authorNames}},\n  journal={Tax Frontier Discovery},\n  volume={${art.volume}},\n  number={${art.issue}},\n  pages={${art.pages}},\n  year={${year}},\n  publisher={CITN Umuahia Chapter and MOUAU COLMAS},\n  doi={${art.doi}}\n}`;
    }
    navigator.clipboard.writeText(text);
    setCopiedDoi(art.id);
    setNotification(`Citation (${format.toUpperCase()}) copied to clipboard`);
    setTimeout(() => {
      setCopiedDoi(null);
      setNotification(null);
    }, 3000);
  };

  // Subpage rendering
  if (currentSubPage !== 'home') {
    return (
      <div className="bg-[#FAF8F2] text-[#1C2621] min-h-screen font-sans">
        {/* Scientific Platform Header */}
        <header className="sticky top-12 z-40 bg-[#12281E] text-white border-b border-[#204533] shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
            <button
              onClick={() => setCurrentSubPage('home')}
              className="flex items-center gap-3 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2F6C50] to-[#183326] text-white font-extrabold text-lg flex items-center justify-center border border-[#8FBFA8]/40 shadow-xs">
                TF
              </div>
              <div>
                <span className="font-extrabold text-base sm:text-lg tracking-tight block text-white group-hover:text-[#D2E4D8] transition-colors">
                  Tax Frontier Discovery
                </span>
                <span className="text-[10px] text-[#A6CEB9] font-mono tracking-wider uppercase">
                  Scientific Discovery Platform • CITN & MOUAU
                </span>
              </div>
            </button>

            <nav className="hidden md:flex items-center gap-1 text-xs">
              <button
                onClick={() => setCurrentSubPage('home')}
                className="px-3 py-1.5 rounded-lg text-[#D2E4D8] hover:text-white hover:bg-[#1E4332] transition-colors font-medium"
              >
                Discovery Home
              </button>
              <button
                onClick={() => setCurrentSubPage('articles')}
                className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                  currentSubPage === 'articles' ? 'bg-[#2F6C50] text-white font-semibold' : 'text-[#D2E4D8] hover:bg-[#1E4332]'
                }`}
              >
                Research Archive
              </button>
              <button
                onClick={() => setCurrentSubPage('aims-scope')}
                className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                  currentSubPage === 'aims-scope' ? 'bg-[#2F6C50] text-white font-semibold' : 'text-[#D2E4D8] hover:bg-[#1E4332]'
                }`}
              >
                26 Taxonomies
              </button>
              <button
                onClick={() => setCurrentSubPage('call-for-papers')}
                className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                  currentSubPage === 'call-for-papers' ? 'bg-[#2F6C50] text-white font-semibold' : 'text-[#D2E4D8] hover:bg-[#1E4332]'
                }`}
              >
                Maiden CFP
              </button>
              <button
                onClick={() => setCurrentSubPage('editorial-board')}
                className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                  currentSubPage === 'editorial-board' ? 'bg-[#2F6C50] text-white font-semibold' : 'text-[#D2E4D8] hover:bg-[#1E4332]'
                }`}
              >
                Editorial Council
              </button>
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentSubPage('submit')}
                className="px-4 py-2 bg-[#2F6C50] hover:bg-[#3B835E] text-white font-bold rounded-lg text-xs flex items-center gap-1.5 shadow-sm transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Paper</span>
              </button>
            </div>
          </div>
        </header>

        <main>
          <SubPages />
        </main>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF8F2] text-[#1C2621] min-h-screen font-sans">
      {/* 1. Scientific Journal Indexing Utility Strip */}
      <div className="bg-[#0C1A14] text-[#D2E4D8] text-[11px] py-2 px-4 sm:px-6 border-b border-[#1A382B]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="bg-[#183326] text-[#EEF5F1] text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-[#2F6C50] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8FBFA8] animate-pulse" />
              PEER-REVIEWED SCIENTIFIC JOURNAL
            </span>
            <span className="text-slate-300 hidden sm:inline">
              CITN Umuahia Chapter • MOUAU COLMAS
            </span>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-mono">
            <span className="hidden md:inline text-[#A6CEB9]">CC BY 4.0 Gold Open Access</span>
            <span className="hidden md:inline text-[#2F6C50]">•</span>
            <span className="text-[#D2E4D8]">Crossref DOI Active</span>
            <span className="hidden sm:inline text-[#2F6C50]">•</span>
            <span className="text-emerald-300 font-semibold">Turnitin Verified (≤15%)</span>
          </div>
        </div>
      </div>

      {/* 2. Scientific Masthead with Modern Sans Typography */}
      <header className="sticky top-12 z-40 bg-[#12281E] text-white border-b border-[#204533] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2F6C50] via-[#204533] to-[#12281E] text-white font-extrabold text-xl flex items-center justify-center border border-[#8FBFA8]/30 shadow-md shrink-0">
              TF
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                  Tax Frontier Discovery
                </h1>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#1D3E2F] text-[#D2E4D8] px-2 py-0.5 rounded border border-[#2F6C50]">
                  Scientific Platform
                </span>
              </div>
              <p className="text-xs text-[#A6CEB9] font-medium mt-0.5">
                African Journal of Taxation, Fiscal Economics & Public Finance Scholarship
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-xs">
            <button
              onClick={() => setCurrentSubPage('call-for-papers')}
              className="px-3.5 py-2 rounded-lg bg-[#1D3E2F] hover:bg-[#254F3C] text-[#D2E4D8] border border-[#2F6C50] flex items-center gap-1.5 transition-colors font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#8FBFA8]" />
              <span>Maiden CFP (30% Waiver)</span>
            </button>
            <button
              onClick={() => setCurrentSubPage('indexing')}
              className="hidden sm:flex px-3 py-2 rounded-lg bg-[#163023] hover:bg-[#1D3E2F] text-slate-300 border border-[#254F3C] items-center gap-1.5 transition-colors"
            >
              <Database className="w-3.5 h-3.5 text-[#8FBFA8]" />
              <span>Indexing Standards</span>
            </button>
            <button
              onClick={() => setCurrentSubPage('submit')}
              className="px-4 py-2 bg-[#2F6C50] hover:bg-[#3B835E] text-white font-bold rounded-lg text-xs flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Manuscript</span>
            </button>
          </div>
        </div>

        {/* Scientific Navigation Strip */}
        <nav className="bg-[#0E2018] text-slate-300 text-xs px-4 border-t border-[#183326]">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-1 py-1.5 font-medium">
            <button
              onClick={() => setCurrentSubPage('home')}
              className="px-3 py-1.5 rounded-lg bg-[#1E4332] text-white font-semibold"
            >
              Discovery Home
            </button>
            <button
              onClick={() => setCurrentSubPage('articles')}
              className="px-3 py-1.5 rounded-lg hover:bg-[#1A382B] text-slate-200 transition-colors"
            >
              Scientific Archive
            </button>
            <button
              onClick={() => setCurrentSubPage('aims-scope')}
              className="px-3 py-1.5 rounded-lg hover:bg-[#1A382B] text-slate-200 transition-colors"
            >
              26 Subject Taxonomies
            </button>
            <button
              onClick={() => setCurrentSubPage('call-for-papers')}
              className="px-3 py-1.5 rounded-lg hover:bg-[#1A382B] text-slate-200 transition-colors"
            >
              Maiden Edition CFP
            </button>
            <button
              onClick={() => setCurrentSubPage('author-guidelines')}
              className="px-3 py-1.5 rounded-lg hover:bg-[#1A382B] text-slate-200 transition-colors"
            >
              Submission Manual
            </button>
            <button
              onClick={() => setCurrentSubPage('editorial-board')}
              className="px-3 py-1.5 rounded-lg hover:bg-[#1A382B] text-slate-200 transition-colors"
            >
              Editorial Council
            </button>
            <button
              onClick={() => setCurrentSubPage('peer-review')}
              className="px-3 py-1.5 rounded-lg hover:bg-[#1A382B] text-slate-200 transition-colors"
            >
              14-Step Review
            </button>
            <button
              onClick={() => setCurrentSubPage('fees')}
              className="px-3 py-1.5 rounded-lg hover:bg-[#1A382B] text-slate-200 transition-colors"
            >
              Fee Schedule
            </button>
          </div>
        </nav>
      </header>

      {/* 3. Rotating Live Highlight Ticker */}
      <section className="bg-[#183326] border-b border-[#234B38] text-white py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] text-emerald-300 bg-[#0C1A14] px-2 py-0.5 rounded border border-[#2F6C50] shrink-0 font-mono">
              <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
              LIVE DISPATCH
            </span>
            <div className="flex items-center gap-2 truncate text-slate-200">
              <span className="font-semibold text-emerald-200">[{dispatches[highlightIdx].tag}]</span>
              <span className="truncate">{dispatches[highlightIdx].headline}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={dispatches[highlightIdx].action}
              className="text-[11px] font-semibold text-emerald-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Explore</span>
              <ArrowRight className="w-3 h-3" />
            </button>
            <div className="flex items-center gap-1 ml-2">
              {dispatches.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setHighlightIdx(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === highlightIdx ? 'w-4 bg-emerald-400' : 'bg-slate-500 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to dispatch ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Motion-Ready Hero with Featured Article Slider / Carousel */}
      <section className="relative bg-gradient-to-b from-[#12281E] via-[#1A382B] to-[#FAF8F2] pt-8 pb-14 px-4 sm:px-6 overflow-hidden">
        {/* Subtle decorative atmospheric curves */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#2F6C50]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-10 left-10 w-[450px] h-[300px] bg-[#3D8865]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Hero Header Title */}
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C1A14] border border-[#2F6C50] text-xs text-[#D2E4D8] mb-3 font-mono">
              <Microscope className="w-3.5 h-3.5 text-[#8FBFA8]" />
              <span>African Scholarly Repository • Volume 1 (2026) Launch Issue</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
              Empirical Taxation Research & Econometric Science in Africa
            </h2>

            <p className="text-[#D2E4D8] text-sm sm:text-base mt-3 leading-relaxed font-normal">
              An open-access scientific publishing portal connecting empirical researchers, econometricians, and revenue administrators across Nigeria and Sub-Saharan Africa. Hosted jointly by CITN Umuahia Chapter and MOUAU COLMAS.
            </p>
          </div>

          {/* Interactive Featured Article Carousel Frame */}
          <div className="relative rounded-2xl bg-[#0F2219]/95 border border-[#2A5540] shadow-2xl p-6 sm:p-8 backdrop-blur-md text-white">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#1D3E2F]">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300">
                  Featured Research Spotlight
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Slide {activeSlide + 1} of {articles.length}
                </span>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-8 h-8 rounded-lg bg-[#1A382B] hover:bg-[#254F3C] text-white flex items-center justify-center border border-[#2F6C50] transition-colors"
                  aria-label="Previous featured article"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-8 h-8 rounded-lg bg-[#1A382B] hover:bg-[#254F3C] text-white flex items-center justify-center border border-[#2F6C50] transition-colors"
                  aria-label="Next featured article"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="hidden sm:flex items-center gap-1.5 ml-2">
                  {articles.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === activeSlide ? 'w-6 bg-emerald-400' : 'w-2 bg-slate-600 hover:bg-slate-400'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Active Article Slide Content */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono font-bold bg-[#1D3E2F] text-emerald-300 px-2.5 py-0.5 rounded border border-[#2F6C50]">
                    Vol. {activeArticle.volume} • Issue {activeArticle.issue} (2026)
                  </span>
                  {(activeArticle.subjectAreas || []).map((area) => (
                    <span
                      key={area}
                      className="text-[10px] font-semibold bg-[#12281E] text-[#D2E4D8] px-2 py-0.5 rounded border border-[#1E4332]"
                    >
                      {area}
                    </span>
                  ))}
                  <span className="text-[10px] font-mono text-slate-400 ml-auto">
                    DOI: 10.59231/{activeArticle.doi}
                  </span>
                </div>

                <h3
                  onClick={() => {
                    setSelectedArticle(activeArticle);
                    setCurrentSubPage('article-detail');
                  }}
                  className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white hover:text-emerald-300 cursor-pointer transition-colors leading-tight"
                >
                  {activeArticle.title}
                </h3>

                <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-300">
                  <span className="font-semibold text-emerald-200">
                    {activeArticle.authors.map((a) => a.name).join(', ')}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">{activeArticle.authors[0]?.affiliation}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {activeArticle.abstract}
                </p>

                {/* Interactive CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedArticle(activeArticle);
                      setCurrentSubPage('article-detail');
                    }}
                    className="px-5 py-2.5 bg-[#2F6C50] hover:bg-[#3B835E] text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-md transition-all"
                  >
                    <span>Read Full Paper</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setCitationModalArticle(activeArticle)}
                    className="px-4 py-2.5 bg-[#163023] hover:bg-[#1E4332] text-[#D2E4D8] font-semibold rounded-xl text-xs border border-[#2F6C50] flex items-center gap-1.5 transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5 text-[#8FBFA8]" />
                    <span>Cite Paper</span>
                  </button>

                  <button
                    onClick={() => {
                      setNotification(`Replication dataset downloaded for paper ${activeArticle.id}`);
                      setTimeout(() => setNotification(null), 3000);
                    }}
                    className="px-4 py-2.5 bg-[#12281E] hover:bg-[#1A382B] text-slate-300 hover:text-white font-medium rounded-xl text-xs border border-[#204533] flex items-center gap-1.5 transition-colors"
                  >
                    <Database className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Replication Data (Stata/CSV)</span>
                  </button>
                </div>
              </div>

              {/* Right Slide Metric & Verification Card */}
              <div className="lg:col-span-4 bg-[#0A1711] rounded-xl border border-[#1E4332] p-5 space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 block border-b border-[#1E4332] pb-2">
                  Scientific Metrics & Verification
                </span>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#10241B] border border-[#1A382B]">
                    <span className="text-[10px] text-slate-400 block">Repository Views</span>
                    <strong className="text-base font-mono font-bold text-white block mt-0.5">
                      {activeArticle.metrics?.views.toLocaleString() || '3,840'}
                    </strong>
                    <span className="text-[9px] text-emerald-400">Verified Readership</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#10241B] border border-[#1A382B]">
                    <span className="text-[10px] text-slate-400 block">PDF Downloads</span>
                    <strong className="text-base font-mono font-bold text-white block mt-0.5">
                      {activeArticle.metrics?.downloads.toLocaleString() || '1,420'}
                    </strong>
                    <span className="text-[9px] text-emerald-400">Galley Fetches</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#10241B] border border-[#1A382B]">
                    <span className="text-[10px] text-slate-400 block">Crossref Citations</span>
                    <strong className="text-base font-mono font-bold text-white block mt-0.5">
                      {activeArticle.metrics?.citations || 12}
                    </strong>
                    <span className="text-[9px] text-[#A6CEB9]">Indexed Trackers</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#10241B] border border-[#1A382B]">
                    <span className="text-[10px] text-slate-400 block">Plagiarism Check</span>
                    <strong className="text-base font-mono font-bold text-emerald-400 block mt-0.5">
                      &lt; 15%
                    </strong>
                    <span className="text-[9px] text-slate-400">Turnitin Certified</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#1E4332] space-y-1.5 text-[11px] text-slate-300">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Double-blind reviewed by 2 external referees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Open access under CC BY 4.0 International</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Maiden Edition Call for Papers Campaign Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-4 mb-10">
        <div className="bg-white rounded-2xl border-2 border-[#2F6C50] shadow-md p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#2F6C50] text-white px-2.5 py-0.5 rounded">
                CALL FOR PAPERS • INAUGURAL VOLUME
              </span>
              <span className="text-xs text-slate-600 font-medium">
                Submission Window Open: <strong>{config.submissionDeadline}</strong>
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#183326]">
              {maidenCallForPapers.theme}
            </h3>
            <p className="text-xs text-[#2B3832] leading-relaxed">
              Pioneering authors receive a <strong>30% publication fee discount</strong> (₦{(config.publicationFee * 0.7).toLocaleString()}) and expedited Crossref DOI assignment upon double-blind peer acceptance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => setCurrentSubPage('submit')}
              className="w-full sm:w-auto px-5 py-3 bg-[#2F6C50] hover:bg-[#3B835E] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Manuscript Online</span>
            </button>
            <button
              onClick={() => setCurrentSubPage('call-for-papers')}
              className="w-full sm:w-auto px-4 py-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl text-xs border border-slate-300 transition-colors text-center"
            >
              Guidelines & Topics
            </button>
          </div>
        </div>
      </section>

      {/* 6. Scientific Articles Repository Grid with Layered Card Depth */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-[#D2E4D8] pb-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-[#183326]">
                Scientific Articles & Empirical Datasets
              </h3>
              <span className="text-xs font-mono font-bold bg-[#EEF5F1] text-[#2F6C50] px-2 py-0.5 rounded border border-[#D2E4D8]">
                {filteredArticles.length} Dispatches
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-1 font-medium">
              Permanent DOI identifiers, structured econometric abstracts, and replication files.
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Search by topic, author, DOI..."
                className="w-full pl-9 pr-3 py-2 bg-white text-xs rounded-xl border border-slate-300 outline-none focus:border-[#2F6C50]"
              />
            </div>

            <button
              onClick={() => setCurrentSubPage('articles')}
              className="text-xs font-bold text-[#2F6C50] hover:text-[#183326] px-3 py-2 bg-white rounded-xl border border-slate-300 whitespace-nowrap transition-colors"
            >
              Full Archive →
            </button>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs">
          <span className="text-slate-500 font-semibold text-[11px] mr-1">Filter Collection:</span>
          {[
            { id: 'all', label: 'All Fields' },
            { id: 'Digital', label: 'Digital Taxation' },
            { id: 'Informal', label: 'MSME & Informal Sector' },
            { id: 'Petroleum', label: 'Petroleum & Natural Resources' },
            { id: 'Technology', label: 'Tax Technology & AI' },
            { id: 'Corporate', label: 'Corporate Taxes' },
            { id: 'Compliance', label: 'Tax Compliance' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedTaxonomyCategory(cat.id)}
              className={`px-3 py-1 rounded-full font-medium transition-all text-xs ${
                selectedTaxonomyCategory === cat.id
                  ? 'bg-[#2F6C50] text-white shadow-xs font-bold'
                  : 'bg-white hover:bg-[#EEF5F1] text-slate-700 border border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Research Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="scientific-card-depth rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between gap-2 text-[10px] text-slate-500 mb-3 font-mono">
                  <span className="text-[#183326] font-bold bg-[#EEF5F1] px-2 py-0.5 rounded border border-[#D2E4D8]">
                    Vol. {article.volume} No. {article.issue} (2026)
                  </span>
                  <span className="text-[#2F6C50] bg-[#FAF8F2] px-1.5 py-0.5 rounded border border-[#D2E4D8] font-bold">
                    DEMO DATA
                  </span>
                </div>

                <h4
                  onClick={() => {
                    setSelectedArticle(article);
                    setCurrentSubPage('article-detail');
                  }}
                  className="font-bold text-base text-[#183326] group-hover:text-[#2F6C50] cursor-pointer transition-colors leading-snug"
                >
                  {article.title}
                </h4>

                <div className="text-xs text-slate-600 mt-2 space-y-0.5 font-medium">
                  <p className="text-slate-800 font-semibold">
                    {article.authors.map((a) => a.name).join(', ')}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {article.authors[0]?.affiliation}
                  </p>
                </div>

                <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                  {article.abstract}
                </p>

                {/* Keywords Chips */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {(article.keywords || []).slice(0, 3).map((kw) => (
                    <span
                      key={kw}
                      className="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                <span className="text-[10px] text-slate-500 truncate max-w-[150px]">
                  doi.org/{article.doi}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCitationModalArticle(article)}
                    title="Copy citation"
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedArticle(article);
                      setCurrentSubPage('article-detail');
                    }}
                    className="font-bold text-[#2F6C50] hover:text-[#183326] flex items-center gap-1 text-xs"
                  >
                    <span>Read Paper</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 7. Interactive 26-Taxonomy Scientific Explorer Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-[#EEF5F1] rounded-2xl border border-[#D2E4D8] p-8">
          <div className="max-w-2xl mb-6">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2F6C50] block">
              Curated Scholarly Collections
            </span>
            <h3 className="text-2xl font-bold text-[#183326] mt-0.5">
              Scientific Research Taxonomies (26 Disciplines)
            </h3>
            <p className="text-xs text-[#2B3832] mt-1 font-medium">
              Browse specialised research repositories and thematic collections curated by the CITN-MOUAU editorial committee.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
            {subjectTaxonomies.slice(0, 16).map((tax) => (
              <button
                key={tax.id}
                onClick={() => setCurrentSubPage('aims-scope')}
                className="p-3.5 rounded-xl bg-white border border-[#D2E4D8] hover:border-[#2F6C50] hover:shadow-xs text-left transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-semibold">
                    {tax.category}
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-[#2F6C50] transition-colors" />
                </div>
                <span className="font-bold text-[#183326] group-hover:text-[#2F6C50] block text-xs mt-1.5">
                  {tax.name}
                </span>
                <span className="text-[10px] text-slate-500 mt-1 block">
                  Subject Collection →
                </span>
              </button>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setCurrentSubPage('aims-scope')}
              className="px-6 py-2.5 bg-[#2F6C50] hover:bg-[#3B835E] text-white font-bold rounded-xl text-xs transition-colors shadow-2xs"
            >
              Explore Complete 26 Taxonomy Hierarchy
            </button>
          </div>
        </div>
      </section>

      {/* 8. Double-Blind Peer Review Rigor & Transparency Stepper */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
        <div className="bg-[#12281E] text-white rounded-2xl border border-[#204533] p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#204533] pb-6 mb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                Editorial Transparency
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                14-Step COPE Double-Blind Peer Review Process
              </h3>
              <p className="text-xs text-[#D2E4D8] mt-1 font-normal">
                Every manuscript undergoes multi-tier anonymized peer screening, rigorous anti-plagiarism verification, and independent editorial adjudication.
              </p>
            </div>

            <button
              onClick={() => setCurrentSubPage('peer-review')}
              className="px-4 py-2 bg-[#204533] hover:bg-[#2F6C50] text-[#D2E4D8] hover:text-white font-semibold rounded-xl text-xs border border-[#2F6C50] transition-colors whitespace-nowrap self-start md:self-auto"
            >
              View Full Review Manual
            </button>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-xs">
            {peerReviewWorkflowSteps.slice(0, 7).map((st) => (
              <button
                key={st.step}
                onClick={() => setSelectedReviewStep(st.step)}
                className={`p-3 rounded-xl text-left border transition-all ${
                  selectedReviewStep === st.step
                    ? 'bg-[#2F6C50] text-white border-emerald-400 font-bold shadow-xs'
                    : 'bg-[#0E1F17] hover:bg-[#183326] text-slate-300 border-[#1E4332]'
                }`}
              >
                <span className="font-mono text-[10px] text-emerald-300 block">
                  Step {String(st.step).padStart(2, '0')}
                </span>
                <span className="font-semibold text-xs block mt-1 leading-snug">
                  {st.name}
                </span>
              </button>
            ))}
          </div>

          {/* Active Step Explanation Box */}
          <div className="mt-4 p-4 rounded-xl bg-[#0A1711] border border-[#1E4332] flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-sm text-white font-bold block">
                Step {selectedReviewStep}: {peerReviewWorkflowSteps.find((s) => s.step === selectedReviewStep)?.name}
              </strong>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {peerReviewWorkflowSteps.find((s) => s.step === selectedReviewStep)?.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Citation Modal / Drawer */}
      {citationModalArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-300 max-w-lg w-full p-6 shadow-2xl space-y-4 text-slate-900">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <Copy className="w-4 h-4 text-[#2F6C50]" />
                <h4 className="font-bold text-sm text-[#183326]">
                  Cite This Research Article
                </h4>
              </div>
              <button
                onClick={() => setCitationModalArticle(null)}
                className="text-slate-400 hover:text-slate-600 text-xs font-bold px-2 py-1 rounded"
              >
                Close ✕
              </button>
            </div>

            <p className="text-xs text-slate-700 font-medium">
              {citationModalArticle.title}
            </p>

            {/* Citation Formats */}
            <div className="flex items-center gap-1 border-b border-slate-200 pb-2 text-xs">
              {(['apa', 'harvard', 'bibtex'] as const).map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setActiveCitationTab(fmt)}
                  className={`px-3 py-1 rounded-lg font-bold uppercase text-[10px] tracking-wider transition-colors ${
                    activeCitationTab === fmt
                      ? 'bg-[#2F6C50] text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {fmt}
                </button>
              ))}
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs text-slate-800 break-words leading-relaxed max-h-40 overflow-y-auto">
              {activeCitationTab === 'apa' && (
                <span>
                  {citationModalArticle.authors.map((a) => a.name).join(', ')} ({citationModalArticle.publicationDate.split(' ')[1] || '2026'}). {citationModalArticle.title}. <em>Tax Frontier Discovery</em>, {citationModalArticle.volume}({citationModalArticle.issue}), {citationModalArticle.pages}. https://doi.org/{citationModalArticle.doi}
                </span>
              )}
              {activeCitationTab === 'harvard' && (
                <span>
                  {citationModalArticle.authors.map((a) => a.name).join(', ')}, {citationModalArticle.publicationDate.split(' ')[1] || '2026'}. '{citationModalArticle.title}', <em>Tax Frontier Discovery</em>, vol. {citationModalArticle.volume}, no. {citationModalArticle.issue}, pp. {citationModalArticle.pages}. Available at: &lt;https://doi.org/{citationModalArticle.doi}&gt;.
                </span>
              )}
              {activeCitationTab === 'bibtex' && (
                <pre className="text-[11px] whitespace-pre-wrap">
                  {`@article{taxfrontier_${citationModalArticle.id},
  title={${citationModalArticle.title}},
  author={${citationModalArticle.authors.map((a) => a.name).join(' and ')}},
  journal={Tax Frontier Discovery},
  volume={${citationModalArticle.volume}},
  number={${citationModalArticle.issue}},
  pages={${citationModalArticle.pages}},
  year={${citationModalArticle.publicationDate.split(' ')[1] || '2026'}},
  doi={${citationModalArticle.doi}}
}`}
                </pre>
              )}
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setCitationModalArticle(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  copyCitationText(citationModalArticle, activeCitationTab);
                  setCitationModalArticle(null);
                }}
                className="px-4 py-2 bg-[#2F6C50] hover:bg-[#3B835E] text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-sm transition-all"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy to Clipboard</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scientific Journal Footer */}
      <footer className="bg-[#0C1A14] text-slate-300 border-t border-[#1C3B2D] text-xs py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#2F6C50] text-white flex items-center justify-center font-bold text-sm">
                TF
              </div>
              <span className="font-extrabold text-white text-base">Tax Frontier Discovery</span>
            </div>
            <p className="text-[11px] text-[#A6CEB9] font-mono">
              Scientific Repository & Citation Index
            </p>
            <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
              Joint scientific journal platform of CITN Umuahia Chapter & MOUAU College of Management Sciences.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-[#D2E4D8] uppercase text-[10px] tracking-wider mb-2 font-mono">Repository Indexing</h5>
            <ul className="space-y-1 text-slate-400 text-[11px]">
              <li>Crossref Registered DOIs</li>
              <li>Google Scholar Citation Indices</li>
              <li>ROAD Open Access Portal</li>
              <li>CC BY 4.0 Open Licensing</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-[#D2E4D8] uppercase text-[10px] tracking-wider mb-2 font-mono">Scientific Rigor</h5>
            <ul className="space-y-1 text-slate-400 text-[11px]">
              <li>Double-Blind Peer Review (2 Reviewers)</li>
              <li>Turnitin Plagiarism Verification</li>
              <li>COPE Ethics & Transparency</li>
              <li>Replication Datasets Archive</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-[#D2E4D8] uppercase text-[10px] tracking-wider mb-2 font-mono">Secretariat</h5>
            <p className="text-[11px] text-slate-300">
              COLMAS, MOUAU, Umudike, Nigeria
            </p>
            <p className="font-mono text-[11px] text-[#A6CEB9] mt-1">
              {config.editorialEmail}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-[#1C3B2D] text-center text-[10px] text-slate-400">
          © 2026 Tax Frontier Discovery Platform. OnlineFirst Scientific Academic Architecture.
        </div>
      </footer>
    </div>
  );
};
