import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import InspectorBill from "../assets/inspectorbill.png";
import Raspberry from "../assets/rasp.png";
import Fruitveg from "../assets/fruitveg.png";
import Cooktrition from "../assets/cooktrition.png";
import GoldenHaven from "../assets/goldenhaven.png";

const Projects = () => {
  const projects = [
    {
      title: "InspectorBill",
      description: "Automatically recognizes Philippine currency through image classification. Utilizes a custom-trained ML model powered by OpenCV. Provides an API layer using Flask for model deployment. Performs real-time predictions using camera input.",
      image: InspectorBill, 
      tags: ['Python', 'Machine Learning', 'YOLOv8', 'OpenCV'],
      github: "https://github.com/dianesophia/Thesis---Inspector-Bill",
      live: " "
    },
    {
      title: "Raspberry Pi Currency Detector'",
      description: "YOLOv8-powered Philippine currency recognition system with Raspberry Pi 4 and audio assistance.",
      image: Raspberry,
      tags: ["Raspberry Pi", "React", "Firebase", "Tailwind CSS", "Python", "Machine Learning", "YOLOv8", "OpenCV"],
      github: "https://github.com/dianesophia/InspectorBill-Live",
      live: "https://inspector-bill-live.vercel.app/"
    },
    {
      title: "Cooktrition Facts",
      description: "ML-based recipe recommender that provides nutrition facts tailored to dietary needs.",
      image: Cooktrition,
      tags: ["React Native", "Python", "Machine Learning", "API", "Node.js", "Flask"],
      github: "https://github.com/dianesophia/React_Native_Cooktrition_Facts",
      live: " "
    },
    {
      title: "Golden Haven Community Portal",
      description: "Enables residents to receive local announcements and respond to polls. Tracks billing records and payment histories. Allows users to reserve community facilities seamlessly. Implements role-based access for homeowners and administrators. Features a chat system and discussion forum for neighborhood engagement.",
      image: GoldenHaven,
      tags: ["ASP.NET", "C#", "MySQL", "Razor"],
      github: "https://github.com/dianesophia/Homeowner-App",
      live: " "
    },
    {
      title: "Fruit and Vegetables Image Recognition",
      description: "Streamlit app using TensorFlow AI for real-time fruit and vegetable classification.",
      image: Fruitveg,
      tags: ["Python", "Streamlit", "Machine Learning", "TensorFlow", "OpenCV"],
      github: "https://github.com/dianesophia/Fruit-Veg-Recognition-Website",
      live: "https://dsophiafruitvegrecognition.streamlit.app/"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-[#f5f5f5] dark:bg-[#121212] transition-colors duration-500">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Projects I've worked on during my learning journey.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-white dark:bg-[#242424] 
                         border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl 
                         transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="px-3 py-1 text-xs bg-gray-100 dark:bg-[#2f2f2f] 
                                 text-gray-700 dark:text-gray-300 border-none 
                                 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2 border-gray-300 dark:border-gray-600
                               text-gray-800 dark:text-gray-200 hover:bg-blue-50 
                               dark:hover:bg-blue-900/20 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 gap-2 bg-blue-500 hover:bg-blue-600 
                               text-white dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
