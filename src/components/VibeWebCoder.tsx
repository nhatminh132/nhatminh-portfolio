import { Code2, Database, Palette, Rocket, Zap, Globe, Sparkle, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skills = [
  { icon: Code2, name: 'Modern JavaScript & TypeScript', color: 'text-gray-300', bgGradient: 'from-white/10 to-gray-300/10', borderColor: 'hover:border-white/50' },
  { icon: Zap, name: 'React & Next.js', color: 'text-white', bgGradient: 'from-white/10 to-gray-200/10', borderColor: 'hover:border-white/50' },
  { icon: Database, name: 'Database Design & API Development', color: 'text-gray-200', bgGradient: 'from-white/10 to-gray-300/10', borderColor: 'hover:border-white/50' },
  { icon: Palette, name: 'UI/UX Design & Tailwind CSS', color: 'text-gray-300', bgGradient: 'from-white/10 to-gray-200/10', borderColor: 'hover:border-white/50' },
  { icon: Rocket, name: 'Performance Optimization', color: 'text-white', bgGradient: 'from-white/10 to-gray-300/10', borderColor: 'hover:border-white/50' },
  { icon: Globe, name: 'Full-Stack Web Applications', color: 'text-gray-200', bgGradient: 'from-white/10 to-gray-300/10', borderColor: 'hover:border-white/50' },
];

function SkillItem({ icon: Icon, name, color, bgGradient, borderColor, delay }: { icon: typeof Code2; name: string; color: string; bgGradient: string; borderColor: string; delay: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-700 hover:scale-105 ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Gradient background effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Border gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${bgGradient} opacity-50 group-hover:opacity-100 blur-xl transition-opacity duration-500`}></div>
      
      {/* Card content */}
      <div className={`relative flex items-center gap-5 p-6 bg-black/90 backdrop-blur-sm rounded-2xl border border-gray-800/50 ${borderColor} transition-all duration-500 hover:shadow-2xl`}>
        {/* Icon container with glow effect */}
        <div className={`relative flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 flex items-center justify-center border border-gray-700/50 group-hover:scale-110 transition-transform duration-500`}>
          <Icon className={`w-7 h-7 ${color} group-hover:drop-shadow-[0_0_8px_currentColor] transition-all duration-500`} />
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
        </div>
        
        {/* Text */}
        <div className="flex-1">
          <span className="text-gray-200 font-semibold text-base group-hover:text-white transition-colors duration-300">{name}</span>
        </div>
        
        {/* Sparkle indicator */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Sparkle className={`w-4 h-4 ${color}`} />
        </div>
      </div>
    </div>
  );
}

export function VibeWebCoder() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="skills" className="relative min-h-screen bg-black text-white py-24 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gray-300/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Badge */}
          <div className="inline-block mb-6">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-2 shadow-lg shadow-white/10 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white font-semibold text-sm uppercase tracking-wider">Technical Skills</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Vibe Web Coder
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with passion and precision using cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <SkillItem
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
              color={skill.color}
              bgGradient={skill.bgGradient}
              borderColor={skill.borderColor}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
