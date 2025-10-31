import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Failed to send");

    toast.success("Message Sent!", {
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    toast.error("Failed to send message", {
      description: "Something went wrong. Please try again later.",
    });
  }
};



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};

  return (
    <section
      id="contact"
      className="py-16 bg-[#f5f5f5] dark:bg-[#121212] transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Feel free to reach out
            if you'd like to connect!
          </p>
        </div>

        {/* Content Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Contact Form */}
          <div className="rounded-2xl bg-white dark:bg-[#242424] border border-gray-200 dark:border-gray-700 p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-white dark:bg-[#2f2f2f] border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full bg-white dark:bg-[#2f2f2f] border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  className="w-full min-h-[120px] bg-white dark:bg-[#2f2f2f] border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                />
              </div>

              <Button
                type="submit"
                className="w-full gap-2 bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            {/* Info Card */}
            <div className="rounded-2xl bg-white dark:bg-[#242424] border border-gray-200 dark:border-gray-700 p-6 shadow-md transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Feel free to reach out through any of these platforms.
              </p>

              <div className="space-y-3">
                {/* Email */}
                <a
                  href="mailto:dianefuentes2002@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2f2f2f] border border-gray-200 dark:border-gray-700 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                      Email
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      dianefuentes2002@gmail.com
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/diane-sophia-fuentes-2913b6232/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2f2f2f] border border-gray-200 dark:border-gray-700 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                      LinkedIn
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      @diane-sophia-fuentes
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/dianesophia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2f2f2f] border border-gray-200 dark:border-gray-700 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center">
                    <Github className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                      GitHub
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      @dianesophia
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="rounded-2xl bg-white dark:bg-[#242424] border border-gray-200 dark:border-gray-700 p-6 shadow-md transition-all duration-300">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Available For
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                  Full-time opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                  Freelance projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                  Open-source collaboration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
