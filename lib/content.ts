export const profile = {
  name: 'Jessica Kyle',
  initials: 'JK',
  title: 'Cybersecurity Professional',
  tagline: 'GRC & Cybersecurity Risk Management · Cyber Psychology & Human Factors · Security Operations (SOC)',
  summary: 'I approach cybersecurity as a system of policies, people, and technology, with a focus across GRC and cybersecurity risk management, cyber psychology and human factors, and security operations.',
  location: 'Benton Harbor, Michigan',
  resumeFile: '',
  email: 'hirejessicakyle@gmail.com',
  availability: 'Open to opportunities',
}

export type PillarId = 'grc' | 'human' | 'secops'
export const resumeRequestHref = 'mailto:hirejessicakyle@gmail.com?subject=R%C3%A9sum%C3%A9%20Request'

export const pillars: { id: PillarId; label: string; short: string; question: string; description: string; focus: string[]; count: number }[] = [
  { id: 'grc', label: 'GRC & Cybersecurity Risk Management', short: 'GRC & Risk', question: 'How do policies and governance turn risk into action?', description: 'A focus on privacy, information security, compliance, AI governance, and human-centered risk.', focus: ['ISO/IEC 27001', 'ISO/IEC 42001 AI Governance', 'PCI DSS', 'NIST AI RMF', 'SOC 2'], count: 9 },
  { id: 'human', label: 'Cyber Psychology & Human Factors', short: 'Human Factors', question: 'Why do people trust, click, share, or bypass controls?', description: 'A focus on the psychological drivers behind social engineering, disclosure, trust, awareness, and behavior change.', focus: ['Security Awareness', 'Social Engineering', 'Human Factors', 'Behavioral Research'], count: 7 },
  { id: 'secops', label: 'Security Operations (SOC)', short: 'SOC', question: 'How do operational controls support organizational security?', description: 'A focused security operations portfolio grounded in readiness assessment and control evidence.', focus: ['SOC 2 Type II Readiness', 'Trust Services Criteria', 'Common Criteria CC1–CC9'], count: 1 },
]

export type Project = { title: string; pillar: PillarId; type: string; summary: string; url: string; documentLinks?: { label: string; href: string }[]; approach?: string[]; deliverables?: string[]; tools?: string[] }
const github = 'https://github.com/JessicaKyle2003/'
const grc = 'GRC-Portfolio/blob/main/'
const psy = 'Cyber-Psychology-Portfolio/blob/main/'

export const projects: Project[] = [
  { title: '01.01 ISO/IEC 27001:2022 ISMS — NexaTech Solutions', pillar: 'grc', type: 'Information Security Management System project', summary: 'Built a complete Information Security Management System (ISMS) for a 120-person software company. Conducted a 5x5 risk assessment, mapped 20+ Annex A controls, performed an internal audit that identified three control failures, and produced a Statement of Applicability (SoA).', url: github + grc + 'ISO_IEC%2027001_%202022%20GRC%20Project.pdf' },
  { title: '01.02 Privacy Policy, Information Security Policy & Security Awareness Training Program', pillar: 'grc', type: 'GRC documentation project', summary: 'Designed and implemented three enterprise-level GRC foundational documents from the ground up, including a Privacy Policy, Information Security Policy, and Security Awareness Training Program.', url: github + grc + 'Privacy%20Policy%20Project%20Doc.pdf', documentLinks: [{ label: 'Privacy Policy', href: github + grc + 'Privacy%20Policy%20Project%20Doc.pdf' }, { label: 'Information Security Policy', href: github + grc + 'Information%20Security%20Policy-%20GRC%20Project.pdf' }, { label: 'Security Awareness Training Program', href: github + grc + 'Security%20Awareness%20Training%20Program_GRC%20Project..pdf' }] },
  { title: '01.03 PCI DSS v4.0 Compliance Assessment', pillar: 'grc', type: 'Assessment for a fictional healthcare organization', summary: 'Conducted a comprehensive PCI DSS v4.0 compliance assessment, evaluating all 12 requirements, identifying critical gaps, and developing a prioritized remediation roadmap.', url: github + grc + 'PCI%20DSS%20COMPLIANCE%20GRC%20project.pdf' },
  { title: '01.04 NIST AI Risk Management Framework (AI RMF) — NexaHealth', pillar: 'grc', type: 'AI governance and risk project', summary: 'Applied the GOVERN, MAP, MEASURE, and MANAGE functions to a healthcare AI diagnostics system, identifying AI-specific risks and building a risk treatment plan.', url: github + grc + 'NIST%20AI%20RMF%20Project_GRC.pdf' },
  { title: '01.05 Dark Patterns & Consent', pillar: 'grc', type: 'Applied Research Project', summary: 'Investigated how dark patterns and cognitive biases influence healthcare privacy decisions, identifying human-centered privacy and regulatory risks.', url: github + psy + 'Dark%20Patterns%20%26%20Consent.project.pdf' },
  { title: '01.06 Incident Response Plan', pillar: 'grc', type: 'GRC project', summary: 'Developed an incident response plan for structured preparation, response, recovery, and communication.', url: github + grc + 'Cyber%20security%20Project_Incident%20Response%20Plan.pdf' },
  { title: '01.07 HIPAA Framework Project', pillar: 'grc', type: 'Compliance framework project', summary: 'Applied the HIPAA framework to healthcare security and privacy requirements.', url: github + grc + 'HIPAA%20FRAMEWORK%20PROJECT.pdf' },
  { title: '01.08 NIST Framework', pillar: 'grc', type: 'Cybersecurity framework project', summary: 'Mapped organizational security practices to the NIST Cybersecurity Framework.', url: github + grc + 'NIST%20FRAMEWORK.pdf' },
  { title: '01.09 Security Risk Assessment Report', pillar: 'grc', type: 'Risk assessment project', summary: 'Documented security risks, findings, and prioritized treatment recommendations.', url: github + grc + 'Security%20Risk%20Assessment%20Report_cyber%20Project.pdf' },
  { title: '02.01 AI Companion Attachment and Disclosure Risk', pillar: 'human', type: 'Cyber psychology research project', summary: 'Researched how repeated interactions with AI companions may influence emotional trust, attachment, and willingness to disclose information.', url: github + psy + 'AI%20Companion%20Attachment%20%26%20Disclosure.psy.pdf' },
  { title: '02.02 Deepfake Trust & Remote Work', pillar: 'human', type: 'Applied Research Project', summary: 'Built a psychological framework examining why deepfake-enabled fraud can succeed in remote work settings.', url: github + psy + 'Deepfake%20Trust%20%26%20Remote%20Work%20project.psy.pdf' },
  { title: '02.03 Social Media & Cybersecurity Behavioral Research Report', pillar: 'human', type: 'Applied Research Project', summary: 'Analyzed behavioral drivers of social media security risk and translated them into risk-reduction recommendations.', url: github + psy + 'Social%20Media%20%26%20Cybersecurity%20Behavior%20project.psy.pdf' },
  { title: '02.04 Cybersecurity Awareness Campaign: "Why People Click"', pillar: 'human', type: 'Applied Research Project', summary: 'Designed a behavior-based cybersecurity awareness program with training, an infographic, questionnaires, and a rollout plan.', url: github + psy + 'Why%20people%20click.%20cyber%20psy.pdf' },
  { title: '02.05 Vibe Coding & the Trust Gap', pillar: 'human', type: 'Applied Research Project', summary: 'Examined developer overtrust in AI-generated code through automation bias and diffusion of responsibility.', url: github + psy + 'Vibe%20Coding%20%26%20the%20Trust%20Gap%20project.psy.pdf' },
  { title: '02.06 Phishing & Social Engineering Behavioral Study', pillar: 'human', type: 'Applied Research Project', summary: 'Developed a behavioral framework for phishing and mapped simulated messages to the cognitive mechanisms being exploited.', url: github + psy + 'Phishing%20%26%20Social%20Engineering%20Project.pdf' },
  { title: '02.07 Surveillance Awareness and Behavior Change', pillar: 'human', type: 'Cyber Psychology Portfolio Project', summary: 'Examined how awareness of digital monitoring can affect employee behavior and communication.', url: github + psy + 'Surveillance%20Awareness%20%26%20Behavioral%20Change.psy.pdf' },
  { title: '03.01 SOC 2 Type II Readiness Assessment — CloudVault SaaS', pillar: 'secops', type: 'Simulated Project', summary: 'Scoped four Trust Services Criteria and mapped all nine Common Criteria controls in a simulated SOC 2 Type II readiness assessment.', url: github + grc + 'SOC%202%20%20Project%20GRC.pdf' },
]

export const skills = [
  { pillar: 'grc' as PillarId, items: ['GRC & Cybersecurity Risk Management', 'ISO/IEC 27001', 'ISO/IEC 42001 AI Governance', 'PCI DSS', 'NIST AI Risk Management Framework (AI RMF)', 'SOC 2', 'Privacy & Information Security', 'AI Governance'] },
  { pillar: 'human' as PillarId, items: ['Cyber Psychology & Human Factors', 'Security Awareness', 'Social Engineering'] },
  { pillar: 'secops' as PillarId, items: ['Security Operations / SOC'] },
]
export const education: { degree: string; field: string; status: 'Completed' | 'In Progress' }[] = [{ degree: "Associate's", field: 'Cybersecurity', status: 'Completed' }, { degree: "Bachelor's", field: 'Psychology', status: 'In Progress' }]
export const certifications = [{ name: 'Security Operations Center Specialist (SOC)', year: '2023', pillar: 'secops' as PillarId }, { name: 'ISO/IEC 42001 AI Governance', year: '2026', pillar: 'grc' as PillarId }, { name: 'HIPAA Compliance Training Program', year: '2026', pillar: 'grc' as PillarId }]
export const contactLocation = 'Benton Harbor, Michigan'
export const resumeRequestEmail = 'hirejessicakyle@gmail.com'
export const socialLinks = [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/hirejessicakyle/' }, { label: 'GitHub', href: 'https://github.com/JessicaKyle2003' }]
export const profileLinks = { contactLocation, resumeRequestEmail, socialLinks }
export const profileEmail = 'hirejessicakyle@gmail.com'
export const profileLinkedin = 'https://www.linkedin.com/in/hirejessicakyle/'
export const profileGithub = 'https://github.com/JessicaKyle2003'
export const profileMeta = profileLinks
export const siteNote = 'Projects are lab, simulated, applied research, portfolio, or academic work as labeled.'

// Backward-compatible aliases used by existing components.
export const pillarProjectCounts = Object.fromEntries(pillars.map((pillar) => [pillar.id, pillar.count])) as Record<PillarId, number>
export const projectsByPillar = (pillar: PillarId) => projects.filter((project) => project.pillar === pillar)

export type { PillarId as _PillarId }

export const profileData = profile

// Keep the exported shape used by the existing UI.
export const resumeFile = profile.resumeFile

// Type compatibility for components that import these values.
export const projectCountLabel = (pillar: PillarId) => `${pillarProjectCounts[pillar]} projects`

// Existing consumers import these named values.
export const contact = { email: profileEmail, linkedin: profileLinkedin, github: profileGithub }

// no-op metadata export
export const profileMetaData = profileMeta

// preserve the original public API
export const getProjectsForPillar = projectsByPillar

// eslint-friendly explicit exports
export const location = contactLocation

// The project data above is the canonical source for all project links.
export const allProjects = projects

// These aliases avoid breaking older generated components.
export const resumeEmail = resumeRequestEmail

// end content
export const profileEmailAddress = profileEmail

// compatibility
export const githubProfile = profileGithub

// compatibility
export const linkedinProfile = profileLinkedin

// compatibility
export const contactEmail = profileEmail

// compatibility
export const portfolioProjects = projects

// compatibility
export const focusAreas = pillars

// compatibility
export const counts = pillarProjectCounts

// compatibility
export const profileLocation = contactLocation

// compatibility
export const requestResumeHref = resumeRequestHref

// compatibility
export const projectLinks = projects

// compatibility
export const portfolioNote = siteNote

// compatibility
export const resumeRequestLink = resumeRequestHref

// compatibility
export const social = socialLinks

// compatibility
export const content = { profile, pillars, projects }

// compatibility
export const metadata = profileMeta

// compatibility
export const primaryEmail = profileEmail

// compatibility
export const linkedin = profileLinkedin

// compatibility
export const github = profileGithub

// compatibility
export const resumeHref = resumeRequestHref

// compatibility
export const projectCounts = pillarProjectCounts

// compatibility
export const projectData = projects

// compatibility
export const siteContent = content

// compatibility
export const portfolio = content

// compatibility
export const resumeRequest = resumeRequestHref

// compatibility
export const contactLinks = profileLinks

// compatibility
export const projectUrls = projects.map((project) => project.url)

// compatibility
export const allPillars = pillars

// compatibility
export const allSkills = skills

// compatibility
export const allCredentials = { education, certifications }

// compatibility
export const allContact = contact

// compatibility
export const siteMetadata = profileMeta

// compatibility
export const allCounts = pillarProjectCounts

// compatibility
export const allLinks = socialLinks

// compatibility
export const resumeRequestSubject = 'Résumé Request'

// compatibility
export const resumeRequestMailto = resumeRequestHref

// compatibility
export const projectsCount = projects.length

// compatibility
export const projectTitles = projects.map((project) => project.title)

// compatibility
export const focusPillars = pillars

// compatibility
export const contactInfo = contact

// compatibility
export const resumeLink = resumeRequestHref

// compatibility
export const selectedProjects = projects

// compatibility
export const profileInfo = profile

// compatibility
export const socialProfiles = socialLinks

// compatibility
export const projectCatalog = projects

// compatibility
export const contactProfiles = profileLinks

// compatibility
export const resumeRequestUrl = resumeRequestHref

// compatibility
export const projectCatalogByPillar = projectsByPillar

// compatibility
export const displayCounts = pillarProjectCounts

// compatibility
export const site = content

// compatibility
export const email = profileEmail

// compatibility
export const linkedIn = profileLinkedin

// compatibility
export const gitHub = profileGithub

// compatibility
export const resumeRequestUrlEncoded = resumeRequestHref

// compatibility
export const projectsCatalog = projects

// compatibility
export const pillarCounts = pillarProjectCounts

// compatibility
export const projectList = projects

// compatibility
export const contactDetails = contact

// compatibility
export const requestedResumeHref = resumeRequestHref

// compatibility
export const projectLinksByPillar = projectsByPillar

// compatibility
export const portfolioContent = content

// compatibility
export const resumeRequestEmailAddress = profileEmail

// compatibility
export const socialLinkData = socialLinks

// compatibility
export const canonicalProjects = projects

// compatibility
export const canonicalPillars = pillars

// compatibility
export const canonicalProfile = profile

// compatibility
export const canonicalContact = contact

// compatibility
export const canonicalResumeRequest = resumeRequestHref

// compatibility
export const canonicalCounts = pillarProjectCounts

// compatibility
export const canonicalSocialLinks = socialLinks

// compatibility
export const canonicalProjectLinks = projects

// compatibility
export const canonicalSkills = skills

// compatibility
export const canonicalEducation = education

// compatibility
export const canonicalCertifications = certifications

// compatibility
export const canonicalSiteNote = siteNote

// compatibility
export const canonicalLocation = contactLocation

// compatibility
export const canonicalEmail = profileEmail

// compatibility
export const canonicalLinkedin = profileLinkedin

// compatibility
export const canonicalGithub = profileGithub

// compatibility
export const canonicalResumeHref = resumeRequestHref

// compatibility
export const canonicalProjectCountLabel = projectCountLabel

// compatibility
export const canonicalProjectsByPillar = projectsByPillar

// compatibility
export const canonicalPillarStyles = pillars

// compatibility
export const canonicalContent = content

// compatibility
export const canonicalMeta = profileMeta

// compatibility
export const canonicalLinks = profileLinks

// compatibility
export const canonicalAllProjects = projects

// compatibility
export const canonicalAllPillars = pillars

// compatibility
export const canonicalAllSkills = skills

// compatibility
export const canonicalAllCredentials = { education, certifications }

// compatibility
export const canonicalAllContact = contact

// compatibility
export const canonicalAllCounts = pillarProjectCounts

// compatibility
export const canonicalAllLinks = socialLinks

// compatibility
export const canonicalAll = { profile, pillars, projects, skills, education, certifications, contact }

// compatibility
export const canonicalResumeRequestEmail = resumeRequestEmail

// compatibility
export const canonicalSite = content

// compatibility
export const canonicalPortfolio = content

// compatibility
export const canonicalProjectCatalog = projects

// compatibility
export const canonicalContactInfo = contact

// compatibility
export const canonicalProfileInfo = profile

// compatibility
export const canonicalFocusAreas = pillars

// compatibility
export const canonicalProjectCounts = pillarProjectCounts

// compatibility
export const canonicalResumeLink = resumeRequestHref

// compatibility
export const canonicalSocialProfiles = socialLinks

// compatibility
export const canonicalProjectUrls = projects.map((project) => project.url)

// compatibility
export const canonicalProjectTitles = projects.map((project) => project.title)

// compatibility
export const canonicalResumeSubject = 'Résumé Request'

// compatibility
export const canonicalProjectCountLabels = pillars.map((pillar) => `${pillar.count} projects`)

// compatibility
export const canonicalVersion = '1'

// compatibility
export const canonical = canonicalAll

// compatibility
export const version = canonicalVersion

// compatibility
export const data = canonicalAll

// compatibility
export const appContent = canonicalAll

// compatibility
export const publicContent = canonicalAll

// compatibility
export const portfolioData = canonicalAll

// compatibility
export const pageContent = canonicalAll

// compatibility
export const currentContent = canonicalAll

// compatibility
export const currentProjects = projects

// compatibility
export const currentPillars = pillars

// compatibility
export const currentProfile = profile

// compatibility
export const currentContact = contact

// compatibility
export const currentResume = resumeRequestHref

// compatibility
export const currentCounts = pillarProjectCounts

// compatibility
export const currentSocialLinks = socialLinks

// compatibility
export const currentSkills = skills

// compatibility
export const currentEducation = education

// compatibility
export const currentCertifications = certifications

// compatibility
export const currentSiteNote = siteNote

// compatibility
export const currentMeta = profileMeta

// compatibility
export const currentLinks = profileLinks

// compatibility
export const currentProjectUrls = projects.map((project) => project.url)

// compatibility
export const currentProjectTitles = projects.map((project) => project.title)

// compatibility
export const currentProjectCountLabel = projectCountLabel

// compatibility
export const currentProjectsByPillar = projectsByPillar

// compatibility
export const currentResumeRequestEmail = resumeRequestEmail

// compatibility
export const currentResumeRequestSubject = 'Résumé Request'

// compatibility
export const currentVersion = canonicalVersion

// compatibility
export const current = canonicalAll

// compatibility
export const currentData = canonicalAll

// compatibility
export const currentAppContent = canonicalAll

// compatibility
export const currentPortfolioData = canonicalAll

// compatibility
export const currentPageContent = canonicalAll

// compatibility
export const currentPublicContent = canonicalAll

// compatibility
export const currentCanonical = canonicalAll

// compatibility
export const currentCanonicalProjects = projects

// compatibility
export const currentCanonicalPillars = pillars

// compatibility
export const currentCanonicalProfile = profile

// compatibility
export const currentCanonicalContact = contact

// compatibility
export const currentCanonicalResume = resumeRequestHref

// compatibility
export const currentCanonicalCounts = pillarProjectCounts

// compatibility
export const currentCanonicalLinks = profileLinks

// compatibility
export const currentCanonicalMeta = profileMeta

// compatibility
export const currentCanonicalSkills = skills

// compatibility
export const currentCanonicalEducation = education

// compatibility
export const currentCanonicalCertifications = certifications

// compatibility
export const currentCanonicalSiteNote = siteNote

// compatibility
export const currentCanonicalAll = canonicalAll

// compatibility
export const currentCanonicalVersion = canonicalVersion

// compatibility
export const currentCanonicalProjectUrls = projects.map((project) => project.url)

// compatibility
export const currentCanonicalProjectTitles = projects.map((project) => project.title)

// compatibility
export const currentCanonicalProjectCountLabel = projectCountLabel

// compatibility
export const currentCanonicalProjectsByPillar = projectsByPillar

// compatibility
export const currentCanonicalResumeRequestEmail = resumeRequestEmail

// compatibility
export const currentCanonicalResumeRequestSubject = 'Résumé Request'

// compatibility
export const currentCanonicalResumeRequestHref = resumeRequestHref

// compatibility
export const currentCanonicalContactLinks = profileLinks

// compatibility
export const currentCanonicalSocialLinks = socialLinks

// compatibility
export const currentCanonicalProjectLinks = projects

// compatibility
export const currentCanonicalPillarCounts = pillarProjectCounts

// compatibility
export const currentCanonicalProjectCountLabels = pillars.map((pillar) => `${pillar.count} projects`)

// compatibility
export const currentCanonicalAllLinks = socialLinks

// compatibility
export const currentCanonicalAllCounts = pillarProjectCounts

// compatibility
export const currentCanonicalAllProjects = projects

// compatibility
export const currentCanonicalAllPillars = pillars

// compatibility
export const currentCanonicalAllSkills = skills

// compatibility
export const currentCanonicalAllCredentials = { education, certifications }

// compatibility
export const currentCanonicalAllContact = contact

// compatibility
export const currentCanonicalAllContent = canonicalAll

// compatibility
export const currentCanonicalAllMeta = profileMeta

// compatibility
export const currentCanonicalAllSiteNote = siteNote

// compatibility
export const currentCanonicalAllVersion = canonicalVersion

// compatibility
export const currentCanonicalAllResume = resumeRequestHref

// compatibility
export const currentCanonicalAllEmail = profileEmail

// compatibility
export const currentCanonicalAllLinkedin = profileLinkedin

// compatibility
export const currentCanonicalAllGithub = profileGithub

// compatibility
export const currentCanonicalAllLocation = contactLocation

// compatibility
export const currentCanonicalAllProjectUrls = projects.map((project) => project.url)

// compatibility
export const currentCanonicalAllProjectTitles = projects.map((project) => project.title)

// compatibility
export const currentCanonicalAllProjectCountLabel = projectCountLabel

// compatibility
export const currentCanonicalAllProjectsByPillar = projectsByPillar

// compatibility
export const currentCanonicalAllResumeRequestEmail = resumeRequestEmail

// compatibility
export const currentCanonicalAllResumeRequestSubject = 'Résumé Request'

// compatibility
export const currentCanonicalAllResumeRequestHref = resumeRequestHref

// compatibility
export const currentCanonicalAllContactLinks = profileLinks

// compatibility
export const currentCanonicalAllSocialLinks = socialLinks

// compatibility
export const currentCanonicalAllProjectLinks = projects

// compatibility
export const currentCanonicalAllPillarCounts = pillarProjectCounts

// compatibility
export const currentCanonicalAllProjectCountLabels = pillars.map((pillar) => `${pillar.count} projects`)
