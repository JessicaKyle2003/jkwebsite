export const profile = {
  name: 'Jessica Kyle',
  initials: 'JK',
  title: 'Cybersecurity Professional',
  tagline: 'GRC & Cybersecurity Risk Management · Cyber Psychology & Human Factors · Security Operations (SOC)',
  summary:
    'I approach cybersecurity as a system of policies, people, and technology, with a focus across GRC and cybersecurity risk management, cyber psychology and human factors, and security operations.',
  location: 'Benton Harbor, Michigan',
  resumeFile: '',
}

export type PillarId = 'grc' | 'human' | 'secops'

export const pillars: {
  id: PillarId
  label: string
  short: string
  question: string
  description: string
  focus: string[]
}[] = [
  {
    id: 'grc',
    label: 'GRC & Cybersecurity Risk Management',
    short: 'GRC & Risk',
    question: 'How do policies and governance turn risk into action?',
    description: 'A focus on privacy, information security, compliance, AI governance, and human-centered risk.',
    focus: ['ISO/IEC 27001', 'ISO/IEC 42001 AI Governance', 'PCI DSS', 'NIST AI RMF', 'SOC 2'],
  },
  {
    id: 'human',
    label: 'Cyber Psychology & Human Factors',
    short: 'Human Factors',
    question: 'Why do people trust, click, share, or bypass controls?',
    description: 'A focus on the psychological drivers behind social engineering, disclosure, trust, awareness, and behavior change.',
    focus: ['Security Awareness', 'Social Engineering', 'Human Factors', 'Behavioral Research'],
  },
  {
    id: 'secops',
    label: 'Security Operations (SOC)',
    short: 'SOC',
    question: 'How do operational controls support organizational security?',
    description: 'A focused security operations portfolio grounded in readiness assessment and control evidence.',
    focus: ['SOC 2 Type II Readiness', 'Trust Services Criteria', 'Common Criteria CC1–CC9'],
  },
]

export type Project = {
  title: string
  pillar: PillarId
  type: string
  summary: string
  approach?: string[]
  deliverables?: string[]
  tools?: string[]
}

export const projects: Project[] = [
  {
    title: 'ISO/IEC 27001:2022 ISMS - NexaTech Solutions',
    pillar: 'grc',
    type: 'Information Security Management System project',
    summary: 'Built a complete Information Security Management System (ISMS) for a 120-person software company. Conducted a 5x5 risk assessment, mapped 20+ Annex A controls, performed an internal audit that identified three control failures, and produced a Statement of Applicability (SoA).',
  },
  {
    title: 'Privacy Policy, Information Security Policy & Security Awareness Training Program',
    pillar: 'grc',
    type: 'GRC documentation project',
    summary: 'Designed and implemented three enterprise-level GRC foundational documents from the ground up, including a Privacy Policy, Information Security Policy, and Security Awareness Training Program. The project demonstrates initiative, regulatory awareness, and security documentation expertise.',
  },
  {
    title: 'PCI DSS v4.0 Compliance Assessment',
    pillar: 'grc',
    type: 'Assessment for a fictional healthcare organization',
    summary: 'Conducted a comprehensive PCI DSS v4.0 compliance assessment for a fictional healthcare organization, evaluating all 12 requirements, identifying critical gaps, and developing a prioritized remediation roadmap to support achieving compliance.',
  },
  {
    title: 'NIST AI Risk Management Framework (AI RMF) - NexaHealth',
    pillar: 'grc',
    type: 'AI governance and risk project',
    summary: 'Applied the GOVERN, MAP, MEASURE, and MANAGE functions to a healthcare AI diagnostics system. Identified eight AI-specific risks, measured a 7.2% demographic accuracy gap, and built a risk treatment plan that blocks deployment until the identified bias is remediated.',
  },
  {
    title: 'Dark Patterns & Consent',
    pillar: 'grc',
    type: 'Applied Research Project',
    summary: 'Investigated how dark patterns and cognitive biases can influence healthcare privacy decisions. Analyzed consent interfaces, default settings, friction, and information asymmetry to identify human-centered privacy and regulatory risks involving sensitive health data.',
  },
  {
    title: 'AI Companion Attachment and Disclosure Risk',
    pillar: 'human',
    type: 'Cyber psychology research project',
    summary: 'Researched how repeated interactions with AI companions may influence emotional trust, attachment, and willingness to disclose information. Analyzed psychological drivers of AI-enabled oversharing and documented organizational data exposure incidents. Developed cybersecurity-focused recommendations addressing AI disclosure risk, including behavioral interventions, user awareness strategies, and organizational controls designed to interrupt sensitive data disclosures at the point of interaction.',
  },
  {
    title: 'Deepfake Trust & Remote Work: Synthetic Media Security Psychology',
    pillar: 'human',
    type: 'Applied Research Project · Real-world case and fictional scenario',
    summary: 'Built a five-part psychological framework examining why deepfake-enabled fraud can succeed in remote work settings. The framework addresses truth-default theory, modality trust heuristics, authority and urgency amplification, divided attention in remote work, and overconfidence associated with invoice and face recognition. Analyzed the real $25.6 million ARUP deepfake CFO fraud case and applied the findings to a fictional organizational scenario, producing a stage-by-stage manipulation analysis and verification-focused security recommendations.',
  },
  {
    title: 'Social Media & Cybersecurity Behavioral Research Report',
    pillar: 'human',
    type: 'Applied Research Project',
    summary: 'Analyzed five behavioral drivers of social media security risk: oversharing, social proof, password reuse, convenience, and warning fatigue. Translated each behavioral driver into specific individual and organizational risk-reduction recommendations.',
  },
  {
    title: 'Cybersecurity Awareness Campaign: "Why People Click"',
    pillar: 'human',
    type: 'Applied Research Project',
    summary: 'Designed a behavior-based cybersecurity awareness program including a training presentation, one-page infographic, facilitator model, and matched pre- and post-training knowledge questionnaires. Built a four-week rollout plan with measurable indicators.',
  },
  {
    title: 'Vibe Coding & the Trust Gap: AI-Generated Code Security Psychology',
    pillar: 'human',
    type: 'Applied Research Project · Fictional healthcare scenario',
    summary: 'Examined developer overtrust in AI-generated code through the fluency heuristic, automation bias, and diffusion of responsibility. Applied a behavioral framework to a fictional healthcare data-exposure scenario and connected the psychological pattern to a realistic security consequence.',
  },
  {
    title: 'Phishing & Social Engineering Behavioral Study',
    pillar: 'human',
    type: 'Applied Research Project · Fictional healthcare organization',
    summary: 'Developed a seven-principle behavioral framework covering urgency, authority, fear, curiosity, familiarity, reward, and social pressure. Designed a five-message simulated phishing campaign for a fictional healthcare organization and mapped each message to the psychological principle and cognitive mechanism being exploited.',
  },
  {
    title: 'Surveillance Awareness and Behavior Change',
    pillar: 'human',
    type: 'Cyber Psychology Portfolio Project',
    summary: 'Examined how awareness of digital monitoring can affect employee behavior and communication. Applied the chilling effect and panopticon theories to assess self-censorship, insider-risk behavior, and the limitations of surveillance-based security controls.',
  },
  {
    title: 'SOC 2 Type II Readiness Assessment - CloudVault SaaS',
    pillar: 'secops',
    type: 'Simulated Project',
    summary: 'Scoped four Trust Services Criteria and mapped all nine Common Criteria controls (CC1-CC9). Built a 12-month audit evidence package across eight categories and documented procedures within a simulated SOC 2 Type II readiness assessment.',
  },
]

export const skills: { pillar: PillarId; items: string[] }[] = [
  { pillar: 'grc', items: ['GRC & Cybersecurity Risk Management', 'ISO/IEC 27001', 'ISO/IEC 42001 AI Governance', 'PCI DSS', 'NIST AI Risk Management Framework (AI RMF)', 'SOC 2', 'Privacy & Information Security', 'AI Governance'] },
  { pillar: 'human', items: ['Cyber Psychology & Human Factors', 'Security Awareness', 'Social Engineering'] },
  { pillar: 'secops', items: ['Security Operations / SOC'] },
]

export const education: { degree: string; field: string; status: 'Completed' | 'In Progress' }[] = [
  { degree: "Associate's", field: 'Cybersecurity', status: 'Completed' },
  { degree: "Bachelor's", field: 'Psychology', status: 'In Progress' },
]

export const certifications: { name: string; year: string; pillar: PillarId }[] = [
  { name: 'Security Operations Center Specialist (SOC)', year: '2023', pillar: 'secops' },
  { name: 'ISO/IEC 42001 AI Governance', year: '2026', pillar: 'grc' },
  { name: 'HIPAA Compliance Training Program', year: '2026', pillar: 'grc' },
]

export const contactLocation = 'Benton Harbor, Michigan'
export const resumeRequestEmail = ''
export const socialLinks: { label: string; href: string }[] = []

export const profileLinks = { contactLocation, resumeRequestEmail, socialLinks }

export const profileEmail = ''
export const profileLinkedin = ''
export const profileGithub = ''

export const profileMeta = profileLinks

export const siteNote = 'Projects are lab, simulated, applied research, portfolio, or academic work as labeled.'
