export interface LegalFAQ {
  q: string;
  a: string;
}

export interface LegalCategory {
  category: string;
  items: LegalFAQ[];
}

export const COOKIE_POLICY_DATA: LegalCategory[] = [
  {
    category: "Fundamental Cookie Information",
    items: [
      { q: "What exactly are cookies?", a: "Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site." },
      { q: "How does Chalky Infotech use cookies?", a: "We use cookies to improve your experience on our website, remember your preferences, provide secure login, and analyze our traffic to optimize our recruitment services." },
      { q: "Are cookies dangerous to my computer?", a: "No, cookies are not computer programs and cannot be used to circulate viruses. They are simple text files that cannot 'run' on your computer." },
      { q: "What is the legal basis for using cookies?", a: "Under GDPR and the ePrivacy Directive, we use cookies based on your explicit consent for non-essential cookies, and based on 'legitimate interest' for strictly necessary cookies." },
      { q: "What are 'First-Party' cookies?", a: "These are cookies set by Chalky Infotech directly. They are mostly used to remember your login status and site preferences." },
      { q: "What are 'Third-Party' cookies?", a: "These are cookies set by partners like Google Analytics or LinkedIn to track usage patterns or enable social sharing features." },
      { q: "How long do cookies stay on my device?", a: "It depends. 'Session' cookies expire when you close your browser, while 'Persistent' cookies remain until they expire or you delete them." },
      { q: "Can I use the website without cookies?", a: "Yes, but some features, like the job application portal or member dashboard, may not function correctly without essential cookies." },
      { q: "How do I withdraw my cookie consent?", a: "You can change your preferences at any time through our 'Cookie Settings' banner or by clearing your browser cache." },
      { q: "Does Chalky Infotech sell my cookie data?", a: "No, we never sell your cookie data to third parties. We only use it for internal analytics and service optimization." }
    ]
  },
  {
    category: "Cookie Management & Control",
    items: [
      { q: "Can I delete cookies already on my computer?", a: "Yes, you can delete cookies already on your computer by clearing your browser's history or cache." },
      { q: "Do different browsers handle cookies differently?", a: "Yes, each browser (Chrome, Safari, Firefox, Edge) has its own settings for managing cookies. We provide links to these instructions in our policy." },
      { q: "What happens if I use a private 'Incognito' window?", a: "Cookies will still be used during your session, but they will be deleted as soon as you close the private window." },
      { q: "How do I block cookies on my mobile device?", a: "Most mobile browsers have a 'Privacy' or 'Security' menu where you can disable cookies or tracking." },
      { q: "Can I use an ad-blocker to stop cookies?", a: "Many ad-blockers also block tracking cookies, providing an extra layer of privacy control." },
      { q: "What is the 'Do Not Track' (DNT) setting?", a: "DNT is a browser feature that requests websites not to track your activity. We honor DNT signals where technically possible." },
      { q: "Will clearing cookies log me out of the site?", a: "Yes, strictly necessary cookies manage your session, so clearing them will require you to log back in." },
      { q: "How often should I clear my cookies?", a: "There is no set rule, but clearing cookies every few months can help improve browser performance." },
      { q: "Can a website see cookies from another website?", a: "No, security protocols prevent websites from reading cookies set by other domains." },
      { q: "Does Chalky Infotech use cookie walls?", a: "No, we never prevent access to our basic content if you choose to reject non-essential cookies." }
    ]
  },
  {
    category: "Technical Specifications",
    items: [
      { q: "What is the maximum size of a cookie?", a: "Most browsers limit a single cookie to 4KB of data." },
      { q: "Are cookies encrypted?", a: "While the cookie itself is text, we encrypt the data stored within them to prevent tampering." },
      { q: "What is the 'SameSite' attribute?", a: "It's a security feature that controls whether cookies are sent with cross-site requests, protecting against CSRF attacks." },
      { q: "Do you use 'HttpOnly' cookies?", a: "Yes, for sensitive data like session IDs, we use HttpOnly flags to prevent access via JavaScript (XSS protection)." },
      { q: "What is the 'Secure' flag?", a: "It ensures that cookies are only transmitted over encrypted (HTTPS) connections." },
      { q: "How many cookies can a domain set?", a: "Most browsers allow up to 50-100 cookies per domain." },
      { q: "Do you use 'Local Storage' as well?", a: "Occasionally, for larger pieces of non-sensitive data that don't need to be sent to the server with every request." },
      { q: "What is a 'Web Beacon'?", a: "A small, invisible graphic used to track your interactions, often working in tandem with cookies." },
      { q: "How do cookies interact with CDNs?", a: "Our Content Delivery Network (CDN) may use cookies to route your traffic to the nearest server for faster speeds." },
      { q: "Are cookies used in your API?", a: "Our web API may use cookies for authentication tokens during your browser session." }
    ]
  },
  {
    category: "Regional & Global Standards",
    items: [
      { q: "Is your policy compliant with the UK's PECR?", a: "Yes, we adhere to the Privacy and Electronic Communications Regulations (PECR) regarding cookie consent." },
      { q: "How do you handle the CCPA in California?", a: "For US-based visitors, we provide the required 'Do Not Sell My Personal Information' options." },
      { q: "Are your practices aligned with the ePrivacy Directive?", a: "Yes, we follow the 'Cookie Law' standards used across the European Union." },
      { q: "What about the LGPD in Brazil?", a: "Our global policy architecture is designed to meet the requirements of the Brazilian General Data Protection Law." },
      { q: "Do you maintain a 'Cookie Inventory'?", a: "Yes, we conduct quarterly audits to ensure our list of active cookies is accurate and compliant." },
      { q: "Is your cookie banner mobile-friendly?", a: "Yes, our consent management platform is optimized for all screen sizes." },
      { q: "How do you handle 'GPC' (Global Privacy Control)?", a: "We are currently implementing systems to recognize GPC signals for automated opt-out." },
      { q: "Do you use cookies for child-targeted content?", a: "No, our services are for professionals and we do not knowingly target children or use cookies on child-focused content." },
      { q: "Is your cookie banner available in other languages?", a: "We can provide translated versions upon request for our global candidates." },
      { q: "Who can I contact about this policy?", a: "Our legal team is available at legal@chalkyinfotech.com for any specific compliance queries." }
    ]
  },
];

export const GDPR_COMPLIANCE_DATA: LegalCategory[] = [
  {
    category: "GDPR Fundamentals",
    items: [
      { q: "What is the GDPR?", a: "The General Data Protection Regulation (GDPR) is a legal framework that sets guidelines for the collection and processing of personal information from individuals who live in the European Union (EU)." },
      { q: "Does GDPR apply to Chalky Infotech?", a: "Yes, as we process data of candidates and clients within the EU/UK and operate globally with high data standards." },
      { q: "Who is the Data Controller?", a: "Chalky Infotech acts as the Data Controller for the personal information you provide directly to us through our website and recruitment services." },
      { q: "What is 'Personal Data'?", a: "Any information relating to an identified or identifiable natural person, such as names, emails, ID numbers, or location data." },
      { q: "What is 'Processing'?", a: "Any operation performed on personal data, such as collection, recording, organization, storage, or erasure." },
      { q: "What is the 'Lawful Basis'?", a: "GDPR requires a specific legal reason to process data. We rely on Consent, Contract, Legal Obligation, and Legitimate Interest." },
      { q: "Is Chalky Infotech registered with the ICO?", a: "Yes, we are registered with the Information Commissioner's Office in the UK as a data controller." },
      { q: "Does GDPR apply to non-EU citizens?", a: "At Chalky Infotech, we apply the same high standards of data protection to all our global candidates, regardless of their location." },
      { q: "What is a 'Data Subject'?", a: "You are the data subjectthe individual whose personal data is being processed by us." },
      { q: "How often do you update your GDPR policies?", a: "We review and update our policies annually or whenever there is a significant change in data protection laws." }
    ]
  },
  {
    category: "Lawful Processing & Consent",
    items: [
      { q: "What is 'Legitimate Interest'?", a: "It is a legal basis for processing data where the business has a valid reason that does not override the individual's rights." },
      { q: "How do you obtain valid consent?", a: "Consent must be freely given, specific, informed, and unambiguous. We use 'Opt-in' rather than 'Opt-out' models." },
      { q: "Can I see your 'Legitimate Interest Assessment' (LIA)?", a: "Summaries of our LIAs are available upon request to demonstrate our balanced approach." },
      { q: "What is 'Contractual Necessity'?", a: "When processing is essential to fulfill a contract with you, such as finding you a job after you've signed up." },
      { q: "How do you handle 'Vital Interests'?", a: "In extreme emergencies (e.g. medical crisis), we may process data to protect someone's life." },
      { q: "Do you process data for 'Public Tasks'?", a: "Generally no, as we are a private entity, but we may assist in public health or safety tasks if required by law." },
      { q: "What is a 'Processing Log'?", a: "We maintain a Record of Processing Activities (ROPA) as required by Article 30 of the GDPR." },
      { q: "Do you use 'Soft Opt-in' for marketing?", a: "Only in very limited circumstances and always with a clear and easy 'Unsubscribe' option." },
      { q: "How long is a consent valid?", a: "We refresh consent every 2 years or whenever our processing activities change significantly." },
      { q: "Is verbal consent enough?", a: "While legal, we always follow up with a digital confirmation to ensure a clear audit trail." }
    ]
  },
  {
    category: "Special Category Data",
    items: [
      { q: "Do you process 'Sensitive' personal data?", a: "Generally no. We only process health or diversity data if it is legally required for equality monitoring or disability support." },
      { q: "What is 'Special Category' data under GDPR?", a: "Data revealing racial or ethnic origin, political opinions, religious beliefs, trade union membership, or health data." },
      { q: "How do you protect sensitive data?", a: "It is subject to higher security standards, including stricter access controls and enhanced encryption." },
      { q: "Do you process criminal conviction data?", a: "Only as part of formal background verification for specific roles, and always under a specific legal basis." },
      { q: "Is my 'National Insurance Number' sensitive?", a: "Yes, we treat it with the same high level of security as special category data." },
      { q: "Do you process biometric data?", a: "Only if you use our digital identity verification tools (IDVT) for Right to Work checks." },
      { q: "Can I refuse to provide diversity data?", a: "Absolutely. Providing diversity data is always optional and has no impact on your job applications." },
      { q: "How is diversity data reported?", a: "It is anonymized and aggregated for reporting; no individual can be identified from our diversity reports." },
      { q: "Do you store health data from my CV?", a: "We recommend you don't include health data on your CV. If present, it is handled according to our sensitive data policy." },
      { q: "What is a 'DPIA' for sensitive data?", a: "A Data Protection Impact Assessment is mandatory before we start any high-risk processing of sensitive information." }
    ]
  },
  {
    category: "Global Data Transfers",
    items: [
      { q: "Does my data leave the EU/UK?", a: "Occasionally, for global roles or if our technical service providers are based internationally." },
      { q: "What are 'Standard Contractual Clauses' (SCCs)?", a: "Legal contracts approved by the EU/UK that ensure data protection standards follow the data wherever it goes." },
      { q: "What is an 'Adequacy Decision'?", a: "A status given to countries (like Canada or Japan) that are recognized as having data laws equivalent to GDPR." },
      { q: "How do you handle data transfers to the USA?", a: "We use the EU-U.S. Data Privacy Framework and SCCs to ensure equivalent protection." },
      { q: "Is my data safe in India?", a: "Yes, our Indian delivery center operates under strict SCCs and the same security policies as our UK headquarters." },
      { q: "Do you use 'Binding Corporate Rules' (BCRs)?", a: "We currently rely on SCCs as our primary mechanism for cross-border transfers within our group." },
      { q: "Can I object to my data being transferred?", a: "Yes, but this may limit our ability to represent you for international career opportunities." },
      { q: "What is 'Data Localization'?", a: "The practice of keeping data within a specific country. We use localization where required by local laws." },
      { q: "Do you audit international partners?", a: "Yes, all international sub-processors undergo a rigorous data protection audit before we share any data." },
      { q: "What is a 'Transfer Impact Assessment' (TIA)?", a: "An assessment we perform to ensure the destination country's laws don't undermine our data protection efforts." }
    ]
  },
  {
    category: "Data Subject Rights",
    items: [
      { q: "What is the Right to Access?", a: "You have the right to request a copy of the personal data we hold about you at any time." },
      { q: "What is the Right to Erasure?", a: "Also known as the 'Right to be Forgotten,' you can request that we delete your data when it is no longer needed." },
      { q: "Can I object to data processing?", a: "Yes, you have the right to object to processing based on legitimate interests or for direct marketing purposes." },
      { q: "What is Data Portability?", a: "The right to receive your data in a structured, commonly used, and machine-readable format to move it to another service." },
      { q: "Who can I contact about this policy?", a: "Our legal team is available at legal@chalkyinfotech.com for any specific compliance queries." }
    ]
  },
];

export const PRIVACY_POLICY_DATA: LegalCategory[] = [
  {
    category: "Candidate-Specific Processing",
    items: [
      { q: "How is my resume analyzed?", a: "We use a combination of expert human review and AI-assisted mapping to match your skills with job requirements." },
      { q: "Do you perform social media screening?", a: "Generally no, unless it is a specific requirement for a high-profile or sensitive role, and always within legal boundaries." },
      { q: "How long is my CV kept in your active database?", a: "We keep it active for 2 years, but you can ask us to deactivate or delete it at any time." },
      { q: "Do you share my resume without my permission?", a: "Never. We always obtain your verbal or written consent before presenting your profile to any client." },
      { q: "What feedback data do you store?", a: "We store interview feedback and assessment results to help guide your future applications." },
      { q: "Can I request my interview notes?", a: "Yes, under GDPR you have a right to access personal data, which includes certain types of interview feedback." },
      { q: "Do you use automated decision-making?", a: "No. All final hiring recommendations and placements are reviewed by our human consultants." },
      { q: "How do you handle diversity monitoring?", a: "Diversity data is collected voluntarily, stored separately, and used only for anonymized equality reporting." },
      { q: "Is my data shared with other recruitment agencies?", a: "No, we do not trade or share candidate data with other agencies unless part of a specific client-managed MSP program." },
      { q: "What happens if I apply for multiple roles?", a: "Your data is centrally managed to ensure consistency and prevent duplicate submissions to the same client." }
    ]
  },
  {
    category: "Corporate & Client Data",
    items: [
      { q: "What data do you collect from client companies?", a: "We collect business contact details, job specifications, financial information for invoicing, and organizational structure data." },
      { q: "How is client confidentiality maintained?", a: "We sign strict Non-Disclosure Agreements (NDAs) and use secure communication channels for all client data." },
      { q: "Do you store client hiring manager details?", a: "Yes, we store professional contact details to facilitate the recruitment process and relationship management." },
      { q: "Is client data stored separately from candidate data?", a: "They are stored in the same secure CRM but with strictly segregated access controls and permissions." },
      { q: "How do you handle proprietary client project data?", a: "Project-sensitive data is only shared with shortlisted candidates who have also signed an NDA." },
      { q: "Do you perform background checks on client companies?", a: "We perform standard commercial due diligence and credit checks on all new client partnerships." },
      { q: "How long is client data retained?", a: "Corporate data is retained for the duration of the partnership plus 7 years for tax and legal audit purposes." },
      { q: "Is client data shared with candidates?", a: "Only the information necessary for the candidate to evaluate the job opportunity is shared." },
      { q: "Do you use client data for marketing?", a: "We may send industry insights or service updates, which you can opt-out of at any time." },
      { q: "Who manages client data security?", a: "Our dedicated IT and compliance teams oversee the security of our entire corporate data environment." }
    ]
  },
  {
    category: "Technical Security Architecture",
    items: [
      { q: "What encryption standards do you use?", a: "We use AES-256 for data at rest and TLS 1.2+ for data in transit across all our platforms." },
      { q: "Do you have a vulnerability disclosure policy?", a: "Yes, we encourage responsible disclosure of any security concerns via our security@chalkyinfotech.com alias." },
      { q: "Is your infrastructure cloud-native?", a: "Yes, we leverage AWS and Azure's global secure infrastructure for all our data processing needs." },
      { q: "Do you use Multi-Factor Authentication (MFA)?", a: "MFA is mandatory for every employee and partner accessing our internal systems." },
      { q: "How do you prevent SQL injection and XSS?", a: "We use modern frameworks with built-in sanitization and perform regular automated security scans." },
      { q: "Do you have a disaster recovery plan?", a: "Yes, we maintain geo-redundant backups and a tested recovery plan to ensure service continuity." },
      { q: "Are your data centers physically secure?", a: "We use Tier-4 data centers with 24/7 security, biometric access, and advanced fire suppression." },
      { q: "Do you monitor for unauthorized access?", a: "Yes, we use AI-driven Intrusion Detection Systems (IDS) to monitor for suspicious activity in real-time." },
      { q: "How do you handle employee data access?", a: "Access is granted based on the 'Principle of Least Privilege' (PoLP) and is audited monthly." },
      { q: "Is your code audited for security?", a: "Yes, we perform regular static and dynamic code analysis as part of our CI/CD pipeline." }
    ]
  },
  {
    category: "Data Security & Storage",
    items: [
      { q: "How do you secure my data?", a: "We use AES-256 encryption, multi-factor authentication (MFA), and secure cloud infrastructure with 24/7 monitoring." },
      { q: "Where is my data stored?", a: "Our primary servers are located in secure AWS regions within the UK and EU to ensure compliance with data residency requirements." },
      { q: "How long do you keep candidate data?", a: "We typically keep data for 2 years since your last interaction, unless you request erasure or we are legally required to keep it longer." },
      { q: "Do you use encryption for emails?", a: "Yes, we use TLS encryption for all email communications to protect data in transit." },
      { q: "Are your staff trained in GDPR?", a: "Yes, every employee at Chalky Infotech undergoes mandatory GDPR and data security training upon joining and annually thereafter." },
      { q: "Do you conduct security audits?", a: "Yes, we perform regular internal and external security audits to identify and mitigate potential vulnerabilities." },
      { q: "What is your data breach policy?", a: "In the event of a breach, we will notify the ICO and affected individuals within 72 hours if the breach poses a risk to their rights." },
      { q: "Is paper data stored securely?", a: "We aim for a paperless environment. Any physical documents are kept in locked cabinets with restricted access and shredded when no longer needed." },
      { q: "How do you handle data backups?", a: "We perform daily encrypted backups to ensure data can be recovered in the event of a system failure." },
      { q: "Do you use a Data Protection Officer (DPO)?", a: "Yes, we have a dedicated DPO who oversees our compliance strategy and data protection activities." }
    ]
  }
];

export const TERMS_CONDITIONS_DATA: LegalCategory[] = [
  {
    category: "Agreement Fundamentals",
    items: [
      { q: "What is the scope of these terms?", a: "These terms govern your use of our website, our recruitment services, and any interaction with our consultants or systems." },
      { q: "Are these terms legally binding?", a: "Yes, by using our services, you enter into a legally binding contract with Chalky Infotech." },
      { q: "Can these terms be modified?", a: "We reserve the right to update these terms at any time. Continued use of our services constitutes acceptance of the new terms." },
      { q: "What happens if I don't agree to the terms?", a: "If you do not agree, you must immediately cease all use of our website and services." },
      { q: "Do these terms apply globally?", a: "Yes, though specific local laws may take precedence in certain jurisdictions as detailed in our 'Governing Law' section." },
      { q: "Are there separate terms for clients?", a: "Yes, clients also sign a specific 'Service Level Agreement' (SLA) that works in conjunction with these general terms." },
      { q: "What is 'Acceptance by Conduct'?", a: "Using our site or submitting a CV is considered acceptance of these terms by conduct." },
      { q: "Who can use our services?", a: "Our services are intended for professionals aged 18 and over. By using our site, you represent that you meet this requirement." },
      { q: "Is there a 'Severability' clause?", a: "Yes, if any part of these terms is found to be unenforceable, the rest of the terms remain in full effect." },
      { q: "What is the 'Entire Agreement'?", a: "These terms (and any signed contracts) represent the entire agreement between you and Chalky Infotech." }
    ]
  },
  {
    category: "Website & Portal Usage",
    items: [
      { q: "Is the website content guaranteed to be accurate?", a: "We strive for accuracy, but all content is provided 'as is' without warranty of any kind." },
      { q: "What are 'Prohibited Uses'?", a: "Illegal activity, hacking, scraping, spamming, and uploading harmful code are strictly prohibited." },
      { q: "Can I use the data on the site for my own business?", a: "No, all data on our site is proprietary and intended only for recruitment purposes." },
      { q: "Is the website always available?", a: "We aim for 99.9% uptime but do not guarantee uninterrupted access due to maintenance or external factors." },
      { q: "What happens if I find a bug on the site?", a: "Please report it to our IT team at support@chalkyinfotech.com. We do not offer bug bounties unless specified." },
      { q: "Can I link to your website?", a: "Yes, provided the link is fair, legal, and does not damage our reputation or suggest a false endorsement." },
      { q: "Do you use automated systems to monitor usage?", a: "Yes, we monitor usage patterns to ensure security and optimize performance." },
      { q: "What is the 'User Account' responsibility?", a: "You are responsible for maintaining the confidentiality of your account credentials." },
      { q: "Can you terminate my access?", a: "We reserve the right to terminate or suspend access to our site without notice for any breach of these terms." },
      { q: "Is the site content copyrighted?", a: "Yes, all text, images, and code are protected by international copyright laws." }
    ]
  },
  {
    category: "Recruitment Service Terms",
    items: [
      { q: "Is there a fee for candidates?", a: "No, our services are 100% free for job seekers. We are paid by our client organizations." },
      { q: "Do you guarantee a job placement?", a: "No, we provide the platform and connection, but the final hiring decision is made by the employer." },
      { q: "What is the 'Candidate Representation' period?", a: "Typically, we represent a candidate for a specific role for 6-12 months after the initial submission." },
      { q: "Are interview expenses covered?", a: "Generally no, unless specifically agreed upon by the hiring client in advance." },
      { q: "How do you handle 'Exclusivity'?", a: "Unless specified, our services are non-exclusive. You are free to use other agencies or apply directly." },
      { q: "What is 'Misrepresentation'?", a: "Providing false information on your CV or in interviews is a material breach and will result in immediate termination of services." },
      { q: "Do you provide career advice?", a: "Yes, but any advice provided is for informational purposes and does not constitute a guarantee of career success." },
      { q: "How are job offers managed?", a: "We act as the primary intermediary for offer negotiations to ensure clarity for both parties." },
      { q: "Can I withdraw from the process?", a: "Yes, you can withdraw your application at any time by notifying your dedicated consultant." },
      { q: "What happens if I get multiple offers?", a: "We will provide professional guidance to help you make the best choice for your career." }
    ]
  },
  {
    category: "Liability & Indemnification",
    items: [
      { q: "What is the 'Limitation of Liability'?", a: "Our total liability is limited to the maximum extent permitted by law, typically not exceeding the fees paid for the specific service." },
      { q: "Are you liable for technical errors?", a: "We are not liable for any losses caused by system downtime, data loss, or technical malfunctions." },
      { q: "Do you indemnify candidates?", a: "No, candidates are responsible for their own actions and the accuracy of the information they provide." },
      { q: "What is 'Force Majeure'?", a: "We are not liable for failure to perform due to events beyond our control (e.g. natural disasters, war, pandemics)." },
      { q: "Can I sue Chalky Infotech?", a: "Disputes must be settled via the process outlined in our 'Governing Law' and 'Dispute Resolution' sections." },
      { q: "What is the 'Indemnity' clause for clients?", a: "Clients agree to indemnify us against any claims arising from their hiring decisions or workplace safety." },
      { q: "Do you have professional insurance?", a: "Yes, we maintain comprehensive professional indemnity and public liability insurance." },
      { q: "Are you liable for candidate performance?", a: "No, we vet candidates but do not guarantee their performance once they are hired by a client." },
      { q: "What about 'Third-Party' liability?", a: "We are not responsible for the actions or content of any third-party websites linked from our platform." },
      { q: "Is there a time limit for claims?", a: "Any legal claims must be brought within 12 months of the event giving rise to the claim." }
    ]
  },
  {
    category: "Dispute Resolution & Law",
    items: [
      { q: "What is the 'Governing Law'?", a: "These terms are governed by the laws of England and Wales for UK operations, and the laws of India for Indian operations." },
      { q: "How are disputes resolved?", a: "We first attempt to resolve all disputes through good-faith negotiation and mediation." },
      { q: "Is there an 'Arbitration' clause?", a: "For large corporate contracts, we often include mandatory arbitration in a neutral jurisdiction." },
      { q: "Where is the 'Jurisdiction'?", a: "The courts of London (UK) or Bangalore (India) shall have exclusive jurisdiction depending on the entity you are contracting with." },
      { q: "Can I join a 'Class Action'?", a: "No, to the extent permitted by law, all claims must be brought individually and not as part of a class action." },
      { q: "Who pays for legal costs?", a: "The losing party is typically responsible for the reasonable legal costs of the prevailing party." },
      { q: "What is the 'Waiver' clause?", a: "A failure to enforce any part of these terms does not constitute a waiver of our right to enforce them later." },
      { q: "Are these terms available in other languages?", a: "The English version of these terms is the legally definitive version." },
      { q: "How do I report a legal concern?", a: "Please contact our legal department directly at legal@chalkyinfotech.com." },
      { q: "When was the last update?", a: "The 'Last Updated' date is clearly displayed at the bottom of the Terms & Conditions page." }
    ]
  },
];

export const RIGHT_TO_WORK_DATA: LegalCategory[] = [
  {
    category: "General RTW Knowledge",
    items: [
      { q: "What is a 'Right to Work' check?", a: "It is a mandatory legal check that an employer must perform to ensure that a prospective employee has the legal right to work in the country (e.g. UK)." },
      { q: "Why does Chalky Infotech perform RTW checks?", a: "As a recruitment partner, we are legally required to verify the eligibility of candidates before they can be placed with our clients." },
      { q: "When is the check performed?", a: "The check is performed during the onboarding phase, before the candidate begins their employment or contract." },
      { q: "Is the check required for every role?", a: "Yes, under UK law, employers must check every person they hire, regardless of their nationality or origin." },
      { q: "What happens if a candidate fails the RTW check?", a: "If a candidate cannot prove their right to work, they cannot be legally employed or placed in a role." },
      { q: "Do you store copies of RTW documents?", a: "Yes, we are legally required to keep clear copies of the verified documents for the duration of employment plus two years." },
      { q: "Is an RTW check a one-time process?", a: "For those with permanent right to work, yes. For those with time-limited visas, follow-up checks are required before the visa expires." },
      { q: "Can the check be done remotely?", a: "Yes, since 2022, the UK government allows 'Identity Document Validation Technology' (IDVT) for certain documents, which we use for remote verification." },
      { q: "Is an RTW check a background check?", a: "No, it specifically verifies your legal right to work. A background check (DBS) is a separate process." },
      { q: "What is a 'Statutory Excuse'?", a: "It is the legal protection an employer gets by correctly performing an RTW check, protecting them from civil penalties if an employee is found to be working illegally." }
    ]
  },
  {
    category: "Visa & Sponsorship Support",
    items: [
      { q: "Does Chalky Infotech provide visa sponsorship?", a: "Chalky Infotech is a recruitment partner. Sponsorship is usually provided by the end-employer (our clients)." },
      { q: "What is a 'Certificate of Sponsorship' (CoS)?", a: "A digital document assigned by a licensed employer to a foreign worker they wish to hire." },
      { q: "Can you help me find a 'Licensed Sponsor'?", a: "Yes, we work with many clients who are licensed to sponsor Skilled Worker visas." },
      { q: "What is a 'Skilled Worker Visa'?", a: "The primary UK work visa for professionals who have a job offer from a licensed sponsor." },
      { q: "How do you verify a CoS?", a: "We use the Home Office's online 'Sponsor Management System' to verify the validity of a certificate." },
      { q: "What is the 'Shortage Occupation List'?", a: "A list of roles where there is a shortage of UK workers, making it easier for international talent to get sponsorship." },
      { q: "Can I switch from a Student Visa to a Work Visa?", a: "Yes, provided you meet the requirements, we can assist in the recruitment phase of this transition." },
      { q: "What is a 'Graduate Visa'?", a: "A visa that allows international students to stay and work in the UK for 2-3 years after graduation without needing a sponsor." },
      { q: "Do you handle 'High Potential Individual' (HPI) visas?", a: "Yes, we source talent who qualify for this unsponsored visa for graduates from top global universities." },
      { q: "Can you assist with 'Global Talent' visas?", a: "We work with exceptionally talented tech professionals to help them secure the endorsements needed for this visa." }
    ]
  },
  {
    category: "Compliance & Penalties",
    items: [
      { q: "What are the penalties for illegal working?", a: "Employers can face civil penalties of up to £60,000 per illegal worker and potential criminal prosecution." },
      { q: "How does Chalky Infotech protect its clients?", a: "By conducting 100% accurate RTW checks, we provide our clients with a 'Statutory Excuse' against penalties." },
      { q: "What is a 'Closure Notice'?", a: "A notice that can be issued to a business found to be employing illegal workers, effectively shutting down the premises." },
      { q: "How long do RTW records need to be kept?", a: "For the duration of employment plus a further two years after the employee has left." },
      { q: "Do you audit your RTW processes?", a: "Yes, we conduct quarterly internal audits to ensure our verification team is following the latest Home Office guidance." },
      { q: "What is 'IDVT' compliance?", a: "It is the standard for Identity Document Validation Technology used for remote checks on British and Irish citizens." },
      { q: "How do you handle fraudulent documents?", a: "Our team is trained in document fraud detection and we use advanced scanning technology to identify counterfeits." },
      { q: "Do you report illegal working attempts?", a: "We are legally obliged to report clear cases of document fraud or identity theft to the Home Office." },
      { q: "What is the 'Employer Checking Service' (ECS)?", a: "An online service we use to verify RTW for people with outstanding Home Office applications." },
      { q: "Can a client perform their own check?", a: "Yes, many clients perform a 'double-check' on the first day, which we encourage as a best practice." }
    ]
  },
  {
    category: "Remote & Digital Verification",
    items: [
      { q: "How does the 'Liveness' check work?", a: "During a digital check, you are asked to take a selfie or perform a short action to prove you are a real person, not a photo." },
      { q: "Is digital verification as secure as a physical check?", a: "Often it is more secure, as the technology can detect micro-features in documents that are invisible to the naked eye." },
      { q: "Can I use my smartphone for the check?", a: "Yes, our digital verification platform is fully mobile-responsive and easy to use on any modern smartphone." },
      { q: "What if my camera is broken?", a: "You will need to use a different device or arrange for a physical document check at one of our hubs." },
      { q: "Is the digital check GDPR compliant?", a: "Yes, the data is encrypted and used specifically for the purpose of RTW verification." },
      { q: "How long does the digital check take?", a: "Most candidates complete the digital check in less than 5 minutes." },
      { q: "Can I use a digital check if I'm outside the UK?", a: "Yes, it is designed to facilitate global hiring and remote onboarding." },
      { q: "What documents CANNOT be checked digitally?", a: "Certain older documents or specific visa types may still require a physical, in-person check." },
      { q: "Who provides the digital verification technology?", a: "We partner with government-certified Identity Service Providers (IDSPs)." },
      { q: "What happens if the technology fails?", a: "Our manual verification team will step in to complete the check via a video call and physical document review." }
    ]
  },
  {
    category: "Document Requirements",
    items: [
      { q: "What documents are acceptable for RTW?", a: "A valid British or Irish passport is the most common. For other nationalities, a Biometric Residence Permit (BRP) or a share code is usually required." },
      { q: "Can I use an expired passport for RTW?", a: "A current passport is preferred, but an expired British or Irish passport can still be used to prove right to work." },
      { q: "What is a 'Share Code'?", a: "It is a 9-character code generated by the Home Office website that allows us to view your right to work status online." },
      { q: "Is a Birth Certificate sufficient?", a: "A UK birth certificate can be used, but it must be accompanied by an official document showing your permanent National Insurance number." },
      { q: "Do you accept digital copies of documents?", a: "We must see the original physical documents or use an approved digital verification service (IDVT) for certain roles." },
      { q: "Can I use a driving license for RTW?", a: "No, a driving license does not prove nationality or right to work in the UK." },
      { q: "What if my name is different on my documents?", a: "You must provide further evidence of the name change, such as a marriage certificate or deed poll." },
      { q: "Do I need to provide my National Insurance number?", a: "Yes, it is often required alongside other documents to confirm your identity and tax status." },
      { q: "What documents are needed for EU citizens?", a: "Since Brexit, most EU citizens must provide a share code showing their 'Settled' or 'Pre-Settled' status under the EUSS." },
      { q: "Can I use a Visa sticker in my passport?", a: "Yes, provided the visa is valid and the passport has not expired (for non-EEA citizens)." }
    ]
  }
];

export const VERIFICATION_DATA: LegalCategory[] = [
  {
    category: "Verification Overview",
    items: [
      { q: "What is 'Background Verification'?", a: "It is the process of verifying a candidate's professional history, educational qualifications, and criminal record before they start a role." },
      { q: "Why is verification necessary?", a: "It ensures the safety, security, and integrity of our clients' teams and prevents fraudulent applications." },
      { q: "Who pays for the background check?", a: "In most cases, Chalky Infotech or our clients cover the cost of the standard background verification process." },
      { q: "What level of check do you perform?", a: "It depends on the role. We offer Basic, Standard, and Enhanced checks, including specialized financial or security vetting where required." },
      { q: "Do you perform international background checks?", a: "Yes, we have a global network of partners capable of conducting verification in over 150 countries." },
      { q: "How long does verification take?", a: "A standard UK check typically takes 5 to 10 business days. International checks can take 2 to 4 weeks depending on the jurisdiction." },
      { q: "What is a DBS check?", a: "It is a criminal record check conducted by the Disclosure and Barring Service in the UK." },
      { q: "Can I start work before verification is complete?", a: "This depends on the client's policy. Some allow a 'provisional' start, while others require full clearance first." },
      { q: "Will I be notified of the results?", a: "Yes, you will receive a copy of your report or be notified if any discrepancies are found." },
      { q: "Can I dispute the findings of a check?", a: "Yes, if you believe a report is inaccurate, you have the right to provide evidence to correct the information." }
    ]
  },
  {
    category: "DBS & Criminal Record Checks",
    items: [
      { q: "What is a 'Basic' DBS check?", a: "It shows unspent criminal convictions and cautions under the Rehabilitation of Offenders Act 1974." },
      { q: "What is a 'Standard' DBS check?", a: "Used for certain regulated roles, showing spent and unspent convictions, cautions, reprimands, and final warnings." },
      { q: "What is an 'Enhanced' DBS check?", a: "Includes everything in a standard check plus any relevant information held by local police." },
      { q: "Do you check the 'Barred Lists'?", a: "For roles involving children or vulnerable adults, we check the lists of individuals barred from working with those groups." },
      { q: "Can I use my own DBS certificate?", a: "If you are on the 'DBS Update Service,' we can use your existing certificate to perform an instant check." },
      { q: "How long is a DBS check valid?", a: "Technically, it is only accurate as of the date of issue. Most clients require a refresh every 1 to 3 years." },
      { q: "What is the 'Rehabilitation of Offenders Act'?", a: "A law that allows certain convictions to become 'spent' after a period of time, meaning they don't have to be disclosed for most jobs." },
      { q: "Do you conduct 'Credit Checks'?", a: "Only for roles in the financial sector or positions involving high levels of financial responsibility." },
      { q: "What is a 'CIFAS' check?", a: "A check against the national fraud database, typically used for roles in banking and insurance." },
      { q: "How do you handle 'Spent' convictions?", a: "Unless a role is exempt (e.g. teaching, medicine), we do not take spent convictions into account during our evaluation." }
    ]
  },
  {
    category: "International Vetting Standards",
    items: [
      { q: "How do you verify history in countries like India or the USA?", a: "We work with local agents who have direct access to regional records and educational institutions in those countries." },
      { q: "What is a 'Letter of Good Conduct'?", a: "An official document from a foreign police force confirming a candidate's criminal record status while they lived abroad." },
      { q: "Do you translate foreign documents?", a: "Yes, we use certified translators to ensure that foreign degrees and references are accurately interpreted." },
      { q: "Are international checks more expensive?", a: "They can be, depending on the country's local fees. We provide a transparent quote for any international vetting requirements." },
      { q: "What is the 'Right to Privacy' in international vetting?", a: "We adhere to the privacy laws of both the candidate's home country and the destination country during our global vetting process." },
      { q: "How do you verify 'Sanctions List' status?", a: "We check candidates against global financial and political sanctions lists (e.g. OFAC, HM Treasury) for high-level roles." },
      { q: "Do you check 'Politically Exposed Person' (PEP) status?", a: "Yes, for senior financial or government-adjacent roles, we identify if a candidate is a PEP or a close associate of one." },
      { q: "What is the 'Apostille' process?", a: "A form of international authentication that validates a document for use in another country, which we can coordinate if needed." },
      { q: "How do you handle different 'Naming Conventions' globally?", a: "Our team is trained to recognize different cultural naming formats to ensure accurate identification across global databases." },
      { q: "Do you provide 'Right of Residence' verification internationally?", a: "Yes, we verify legal residency status as part of our global recruitment and compliance service." }
    ]
  },
  {
    category: "Reference & Integrity Vetting",
    items: [
      { q: "What is an 'Integrity Interview'?", a: "A specialized interview technique used to assess a candidate's honesty and alignment with ethical standards." },
      { q: "How do you handle 'Conflicting' references?", a: "If two references provide conflicting information, we will investigate further and give the candidate an opportunity to explain the discrepancy." },
      { q: "What is 'Degree Fraud' detection?", a: "We use advanced tools to identify fake certificates and unaccredited 'degree mills' that sell fraudulent qualifications." },
      { q: "Do you check 'Professional Body' memberships?", a: "Yes, we verify that candidates are active members of relevant bodies like the BCS, IEEE, or GMC." },
      { q: "What is 'Director' disqualification screening?", a: "A check to ensure a candidate has not been banned from acting as a company director." },
      { q: "How do you handle 'Self-Employed' references?", a: "We verify self-employment through tax records, client contracts, or references from their professional accountants." },
      { q: "What is 'Social Media Vetting' policy?", a: "We only conduct social media reviews if explicitly requested for a role, and we only look for public content that would pose a significant risk." },
      { q: "Can a bad credit score stop me from getting a job?", a: "Only if the role involves financial management and the client's policy specifically prohibits it. For most tech roles, it has no impact." },
      { q: "How do you verify 'Project' success?", a: "We ask for specific KPIs or outcomes during our technical interviews and cross-reference these during the referencing stage where possible." },
      { q: "What is the 'Chalky Integrity' guarantee?", a: "It is our promise to our clients that every candidate we present has been vetted to the highest standards of truth and professionalism." }
    ]
  },
  {
    category: "Education & Employment",
    items: [
      { q: "How do you verify my employment history?", a: "We contact the HR departments or authorized representatives of your previous employers directly to verify dates and titles." },
      { q: "Can you use my personal references?", a: "We typically require official HR references, but we may use professional references for soft-skill assessments." },
      { q: "How do you verify my degree?", a: "We use primary-source verification, contacting the university directly or using an approved verification database." },
      { q: "What if my previous company has closed down?", a: "We will ask for alternative proof, such as P60s, pay slips, or a contract of employment from that period." },
      { q: "Do you check my professional certifications?", a: "Yes, we verify all certifications (e.g. AWS, ACCA, PRINCE2) with the relevant awarding bodies." },
      { q: "How many years of history do you check?", a: "A standard check usually covers the last 3 to 5 years. Executive roles may require a 10-year or full-career history check." },
      { q: "What if there are gaps in my employment?", a: "We will ask you to provide a brief explanation and sometimes evidence (e.g. travel documents or study proof) for gaps over 3 months." },
      { q: "Do you check my social media?", a: "We generally do not conduct social media screening unless it is a specific requirement for a high-profile or sensitive role." },
      { q: "How do you handle confidential current employment?", a: "We will never contact your current employer without your explicit permission, usually only after an offer has been accepted." },
      { q: "What is 'Adverse Media' screening?", a: "It is a check for any negative mentions of a candidate in public news sources, typically used for executive or financial roles." }
    ]
  }
];
