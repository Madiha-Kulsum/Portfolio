import { useState } from "react";
import { Mail, Phone, MapPin, Send, Download, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mnngnkab", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", contact: "", subject: "", message: "" });
      } else {
        toast({
          title: "Failed to send message",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const handleDownloadResume = () => {
    // Create a downloadable resume link
    const link = document.createElement('a');
    link.href = '/Madiha Kulsum_ Resume.pdf'; // You'll need to add your resume file to public folder
    link.download = 'Resume.pdf';
    link.click();
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "madihakulsumshaikh@gmail.com",
      link: "mailto:madihakulsumshaikh@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+91 9850555417",
      link: "tel:+919850555417"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Solapur, Maharashtra, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      title: "GitHub",
      url: "https://github.com/Madiha-Kulsum",
      description: "Check out my code repositories"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/madiha-kulsum-shaikh-837811262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      description: "Connect with me professionally"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      url: "mailto:madihakulsumshaikh@gmail.com",
      description: "Send me a direct email"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology.
            Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium mb-2">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="contact"
                      name="contact"
                      type="tel"
                      value={formData.contact || ""}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell me about your project or just say hello!"
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {social.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{social.title}</h3>
                      <p className="text-sm text-muted-foreground">{social.description}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Resume Download */}
            <Card className="shadow-card bg-gradient-hero">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">Download My Resume</h3>
                <p className="text-muted-foreground mb-4">
                  Get a detailed overview of my experience, skills, and projects.
                </p>
                <Button onClick={handleDownloadResume} className="flex items-center gap-2 mx-auto">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Professional Status */}
        <div className="mt-16 text-center p-8 bg-gradient-card rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Current Status</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-primary mb-2">Employment</h4>
              <p className="text-muted-foreground">Currently employed at MGrid Technologies Pvt Ltd</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Availability</h4>
              <p className="text-muted-foreground">Open to freelance projects and new opportunities</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Response Time</h4>
              <p className="text-muted-foreground">Usually respond within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;