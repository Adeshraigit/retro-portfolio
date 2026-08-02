"use client"

import Image from "next/image"
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Coffee,
  ExternalLink,
  Github,
  Home,
  Linkedin,
  Mail,
  MapPin,
  MousePointer2,
  Music2,
  ShoppingBag,
  Sparkles,
  SquareCheckBig,
  Terminal,
} from "lucide-react"
import { motion } from "framer-motion"
import { DATA } from "@/lib/data"
import { ThemeToggle } from "@/components/theme-toggle"
import { PageBackground } from "@/components/page-background"
import { BlurFade } from "@/components/ui/blur-fade"
import { GithubContributions } from "@/components/github-contributions"
import { Cta1 } from "@/components/ui/cta1"

const projectIcons = [Sparkles, ShoppingBag, Music2, SquareCheckBig, Terminal, Coffee]

function SectionHeading({ id, eyebrow, title, description }: { id: string; eyebrow: string; title: string; description?: string }) {
  return (
    <BlurFade className="section-heading" inView duration={0.48} offset={10} blur="7px">
      <p className="section-eyebrow">{eyebrow}</p>
      <div className="section-title-row">
        <h2 id={id}>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </BlurFade>
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

function labelInitials(label: string) {
  return label
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export default function Portfolio() {
  return (
    <div className="site-shell">
      <PageBackground />
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
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main id="main" className="page-wrap">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <BlurFade
            className="hero-copy"
            duration={0.7}
            offset={18}
            blur="10px"
          >
            <h1 id="hero-title">hey, Adesh here</h1>
            <p className="hero-tagline"><MousePointer2 className="hero-pointer" size={20} strokeWidth={1.8} aria-hidden="true" /> Full-stack developer · Mumbai</p>
            <div className="hero-story">
              <p className="hero-lead">
                Currently <strong>freelancing</strong> and <strong>collaborating</strong> with new people on exciting projects.
              </p>
              <p className="hero-note">
                I design and build thoughtful web products with <strong>Next.js</strong>, <strong>React</strong>, Node.js,
                and AI.
              </p>
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View my work <ArrowDownRight size={17} /></a>
              <a className="button button-secondary" href={`mailto:${DATA.contact.email}`}>Let&apos;s talk <Mail size={16} /></a>
            </div>

            <div className="social-row" aria-label="Social links">
              <a href={DATA.contact.social.GitHub.url} target="_blank" rel="noreferrer" aria-label="Adesh Rai on GitHub"><Github size={18} /></a>
              <a href={DATA.contact.social.LinkedIn.url} target="_blank" rel="noreferrer" aria-label="Adesh Rai on LinkedIn"><Linkedin size={18} /></a>
              <a href={DATA.contact.social.X.url} target="_blank" rel="noreferrer" aria-label="Adesh Rai on X">X</a>
            </div>
          </BlurFade>

          <BlurFade
            className="hero-visual"
            duration={0.72}
            delay={0.12}
            direction="up"
            offset={14}
            blur="9px"
          >
            <div className="portrait-ring">
              <Image src={DATA.avatarUrl} alt="Portrait of Adesh Rai" width={260} height={260} priority />
            </div>
          </BlurFade>
        </section>

        <GithubContributions />

        <section id="stack" className="content-section" aria-labelledby="stack-title">
          <SectionHeading id="stack-title" eyebrow="Technologies" title="Tech Stack" description="The tools I use to ship production-ready experiences." />
          <div className="skill-grid">
            {DATA.skills.map((skill, index) => (
              <BlurFade
                key={skill}
                className="skill-chip-reveal"
                inView
                delay={Math.min(index * 0.035, 0.3)}
                offset={8}
                blur="5px"
              >
                <span>
                  {index % 3 === 0 ? <Code2 size={15} /> : index % 3 === 1 ? <Terminal size={15} /> : <Sparkles size={15} />}
                  {skill}
                </span>
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section" aria-labelledby="projects-title">
          <SectionHeading id="projects-title" eyebrow="Portfolio" title="Featured Projects" description="A selection of products, experiments, and client work." />
          <div className="project-grid">
            {DATA.projects.map((project, index) => (
              <BlurFade
                key={project.title}
                className="project-reveal"
                inView
                delay={(index % 3) * 0.07}
                duration={0.52}
                offset={20}
                blur="8px"
              >
                <motion.article className="project-card">
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
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section" aria-labelledby="experience-title">
          <SectionHeading id="experience-title" eyebrow="Career" title="Work Experience" description="Roles where I learned, collaborated, and shipped." />
          <div className="career-list">
            {DATA.work.map((job, index) => (
              <BlurFade
                key={`${job.company}-${job.title}`}
                className="career-row-reveal"
                inView
                delay={Math.min(index * 0.06, 0.18)}
                duration={0.46}
                offset={10}
                blur="6px"
              >
                <a
                  className="career-row"
                  href={job.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${job.title} at ${job.company}`}
                >
                  <span className={`career-thumb career-thumb-${index}`} aria-hidden="true">
                    {labelInitials(job.company)}
                  </span>
                  <span className="career-details">
                    <strong>{job.title}</strong>
                    <span>{job.company}</span>
                  </span>
                  <time className="career-period">{job.start} — {job.end}</time>
                </a>
              </BlurFade>
            ))}
          </div>
        </section>

        <section className="content-section" aria-labelledby="education-title">
          <SectionHeading id="education-title" eyebrow="Academic" title="Education" />
          <div className="academic-list">
            {DATA.education.map((education, index) => {
              const content = (
                <>
                  <span className={`academic-thumb academic-thumb-${index}`} aria-hidden="true">
                    {labelInitials(education.school)}
                  </span>
                  <span className="academic-details">
                    <strong>{education.school}</strong>
                    <span>{education.degree}</span>
                  </span>
                  <time className="academic-period">{education.start} — {education.end}</time>
                </>
              )

              return education.href ? (
                <a className="academic-row" href={education.href} target="_blank" rel="noreferrer" key={education.school}>
                  {content}
                </a>
              ) : (
                <article className="academic-row" key={education.school}>
                  {content}
                </article>
              )
            })}
          </div>
        </section>

        <Cta1
          id="contact"
          eyebrow="Get in touch"
          title="Have an idea worth building?"
          description="I&apos;d love to hear about your product, website, or collaboration."
          buttonText="Let&apos;s talk"
          buttonLink={`mailto:${DATA.contact.email}`}
          buttonIcon={<ArrowUpRight size={17} />}
        />
      </main>

      <footer className="footer">
        <div><strong>{DATA.name}</strong><span><MapPin size={14} /> {DATA.location}, India</span></div>
        <p>© {new Date().getFullYear()} {DATA.name}. Designed with curiosity, built with code.</p>
      </footer>
    </div>
  )
}
