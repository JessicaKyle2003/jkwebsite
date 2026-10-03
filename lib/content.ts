// Edit this file to personalize the site. Anything in [brackets] is a placeholder.

export const profile = {
  name: 'Jessica Kyle',
  initials: 'JK',
  title: 'Cybersecurity Professional',
  tagline: 'GRC & Risk · Cyber Psychology & Human Factors · Security Operations',
  summary:
    'I approach security as a system of policies, people, and technology. I connect governance and risk frameworks to the human behaviors that make them work, and to the operational controls that detect and respond when they fail.',
  location: 'Benton Harbor, Michigan',
  availability: 'Open to cybersecurity opportunities',
  email: 'you@example.com',
  linkedin: 'https://www.linkedin.com/in/your-profile',
  github: 'https://github.com/your-username',
  // Put your résumé PDF in the /public folder and set its filename here, e.g. 'resume.pdf'.
  // Leave empty to show a "Request résumé" email button instead.
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
    question: 'What could go wrong, and how much does it matter?',
    description:
      'Translating business objectives into measurable security requirements: identifying risk, mapping controls to frameworks, governing emerging AI systems, and communicating priorities to decision-makers.',
    focus: [
      'Risk assessment & risk registers',
      'Control mapping to NIST CSF & ISO/IEC 27001',
      'AI governance & ISO/IEC 42001',
      'Policy writing & compliance readiness',
    ],
  },
  {
    id: 'human',
    label: 'Cyber Psychology & Human Factors',
    short: 'Human Factors',
    question: 'Why do people click, share, or bypass controls?',
    description:
      'Applying psychology to security: understanding social engineering, decision-making under pressure, and security culture, then designing awareness programs that change behavior rather than just checking a box.',
    focus: [
      'Social engineering & phishing analysis',
      'Security awareness program design',
      'Security culture measurement',
      'Usable security principles',
    ],
  },
  {
    id: 'secops',
    label: 'Security Operations (SOC)',
    short: 'SOC',
    question: 'How do we detect it, contain it, and learn from it?',
    description:
      'Monitoring, detection, and response: analyzing logs and alerts, mapping adversary behavior to MITRE ATT&CK, and following structured incident response processes.',
    focus: [
      'Log analysis & SIEM fundamentals',
      'Detection mapped to MITRE ATT&CK',
      'Incident response playbooks',
      'Alert triage & escalation',
    ],
  },
]

export type Project = {
  title: string
  pillar: PillarId
  type: string
  summary: string
  approach: string[]
  deliverables: string[]
  tools: string[]
  caseStudyUrl?: string
  repoUrl?: string
}

// Sample project entries. Replace them with your own work, and add caseStudyUrl / repoUrl to show links.
export const projects: Project[] = [
  {
    title: 'NIST CSF 2.0 Gap Assessment',
    pillar: 'grc',
    type: 'Simulated assessment · Fictional small healthcare clinic',
    summary:
      'Evaluated a fictional 40-person clinic against the six NIST CSF 2.0 functions to identify control gaps and produce a prioritized remediation roadmap.',
    approach: [
      'Defined scope, assets, and data flows for the scenario organization',
      'Scored current vs. target maturity for each CSF category',
      'Rated risks by likelihood and impact in a risk register',
    ],
    deliverables: ['Risk register', 'Gap analysis matrix', 'Executive summary'],
    tools: ['NIST CSF 2.0', 'Risk register', 'Excel'],
  },
  {
    title: 'AI Governance Readiness Review',
    pillar: 'grc',
    type: 'Simulated assessment · ISO/IEC 42001',
    summary:
      'Reviewed a fictional company’s use of AI tools against ISO/IEC 42001 management system requirements to outline governance gaps and next steps.',
    approach: [
      'Inventoried AI use cases and the data each one touched',
      'Mapped existing practices to ISO/IEC 42001 clauses',
      'Drafted an AI acceptable use policy and risk criteria',
    ],
    deliverables: ['AI use-case inventory', 'Clause gap checklist', 'AI acceptable use policy'],
    tools: ['ISO/IEC 42001', 'AI governance', 'Excel'],
  },
  {
    title: 'Phishing Awareness Program Design',
    pillar: 'human',
    type: 'Lab simulation · Training design',
    summary:
      'Designed a phishing simulation and follow-up training plan in an isolated lab, with a measurement framework focused on reporting rate rather than click rate alone.',
    approach: [
      'Built lure templates based on common social engineering principles',
      'Ran simulations against test accounts in a sandboxed environment',
      'Defined metrics: click rate, report rate, and time-to-report',
    ],
    deliverables: ['Campaign plan', 'Training module outline', 'Metrics dashboard mockup'],
    tools: ['GoPhish', 'Influence principles', 'Lab VMs'],
  },
  {
    title: 'Security Culture Survey Instrument',
    pillar: 'human',
    type: 'Research project · Survey design',
    summary:
      'Created a survey to measure security attitudes and behaviors across departments, grounded in behavioral models of security compliance.',
    approach: [
      'Reviewed literature on security behavior and compliance',
      'Developed Likert-scale items across attitude, norm, and behavior dimensions',
      'Outlined an analysis plan to identify high-risk behavior patterns',
    ],
    deliverables: ['Survey instrument', 'Analysis plan', 'Literature summary'],
    tools: ['Protection Motivation Theory', 'Google Forms', 'Excel'],
  },
  {
    title: 'Home SOC Detection Lab',
    pillar: 'secops',
    type: 'Hands-on lab · Virtualized environment',
    summary:
      'Built a virtual lab with a Windows domain, endpoint telemetry, and a SIEM to generate, collect, and investigate simulated attack activity.',
    approach: [
      'Deployed Active Directory, Sysmon, and log forwarding',
      'Simulated techniques with Atomic Red Team',
      'Wrote and tuned detections mapped to MITRE ATT&CK',
    ],
    deliverables: ['Lab architecture diagram', 'Detection rules', 'Investigation write-ups'],
    tools: ['Wazuh', 'Sysmon', 'Atomic Red Team', 'MITRE ATT&CK'],
  },
  {
    title: 'Ransomware Incident Response Playbook',
    pillar: 'secops',
    type: 'Tabletop exercise · Playbook',
    summary:
      'Developed a ransomware response playbook following the incident handling lifecycle, and wrote a tabletop exercise scenario to test it.',
    approach: [
      'Mapped detection, containment, eradication, and recovery steps',
      'Defined roles, escalation paths, and communication templates',
      'Wrote a tabletop scenario with injects and discussion questions',
    ],
    deliverables: ['IR playbook', 'Tabletop scenario', 'After-action report template'],
    tools: ['MITRE ATT&CK', 'Tabletop exercise'],
  },
]

export const skills: { pillar: PillarId; items: string[] }[] = [
  {
    pillar: 'grc',
    items: [
      'AI Governance',
      'ISO/IEC 42001',
      'NIST CSF 2.0',
      'ISO/IEC 27001',
      'CIS Controls',
      'HIPAA compliance',
      'Risk registers',
      'Policy writing',
    ],
  },
  {
    pillar: 'human',
    items: [
      'Cyber psychology',
      'Social engineering',
      'Phishing analysis',
      'Awareness training',
      'Survey design',
      'Behavioral models',
      'Security communication',
    ],
  },
  {
    pillar: 'secops',
    items: [
      'SOC operations',
      'SIEM fundamentals',
      'Log analysis',
      'Alert triage',
      'MITRE ATT&CK',
      'Incident response',
      'Linux & Windows',
    ],
  },
]

export const education: { degree: string; field: string; status: 'Completed' | 'In Progress' }[] = [
  { degree: 'Bachelor’s Degree', field: 'Psychology', status: 'In Progress' },
  { degree: 'Associate’s Degree', field: 'Cybersecurity', status: 'Completed' },
]

export const certifications: { name: string; year: string; pillar: PillarId }[] = [
  { name: 'ISO/IEC 42001 AI Governance', year: '2026', pillar: 'grc' },
  { name: 'HIPAA Compliance Training Program', year: '2026', pillar: 'grc' },
  { name: 'Security Operations Center Specialist (SOC)', year: '2023', pillar: 'secops' },
]
