import { Button } from "./ui/button";
import { Download, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.png";
import { useTheme } from "../contexts/ThemeContext";


const Hero = () => {

  
const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};


   const { theme } = useTheme();

  const backgroundStyle =
    theme === "dark"
    ? // Dark mode: dark blue fading into black
      "linear-gradient(to bottom right, hsl(220 60% 20%), hsl(220 60% 10%), hsl(0 0% 0%))"
    : // Light mode: soft blue to light gray
      "linear-gradient(to bottom right, hsl(var(--primary) / 0.2), hsl(var(--primary) / 0.1), hsl(0 0% 96%))";

  return (
    <section id="home" className="relative pt-16 bg-[#f5f5f5] dark:bg-[#121212]">
      {/* Cover Photo - Facebook style */}

     {/*  <div className="relative h-[400px] bg-gradient-to-br from-primary/20 via-primary/10 to-background overflow-hidden"></div>*/}
     <div 
  className="relative h-[400px] overflow-hidden"
  style={{ background: backgroundStyle }}
>

        {/* Scattered Floating Laptops with IDE displays */}
        <div className="absolute inset-0 opacity-25">
          {/* Laptop 1 - Top Left */}
          <div className="absolute top-12 left-16 animate-float" style={{ animationDelay: '0s' }}>
            <div className="relative scale-50">
              <div className="w-32 h-20 bg-card dark:bg-[#1e1e1e] rounded-t border border-primary/30 p-1 overflow-hidden">
                <div className="space-y-0.5 text-[0.3rem] font-mono">
                  <div className="flex gap-0.5">
                    <span className="text-purple-600 dark:text-purple-400">const</span>
                    <span className="text-blue-600 dark:text-blue-300">app</span>
                    <span className="text-foreground">=</span>
                  </div>
                  <div className="flex gap-0.5 pl-1">
                    <span className="text-yellow-600 dark:text-yellow-300">function</span>
                    <span className="text-green-600 dark:text-green-300">()</span>
                  </div>
                  <div className="flex gap-0.5 pl-2">
                    <span className="text-purple-600 dark:text-purple-400">return</span>
                    <span className="text-blue-600 dark:text-blue-300">data</span>
                  </div>
                </div>
              </div>
              <div className="w-36 h-1.5 bg-linear-to-b from-primary/30 to-primary/20 rounded-b border border-t-0 border-primary/30 -mt-0.5"></div>
            </div>
          </div>
          
          {/* Laptop 2 - Top Right */}
          <div className="absolute top-20 right-24 animate-float" style={{ animationDelay: '0.8s' }}>
            <div className="relative scale-50">
              <div className="w-32 h-20 bg-card dark:bg-[#1e1e1e] rounded-t border border-primary/30 p-1 overflow-hidden">
                <div className="space-y-0.5 text-[0.3rem] font-mono">
                  <div className="flex gap-0.5">
                    <span className="text-blue-600 dark:text-blue-400">import</span>
                    <span className="text-orange-600 dark:text-orange-300">React</span>
                  </div>
                  <div className="flex gap-0.5">
                    <span className="text-purple-600 dark:text-purple-400">export</span>
                    <span className="text-yellow-600 dark:text-yellow-300">default</span>
                  </div>
                  <div className="flex gap-0.5 pl-1">
                    <span className="text-green-600 dark:text-green-300">Component</span>
                  </div>
                </div>
              </div>
              <div className="w-36 h-1.5 bg-linear-to-b from-primary/30 to-primary/20 rounded-b border border-t-0 border-primary/30 -mt-0.5"></div>
            </div>
          </div>
          
          {/* Laptop 3 - Center */}
          <div className="absolute top-32 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '0.4s' }}>
            <div className="relative scale-50">
              <div className="w-32 h-20 bg-card dark:bg-[#1e1e1e] rounded-t border border-primary/30 p-1 overflow-hidden">
                <div className="space-y-0.5 text-[0.3rem] font-mono">
                  <div className="flex gap-0.5">
                    <span className="text-pink-600 dark:text-pink-400">class</span>
                    <span className="text-yellow-600 dark:text-yellow-300">Main</span>
                  </div>
                  <div className="flex gap-0.5 pl-1">
                    <span className="text-blue-600 dark:text-blue-400">public</span>
                    <span className="text-purple-600 dark:text-purple-300">void</span>
                  </div>
                  <div className="flex gap-0.5 pl-2">
                    <span className="text-green-600 dark:text-green-300">init()</span>
                  </div>
                </div>
              </div>
              <div className="w-36 h-1.5 bg-linear-to-b from-primary/30 to-primary/20 rounded-b border border-t-0 border-primary/30 -mt-0.5"></div>
            </div>
          </div>
          
          {/* Laptop 4 - Bottom Left */}
          <div className="absolute bottom-24 left-32 animate-float" style={{ animationDelay: '1.2s' }}>
            <div className="relative scale-50">
              <div className="w-32 h-20 bg-card dark:bg-[#1e1e1e] rounded-t border border-primary/30 p-1 overflow-hidden">
                <div className="space-y-0.5 text-[0.3rem] font-mono">
                  <div className="flex gap-0.5">
                    <span className="text-orange-600 dark:text-orange-400">def</span>
                    <span className="text-blue-600 dark:text-blue-300">calculate</span>
                  </div>
                  <div className="flex gap-0.5 pl-1">
                    <span className="text-purple-600 dark:text-purple-400">if</span>
                    <span className="text-yellow-600 dark:text-yellow-300">value</span>
                  </div>
                  <div className="flex gap-0.5 pl-2">
                    <span className="text-pink-600 dark:text-pink-300">print()</span>
                  </div>
                </div>
              </div>
              <div className="w-36 h-1.5 bg-linear-to-b from-primary/30 to-primary/20 rounded-b border border-t-0 border-primary/30 -mt-0.5"></div>
            </div>
          </div>
          
          {/* Laptop 5 - Bottom Right */}
          <div className="absolute bottom-16 right-16 animate-float" style={{ animationDelay: '0.6s' }}>
            <div className="relative scale-50">
              <div className="w-32 h-20 bg-card dark:bg-[#1e1e1e] rounded-t border border-primary/30 p-1 overflow-hidden">
                <div className="space-y-0.5 text-[0.3rem] font-mono">
                  <div className="flex gap-0.5">
                    <span className="text-cyan-600 dark:text-cyan-400">async</span>
                    <span className="text-yellow-600 dark:text-yellow-300">getData</span>
                  </div>
                  <div className="flex gap-0.5 pl-1">
                    <span className="text-purple-600 dark:text-purple-400">await</span>
                    <span className="text-green-600 dark:text-green-300">fetch</span>
                  </div>
                  <div className="flex gap-0.5 pl-2">
                    <span className="text-blue-600 dark:text-blue-300">response</span>
                  </div>
                </div>
              </div>
              <div className="w-36 h-1.5 bg-linear-to-b from-primary/30 to-primary/20 rounded-b border border-t-0 border-primary/30 -mt-0.5"></div>
            </div>
          </div>
          
          {/* Laptop 6 - Middle Right */}
          <div className="absolute top-40 right-40 animate-float" style={{ animationDelay: '1s' }}>
            <div className="relative scale-50">
              <div className="w-32 h-20 bg-card dark:bg-[#1e1e1e] rounded-t border border-primary/30 p-1 overflow-hidden">
                <div className="space-y-0.5 text-[0.3rem] font-mono">
                  <div className="flex gap-0.5">
                    <span className="text-red-600 dark:text-red-400">let</span>
                    <span className="text-blue-600 dark:text-blue-300">result</span>
                    <span className="text-foreground">=</span>
                  </div>
                  <div className="flex gap-0.5 pl-1">
                    <span className="text-green-600 dark:text-green-300">compute</span>
                    <span className="text-yellow-600 dark:text-yellow-300">(data)</span>
                  </div>
                  <div className="flex gap-0.5 pl-2">
                    <span className="text-purple-600 dark:text-purple-300">return</span>
                  </div>
                </div>
              </div>
              <div className="w-36 h-1.5 bg-linear-to-b from-primary/30 to-primary/20 rounded-b border border-t-0 border-primary/30 -mt-0.5"></div>
            </div>
          </div>
          
          {/* Laptop 7 - Middle Left */}
          <div className="absolute top-48 left-24 animate-float" style={{ animationDelay: '1.4s' }}>
            <div className="relative scale-50">
              <div className="w-32 h-20 bg-card dark:bg-[#1e1e1e] rounded-t border border-primary/30 p-1 overflow-hidden">
                <div className="space-y-0.5 text-[0.3rem] font-mono">
                  <div className="flex gap-0.5">
                    <span className="text-indigo-600 dark:text-indigo-400">const</span>
                    <span className="text-cyan-600 dark:text-cyan-300">query</span>
                    <span className="text-foreground">=</span>
                  </div>
                  <div className="flex gap-0.5 pl-1">
                    <span className="text-orange-600 dark:text-orange-300">SELECT</span>
                    <span className="text-yellow-600 dark:text-yellow-300">*</span>
                  </div>
                  <div className="flex gap-0.5 pl-2">
                    <span className="text-pink-600 dark:text-pink-400">FROM</span>
                    <span className="text-green-600 dark:text-green-300">users</span>
                  </div>
                </div>
              </div>
              <div className="w-36 h-1.5 bg-linear-to-b from-primary/30 to-primary/20 rounded-b border border-t-0 border-primary/30 -mt-0.5"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-background/50"></div>
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-20">
        <div
          className="p-6 max-w-4xl mx-auto rounded-2xl shadow-lg 
                     transition-colors duration-300 
                     bg-white dark:bg-[#242424]"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Profile Picture */}
            <div className="relative -mt-24 shrink-0">
              <div
                className="w-40 h-40 rounded-full border-4 
                           border-white dark:border-[#22272e]
                           bg-white dark:bg-black 
                           overflow-hidden shadow-md"
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 pt-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Diane Sophia Fuentes
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                Computer Science Graduate | Aspiring Software Developer
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl leading-relaxed">
                Passionate about building innovative solutions and eager to
                contribute to cutting-edge technology projects. Ready to bring
                fresh perspectives and dedication to your team.
              </p>

            <div className="flex flex-wrap gap-3">
  {/* View Resume Button */}
  <a
    href="/Resume - Diane Sophia Fuentes.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button className="gap-2">
      <Download className="h-4 w-4" />
      View Resume
    </Button>
  </a>

  {/* Hire Me Button */}

    <Button
     onClick={() => scrollToSection("#contact")}
      variant="secondary"
      className="gap-2 bg-[#f5f5f5] dark:bg-[#121212] dark:text-white"
    >
      <Mail className="h-4 w-4" />
      Hire Me
    </Button>
  
</div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
