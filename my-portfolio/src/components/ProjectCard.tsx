// src/components/ProjectCard.tsx
import Image from 'next/image'
import { Project } from '@/data/Projects'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
      <Image src={project.imageUrl} alt={project.title} width={500} height={300} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Live Demo</a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline">GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard