

const Footer = () => {
  

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <footer className="bg-[#f5f5f5] dark:bg-[#121212] border-t border-gray-300 dark:border-gray-700 mt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-linear-to-r from-[#4FC0E8] to-[#2C6C82] flex items-center justify-center text-white font-bold text-lg shadow-md">
                DS
              </div>
              <span className="font-heading font-bold text-xl text-gray-900 dark:text-white">
                Portfolio
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Computer Science Graduate passionate about creating innovative
              solutions and building impactful applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 dark:text-gray-400 hover:text-[#4FC0E8] dark:hover:text-[#4FC0E8] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-gray-900 dark:text-white">
              Stay Connected
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <button
              onClick={() => scrollToSection("#contact")}
              className="text-sm font-medium text-[#4FC0E8] hover:underline"
            >
              Get in touch →
            </button>
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
