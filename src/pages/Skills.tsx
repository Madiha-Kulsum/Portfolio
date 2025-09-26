import { Code, Database, Globe, Smartphone, Server, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "React Native",experience: "1 year professional experience" },
        { name: "JavaScript", experience: "Core language for React Native development" },
        { name: "TypeScript", experience: "Type-safe development" },
        { name: "Mobile UI/UX", experience: "Responsive mobile interfaces" }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React.js", experience: "1 year professional experience" },
        { name: "Vite",experience: "Modern build tool for React projects" },
        { name: "HTML5/CSS3", experience: "Strong foundation in web technologies" },
        { name: "Responsive Design", experience: "Mobile-first approach" }
      ]
    },
    {
      title: "Development Tools",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "Git & GitHub",experience: "Version control and collaboration" },
        { name: "VS Code",  experience: "Primary development environment" },
        { name: "Postman", experience: "API testing and documentation" },
        { name: "Chrome DevTools",  experience: "Debugging and performance optimization" }
      ]
    },
    {
      title: "Programming Concepts",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Object-Oriented Programming", experience: "Strong OOP fundamentals" },
        { name: "State Management",  experience: "React state and Context API" },
        { name: "Component Architecture", experience: "Reusable component design" },
        { name: "Problem Solving", experience: "Analytical thinking and debugging" }
      ]
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "CGPA 9.0 in MSc Computer Science",
      icon: "🎓"
    },
    {
      title: "Professional Experience", 
      description: "1 year at MGrid Technologies",
      icon: "💼"
    },
    {
      title: "Internship Completion",
      description: "6 months PHP CodeIgniter internship",
      icon: "🚀"
    },
    {
      title: "Project Diversity",
      description: "Mobile apps, web apps, and WordPress sites",
      icon: "🔧"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise gained through professional experience, 
            academic projects, and continuous learning.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-primary transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h3 className="font-semibold mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      {/* <Progress value={skill.level} className="h-2 mb-1" /> */}
                      <p className="text-xs text-muted-foreground">{skill.experience}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Summary */}
        <div className="mt-16 p-8 bg-gradient-hero rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Professional Summary</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-semibold text-primary mb-2">Current Role</h4>
              <p className="text-muted-foreground">React Native & React.js Developer at MGrid Technologies Pvt Ltd, Hyderabad</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Education</h4>
              <p className="text-muted-foreground">MSc Computer Science, CGPA 9.0, Sangameshwar College, Solapur</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Experience</h4>
              <p className="text-muted-foreground">1 year professional + 6 months internship in web and mobile development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;