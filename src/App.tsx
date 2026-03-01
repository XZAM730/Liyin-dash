import React from 'react';
import { Instagram, MessageCircle, ExternalLink, CreditCard, Info, CheckCircle2, ArrowRight, Star, Palette, Layers, BookOpen, User, Shirt } from 'lucide-react';
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
  priceIdr: string;
  priceUsd: string;
  features: string[];
  popular?: boolean;
}

// --- Constants ---
const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, title: "L2D Model Concept", category: "L2D Illustrator", image: "https://picsum.photos/seed/l2d/1200/800", description: "Detailed layers and parts for Live2D rigging." },
  { id: 2, title: "Fanart Collection", category: "Fanart", image: "https://picsum.photos/seed/fanart/1200/800", description: "Vibrant illustrations of beloved characters." },
  { id: 3, title: "Wattpad Cover Design", category: "Cover Wattpad", image: "https://picsum.photos/seed/wattpad/1200/800", description: "Eye-catching covers for digital novels." },
  { id: 4, title: "Comic Anthology", category: "Komik", image: "https://picsum.photos/seed/comic/1200/800", description: "Sequential storytelling and panel design." },
  { id: 5, title: "Streetwear Concept", category: "Clothing Design", image: "https://picsum.photos/seed/clothing/1200/800", description: "Modern apparel and graphic tee designs." },
];

const PRICES: PriceItem[] = [
  {
    name: "Standard Fanart / Cover",
    priceIdr: "Rp 350.000",
    priceUsd: "$25",
    features: ["Full Color Illustration", "Wattpad/Book Cover Size", "Personal Use", "3 Revisions", "10 Days Delivery"]
  },
  {
    name: "L2D Model / Comic",
    priceIdr: "Rp 1.500.000",
    priceUsd: "$100",
    features: ["Ready-to-Rig Layers", "Character Sheet", "Commercial License", "5 Revisions", "21 Days Delivery"],
    popular: true
  },
  {
    name: "Clothing & Graphic Kit",
    priceIdr: "Rp 850.000",
    priceUsd: "$60",
    features: ["Apparel Design", "Tech Pack Included", "Source Files (AI/PSD)", "Unlimited Revisions", "14 Days Delivery"]
  }
];

// --- Components ---

const Navbar = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-8">
    <div className="glass px-8 py-4 rounded-full flex items-center gap-10 shadow-lg shadow-black/5">
      <div className="font-display font-bold text-xl tracking-tighter mr-4">F. DHIRA WINDARI LI YIN</div>
      <div className="h-4 w-[1px] bg-border" />
      {(['home', 'about', 'order'] as Page[]).map((page) => (
        <button
          key={page}
          onClick={() => setPage(page)}
          className={`text-xs uppercase tracking-[0.2em] transition-all relative group ${
            currentPage === page ? 'text-accent font-bold' : 'text-ink-muted hover:text-ink'
          }`}
        >
          {page}
          {currentPage === page && (
            <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-[1px] bg-accent" />
          )}
        </button>
      ))}
    </div>
  </nav>
);

const PortfolioGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
      {PORTFOLIO_ITEMS.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group cursor-pointer"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100 mb-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                <ExternalLink size={20} className="text-black" />
              </div>
            </div>
          </div>
          <div className="px-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-ink-muted mb-1 block">{item.category}</span>
            <h4 className="text-xl font-serif">{item.title}</h4>
          </div>
        </motion.div>
      ))}
    </div>
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
        className="mb-8 p-3 rounded-2xl bg-accent/5"
      >
        <Palette className="text-accent" size={24} />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-8 leading-[0.9]"
      >
        F. Dhira windari <span className="italic font-serif font-normal">Li Yin.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-ink-muted max-w-2xl text-xl md:text-2xl font-serif italic mb-12 text-balance"
      >
        "Illustrator L2D, Fanart, Wattpad Covers, Comics, and Clothing Designer."
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col md:flex-row gap-6"
      >
        <button
          onClick={() => setPage('order')}
          className="px-10 py-5 bg-accent text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-black/20 transition-all hover:-translate-y-1 flex items-center gap-3"
        >
          Book a Commission <ArrowRight size={18} />
        </button>
        <button
          onClick={() => setPage('about')}
          className="px-10 py-5 glass rounded-full font-semibold hover:bg-white transition-all"
        >
          Explore the Artist
        </button>
      </motion.div>
    </div>

    <div className="flex items-center justify-between mb-12 border-b border-border pb-8">
      <h3 className="text-4xl font-serif italic">Curated Works</h3>
      <div className="text-xs uppercase tracking-[0.3em] text-ink-muted">Scroll to explore</div>
    </div>
    
    <PortfolioGallery />
  </motion.div>
);

const About = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-40 pb-20 px-6 max-w-6xl mx-auto"
  >
    <div className="grid lg:grid-cols-12 gap-16 items-start mb-32">
      <div className="lg:col-span-5 sticky top-40">
        <div className="relative">
          <div className="aspect-[3/4] rounded-[40px] overflow-hidden card-shadow p-3 bg-white">
            <img
              src="https://picsum.photos/seed/artist_dhira/800/1000"
              alt="F. Dhira windari Li Yin"
              className="w-full h-full object-cover rounded-[32px]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full flex items-center justify-center text-white rotate-12 shadow-xl">
            <div className="text-center">
              <div className="text-xs uppercase tracking-widest font-bold">Est.</div>
              <div className="text-2xl font-serif italic">2019</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-7">
        <span className="text-accent text-xs uppercase tracking-[0.4em] font-bold mb-6 block">The Story Behind the Art</span>
        <h2 className="text-6xl font-display font-bold mb-10 leading-tight">Meet F. Dhira windari <span className="italic font-serif font-normal">Li Yin.</span></h2>
        
        <div className="space-y-8 text-lg text-ink-muted leading-relaxed font-serif italic">
          <p>
            F. Dhira windari Li Yin is a versatile creative force specializing in the intersection of digital illustration and functional design. With a deep passion for storytelling, she brings characters to life through L2D illustration and captures the essence of narratives in Wattpad covers and comics.
          </p>
          <p>
            Her artistic journey is driven by a commitment to <span className="text-accent font-sans not-italic font-semibold">Imagination, Elegance, and Authenticity</span>. Whether she is crafting intricate fanart or designing modern apparel as a clothing designer, her work consistently reflects a signature touch of sophistication and detail.
          </p>
          <p>
            With years of experience collaborating with authors, independent creators, and fashion enthusiasts, Dhira has developed a versatile style that balances the dreamlike quality of digital art with the practical requirements of graphic and clothing design.
          </p>
          <p>
            "My goal is to translate abstract visions into tangible masterpieces," she says. "I believe that every project, from a single fanart piece to a full clothing line, deserves a unique soul and a meticulous eye for detail."
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 mt-16 pt-16 border-t border-border">
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-4 text-accent">Expertise</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><User size={14} /> L2D Illustrator</li>
              <li className="flex items-center gap-2"><BookOpen size={14} /> Comic & Cover Art</li>
              <li className="flex items-center gap-2"><Shirt size={14} /> Clothing Design</li>
              <li className="flex items-center gap-2"><Palette size={14} /> Fanart & Graphic Design</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-4 text-accent">Philosophy</h4>
            <p className="text-sm italic">"Art is the bridge between imagination and reality."</p>
          </div>
        </div>
      </div>
    </div>

    <div className="glass rounded-[40px] p-16 text-center">
      <h3 className="text-3xl font-serif italic mb-12">Connect with me</h3>
      <div className="flex flex-wrap justify-center gap-12">
        {[
          { icon: Instagram, label: "Instagram", link: "#" },
          { icon: MessageCircle, label: "WhatsApp", link: "https://wa.me/6285723353753" },
        ].map((social, i) => (
          <a
            key={i}
            href={social.link}
            className="group flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
              <social.icon size={24} />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">{social.label}</span>
          </a>
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
    <div className="text-center mb-24">
      <span className="text-accent text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Investment & Process</span>
      <h2 className="text-6xl font-display font-bold mb-6">Commission <span className="italic font-serif font-normal">Services</span></h2>
      <p className="text-ink-muted max-w-xl mx-auto text-lg">Professional quality tailored to your unique vision. Select a tier to begin our collaboration.</p>
    </div>

    <div className="grid lg:grid-cols-3 gap-10 mb-32">
      {PRICES.map((item, i) => (
        <div 
          key={i} 
          className={`relative glass rounded-[40px] p-12 flex flex-col transition-all duration-500 hover:-translate-y-2 ${
            item.popular ? 'border-accent/20 ring-1 ring-accent/10 shadow-2xl shadow-black/5' : ''
          }`}
        >
          {item.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold">
              Most Requested
            </div>
          )}
          <h3 className="text-2xl font-serif italic mb-2">{item.name}</h3>
          <div className="mb-10">
            <div className="text-4xl font-display font-bold">{item.priceIdr}</div>
            <div className="text-sm text-ink-muted mt-1">Starting at {item.priceUsd}</div>
          </div>
          <ul className="space-y-5 mb-12 flex-grow">
            {item.features.map((f, j) => (
              <li key={j} className="flex items-start gap-4 text-sm text-ink-muted">
                <div className="mt-1 w-4 h-4 rounded-full bg-accent/5 flex items-center justify-center">
                  <CheckCircle2 size={12} className="text-accent" />
                </div>
                {f}
              </li>
            ))}
          </ul>
          <button className={`w-full py-5 rounded-2xl font-bold transition-all ${
            item.popular ? 'bg-accent text-white hover:shadow-xl hover:shadow-black/20' : 'glass hover:bg-accent hover:text-white'
          }`}>
            Inquire Now
          </button>
        </div>
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-start">
      <div className="space-y-8">
        <div className="glass rounded-[40px] p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-accent/5 flex items-center justify-center">
              <Info className="text-accent" />
            </div>
            <h3 className="text-2xl font-serif italic">The Process</h3>
          </div>
          <div className="space-y-6">
            {[
              { step: "01", title: "Inquiry", desc: "Share your vision and references via WhatsApp or Instagram." },
              { step: "02", title: "Sketching", desc: "Receive initial concepts for feedback and direction." },
              { step: "03", title: "Refining", desc: "Detailed rendering and color application." },
              { step: "04", title: "Delivery", desc: "Final high-res files delivered in multiple formats." },
            ].map((s, i) => (
              <div key={i} className="flex gap-6">
                <span className="text-accent font-bold text-xs mt-1">{s.step}</span>
                <div>
                  <h4 className="font-bold text-sm mb-1">{s.title}</h4>
                  <p className="text-xs text-ink-muted leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="glass rounded-[40px] p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-accent/5 flex items-center justify-center">
              <CreditCard className="text-accent" />
            </div>
            <h3 className="text-2xl font-serif italic">Payment & Terms</h3>
          </div>
          <div className="space-y-6 text-sm text-ink-muted leading-relaxed">
            <p>• 50% upfront payment required to secure your slot.</p>
            <p>• Payments accepted via DANA, BCA, and ShopeePay.</p>
            <p>• Standard turnaround is 14-30 days depending on complexity.</p>
            <p>• Commercial rights are available for an additional fee.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {['DANA', 'BCA', 'ShopeePay'].map((p, i) => (
              <span key={i} className="px-4 py-2 rounded-lg bg-slate-50 text-[10px] uppercase font-bold tracking-widest border border-border">
                {p}
              </span>
            ))}
          </div>
        </div>

        <a
          href="https://wa.me/6285723353753"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-8 bg-[#1a1a1a] text-white rounded-[40px] text-center font-bold text-xl hover:shadow-2xl hover:shadow-black/20 transition-all group"
        >
          <div className="flex items-center justify-center gap-4">
            <MessageCircle size={28} />
            Connect via WhatsApp
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </div>
        </a>
      </div>
    </div>
  </motion.div>
);

const FloatingWA = () => (
  <a
    href="https://wa.me/6285723353753"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-10 right-10 z-50 w-20 h-20 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group border border-border"
  >
    <MessageCircle size={32} />
    <span className="absolute right-24 bg-black text-white px-6 py-3 rounded-2xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none shadow-2xl">
      Chat with Dhira
    </span>
  </a>
);

export default function App() {
  const [page, setPage] = React.useState<Page>('home');

  // Scroll to top on page change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="min-h-screen relative selection:bg-accent selection:text-white">
      {/* Subtle Background Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1]" 
           style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

      <Navbar currentPage={page} setPage={setPage} />

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

      <footer className="py-20 px-6 border-t border-border bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display font-bold text-2xl tracking-tighter">F. DHIRA WINDARI LI YIN</div>
          <div className="flex gap-10">
            {['home', 'about', 'order'].map((p) => (
              <button key={p} onClick={() => setPage(p as Page)} className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-accent transition-colors">
                {p}
              </button>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">
            &copy; {new Date().getFullYear()} F. Dhira windari Li Yin. Crafted with Ethereal Soul.
          </p>
        </div>
      </footer>
    </div>
  );
}

