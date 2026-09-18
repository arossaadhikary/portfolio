import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/Projects/ProjectCard";
import ProjectModal from "../components/Projects/ProjectModal";
import { projects } from "../data/projects";
import type { Project } from "../types/Project";

import YouTube from "./YouTube.tsx"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="bg-[#0a192f] text-white"
    >
      {/* container for continous margins */}
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-4 mt-20">

        <h2 className="mb-6 text-4xl font-bold">
          CODING
        </h2>

        <hr className="mb-6 border-slate-700" />

        <h2 className="text-left text-slate-300 sm:text-lg md:text-lg">
          <em>
            Click on a project image to learn more about the experience.
          </em>
        </h2>

        {/* Projects Grid */}
        <motion.div
          className="
            my-10
            grid
            grid-cols-1
            gap-10
            sm:grid-cols-2
            md:grid-cols-3
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              {...project}
              onImageClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              isOpen={!!selectedProject}
              onClose={() => setSelectedProject(null)}
              project={selectedProject}
            />
          )}
        </AnimatePresence>


        <YouTube />

      </div>
    </section>
  );
};

export default Projects;