import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

import * as schema from '../db/schema';

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log('Seeding database');

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: 'English',
        imageSrc: '/uk.svg',
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: 'Unit 1',
        description:
          'Introduction to Cybersecurity: Discover the essentials of cybersecurity and why it’s vital for protecting our digital lives and sensitive information.',
        order: 1,
      },
      {
        id: 2,
        courseId: 1,
        title: 'Unit 2',
        description:
          'Understanding Threats: Learn about various cyber threats, from hackers to malware, and how they can impact individuals and organizations.',
        order: 2,
      },
      {
        id: 3,
        courseId: 1,
        title: 'Unit 3',
        description:
          'Network Security: Explore the strategies and tools used to protect networks from unauthorized access and attacks.',
        order: 3,
      },
      {
        id: 4,
        courseId: 1,
        title: 'Unit 4',
        description:
          'Cryptography Basics: Delve into the art of encrypting information to keep communications secure from prying eyes.',
        order: 4,
      },
      {
        id: 5,
        courseId: 1,
        title: 'Unit 5',
        description:
          'Security Policies: Understand the importance of security policies and how they establish guidelines for protecting data and assets.',
        order: 5,
      },
      {
        id: 6,
        courseId: 1,
        title: 'Unit 6',
        description:
          'Ethical Hacking: Get an insight into ethical hacking, where professionals test security systems to find vulnerabilities before malicious hackers can exploit them.',
        order: 6,
      },
      {
        id: 7,
        courseId: 1,
        title: 'Unit 7',
        description:
          'Malware Analysis: Discover how to identify, analyze, and understand different types of malware and their effects on systems.',
        order: 7,
      },
      {
        id: 8,
        courseId: 1,
        title: 'Unit 8',
        description:
          'Incident Response: Learn the steps to effectively respond to and recover from cybersecurity incidents to minimize damage.',
        order: 8,
      },
      {
        id: 9,
        courseId: 1,
        title: 'Unit 9',
        description:
          'Compliance and Regulations: Understand the legal frameworks and regulations that guide cybersecurity practices in organizations.',
        order: 9,
      },
      {
        id: 10,
        courseId: 1,
        title: 'Unit 10',
        description:
          'Future Trends in Cybersecurity: Explore the emerging trends and technologies shaping the future of cybersecurity and how they will impact our safety online.',
        order: 10,
      },
    ]);

    // Insert lessons
    await db.insert(schema.lessons).values([
      // Unit 1
      { id: 1, unitId: 1, order: 1, title: 'What is Cybersecurity?' },
      { id: 2, unitId: 1, order: 2, title: 'History of Cybersecurity' },
      { id: 3, unitId: 1, order: 3, title: 'Key Concepts' },
      { id: 4, unitId: 1, order: 4, title: 'Types of Cyber Attacks' },
      { id: 5, unitId: 1, order: 5, title: 'Basic Terminology' },
      { id: 6, unitId: 1, order: 6, title: 'Cybersecurity Frameworks' },
      { id: 7, unitId: 1, order: 7, title: 'Roles in Cybersecurity' },
      { id: 8, unitId: 1, order: 8, title: 'Case Studies' },
      { id: 9, unitId: 1, order: 9, title: 'Future of Cybersecurity' },
      { id: 10, unitId: 1, order: 10, title: 'Review and Summary' },
      // Unit 2
      { id: 11, unitId: 2, order: 1, title: 'Common Threats' },
      { id: 12, unitId: 2, order: 2, title: 'Phishing Attacks' },
      { id: 13, unitId: 2, order: 3, title: 'Malware Types' },
      { id: 14, unitId: 2, order: 4, title: 'Denial of Service Attacks' },
      { id: 15, unitId: 2, order: 5, title: 'Social Engineering' },
      { id: 16, unitId: 2, order: 6, title: 'Insider Threats' },
      { id: 17, unitId: 2, order: 7, title: 'Zero-Day Exploits' },
      { id: 18, unitId: 2, order: 8, title: 'Advanced Persistent Threats' },
      { id: 19, unitId: 2, order: 9, title: 'Threat Intelligence' },
      { id: 20, unitId: 2, order: 10, title: 'Review and Summary' },
      // Unit 3
      { id: 21, unitId: 3, order: 1, title: 'Network Fundamentals' },
      { id: 22, unitId: 3, order: 2, title: 'Firewalls and Routers' },
      { id: 23, unitId: 3, order: 3, title: 'Intrusion Detection Systems' },
      { id: 24, unitId: 3, order: 4, title: 'Network Protocols' },
      { id: 25, unitId: 3, order: 5, title: 'Secure Network Design' },
      { id: 26, unitId: 3, order: 6, title: 'VPNs and Remote Access' },
      { id: 27, unitId: 3, order: 7, title: 'Network Segmentation' },
      { id: 28, unitId: 3, order: 8, title: 'Network Monitoring' },
      { id: 29, unitId: 3, order: 9, title: 'Incident Detection' },
      { id: 30, unitId: 3, order: 10, title: 'Review and Summary' },
      // Unit 4
      { id: 31, unitId: 4, order: 1, title: 'Basics of Cryptography' },
      { id: 32, unitId: 4, order: 2, title: 'Symmetric Encryption' },
      { id: 33, unitId: 4, order: 3, title: 'Asymmetric Encryption' },
      { id: 34, unitId: 4, order: 4, title: 'Public Key Infrastructure' },
      { id: 35, unitId: 4, order: 5, title: 'Cryptographic Hash Functions' },
      { id: 36, unitId: 4, order: 6, title: 'Digital Signatures' },
      { id: 37, unitId: 4, order: 7, title: 'Key Management' },
      { id: 38, unitId: 4, order: 8, title: 'Cryptographic Protocols' },
      { id: 39, unitId: 4, order: 9, title: 'Cryptography in Practice' },
      { id: 40, unitId: 4, order: 10, title: 'Review and Summary' },
      // Unit 5
      { id: 41, unitId: 5, order: 1, title: 'Creating Security Policies' },
      { id: 42, unitId: 5, order: 2, title: 'Incident Management' },
      { id: 43, unitId: 5, order: 3, title: 'Risk Management' },
      { id: 44, unitId: 5, order: 4, title: 'Data Protection Policies' },
      { id: 45, unitId: 5, order: 5, title: 'Compliance Requirements' },
      { id: 46, unitId: 5, order: 6, title: 'Security Audits' },
      { id: 47, unitId: 5, order: 7, title: 'Policy Enforcement' },
      { id: 48, unitId: 5, order: 8, title: 'Legal Considerations' },
      { id: 49, unitId: 5, order: 9, title: 'Policy Review and Updates' },
      { id: 50, unitId: 5, order: 10, title: 'Review and Summary' },
      // Unit 6
      { id: 51, unitId: 6, order: 1, title: 'Ethical Hacking Overview' },
      { id: 52, unitId: 6, order: 2, title: 'Penetration Testing' },
      { id: 53, unitId: 6, order: 3, title: 'Vulnerability Assessment' },
      { id: 54, unitId: 6, order: 4, title: 'Ethical Hacking Tools' },
      { id: 55, unitId: 6, order: 5, title: 'Legal and Ethical Issues' },
      { id: 56, unitId: 6, order: 6, title: 'Footprinting and Reconnaissance' },
      { id: 57, unitId: 6, order: 7, title: 'Scanning Networks' },
      { id: 58, unitId: 6, order: 8, title: 'Exploitation Techniques' },
      { id: 59, unitId: 6, order: 9, title: 'Post-Exploitation' },
      { id: 60, unitId: 6, order: 10, title: 'Review and Summary' },
      // Unit 7
      { id: 61, unitId: 7, order: 1, title: 'Introduction to Malware' },
      { id: 62, unitId: 7, order: 2, title: 'Malware Analysis Techniques' },
      { id: 63, unitId: 7, order: 3, title: 'Types of Malware' },
      { id: 64, unitId: 7, order: 4, title: 'Malware Removal' },
      { id: 65, unitId: 7, order: 5, title: 'Malware Prevention' },
      { id: 66, unitId: 7, order: 6, title: 'Reverse Engineering' },
      { id: 67, unitId: 7, order: 7, title: 'Behavioral Analysis' },
      { id: 68, unitId: 7, order: 8, title: 'Malware Detection Tools' },
      { id: 69, unitId: 7, order: 9, title: 'Case Studies' },
      { id: 70, unitId: 7, order: 10, title: 'Review and Summary' },
      // Unit 8
      { id: 71, unitId: 8, order: 1, title: 'Incident Response Plan' },
      { id: 72, unitId: 8, order: 2, title: 'Incident Detection' },
      { id: 73, unitId: 8, order: 3, title: 'Incident Analysis' },
      { id: 74, unitId: 8, order: 4, title: 'Incident Handling' },
      { id: 75, unitId: 8, order: 5, title: 'Post-Incident Review' },
      { id: 76, unitId: 8, order: 6, title: 'Incident Communication' },
      { id: 77, unitId: 8, order: 7, title: 'Forensic Analysis' },
      {
        id: 78,
        unitId: 8,
        order: 8,
        title: 'Legal and Regulatory Considerations',
      },
      { id: 79, unitId: 8, order: 9, title: 'Response Metrics' },
      { id: 80, unitId: 8, order: 10, title: 'Review and Summary' },
      // Unit 9
      { id: 81, unitId: 9, order: 1, title: 'Compliance Frameworks' },
      { id: 82, unitId: 9, order: 2, title: 'GDPR Compliance' },
      { id: 83, unitId: 9, order: 3, title: 'HIPAA Requirements' },
      { id: 84, unitId: 9, order: 4, title: 'PCI-DSS Standards' },
      { id: 85, unitId: 9, order: 5, title: 'Regulatory Bodies' },
      { id: 86, unitId: 9, order: 6, title: 'Compliance Audits' },
      {
        id: 87,
        unitId: 9,
        order: 7,
        title: 'Data Protection Impact Assessments',
      },
      { id: 88, unitId: 9, order: 8, title: 'Reporting and Documentation' },
      { id: 89, unitId: 9, order: 9, title: 'Compliance Strategies' },
      { id: 90, unitId: 9, order: 10, title: 'Review and Summary' },
      // Unit 10
      { id: 91, unitId: 10, order: 1, title: 'Emerging Threats' },
      { id: 92, unitId: 10, order: 2, title: 'AI and Security' },
      { id: 93, unitId: 10, order: 3, title: 'Blockchain Security' },
      { id: 94, unitId: 10, order: 4, title: 'Quantum Computing Risks' },
      { id: 95, unitId: 10, order: 5, title: 'Future Trends' },
      { id: 96, unitId: 10, order: 6, title: 'Cybersecurity Research' },
      { id: 97, unitId: 10, order: 7, title: 'Innovation in Security' },
      {
        id: 98,
        unitId: 10,
        order: 8,
        title: 'Next-Generation Security Technologies',
      },
      { id: 99, unitId: 10, order: 9, title: 'Ethical Considerations' },
      { id: 100, unitId: 10, order: 10, title: 'Review and Summary' },
    ]);

    // Lesson 1 Unit 1
    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: 'ASSIST',
        order: 1,
        question: 'What is Cybersecurity?',
      },
      {
        id: 2,
        lessonId: 1,
        type: 'SELECT',
        order: 2,
        question: 'Why is Cybersecurity important?',
      },
      {
        id: 3,
        lessonId: 1,
        type: 'ASSIST',
        order: 3,
        question: 'When did Cybersecurity become a field?',
      },
      {
        id: 4,
        lessonId: 1,
        type: 'ASSIST',
        order: 4,
        question: 'Who are the pioneers of Cybersecurity?',
      },
      {
        id: 5,
        lessonId: 1,
        type: 'SELECT',
        order: 5,
        question: 'What is a common type of Cyberattack?',
      },
      {
        id: 6,
        lessonId: 1,
        type: 'ASSIST',
        order: 6,
        question: 'What is an example of Social Engineering?',
      },
      {
        id: 7,
        lessonId: 1,
        type: 'ASSIST',
        order: 7,
        question: 'What tool is commonly used for penetration testing?',
      },
      {
        id: 8,
        lessonId: 1,
        type: 'ASSIST',
        order: 8,
        question: 'What is a Firewall?',
      },
      {
        id: 9,
        lessonId: 1,
        type: 'SELECT',
        order: 9,
        question: 'What is Phishing?',
      },
      {
        id: 10,
        lessonId: 1,
        type: 'ASSIST',
        order: 10,
        question: 'How can you protect against Cyber Threats?',
      },
    ]);

    // Lesson 1 Unit 1 Answers
    await db.insert(schema.challengeOptions).values([
      // Challenge 1
      {
        challengeId: 1,
        imageSrc: '',
        correct: false,
        text: 'The study of historical events',
        audioSrc: '',
      },
      {
        challengeId: 1,
        imageSrc: '',
        correct: false,
        text: 'The management of financial risks',
        audioSrc: '',
      },
      {
        challengeId: 1,
        imageSrc: '',
        correct: true,
        text: 'The practice of protecting systems from attacks',
        audioSrc: '',
      },
      // Challenge 2

      {
        challengeId: 2,
        imageSrc: '',
        correct: false,
        text: 'To ensure network speed',
        audioSrc: '',
      },
      {
        challengeId: 2,
        imageSrc: '',
        correct: true,
        text: 'To protect data from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 2,
        imageSrc: '',
        correct: false,
        text: 'To increase hardware efficiency',
        audioSrc: '',
      },
      // Challenge 3
      {
        challengeId: 3,
        imageSrc: '',
        correct: true,
        text: '1990s',
        audioSrc: '',
      },
      {
        challengeId: 3,
        imageSrc: '',
        correct: false,
        text: '1980s',
        audioSrc: '',
      },
      {
        challengeId: 3,
        imageSrc: '',
        correct: false,
        text: '2000s',
        audioSrc: '',
      },
      // Challenge 4
      {
        challengeId: 4,
        imageSrc: '',
        correct: true,
        text: 'Whitfield Diffie and Martin Hellman',
        audioSrc: '',
      },
      {
        challengeId: 4,
        imageSrc: '',
        correct: false,
        text: 'Alan Turing and John von Neumann',
        audioSrc: '',
      },
      {
        challengeId: 4,
        imageSrc: '',
        correct: false,
        text: 'Tim Berners-Lee and Vint Cerf',
        audioSrc: '',
      },
      // Challenge 5
      {
        challengeId: 5,
        imageSrc: '',
        correct: true,
        text: 'Phishing',
        audioSrc: '',
      },
      {
        challengeId: 5,
        imageSrc: '',
        correct: false,
        text: 'Network Virus',
        audioSrc: '',
      },
      {
        challengeId: 5,
        imageSrc: '',
        correct: false,
        text: 'Denial of Service',
        audioSrc: '',
      },
      // Challenge 6
      {
        challengeId: 6,
        imageSrc: '',
        correct: false,
        text: 'Malware Attack',
        audioSrc: '',
      },
      {
        challengeId: 6,
        imageSrc: '',
        correct: true,
        text: 'Pretexting',
        audioSrc: '',
      },

      {
        challengeId: 6,
        imageSrc: '',
        correct: false,
        text: 'Network Scanning',
        audioSrc: '',
      },
      // Challenge 7
      {
        challengeId: 7,
        imageSrc: '',
        correct: true,
        text: 'Metasploit',
        audioSrc: '',
      },
      {
        challengeId: 7,
        imageSrc: '',
        correct: false,
        text: 'Firewall',
        audioSrc: '',
      },
      {
        challengeId: 7,
        imageSrc: '',
        correct: false,
        text: 'Router',
        audioSrc: '',
      },
      // Challenge 8
      {
        challengeId: 8,
        imageSrc: '',
        correct: true,
        text: 'A network security device',
        audioSrc: '',
      },
      {
        challengeId: 8,
        imageSrc: '',
        correct: false,
        text: 'A monitoring tool',
        audioSrc: '',
      },
      {
        challengeId: 8,
        imageSrc: '',
        correct: false,
        text: 'A database management system',
        audioSrc: '',
      },

      // Challenge 9
      {
        challengeId: 9,
        imageSrc: '',
        correct: true,
        text: 'An email scam to steal information',
        audioSrc: '',
      },
      {
        challengeId: 9,
        imageSrc: '',
        correct: false,
        text: 'A type of malware that replicates itself',
        audioSrc: '',
      },
      {
        challengeId: 9,
        imageSrc: '',
        correct: false,
        text: 'A program that spies on user activities',
        audioSrc: '',
      },
      // Challenge 10
      {
        challengeId: 10,
        imageSrc: '',
        correct: true,
        text: 'Use strong passwords and update them regularly',
        audioSrc: '',
      },
      {
        challengeId: 10,
        imageSrc: '',
        correct: false,
        text: 'Install a new firewall',
        audioSrc: '',
      },
      {
        challengeId: 10,
        imageSrc: '',
        correct: false,
        text: 'Update software patches',
        audioSrc: '',
      },
    ]);

    // Lesson 2 Unit 1
    await db.insert(schema.challenges).values([
      {
        id: 11,
        lessonId: 2,
        type: 'ASSIST',
        order: 1,
        question: 'What does an Intrusion Detection System (IDS) do?',
      },
      {
        id: 12,
        lessonId: 2,
        type: 'ASSIST',
        order: 2,
        question: 'What is a VPN?',
      },
      {
        id: 13,
        lessonId: 2,
        type: 'SELECT',
        order: 3,
        question: 'What is Encryption?',
      },
      {
        id: 14,
        lessonId: 2,
        type: 'ASSIST',
        order: 4,
        question: 'What is the difference between a Virus and a Worm?',
      },
      {
        id: 15,
        lessonId: 2,
        type: 'SELECT',
        order: 5,
        question: 'What are the key components of a Security Policy?',
      },
      {
        id: 16,
        lessonId: 2,
        type: 'ASSIST',
        order: 6,
        question: 'What is a Denial of Service (DoS) attack?',
      },
      {
        id: 17,
        lessonId: 2,
        type: 'ASSIST',
        order: 7,
        question: 'What is a Zero-Day Exploit?',
      },
      {
        id: 18,
        lessonId: 2,
        type: 'SELECT',
        order: 8,
        question: 'What are the types of Malware?',
      },
      {
        id: 19,
        lessonId: 2,
        type: 'ASSIST',
        order: 9,
        question: 'What is Multi-Factor Authentication (MFA)?',
      },
      {
        id: 20,
        lessonId: 2,
        type: 'SELECT',
        order: 10,
        question: 'How does a Firewall work?',
      },
    ]);

    // Lesson 2 Unit 1 Answers
    await db.insert(schema.challengeOptions).values([
      // Challenge 11

      {
        challengeId: 11,
        imageSrc: '',
        correct: false,
        text: 'Blocks unauthorized access to a network',
        audioSrc: '',
      },
      {
        challengeId: 11,
        imageSrc: '',
        correct: true,
        text: 'Monitors network traffic for suspicious activity',
        audioSrc: '',
      },
      {
        challengeId: 11,
        imageSrc: '',
        correct: false,
        text: 'Secures a private network over a public one',
        audioSrc: '',
      },
      // Challenge 12
      {
        challengeId: 12,
        imageSrc: '',
        correct: true,
        text: 'Virtual Private Network that encrypts your connection',
        audioSrc: '',
      },
      {
        challengeId: 12,
        imageSrc: '',
        correct: false,
        text: 'System to detect suspicious network activity',
        audioSrc: '',
      },
      {
        challengeId: 12,
        imageSrc: '',
        correct: false,
        text: 'System to prevent unauthorized access',
        audioSrc: '',
      },
      // Challenge 13
      {
        challengeId: 13,
        imageSrc: '',
        correct: true,
        text: 'The process of converting data into a secure format',
        audioSrc: '',
      },
      {
        challengeId: 13,
        imageSrc: '',
        correct: false,
        text: 'Reducing the size of data files',
        audioSrc: '',
      },
      {
        challengeId: 13,
        imageSrc: '',
        correct: false,
        text: 'Verifying the identity of a user',
        audioSrc: '',
      },
      // Challenge 14

      {
        challengeId: 14,
        imageSrc: '',
        correct: false,
        text: 'A Worm is a type of malware that needs user interaction',
        audioSrc: '',
      },
      {
        challengeId: 14,
        imageSrc: '',
        correct: false,
        text: 'A Trojan is a malicious program disguised as legitimate software',
        audioSrc: '',
      },
      {
        challengeId: 14,
        imageSrc: '',
        correct: true,
        text: 'A Virus requires user interaction to spread, while a Worm spreads on its own',
        audioSrc: '',
      },
      // Challenge 15
      {
        challengeId: 15,
        imageSrc: '',
        correct: true,
        text: 'Guidelines for managing security risks',
        audioSrc: '',
      },
      {
        challengeId: 15,
        imageSrc: '',
        correct: false,
        text: 'Tools used for implementing security measures',
        audioSrc: '',
      },
      {
        challengeId: 15,
        imageSrc: '',
        correct: false,
        text: 'Devices used to control network access',
        audioSrc: '',
      },
      // Challenge 16

      {
        challengeId: 16,
        imageSrc: '',
        correct: false,
        text: 'An attempt to steal sensitive information through deceit',
        audioSrc: '',
      },
      {
        challengeId: 16,
        imageSrc: '',
        correct: true,
        text: 'An attack that overwhelms a system with traffic',
        audioSrc: '',
      },
      {
        challengeId: 16,
        imageSrc: '',
        correct: false,
        text: 'Malware that encrypts data and demands a ransom',
        audioSrc: '',
      },
      // Challenge 17
      {
        challengeId: 17,
        imageSrc: '',
        correct: true,
        text: 'An exploit targeting a vulnerability that has not been patched',
        audioSrc: '',
      },
      {
        challengeId: 17,
        imageSrc: '',
        correct: false,
        text: 'A type of social engineering attack',
        audioSrc: '',
      },
      {
        challengeId: 17,
        imageSrc: '',
        correct: false,
        text: 'Malicious software designed to harm systems',
        audioSrc: '',
      },
      // Challenge 18
      {
        challengeId: 18,
        imageSrc: '',
        correct: false,
        text: 'Nmap, Wireshark, Metasploit',
        audioSrc: '',
      },
      {
        challengeId: 18,
        imageSrc: '',
        correct: true,
        text: 'Virus, Worm, Trojan, Ransomware, Spyware',
        audioSrc: '',
      },
      {
        challengeId: 18,
        imageSrc: '',
        correct: false,
        text: 'Symmetric, Asymmetric, Hashing',
        audioSrc: '',
      },

      // Challenge 19

      {
        challengeId: 19,
        imageSrc: '',
        correct: false,
        text: 'The process of verifying a user’s identity',
        audioSrc: '',
      },
      {
        challengeId: 19,
        imageSrc: '',
        correct: false,
        text: 'A network security device that filters traffic',
        audioSrc: '',
      },
      {
        challengeId: 19,
        imageSrc: '',
        correct: true,
        text: 'A security process that requires more than one form of verification',
        audioSrc: '',
      },
      // Challenge 20
      {
        challengeId: 20,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data for secure communication',
        audioSrc: '',
      },
      {
        challengeId: 20,
        imageSrc: '',
        correct: true,
        text: 'Monitors and controls incoming and outgoing network traffic',
        audioSrc: '',
      },

      {
        challengeId: 20,
        imageSrc: '',
        correct: false,
        text: 'Detects and responds to suspicious activity',
        audioSrc: '',
      },
    ]);

    console.log('Seeding Finished');
  } catch (error) {
    console.error(error);
    throw new Error('Failed to seed database');
  }
};

main();
