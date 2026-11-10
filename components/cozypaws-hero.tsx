import { DM_Serif_Display, Inter } from "@/lib/google-fonts";
import { Search, ShoppingCart, Star, ArrowUpRight, Play, ArrowRight, Plus } from "lucide-react";
import "./cozypaws-hero.css";

const serif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--cp-serif" });
const inter = Inter({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--cp-sans" });

const A = "https://polo-pecan-73837341.figma.site/_assets/v11/";
const IMG = {
  logo: A + "0ae29d6d9628bede667f90d57bebe81b8f1ec2bf.svg",
  avatar: A + "e62173d41f91350a59628e8a9a55ae078a886fb9.png?w=128",
  product: A + "3e5158dad63d392ade022e81890edc9f54d750bc.png",
  video: A + "76be6ec3a93a703b15e9cc01e764a4e3f9d7d2c0.png",
  left: A + "8d44b25186ef45a5789c74668fb781cea4e1ff49.png",
  center: A + "96745c4e72ad5c5208e53a885df797fd82cd854a.png?h=1024",
  right: A + "81bd2e7a66b58f3d8f3ad78fd1ebf01af8dfdee1.png",
};

const NAV = ["Home", "Shop", "Delivery and payment", "Brands", "Blog"];

function Header() {
  return (
    <header className="cp-header">
      <img className="cp-logo animate-fade-in delay-100" src={IMG.logo} alt="CozyPaws" />
      <nav className="cp-nav animate-fade-in delay-200">
        {NAV.map((n, i) => (
          <a key={n} href="#" className={i === 0 ? "is-active" : undefined}>{n}</a>
        ))}
      </nav>
      <div className="cp-actions animate-fade-in delay-300">
        <button className="cp-circle cp-search" aria-label="Search"><Search size={18} /></button>
        <button className="cp-circle cp-fav" aria-label="Favorites">
          <Star size={18} fill="#fff" />
          <span className="cp-badge">4</span>
        </button>
        <button className="cp-circle" aria-label="Cart">
          <ShoppingCart size={18} />
          <span className="cp-badge">1</span>
        </button>
        <img className="cp-avatar" src={IMG.avatar} alt="Profile" />
      </div>
    </header>
  );
}

function ProductCard({ className = "" }: { className?: string }) {
  return (
    <div className={`cp-product ${className}`}>
      <div className="cp-product-img">
        <img src={IMG.product} alt="Cozy Cat House" />
        <button className="cp-arrow" aria-label="View product"><ArrowUpRight size={18} /></button>
      </div>
      <p className="cp-product-name">Cozy Cat House</p>
      <p className="cp-product-price">$49.99</p>
    </div>
  );
}

function VideoCard({ className = "" }: { className?: string }) {
  return (
    <div className={`cp-video ${className}`}>
      <img src={IMG.video} alt="Product review video" />
      <div className="cp-video-overlay">
        <button className="cp-play" aria-label="Play"><Play size={16} fill="#fff" /></button>
        <p>Watch Product Reviews on TikTok and YouTube</p>
      </div>
    </div>
  );
}

function Avatars() {
  return (
    <div className="cp-avatars">
      <img src={IMG.avatar} alt="" />
      <span><Plus size={14} /></span>
    </div>
  );
}

function ExploreButton({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`cp-explore ${className}`}>
      Explore Products <ArrowRight size={16} />
    </a>
  );
}

function BottomPhotos({ withOverlays }: { withOverlays: boolean }) {
  return (
    <div className="cp-photos">
      <div className="cp-photo cp-photo-side animate-photo-reveal delay-700">
        <img src={IMG.left} alt="Dog with toy" />
        {withOverlays && (
          <div className="cp-ov cp-ov-stat animate-scale-in delay-1000">
            <Avatars />
            <div><strong>98K+</strong><span>Happy customers</span></div>
          </div>
        )}
      </div>
      <div className="cp-photo cp-photo-center animate-photo-reveal delay-600">
        <img src={IMG.center} alt="Happy pet" />
        {withOverlays && (
          <div className="cp-ov cp-ov-center animate-fade-up delay-1100">
            <h3>Best Products for Your Pet</h3>
            <ExploreButton />
          </div>
        )}
      </div>
      <div className="cp-photo cp-photo-side animate-photo-reveal delay-800">
        <img src={IMG.right} alt="Cat relaxing" />
        {withOverlays && (
          <div className="cp-ov cp-ov-stat animate-scale-in delay-1200">
            <Star size={22} fill="#E86A10" color="#E86A10" />
            <div><strong>4.6</strong><span>Average rating</span></div>
          </div>
        )}
      </div>
    </div>
  );
}

const LINES = [["Everything"], ["Your", "Pets", "Love"]];

function Heading() {
  let i = 0;
  return (
    <h1 className="cp-heading font-serif-display">
      {LINES.map((line, li) => (
        <span key={li} className="cp-line">
          {line.map(w => {
            const d = 200 + i++ * 100;
            return <span key={w} className={`animate-word-pop delay-${d}`}>{w}</span>;
          })}
        </span>
      ))}
    </h1>
  );
}

export function CozyPawsHero() {
  return (
    <div className={`cp-root ${serif.variable} ${inter.variable}`}>
      <Header />
      <section className="cp-hero">
        {/* Desktop + tablet */}
        <div className="cp-wide">
          <div className="cp-text"><Heading /></div>
          <ProductCard className="cp-side-left animate-slide-in-left delay-600" />
          <VideoCard className="cp-side-right animate-slide-in-right delay-700" />
          <BottomPhotos withOverlays />
        </div>

        {/* Mobile */}
        <div className="cp-mobile">
          <div className="cp-m-top">
            <h1 className="cp-m-title font-serif-display animate-text-reveal delay-200">Everything Your Pets Love</h1>
            <p className="cp-m-sub animate-fade-up delay-300">Best products for your pet, delivered with care.</p>
            <ExploreButton className="animate-fade-up delay-400" />
          </div>
          <div className="cp-m-cards">
            <ProductCard className="animate-slide-in-left delay-500" />
            <VideoCard className="animate-slide-in-right delay-600" />
          </div>
          <div className="cp-m-stats animate-fade-up delay-700">
            <div className="cp-m-stat"><Avatars /><strong>98K+</strong></div>
            <span className="cp-m-divider" />
            <div className="cp-m-stat"><Star size={18} fill="#E86A10" color="#E86A10" /><strong>4.6</strong></div>
          </div>
          <BottomPhotos withOverlays={false} />
        </div>
      </section>
    </div>
  );
}
