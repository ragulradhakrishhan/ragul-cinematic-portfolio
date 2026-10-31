import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Instagram, Mail, Code2, Sparkles, FileSpreadsheet, Palette } from 'lucide-react';
import './style.css';

const skills = [
  ['01','WEB & APP DEVELOPMENT','HTML · CSS · JavaScript',Code2],
  ['02','OFFICE & DOCUMENT WORK','MS Word · Excel · PowerPoint · PDF conversion',FileSpreadsheet],
  ['03','AI-ASSISTED CREATIVE WORK','AI tools · Canva · Picsart · Banner design',Sparkles],
  ['04','DIGITAL & FREELANCE TASKS','Data entry · Fast typing · Content writing · Transcription',Palette],
];
const projects = [
  {n:'01',name:'CAMPUSVERSE',type:'STUDENT EVENT REGISTRATION PORTAL',desc:'A web experience for discovering campus events and managing student registrations.',stack:'HTML / CSS / JavaScript',url:'https://ragulradhakrishnan.github.io/Student-Event-Registration-Portal/'},
  {n:'02',name:'MGR ATTENDANCE',type:'COLLEGE ATTENDANCE MANAGEMENT APP',desc:'An attendance management concept for administrators, staff and students, with period-wise records.',stack:'EXPO / REACT NATIVE',url:'#contact'},
];
function Reveal({children, delay=0}) { return <motion.div initial={{opacity:0,y:36}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.18}} transition={{duration:.75,delay,ease:[.22,1,.36,1]}}>{children}</motion.div> }
function App(){
 return <main>
  <nav className="nav"><a className="brand" href="#top">R<span>.</span></a><div className="navlinks"><a href="#about">ABOUT</a><a href="#skills">SKILLS</a><a href="#work">PROJECTS</a><a href="#contact">CONTACT</a></div><a className="nav-cta" href="mailto:ragulradhakrishnan1@gmail.com">LET'S TALK <ArrowUpRight size={15}/></a></nav>
  <section className="hero" id="top">
   <div className="hero-grid"></div><div className="hero-copy"><p className="eyebrow"><i/> CREATIVE DEVELOPER · DIGITAL BUILDER</p><h1>RAGUL<span className="outline">RAGUL</span></h1><div className="hero-bottom"><p>Building digital experiences<br/>with curiosity and creativity.</p><a href="#work" className="circle-link">EXPLORE<br/>WORK <ArrowUpRight size={18}/></a></div></div>
   <div className="hero-person"><img src="/images/ragul-walking.png" alt="Ragul in a black suit walking through a cinematic red-lit scene"/></div>
   <div className="hero-index">PORTFOLIO / 2026</div><div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div>
  </section>
  <section className="intro section" id="about"><Reveal><p className="eyebrow red">01 / ABOUT ME</p><h2>CURIOUS MIND.<br/><em>BUILDER'S</em> ENERGY.</h2><div className="intro-row"><p className="lead">I'm Ragul, a B.Sc. Computer Science student who enjoys turning ideas into useful digital experiences.</p><p className="muted">I explore web development, productivity tools and AI-assisted creative workflows. I believe in learning by building, improving one project at a time, and keeping the details intentional.</p></div></Reveal></section>
  <section className="skills section" id="skills"><Reveal><p className="eyebrow red">02 / WHAT I DO</p><h2>TOOLS INTO<br/><em>OUTCOMES.</em></h2></Reveal><div className="skill-list">{skills.map(([n,t,d,I],i)=><Reveal key={n} delay={i*.07}><div className="skill"><span className="skill-num">{n}</span><I className="skill-icon"/><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight className="skill-arrow"/></div></Reveal>)}</div></section>
  <section className="work section" id="work"><Reveal><p className="eyebrow red">03 / SELECTED WORK</p><h2>MADE WITH<br/><em>INTENTION.</em></h2></Reveal><div className="projects">{projects.map((p,i)=><Reveal key={p.n} delay={i*.12}><a className="project" href={p.url} target={p.url.startsWith('http')?'_blank':undefined} rel="noreferrer"><div className="project-top"><span>PROJECT {p.n}</span><ArrowUpRight/></div><div className="project-name">{p.name}</div><div className="project-info"><div><p className="eyebrow">{p.type}</p><p className="project-desc">{p.desc}</p></div><div className="project-stack">{p.stack}</div></div></a></Reveal>)}</div></section>
  <section className="timeline section"><Reveal><p className="eyebrow red">04 / THE JOURNEY</p><h2>ALWAYS IN<br/><em>PROGRESS.</em></h2><div className="years"><span>LEARN</span><b>2021</b><i></i><b>2024</b><i></i><b>2026</b><span>BUILD</span></div><p className="muted timeline-note">A continuing journey of learning computer science, experimenting with tools, and building practical projects.</p></Reveal></section>
  <section className="contact section" id="contact"><Reveal><p className="eyebrow">05 / HAVE A PROJECT IN MIND?</p><h2>LET'S MAKE<br/><em>IT HAPPEN.</em></h2><a className="email-link" href="mailto:ragulradhakrishnan1@gmail.com">ragulradhakrishnan1@gmail.com <ArrowUpRight/></a><div className="socials"><a href="https://github.com/" target="_blank" rel="noreferrer"><Github/> GITHUB</a><a href="https://www.instagram.com/ragulradhakrishnan1" target="_blank" rel="noreferrer"><Instagram/> INSTAGRAM</a><a href="mailto:ragulradhakrishnan1@gmail.com"><Mail/> EMAIL</a></div></Reveal></section>
  <footer><a className="brand" href="#top">R<span>.</span></a><span>© 2026 RAGUL. BUILT WITH CURIOSITY.</span><a href="#top">BACK TO TOP ↑</a></footer>
 </main>
}
createRoot(document.getElementById('root')).render(<App/>);