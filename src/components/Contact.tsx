import { Mail, MessageCircle, Send, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contacts = [
  {
    icon: MessageCircle,
    label: 'Discord',
    value: 'thenoobminhmer',
    href: '#',
    gradient: 'from-white to-gray-300',
    iconColor: 'text-gray-300',
    bgGlow: 'bg-white/10',
    hoverShadow: 'hover:shadow-white/20',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'lpnminh472@gmail.com',
    href: 'mailto:lpnminh472@gmail.com',
    gradient: 'from-gray-200 to-white',
    iconColor: 'text-white',
    bgGlow: 'bg-gray-200/10',
    hoverShadow: 'hover:shadow-gray-200/20',
  },
];

function ContactButton({ contact, delay }: { contact: typeof contacts[0]; delay: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <a
      ref={ref}
      href={contact.href}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-700 hover:scale-105 ${
        isVisible
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Gradient glow on hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${contact.gradient} opacity-0 group-hover:opacity-75 blur-lg transition-opacity duration-500 rounded-2xl`}></div>
      
      {/* Card content */}
      <div className={`relative flex flex-col items-center gap-5 p-8 bg-black/90 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:shadow-2xl ${contact.hoverShadow}`}>
        {/* Icon container with gradient background */}
        <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${contact.bgGlow} border border-gray-700/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
          <contact.icon className={`w-8 h-8 ${contact.iconColor} group-hover:drop-shadow-[0_0_10px_currentColor] transition-all duration-500`} />
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
        </div>
        
        {/* Text content */}
        <div className="text-center">
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">{contact.label}</p>
          <p className="text-white font-bold text-base group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">{contact.value}</p>
        </div>
        
        {/* Hover arrow indicator */}
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Send className={`w-4 h-4 ${contact.iconColor}`} />
        </div>

        {/* Decorative corner */}
        <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${contact.gradient} opacity-5 rounded-bl-full`}></div>
      </div>
    </a>
  );
}

export function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="contact" className="relative min-h-screen bg-black text-white py-24 px-4 flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/3 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 left-20 w-80 h-80 bg-gray-300/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="relative max-w-5xl mx-auto w-full">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Badge */}
          <div className="inline-block mb-6">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-2 shadow-lg shadow-white/10 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-white" />
              <span className="text-white font-semibold text-sm uppercase tracking-wider">Let's Connect</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Let's connect and build something amazing together. I'm always open to discussing new projects and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contacts.map((contact, index) => (
            <ContactButton
              key={contact.label}
              contact={contact}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Footer */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <span>© 2026 Nhat Minh. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>and passion</span>
          </div>
        </div>
      </div>
    </section>
  );
}
