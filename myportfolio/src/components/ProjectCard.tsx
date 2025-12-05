import Image from 'next/image'
import { Project } from '@/data/Projects'
import { FaGithub } from 'react-icons/fa';
import { techIcons } from "@/components/TechIcons";

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
      <Image src={project.imageUrl} alt={project.title} width={500} height={300} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 text-xl">{project.description}</p>
        <div className="flex flex-wrap gap-3 mb-4">
          {project.techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-100 text-gray-800 px-3 py-1 rounded-lg shadow-sm"
            >
              {techIcons[tech] ?? <span className="text-xl">{tech}</span>}
              <span className="text-xl text-blue-600">{tech}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-xl flex items-center gap-2"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 text-2xl transition-colors"
            aria-label="View on GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard