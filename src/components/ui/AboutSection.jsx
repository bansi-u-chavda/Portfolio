import { Briefcase, Code, User, Smartphone } from "lucide-react";


export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate full Stack Web Developer
            </h3>

            <p className="text-muted-foreground">
            I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover group relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(.4,2,.6,1)] hover:shadow-2xl hover:scale-105 hover:rotate-[-2deg] hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10">
              <span className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.15)_0%,transparent_70%)] blur-md" />
              <div className="flex items-start gap-4 relative z-10 group-hover:animate-wiggle">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500">
                  <Code className="h-6 w-6 text-primary group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover group relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(.4,2,.6,1)] hover:shadow-2xl hover:scale-105 hover:rotate-2 hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10">
              <span className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_70%,rgba(236,72,153,0.12)_0%,transparent_70%)] blur-md" />
              <div className="flex items-start gap-4 relative z-10 group-hover:animate-wiggle">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500">
                  <User className="h-6 w-6 text-primary group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover group relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(.4,2,.6,1)] hover:shadow-2xl hover:scale-105 hover:-rotate-3 hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10">
              <span className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.12)_0%,transparent_70%)] blur-md" />
              <div className="flex items-start gap-4 relative z-10 group-hover:animate-wiggle">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500">
                  <Smartphone className="h-6 w-6 text-primary group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Application Development</h4>
                  <p className="text-muted-foreground">
                    Building mobile applications with a focus on
                    performance and usability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};