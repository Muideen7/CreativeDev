"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { X, ArrowUpRight, Play } from "lucide-react";
import gsap from "gsap";

interface Project {
  title: string;
  tags: string[];
  image: string;
  description: string;
  year: string;
  client: string;
}

interface ProjectCardProps extends Project {
  index: number;
  onViewDetails: (project: Project) => void;
  className?: string;
  isHomepage?: boolean;
}

function ProjectCard({ title, tags, image, index, onViewDetails, className = "", isHomepage = false }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Unique squircle shapes for each card, but consistent on homepage
  const shapes = [
    "rounded-[4rem_2rem_4rem_2rem]",
    "rounded-[2rem_4rem_2rem_4rem]",
    "rounded-[3rem_3rem_3rem_3rem]",
    "rounded-[5rem_2rem_2rem_2rem]",
    "rounded-[2rem_5rem_2rem_2rem]",
    "rounded-[2rem_2rem_5rem_2rem]",
  ];
  const shapeClass = isHomepage ? "rounded-[3rem_1rem_3rem_1rem]" : shapes[index % shapes.length];

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.9, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom-=50",
          },
        }
      );
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden bg-white/5 border border-white/10 ${shapeClass} aspect-[4/3] cursor-pointer ${className}`}
      onClick={() => onViewDetails({ title, tags, image, description: "A comprehensive digital transformation project focusing on user experience and technical excellence.", year: "2024", client: "Fortune 500 Co." })}
    >
      {/* Animated Image Container */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          animate={{ 
            scale: [1, 1.05, 1],
            x: [0, -20, 0, 20, 0],
            y: [0, 10, 0, -10, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700"
        />
        
        {/* Video Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Scanlines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] opacity-20" />
          
          {/* REC Indicator */}
          <div className="absolute top-6 left-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">REC</span>
          </div>
          
          {/* Timecode */}
          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">00:00:0{index + 1}:24</span>
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
        <div className="flex gap-2 mb-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full glass border-white/10 text-[10px] uppercase tracking-widest font-bold text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-3xl md:text-5xl font-display font-bold group-hover:text-cyan-electric transition-colors mb-6">
          {title}
        </h3>
        
        {/* View Details Button */}
        <div className="flex items-center gap-4 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          <button 
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-obsidian text-xs uppercase tracking-widest font-bold hover:bg-cyan-electric transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails({ title, tags, image, description: "A comprehensive digital transformation project focusing on user experience and technical excellence.", year: "2024", client: "Fortune 500 Co." });
            }}
          >
            View Details <ArrowUpRight size={16} />
          </button>
          <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-white">
            <Play size={16} fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Ghost Border Animation */}
      <div className={`absolute inset-0 border-2 border-cyan-electric/0 group-hover:border-cyan-electric/50 transition-colors duration-500 pointer-events-none ${shapeClass}`} />
    </div>
  );
}

export default function Portfolio({ isHomepage = false }: { isHomepage?: boolean }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      title: "Lumina OS",
      tags: ["Product", "UI/UX"],
      image: "https://picsum.photos/seed/lumina/1200/900",
      description: "Lumina OS is a next-generation operating system interface designed for spatial computing. We focused on fluid interactions and glassmorphism aesthetics.",
      year: "2024",
      client: "Lumina Tech",
    },
    {
      title: "Nexus Protocol",
      tags: ["Web3", "Branding"],
      image: "https://picsum.photos/seed/nexus/1200/900",
      description: "A decentralized finance protocol that redefines how users interact with liquidity pools. Our branding reflects security and transparency.",
      year: "2023",
      client: "Nexus Labs",
    },
    {
      title: "Aether AI",
      tags: ["Software", "AI"],
      image: "https://picsum.photos/seed/aether/1200/900",
      description: "An AI-powered research assistant that helps scientists synthesize complex data. The interface is built for high-density information display.",
      year: "2024",
      client: "Aether Research",
    },
    {
      title: "Vivid Motion",
      tags: ["Animation", "Creative"],
      image: "https://picsum.photos/seed/vivid/1200/900",
      description: "A creative studio portfolio focusing on high-end 3D animations and motion graphics. The site itself is a testament to fluid motion.",
      year: "2023",
      client: "Vivid Studio",
    },
    {
      title: "Solaris Web",
      tags: ["Development", "SEO"],
      image: "https://picsum.photos/seed/solaris/1200/900",
      description: "A high-performance e-commerce platform built for speed and search engine dominance. We achieved sub-second load times globally.",
      year: "2024",
      client: "Solaris Retail",
    },
    {
      title: "Echo Identity",
      tags: ["Branding", "Strategy"],
      image: "https://picsum.photos/seed/echo/1200/900",
      description: "A comprehensive brand identity for a global logistics firm. We developed a visual language that communicates efficiency and reliability.",
      year: "2023",
      client: "Echo Logistics",
    },
  ];

  return (
    <section id="portfolio" className="py-32 px-6 md:px-20 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-6">
              Selected <span className="text-purple-deep">Works</span>
            </h2>
            <p className="text-white/40 max-w-md">
              A collection of digital experiences we've crafted for forward-thinking brands.
            </p>
          </div>
          <button className="btn-pill glass border-white/10 text-xs uppercase tracking-widest font-bold hover:bg-white/5">
            View All Projects
          </button>
        </motion.div>

        {isHomepage ? (
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {/* Top 2 Cards */}
            {projects.slice(0, 2).map((project, i) => (
              <ProjectCard 
                key={project.title} 
                title={project.title}
                tags={project.tags}
                image={project.image}
                description={project.description}
                year={project.year}
                client={project.client}
                index={i} 
                onViewDetails={setSelectedProject}
                className="md:col-span-3"
                isHomepage={true}
              />
            ))}
            {/* Bottom 3 Cards */}
            {projects.slice(2, 5).map((project, i) => (
              <ProjectCard 
                key={project.title} 
                title={project.title}
                tags={project.tags}
                image={project.image}
                description={project.description}
                year={project.year}
                client={project.client}
                index={i + 2} 
                onViewDetails={setSelectedProject}
                className="md:col-span-2"
                isHomepage={true}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <ProjectCard 
                key={project.title} 
                title={project.title}
                tags={project.tags}
                image={project.image}
                description={project.description}
                year={project.year}
                client={project.client}
                index={i} 
                onViewDetails={setSelectedProject}
              />
            ))}
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12"
          >
            <div 
              className="absolute inset-0 bg-obsidian/90 backdrop-blur-xl" 
              onClick={() => setSelectedProject(null)}
            />
            
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              className="relative w-full max-w-5xl bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden flex flex-col md:flex-row"
            >
              <button 
                className="absolute top-8 right-8 z-20 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>

              {/* Left: Image */}
              <div className="w-full md:w-1/2 aspect-square md:aspect-auto relative overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
              </div>

              {/* Right: Content */}
              <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                <div className="flex gap-2 mb-8">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-cyan-electric">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">{selectedProject.title}</h2>
                
                <p className="text-white/60 text-lg leading-relaxed mb-12">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-2">Year</p>
                    <p className="text-white font-display text-xl">{selectedProject.year}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-2">Client</p>
                    <p className="text-white font-display text-xl">{selectedProject.client}</p>
                  </div>
                </div>

                <button className="mt-12 w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-electric to-purple-deep text-obsidian font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-500">
                  Launch Case Study
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
