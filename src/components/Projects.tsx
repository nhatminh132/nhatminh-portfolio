import { ExternalLink, Github, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    title: 'A5 Gallery',
    description: 'A collaborative full-stack media storage platform designed for secondary class students to share and organize photos, videos, and memories. Features secure cloud storage, easy file uploads, and seamless media browsing powered by Supabase.',
    technologies: ['TypeScript', 'PLpgSQL', 'JavaScript', 'CSS', 'HTML'],
    liveUrl: 'https://a5gallery.vercel.app',
    githubUrl: 'https://github.com/nhatminh132/a5gallery',
    gradient: 'from-white to-gray-300',
  },
];

function ProjectCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden transition-all duration-700 hover:scale-[1.02] ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Card content */}
      <div className="relative bg-black/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-700/20">
        {/* Top gradient bar */}
        <div className="relative overflow-hidden mb-6">
          <div className={`h-1.5 rounded-full bg-gradient-to-r ${project.gradient} shadow-lg`}>
            <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
          </div>
        </div>

        {/* Project title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-base mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 group/btn"
          >
            <span>Visit Project</span>
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/50 text-white font-semibold rounded-xl border border-gray-700/50 hover:bg-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

        {/* Decorative corner elements */}
        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.gradient} opacity-5 rounded-bl-full`}></div>
        <div className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${project.gradient} opacity-5 rounded-tr-full`}></div>
      </div>
    </div>
  );
}

export function Projects() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="projects" className="relative min-h-screen bg-black text-white py-24 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-300/5 rounded-full blur-3xl"></div>
      
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
              <Briefcase className="w-4 h-4 text-white" />
              <span className="text-white font-semibold text-sm uppercase tracking-wider">My Work</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A collection of my recent work and side projects showcasing various technologies and skills
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
