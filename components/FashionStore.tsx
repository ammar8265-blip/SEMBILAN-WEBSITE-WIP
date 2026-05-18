import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShoppingBag, Search, User, ArrowRight, Instagram, Youtube, Globe, Play, ChevronRight, ArrowUp } from 'lucide-react';

const Ticker = () => {
  const text = "DROP 001 IS LIVE  •  LIMITED UNITS ONLY  •  BUILT DIFFERENT. MADE FOR US.  •  DROP 001 IS LIVE  •  LIMITED UNITS ONLY  •  BUILT DIFFERENT. MADE FOR US.  •  ";
  return (
    <div className="bg-sembilan-yellow py-3 overflow-hidden whitespace-nowrap border-y border-black select-none">
      <motion.div 
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="inline-block text-[11px] font-black tracking-widest text-black uppercase"
      >
        {text}{text}{text}
      </motion.div>
    </div>
  );
};

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0a0a0a] border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-heading tracking-tighter text-white italic">
          SEMBILAN <span className="not-italic text-[10px] md:text-xs align-top tracking-normal">®</span>
        </div>
        
        <div className="hidden lg:flex gap-8 items-center text-[10px] font-black tracking-[0.2em] uppercase text-stone-400">
          <a href="#" className="hover:text-white transition-colors">Shop</a>
          <a href="#" className="text-sembilan-yellow">Drop 001</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Community</a>
        </div>
        
        <div className="flex gap-4 md:gap-6 items-center">
          <Search size={18} className="text-stone-400 cursor-pointer hover:text-white" />
          <User size={18} className="text-stone-400 cursor-pointer hover:text-white" />
          <div className="flex items-center gap-2 cursor-pointer bg-sembilan-yellow px-3 py-1 rounded-sm">
            <span className="text-[10px] font-black tracking-widest text-black uppercase">Cart (0)</span>
          </div>
        </div>
      </div>
      <Ticker />
    </nav>
  );
};

export const Hero = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[700px] h-screen w-full flex items-center bg-[#0a0a0a] pt-20 overflow-hidden"
    >
      {/* Absolute Background Container */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          style={{ y: backgroundY }}
          src="/hero-bg.jpg" 
          alt="SEMBILAN Hero Background" 
          className="w-full h-[130%] object-cover opacity-90 absolute top-[-15%] left-0"
          onError={(e) => {
             // Fallback to a high-quality KL night shot if hero-bg.jpg isn't uploaded yet
             e.currentTarget.src = "https://images.unsplash.com/photo-1595153322477-4fd581aee00c?auto=format&fit=crop&q=80&w=2000";
             e.currentTarget.style.opacity = "0.7";
          }}
        />
        {/* Deep contrast and cinematic overlays */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-10" />
        
        {/* Cinematic ambient glow matching the reference image lighting */}
        <div className="absolute bottom-[2%] left-[45%] w-[800px] h-[400px] bg-red-600/30 blur-[160px] pointer-events-none z-10 animate-pulse" />
        <div className="absolute top-[15%] right-[20%] w-[500px] h-[500px] bg-blue-400/10 blur-[180px] pointer-events-none z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <motion.div 
          style={{ y: contentY }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-[70px] sm:text-[100px] md:text-[150px] lg:text-[200px] leading-[0.8] text-white tracking-tighter uppercase italic select-none drop-shadow-2xl">
            Built Different.<br />Made For Us.
          </h1>
          <div className="mt-8 mb-12 h-1.5 w-40 bg-sembilan-yellow shadow-[0_0_20px_rgba(223,255,0,0.5)]" />
          <p className="max-w-md text-stone-300 text-xl font-bold uppercase tracking-widest mb-12 leading-relaxed opacity-90">
            KL City High-End Streetwear. <br />
            <span className="text-sembilan-yellow">Drop 001</span> is now live.
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <button className="bg-sembilan-yellow text-black px-12 py-6 font-black uppercase text-xs tracking-[0.3em] hover:bg-white hover:scale-105 transition-all shadow-[0_0_40px_rgba(223,255,0,0.2)] active:scale-95">
              Shop The Drop
            </button>
            <div className="flex items-center gap-5 cursor-pointer group">
               <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-sembilan-yellow group-hover:border-sembilan-yellow transition-all shadow-lg">
                  <Play size={24} className="text-white fill-white group-hover:text-black group-hover:fill-black ml-1" />
               </div>
               <span className="text-[12px] font-black tracking-[0.2em] text-white uppercase group-hover:text-sembilan-yellow transition-colors">Play Reel</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const ProductSection = () => {
  const products = [
    { id: "01", name: "CLASSIC LOGO TEE", price: "RM89", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=1000", badge: "" },
    { id: "02", name: "KL COORDS TEE", price: "RM89", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=1000", badge: "" },
    { id: "03", name: "BANGKIT TEE", price: "RM99", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=1000", badge: "YELLOW" },
    { id: "04", name: "S9 RACING TEE", price: "RM99", image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&q=80&w=1000", badge: "RACING" },
    { id: "05", name: "REFLECT TEE", price: "RM109", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=1000", badge: "GREY" },
  ];

  return (
    <section className="bg-sembilan-black border-y border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-2 border-r border-white/10 p-12 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-black text-sembilan-yellow tracking-widest uppercase mb-4 block">Drop 001</span>
            <h2 className="text-4xl font-heading text-white leading-[0.9] mb-8">THE FIRST<br />CHAPTER.</h2>
            <p className="text-[11px] text-stone-500 font-medium leading-relaxed">
              Our first drop is a statement. 5 designs that represent our culture, our mindset, and our movement.
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 text-[10px] font-black text-sembilan-yellow uppercase tracking-widest mt-12 group">
            View All Products <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-white/5">
          {products.map((p, idx) => (
            <div key={idx} className="relative group border-r border-white/10 p-8 pt-6 pb-12 flex flex-col hover:bg-white/5 transition-colors">
              <span className="text-sembilan-yellow font-heading text-2xl opacity-40 mb-10">{p.id}</span>
              <div className="flex-1 flex items-center justify-center relative">
                 <img 
                   src={p.image} 
                   alt={p.name} 
                   className={`w-full object-contain mix-blend-screen group-hover:scale-110 transition-transform duration-500 ${p.id === '02' ? 'brightness-125' : ''}`}
                   referrerPolicy="no-referrer"
                 />
                 {p.badge && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <span className="px-3 py-1 bg-sembilan-yellow text-black text-[8px] font-black tracking-widest uppercase">{p.badge}</span>
                    </div>
                 )}
              </div>
              <div className="mt-12 flex justify-between items-end">
                <span className="text-[9px] font-black text-white leading-tight uppercase tracking-widest">{p.name}</span>
                <span className="text-[9px] font-black text-sembilan-yellow uppercase tracking-widest">{p.price}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="lg:col-span-2 p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 grayscale opacity-20 pointer-events-none">
             <img src="https://images.unsplash.com/photo-1596422846543-75c6fc18a5ce?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10">
            <h3 className="text-white text-[12px] font-black tracking-widest leading-none mb-4 uppercase">Limited Drop.<br />No Restock.</h3>
            <p className="text-[10px] text-stone-400 font-medium leading-relaxed">Once it's gone, it's gone for good. Don't sleep on this.</p>
          </div>
          
          <div className="relative z-10">
             <div className="flex gap-4 mb-4">
                <div className="text-center">
                   <div className="text-3xl font-heading text-sembilan-yellow leading-none">06</div>
                   <div className="text-[8px] font-black text-stone-500 uppercase">Days</div>
                </div>
                <div className="text-center">
                   <div className="text-3xl font-heading text-sembilan-yellow leading-none">12</div>
                   <div className="text-[8px] font-black text-stone-500 uppercase">Hours</div>
                </div>
                <div className="text-center">
                   <div className="text-3xl font-heading text-sembilan-yellow leading-none">45</div>
                   <div className="text-[8px] font-black text-stone-500 uppercase">Mins</div>
                </div>
                <div className="text-center">
                   <div className="text-3xl font-heading text-sembilan-yellow leading-none">32</div>
                   <div className="text-[8px] font-black text-stone-500 uppercase">Secs</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SecondaryGrid = () => {
  const categories = [
    { title: "Night Vibes", icon: null, image: "https://images.unsplash.com/photo-1558981403-c5f91bbde3ec?auto=format&fit=crop&q=80&w=1000" },
    { title: "Built Different", icon: null, image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1000" },
    { title: "Our Culture", icon: null, image: "https://images.unsplash.com/photo-1596422846543-75c6fc18a5ce?auto=format&fit=crop&q=80&w=1000" },
    { title: "Our People", icon: null, image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&q=80&w=1000" },
    { title: "The Details", icon: null, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=1000" },
  ];

  return (
    <section className="bg-sembilan-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 border-b border-white/10">
       {categories.map((c, idx) => (
         <div key={idx} className="relative aspect-video group cursor-pointer border-r border-white/10 overflow-hidden">
            <img 
               src={c.image} 
               alt={c.title} 
               className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" 
               referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
            <div className="absolute inset-0 flex items-center justify-between p-8">
               <h3 className="text-white text-[12px] font-black tracking-widest uppercase">{c.title}</h3>
               <div className="p-2 border border-white/20 rounded-full group-hover:border-sembilan-yellow group-hover:text-sembilan-yellow transition-all">
                  <ArrowRight size={14} />
               </div>
            </div>
         </div>
       ))}
    </section>
  );
};

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
      className="fixed bottom-10 right-10 z-[100]"
    >
      <button
        onClick={scrollToTop}
        className="w-14 h-14 bg-sembilan-yellow text-black flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-white transition-all outline-none group"
      >
        <ArrowUp size={24} strokeWidth={3} className="group-hover:-translate-y-1 transition-transform" />
      </button>
    </motion.div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black text-stone-600 py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
          <div className="lg:col-span-4">
             <div className="text-4xl font-heading italic tracking-tighter text-white mb-8">
               SEMBILAN <span className="not-italic text-sm align-top tracking-normal">®</span>
             </div>
             <p className="text-[11px] font-medium leading-relaxed max-w-xs mb-10">
               Dari Malaysia, untuk generasi yang bina jalan sendiri. Setiap langkah adalah kenyataan. Selamat datang ke SEMBILAN.
             </p>
             <div className="flex gap-8">
                <Instagram size={20} className="hover:text-sembilan-yellow transition-colors cursor-pointer" />
                <Youtube size={20} className="hover:text-sembilan-yellow transition-colors cursor-pointer" />
                <div className="w-5 h-5 flex items-center justify-center hover:text-sembilan-yellow transition-colors cursor-pointer">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1 .05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
                </div>
             </div>
          </div>
          
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10">Shop</h4>
              <ul className="text-[10px] font-bold tracking-widest space-y-5 uppercase">
                <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">New Releases</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10">Info</h4>
              <ul className="text-[10px] font-bold tracking-widest space-y-5 uppercase">
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10">About</h4>
              <ul className="text-[10px] font-bold tracking-widest space-y-5 uppercase">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Stockists</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-3">
             <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10">Join the movement</h4>
             <div className="flex bg-sembilan-charcoal p-1">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-transparent border-none focus:outline-none text-[10px] w-full px-4 text-white uppercase font-black tracking-widest placeholder:text-stone-700"
                />
                <button className="bg-sembilan-yellow p-4">
                   <ArrowRight size={16} className="text-black" />
                </button>
             </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black tracking-widest uppercase">
           <span>© 2024 SEMBILAN®. All Rights Reserved.</span>
           <div className="flex gap-12">
              <span>Built Different. Made For Us.</span>
              <span>Kuala Lumpur, MY</span>
           </div>
        </div>
      </div>
    </footer>
  );
};
