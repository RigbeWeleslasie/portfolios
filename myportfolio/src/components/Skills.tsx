// src/components/Skills.tsx
import { skillsData, Skill } from '@/data/skills';
import * as SiIcons from 'react-icons/si'; // Simple Icons pack
import * as FaIcons from 'react-icons/fa'; // Font Awesome pack

// A helper function to dynamically render the correct icon
const renderIcon = (iconName: string) => {
  // Try to get the icon from the SiIcons or FaIcons libraries
  const IconComponent = (SiIcons as any)[iconName] || (FaIcons as any)[iconName];

  if (IconComponent) {
    return <IconComponent />;
  }

  // Fallback for icons not found
  return <div className="w-8 h-8 bg-gray-600 rounded-full"></div>;
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">My Skills</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          I've worked with a range of technologies in the web development and mobile development space. Here are the ones I'm most proficient in:
        </p>

        <div className="space-y-12">
          {/* --- Frontend Skills --- */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center text-blue-400">Frontend Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skillsData.frontend.map((skill: Skill, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center space-y-3 transform transition-all duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-2xl hover:shadow-blue-500/50 border border-gray-700"
                >
                  <div className="text-4xl text-cyan-400">
                    {renderIcon(skill.icon)}
                  </div>
                  <p className="font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* --- Backend Skills --- */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center text-green-400">Backend Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skillsData.backend.map((skill: Skill, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center space-y-3 transform transition-all duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-2xl hover:shadow-green-500/50 border border-gray-700"
                >
                  <div className="text-4xl text-green-400">
                    {renderIcon(skill.icon)}
                  </div>
                  <p className="font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* --- Mobile Skills --- */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center text-purple-400">Mobile Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skillsData.mobile.map((skill: Skill, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center space-y-3 transform transition-all duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-2xl hover:shadow-purple-500/50 border border-gray-700"
                >
                  <div className="text-4xl text-purple-400">
                    {renderIcon(skill.icon)}
                  </div>
                  <p className="font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;