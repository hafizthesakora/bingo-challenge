import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

import * as schema from '../db/schema';

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log('Seeding database');

    // await db.delete(schema.courses);
    // await db.delete(schema.userProgress);
    // await db.delete(schema.units);
    // await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    // await db.delete(schema.challengeProgress);

    // await db.insert(schema.courses).values([
    //   {
    //     id: 1,
    //     title: 'English',
    //     imageSrc: '/uk.svg',
    //   },
    // ]);

    // await db.insert(schema.units).values([
    //   {
    //     id: 1,
    //     courseId: 1,
    //     title: 'Unit 1',
    //     description:
    //       'Introduction to Cybersecurity: Discover the essentials of cybersecurity and why it’s vital for protecting our digital lives and sensitive information.',
    //     order: 1,
    //   },
    //   {
    //     id: 2,
    //     courseId: 1,
    //     title: 'Unit 2',
    //     description:
    //       'Understanding Threats: Learn about various cyber threats, from hackers to malware, and how they can impact individuals and organizations.',
    //     order: 2,
    //   },
    //   {
    //     id: 3,
    //     courseId: 1,
    //     title: 'Unit 3',
    //     description:
    //       'Network Security: Explore the strategies and tools used to protect networks from unauthorized access and attacks.',
    //     order: 3,
    //   },
    //   {
    //     id: 4,
    //     courseId: 1,
    //     title: 'Unit 4',
    //     description:
    //       'Cryptography Basics: Delve into the art of encrypting information to keep communications secure from prying eyes.',
    //     order: 4,
    //   },
    //   {
    //     id: 5,
    //     courseId: 1,
    //     title: 'Unit 5',
    //     description:
    //       'Security Policies: Understand the importance of security policies and how they establish guidelines for protecting data and assets.',
    //     order: 5,
    //   },
    //   {
    //     id: 6,
    //     courseId: 1,
    //     title: 'Unit 6',
    //     description:
    //       'Ethical Hacking: Get an insight into ethical hacking, where professionals test security systems to find vulnerabilities before malicious hackers can exploit them.',
    //     order: 6,
    //   },
    //   {
    //     id: 7,
    //     courseId: 1,
    //     title: 'Unit 7',
    //     description:
    //       'Malware Analysis: Discover how to identify, analyze, and understand different types of malware and their effects on systems.',
    //     order: 7,
    //   },
    //   {
    //     id: 8,
    //     courseId: 1,
    //     title: 'Unit 8',
    //     description:
    //       'Incident Response: Learn the steps to effectively respond to and recover from cybersecurity incidents to minimize damage.',
    //     order: 8,
    //   },
    //   {
    //     id: 9,
    //     courseId: 1,
    //     title: 'Unit 9',
    //     description:
    //       'Compliance and Regulations: Understand the legal frameworks and regulations that guide cybersecurity practices in organizations.',
    //     order: 9,
    //   },
    //   {
    //     id: 10,
    //     courseId: 1,
    //     title: 'Unit 10',
    //     description:
    //       'Future Trends in Cybersecurity: Explore the emerging trends and technologies shaping the future of cybersecurity and how they will impact our safety online.',
    //     order: 10,
    //   },
    // ]);

    // // Insert lessons
    // await db.insert(schema.lessons).values([
    //   // Unit 1
    //   { id: 1, unitId: 1, order: 1, title: 'What is Cybersecurity?' },
    //   { id: 2, unitId: 1, order: 2, title: 'History of Cybersecurity' },
    //   { id: 3, unitId: 1, order: 3, title: 'Key Concepts' },
    //   { id: 4, unitId: 1, order: 4, title: 'Types of Cyber Attacks' },
    //   { id: 5, unitId: 1, order: 5, title: 'Basic Terminology' },
    //   { id: 6, unitId: 1, order: 6, title: 'Cybersecurity Frameworks' },
    //   { id: 7, unitId: 1, order: 7, title: 'Roles in Cybersecurity' },
    //   { id: 8, unitId: 1, order: 8, title: 'Case Studies' },
    //   { id: 9, unitId: 1, order: 9, title: 'Future of Cybersecurity' },
    //   { id: 10, unitId: 1, order: 10, title: 'Review and Summary' },
    //   // Unit 2
    //   { id: 11, unitId: 2, order: 1, title: 'Common Threats' },
    //   { id: 12, unitId: 2, order: 2, title: 'Phishing Attacks' },
    //   { id: 13, unitId: 2, order: 3, title: 'Malware Types' },
    //   { id: 14, unitId: 2, order: 4, title: 'Denial of Service Attacks' },
    //   { id: 15, unitId: 2, order: 5, title: 'Social Engineering' },
    //   { id: 16, unitId: 2, order: 6, title: 'Insider Threats' },
    //   { id: 17, unitId: 2, order: 7, title: 'Zero-Day Exploits' },
    //   { id: 18, unitId: 2, order: 8, title: 'Advanced Persistent Threats' },
    //   { id: 19, unitId: 2, order: 9, title: 'Threat Intelligence' },
    //   { id: 20, unitId: 2, order: 10, title: 'Review and Summary' },
    //   // Unit 3
    //   { id: 21, unitId: 3, order: 1, title: 'Network Fundamentals' },
    //   { id: 22, unitId: 3, order: 2, title: 'Firewalls and Routers' },
    //   { id: 23, unitId: 3, order: 3, title: 'Intrusion Detection Systems' },
    //   { id: 24, unitId: 3, order: 4, title: 'Network Protocols' },
    //   { id: 25, unitId: 3, order: 5, title: 'Secure Network Design' },
    //   { id: 26, unitId: 3, order: 6, title: 'VPNs and Remote Access' },
    //   { id: 27, unitId: 3, order: 7, title: 'Network Segmentation' },
    //   { id: 28, unitId: 3, order: 8, title: 'Network Monitoring' },
    //   { id: 29, unitId: 3, order: 9, title: 'Incident Detection' },
    //   { id: 30, unitId: 3, order: 10, title: 'Review and Summary' },
    //   // Unit 4
    //   { id: 31, unitId: 4, order: 1, title: 'Basics of Cryptography' },
    //   { id: 32, unitId: 4, order: 2, title: 'Symmetric Encryption' },
    //   { id: 33, unitId: 4, order: 3, title: 'Asymmetric Encryption' },
    //   { id: 34, unitId: 4, order: 4, title: 'Public Key Infrastructure' },
    //   { id: 35, unitId: 4, order: 5, title: 'Cryptographic Hash Functions' },
    //   { id: 36, unitId: 4, order: 6, title: 'Digital Signatures' },
    //   { id: 37, unitId: 4, order: 7, title: 'Key Management' },
    //   { id: 38, unitId: 4, order: 8, title: 'Cryptographic Protocols' },
    //   { id: 39, unitId: 4, order: 9, title: 'Cryptography in Practice' },
    //   { id: 40, unitId: 4, order: 10, title: 'Review and Summary' },
    //   // Unit 5
    //   { id: 41, unitId: 5, order: 1, title: 'Creating Security Policies' },
    //   { id: 42, unitId: 5, order: 2, title: 'Incident Management' },
    //   { id: 43, unitId: 5, order: 3, title: 'Risk Management' },
    //   { id: 44, unitId: 5, order: 4, title: 'Data Protection Policies' },
    //   { id: 45, unitId: 5, order: 5, title: 'Compliance Requirements' },
    //   { id: 46, unitId: 5, order: 6, title: 'Security Audits' },
    //   { id: 47, unitId: 5, order: 7, title: 'Policy Enforcement' },
    //   { id: 48, unitId: 5, order: 8, title: 'Legal Considerations' },
    //   { id: 49, unitId: 5, order: 9, title: 'Policy Review and Updates' },
    //   { id: 50, unitId: 5, order: 10, title: 'Review and Summary' },
    //   // Unit 6
    //   { id: 51, unitId: 6, order: 1, title: 'Ethical Hacking Overview' },
    //   { id: 52, unitId: 6, order: 2, title: 'Penetration Testing' },
    //   { id: 53, unitId: 6, order: 3, title: 'Vulnerability Assessment' },
    //   { id: 54, unitId: 6, order: 4, title: 'Ethical Hacking Tools' },
    //   { id: 55, unitId: 6, order: 5, title: 'Legal and Ethical Issues' },
    //   { id: 56, unitId: 6, order: 6, title: 'Footprinting and Reconnaissance' },
    //   { id: 57, unitId: 6, order: 7, title: 'Scanning Networks' },
    //   { id: 58, unitId: 6, order: 8, title: 'Exploitation Techniques' },
    //   { id: 59, unitId: 6, order: 9, title: 'Post-Exploitation' },
    //   { id: 60, unitId: 6, order: 10, title: 'Review and Summary' },
    //   // Unit 7
    //   { id: 61, unitId: 7, order: 1, title: 'Introduction to Malware' },
    //   { id: 62, unitId: 7, order: 2, title: 'Malware Analysis Techniques' },
    //   { id: 63, unitId: 7, order: 3, title: 'Types of Malware' },
    //   { id: 64, unitId: 7, order: 4, title: 'Malware Removal' },
    //   { id: 65, unitId: 7, order: 5, title: 'Malware Prevention' },
    //   { id: 66, unitId: 7, order: 6, title: 'Reverse Engineering' },
    //   { id: 67, unitId: 7, order: 7, title: 'Behavioral Analysis' },
    //   { id: 68, unitId: 7, order: 8, title: 'Malware Detection Tools' },
    //   { id: 69, unitId: 7, order: 9, title: 'Case Studies' },
    //   { id: 70, unitId: 7, order: 10, title: 'Review and Summary' },
    //   // Unit 8
    //   { id: 71, unitId: 8, order: 1, title: 'Incident Response Plan' },
    //   { id: 72, unitId: 8, order: 2, title: 'Incident Detection' },
    //   { id: 73, unitId: 8, order: 3, title: 'Incident Analysis' },
    //   { id: 74, unitId: 8, order: 4, title: 'Incident Handling' },
    //   { id: 75, unitId: 8, order: 5, title: 'Post-Incident Review' },
    //   { id: 76, unitId: 8, order: 6, title: 'Incident Communication' },
    //   { id: 77, unitId: 8, order: 7, title: 'Forensic Analysis' },
    //   {
    //     id: 78,
    //     unitId: 8,
    //     order: 8,
    //     title: 'Legal and Regulatory Considerations',
    //   },
    //   { id: 79, unitId: 8, order: 9, title: 'Response Metrics' },
    //   { id: 80, unitId: 8, order: 10, title: 'Review and Summary' },
    //   // Unit 9
    //   { id: 81, unitId: 9, order: 1, title: 'Compliance Frameworks' },
    //   { id: 82, unitId: 9, order: 2, title: 'GDPR Compliance' },
    //   { id: 83, unitId: 9, order: 3, title: 'HIPAA Requirements' },
    //   { id: 84, unitId: 9, order: 4, title: 'PCI-DSS Standards' },
    //   { id: 85, unitId: 9, order: 5, title: 'Regulatory Bodies' },
    //   { id: 86, unitId: 9, order: 6, title: 'Compliance Audits' },
    //   {
    //     id: 87,
    //     unitId: 9,
    //     order: 7,
    //     title: 'Data Protection Impact Assessments',
    //   },
    //   { id: 88, unitId: 9, order: 8, title: 'Reporting and Documentation' },
    //   { id: 89, unitId: 9, order: 9, title: 'Compliance Strategies' },
    //   { id: 90, unitId: 9, order: 10, title: 'Review and Summary' },
    //   // Unit 10
    //   { id: 91, unitId: 10, order: 1, title: 'Emerging Threats' },
    //   { id: 92, unitId: 10, order: 2, title: 'AI and Security' },
    //   { id: 93, unitId: 10, order: 3, title: 'Blockchain Security' },
    //   { id: 94, unitId: 10, order: 4, title: 'Quantum Computing Risks' },
    //   { id: 95, unitId: 10, order: 5, title: 'Future Trends' },
    //   { id: 96, unitId: 10, order: 6, title: 'Cybersecurity Research' },
    //   { id: 97, unitId: 10, order: 7, title: 'Innovation in Security' },
    //   {
    //     id: 98,
    //     unitId: 10,
    //     order: 8,
    //     title: 'Next-Generation Security Technologies',
    //   },
    //   { id: 99, unitId: 10, order: 9, title: 'Ethical Considerations' },
    //   { id: 100, unitId: 10, order: 10, title: 'Review and Summary' },
    // ]);

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

    //Lessom 3 Unit 1
    await db.insert(schema.challenges).values([
      {
        id: 21,
        lessonId: 3,
        type: 'SELECT',
        order: 1,
        question: 'What is a Botnet?',
      },
      {
        id: 22,
        lessonId: 3,
        type: 'SELECT',
        order: 2,
        question: 'What is Phishing?',
      },
      {
        id: 23,
        lessonId: 3,
        type: 'SELECT',
        order: 3,
        question: 'What is Ransomware?',
      },
      {
        id: 24,
        lessonId: 3,
        type: 'SELECT',
        order: 4,
        question: 'What is a Brute Force Attack?',
      },
      {
        id: 25,
        lessonId: 3,
        type: 'SELECT',
        order: 5,
        question: 'What is SQL Injection?',
      },
      {
        id: 26,
        lessonId: 3,
        type: 'SELECT',
        order: 6,
        question: 'What are Rootkits?',
      },
      {
        id: 27,
        lessonId: 3,
        type: 'SELECT',
        order: 7,
        question: 'What is Social Engineering?',
      },
      {
        id: 28,
        lessonId: 3,
        type: 'SELECT',
        order: 8,
        question: 'What is the role of Antivirus Software?',
      },
      {
        id: 29,
        lessonId: 3,
        type: 'SELECT',
        order: 9,
        question: 'What is a Trojan Horse?',
      },
      {
        id: 30,
        lessonId: 3,
        type: 'SELECT',
        order: 10,
        question: 'What is Spyware?',
      },
    ]);

    // Lesson 3 Unit 1 Answers
    await db.insert(schema.challengeOptions).values([
      // Challenge 21
      {
        challengeId: 21,
        imageSrc: '',
        correct: false,
        text: 'A self-replicating malware that spreads without user action',
        audioSrc: '',
      },
      {
        challengeId: 21,
        imageSrc: '',
        correct: true,
        text: 'A network of infected computers controlled remotely',
        audioSrc: '',
      },
      {
        challengeId: 21,
        imageSrc: '',
        correct: false,
        text: 'Malware that encrypts data and demands a ransom',
        audioSrc: '',
      },

      // Challenge 22
      {
        challengeId: 22,
        imageSrc: '',
        correct: true,
        text: 'An attempt to steal sensitive information through deception',
        audioSrc: '',
      },

      {
        challengeId: 22,
        imageSrc: '',
        correct: false,
        text: 'An attack that exploits SQL database vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 22,
        imageSrc: '',
        correct: false,
        text: 'A method of breaking passwords by trying many combinations',
        audioSrc: '',
      },
      // Challenge 23
      {
        challengeId: 23,
        imageSrc: '',
        correct: true,
        text: 'Malware that encrypts data and demands a ransom',
        audioSrc: '',
      },
      {
        challengeId: 23,
        imageSrc: '',
        correct: false,
        text: 'Software that secretly monitors user activity',
        audioSrc: '',
      },
      {
        challengeId: 23,
        imageSrc: '',
        correct: false,
        text: 'Software that delivers unwanted advertisements',
        audioSrc: '',
      },
      // Challenge 24
      {
        challengeId: 24,
        imageSrc: '',
        correct: true,
        text: 'An attack that tries multiple passwords to gain access',
        audioSrc: '',
      },
      {
        challengeId: 24,
        imageSrc: '',
        correct: false,
        text: 'An attempt to deceive and steal sensitive information',
        audioSrc: '',
      },
      {
        challengeId: 24,
        imageSrc: '',
        correct: false,
        text: 'A network of infected computers controlled remotely',
        audioSrc: '',
      },
      // Challenge 25
      {
        challengeId: 25,
        imageSrc: '',
        correct: true,
        text: 'An attack that exploits vulnerabilities in SQL databases',
        audioSrc: '',
      },
      {
        challengeId: 25,
        imageSrc: '',
        correct: false,
        text: 'An attack that uses multiple password combinations',
        audioSrc: '',
      },
      {
        challengeId: 25,
        imageSrc: '',
        correct: false,
        text: 'Malware disguised as legitimate software',
        audioSrc: '',
      },
      // Challenge 26

      {
        challengeId: 26,
        imageSrc: '',
        correct: false,
        text: 'Software that secretly monitors user activity',
        audioSrc: '',
      },
      {
        challengeId: 26,
        imageSrc: '',
        correct: true,
        text: 'Malware that allows attackers to control a system without detection',
        audioSrc: '',
      },
      {
        challengeId: 26,
        imageSrc: '',
        correct: false,
        text: 'A network of infected computers controlled remotely',
        audioSrc: '',
      },
      // Challenge 27
      {
        challengeId: 27,
        imageSrc: '',
        correct: true,
        text: 'Manipulating people into revealing confidential information',
        audioSrc: '',
      },
      {
        challengeId: 27,
        imageSrc: '',
        correct: false,
        text: 'Deceiving someone to obtain personal information',
        audioSrc: '',
      },
      {
        challengeId: 27,
        imageSrc: '',
        correct: false,
        text: 'Malware that encrypts data and demands a ransom',
        audioSrc: '',
      },
      // Challenge 28

      {
        challengeId: 28,
        imageSrc: '',
        correct: false,
        text: 'A system designed to block unauthorized access to or from a network',
        audioSrc: '',
      },
      {
        challengeId: 28,
        imageSrc: '',
        correct: false,
        text: 'A service that encrypts your internet connection',
        audioSrc: '',
      },
      {
        challengeId: 28,
        imageSrc: '',
        correct: true,
        text: 'Software that detects and removes malicious software',
        audioSrc: '',
      },
      // Challenge 29
      {
        challengeId: 29,
        imageSrc: '',
        correct: true,
        text: 'Malware disguised as legitimate software',
        audioSrc: '',
      },

      {
        challengeId: 29,
        imageSrc: '',
        correct: false,
        text: 'A type of malware that spreads on its own',
        audioSrc: '',
      },
      {
        challengeId: 29,
        imageSrc: '',
        correct: false,
        text: 'Malware that replicates itself by modifying other programs',
        audioSrc: '',
      },
      // Challenge 30
      {
        challengeId: 30,
        imageSrc: '',
        correct: true,
        text: 'Software that secretly monitors user activity',
        audioSrc: '',
      },
      {
        challengeId: 30,
        imageSrc: '',
        correct: false,
        text: 'Malware that encrypts data and demands a ransom',
        audioSrc: '',
      },
      {
        challengeId: 30,
        imageSrc: '',
        correct: false,
        text: 'Software that delivers unwanted advertisements',
        audioSrc: '',
      },
    ]);

    // Lesson 4 Unit 1
    await db.insert(schema.challenges).values([
      {
        id: 31,
        lessonId: 4,
        type: 'SELECT',
        order: 1,
        question: 'What is a Man-in-the-Middle (MitM) Attack?',
      },
      {
        id: 32,
        lessonId: 4,
        type: 'ASSIST',
        order: 2,
        question: 'What is Two-Factor Authentication (2FA)?',
      },
      {
        id: 33,
        lessonId: 4,
        type: 'ASSIST',
        order: 3,
        question: 'What is Cross-Site Scripting (XSS)?',
      },
      {
        id: 34,
        lessonId: 4,
        type: 'SELECT',
        order: 4,
        question: 'What is a Backdoor?',
      },
      {
        id: 35,
        lessonId: 4,
        type: 'ASSIST',
        order: 5,
        question: 'What is a Digital Certificate?',
      },
      {
        id: 36,
        lessonId: 4,
        type: 'SELECT',
        order: 6,
        question: 'What is Data Encryption at Rest?',
      },
      {
        id: 37,
        lessonId: 4,
        type: 'ASSIST',
        order: 7,
        question: 'What is a Honeypot?',
      },
      {
        id: 38,
        lessonId: 4,
        type: 'ASSIST',
        order: 8,
        question: 'What is a Trojan Horse?',
      },
      {
        id: 39,
        lessonId: 4,
        type: 'SELECT',
        order: 9,
        question: 'What is Malware?',
      },
      {
        id: 40,
        lessonId: 4,
        type: 'ASSIST',
        order: 10,
        question: 'What is Penetration Testing?',
      },
    ]);

    // Lesson 4 Unit 1 Ans
    await db.insert(schema.challengeOptions).values([
      // Challenge 31
      {
        challengeId: 31,
        imageSrc: '',
        correct: true,
        text: 'An attack where the attacker intercepts communication between two parties',
        audioSrc: '',
      },
      {
        challengeId: 31,
        imageSrc: '',
        correct: false,
        text: 'An attempt to steal sensitive information through deception',
        audioSrc: '',
      },
      {
        challengeId: 31,
        imageSrc: '',
        correct: false,
        text: 'A method of trying multiple password combinations',
        audioSrc: '',
      },
      // Challenge 32

      {
        challengeId: 32,
        imageSrc: '/mfa.png',
        correct: false,
        text: 'A method of using multiple factors for authentication',
        audioSrc: '',
      },
      {
        challengeId: 32,
        imageSrc: '',
        correct: true,
        text: 'A security method requiring two types of authentication',
        audioSrc: '/2fa_definition.mp3',
      },
      {
        challengeId: 32,
        imageSrc: '',
        correct: false,
        text: 'A secret word used to gain access to a system',
        audioSrc: '',
      },
      // Challenge 33
      {
        challengeId: 33,
        imageSrc: '',
        correct: true,
        text: 'A vulnerability where an attacker injects malicious scripts into webpages',
        audioSrc: '',
      },
      {
        challengeId: 33,
        imageSrc: '',
        correct: false,
        text: 'An attack that targets SQL database vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 33,
        imageSrc: '',
        correct: false,
        text: 'An attack that tries many password combinations',
        audioSrc: '',
      },
      // Challenge 34

      {
        challengeId: 34,
        imageSrc: '',
        correct: false,
        text: 'Malware that encrypts data and demands a ransom',
        audioSrc: '',
      },
      {
        challengeId: 34,
        imageSrc: '',
        correct: false,
        text: 'Software that secretly monitors user activity',
        audioSrc: '',
      },
      {
        challengeId: 34,
        imageSrc: '',
        correct: true,
        text: 'A hidden method to bypass security to gain access to a system',
        audioSrc: '',
      },
      // Challenge 35
      {
        challengeId: 35,
        imageSrc: '',
        correct: true,
        text: 'An electronic document used to prove ownership of a public key',
        audioSrc: '',
      },
      {
        challengeId: 35,
        imageSrc: '',
        correct: false,
        text: 'The process of converting data into a secure format',
        audioSrc: '',
      },
      {
        challengeId: 35,
        imageSrc: '',
        correct: false,
        text: 'A device that controls network traffic',
        audioSrc: '',
      },
      // Challenge 36
      {
        challengeId: 36,
        imageSrc: '',
        correct: true,
        text: 'Encrypting stored data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 36,
        imageSrc: '',
        correct: false,
        text: 'Encrypting data as it moves across networks',
        audioSrc: '',
      },
      {
        challengeId: 36,
        imageSrc: '',
        correct: false,
        text: 'Making copies of data to restore in case of loss',
        audioSrc: '',
      },
      // Challenge 37

      {
        challengeId: 37,
        imageSrc: '',
        correct: false,
        text: 'A device that controls network traffic',
        audioSrc: '',
      },
      {
        challengeId: 37,
        imageSrc: '',
        correct: false,
        text: 'A service that encrypts your internet connection',
        audioSrc: '',
      },
      {
        challengeId: 37,
        imageSrc: '',
        correct: true,
        text: 'A decoy system designed to lure attackers and study their methods',
        audioSrc: '',
      },
      // Challenge 38
      {
        challengeId: 38,
        imageSrc: '',
        correct: true,
        text: 'Malware disguised as legitimate software',
        audioSrc: '',
      },
      {
        challengeId: 38,
        imageSrc: '',
        correct: false,
        text: 'A self-replicating malware that spreads without user action',
        audioSrc: '',
      },
      {
        challengeId: 38,
        imageSrc: '',
        correct: false,
        text: 'Malware that infects files and replicates itself',
        audioSrc: '',
      },
      // Challenge 39
      {
        challengeId: 39,
        imageSrc: '',
        correct: false,
        text: 'Software that delivers unwanted advertisements',
        audioSrc: '',
      },
      {
        challengeId: 39,
        imageSrc: '',
        correct: true,
        text: 'Malicious software designed to harm systems',
        audioSrc: '',
      },

      {
        challengeId: 39,
        imageSrc: '',
        correct: false,
        text: 'Software that secretly monitors user activity',
        audioSrc: '',
      },
      // Challenge 40
      {
        challengeId: 40,
        imageSrc: '',
        correct: true,
        text: 'The practice of testing a system for vulnerabilities by simulating attacks',
        audioSrc: '',
      },
      {
        challengeId: 40,
        imageSrc: '',
        correct: false,
        text: 'A service that encrypts your internet connection',
        audioSrc: '',
      },
      {
        challengeId: 40,
        imageSrc: '',
        correct: false,
        text: 'A device that monitors and controls network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 5 unit 1
    await db.insert(schema.challenges).values([
      {
        id: 41,
        lessonId: 5,
        type: 'SELECT',
        order: 1,
        question: 'What is a DDoS Attack?',
      },
      {
        id: 42,
        lessonId: 5,
        type: 'ASSIST',
        order: 2,
        question: 'What is a Zero-Day Exploit?',
      },
      {
        id: 43,
        lessonId: 5,
        type: 'SELECT',
        order: 3,
        question: 'What is a Firewall?',
      },
      {
        id: 44,
        lessonId: 5,
        type: 'ASSIST',
        order: 4,
        question: 'What is Social Engineering?',
      },
      {
        id: 45,
        lessonId: 5,
        type: 'ASSIST',
        order: 5,
        question: 'What is the Dark Web?',
      },
      // {
      //   id: 46,
      //   lessonId: 5,
      //   type: 'ASSIST',
      //   order: 6,
      //   question: 'What is a VPN?',
      // },
      // {
      //   id: 47,
      //   lessonId: 5,
      //   type: 'ASSIST',
      //   order: 7,
      //   question: 'What is a Security Patch?',
      // },
      // {
      //   id: 48,
      //   lessonId: 5,
      //   type: 'SELECT',
      //   order: 8,
      //   question: 'What is Phishing?',
      // },
      // {
      //   id: 49,
      //   lessonId: 5,
      //   type: 'SELECT',
      //   order: 9,
      //   question: 'What is Malware?',
      // },
      // {
      //   id: 50,
      //   lessonId: 5,
      //   type: 'ASSIST',
      //   order: 10,
      //   question: 'What is Data Breach?',
      // },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 41
      {
        challengeId: 41,
        imageSrc: '',
        correct: true,
        text: 'An attack that overwhelms a system with traffic',
        audioSrc: '',
      },
      {
        challengeId: 41,
        imageSrc: '',
        correct: false,
        text: 'A method of breaking encryption keys',
        audioSrc: '',
      },
      {
        challengeId: 41,
        imageSrc: '',
        correct: false,
        text: 'An attack that exploits SQL vulnerabilities',
        audioSrc: '',
      },
      // Challenge 42
      {
        challengeId: 42,
        imageSrc: '',
        correct: false,
        text: 'An encrypted connection over the internet',
        audioSrc: '',
      },
      {
        challengeId: 42,
        imageSrc: '',
        correct: true,
        text: 'An exploit discovered before a patch is available',
        audioSrc: '',
      },
      {
        challengeId: 42,
        imageSrc: '',
        correct: false,
        text: 'A type of social engineering attack',
        audioSrc: '',
      },
      // Challenge 43
      {
        challengeId: 43,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
      {
        challengeId: 43,
        imageSrc: '',
        correct: true,
        text: 'A system designed to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 43,
        imageSrc: '',
        correct: false,
        text: 'An attack that floods a network with requests',
        audioSrc: '',
      },
      // Challenge 44
      {
        challengeId: 44,
        imageSrc: '',
        correct: true,
        text: 'Manipulating people to disclose confidential information',
        audioSrc: '',
      },
      {
        challengeId: 44,
        imageSrc: '',
        correct: false,
        text: 'A method of encrypting data at rest',
        audioSrc: '',
      },
      {
        challengeId: 44,
        imageSrc: '',
        correct: false,
        text: 'A form of malware that spreads through networks',
        audioSrc: '',
      },
      // Challenge 45
      {
        challengeId: 45,
        imageSrc: '',
        correct: false,
        text: 'A tool used to encrypt data transmissions',
        audioSrc: '',
      },
      {
        challengeId: 45,
        imageSrc: '',
        correct: true,
        text: 'A part of the internet not indexed by traditional search engines',
        audioSrc: '',
      },
      {
        challengeId: 45,
        imageSrc: '',
        correct: false,
        text: 'An attack where hackers gain access to system data',
        audioSrc: '',
      },
    ]);

    // Lesson 6 Unit 1
    await db.insert(schema.challenges).values([
      {
        id: 51,
        lessonId: 6,
        type: 'ASSIST',
        order: 1,
        question: 'What is a Security Vulnerability?',
      },
      {
        id: 52,
        lessonId: 6,
        type: 'ASSIST',
        order: 2,
        question: 'What is Adware?',
      },
      {
        id: 53,
        lessonId: 6,
        type: 'SELECT',
        order: 3,
        question: 'What is a Keylogger?',
      },
      {
        id: 54,
        lessonId: 6,
        type: 'ASSIST',
        order: 4,
        question: 'What is Network Sniffing?',
      },
      {
        id: 55,
        lessonId: 6,
        type: 'SELECT',
        order: 5,
        question: 'What is a Honeynet?',
      },
      {
        id: 56,
        lessonId: 6,
        type: 'ASSIST',
        order: 6,
        question: 'What is a Cybersecurity Audit?',
      },
      {
        id: 57,
        lessonId: 6,
        type: 'ASSIST',
        order: 7,
        question: 'What is a Digital Forensics Investigation?',
      },
      {
        id: 58,
        lessonId: 6,
        type: 'SELECT',
        order: 8,
        question: 'What is Privilege Escalation?',
      },
      {
        id: 59,
        lessonId: 6,
        type: 'ASSIST',
        order: 9,
        question: 'What is Endpoint Protection?',
      },
      {
        id: 60,
        lessonId: 6,
        type: 'ASSIST',
        order: 10,
        question: 'What is an Insider Threat?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 51
      {
        challengeId: 51,
        imageSrc: '',
        correct: false,
        text: 'A method of encrypting communication between endpoints',
        audioSrc: '',
      },
      {
        challengeId: 51,
        imageSrc: '',
        correct: true,
        text: 'A flaw that allows unauthorized access or actions',
        audioSrc: '',
      },
      {
        challengeId: 51,
        imageSrc: '',
        correct: false,
        text: 'A software used to monitor network traffic',
        audioSrc: '',
      },
      // Challenge 52
      {
        challengeId: 52,
        imageSrc: '',
        correct: true,
        text: 'Software that displays unwanted ads on your system',
        audioSrc: '',
      },
      {
        challengeId: 52,
        imageSrc: '',
        correct: false,
        text: 'A program that tracks your keystrokes',
        audioSrc: '',
      },
      {
        challengeId: 52,
        imageSrc: '',
        correct: false,
        text: 'A hidden method to bypass system security',
        audioSrc: '',
      },
      // Challenge 53
      {
        challengeId: 53,
        imageSrc: '',
        correct: false,
        text: 'A virus that infects a system by exploiting vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 53,
        imageSrc: '',
        correct: true,
        text: 'A type of malware that tracks keystrokes',
        audioSrc: '',
      },
      {
        challengeId: 53,
        imageSrc: '',
        correct: false,
        text: 'Software used to encrypt sensitive data',
        audioSrc: '',
      },
    ]);

    // Lesson 7 Unit 1
    await db.insert(schema.challenges).values([
      {
        id: 61,
        lessonId: 7,
        type: 'ASSIST',
        order: 1,
        question: 'What is malware analysis?',
      },
      {
        id: 62,
        lessonId: 7,
        type: 'ASSIST',
        order: 2,
        question: 'Describe reverse engineering in cybersecurity.',
      },
      {
        id: 63,
        lessonId: 7,
        type: 'ASSIST',
        order: 3,
        question:
          'Explain the significance of behavioral analysis in malware detection.',
      },
      {
        id: 64,
        lessonId: 7,
        type: 'ASSIST',
        order: 4,
        question: 'What are the main steps in malware analysis?',
      },
      {
        id: 65,
        lessonId: 7,
        type: 'ASSIST',
        order: 5,
        question: 'Identify the tools used for malware detection.',
      },
      {
        id: 66,
        lessonId: 7,
        type: 'ASSIST',
        order: 6,
        question: 'Define static and dynamic analysis in malware research.',
      },
      {
        id: 67,
        lessonId: 7,
        type: 'SELECT',
        order: 7,
        question: 'Which of these is a type of malware?',
      },
      {
        id: 68,
        lessonId: 7,
        type: 'SELECT',
        order: 8,
        question: 'Which of these techniques helps with malware prevention?',
      },
      {
        id: 69,
        lessonId: 7,
        type: 'SELECT',
        order: 9,
        question: 'Which of these is an example of reverse engineering?',
      },
      {
        id: 70,
        lessonId: 7,
        type: 'SELECT',
        order: 10,
        question: 'Which of these describes behavioral analysis?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 61 options
      {
        challengeId: 61,
        imageSrc: '',
        correct: false,
        text: 'Network monitoring',
        audioSrc: '',
      },
      {
        challengeId: 61,
        imageSrc: '',
        correct: true,
        text: 'Analyzing malware code',
        audioSrc: '',
      },
      {
        challengeId: 61,
        imageSrc: '',
        correct: false,
        text: 'User education',
        audioSrc: '',
      },

      // Challenge 62 options
      {
        challengeId: 62,
        imageSrc: '',
        correct: true,
        text: 'Patching systems',
        audioSrc: '',
      },
      {
        challengeId: 62,
        imageSrc: '',
        correct: false,
        text: 'Opening email attachments',
        audioSrc: '',
      },
      {
        challengeId: 62,
        imageSrc: '',
        correct: false,
        text: 'Disabling antivirus',
        audioSrc: '',
      },

      // Challenge 63 options
      {
        challengeId: 63,
        imageSrc: '',
        correct: true,
        text: 'Trojan',
        audioSrc: '',
      },
      {
        challengeId: 63,
        imageSrc: '',
        correct: false,
        text: 'Firewall',
        audioSrc: '',
      },
      {
        challengeId: 63,
        imageSrc: '',
        correct: false,
        text: 'VPN',
        audioSrc: '',
      },

      // Challenge 64 options
      {
        challengeId: 64,
        imageSrc: '',
        correct: true,
        text: 'Monitoring malware behavior in a sandbox',
        audioSrc: '',
      },
      {
        challengeId: 64,
        imageSrc: '',
        correct: false,
        text: 'Encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 64,
        imageSrc: '',
        correct: false,
        text: 'Conducting penetration tests',
        audioSrc: '',
      },

      // Challenge 65 options
      {
        challengeId: 65,
        imageSrc: '',
        correct: true,
        text: 'Use of static and dynamic analysis',
        audioSrc: '',
      },
      {
        challengeId: 65,
        imageSrc: '',
        correct: false,
        text: 'Only static analysis',
        audioSrc: '',
      },
      {
        challengeId: 65,
        imageSrc: '',
        correct: false,
        text: 'Only dynamic analysis',
        audioSrc: '',
      },

      // Challenge 66 options
      {
        challengeId: 66,
        imageSrc: '',
        correct: true,
        text: 'Both behavioral and static analysis',
        audioSrc: '',
      },
      {
        challengeId: 66,
        imageSrc: '',
        correct: false,
        text: 'Behavioral analysis only',
        audioSrc: '',
      },
      {
        challengeId: 66,
        imageSrc: '',
        correct: false,
        text: 'Static analysis only',
        audioSrc: '',
      },

      // Challenge 67 options
      {
        challengeId: 67,
        imageSrc: '',
        correct: false,
        text: 'Phishing',
        audioSrc: '',
      },
      {
        challengeId: 67,
        imageSrc: '',
        correct: true,
        text: 'Ransomware',
        audioSrc: '',
      },
      {
        challengeId: 67,
        imageSrc: '',
        correct: false,
        text: 'Antivirus',
        audioSrc: '',
      },

      // Challenge 68 options
      {
        challengeId: 68,
        imageSrc: '',
        correct: true,
        text: 'Regularly updating antivirus software',
        audioSrc: '',
      },
      {
        challengeId: 68,
        imageSrc: '',
        correct: false,
        text: 'Opening unknown email attachments',
        audioSrc: '',
      },
      {
        challengeId: 68,
        imageSrc: '',
        correct: false,
        text: 'Disabling firewalls',
        audioSrc: '',
      },

      // Challenge 69 options
      {
        challengeId: 69,
        imageSrc: '',
        correct: true,
        text: 'Identifying vulnerabilities in systems',
        audioSrc: '',
      },
      {
        challengeId: 69,
        imageSrc: '',
        correct: false,
        text: 'Data encryption',
        audioSrc: '',
      },
      {
        challengeId: 69,
        imageSrc: '',
        correct: false,
        text: 'Phishing campaigns',
        audioSrc: '',
      },

      // Challenge 70 options
      {
        challengeId: 70,
        imageSrc: '',
        correct: true,
        text: 'Behavioral analysis of malware',
        audioSrc: '',
      },
      {
        challengeId: 70,
        imageSrc: '',
        correct: false,
        text: 'Penetration testing',
        audioSrc: '',
      },
      {
        challengeId: 70,
        imageSrc: '',
        correct: false,
        text: 'Static analysis',
        audioSrc: '',
      },
    ]);

    // Lesson 8 Unit 1
    await db.insert(schema.challenges).values([
      {
        id: 71,
        lessonId: 8,
        type: 'ASSIST',
        order: 1,
        question:
          'What is the purpose of threat intelligence in cybersecurity?',
      },
      {
        id: 72,
        lessonId: 8,
        type: 'ASSIST',
        order: 2,
        question: 'Describe how cyberattacks are classified.',
      },
      {
        id: 73,
        lessonId: 8,
        type: 'ASSIST',
        order: 3,
        question: 'Explain how zero-day vulnerabilities work.',
      },
      {
        id: 74,
        lessonId: 8,
        type: 'ASSIST',
        order: 4,
        question: 'What is the significance of threat intelligence sharing?',
      },
      {
        id: 75,
        lessonId: 8,
        type: 'ASSIST',
        order: 5,
        question: 'Identify the different types of cyberattacks.',
      },
      {
        id: 76,
        lessonId: 8,
        type: 'ASSIST',
        order: 6,
        question: 'Define Indicators of Compromise (IoCs).',
      },
      {
        id: 77,
        lessonId: 8,
        type: 'SELECT',
        order: 7,
        question: 'Which of these is a type of cyberattack?',
      },
      {
        id: 78,
        lessonId: 8,
        type: 'SELECT',
        order: 8,
        question: 'Which of these tools is used for threat intelligence?',
      },
      {
        id: 79,
        lessonId: 8,
        type: 'SELECT',
        order: 9,
        question: 'Which of these is an example of zero-day vulnerability?',
      },
      {
        id: 80,
        lessonId: 8,
        type: 'SELECT',
        order: 10,
        question: 'Which of these describes Indicators of Compromise (IoCs)?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 71 options
      {
        challengeId: 71,
        imageSrc: '',
        correct: false,
        text: 'Encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 71,
        imageSrc: '',
        correct: true,
        text: 'Identifying potential cyber threats',
        audioSrc: '',
      },
      {
        challengeId: 71,
        imageSrc: '',
        correct: false,
        text: 'Backing up data',
        audioSrc: '',
      },

      // Challenge 72 options
      {
        challengeId: 72,
        imageSrc: '',
        correct: false,
        text: 'By their complexity',
        audioSrc: '',
      },
      {
        challengeId: 72,
        imageSrc: '',
        correct: true,
        text: 'By their method of execution',
        audioSrc: '',
      },
      {
        challengeId: 72,
        imageSrc: '',
        correct: false,
        text: 'By their origin',
        audioSrc: '',
      },

      // Challenge 73 options
      {
        challengeId: 73,
        imageSrc: '',
        correct: true,
        text: 'Exploiting unknown vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 73,
        imageSrc: '',
        correct: false,
        text: 'Brute-forcing passwords',
        audioSrc: '',
      },
      {
        challengeId: 73,
        imageSrc: '',
        correct: false,
        text: 'Sending phishing emails',
        audioSrc: '',
      },

      // Challenge 74 options
      {
        challengeId: 74,
        imageSrc: '',
        correct: true,
        text: 'Improves response to threats',
        audioSrc: '',
      },
      {
        challengeId: 74,
        imageSrc: '',
        correct: false,
        text: 'Weakens data encryption',
        audioSrc: '',
      },
      {
        challengeId: 74,
        imageSrc: '',
        correct: false,
        text: 'Decreases network traffic',
        audioSrc: '',
      },

      // Challenge 75 options
      {
        challengeId: 75,
        imageSrc: '',
        correct: true,
        text: 'Phishing, malware, DDoS',
        audioSrc: '',
      },
      {
        challengeId: 75,
        imageSrc: '',
        correct: false,
        text: 'Firewalls, encryption, VPN',
        audioSrc: '',
      },
      {
        challengeId: 75,
        imageSrc: '',
        correct: false,
        text: 'Authentication, hashing, brute force',
        audioSrc: '',
      },

      // Challenge 76 options
      {
        challengeId: 76,
        imageSrc: '',
        correct: true,
        text: 'Artifacts of security breaches',
        audioSrc: '',
      },
      {
        challengeId: 76,
        imageSrc: '',
        correct: false,
        text: 'Encryption methods',
        audioSrc: '',
      },
      {
        challengeId: 76,
        imageSrc: '',
        correct: false,
        text: 'Firewall configurations',
        audioSrc: '',
      },

      // Challenge 77 options
      {
        challengeId: 77,
        imageSrc: '',
        correct: false,
        text: 'Password reset',
        audioSrc: '',
      },
      {
        challengeId: 77,
        imageSrc: '',
        correct: true,
        text: 'Distributed Denial of Service (DDoS)',
        audioSrc: '',
      },
      {
        challengeId: 77,
        imageSrc: '',
        correct: false,
        text: 'Data encryption',
        audioSrc: '',
      },

      // Challenge 78 options
      {
        challengeId: 78,
        imageSrc: '',
        correct: true,
        text: 'STIX/TAXII',
        audioSrc: '',
      },
      {
        challengeId: 78,
        imageSrc: '',
        correct: false,
        text: 'VPN',
        audioSrc: '',
      },
      {
        challengeId: 78,
        imageSrc: '',
        correct: false,
        text: 'Firewall',
        audioSrc: '',
      },

      // Challenge 79 options
      {
        challengeId: 79,
        imageSrc: '',
        correct: true,
        text: 'An unknown flaw exploited by attackers',
        audioSrc: '',
      },
      {
        challengeId: 79,
        imageSrc: '',
        correct: false,
        text: 'A failed password attempt',
        audioSrc: '',
      },
      {
        challengeId: 79,
        imageSrc: '',
        correct: false,
        text: 'An encrypted email',
        audioSrc: '',
      },

      // Challenge 80 options
      {
        challengeId: 80,
        imageSrc: '',
        correct: true,
        text: 'Evidence of a potential attack',
        audioSrc: '',
      },
      {
        challengeId: 80,
        imageSrc: '',
        correct: false,
        text: 'A strong encryption algorithm',
        audioSrc: '',
      },
      {
        challengeId: 80,
        imageSrc: '',
        correct: false,
        text: 'Authentication methods',
        audioSrc: '',
      },
    ]);

    // Lesson 9
    await db.insert(schema.challenges).values([
      {
        id: 81,
        lessonId: 9,
        type: 'ASSIST',
        order: 1,
        question: 'Explain what ransomware is.',
      },
      {
        id: 82,
        lessonId: 9,
        type: 'ASSIST',
        order: 2,
        question: 'Describe how encryption works in ransomware attacks.',
      },
      {
        id: 83,
        lessonId: 9,
        type: 'ASSIST',
        order: 3,
        question: 'What are the consequences of ransomware attacks?',
      },
      {
        id: 84,
        lessonId: 9,
        type: 'ASSIST',
        order: 4,
        question: 'What is a ransomware decryption key?',
      },
      {
        id: 85,
        lessonId: 9,
        type: 'ASSIST',
        order: 5,
        question: 'Identify methods to prevent ransomware attacks.',
      },
      {
        id: 86,
        lessonId: 9,
        type: 'ASSIST',
        order: 6,
        question: 'Describe the role of backups in ransomware recovery.',
      },
      {
        id: 87,
        lessonId: 9,
        type: 'SELECT',
        order: 7,
        question: 'Which of these is a common form of ransomware?',
      },
      {
        id: 88,
        lessonId: 9,
        type: 'SELECT',
        order: 8,
        question: 'Which of these techniques helps prevent ransomware?',
      },
      {
        id: 89,
        lessonId: 9,
        type: 'SELECT',
        order: 9,
        question: 'Which of these describes a ransomware attack?',
      },
      {
        id: 90,
        lessonId: 9,
        type: 'SELECT',
        order: 10,
        question: 'Which of these is a recommended defense against ransomware?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 81 options
      {
        challengeId: 81,
        imageSrc: '',
        correct: true,
        text: 'A type of malware that encrypts files and demands ransom',
        audioSrc: '',
      },
      {
        challengeId: 81,
        imageSrc: '',
        correct: false,
        text: 'A method of stealing passwords',
        audioSrc: '',
      },
      {
        challengeId: 81,
        imageSrc: '',
        correct: false,
        text: 'A way to install unauthorized apps',
        audioSrc: '',
      },

      // Challenge 82 options
      {
        challengeId: 82,
        imageSrc: '',
        correct: true,
        text: 'It locks files with an encryption key',
        audioSrc: '',
      },
      {
        challengeId: 82,
        imageSrc: '',
        correct: false,
        text: 'It removes access to the system without encryption',
        audioSrc: '',
      },
      {
        challengeId: 82,
        imageSrc: '',
        correct: false,
        text: 'It duplicates the files to a remote server',
        audioSrc: '',
      },

      // Challenge 83 options
      {
        challengeId: 83,
        imageSrc: '',
        correct: false,
        text: 'Data loss',
        audioSrc: '',
      },
      {
        challengeId: 83,
        imageSrc: '',
        correct: true,
        text: 'Financial loss and system shutdown',
        audioSrc: '',
      },
      {
        challengeId: 83,
        imageSrc: '',
        correct: false,
        text: 'Data integrity compromise',
        audioSrc: '',
      },

      // Challenge 84 options
      {
        challengeId: 84,
        imageSrc: '',
        correct: false,
        text: 'A password to unlock the computer',
        audioSrc: '',
      },
      {
        challengeId: 84,
        imageSrc: '',
        correct: true,
        text: 'A key that decrypts the locked files',
        audioSrc: '',
      },
      {
        challengeId: 84,
        imageSrc: '',
        correct: false,
        text: 'A software license key',
        audioSrc: '',
      },

      // Challenge 85 options
      {
        challengeId: 85,
        imageSrc: '',
        correct: true,
        text: 'Antivirus, backups, and user awareness',
        audioSrc: '',
      },
      {
        challengeId: 85,
        imageSrc: '',
        correct: false,
        text: 'VPN, two-factor authentication',
        audioSrc: '',
      },
      {
        challengeId: 85,
        imageSrc: '',
        correct: false,
        text: 'Encryption, password policies',
        audioSrc: '',
      },

      // Challenge 86 options
      {
        challengeId: 86,
        imageSrc: '',
        correct: false,
        text: 'Backups increase the risk of ransomware',
        audioSrc: '',
      },
      {
        challengeId: 86,
        imageSrc: '',
        correct: false,
        text: 'Backups are vulnerable to ransomware encryption',
        audioSrc: '',
      },
      {
        challengeId: 86,
        imageSrc: '',
        correct: true,
        text: 'Backups help restore files without paying ransom',
        audioSrc: '',
      },

      // Challenge 87 options
      {
        challengeId: 87,
        imageSrc: '',
        correct: false,
        text: 'DDoS',
        audioSrc: '',
      },
      {
        challengeId: 87,
        imageSrc: '',
        correct: true,
        text: 'CryptoLocker',
        audioSrc: '',
      },
      {
        challengeId: 87,
        imageSrc: '',
        correct: false,
        text: 'SQL Injection',
        audioSrc: '',
      },

      // Challenge 88 options
      {
        challengeId: 88,
        imageSrc: '',
        correct: false,
        text: 'Social engineering',
        audioSrc: '',
      },
      {
        challengeId: 88,
        imageSrc: '',
        correct: true,
        text: 'Regular backups',
        audioSrc: '',
      },
      {
        challengeId: 88,
        imageSrc: '',
        correct: false,
        text: 'Brute force protection',
        audioSrc: '',
      },

      // Challenge 89 options
      {
        challengeId: 89,
        imageSrc: '',
        correct: false,
        text: 'Accessing a system remotely',
        audioSrc: '',
      },
      {
        challengeId: 89,
        imageSrc: '',
        correct: true,
        text: 'Encrypting files and demanding ransom',
        audioSrc: '',
      },
      {
        challengeId: 89,
        imageSrc: '',
        correct: false,
        text: 'Tracking user credentials',
        audioSrc: '',
      },

      // Challenge 90 options
      {
        challengeId: 90,
        imageSrc: '',
        correct: true,
        text: 'Using anti-ransomware software',
        audioSrc: '',
      },
      {
        challengeId: 90,
        imageSrc: '',
        correct: false,
        text: 'Only using strong passwords',
        audioSrc: '',
      },
      {
        challengeId: 90,
        imageSrc: '',
        correct: false,
        text: 'Disabling antivirus',
        audioSrc: '',
      },
    ]);

    // Lesson 10
    await db.insert(schema.challenges).values([
      {
        id: 91,
        lessonId: 10,
        type: 'ASSIST',
        order: 1,
        question: 'Explain what phishing is.',
      },
      {
        id: 92,
        lessonId: 10,
        type: 'ASSIST',
        order: 2,
        question: 'What is the purpose of a phishing attack?',
      },
      {
        id: 93,
        lessonId: 10,
        type: 'ASSIST',
        order: 3,
        question: 'Describe a spear phishing attack.',
      },
      {
        id: 94,
        lessonId: 10,
        type: 'ASSIST',
        order: 4,
        question: 'Identify common signs of phishing emails.',
      },
      {
        id: 95,
        lessonId: 10,
        type: 'ASSIST',
        order: 5,
        question: 'Explain how to avoid phishing attacks.',
      },
      {
        id: 96,
        lessonId: 10,
        type: 'ASSIST',
        order: 6,
        question:
          'Describe the role of multi-factor authentication (MFA) in phishing defense.',
      },
      {
        id: 97,
        lessonId: 10,
        type: 'SELECT',
        order: 7,
        question: 'Which of these is a typical phishing method?',
      },
      {
        id: 98,
        lessonId: 10,
        type: 'SELECT',
        order: 8,
        question: 'Which of these actions can prevent phishing?',
      },
      {
        id: 99,
        lessonId: 10,
        type: 'SELECT',
        order: 9,
        question: 'Which of these terms best describes a phishing scam?',
      },
      {
        id: 100,
        lessonId: 10,
        type: 'SELECT',
        order: 10,
        question: 'Which of these is a key element of phishing emails?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 91 options
      {
        challengeId: 91,
        imageSrc: '',
        correct: true,
        text: 'A social engineering attack using email or messages',
        audioSrc: '',
      },
      {
        challengeId: 91,
        imageSrc: '',
        correct: false,
        text: 'An attack on computer hardware',
        audioSrc: '',
      },
      {
        challengeId: 91,
        imageSrc: '',
        correct: false,
        text: 'A way to hack into websites',
        audioSrc: '',
      },

      // Challenge 92 options
      {
        challengeId: 92,
        imageSrc: '',
        correct: false,
        text: 'To track user activity',
        audioSrc: '',
      },
      {
        challengeId: 92,
        imageSrc: '',
        correct: true,
        text: 'To steal sensitive information',
        audioSrc: '',
      },
      {
        challengeId: 92,
        imageSrc: '',
        correct: false,
        text: 'To install software remotely',
        audioSrc: '',
      },

      // Challenge 93 options
      {
        challengeId: 93,
        imageSrc: '',
        correct: false,
        text: 'A phishing attack that affects large groups',
        audioSrc: '',
      },
      {
        challengeId: 93,
        imageSrc: '',
        correct: true,
        text: 'A targeted phishing attack on specific individuals',
        audioSrc: '',
      },
      {
        challengeId: 93,
        imageSrc: '',
        correct: false,
        text: 'A phishing attack on corporate networks',
        audioSrc: '',
      },

      // Challenge 94 options
      {
        challengeId: 94,
        imageSrc: '',
        correct: true,
        text: 'Spelling errors and suspicious links',
        audioSrc: '',
      },
      {
        challengeId: 94,
        imageSrc: '',
        correct: false,
        text: 'Fast load times and generic greeting',
        audioSrc: '',
      },
      {
        challengeId: 94,
        imageSrc: '',
        correct: false,
        text: 'Strong authentication methods',
        audioSrc: '',
      },

      // Challenge 95 options
      {
        challengeId: 95,
        imageSrc: '',
        correct: false,
        text: 'Use simple passwords',
        audioSrc: '',
      },
      {
        challengeId: 95,
        imageSrc: '',
        correct: true,
        text: 'Avoid clicking on suspicious links',
        audioSrc: '',
      },
      {
        challengeId: 95,
        imageSrc: '',
        correct: false,
        text: 'Send personal information via email',
        audioSrc: '',
      },

      // Challenge 96 options
      {
        challengeId: 96,
        imageSrc: '',
        correct: false,
        text: 'MFA replaces the need for passwords',
        audioSrc: '',
      },
      {
        challengeId: 96,
        imageSrc: '',
        correct: true,
        text: 'MFA provides an additional layer of security',
        audioSrc: '',
      },
      {
        challengeId: 96,
        imageSrc: '',
        correct: false,
        text: 'MFA only works on secure devices',
        audioSrc: '',
      },

      // Challenge 97 options
      {
        challengeId: 97,
        imageSrc: '',
        correct: true,
        text: 'Fake email from a known company',
        audioSrc: '',
      },
      {
        challengeId: 97,
        imageSrc: '',
        correct: false,
        text: 'Malware download from a website',
        audioSrc: '',
      },
      {
        challengeId: 97,
        imageSrc: '',
        correct: false,
        text: 'Data breach by hackers',
        audioSrc: '',
      },

      // Challenge 98 options
      {
        challengeId: 98,
        imageSrc: '',
        correct: false,
        text: 'Installing VPNs',
        audioSrc: '',
      },
      {
        challengeId: 98,
        imageSrc: '',
        correct: true,
        text: 'Being cautious of unknown links',
        audioSrc: '',
      },
      {
        challengeId: 98,
        imageSrc: '',
        correct: false,
        text: 'Blocking social media',
        audioSrc: '',
      },

      // Challenge 99 options
      {
        challengeId: 99,
        imageSrc: '',
        correct: true,
        text: 'Email scam seeking sensitive information',
        audioSrc: '',
      },
      {
        challengeId: 99,
        imageSrc: '',
        correct: false,
        text: 'Software manipulation attack',
        audioSrc: '',
      },
      {
        challengeId: 99,
        imageSrc: '',
        correct: false,
        text: 'Unauthorized access to networks',
        audioSrc: '',
      },

      // Challenge 100 options
      {
        challengeId: 100,
        imageSrc: '',
        correct: false,
        text: 'A request for technical support',
        audioSrc: '',
      },
      {
        challengeId: 100,
        imageSrc: '',
        correct: true,
        text: 'A sense of urgency and link to click',
        audioSrc: '',
      },
      {
        challengeId: 100,
        imageSrc: '',
        correct: false,
        text: 'A secure and reliable domain',
        audioSrc: '',
      },
    ]);

    // Lesson 11
    await db.insert(schema.challenges).values([
      {
        id: 101,
        lessonId: 11,
        type: 'ASSIST',
        order: 1,
        question: 'Define network segmentation.',
      },
      {
        id: 102,
        lessonId: 11,
        type: 'ASSIST',
        order: 2,
        question: 'Why is network segmentation important?',
      },
      {
        id: 103,
        lessonId: 11,
        type: 'ASSIST',
        order: 3,
        question: 'Explain the concept of VLANs.',
      },
      {
        id: 104,
        lessonId: 11,
        type: 'ASSIST',
        order: 4,
        question: 'Describe the role of firewalls in segmentation.',
      },
      {
        id: 105,
        lessonId: 11,
        type: 'ASSIST',
        order: 5,
        question: 'Identify common network segmentation strategies.',
      },
      {
        id: 106,
        lessonId: 11,
        type: 'ASSIST',
        order: 6,
        question: 'Discuss the impact of network segmentation on security.',
      },
      {
        id: 107,
        lessonId: 11,
        type: 'SELECT',
        order: 7,
        question: 'What is the primary benefit of network segmentation?',
      },
      {
        id: 108,
        lessonId: 11,
        type: 'SELECT',
        order: 8,
        question: 'Which of these is a common method for segmenting a network?',
      },
      {
        id: 109,
        lessonId: 11,
        type: 'SELECT',
        order: 9,
        question: 'Which device is typically used for network segmentation?',
      },
      {
        id: 110,
        lessonId: 11,
        type: 'SELECT',
        order: 10,
        question: 'What is one key feature of a VLAN?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 101 options
      {
        challengeId: 101,
        imageSrc: '',
        correct: true,
        text: 'Dividing a network into smaller segments',
        audioSrc: '',
      },
      {
        challengeId: 101,
        imageSrc: '',
        correct: false,
        text: 'Connecting multiple networks into a single segment',
        audioSrc: '',
      },
      {
        challengeId: 101,
        imageSrc: '',
        correct: false,
        text: 'Increasing network bandwidth',
        audioSrc: '',
      },

      // Challenge 102 options

      {
        challengeId: 102,
        imageSrc: '',
        correct: false,
        text: 'Reduces network speed',
        audioSrc: '',
      },
      {
        challengeId: 102,
        imageSrc: '',
        correct: true,
        text: 'Improves security and limits the spread of threats',
        audioSrc: '',
      },
      {
        challengeId: 102,
        imageSrc: '',
        correct: false,
        text: 'Simplifies network management',
        audioSrc: '',
      },

      // Challenge 103 options
      {
        challengeId: 103,
        imageSrc: '',
        correct: true,
        text: 'A technology that creates isolated network segments',
        audioSrc: '',
      },
      {
        challengeId: 103,
        imageSrc: '',
        correct: false,
        text: 'A type of network attack',
        audioSrc: '',
      },
      {
        challengeId: 103,
        imageSrc: '',
        correct: false,
        text: 'A method for increasing network bandwidth',
        audioSrc: '',
      },

      // Challenge 104 options

      {
        challengeId: 104,
        imageSrc: '',
        correct: false,
        text: 'Firewalls are used for monitoring email',
        audioSrc: '',
      },
      {
        challengeId: 104,
        imageSrc: '',
        correct: true,
        text: 'Firewalls control traffic between segments',
        audioSrc: '',
      },
      {
        challengeId: 104,
        imageSrc: '',
        correct: false,
        text: 'Firewalls encrypt data between devices',
        audioSrc: '',
      },

      // Challenge 105 options

      {
        challengeId: 105,
        imageSrc: '',
        correct: false,
        text: 'Adding more bandwidth to the network',
        audioSrc: '',
      },
      {
        challengeId: 105,
        imageSrc: '',
        correct: false,
        text: 'Increasing the number of devices',
        audioSrc: '',
      },
      {
        challengeId: 105,
        imageSrc: '',
        correct: true,
        text: 'Using VLANs and subnetting',
        audioSrc: '',
      },

      // Challenge 106 options
      {
        challengeId: 106,
        imageSrc: '',
        correct: false,
        text: 'Increases network speed',
        audioSrc: '',
      },
      {
        challengeId: 106,
        imageSrc: '',
        correct: true,
        text: 'Reduces the impact of security breaches',
        audioSrc: '',
      },
      {
        challengeId: 106,
        imageSrc: '',
        correct: false,
        text: 'Simplifies network management',
        audioSrc: '',
      },

      // Challenge 107 options
      {
        challengeId: 107,
        imageSrc: '',
        correct: true,
        text: 'Enhanced security by isolating network traffic',
        audioSrc: '',
      },
      {
        challengeId: 107,
        imageSrc: '',
        correct: false,
        text: 'Increased network speed',
        audioSrc: '',
      },
      {
        challengeId: 107,
        imageSrc: '',
        correct: false,
        text: 'Easier network configuration',
        audioSrc: '',
      },

      // Challenge 108 options

      {
        challengeId: 108,
        imageSrc: '',
        correct: false,
        text: 'Adding more devices to the network',
        audioSrc: '',
      },
      {
        challengeId: 108,
        imageSrc: '',
        correct: false,
        text: 'Increasing network bandwidth',
        audioSrc: '',
      },
      {
        challengeId: 108,
        imageSrc: '',
        correct: true,
        text: 'Using VLANs',
        audioSrc: '',
      },

      // Challenge 109 options
      {
        challengeId: 109,
        imageSrc: '',
        correct: true,
        text: 'A switch',
        audioSrc: '',
      },
      {
        challengeId: 109,
        imageSrc: '',
        correct: false,
        text: 'A router',
        audioSrc: '',
      },
      {
        challengeId: 109,
        imageSrc: '',
        correct: false,
        text: 'A modem',
        audioSrc: '',
      },

      // Challenge 110 options
      {
        challengeId: 110,
        imageSrc: '',
        correct: true,
        text: 'Segmentation of network into separate broadcast domains',
        audioSrc: '',
      },
      {
        challengeId: 110,
        imageSrc: '',
        correct: false,
        text: 'Increased internet speed',
        audioSrc: '',
      },
      {
        challengeId: 110,
        imageSrc: '',
        correct: false,
        text: 'Improved wireless connectivity',
        audioSrc: '',
      },
    ]);

    // Lesson 12
    await db.insert(schema.challenges).values([
      {
        id: 111,
        lessonId: 12,
        type: 'SELECT',
        order: 1,
        question: 'What is the purpose of a firewall?',
      },
      {
        id: 112,
        lessonId: 12,
        type: 'ASSIST',
        order: 2,
        question: 'Describe different types of firewalls.',
      },
      {
        id: 113,
        lessonId: 12,
        type: 'ASSIST',
        order: 3,
        question:
          'How does a stateful firewall differ from a stateless firewall?',
      },
      {
        id: 114,
        lessonId: 12,
        type: 'ASSIST',
        order: 4,
        question: 'What are some common firewall rules?',
      },
      {
        id: 115,
        lessonId: 12,
        type: 'ASSIST',
        order: 5,
        question: 'Explain how firewalls can be used to segment networks.',
      },
      {
        id: 116,
        lessonId: 12,
        type: 'ASSIST',
        order: 6,
        question: 'Identify the advantages of using a firewall in a network.',
      },
      {
        id: 117,
        lessonId: 12,
        type: 'SELECT',
        order: 7,
        question: 'Which of these is a common type of firewall?',
      },
      {
        id: 118,
        lessonId: 12,
        type: 'SELECT',
        order: 8,
        question: 'What is the function of a proxy firewall?',
      },
      {
        id: 119,
        lessonId: 12,
        type: 'SELECT',
        order: 9,
        question: 'What does a firewall’s access control list (ACL) do?',
      },
      {
        id: 120,
        lessonId: 12,
        type: 'SELECT',
        order: 10,
        question: 'Which protocol is often monitored by firewalls?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 111 options

      {
        challengeId: 111,
        imageSrc: '',
        correct: false,
        text: 'To increase network speed',
        audioSrc: '',
      },
      {
        challengeId: 111,
        imageSrc: '',
        correct: true,
        text: 'To control network traffic and protect against threats',
        audioSrc: '',
      },
      {
        challengeId: 111,
        imageSrc: '',
        correct: false,
        text: 'To manage user accounts',
        audioSrc: '',
      },

      // Challenge 112 options
      {
        challengeId: 112,
        imageSrc: '',
        correct: false,
        text: 'Firewalls are only used for internal network protection',
        audioSrc: '',
      },
      {
        challengeId: 112,
        imageSrc: '',
        correct: true,
        text: 'Hardware, software, and cloud-based firewalls',
        audioSrc: '',
      },
      {
        challengeId: 112,
        imageSrc: '',
        correct: false,
        text: 'Firewalls are used to enhance Wi-Fi coverage',
        audioSrc: '',
      },

      // Challenge 113 options
      {
        challengeId: 113,
        imageSrc: '',
        correct: true,
        text: 'State information is tracked and managed',
        audioSrc: '',
      },
      {
        challengeId: 113,
        imageSrc: '',
        correct: false,
        text: 'No state information is tracked',
        audioSrc: '',
      },
      {
        challengeId: 113,
        imageSrc: '',
        correct: false,
        text: 'Only incoming traffic is managed',
        audioSrc: '',
      },

      // Challenge 114 options
      {
        challengeId: 114,
        imageSrc: '',
        correct: false,
        text: 'Rules for network speed optimization',
        audioSrc: '',
      },
      {
        challengeId: 114,
        imageSrc: '',
        correct: true,
        text: 'Rules for allowing or blocking traffic based on various criteria',
        audioSrc: '',
      },
      {
        challengeId: 114,
        imageSrc: '',
        correct: false,
        text: 'Rules for managing user access to applications',
        audioSrc: '',
      },

      // Challenge 115 options
      {
        challengeId: 115,
        imageSrc: '',
        correct: true,
        text: 'Firewalls can restrict traffic between network segments',
        audioSrc: '',
      },
      {
        challengeId: 115,
        imageSrc: '',
        correct: false,
        text: 'Firewalls are not used for network segmentation',
        audioSrc: '',
      },
      {
        challengeId: 115,
        imageSrc: '',
        correct: false,
        text: 'Firewalls increase network speed',
        audioSrc: '',
      },

      // Challenge 116 options
      {
        challengeId: 116,
        imageSrc: '',
        correct: false,
        text: 'Firewalls are primarily used to enhance Wi-Fi connectivity',
        audioSrc: '',
      },
      {
        challengeId: 116,
        imageSrc: '',
        correct: true,
        text: 'Firewalls provide security and control access',
        audioSrc: '',
      },
      {
        challengeId: 116,
        imageSrc: '',
        correct: false,
        text: 'Firewalls manage network bandwidth',
        audioSrc: '',
      },

      // Challenge 117 options
      {
        challengeId: 117,
        imageSrc: '',
        correct: true,
        text: 'Packet-filtering firewall',
        audioSrc: '',
      },
      {
        challengeId: 117,
        imageSrc: '',
        correct: false,
        text: 'Load-balancing firewall',
        audioSrc: '',
      },
      {
        challengeId: 117,
        imageSrc: '',
        correct: false,
        text: 'Bandwidth-shaping firewall',
        audioSrc: '',
      },

      // Challenge 118 options
      {
        challengeId: 118,
        imageSrc: '',
        correct: true,
        text: 'It forwards requests and responses between clients and servers',
        audioSrc: '',
      },
      {
        challengeId: 118,
        imageSrc: '',
        correct: false,
        text: 'It blocks all incoming traffic',
        audioSrc: '',
      },
      {
        challengeId: 118,
        imageSrc: '',
        correct: false,
        text: 'It increases network bandwidth',
        audioSrc: '',
      },

      // Challenge 119 options
      {
        challengeId: 119,
        imageSrc: '',
        correct: true,
        text: 'Determines what traffic is allowed or denied based on rules',
        audioSrc: '',
      },
      {
        challengeId: 119,
        imageSrc: '',
        correct: false,
        text: 'Monitors the speed of network connections',
        audioSrc: '',
      },
      {
        challengeId: 119,
        imageSrc: '',
        correct: false,
        text: 'Provides encryption for network traffic',
        audioSrc: '',
      },

      // Challenge 120 options
      {
        challengeId: 120,
        imageSrc: '',
        correct: false,
        text: 'FTP',
        audioSrc: '',
      },
      {
        challengeId: 120,
        imageSrc: '',
        correct: true,
        text: 'HTTP',
        audioSrc: '',
      },
      {
        challengeId: 120,
        imageSrc: '',
        correct: false,
        text: 'SMTP',
        audioSrc: '',
      },
    ]);

    // Lesson 13
    await db.insert(schema.challenges).values([
      {
        id: 121,
        lessonId: 13,
        type: 'ASSIST',
        order: 1,
        question: 'Explain the concept of encryption.',
      },
      {
        id: 122,
        lessonId: 13,
        type: 'ASSIST',
        order: 2,
        question: 'What are the main types of encryption?',
      },
      {
        id: 123,
        lessonId: 13,
        type: 'ASSIST',
        order: 3,
        question:
          'How does symmetric encryption differ from asymmetric encryption?',
      },
      {
        id: 124,
        lessonId: 13,
        type: 'ASSIST',
        order: 4,
        question: 'Describe how encryption is used in SSL/TLS.',
      },
      {
        id: 125,
        lessonId: 13,
        type: 'ASSIST',
        order: 5,
        question: 'What are some common encryption algorithms?',
      },
      {
        id: 126,
        lessonId: 13,
        type: 'ASSIST',
        order: 6,
        question: 'Explain the role of encryption in data protection.',
      },
      {
        id: 127,
        lessonId: 13,
        type: 'SELECT',
        order: 7,
        question: 'Which of these is an example of symmetric encryption?',
      },
      {
        id: 128,
        lessonId: 13,
        type: 'SELECT',
        order: 8,
        question: 'Which algorithm is used for asymmetric encryption?',
      },
      {
        id: 129,
        lessonId: 13,
        type: 'SELECT',
        order: 9,
        question: 'What is a common use case for SSL/TLS encryption?',
      },
      {
        id: 130,
        lessonId: 13,
        type: 'SELECT',
        order: 10,
        question:
          'Which protocol is used to secure communications over the internet?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 121 options
      {
        challengeId: 121,
        imageSrc: '',
        correct: true,
        text: 'Converting data into a coded form to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 121,
        imageSrc: '',
        correct: false,
        text: 'Increasing data transmission speed',
        audioSrc: '',
      },
      {
        challengeId: 121,
        imageSrc: '',
        correct: false,
        text: 'Simplifying data management',
        audioSrc: '',
      },

      // Challenge 122 options
      {
        challengeId: 122,
        imageSrc: '',
        correct: true,
        text: 'Symmetric and asymmetric encryption',
        audioSrc: '',
      },
      {
        challengeId: 122,
        imageSrc: '',
        correct: false,
        text: 'Network and application encryption',
        audioSrc: '',
      },
      {
        challengeId: 122,
        imageSrc: '',
        correct: false,
        text: 'File and database encryption',
        audioSrc: '',
      },

      // Challenge 123 options

      {
        challengeId: 123,
        imageSrc: '',
        correct: false,
        text: 'Symmetric encryption is more secure than asymmetric',
        audioSrc: '',
      },
      {
        challengeId: 123,
        imageSrc: '',
        correct: true,
        text: 'Symmetric uses the same key for encryption and decryption, asymmetric uses a pair of keys',
        audioSrc: '',
      },
      {
        challengeId: 123,
        imageSrc: '',
        correct: false,
        text: 'Symmetric encryption requires multiple keys',
        audioSrc: '',
      },

      // Challenge 124 options

      {
        challengeId: 124,
        imageSrc: '',
        correct: false,
        text: 'SSL/TLS encrypts data on a local drive',
        audioSrc: '',
      },
      {
        challengeId: 124,
        imageSrc: '',
        correct: false,
        text: 'SSL/TLS is used to encrypt email',
        audioSrc: '',
      },
      {
        challengeId: 124,
        imageSrc: '',
        correct: true,
        text: 'SSL/TLS uses encryption to secure data transmitted over the internet',
        audioSrc: '',
      },

      // Challenge 125 options

      {
        challengeId: 125,
        imageSrc: '',
        correct: false,
        text: 'HTTP, FTP, SMTP',
        audioSrc: '',
      },
      {
        challengeId: 125,
        imageSrc: '',
        correct: false,
        text: 'TCP, IP, UDP',
        audioSrc: '',
      },
      {
        challengeId: 125,
        imageSrc: '',
        correct: true,
        text: 'AES, DES, RSA',
        audioSrc: '',
      },

      // Challenge 126 options

      {
        challengeId: 126,
        imageSrc: '',
        correct: false,
        text: 'Encryption speeds up data transmission',
        audioSrc: '',
      },
      {
        challengeId: 126,
        imageSrc: '',
        correct: true,
        text: 'Encryption protects data from unauthorized access and ensures confidentiality',
        audioSrc: '',
      },
      {
        challengeId: 126,
        imageSrc: '',
        correct: false,
        text: 'Encryption simplifies data management',
        audioSrc: '',
      },

      // Challenge 127 options

      {
        challengeId: 127,
        imageSrc: '',
        correct: false,
        text: 'RSA',
        audioSrc: '',
      },
      {
        challengeId: 127,
        imageSrc: '',
        correct: false,
        text: 'TLS',
        audioSrc: '',
      },
      {
        challengeId: 127,
        imageSrc: '',
        correct: true,
        text: 'AES',
        audioSrc: '',
      },

      // Challenge 128 options

      {
        challengeId: 128,
        imageSrc: '',
        correct: false,
        text: 'AES',
        audioSrc: '',
      },
      {
        challengeId: 128,
        imageSrc: '',
        correct: true,
        text: 'RSA',
        audioSrc: '',
      },
      {
        challengeId: 128,
        imageSrc: '',
        correct: false,
        text: 'DES',
        audioSrc: '',
      },

      // Challenge 129 options

      {
        challengeId: 129,
        imageSrc: '',
        correct: false,
        text: 'Encrypting data on a local storage device',
        audioSrc: '',
      },
      {
        challengeId: 129,
        imageSrc: '',
        correct: false,
        text: 'Managing user access to applications',
        audioSrc: '',
      },
      {
        challengeId: 129,
        imageSrc: '',
        correct: true,
        text: 'Securing data transmitted over the web',
        audioSrc: '',
      },

      // Challenge 130 options
      {
        challengeId: 130,
        imageSrc: '',
        correct: true,
        text: 'HTTPS',
        audioSrc: '',
      },
      {
        challengeId: 130,
        imageSrc: '',
        correct: false,
        text: 'FTP',
        audioSrc: '',
      },
      {
        challengeId: 130,
        imageSrc: '',
        correct: false,
        text: 'SMTP',
        audioSrc: '',
      },
    ]);

    // Lesson 14
    await db.insert(schema.challenges).values([
      {
        id: 131,
        lessonId: 14,
        type: 'ASSIST',
        order: 1,
        question: 'What is a VPN and how does it work?',
      },
      {
        id: 132,
        lessonId: 14,
        type: 'ASSIST',
        order: 2,
        question: 'What are the benefits of using a VPN?',
      },
      {
        id: 133,
        lessonId: 14,
        type: 'ASSIST',
        order: 3,
        question: 'Describe different types of VPN protocols.',
      },
      {
        id: 134,
        lessonId: 14,
        type: 'ASSIST',
        order: 4,
        question: 'What is the role of encryption in VPNs?',
      },
      {
        id: 135,
        lessonId: 14,
        type: 'ASSIST',
        order: 5,
        question: 'How do VPNs affect network performance?',
      },
      {
        id: 136,
        lessonId: 14,
        type: 'ASSIST',
        order: 6,
        question: 'Explain the concept of VPN tunneling.',
      },
      {
        id: 137,
        lessonId: 14,
        type: 'SELECT',
        order: 7,
        question: 'Which protocol is commonly used in VPNs?',
      },
      {
        id: 138,
        lessonId: 14,
        type: 'SELECT',
        order: 8,
        question: 'What is a key feature of a VPN?',
      },
      {
        id: 139,
        lessonId: 14,
        type: 'SELECT',
        order: 9,
        question: 'What does a VPN do to your IP address?',
      },
      {
        id: 140,
        lessonId: 14,
        type: 'SELECT',
        order: 10,
        question: 'Which VPN feature enhances online privacy?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 131 options

      {
        challengeId: 131,
        imageSrc: '',
        correct: false,
        text: 'A VPN increases your internet speed',
        audioSrc: '',
      },
      {
        challengeId: 131,
        imageSrc: '',
        correct: false,
        text: 'A VPN replaces your internet service provider',
        audioSrc: '',
      },
      {
        challengeId: 131,
        imageSrc: '',
        correct: true,
        text: 'A VPN encrypts your internet traffic and hides your IP address',
        audioSrc: '',
      },

      // Challenge 132 options

      {
        challengeId: 132,
        imageSrc: '',
        correct: false,
        text: 'Increased internet speed',
        audioSrc: '',
      },
      {
        challengeId: 132,
        imageSrc: '',
        correct: true,
        text: 'Enhanced privacy and security',
        audioSrc: '',
      },
      {
        challengeId: 132,
        imageSrc: '',
        correct: false,
        text: 'Simplified network management',
        audioSrc: '',
      },

      // Challenge 133 options
      {
        challengeId: 133,
        imageSrc: '',
        correct: true,
        text: 'OpenVPN, L2TP/IPsec, PPTP',
        audioSrc: '',
      },
      {
        challengeId: 133,
        imageSrc: '',
        correct: false,
        text: 'TCP/IP, UDP, HTTP',
        audioSrc: '',
      },
      {
        challengeId: 133,
        imageSrc: '',
        correct: false,
        text: 'AES, RSA, DES',
        audioSrc: '',
      },

      // Challenge 134 options

      {
        challengeId: 134,
        imageSrc: '',
        correct: false,
        text: 'Encryption increases internet speed',
        audioSrc: '',
      },
      {
        challengeId: 134,
        imageSrc: '',
        correct: true,
        text: 'Encryption secures data transmitted over the VPN tunnel',
        audioSrc: '',
      },
      {
        challengeId: 134,
        imageSrc: '',
        correct: false,
        text: 'Encryption replaces your IP address',
        audioSrc: '',
      },

      // Challenge 135 options
      {
        challengeId: 135,
        imageSrc: '',
        correct: false,
        text: 'VPNs always improve network speed',
        audioSrc: '',
      },
      {
        challengeId: 135,
        imageSrc: '',
        correct: true,
        text: 'VPNs may reduce speed due to encryption overhead',
        audioSrc: '',
      },
      {
        challengeId: 135,
        imageSrc: '',
        correct: false,
        text: 'VPNs have no impact on network performance',
        audioSrc: '',
      },

      // Challenge 136 options

      {
        challengeId: 136,
        imageSrc: '',
        correct: false,
        text: 'VPN tunneling replaces your IP address',
        audioSrc: '',
      },
      {
        challengeId: 136,
        imageSrc: '',
        correct: true,
        text: 'VPN tunneling encapsulates your data within another protocol',
        audioSrc: '',
      },
      {
        challengeId: 136,
        imageSrc: '',
        correct: false,
        text: 'VPN tunneling speeds up your internet connection',
        audioSrc: '',
      },

      // Challenge 137 options

      {
        challengeId: 137,
        imageSrc: '',
        correct: false,
        text: 'FTP',
        audioSrc: '',
      },
      {
        challengeId: 137,
        imageSrc: '',
        correct: true,
        text: 'OpenVPN',
        audioSrc: '',
      },
      {
        challengeId: 137,
        imageSrc: '',
        correct: false,
        text: 'HTTP',
        audioSrc: '',
      },

      // Challenge 138 options
      {
        challengeId: 138,
        imageSrc: '',
        correct: true,
        text: 'It encrypts data and masks your IP address',
        audioSrc: '',
      },
      {
        challengeId: 138,
        imageSrc: '',
        correct: false,
        text: 'It increases network speed',
        audioSrc: '',
      },
      {
        challengeId: 138,
        imageSrc: '',
        correct: false,
        text: 'It manages network traffic',
        audioSrc: '',
      },

      // Challenge 139 options

      {
        challengeId: 139,
        imageSrc: '',
        correct: false,
        text: 'Increases it',
        audioSrc: '',
      },
      {
        challengeId: 139,
        imageSrc: '',
        correct: false,
        text: 'Shows your local IP address',
        audioSrc: '',
      },
      {
        challengeId: 139,
        imageSrc: '',
        correct: true,
        text: 'Hides it and replaces it with the VPN server’s IP address',
        audioSrc: '',
      },

      // Challenge 140 options
      {
        challengeId: 140,
        imageSrc: '',
        correct: true,
        text: 'Encryption and IP masking',
        audioSrc: '',
      },
      {
        challengeId: 140,
        imageSrc: '',
        correct: false,
        text: 'Increased speed and bandwidth',
        audioSrc: '',
      },
      {
        challengeId: 140,
        imageSrc: '',
        correct: false,
        text: 'Simplified network configuration',
        audioSrc: '',
      },
    ]);

    // Lesson 15
    await db.insert(schema.challenges).values([
      {
        id: 141,
        lessonId: 15,
        type: 'ASSIST',
        order: 1,
        question: 'What is a DDoS attack?',
      },
      {
        id: 142,
        lessonId: 15,
        type: 'ASSIST',
        order: 2,
        question: 'Describe common DDoS attack techniques.',
      },
      {
        id: 143,
        lessonId: 15,
        type: 'ASSIST',
        order: 3,
        question: 'What are some methods to mitigate DDoS attacks?',
      },
      {
        id: 144,
        lessonId: 15,
        type: 'ASSIST',
        order: 4,
        question: 'How do firewalls help prevent DDoS attacks?',
      },
      {
        id: 145,
        lessonId: 15,
        type: 'ASSIST',
        order: 5,
        question: 'What is the role of rate limiting in DDoS protection?',
      },
      {
        id: 146,
        lessonId: 15,
        type: 'ASSIST',
        order: 6,
        question: 'Identify the impact of a successful DDoS attack.',
      },
      {
        id: 147,
        lessonId: 15,
        type: 'SELECT',
        order: 7,
        question: 'Which of these is a common DDoS attack method?',
      },
      {
        id: 148,
        lessonId: 15,
        type: 'SELECT',
        order: 8,
        question: 'What does a DDoS attack primarily target?',
      },
      {
        id: 149,
        lessonId: 15,
        type: 'SELECT',
        order: 9,
        question: 'Which technology is used to absorb DDoS traffic?',
      },
      {
        id: 150,
        lessonId: 15,
        type: 'SELECT',
        order: 10,
        question: 'What is a key indicator of a DDoS attack?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 141 options

      {
        challengeId: 141,
        imageSrc: '',
        correct: false,
        text: 'A type of virus attack',
        audioSrc: '',
      },
      {
        challengeId: 141,
        imageSrc: '',
        correct: true,
        text: 'A Distributed Denial of Service attack that overwhelms a system with traffic',
        audioSrc: '',
      },
      {
        challengeId: 141,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 142 options

      {
        challengeId: 142,
        imageSrc: '',
        correct: false,
        text: 'Intercepting and altering data in transit',
        audioSrc: '',
      },
      {
        challengeId: 142,
        imageSrc: '',
        correct: false,
        text: 'Injecting malicious code into a website',
        audioSrc: '',
      },
      {
        challengeId: 142,
        imageSrc: '',
        correct: true,
        text: 'Flooding the network with excessive traffic',
        audioSrc: '',
      },

      // Challenge 143 options
      {
        challengeId: 143,
        imageSrc: '',
        correct: true,
        text: 'Using traffic filtering and rate limiting',
        audioSrc: '',
      },
      {
        challengeId: 143,
        imageSrc: '',
        correct: false,
        text: 'Encrypting data at rest',
        audioSrc: '',
      },
      {
        challengeId: 143,
        imageSrc: '',
        correct: false,
        text: 'Increasing server capacity',
        audioSrc: '',
      },

      // Challenge 144 options
      {
        challengeId: 144,
        imageSrc: '',
        correct: true,
        text: 'Firewalls can block or limit the traffic',
        audioSrc: '',
      },
      {
        challengeId: 144,
        imageSrc: '',
        correct: false,
        text: 'Firewalls can detect and clean malware',
        audioSrc: '',
      },
      {
        challengeId: 144,
        imageSrc: '',
        correct: false,
        text: 'Firewalls can replace antivirus software',
        audioSrc: '',
      },

      // Challenge 145 options

      {
        challengeId: 145,
        imageSrc: '',
        correct: false,
        text: 'Rate limiting speeds up network traffic',
        audioSrc: '',
      },
      {
        challengeId: 145,
        imageSrc: '',
        correct: false,
        text: 'Rate limiting encrypts traffic',
        audioSrc: '',
      },
      {
        challengeId: 145,
        imageSrc: '',
        correct: true,
        text: 'Rate limiting restricts the amount of traffic from a single source',
        audioSrc: '',
      },

      // Challenge 146 options
      {
        challengeId: 146,
        imageSrc: '',
        correct: true,
        text: 'Disruption of services and potential financial loss',
        audioSrc: '',
      },
      {
        challengeId: 146,
        imageSrc: '',
        correct: false,
        text: 'Improved network performance',
        audioSrc: '',
      },
      {
        challengeId: 146,
        imageSrc: '',
        correct: false,
        text: 'Enhanced security measures',
        audioSrc: '',
      },

      // Challenge 147 options

      {
        challengeId: 147,
        imageSrc: '',
        correct: false,
        text: 'Phishing',
        audioSrc: '',
      },
      {
        challengeId: 147,
        imageSrc: '',
        correct: true,
        text: 'SYN flood',
        audioSrc: '',
      },
      {
        challengeId: 147,
        imageSrc: '',
        correct: false,
        text: 'SQL injection',
        audioSrc: '',
      },

      // Challenge 148 options
      {
        challengeId: 148,
        imageSrc: '',
        correct: true,
        text: 'Network availability',
        audioSrc: '',
      },
      {
        challengeId: 148,
        imageSrc: '',
        correct: false,
        text: 'Data confidentiality',
        audioSrc: '',
      },
      {
        challengeId: 148,
        imageSrc: '',
        correct: false,
        text: 'System integrity',
        audioSrc: '',
      },

      // Challenge 149 options
      {
        challengeId: 149,
        imageSrc: '',
        correct: true,
        text: 'DDoS protection services',
        audioSrc: '',
      },
      {
        challengeId: 149,
        imageSrc: '',
        correct: false,
        text: 'Antivirus software',
        audioSrc: '',
      },
      {
        challengeId: 149,
        imageSrc: '',
        correct: false,
        text: 'Firewall settings',
        audioSrc: '',
      },

      // Challenge 150 options
      {
        challengeId: 150,
        imageSrc: '',
        correct: true,
        text: 'Anomalies in network traffic patterns',
        audioSrc: '',
      },
      {
        challengeId: 150,
        imageSrc: '',
        correct: false,
        text: 'Unexpected system updates',
        audioSrc: '',
      },
      {
        challengeId: 150,
        imageSrc: '',
        correct: false,
        text: 'Increased file storage usage',
        audioSrc: '',
      },
    ]);

    // Lesson 16
    await db.insert(schema.challenges).values([
      {
        id: 151,
        lessonId: 16,
        type: 'ASSIST',
        order: 1,
        question: 'What are common types of malware?',
      },
      {
        id: 152,
        lessonId: 16,
        type: 'ASSIST',
        order: 2,
        question: 'How does a trojan horse work?',
      },
      {
        id: 153,
        lessonId: 16,
        type: 'ASSIST',
        order: 3,
        question: 'What is the purpose of ransomware?',
      },
      {
        id: 154,
        lessonId: 16,
        type: 'ASSIST',
        order: 4,
        question: 'How can spyware affect a system?',
      },
      {
        id: 155,
        lessonId: 16,
        type: 'ASSIST',
        order: 5,
        question: 'What are some signs of a malware infection?',
      },
      {
        id: 156,
        lessonId: 16,
        type: 'ASSIST',
        order: 6,
        question: 'Explain the concept of rootkits.',
      },
      {
        id: 157,
        lessonId: 16,
        type: 'SELECT',
        order: 7,
        question: 'Which of these is a type of malware?',
      },
      {
        id: 158,
        lessonId: 16,
        type: 'SELECT',
        order: 8,
        question: 'What does ransomware typically do?',
      },
      {
        id: 159,
        lessonId: 16,
        type: 'SELECT',
        order: 9,
        question:
          'Which malware type often disguises itself as legitimate software?',
      },
      {
        id: 160,
        lessonId: 16,
        type: 'SELECT',
        order: 10,
        question: 'What is a common indicator of spyware infection?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 151 options

      {
        challengeId: 151,
        imageSrc: '',
        correct: false,
        text: 'Encryption, Firewalls, VPNs',
        audioSrc: '',
      },
      {
        challengeId: 151,
        imageSrc: '',
        correct: false,
        text: 'Antivirus, Antimalware, Backup',
        audioSrc: '',
      },
      {
        challengeId: 151,
        imageSrc: '',
        correct: true,
        text: 'Viruses, Trojans, Ransomware, Spyware',
        audioSrc: '',
      },

      // Challenge 152 options

      {
        challengeId: 152,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data for secure transmission',
        audioSrc: '',
      },
      {
        challengeId: 152,
        imageSrc: '',
        correct: false,
        text: 'Provides additional security features',
        audioSrc: '',
      },
      {
        challengeId: 152,
        imageSrc: '',
        correct: true,
        text: 'Disguises itself as legitimate software to gain access',
        audioSrc: '',
      },

      // Challenge 153 options
      {
        challengeId: 153,
        imageSrc: '',
        correct: true,
        text: 'Encrypts files and demands a ransom for decryption',
        audioSrc: '',
      },
      {
        challengeId: 153,
        imageSrc: '',
        correct: false,
        text: 'Removes files from the system',
        audioSrc: '',
      },
      {
        challengeId: 153,
        imageSrc: '',
        correct: false,
        text: 'Monitors user activity',
        audioSrc: '',
      },

      // Challenge 154 options
      {
        challengeId: 154,
        imageSrc: '',
        correct: true,
        text: 'Tracks and sends sensitive information to attackers',
        audioSrc: '',
      },
      {
        challengeId: 154,
        imageSrc: '',
        correct: false,
        text: 'Improves system performance',
        audioSrc: '',
      },
      {
        challengeId: 154,
        imageSrc: '',
        correct: false,
        text: 'Increases system storage capacity',
        audioSrc: '',
      },

      // Challenge 155 options

      {
        challengeId: 155,
        imageSrc: '',
        correct: false,
        text: 'Increased network speed',
        audioSrc: '',
      },
      {
        challengeId: 155,
        imageSrc: '',
        correct: true,
        text: 'Slow performance, unexpected pop-ups, and new toolbars',
        audioSrc: '',
      },
      {
        challengeId: 155,
        imageSrc: '',
        correct: false,
        text: 'Improved system stability',
        audioSrc: '',
      },

      // Challenge 156 options
      {
        challengeId: 156,
        imageSrc: '',
        correct: true,
        text: 'Rootkits hide their presence and provide unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 156,
        imageSrc: '',
        correct: false,
        text: 'Rootkits speed up system performance',
        audioSrc: '',
      },
      {
        challengeId: 156,
        imageSrc: '',
        correct: false,
        text: 'Rootkits increase data storage',
        audioSrc: '',
      },

      // Challenge 157 options

      {
        challengeId: 157,
        imageSrc: '',
        correct: false,
        text: 'Firewall',
        audioSrc: '',
      },
      {
        challengeId: 157,
        imageSrc: '',
        correct: false,
        text: 'Antivirus',
        audioSrc: '',
      },
      {
        challengeId: 157,
        imageSrc: '',
        correct: true,
        text: 'Trojan Horse',
        audioSrc: '',
      },

      // Challenge 158 options
      {
        challengeId: 158,
        imageSrc: '',
        correct: true,
        text: 'Encrypts files and demands payment for decryption',
        audioSrc: '',
      },
      {
        challengeId: 158,
        imageSrc: '',
        correct: false,
        text: 'Sends spam emails',
        audioSrc: '',
      },
      {
        challengeId: 158,
        imageSrc: '',
        correct: false,
        text: 'Collects system usage statistics',
        audioSrc: '',
      },

      // Challenge 159 options

      {
        challengeId: 159,
        imageSrc: '',
        correct: false,
        text: 'Antivirus Software',
        audioSrc: '',
      },
      {
        challengeId: 159,
        imageSrc: '',
        correct: false,
        text: 'Firewall',
        audioSrc: '',
      },
      {
        challengeId: 159,
        imageSrc: '',
        correct: true,
        text: 'Trojan Horse',
        audioSrc: '',
      },

      // Challenge 160 options
      {
        challengeId: 160,
        imageSrc: '',
        correct: true,
        text: 'Unusual system behavior and performance issues',
        audioSrc: '',
      },
      {
        challengeId: 160,
        imageSrc: '',
        correct: false,
        text: 'Increased internet speed',
        audioSrc: '',
      },
      {
        challengeId: 160,
        imageSrc: '',
        correct: false,
        text: 'More free disk space',
        audioSrc: '',
      },
    ]);

    // Lesson 17
    await db.insert(schema.challenges).values([
      {
        id: 161,
        lessonId: 17,
        type: 'ASSIST',
        order: 1,
        question: 'What is the purpose of an IDS?',
      },
      {
        id: 162,
        lessonId: 17,
        type: 'ASSIST',
        order: 2,
        question: 'Differentiate between IDS and IPS.',
      },
      {
        id: 163,
        lessonId: 17,
        type: 'ASSIST',
        order: 3,
        question: 'Explain the concept of a honeypot.',
      },
      {
        id: 164,
        lessonId: 17,
        type: 'ASSIST',
        order: 4,
        question: 'How does network segmentation improve security?',
      },
      {
        id: 165,
        lessonId: 17,
        type: 'ASSIST',
        order: 5,
        question: 'What are some common types of network attacks?',
      },
      {
        id: 166,
        lessonId: 17,
        type: 'ASSIST',
        order: 6,
        question: 'What role do firewalls play in network security?',
      },
      {
        id: 167,
        lessonId: 17,
        type: 'SELECT',
        order: 7,
        question:
          'Which device monitors network traffic for suspicious activity?',
      },
      {
        id: 168,
        lessonId: 17,
        type: 'SELECT',
        order: 8,
        question: 'What does an Intrusion Prevention System (IPS) do?',
      },
      {
        id: 169,
        lessonId: 17,
        type: 'SELECT',
        order: 9,
        question: 'What is the main function of a honeypot?',
      },
      {
        id: 170,
        lessonId: 17,
        type: 'SELECT',
        order: 10,
        question: 'Which technique isolates different network segments?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 161 options

      {
        challengeId: 161,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data during transmission',
        audioSrc: '',
      },
      {
        challengeId: 161,
        imageSrc: '',
        correct: false,
        text: 'Blocks all incoming network traffic',
        audioSrc: '',
      },
      {
        challengeId: 161,
        imageSrc: '',
        correct: true,
        text: 'Detects and alerts on suspicious activities within a network',
        audioSrc: '',
      },

      // Challenge 162 options

      {
        challengeId: 162,
        imageSrc: '',
        correct: false,
        text: 'IDS and IPS are the same devices',
        audioSrc: '',
      },
      {
        challengeId: 162,
        imageSrc: '',
        correct: true,
        text: 'IDS detects and alerts on threats; IPS actively blocks threats',
        audioSrc: '',
      },
      {
        challengeId: 162,
        imageSrc: '',
        correct: false,
        text: 'IDS encrypts network traffic, while IPS monitors it',
        audioSrc: '',
      },

      // Challenge 163 options

      {
        challengeId: 163,
        imageSrc: '',
        correct: false,
        text: 'A method to secure network traffic',
        audioSrc: '',
      },
      {
        challengeId: 163,
        imageSrc: '',
        correct: false,
        text: 'A tool for creating strong passwords',
        audioSrc: '',
      },
      {
        challengeId: 163,
        imageSrc: '',
        correct: true,
        text: 'A system designed to lure and trap attackers',
        audioSrc: '',
      },

      // Challenge 164 options
      {
        challengeId: 164,
        imageSrc: '',
        correct: true,
        text: 'Limits the impact of attacks by isolating network segments',
        audioSrc: '',
      },
      {
        challengeId: 164,
        imageSrc: '',
        correct: false,
        text: 'Increases network speed by merging segments',
        audioSrc: '',
      },
      {
        challengeId: 164,
        imageSrc: '',
        correct: false,
        text: 'Simplifies network management by removing segments',
        audioSrc: '',
      },

      // Challenge 165 options
      {
        challengeId: 165,
        imageSrc: '',
        correct: true,
        text: 'Denial of Service (DoS), Man-in-the-Middle, Phishing',
        audioSrc: '',
      },
      {
        challengeId: 165,
        imageSrc: '',
        correct: false,
        text: 'Data encryption, Access control, Backup',
        audioSrc: '',
      },
      {
        challengeId: 165,
        imageSrc: '',
        correct: false,
        text: 'Password management, File sharing, Cloud storage',
        audioSrc: '',
      },

      // Challenge 166 options

      {
        challengeId: 166,
        imageSrc: '',
        correct: false,
        text: 'Manages user accounts and permissions',
        audioSrc: '',
      },
      {
        challengeId: 166,
        imageSrc: '',
        correct: true,
        text: 'Controls access to the network and monitors traffic',
        audioSrc: '',
      },
      {
        challengeId: 166,
        imageSrc: '',
        correct: false,
        text: 'Encrypts files stored on the server',
        audioSrc: '',
      },

      // Challenge 167 options
      {
        challengeId: 167,
        imageSrc: '',
        correct: true,
        text: 'Intrusion Detection System (IDS)',
        audioSrc: '',
      },
      {
        challengeId: 167,
        imageSrc: '',
        correct: false,
        text: 'Firewall',
        audioSrc: '',
      },
      {
        challengeId: 167,
        imageSrc: '',
        correct: false,
        text: 'Antivirus Software',
        audioSrc: '',
      },

      // Challenge 168 options

      {
        challengeId: 168,
        imageSrc: '',
        correct: false,
        text: 'Archives network traffic for later analysis',
        audioSrc: '',
      },
      {
        challengeId: 168,
        imageSrc: '',
        correct: true,
        text: 'Monitors and blocks potentially harmful activities in real-time',
        audioSrc: '',
      },
      {
        challengeId: 168,
        imageSrc: '',
        correct: false,
        text: 'Enhances network speed by filtering traffic',
        audioSrc: '',
      },

      // Challenge 169 options
      {
        challengeId: 169,
        imageSrc: '',
        correct: true,
        text: 'Attracts attackers to study their methods and protect the actual system',
        audioSrc: '',
      },
      {
        challengeId: 169,
        imageSrc: '',
        correct: false,
        text: 'Encrypts sensitive data for secure storage',
        audioSrc: '',
      },
      {
        challengeId: 169,
        imageSrc: '',
        correct: false,
        text: 'Prevents unauthorized access to network resources',
        audioSrc: '',
      },

      // Challenge 170 options
      {
        challengeId: 170,
        imageSrc: '',
        correct: true,
        text: 'Network segmentation',
        audioSrc: '',
      },
      {
        challengeId: 170,
        imageSrc: '',
        correct: false,
        text: 'Data encryption',
        audioSrc: '',
      },
      {
        challengeId: 170,
        imageSrc: '',
        correct: false,
        text: 'Access control lists',
        audioSrc: '',
      },
    ]);

    // Lesson 18
    await db.insert(schema.challenges).values([
      {
        id: 171,
        lessonId: 18,
        type: 'ASSIST',
        order: 1,
        question: 'What is a Zero-Day vulnerability?',
      },
      {
        id: 172,
        lessonId: 18,
        type: 'ASSIST',
        order: 2,
        question: 'How do exploit kits work?',
      },
      {
        id: 173,
        lessonId: 18,
        type: 'ASSIST',
        order: 3,
        question: 'What is the significance of a patch?',
      },
      {
        id: 174,
        lessonId: 18,
        type: 'ASSIST',
        order: 4,
        question: 'What are common methods of privilege escalation?',
      },
      {
        id: 175,
        lessonId: 18,
        type: 'ASSIST',
        order: 5,
        question: 'How do security patches improve system security?',
      },
      {
        id: 176,
        lessonId: 18,
        type: 'ASSIST',
        order: 6,
        question: 'What is the role of threat intelligence in cybersecurity?',
      },
      {
        id: 177,
        lessonId: 18,
        type: 'SELECT',
        order: 7,
        question: 'Which term describes a vulnerability with no known patch?',
      },
      {
        id: 178,
        lessonId: 18,
        type: 'SELECT',
        order: 8,
        question: 'What does an exploit kit do?',
      },
      {
        id: 179,
        lessonId: 18,
        type: 'SELECT',
        order: 9,
        question: 'What is a critical security update often called?',
      },
      {
        id: 180,
        lessonId: 18,
        type: 'SELECT',
        order: 10,
        question: 'What technique is used to gain higher-level access?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 171 options

      {
        challengeId: 171,
        imageSrc: '',
        correct: false,
        text: 'A known vulnerability with an available patch',
        audioSrc: '',
      },
      {
        challengeId: 171,
        imageSrc: '',
        correct: false,
        text: 'A vulnerability that is public knowledge but not exploited',
        audioSrc: '',
      },
      {
        challengeId: 171,
        imageSrc: '',
        correct: true,
        text: 'A vulnerability that is unknown to the software vendor and has no patch',
        audioSrc: '',
      },

      // Challenge 172 options

      {
        challengeId: 172,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 172,
        imageSrc: '',
        correct: true,
        text: 'Delivers malware to exploit known vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 172,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for suspicious activity',
        audioSrc: '',
      },

      // Challenge 173 options
      {
        challengeId: 173,
        imageSrc: '',
        correct: true,
        text: 'It provides a fix for a security vulnerability in software',
        audioSrc: '',
      },
      {
        challengeId: 173,
        imageSrc: '',
        correct: false,
        text: 'It removes obsolete features from software',
        audioSrc: '',
      },
      {
        challengeId: 173,
        imageSrc: '',
        correct: false,
        text: 'It improves software performance',
        audioSrc: '',
      },

      // Challenge 174 options

      {
        challengeId: 174,
        imageSrc: '',
        correct: false,
        text: 'Increasing user privileges through secure authentication',
        audioSrc: '',
      },
      {
        challengeId: 174,
        imageSrc: '',
        correct: false,
        text: 'Using encryption to protect sensitive data',
        audioSrc: '',
      },
      {
        challengeId: 174,
        imageSrc: '',
        correct: true,
        text: 'Exploiting unpatched vulnerabilities and misconfigurations',
        audioSrc: '',
      },

      // Challenge 175 options

      {
        challengeId: 175,
        imageSrc: '',
        correct: false,
        text: 'Adds new features to the software',
        audioSrc: '',
      },
      {
        challengeId: 175,
        imageSrc: '',
        correct: true,
        text: 'Fixes security flaws to prevent exploitation',
        audioSrc: '',
      },
      {
        challengeId: 175,
        imageSrc: '',
        correct: false,
        text: 'Optimizes software performance',
        audioSrc: '',
      },

      // Challenge 176 options

      {
        challengeId: 176,
        imageSrc: '',
        correct: false,
        text: 'Manages user access and permissions',
        audioSrc: '',
      },
      {
        challengeId: 176,
        imageSrc: '',
        correct: false,
        text: 'Improves system performance and reliability',
        audioSrc: '',
      },
      {
        challengeId: 176,
        imageSrc: '',
        correct: true,
        text: 'Provides insights into emerging threats and vulnerabilities',
        audioSrc: '',
      },

      // Challenge 177 options
      {
        challengeId: 177,
        imageSrc: '',
        correct: true,
        text: 'Zero-Day vulnerability',
        audioSrc: '',
      },
      {
        challengeId: 177,
        imageSrc: '',
        correct: false,
        text: 'Exploit kit',
        audioSrc: '',
      },
      {
        challengeId: 177,
        imageSrc: '',
        correct: false,
        text: 'Security patch',
        audioSrc: '',
      },

      // Challenge 178 options
      {
        challengeId: 178,
        imageSrc: '',
        correct: true,
        text: 'Distributes malware through known vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 178,
        imageSrc: '',
        correct: false,
        text: 'Scans for vulnerabilities in software',
        audioSrc: '',
      },
      {
        challengeId: 178,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data for secure transmission',
        audioSrc: '',
      },

      // Challenge 179 options
      {
        challengeId: 179,
        imageSrc: '',
        correct: true,
        text: 'Critical security update',
        audioSrc: '',
      },
      {
        challengeId: 179,
        imageSrc: '',
        correct: false,
        text: 'Minor software update',
        audioSrc: '',
      },
      {
        challengeId: 179,
        imageSrc: '',
        correct: false,
        text: 'Feature enhancement',
        audioSrc: '',
      },

      // Challenge 180 options

      {
        challengeId: 180,
        imageSrc: '',
        correct: false,
        text: 'Encryption',
        audioSrc: '',
      },
      {
        challengeId: 180,
        imageSrc: '',
        correct: true,
        text: 'Privilege escalation',
        audioSrc: '',
      },
      {
        challengeId: 180,
        imageSrc: '',
        correct: false,
        text: 'Access control',
        audioSrc: '',
      },
    ]);

    // Lesson 19
    await db.insert(schema.challenges).values([
      {
        id: 181,
        lessonId: 19,
        type: 'ASSIST',
        order: 1,
        question: 'What is the primary function of a VPN?',
      },
      {
        id: 182,
        lessonId: 19,
        type: 'ASSIST',
        order: 2,
        question: 'What does multifactor authentication (MFA) provide?',
      },
      {
        id: 183,
        lessonId: 19,
        type: 'ASSIST',
        order: 3,
        question: 'What are the advantages of using an IDS?',
      },
      {
        id: 184,
        lessonId: 19,
        type: 'ASSIST',
        order: 4,
        question: 'Describe the concept of network access control (NAC).',
      },
      {
        id: 185,
        lessonId: 19,
        type: 'ASSIST',
        order: 5,
        question: 'How does a VPN secure data transmission?',
      },
      {
        id: 186,
        lessonId: 19,
        type: 'ASSIST',
        order: 6,
        question: 'What is the role of encryption in protecting data?',
      },
      {
        id: 187,
        lessonId: 19,
        type: 'SELECT',
        order: 7,
        question: 'What does a VPN do?',
      },
      {
        id: 188,
        lessonId: 19,
        type: 'SELECT',
        order: 8,
        question: 'What is the purpose of multifactor authentication?',
      },
      {
        id: 189,
        lessonId: 19,
        type: 'SELECT',
        order: 9,
        question: 'What is an IDS used for?',
      },
      {
        id: 190,
        lessonId: 19,
        type: 'SELECT',
        order: 10,
        question: 'How does network access control (NAC) work?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 181 options

      {
        challengeId: 181,
        imageSrc: '',
        correct: false,
        text: 'Blocks malicious traffic',
        audioSrc: '',
      },
      {
        challengeId: 181,
        imageSrc: '',
        correct: true,
        text: 'Encrypts data and provides a secure connection over a public network',
        audioSrc: '',
      },
      {
        challengeId: 181,
        imageSrc: '',
        correct: false,
        text: 'Monitors network activity',
        audioSrc: '',
      },

      // Challenge 182 options

      {
        challengeId: 182,
        imageSrc: '',
        correct: false,
        text: 'Provides single sign-on access',
        audioSrc: '',
      },
      {
        challengeId: 182,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data in transit',
        audioSrc: '',
      },
      {
        challengeId: 182,
        imageSrc: '',
        correct: true,
        text: 'Adds an extra layer of security by requiring multiple forms of verification',
        audioSrc: '',
      },

      // Challenge 183 options

      {
        challengeId: 183,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data for secure storage',
        audioSrc: '',
      },
      {
        challengeId: 183,
        imageSrc: '',
        correct: true,
        text: 'Detects and alerts on suspicious activities in the network',
        audioSrc: '',
      },
      {
        challengeId: 183,
        imageSrc: '',
        correct: false,
        text: 'Controls user access to network resources',
        audioSrc: '',
      },

      // Challenge 184 options
      {
        challengeId: 184,
        imageSrc: '',
        correct: true,
        text: 'Regulates who can access network resources and enforces policies',
        audioSrc: '',
      },
      {
        challengeId: 184,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 184,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for threats',
        audioSrc: '',
      },

      // Challenge 185 options

      {
        challengeId: 185,
        imageSrc: '',
        correct: false,
        text: 'Increases network speed',
        audioSrc: '',
      },
      {
        challengeId: 185,
        imageSrc: '',
        correct: false,
        text: 'Filters out spam emails',
        audioSrc: '',
      },
      {
        challengeId: 185,
        imageSrc: '',
        correct: true,
        text: 'Encrypts data transmitted over the internet, securing it from eavesdropping',
        audioSrc: '',
      },

      // Challenge 186 options
      {
        challengeId: 186,
        imageSrc: '',
        correct: true,
        text: 'Protects data by converting it into an unreadable format for unauthorized users',
        audioSrc: '',
      },
      {
        challengeId: 186,
        imageSrc: '',
        correct: false,
        text: 'Improves system performance',
        audioSrc: '',
      },
      {
        challengeId: 186,
        imageSrc: '',
        correct: false,
        text: 'Manages user access permissions',
        audioSrc: '',
      },

      // Challenge 187 options
      {
        challengeId: 187,
        imageSrc: '',
        correct: true,
        text: 'Secures internet connections and protects privacy by encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 187,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for suspicious activity',
        audioSrc: '',
      },
      {
        challengeId: 187,
        imageSrc: '',
        correct: false,
        text: 'Manages user authentication',
        audioSrc: '',
      },

      // Challenge 188 options

      {
        challengeId: 188,
        imageSrc: '',
        correct: false,
        text: 'Provides single sign-on capabilities',
        audioSrc: '',
      },
      {
        challengeId: 188,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for threats',
        audioSrc: '',
      },
      {
        challengeId: 188,
        imageSrc: '',
        correct: true,
        text: 'Enhances security by requiring more than one method of authentication',
        audioSrc: '',
      },

      // Challenge 189 options
      {
        challengeId: 189,
        imageSrc: '',
        correct: true,
        text: 'Detects and reports suspicious activities in a network',
        audioSrc: '',
      },
      {
        challengeId: 189,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data for secure storage',
        audioSrc: '',
      },
      {
        challengeId: 189,
        imageSrc: '',
        correct: false,
        text: 'Controls access to network resources',
        audioSrc: '',
      },

      // Challenge 190 options
      {
        challengeId: 190,
        imageSrc: '',
        correct: true,
        text: 'Enforces access policies and regulates user access to network resources',
        audioSrc: '',
      },
      {
        challengeId: 190,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 190,
        imageSrc: '',
        correct: false,
        text: 'Scans for vulnerabilities in software',
        audioSrc: '',
      },
    ]);

    // Lesson 20
    await db.insert(schema.challenges).values([
      {
        id: 191,
        lessonId: 20,
        type: 'ASSIST',
        order: 1,
        question: 'What is an XSS attack?',
      },
      {
        id: 192,
        lessonId: 20,
        type: 'ASSIST',
        order: 2,
        question: 'Explain SQL Injection.',
      },
      {
        id: 193,
        lessonId: 20,
        type: 'ASSIST',
        order: 3,
        question: 'What is a CSRF attack?',
      },
      {
        id: 194,
        lessonId: 20,
        type: 'ASSIST',
        order: 4,
        question: 'How does a buffer overflow occur?',
      },
      {
        id: 195,
        lessonId: 20,
        type: 'ASSIST',
        order: 5,
        question: 'Describe Cross-Site Scripting (XSS) vulnerabilities.',
      },
      {
        id: 196,
        lessonId: 20,
        type: 'ASSIST',
        order: 6,
        question: 'What measures can prevent SQL Injection?',
      },
      {
        id: 197,
        lessonId: 20,
        type: 'SELECT',
        order: 7,
        question: 'What is the main goal of a SQL Injection attack?',
      },
      {
        id: 198,
        lessonId: 20,
        type: 'SELECT',
        order: 8,
        question:
          'Which attack involves manipulating web forms to perform unauthorized actions?',
      },
      {
        id: 199,
        lessonId: 20,
        type: 'SELECT',
        order: 9,
        question:
          'What type of attack can exploit vulnerable scripts to execute malicious code?',
      },
      {
        id: 200,
        lessonId: 20,
        type: 'SELECT',
        order: 10,
        question: 'How can buffer overflow vulnerabilities be mitigated?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 191 options

      {
        challengeId: 191,
        imageSrc: '',
        correct: false,
        text: 'A method of encrypting data in transit',
        audioSrc: '',
      },
      {
        challengeId: 191,
        imageSrc: '',
        correct: false,
        text: 'A technique for blocking unwanted emails',
        audioSrc: '',
      },
      {
        challengeId: 191,
        imageSrc: '',
        correct: true,
        text: 'A vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users',
        audioSrc: '',
      },

      // Challenge 192 options

      {
        challengeId: 192,
        imageSrc: '',
        correct: false,
        text: 'A method of encrypting web traffic',
        audioSrc: '',
      },
      {
        challengeId: 192,
        imageSrc: '',
        correct: false,
        text: 'A technique for detecting malware',
        audioSrc: '',
      },
      {
        challengeId: 192,
        imageSrc: '',
        correct: true,
        text: 'A vulnerability that allows attackers to execute arbitrary SQL commands via input fields',
        audioSrc: '',
      },

      // Challenge 193 options

      {
        challengeId: 193,
        imageSrc: '',
        correct: false,
        text: 'A method of securing data with encryption',
        audioSrc: '',
      },
      {
        challengeId: 193,
        imageSrc: '',
        correct: true,
        text: 'A vulnerability that allows attackers to perform unauthorized actions by tricking users into performing actions on behalf of the attacker',
        audioSrc: '',
      },
      {
        challengeId: 193,
        imageSrc: '',
        correct: false,
        text: 'A technique for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 194 options
      {
        challengeId: 194,
        imageSrc: '',
        correct: true,
        text: 'Occurs when an attacker sends more data to a program’s buffer than it can handle, causing overflow and potential exploitation',
        audioSrc: '',
      },
      {
        challengeId: 194,
        imageSrc: '',
        correct: false,
        text: 'Happens when unauthorized users access restricted data',
        audioSrc: '',
      },
      {
        challengeId: 194,
        imageSrc: '',
        correct: false,
        text: 'Occurs when sensitive data is leaked through a network',
        audioSrc: '',
      },

      // Challenge 195 options

      {
        challengeId: 195,
        imageSrc: '',
        correct: false,
        text: 'Involves encrypting data to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 195,
        imageSrc: '',
        correct: false,
        text: 'Involves filtering network traffic for malicious content',
        audioSrc: '',
      },
      {
        challengeId: 195,
        imageSrc: '',
        correct: true,
        text: 'Involves injecting malicious scripts into web pages to exploit vulnerabilities in browsers',
        audioSrc: '',
      },

      // Challenge 196 options
      {
        challengeId: 196,
        imageSrc: '',
        correct: true,
        text: 'Using prepared statements and parameterized queries to prevent SQL injection',
        audioSrc: '',
      },
      {
        challengeId: 196,
        imageSrc: '',
        correct: false,
        text: 'Encrypting data to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 196,
        imageSrc: '',
        correct: false,
        text: 'Implementing firewalls to block unauthorized access',
        audioSrc: '',
      },

      // Challenge 197 options
      {
        challengeId: 197,
        imageSrc: '',
        correct: true,
        text: 'To execute arbitrary commands or access unauthorized data by exploiting SQL vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 197,
        imageSrc: '',
        correct: false,
        text: 'To encrypt data in transit and protect it from eavesdropping',
        audioSrc: '',
      },
      {
        challengeId: 197,
        imageSrc: '',
        correct: false,
        text: 'To filter out spam emails and malicious attachments',
        audioSrc: '',
      },

      // Challenge 198 options

      {
        challengeId: 198,
        imageSrc: '',
        correct: false,
        text: 'SQL Injection',
        audioSrc: '',
      },
      {
        challengeId: 198,
        imageSrc: '',
        correct: true,
        text: 'Cross-Site Request Forgery (CSRF)',
        audioSrc: '',
      },
      {
        challengeId: 198,
        imageSrc: '',
        correct: false,
        text: 'Cross-Site Scripting (XSS)',
        audioSrc: '',
      },

      // Challenge 199 options
      {
        challengeId: 199,
        imageSrc: '',
        correct: true,
        text: 'Cross-Site Scripting (XSS)',
        audioSrc: '',
      },
      {
        challengeId: 199,
        imageSrc: '',
        correct: false,
        text: 'SQL Injection',
        audioSrc: '',
      },
      {
        challengeId: 199,
        imageSrc: '',
        correct: false,
        text: 'Buffer Overflow',
        audioSrc: '',
      },

      // Challenge 200 options
      {
        challengeId: 200,
        imageSrc: '',
        correct: true,
        text: 'Implementing bounds checking and using safe functions',
        audioSrc: '',
      },
      {
        challengeId: 200,
        imageSrc: '',
        correct: false,
        text: 'Encrypting sensitive data to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 200,
        imageSrc: '',
        correct: false,
        text: 'Using antivirus software to detect malicious code',
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
