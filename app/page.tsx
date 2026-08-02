"use client"

import Image from "next/image"
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Coffee,
  ExternalLink,
  Github,
  GraduationCap,
  Home,
  Linkedin,
  Mail,
  MapPin,
  Music2,
  ShoppingBag,
  Sparkles,
  SquareCheckBig,
  Terminal,
} from "lucide-react"
import { motion } from "framer-motion"
import { DATA } from "@/lib/data"
import { ThemeToggle } from "@/components/theme-toggle"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

const projectIcons = [Sparkles, ShoppingBag, Music2, SquareCheckBig, Terminal, Coffee]

function SectionHeading({ id, eyebrow, title, description }: { id: string; eyebrow: string; title: string; description?: string }) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <div className="section-title-row">
        <h2 id={id}>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  )
}

function ProjectPreview({ title, index }: { title: string; index: number }) {
  const Icon = projectIcons[index % projectIcons.length]

  return (
    <div className={`project-preview project-preview-${index + 1}`} aria-hidden="true">
      <div className="preview-window">
        <div className="preview-toolbar">
          <span />
          <span />
          <span />
          <small>adesh.build/{title.toLowerCase().replaceAll(" ", "-")}</small>
        </div>
        <div className="preview-content">
          <div className="preview-icon"><Icon size={24} /></div>
          <div>
            <span className="preview-kicker">Selected project</span>
            <strong>{title}</strong>
          </div>
        </div>
        <div className="preview-lines"><i /><i /><i /></div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <div className="site-shell">
      <div className="background-effect" aria-hidden="true">
        <StarsBackground
          className="background-stars"
          starDensity={0.00012}
          twinkleProbability={0.62}
          minTwinkleSpeed={0.7}
          maxTwinkleSpeed={1.4}
        />
        <ShootingStars
          className="background-shooting"
          minSpeed={2}
          maxSpeed={5}
          minDelay={2600}
          maxDelay={5600}
          starColor="#ffffff"
          trailColor="#ffffff"
          starWidth={68}
          starHeight={1.5}
        />
      </div>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />

      <nav className="floating-nav" aria-label="Primary navigation">
        <a className="nav-home" href="#top" aria-label="Back to top"><Home size={17} /></a>
        <div className="nav-right">
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-tools">
            <span className="nav-terminal" aria-hidden="true"><Terminal size={16} /></span>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main id="main" className="page-wrap">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="availability"><span /> Full-stack developer · Mumbai</div>
            <h1 id="hero-title">hey, Adesh here<span>.</span></h1>
            <p className="hero-lead">
              I design and build fast, thoughtful web products with <strong>Next.js</strong>, <strong>React</strong>,
              Node.js, and AI.
            </p>
            <p className="hero-note">
              I&apos;ve led full-stack delivery for a scalable LMS, built AI chatbot experiences, and collaborated with
              teams to turn ideas into reliable products.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View my work <ArrowDownRight size={17} /></a>
              <a className="button button-secondary" href={`mailto:${DATA.contact.email}`}>Let&apos;s talk <Mail size={16} /></a>
            </div>

            <div className="social-row" aria-label="Social links">
              <a href={DATA.contact.social.GitHub.url} target="_blank" rel="noreferrer" aria-label="Adesh Rai on GitHub"><Github size={18} /></a>
              <a href={DATA.contact.social.LinkedIn.url} target="_blank" rel="noreferrer" aria-label="Adesh Rai on LinkedIn"><Linkedin size={18} /></a>
              <a href={DATA.contact.social.X.url} target="_blank" rel="noreferrer" aria-label="Adesh Rai on X">X</a>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          >
            <div className="portrait-ring">
              <Image src="/adesh.jpeg" alt="Portrait of Adesh Rai" width={260} height={260} priority />
            </div>
            <div className="status-card">
              <span className="status-icon"><Code2 size={18} /></span>
              <div><small>Currently focused on</small><strong>Useful products &amp; clean UX</strong></div>
            </div>
          </motion.div>
        </section>

        <section className="proof-strip" aria-label="Portfolio summary">
          <div><strong>{DATA.work.length}</strong><span>professional roles</span></div>
          <div><strong>{DATA.projects.length}</strong><span>selected projects</span></div>
          <div><strong>{DATA.skills.length}</strong><span>core technologies</span></div>
        </section>

        <section id="stack" className="content-section" aria-labelledby="stack-title">
          <SectionHeading id="stack-title" eyebrow="Technologies" title="Tech Stack" description="The tools I use to ship production-ready experiences." />
          <div className="skill-grid">
            {DATA.skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: Math.min(index * 0.035, 0.3) }}
              >
                {index % 3 === 0 ? <Code2 size={15} /> : index % 3 === 1 ? <Terminal size={15} /> : <Sparkles size={15} />}
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section" aria-labelledby="projects-title">
          <SectionHeading id="projects-title" eyebrow="Portfolio" title="Featured Projects" description="A selection of products, experiments, and client work." />
          <div className="project-grid">
            {DATA.projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}
              >
                <ProjectPreview title={project.title} index={index} />
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.technologies.slice(0, 4).map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a key={`${project.title}-${link.type}`} href={link.href} target="_blank" rel="noreferrer">
                        {link.type === "Github" ? <Github size={15} /> : <ExternalLink size={15} />}
                        {link.type === "Github" ? "Source" : "Website"}
                        <ArrowUpRight size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section" aria-labelledby="experience-title">
          <SectionHeading id="experience-title" eyebrow="Career" title="Work Experience" description="Roles where I learned, collaborated, and shipped." />
          <div className="timeline-list">
            {DATA.work.map((job) => (
              <a className="timeline-card" href={job.href} target="_blank" rel="noreferrer" key={`${job.company}-${job.title}`}>
                <span className="timeline-icon"><BriefcaseBusiness size={19} /></span>
                <div className="timeline-main">
                  <div className="timeline-heading"><h3>{job.company}</h3><time>{job.start} — {job.end}</time></div>
                  <strong>{job.title}</strong>
                  <p>{job.description}</p>
                </div>
                <ArrowUpRight className="timeline-arrow" size={18} />
              </a>
            ))}
          </div>
        </section>

        <section className="content-section" aria-labelledby="education-title">
          <SectionHeading id="education-title" eyebrow="Academic" title="Education" />
          <div className="education-grid">
            {DATA.education.map((education) => (
              <article className="education-card" key={education.school}>
                <span><GraduationCap size={19} /></span>
                <div><h3>{education.school}</h3><p>{education.degree}</p><time>{education.start} — {education.end}</time></div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div>
            <p className="section-eyebrow">Get in touch</p>
            <h2 id="contact-title">Have an idea worth building?</h2>
            <p>I&apos;d love to hear about your product, website, or collaboration.</p>
          </div>
          <a className="contact-link" href={`mailto:${DATA.contact.email}`}>
            <span><Mail size={20} /></span>
            <div><small>Email me</small><strong>{DATA.contact.email}</strong></div>
            <ArrowUpRight size={19} />
          </a>
        </section>
      </main>

      <footer className="footer">
        <div><strong>{DATA.name}</strong><span><MapPin size={14} /> {DATA.location}, India</span></div>
        <p>© {new Date().getFullYear()} {DATA.name}. Designed with curiosity, built with code.</p>
      </footer>
    </div>
  )
}
