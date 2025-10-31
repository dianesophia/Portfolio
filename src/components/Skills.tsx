import { Code2, Database, Globe, Server, GitBranch, Brain } from "lucide-react";
import { Badge } from "./ui/badge";

const Skills = () => {
const skillCategories = [
  {
    category: "Frontend & Mobile Development",
    icon: Globe,
    skills: [
      "HTML/CSS",
      "JavaScript",
      "React.js",
      "React Native",
      "Tailwind CSS",
      "TypeScript",
      "Next.js",
      "Responsive Design"
    ]
  },
  {
    category: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication", "Django"]
  },
  {
    category: "Database",
    icon: Database,
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Supabase"]
  },
  {
    category: "Programming Languages",
    icon: Code2,
    skills: ["JavaScript", "Python", "Java", "C#", "C"]
  },
  {
    category: "Machine Learning & AI",
    icon: Brain,
     skills: ["YOLOv8", "OpenCV", "TensorFlow (basic)", "scikit-learn (basic)", "pyttsx3", "LabelImg"],
  },
  {
    category: "Tools & Others",
    icon: GitBranch,
    skills: ["Git/GitHub", "VS Code", "Figma", "Raspberry Pi 4", "Agile/Scrum"],
  }
];


  return (
    <section 
      id="skills" 
      className="py-16 bg-[#f5f5f5] dark:bg-[#121212] transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I've worked with during my academic journey and personal projects.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="p-6 bg-white dark:bg-[#242424] rounded-2xl shadow-md hover:shadow-lg 
                         border border-gray-200 dark:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <category.icon className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {category.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-[#2f2f2f] 
                               text-gray-700 dark:text-gray-300 border-none 
                               hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
