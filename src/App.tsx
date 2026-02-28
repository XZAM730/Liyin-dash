import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube, Github, Mail, MessageCircle, ExternalLink, ChevronRight, ChevronLeft, CreditCard, Info, CheckCircle2, ArrowRight, Star, Sparkles, Palette, Layers } from 'lucide-react';
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
  { id: 1, title: "Celestial Reverie", category: "Digital Illustration", image: "https://picsum.photos/seed/liyin1/1200/800", description: "An exploration of cosmic themes and ethereal lighting." },
  { id: 2, title: "Minimalist Brand Identity", category: "Graphic Design", image: "https://picsum.photos/seed/liyin2/1200/800", description: "Clean, modern branding for a tech startup." },
  { id: 3, title: "The Wanderer", category: "Character Design", image: "https://picsum.photos/seed/liyin3/1200/800", description: "Detailed character concept for a fantasy RPG." },
  { id: 4, title: "Urban Serenity", category: "Photography", image: "https://picsum.photos/seed/liyin4/1200/800", description: "Capturing the quiet moments in a bustling city." },
  { id: 5, title: "Flowing Motion", category: "Abstract Art", image: "https://picsum.photos/seed/liyin5/1200/800", description: "A study of movement and color harmony." },
];

const PRICES: PriceItem[] = [
  {
    name: "Essential Sketch",
    priceIdr: "Rp 250.000",
    priceUsd: "$20",
    features: ["High-res Lineart", "1 Character", "Personal Use", "2 Revisions", "7 Days Delivery"]
  },
  {
    name: "Premium Illustration",
    priceIdr: "Rp 750.000",
    priceUsd: "$50",
    features: ["Full Color & Lighting", "Detailed Background", "Commercial License", "5 Revisions", "14 Days Delivery"],
    popular: true
  },
  {
    name: "Studio Branding",
    priceIdr: "Rp 2.500.000",
    priceUsd: "$175",
    features: ["Logo & Brand Kit", "Social Media Assets", "Source Files (AI/PSD)", "Unlimited Revisions", "30 Days Delivery"]
  }
];

// --- Components ---

const Navbar = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-8">
    <div className="glass px-8 py-4 rounded-full flex items-center gap-10 shadow-lg shadow-black/5">
      <div className="font-display font-bold text-xl tracking-tighter mr-4">LIYIN IEA</div>
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
        <Sparkles className="text-accent" size={24} />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-7xl md:text-9xl font-display font-bold tracking-tighter mb-8 leading-[0.9]"
      >
        Liyin <span className="italic font-serif font-normal">IEA.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-ink-muted max-w-2xl text-xl md:text-2xl font-serif italic mb-12 text-balance"
      >
        "Transforming abstract visions into timeless digital masterpieces with a touch of ethereal elegance."
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
              src="https://picsum.photos/seed/liyin_portrait/800/1000"
              alt="Liyin IEA"
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
        <h2 className="text-6xl font-display font-bold mb-10 leading-tight">Meet Liyin, the soul behind <span className="italic font-serif font-normal">IEA.</span></h2>
        
        <div className="space-y-8 text-lg text-ink-muted leading-relaxed font-serif italic">
          <p>
            Liyin IEA is more than just a digital studio; it is a manifestation of a lifelong journey through the realms of visual storytelling and emotional resonance. Based in the intersection of traditional artistry and modern technology, Liyin has spent nearly a decade refining a style that is uniquely ethereal, minimalist, and profoundly human.
          </p>
          <p>
            The name "IEA" stands for <span className="text-accent font-sans not-italic font-semibold">Imagination, Elegance, and Authenticity</span>—the three pillars that support every stroke and pixel. Liyin believes that art should not just be seen, but felt. Her work often explores the delicate balance between light and shadow, the tangible and the dreamlike.
          </p>
          <p>
            With a background in Fine Arts and a deep-seated love for contemporary design, Liyin has collaborated with international brands, indie game developers, and private collectors worldwide. Her versatility allows her to transition seamlessly from intricate character illustrations to high-concept branding, always maintaining a signature touch of sophistication.
          </p>
          <p>
            "My goal is to create visuals that serve as a sanctuary for the mind," Liyin says. "In a world that is often loud and chaotic, I strive to find the quiet beauty that exists in the details."
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 mt-16 pt-16 border-t border-border">
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-4 text-accent">Expertise</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Palette size={14} /> Digital Illustration</li>
              <li className="flex items-center gap-2"><Layers size={14} /> Brand Identity</li>
              <li className="flex items-center gap-2"><Star size={14} /> Character Concept</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-4 text-accent">Philosophy</h4>
            <p className="text-sm italic">"Less is more, but detail is everything."</p>
          </div>
        </div>
      </div>
    </div>

    <div className="glass rounded-[40px] p-16 text-center">
      <h3 className="text-3xl font-serif italic mb-12">Let's connect in the digital realm</h3>
      <div className="flex flex-wrap justify-center gap-12">
        {[
          { icon: Instagram, label: "Instagram", link: "#" },
          { icon: Twitter, label: "Twitter", link: "#" },
          { icon: Linkedin, label: "LinkedIn", link: "#" },
          { icon: Mail, label: "Email", link: "mailto:hello@liyiniea.com" },
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
      <p className="text-ink-muted max-w-xl mx-auto text-lg">Exquisite quality tailored to your unique vision. Select a tier to begin our collaboration.</p>
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
              { step: "01", title: "Inquiry", desc: "Share your vision and references via WhatsApp or Email." },
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
            <p>• 50% non-refundable deposit required to secure your slot.</p>
            <p>• Payments accepted via Bank Transfer, PayPal, and Wise.</p>
            <p>• Standard turnaround is 14-30 days depending on complexity.</p>
            <p>• Commercial rights are available for an additional fee.</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {['Visa', 'Mastercard', 'PayPal', 'Wise', 'Bank Transfer'].map((p, i) => (
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
      Chat with Liyin
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
          <div className="font-display font-bold text-2xl tracking-tighter">LIYIN IEA</div>
          <div className="flex gap-10">
            {['home', 'about', 'order'].map((p) => (
              <button key={p} onClick={() => setPage(p as Page)} className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-accent transition-colors">
                {p}
              </button>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">
            &copy; {new Date().getFullYear()} Liyin IEA. Crafted with Ethereal Soul.
          </p>
        </div>
      </footer>
    </div>
  );
}

