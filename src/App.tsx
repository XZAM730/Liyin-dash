import React from 'react';
import { Instagram, MessageCircle, ExternalLink, CreditCard, Info, CheckCircle2, ArrowRight, Palette, Layers, BookOpen, User, Shirt, Youtube, Music2, Clock, Zap, Handshake, Settings, X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 'home' | 'about' | 'order';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface PriceItem {
  name: string;
  priceRange: string;
  features: string[];
  popular?: boolean;
  description: string;
}

// --- Constants ---
const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, title: "Modern Poster Series", category: "Poster Design", image: "https://picsum.photos/seed/poster/1200/800", description: "Desain poster minimalis untuk acara seni." },
  { id: 2, title: "Aesthetic Wallpaper", category: "Wallpaper", image: "https://picsum.photos/seed/wallpaper/1200/800", description: "Wallpaper kustom untuk perangkat mobile dan desktop." },
  { id: 3, title: "Instagram Feed Kit", category: "Social Media", image: "https://picsum.photos/seed/insta/1200/800", description: "Template konten Instagram yang konsisten dan menarik." },
  { id: 4, title: "Book Cover Concept", category: "Cover Buku", image: "https://picsum.photos/seed/book/1200/800", description: "Desain sampul buku untuk novel fiksi." },
  { id: 5, title: "Brand Identity Kit", category: "Branding", image: "https://picsum.photos/seed/brand/1200/800", description: "Identitas visual lengkap untuk UMKM." },
];

const PRICES: PriceItem[] = [
  {
    name: "THE MUSE (Single Design)",
    description: "Untuk Wallpaper, Poster, Personal Project.",
    priceRange: "Rp150.000 - Rp250.000",
    features: ["1 Desain Eksklusif", "High-res File (JPG/PNG)", "2x Revisi Minor", "Penggunaan Pribadi"]
  },
  {
    name: "THE TRILOGY (Bundle 3 Desain)",
    description: "Untuk Feed Instagram / Slide Konten.",
    priceRange: "Rp350.000 - Rp600.000",
    features: ["3 Desain Tematik", "Hemat Rp50.000!", "High-res File", "3x Revisi", "Source File (Canva/PSD)"],
    popular: true
  },
  {
    name: "THE MANUSCRIPT (Project Eksklusif)",
    description: "Untuk Cover Buku, Merchandise, Kebutuhan Brand.",
    priceRange: "Mulai dari Rp450.000",
    features: ["Desain Premium & Detail", "Lisensi Komersial", "Custom Elemen", "VIP Revision", "Full Support"]
  }
];

// --- Animation Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// --- Components ---

const GearNav = ({ setPage }: { setPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed top-8 right-8 z-[100]">
      <motion.button
        whileHover={{ rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 glass rounded-2xl flex items-center justify-center shadow-xl shadow-black/5 text-ink hover:bg-white transition-colors"
      >
        {isOpen ? <X size={24} /> : <Settings size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20, y: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 20, y: -20 }}
            className="absolute top-20 right-0 glass rounded-3xl p-4 min-w-[200px] shadow-2xl border border-white/20"
          >
            <div className="flex flex-col gap-2">
              {(['home', 'about', 'order'] as Page[]).map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setPage(p);
                    setIsOpen(false);
                  }}
                  className="w-full px-6 py-4 rounded-2xl text-left text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all flex items-center justify-between group"
                >
                  {p === 'home' ? 'Beranda' : p === 'about' ? 'Tentang' : 'Pesan'}
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-8 pointer-events-none">
    <div className="glass px-8 py-4 rounded-full flex items-center gap-10 shadow-lg shadow-black/5 pointer-events-auto">
      <div className="font-display font-bold text-lg md:text-xl tracking-tighter mr-4">LIYIN'S ART OFFICIAL</div>
      <div className="hidden md:block h-4 w-[1px] bg-border" />
      <div className="hidden md:flex items-center gap-10">
        {(['home', 'about', 'order'] as Page[]).map((page) => (
          <button
            key={page}
            onClick={() => setPage(page)}
            className={`text-xs uppercase tracking-[0.2em] transition-all relative group ${
              currentPage === page ? 'text-accent font-bold' : 'text-ink-muted hover:text-ink'
            }`}
          >
            {page === 'home' ? 'Beranda' : page === 'about' ? 'Tentang' : 'Pesan'}
            {currentPage === page && (
              <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-[1px] bg-accent" />
            )}
          </button>
        ))}
      </div>
    </div>
  </nav>
);

const PortfolioGallery = () => {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-20"
    >
      {PORTFOLIO_ITEMS.map((item) => (
        <motion.div
          key={item.id}
          variants={fadeInUp}
          className="group cursor-pointer"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-100 mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-500">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
              <p className="text-white/80 text-xs uppercase tracking-[0.3em] mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.category}</p>
              <h4 className="text-white text-2xl font-serif italic mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.title}</h4>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-150">
                <ExternalLink size={20} className="text-black" />
              </div>
            </div>
          </div>
          <div className="px-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-2 block">{item.category}</span>
            <h4 className="text-xl font-display font-bold tracking-tight">{item.title}</h4>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const Home = ({ setPage }: { setPage: (p: Page) => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-40 pb-20 px-6 max-w-7xl mx-auto"
  >
    <div className="flex flex-col items-center text-center mb-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-10 p-4 rounded-3xl bg-accent/5"
      >
        <Palette className="text-accent" size={32} />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter mb-10 leading-[0.85]"
      >
        Liyin's art <br />
        <span className="italic font-serif font-normal text-accent">official.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-ink-muted max-w-3xl text-xl sm:text-2xl md:text-3xl font-serif italic mb-16 text-balance leading-relaxed"
      >
        "Layanan Desain Grafis Profesional: Mewujudkan Imajinasi Menjadi Karya Visual yang Elegan."
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-6"
      >
        <button
          onClick={() => setPage('order')}
          className="px-12 py-6 bg-accent text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-accent/40 transition-all hover:-translate-y-1 flex items-center justify-center gap-3 group"
        >
          Pesan Sekarang <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button
          onClick={() => setPage('about')}
          className="px-12 py-6 glass rounded-full font-bold text-lg hover:bg-white transition-all"
        >
          Tentang Kreator
        </button>
      </motion.div>
    </div>

    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16 border-b border-border pb-10 gap-6">
      <h3 className="text-4xl sm:text-5xl md:text-6xl font-serif italic tracking-tight">Karya Pilihan</h3>
      <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-ink-muted font-bold">
        <div className="w-12 h-[1px] bg-border" />
        Gulir untuk eksplorasi
      </div>
    </div>
    
    <PortfolioGallery />
  </motion.div>
);

const About = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-40 pb-20 px-6 max-w-7xl mx-auto"
  >
    <div className="grid lg:grid-cols-12 gap-12 md:gap-20 items-start mb-32">
      <div className="lg:col-span-5 lg:sticky lg:top-40">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-[3rem] overflow-hidden card-shadow p-4 bg-white">
            <img
              src="https://picsum.photos/seed/liyin_art/800/1000"
              alt="Liyin's art official"
              className="w-full h-full object-cover rounded-[2.5rem]"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-8 w-36 h-36 bg-accent rounded-full flex items-center justify-center text-white shadow-2xl z-10"
          >
            <div className="text-center">
              <div className="text-xs uppercase tracking-widest font-bold mb-1">Est.</div>
              <div className="text-3xl font-serif italic">2019</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="lg:col-span-7 pt-10 lg:pt-0">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-accent text-xs uppercase tracking-[0.5em] font-black mb-8 block"
        >
          Cerita di Balik Karya
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-12 leading-[0.9] tracking-tighter"
        >
          Mengenal Liyin's art <br />
          <span className="italic font-serif font-normal text-accent">official.</span>
        </motion.h2>
        
        <div className="space-y-10 text-xl text-ink-muted leading-relaxed font-serif italic">
          <p>
            Liyin's art official adalah wadah kreatif yang berfokus pada desain grafis dengan sentuhan estetika yang mendalam. Kami percaya bahwa setiap desain memiliki cerita yang ingin disampaikan, dan tugas kami adalah menerjemahkannya ke dalam bentuk visual yang memukau.
          </p>
          <p>
            Perjalanan artistik kami didorong oleh komitmen terhadap <span className="text-accent font-sans not-italic font-bold">Imajinasi, Elegan, dan Autentisitas</span>. Baik itu desain poster, wallpaper kustom, hingga identitas brand yang kompleks, kami selalu memberikan perhatian penuh pada setiap detail.
          </p>
          <p>
            Kami juga sangat terbuka untuk <span className="text-accent font-sans not-italic font-bold">Kerja Sama (Collaboration)</span> dengan kreator lain, brand, maupun komunitas untuk menciptakan sesuatu yang baru dan bermakna.
          </p>
          <blockquote className="border-l-4 border-accent pl-8 py-2 text-2xl text-ink font-serif not-italic">
            "Tujuan saya adalah mengubah visi abstrak menjadi mahakarya nyata. Seni adalah jembatan antara imajinasi dan realitas."
          </blockquote>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-20 pt-20 border-t border-border">
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-accent">Keahlian</h4>
            <ul className="space-y-4">
              {[
                { icon: Palette, text: "Desain Grafis" },
                { icon: Layers, text: "Branding & Identitas" },
                { icon: BookOpen, text: "Layout & Cover Buku" },
                { icon: Handshake, text: "Open Collaboration" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-display font-medium">
                  <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-accent">
                    <item.icon size={18} />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-accent">Filosofi</h4>
            <p className="text-lg italic font-serif leading-relaxed text-ink-muted">
              "Seni bukan sekadar apa yang Anda lihat, melainkan apa yang Anda buat orang lain rasakan melalui visual."
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="glass rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      
      <h3 className="text-4xl md:text-5xl font-serif italic mb-16 relative z-10">Hubungi Saya</h3>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 relative z-10">
        {[
          { icon: Instagram, label: "Instagram", link: "https://www.instagram.com/liyin_sipengamatlangit?igsh=MWNhdTBuNzB5eTJw" },
          { icon: Music2, label: "TikTok", link: "https://www.tiktok.com/@sipengamatlangit_?_r=1&_t=ZS-94KTe2cQa2v" },
          { icon: Youtube, label: "YouTube", link: "https://youtube.com/@liyinsukaastro?si=VNfFroE2RAESVg5C" },
          { icon: MessageCircle, label: "WhatsApp", link: "https://wa.me/6285723353753" },
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -10 }}
            className="group flex flex-col items-center gap-6"
          >
            <div className="w-20 h-20 rounded-[2rem] glass flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-lg">
              <social.icon size={28} />
            </div>
            <span className="text-xs uppercase tracking-[0.4em] font-black opacity-60 group-hover:opacity-100 transition-opacity">{social.label}</span>
          </motion.a>
        ))}
      </div>
    </div>
  </motion.div>
);

const Order = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-40 pb-20 px-6 max-w-7xl mx-auto"
  >
    <div className="text-center mb-32">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-accent text-xs uppercase tracking-[0.5em] font-black mb-6 block"
      >
        Investasi & Proses
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl sm:text-7xl md:text-8xl font-display font-bold mb-10 tracking-tighter leading-[0.9]"
      >
        Layanan <br />
        <span className="italic font-serif font-normal text-accent">Desain Grafis.</span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-ink-muted max-w-2xl mx-auto text-xl md:text-2xl font-serif italic leading-relaxed"
      >
        Kualitas profesional yang disesuaikan dengan visi unik Anda. Pilih paket untuk memulai kolaborasi.
      </motion.p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8 md:gap-12 mb-24">
      {PRICES.map((item, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`relative glass rounded-[3rem] p-10 md:p-14 flex flex-col transition-all duration-500 hover:-translate-y-4 group ${
            item.popular ? 'border-accent/30 ring-1 ring-accent/20 shadow-2xl shadow-accent/5 bg-white/50' : 'hover:shadow-2xl'
          }`}
        >
          {item.popular && (
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-white px-8 py-2 rounded-full text-xs uppercase tracking-[0.3em] font-black shadow-xl">
              Paling Populer
            </div>
          )}
          <h3 className="text-3xl font-serif italic mb-4 group-hover:text-accent transition-colors">{item.name}</h3>
          <p className="text-sm text-ink-muted mb-10 font-medium leading-relaxed">{item.description}</p>
          <div className="mb-12">
            <div className="text-4xl md:text-5xl font-display font-black tracking-tighter">{item.priceRange}</div>
          </div>
          <ul className="space-y-6 mb-16 flex-grow">
            {item.features.map((f, j) => (
              <li key={j} className="flex items-start gap-5 text-base text-ink-muted font-medium">
                <div className="mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={14} className="text-accent" />
                </div>
                {f}
              </li>
            ))}
          </ul>
          <a 
            href="https://wa.me/6285723353753"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-6 rounded-2xl font-black text-center text-lg transition-all ${
            item.popular ? 'bg-accent text-white hover:shadow-2xl hover:shadow-accent/40' : 'glass hover:bg-accent hover:text-white'
          }`}>
            Pesan Sekarang
          </a>
        </motion.div>
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-8 mb-40">
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="glass rounded-[3rem] p-10 flex items-center gap-8"
      >
        <div className="w-20 h-20 rounded-3xl bg-accent/5 flex items-center justify-center shrink-0 text-accent">
          <Clock size={40} />
        </div>
        <div>
          <h4 className="text-2xl font-display font-bold mb-2">Estimasi Pengerjaan</h4>
          <p className="text-lg text-ink-muted font-serif italic">2 - 4 Hari Kerja <span className="text-sm block not-italic font-sans font-bold uppercase tracking-widest mt-1 opacity-60">(Tergantung antrean & detail)</span></p>
        </div>
      </motion.div>
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="glass rounded-[3rem] p-10 flex items-center gap-8 border-accent/20 bg-accent/5"
      >
        <div className="w-20 h-20 rounded-3xl bg-accent flex items-center justify-center shrink-0 text-white shadow-xl shadow-accent/20">
          <Zap size={40} />
        </div>
        <div>
          <h4 className="text-2xl font-display font-bold mb-2">Rush Order (24 Jam)</h4>
          <p className="text-lg text-ink-muted font-serif italic">Selesaikan desain Anda dalam sehari hanya dengan tambahan <span className="font-bold text-accent not-italic">Rp75.000</span>.</p>
        </div>
      </motion.div>
    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-start">
      <div className="space-y-12">
        <div className="glass rounded-[4rem] p-12 md:p-16">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-16 rounded-2xl bg-accent/5 flex items-center justify-center text-accent">
              <Info size={32} />
            </div>
            <h3 className="text-4xl font-serif italic">Proses Kerja</h3>
          </div>
          <div className="space-y-10">
            {[
              { step: "01", title: "Konsultasi", desc: "Diskusikan visi dan referensi Anda melalui WhatsApp atau Instagram." },
              { step: "02", title: "Sketsa & Konsep", desc: "Menerima konsep awal untuk mendapatkan arahan desain." },
              { step: "03", title: "Penyempurnaan", desc: "Proses rendering detail dan aplikasi warna sesuai feedback." },
              { step: "04", title: "Pengiriman", desc: "File resolusi tinggi dikirimkan dalam berbagai format yang dibutuhkan." },
            ].map((s, i) => (
              <div key={i} className="flex gap-8 group">
                <span className="text-accent font-black text-xl mt-1 opacity-20 group-hover:opacity-100 transition-opacity">{s.step}</span>
                <div>
                  <h4 className="font-display font-bold text-xl mb-2">{s.title}</h4>
                  <p className="text-lg text-ink-muted leading-relaxed font-serif italic">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <div className="glass rounded-[4rem] p-12 md:p-16">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-16 rounded-2xl bg-accent/5 flex items-center justify-center text-accent">
              <CreditCard size={32} />
            </div>
            <h3 className="text-4xl font-serif italic">Pembayaran & Ketentuan</h3>
          </div>
          <div className="space-y-8 text-xl text-ink-muted leading-relaxed font-serif italic">
            <p className="flex gap-4"><span className="text-accent">•</span> Pembayaran dilakukan di awal untuk mengamankan slot pengerjaan.</p>
            <p className="flex gap-4"><span className="text-accent">•</span> Menerima pembayaran melalui DANA, GoPay, ShopeePay, dan BRI.</p>
            <p className="flex gap-4"><span className="text-accent">•</span> Revisi minor berlaku sesuai paket yang dipilih.</p>
            <p className="flex gap-4"><span className="text-accent">•</span> Lisensi komersial tersedia untuk kebutuhan bisnis/brand.</p>
          </div>
          <div className="mt-16 flex flex-wrap gap-4">
            {['DANA', 'GoPay', 'ShopeePay', 'BRI'].map((p, i) => (
              <span key={i} className="px-6 py-3 rounded-2xl bg-slate-50 text-xs uppercase font-black tracking-widest border border-border shadow-sm">
                {p}
              </span>
            ))}
          </div>
        </div>

        <motion.a
          href="https://wa.me/6285723353753"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="block w-full py-10 bg-[#1a1a1a] text-white rounded-[4rem] text-center font-black text-2xl hover:shadow-2xl hover:shadow-black/40 transition-all group overflow-hidden relative"
        >
          <div className="flex items-center justify-center gap-6 relative z-10">
            <MessageCircle size={36} />
            Hubungi via WhatsApp
            <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform" />
          </div>
          <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity" />
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const FloatingWA = () => (
  <motion.a
    href="https://wa.me/6285723353753"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 left-8 z-50 w-20 h-20 bg-white text-black rounded-[2rem] flex items-center justify-center shadow-2xl group border border-border"
  >
    <MessageCircle size={32} />
    <span className="absolute left-24 bg-black text-white px-8 py-4 rounded-2xl text-sm font-black opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none shadow-2xl">
      Chat dengan Liyin
    </span>
  </motion.a>
);

export default function App() {
  const [page, setPage] = React.useState<Page>('home');

  // Scroll to top on page change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <div className="min-h-screen relative selection:bg-accent selection:text-white bg-[#fafafa]">
      {/* Subtle Background Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[-1]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <Navbar currentPage={page} setPage={setPage} />
      <GearNav setPage={setPage} />

      <main>
        <AnimatePresence mode="wait">
          {page === 'home' && (
            <div key="home">
              <Home setPage={setPage} />
            </div>
          )}
          {page === 'about' && (
            <div key="about">
              <About />
            </div>
          )}
          {page === 'order' && (
            <div key="order">
              <Order />
            </div>
          )}
        </AnimatePresence>
      </main>

      <FloatingWA />

      <footer className="py-32 px-6 border-t border-border bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
          <div className="font-display font-black text-3xl tracking-tighter">LIYIN'S ART OFFICIAL</div>
          <div className="flex flex-wrap justify-center gap-12">
            {['home', 'about', 'order'].map((p) => (
              <button 
                key={p} 
                onClick={() => setPage(p as Page)} 
                className="text-xs uppercase tracking-[0.4em] font-black hover:text-accent transition-colors"
              >
                {p === 'home' ? 'Beranda' : p === 'about' ? 'Tentang' : 'Pesan'}
              </button>
            ))}
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-muted font-black mb-2">
              &copy; {new Date().getFullYear()} Liyin's art official.
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-black">
              Dibuat dengan Jiwa Ethereal.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-accent/10" />
      </footer>
    </div>
  );
}

