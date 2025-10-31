import { GraduationCap, Heart, Target } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 transition-colors duration-300 bg-[#f5f5f5] dark:bg-[#121212]"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main About Content */}
          <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-[#1a1a1a] transition-colors duration-300">
            <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-4">
              I'm a recent Computer Science graduate with a strong foundation in
              software development and a passion for creating impactful digital
              solutions. My academic journey has equipped me with knowledge in
              various programming languages, algorithms, and modern development
              frameworks.
            </p>

            <div className="border-l-4 border-primary pl-4 py-3 my-4 bg-blue-50 dark:bg-blue-950/30 rounded-r">
              <p className="text-base italic text-gray-700 dark:text-gray-300">
                "Technology is best when it brings people together and solves
                real-world problems."
              </p>
            </div>

            <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
              I'm eager to apply my skills in a professional environment where I
              can contribute to meaningful projects while continuing to grow as
              a developer. I believe in clean code, continuous learning, and
              collaborative teamwork.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                
  icon: GraduationCap,
  title: "Education",
  description:
    "B.Sc. in Computer Science, graduated with **Cum Laude** honors, showcasing strong academic performance and hands-on project experience.",


              },
              {
                icon: Heart,
                title: "Passion",
                description:
                  "Driven to learn and innovate using modern technologies—particularly AI and full-stack development—as tools for building practical, real-life applications.",
              },
              {
                icon: Target,
                title: "Goal",
                description:
                  "Seeking opportunities to contribute to innovative projects and grow as a professional developer.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl shadow-md bg-white dark:bg-[#1a1a1a] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
