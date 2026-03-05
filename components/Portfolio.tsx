import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { X, ArrowUpRight, Play, ExternalLink, Loader2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  title: string;
  tags: string[];
  url: string;
  description: string;
  client: string;
}

interface OGData {
  title: string;
  description: string;
  image: string;
  loading: boolean;
}

async function fetchOGData(url: string): Promise<Omit<OGData, "loading">> {
  try {
    const res = await fetch(
      `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true`
    );
    const json = await res.json();
    const d = json.data;
    return {
      title:       d?.title       ?? "",
      description: d?.description ?? "",
      image:       d?.image?.url  ?? d?.screenshot?.url ?? "",
    };
  } catch {
    return { title: "", description: "", image: "" };
  }
}

function shortenTitle(raw: string): string {
  return raw.split(/\s*[|\-–—:]\s*/)[0].trim();
}

function truncate(text: string, max = 115): string {
  return text.length <= max ? text : text.slice(0, max).trimEnd() + "…";
}

const PROJECTS: Project[] = [
  {
    title:       "DevMentor",
    tags:        ["SaaS", "EdTech"],
    url:         "https://dev-mentor-nu.vercel.app",
    description: "A developer mentorship platform with billing, course management, and progress tracking for aspiring engineers.",
    client:      "DevMentor",
  },
  {
    title:       "Nexus",
    tags:        ["Web App", "Next.js"],
    url:         "https://nexus-nextjs.vercel.app",
    description: "A modern Next.js web application showcasing scalable architecture and polished frontend engineering.",
    client:      "Nexus",
  },
  {
    title:       "CrDev",
    tags:        ["Agency", "Portfolio"],
    url:         "https://crdev.vercel.app",
    description: "A creative development agency portfolio built to convert visitors into clients with clarity and speed.",
    client:      "CrDev Studio",
  },
  {
    title:       "Brainwave",
    tags:        ["AI", "Landing Page"],
    url:         "https://brainwave-tail.vercel.app",
    description: "A high-impact AI SaaS landing page with fluid animations and conversion-focused design.",
    client:      "Brainwave AI",
  },
  {
    title:       "Stockify",
    tags:        ["SaaS", "Dashboard"],
    url:         "https://stockify-nextjs.vercel.app",
    description: "An inventory and stock management SaaS dashboard with real-time data and clean analytics UI.",
    client:      "Stockify",
  },
  {
    title:       "Nike",
    tags:        ["E-Commerce", "UI/UX"],
    url:         "https://nike-tail.vercel.app",
    description: "A premium e-commerce product landing page inspired by Nike with bold typography and immersive visuals.",
    client:      "Nike Clone",
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: (project: Project & { ogImage: string; ogDescription: string }) => void;
  className?: string;
  isHomepage?: boolean;
}

function ProjectCard({
  project,
  index,
  onViewDetails,
  className = "",
  isHomepage = false,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [og, setOG] = useState<OGData>({
    title:       project.title,
    description: project.description,
    image:       "",
    loading:     true,
  });

  useEffect(() => {
    let cancelled = false;
    fetchOGData(project.url).then((data) => {
      if (cancelled) return;
      setOG({
        title:       data.title       ? shortenTitle(data.title)   : project.title,
        description: data.description ? truncate(data.description) : project.description,
        image:       data.image       || "",
        loading:     false,
      });
    });
    return () => { cancelled = true; };
  }, [project.url, project.title, project.description]);

  const shapes = [
    "rounded-[4rem_2rem_4rem_2rem]",
    "rounded-[2rem_4rem_2rem_4rem]",
    "rounded-[3rem_3rem_3rem_3rem]",
    "rounded-[5rem_2rem_2rem_2rem]",
    "rounded-[2rem_5rem_2rem_2rem]",
    "rounded-[2rem_2rem_5rem_2rem]",
  ];
  const shapeClass = isHomepage
    ? "rounded-[3rem_1rem_3rem_1rem]"
    : shapes[index % shapes.length];

  useEffect(() => {
    if (!cardRef.current) return;
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
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden bg-white/5 border border-white/10 ${shapeClass} aspect-[4/3] cursor-pointer ${className}`}
      onClick={() =>
        onViewDetails({
          ...project,
          title:         og.title,
          ogImage:       og.image,
          ogDescription: og.description,
        })
      }
    >
      <div className="absolute inset-0 overflow-hidden bg-white/5">
        {og.loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-white/20 animate-spin" />
          </div>
        ) : og.image ? (
          <motion.img
            src={og.image}
            alt={og.title}
            animate={{
              scale: [1, 1.05, 1],
              x:     [0, -20, 0, 20, 0],
              y:     [0, 10,  0, -10, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/5 to-white/0">
            <span className="text-white/20 text-6xl font-bold">
              {og.title.charAt(0)}
            </span>
          </div>
        )}

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] opacity-20" />
          <div className="absolute top-6 left-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">REC</span>
          </div>
          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
              00:00:0{index + 1}:24
            </span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
        <div className="flex gap-2 mb-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full glass border-white/10 text-[10px] uppercase tracking-widest font-bold text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-3xl md:text-5xl font-display font-bold group-hover:text-cyan-electric transition-colors mb-6">
          {og.loading ? project.title : og.title}
        </h3>

        <div className="flex items-center gap-4 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-obsidian text-xs uppercase tracking-widest font-bold hover:bg-cyan-electric transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails({
                ...project,
                title:         og.title,
                ogImage:       og.image,
                ogDescription: og.description,
              });
            }}
          >
            View Details <ArrowUpRight size={16} />
          </button>
          <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-white">
            <Play size={16} fill="currentColor" />
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-0 border-2 border-cyan-electric/0 group-hover:border-cyan-electric/50 transition-colors duration-500 pointer-events-none ${shapeClass}`}
      />
    </div>
  );
}

type SelectedProject = Project & { ogImage: string; ogDescription: string };

export default function Portfolio({ isHomepage = false }: { isHomepage?: boolean }) {
  const [selectedProject, setSelectedProject] = useState<SelectedProject | null>(null);

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
              A collection of digital experiences we&apos;ve crafted for forward-thinking brands.
            </p>
          </div>
          <button className="btn-pill glass border-white/10 text-xs uppercase tracking-widest font-bold hover:bg-white/5">
            View All Projects
          </button>
        </motion.div>

        {isHomepage ? (
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {PROJECTS.slice(0, 2).map((project, i) => (
              <ProjectCard
                key={project.url}
                project={project}
                index={i}
                onViewDetails={setSelectedProject}
                className="md:col-span-3"
                isHomepage
              />
            ))}
            {PROJECTS.slice(2, 5).map((project, i) => (
              <ProjectCard
                key={project.url}
                project={project}
                index={i + 2}
                onViewDetails={setSelectedProject}
                className="md:col-span-2"
                isHomepage
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <ProjectCard
                key={project.url}
                project={project}
                index={i}
                onViewDetails={setSelectedProject}
              />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12"
          >
            <div
              className="absolute inset-0 bg-obsidian/90 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              className="relative w-full max-w-5xl bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col max-h-[92dvh]"
            >
              {/* Mobile close bar */}
              <div className="flex md:hidden items-center justify-between px-6 py-4 border-b border-white/10 flex-shrink-0">
                <span className="text-xs uppercase tracking-widest font-bold text-white/40">
                  Project Details
                </span>
                <button
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable body */}
              <div className="overflow-y-auto flex-1 flex flex-col md:flex-row">

                {/* Desktop close button */}
                <button
                  className="hidden md:flex absolute top-8 right-8 z-20 w-12 h-12 rounded-full glass items-center justify-center text-white hover:bg-white/10 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={24} />
                </button>

                {/* Left: image */}
                <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden flex-shrink-0">
                  {selectedProject.ogImage ? (
                    <img
                      src={selectedProject.ogImage}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/5 text-8xl font-bold text-white/10">
                      {selectedProject.title.charAt(0)}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
                </div>

                {/* Right: content */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex gap-2 mb-6">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-widest font-bold text-cyan-electric"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                    {selectedProject.title}
                  </h2>

                  <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10">
                    {selectedProject.ogDescription || selectedProject.description}
                  </p>

                  <div className="grid grid-cols-1 gap-6 pt-6 border-t border-white/10 mb-8">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-2">Client</p>
                      <p className="text-white font-display text-xl">{selectedProject.client}</p>
                    </div>
                  </div>

                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-electric to-purple-deep text-obsidian font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-500 flex items-center justify-center gap-2"
                  >
                    Open Website <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
