"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { DATA } from "@/lib/data"

gsap.registerPlugin(ScrollTrigger)

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      gsap.fromTo(
        ".animate-card",
        {
          y: 50,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".animate-card",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Animate skill badges
      gsap.fromTo(
        ".skill-badge",
        {
          scale: 0,
          rotation: -180,
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "back.out(2)",
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".skills-container",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const cardHoverVariants = {
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-white dark:bg-black relative transition-colors duration-300">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
      <motion.div
        className="relative max-w-4xl mx-auto p-8 space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div className="text-center space-y-6" variants={itemVariants}>
          <motion.div
            className="flex justify-center items-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="h-[300px] w-[300px] border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff] pixelated overflow-hidden">
              <img src={DATA.avatarUrl} alt={DATA.name} className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <div className="space-y-4">
            <motion.h1
              className="text-5xl font-bold text-black dark:text-white pixelated"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: 0.3,
              }}
            >
              Hi, I'm {DATA.name}
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-mono"
              variants={itemVariants}
            >
              {DATA.description}
            </motion.p>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div variants={cardHoverVariants} whileHover="hover" className="animate-card">
          <Card className="border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#fff] bg-white dark:bg-black transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-black dark:text-white pixelated">About</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-mono">
                {DATA.summary}
              </p>
              <div className="flex flex-wrap gap-3">
                {DATA.skills.slice(0, 5).map((tech, index) => (
                  <motion.div
                    key={tech}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Badge className="bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] font-mono hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] dark:hover:shadow-[1px_1px_0px_0px_#fff] transition-all">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Experience Section */}
        <motion.div variants={cardHoverVariants} whileHover="hover" className="animate-card">
          <Card className="border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#fff] bg-white dark:bg-black transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-black dark:text-white pixelated">Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {DATA.work.map((job, index) => (
                <motion.div
                  key={index}
                  className="space-y-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-black dark:text-white font-mono">{job.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 font-mono">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 font-mono">
                      <Calendar className="w-4 h-4" />
                      {job.start} - {job.end}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-mono leading-relaxed">
                    {job.description}
                  </p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={cardHoverVariants} whileHover="hover" className="animate-card">
          <Card className="border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#fff] bg-white dark:bg-black transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-black dark:text-white pixelated">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {DATA.education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="space-y-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`w-12 h-12 ${index === 0 ? 'bg-white dark:bg-black' : 'bg-green-600'} border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] rounded-full flex items-center justify-center`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className={`text-xs font-bold ${index === 0 ? 'text-black dark:text-white' : 'text-white'} font-mono`}>
                          {edu.school.split(' ').map(word => word[0]).join('').slice(0, 3)}
                        </span>
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-lg text-black dark:text-white font-mono">
                          {edu.school}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 font-mono">{edu.degree}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 font-mono">
                      <Calendar className="w-4 h-4" />
                      {edu.start} - {edu.end}
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={cardHoverVariants} whileHover="hover" className="animate-card">
          <Card className="border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#fff] bg-white dark:bg-black transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-black dark:text-white pixelated">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 skills-container">
                {DATA.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge className="bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] font-mono hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] dark:hover:shadow-[1px_1px_0px_0px_#fff] transition-all skill-badge">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Projects Section */}
        <motion.div variants={cardHoverVariants} whileHover="hover" className="animate-card">
          <Card className="border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#fff] bg-white dark:bg-black transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-black dark:text-white pixelated">Projects</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              {DATA.projects.slice(0, 6).map((project, index) => (
                <motion.div
                  key={index}
                  className="space-y-4 p-6 border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff] bg-white dark:bg-black"
                  whileHover={{
                    scale: 1.03,
                    rotate: index % 2 === 0 ? 1 : -1,
                    transition: { type: "spring", stiffness: 300, damping: 10 },
                  }}
                >
                  <h3 className="font-bold text-lg text-black dark:text-white font-mono">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm font-mono leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.links.map((link, linkIndex) => (
                      <motion.div key={linkIndex} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          className={linkIndex === 0 ? "bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] dark:hover:shadow-[1px_1px_0px_0px_#fff] transition-all font-mono" : "bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#fff] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] dark:hover:shadow-[1px_1px_0px_0px_#fff] transition-all font-mono"}
                          variant={linkIndex === 0 ? "default" : "outline"}
                          onClick={() => window.open(link.href, '_blank')}
                        >
                          {link.type === "Github" ? <Github className="w-4 h-4 mr-2" /> : <ExternalLink className="w-4 h-4 mr-2" />}
                          {link.type}
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Section */}
        <motion.div variants={cardHoverVariants} whileHover="hover" className="animate-card">
          <Card className="border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#fff] bg-white dark:bg-black transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-black dark:text-white pixelated">Get In Touch</CardTitle>
              <CardDescription className="font-mono text-gray-600 dark:text-gray-400">
                Let's connect and build something amazing together!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 justify-center">
                {Object.entries(DATA.contact.social)
                  .filter(([_, social]) => social.navbar)
                  .map(([key, social]) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.div
                        key={key}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Button
                          className={key === 'GitHub' ? "bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#000] dark:hover:shadow-[3px_3px_0px_0px_#fff] transition-all font-mono" : "bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#000] dark:hover:shadow-[3px_3px_0px_0px_#fff] transition-all font-mono"}
                          variant={key === 'GitHub' ? "default" : "outline"}
                          onClick={() => {
                            if (key === 'email') {
                              window.location.href = `mailto:${DATA.contact.email}`;
                            } else {
                              window.open(social.url, '_blank');
                            }
                          }}
                        >
                          <IconComponent className="w-4 h-4 mr-2" />
                          {social.name}
                        </Button>
                      </motion.div>
                    );
                  })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center text-gray-600 dark:text-gray-400 text-sm font-mono pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p>© 2025 {DATA.name}. Made with code and coffee</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
