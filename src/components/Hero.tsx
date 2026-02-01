import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Github, Facebook, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/nhatminh132', label: 'GitHub' },
    { icon: Facebook, href: 'https://www.facebook.com/toilanhatminh36/', label: 'Facebook' },
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-white px-4 pt-20"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900/50 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-800/30 via-transparent to-transparent"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div
        className={`relative z-10 text-center max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Profile image with glassmorphism */}
        <div className="mb-8 inline-block relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-white via-gray-300 to-white rounded-full blur opacity-60 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <div className="relative">
            <img
              src="/claw.jpg"
              alt="Profile Avatar"
              className="w-36 h-36 rounded-full border-4 border-black shadow-2xl object-cover relative z-10"
            />
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-white to-gray-200 rounded-full p-2 shadow-lg">
              <Sparkles className="w-5 h-5 text-black" />
            </div>
          </div>
        </div>

        {/* Name with enhanced gradient */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
          Nhat Minh
        </h1>

        {/* Subtitle with glassmorphism badge */}
        <div className="inline-block mb-8">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-8 py-3 shadow-2xl">
            <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide">
              Full-Stack Developer & Novice Gamer
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Crafting beautiful, performant web experiences with modern technologies.
          Passionate about clean code, innovative design, and competitive gaming.
        </p>

        {/* Social links with modern styling */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="group relative backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-xl p-4 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/25"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-8 right-4 flex flex-col items-center gap-2 animate-bounce transition-opacity duration-500">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
            </div>
            <span className="text-white text-xs font-light tracking-wider uppercase whitespace-nowrap">
              Scroll Down
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
