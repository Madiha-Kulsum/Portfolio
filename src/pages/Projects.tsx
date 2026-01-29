import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      category: "Professional Projects (MGrid Technologies)",
      items: [
        {
          title: "SJS Web Application",
          description: "Built a responsive and user-friendly frontend interface for the SJS web application using React and Vite. Implemented reusable components, form validation, dynamic routing, and optimized UI performance.",
          technologies: ["React.js", "Vite", "JavaScript", "Tailwind CSS", "REST API Integration"],
          type: "Web Application",
          role: "Frontend Developer",
          url: "https://demo.secondjobsearch.com/"
        },
        {
          title: "Receiptor Mobile App",
          description: "Developed a comprehensive mobile app for managing receipts, documents, and medicines. Implemented family member management and voice notifications for medicine reminders.",
          technologies: ["React Native", "Voice API", "Push Notifications"],
          type: "Mobile Application",
          role: "Mobile App Developer",
          url: "https://play.google.com/store/apps/details?id=com.receiptor&hl=en_IN"
        },
        {
          title: "CarFixIt Admin Panel",
          description: "Complete admin panel for car servicing platform built with React.js. Managed the entire admin dashboard with features for service management, user management, and analytics.",
          technologies: ["React.js", "Admin Dashboard", "API Integration", "State Management"],
          type: "Web Application",
          role: "React.js Developer",
          url: "https://carfixitadminpanel.netlify.app/"
        },
        {
          title: "CarFixIt E-commerce Website",
          description: "Built a full-featured e-commerce website for CarFixIt using React Vite. Implemented shopping cart, product catalog, and payment integration.",
          technologies: ["React.js", "Vite", "E-commerce"],
          type: "Web Application",
          role: "Frontend Developer",
          url: "https://carfixitweb.netlify.app/"
        },
        {
          title: "Solvix Website",
          description: "Created a professional website using WordPress with custom themes and functionality for business requirements.",
          technologies: ["WordPress", "Custom Themes", "PHP", "MySQL"],
          type: "Website",
          role: "WordPress Developer",
          url: "https://solvixtechsolutions.com/new/"
        },
      ]
    },
    {
      category: "Academic Projects",
      items: [
        {
          title: "Online Specs Shop",
          description: "Developed an online platform for ordering and delivering eyeglasses. Built with PHP for backend functionality and MySQL for database management.",
          technologies: ["PHP", "MySQL", "E-commerce", "Order Management"],
          type: "Web Application",
          role: "Full Stack Developer"
        },
        {
          title: "Social Media Addiction Analysis",
          description: "Created a mobile application that analyzes user's social media usage patterns and calculates health effects. Displays comprehensive analytics in graphical format with PHP endpoints for data processing.",
          technologies: ["React Native", "PHP", "Data Analytics", "Charts", "Health Metrics"],
          type: "Mobile Application",
          role: "Full Stack Mobile Developer"
        }
      ]
    },
    {
      category: "Internship Projects (PHP CodeIgniter)",
      items: [
        {
          title: "Political Member Landing Page",
          description: "Designed and developed a professional landing page for a political member with responsive design and content management features.",
          technologies: ["PHP", "CodeIgniter", "Responsive Design"],
          type: "Website",
          role: "Web Developer"
        },
        {
          title: "HR Management System",
          description: "Built a comprehensive Human Resource Management system for a company including employee management, payroll, and attendance tracking.",
          technologies: ["PHP", "CodeIgniter", "MySQL", "HRM"],
          type: "Web Application",
          role: "Web Developer"
        },
        {
          title: "Multiple Business Projects",
          description: "Worked on various business-oriented projects during the 6-month internship, gaining experience in different domains and client requirements.",
          technologies: ["PHP", "CodeIgniter", "MySQL", "Business Logic"],
          type: "Various",
          role: "PHP Developer"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects I've worked on during my professional career, academic studies, and internship.
            Each project represents different aspects of my development journey.
          </p>
        </div>

        {/* Projects by Category */}
        {projects.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">
              {category.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {category.items.map((project, index) => (
                <Card key={index} className="shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge variant="secondary" className="ml-2">
                        {project.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-primary font-medium">{project.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary/10 text-primary rounded text-sm border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="ghost" size="sm" className="p-0 h-auto">
                            <ExternalLink size={16} className="mr-2" />
                            Visit Project
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-hero rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
          <p className="text-muted-foreground mb-6">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;