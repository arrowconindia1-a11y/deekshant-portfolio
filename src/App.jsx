import { useEffect, useState } from 'react';

const CV_URL = `${import.meta.env.BASE_URL}Deekshant-Pranami-CV.pdf`;
const EMAIL = 'deeksahantpranami@gmail.com';
const PHONE = '+91 79825 71075';

const navItems = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Highlights', '#projects'],
  ['Education', '#education'],
  ['Contact', '#contact'],
];

const experience = [
  {
    organization: 'Dynamic Industrials',
    location: 'Greater Noida',
    date: 'Dec 2024 — Present',
    role: 'System Administrator Engineer',
    label: 'Current role',
    groups: [
      {
        heading: 'Office administration & operations',
        points: [
          'Prepare operational reports and technical documentation, maintaining clear records of ongoing office and IT activities.',
          'Follow up with colleagues and departments through professional communication, coordinating to resolve routine issues.',
          'Provide hardware, software and user support across departments, and support office IT assets and technology.',
        ],
      },
      {
        heading: 'Client engagement & business support',
        points: [
          "Respond to customers and prospects about the company's products, handling queries and providing end-to-end support.",
          'Support lead generation and follow-up through IndiaMART and digital channels, using CRM tools to manage enquiries.',
          'Take part in client meetings and site visits; support exhibition preparation and management.',
          'Handle social media posting and digital marketing content, including video creation, editing and graphic design.',
        ],
      },
      {
        heading: 'Technical support & robotics exposure',
        points: [
          'Manage Windows installation, updates and troubleshooting; configure LAN/WAN and resolve network connectivity issues.',
          'Gaining hands-on exposure to ROS/ROS2, Linux workflows and Gazebo simulation, with interest in industrial automation, AGV and AMR concepts.',
        ],
      },
    ],
  },
  {
    organization: 'Indotag Solutions Pvt. Ltd.',
    location: 'Kasna, Greater Noida',
    date: 'May 2024 — Dec 2024',
    role: 'IT Support Engineer',
    label: 'Previous role',
    points: [
      'Performed routine server checks and monitored system performance to support operational reliability.',
      'Troubleshot network issues and managed secure SFTP file transfers.',
      'Applied endpoint security updates and system patches to keep user systems protected and current.',
      'Supported hardware and software setup and system configuration for users.',
    ],
  },
  {
    organization: 'LG CIC',
    location: 'Surajpur, Greater Noida',
    date: 'Feb 2023 — Apr 2024',
    role: 'WhatsApp Chat Support Agent',
    label: 'Previous role',
    points: [
      'Handled customer queries through WhatsApp, providing product information and basic troubleshooting guidance.',
      'Logged issues, followed up and escalated technical cases when required, maintaining accurate case records.',
      'Maintained timely, professional communication and consistent service quality.',
    ],
  },
];

const skills = [
  {
    id: 'documentation',
    group: 'admin',
    category: 'ADMINISTRATION',
    title: 'Documentation & reporting',
    detail: 'Prepare operational reports and technical documentation, and keep clear records of office and IT activities.',
  },
  {
    id: 'coordination',
    group: 'admin',
    category: 'ADMINISTRATION',
    title: 'Coordination & follow-ups',
    detail: 'Coordinate with colleagues and departments, follow up on routine issues, and support client meetings and site visits.',
  },
  {
    id: 'office-operations',
    group: 'admin',
    category: 'ADMINISTRATION',
    title: 'Office operations',
    detail: 'Support day-to-day office operations and IT assets through organised records, user assistance and cross-departmental follow-through.',
  },
  {
    id: 'client-communication',
    group: 'admin',
    category: 'PEOPLE & CLIENT SUPPORT',
    title: 'Professional communication',
    detail: 'Respond to customer and prospect queries, share product information, and maintain timely, professional communication.',
  },
  {
    id: 'lead-support',
    group: 'admin',
    category: 'BUSINESS SUPPORT',
    title: 'Lead follow-up & CRM tools',
    detail: 'Support lead generation and follow-up through IndiaMART and digital channels, using CRM tools to manage enquiries.',
  },
  {
    id: 'events',
    group: 'admin',
    category: 'COORDINATION',
    title: 'Exhibition & event support',
    detail: 'Support exhibition preparation and management, alongside client meetings and site visits.',
  },
  {
    id: 'content',
    group: 'admin',
    category: 'DIGITAL SUPPORT',
    title: 'Digital content & social media',
    detail: 'Handle social media posting and digital marketing content, including video creation, editing and graphic design.',
  },
  {
    id: 'office-suite',
    group: 'admin',
    category: 'INTERMEDIATE',
    title: 'MS Office & Excel',
    detail: 'The CV lists MS Office and Excel at an intermediate level.',
  },
  {
    id: 'windows',
    group: 'it',
    category: 'IT SUPPORT',
    title: 'Windows administration',
    detail: 'Install, update and troubleshoot Windows systems, with hardware, software and user support across departments.',
  },
  {
    id: 'networking',
    group: 'it',
    category: 'IT SUPPORT',
    title: 'LAN/WAN & networking basics',
    detail: 'Configure LAN/WAN and troubleshoot network connectivity; prior support work also included network issue handling.',
  },
  {
    id: 'systems',
    group: 'it',
    category: 'SYSTEMS',
    title: 'Server & endpoint upkeep',
    detail: 'Experience includes routine server checks, performance monitoring, endpoint security updates and system patches.',
  },
  {
    id: 'sftp',
    group: 'it',
    category: 'SYSTEMS',
    title: 'Secure file transfers',
    detail: 'Managed secure SFTP file transfers in the IT Support Engineer role at Indotag Solutions.',
  },
  {
    id: 'linux-robotics',
    group: 'it',
    category: 'FOUNDATIONAL / BEGINNER',
    title: 'Linux, ROS/ROS2 & Gazebo',
    detail: 'The CV notes hands-on exposure to Linux workflows and Gazebo simulation, with ROS/ROS2 fundamentals at beginner level.',
  },
  {
    id: 'python-security',
    group: 'it',
    category: 'FUNDAMENTALS',
    title: 'Python, databases & security basics',
    detail: 'Python fundamentals, database basics and system security basics are listed in the CV.',
  },
];

const tools = [
  'IndiaMART', 'Canva', 'PowerPoint', 'Photoshop · basic', 'MS Office', 'TeamViewer',
  'PowerShell', 'Clonezilla', 'KeePass', 'FileZilla', 'Sysinternals', 'Ubuntu / Linux', 'Nagios',
];

const highlights = [
  {
    number: '01',
    organization: 'DYNAMIC INDUSTRIALS · DEC 2024 — PRESENT',
    title: 'Office operations & cross-team support',
    description: 'Prepared operational reports and technical documentation, followed up with colleagues and departments, and supported office IT assets and users.',
    tags: ['Documentation', 'Coordination', 'User support'],
  },
  {
    number: '02',
    organization: 'DYNAMIC INDUSTRIALS · DEC 2024 — PRESENT',
    title: 'Client enquiries & exhibition support',
    description: 'Supported customer and prospect queries, lead follow-up through IndiaMART and CRM tools, client visits, exhibition preparation and digital content.',
    tags: ['Customer support', 'Lead follow-up', 'Events'],
  },
  {
    number: '03',
    organization: 'INDOTAG SOLUTIONS · MAY 2024 — DEC 2024',
    title: 'System checks & endpoint upkeep',
    description: 'Carried out routine server checks, monitored performance, troubleshot network issues, handled SFTP transfers and applied endpoint updates.',
    tags: ['IT support', 'SFTP', 'System updates'],
  },
  {
    number: '04',
    organization: 'LG CIC · FEB 2023 — APR 2024',
    title: 'Customer case handling',
    description: 'Answered WhatsApp queries, provided product information and basic troubleshooting, and logged, followed up or escalated technical cases.',
    tags: ['Customer service', 'Case records', 'Follow-up'],
  },
];

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M6 5h9v9" /></svg>
  ) : (
    <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 10h12M10 4.5l5.5 5.5-5.5 5.5" /></svg>
  );
}

function DownloadIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.5v9m0 0 3.5-3.5M10 11.5 6.5 8M3.5 13v3.5h13V13" /></svg>;
}

function PinIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M16 8.3c0 4.1-6 9-6 9s-6-4.9-6-9a6 6 0 1 1 12 0Z" /><circle cx="10" cy="8" r="2" /></svg>;
}

function MailIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><rect x="2.5" y="4" width="15" height="12" rx="2" /><path d="m3.5 5.5 6.5 5 6.5-5" /></svg>;
}

function PhoneIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 2.8h2.3l1.1 3.6-1.7 1.5a13 13 0 0 0 4.4 4.4l1.5-1.7 3.6 1.1V14a2 2 0 0 1-2.2 2c-6.4-.5-11.5-5.6-12-12A2 2 0 0 1 5 2.8H6Z" /></svg>;
}

function ChevronIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 7.5 5 5 5-5" /></svg>;
}

function MenuIcon({ close = false }) {
  return close ? (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [skillFilter, setSkillFilter] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    const elements = [...document.querySelectorAll('.reveal')];
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const visibleSkills = skills.filter((skill) => skillFilter === 'all' || skill.group === skillFilter);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner wrap">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Deekshant Pranami, back to top">
            <span className="brand-mark">DP<span>.</span></span>
            <span className="brand-name">Deekshant Pranami<small>HR &amp; ADMINISTRATION</small></span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <MenuIcon close={menuOpen} />
          </button>
          <nav id="primary-navigation" className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a href={href} key={href} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-cv mobile-cv" href={CV_URL} download="Deekshant-Pranami-CV.pdf" onClick={closeMenu}>
              Download CV <DownloadIcon />
            </a>
          </nav>
          <a className="nav-cv desktop-cv" href={CV_URL} download="Deekshant-Pranami-CV.pdf">
            Download CV <DownloadIcon />
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-gridwash" aria-hidden="true" />
          <div className="wrap hero-layout">
            <div className="hero-content">
              <div className="hero-status"><span className="status-dot" /> Open to HR &amp; Admin opportunities</div>
              <p className="eyebrow hero-eyebrow">PEOPLE <i /> OPERATIONS <i /> TECHNOLOGY</p>
              <h1 id="hero-title">Deekshant<br /><em>Pranami.</em></h1>
              <p className="hero-role">HR &amp; Administration <span>·</span> Office Operations <span>·</span> IT Support</p>
              <p className="hero-intro">
                An organised operations professional with experience in documentation, coordination, customer support and workplace IT. Looking to bring these transferable strengths to an HR &amp; Administration role.
              </p>
              <div className="hero-actions">
                <a className="button button-lime" href="#contact">Get in touch <ArrowIcon /></a>
                <a className="button button-ghost" href={CV_URL} download="Deekshant-Pranami-CV.pdf"><DownloadIcon /> Download CV</a>
              </div>
              <div className="hero-current">
                <span className="current-marker" />
                <div><span className="micro-label">CURRENTLY</span><strong>System Administrator Engineer</strong><span>Dynamic Industrials <i /> Dec 2024 — Present</span></div>
              </div>
            </div>

            <div className="hero-side" aria-label="Profile overview">
              <div className="profile-panel">
                <div className="profile-panel-top"><span>PROFILE SNAPSHOT</span><span>01 / 03</span></div>
                <div className="profile-art" aria-hidden="true">
                  <span className="art-ring ring-one" />
                  <span className="art-ring ring-two" />
                  <span className="art-ring ring-three" />
                  <span className="art-cross cross-one" />
                  <span className="art-cross cross-two" />
                  <span className="art-core">DP<span>.</span></span>
                  <span className="art-caption">SUPPORT<br />THAT CONNECTS</span>
                </div>
                <div className="profile-focus">
                  <div><span>01</span><strong>People &amp; team coordination</strong><ArrowIcon diagonal /></div>
                  <div><span>02</span><strong>Office administration</strong><ArrowIcon diagonal /></div>
                  <div><span>03</span><strong>IT &amp; systems support</strong><ArrowIcon diagonal /></div>
                </div>
                <div className="profile-panel-foot"><span><PinIcon /> GREATER NOIDA, INDIA</span><span>HINDI · ENGLISH</span></div>
              </div>
              <div className="hero-note"><span>↗</span> A people-facing approach, with hands-on technical confidence.</div>
            </div>
          </div>
          <div className="hero-bottom-line wrap">
            <span>PROFESSIONAL PROFILE</span><span>01 — ABOUT</span><span>SCROLL TO EXPLORE <b>↓</b></span>
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="wrap">
            <div className="section-topline reveal"><span>01 / ABOUT</span><span>GREATER NOIDA · UTTAR PRADESH</span></div>
            <div className="about-grid">
              <div className="about-heading reveal">
                <p className="eyebrow">A CLEAR, PEOPLE-READY APPROACH</p>
                <h2 id="about-title">Reliable support.<br /><em>Thoughtful follow-through.</em></h2>
              </div>
              <div className="about-copy reveal">
                <p className="about-lead">I’m a BCA graduate whose experience brings together office operations, documentation, cross-departmental coordination, customer engagement and hands-on IT support.</p>
                <p>In my current role at Dynamic Industrials, I prepare reports, follow up across teams, support users and office technology, and contribute to customer and business support. Earlier customer-service and IT-support roles strengthened my communication, record-keeping and issue follow-through.</p>
                <p>I’m now looking for HR &amp; Administration opportunities where these transferable strengths can help support people, records and day-to-day workplace operations.</p>
                <div className="transfer-note">
                  <span className="transfer-icon">HR<span>+</span></span>
                  <div><strong>Relevant strengths for HR &amp; Admin</strong><p>Coordination, clear communication, documentation, follow-ups, customer service and MS Office—grounded in the experience listed on my CV.</p></div>
                </div>
              </div>
            </div>
            <div className="about-quickfacts reveal">
              <div><span>01</span><strong>Documentation</strong><small>Reports &amp; clear records</small></div>
              <div><span>02</span><strong>Coordination</strong><small>Teams, clients &amp; follow-ups</small></div>
              <div><span>03</span><strong>Workplace support</strong><small>Users, systems &amp; office tech</small></div>
              <div><span>04</span><strong>Languages</strong><small>Hindi &amp; English · fluent</small></div>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="wrap">
            <div className="section-topline reveal"><span>02 / EXPERIENCE</span><span>THREE ROLES · 2023 — PRESENT</span></div>
            <div className="section-intro reveal">
              <div><p className="eyebrow">PROFESSIONAL EXPERIENCE</p><h2 id="experience-title">Work that keeps<br /><em>things moving.</em></h2></div>
              <p>Office operations, customer care and IT support—built through hands-on roles in Greater Noida.</p>
            </div>
            <div className="experience-list">
              {experience.map((item, index) => (
                <details className={`experience-card reveal${index === 0 ? ' current-experience' : ''}`} key={item.organization} open={index === 0}>
                  <summary>
                    <span className="experience-rail"><span>{String(index + 1).padStart(2, '0')}</span><i /></span>
                    <span className="experience-summary">
                      <span className="experience-date">{item.date}<i />{item.location}</span>
                      <span className="experience-title-row"><strong>{item.role}</strong><span className={`role-label${index === 0 ? ' active' : ''}`}>{item.label}</span></span>
                      <span className="experience-org">{item.organization}</span>
                    </span>
                    <span className="experience-toggle" aria-hidden="true"><ChevronIcon /></span>
                  </summary>
                  <div className="experience-content">
                    <div className="experience-content-org"><span>ROLE DETAILS</span><strong>{item.organization}</strong></div>
                    {item.groups ? item.groups.map((group) => (
                      <div className="experience-group" key={group.heading}>
                        <h4>{group.heading}</h4>
                        <ul>{group.points.map((point) => <li key={point}>{point}</li>)}</ul>
                      </div>
                    )) : (
                      <ul className="experience-points">{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-title">
          <div className="wrap">
            <div className="section-topline reveal"><span>03 / SKILLS &amp; TOOLS</span><span>INTERACTIVE SKILL CARDS</span></div>
            <div className="section-intro reveal">
              <div><p className="eyebrow">CAPABILITIES &amp; TOOLKIT</p><h2 id="skills-title">Practical skills.<br /><em>Ready to contribute.</em></h2></div>
              <p>Choose a focus area, then open a card to see the experience behind each capability.</p>
            </div>
            <div className="skill-toolbar reveal">
              <div className="skill-filters" role="group" aria-label="Filter skills">
                <button type="button" className={skillFilter === 'all' ? 'filter-active' : ''} onClick={() => { setSkillFilter('all'); setSelectedSkill(null); }}>All skills <span>14</span></button>
                <button type="button" className={skillFilter === 'admin' ? 'filter-active' : ''} onClick={() => { setSkillFilter('admin'); setSelectedSkill(null); }}>HR &amp; administration <span>8</span></button>
                <button type="button" className={skillFilter === 'it' ? 'filter-active' : ''} onClick={() => { setSkillFilter('it'); setSelectedSkill(null); }}>IT &amp; systems <span>6</span></button>
              </div>
              <span className="skill-hint"><span>+</span> SELECT A CARD</span>
            </div>
            <div className="skill-grid" aria-live="polite">
              {visibleSkills.map((skill, index) => {
                const expanded = selectedSkill === skill.id;
                return (
                  <button
                    className={`skill-card${expanded ? ' is-expanded' : ''}`}
                    type="button"
                    key={skill.id}
                    onClick={() => setSelectedSkill(expanded ? null : skill.id)}
                    aria-expanded={expanded}
                  >
                    <span className="skill-card-top"><span>{String(index + 1).padStart(2, '0')}</span><span>{skill.category}</span><i className={expanded ? 'expanded' : ''}><ChevronIcon /></i></span>
                    <strong>{skill.title}</strong>
                    {expanded && <span className="skill-detail">{skill.detail}</span>}
                    <span className="skill-card-bottom">{expanded ? 'CLOSE DETAILS' : 'VIEW DETAILS'} <ArrowIcon diagonal /></span>
                  </button>
                );
              })}
            </div>
            <div className="tools-panel reveal" id="tools">
              <div className="tools-panel-heading"><div><p className="eyebrow">SOFTWARE &amp; UTILITIES</p><h3>Tools I’ve used</h3></div><span>TOOLS LISTED ON CV</span></div>
              <div className="tool-chips">{tools.map((tool, index) => <span key={tool}><i>{String(index + 1).padStart(2, '0')}</i>{tool}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="wrap">
            <div className="section-topline reveal"><span>04 / PROJECTS &amp; WORK HIGHLIGHTS</span><span>DOCUMENTED EXPERIENCE</span></div>
            <div className="section-intro reveal">
              <div><p className="eyebrow">SELECTED WORKSTREAMS</p><h2 id="projects-title">Useful work,<br /><em>clearly documented.</em></h2></div>
              <p className="projects-intro-note">The CV does not name standalone projects. These highlights summarize responsibilities from the roles listed—without presenting them as separate project engagements.</p>
            </div>
            <div className="highlight-grid">
              {highlights.map((highlight) => (
                <article className="highlight-card reveal" key={highlight.number}>
                  <div className="highlight-head"><span>{highlight.number}</span><span className="highlight-mark"><ArrowIcon diagonal /></span></div>
                  <p className="highlight-org">{highlight.organization}</p>
                  <h3>{highlight.title}</h3>
                  <p className="highlight-description">{highlight.description}</p>
                  <div className="highlight-tags">{highlight.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section education-section" id="education" aria-labelledby="education-title">
          <div className="wrap">
            <div className="section-topline reveal"><span>05 / EDUCATION</span><span>ACADEMIC BACKGROUND</span></div>
            <div className="education-grid">
              <div className="education-heading reveal"><p className="eyebrow">EDUCATION</p><h2 id="education-title">Learning that<br /><em>builds a foundation.</em></h2><p>BCA graduate, with a foundation in computing and practical workplace support experience.</p></div>
              <div className="education-list">
                <article className="education-card reveal">
                  <span className="education-date">JUN 2021 — JUL 2024</span>
                  <div><h3>Bachelor of Computer Applications</h3><p>Harlal Institute of Management and Technology</p></div>
                  <span className="education-badge">BCA</span>
                </article>
                <article className="education-card reveal">
                  <span className="education-date">10TH &amp; 12TH COMPLETED</span>
                  <div><h3>Shri Ram Convent School</h3><p>CBSE</p></div>
                  <span className="education-badge school-badge">CBSE</span>
                </article>
                <div className="language-note reveal"><span>LANGUAGES</span><strong>Hindi <i /> English</strong><small>Fluent in both</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-gridwash" aria-hidden="true" />
          <div className="wrap contact-layout">
            <div className="contact-main reveal">
              <p className="eyebrow">06 / CONTACT</p>
              <span className="contact-status"><i /> OPEN TO HR &amp; ADMIN OPPORTUNITIES</span>
              <h2 id="contact-title">Let’s make<br /><em>work flow better.</em></h2>
              <p className="contact-copy">Interested in HR &amp; Administration roles where organisation, communication and dependable follow-through matter? I’d be glad to connect.</p>
              <div className="contact-actions">
                <a className="button button-lime" href={`mailto:${EMAIL}`}>Email Deekshant <ArrowIcon diagonal /></a>
                <a className="button button-ghost" href={CV_URL} download="Deekshant-Pranami-CV.pdf"><DownloadIcon /> Download CV</a>
              </div>
            </div>
            <div className="contact-card reveal">
              <div className="contact-card-head"><span>DIRECT CONTACT</span><span>INDIA</span></div>
              <a className="contact-detail" href={`mailto:${EMAIL}`}><span className="contact-icon"><MailIcon /></span><span><small>EMAIL</small><strong>{EMAIL}</strong></span><ArrowIcon diagonal /></a>
              <a className="contact-detail" href="tel:+917982571075"><span className="contact-icon"><PhoneIcon /></span><span><small>PHONE</small><strong>{PHONE}</strong></span><ArrowIcon diagonal /></a>
              <div className="contact-detail contact-location"><span className="contact-icon"><PinIcon /></span><span><small>LOCATION</small><strong>Pari Chowk, Greater Noida</strong><em>Uttar Pradesh, India</em></span></div>
              <div className="contact-card-foot"><span>RESPONSE CHANNELS</span><span>EMAIL · PHONE</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-main">
          <a className="brand footer-brand" href="#top" aria-label="Deekshant Pranami, back to top"><span className="brand-mark">DP<span>.</span></span><span className="brand-name">Deekshant Pranami<small>HR &amp; ADMINISTRATION</small></span></a>
          <p>Organised support. Technical confidence.<br />Greater Noida, India.</p>
          <a className="footer-top" href="#top">BACK TO TOP <span>↑</span></a>
        </div>
        <div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Deekshant Pranami</span><span>PROFILE CONTENT BASED ON THE SUPPLIED CV</span><a href={CV_URL} download="Deekshant-Pranami-CV.pdf">DOWNLOAD CV <DownloadIcon /></a></div>
      </footer>
    </>
  );
}
