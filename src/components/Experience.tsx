import { Briefcase, Calendar } from "lucide-react";
import { Badge } from "./ui/badge";

const Experience = () => {
  const experiences = [
     {
      title: "Junior Software Engineer",
      company: "Aquarius Systems Ph",
      period: "Present",
      type: "Full Time",
      description:
        " ",
      achievements: [ ],
      tags: [ ],
    },
    {
      title: "Full Stack Software Developer Intern",
      company: "MYT Softdev Solutions Inc.",
      period: "Sept 2024",
      type: "Internship",
      description:
        "Assisted in developing responsive web applications using React and Node.js. Collaborated with senior developers to implement new features and fix bugs.",
      achievements: [
        "Contributed to a client-based project by developing assigned features using PHP (CodeIgniter).",
        "Developed a responsive, corporate-style website using React.js based on Figma designs.",
        "Learned and applied ERD for database design and collaborated closely with the dev team.",
        "Gained hands-on experience across multiple roles — including frontend, backend, QA tester, and project management — enhancing my understanding of the full software development lifecycle."
      ],
      tags: ["React", "JavaScript", "Git", "Node.js", "PHP", "CodeIgniter" , "Figma" , "MySQL" ," Agile" ,"Scrum" ,"Responsive Design","Full Stack" ],
    },
    {
  title: "Affiliations & Volunteering",
  company: "Various Organizations",
  period: "2015 - 2025",
  type: "Leadership & Service",
  description:
    "Actively involved in leadership and volunteer roles across student and community organizations, contributing to outreach, coordination, and organizational initiatives.",
  achievements: [
    "Vice President - External, Computing Society of the Philippines Students (Aug 2024 - May 2025)",
    "Assistant Secretary / Volunteer, Computing Society of the Philippines Students (Aug 2023 - June 2024)",
    "Young Leader, Boys and Girls Brigade of the Philippines (June 2015 - April 2019)",
  ],
  tags: ["Leadership", "Volunteering", "Team Coordination", "Community Service"],
},

    {
  title: "Final Year Thesis: InspectorBill",
  company: "University of Cebu",
  period: "2024 - 2025",
  type: "Thesis Project",
  description:
    "Developed an AI-powered cash denomination recognition system designed to assist visually impaired users. The system integrates real-time image recognition with audio feedback and transaction tracking features.",
  achievements: [
    "Achieved 97% recognition accuracy using YOLOv8 and OpenCV",
    "Integrated audio feedback for accessibility using pyttsx3",
    "Developed a user-friendly dashboard for cash tracking and transaction history",
  ],
  tags: ["Python", "YOLOv8", "OpenCV", "Machine Learning", "Accessibility"],
},

  ];

  return (
    <section
      id="experience"
      className="py-16 bg-[#f5f5f5] dark:bg-[#121212] transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Experience & Projects
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            My journey through internships, academic projects, and contributions to the tech community.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-3xl mx-auto space-y-5">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white dark:bg-[#242424] border border-gray-200 dark:border-gray-700 
                         p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Header: Title + Period */}
              <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2 text-sm">
                    <Briefcase className="h-4 w-4" />
                    {exp.company}
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className="flex items-center gap-1 text-xs bg-gray-100 dark:bg-[#2f2f2f] 
                             text-gray-700 dark:text-gray-300 border-none"
                >
                  <Calendar className="h-3 w-3" />
                  {exp.period}
                </Badge>
              </div>

              {/* Type Tag */}
              <Badge className="mb-3 text-xs bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                {exp.type}
              </Badge>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2 mb-4">
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Key Achievements:
                </p>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="outline"
                    className="text-xs border-gray-300 dark:border-gray-600 
                               text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-[#2f2f2f] 
                               hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                  >
                    {tag}
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

export default Experience;
