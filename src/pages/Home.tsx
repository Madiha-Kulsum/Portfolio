import { ArrowDown, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg1.jpg";
import { useState, useEffect } from "react";

const Home = () => {
  const skills = [
    "React Native", "React.js", "HTML", "CSS", "JavaScript",
    "PHP", "CodeIgniter", "WordPress", "MySQL", "Git"
  ];

  const featuredProjects = [
    {
      title: "CarFixIt Admin Panel",
      description: "Complete admin panel for car servicing platform built with React.js",
      tech: ["React.js", "Vite", "Admin Dashboard"]
    },
    {
      title: "Receiptor Mobile App",
      description: "Receipt and medicine management app with voice notifications",
      tech: ["React Native", "Voice API", "Document Management"]
    },
    {
      title: "Social Media Addiction Analysis",
      description: "Mobile app analyzing social media usage patterns and health effects",
      tech: ["React Native", "PHP", "Data Analytics", "Charts"]
    }
  ];

  const roles = ["React Native", "React.js"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }
      else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 3000);
      }
      else if (isDeleting && charIndex > 0) {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }
      else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm a{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {text}
                <span className="ml-1 animate-pulse">|</span>
            </span>
            Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            1 year of experience building mobile and web applications with React Native, React.js, and PHP.
            Currently working at MGrid Technologies Pvt Ltd, Hyderabad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <Link to="/projects">View My Projects</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Madiha-Kulsum" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/madiha-kulsum-shaikh-837811262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:madihakulsumshaikh@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Background</h3>
                <p className="text-muted-foreground mb-4">
                  I completed MSc Computer Science from Sangameshwar College, Solapur with a CGPA of 9.0
                  (graduating May 2025). Currently working as a React Native and React.js developer at
                  MGrid Technologies Pvt Ltd, Hyderabad.
                </p>
                <p className="text-muted-foreground mb-4">
                  With 1 year of professional experience and a 6-month PHP CodeIgniter internship,
                  I've worked on diverse projects from mobile apps to admin panels and e-commerce platforms.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Education & Experience</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>MGrid Technologies Pvt Ltd</strong>
                      <p className="text-sm text-muted-foreground">React Native & React.js Developer (1 year)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>MSc Computer Science</strong>
                      <p className="text-sm text-muted-foreground">Sangameshwar College, Solapur (CGPA: 9.0)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>Code World Infotech Pvt Ltd</strong>
                      <p className="text-sm text-muted-foreground">PHP CodeIgniter Internship (6 months)</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" asChild>
              <Link to="/skills">View All Skills</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-card -mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 mt--22 ">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;