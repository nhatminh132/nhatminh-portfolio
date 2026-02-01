import { Trophy, TrendingUp, Star, Gamepad2, User, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const games = [
  {
    name: 'Free Fire',
    displayName: 'Chienthanlv1',
    level: '50+',
    rank: 'Elite Grandmaster',
    uid: '1121380060897742850',
    gradient: 'from-white to-gray-300',
    bgGlow: 'bg-white/10',
    borderGlow: 'group-hover:border-white/50',
    shadowColor: 'group-hover:shadow-white/20',
  },
  {
    name: 'Roblox',
    displayName: 'Minh',
    username: 'aoquadimna',
    profileLink: 'https://www.roblox.com/users/2988452748/profile',
    gradient: 'from-gray-700 to-gray-600',
    bgGlow: 'bg-gray-700/10',
    borderGlow: 'group-hover:border-gray-600/50',
    shadowColor: 'group-hover:shadow-gray-600/20',
  },
];

function GameCard({ game, delay }: { game: typeof games[0]; delay: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden transition-all duration-700 hover:scale-105 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Card content */}
      <div className={`relative bg-black/90 backdrop-blur-sm rounded-2xl p-7 border border-gray-800/50 ${game.borderGlow} transition-all duration-500 hover:shadow-2xl ${game.shadowColor}`}>
        {/* Top gradient bar with animation */}
        <div className="relative overflow-hidden mb-6">
          <div className={`h-1.5 rounded-full bg-gradient-to-r ${game.gradient} shadow-lg`}>
            <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
          </div>
        </div>

        {/* Game title with icon */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
            {game.name}
          </h3>
          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${game.bgGlow} border border-slate-600/30 group-hover:scale-110 transition-transform duration-300`}>
            <Gamepad2 className={`w-5 h-5 bg-gradient-to-r ${game.gradient} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }} />
          </div>
        </div>

        {/* Stats grid */}
        <div className="space-y-5">
          {/* Free Fire specific fields */}
          {game.name === 'Free Fire' && (
            <>
              <div className="flex items-center gap-4 group/item">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-gray-700/50 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                  <User className="w-5 h-5 text-gray-300 group-hover/item:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Name</p>
                  <p className="text-white font-bold text-lg">{game.displayName}</p>
                </div>
                <Star className="w-4 h-4 text-gray-600 group-hover/item:text-white transition-colors" />
              </div>

              <div className="flex items-center gap-4 group/item">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-gray-700/50 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                  <TrendingUp className="w-5 h-5 text-gray-300 group-hover/item:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Level</p>
                  <p className="text-white font-bold text-lg">{game.level}</p>
                </div>
                <Star className="w-4 h-4 text-gray-600 group-hover/item:text-white transition-colors" />
              </div>

              <div className="flex items-center gap-4 group/item">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-gray-700/50 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                  <Trophy className="w-5 h-5 text-gray-300 group-hover/item:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Rank</p>
                  <p className="text-white font-bold text-lg">{game.rank}</p>
                </div>
                <Star className="w-4 h-4 text-gray-600 group-hover/item:text-white transition-colors" />
              </div>

              <div className="flex items-center gap-4 group/item">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-gray-700/50 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                  <User className="w-5 h-5 text-gray-300 group-hover/item:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">UID</p>
                  <p className="text-white font-bold text-lg">{game.uid}</p>
                </div>
                <Star className="w-4 h-4 text-gray-600 group-hover/item:text-white transition-colors" />
              </div>
            </>
          )}

          {/* Roblox specific fields */}
          {game.name === 'Roblox' && (
            <>
              <div className="flex items-center gap-4 group/item">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-gray-700/50 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                  <User className="w-5 h-5 text-gray-300 group-hover/item:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Name</p>
                  <p className="text-white font-bold text-lg">{game.displayName}</p>
                </div>
                <Star className="w-4 h-4 text-gray-600 group-hover/item:text-white transition-colors" />
              </div>

              <div className="flex items-center gap-4 group/item">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-gray-700/50 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                  <ExternalLink className="w-5 h-5 text-gray-300 group-hover/item:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">Username</p>
                  <a 
                    href={game.profileLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white font-bold text-lg hover:text-gray-300 transition-colors flex items-center gap-2"
                  >
                    {game.username}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <Star className="w-4 h-4 text-gray-600 group-hover/item:text-white transition-colors" />
              </div>
            </>
          )}
        </div>

        {/* Decorative corner elements */}
        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${game.gradient} opacity-5 rounded-bl-full`}></div>
        <div className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${game.gradient} opacity-5 rounded-tr-full`}></div>
      </div>
    </div>
  );
}

export function GamingProfile() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="gaming" className="relative min-h-screen bg-black text-white py-24 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gray-300/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
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
              <Gamepad2 className="w-4 h-4 text-white" />
              <span className="text-white font-semibold text-sm uppercase tracking-wider">Gaming Stats</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Gaming Profile & Stats
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Competitive gaming achievements and rankings across multiple titles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {games.map((game, index) => (
            <GameCard key={game.name} game={game} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
