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
        description: 'Introduction to Cybersecurity',
        order: 1,
      },
      {
        id: 2,
        courseId: 1,
        title: 'Unit 2',
        description: 'Understanding Threats',
        order: 2,
      },
      {
        id: 3,
        courseId: 1,
        title: 'Unit 3',
        description: 'Network Security',
        order: 3,
      },
      {
        id: 4,
        courseId: 1,
        title: 'Unit 4',
        description: 'Cryptography Basics',
        order: 4,
      },
      {
        id: 5,
        courseId: 1,
        title: 'Unit 5',
        description: 'Security Policies',
        order: 5,
      },
      {
        id: 6,
        courseId: 1,
        title: 'Unit 6',
        description: 'Ethical Hacking',
        order: 6,
      },
      {
        id: 7,
        courseId: 1,
        title: 'Unit 7',
        description: 'Malware Analysis',
        order: 7,
      },
      {
        id: 8,
        courseId: 1,
        title: 'Unit 8',
        description: 'Incident Response',
        order: 8,
      },
      {
        id: 9,
        courseId: 1,
        title: 'Unit 9',
        description: 'Compliance and Regulations',
        order: 9,
      },
      {
        id: 10,
        courseId: 1,
        title: 'Unit 10',
        description: 'Future Trends in Cybersecurity',
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
      {
        id: 46,
        lessonId: 5,
        type: 'ASSIST',
        order: 6,
        question: 'What is a VPN?',
      },
      {
        id: 47,
        lessonId: 5,
        type: 'ASSIST',
        order: 7,
        question: 'What is a Security Patch?',
      },
      {
        id: 48,
        lessonId: 5,
        type: 'SELECT',
        order: 8,
        question: 'What is Phishing?',
      },
      {
        id: 49,
        lessonId: 5,
        type: 'SELECT',
        order: 9,
        question: 'What is Malware?',
      },
      {
        id: 50,
        lessonId: 5,
        type: 'ASSIST',
        order: 10,
        question: 'What is Data Breach?',
      },
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
        correct: true,
        text: 'Improves security and limits the spread of threats',
        audioSrc: '',
      },
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
        correct: true,
        text: 'Firewalls control traffic between segments',
        audioSrc: '',
      },
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
        correct: false,
        text: 'Firewalls encrypt data between devices',
        audioSrc: '',
      },

      // Challenge 105 options
      {
        challengeId: 105,
        imageSrc: '',
        correct: true,
        text: 'Using VLANs and subnetting',
        audioSrc: '',
      },
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
        correct: true,
        text: 'Using VLANs',
        audioSrc: '',
      },
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
        correct: true,
        text: 'To control network traffic and protect against threats',
        audioSrc: '',
      },
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
        correct: true,
        text: 'Symmetric uses the same key for encryption and decryption, asymmetric uses a pair of keys',
        audioSrc: '',
      },
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
        correct: false,
        text: 'Symmetric encryption requires multiple keys',
        audioSrc: '',
      },

      // Challenge 124 options
      {
        challengeId: 124,
        imageSrc: '',
        correct: true,
        text: 'SSL/TLS uses encryption to secure data transmitted over the internet',
        audioSrc: '',
      },
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

      // Challenge 125 options
      {
        challengeId: 125,
        imageSrc: '',
        correct: true,
        text: 'AES, DES, RSA',
        audioSrc: '',
      },
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

      // Challenge 126 options
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
        text: 'Encryption speeds up data transmission',
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
        correct: true,
        text: 'AES',
        audioSrc: '',
      },
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

      // Challenge 128 options
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
        text: 'AES',
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
        correct: true,
        text: 'Securing data transmitted over the web',
        audioSrc: '',
      },
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
        correct: true,
        text: 'A VPN encrypts your internet traffic and hides your IP address',
        audioSrc: '',
      },
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

      // Challenge 132 options
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
        text: 'Increased internet speed',
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
        correct: true,
        text: 'Encryption secures data transmitted over the VPN tunnel',
        audioSrc: '',
      },
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
        correct: true,
        text: 'VPN tunneling encapsulates your data within another protocol',
        audioSrc: '',
      },
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
        correct: false,
        text: 'VPN tunneling speeds up your internet connection',
        audioSrc: '',
      },

      // Challenge 137 options
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
        text: 'FTP',
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
        correct: true,
        text: 'Hides it and replaces it with the VPN server’s IP address',
        audioSrc: '',
      },
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
        correct: true,
        text: 'A Distributed Denial of Service attack that overwhelms a system with traffic',
        audioSrc: '',
      },
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
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 142 options
      {
        challengeId: 142,
        imageSrc: '',
        correct: true,
        text: 'Flooding the network with excessive traffic',
        audioSrc: '',
      },
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
        correct: true,
        text: 'Rate limiting restricts the amount of traffic from a single source',
        audioSrc: '',
      },
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
        correct: true,
        text: 'SYN flood',
        audioSrc: '',
      },
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
        correct: true,
        text: 'Viruses, Trojans, Ransomware, Spyware',
        audioSrc: '',
      },
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

      // Challenge 152 options
      {
        challengeId: 152,
        imageSrc: '',
        correct: true,
        text: 'Disguises itself as legitimate software to gain access',
        audioSrc: '',
      },
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
        correct: true,
        text: 'Slow performance, unexpected pop-ups, and new toolbars',
        audioSrc: '',
      },
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
        correct: true,
        text: 'Trojan Horse',
        audioSrc: '',
      },
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
        correct: true,
        text: 'Trojan Horse',
        audioSrc: '',
      },
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
        correct: true,
        text: 'Detects and alerts on suspicious activities within a network',
        audioSrc: '',
      },
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

      // Challenge 162 options
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
        text: 'IDS and IPS are the same devices',
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
        correct: true,
        text: 'A system designed to lure and trap attackers',
        audioSrc: '',
      },
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
        correct: true,
        text: 'Controls access to the network and monitors traffic',
        audioSrc: '',
      },
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
        correct: true,
        text: 'Monitors and blocks potentially harmful activities in real-time',
        audioSrc: '',
      },
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
        correct: true,
        text: 'A vulnerability that is unknown to the software vendor and has no patch',
        audioSrc: '',
      },
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

      // Challenge 172 options
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
        text: 'Encrypts data to prevent unauthorized access',
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
        correct: true,
        text: 'Exploiting unpatched vulnerabilities and misconfigurations',
        audioSrc: '',
      },
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

      // Challenge 175 options
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
        text: 'Adds new features to the software',
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
        correct: true,
        text: 'Provides insights into emerging threats and vulnerabilities',
        audioSrc: '',
      },
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
        correct: true,
        text: 'Privilege escalation',
        audioSrc: '',
      },
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
        correct: true,
        text: 'Encrypts data and provides a secure connection over a public network',
        audioSrc: '',
      },
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
        correct: false,
        text: 'Monitors network activity',
        audioSrc: '',
      },

      // Challenge 182 options
      {
        challengeId: 182,
        imageSrc: '',
        correct: true,
        text: 'Adds an extra layer of security by requiring multiple forms of verification',
        audioSrc: '',
      },
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

      // Challenge 183 options
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
        text: 'Encrypts data for secure storage',
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
        correct: true,
        text: 'Encrypts data transmitted over the internet, securing it from eavesdropping',
        audioSrc: '',
      },
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
        correct: true,
        text: 'Enhances security by requiring more than one method of authentication',
        audioSrc: '',
      },
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
        correct: true,
        text: 'A vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users',
        audioSrc: '',
      },
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

      // Challenge 192 options
      {
        challengeId: 192,
        imageSrc: '',
        correct: true,
        text: 'A vulnerability that allows attackers to execute arbitrary SQL commands via input fields',
        audioSrc: '',
      },
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

      // Challenge 193 options
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
        text: 'A method of securing data with encryption',
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
        correct: true,
        text: 'Involves injecting malicious scripts into web pages to exploit vulnerabilities in browsers',
        audioSrc: '',
      },
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
        correct: true,
        text: 'Cross-Site Request Forgery (CSRF)',
        audioSrc: '',
      },
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

    // Lesson 21
    await db.insert(schema.challenges).values([
      {
        id: 201,
        lessonId: 21,
        type: 'ASSIST',
        order: 1,
        question: 'What is the purpose of a firewall?',
      },
      {
        id: 202,
        lessonId: 21,
        type: 'ASSIST',
        order: 2,
        question: 'Explain the concept of phishing.',
      },
      {
        id: 203,
        lessonId: 21,
        type: 'ASSIST',
        order: 3,
        question: 'What does a VPN do?',
      },
      {
        id: 204,
        lessonId: 21,
        type: 'ASSIST',
        order: 4,
        question: 'How does two-factor authentication enhance security?',
      },
      {
        id: 205,
        lessonId: 21,
        type: 'ASSIST',
        order: 5,
        question: 'What is social engineering?',
      },
      {
        id: 206,
        lessonId: 21,
        type: 'ASSIST',
        order: 6,
        question: 'Describe the function of an IDS.',
      },
      {
        id: 207,
        lessonId: 21,
        type: 'SELECT',
        order: 7,
        question: 'What is a firewall used for?',
      },
      {
        id: 208,
        lessonId: 21,
        type: 'SELECT',
        order: 8,
        question: 'What is phishing?',
      },
      {
        id: 209,
        lessonId: 21,
        type: 'SELECT',
        order: 9,
        question: 'What is the main benefit of using a VPN?',
      },
      {
        id: 210,
        lessonId: 21,
        type: 'SELECT',
        order: 10,
        question: 'What does two-factor authentication do?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 201 options
      {
        challengeId: 201,
        imageSrc: '',
        correct: true,
        text: 'Blocks unauthorized network access',
        audioSrc: '',
      },
      {
        challengeId: 201,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data for storage',
        audioSrc: '',
      },
      {
        challengeId: 201,
        imageSrc: '',
        correct: false,
        text: 'Scans for malware on devices',
        audioSrc: '',
      },

      // Challenge 202 options
      {
        challengeId: 202,
        imageSrc: '',
        correct: true,
        text: 'A technique used to trick people into divulging sensitive information',
        audioSrc: '',
      },
      {
        challengeId: 202,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 202,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 203 options
      {
        challengeId: 203,
        imageSrc: '',
        correct: true,
        text: 'Secures internet connections and protects privacy by encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 203,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for suspicious activity',
        audioSrc: '',
      },
      {
        challengeId: 203,
        imageSrc: '',
        correct: false,
        text: 'Blocks unauthorized access to networks',
        audioSrc: '',
      },

      // Challenge 204 options
      {
        challengeId: 204,
        imageSrc: '',
        correct: true,
        text: 'Adds an extra layer of security by requiring a second form of verification',
        audioSrc: '',
      },
      {
        challengeId: 204,
        imageSrc: '',
        correct: false,
        text: 'Monitors network activity for threats',
        audioSrc: '',
      },
      {
        challengeId: 204,
        imageSrc: '',
        correct: false,
        text: 'Encrypts sensitive data in transit',
        audioSrc: '',
      },

      // Challenge 205 options
      {
        challengeId: 205,
        imageSrc: '',
        correct: true,
        text: 'Manipulating individuals into divulging confidential information',
        audioSrc: '',
      },
      {
        challengeId: 205,
        imageSrc: '',
        correct: false,
        text: 'Encrypting data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 205,
        imageSrc: '',
        correct: false,
        text: 'Blocking harmful network traffic',
        audioSrc: '',
      },

      // Challenge 206 options
      {
        challengeId: 206,
        imageSrc: '',
        correct: true,
        text: 'Detects and alerts on suspicious network activities',
        audioSrc: '',
      },
      {
        challengeId: 206,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data for storage and transmission',
        audioSrc: '',
      },
      {
        challengeId: 206,
        imageSrc: '',
        correct: false,
        text: 'Blocks unauthorized network access',
        audioSrc: '',
      },

      // Challenge 207 options
      {
        challengeId: 207,
        imageSrc: '',
        correct: true,
        text: 'To filter and monitor network traffic',
        audioSrc: '',
      },
      {
        challengeId: 207,
        imageSrc: '',
        correct: false,
        text: 'To encrypt data during transmission',
        audioSrc: '',
      },
      {
        challengeId: 207,
        imageSrc: '',
        correct: false,
        text: 'To manage user authentication',
        audioSrc: '',
      },

      // Challenge 208 options
      {
        challengeId: 208,
        imageSrc: '',
        correct: true,
        text: 'A fraudulent attempt to acquire sensitive information',
        audioSrc: '',
      },
      {
        challengeId: 208,
        imageSrc: '',
        correct: false,
        text: 'A technique for securing network connections',
        audioSrc: '',
      },
      {
        challengeId: 208,
        imageSrc: '',
        correct: false,
        text: 'A method for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 209 options
      {
        challengeId: 209,
        imageSrc: '',
        correct: true,
        text: 'Encrypts data to ensure secure communications',
        audioSrc: '',
      },
      {
        challengeId: 209,
        imageSrc: '',
        correct: false,
        text: 'Filters and blocks harmful network traffic',
        audioSrc: '',
      },
      {
        challengeId: 209,
        imageSrc: '',
        correct: false,
        text: 'Detects and responds to network attacks',
        audioSrc: '',
      },

      // Challenge 210 options
      {
        challengeId: 210,
        imageSrc: '',
        correct: true,
        text: 'Requires multiple forms of verification to access an account',
        audioSrc: '',
      },
      {
        challengeId: 210,
        imageSrc: '',
        correct: false,
        text: 'Monitors network activity for security threats',
        audioSrc: '',
      },
      {
        challengeId: 210,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it during transmission',
        audioSrc: '',
      },
    ]);

    // Lesson 22
    await db.insert(schema.challenges).values([
      {
        id: 211,
        lessonId: 22,
        type: 'ASSIST',
        order: 1,
        question: 'What is the role of a proxy server?',
      },
      {
        id: 212,
        lessonId: 22,
        type: 'ASSIST',
        order: 2,
        question: 'Explain what an antivirus does.',
      },
      {
        id: 213,
        lessonId: 22,
        type: 'ASSIST',
        order: 3,
        question: 'How does a web application firewall (WAF) work?',
      },
      {
        id: 214,
        lessonId: 22,
        type: 'ASSIST',
        order: 4,
        question: 'What is a DDoS attack?',
      },
      {
        id: 215,
        lessonId: 22,
        type: 'ASSIST',
        order: 5,
        question: 'Describe the function of network segmentation.',
      },
      {
        id: 216,
        lessonId: 22,
        type: 'ASSIST',
        order: 6,
        question: 'What is the purpose of a security patch?',
      },
      {
        id: 217,
        lessonId: 22,
        type: 'SELECT',
        order: 7,
        question: 'What does a proxy server do?',
      },
      {
        id: 218,
        lessonId: 22,
        type: 'SELECT',
        order: 8,
        question: 'What is the main function of antivirus software?',
      },
      {
        id: 219,
        lessonId: 22,
        type: 'SELECT',
        order: 9,
        question: 'What is the benefit of using a WAF?',
      },
      {
        id: 220,
        lessonId: 22,
        type: 'SELECT',
        order: 10,
        question: 'How does a DDoS attack affect services?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 211 options
      {
        challengeId: 211,
        imageSrc: '',
        correct: true,
        text: 'Acts as an intermediary between a user and the internet',
        audioSrc: '',
      },
      {
        challengeId: 211,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data for secure storage',
        audioSrc: '',
      },
      {
        challengeId: 211,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for malicious activities',
        audioSrc: '',
      },

      // Challenge 212 options
      {
        challengeId: 212,
        imageSrc: '',
        correct: true,
        text: 'Detects and removes malicious software from devices',
        audioSrc: '',
      },
      {
        challengeId: 212,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for anomalies',
        audioSrc: '',
      },
      {
        challengeId: 212,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data during transmission',
        audioSrc: '',
      },

      // Challenge 213 options
      {
        challengeId: 213,
        imageSrc: '',
        correct: true,
        text: 'Monitors and filters HTTP traffic between web applications and users',
        audioSrc: '',
      },
      {
        challengeId: 213,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to secure it in transit',
        audioSrc: '',
      },
      {
        challengeId: 213,
        imageSrc: '',
        correct: false,
        text: 'Detects and prevents unauthorized network access',
        audioSrc: '',
      },

      // Challenge 214 options
      {
        challengeId: 214,
        imageSrc: '',
        correct: true,
        text: 'Overwhelms a server with traffic to make it unavailable',
        audioSrc: '',
      },
      {
        challengeId: 214,
        imageSrc: '',
        correct: false,
        text: 'Intercepts and decrypts secure communications',
        audioSrc: '',
      },
      {
        challengeId: 214,
        imageSrc: '',
        correct: false,
        text: 'Secures data by encrypting it during transfer',
        audioSrc: '',
      },

      // Challenge 215 options
      {
        challengeId: 215,
        imageSrc: '',
        correct: true,
        text: 'Divides a network into smaller segments to improve security',
        audioSrc: '',
      },
      {
        challengeId: 215,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 215,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for malicious activities',
        audioSrc: '',
      },

      // Challenge 216 options
      {
        challengeId: 216,
        imageSrc: '',
        correct: true,
        text: 'Fixes vulnerabilities in software by updating it',
        audioSrc: '',
      },
      {
        challengeId: 216,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it during transmission',
        audioSrc: '',
      },
      {
        challengeId: 216,
        imageSrc: '',
        correct: false,
        text: 'Blocks unauthorized network access',
        audioSrc: '',
      },

      // Challenge 217 options
      {
        challengeId: 217,
        imageSrc: '',
        correct: true,
        text: 'Filters and forwards network requests',
        audioSrc: '',
      },
      {
        challengeId: 217,
        imageSrc: '',
        correct: false,
        text: 'Encrypts network traffic for secure communications',
        audioSrc: '',
      },
      {
        challengeId: 217,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 218 options
      {
        challengeId: 218,
        imageSrc: '',
        correct: true,
        text: 'Protects devices by detecting and removing malware',
        audioSrc: '',
      },
      {
        challengeId: 218,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for anomalies',
        audioSrc: '',
      },
      {
        challengeId: 218,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data during transfer to prevent eavesdropping',
        audioSrc: '',
      },

      // Challenge 219 options
      {
        challengeId: 219,
        imageSrc: '',
        correct: true,
        text: 'Filters HTTP requests and responses to protect web applications',
        audioSrc: '',
      },
      {
        challengeId: 219,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 219,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for potential threats',
        audioSrc: '',
      },

      // Challenge 220 options
      {
        challengeId: 220,
        imageSrc: '',
        correct: true,
        text: 'Makes services unavailable by overwhelming them with traffic',
        audioSrc: '',
      },
      {
        challengeId: 220,
        imageSrc: '',
        correct: false,
        text: 'Secures data by encrypting it during transmission',
        audioSrc: '',
      },
      {
        challengeId: 220,
        imageSrc: '',
        correct: false,
        text: 'Monitors and filters network traffic for security purposes',
        audioSrc: '',
      },
    ]);

    // Lesson 23
    await db.insert(schema.challenges).values([
      {
        id: 221,
        lessonId: 23,
        type: 'ASSIST',
        order: 1,
        question: 'What does a penetration test involve?',
      },
      {
        id: 222,
        lessonId: 23,
        type: 'ASSIST',
        order: 2,
        question: 'Explain the concept of an insider threat.',
      },
      {
        id: 223,
        lessonId: 23,
        type: 'ASSIST',
        order: 3,
        question: 'What is the function of an SIEM?',
      },
      {
        id: 224,
        lessonId: 23,
        type: 'ASSIST',
        order: 4,
        question: 'How does encryption protect data?',
      },
      {
        id: 225,
        lessonId: 23,
        type: 'ASSIST',
        order: 5,
        question: 'What is the purpose of a security policy?',
      },
      {
        id: 226,
        lessonId: 23,
        type: 'ASSIST',
        order: 6,
        question: 'Describe the role of an endpoint protection system.',
      },
      {
        id: 227,
        lessonId: 23,
        type: 'SELECT',
        order: 7,
        question: 'What does a penetration test do?',
      },
      {
        id: 228,
        lessonId: 23,
        type: 'SELECT',
        order: 8,
        question: 'What is an insider threat?',
      },
      {
        id: 229,
        lessonId: 23,
        type: 'SELECT',
        order: 9,
        question: 'What does an SIEM do?',
      },
      {
        id: 230,
        lessonId: 23,
        type: 'SELECT',
        order: 10,
        question: 'How does encryption secure data?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 221 options
      {
        challengeId: 221,
        imageSrc: '',
        correct: true,
        text: 'Simulates attacks to identify vulnerabilities in systems',
        audioSrc: '',
      },
      {
        challengeId: 221,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to secure it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 221,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for suspicious activities',
        audioSrc: '',
      },

      // Challenge 222 options
      {
        challengeId: 222,
        imageSrc: '',
        correct: true,
        text: 'A threat posed by individuals with authorized access to systems',
        audioSrc: '',
      },
      {
        challengeId: 222,
        imageSrc: '',
        correct: false,
        text: 'A type of malware that encrypts files for ransom',
        audioSrc: '',
      },
      {
        challengeId: 222,
        imageSrc: '',
        correct: false,
        text: 'An attack that exploits vulnerabilities in web applications',
        audioSrc: '',
      },

      // Challenge 223 options
      {
        challengeId: 223,
        imageSrc: '',
        correct: true,
        text: 'Collects and analyzes security data from various sources',
        audioSrc: '',
      },
      {
        challengeId: 223,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data for secure transmission',
        audioSrc: '',
      },
      {
        challengeId: 223,
        imageSrc: '',
        correct: false,
        text: 'Detects and responds to network attacks',
        audioSrc: '',
      },

      // Challenge 224 options
      {
        challengeId: 224,
        imageSrc: '',
        correct: true,
        text: 'Transforms data into a secure format to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 224,
        imageSrc: '',
        correct: false,
        text: 'Filters network traffic for security threats',
        audioSrc: '',
      },
      {
        challengeId: 224,
        imageSrc: '',
        correct: false,
        text: 'Monitors and analyzes network activity for anomalies',
        audioSrc: '',
      },

      // Challenge 225 options
      {
        challengeId: 225,
        imageSrc: '',
        correct: true,
        text: 'Provides guidelines for maintaining and securing systems',
        audioSrc: '',
      },
      {
        challengeId: 225,
        imageSrc: '',
        correct: false,
        text: 'Encrypts sensitive information for secure storage',
        audioSrc: '',
      },
      {
        challengeId: 225,
        imageSrc: '',
        correct: false,
        text: 'Detects and responds to network threats',
        audioSrc: '',
      },

      // Challenge 226 options
      {
        challengeId: 226,
        imageSrc: '',
        correct: true,
        text: 'Protects endpoints from malware and unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 226,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 226,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 227 options
      {
        challengeId: 227,
        imageSrc: '',
        correct: true,
        text: 'Tests systems for vulnerabilities by simulating attacks',
        audioSrc: '',
      },
      {
        challengeId: 227,
        imageSrc: '',
        correct: false,
        text: 'Encrypts sensitive data to ensure secure storage',
        audioSrc: '',
      },
      {
        challengeId: 227,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for anomalies',
        audioSrc: '',
      },

      // Challenge 228 options
      {
        challengeId: 228,
        imageSrc: '',
        correct: true,
        text: 'A threat from someone within the organization',
        audioSrc: '',
      },
      {
        challengeId: 228,
        imageSrc: '',
        correct: false,
        text: 'A type of malware that encrypts files for ransom',
        audioSrc: '',
      },
      {
        challengeId: 228,
        imageSrc: '',
        correct: false,
        text: 'A technique for intercepting network traffic',
        audioSrc: '',
      },

      // Challenge 229 options
      {
        challengeId: 229,
        imageSrc: '',
        correct: true,
        text: 'Aggregates and analyzes security data from various sources',
        audioSrc: '',
      },
      {
        challengeId: 229,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data during transfer to protect it from eavesdropping',
        audioSrc: '',
      },
      {
        challengeId: 229,
        imageSrc: '',
        correct: false,
        text: 'Detects and prevents unauthorized access to networks',
        audioSrc: '',
      },

      // Challenge 230 options
      {
        challengeId: 230,
        imageSrc: '',
        correct: true,
        text: 'Transforms readable data into a coded format to protect its confidentiality',
        audioSrc: '',
      },
      {
        challengeId: 230,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for malicious activities',
        audioSrc: '',
      },
      {
        challengeId: 230,
        imageSrc: '',
        correct: false,
        text: 'Blocks unauthorized access to networks',
        audioSrc: '',
      },
    ]);

    // Lesson 24
    await db.insert(schema.challenges).values([
      {
        id: 231,
        lessonId: 24,
        type: 'ASSIST',
        order: 1,
        question:
          'What is the difference between symmetric and asymmetric encryption?',
      },
      {
        id: 232,
        lessonId: 24,
        type: 'ASSIST',
        order: 2,
        question: 'How does a honeypot improve security?',
      },
      {
        id: 233,
        lessonId: 24,
        type: 'ASSIST',
        order: 3,
        question: 'What is the role of a CISO?',
      },
      {
        id: 234,
        lessonId: 24,
        type: 'ASSIST',
        order: 4,
        question: 'Explain the term “zero-day vulnerability”.',
      },
      {
        id: 235,
        lessonId: 24,
        type: 'ASSIST',
        order: 5,
        question: 'What are the benefits of security awareness training?',
      },
      {
        id: 236,
        lessonId: 24,
        type: 'ASSIST',
        order: 6,
        question: 'Describe the function of a security audit.',
      },
      {
        id: 237,
        lessonId: 24,
        type: 'SELECT',
        order: 7,
        question: 'What is symmetric encryption?',
      },
      {
        id: 238,
        lessonId: 24,
        type: 'SELECT',
        order: 8,
        question: 'How does a honeypot work?',
      },
      {
        id: 239,
        lessonId: 24,
        type: 'SELECT',
        order: 9,
        question: 'What does a CISO do?',
      },
      {
        id: 240,
        lessonId: 24,
        type: 'SELECT',
        order: 10,
        question: 'What is a zero-day vulnerability?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 231 options
      {
        challengeId: 231,
        imageSrc: '',
        correct: true,
        text: 'Symmetric encryption uses the same key for encryption and decryption, while asymmetric uses a pair of keys',
        audioSrc: '',
      },
      {
        challengeId: 231,
        imageSrc: '',
        correct: false,
        text: 'Symmetric encryption is less secure than asymmetric encryption',
        audioSrc: '',
      },
      {
        challengeId: 231,
        imageSrc: '',
        correct: false,
        text: 'Asymmetric encryption uses a single key for both encryption and decryption',
        audioSrc: '',
      },

      // Challenge 232 options
      {
        challengeId: 232,
        imageSrc: '',
        correct: true,
        text: 'Attracts and monitors attackers to gather information and improve security',
        audioSrc: '',
      },
      {
        challengeId: 232,
        imageSrc: '',
        correct: false,
        text: 'Encrypts sensitive data to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 232,
        imageSrc: '',
        correct: false,
        text: 'Blocks malicious network traffic',
        audioSrc: '',
      },

      // Challenge 233 options
      {
        challengeId: 233,
        imageSrc: '',
        correct: true,
        text: 'Oversees the organization’s overall security posture and strategy',
        audioSrc: '',
      },
      {
        challengeId: 233,
        imageSrc: '',
        correct: false,
        text: 'Handles day-to-day technical security operations',
        audioSrc: '',
      },
      {
        challengeId: 233,
        imageSrc: '',
        correct: false,
        text: 'Manages the organization’s network infrastructure',
        audioSrc: '',
      },

      // Challenge 234 options
      {
        challengeId: 234,
        imageSrc: '',
        correct: true,
        text: 'A vulnerability that is unknown to those who should be mitigating it',
        audioSrc: '',
      },
      {
        challengeId: 234,
        imageSrc: '',
        correct: false,
        text: 'A security flaw that has been patched by the software vendor',
        audioSrc: '',
      },
      {
        challengeId: 234,
        imageSrc: '',
        correct: false,
        text: 'A vulnerability that has been widely publicized and is being actively exploited',
        audioSrc: '',
      },

      // Challenge 235 options
      {
        challengeId: 235,
        imageSrc: '',
        correct: true,
        text: 'Increases employee awareness of security practices and reduces risk',
        audioSrc: '',
      },
      {
        challengeId: 235,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 235,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for malicious activities',
        audioSrc: '',
      },

      // Challenge 236 options
      {
        challengeId: 236,
        imageSrc: '',
        correct: true,
        text: 'Evaluates and ensures the effectiveness of an organization’s security controls',
        audioSrc: '',
      },
      {
        challengeId: 236,
        imageSrc: '',
        correct: false,
        text: 'Provides real-time protection against malware and unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 236,
        imageSrc: '',
        correct: false,
        text: 'Blocks malicious network traffic and unauthorized access',
        audioSrc: '',
      },

      // Challenge 237 options
      {
        challengeId: 237,
        imageSrc: '',
        correct: true,
        text: 'Uses a single key for both encryption and decryption processes',
        audioSrc: '',
      },
      {
        challengeId: 237,
        imageSrc: '',
        correct: false,
        text: 'Uses two keys: a public key for encryption and a private key for decryption',
        audioSrc: '',
      },
      {
        challengeId: 237,
        imageSrc: '',
        correct: false,
        text: 'Requires a secure key exchange protocol to function',
        audioSrc: '',
      },

      // Challenge 238 options
      {
        challengeId: 238,
        imageSrc: '',
        correct: true,
        text: 'Attracts attackers to a controlled environment to study their methods',
        audioSrc: '',
      },
      {
        challengeId: 238,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to secure it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 238,
        imageSrc: '',
        correct: false,
        text: 'Blocks unauthorized network traffic',
        audioSrc: '',
      },

      // Challenge 239 options
      {
        challengeId: 239,
        imageSrc: '',
        correct: true,
        text: 'Directly manages the organization’s information security strategy',
        audioSrc: '',
      },
      {
        challengeId: 239,
        imageSrc: '',
        correct: false,
        text: 'Handles routine security operations and incident response',
        audioSrc: '',
      },
      {
        challengeId: 239,
        imageSrc: '',
        correct: false,
        text: 'Oversees the IT infrastructure and network management',
        audioSrc: '',
      },

      // Challenge 240 options
      {
        challengeId: 240,
        imageSrc: '',
        correct: true,
        text: 'A vulnerability that has not yet been discovered by the software vendor or the public',
        audioSrc: '',
      },
      {
        challengeId: 240,
        imageSrc: '',
        correct: false,
        text: 'A vulnerability that has been patched and is no longer exploitable',
        audioSrc: '',
      },
      {
        challengeId: 240,
        imageSrc: '',
        correct: false,
        text: 'A vulnerability that has been widely publicized and is actively being exploited',
        audioSrc: '',
      },
    ]);

    // Lesson 25
    await db.insert(schema.challenges).values([
      {
        id: 241,
        lessonId: 25,
        type: 'ASSIST',
        order: 1,
        question: 'What is the function of a load balancer?',
      },
      {
        id: 242,
        lessonId: 25,
        type: 'ASSIST',
        order: 2,
        question: 'Explain the term “data breach”.',
      },
      {
        id: 243,
        lessonId: 25,
        type: 'ASSIST',
        order: 3,
        question: 'How does an intrusion detection system (IDS) work?',
      },
      {
        id: 244,
        lessonId: 25,
        type: 'ASSIST',
        order: 4,
        question: 'What is a security token?',
      },
      {
        id: 245,
        lessonId: 25,
        type: 'ASSIST',
        order: 5,
        question: 'What is the purpose of a security incident response plan?',
      },
      {
        id: 246,
        lessonId: 25,
        type: 'ASSIST',
        order: 6,
        question: 'Describe the role of a cryptographic key.',
      },
      {
        id: 247,
        lessonId: 25,
        type: 'SELECT',
        order: 7,
        question: 'What does a load balancer do?',
      },
      {
        id: 248,
        lessonId: 25,
        type: 'SELECT',
        order: 8,
        question: 'What is a data breach?',
      },
      {
        id: 249,
        lessonId: 25,
        type: 'SELECT',
        order: 9,
        question: 'How does an IDS operate?',
      },
      {
        id: 250,
        lessonId: 25,
        type: 'SELECT',
        order: 10,
        question: 'What is a security token?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 241 options
      {
        challengeId: 241,
        imageSrc: '',
        correct: true,
        text: 'Distributes incoming traffic across multiple servers to ensure high availability',
        audioSrc: '',
      },
      {
        challengeId: 241,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data during transmission to secure it from eavesdropping',
        audioSrc: '',
      },
      {
        challengeId: 241,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 242 options
      {
        challengeId: 242,
        imageSrc: '',
        correct: true,
        text: 'An incident where unauthorized access to sensitive data occurs',
        audioSrc: '',
      },
      {
        challengeId: 242,
        imageSrc: '',
        correct: false,
        text: 'A technique used to prevent unauthorized access to systems',
        audioSrc: '',
      },
      {
        challengeId: 242,
        imageSrc: '',
        correct: false,
        text: 'A tool used to detect and respond to network threats',
        audioSrc: '',
      },

      // Challenge 243 options
      {
        challengeId: 243,
        imageSrc: '',
        correct: true,
        text: 'Monitors network traffic to detect suspicious activities and potential threats',
        audioSrc: '',
      },
      {
        challengeId: 243,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 243,
        imageSrc: '',
        correct: false,
        text: 'Blocks unauthorized network access',
        audioSrc: '',
      },

      // Challenge 244 options
      {
        challengeId: 244,
        imageSrc: '',
        correct: true,
        text: 'A piece of hardware or software used to authenticate users',
        audioSrc: '',
      },
      {
        challengeId: 244,
        imageSrc: '',
        correct: false,
        text: 'A type of malware designed to steal sensitive information',
        audioSrc: '',
      },
      {
        challengeId: 244,
        imageSrc: '',
        correct: false,
        text: 'A network device that filters traffic based on security policies',
        audioSrc: '',
      },

      // Challenge 245 options
      {
        challengeId: 245,
        imageSrc: '',
        correct: true,
        text: 'Provides a structured approach to manage and respond to security incidents',
        audioSrc: '',
      },
      {
        challengeId: 245,
        imageSrc: '',
        correct: false,
        text: 'Encrypts sensitive data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 245,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for suspicious activities',
        audioSrc: '',
      },

      // Challenge 246 options
      {
        challengeId: 246,
        imageSrc: '',
        correct: true,
        text: 'Used to encrypt and decrypt data to ensure its confidentiality and integrity',
        audioSrc: '',
      },
      {
        challengeId: 246,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for malicious activities',
        audioSrc: '',
      },
      {
        challengeId: 246,
        imageSrc: '',
        correct: false,
        text: 'Filters and controls access to network resources',
        audioSrc: '',
      },

      // Challenge 247 options
      {
        challengeId: 247,
        imageSrc: '',
        correct: true,
        text: 'Balances the load across multiple servers to optimize resource utilization',
        audioSrc: '',
      },
      {
        challengeId: 247,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data during transmission to ensure secure communication',
        audioSrc: '',
      },
      {
        challengeId: 247,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for unauthorized access',
        audioSrc: '',
      },

      // Challenge 248 options
      {
        challengeId: 248,
        imageSrc: '',
        correct: true,
        text: 'Unauthorized access to confidential or sensitive data',
        audioSrc: '',
      },
      {
        challengeId: 248,
        imageSrc: '',
        correct: false,
        text: 'A method of encrypting data to secure it from eavesdropping',
        audioSrc: '',
      },
      {
        challengeId: 248,
        imageSrc: '',
        correct: false,
        text: 'A security measure used to block unauthorized network traffic',
        audioSrc: '',
      },

      // Challenge 249 options
      {
        challengeId: 249,
        imageSrc: '',
        correct: true,
        text: 'Detects and alerts on suspicious network activities and potential threats',
        audioSrc: '',
      },
      {
        challengeId: 249,
        imageSrc: '',
        correct: false,
        text: 'Encrypts network traffic to protect it from eavesdropping',
        audioSrc: '',
      },
      {
        challengeId: 249,
        imageSrc: '',
        correct: false,
        text: 'Blocks unauthorized access to network resources',
        audioSrc: '',
      },

      // Challenge 250 options
      {
        challengeId: 250,
        imageSrc: '',
        correct: true,
        text: 'A device or software used to authenticate and authorize users',
        audioSrc: '',
      },
      {
        challengeId: 250,
        imageSrc: '',
        correct: false,
        text: 'A type of attack that disrupts network services',
        audioSrc: '',
      },
      {
        challengeId: 250,
        imageSrc: '',
        correct: false,
        text: 'A software that monitors network traffic for security threats',
        audioSrc: '',
      },
    ]);

    // Lesson 26
    await db.insert(schema.challenges).values([
      {
        id: 251,
        lessonId: 26,
        type: 'ASSIST',
        order: 1,
        question: 'What is the purpose of a firewall?',
      },
      {
        id: 252,
        lessonId: 26,
        type: 'ASSIST',
        order: 2,
        question: 'Explain the concept of a security policy.',
      },
      {
        id: 253,
        lessonId: 26,
        type: 'ASSIST',
        order: 3,
        question: 'How does multi-factor authentication improve security?',
      },
      {
        id: 254,
        lessonId: 26,
        type: 'ASSIST',
        order: 4,
        question: 'What is the role of a penetration tester?',
      },
      {
        id: 255,
        lessonId: 26,
        type: 'ASSIST',
        order: 5,
        question: 'Describe the concept of data loss prevention (DLP).',
      },
      {
        id: 256,
        lessonId: 26,
        type: 'ASSIST',
        order: 6,
        question: 'What is the function of an antivirus program?',
      },
      {
        id: 257,
        lessonId: 26,
        type: 'SELECT',
        order: 7,
        question: 'What does a firewall do?',
      },
      {
        id: 258,
        lessonId: 26,
        type: 'SELECT',
        order: 8,
        question: 'What is a security policy?',
      },
      {
        id: 259,
        lessonId: 26,
        type: 'SELECT',
        order: 9,
        question: 'How does multi-factor authentication work?',
      },
      {
        id: 260,
        lessonId: 26,
        type: 'SELECT',
        order: 10,
        question: 'What does a penetration tester do?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 251 options
      {
        challengeId: 251,
        imageSrc: '',
        correct: true,
        text: 'Monitors and controls incoming and outgoing network traffic based on predetermined security rules',
        audioSrc: '',
      },
      {
        challengeId: 251,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data during transmission to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 251,
        imageSrc: '',
        correct: false,
        text: 'Detects and responds to malware infections on a system',
        audioSrc: '',
      },

      // Challenge 252 options
      {
        challengeId: 252,
        imageSrc: '',
        correct: true,
        text: 'A set of rules and practices designed to protect an organization’s assets',
        audioSrc: '',
      },
      {
        challengeId: 252,
        imageSrc: '',
        correct: false,
        text: 'A method of encrypting data to protect its confidentiality',
        audioSrc: '',
      },
      {
        challengeId: 252,
        imageSrc: '',
        correct: false,
        text: 'A type of security device used to monitor network traffic',
        audioSrc: '',
      },

      // Challenge 253 options
      {
        challengeId: 253,
        imageSrc: '',
        correct: true,
        text: 'Requires additional verification methods beyond just a password',
        audioSrc: '',
      },
      {
        challengeId: 253,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 253,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for suspicious activities',
        audioSrc: '',
      },

      // Challenge 254 options
      {
        challengeId: 254,
        imageSrc: '',
        correct: true,
        text: 'Tests systems and networks for vulnerabilities and security weaknesses',
        audioSrc: '',
      },
      {
        challengeId: 254,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },
      {
        challengeId: 254,
        imageSrc: '',
        correct: false,
        text: 'Manages security policies and procedures',
        audioSrc: '',
      },

      // Challenge 255 options
      {
        challengeId: 255,
        imageSrc: '',
        correct: true,
        text: 'Identifies and prevents the unauthorized transfer of sensitive data outside the organization',
        audioSrc: '',
      },
      {
        challengeId: 255,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality and integrity',
        audioSrc: '',
      },
      {
        challengeId: 255,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for malicious activities',
        audioSrc: '',
      },

      // Challenge 256 options
      {
        challengeId: 256,
        imageSrc: '',
        correct: true,
        text: 'Detects, prevents, and removes malware from a system',
        audioSrc: '',
      },
      {
        challengeId: 256,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 256,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for suspicious activities',
        audioSrc: '',
      },

      // Challenge 257 options
      {
        challengeId: 257,
        imageSrc: '',
        correct: true,
        text: 'Filters network traffic based on security rules to protect a network',
        audioSrc: '',
      },
      {
        challengeId: 257,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data during transmission to ensure its confidentiality',
        audioSrc: '',
      },
      {
        challengeId: 257,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for malicious activities',
        audioSrc: '',
      },

      // Challenge 258 options
      {
        challengeId: 258,
        imageSrc: '',
        correct: true,
        text: 'Rules and guidelines that define how to protect an organization’s assets',
        audioSrc: '',
      },
      {
        challengeId: 258,
        imageSrc: '',
        correct: false,
        text: 'A device used to block unauthorized network access',
        audioSrc: '',
      },
      {
        challengeId: 258,
        imageSrc: '',
        correct: false,
        text: 'A software that detects and responds to malware infections',
        audioSrc: '',
      },

      // Challenge 259 options
      {
        challengeId: 259,
        imageSrc: '',
        correct: true,
        text: 'Involves additional factors, such as a code sent to a mobile device, to verify identity',
        audioSrc: '',
      },
      {
        challengeId: 259,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 259,
        imageSrc: '',
        correct: false,
        text: 'Filters network traffic based on security policies',
        audioSrc: '',
      },

      // Challenge 260 options
      {
        challengeId: 260,
        imageSrc: '',
        correct: true,
        text: 'Simulates attacks to find vulnerabilities and weaknesses in systems',
        audioSrc: '',
      },
      {
        challengeId: 260,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },
      {
        challengeId: 260,
        imageSrc: '',
        correct: false,
        text: 'Handles day-to-day security operations',
        audioSrc: '',
      },
    ]);

    // Lesson 27
    await db.insert(schema.challenges).values([
      {
        id: 261,
        lessonId: 27,
        type: 'ASSIST',
        order: 1,
        question: 'What is the difference between IDS and IPS?',
      },
      {
        id: 262,
        lessonId: 27,
        type: 'ASSIST',
        order: 2,
        question: 'Explain the term “social engineering”.',
      },
      {
        id: 263,
        lessonId: 27,
        type: 'ASSIST',
        order: 3,
        question: 'What are the benefits of using a VPN?',
      },
      {
        id: 264,
        lessonId: 27,
        type: 'ASSIST',
        order: 4,
        question: 'Describe the concept of endpoint security.',
      },
      {
        id: 265,
        lessonId: 27,
        type: 'ASSIST',
        order: 5,
        question: 'What is the purpose of data encryption?',
      },
      {
        id: 266,
        lessonId: 27,
        type: 'ASSIST',
        order: 6,
        question:
          'What is the function of an intrusion prevention system (IPS)?',
      },
      {
        id: 267,
        lessonId: 27,
        type: 'SELECT',
        order: 7,
        question: 'What is the main function of an IDS?',
      },
      {
        id: 268,
        lessonId: 27,
        type: 'SELECT',
        order: 8,
        question: 'What is social engineering?',
      },
      {
        id: 269,
        lessonId: 27,
        type: 'SELECT',
        order: 9,
        question: 'How does a VPN benefit users?',
      },
      {
        id: 270,
        lessonId: 27,
        type: 'SELECT',
        order: 10,
        question: 'What does endpoint security do?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 261 options
      {
        challengeId: 261,
        imageSrc: '',
        correct: true,
        text: 'IDS monitors network traffic and alerts on suspicious activities, while IPS actively prevents attacks',
        audioSrc: '',
      },
      {
        challengeId: 261,
        imageSrc: '',
        correct: false,
        text: 'IDS encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 261,
        imageSrc: '',
        correct: false,
        text: 'IDS blocks unauthorized network access',
        audioSrc: '',
      },

      // Challenge 262 options
      {
        challengeId: 262,
        imageSrc: '',
        correct: true,
        text: 'Manipulates individuals into divulging confidential information',
        audioSrc: '',
      },
      {
        challengeId: 262,
        imageSrc: '',
        correct: false,
        text: 'A method used to encrypt data during transmission',
        audioSrc: '',
      },
      {
        challengeId: 262,
        imageSrc: '',
        correct: false,
        text: 'A technique to prevent unauthorized access to a network',
        audioSrc: '',
      },

      // Challenge 263 options
      {
        challengeId: 263,
        imageSrc: '',
        correct: true,
        text: 'Secures a user’s internet connection by routing traffic through a private server',
        audioSrc: '',
      },
      {
        challengeId: 263,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data at rest to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 263,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 264 options
      {
        challengeId: 264,
        imageSrc: '',
        correct: true,
        text: 'Protects individual devices from threats by securing endpoints',
        audioSrc: '',
      },
      {
        challengeId: 264,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 264,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality',
        audioSrc: '',
      },

      // Challenge 265 options
      {
        challengeId: 265,
        imageSrc: '',
        correct: true,
        text: 'Protects data from unauthorized access by converting it into an unreadable format',
        audioSrc: '',
      },
      {
        challengeId: 265,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },
      {
        challengeId: 265,
        imageSrc: '',
        correct: false,
        text: 'Blocks unauthorized network access',
        audioSrc: '',
      },

      // Challenge 266 options
      {
        challengeId: 266,
        imageSrc: '',
        correct: true,
        text: 'Detects and prevents potential security threats in real-time',
        audioSrc: '',
      },
      {
        challengeId: 266,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 266,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for suspicious activities',
        audioSrc: '',
      },

      // Challenge 267 options
      {
        challengeId: 267,
        imageSrc: '',
        correct: true,
        text: 'Alerts on suspicious activities but does not actively block them',
        audioSrc: '',
      },
      {
        challengeId: 267,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 267,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for unauthorized access',
        audioSrc: '',
      },

      // Challenge 268 options
      {
        challengeId: 268,
        imageSrc: '',
        correct: true,
        text: 'Tricks individuals into revealing confidential information through deception',
        audioSrc: '',
      },
      {
        challengeId: 268,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 268,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for malicious activities',
        audioSrc: '',
      },

      // Challenge 269 options
      {
        challengeId: 269,
        imageSrc: '',
        correct: true,
        text: 'Routes internet traffic through a private server to protect user privacy and data',
        audioSrc: '',
      },
      {
        challengeId: 269,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data at rest to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 269,
        imageSrc: '',
        correct: false,
        text: 'Blocks unauthorized network access',
        audioSrc: '',
      },

      // Challenge 270 options
      {
        challengeId: 270,
        imageSrc: '',
        correct: true,
        text: 'Secures devices and prevents attacks by protecting endpoint devices',
        audioSrc: '',
      },
      {
        challengeId: 270,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 270,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality',
        audioSrc: '',
      },
    ]);

    // Lesson 28
    await db.insert(schema.challenges).values([
      {
        id: 271,
        lessonId: 28,
        type: 'ASSIST',
        order: 1,
        question:
          'What is the difference between symmetric and asymmetric encryption?',
      },
      {
        id: 272,
        lessonId: 28,
        type: 'ASSIST',
        order: 2,
        question: 'Describe the concept of network segmentation.',
      },
      {
        id: 273,
        lessonId: 28,
        type: 'ASSIST',
        order: 3,
        question: 'What are the key principles of a risk management framework?',
      },
      {
        id: 274,
        lessonId: 28,
        type: 'ASSIST',
        order: 4,
        question: 'What is the purpose of a security operations center (SOC)?',
      },
      {
        id: 275,
        lessonId: 28,
        type: 'ASSIST',
        order: 5,
        question: 'Explain the term “phishing” and its common techniques.',
      },
      {
        id: 276,
        lessonId: 28,
        type: 'ASSIST',
        order: 6,
        question: 'What is the role of an incident response team (IRT)?',
      },
      {
        id: 277,
        lessonId: 28,
        type: 'SELECT',
        order: 7,
        question: 'What is symmetric encryption?',
      },
      {
        id: 278,
        lessonId: 28,
        type: 'SELECT',
        order: 8,
        question: 'How does network segmentation enhance security?',
      },
      {
        id: 279,
        lessonId: 28,
        type: 'SELECT',
        order: 9,
        question: 'What is a risk management framework?',
      },
      {
        id: 280,
        lessonId: 28,
        type: 'SELECT',
        order: 10,
        question: 'What is the function of a security operations center (SOC)?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 271 options
      {
        challengeId: 271,
        imageSrc: '',
        correct: true,
        text: 'Symmetric encryption uses the same key for both encryption and decryption, while asymmetric uses different keys',
        audioSrc: '',
      },
      {
        challengeId: 271,
        imageSrc: '',
        correct: false,
        text: 'Symmetric encryption uses different keys for encryption and decryption, while asymmetric uses the same key',
        audioSrc: '',
      },
      {
        challengeId: 271,
        imageSrc: '',
        correct: false,
        text: 'Both symmetric and asymmetric encryption use the same key for encryption and decryption',
        audioSrc: '',
      },

      // Challenge 272 options
      {
        challengeId: 272,
        imageSrc: '',
        correct: true,
        text: 'Divides a network into smaller segments to improve security and performance',
        audioSrc: '',
      },
      {
        challengeId: 272,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data during transmission to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 272,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for suspicious activities',
        audioSrc: '',
      },

      // Challenge 273 options
      {
        challengeId: 273,
        imageSrc: '',
        correct: true,
        text: 'Identifies, assesses, and prioritizes risks to manage them effectively',
        audioSrc: '',
      },
      {
        challengeId: 273,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 273,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 274 options
      {
        challengeId: 274,
        imageSrc: '',
        correct: true,
        text: 'Monitors and manages security operations and incidents within an organization',
        audioSrc: '',
      },
      {
        challengeId: 274,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 274,
        imageSrc: '',
        correct: false,
        text: 'Tests systems and networks for vulnerabilities',
        audioSrc: '',
      },

      // Challenge 275 options
      {
        challengeId: 275,
        imageSrc: '',
        correct: true,
        text: 'Tricks individuals into revealing sensitive information by pretending to be a trusted source',
        audioSrc: '',
      },
      {
        challengeId: 275,
        imageSrc: '',
        correct: false,
        text: 'A method of encrypting data to ensure its confidentiality',
        audioSrc: '',
      },
      {
        challengeId: 275,
        imageSrc: '',
        correct: false,
        text: 'A technique used to monitor network traffic for malicious activities',
        audioSrc: '',
      },

      // Challenge 276 options
      {
        challengeId: 276,
        imageSrc: '',
        correct: true,
        text: 'Handles and responds to security incidents and breaches',
        audioSrc: '',
      },
      {
        challengeId: 276,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 276,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 277 options
      {
        challengeId: 277,
        imageSrc: '',
        correct: true,
        text: 'Uses a single key for both encryption and decryption processes',
        audioSrc: '',
      },
      {
        challengeId: 277,
        imageSrc: '',
        correct: false,
        text: 'Uses different keys for encryption and decryption processes',
        audioSrc: '',
      },
      {
        challengeId: 277,
        imageSrc: '',
        correct: false,
        text: 'Uses multiple keys for both encryption and decryption processes',
        audioSrc: '',
      },

      // Challenge 278 options
      {
        challengeId: 278,
        imageSrc: '',
        correct: true,
        text: 'Increases security by isolating different parts of the network to limit the impact of a breach',
        audioSrc: '',
      },
      {
        challengeId: 278,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 278,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for suspicious activities',
        audioSrc: '',
      },

      // Challenge 279 options
      {
        challengeId: 279,
        imageSrc: '',
        correct: true,
        text: 'Provides a structured approach to managing and mitigating risks',
        audioSrc: '',
      },
      {
        challengeId: 279,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality and integrity',
        audioSrc: '',
      },
      {
        challengeId: 279,
        imageSrc: '',
        correct: false,
        text: 'Monitors and manages network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 280 options
      {
        challengeId: 280,
        imageSrc: '',
        correct: true,
        text: 'Provides oversight and coordination for all security operations within an organization',
        audioSrc: '',
      },
      {
        challengeId: 280,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data during transmission to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 280,
        imageSrc: '',
        correct: false,
        text: 'Tests systems and networks for security vulnerabilities',
        audioSrc: '',
      },
    ]);

    // Lesson 29
    await db.insert(schema.challenges).values([
      {
        id: 281,
        lessonId: 29,
        type: 'ASSIST',
        order: 1,
        question: 'What is the principle of least privilege?',
      },
      {
        id: 282,
        lessonId: 29,
        type: 'ASSIST',
        order: 2,
        question: 'Explain the concept of access control lists (ACLs).',
      },
      {
        id: 283,
        lessonId: 29,
        type: 'ASSIST',
        order: 3,
        question:
          'What is the difference between public and private keys in encryption?',
      },
      {
        id: 284,
        lessonId: 29,
        type: 'ASSIST',
        order: 4,
        question: 'What are the key components of a disaster recovery plan?',
      },
      {
        id: 285,
        lessonId: 29,
        type: 'ASSIST',
        order: 5,
        question: 'What is the role of a cybersecurity analyst?',
      },
      {
        id: 286,
        lessonId: 29,
        type: 'ASSIST',
        order: 6,
        question: 'Describe the concept of vulnerability management.',
      },
      {
        id: 287,
        lessonId: 29,
        type: 'SELECT',
        order: 7,
        question: 'What does the principle of least privilege involve?',
      },
      {
        id: 288,
        lessonId: 29,
        type: 'SELECT',
        order: 8,
        question: 'What is an access control list (ACL)?',
      },
      {
        id: 289,
        lessonId: 29,
        type: 'SELECT',
        order: 9,
        question: 'What are public and private keys used for in encryption?',
      },
      {
        id: 290,
        lessonId: 29,
        type: 'SELECT',
        order: 10,
        question: 'What is a disaster recovery plan?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 281 options
      {
        challengeId: 281,
        imageSrc: '',
        correct: true,
        text: 'Users are given only the access necessary to perform their job functions',
        audioSrc: '',
      },
      {
        challengeId: 281,
        imageSrc: '',
        correct: false,
        text: 'All users have unrestricted access to all system resources',
        audioSrc: '',
      },
      {
        challengeId: 281,
        imageSrc: '',
        correct: false,
        text: 'Access is granted based on user’s department rather than their role',
        audioSrc: '',
      },

      // Challenge 282 options
      {
        challengeId: 282,
        imageSrc: '',
        correct: true,
        text: 'Lists permissions for each user or group on specific resources',
        audioSrc: '',
      },
      {
        challengeId: 282,
        imageSrc: '',
        correct: false,
        text: 'A method of encrypting data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 282,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic for suspicious activities',
        audioSrc: '',
      },

      // Challenge 283 options
      {
        challengeId: 283,
        imageSrc: '',
        correct: true,
        text: 'Public keys are used for encryption, while private keys are used for decryption',
        audioSrc: '',
      },
      {
        challengeId: 283,
        imageSrc: '',
        correct: false,
        text: 'Public keys are used for decryption, while private keys are used for encryption',
        audioSrc: '',
      },
      {
        challengeId: 283,
        imageSrc: '',
        correct: false,
        text: 'Both public and private keys are used for encryption and decryption interchangeably',
        audioSrc: '',
      },

      // Challenge 284 options
      {
        challengeId: 284,
        imageSrc: '',
        correct: true,
        text: 'Includes procedures for backup, recovery, and continuity of operations',
        audioSrc: '',
      },
      {
        challengeId: 284,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data to ensure its confidentiality',
        audioSrc: '',
      },
      {
        challengeId: 284,
        imageSrc: '',
        correct: false,
        text: 'A set of rules for managing network traffic and security',
        audioSrc: '',
      },

      // Challenge 285 options
      {
        challengeId: 285,
        imageSrc: '',
        correct: true,
        text: 'Monitors and analyzes security threats and vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 285,
        imageSrc: '',
        correct: false,
        text: 'Manages user accounts and permissions within a system',
        audioSrc: '',
      },
      {
        challengeId: 285,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },

      // Challenge 286 options
      {
        challengeId: 286,
        imageSrc: '',
        correct: true,
        text: 'Identifies, assesses, and prioritizes vulnerabilities to reduce risk',
        audioSrc: '',
      },
      {
        challengeId: 286,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality and integrity',
        audioSrc: '',
      },
      {
        challengeId: 286,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for unauthorized access',
        audioSrc: '',
      },

      // Challenge 287 options
      {
        challengeId: 287,
        imageSrc: '',
        correct: true,
        text: 'Access is restricted to only what is necessary for performing job functions',
        audioSrc: '',
      },
      {
        challengeId: 287,
        imageSrc: '',
        correct: false,
        text: 'All users have unrestricted access to system resources',
        audioSrc: '',
      },
      {
        challengeId: 287,
        imageSrc: '',
        correct: false,
        text: 'Access is granted based on user’s department rather than their role',
        audioSrc: '',
      },

      // Challenge 288 options
      {
        challengeId: 288,
        imageSrc: '',
        correct: true,
        text: 'A list of permissions for each user or group on specific resources',
        audioSrc: '',
      },
      {
        challengeId: 288,
        imageSrc: '',
        correct: false,
        text: 'A type of encryption used to protect data during transmission',
        audioSrc: '',
      },
      {
        challengeId: 288,
        imageSrc: '',
        correct: false,
        text: 'A method for monitoring network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 289 options
      {
        challengeId: 289,
        imageSrc: '',
        correct: true,
        text: 'Public keys encrypt data, and private keys decrypt it',
        audioSrc: '',
      },
      {
        challengeId: 289,
        imageSrc: '',
        correct: false,
        text: 'Public keys decrypt data, and private keys encrypt it',
        audioSrc: '',
      },
      {
        challengeId: 289,
        imageSrc: '',
        correct: false,
        text: 'Both keys are used interchangeably for encryption and decryption',
        audioSrc: '',
      },

      // Challenge 290 options
      {
        challengeId: 290,
        imageSrc: '',
        correct: true,
        text: 'Ensures the continuity of operations and recovery from disruptions',
        audioSrc: '',
      },
      {
        challengeId: 290,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 290,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
    ]);

    // Lesson 30
    await db.insert(schema.challenges).values([
      {
        id: 291,
        lessonId: 30,
        type: 'ASSIST',
        order: 1,
        question: 'What is a digital certificate?',
      },
      {
        id: 292,
        lessonId: 30,
        type: 'ASSIST',
        order: 2,
        question: 'Explain the concept of multi-factor authentication (MFA).',
      },
      {
        id: 293,
        lessonId: 30,
        type: 'ASSIST',
        order: 3,
        question: 'What is the purpose of a security policy?',
      },
      {
        id: 294,
        lessonId: 30,
        type: 'ASSIST',
        order: 4,
        question: 'Describe the concept of a firewall.',
      },
      {
        id: 295,
        lessonId: 30,
        type: 'ASSIST',
        order: 5,
        question: 'What is the role of encryption in cybersecurity?',
      },
      {
        id: 296,
        lessonId: 30,
        type: 'ASSIST',
        order: 6,
        question: 'What is the importance of regular security audits?',
      },
      {
        id: 297,
        lessonId: 30,
        type: 'SELECT',
        order: 7,
        question: 'What is a digital certificate used for?',
      },
      {
        id: 298,
        lessonId: 30,
        type: 'SELECT',
        order: 8,
        question: 'What is multi-factor authentication (MFA)?',
      },
      {
        id: 299,
        lessonId: 30,
        type: 'SELECT',
        order: 9,
        question: 'What is the purpose of a security policy?',
      },
      {
        id: 300,
        lessonId: 30,
        type: 'SELECT',
        order: 10,
        question: 'What does a firewall do?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 291 options
      {
        challengeId: 291,
        imageSrc: '',
        correct: true,
        text: 'A digital certificate is used to verify the identity of a user or device',
        audioSrc: '',
      },
      {
        challengeId: 291,
        imageSrc: '',
        correct: false,
        text: 'A digital certificate encrypts data to ensure its confidentiality',
        audioSrc: '',
      },
      {
        challengeId: 291,
        imageSrc: '',
        correct: false,
        text: 'A digital certificate monitors network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 292 options
      {
        challengeId: 292,
        imageSrc: '',
        correct: true,
        text: 'Requires users to provide two or more verification factors to gain access',
        audioSrc: '',
      },
      {
        challengeId: 292,
        imageSrc: '',
        correct: false,
        text: 'Uses a single password for authentication',
        audioSrc: '',
      },
      {
        challengeId: 292,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },

      // Challenge 293 options
      {
        challengeId: 293,
        imageSrc: '',
        correct: true,
        text: 'Establishes rules and guidelines for protecting information and systems',
        audioSrc: '',
      },
      {
        challengeId: 293,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality',
        audioSrc: '',
      },
      {
        challengeId: 293,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for suspicious activities',
        audioSrc: '',
      },

      // Challenge 294 options
      {
        challengeId: 294,
        imageSrc: '',
        correct: true,
        text: 'Controls and monitors network traffic based on predefined security rules',
        audioSrc: '',
      },
      {
        challengeId: 294,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 294,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 295 options
      {
        challengeId: 295,
        imageSrc: '',
        correct: true,
        text: 'Ensures data confidentiality, integrity, and authenticity through encryption',
        audioSrc: '',
      },
      {
        challengeId: 295,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 295,
        imageSrc: '',
        correct: false,
        text: 'Controls access to network resources based on user roles',
        audioSrc: '',
      },

      // Challenge 296 options
      {
        challengeId: 296,
        imageSrc: '',
        correct: true,
        text: 'Helps identify and address security weaknesses and compliance issues',
        audioSrc: '',
      },
      {
        challengeId: 296,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality and integrity',
        audioSrc: '',
      },
      {
        challengeId: 296,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for suspicious activities',
        audioSrc: '',
      },

      // Challenge 297 options
      {
        challengeId: 297,
        imageSrc: '',
        correct: true,
        text: 'Used to verify the identity of users or devices in online transactions',
        audioSrc: '',
      },
      {
        challengeId: 297,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality',
        audioSrc: '',
      },
      {
        challengeId: 297,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 298 options
      {
        challengeId: 298,
        imageSrc: '',
        correct: true,
        text: 'A security measure that requires multiple forms of verification for access',
        audioSrc: '',
      },
      {
        challengeId: 298,
        imageSrc: '',
        correct: false,
        text: 'Uses a single password for user authentication',
        audioSrc: '',
      },
      {
        challengeId: 298,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },

      // Challenge 299 options
      {
        challengeId: 299,
        imageSrc: '',
        correct: true,
        text: 'Outlines the security measures and protocols to protect an organization’s assets',
        audioSrc: '',
      },
      {
        challengeId: 299,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data during transmission to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 299,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 300 options
      {
        challengeId: 300,
        imageSrc: '',
        correct: true,
        text: 'Filters and controls network traffic to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 300,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality and integrity',
        audioSrc: '',
      },
      {
        challengeId: 300,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for suspicious activities',
        audioSrc: '',
      },
    ]);

    // Lesson 31
    await db.insert(schema.challenges).values([
      {
        id: 301,
        lessonId: 31,
        type: 'ASSIST',
        order: 1,
        question: 'What is a threat model?',
      },
      {
        id: 302,
        lessonId: 31,
        type: 'ASSIST',
        order: 2,
        question: 'Explain the concept of intrusion detection systems (IDS).',
      },
      {
        id: 303,
        lessonId: 31,
        type: 'ASSIST',
        order: 3,
        question: 'What is the role of a security operations center (SOC)?',
      },
      {
        id: 304,
        lessonId: 31,
        type: 'ASSIST',
        order: 4,
        question: 'Describe the concept of network segmentation.',
      },
      {
        id: 305,
        lessonId: 31,
        type: 'ASSIST',
        order: 5,
        question: 'What is the purpose of a patch management system?',
      },
      {
        id: 306,
        lessonId: 31,
        type: 'ASSIST',
        order: 6,
        question: 'What is a penetration test and why is it important?',
      },
      {
        id: 307,
        lessonId: 31,
        type: 'SELECT',
        order: 7,
        question: 'What does a threat model involve?',
      },
      {
        id: 308,
        lessonId: 31,
        type: 'SELECT',
        order: 8,
        question: 'What is an intrusion detection system (IDS)?',
      },
      {
        id: 309,
        lessonId: 31,
        type: 'SELECT',
        order: 9,
        question:
          'What are the main functions of a security operations center (SOC)?',
      },
      {
        id: 310,
        lessonId: 31,
        type: 'SELECT',
        order: 10,
        question: 'Why is network segmentation used?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 301 options
      {
        challengeId: 301,
        imageSrc: '',
        correct: true,
        text: 'Identifies and evaluates potential threats to a system',
        audioSrc: '',
      },
      {
        challengeId: 301,
        imageSrc: '',
        correct: false,
        text: 'Creates encryption keys for securing data',
        audioSrc: '',
      },
      {
        challengeId: 301,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for unusual activities',
        audioSrc: '',
      },

      // Challenge 302 options
      {
        challengeId: 302,
        imageSrc: '',
        correct: true,
        text: 'Detects and responds to suspicious activities on a network',
        audioSrc: '',
      },
      {
        challengeId: 302,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure confidentiality during transmission',
        audioSrc: '',
      },
      {
        challengeId: 302,
        imageSrc: '',
        correct: false,
        text: 'Manages user permissions and access controls',
        audioSrc: '',
      },

      // Challenge 303 options
      {
        challengeId: 303,
        imageSrc: '',
        correct: true,
        text: 'Monitors and manages security events and incidents across an organization',
        audioSrc: '',
      },
      {
        challengeId: 303,
        imageSrc: '',
        correct: false,
        text: 'Develops and implements encryption algorithms',
        audioSrc: '',
      },
      {
        challengeId: 303,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },

      // Challenge 304 options
      {
        challengeId: 304,
        imageSrc: '',
        correct: true,
        text: 'Divides a network into smaller segments to improve security and performance',
        audioSrc: '',
      },
      {
        challengeId: 304,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 304,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for suspicious activities',
        audioSrc: '',
      },

      // Challenge 305 options
      {
        challengeId: 305,
        imageSrc: '',
        correct: true,
        text: 'Ensures that all software and systems are updated with the latest security patches',
        audioSrc: '',
      },
      {
        challengeId: 305,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data during transmission to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 305,
        imageSrc: '',
        correct: false,
        text: 'Monitors and manages network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 306 options
      {
        challengeId: 306,
        imageSrc: '',
        correct: true,
        text: 'Simulates attacks to identify vulnerabilities and improve security',
        audioSrc: '',
      },
      {
        challengeId: 306,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 306,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for unusual activities',
        audioSrc: '',
      },

      // Challenge 307 options
      {
        challengeId: 307,
        imageSrc: '',
        correct: true,
        text: 'Evaluates potential risks and vulnerabilities to a system',
        audioSrc: '',
      },
      {
        challengeId: 307,
        imageSrc: '',
        correct: false,
        text: 'Provides encryption for data at rest',
        audioSrc: '',
      },
      {
        challengeId: 307,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 308 options
      {
        challengeId: 308,
        imageSrc: '',
        correct: true,
        text: 'Monitors network traffic to identify and respond to potential threats',
        audioSrc: '',
      },
      {
        challengeId: 308,
        imageSrc: '',
        correct: false,
        text: 'Provides encryption for data during transmission',
        audioSrc: '',
      },
      {
        challengeId: 308,
        imageSrc: '',
        correct: false,
        text: 'Manages user access and permissions',
        audioSrc: '',
      },

      // Challenge 309 options
      {
        challengeId: 309,
        imageSrc: '',
        correct: true,
        text: 'Coordinates security monitoring and response across the organization',
        audioSrc: '',
      },
      {
        challengeId: 309,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality',
        audioSrc: '',
      },
      {
        challengeId: 309,
        imageSrc: '',
        correct: false,
        text: 'Monitors and manages network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 310 options
      {
        challengeId: 310,
        imageSrc: '',
        correct: true,
        text: 'Enhances security by isolating network segments to limit the impact of a breach',
        audioSrc: '',
      },
      {
        challengeId: 310,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 310,
        imageSrc: '',
        correct: false,
        text: 'Manages and monitors user access controls',
        audioSrc: '',
      },
    ]);

    // Lesson 32
    await db.insert(schema.challenges).values([
      {
        id: 311,
        lessonId: 32,
        type: 'ASSIST',
        order: 1,
        question: 'What is a cybersecurity framework?',
      },
      {
        id: 312,
        lessonId: 32,
        type: 'ASSIST',
        order: 2,
        question: 'Explain the concept of encryption key management.',
      },
      {
        id: 313,
        lessonId: 32,
        type: 'ASSIST',
        order: 3,
        question: 'What is the purpose of a security incident response plan?',
      },
      {
        id: 314,
        lessonId: 32,
        type: 'ASSIST',
        order: 4,
        question: 'Describe the concept of security patches and updates.',
      },
      {
        id: 315,
        lessonId: 32,
        type: 'ASSIST',
        order: 5,
        question:
          'What is the role of a chief information security officer (CISO)?',
      },
      {
        id: 316,
        lessonId: 32,
        type: 'ASSIST',
        order: 6,
        question: 'What are security best practices for endpoint protection?',
      },
      {
        id: 317,
        lessonId: 32,
        type: 'SELECT',
        order: 7,
        question: 'What is a cybersecurity framework used for?',
      },
      {
        id: 318,
        lessonId: 32,
        type: 'SELECT',
        order: 8,
        question: 'What is encryption key management?',
      },
      {
        id: 319,
        lessonId: 32,
        type: 'SELECT',
        order: 9,
        question: 'What does a security incident response plan involve?',
      },
      {
        id: 320,
        lessonId: 32,
        type: 'SELECT',
        order: 10,
        question: 'Why are security patches and updates important?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 311 options
      {
        challengeId: 311,
        imageSrc: '',
        correct: true,
        text: 'Provides a structured approach to managing cybersecurity risks and controls',
        audioSrc: '',
      },
      {
        challengeId: 311,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data during transmission to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 311,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for unusual activities',
        audioSrc: '',
      },

      // Challenge 312 options
      {
        challengeId: 312,
        imageSrc: '',
        correct: true,
        text: 'Involves securely storing, distributing, and managing encryption keys',
        audioSrc: '',
      },
      {
        challengeId: 312,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality',
        audioSrc: '',
      },
      {
        challengeId: 312,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 313 options
      {
        challengeId: 313,
        imageSrc: '',
        correct: true,
        text: 'Outlines procedures for responding to and managing security incidents',
        audioSrc: '',
      },
      {
        challengeId: 313,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 313,
        imageSrc: '',
        correct: false,
        text: 'Controls and monitors network traffic based on predefined rules',
        audioSrc: '',
      },

      // Challenge 314 options
      {
        challengeId: 314,
        imageSrc: '',
        correct: true,
        text: 'Ensures that software and systems are updated with the latest security fixes',
        audioSrc: '',
      },
      {
        challengeId: 314,
        imageSrc: '',
        correct: false,
        text: 'Provides encryption for data during transmission',
        audioSrc: '',
      },
      {
        challengeId: 314,
        imageSrc: '',
        correct: false,
        text: 'Monitors and manages user access controls',
        audioSrc: '',
      },

      // Challenge 315 options
      {
        challengeId: 315,
        imageSrc: '',
        correct: true,
        text: 'Oversees the development and implementation of an organization’s security strategy',
        audioSrc: '',
      },
      {
        challengeId: 315,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality and integrity',
        audioSrc: '',
      },
      {
        challengeId: 315,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for unusual activities',
        audioSrc: '',
      },

      // Challenge 316 options
      {
        challengeId: 316,
        imageSrc: '',
        correct: true,
        text: 'Includes measures such as antivirus software, firewalls, and regular updates',
        audioSrc: '',
      },
      {
        challengeId: 316,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 316,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 317 options
      {
        challengeId: 317,
        imageSrc: '',
        correct: true,
        text: 'A framework provides guidelines for managing and reducing cybersecurity risks',
        audioSrc: '',
      },
      {
        challengeId: 317,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 317,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for unusual activities',
        audioSrc: '',
      },

      // Challenge 318 options
      {
        challengeId: 318,
        imageSrc: '',
        correct: true,
        text: 'Involves the management of keys used for encrypting and decrypting data',
        audioSrc: '',
      },
      {
        challengeId: 318,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 318,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 319 options
      {
        challengeId: 319,
        imageSrc: '',
        correct: true,
        text: 'Details steps and procedures for handling security incidents effectively',
        audioSrc: '',
      },
      {
        challengeId: 319,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality and integrity',
        audioSrc: '',
      },
      {
        challengeId: 319,
        imageSrc: '',
        correct: false,
        text: 'Manages user access and permissions',
        audioSrc: '',
      },

      // Challenge 320 options
      {
        challengeId: 320,
        imageSrc: '',
        correct: true,
        text: 'Fixes vulnerabilities in software and improves system security',
        audioSrc: '',
      },
      {
        challengeId: 320,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data during transmission to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 320,
        imageSrc: '',
        correct: false,
        text: 'Monitors and manages network traffic for security threats',
        audioSrc: '',
      },
    ]);

    // Lesson 33
    await db.insert(schema.challenges).values([
      {
        id: 321,
        lessonId: 33,
        type: 'ASSIST',
        order: 1,
        question:
          'What is the purpose of a data loss prevention (DLP) strategy?',
      },
      {
        id: 322,
        lessonId: 33,
        type: 'ASSIST',
        order: 2,
        question: 'Explain the concept of network access control (NAC).',
      },
      {
        id: 323,
        lessonId: 33,
        type: 'ASSIST',
        order: 3,
        question: 'What are the main types of cybersecurity threats?',
      },
      {
        id: 324,
        lessonId: 33,
        type: 'ASSIST',
        order: 4,
        question: 'Describe the concept of a security operations center (SOC).',
      },
      {
        id: 325,
        lessonId: 33,
        type: 'ASSIST',
        order: 5,
        question: 'What is a zero-trust security model?',
      },
      {
        id: 326,
        lessonId: 33,
        type: 'ASSIST',
        order: 6,
        question: 'What are the key elements of a cybersecurity policy?',
      },
      {
        id: 327,
        lessonId: 33,
        type: 'SELECT',
        order: 7,
        question:
          'What does a data loss prevention (DLP) strategy aim to achieve?',
      },
      {
        id: 328,
        lessonId: 33,
        type: 'SELECT',
        order: 8,
        question: 'What is network access control (NAC) used for?',
      },
      {
        id: 329,
        lessonId: 33,
        type: 'SELECT',
        order: 9,
        question: 'What are common types of cybersecurity threats?',
      },
      {
        id: 330,
        lessonId: 33,
        type: 'SELECT',
        order: 10,
        question: 'What is the purpose of a security operations center (SOC)?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 321 options
      {
        challengeId: 321,
        imageSrc: '',
        correct: true,
        text: 'Prevents unauthorized access and data breaches by monitoring and controlling data flow',
        audioSrc: '',
      },
      {
        challengeId: 321,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality during transmission',
        audioSrc: '',
      },
      {
        challengeId: 321,
        imageSrc: '',
        correct: false,
        text: 'Monitors and manages user access controls',
        audioSrc: '',
      },

      // Challenge 322 options
      {
        challengeId: 322,
        imageSrc: '',
        correct: true,
        text: 'Controls access to network resources based on user identity and device status',
        audioSrc: '',
      },
      {
        challengeId: 322,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 322,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for unusual activities',
        audioSrc: '',
      },

      // Challenge 323 options
      {
        challengeId: 323,
        imageSrc: '',
        correct: true,
        text: 'Malware, phishing, ransomware, and insider threats',
        audioSrc: '',
      },
      {
        challengeId: 323,
        imageSrc: '',
        correct: false,
        text: 'Data encryption, secure authentication, and network monitoring',
        audioSrc: '',
      },
      {
        challengeId: 323,
        imageSrc: '',
        correct: false,
        text: 'Network segmentation, access control, and intrusion detection',
        audioSrc: '',
      },

      // Challenge 324 options
      {
        challengeId: 324,
        imageSrc: '',
        correct: true,
        text: 'Monitors and responds to security incidents and threats across the organization',
        audioSrc: '',
      },
      {
        challengeId: 324,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 324,
        imageSrc: '',
        correct: false,
        text: 'Provides guidelines for managing and reducing cybersecurity risks',
        audioSrc: '',
      },

      // Challenge 325 options
      {
        challengeId: 325,
        imageSrc: '',
        correct: true,
        text: 'A security model where no one is trusted by default and verification is required for all access',
        audioSrc: '',
      },
      {
        challengeId: 325,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data during transmission to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 325,
        imageSrc: '',
        correct: false,
        text: 'Controls access to network resources based on user identity',
        audioSrc: '',
      },

      // Challenge 326 options
      {
        challengeId: 326,
        imageSrc: '',
        correct: true,
        text: 'Security objectives, access controls, incident response, and risk management',
        audioSrc: '',
      },
      {
        challengeId: 326,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality and integrity',
        audioSrc: '',
      },
      {
        challengeId: 326,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 327 options
      {
        challengeId: 327,
        imageSrc: '',
        correct: true,
        text: 'Protects sensitive data from loss or unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 327,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data during transmission to ensure its confidentiality',
        audioSrc: '',
      },
      {
        challengeId: 327,
        imageSrc: '',
        correct: false,
        text: 'Monitors and manages network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 328 options
      {
        challengeId: 328,
        imageSrc: '',
        correct: true,
        text: 'Regulates access to network resources based on user credentials and device compliance',
        audioSrc: '',
      },
      {
        challengeId: 328,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 328,
        imageSrc: '',
        correct: false,
        text: 'Monitors and manages user access controls',
        audioSrc: '',
      },

      // Challenge 329 options
      {
        challengeId: 329,
        imageSrc: '',
        correct: true,
        text: 'Malware, phishing, ransomware, and insider threats',
        audioSrc: '',
      },
      {
        challengeId: 329,
        imageSrc: '',
        correct: false,
        text: 'Network segmentation, encryption, and access control',
        audioSrc: '',
      },
      {
        challengeId: 329,
        imageSrc: '',
        correct: false,
        text: 'Incident response planning and vulnerability assessment',
        audioSrc: '',
      },

      // Challenge 330 options
      {
        challengeId: 330,
        imageSrc: '',
        correct: true,
        text: 'Provides centralized monitoring and response to security incidents and threats',
        audioSrc: '',
      },
      {
        challengeId: 330,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality during transmission',
        audioSrc: '',
      },
      {
        challengeId: 330,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for unusual activities',
        audioSrc: '',
      },
    ]);

    // Lesson 34
    await db.insert(schema.challenges).values([
      {
        id: 331,
        lessonId: 34,
        type: 'ASSIST',
        order: 1,
        question: 'What is an IP address?',
      },
      {
        id: 332,
        lessonId: 34,
        type: 'ASSIST',
        order: 2,
        question: 'Explain the concept of a VPN.',
      },
      {
        id: 333,
        lessonId: 34,
        type: 'ASSIST',
        order: 3,
        question: 'What is a firewall and what does it do?',
      },
      {
        id: 334,
        lessonId: 34,
        type: 'ASSIST',
        order: 4,
        question: 'Describe the purpose of a DMZ in network security.',
      },
      {
        id: 335,
        lessonId: 34,
        type: 'ASSIST',
        order: 5,
        question: 'What is multi-factor authentication (MFA)?',
      },
      {
        id: 336,
        lessonId: 34,
        type: 'ASSIST',
        order: 6,
        question: 'What is an intrusion prevention system (IPS)?',
      },
      {
        id: 337,
        lessonId: 34,
        type: 'SELECT',
        order: 7,
        question: 'What is an IP address used for?',
      },
      {
        id: 338,
        lessonId: 34,
        type: 'SELECT',
        order: 8,
        question: 'What does a VPN provide?',
      },
      {
        id: 339,
        lessonId: 34,
        type: 'SELECT',
        order: 9,
        question: 'What is the function of a firewall?',
      },
      {
        id: 340,
        lessonId: 34,
        type: 'SELECT',
        order: 10,
        question: 'Why is a DMZ important in network security?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 331 options
      {
        challengeId: 331,
        imageSrc: '',
        correct: true,
        text: 'A unique identifier for a device on a network',
        audioSrc: '',
      },
      {
        challengeId: 331,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
      {
        challengeId: 331,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 332 options
      {
        challengeId: 332,
        imageSrc: '',
        correct: true,
        text: 'Provides a secure, encrypted connection over a public network',
        audioSrc: '',
      },
      {
        challengeId: 332,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for suspicious activities',
        audioSrc: '',
      },
      {
        challengeId: 332,
        imageSrc: '',
        correct: false,
        text: 'Controls access to network resources based on user identity',
        audioSrc: '',
      },

      // Challenge 333 options
      {
        challengeId: 333,
        imageSrc: '',
        correct: true,
        text: 'Monitors and controls incoming and outgoing network traffic based on predefined rules',
        audioSrc: '',
      },
      {
        challengeId: 333,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 333,
        imageSrc: '',
        correct: false,
        text: 'Manages and monitors user access controls',
        audioSrc: '',
      },

      // Challenge 334 options
      {
        challengeId: 334,
        imageSrc: '',
        correct: true,
        text: 'A network segment that separates internal networks from external networks',
        audioSrc: '',
      },
      {
        challengeId: 334,
        imageSrc: '',
        correct: false,
        text: 'Provides a secure, encrypted connection over a public network',
        audioSrc: '',
      },
      {
        challengeId: 334,
        imageSrc: '',
        correct: false,
        text: 'Controls access to network resources based on user credentials',
        audioSrc: '',
      },

      // Challenge 335 options
      {
        challengeId: 335,
        imageSrc: '',
        correct: true,
        text: 'Requires users to provide multiple forms of verification before gaining access',
        audioSrc: '',
      },
      {
        challengeId: 335,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality during transmission',
        audioSrc: '',
      },
      {
        challengeId: 335,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for unusual activities',
        audioSrc: '',
      },

      // Challenge 336 options
      {
        challengeId: 336,
        imageSrc: '',
        correct: true,
        text: 'Detects and prevents identified threats from reaching the network',
        audioSrc: '',
      },
      {
        challengeId: 336,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 336,
        imageSrc: '',
        correct: false,
        text: 'Controls access to network resources based on user identity',
        audioSrc: '',
      },

      // Challenge 337 options
      {
        challengeId: 337,
        imageSrc: '',
        correct: true,
        text: 'Identifies devices on a network',
        audioSrc: '',
      },
      {
        challengeId: 337,
        imageSrc: '',
        correct: false,
        text: 'Provides encryption for data at rest',
        audioSrc: '',
      },
      {
        challengeId: 337,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for suspicious activities',
        audioSrc: '',
      },

      // Challenge 338 options
      {
        challengeId: 338,
        imageSrc: '',
        correct: true,
        text: 'Encrypts data and provides a secure connection over public networks',
        audioSrc: '',
      },
      {
        challengeId: 338,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for unusual activities',
        audioSrc: '',
      },
      {
        challengeId: 338,
        imageSrc: '',
        correct: false,
        text: 'Controls access to network resources based on user identity',
        audioSrc: '',
      },

      // Challenge 339 options
      {
        challengeId: 339,
        imageSrc: '',
        correct: true,
        text: 'Filters and controls incoming and outgoing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 339,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 339,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 340 options
      {
        challengeId: 340,
        imageSrc: '',
        correct: true,
        text: 'Separates and protects internal networks from external threats',
        audioSrc: '',
      },
      {
        challengeId: 340,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality during transmission',
        audioSrc: '',
      },
      {
        challengeId: 340,
        imageSrc: '',
        correct: false,
        text: 'Monitors and manages user access controls',
        audioSrc: '',
      },
    ]);

    // Lesson 35
    await db.insert(schema.challenges).values([
      {
        id: 341,
        lessonId: 35,
        type: 'ASSIST',
        order: 1,
        question: 'What is a vulnerability assessment?',
      },
      {
        id: 342,
        lessonId: 35,
        type: 'ASSIST',
        order: 2,
        question: 'Explain the concept of an attack vector.',
      },
      {
        id: 343,
        lessonId: 35,
        type: 'ASSIST',
        order: 3,
        question: 'What is a security audit?',
      },
      {
        id: 344,
        lessonId: 35,
        type: 'ASSIST',
        order: 4,
        question: 'Describe the purpose of penetration testing.',
      },
      {
        id: 345,
        lessonId: 35,
        type: 'ASSIST',
        order: 5,
        question: 'What are security patches and why are they important?',
      },
      {
        id: 346,
        lessonId: 35,
        type: 'ASSIST',
        order: 6,
        question: 'What is a threat model?',
      },
      {
        id: 347,
        lessonId: 35,
        type: 'SELECT',
        order: 7,
        question: 'What does a vulnerability assessment involve?',
      },
      {
        id: 348,
        lessonId: 35,
        type: 'SELECT',
        order: 8,
        question: 'What is an attack vector?',
      },
      {
        id: 349,
        lessonId: 35,
        type: 'SELECT',
        order: 9,
        question: 'What is the purpose of a security audit?',
      },
      {
        id: 350,
        lessonId: 35,
        type: 'SELECT',
        order: 10,
        question: 'Why are security patches important?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 341 options
      {
        challengeId: 341,
        imageSrc: '',
        correct: true,
        text: 'Identifies and evaluates security weaknesses in a system or network',
        audioSrc: '',
      },
      {
        challengeId: 341,
        imageSrc: '',
        correct: false,
        text: 'Tests the system’s response to security incidents',
        audioSrc: '',
      },
      {
        challengeId: 341,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for unusual activities',
        audioSrc: '',
      },

      // Challenge 342 options
      {
        challengeId: 342,
        imageSrc: '',
        correct: true,
        text: 'A method or pathway used by attackers to gain unauthorized access to systems or data',
        audioSrc: '',
      },
      {
        challengeId: 342,
        imageSrc: '',
        correct: false,
        text: 'A technique for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 342,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 343 options
      {
        challengeId: 343,
        imageSrc: '',
        correct: true,
        text: 'A systematic evaluation of an organization’s security policies and controls',
        audioSrc: '',
      },
      {
        challengeId: 343,
        imageSrc: '',
        correct: false,
        text: 'A framework for managing cybersecurity risks',
        audioSrc: '',
      },
      {
        challengeId: 343,
        imageSrc: '',
        correct: false,
        text: 'A tool for encrypting data',
        audioSrc: '',
      },

      // Challenge 344 options
      {
        challengeId: 344,
        imageSrc: '',
        correct: true,
        text: 'Simulates an attack on a system to identify vulnerabilities and assess security defenses',
        audioSrc: '',
      },
      {
        challengeId: 344,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality and integrity',
        audioSrc: '',
      },
      {
        challengeId: 344,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 345 options
      {
        challengeId: 345,
        imageSrc: '',
        correct: true,
        text: 'Updates software to fix known vulnerabilities and improve security',
        audioSrc: '',
      },
      {
        challengeId: 345,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 345,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for unusual activities',
        audioSrc: '',
      },

      // Challenge 346 options
      {
        challengeId: 346,
        imageSrc: '',
        correct: true,
        text: 'A structured approach to identifying, assessing, and mitigating security risks',
        audioSrc: '',
      },
      {
        challengeId: 346,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
      {
        challengeId: 346,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 347 options
      {
        challengeId: 347,
        imageSrc: '',
        correct: true,
        text: 'Involves identifying and assessing security vulnerabilities within a system or network',
        audioSrc: '',
      },
      {
        challengeId: 347,
        imageSrc: '',
        correct: false,
        text: 'Simulates an attack to test security defenses',
        audioSrc: '',
      },
      {
        challengeId: 347,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 348 options
      {
        challengeId: 348,
        imageSrc: '',
        correct: true,
        text: 'A method or pathway used by attackers to exploit system vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 348,
        imageSrc: '',
        correct: false,
        text: 'A systematic evaluation of an organization’s security policies',
        audioSrc: '',
      },
      {
        challengeId: 348,
        imageSrc: '',
        correct: false,
        text: 'A tool for encrypting data',
        audioSrc: '',
      },

      // Challenge 349 options
      {
        challengeId: 349,
        imageSrc: '',
        correct: true,
        text: 'Evaluates and verifies the effectiveness of an organization’s security policies and controls',
        audioSrc: '',
      },
      {
        challengeId: 349,
        imageSrc: '',
        correct: false,
        text: 'Updates software to fix vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 349,
        imageSrc: '',
        correct: false,
        text: 'Simulates attacks to identify vulnerabilities',
        audioSrc: '',
      },

      // Challenge 350 options
      {
        challengeId: 350,
        imageSrc: '',
        correct: true,
        text: 'Prevents exploitation of known vulnerabilities by applying updates and fixes',
        audioSrc: '',
      },
      {
        challengeId: 350,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality during transmission',
        audioSrc: '',
      },
      {
        challengeId: 350,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },
    ]);

    // Lesson 36
    await db.insert(schema.challenges).values([
      {
        id: 351,
        lessonId: 36,
        type: 'ASSIST',
        order: 1,
        question: 'What is a zero-day exploit?',
      },
      {
        id: 352,
        lessonId: 36,
        type: 'ASSIST',
        order: 2,
        question: 'Explain the principle of least privilege.',
      },
      {
        id: 353,
        lessonId: 36,
        type: 'ASSIST',
        order: 3,
        question: 'What is network segmentation?',
      },
      {
        id: 354,
        lessonId: 36,
        type: 'ASSIST',
        order: 4,
        question: 'Describe the function of a DMZ.',
      },
      {
        id: 355,
        lessonId: 36,
        type: 'ASSIST',
        order: 5,
        question: 'What is a security policy?',
      },
      {
        id: 356,
        lessonId: 36,
        type: 'ASSIST',
        order: 6,
        question: 'What is social engineering?',
      },
      {
        id: 357,
        lessonId: 36,
        type: 'SELECT',
        order: 7,
        question: 'What is a zero-day exploit?',
      },
      {
        id: 358,
        lessonId: 36,
        type: 'SELECT',
        order: 8,
        question: 'What does the principle of least privilege entail?',
      },
      {
        id: 359,
        lessonId: 36,
        type: 'SELECT',
        order: 9,
        question: 'What is network segmentation used for?',
      },
      {
        id: 360,
        lessonId: 36,
        type: 'SELECT',
        order: 10,
        question: 'What role does a DMZ play in network security?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 351 options
      {
        challengeId: 351,
        imageSrc: '',
        correct: true,
        text: 'An exploit targeting a previously unknown vulnerability in software',
        audioSrc: '',
      },
      {
        challengeId: 351,
        imageSrc: '',
        correct: false,
        text: 'An attack that uses well-known vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 351,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 352 options
      {
        challengeId: 352,
        imageSrc: '',
        correct: true,
        text: 'Granting users only the permissions they need to perform their tasks',
        audioSrc: '',
      },
      {
        challengeId: 352,
        imageSrc: '',
        correct: false,
        text: 'Providing access to all network resources for convenience',
        audioSrc: '',
      },
      {
        challengeId: 352,
        imageSrc: '',
        correct: false,
        text: 'Encrypting sensitive data to prevent unauthorized access',
        audioSrc: '',
      },

      // Challenge 353 options
      {
        challengeId: 353,
        imageSrc: '',
        correct: true,
        text: 'Dividing a network into smaller, isolated segments to improve security',
        audioSrc: '',
      },
      {
        challengeId: 353,
        imageSrc: '',
        correct: false,
        text: 'Encrypting data during transmission',
        audioSrc: '',
      },
      {
        challengeId: 353,
        imageSrc: '',
        correct: false,
        text: 'Monitoring network traffic for unusual activities',
        audioSrc: '',
      },

      // Challenge 354 options
      {
        challengeId: 354,
        imageSrc: '',
        correct: true,
        text: 'Isolates external-facing services from internal network resources',
        audioSrc: '',
      },
      {
        challengeId: 354,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality',
        audioSrc: '',
      },
      {
        challengeId: 354,
        imageSrc: '',
        correct: false,
        text: 'Monitors network traffic for security threats',
        audioSrc: '',
      },

      // Challenge 355 options
      {
        challengeId: 355,
        imageSrc: '',
        correct: true,
        text: 'A formal set of rules and guidelines to manage and protect data and systems',
        audioSrc: '',
      },
      {
        challengeId: 355,
        imageSrc: '',
        correct: false,
        text: 'A tool for encrypting data during transmission',
        audioSrc: '',
      },
      {
        challengeId: 355,
        imageSrc: '',
        correct: false,
        text: 'A method for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 356 options
      {
        challengeId: 356,
        imageSrc: '',
        correct: true,
        text: 'Manipulating individuals into divulging confidential information or performing actions that compromise security',
        audioSrc: '',
      },
      {
        challengeId: 356,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting sensitive data',
        audioSrc: '',
      },
      {
        challengeId: 356,
        imageSrc: '',
        correct: false,
        text: 'Monitoring network traffic for unusual activities',
        audioSrc: '',
      },

      // Challenge 357 options
      {
        challengeId: 357,
        imageSrc: '',
        correct: true,
        text: 'An exploit that targets a vulnerability that is not yet known to the software vendor',
        audioSrc: '',
      },
      {
        challengeId: 357,
        imageSrc: '',
        correct: false,
        text: 'An attack using known vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 357,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 358 options
      {
        challengeId: 358,
        imageSrc: '',
        correct: true,
        text: 'Ensuring users have only the access they need to perform their job functions',
        audioSrc: '',
      },
      {
        challengeId: 358,
        imageSrc: '',
        correct: false,
        text: 'Allowing users full access to all resources',
        audioSrc: '',
      },
      {
        challengeId: 358,
        imageSrc: '',
        correct: false,
        text: 'Encrypting data during transmission',
        audioSrc: '',
      },

      // Challenge 359 options
      {
        challengeId: 359,
        imageSrc: '',
        correct: true,
        text: 'To improve security by isolating network segments and controlling traffic between them',
        audioSrc: '',
      },
      {
        challengeId: 359,
        imageSrc: '',
        correct: false,
        text: 'To encrypt data during transmission',
        audioSrc: '',
      },
      {
        challengeId: 359,
        imageSrc: '',
        correct: false,
        text: 'To monitor network traffic for unusual activities',
        audioSrc: '',
      },

      // Challenge 360 options
      {
        challengeId: 360,
        imageSrc: '',
        correct: true,
        text: 'Protects internal networks by placing a buffer zone between them and external networks',
        audioSrc: '',
      },
      {
        challengeId: 360,
        imageSrc: '',
        correct: false,
        text: 'Encrypts data to ensure its confidentiality',
        audioSrc: '',
      },
      {
        challengeId: 360,
        imageSrc: '',
        correct: false,
        text: 'Controls access to network resources based on user identity',
        audioSrc: '',
      },
    ]);

    // Lesson 37
    await db.insert(schema.challenges).values([
      {
        id: 361,
        lessonId: 37,
        type: 'ASSIST',
        order: 1,
        question: 'What is two-factor authentication?',
      },
      {
        id: 362,
        lessonId: 37,
        type: 'ASSIST',
        order: 2,
        question: 'Explain the term "phishing".',
      },
      {
        id: 363,
        lessonId: 37,
        type: 'ASSIST',
        order: 3,
        question: 'What are encryption keys?',
      },
      {
        id: 364,
        lessonId: 37,
        type: 'ASSIST',
        order: 4,
        question: 'What is a denial-of-service attack?',
      },
      {
        id: 365,
        lessonId: 37,
        type: 'ASSIST',
        order: 5,
        question: 'Describe the concept of a security incident.',
      },
      {
        id: 366,
        lessonId: 37,
        type: 'ASSIST',
        order: 6,
        question: 'What is a firewall rule?',
      },
      {
        id: 367,
        lessonId: 37,
        type: 'SELECT',
        order: 7,
        question: 'What is two-factor authentication?',
      },
      {
        id: 368,
        lessonId: 37,
        type: 'SELECT',
        order: 8,
        question: 'How does phishing work?',
      },
      {
        id: 369,
        lessonId: 37,
        type: 'SELECT',
        order: 9,
        question: 'What is the purpose of encryption keys?',
      },
      {
        id: 370,
        lessonId: 37,
        type: 'SELECT',
        order: 10,
        question: 'What is the effect of a denial-of-service attack?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 361 options
      {
        challengeId: 361,
        imageSrc: '',
        correct: true,
        text: 'A security process that requires two different forms of verification before granting access',
        audioSrc: '',
      },
      {
        challengeId: 361,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 361,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 362 options
      {
        challengeId: 362,
        imageSrc: '',
        correct: true,
        text: 'A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity',
        audioSrc: '',
      },
      {
        challengeId: 362,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 362,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 363 options
      {
        challengeId: 363,
        imageSrc: '',
        correct: true,
        text: 'A string of characters used to encode and decode data to ensure its confidentiality',
        audioSrc: '',
      },
      {
        challengeId: 363,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
      {
        challengeId: 363,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 364 options
      {
        challengeId: 364,
        imageSrc: '',
        correct: true,
        text: 'An attack aimed at disrupting the normal functioning of a service by overwhelming it with traffic',
        audioSrc: '',
      },
      {
        challengeId: 364,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 364,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 365 options
      {
        challengeId: 365,
        imageSrc: '',
        correct: true,
        text: 'An event that compromises the confidentiality, integrity, or availability of an organization’s information or information systems',
        audioSrc: '',
      },
      {
        challengeId: 365,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 365,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 366 options
      {
        challengeId: 366,
        imageSrc: '',
        correct: true,
        text: 'Rules defining the conditions under which network traffic is allowed or blocked by a firewall',
        audioSrc: '',
      },
      {
        challengeId: 366,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 366,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 367 options
      {
        challengeId: 367,
        imageSrc: '',
        correct: true,
        text: 'A security mechanism that requires two forms of authentication to grant access',
        audioSrc: '',
      },
      {
        challengeId: 367,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 367,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 368 options
      {
        challengeId: 368,
        imageSrc: '',
        correct: true,
        text: 'Deceptive attempts to acquire sensitive information by pretending to be a trustworthy entity',
        audioSrc: '',
      },
      {
        challengeId: 368,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 368,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 369 options
      {
        challengeId: 369,
        imageSrc: '',
        correct: true,
        text: 'Used to protect data by encoding it so only authorized parties can decode and access it',
        audioSrc: '',
      },
      {
        challengeId: 369,
        imageSrc: '',
        correct: false,
        text: 'A method for monitoring network traffic',
        audioSrc: '',
      },
      {
        challengeId: 369,
        imageSrc: '',
        correct: false,
        text: 'A tool for encrypting data',
        audioSrc: '',
      },

      // Challenge 370 options
      {
        challengeId: 370,
        imageSrc: '',
        correct: true,
        text: 'Prevents access to services by overwhelming them with excessive traffic',
        audioSrc: '',
      },
      {
        challengeId: 370,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 370,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 38
    await db.insert(schema.challenges).values([
      {
        id: 371,
        lessonId: 38,
        type: 'ASSIST',
        order: 1,
        question: 'What is multi-factor authentication?',
      },
      {
        id: 372,
        lessonId: 38,
        type: 'ASSIST',
        order: 2,
        question: 'Describe the term "SQL injection".',
      },
      {
        id: 373,
        lessonId: 38,
        type: 'ASSIST',
        order: 3,
        question: 'What is a man-in-the-middle attack?',
      },
      {
        id: 374,
        lessonId: 38,
        type: 'ASSIST',
        order: 4,
        question: 'What are digital certificates?',
      },
      {
        id: 375,
        lessonId: 38,
        type: 'ASSIST',
        order: 5,
        question: 'Explain the concept of data encryption.',
      },
      {
        id: 376,
        lessonId: 38,
        type: 'ASSIST',
        order: 6,
        question: 'What is a public key infrastructure (PKI)?',
      },
      {
        id: 377,
        lessonId: 38,
        type: 'SELECT',
        order: 7,
        question: 'What is multi-factor authentication?',
      },
      {
        id: 378,
        lessonId: 38,
        type: 'SELECT',
        order: 8,
        question: 'How does SQL injection work?',
      },
      {
        id: 379,
        lessonId: 38,
        type: 'SELECT',
        order: 9,
        question: 'What is a man-in-the-middle attack?',
      },
      {
        id: 380,
        lessonId: 38,
        type: 'SELECT',
        order: 10,
        question: 'What is the purpose of digital certificates?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 371 options
      {
        challengeId: 371,
        imageSrc: '',
        correct: true,
        text: 'A security process that requires two or more forms of verification to grant access',
        audioSrc: '',
      },
      {
        challengeId: 371,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 371,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 372 options
      {
        challengeId: 372,
        imageSrc: '',
        correct: true,
        text: 'An attack where malicious SQL code is inserted into a query to manipulate a database',
        audioSrc: '',
      },
      {
        challengeId: 372,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 372,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 373 options
      {
        challengeId: 373,
        imageSrc: '',
        correct: true,
        text: 'An attack where the attacker intercepts and potentially alters communication between two parties',
        audioSrc: '',
      },
      {
        challengeId: 373,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 373,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 374 options
      {
        challengeId: 374,
        imageSrc: '',
        correct: true,
        text: 'An electronic document used to verify the identity of an individual or entity in digital transactions',
        audioSrc: '',
      },
      {
        challengeId: 374,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 374,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 375 options
      {
        challengeId: 375,
        imageSrc: '',
        correct: true,
        text: 'The process of encoding data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 375,
        imageSrc: '',
        correct: false,
        text: 'A method for monitoring network traffic',
        audioSrc: '',
      },
      {
        challengeId: 375,
        imageSrc: '',
        correct: false,
        text: 'A tool for encrypting data',
        audioSrc: '',
      },

      // Challenge 376 options
      {
        challengeId: 376,
        imageSrc: '',
        correct: true,
        text: 'A framework for managing digital certificates and encryption keys to secure communications',
        audioSrc: '',
      },
      {
        challengeId: 376,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 376,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 377 options
      {
        challengeId: 377,
        imageSrc: '',
        correct: true,
        text: 'A security mechanism that requires multiple forms of verification before granting access',
        audioSrc: '',
      },
      {
        challengeId: 377,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 377,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 378 options
      {
        challengeId: 378,
        imageSrc: '',
        correct: true,
        text: 'Inserting malicious SQL code into a query to manipulate or access a database',
        audioSrc: '',
      },
      {
        challengeId: 378,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 378,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 379 options
      {
        challengeId: 379,
        imageSrc: '',
        correct: true,
        text: 'Intercepting and potentially altering communication between two parties',
        audioSrc: '',
      },
      {
        challengeId: 379,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 379,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 380 options
      {
        challengeId: 380,
        imageSrc: '',
        correct: true,
        text: 'Used to confirm the identity of the entities involved in a digital transaction',
        audioSrc: '',
      },
      {
        challengeId: 380,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 380,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 39
    await db.insert(schema.challenges).values([
      {
        id: 381,
        lessonId: 39,
        type: 'ASSIST',
        order: 1,
        question: 'What is a rootkit?',
      },
      {
        id: 382,
        lessonId: 39,
        type: 'ASSIST',
        order: 2,
        question: 'Describe the concept of a "honeypot".',
      },
      {
        id: 383,
        lessonId: 39,
        type: 'ASSIST',
        order: 3,
        question: 'What is a keylogger?',
      },
      {
        id: 384,
        lessonId: 39,
        type: 'ASSIST',
        order: 4,
        question: 'What are the characteristics of a strong password?',
      },
      {
        id: 385,
        lessonId: 39,
        type: 'ASSIST',
        order: 5,
        question: 'Explain the term "network sniffing".',
      },
      {
        id: 386,
        lessonId: 39,
        type: 'ASSIST',
        order: 6,
        question: 'What is a vulnerability assessment?',
      },
      {
        id: 387,
        lessonId: 39,
        type: 'SELECT',
        order: 7,
        question: 'What is a rootkit?',
      },
      {
        id: 388,
        lessonId: 39,
        type: 'SELECT',
        order: 8,
        question: 'How does a honeypot function?',
      },
      {
        id: 389,
        lessonId: 39,
        type: 'SELECT',
        order: 9,
        question: 'What is a keylogger used for?',
      },
      {
        id: 390,
        lessonId: 39,
        type: 'SELECT',
        order: 10,
        question: 'What constitutes a strong password?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 381 options
      {
        challengeId: 381,
        imageSrc: '',
        correct: true,
        text: 'A type of malicious software designed to gain unauthorized access and hide its presence',
        audioSrc: '',
      },
      {
        challengeId: 381,
        imageSrc: '',
        correct: false,
        text: 'A tool for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 381,
        imageSrc: '',
        correct: false,
        text: 'A method for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 382 options
      {
        challengeId: 382,
        imageSrc: '',
        correct: true,
        text: 'A decoy system or network set up to attract and analyze attacks',
        audioSrc: '',
      },
      {
        challengeId: 382,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 382,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 383 options
      {
        challengeId: 383,
        imageSrc: '',
        correct: true,
        text: 'Software designed to record keystrokes made by a user',
        audioSrc: '',
      },
      {
        challengeId: 383,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 383,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 384 options
      {
        challengeId: 384,
        imageSrc: '',
        correct: true,
        text: 'Complex, unique, and contains a mix of characters',
        audioSrc: '',
      },
      {
        challengeId: 384,
        imageSrc: '',
        correct: false,
        text: 'Simple and easily memorable',
        audioSrc: '',
      },
      {
        challengeId: 384,
        imageSrc: '',
        correct: false,
        text: 'Used for encrypting data',
        audioSrc: '',
      },

      // Challenge 385 options
      {
        challengeId: 385,
        imageSrc: '',
        correct: true,
        text: 'Intercepting and analyzing network traffic to gather information',
        audioSrc: '',
      },
      {
        challengeId: 385,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 385,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 386 options
      {
        challengeId: 386,
        imageSrc: '',
        correct: true,
        text: 'The process of identifying and evaluating security vulnerabilities in a system',
        audioSrc: '',
      },
      {
        challengeId: 386,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 386,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 387 options
      {
        challengeId: 387,
        imageSrc: '',
        correct: true,
        text: 'A type of malicious software that hides its presence and allows unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 387,
        imageSrc: '',
        correct: false,
        text: 'A tool for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 387,
        imageSrc: '',
        correct: false,
        text: 'A method for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 388 options
      {
        challengeId: 388,
        imageSrc: '',
        correct: true,
        text: 'A decoy system designed to attract and analyze attacks',
        audioSrc: '',
      },
      {
        challengeId: 388,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 388,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 389 options
      {
        challengeId: 389,
        imageSrc: '',
        correct: true,
        text: 'Records keystrokes to capture sensitive information',
        audioSrc: '',
      },
      {
        challengeId: 389,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 389,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 390 options
      {
        challengeId: 390,
        imageSrc: '',
        correct: true,
        text: 'Complex, unique, and contains a mix of letters, numbers, and symbols',
        audioSrc: '',
      },
      {
        challengeId: 390,
        imageSrc: '',
        correct: false,
        text: 'Simple and easily memorable',
        audioSrc: '',
      },
      {
        challengeId: 390,
        imageSrc: '',
        correct: false,
        text: 'Used for encrypting data',
        audioSrc: '',
      },
    ]);

    // Lesson 40
    await db.insert(schema.challenges).values([
      {
        id: 391,
        lessonId: 40,
        type: 'ASSIST',
        order: 1,
        question: 'What is a vulnerability scanner?',
      },
      {
        id: 392,
        lessonId: 40,
        type: 'ASSIST',
        order: 2,
        question: 'Explain the concept of a botnet.',
      },
      {
        id: 393,
        lessonId: 40,
        type: 'ASSIST',
        order: 3,
        question: 'What is a brute-force attack?',
      },
      {
        id: 394,
        lessonId: 40,
        type: 'ASSIST',
        order: 4,
        question: 'What is network intrusion detection?',
      },
      {
        id: 395,
        lessonId: 40,
        type: 'ASSIST',
        order: 5,
        question:
          'What is a security information and event management (SIEM) system?',
      },
      {
        id: 396,
        lessonId: 40,
        type: 'ASSIST',
        order: 6,
        question: 'What is a cryptographic hash?',
      },
      {
        id: 397,
        lessonId: 40,
        type: 'SELECT',
        order: 7,
        question: 'What is a vulnerability scanner?',
      },
      {
        id: 398,
        lessonId: 40,
        type: 'SELECT',
        order: 8,
        question: 'What is a botnet?',
      },
      {
        id: 399,
        lessonId: 40,
        type: 'SELECT',
        order: 9,
        question: 'What is a brute-force attack?',
      },
      {
        id: 400,
        lessonId: 40,
        type: 'SELECT',
        order: 10,
        question: 'What is network intrusion detection?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 391 options
      {
        challengeId: 391,
        imageSrc: '',
        correct: true,
        text: 'A tool used to identify vulnerabilities in a system',
        audioSrc: '',
      },
      {
        challengeId: 391,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 391,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 392 options
      {
        challengeId: 392,
        imageSrc: '',
        correct: true,
        text: 'A network of compromised computers controlled by an attacker',
        audioSrc: '',
      },
      {
        challengeId: 392,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 392,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 393 options
      {
        challengeId: 393,
        imageSrc: '',
        correct: true,
        text: 'An attack where the attacker tries multiple passwords until finding the correct one',
        audioSrc: '',
      },
      {
        challengeId: 393,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 393,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 394 options
      {
        challengeId: 394,
        imageSrc: '',
        correct: true,
        text: 'A system designed to detect and respond to unauthorized network activity',
        audioSrc: '',
      },
      {
        challengeId: 394,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 394,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 395 options
      {
        challengeId: 395,
        imageSrc: '',
        correct: true,
        text: 'A system that aggregates and analyzes security-related data from multiple sources',
        audioSrc: '',
      },
      {
        challengeId: 395,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 395,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 396 options
      {
        challengeId: 396,
        imageSrc: '',
        correct: true,
        text: 'A function that converts data into a fixed-size string of characters, which is typically a hash code',
        audioSrc: '',
      },
      {
        challengeId: 396,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 396,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 397 options
      {
        challengeId: 397,
        imageSrc: '',
        correct: true,
        text: 'A tool used to find vulnerabilities in a system by scanning it',
        audioSrc: '',
      },
      {
        challengeId: 397,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 397,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 398 options
      {
        challengeId: 398,
        imageSrc: '',
        correct: true,
        text: 'A network of infected computers used to carry out attacks or perform malicious activities',
        audioSrc: '',
      },
      {
        challengeId: 398,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 398,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 399 options
      {
        challengeId: 399,
        imageSrc: '',
        correct: true,
        text: 'An attack that involves systematically trying various passwords to gain unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 399,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 399,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 400 options
      {
        challengeId: 400,
        imageSrc: '',
        correct: true,
        text: 'A system designed to detect and respond to unauthorized or suspicious activity on a network',
        audioSrc: '',
      },
      {
        challengeId: 400,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 400,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 41
    await db.insert(schema.challenges).values([
      {
        id: 401,
        lessonId: 41,
        type: 'ASSIST',
        order: 1,
        question: 'What is two-factor authentication?',
      },
      {
        id: 402,
        lessonId: 41,
        type: 'ASSIST',
        order: 2,
        question: 'Describe the concept of a firewall.',
      },
      {
        id: 403,
        lessonId: 41,
        type: 'ASSIST',
        order: 3,
        question: 'What is a distributed denial-of-service (DDoS) attack?',
      },
      {
        id: 404,
        lessonId: 41,
        type: 'ASSIST',
        order: 4,
        question: 'Explain the term "malware".',
      },
      {
        id: 405,
        lessonId: 41,
        type: 'ASSIST',
        order: 5,
        question: 'What is social engineering?',
      },
      {
        id: 406,
        lessonId: 41,
        type: 'ASSIST',
        order: 6,
        question: 'What is encryption?',
      },
      {
        id: 407,
        lessonId: 41,
        type: 'SELECT',
        order: 7,
        question: 'What is two-factor authentication?',
      },
      {
        id: 408,
        lessonId: 41,
        type: 'SELECT',
        order: 8,
        question: 'What does a firewall do?',
      },
      {
        id: 409,
        lessonId: 41,
        type: 'SELECT',
        order: 9,
        question: 'How does a DDoS attack work?',
      },
      {
        id: 410,
        lessonId: 41,
        type: 'SELECT',
        order: 10,
        question: 'What is malware?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 401 options
      {
        challengeId: 401,
        imageSrc: '',
        correct: true,
        text: 'A security measure that requires two forms of verification before granting access',
        audioSrc: '',
      },
      {
        challengeId: 401,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 401,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 402 options
      {
        challengeId: 402,
        imageSrc: '',
        correct: true,
        text: 'A system that monitors and controls incoming and outgoing network traffic based on predetermined security rules',
        audioSrc: '',
      },
      {
        challengeId: 402,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 402,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 403 options
      {
        challengeId: 403,
        imageSrc: '',
        correct: true,
        text: 'An attack that involves overwhelming a system with traffic from multiple sources to disrupt service',
        audioSrc: '',
      },
      {
        challengeId: 403,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 403,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 404 options
      {
        challengeId: 404,
        imageSrc: '',
        correct: true,
        text: 'Malicious software designed to harm or exploit any programmable device',
        audioSrc: '',
      },
      {
        challengeId: 404,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 404,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 405 options
      {
        challengeId: 405,
        imageSrc: '',
        correct: true,
        text: 'Manipulating individuals into divulging confidential information through deception',
        audioSrc: '',
      },
      {
        challengeId: 405,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 405,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 406 options
      {
        challengeId: 406,
        imageSrc: '',
        correct: true,
        text: 'The process of encoding data to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 406,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 406,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 407 options
      {
        challengeId: 407,
        imageSrc: '',
        correct: true,
        text: 'A method of securing access by requiring two forms of verification',
        audioSrc: '',
      },
      {
        challengeId: 407,
        imageSrc: '',
        correct: false,
        text: 'A tool for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 407,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 408 options
      {
        challengeId: 408,
        imageSrc: '',
        correct: true,
        text: 'A system that monitors and controls network traffic based on security rules',
        audioSrc: '',
      },
      {
        challengeId: 408,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 408,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 409 options
      {
        challengeId: 409,
        imageSrc: '',
        correct: true,
        text: 'An attack that floods a target with high volumes of traffic to disrupt its operations',
        audioSrc: '',
      },
      {
        challengeId: 409,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 409,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 410 options
      {
        challengeId: 410,
        imageSrc: '',
        correct: true,
        text: 'Malicious software designed to cause damage or unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 410,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 410,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 42
    await db.insert(schema.challenges).values([
      {
        id: 411,
        lessonId: 42,
        type: 'ASSIST',
        order: 1,
        question: 'What is a digital signature?',
      },
      {
        id: 412,
        lessonId: 42,
        type: 'ASSIST',
        order: 2,
        question: 'What is an SQL injection attack?',
      },
      {
        id: 413,
        lessonId: 42,
        type: 'ASSIST',
        order: 3,
        question: 'What is the principle of least privilege?',
      },
      {
        id: 414,
        lessonId: 42,
        type: 'ASSIST',
        order: 4,
        question: 'Describe the concept of a security patch.',
      },
      {
        id: 415,
        lessonId: 42,
        type: 'ASSIST',
        order: 5,
        question: 'What is a man-in-the-middle attack?',
      },
      {
        id: 416,
        lessonId: 42,
        type: 'ASSIST',
        order: 6,
        question: 'What is a botnet?',
      },
      {
        id: 417,
        lessonId: 42,
        type: 'SELECT',
        order: 7,
        question: 'What is a digital signature?',
      },
      {
        id: 418,
        lessonId: 42,
        type: 'SELECT',
        order: 8,
        question: 'What is SQL injection?',
      },
      {
        id: 419,
        lessonId: 42,
        type: 'SELECT',
        order: 9,
        question: 'What is the principle of least privilege?',
      },
      {
        id: 420,
        lessonId: 42,
        type: 'SELECT',
        order: 10,
        question: 'What is a security patch?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 411 options
      {
        challengeId: 411,
        imageSrc: '',
        correct: true,
        text: 'A digital code that is attached to a message to verify its authenticity and integrity',
        audioSrc: '',
      },
      {
        challengeId: 411,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 411,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 412 options
      {
        challengeId: 412,
        imageSrc: '',
        correct: true,
        text: 'An attack where malicious SQL queries are inserted into a web application to manipulate the database',
        audioSrc: '',
      },
      {
        challengeId: 412,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 412,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 413 options
      {
        challengeId: 413,
        imageSrc: '',
        correct: true,
        text: 'Granting users the minimum level of access required to perform their job functions',
        audioSrc: '',
      },
      {
        challengeId: 413,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 413,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 414 options
      {
        challengeId: 414,
        imageSrc: '',
        correct: true,
        text: 'A software update designed to fix vulnerabilities or bugs',
        audioSrc: '',
      },
      {
        challengeId: 414,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 414,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 415 options
      {
        challengeId: 415,
        imageSrc: '',
        correct: true,
        text: 'An attack where an attacker secretly intercepts and potentially alters the communication between two parties',
        audioSrc: '',
      },
      {
        challengeId: 415,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 415,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 416 options
      {
        challengeId: 416,
        imageSrc: '',
        correct: true,
        text: 'A network of infected computers controlled remotely by an attacker',
        audioSrc: '',
      },
      {
        challengeId: 416,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 416,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 417 options
      {
        challengeId: 417,
        imageSrc: '',
        correct: true,
        text: 'A digital code that ensures the authenticity and integrity of a message',
        audioSrc: '',
      },
      {
        challengeId: 417,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 417,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 418 options
      {
        challengeId: 418,
        imageSrc: '',
        correct: true,
        text: 'An attack involving the insertion of malicious SQL queries into a web application to manipulate the database',
        audioSrc: '',
      },
      {
        challengeId: 418,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 418,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 419 options
      {
        challengeId: 419,
        imageSrc: '',
        correct: true,
        text: 'Granting the minimum level of access necessary for users to perform their job functions',
        audioSrc: '',
      },
      {
        challengeId: 419,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 419,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 420 options
      {
        challengeId: 420,
        imageSrc: '',
        correct: true,
        text: 'A software update that fixes vulnerabilities and improves security',
        audioSrc: '',
      },
      {
        challengeId: 420,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 420,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 43
    await db.insert(schema.challenges).values([
      {
        id: 421,
        lessonId: 43,
        type: 'ASSIST',
        order: 1,
        question: 'What is a cross-site scripting (XSS) attack?',
      },
      {
        id: 422,
        lessonId: 43,
        type: 'ASSIST',
        order: 2,
        question: 'Describe the role of a VPN.',
      },
      {
        id: 423,
        lessonId: 43,
        type: 'ASSIST',
        order: 3,
        question: 'What is data encryption at rest?',
      },
      {
        id: 424,
        lessonId: 43,
        type: 'ASSIST',
        order: 4,
        question: 'What are access control lists (ACLs)?',
      },
      {
        id: 425,
        lessonId: 43,
        type: 'ASSIST',
        order: 5,
        question: 'What is penetration testing?',
      },
      {
        id: 426,
        lessonId: 43,
        type: 'ASSIST',
        order: 6,
        question: 'What is a zero-day vulnerability?',
      },
      {
        id: 427,
        lessonId: 43,
        type: 'SELECT',
        order: 7,
        question: 'What is a cross-site scripting (XSS) attack?',
      },
      {
        id: 428,
        lessonId: 43,
        type: 'SELECT',
        order: 8,
        question: 'What does a VPN do?',
      },
      {
        id: 429,
        lessonId: 43,
        type: 'SELECT',
        order: 9,
        question: 'What is data encryption at rest?',
      },
      {
        id: 430,
        lessonId: 43,
        type: 'SELECT',
        order: 10,
        question: 'What are access control lists (ACLs)?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 421 options
      {
        challengeId: 421,
        imageSrc: '',
        correct: true,
        text: 'An attack that injects malicious scripts into web pages viewed by other users',
        audioSrc: '',
      },
      {
        challengeId: 421,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 421,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 422 options
      {
        challengeId: 422,
        imageSrc: '',
        correct: true,
        text: 'A network technology that encrypts and tunnels traffic between a client and server',
        audioSrc: '',
      },
      {
        challengeId: 422,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 422,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 423 options
      {
        challengeId: 423,
        imageSrc: '',
        correct: true,
        text: 'Encrypting data while it is stored on disk',
        audioSrc: '',
      },
      {
        challengeId: 423,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 423,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 424 options
      {
        challengeId: 424,
        imageSrc: '',
        correct: true,
        text: 'A list of rules that define permissions and access rights for users',
        audioSrc: '',
      },
      {
        challengeId: 424,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 424,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 425 options
      {
        challengeId: 425,
        imageSrc: '',
        correct: true,
        text: 'Testing a system for security vulnerabilities by simulating an attack',
        audioSrc: '',
      },
      {
        challengeId: 425,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 425,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 426 options
      {
        challengeId: 426,
        imageSrc: '',
        correct: true,
        text: 'A security flaw that is unknown to the vendor or public and is exploited by attackers',
        audioSrc: '',
      },
      {
        challengeId: 426,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 426,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 427 options
      {
        challengeId: 427,
        imageSrc: '',
        correct: true,
        text: 'An attack where malicious scripts are inserted into web pages viewed by other users',
        audioSrc: '',
      },
      {
        challengeId: 427,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 427,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 428 options
      {
        challengeId: 428,
        imageSrc: '',
        correct: true,
        text: 'A technology that encrypts and routes internet traffic through a secure server',
        audioSrc: '',
      },
      {
        challengeId: 428,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 428,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 429 options
      {
        challengeId: 429,
        imageSrc: '',
        correct: true,
        text: 'Encryption applied to data when it is stored, not during transmission',
        audioSrc: '',
      },
      {
        challengeId: 429,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 429,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 430 options
      {
        challengeId: 430,
        imageSrc: '',
        correct: true,
        text: 'A set of rules that define access permissions for users in a system',
        audioSrc: '',
      },
      {
        challengeId: 430,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 430,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 44
    await db.insert(schema.challenges).values([
      {
        id: 431,
        lessonId: 44,
        type: 'ASSIST',
        order: 1,
        question: 'What is a vulnerability scan?',
      },
      {
        id: 432,
        lessonId: 44,
        type: 'ASSIST',
        order: 2,
        question: 'Describe the concept of an IDS.',
      },
      {
        id: 433,
        lessonId: 44,
        type: 'ASSIST',
        order: 3,
        question: 'What is network segmentation?',
      },
      {
        id: 434,
        lessonId: 44,
        type: 'ASSIST',
        order: 4,
        question: 'What is data loss prevention (DLP)?',
      },
      {
        id: 435,
        lessonId: 44,
        type: 'ASSIST',
        order: 5,
        question: 'What is a security token?',
      },
      {
        id: 436,
        lessonId: 44,
        type: 'ASSIST',
        order: 6,
        question: 'What is an endpoint protection solution?',
      },
      {
        id: 437,
        lessonId: 44,
        type: 'SELECT',
        order: 7,
        question: 'What is a vulnerability scan?',
      },
      {
        id: 438,
        lessonId: 44,
        type: 'SELECT',
        order: 8,
        question: 'What is an IDS?',
      },
      {
        id: 439,
        lessonId: 44,
        type: 'SELECT',
        order: 9,
        question: 'What is network segmentation?',
      },
      {
        id: 440,
        lessonId: 44,
        type: 'SELECT',
        order: 10,
        question: 'What is data loss prevention (DLP)?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 431 options
      {
        challengeId: 431,
        imageSrc: '',
        correct: true,
        text: 'A process of identifying security weaknesses in a system',
        audioSrc: '',
      },
      {
        challengeId: 431,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
      {
        challengeId: 431,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 432 options
      {
        challengeId: 432,
        imageSrc: '',
        correct: true,
        text: 'A system that monitors network traffic for suspicious activity',
        audioSrc: '',
      },
      {
        challengeId: 432,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 432,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 433 options
      {
        challengeId: 433,
        imageSrc: '',
        correct: true,
        text: 'Dividing a network into separate segments to limit access and enhance security',
        audioSrc: '',
      },
      {
        challengeId: 433,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 433,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 434 options
      {
        challengeId: 434,
        imageSrc: '',
        correct: true,
        text: 'A strategy to prevent unauthorized access and protect sensitive data from being lost or stolen',
        audioSrc: '',
      },
      {
        challengeId: 434,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 434,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 435 options
      {
        challengeId: 435,
        imageSrc: '',
        correct: true,
        text: 'A device or software that provides an additional layer of security by generating a unique code',
        audioSrc: '',
      },
      {
        challengeId: 435,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 435,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 436 options
      {
        challengeId: 436,
        imageSrc: '',
        correct: true,
        text: 'A solution that provides security for devices like computers and mobile phones',
        audioSrc: '',
      },
      {
        challengeId: 436,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 436,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 437 options
      {
        challengeId: 437,
        imageSrc: '',
        correct: true,
        text: 'A process to identify and address vulnerabilities in a system',
        audioSrc: '',
      },
      {
        challengeId: 437,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 437,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 438 options
      {
        challengeId: 438,
        imageSrc: '',
        correct: true,
        text: 'A system that detects and responds to suspicious network activities',
        audioSrc: '',
      },
      {
        challengeId: 438,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 438,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 439 options
      {
        challengeId: 439,
        imageSrc: '',
        correct: true,
        text: 'A network design strategy to separate different parts of the network to enhance security',
        audioSrc: '',
      },
      {
        challengeId: 439,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 439,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 440 options
      {
        challengeId: 440,
        imageSrc: '',
        correct: true,
        text: 'A technique to protect data from unauthorized access and loss',
        audioSrc: '',
      },
      {
        challengeId: 440,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 440,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 45
    await db.insert(schema.challenges).values([
      {
        id: 441,
        lessonId: 45,
        type: 'ASSIST',
        order: 1,
        question: 'What is a security audit?',
      },
      {
        id: 442,
        lessonId: 45,
        type: 'ASSIST',
        order: 2,
        question: 'What is threat modeling?',
      },
      {
        id: 443,
        lessonId: 45,
        type: 'ASSIST',
        order: 3,
        question: 'Describe the concept of network monitoring.',
      },
      {
        id: 444,
        lessonId: 45,
        type: 'ASSIST',
        order: 4,
        question: 'What is a cyber attack surface?',
      },
      {
        id: 445,
        lessonId: 45,
        type: 'ASSIST',
        order: 5,
        question: 'What is data masking?',
      },
      {
        id: 446,
        lessonId: 45,
        type: 'ASSIST',
        order: 6,
        question: 'What is a security baseline?',
      },
      {
        id: 447,
        lessonId: 45,
        type: 'SELECT',
        order: 7,
        question: 'What is a security audit?',
      },
      {
        id: 448,
        lessonId: 45,
        type: 'SELECT',
        order: 8,
        question: 'What is threat modeling?',
      },
      {
        id: 449,
        lessonId: 45,
        type: 'SELECT',
        order: 9,
        question: 'What is network monitoring?',
      },
      {
        id: 450,
        lessonId: 45,
        type: 'SELECT',
        order: 10,
        question: 'What is a cyber attack surface?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 441 options
      {
        challengeId: 441,
        imageSrc: '',
        correct: true,
        text: 'A systematic evaluation of an organization’s security posture',
        audioSrc: '',
      },
      {
        challengeId: 441,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
      {
        challengeId: 441,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 442 options
      {
        challengeId: 442,
        imageSrc: '',
        correct: true,
        text: 'A process of identifying potential threats and vulnerabilities to a system',
        audioSrc: '',
      },
      {
        challengeId: 442,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 442,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 443 options
      {
        challengeId: 443,
        imageSrc: '',
        correct: true,
        text: 'The practice of observing and analyzing network traffic to detect potential security issues',
        audioSrc: '',
      },
      {
        challengeId: 443,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 443,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 444 options
      {
        challengeId: 444,
        imageSrc: '',
        correct: true,
        text: 'The total area that is vulnerable to potential attacks within a system or network',
        audioSrc: '',
      },
      {
        challengeId: 444,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 444,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 445 options
      {
        challengeId: 445,
        imageSrc: '',
        correct: true,
        text: 'A technique used to obscure sensitive data to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 445,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 445,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 446 options
      {
        challengeId: 446,
        imageSrc: '',
        correct: true,
        text: 'A minimum security standard that systems are required to meet',
        audioSrc: '',
      },
      {
        challengeId: 446,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 446,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 447 options
      {
        challengeId: 447,
        imageSrc: '',
        correct: true,
        text: 'An evaluation of the effectiveness of an organization’s security controls and practices',
        audioSrc: '',
      },
      {
        challengeId: 447,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 447,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 448 options
      {
        challengeId: 448,
        imageSrc: '',
        correct: true,
        text: 'A process used to identify and prioritize potential threats to a system',
        audioSrc: '',
      },
      {
        challengeId: 448,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 448,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 449 options
      {
        challengeId: 449,
        imageSrc: '',
        correct: true,
        text: 'The practice of observing and analyzing network traffic to identify potential security issues',
        audioSrc: '',
      },
      {
        challengeId: 449,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 449,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 450 options
      {
        challengeId: 450,
        imageSrc: '',
        correct: true,
        text: 'The total vulnerable points or weaknesses in a system that could be exploited by attackers',
        audioSrc: '',
      },
      {
        challengeId: 450,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 450,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 46
    await db.insert(schema.challenges).values([
      {
        id: 451,
        lessonId: 46,
        type: 'ASSIST',
        order: 1,
        question: 'What is a security incident?',
      },
      {
        id: 452,
        lessonId: 46,
        type: 'ASSIST',
        order: 2,
        question: 'Describe the purpose of a firewall.',
      },
      {
        id: 453,
        lessonId: 46,
        type: 'ASSIST',
        order: 3,
        question: 'What is a penetration test?',
      },
      {
        id: 454,
        lessonId: 46,
        type: 'ASSIST',
        order: 4,
        question: 'Explain the concept of multi-factor authentication.',
      },
      {
        id: 455,
        lessonId: 46,
        type: 'ASSIST',
        order: 5,
        question: 'What is a security policy?',
      },
      {
        id: 456,
        lessonId: 46,
        type: 'ASSIST',
        order: 6,
        question: 'What is the purpose of an antivirus program?',
      },
      {
        id: 457,
        lessonId: 46,
        type: 'SELECT',
        order: 7,
        question: 'What is a security incident?',
      },
      {
        id: 458,
        lessonId: 46,
        type: 'SELECT',
        order: 8,
        question: 'What is a firewall?',
      },
      {
        id: 459,
        lessonId: 46,
        type: 'SELECT',
        order: 9,
        question: 'What is a penetration test?',
      },
      {
        id: 460,
        lessonId: 46,
        type: 'SELECT',
        order: 10,
        question: 'What is multi-factor authentication?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 451 options
      {
        challengeId: 451,
        imageSrc: '',
        correct: true,
        text: 'An event that indicates a possible breach of security policies or procedures',
        audioSrc: '',
      },
      {
        challengeId: 451,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
      {
        challengeId: 451,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 452 options
      {
        challengeId: 452,
        imageSrc: '',
        correct: true,
        text: 'A network security device that monitors and controls incoming and outgoing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 452,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 452,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 453 options
      {
        challengeId: 453,
        imageSrc: '',
        correct: true,
        text: 'A simulated attack on a system to identify vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 453,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 453,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 454 options
      {
        challengeId: 454,
        imageSrc: '',
        correct: true,
        text: 'A security measure that requires two or more forms of verification to access a system',
        audioSrc: '',
      },
      {
        challengeId: 454,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 454,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 455 options
      {
        challengeId: 455,
        imageSrc: '',
        correct: true,
        text: 'A set of rules and practices designed to protect an organization’s information and assets',
        audioSrc: '',
      },
      {
        challengeId: 455,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 455,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 456 options
      {
        challengeId: 456,
        imageSrc: '',
        correct: true,
        text: 'Software designed to detect, prevent, and remove malicious software',
        audioSrc: '',
      },
      {
        challengeId: 456,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 456,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 457 options
      {
        challengeId: 457,
        imageSrc: '',
        correct: true,
        text: 'An event that indicates a potential breach or security threat',
        audioSrc: '',
      },
      {
        challengeId: 457,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 457,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 458 options
      {
        challengeId: 458,
        imageSrc: '',
        correct: true,
        text: 'A device that controls traffic between a network and the outside world based on security rules',
        audioSrc: '',
      },
      {
        challengeId: 458,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 458,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 459 options
      {
        challengeId: 459,
        imageSrc: '',
        correct: true,
        text: 'A simulated attack used to test the effectiveness of security controls',
        audioSrc: '',
      },
      {
        challengeId: 459,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 459,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 460 options
      {
        challengeId: 460,
        imageSrc: '',
        correct: true,
        text: 'A security process that requires more than one method of authentication to access resources',
        audioSrc: '',
      },
      {
        challengeId: 460,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 460,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 47
    await db.insert(schema.challenges).values([
      {
        id: 461,
        lessonId: 47,
        type: 'ASSIST',
        order: 1,
        question: 'What is an access control list (ACL)?',
      },
      {
        id: 462,
        lessonId: 47,
        type: 'ASSIST',
        order: 2,
        question: 'What is the role of an intrusion prevention system (IPS)?',
      },
      {
        id: 463,
        lessonId: 47,
        type: 'ASSIST',
        order: 3,
        question: 'Describe the concept of a honeypot.',
      },
      {
        id: 464,
        lessonId: 47,
        type: 'ASSIST',
        order: 4,
        question: 'What is data encryption at rest?',
      },
      {
        id: 465,
        lessonId: 47,
        type: 'ASSIST',
        order: 5,
        question: 'What is a security breach?',
      },
      {
        id: 466,
        lessonId: 47,
        type: 'ASSIST',
        order: 6,
        question: 'What is the purpose of a virtual private network (VPN)?',
      },
      {
        id: 467,
        lessonId: 47,
        type: 'SELECT',
        order: 7,
        question: 'What is an access control list (ACL)?',
      },
      {
        id: 468,
        lessonId: 47,
        type: 'SELECT',
        order: 8,
        question: 'What is an intrusion prevention system (IPS)?',
      },
      {
        id: 469,
        lessonId: 47,
        type: 'SELECT',
        order: 9,
        question: 'What is a honeypot?',
      },
      {
        id: 470,
        lessonId: 47,
        type: 'SELECT',
        order: 10,
        question: 'What is data encryption at rest?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 461 options
      {
        challengeId: 461,
        imageSrc: '',
        correct: true,
        text: 'A list of rules that controls access to resources in a system',
        audioSrc: '',
      },
      {
        challengeId: 461,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 461,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 462 options
      {
        challengeId: 462,
        imageSrc: '',
        correct: true,
        text: 'A system that monitors network traffic and can block potential threats',
        audioSrc: '',
      },
      {
        challengeId: 462,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 462,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 463 options
      {
        challengeId: 463,
        imageSrc: '',
        correct: true,
        text: 'A decoy system used to lure attackers and study their methods',
        audioSrc: '',
      },
      {
        challengeId: 463,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 463,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 464 options
      {
        challengeId: 464,
        imageSrc: '',
        correct: true,
        text: 'Encryption of data when it is stored on a disk or other storage device',
        audioSrc: '',
      },
      {
        challengeId: 464,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data in transit',
        audioSrc: '',
      },
      {
        challengeId: 464,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 465 options
      {
        challengeId: 465,
        imageSrc: '',
        correct: true,
        text: 'An incident where unauthorized access or damage to a system occurs',
        audioSrc: '',
      },
      {
        challengeId: 465,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 465,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 466 options
      {
        challengeId: 466,
        imageSrc: '',
        correct: true,
        text: 'A private network that uses encryption to secure data transmission over a public network',
        audioSrc: '',
      },
      {
        challengeId: 466,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data in transit',
        audioSrc: '',
      },
      {
        challengeId: 466,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 467 options
      {
        challengeId: 467,
        imageSrc: '',
        correct: true,
        text: 'A list of rules for managing access permissions to resources in a network',
        audioSrc: '',
      },
      {
        challengeId: 467,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 467,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 468 options
      {
        challengeId: 468,
        imageSrc: '',
        correct: true,
        text: 'A system that prevents or detects network intrusion attempts',
        audioSrc: '',
      },
      {
        challengeId: 468,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 468,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 469 options
      {
        challengeId: 469,
        imageSrc: '',
        correct: true,
        text: 'A system designed to attract and trap attackers by simulating a real network',
        audioSrc: '',
      },
      {
        challengeId: 469,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 469,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 470 options
      {
        challengeId: 470,
        imageSrc: '',
        correct: true,
        text: 'The process of encrypting data while it is stored on a device or storage medium',
        audioSrc: '',
      },
      {
        challengeId: 470,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data in transit',
        audioSrc: '',
      },
      {
        challengeId: 470,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 48
    await db.insert(schema.challenges).values([
      {
        id: 471,
        lessonId: 48,
        type: 'ASSIST',
        order: 1,
        question: 'What is network segmentation?',
      },
      {
        id: 472,
        lessonId: 48,
        type: 'ASSIST',
        order: 2,
        question: 'What is a vulnerability assessment?',
      },
      {
        id: 473,
        lessonId: 48,
        type: 'ASSIST',
        order: 3,
        question: 'What is a security token?',
      },
      {
        id: 474,
        lessonId: 48,
        type: 'ASSIST',
        order: 4,
        question:
          'Explain the purpose of a security information and event management (SIEM) system.',
      },
      {
        id: 475,
        lessonId: 48,
        type: 'ASSIST',
        order: 5,
        question: 'What is two-factor authentication?',
      },
      {
        id: 476,
        lessonId: 48,
        type: 'ASSIST',
        order: 6,
        question: 'What is an endpoint protection system?',
      },
      {
        id: 477,
        lessonId: 48,
        type: 'SELECT',
        order: 7,
        question: 'What is network segmentation?',
      },
      {
        id: 478,
        lessonId: 48,
        type: 'SELECT',
        order: 8,
        question: 'What is a vulnerability assessment?',
      },
      {
        id: 479,
        lessonId: 48,
        type: 'SELECT',
        order: 9,
        question: 'What is a security token?',
      },
      {
        id: 480,
        lessonId: 48,
        type: 'SELECT',
        order: 10,
        question: 'What is a SIEM system?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 471 options
      {
        challengeId: 471,
        imageSrc: '',
        correct: true,
        text: 'The practice of dividing a network into smaller, isolated segments to enhance security',
        audioSrc: '',
      },
      {
        challengeId: 471,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 471,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 472 options
      {
        challengeId: 472,
        imageSrc: '',
        correct: true,
        text: 'An evaluation to identify vulnerabilities and weaknesses in a system',
        audioSrc: '',
      },
      {
        challengeId: 472,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 472,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 473 options
      {
        challengeId: 473,
        imageSrc: '',
        correct: true,
        text: 'A physical or digital device used for authentication and access control',
        audioSrc: '',
      },
      {
        challengeId: 473,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 473,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 474 options
      {
        challengeId: 474,
        imageSrc: '',
        correct: true,
        text: 'A system that collects and analyzes security data from various sources',
        audioSrc: '',
      },
      {
        challengeId: 474,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 474,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 475 options
      {
        challengeId: 475,
        imageSrc: '',
        correct: true,
        text: 'A security process that requires two different forms of authentication for access',
        audioSrc: '',
      },
      {
        challengeId: 475,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 475,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 476 options
      {
        challengeId: 476,
        imageSrc: '',
        correct: true,
        text: 'Software designed to protect and secure endpoints, such as computers and mobile devices',
        audioSrc: '',
      },
      {
        challengeId: 476,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 476,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 477 options
      {
        challengeId: 477,
        imageSrc: '',
        correct: true,
        text: 'The process of dividing a network into smaller segments to improve security',
        audioSrc: '',
      },
      {
        challengeId: 477,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 477,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 478 options
      {
        challengeId: 478,
        imageSrc: '',
        correct: true,
        text: 'An evaluation to identify and address weaknesses in a system',
        audioSrc: '',
      },
      {
        challengeId: 478,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 478,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 479 options
      {
        challengeId: 479,
        imageSrc: '',
        correct: true,
        text: 'A device or software used to authenticate and control access',
        audioSrc: '',
      },
      {
        challengeId: 479,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 479,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 480 options
      {
        challengeId: 480,
        imageSrc: '',
        correct: true,
        text: 'A system that provides real-time analysis of security alerts and events',
        audioSrc: '',
      },
      {
        challengeId: 480,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 480,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 49
    await db.insert(schema.challenges).values([
      {
        id: 481,
        lessonId: 49,
        type: 'ASSIST',
        order: 1,
        question: 'What is threat intelligence?',
      },
      {
        id: 482,
        lessonId: 49,
        type: 'ASSIST',
        order: 2,
        question: 'Describe the concept of a security patch.',
      },
      {
        id: 483,
        lessonId: 49,
        type: 'ASSIST',
        order: 3,
        question: 'What is a data breach?',
      },
      {
        id: 484,
        lessonId: 49,
        type: 'ASSIST',
        order: 4,
        question: 'What is network monitoring?',
      },
      {
        id: 485,
        lessonId: 49,
        type: 'ASSIST',
        order: 5,
        question: 'Explain the purpose of a digital certificate.',
      },
      {
        id: 486,
        lessonId: 49,
        type: 'ASSIST',
        order: 6,
        question: 'What is a zero-day vulnerability?',
      },
      {
        id: 487,
        lessonId: 49,
        type: 'SELECT',
        order: 7,
        question: 'What is threat intelligence?',
      },
      {
        id: 488,
        lessonId: 49,
        type: 'SELECT',
        order: 8,
        question: 'What is a security patch?',
      },
      {
        id: 489,
        lessonId: 49,
        type: 'SELECT',
        order: 9,
        question: 'What is a data breach?',
      },
      {
        id: 490,
        lessonId: 49,
        type: 'SELECT',
        order: 10,
        question: 'What is network monitoring?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 481 options
      {
        challengeId: 481,
        imageSrc: '',
        correct: true,
        text: 'Information used to understand and respond to cyber threats',
        audioSrc: '',
      },
      {
        challengeId: 481,
        imageSrc: '',
        correct: false,
        text: 'A tool for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 481,
        imageSrc: '',
        correct: false,
        text: 'A method for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 482 options
      {
        challengeId: 482,
        imageSrc: '',
        correct: true,
        text: 'A software update that fixes vulnerabilities or bugs in a system',
        audioSrc: '',
      },
      {
        challengeId: 482,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 482,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 483 options
      {
        challengeId: 483,
        imageSrc: '',
        correct: true,
        text: 'An incident where unauthorized access or extraction of data occurs',
        audioSrc: '',
      },
      {
        challengeId: 483,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 483,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 484 options
      {
        challengeId: 484,
        imageSrc: '',
        correct: true,
        text: 'The process of observing and analyzing network activity to identify and respond to potential threats',
        audioSrc: '',
      },
      {
        challengeId: 484,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 484,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 485 options
      {
        challengeId: 485,
        imageSrc: '',
        correct: true,
        text: 'A digital document that proves the identity of an individual or organization',
        audioSrc: '',
      },
      {
        challengeId: 485,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 485,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 486 options
      {
        challengeId: 486,
        imageSrc: '',
        correct: true,
        text: 'A vulnerability that is exploited before a fix is available',
        audioSrc: '',
      },
      {
        challengeId: 486,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 486,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 487 options
      {
        challengeId: 487,
        imageSrc: '',
        correct: true,
        text: 'Information that helps to understand and counteract cyber threats',
        audioSrc: '',
      },
      {
        challengeId: 487,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 487,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 488 options
      {
        challengeId: 488,
        imageSrc: '',
        correct: true,
        text: 'An update that addresses known vulnerabilities or bugs in software',
        audioSrc: '',
      },
      {
        challengeId: 488,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 488,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 489 options
      {
        challengeId: 489,
        imageSrc: '',
        correct: true,
        text: 'An event where unauthorized access or extraction of sensitive data occurs',
        audioSrc: '',
      },
      {
        challengeId: 489,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 489,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 490 options
      {
        challengeId: 490,
        imageSrc: '',
        correct: true,
        text: 'The process of observing network activity to detect and respond to potential threats',
        audioSrc: '',
      },
      {
        challengeId: 490,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 490,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
    ]);

    // Lesson 50
    await db.insert(schema.challenges).values([
      {
        id: 491,
        lessonId: 50,
        type: 'ASSIST',
        order: 1,
        question: 'What is a security audit?',
      },
      {
        id: 492,
        lessonId: 50,
        type: 'ASSIST',
        order: 2,
        question: 'Describe the function of a proxy server.',
      },
      {
        id: 493,
        lessonId: 50,
        type: 'ASSIST',
        order: 3,
        question: 'What is a risk assessment?',
      },
      {
        id: 494,
        lessonId: 50,
        type: 'ASSIST',
        order: 4,
        question: 'What is the purpose of a patch management system?',
      },
      {
        id: 495,
        lessonId: 50,
        type: 'ASSIST',
        order: 5,
        question: 'What is data masking?',
      },
      {
        id: 496,
        lessonId: 50,
        type: 'ASSIST',
        order: 6,
        question: 'What is an incident response plan?',
      },
      {
        id: 497,
        lessonId: 50,
        type: 'SELECT',
        order: 7,
        question: 'What is a security audit?',
      },
      {
        id: 498,
        lessonId: 50,
        type: 'SELECT',
        order: 8,
        question: 'What is a proxy server?',
      },
      {
        id: 499,
        lessonId: 50,
        type: 'SELECT',
        order: 9,
        question: 'What is a risk assessment?',
      },
      {
        id: 500,
        lessonId: 50,
        type: 'SELECT',
        order: 10,
        question: 'What is a patch management system?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 491 options
      {
        challengeId: 491,
        imageSrc: '',
        correct: true,
        text: 'A systematic examination of an organization’s security policies and controls',
        audioSrc: '',
      },
      {
        challengeId: 491,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 491,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 492 options
      {
        challengeId: 492,
        imageSrc: '',
        correct: true,
        text: 'A server that acts as an intermediary between a user and the internet',
        audioSrc: '',
      },
      {
        challengeId: 492,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 492,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 493 options
      {
        challengeId: 493,
        imageSrc: '',
        correct: true,
        text: 'The process of identifying and evaluating risks to an organization’s assets',
        audioSrc: '',
      },
      {
        challengeId: 493,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 493,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 494 options
      {
        challengeId: 494,
        imageSrc: '',
        correct: true,
        text: 'A system that manages and applies software updates and patches',
        audioSrc: '',
      },
      {
        challengeId: 494,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 494,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 495 options
      {
        challengeId: 495,
        imageSrc: '',
        correct: true,
        text: 'The process of obscuring data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 495,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 495,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 496 options
      {
        challengeId: 496,
        imageSrc: '',
        correct: true,
        text: 'A plan that outlines the steps to be taken in response to a security incident',
        audioSrc: '',
      },
      {
        challengeId: 496,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 496,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 497 options
      {
        challengeId: 497,
        imageSrc: '',
        correct: true,
        text: 'A review of security practices and controls within an organization',
        audioSrc: '',
      },
      {
        challengeId: 497,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 497,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 498 options
      {
        challengeId: 498,
        imageSrc: '',
        correct: true,
        text: 'An intermediary server that relays requests and responses between a client and the internet',
        audioSrc: '',
      },
      {
        challengeId: 498,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 498,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 499 options
      {
        challengeId: 499,
        imageSrc: '',
        correct: true,
        text: 'The process of identifying and assessing potential risks to an organization’s assets',
        audioSrc: '',
      },
      {
        challengeId: 499,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 499,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 500 options
      {
        challengeId: 500,
        imageSrc: '',
        correct: true,
        text: 'A system that handles the deployment and management of software updates and patches',
        audioSrc: '',
      },
      {
        challengeId: 500,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 500,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 51
    await db.insert(schema.challenges).values([
      {
        id: 501,
        lessonId: 51,
        type: 'ASSIST',
        order: 1,
        question: 'What is a vulnerability assessment?',
      },
      {
        id: 502,
        lessonId: 51,
        type: 'ASSIST',
        order: 2,
        question: 'What does a firewall do?',
      },
      {
        id: 503,
        lessonId: 51,
        type: 'ASSIST',
        order: 3,
        question: 'Explain what a trojan horse is.',
      },
      {
        id: 504,
        lessonId: 51,
        type: 'ASSIST',
        order: 4,
        question: 'What is the purpose of an intrusion detection system (IDS)?',
      },
      {
        id: 505,
        lessonId: 51,
        type: 'ASSIST',
        order: 5,
        question: 'What is a DDoS attack?',
      },
      {
        id: 506,
        lessonId: 51,
        type: 'ASSIST',
        order: 6,
        question: 'What is a VPN?',
      },
      {
        id: 507,
        lessonId: 51,
        type: 'SELECT',
        order: 7,
        question: 'What is a vulnerability assessment?',
      },
      {
        id: 508,
        lessonId: 51,
        type: 'SELECT',
        order: 8,
        question: 'What does a firewall do?',
      },
      {
        id: 509,
        lessonId: 51,
        type: 'SELECT',
        order: 9,
        question: 'What is a trojan horse?',
      },
      {
        id: 510,
        lessonId: 51,
        type: 'SELECT',
        order: 10,
        question: 'What is an intrusion detection system (IDS)?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 501 options
      {
        challengeId: 501,
        imageSrc: '',
        correct: true,
        text: 'A process to identify and evaluate security weaknesses in a system',
        audioSrc: '',
      },
      {
        challengeId: 501,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 501,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 502 options
      {
        challengeId: 502,
        imageSrc: '',
        correct: true,
        text: 'A network security device that monitors and controls incoming and outgoing traffic',
        audioSrc: '',
      },
      {
        challengeId: 502,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 502,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 503 options
      {
        challengeId: 503,
        imageSrc: '',
        correct: true,
        text: 'Malware that disguises itself as legitimate software to gain unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 503,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 503,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 504 options
      {
        challengeId: 504,
        imageSrc: '',
        correct: true,
        text: 'A system designed to detect and respond to suspicious activity on a network',
        audioSrc: '',
      },
      {
        challengeId: 504,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 504,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 505 options
      {
        challengeId: 505,
        imageSrc: '',
        correct: true,
        text: 'A type of cyber attack where multiple systems overwhelm a target with traffic',
        audioSrc: '',
      },
      {
        challengeId: 505,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 505,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 506 options
      {
        challengeId: 506,
        imageSrc: '',
        correct: true,
        text: 'A service that encrypts and routes internet traffic to provide privacy and security',
        audioSrc: '',
      },
      {
        challengeId: 506,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 506,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 507 options
      {
        challengeId: 507,
        imageSrc: '',
        correct: true,
        text: 'A process to identify and evaluate security weaknesses in a system',
        audioSrc: '',
      },
      {
        challengeId: 507,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 507,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 508 options
      {
        challengeId: 508,
        imageSrc: '',
        correct: true,
        text: 'A network security device that monitors and controls incoming and outgoing traffic',
        audioSrc: '',
      },
      {
        challengeId: 508,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 508,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 509 options
      {
        challengeId: 509,
        imageSrc: '',
        correct: true,
        text: 'Malware that disguises itself as legitimate software to gain unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 509,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 509,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 510 options
      {
        challengeId: 510,
        imageSrc: '',
        correct: true,
        text: 'A system designed to detect and respond to suspicious activity on a network',
        audioSrc: '',
      },
      {
        challengeId: 510,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 510,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
    ]);

    // Lesson 52
    await db.insert(schema.challenges).values([
      {
        id: 511,
        lessonId: 52,
        type: 'ASSIST',
        order: 1,
        question: 'What is a security policy?',
      },
      {
        id: 512,
        lessonId: 52,
        type: 'ASSIST',
        order: 2,
        question: 'What is a keylogger?',
      },
      {
        id: 513,
        lessonId: 52,
        type: 'ASSIST',
        order: 3,
        question: 'Describe the role of multi-factor authentication.',
      },
      {
        id: 514,
        lessonId: 52,
        type: 'ASSIST',
        order: 4,
        question: 'What is network segmentation?',
      },
      {
        id: 515,
        lessonId: 52,
        type: 'ASSIST',
        order: 5,
        question: 'What does an antivirus program do?',
      },
      {
        id: 516,
        lessonId: 52,
        type: 'ASSIST',
        order: 6,
        question: 'What is a security incident?',
      },
      {
        id: 517,
        lessonId: 52,
        type: 'SELECT',
        order: 7,
        question: 'What is a security policy?',
      },
      {
        id: 518,
        lessonId: 52,
        type: 'SELECT',
        order: 8,
        question: 'What is a keylogger?',
      },
      {
        id: 519,
        lessonId: 52,
        type: 'SELECT',
        order: 9,
        question: 'Describe the role of multi-factor authentication.',
      },
      {
        id: 520,
        lessonId: 52,
        type: 'SELECT',
        order: 10,
        question: 'What is network segmentation?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 511 options
      {
        challengeId: 511,
        imageSrc: '',
        correct: true,
        text: 'A set of guidelines and rules to protect an organization’s assets',
        audioSrc: '',
      },
      {
        challengeId: 511,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
      {
        challengeId: 511,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 512 options
      {
        challengeId: 512,
        imageSrc: '',
        correct: true,
        text: 'Software that records keystrokes to gain unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 512,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 512,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 513 options
      {
        challengeId: 513,
        imageSrc: '',
        correct: true,
        text: 'A security measure that requires multiple forms of verification before granting access',
        audioSrc: '',
      },
      {
        challengeId: 513,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 513,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 514 options
      {
        challengeId: 514,
        imageSrc: '',
        correct: true,
        text: 'The practice of dividing a network into smaller, isolated segments to improve security',
        audioSrc: '',
      },
      {
        challengeId: 514,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 514,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 515 options
      {
        challengeId: 515,
        imageSrc: '',
        correct: true,
        text: 'Software designed to detect and remove malicious software from a computer',
        audioSrc: '',
      },
      {
        challengeId: 515,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 515,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 516 options
      {
        challengeId: 516,
        imageSrc: '',
        correct: true,
        text: 'An event or occurrence that poses a threat to an organization’s security',
        audioSrc: '',
      },
      {
        challengeId: 516,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 516,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 517 options
      {
        challengeId: 517,
        imageSrc: '',
        correct: true,
        text: 'A set of guidelines and rules to protect an organization’s assets',
        audioSrc: '',
      },
      {
        challengeId: 517,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
      {
        challengeId: 517,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 518 options
      {
        challengeId: 518,
        imageSrc: '',
        correct: true,
        text: 'Software that records keystrokes to gain unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 518,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 518,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 519 options
      {
        challengeId: 519,
        imageSrc: '',
        correct: true,
        text: 'A security measure that requires multiple forms of verification before granting access',
        audioSrc: '',
      },
      {
        challengeId: 519,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 519,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 520 options
      {
        challengeId: 520,
        imageSrc: '',
        correct: true,
        text: 'The practice of dividing a network into smaller, isolated segments to improve security',
        audioSrc: '',
      },
      {
        challengeId: 520,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 520,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 53
    await db.insert(schema.challenges).values([
      {
        id: 521,
        lessonId: 53,
        type: 'ASSIST',
        order: 1,
        question: 'What is a penetration test?',
      },
      {
        id: 522,
        lessonId: 53,
        type: 'ASSIST',
        order: 2,
        question: 'What does a proxy server do?',
      },
      {
        id: 523,
        lessonId: 53,
        type: 'ASSIST',
        order: 3,
        question: 'Define what a worm is.',
      },
      {
        id: 524,
        lessonId: 53,
        type: 'ASSIST',
        order: 4,
        question: 'What is a security audit?',
      },
      {
        id: 525,
        lessonId: 53,
        type: 'ASSIST',
        order: 5,
        question: 'What does a network firewall do?',
      },
      {
        id: 526,
        lessonId: 53,
        type: 'ASSIST',
        order: 6,
        question: 'Explain what a backdoor is.',
      },
      {
        id: 527,
        lessonId: 53,
        type: 'SELECT',
        order: 7,
        question: 'What is a penetration test?',
      },
      {
        id: 528,
        lessonId: 53,
        type: 'SELECT',
        order: 8,
        question: 'What does a proxy server do?',
      },
      {
        id: 529,
        lessonId: 53,
        type: 'SELECT',
        order: 9,
        question: 'Define what a worm is.',
      },
      {
        id: 530,
        lessonId: 53,
        type: 'SELECT',
        order: 10,
        question: 'What is a security audit?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 521 options
      {
        challengeId: 521,
        imageSrc: '',
        correct: true,
        text: 'A simulated attack on a system to find vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 521,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
      {
        challengeId: 521,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 522 options
      {
        challengeId: 522,
        imageSrc: '',
        correct: true,
        text: 'A server that acts as an intermediary between a client and the internet',
        audioSrc: '',
      },
      {
        challengeId: 522,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 522,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 523 options
      {
        challengeId: 523,
        imageSrc: '',
        correct: true,
        text: 'A self-replicating malware that spreads through networks',
        audioSrc: '',
      },
      {
        challengeId: 523,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 523,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 524 options
      {
        challengeId: 524,
        imageSrc: '',
        correct: true,
        text: 'A formal review of an organization’s security policies and controls',
        audioSrc: '',
      },
      {
        challengeId: 524,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 524,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 525 options
      {
        challengeId: 525,
        imageSrc: '',
        correct: true,
        text: 'A device that monitors and filters network traffic based on security rules',
        audioSrc: '',
      },
      {
        challengeId: 525,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 525,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 526 options
      {
        challengeId: 526,
        imageSrc: '',
        correct: true,
        text: 'A method for bypassing security measures to gain unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 526,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 526,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 527 options
      {
        challengeId: 527,
        imageSrc: '',
        correct: true,
        text: 'A simulated attack on a system to find vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 527,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
      {
        challengeId: 527,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 528 options
      {
        challengeId: 528,
        imageSrc: '',
        correct: true,
        text: 'A server that acts as an intermediary between a client and the internet',
        audioSrc: '',
      },
      {
        challengeId: 528,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 528,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 529 options
      {
        challengeId: 529,
        imageSrc: '',
        correct: true,
        text: 'A self-replicating malware that spreads through networks',
        audioSrc: '',
      },
      {
        challengeId: 529,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 529,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 530 options
      {
        challengeId: 530,
        imageSrc: '',
        correct: true,
        text: 'A formal review of an organization’s security policies and controls',
        audioSrc: '',
      },
      {
        challengeId: 530,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 530,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
    ]);

    // Lesson 54
    await db.insert(schema.challenges).values([
      {
        id: 531,
        lessonId: 54,
        type: 'ASSIST',
        order: 1,
        question: 'What is encryption?',
      },
      {
        id: 532,
        lessonId: 54,
        type: 'ASSIST',
        order: 2,
        question: 'What is a security breach?',
      },
      {
        id: 533,
        lessonId: 54,
        type: 'ASSIST',
        order: 3,
        question: 'Define what a phishing attack is.',
      },
      {
        id: 534,
        lessonId: 54,
        type: 'ASSIST',
        order: 4,
        question: 'What is a zero-day vulnerability?',
      },
      {
        id: 535,
        lessonId: 54,
        type: 'ASSIST',
        order: 5,
        question: 'What is two-factor authentication (2FA)?',
      },
      {
        id: 536,
        lessonId: 54,
        type: 'ASSIST',
        order: 6,
        question: 'Explain what a denial-of-service (DoS) attack is.',
      },
      {
        id: 537,
        lessonId: 54,
        type: 'SELECT',
        order: 7,
        question: 'What is encryption?',
      },
      {
        id: 538,
        lessonId: 54,
        type: 'SELECT',
        order: 8,
        question: 'What is a security breach?',
      },
      {
        id: 539,
        lessonId: 54,
        type: 'SELECT',
        order: 9,
        question: 'Define what a phishing attack is.',
      },
      {
        id: 540,
        lessonId: 54,
        type: 'SELECT',
        order: 10,
        question: 'What is a zero-day vulnerability?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 531 options
      {
        challengeId: 531,
        imageSrc: '',
        correct: true,
        text: 'The process of encoding information to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 531,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
      {
        challengeId: 531,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 532 options
      {
        challengeId: 532,
        imageSrc: '',
        correct: true,
        text: 'An incident where unauthorized access or disclosure of data occurs',
        audioSrc: '',
      },
      {
        challengeId: 532,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 532,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 533 options
      {
        challengeId: 533,
        imageSrc: '',
        correct: true,
        text: 'A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity',
        audioSrc: '',
      },
      {
        challengeId: 533,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 533,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 534 options
      {
        challengeId: 534,
        imageSrc: '',
        correct: true,
        text: 'A previously unknown vulnerability that is exploited by attackers before a fix is available',
        audioSrc: '',
      },
      {
        challengeId: 534,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 534,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 535 options
      {
        challengeId: 535,
        imageSrc: '',
        correct: true,
        text: 'A security measure that requires two forms of verification before granting access',
        audioSrc: '',
      },
      {
        challengeId: 535,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 535,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 536 options
      {
        challengeId: 536,
        imageSrc: '',
        correct: true,
        text: 'An attack aimed at disrupting a service or network by overwhelming it with traffic',
        audioSrc: '',
      },
      {
        challengeId: 536,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 536,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 537 options
      {
        challengeId: 537,
        imageSrc: '',
        correct: true,
        text: 'The process of encoding information to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 537,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
      {
        challengeId: 537,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 538 options
      {
        challengeId: 538,
        imageSrc: '',
        correct: true,
        text: 'An incident where unauthorized access or disclosure of data occurs',
        audioSrc: '',
      },
      {
        challengeId: 538,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 538,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 539 options
      {
        challengeId: 539,
        imageSrc: '',
        correct: true,
        text: 'A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity',
        audioSrc: '',
      },
      {
        challengeId: 539,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 539,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 540 options
      {
        challengeId: 540,
        imageSrc: '',
        correct: true,
        text: 'A previously unknown vulnerability that is exploited by attackers before a fix is available',
        audioSrc: '',
      },
      {
        challengeId: 540,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 540,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
    ]);

    // Lesson 55
    await db.insert(schema.challenges).values([
      {
        id: 541,
        lessonId: 55,
        type: 'ASSIST',
        order: 1,
        question: 'What is a digital certificate?',
      },
      {
        id: 542,
        lessonId: 55,
        type: 'ASSIST',
        order: 2,
        question: 'What is the purpose of a hash function?',
      },
      {
        id: 543,
        lessonId: 55,
        type: 'ASSIST',
        order: 3,
        question: 'Define what a ransomware attack is.',
      },
      {
        id: 544,
        lessonId: 55,
        type: 'ASSIST',
        order: 4,
        question: 'What is a security patch?',
      },
      {
        id: 545,
        lessonId: 55,
        type: 'ASSIST',
        order: 5,
        question: 'Explain what a botnet is.',
      },
      {
        id: 546,
        lessonId: 55,
        type: 'ASSIST',
        order: 6,
        question: 'What is a security token?',
      },
      {
        id: 547,
        lessonId: 55,
        type: 'SELECT',
        order: 7,
        question: 'What is a digital certificate?',
      },
      {
        id: 548,
        lessonId: 55,
        type: 'SELECT',
        order: 8,
        question: 'What is the purpose of a hash function?',
      },
      {
        id: 549,
        lessonId: 55,
        type: 'SELECT',
        order: 9,
        question: 'Define what a ransomware attack is.',
      },
      {
        id: 550,
        lessonId: 55,
        type: 'SELECT',
        order: 10,
        question: 'What is a security patch?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 541 options
      {
        challengeId: 541,
        imageSrc: '',
        correct: true,
        text: 'A digital document that verifies the identity of a user or device',
        audioSrc: '',
      },
      {
        challengeId: 541,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 541,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 542 options
      {
        challengeId: 542,
        imageSrc: '',
        correct: true,
        text: 'A function that converts data into a fixed-size string of characters, typically a hash value',
        audioSrc: '',
      },
      {
        challengeId: 542,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
      {
        challengeId: 542,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 543 options
      {
        challengeId: 543,
        imageSrc: '',
        correct: true,
        text: 'Malware that encrypts a victim’s files and demands a ransom for the decryption key',
        audioSrc: '',
      },
      {
        challengeId: 543,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 543,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 544 options
      {
        challengeId: 544,
        imageSrc: '',
        correct: true,
        text: 'An update to software that fixes vulnerabilities or bugs',
        audioSrc: '',
      },
      {
        challengeId: 544,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 544,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 545 options
      {
        challengeId: 545,
        imageSrc: '',
        correct: true,
        text: 'A network of compromised computers used to carry out attacks',
        audioSrc: '',
      },
      {
        challengeId: 545,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 545,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 546 options
      {
        challengeId: 546,
        imageSrc: '',
        correct: true,
        text: 'A physical or digital device used to authenticate a user’s identity',
        audioSrc: '',
      },
      {
        challengeId: 546,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 546,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 547 options
      {
        challengeId: 547,
        imageSrc: '',
        correct: true,
        text: 'A digital document that verifies the identity of a user or device',
        audioSrc: '',
      },
      {
        challengeId: 547,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 547,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 548 options
      {
        challengeId: 548,
        imageSrc: '',
        correct: true,
        text: 'A function that converts data into a fixed-size string of characters, typically a hash value',
        audioSrc: '',
      },
      {
        challengeId: 548,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
      {
        challengeId: 548,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 549 options
      {
        challengeId: 549,
        imageSrc: '',
        correct: true,
        text: 'Malware that encrypts a victim’s files and demands a ransom for the decryption key',
        audioSrc: '',
      },
      {
        challengeId: 549,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 549,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 550 options
      {
        challengeId: 550,
        imageSrc: '',
        correct: true,
        text: 'An update to software that fixes vulnerabilities or bugs',
        audioSrc: '',
      },
      {
        challengeId: 550,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 550,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
    ]);

    // Lesson 56
    await db.insert(schema.challenges).values([
      {
        id: 551,
        lessonId: 56,
        type: 'ASSIST',
        order: 1,
        question: 'What is a firewall?',
      },
      {
        id: 552,
        lessonId: 56,
        type: 'ASSIST',
        order: 2,
        question: 'Explain what an intrusion detection system (IDS) does.',
      },
      {
        id: 553,
        lessonId: 56,
        type: 'ASSIST',
        order: 3,
        question: 'Define what a security vulnerability is.',
      },
      {
        id: 554,
        lessonId: 56,
        type: 'ASSIST',
        order: 4,
        question: 'What is a malware signature?',
      },
      {
        id: 555,
        lessonId: 56,
        type: 'ASSIST',
        order: 5,
        question: 'Explain what a VPN is and how it works.',
      },
      {
        id: 556,
        lessonId: 56,
        type: 'ASSIST',
        order: 6,
        question: 'What is social engineering in cybersecurity?',
      },
      {
        id: 557,
        lessonId: 56,
        type: 'SELECT',
        order: 7,
        question: 'What is a firewall?',
      },
      {
        id: 558,
        lessonId: 56,
        type: 'SELECT',
        order: 8,
        question: 'Explain what an intrusion detection system (IDS) does.',
      },
      {
        id: 559,
        lessonId: 56,
        type: 'SELECT',
        order: 9,
        question: 'Define what a security vulnerability is.',
      },
      {
        id: 560,
        lessonId: 56,
        type: 'SELECT',
        order: 10,
        question: 'What is a malware signature?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 551 options
      {
        challengeId: 551,
        imageSrc: '',
        correct: true,
        text: 'A system that monitors and controls incoming and outgoing network traffic based on predetermined security rules',
        audioSrc: '',
      },
      {
        challengeId: 551,
        imageSrc: '',
        correct: false,
        text: 'A tool for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 551,
        imageSrc: '',
        correct: false,
        text: 'A method for managing access permissions',
        audioSrc: '',
      },

      // Challenge 552 options
      {
        challengeId: 552,
        imageSrc: '',
        correct: true,
        text: 'A system that monitors network traffic for suspicious activities and potential threats',
        audioSrc: '',
      },
      {
        challengeId: 552,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 552,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 553 options
      {
        challengeId: 553,
        imageSrc: '',
        correct: true,
        text: 'A weakness in a system that can be exploited to gain unauthorized access or cause harm',
        audioSrc: '',
      },
      {
        challengeId: 553,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
      {
        challengeId: 553,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 554 options
      {
        challengeId: 554,
        imageSrc: '',
        correct: true,
        text: 'A pattern or code used to detect malicious software',
        audioSrc: '',
      },
      {
        challengeId: 554,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 554,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 555 options
      {
        challengeId: 555,
        imageSrc: '',
        correct: true,
        text: 'A secure network connection over the internet that protects data from eavesdropping',
        audioSrc: '',
      },
      {
        challengeId: 555,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 555,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 556 options
      {
        challengeId: 556,
        imageSrc: '',
        correct: true,
        text: 'Manipulating individuals into divulging confidential information',
        audioSrc: '',
      },
      {
        challengeId: 556,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 556,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 557 options
      {
        challengeId: 557,
        imageSrc: '',
        correct: true,
        text: 'A system that monitors and controls incoming and outgoing network traffic based on predetermined security rules',
        audioSrc: '',
      },
      {
        challengeId: 557,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 557,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 558 options
      {
        challengeId: 558,
        imageSrc: '',
        correct: true,
        text: 'A system that monitors network traffic for suspicious activities and potential threats',
        audioSrc: '',
      },
      {
        challengeId: 558,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 558,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 559 options
      {
        challengeId: 559,
        imageSrc: '',
        correct: true,
        text: 'A weakness in a system that can be exploited to gain unauthorized access or cause harm',
        audioSrc: '',
      },
      {
        challengeId: 559,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 559,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 560 options
      {
        challengeId: 560,
        imageSrc: '',
        correct: true,
        text: 'A pattern or code used to detect malicious software',
        audioSrc: '',
      },
      {
        challengeId: 560,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 560,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
    ]);

    // Lesson 57
    await db.insert(schema.challenges).values([
      {
        id: 561,
        lessonId: 57,
        type: 'ASSIST',
        order: 1,
        question: 'What is a security protocol?',
      },
      {
        id: 562,
        lessonId: 57,
        type: 'ASSIST',
        order: 2,
        question: 'Explain what network segmentation is.',
      },
      {
        id: 563,
        lessonId: 57,
        type: 'ASSIST',
        order: 3,
        question: 'Define what a denial-of-service (DoS) attack is.',
      },
      {
        id: 564,
        lessonId: 57,
        type: 'ASSIST',
        order: 4,
        question: 'What is the principle of least privilege?',
      },
      {
        id: 565,
        lessonId: 57,
        type: 'ASSIST',
        order: 5,
        question: 'Explain what a security policy is.',
      },
      {
        id: 566,
        lessonId: 57,
        type: 'ASSIST',
        order: 6,
        question: 'What is an access control list (ACL)?',
      },
      {
        id: 567,
        lessonId: 57,
        type: 'SELECT',
        order: 7,
        question: 'What is a security protocol?',
      },
      {
        id: 568,
        lessonId: 57,
        type: 'SELECT',
        order: 8,
        question: 'Explain what network segmentation is.',
      },
      {
        id: 569,
        lessonId: 57,
        type: 'SELECT',
        order: 9,
        question: 'Define what a denial-of-service (DoS) attack is.',
      },
      {
        id: 570,
        lessonId: 57,
        type: 'SELECT',
        order: 10,
        question: 'What is the principle of least privilege?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 561 options

      {
        challengeId: 561,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 561,
        imageSrc: '',
        correct: true,
        text: 'A set of rules designed to protect network communications',
        audioSrc: '',
      },
      {
        challengeId: 561,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 562 options
      {
        challengeId: 562,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 562,
        imageSrc: '',
        correct: true,
        text: 'The practice of dividing a network into multiple segments to improve security and performance',
        audioSrc: '',
      },

      {
        challengeId: 562,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 563 options
      {
        challengeId: 563,
        imageSrc: '',
        correct: true,
        text: 'An attack that aims to overwhelm a system’s resources to make it unavailable',
        audioSrc: '',
      },
      {
        challengeId: 563,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 563,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 564 options
      {
        challengeId: 564,
        imageSrc: '',
        correct: true,
        text: 'The principle of giving users the minimum level of access necessary to perform their job functions',
        audioSrc: '',
      },
      {
        challengeId: 564,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 564,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 565 options
      {
        challengeId: 565,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 565,
        imageSrc: '',
        correct: true,
        text: 'A set of rules and procedures for ensuring the security of an organization’s assets',
        audioSrc: '',
      },

      {
        challengeId: 565,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 566 options
      {
        challengeId: 566,
        imageSrc: '',
        correct: true,
        text: 'A list that defines permissions for various system resources',
        audioSrc: '',
      },
      {
        challengeId: 566,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 566,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 567 options
      {
        challengeId: 567,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 567,
        imageSrc: '',
        correct: true,
        text: 'A set of rules designed to protect network communications',
        audioSrc: '',
      },

      {
        challengeId: 567,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 568 options
      {
        challengeId: 568,
        imageSrc: '',
        correct: true,
        text: 'The practice of dividing a network into multiple segments to improve security and performance',
        audioSrc: '',
      },
      {
        challengeId: 568,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 568,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 569 options
      {
        challengeId: 569,
        imageSrc: '',
        correct: true,
        text: 'An attack that aims to overwhelm a system’s resources to make it unavailable',
        audioSrc: '',
      },
      {
        challengeId: 569,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 569,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 570 options
      {
        challengeId: 570,
        imageSrc: '',
        correct: true,
        text: 'The principle of giving users the minimum level of access necessary to perform their job functions',
        audioSrc: '',
      },
      {
        challengeId: 570,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 570,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
    ]);

    // Lesson 58
    await db.insert(schema.challenges).values([
      {
        id: 571,
        lessonId: 58,
        type: 'ASSIST',
        order: 1,
        question: 'What is a digital signature?',
      },
      {
        id: 572,
        lessonId: 58,
        type: 'ASSIST',
        order: 2,
        question: 'Explain the concept of public key infrastructure (PKI).',
      },
      {
        id: 573,
        lessonId: 58,
        type: 'ASSIST',
        order: 3,
        question: 'What is a hash function?',
      },
      {
        id: 574,
        lessonId: 58,
        type: 'ASSIST',
        order: 4,
        question: 'Define what a security patch is.',
      },
      {
        id: 575,
        lessonId: 58,
        type: 'ASSIST',
        order: 5,
        question: 'Explain the purpose of an antivirus software.',
      },
      {
        id: 576,
        lessonId: 58,
        type: 'ASSIST',
        order: 6,
        question: 'What is multi-factor authentication?',
      },
      {
        id: 577,
        lessonId: 58,
        type: 'SELECT',
        order: 7,
        question: 'What is a digital signature?',
      },
      {
        id: 578,
        lessonId: 58,
        type: 'SELECT',
        order: 8,
        question: 'Explain the concept of public key infrastructure (PKI).',
      },
      {
        id: 579,
        lessonId: 58,
        type: 'SELECT',
        order: 9,
        question: 'What is a hash function?',
      },
      {
        id: 580,
        lessonId: 58,
        type: 'SELECT',
        order: 10,
        question: 'Define what a security patch is.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 571 options
      {
        challengeId: 571,
        imageSrc: '',
        correct: true,
        text: 'A cryptographic technique used to verify the authenticity and integrity of a digital message or document',
        audioSrc: '',
      },
      {
        challengeId: 571,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 571,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 572 options
      {
        challengeId: 572,
        imageSrc: '',
        correct: true,
        text: 'A framework that uses a combination of hardware and software to manage digital certificates and public-key encryption',
        audioSrc: '',
      },
      {
        challengeId: 572,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 572,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 573 options
      {
        challengeId: 573,
        imageSrc: '',
        correct: true,
        text: 'A function that converts data into a fixed-size hash value',
        audioSrc: '',
      },
      {
        challengeId: 573,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 573,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 574 options
      {
        challengeId: 574,
        imageSrc: '',
        correct: true,
        text: 'An update designed to fix security vulnerabilities or bugs in software',
        audioSrc: '',
      },
      {
        challengeId: 574,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 574,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 575 options
      {
        challengeId: 575,
        imageSrc: '',
        correct: true,
        text: 'Software designed to detect and remove viruses and other malicious software',
        audioSrc: '',
      },
      {
        challengeId: 575,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 575,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 576 options
      {
        challengeId: 576,
        imageSrc: '',
        correct: true,
        text: 'A security measure that requires users to provide two or more forms of authentication',
        audioSrc: '',
      },
      {
        challengeId: 576,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 576,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 577 options
      {
        challengeId: 577,
        imageSrc: '',
        correct: true,
        text: 'A cryptographic technique used to verify the authenticity and integrity of a digital message or document',
        audioSrc: '',
      },
      {
        challengeId: 577,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 577,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 578 options (continued)
      {
        challengeId: 578,
        imageSrc: '',
        correct: true,
        text: 'A framework that uses a combination of hardware and software to manage digital certificates and public-key encryption',
        audioSrc: '',
      },
      {
        challengeId: 578,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 578,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 579 options
      {
        challengeId: 579,
        imageSrc: '',
        correct: true,
        text: 'A function that converts data into a fixed-size hash value',
        audioSrc: '',
      },
      {
        challengeId: 579,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
      {
        challengeId: 579,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 580 options
      {
        challengeId: 580,
        imageSrc: '',
        correct: true,
        text: 'An update designed to fix security vulnerabilities or bugs in software',
        audioSrc: '',
      },
      {
        challengeId: 580,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 580,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
    ]);

    // Lesson 59
    await db.insert(schema.challenges).values([
      {
        id: 581,
        lessonId: 59,
        type: 'ASSIST',
        order: 1,
        question: 'What is a VPN?',
      },
      {
        id: 582,
        lessonId: 59,
        type: 'ASSIST',
        order: 2,
        question: 'Define a zero-day vulnerability.',
      },
      {
        id: 583,
        lessonId: 59,
        type: 'ASSIST',
        order: 3,
        question: 'Explain the concept of encryption.',
      },
      {
        id: 584,
        lessonId: 59,
        type: 'ASSIST',
        order: 4,
        question: 'What is a security breach?',
      },
      {
        id: 585,
        lessonId: 59,
        type: 'ASSIST',
        order: 5,
        question: 'What does a digital certificate do?',
      },
      {
        id: 586,
        lessonId: 59,
        type: 'ASSIST',
        order: 6,
        question: 'What is a brute force attack?',
      },
      {
        id: 587,
        lessonId: 59,
        type: 'SELECT',
        order: 7,
        question: 'What is a VPN?',
      },
      {
        id: 588,
        lessonId: 59,
        type: 'SELECT',
        order: 8,
        question: 'Define a zero-day vulnerability.',
      },
      {
        id: 589,
        lessonId: 59,
        type: 'SELECT',
        order: 9,
        question: 'Explain the concept of encryption.',
      },
      {
        id: 590,
        lessonId: 59,
        type: 'SELECT',
        order: 10,
        question: 'What is a security breach?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 581 options
      {
        challengeId: 581,
        imageSrc: '',
        correct: true,
        text: 'A service that creates a secure and encrypted connection over a less secure network',
        audioSrc: '',
      },
      {
        challengeId: 581,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 581,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 582 options
      {
        challengeId: 582,
        imageSrc: '',
        correct: true,
        text: 'A security flaw that is exploited before the developer has a chance to address it',
        audioSrc: '',
      },
      {
        challengeId: 582,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 582,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 583 options
      {
        challengeId: 583,
        imageSrc: '',
        correct: true,
        text: 'The process of encoding information to keep it secure from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 583,
        imageSrc: '',
        correct: false,
        text: 'A method for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 583,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 584 options
      {
        challengeId: 584,
        imageSrc: '',
        correct: true,
        text: 'An incident where unauthorized access is gained to data or systems',
        audioSrc: '',
      },
      {
        challengeId: 584,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 584,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 585 options
      {
        challengeId: 585,
        imageSrc: '',
        correct: true,
        text: 'A digital certificate verifies the identity of a user or device in a network',
        audioSrc: '',
      },
      {
        challengeId: 585,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 585,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 586 options
      {
        challengeId: 586,
        imageSrc: '',
        correct: true,
        text: 'An attack method that attempts all possible combinations of passwords until the correct one is found',
        audioSrc: '',
      },
      {
        challengeId: 586,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 586,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 587 options
      {
        challengeId: 587,
        imageSrc: '',
        correct: true,
        text: 'A service that creates a secure and encrypted connection over a less secure network',
        audioSrc: '',
      },
      {
        challengeId: 587,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 587,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 588 options
      {
        challengeId: 588,
        imageSrc: '',
        correct: true,
        text: 'A security flaw that is exploited before the developer has a chance to address it',
        audioSrc: '',
      },
      {
        challengeId: 588,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 588,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 589 options
      {
        challengeId: 589,
        imageSrc: '',
        correct: true,
        text: 'The process of encoding information to keep it secure from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 589,
        imageSrc: '',
        correct: false,
        text: 'A method for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 589,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 590 options
      {
        challengeId: 590,
        imageSrc: '',
        correct: true,
        text: 'An incident where unauthorized access is gained to data or systems',
        audioSrc: '',
      },
      {
        challengeId: 590,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 590,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
    ]);

    // Lesson 60
    await db.insert(schema.challenges).values([
      {
        id: 591,
        lessonId: 60,
        type: 'ASSIST',
        order: 1,
        question: 'What is threat modeling?',
      },
      {
        id: 592,
        lessonId: 60,
        type: 'ASSIST',
        order: 2,
        question: 'Explain what a security token is.',
      },
      {
        id: 593,
        lessonId: 60,
        type: 'ASSIST',
        order: 3,
        question: 'What is data masking?',
      },
      {
        id: 594,
        lessonId: 60,
        type: 'ASSIST',
        order: 4,
        question: 'Define what a security audit is.',
      },
      {
        id: 595,
        lessonId: 60,
        type: 'ASSIST',
        order: 5,
        question: 'What is network monitoring?',
      },
      {
        id: 596,
        lessonId: 60,
        type: 'ASSIST',
        order: 6,
        question: 'What is an endpoint protection solution?',
      },
      {
        id: 597,
        lessonId: 60,
        type: 'SELECT',
        order: 7,
        question: 'What is threat modeling?',
      },
      {
        id: 598,
        lessonId: 60,
        type: 'SELECT',
        order: 8,
        question: 'Explain what a security token is.',
      },
      {
        id: 599,
        lessonId: 60,
        type: 'SELECT',
        order: 9,
        question: 'What is data masking?',
      },
      {
        id: 600,
        lessonId: 60,
        type: 'SELECT',
        order: 10,
        question: 'Define what a security audit is.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 591 options
      {
        challengeId: 591,
        imageSrc: '',
        correct: true,
        text: 'A process for identifying and evaluating potential security threats to a system',
        audioSrc: '',
      },
      {
        challengeId: 591,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 591,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 592 options
      {
        challengeId: 592,
        imageSrc: '',
        correct: true,
        text: 'A device or software that provides a secure method for authentication and access control',
        audioSrc: '',
      },
      {
        challengeId: 592,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 592,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 593 options
      {
        challengeId: 593,
        imageSrc: '',
        correct: true,
        text: 'The process of obfuscating data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 593,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 593,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 594 options
      {
        challengeId: 594,
        imageSrc: '',
        correct: true,
        text: 'A review of security controls and practices to ensure they are effective and up-to-date',
        audioSrc: '',
      },
      {
        challengeId: 594,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 594,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },

      // Challenge 595 options

      {
        challengeId: 595,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 595,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
      {
        challengeId: 595,
        imageSrc: '',
        correct: true,
        text: 'The process of continuously analyzing network traffic to detect and respond to threats',
        audioSrc: '',
      },

      // Challenge 596 options
      {
        challengeId: 596,
        imageSrc: '',
        correct: true,
        text: 'A solution designed to protect the security of endpoints such as computers and mobile devices',
        audioSrc: '',
      },
      {
        challengeId: 596,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 596,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 597 options
      {
        challengeId: 597,
        imageSrc: '',
        correct: true,
        text: 'A process for identifying and evaluating potential security threats to a system',
        audioSrc: '',
      },
      {
        challengeId: 597,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 597,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 598 options
      {
        challengeId: 598,
        imageSrc: '',
        correct: true,
        text: 'A device or software that provides a secure method for authentication and access control',
        audioSrc: '',
      },
      {
        challengeId: 598,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 598,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 599 options
      {
        challengeId: 599,
        imageSrc: '',
        correct: true,
        text: 'The process of obfuscating data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 599,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 599,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 600 options
      {
        challengeId: 600,
        imageSrc: '',
        correct: true,
        text: 'A review of security controls and practices to ensure they are effective and up-to-date',
        audioSrc: '',
      },
      {
        challengeId: 600,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 600,
        imageSrc: '',
        correct: false,
        text: 'A tool for monitoring network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 61
    await db.insert(schema.challenges).values([
      {
        id: 601,
        lessonId: 61,
        type: 'ASSIST',
        order: 1,
        question: 'What is a security policy?',
      },
      {
        id: 602,
        lessonId: 61,
        type: 'ASSIST',
        order: 2,
        question: 'Define a man-in-the-middle attack.',
      },
      {
        id: 603,
        lessonId: 61,
        type: 'ASSIST',
        order: 3,
        question: 'Explain what is a firewall.',
      },
      {
        id: 604,
        lessonId: 61,
        type: 'ASSIST',
        order: 4,
        question: 'What is the purpose of intrusion detection systems?',
      },
      {
        id: 605,
        lessonId: 61,
        type: 'ASSIST',
        order: 5,
        question: 'What is the principle of least privilege?',
      },
      {
        id: 606,
        lessonId: 61,
        type: 'ASSIST',
        order: 6,
        question: 'What does a public key infrastructure (PKI) do?',
      },
      {
        id: 607,
        lessonId: 61,
        type: 'SELECT',
        order: 7,
        question: 'What is a security policy?',
      },
      {
        id: 608,
        lessonId: 61,
        type: 'SELECT',
        order: 8,
        question: 'Define a man-in-the-middle attack.',
      },
      {
        id: 609,
        lessonId: 61,
        type: 'SELECT',
        order: 9,
        question: 'Explain what is a firewall.',
      },
      {
        id: 610,
        lessonId: 61,
        type: 'SELECT',
        order: 10,
        question: 'What is the purpose of intrusion detection systems?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 601 options
      {
        challengeId: 601,
        imageSrc: '',
        correct: true,
        text: 'A set of guidelines and rules for managing and protecting an organization’s information assets',
        audioSrc: '',
      },
      {
        challengeId: 601,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 601,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 602 options
      {
        challengeId: 602,
        imageSrc: '',
        correct: true,
        text: 'An attack where the attacker intercepts and potentially alters communications between two parties',
        audioSrc: '',
      },
      {
        challengeId: 602,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 602,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 603 options
      {
        challengeId: 603,
        imageSrc: '',
        correct: true,
        text: 'A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules',
        audioSrc: '',
      },
      {
        challengeId: 603,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 603,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 604 options
      {
        challengeId: 604,
        imageSrc: '',
        correct: true,
        text: 'A system designed to detect and respond to potential security threats or attacks',
        audioSrc: '',
      },
      {
        challengeId: 604,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 604,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 605 options
      {
        challengeId: 605,
        imageSrc: '',
        correct: true,
        text: 'A principle that limits access rights for users to the bare minimum necessary to perform their job functions',
        audioSrc: '',
      },
      {
        challengeId: 605,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 605,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 606 options
      {
        challengeId: 606,
        imageSrc: '',
        correct: true,
        text: 'A framework that manages digital certificates and public-key encryption to ensure secure communications',
        audioSrc: '',
      },
      {
        challengeId: 606,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 606,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 607 options
      {
        challengeId: 607,
        imageSrc: '',
        correct: true,
        text: 'A set of guidelines and rules for managing and protecting an organization’s information assets',
        audioSrc: '',
      },
      {
        challengeId: 607,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 607,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 608 options
      {
        challengeId: 608,
        imageSrc: '',
        correct: true,
        text: 'An attack where the attacker intercepts and potentially alters communications between two parties',
        audioSrc: '',
      },
      {
        challengeId: 608,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 608,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 609 options
      {
        challengeId: 609,
        imageSrc: '',
        correct: true,
        text: 'A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules',
        audioSrc: '',
      },
      {
        challengeId: 609,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 609,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 610 options
      {
        challengeId: 610,
        imageSrc: '',
        correct: true,
        text: 'A system designed to detect and respond to potential security threats or attacks',
        audioSrc: '',
      },
      {
        challengeId: 610,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 610,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 62
    await db.insert(schema.challenges).values([
      {
        id: 611,
        lessonId: 62,
        type: 'ASSIST',
        order: 1,
        question: 'What is a security breach?',
      },
      {
        id: 612,
        lessonId: 62,
        type: 'ASSIST',
        order: 2,
        question: 'Define access control list (ACL).',
      },
      {
        id: 613,
        lessonId: 62,
        type: 'ASSIST',
        order: 3,
        question: 'What is social engineering?',
      },
      {
        id: 614,
        lessonId: 62,
        type: 'ASSIST',
        order: 4,
        question: 'Explain what a DDoS attack is.',
      },
      {
        id: 615,
        lessonId: 62,
        type: 'ASSIST',
        order: 5,
        question: 'What is a honeypot?',
      },
      {
        id: 616,
        lessonId: 62,
        type: 'ASSIST',
        order: 6,
        question: 'What is multi-factor authentication?',
      },
      {
        id: 617,
        lessonId: 62,
        type: 'SELECT',
        order: 7,
        question: 'What is a security breach?',
      },
      {
        id: 618,
        lessonId: 62,
        type: 'SELECT',
        order: 8,
        question: 'Define access control list (ACL).',
      },
      {
        id: 619,
        lessonId: 62,
        type: 'SELECT',
        order: 9,
        question: 'What is social engineering?',
      },
      {
        id: 620,
        lessonId: 62,
        type: 'SELECT',
        order: 10,
        question: 'Explain what a DDoS attack is.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 611 options
      {
        challengeId: 611,
        imageSrc: '',
        correct: true,
        text: 'An incident where unauthorized access is gained to data or systems',
        audioSrc: '',
      },
      {
        challengeId: 611,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 611,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 612 options
      {
        challengeId: 612,
        imageSrc: '',
        correct: true,
        text: 'A list of permissions attached to an object that specifies which users or system processes can access the object',
        audioSrc: '',
      },
      {
        challengeId: 612,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 612,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 613 options
      {
        challengeId: 613,
        imageSrc: '',
        correct: true,
        text: 'Manipulating individuals into divulging confidential or personal information by impersonating a trustworthy entity',
        audioSrc: '',
      },
      {
        challengeId: 613,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 613,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 614 options
      {
        challengeId: 614,
        imageSrc: '',
        correct: true,
        text: 'An attack where multiple systems overwhelm a target with excessive traffic, causing service disruption',
        audioSrc: '',
      },
      {
        challengeId: 614,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 614,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 615 options
      {
        challengeId: 615,
        imageSrc: '',
        correct: true,
        text: 'A security resource designed to attract and analyze potential attacks or intrusions',
        audioSrc: '',
      },
      {
        challengeId: 615,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 615,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 616 options
      {
        challengeId: 616,
        imageSrc: '',
        correct: true,
        text: 'A security mechanism that requires multiple forms of verification to access resources',
        audioSrc: '',
      },
      {
        challengeId: 616,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 616,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 617 options
      {
        challengeId: 617,
        imageSrc: '',
        correct: true,
        text: 'An incident where unauthorized access is gained to data or systems',
        audioSrc: '',
      },
      {
        challengeId: 617,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 617,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 618 options
      {
        challengeId: 618,
        imageSrc: '',
        correct: true,
        text: 'A list of permissions attached to an object that specifies which users or system processes can access the object',
        audioSrc: '',
      },
      {
        challengeId: 618,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 618,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 619 options
      {
        challengeId: 619,
        imageSrc: '',
        correct: true,
        text: 'Manipulating individuals into divulging confidential or personal information by impersonating a trustworthy entity',
        audioSrc: '',
      },
      {
        challengeId: 619,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 619,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 620 options
      {
        challengeId: 620,
        imageSrc: '',
        correct: true,
        text: 'An attack where multiple systems overwhelm a target with excessive traffic, causing service disruption',
        audioSrc: '',
      },
      {
        challengeId: 620,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 620,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
    ]);

    // Lesson 63
    await db.insert(schema.challenges).values([
      {
        id: 621,
        lessonId: 63,
        type: 'ASSIST',
        order: 1,
        question: 'What is a VPN?',
      },
      {
        id: 622,
        lessonId: 63,
        type: 'ASSIST',
        order: 2,
        question: 'Explain what a man-in-the-browser attack is.',
      },
      {
        id: 623,
        lessonId: 63,
        type: 'ASSIST',
        order: 3,
        question: 'What is an SQL injection?',
      },
      {
        id: 624,
        lessonId: 63,
        type: 'ASSIST',
        order: 4,
        question: 'Define a zero-day vulnerability.',
      },
      {
        id: 625,
        lessonId: 63,
        type: 'ASSIST',
        order: 5,
        question: 'What is a digital certificate?',
      },
      {
        id: 626,
        lessonId: 63,
        type: 'ASSIST',
        order: 6,
        question: 'What does a security audit involve?',
      },
      {
        id: 627,
        lessonId: 63,
        type: 'SELECT',
        order: 7,
        question: 'What is a VPN?',
      },
      {
        id: 628,
        lessonId: 63,
        type: 'SELECT',
        order: 8,
        question: 'Explain what a man-in-the-browser attack is.',
      },
      {
        id: 629,
        lessonId: 63,
        type: 'SELECT',
        order: 9,
        question: 'What is an SQL injection?',
      },
      {
        id: 630,
        lessonId: 63,
        type: 'SELECT',
        order: 10,
        question: 'Define a zero-day vulnerability.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 621 options
      {
        challengeId: 621,
        imageSrc: '',
        correct: true,
        text: 'A private network that extends across a public network to enable secure communication',
        audioSrc: '',
      },
      {
        challengeId: 621,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
      {
        challengeId: 621,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 622 options
      {
        challengeId: 622,
        imageSrc: '',
        correct: true,
        text: 'An attack where malware is injected into a browser to intercept or manipulate data',
        audioSrc: '',
      },
      {
        challengeId: 622,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 622,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 623 options
      {
        challengeId: 623,
        imageSrc: '',
        correct: true,
        text: 'A code injection technique where an attacker inserts malicious SQL queries into a web application',
        audioSrc: '',
      },
      {
        challengeId: 623,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 623,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 624 options
      {
        challengeId: 624,
        imageSrc: '',
        correct: true,
        text: 'A security vulnerability that is unknown to the software vendor or to the public',
        audioSrc: '',
      },
      {
        challengeId: 624,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 624,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 625 options
      {
        challengeId: 625,
        imageSrc: '',
        correct: true,
        text: 'An electronic document used to verify the identity of the certificate holder',
        audioSrc: '',
      },
      {
        challengeId: 625,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 625,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 626 options
      {
        challengeId: 626,
        imageSrc: '',
        correct: true,
        text: 'A comprehensive review of an organization’s security policies, procedures, and controls',
        audioSrc: '',
      },
      {
        challengeId: 626,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 626,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 627 options
      {
        challengeId: 627,
        imageSrc: '',
        correct: true,
        text: 'A private network that extends across a public network to enable secure communication',
        audioSrc: '',
      },
      {
        challengeId: 627,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
      {
        challengeId: 627,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 628 options
      {
        challengeId: 628,
        imageSrc: '',
        correct: true,
        text: 'An attack where malware is injected into a browser to intercept or manipulate data',
        audioSrc: '',
      },
      {
        challengeId: 628,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 628,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 629 options
      {
        challengeId: 629,
        imageSrc: '',
        correct: true,
        text: 'A code injection technique where an attacker inserts malicious SQL queries into a web application',
        audioSrc: '',
      },
      {
        challengeId: 629,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 629,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 630 options
      {
        challengeId: 630,
        imageSrc: '',
        correct: true,
        text: 'A security vulnerability that is unknown to the software vendor or to the public',
        audioSrc: '',
      },
      {
        challengeId: 630,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 630,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 64
    await db.insert(schema.challenges).values([
      {
        id: 631,
        lessonId: 64,
        type: 'ASSIST',
        order: 1,
        question: 'What is an encryption algorithm?',
      },
      {
        id: 632,
        lessonId: 64,
        type: 'ASSIST',
        order: 2,
        question: 'Explain what a keylogger does.',
      },
      {
        id: 633,
        lessonId: 64,
        type: 'ASSIST',
        order: 3,
        question: 'What is a botnet?',
      },
      {
        id: 634,
        lessonId: 64,
        type: 'ASSIST',
        order: 4,
        question: 'Define network segmentation.',
      },
      {
        id: 635,
        lessonId: 64,
        type: 'ASSIST',
        order: 5,
        question: 'What is data loss prevention (DLP)?',
      },
      {
        id: 636,
        lessonId: 64,
        type: 'ASSIST',
        order: 6,
        question: 'What is the purpose of endpoint security?',
      },
      {
        id: 637,
        lessonId: 64,
        type: 'SELECT',
        order: 7,
        question: 'What is an encryption algorithm?',
      },
      {
        id: 638,
        lessonId: 64,
        type: 'SELECT',
        order: 8,
        question: 'Explain what a keylogger does.',
      },
      {
        id: 639,
        lessonId: 64,
        type: 'SELECT',
        order: 9,
        question: 'What is a botnet?',
      },
      {
        id: 640,
        lessonId: 64,
        type: 'SELECT',
        order: 10,
        question: 'Define network segmentation.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 631 options
      {
        challengeId: 631,
        imageSrc: '',
        correct: true,
        text: 'A method for encoding data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 631,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 631,
        imageSrc: '',
        correct: false,
        text: 'A technique for managing access permissions',
        audioSrc: '',
      },

      // Challenge 632 options
      {
        challengeId: 632,
        imageSrc: '',
        correct: true,
        text: 'A program that records keystrokes to capture sensitive information',
        audioSrc: '',
      },
      {
        challengeId: 632,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 632,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 633 options
      {
        challengeId: 633,
        imageSrc: '',
        correct: true,
        text: 'A network of compromised systems controlled by a single entity to perform malicious activities',
        audioSrc: '',
      },
      {
        challengeId: 633,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 633,
        imageSrc: '',
        correct: false,
        text: 'A technique for managing access permissions',
        audioSrc: '',
      },

      // Challenge 634 options
      {
        challengeId: 634,
        imageSrc: '',
        correct: true,
        text: 'The practice of dividing a network into multiple segments to improve security and performance',
        audioSrc: '',
      },
      {
        challengeId: 634,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 634,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 635 options
      {
        challengeId: 635,
        imageSrc: '',
        correct: true,
        text: 'A set of technologies and policies to protect data from loss or unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 635,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 635,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 636 options
      {
        challengeId: 636,
        imageSrc: '',
        correct: true,
        text: 'Security measures designed to protect endpoints such as workstations and mobile devices from threats',
        audioSrc: '',
      },
      {
        challengeId: 636,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 636,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 637 options
      {
        challengeId: 637,
        imageSrc: '',
        correct: true,
        text: 'A method for encoding data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 637,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 637,
        imageSrc: '',
        correct: false,
        text: 'A technique for managing access permissions',
        audioSrc: '',
      },

      // Challenge 638 options
      {
        challengeId: 638,
        imageSrc: '',
        correct: true,
        text: 'A program that records keystrokes to capture sensitive information',
        audioSrc: '',
      },
      {
        challengeId: 638,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 638,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 639 options
      {
        challengeId: 639,
        imageSrc: '',
        correct: true,
        text: 'A network of compromised systems controlled by a single entity to perform malicious activities',
        audioSrc: '',
      },
      {
        challengeId: 639,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 639,
        imageSrc: '',
        correct: false,
        text: 'A technique for managing access permissions',
        audioSrc: '',
      },

      // Challenge 640 options
      {
        challengeId: 640,
        imageSrc: '',
        correct: true,
        text: 'The practice of dividing a network into multiple segments to improve security and performance',
        audioSrc: '',
      },
      {
        challengeId: 640,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 640,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 65
    await db.insert(schema.challenges).values([
      {
        id: 641,
        lessonId: 65,
        type: 'ASSIST',
        order: 1,
        question: 'What is a security patch?',
      },
      {
        id: 642,
        lessonId: 65,
        type: 'ASSIST',
        order: 2,
        question: 'Explain what a vulnerability scanner does.',
      },
      {
        id: 643,
        lessonId: 65,
        type: 'ASSIST',
        order: 3,
        question: 'What is the role of an intrusion detection system (IDS)?',
      },
      {
        id: 644,
        lessonId: 65,
        type: 'ASSIST',
        order: 4,
        question: 'Define a honeypot in cybersecurity.',
      },
      {
        id: 645,
        lessonId: 65,
        type: 'ASSIST',
        order: 5,
        question: 'What is social engineering?',
      },
      {
        id: 646,
        lessonId: 65,
        type: 'ASSIST',
        order: 6,
        question: 'What is multifactor authentication (MFA)?',
      },
      {
        id: 647,
        lessonId: 65,
        type: 'SELECT',
        order: 7,
        question: 'What is a security patch?',
      },
      {
        id: 648,
        lessonId: 65,
        type: 'SELECT',
        order: 8,
        question: 'Explain what a vulnerability scanner does.',
      },
      {
        id: 649,
        lessonId: 65,
        type: 'SELECT',
        order: 9,
        question: 'What is the role of an intrusion detection system (IDS)?',
      },
      {
        id: 650,
        lessonId: 65,
        type: 'SELECT',
        order: 10,
        question: 'Define a honeypot in cybersecurity.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 641 options
      {
        challengeId: 641,
        imageSrc: '',
        correct: true,
        text: 'A software update designed to fix known vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 641,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 641,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 642 options
      {
        challengeId: 642,
        imageSrc: '',
        correct: true,
        text: 'A tool that scans systems for vulnerabilities and weaknesses',
        audioSrc: '',
      },
      {
        challengeId: 642,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 642,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 643 options
      {
        challengeId: 643,
        imageSrc: '',
        correct: true,
        text: 'A system designed to monitor network traffic for suspicious activities',
        audioSrc: '',
      },
      {
        challengeId: 643,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 643,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 644 options
      {
        challengeId: 644,
        imageSrc: '',
        correct: true,
        text: 'A security resource designed to attract and analyze potential attacks or intrusions',
        audioSrc: '',
      },
      {
        challengeId: 644,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 644,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 645 options
      {
        challengeId: 645,
        imageSrc: '',
        correct: true,
        text: 'Manipulating individuals into divulging confidential or personal information by impersonating a trustworthy entity',
        audioSrc: '',
      },
      {
        challengeId: 645,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 645,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 646 options
      {
        challengeId: 646,
        imageSrc: '',
        correct: true,
        text: 'A security mechanism that requires multiple forms of verification to access resources',
        audioSrc: '',
      },
      {
        challengeId: 646,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 646,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 647 options
      {
        challengeId: 647,
        imageSrc: '',
        correct: true,
        text: 'A software update designed to fix known vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 647,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 647,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 648 options
      {
        challengeId: 648,
        imageSrc: '',
        correct: true,
        text: 'A tool that scans systems for vulnerabilities and weaknesses',
        audioSrc: '',
      },
      {
        challengeId: 648,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 648,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 649 options
      {
        challengeId: 649,
        imageSrc: '',
        correct: true,
        text: 'A system designed to monitor network traffic for suspicious activities',
        audioSrc: '',
      },
      {
        challengeId: 649,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 649,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 650 options
      {
        challengeId: 650,
        imageSrc: '',
        correct: true,
        text: 'A security resource designed to attract and analyze potential attacks or intrusions',
        audioSrc: '',
      },
      {
        challengeId: 650,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 650,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 66
    await db.insert(schema.challenges).values([
      {
        id: 651,
        lessonId: 66,
        type: 'ASSIST',
        order: 1,
        question: 'What is a firewall?',
      },
      {
        id: 652,
        lessonId: 66,
        type: 'ASSIST',
        order: 2,
        question: 'Define what a threat intelligence platform is.',
      },
      {
        id: 653,
        lessonId: 66,
        type: 'ASSIST',
        order: 3,
        question: 'What does VPN stand for and what is its purpose?',
      },
      {
        id: 654,
        lessonId: 66,
        type: 'ASSIST',
        order: 4,
        question: 'What is the difference between IDS and IPS?',
      },
      {
        id: 655,
        lessonId: 66,
        type: 'ASSIST',
        order: 5,
        question: 'Explain the concept of zero trust security.',
      },
      {
        id: 656,
        lessonId: 66,
        type: 'ASSIST',
        order: 6,
        question: 'What is the role of an SIEM system?',
      },
      {
        id: 657,
        lessonId: 66,
        type: 'SELECT',
        order: 7,
        question: 'What is a firewall?',
      },
      {
        id: 658,
        lessonId: 66,
        type: 'SELECT',
        order: 8,
        question: 'Define what a threat intelligence platform is.',
      },
      {
        id: 659,
        lessonId: 66,
        type: 'SELECT',
        order: 9,
        question: 'What does VPN stand for and what is its purpose?',
      },
      {
        id: 660,
        lessonId: 66,
        type: 'SELECT',
        order: 10,
        question: 'What is the difference between IDS and IPS?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 651 options
      {
        challengeId: 651,
        imageSrc: '',
        correct: true,
        text: 'A network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules',
        audioSrc: '',
      },
      {
        challengeId: 651,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
      {
        challengeId: 651,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 652 options
      {
        challengeId: 652,
        imageSrc: '',
        correct: true,
        text: 'A platform that provides actionable intelligence about current and emerging threats to help organizations protect their assets',
        audioSrc: '',
      },
      {
        challengeId: 652,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 652,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 653 options
      {
        challengeId: 653,
        imageSrc: '',
        correct: true,
        text: 'Virtual Private Network, a technology that creates a secure network connection over a public network',
        audioSrc: '',
      },
      {
        challengeId: 653,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 653,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 654 options
      {
        challengeId: 654,
        imageSrc: '',
        correct: true,
        text: 'IDS (Intrusion Detection System) monitors and alerts on potential threats, while IPS (Intrusion Prevention System) actively prevents them',
        audioSrc: '',
      },
      {
        challengeId: 654,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 654,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 655 options
      {
        challengeId: 655,
        imageSrc: '',
        correct: true,
        text: 'A security model that assumes no implicit trust and requires verification for every request regardless of its origin',
        audioSrc: '',
      },
      {
        challengeId: 655,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 655,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 656 options
      {
        challengeId: 656,
        imageSrc: '',
        correct: true,
        text: 'A system that aggregates, analyzes, and responds to security data from across an organization’s IT infrastructure',
        audioSrc: '',
      },
      {
        challengeId: 656,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 656,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 657 options
      {
        challengeId: 657,
        imageSrc: '',
        correct: true,
        text: 'A network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules',
        audioSrc: '',
      },
      {
        challengeId: 657,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
      {
        challengeId: 657,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 658 options
      {
        challengeId: 658,
        imageSrc: '',
        correct: true,
        text: 'A platform that provides actionable intelligence about current and emerging threats to help organizations protect their assets',
        audioSrc: '',
      },
      {
        challengeId: 658,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 658,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 659 options
      {
        challengeId: 659,
        imageSrc: '',
        correct: true,
        text: 'Virtual Private Network, a technology that creates a secure network connection over a public network',
        audioSrc: '',
      },
      {
        challengeId: 659,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 659,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 660 options
      {
        challengeId: 660,
        imageSrc: '',
        correct: true,
        text: 'IDS (Intrusion Detection System) monitors and alerts on potential threats, while IPS (Intrusion Prevention System) actively prevents them',
        audioSrc: '',
      },
      {
        challengeId: 660,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 660,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 67
    await db.insert(schema.challenges).values([
      {
        id: 661,
        lessonId: 67,
        type: 'ASSIST',
        order: 1,
        question: 'What is data encryption and why is it important?',
      },
      {
        id: 662,
        lessonId: 67,
        type: 'ASSIST',
        order: 2,
        question: 'Define what a DDoS attack is.',
      },
      {
        id: 663,
        lessonId: 67,
        type: 'ASSIST',
        order: 3,
        question:
          'Explain the difference between public key and private key encryption.',
      },
      {
        id: 664,
        lessonId: 67,
        type: 'ASSIST',
        order: 4,
        question: 'What is a botnet and how does it work?',
      },
      {
        id: 665,
        lessonId: 67,
        type: 'ASSIST',
        order: 5,
        question:
          'What are the key components of a secure network architecture?',
      },
      {
        id: 666,
        lessonId: 67,
        type: 'ASSIST',
        order: 6,
        question: 'What is two-factor authentication (2FA)?',
      },
      {
        id: 667,
        lessonId: 67,
        type: 'SELECT',
        order: 7,
        question: 'What is data encryption and why is it important?',
      },
      {
        id: 668,
        lessonId: 67,
        type: 'SELECT',
        order: 8,
        question: 'Define what a DDoS attack is.',
      },
      {
        id: 669,
        lessonId: 67,
        type: 'SELECT',
        order: 9,
        question:
          'Explain the difference between public key and private key encryption.',
      },
      {
        id: 670,
        lessonId: 67,
        type: 'SELECT',
        order: 10,
        question: 'What is a botnet and how does it work?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 661 options
      {
        challengeId: 661,
        imageSrc: '',
        correct: true,
        text: 'The process of converting data into a code to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 661,
        imageSrc: '',
        correct: false,
        text: 'A method for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 661,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 662 options
      {
        challengeId: 662,
        imageSrc: '',
        correct: true,
        text: 'A Distributed Denial of Service attack that overwhelms a network or service with traffic',
        audioSrc: '',
      },
      {
        challengeId: 662,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 662,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 663 options
      {
        challengeId: 663,
        imageSrc: '',
        correct: true,
        text: 'Public key encryption uses a pair of keys for encryption and decryption, while private key encryption uses a single key',
        audioSrc: '',
      },
      {
        challengeId: 663,
        imageSrc: '',
        correct: false,
        text: 'A method for managing access permissions',
        audioSrc: '',
      },
      {
        challengeId: 663,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 664 options
      {
        challengeId: 664,
        imageSrc: '',
        correct: true,
        text: 'A botnet is a network of compromised computers controlled by an attacker to perform tasks like launching attacks',
        audioSrc: '',
      },
      {
        challengeId: 664,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 664,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 665 options
      {
        challengeId: 665,
        imageSrc: '',
        correct: true,
        text: 'Components include firewalls, intrusion detection systems, and secure communication channels',
        audioSrc: '',
      },
      {
        challengeId: 665,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 665,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 666 options
      {
        challengeId: 666,
        imageSrc: '',
        correct: true,
        text: 'A security process that requires two forms of verification before granting access',
        audioSrc: '',
      },
      {
        challengeId: 666,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 666,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 667 options
      {
        challengeId: 667,
        imageSrc: '',
        correct: true,
        text: 'The process of converting data into a code to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 667,
        imageSrc: '',
        correct: false,
        text: 'A method for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 667,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 668 options
      {
        challengeId: 668,
        imageSrc: '',
        correct: true,
        text: 'A Distributed Denial of Service attack that overwhelms a network or service with traffic',
        audioSrc: '',
      },
      {
        challengeId: 668,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 668,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 669 options
      {
        challengeId: 669,
        imageSrc: '',
        correct: true,
        text: 'Public key encryption uses a pair of keys for encryption and decryption, while private key encryption uses a single key',
        audioSrc: '',
      },
      {
        challengeId: 669,
        imageSrc: '',
        correct: false,
        text: 'A method for managing access permissions',
        audioSrc: '',
      },
      {
        challengeId: 669,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 670 options
      {
        challengeId: 670,
        imageSrc: '',
        correct: true,
        text: 'A botnet is a network of compromised computers controlled by an attacker to perform tasks like launching attacks',
        audioSrc: '',
      },
      {
        challengeId: 670,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 670,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 68
    await db.insert(schema.challenges).values([
      {
        id: 671,
        lessonId: 68,
        type: 'ASSIST',
        order: 1,
        question: 'What is a security incident response plan?',
      },
      {
        id: 672,
        lessonId: 68,
        type: 'ASSIST',
        order: 2,
        question: 'Define what social engineering is.',
      },
      {
        id: 673,
        lessonId: 68,
        type: 'ASSIST',
        order: 3,
        question: 'What is an intrusion detection system (IDS)?',
      },
      {
        id: 674,
        lessonId: 68,
        type: 'ASSIST',
        order: 4,
        question: 'Explain the concept of network segmentation.',
      },
      {
        id: 675,
        lessonId: 68,
        type: 'ASSIST',
        order: 5,
        question: 'What is the role of a penetration tester?',
      },
      {
        id: 676,
        lessonId: 68,
        type: 'ASSIST',
        order: 6,
        question:
          'What is a security information and event management (SIEM) system?',
      },
      {
        id: 677,
        lessonId: 68,
        type: 'SELECT',
        order: 7,
        question: 'What is a security incident response plan?',
      },
      {
        id: 678,
        lessonId: 68,
        type: 'SELECT',
        order: 8,
        question: 'Define what social engineering is.',
      },
      {
        id: 679,
        lessonId: 68,
        type: 'SELECT',
        order: 9,
        question: 'What is an intrusion detection system (IDS)?',
      },
      {
        id: 680,
        lessonId: 68,
        type: 'SELECT',
        order: 10,
        question: 'Explain the concept of network segmentation.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 671 options
      {
        challengeId: 671,
        imageSrc: '',
        correct: true,
        text: 'A set of procedures to detect, respond to, and recover from security incidents',
        audioSrc: '',
      },
      {
        challengeId: 671,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 671,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 672 options
      {
        challengeId: 672,
        imageSrc: '',
        correct: true,
        text: 'A technique used to manipulate people into divulging confidential information or performing actions',
        audioSrc: '',
      },
      {
        challengeId: 672,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 672,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 673 options
      {
        challengeId: 673,
        imageSrc: '',
        correct: true,
        text: 'A system designed to detect and alert on potential security threats within a network',
        audioSrc: '',
      },
      {
        challengeId: 673,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 673,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 674 options
      {
        challengeId: 674,
        imageSrc: '',
        correct: true,
        text: 'The practice of dividing a network into segments to improve security and performance',
        audioSrc: '',
      },
      {
        challengeId: 674,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
      {
        challengeId: 674,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 675 options
      {
        challengeId: 675,
        imageSrc: '',
        correct: true,
        text: 'A professional who tests the security of systems by simulating attacks to identify vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 675,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 675,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 676 options
      {
        challengeId: 676,
        imageSrc: '',
        correct: true,
        text: 'A system that collects and analyzes security events from various sources to provide a comprehensive view of security status',
        audioSrc: '',
      },
      {
        challengeId: 676,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 676,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 677 options
      {
        challengeId: 677,
        imageSrc: '',
        correct: true,
        text: 'A set of procedures to detect, respond to, and recover from security incidents',
        audioSrc: '',
      },
      {
        challengeId: 677,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 677,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 678 options
      {
        challengeId: 678,
        imageSrc: '',
        correct: true,
        text: 'A technique used to manipulate people into divulging confidential information or performing actions',
        audioSrc: '',
      },
      {
        challengeId: 678,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 678,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 679 options
      {
        challengeId: 679,
        imageSrc: '',
        correct: true,
        text: 'A system designed to detect and alert on potential security threats within a network',
        audioSrc: '',
      },
      {
        challengeId: 679,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 679,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 680 options
      {
        challengeId: 680,
        imageSrc: '',
        correct: true,
        text: 'The practice of dividing a network into segments to improve security and performance',
        audioSrc: '',
      },
      {
        challengeId: 680,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
      {
        challengeId: 680,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
    ]);

    // Lesson 69
    await db.insert(schema.challenges).values([
      {
        id: 681,
        lessonId: 69,
        type: 'ASSIST',
        order: 1,
        question: 'What is a vulnerability assessment?',
      },
      {
        id: 682,
        lessonId: 69,
        type: 'ASSIST',
        order: 2,
        question: 'Define what a security policy is.',
      },
      {
        id: 683,
        lessonId: 69,
        type: 'ASSIST',
        order: 3,
        question: 'What is a digital certificate?',
      },
      {
        id: 684,
        lessonId: 69,
        type: 'ASSIST',
        order: 4,
        question: 'Explain the concept of encryption at rest.',
      },
      {
        id: 685,
        lessonId: 69,
        type: 'ASSIST',
        order: 5,
        question: 'What is the purpose of a security audit?',
      },
      {
        id: 686,
        lessonId: 69,
        type: 'ASSIST',
        order: 6,
        question: 'What is a honeypot?',
      },
      {
        id: 687,
        lessonId: 69,
        type: 'SELECT',
        order: 7,
        question: 'What is a vulnerability assessment?',
      },
      {
        id: 688,
        lessonId: 69,
        type: 'SELECT',
        order: 8,
        question: 'Define what a security policy is.',
      },
      {
        id: 689,
        lessonId: 69,
        type: 'SELECT',
        order: 9,
        question: 'What is a digital certificate?',
      },
      {
        id: 690,
        lessonId: 69,
        type: 'SELECT',
        order: 10,
        question: 'Explain the concept of encryption at rest.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 681 options
      {
        challengeId: 681,
        imageSrc: '',
        correct: true,
        text: 'A process to identify, quantify, and prioritize vulnerabilities in a system',
        audioSrc: '',
      },
      {
        challengeId: 681,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
      {
        challengeId: 681,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 682 options
      {
        challengeId: 682,
        imageSrc: '',
        correct: true,
        text: 'A formal document that outlines security practices and guidelines for an organization',
        audioSrc: '',
      },
      {
        challengeId: 682,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 682,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 683 options
      {
        challengeId: 683,
        imageSrc: '',
        correct: true,
        text: 'A digital file that uses encryption to prove the identity of the certificate owner',
        audioSrc: '',
      },
      {
        challengeId: 683,
        imageSrc: '',
        correct: false,
        text: 'A method for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 683,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 684 options
      {
        challengeId: 684,
        imageSrc: '',
        correct: true,
        text: 'The practice of encrypting data stored on a device or in a database',
        audioSrc: '',
      },
      {
        challengeId: 684,
        imageSrc: '',
        correct: false,
        text: 'A method for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 684,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 685 options
      {
        challengeId: 685,
        imageSrc: '',
        correct: true,
        text: 'An examination of an organization’s security measures to ensure they are adequate and effective',
        audioSrc: '',
      },
      {
        challengeId: 685,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 685,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 686 options
      {
        challengeId: 686,
        imageSrc: '',
        correct: true,
        text: 'A security resource designed to detect and interact with attackers',
        audioSrc: '',
      },
      {
        challengeId: 686,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 686,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 687 options
      {
        challengeId: 687,
        imageSrc: '',
        correct: true,
        text: 'A process to identify, quantify, and prioritize vulnerabilities in a system',
        audioSrc: '',
      },
      {
        challengeId: 687,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
      {
        challengeId: 687,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 688 options
      {
        challengeId: 688,
        imageSrc: '',
        correct: true,
        text: 'A formal document that outlines security practices and guidelines for an organization',
        audioSrc: '',
      },
      {
        challengeId: 688,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 688,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 689 options
      {
        challengeId: 689,
        imageSrc: '',
        correct: true,
        text: 'A digital file that uses encryption to prove the identity of the certificate owner',
        audioSrc: '',
      },
      {
        challengeId: 689,
        imageSrc: '',
        correct: false,
        text: 'A method for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 689,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 690 options
      {
        challengeId: 690,
        imageSrc: '',
        correct: true,
        text: 'The practice of encrypting data stored on a device or in a database',
        audioSrc: '',
      },
      {
        challengeId: 690,
        imageSrc: '',
        correct: false,
        text: 'A method for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 690,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
    ]);

    // Lesson 70
    await db.insert(schema.challenges).values([
      {
        id: 691,
        lessonId: 70,
        type: 'ASSIST',
        order: 1,
        question: 'What is a threat actor?',
      },
      {
        id: 692,
        lessonId: 70,
        type: 'ASSIST',
        order: 2,
        question: 'Define what a security vulnerability is.',
      },
      {
        id: 693,
        lessonId: 70,
        type: 'ASSIST',
        order: 3,
        question: 'What is a data breach?',
      },
      {
        id: 694,
        lessonId: 70,
        type: 'ASSIST',
        order: 4,
        question: 'Explain the concept of multifactor authentication.',
      },
      {
        id: 695,
        lessonId: 70,
        type: 'ASSIST',
        order: 5,
        question: 'What is a zero-day exploit?',
      },
      {
        id: 696,
        lessonId: 70,
        type: 'ASSIST',
        order: 6,
        question: 'What is the purpose of a security policy?',
      },
      {
        id: 697,
        lessonId: 70,
        type: 'SELECT',
        order: 7,
        question: 'What is a threat actor?',
      },
      {
        id: 698,
        lessonId: 70,
        type: 'SELECT',
        order: 8,
        question: 'Define what a security vulnerability is.',
      },
      {
        id: 699,
        lessonId: 70,
        type: 'SELECT',
        order: 9,
        question: 'What is a data breach?',
      },
      {
        id: 700,
        lessonId: 70,
        type: 'SELECT',
        order: 10,
        question: 'Explain the concept of multifactor authentication.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 691 options
      {
        challengeId: 691,
        imageSrc: '',
        correct: true,
        text: 'An individual or group that initiates malicious activities against a system or network',
        audioSrc: '',
      },
      {
        challengeId: 691,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 691,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 692 options
      {
        challengeId: 692,
        imageSrc: '',
        correct: true,
        text: 'A weakness or flaw in a system that can be exploited by attackers',
        audioSrc: '',
      },
      {
        challengeId: 692,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 692,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 693 options
      {
        challengeId: 693,
        imageSrc: '',
        correct: true,
        text: 'An incident where unauthorized access is gained to confidential data',
        audioSrc: '',
      },
      {
        challengeId: 693,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 693,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 694 options
      {
        challengeId: 694,
        imageSrc: '',
        correct: true,
        text: 'A security measure that requires two or more forms of verification before granting access',
        audioSrc: '',
      },
      {
        challengeId: 694,
        imageSrc: '',
        correct: false,
        text: 'A method for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 694,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },

      // Challenge 695 options
      {
        challengeId: 695,
        imageSrc: '',
        correct: true,
        text: 'An exploit that takes advantage of a previously unknown vulnerability',
        audioSrc: '',
      },
      {
        challengeId: 695,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 695,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 696 options
      {
        challengeId: 696,
        imageSrc: '',
        correct: true,
        text: 'A formal document that outlines security practices and guidelines for an organization',
        audioSrc: '',
      },
      {
        challengeId: 696,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 696,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 697 options
      {
        challengeId: 697,
        imageSrc: '',
        correct: true,
        text: 'An individual or group that initiates malicious activities against a system or network',
        audioSrc: '',
      },
      {
        challengeId: 697,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 697,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 698 options
      {
        challengeId: 698,
        imageSrc: '',
        correct: true,
        text: 'A weakness or flaw in a system that can be exploited by attackers',
        audioSrc: '',
      },
      {
        challengeId: 698,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 698,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 699 options
      {
        challengeId: 699,
        imageSrc: '',
        correct: true,
        text: 'An incident where unauthorized access is gained to confidential data',
        audioSrc: '',
      },
      {
        challengeId: 699,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 699,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 700 options
      {
        challengeId: 700,
        imageSrc: '',
        correct: true,
        text: 'A security measure that requires two or more forms of verification before granting access',
        audioSrc: '',
      },
      {
        challengeId: 700,
        imageSrc: '',
        correct: false,
        text: 'A method for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 700,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
    ]);

    // Lesson 71
    await db.insert(schema.challenges).values([
      {
        id: 701,
        lessonId: 71,
        type: 'ASSIST',
        order: 1,
        question: 'What is an intrusion detection system?',
      },
      {
        id: 702,
        lessonId: 71,
        type: 'ASSIST',
        order: 2,
        question: 'Define the term “security patch”.',
      },
      {
        id: 703,
        lessonId: 71,
        type: 'ASSIST',
        order: 3,
        question: 'What does “endpoint security” refer to?',
      },
      {
        id: 704,
        lessonId: 71,
        type: 'ASSIST',
        order: 4,
        question: 'Explain what “data masking” means.',
      },
      {
        id: 705,
        lessonId: 71,
        type: 'ASSIST',
        order: 5,
        question: 'What is the purpose of a firewall?',
      },
      {
        id: 706,
        lessonId: 71,
        type: 'ASSIST',
        order: 6,
        question: 'What is a security token?',
      },
      {
        id: 707,
        lessonId: 71,
        type: 'SELECT',
        order: 7,
        question: 'What is an intrusion detection system?',
      },
      {
        id: 708,
        lessonId: 71,
        type: 'SELECT',
        order: 8,
        question: 'Define the term “security patch”.',
      },
      {
        id: 709,
        lessonId: 71,
        type: 'SELECT',
        order: 9,
        question: 'What does “endpoint security” refer to?',
      },
      {
        id: 710,
        lessonId: 71,
        type: 'SELECT',
        order: 10,
        question: 'Explain what “data masking” means.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 701 options
      {
        challengeId: 701,
        imageSrc: '',
        correct: true,
        text: 'A system that monitors and analyzes network traffic for signs of malicious activity',
        audioSrc: '',
      },
      {
        challengeId: 701,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 701,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 702 options
      {
        challengeId: 702,
        imageSrc: '',
        correct: true,
        text: 'An update to software that fixes vulnerabilities or bugs',
        audioSrc: '',
      },
      {
        challengeId: 702,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 702,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 703 options
      {
        challengeId: 703,
        imageSrc: '',
        correct: true,
        text: 'Security measures applied to the devices connected to a network',
        audioSrc: '',
      },
      {
        challengeId: 703,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 703,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 704 options
      {
        challengeId: 704,
        imageSrc: '',
        correct: true,
        text: 'The process of obscuring data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 704,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 704,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 705 options
      {
        challengeId: 705,
        imageSrc: '',
        correct: true,
        text: 'A network security system that monitors and controls incoming and outgoing traffic',
        audioSrc: '',
      },
      {
        challengeId: 705,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing access permissions',
        audioSrc: '',
      },
      {
        challengeId: 705,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 706 options
      {
        challengeId: 706,
        imageSrc: '',
        correct: true,
        text: 'A physical or digital object used to authenticate a user’s identity',
        audioSrc: '',
      },
      {
        challengeId: 706,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 706,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 707 options
      {
        challengeId: 707,
        imageSrc: '',
        correct: true,
        text: 'A system that monitors and analyzes network traffic for signs of malicious activity',
        audioSrc: '',
      },
      {
        challengeId: 707,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 707,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 708 options
      {
        challengeId: 708,
        imageSrc: '',
        correct: true,
        text: 'An update to software that fixes vulnerabilities or bugs',
        audioSrc: '',
      },
      {
        challengeId: 708,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 708,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 709 options
      {
        challengeId: 709,
        imageSrc: '',
        correct: true,
        text: 'Security measures applied to the devices connected to a network',
        audioSrc: '',
      },
      {
        challengeId: 709,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 709,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 710 options
      {
        challengeId: 710,
        imageSrc: '',
        correct: true,
        text: 'The process of obscuring data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 710,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 710,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
    ]);

    // Lesson 72
    await db.insert(schema.challenges).values([
      {
        id: 711,
        lessonId: 72,
        type: 'ASSIST',
        order: 1,
        question: 'What is a denial-of-service (DoS) attack?',
      },
      {
        id: 712,
        lessonId: 72,
        type: 'ASSIST',
        order: 2,
        question: 'Define what “social engineering” is.',
      },
      {
        id: 713,
        lessonId: 72,
        type: 'ASSIST',
        order: 3,
        question: 'What is the purpose of a vulnerability scanner?',
      },
      {
        id: 714,
        lessonId: 72,
        type: 'ASSIST',
        order: 4,
        question: 'Explain what “data integrity” means.',
      },
      {
        id: 715,
        lessonId: 72,
        type: 'ASSIST',
        order: 5,
        question: 'What is the purpose of encryption?',
      },
      {
        id: 716,
        lessonId: 72,
        type: 'ASSIST',
        order: 6,
        question: 'What is a security incident response plan?',
      },
      {
        id: 717,
        lessonId: 72,
        type: 'SELECT',
        order: 7,
        question: 'What is a denial-of-service (DoS) attack?',
      },
      {
        id: 718,
        lessonId: 72,
        type: 'SELECT',
        order: 8,
        question: 'Define what “social engineering” is.',
      },
      {
        id: 719,
        lessonId: 72,
        type: 'SELECT',
        order: 9,
        question: 'What is the purpose of a vulnerability scanner?',
      },
      {
        id: 720,
        lessonId: 72,
        type: 'SELECT',
        order: 10,
        question: 'Explain what “data integrity” means.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 711 options
      {
        challengeId: 711,
        imageSrc: '',
        correct: true,
        text: 'An attack that aims to overwhelm a system with traffic to disrupt its normal operations',
        audioSrc: '',
      },
      {
        challengeId: 711,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 711,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 712 options
      {
        challengeId: 712,
        imageSrc: '',
        correct: true,
        text: 'A manipulation technique used to trick individuals into divulging confidential information',
        audioSrc: '',
      },
      {
        challengeId: 712,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 712,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 713 options
      {
        challengeId: 713,
        imageSrc: '',
        correct: true,
        text: 'A tool used to identify vulnerabilities in a system or network',
        audioSrc: '',
      },
      {
        challengeId: 713,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 713,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 714 options
      {
        challengeId: 714,
        imageSrc: '',
        correct: true,
        text: 'The assurance that data has not been altered or tampered with',
        audioSrc: '',
      },
      {
        challengeId: 714,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 714,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 715 options
      {
        challengeId: 715,
        imageSrc: '',
        correct: true,
        text: 'To protect information from unauthorized access by converting it into a secure format',
        audioSrc: '',
      },
      {
        challengeId: 715,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 715,
        imageSrc: '',
        correct: false,
        text: 'A method for managing access permissions',
        audioSrc: '',
      },

      // Challenge 716 options
      {
        challengeId: 716,
        imageSrc: '',
        correct: true,
        text: 'A plan that outlines the procedures for responding to security breaches or incidents',
        audioSrc: '',
      },
      {
        challengeId: 716,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 716,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 717 options
      {
        challengeId: 717,
        imageSrc: '',
        correct: true,
        text: 'An attack that aims to overwhelm a system with traffic to disrupt its normal operations',
        audioSrc: '',
      },
      {
        challengeId: 717,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 717,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 718 options
      {
        challengeId: 718,
        imageSrc: '',
        correct: true,
        text: 'A manipulation technique used to trick individuals into divulging confidential information',
        audioSrc: '',
      },
      {
        challengeId: 718,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 718,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 719 options
      {
        challengeId: 719,
        imageSrc: '',
        correct: true,
        text: 'A tool used to identify vulnerabilities in a system or network',
        audioSrc: '',
      },
      {
        challengeId: 719,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 719,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 720 options
      {
        challengeId: 720,
        imageSrc: '',
        correct: true,
        text: 'The assurance that data has not been altered or tampered with',
        audioSrc: '',
      },
      {
        challengeId: 720,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 720,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
    ]);

    // Lesson 73
    await db.insert(schema.challenges).values([
      {
        id: 721,
        lessonId: 73,
        type: 'ASSIST',
        order: 1,
        question: 'What is the role of a security analyst?',
      },
      {
        id: 722,
        lessonId: 73,
        type: 'ASSIST',
        order: 2,
        question: 'Define “penetration testing”.',
      },
      {
        id: 723,
        lessonId: 73,
        type: 'ASSIST',
        order: 3,
        question: 'What is a VPN?',
      },
      {
        id: 724,
        lessonId: 73,
        type: 'ASSIST',
        order: 4,
        question: 'Explain what “zero trust” security means.',
      },
      {
        id: 725,
        lessonId: 73,
        type: 'ASSIST',
        order: 5,
        question: 'What is a DDoS attack?',
      },
      {
        id: 726,
        lessonId: 73,
        type: 'ASSIST',
        order: 6,
        question: 'What is the purpose of an incident response team?',
      },
      {
        id: 727,
        lessonId: 73,
        type: 'SELECT',
        order: 7,
        question: 'What is the role of a security analyst?',
      },
      {
        id: 728,
        lessonId: 73,
        type: 'SELECT',
        order: 8,
        question: 'Define “penetration testing”.',
      },
      {
        id: 729,
        lessonId: 73,
        type: 'SELECT',
        order: 9,
        question: 'What is a VPN?',
      },
      {
        id: 730,
        lessonId: 73,
        type: 'SELECT',
        order: 10,
        question: 'Explain what “zero trust” security means.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 721 options
      {
        challengeId: 721,
        imageSrc: '',
        correct: true,
        text: 'A professional who monitors and protects an organization’s information systems',
        audioSrc: '',
      },
      {
        challengeId: 721,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 721,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 722 options
      {
        challengeId: 722,
        imageSrc: '',
        correct: true,
        text: 'A simulated cyberattack to test the security of a system',
        audioSrc: '',
      },
      {
        challengeId: 722,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 722,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 723 options
      {
        challengeId: 723,
        imageSrc: '',
        correct: true,
        text: 'A private network that uses encryption to secure connections over the internet',
        audioSrc: '',
      },
      {
        challengeId: 723,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 723,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 724 options
      {
        challengeId: 724,
        imageSrc: '',
        correct: true,
        text: 'A security model that requires verification for every request, regardless of origin',
        audioSrc: '',
      },
      {
        challengeId: 724,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 724,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 725 options
      {
        challengeId: 725,
        imageSrc: '',
        correct: true,
        text: 'An attack that floods a system with excessive traffic from multiple sources',
        audioSrc: '',
      },
      {
        challengeId: 725,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 725,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 726 options
      {
        challengeId: 726,
        imageSrc: '',
        correct: true,
        text: 'A team responsible for handling and responding to security incidents',
        audioSrc: '',
      },
      {
        challengeId: 726,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 726,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 727 options
      {
        challengeId: 727,
        imageSrc: '',
        correct: true,
        text: 'A professional who monitors and protects an organization’s information systems',
        audioSrc: '',
      },
      {
        challengeId: 727,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 727,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 728 options
      {
        challengeId: 728,
        imageSrc: '',
        correct: true,
        text: 'A simulated cyberattack to test the security of a system',
        audioSrc: '',
      },
      {
        challengeId: 728,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 728,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 729 options
      {
        challengeId: 729,
        imageSrc: '',
        correct: true,
        text: 'A private network that uses encryption to secure connections over the internet',
        audioSrc: '',
      },
      {
        challengeId: 729,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 729,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 730 options
      {
        challengeId: 730,
        imageSrc: '',
        correct: true,
        text: 'A security model that requires verification for every request, regardless of origin',
        audioSrc: '',
      },
      {
        challengeId: 730,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 730,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 74
    await db.insert(schema.challenges).values([
      {
        id: 731,
        lessonId: 74,
        type: 'ASSIST',
        order: 1,
        question: 'What is “malware”?',
      },
      {
        id: 732,
        lessonId: 74,
        type: 'ASSIST',
        order: 2,
        question: 'Define the term “phishing”.',
      },
      {
        id: 733,
        lessonId: 74,
        type: 'ASSIST',
        order: 3,
        question: 'What is the purpose of a security audit?',
      },
      {
        id: 734,
        lessonId: 74,
        type: 'ASSIST',
        order: 4,
        question: 'Explain what “data encryption” involves.',
      },
      {
        id: 735,
        lessonId: 74,
        type: 'ASSIST',
        order: 5,
        question: 'What is a security policy?',
      },
      {
        id: 736,
        lessonId: 74,
        type: 'ASSIST',
        order: 6,
        question: 'What is a security breach?',
      },
      {
        id: 737,
        lessonId: 74,
        type: 'SELECT',
        order: 7,
        question: 'What is “malware”?',
      },
      {
        id: 738,
        lessonId: 74,
        type: 'SELECT',
        order: 8,
        question: 'Define the term “phishing”.',
      },
      {
        id: 739,
        lessonId: 74,
        type: 'SELECT',
        order: 9,
        question: 'What is the purpose of a security audit?',
      },
      {
        id: 740,
        lessonId: 74,
        type: 'SELECT',
        order: 10,
        question: 'Explain what “data encryption” involves.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 731 options
      {
        challengeId: 731,
        imageSrc: '',
        correct: true,
        text: 'Software designed to damage or disrupt computers',
        audioSrc: '',
      },
      {
        challengeId: 731,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 731,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 732 options
      {
        challengeId: 732,
        imageSrc: '',
        correct: true,
        text: 'A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity',
        audioSrc: '',
      },
      {
        challengeId: 732,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 732,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 733 options
      {
        challengeId: 733,
        imageSrc: '',
        correct: true,
        text: 'An evaluation of the security policies and practices of an organization',
        audioSrc: '',
      },
      {
        challengeId: 733,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 733,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 734 options
      {
        challengeId: 734,
        imageSrc: '',
        correct: true,
        text: 'The process of converting information into a secure format to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 734,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 734,
        imageSrc: '',
        correct: false,
        text: 'A method for managing access permissions',
        audioSrc: '',
      },

      // Challenge 735 options
      {
        challengeId: 735,
        imageSrc: '',
        correct: true,
        text: 'A set of rules and procedures to protect an organization’s information',
        audioSrc: '',
      },
      {
        challengeId: 735,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 735,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 736 options
      {
        challengeId: 736,
        imageSrc: '',
        correct: true,
        text: 'An incident where unauthorized access is gained to a system or data',
        audioSrc: '',
      },
      {
        challengeId: 736,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 736,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 737 options
      {
        challengeId: 737,
        imageSrc: '',
        correct: true,
        text: 'Software designed to damage or disrupt computers',
        audioSrc: '',
      },
      {
        challengeId: 737,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 737,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 738 options
      {
        challengeId: 738,
        imageSrc: '',
        correct: true,
        text: 'A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity',
        audioSrc: '',
      },
      {
        challengeId: 738,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 738,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 739 options
      {
        challengeId: 739,
        imageSrc: '',
        correct: true,
        text: 'An evaluation of the security policies and practices of an organization',
        audioSrc: '',
      },
      {
        challengeId: 739,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 739,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 740 options
      {
        challengeId: 740,
        imageSrc: '',
        correct: true,
        text: 'The process of converting information into a secure format to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 740,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 740,
        imageSrc: '',
        correct: false,
        text: 'A method for managing access permissions',
        audioSrc: '',
      },
    ]);

    // Lesson 75
    await db.insert(schema.challenges).values([
      {
        id: 741,
        lessonId: 75,
        type: 'ASSIST',
        order: 1,
        question: 'What is a cybersecurity threat?',
      },
      {
        id: 742,
        lessonId: 75,
        type: 'ASSIST',
        order: 2,
        question: 'Define “ransomware”.',
      },
      {
        id: 743,
        lessonId: 75,
        type: 'ASSIST',
        order: 3,
        question: 'What is the purpose of a security framework?',
      },
      {
        id: 744,
        lessonId: 75,
        type: 'ASSIST',
        order: 4,
        question: 'Explain what “penetration testing” involves.',
      },
      {
        id: 745,
        lessonId: 75,
        type: 'ASSIST',
        order: 5,
        question: 'What is a security audit?',
      },
      {
        id: 746,
        lessonId: 75,
        type: 'ASSIST',
        order: 6,
        question: 'What is an access control list?',
      },
      {
        id: 747,
        lessonId: 75,
        type: 'SELECT',
        order: 7,
        question: 'What is a cybersecurity threat?',
      },
      {
        id: 748,
        lessonId: 75,
        type: 'SELECT',
        order: 8,
        question: 'Define “ransomware”.',
      },
      {
        id: 749,
        lessonId: 75,
        type: 'SELECT',
        order: 9,
        question: 'What is the purpose of a security framework?',
      },
      {
        id: 750,
        lessonId: 75,
        type: 'SELECT',
        order: 10,
        question: 'Explain what “penetration testing” involves.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 741 options
      {
        challengeId: 741,
        imageSrc: '',
        correct: true,
        text: 'Any potential danger that could exploit a vulnerability to harm a system',
        audioSrc: '',
      },
      {
        challengeId: 741,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 741,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 742 options
      {
        challengeId: 742,
        imageSrc: '',
        correct: true,
        text: 'Malicious software designed to block access to a system or data until a ransom is paid',
        audioSrc: '',
      },
      {
        challengeId: 742,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 742,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 743 options
      {
        challengeId: 743,
        imageSrc: '',
        correct: true,
        text: 'A set of guidelines or best practices for managing and protecting information systems',
        audioSrc: '',
      },
      {
        challengeId: 743,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 743,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 744 options
      {
        challengeId: 744,
        imageSrc: '',
        correct: true,
        text: 'A simulated cyberattack to test the security of a system',
        audioSrc: '',
      },
      {
        challengeId: 744,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 744,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 745 options
      {
        challengeId: 745,
        imageSrc: '',
        correct: true,
        text: 'An evaluation of the security policies and practices of an organization',
        audioSrc: '',
      },
      {
        challengeId: 745,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 745,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 746 options
      {
        challengeId: 746,
        imageSrc: '',
        correct: true,
        text: 'A list that specifies which users or groups are allowed to access certain resources',
        audioSrc: '',
      },
      {
        challengeId: 746,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 746,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 747 options
      {
        challengeId: 747,
        imageSrc: '',
        correct: true,
        text: 'Any potential danger that could exploit a vulnerability to harm a system',
        audioSrc: '',
      },
      {
        challengeId: 747,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 747,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 748 options
      {
        challengeId: 748,
        imageSrc: '',
        correct: true,
        text: 'Malicious software designed to block access to a system or data until a ransom is paid',
        audioSrc: '',
      },
      {
        challengeId: 748,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 748,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 749 options
      {
        challengeId: 749,
        imageSrc: '',
        correct: true,
        text: 'A set of guidelines or best practices for managing and protecting information systems',
        audioSrc: '',
      },
      {
        challengeId: 749,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 749,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 750 options
      {
        challengeId: 750,
        imageSrc: '',
        correct: true,
        text: 'A simulated cyberattack to test the security of a system',
        audioSrc: '',
      },
      {
        challengeId: 750,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 750,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 76
    await db.insert(schema.challenges).values([
      {
        id: 751,
        lessonId: 76,
        type: 'ASSIST',
        order: 1,
        question: 'What is a firewall?',
      },
      {
        id: 752,
        lessonId: 76,
        type: 'ASSIST',
        order: 2,
        question: 'Define “intrusion detection system” (IDS).',
      },
      {
        id: 753,
        lessonId: 76,
        type: 'ASSIST',
        order: 3,
        question: 'What is “two-factor authentication”?',
      },
      {
        id: 754,
        lessonId: 76,
        type: 'ASSIST',
        order: 4,
        question: 'Explain what “network segmentation” involves.',
      },
      {
        id: 755,
        lessonId: 76,
        type: 'ASSIST',
        order: 5,
        question: 'What is the purpose of a VPN?',
      },
      {
        id: 756,
        lessonId: 76,
        type: 'ASSIST',
        order: 6,
        question: 'What is “security information and event management” (SIEM)?',
      },
      {
        id: 757,
        lessonId: 76,
        type: 'SELECT',
        order: 7,
        question: 'What is a firewall?',
      },
      {
        id: 758,
        lessonId: 76,
        type: 'SELECT',
        order: 8,
        question: 'Define “intrusion detection system” (IDS).',
      },
      {
        id: 759,
        lessonId: 76,
        type: 'SELECT',
        order: 9,
        question: 'What is “two-factor authentication”?',
      },
      {
        id: 760,
        lessonId: 76,
        type: 'SELECT',
        order: 10,
        question: 'Explain what “network segmentation” involves.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 751 options
      {
        challengeId: 751,
        imageSrc: '',
        correct: true,
        text: 'A system that monitors and controls incoming and outgoing network traffic based on predetermined security rules',
        audioSrc: '',
      },
      {
        challengeId: 751,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user accounts',
        audioSrc: '',
      },
      {
        challengeId: 751,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 752 options
      {
        challengeId: 752,
        imageSrc: '',
        correct: true,
        text: 'A system that monitors network traffic for suspicious activity and potential threats',
        audioSrc: '',
      },
      {
        challengeId: 752,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 752,
        imageSrc: '',
        correct: false,
        text: 'A tool for encrypting data',
        audioSrc: '',
      },

      // Challenge 753 options
      {
        challengeId: 753,
        imageSrc: '',
        correct: true,
        text: 'A security process in which the user provides two different authentication factors',
        audioSrc: '',
      },
      {
        challengeId: 753,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 753,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 754 options
      {
        challengeId: 754,
        imageSrc: '',
        correct: true,
        text: 'The practice of dividing a network into multiple segments to improve security',
        audioSrc: '',
      },
      {
        challengeId: 754,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 754,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 755 options
      {
        challengeId: 755,
        imageSrc: '',
        correct: true,
        text: 'A service that creates a secure connection over a less secure network, such as the internet',
        audioSrc: '',
      },
      {
        challengeId: 755,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 755,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 756 options
      {
        challengeId: 756,
        imageSrc: '',
        correct: true,
        text: 'A system that collects, analyzes, and manages security data and events from various sources',
        audioSrc: '',
      },
      {
        challengeId: 756,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user accounts',
        audioSrc: '',
      },
      {
        challengeId: 756,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 757 options
      {
        challengeId: 757,
        imageSrc: '',
        correct: true,
        text: 'A system that monitors and controls incoming and outgoing network traffic based on predetermined security rules',
        audioSrc: '',
      },
      {
        challengeId: 757,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user accounts',
        audioSrc: '',
      },
      {
        challengeId: 757,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 758 options
      {
        challengeId: 758,
        imageSrc: '',
        correct: true,
        text: 'A system that monitors network traffic for suspicious activity and potential threats',
        audioSrc: '',
      },
      {
        challengeId: 758,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 758,
        imageSrc: '',
        correct: false,
        text: 'A tool for encrypting data',
        audioSrc: '',
      },

      // Challenge 759 options
      {
        challengeId: 759,
        imageSrc: '',
        correct: true,
        text: 'A security process in which the user provides two different authentication factors',
        audioSrc: '',
      },
      {
        challengeId: 759,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 759,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 760 options
      {
        challengeId: 760,
        imageSrc: '',
        correct: true,
        text: 'The practice of dividing a network into multiple segments to improve security',
        audioSrc: '',
      },
      {
        challengeId: 760,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 760,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
    ]);

    // Lesson 77
    await db.insert(schema.challenges).values([
      {
        id: 761,
        lessonId: 77,
        type: 'ASSIST',
        order: 1,
        question: 'What is social engineering in cybersecurity?',
      },
      {
        id: 762,
        lessonId: 77,
        type: 'ASSIST',
        order: 2,
        question: 'Define “man-in-the-middle attack”.',
      },
      {
        id: 763,
        lessonId: 77,
        type: 'ASSIST',
        order: 3,
        question: 'What is “encryption”? Why is it important?',
      },
      {
        id: 764,
        lessonId: 77,
        type: 'ASSIST',
        order: 4,
        question: 'Explain “public key infrastructure” (PKI).',
      },
      {
        id: 765,
        lessonId: 77,
        type: 'ASSIST',
        order: 5,
        question: 'What is “data integrity”?',
      },
      {
        id: 766,
        lessonId: 77,
        type: 'ASSIST',
        order: 6,
        question: 'What is “security by design”?',
      },
      {
        id: 767,
        lessonId: 77,
        type: 'SELECT',
        order: 7,
        question: 'What is social engineering in cybersecurity?',
      },
      {
        id: 768,
        lessonId: 77,
        type: 'SELECT',
        order: 8,
        question: 'Define “man-in-the-middle attack”.',
      },
      {
        id: 769,
        lessonId: 77,
        type: 'SELECT',
        order: 9,
        question: 'What is “encryption”? Why is it important?',
      },
      {
        id: 770,
        lessonId: 77,
        type: 'SELECT',
        order: 10,
        question: 'Explain “public key infrastructure” (PKI).',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 761 options
      {
        challengeId: 761,
        imageSrc: '',
        correct: true,
        text: 'The use of deception to manipulate individuals into divulging confidential information',
        audioSrc: '',
      },
      {
        challengeId: 761,
        imageSrc: '',
        correct: false,
        text: 'A method for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 761,
        imageSrc: '',
        correct: false,
        text: 'A tool for encrypting data',
        audioSrc: '',
      },

      // Challenge 762 options
      {
        challengeId: 762,
        imageSrc: '',
        correct: true,
        text: 'An attack where an attacker intercepts and potentially alters communication between two parties',
        audioSrc: '',
      },
      {
        challengeId: 762,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 762,
        imageSrc: '',
        correct: false,
        text: 'A tool for encrypting data',
        audioSrc: '',
      },

      // Challenge 763 options
      {
        challengeId: 763,
        imageSrc: '',
        correct: true,
        text: 'A process of converting data into a secure format to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 763,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 763,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 764 options
      {
        challengeId: 764,
        imageSrc: '',
        correct: true,
        text: 'A framework for managing digital certificates and public-key encryption',
        audioSrc: '',
      },
      {
        challengeId: 764,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user accounts',
        audioSrc: '',
      },
      {
        challengeId: 764,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 765 options
      {
        challengeId: 765,
        imageSrc: '',
        correct: true,
        text: 'The assurance that data has not been altered or tampered with during transmission',
        audioSrc: '',
      },
      {
        challengeId: 765,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 765,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 766 options
      {
        challengeId: 766,
        imageSrc: '',
        correct: true,
        text: 'Designing systems with security considerations from the start to minimize vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 766,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 766,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 767 options
      {
        challengeId: 767,
        imageSrc: '',
        correct: true,
        text: 'The use of deception to manipulate individuals into divulging confidential information',
        audioSrc: '',
      },
      {
        challengeId: 767,
        imageSrc: '',
        correct: false,
        text: 'A method for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 767,
        imageSrc: '',
        correct: false,
        text: 'A tool for encrypting data',
        audioSrc: '',
      },

      // Challenge 768 options
      {
        challengeId: 768,
        imageSrc: '',
        correct: true,
        text: 'An attack where an attacker intercepts and potentially alters communication between two parties',
        audioSrc: '',
      },
      {
        challengeId: 768,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 768,
        imageSrc: '',
        correct: false,
        text: 'A tool for encrypting data',
        audioSrc: '',
      },

      // Challenge 769 options
      {
        challengeId: 769,
        imageSrc: '',
        correct: true,
        text: 'A process of converting data into a secure format to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 769,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 769,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 770 options
      {
        challengeId: 770,
        imageSrc: '',
        correct: true,
        text: 'A framework for managing digital certificates and public-key encryption',
        audioSrc: '',
      },
      {
        challengeId: 770,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user accounts',
        audioSrc: '',
      },
      {
        challengeId: 770,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 78
    await db.insert(schema.challenges).values([
      {
        id: 771,
        lessonId: 78,
        type: 'ASSIST',
        order: 1,
        question: 'What is a zero-day vulnerability?',
      },
      {
        id: 772,
        lessonId: 78,
        type: 'ASSIST',
        order: 2,
        question: 'Define “malware”.',
      },
      {
        id: 773,
        lessonId: 78,
        type: 'ASSIST',
        order: 3,
        question: 'What is a “botnet”?',
      },
      {
        id: 774,
        lessonId: 78,
        type: 'ASSIST',
        order: 4,
        question: 'Explain the term “phishing”.',
      },
      {
        id: 775,
        lessonId: 78,
        type: 'ASSIST',
        order: 5,
        question: 'What is “data leakage”?',
      },
      {
        id: 776,
        lessonId: 78,
        type: 'ASSIST',
        order: 6,
        question: 'What is “network sniffer”?',
      },
      {
        id: 777,
        lessonId: 78,
        type: 'SELECT',
        order: 7,
        question: 'What is a zero-day vulnerability?',
      },
      {
        id: 778,
        lessonId: 78,
        type: 'SELECT',
        order: 8,
        question: 'Define “malware”.',
      },
      {
        id: 779,
        lessonId: 78,
        type: 'SELECT',
        order: 9,
        question: 'What is a “botnet”?',
      },
      {
        id: 780,
        lessonId: 78,
        type: 'SELECT',
        order: 10,
        question: 'Explain the term “phishing”.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 771 options
      {
        challengeId: 771,
        imageSrc: '',
        correct: true,
        text: 'A vulnerability that is unknown to those who need to mitigate it',
        audioSrc: '',
      },
      {
        challengeId: 771,
        imageSrc: '',
        correct: false,
        text: 'A software update designed to fix known bugs',
        audioSrc: '',
      },
      {
        challengeId: 771,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 772 options
      {
        challengeId: 772,
        imageSrc: '',
        correct: true,
        text: 'Malicious software designed to disrupt, damage, or gain unauthorized access to computer systems',
        audioSrc: '',
      },
      {
        challengeId: 772,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 772,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 773 options
      {
        challengeId: 773,
        imageSrc: '',
        correct: true,
        text: 'A network of infected computers controlled by a single attacker',
        audioSrc: '',
      },
      {
        challengeId: 773,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user accounts',
        audioSrc: '',
      },
      {
        challengeId: 773,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 774 options
      {
        challengeId: 774,
        imageSrc: '',
        correct: true,
        text: 'A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity',
        audioSrc: '',
      },
      {
        challengeId: 774,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 774,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 775 options
      {
        challengeId: 775,
        imageSrc: '',
        correct: true,
        text: 'The unauthorized transfer of data from a computer or network',
        audioSrc: '',
      },
      {
        challengeId: 775,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 775,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 776 options
      {
        challengeId: 776,
        imageSrc: '',
        correct: true,
        text: 'A tool that captures and analyzes network traffic',
        audioSrc: '',
      },
      {
        challengeId: 776,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 776,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user accounts',
        audioSrc: '',
      },

      // Challenge 777 options
      {
        challengeId: 777,
        imageSrc: '',
        correct: true,
        text: 'A vulnerability that is unknown to those who need to mitigate it',
        audioSrc: '',
      },
      {
        challengeId: 777,
        imageSrc: '',
        correct: false,
        text: 'A software update designed to fix known bugs',
        audioSrc: '',
      },
      {
        challengeId: 777,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 778 options
      {
        challengeId: 778,
        imageSrc: '',
        correct: true,
        text: 'Malicious software designed to disrupt, damage, or gain unauthorized access to computer systems',
        audioSrc: '',
      },
      {
        challengeId: 778,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 778,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 779 options
      {
        challengeId: 779,
        imageSrc: '',
        correct: true,
        text: 'A network of infected computers controlled by a single attacker',
        audioSrc: '',
      },
      {
        challengeId: 779,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user accounts',
        audioSrc: '',
      },
      {
        challengeId: 779,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 780 options
      {
        challengeId: 780,
        imageSrc: '',
        correct: true,
        text: 'A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity',
        audioSrc: '',
      },
      {
        challengeId: 780,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 780,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
    ]);

    // Lesson 79
    await db.insert(schema.challenges).values([
      {
        id: 781,
        lessonId: 79,
        type: 'ASSIST',
        order: 1,
        question: 'What is “cyber threat intelligence”?',
      },
      {
        id: 782,
        lessonId: 79,
        type: 'ASSIST',
        order: 2,
        question: 'Define “threat hunting”.',
      },
      {
        id: 783,
        lessonId: 79,
        type: 'ASSIST',
        order: 3,
        question: 'What is “vulnerability assessment”?',
      },
      {
        id: 784,
        lessonId: 79,
        type: 'ASSIST',
        order: 4,
        question: 'Explain the term “incident response”.',
      },
      {
        id: 785,
        lessonId: 79,
        type: 'ASSIST',
        order: 5,
        question: 'What is “endpoint security”?',
      },
      {
        id: 786,
        lessonId: 79,
        type: 'ASSIST',
        order: 6,
        question: 'What is “data encryption”? Why is it important?',
      },
      {
        id: 787,
        lessonId: 79,
        type: 'SELECT',
        order: 7,
        question: 'What is “cyber threat intelligence”?',
      },
      {
        id: 788,
        lessonId: 79,
        type: 'SELECT',
        order: 8,
        question: 'Define “threat hunting”.',
      },
      {
        id: 789,
        lessonId: 79,
        type: 'SELECT',
        order: 9,
        question: 'What is “vulnerability assessment”?',
      },
      {
        id: 790,
        lessonId: 79,
        type: 'SELECT',
        order: 10,
        question: 'Explain the term “incident response”.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 781 options
      {
        challengeId: 781,
        imageSrc: '',
        correct: true,
        text: 'Information collected to understand and mitigate potential cyber threats',
        audioSrc: '',
      },
      {
        challengeId: 781,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 781,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 782 options
      {
        challengeId: 782,
        imageSrc: '',
        correct: true,
        text: 'The proactive process of searching for potential threats and vulnerabilities before they manifest',
        audioSrc: '',
      },
      {
        challengeId: 782,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 782,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 783 options
      {
        challengeId: 783,
        imageSrc: '',
        correct: true,
        text: 'A process of identifying, quantifying, and prioritizing vulnerabilities in a system',
        audioSrc: '',
      },
      {
        challengeId: 783,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user accounts',
        audioSrc: '',
      },
      {
        challengeId: 783,
        imageSrc: '',
        correct: false,
        text: 'A method for managing network traffic',
        audioSrc: '',
      },

      // Challenge 784 options
      {
        challengeId: 784,
        imageSrc: '',
        correct: true,
        text: 'A coordinated effort to address and mitigate the impact of a security incident',
        audioSrc: '',
      },
      {
        challengeId: 784,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user accounts',
        audioSrc: '',
      },
      {
        challengeId: 784,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 785 options
      {
        challengeId: 785,
        imageSrc: '',
        correct: true,
        text: 'The practice of securing individual devices from threats and vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 785,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 785,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 786 options
      {
        challengeId: 786,
        imageSrc: '',
        correct: true,
        text: 'The process of converting data into a secure format to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 786,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 786,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 787 options
      {
        challengeId: 787,
        imageSrc: '',
        correct: true,
        text: 'Information collected to understand and mitigate potential cyber threats',
        audioSrc: '',
      },
      {
        challengeId: 787,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 787,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 788 options
      {
        challengeId: 788,
        imageSrc: '',
        correct: true,
        text: 'The proactive process of searching for potential threats and vulnerabilities before they manifest',
        audioSrc: '',
      },
      {
        challengeId: 788,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 788,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 789 options
      {
        challengeId: 789,
        imageSrc: '',
        correct: true,
        text: 'A process of identifying, quantifying, and prioritizing vulnerabilities in a system',
        audioSrc: '',
      },
      {
        challengeId: 789,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user accounts',
        audioSrc: '',
      },
      {
        challengeId: 789,
        imageSrc: '',
        correct: false,
        text: 'A method for managing network traffic',
        audioSrc: '',
      },

      // Challenge 790 options
      {
        challengeId: 790,
        imageSrc: '',
        correct: true,
        text: 'A coordinated effort to address and mitigate the impact of a security incident',
        audioSrc: '',
      },
      {
        challengeId: 790,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user accounts',
        audioSrc: '',
      },
      {
        challengeId: 790,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
    ]);

    // Lesson 80
    await db.insert(schema.challenges).values([
      {
        id: 791,
        lessonId: 80,
        type: 'ASSIST',
        order: 1,
        question: 'What is “security patch management”?',
      },
      {
        id: 792,
        lessonId: 80,
        type: 'ASSIST',
        order: 2,
        question: 'Define “penetration testing”.',
      },
      {
        id: 793,
        lessonId: 80,
        type: 'ASSIST',
        order: 3,
        question: 'What is “network segmentation”? Why is it important?',
      },
      {
        id: 794,
        lessonId: 80,
        type: 'ASSIST',
        order: 4,
        question: 'Explain “access control” in cybersecurity.',
      },
      {
        id: 795,
        lessonId: 80,
        type: 'ASSIST',
        order: 5,
        question: 'What is a “digital certificate”?',
      },
      {
        id: 796,
        lessonId: 80,
        type: 'ASSIST',
        order: 6,
        question: 'What is “data masking”?',
      },
      {
        id: 797,
        lessonId: 80,
        type: 'SELECT',
        order: 7,
        question: 'What is “security patch management”?',
      },
      {
        id: 798,
        lessonId: 80,
        type: 'SELECT',
        order: 8,
        question: 'Define “penetration testing”.',
      },
      {
        id: 799,
        lessonId: 80,
        type: 'SELECT',
        order: 9,
        question: 'What is “network segmentation”? Why is it important?',
      },
      {
        id: 800,
        lessonId: 80,
        type: 'SELECT',
        order: 10,
        question: 'Explain “access control” in cybersecurity.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 791 options
      {
        challengeId: 791,
        imageSrc: '',
        correct: true,
        text: 'The process of managing and applying updates to software to address vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 791,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 791,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user accounts',
        audioSrc: '',
      },

      // Challenge 792 options
      {
        challengeId: 792,
        imageSrc: '',
        correct: true,
        text: 'The practice of testing a system or network for vulnerabilities by simulating attacks',
        audioSrc: '',
      },
      {
        challengeId: 792,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 792,
        imageSrc: '',
        correct: false,
        text: 'A tool for encrypting data',
        audioSrc: '',
      },

      // Challenge 793 options
      {
        challengeId: 793,
        imageSrc: '',
        correct: true,
        text: 'Dividing a network into segments to limit access and reduce the risk of a security breach',
        audioSrc: '',
      },
      {
        challengeId: 793,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 793,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 794 options
      {
        challengeId: 794,
        imageSrc: '',
        correct: true,
        text: 'The practice of defining and enforcing who can access specific resources within a system',
        audioSrc: '',
      },
      {
        challengeId: 794,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 794,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 795 options
      {
        challengeId: 795,
        imageSrc: '',
        correct: true,
        text: 'A digital file used to verify the identity of a user or device',
        audioSrc: '',
      },
      {
        challengeId: 795,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 795,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },

      // Challenge 796 options
      {
        challengeId: 796,
        imageSrc: '',
        correct: true,
        text: 'The process of hiding or obscuring data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 796,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 796,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 797 options
      {
        challengeId: 797,
        imageSrc: '',
        correct: true,
        text: 'The process of managing and applying updates to software to address vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 797,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 797,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user accounts',
        audioSrc: '',
      },

      // Challenge 798 options
      {
        challengeId: 798,
        imageSrc: '',
        correct: true,
        text: 'The practice of testing a system or network for vulnerabilities by simulating attacks',
        audioSrc: '',
      },
      {
        challengeId: 798,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 798,
        imageSrc: '',
        correct: false,
        text: 'A tool for encrypting data',
        audioSrc: '',
      },

      // Challenge 799 options
      {
        challengeId: 799,
        imageSrc: '',
        correct: true,
        text: 'Dividing a network into segments to limit access and reduce the risk of a security breach',
        audioSrc: '',
      },
      {
        challengeId: 799,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 799,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 800 options
      {
        challengeId: 800,
        imageSrc: '',
        correct: true,
        text: 'The practice of defining and enforcing who can access specific resources within a system',
        audioSrc: '',
      },
      {
        challengeId: 800,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 800,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
    ]);

    // Lesson 81
    await db.insert(schema.challenges).values([
      {
        id: 801,
        lessonId: 81,
        type: 'ASSIST',
        order: 1,
        question: 'What is “identity management”?',
      },
      {
        id: 802,
        lessonId: 81,
        type: 'ASSIST',
        order: 2,
        question: 'Define “access management”.',
      },
      {
        id: 803,
        lessonId: 81,
        type: 'ASSIST',
        order: 3,
        question: 'What is “single sign-on”?',
      },
      {
        id: 804,
        lessonId: 81,
        type: 'ASSIST',
        order: 4,
        question: 'Explain the term “multi-factor authentication”.',
      },
      {
        id: 805,
        lessonId: 81,
        type: 'ASSIST',
        order: 5,
        question: 'What is “role-based access control”?',
      },
      {
        id: 806,
        lessonId: 81,
        type: 'ASSIST',
        order: 6,
        question: 'What is “attribute-based access control”?',
      },
      {
        id: 807,
        lessonId: 81,
        type: 'SELECT',
        order: 7,
        question: 'What is “identity management”?',
      },
      {
        id: 808,
        lessonId: 81,
        type: 'SELECT',
        order: 8,
        question: 'Define “access management”.',
      },
      {
        id: 809,
        lessonId: 81,
        type: 'SELECT',
        order: 9,
        question: 'What is “single sign-on”?',
      },
      {
        id: 810,
        lessonId: 81,
        type: 'SELECT',
        order: 10,
        question: 'Explain the term “multi-factor authentication”.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 801 options
      {
        challengeId: 801,
        imageSrc: '',
        correct: true,
        text: 'The process of managing user identities and their access permissions across systems',
        audioSrc: '',
      },
      {
        challengeId: 801,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 801,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 802 options
      {
        challengeId: 802,
        imageSrc: '',
        correct: true,
        text: 'The process of managing and controlling user access to resources within a system',
        audioSrc: '',
      },
      {
        challengeId: 802,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 802,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 803 options
      {
        challengeId: 803,
        imageSrc: '',
        correct: true,
        text: 'A single authentication process that provides access to multiple applications or systems',
        audioSrc: '',
      },
      {
        challengeId: 803,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 803,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 804 options
      {
        challengeId: 804,
        imageSrc: '',
        correct: true,
        text: 'A security measure that requires multiple forms of authentication before granting access',
        audioSrc: '',
      },
      {
        challengeId: 804,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 804,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 805 options
      {
        challengeId: 805,
        imageSrc: '',
        correct: true,
        text: 'An access control method where permissions are based on user roles',
        audioSrc: '',
      },
      {
        challengeId: 805,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 805,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 806 options
      {
        challengeId: 806,
        imageSrc: '',
        correct: true,
        text: 'An access control method where permissions are based on attributes or characteristics of users',
        audioSrc: '',
      },
      {
        challengeId: 806,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 806,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 807 options
      {
        challengeId: 807,
        imageSrc: '',
        correct: true,
        text: 'The process of managing user identities and their access permissions across systems',
        audioSrc: '',
      },
      {
        challengeId: 807,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 807,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 808 options
      {
        challengeId: 808,
        imageSrc: '',
        correct: true,
        text: 'The process of managing and controlling user access to resources within a system',
        audioSrc: '',
      },
      {
        challengeId: 808,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 808,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 809 options
      {
        challengeId: 809,
        imageSrc: '',
        correct: true,
        text: 'A single authentication process that provides access to multiple applications or systems',
        audioSrc: '',
      },
      {
        challengeId: 809,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 809,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 810 options
      {
        challengeId: 810,
        imageSrc: '',
        correct: true,
        text: 'A security measure that requires multiple forms of authentication before granting access',
        audioSrc: '',
      },
      {
        challengeId: 810,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 810,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 82
    await db.insert(schema.challenges).values([
      {
        id: 811,
        lessonId: 82,
        type: 'SELECT',
        order: 1,
        question: 'What is “data encryption”? Why is it important?',
      },
      {
        id: 812,
        lessonId: 82,
        type: 'ASSIST',
        order: 2,
        question: 'Define “public key infrastructure”.',
      },
      {
        id: 813,
        lessonId: 82,
        type: 'SELECT',
        order: 3,
        question: 'What is “digital signature”?',
      },
      {
        id: 814,
        lessonId: 82,
        type: 'ASSIST',
        order: 4,
        question: 'Explain the term “encryption algorithm”.',
      },
      {
        id: 815,
        lessonId: 82,
        type: 'ASSIST',
        order: 5,
        question: 'What is “key management”?',
      },
      {
        id: 816,
        lessonId: 82,
        type: 'ASSIST',
        order: 6,
        question: 'What is “hashing”?',
      },
      {
        id: 817,
        lessonId: 82,
        type: 'SELECT',
        order: 7,
        question: 'What is “data encryption”? Why is it important?',
      },
      {
        id: 818,
        lessonId: 82,
        type: 'SELECT',
        order: 8,
        question: 'Define “public key infrastructure”.',
      },
      {
        id: 819,
        lessonId: 82,
        type: 'SELECT',
        order: 9,
        question: 'What is “digital signature”?',
      },
      {
        id: 820,
        lessonId: 82,
        type: 'SELECT',
        order: 10,
        question: 'Explain the term “encryption algorithm”.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 811 options
      {
        challengeId: 811,
        imageSrc: '',
        correct: true,
        text: 'The process of converting data into a secure format to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 811,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 811,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 812 options
      {
        challengeId: 812,
        imageSrc: '',
        correct: true,
        text: 'A framework for managing digital certificates and encryption keys',
        audioSrc: '',
      },
      {
        challengeId: 812,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 812,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 813 options
      {
        challengeId: 813,
        imageSrc: '',
        correct: true,
        text: 'A cryptographic mechanism used to verify the authenticity of a message or document',
        audioSrc: '',
      },
      {
        challengeId: 813,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 813,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 814 options
      {
        challengeId: 814,
        imageSrc: '',
        correct: true,
        text: 'A set of rules used to transform data into a secure format',
        audioSrc: '',
      },
      {
        challengeId: 814,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 814,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 815 options
      {
        challengeId: 815,
        imageSrc: '',
        correct: true,
        text: 'The process of generating, storing, and distributing encryption keys',
        audioSrc: '',
      },
      {
        challengeId: 815,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 815,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 816 options
      {
        challengeId: 816,
        imageSrc: '',
        correct: true,
        text: 'A process that converts data into a fixed-size hash value for verification purposes',
        audioSrc: '',
      },
      {
        challengeId: 816,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 816,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 817 options
      {
        challengeId: 817,
        imageSrc: '',
        correct: true,
        text: 'The process of converting data into a secure format to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 817,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 817,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 818 options
      {
        challengeId: 818,
        imageSrc: '',
        correct: true,
        text: 'A framework for managing digital certificates and encryption keys',
        audioSrc: '',
      },
      {
        challengeId: 818,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 818,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 819 options
      {
        challengeId: 819,
        imageSrc: '',
        correct: true,
        text: 'A cryptographic mechanism used to verify the authenticity of a message or document',
        audioSrc: '',
      },
      {
        challengeId: 819,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 819,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 820 options
      {
        challengeId: 820,
        imageSrc: '',
        correct: true,
        text: 'A set of rules used to transform data into a secure format',
        audioSrc: '',
      },
      {
        challengeId: 820,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 820,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 83
    await db.insert(schema.challenges).values([
      {
        id: 821,
        lessonId: 83,
        type: 'ASSIST',
        order: 1,
        question: 'What is “malware”?',
      },
      {
        id: 822,
        lessonId: 83,
        type: 'ASSIST',
        order: 2,
        question: 'Define “virus” in cybersecurity.',
      },
      {
        id: 823,
        lessonId: 83,
        type: 'ASSIST',
        order: 3,
        question: 'What is a “worm”?',
      },
      {
        id: 824,
        lessonId: 83,
        type: 'ASSIST',
        order: 4,
        question: 'Explain the term “trojan horse”.',
      },
      {
        id: 825,
        lessonId: 83,
        type: 'SELECT',
        order: 5,
        question: 'What is “spyware”?',
      },
      {
        id: 826,
        lessonId: 83,
        type: 'SELECT',
        order: 6,
        question: 'Define “adware”.',
      },
      {
        id: 827,
        lessonId: 83,
        type: 'SELECT',
        order: 7,
        question: 'What is “ransomware”?',
      },
      {
        id: 828,
        lessonId: 83,
        type: 'SELECT',
        order: 8,
        question: 'Explain the term “rootkit”.',
      },
      {
        id: 829,
        lessonId: 83,
        type: 'SELECT',
        order: 9,
        question: 'What is “keylogger”?',
      },
      {
        id: 830,
        lessonId: 83,
        type: 'SELECT',
        order: 10,
        question: 'Define “botnet”.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 821 options
      {
        challengeId: 821,
        imageSrc: '',
        correct: true,
        text: 'Malicious software designed to harm or exploit systems',
        audioSrc: '',
      },
      {
        challengeId: 821,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 821,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 822 options
      {
        challengeId: 822,
        imageSrc: '',
        correct: true,
        text: 'A type of malware that replicates itself and spreads to other systems',
        audioSrc: '',
      },
      {
        challengeId: 822,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 822,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 823 options
      {
        challengeId: 823,
        imageSrc: '',
        correct: true,
        text: 'A type of malware that spreads through network vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 823,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 823,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 824 options
      {
        challengeId: 824,
        imageSrc: '',
        correct: true,
        text: 'A type of malware that disguises itself as legitimate software',
        audioSrc: '',
      },
      {
        challengeId: 824,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 824,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 825 options
      {
        challengeId: 825,
        imageSrc: '',
        correct: true,
        text: 'Software designed to collect user data without consent',
        audioSrc: '',
      },
      {
        challengeId: 825,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 825,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 826 options
      {
        challengeId: 826,
        imageSrc: '',
        correct: true,
        text: 'Software that displays unwanted ads or pop-ups',
        audioSrc: '',
      },
      {
        challengeId: 826,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 826,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 827 options
      {
        challengeId: 827,
        imageSrc: '',
        correct: true,
        text: 'Malware that encrypts files and demands ransom for decryption',
        audioSrc: '',
      },
      {
        challengeId: 827,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 827,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 828 options
      {
        challengeId: 828,
        imageSrc: '',
        correct: true,
        text: 'Malware designed to gain unauthorized access to a system while hiding its presence',
        audioSrc: '',
      },
      {
        challengeId: 828,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 828,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 829 options
      {
        challengeId: 829,
        imageSrc: '',
        correct: true,
        text: 'Software that records keystrokes to gather sensitive information',
        audioSrc: '',
      },
      {
        challengeId: 829,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 829,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 830 options
      {
        challengeId: 830,
        imageSrc: '',
        correct: true,
        text: 'A network of infected devices controlled by a malicious actor',
        audioSrc: '',
      },
      {
        challengeId: 830,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 830,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 84
    await db.insert(schema.challenges).values([
      {
        id: 831,
        lessonId: 84,
        type: 'SELECT',
        order: 1,
        question: 'What is a “firewall”? How does it work?',
      },
      {
        id: 832,
        lessonId: 84,
        type: 'ASSIST',
        order: 2,
        question: 'Explain the concept of “intrusion detection system”.',
      },
      {
        id: 833,
        lessonId: 84,
        type: 'ASSIST',
        order: 3,
        question: 'What is a “virtual private network”?',
      },
      {
        id: 834,
        lessonId: 84,
        type: 'SELECT',
        order: 4,
        question: 'Define “network segmentation”.',
      },
      {
        id: 835,
        lessonId: 84,
        type: 'ASSIST',
        order: 5,
        question: 'What is “load balancing” in a network?',
      },
      {
        id: 836,
        lessonId: 84,
        type: 'ASSIST',
        order: 6,
        question: 'Explain “endpoint security”.',
      },
      {
        id: 837,
        lessonId: 84,
        type: 'SELECT',
        order: 7,
        question: 'What is a “proxy server”?',
      },
      {
        id: 838,
        lessonId: 84,
        type: 'SELECT',
        order: 8,
        question: 'What is “network monitoring”?',
      },
      {
        id: 839,
        lessonId: 84,
        type: 'ASSIST',
        order: 9,
        question: 'What is “security information and event management” (SIEM)?',
      },
      {
        id: 840,
        lessonId: 84,
        type: 'ASSIST',
        order: 10,
        question: 'Define “network traffic analysis”.',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 831 options
      {
        challengeId: 831,
        imageSrc: '',
        correct: true,
        text: 'A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules',
        audioSrc: '',
      },
      {
        challengeId: 831,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 831,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 832 options
      {
        challengeId: 832,
        imageSrc: '',
        correct: true,
        text: 'A system that monitors network or system activities for malicious activities or policy violations',
        audioSrc: '',
      },
      {
        challengeId: 832,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 832,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 833 options
      {
        challengeId: 833,
        imageSrc: '',
        correct: true,
        text: 'A technology that creates a secure connection over a less secure network',
        audioSrc: '',
      },
      {
        challengeId: 833,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 833,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 834 options
      {
        challengeId: 834,
        imageSrc: '',
        correct: true,
        text: 'The practice of dividing a network into multiple segments to improve performance and security',
        audioSrc: '',
      },
      {
        challengeId: 834,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 834,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 835 options
      {
        challengeId: 835,
        imageSrc: '',
        correct: true,
        text: 'A technique for distributing network or application traffic across multiple servers to ensure no single server becomes overwhelmed',
        audioSrc: '',
      },
      {
        challengeId: 835,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 835,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 836 options
      {
        challengeId: 836,
        imageSrc: '',
        correct: true,
        text: 'Measures and practices designed to protect the endpoints of a network',
        audioSrc: '',
      },
      {
        challengeId: 836,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 836,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 837 options
      {
        challengeId: 837,
        imageSrc: '',
        correct: true,
        text: 'A server that acts as an intermediary for requests from clients seeking resources from other servers',
        audioSrc: '',
      },
      {
        challengeId: 837,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 837,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 838 options
      {
        challengeId: 838,
        imageSrc: '',
        correct: true,
        text: 'The practice of monitoring and analyzing network traffic to detect and respond to threats',
        audioSrc: '',
      },
      {
        challengeId: 838,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 838,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 839 options
      {
        challengeId: 839,
        imageSrc: '',
        correct: true,
        text: 'A system that provides real-time analysis of security alerts generated by various hardware and software',
        audioSrc: '',
      },
      {
        challengeId: 839,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 839,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 840 options
      {
        challengeId: 840,
        imageSrc: '',
        correct: true,
        text: 'The process of analyzing network traffic to identify patterns and anomalies',
        audioSrc: '',
      },
      {
        challengeId: 840,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 840,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 85
    await db.insert(schema.challenges).values([
      {
        id: 841,
        lessonId: 85,
        type: 'ASSIST',
        order: 1,
        question: 'What is “data breach”? How can it be prevented?',
      },
      {
        id: 842,
        lessonId: 85,
        type: 'ASSIST',
        order: 2,
        question: 'Define “vulnerability assessment”.',
      },
      {
        id: 843,
        lessonId: 85,
        type: 'ASSIST',
        order: 3,
        question: 'Explain the term “penetration testing”.',
      },
      {
        id: 844,
        lessonId: 85,
        type: 'ASSIST',
        order: 4,
        question: 'What is “social engineering”? Give an example.',
      },
      {
        id: 845,
        lessonId: 85,
        type: 'SELECT',
        order: 5,
        question: 'What is “phishing”?',
      },
      {
        id: 846,
        lessonId: 85,
        type: 'SELECT',
        order: 6,
        question: 'Define “spoofing”.',
      },
      {
        id: 847,
        lessonId: 85,
        type: 'SELECT',
        order: 7,
        question: 'What is “man-in-the-middle attack”?',
      },
      {
        id: 848,
        lessonId: 85,
        type: 'SELECT',
        order: 8,
        question: 'What is “SQL injection”? How does it work?',
      },
      {
        id: 849,
        lessonId: 85,
        type: 'ASSIST',
        order: 9,
        question: 'Explain “cross-site scripting” (XSS).',
      },
      {
        id: 850,
        lessonId: 85,
        type: 'ASSIST',
        order: 10,
        question: 'What is “denial of service” (DoS)?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 841 options
      {
        challengeId: 841,
        imageSrc: '',
        correct: true,
        text: 'An incident where unauthorized access is gained to confidential data',
        audioSrc: '',
      },
      {
        challengeId: 841,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 841,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 842 options
      {
        challengeId: 842,
        imageSrc: '',
        correct: true,
        text: 'The process of identifying and evaluating security weaknesses in a system',
        audioSrc: '',
      },
      {
        challengeId: 842,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 842,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 843 options
      {
        challengeId: 843,
        imageSrc: '',
        correct: true,
        text: 'A security measure that involves simulating an attack to identify vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 843,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 843,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 844 options
      {
        challengeId: 844,
        imageSrc: '',
        correct: true,
        text: 'A tactic used by attackers to manipulate individuals into divulging confidential information',
        audioSrc: '',
      },
      {
        challengeId: 844,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 844,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 845 options
      {
        challengeId: 845,
        imageSrc: '',
        correct: true,
        text: 'A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity',
        audioSrc: '',
      },
      {
        challengeId: 845,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 845,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 846 options
      {
        challengeId: 846,
        imageSrc: '',
        correct: true,
        text: 'The act of falsifying information to gain unauthorized access to systems',
        audioSrc: '',
      },
      {
        challengeId: 846,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 846,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 847 options
      {
        challengeId: 847,
        imageSrc: '',
        correct: true,
        text: 'An attack where the attacker intercepts and potentially alters communication between two parties',
        audioSrc: '',
      },
      {
        challengeId: 847,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 847,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 848 options
      {
        challengeId: 848,
        imageSrc: '',
        correct: true,
        text: 'An attack that exploits vulnerabilities in an application to execute malicious SQL statements',
        audioSrc: '',
      },
      {
        challengeId: 848,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 848,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 849 options
      {
        challengeId: 849,
        imageSrc: '',
        correct: true,
        text: 'A security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users',
        audioSrc: '',
      },
      {
        challengeId: 849,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 849,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 850 options
      {
        challengeId: 850,
        imageSrc: '',
        correct: true,
        text: 'An attack that aims to make a network service unavailable by overwhelming it with traffic',
        audioSrc: '',
      },
      {
        challengeId: 850,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data',
        audioSrc: '',
      },
      {
        challengeId: 850,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 86
    await db.insert(schema.challenges).values([
      {
        id: 851,
        lessonId: 86,
        type: 'SELECT',
        order: 1,
        question: 'What is “encryption”?',
      },
      {
        id: 852,
        lessonId: 86,
        type: 'ASSIST',
        order: 2,
        question: 'Explain “asymmetric encryption”.',
      },
      {
        id: 853,
        lessonId: 86,
        type: 'ASSIST',
        order: 3,
        question: 'What is “symmetric encryption”?',
      },
      {
        id: 854,
        lessonId: 86,
        type: 'SELECT',
        order: 4,
        question: 'Define “public key encryption”.',
      },
      {
        id: 855,
        lessonId: 86,
        type: 'ASSIST',
        order: 5,
        question: 'What is “private key” in encryption?',
      },
      {
        id: 856,
        lessonId: 86,
        type: 'ASSIST',
        order: 6,
        question: 'Explain the concept of “key exchange”.',
      },
      {
        id: 857,
        lessonId: 86,
        type: 'SELECT',
        order: 7,
        question: 'What is a “digital certificate”?',
      },
      {
        id: 858,
        lessonId: 86,
        type: 'SELECT',
        order: 8,
        question: 'What is “hash function”?',
      },
      {
        id: 859,
        lessonId: 86,
        type: 'ASSIST',
        order: 9,
        question: 'Explain the concept of “message authentication code” (MAC).',
      },
      {
        id: 860,
        lessonId: 86,
        type: 'ASSIST',
        order: 10,
        question: 'What is “secure socket layer” (SSL)?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 851 options
      {
        challengeId: 851,
        imageSrc: '',
        correct: true,
        text: 'A method of converting plaintext into a secure format to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 851,
        imageSrc: '',
        correct: false,
        text: 'A method for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 851,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 852 options
      {
        challengeId: 852,
        imageSrc: '',
        correct: true,
        text: 'Encryption that uses two different keys: one for encryption and another for decryption',
        audioSrc: '',
      },
      {
        challengeId: 852,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 852,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 853 options
      {
        challengeId: 853,
        imageSrc: '',
        correct: true,
        text: 'Encryption that uses the same key for both encryption and decryption',
        audioSrc: '',
      },
      {
        challengeId: 853,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 853,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 854 options
      {
        challengeId: 854,
        imageSrc: '',
        correct: true,
        text: 'A method of encryption where the same key is used to encrypt and decrypt data',
        audioSrc: '',
      },
      {
        challengeId: 854,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 854,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 855 options
      {
        challengeId: 855,
        imageSrc: '',
        correct: true,
        text: 'A key used in encryption that must be kept confidential to ensure security',
        audioSrc: '',
      },
      {
        challengeId: 855,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 855,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 856 options
      {
        challengeId: 856,
        imageSrc: '',
        correct: true,
        text: 'The process of exchanging encryption keys between parties to establish a secure communication channel',
        audioSrc: '',
      },
      {
        challengeId: 856,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 856,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 857 options
      {
        challengeId: 857,
        imageSrc: '',
        correct: true,
        text: 'A digital document used to prove the ownership of a public key',
        audioSrc: '',
      },
      {
        challengeId: 857,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 857,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 858 options
      {
        challengeId: 858,
        imageSrc: '',
        correct: true,
        text: 'A function that converts input data into a fixed-size string of characters',
        audioSrc: '',
      },
      {
        challengeId: 858,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 858,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 859 options
      {
        challengeId: 859,
        imageSrc: '',
        correct: true,
        text: 'A code used to ensure data integrity and authentication of messages',
        audioSrc: '',
      },
      {
        challengeId: 859,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 859,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 860 options
      {
        challengeId: 860,
        imageSrc: '',
        correct: true,
        text: 'A security protocol that provides a secure channel over an insecure network',
        audioSrc: '',
      },
      {
        challengeId: 860,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 860,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 87
    await db.insert(schema.challenges).values([
      {
        id: 861,
        lessonId: 87,
        type: 'SELECT',
        order: 1,
        question: 'What is a “firewall”?',
      },
      {
        id: 862,
        lessonId: 87,
        type: 'ASSIST',
        order: 2,
        question: 'Explain “intrusion detection system” (IDS).',
      },
      {
        id: 863,
        lessonId: 87,
        type: 'ASSIST',
        order: 3,
        question: 'What is “intrusion prevention system” (IPS)?',
      },
      {
        id: 864,
        lessonId: 87,
        type: 'SELECT',
        order: 4,
        question: 'Define “network segmentation”.',
      },
      {
        id: 865,
        lessonId: 87,
        type: 'ASSIST',
        order: 5,
        question: 'What is a “virtual private network” (VPN)?',
      },
      {
        id: 866,
        lessonId: 87,
        type: 'ASSIST',
        order: 6,
        question: 'Explain “network address translation” (NAT).',
      },
      {
        id: 867,
        lessonId: 87,
        type: 'SELECT',
        order: 7,
        question: 'What is “demilitarized zone” (DMZ)?',
      },
      {
        id: 868,
        lessonId: 87,
        type: 'SELECT',
        order: 8,
        question: 'What is “access control list” (ACL)?',
      },
      {
        id: 869,
        lessonId: 87,
        type: 'ASSIST',
        order: 9,
        question: 'Explain “two-factor authentication” (2FA).',
      },
      {
        id: 870,
        lessonId: 87,
        type: 'ASSIST',
        order: 10,
        question: 'What is “multi-factor authentication” (MFA)?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 861 options
      {
        challengeId: 861,
        imageSrc: '',
        correct: true,
        text: 'A security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules',
        audioSrc: '',
      },
      {
        challengeId: 861,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 861,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 862 options
      {
        challengeId: 862,
        imageSrc: '',
        correct: true,
        text: 'A system that monitors network traffic for suspicious activity and provides alerts',
        audioSrc: '',
      },
      {
        challengeId: 862,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 862,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 863 options
      {
        challengeId: 863,
        imageSrc: '',
        correct: true,
        text: 'A system that monitors and blocks malicious activities in a network',
        audioSrc: '',
      },
      {
        challengeId: 863,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 863,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 864 options
      {
        challengeId: 864,
        imageSrc: '',
        correct: true,
        text: 'The practice of dividing a network into smaller segments to improve security and performance',
        audioSrc: '',
      },
      {
        challengeId: 864,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 864,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 865 options
      {
        challengeId: 865,
        imageSrc: '',
        correct: true,
        text: 'A technology that creates a secure, encrypted connection over a less secure network',
        audioSrc: '',
      },
      {
        challengeId: 865,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 865,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 866 options
      {
        challengeId: 866,
        imageSrc: '',
        correct: true,
        text: 'A technique used to modify network addresses to hide internal IP addresses from external networks',
        audioSrc: '',
      },
      {
        challengeId: 866,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 866,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 867 options
      {
        challengeId: 867,
        imageSrc: '',
        correct: true,
        text: 'A network segment that separates an internal network from an external network',
        audioSrc: '',
      },
      {
        challengeId: 867,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 867,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 868 options
      {
        challengeId: 868,
        imageSrc: '',
        correct: true,
        text: 'A set of rules that controls incoming and outgoing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 868,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 868,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 869 options
      {
        challengeId: 869,
        imageSrc: '',
        correct: true,
        text: 'A security process where a user must provide two forms of identification before gaining access',
        audioSrc: '',
      },
      {
        challengeId: 869,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 869,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 870 options
      {
        challengeId: 870,
        imageSrc: '',
        correct: true,
        text: 'A security process where a user must provide multiple forms of authentication to gain access',
        audioSrc: '',
      },
      {
        challengeId: 870,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 870,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 88
    await db.insert(schema.challenges).values([
      {
        id: 871,
        lessonId: 88,
        type: 'SELECT',
        order: 1,
        question: 'What is “security policy”?',
      },
      {
        id: 872,
        lessonId: 88,
        type: 'ASSIST',
        order: 2,
        question: 'Explain “incident response plan”.',
      },
      {
        id: 873,
        lessonId: 88,
        type: 'ASSIST',
        order: 3,
        question: 'What is “risk management”?',
      },
      {
        id: 874,
        lessonId: 88,
        type: 'SELECT',
        order: 4,
        question: 'Define “security awareness training”.',
      },
      {
        id: 875,
        lessonId: 88,
        type: 'ASSIST',
        order: 5,
        question: 'What is “vulnerability management”?',
      },
      {
        id: 876,
        lessonId: 88,
        type: 'ASSIST',
        order: 6,
        question: 'Explain “security audit”.',
      },
      {
        id: 877,
        lessonId: 88,
        type: 'SELECT',
        order: 7,
        question: 'What is “security baseline”? ',
      },
      {
        id: 878,
        lessonId: 88,
        type: 'SELECT',
        order: 8,
        question: 'What is “security compliance”?',
      },
      {
        id: 879,
        lessonId: 88,
        type: 'ASSIST',
        order: 9,
        question: 'Explain “penetration testing” and its purpose.',
      },
      {
        id: 880,
        lessonId: 88,
        type: 'ASSIST',
        order: 10,
        question: 'What is “data classification”?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 871 options
      {
        challengeId: 871,
        imageSrc: '',
        correct: true,
        text: 'A set of rules and practices that define how an organization manages its security policies',
        audioSrc: '',
      },
      {
        challengeId: 871,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 871,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 872 options
      {
        challengeId: 872,
        imageSrc: '',
        correct: true,
        text: 'A plan that outlines how an organization will respond to and recover from security incidents',
        audioSrc: '',
      },
      {
        challengeId: 872,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 872,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 873 options
      {
        challengeId: 873,
        imageSrc: '',
        correct: true,
        text: 'The process of identifying, assessing, and prioritizing risks followed by coordinated efforts to minimize or control the risk',
        audioSrc: '',
      },
      {
        challengeId: 873,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 873,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 874 options
      {
        challengeId: 874,
        imageSrc: '',
        correct: true,
        text: 'Training that educates employees about the organization’s security policies and practices',
        audioSrc: '',
      },
      {
        challengeId: 874,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 874,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 875 options
      {
        challengeId: 875,
        imageSrc: '',
        correct: true,
        text: 'The process of identifying and addressing vulnerabilities in a system to improve security',
        audioSrc: '',
      },
      {
        challengeId: 875,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 875,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 876 options
      {
        challengeId: 876,
        imageSrc: '',
        correct: true,
        text: 'An assessment of a system or network’s security controls to ensure they are functioning as intended',
        audioSrc: '',
      },
      {
        challengeId: 876,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 876,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 877 options
      {
        challengeId: 877,
        imageSrc: '',
        correct: true,
        text: 'The minimum level of security controls required for a system to be considered secure',
        audioSrc: '',
      },
      {
        challengeId: 877,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 877,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 878 options
      {
        challengeId: 878,
        imageSrc: '',
        correct: true,
        text: 'The adherence to regulatory requirements and industry standards related to security',
        audioSrc: '',
      },
      {
        challengeId: 878,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 878,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 879 options
      {
        challengeId: 879,
        imageSrc: '',
        correct: true,
        text: 'A testing process to identify security weaknesses in a system by simulating attacks',
        audioSrc: '',
      },
      {
        challengeId: 879,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 879,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 880 options
      {
        challengeId: 880,
        imageSrc: '',
        correct: true,
        text: 'The process of organizing data into categories based on its sensitivity and the required security measures',
        audioSrc: '',
      },
      {
        challengeId: 880,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 880,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 89
    await db.insert(schema.challenges).values([
      {
        id: 881,
        lessonId: 89,
        type: 'SELECT',
        order: 1,
        question: 'What is “penetration testing”?',
      },
      {
        id: 882,
        lessonId: 89,
        type: 'ASSIST',
        order: 2,
        question: 'Explain “phishing attacks”.',
      },
      {
        id: 883,
        lessonId: 89,
        type: 'ASSIST',
        order: 3,
        question: 'What is “social engineering”? ',
      },
      {
        id: 884,
        lessonId: 89,
        type: 'SELECT',
        order: 4,
        question: 'Define “malware” and its types.',
      },
      {
        id: 885,
        lessonId: 89,
        type: 'ASSIST',
        order: 5,
        question: 'What is “ransomware”? ',
      },
      {
        id: 886,
        lessonId: 89,
        type: 'ASSIST',
        order: 6,
        question: 'Explain “spyware” and its impact.',
      },
      {
        id: 887,
        lessonId: 89,
        type: 'SELECT',
        order: 7,
        question: 'What is “worm” in cybersecurity?',
      },
      {
        id: 888,
        lessonId: 89,
        type: 'SELECT',
        order: 8,
        question: 'What is “trojan horse”?',
      },
      {
        id: 889,
        lessonId: 89,
        type: 'ASSIST',
        order: 9,
        question: 'Explain “adware” and its function.',
      },
      {
        id: 890,
        lessonId: 89,
        type: 'ASSIST',
        order: 10,
        question: 'What is “botnet”? ',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 881 options
      {
        challengeId: 881,
        imageSrc: '',
        correct: true,
        text: 'A simulated attack on a system to identify vulnerabilities and weaknesses',
        audioSrc: '',
      },
      {
        challengeId: 881,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 881,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 882 options
      {
        challengeId: 882,
        imageSrc: '',
        correct: true,
        text: 'A type of cyber attack that tricks individuals into providing sensitive information through deceptive messages',
        audioSrc: '',
      },
      {
        challengeId: 882,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 882,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 883 options
      {
        challengeId: 883,
        imageSrc: '',
        correct: true,
        text: 'The use of deception to manipulate individuals into divulging confidential or personal information',
        audioSrc: '',
      },
      {
        challengeId: 883,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 883,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 884 options
      {
        challengeId: 884,
        imageSrc: '',
        correct: true,
        text: 'Software designed to disrupt, damage, or gain unauthorized access to systems',
        audioSrc: '',
      },
      {
        challengeId: 884,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 884,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 885 options
      {
        challengeId: 885,
        imageSrc: '',
        correct: true,
        text: 'Malware that encrypts the victim’s files and demands payment for decryption',
        audioSrc: '',
      },
      {
        challengeId: 885,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 885,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 886 options
      {
        challengeId: 886,
        imageSrc: '',
        correct: true,
        text: 'Malware that secretly monitors and collects user data without consent',
        audioSrc: '',
      },
      {
        challengeId: 886,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 886,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 887 options
      {
        challengeId: 887,
        imageSrc: '',
        correct: true,
        text: 'A type of malware that replicates itself to spread to other systems',
        audioSrc: '',
      },
      {
        challengeId: 887,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 887,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 888 options
      {
        challengeId: 888,
        imageSrc: '',
        correct: true,
        text: 'Malware disguised as legitimate software that causes harm to the user’s system',
        audioSrc: '',
      },
      {
        challengeId: 888,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 888,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 889 options
      {
        challengeId: 889,
        imageSrc: '',
        correct: true,
        text: 'Adware that displays unwanted advertisements on a user’s system',
        audioSrc: '',
      },
      {
        challengeId: 889,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 889,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 890 options
      {
        challengeId: 890,
        imageSrc: '',
        correct: true,
        text: 'A network of compromised systems used to perform coordinated cyber attacks or other malicious activities',
        audioSrc: '',
      },
      {
        challengeId: 890,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 890,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },
    ]);

    // Lesson 90
    await db.insert(schema.challenges).values([
      {
        id: 891,
        lessonId: 90,
        type: 'SELECT',
        order: 1,
        question: 'What is “public key infrastructure” (PKI)?',
      },
      {
        id: 892,
        lessonId: 90,
        type: 'ASSIST',
        order: 2,
        question: 'Explain “digital certificate”.',
      },
      {
        id: 893,
        lessonId: 90,
        type: 'ASSIST',
        order: 3,
        question: 'What is “cryptographic key management”? ',
      },
      {
        id: 894,
        lessonId: 90,
        type: 'SELECT',
        order: 4,
        question: 'Define “encryption algorithms” and their types.',
      },
      {
        id: 895,
        lessonId: 90,
        type: 'ASSIST',
        order: 5,
        question: 'What is “hashing” in cybersecurity?',
      },
      {
        id: 896,
        lessonId: 90,
        type: 'ASSIST',
        order: 6,
        question: 'Explain “digital signatures” and their purpose.',
      },
      {
        id: 897,
        lessonId: 90,
        type: 'SELECT',
        order: 7,
        question: 'What is “certificate authority” (CA)?',
      },
      {
        id: 898,
        lessonId: 90,
        type: 'SELECT',
        order: 8,
        question: 'What is “key exchange” and its importance?',
      },
      {
        id: 899,
        lessonId: 90,
        type: 'ASSIST',
        order: 9,
        question:
          'Explain “cryptographic protocols” and their use in securing communications.',
      },
      {
        id: 900,
        lessonId: 90,
        type: 'ASSIST',
        order: 10,
        question: 'What is “secure socket layer” (SSL) and its role?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 891 options
      {
        challengeId: 891,
        imageSrc: '',
        correct: true,
        text: 'A framework that manages digital certificates and public-key encryption',
        audioSrc: '',
      },
      {
        challengeId: 891,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 891,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 892 options
      {
        challengeId: 892,
        imageSrc: '',
        correct: true,
        text: 'A digital document that verifies the identity of an individual or organization',
        audioSrc: '',
      },
      {
        challengeId: 892,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 892,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 893 options
      {
        challengeId: 893,
        imageSrc: '',
        correct: true,
        text: 'The process of managing and protecting cryptographic keys used for encryption and decryption',
        audioSrc: '',
      },
      {
        challengeId: 893,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 893,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 894 options
      {
        challengeId: 894,
        imageSrc: '',
        correct: true,
        text: 'Techniques used to secure data by encoding it in such a way that only authorized parties can decode it',
        audioSrc: '',
      },
      {
        challengeId: 894,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 894,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 895 options
      {
        challengeId: 895,
        imageSrc: '',
        correct: true,
        text: 'The process of converting data into a fixed-size string of characters, which is typically a hash value',
        audioSrc: '',
      },
      {
        challengeId: 895,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 895,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 896 options
      {
        challengeId: 896,
        imageSrc: '',
        correct: true,
        text: 'A mathematical scheme for verifying the authenticity and integrity of a digital message or document',
        audioSrc: '',
      },
      {
        challengeId: 896,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 896,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 897 options
      {
        challengeId: 897,
        imageSrc: '',
        correct: true,
        text: 'An entity that issues digital certificates and ensures their validity',
        audioSrc: '',
      },
      {
        challengeId: 897,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 897,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 898 options
      {
        challengeId: 898,
        imageSrc: '',
        correct: true,
        text: 'The process of securely exchanging cryptographic keys between parties',
        audioSrc: '',
      },
      {
        challengeId: 898,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 898,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 899 options
      {
        challengeId: 899,
        imageSrc: '',
        correct: true,
        text: 'Protocols used to secure data transmission over networks by ensuring confidentiality and integrity',
        audioSrc: '',
      },
      {
        challengeId: 899,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 899,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 900 options
      {
        challengeId: 900,
        imageSrc: '',
        correct: true,
        text: 'A protocol used to establish a secure and encrypted connection over a network',
        audioSrc: '',
      },
      {
        challengeId: 900,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 900,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },
    ]);

    // Lesson 91
    await db.insert(schema.challenges).values([
      {
        id: 901,
        lessonId: 91,
        type: 'SELECT',
        order: 1,
        question: 'What is “network segmentation”?',
      },
      {
        id: 902,
        lessonId: 91,
        type: 'ASSIST',
        order: 2,
        question: 'Explain “firewall” and its role in network security.',
      },
      {
        id: 903,
        lessonId: 91,
        type: 'ASSIST',
        order: 3,
        question: 'What is “intrusion detection system” (IDS)? ',
      },
      {
        id: 904,
        lessonId: 91,
        type: 'SELECT',
        order: 4,
        question: 'Define “virtual private network” (VPN) and its uses.',
      },
      {
        id: 905,
        lessonId: 91,
        type: 'ASSIST',
        order: 5,
        question: 'What is “network access control” (NAC)?',
      },
      {
        id: 906,
        lessonId: 91,
        type: 'ASSIST',
        order: 6,
        question:
          'Explain “network address translation” (NAT) and its function.',
      },
      {
        id: 907,
        lessonId: 91,
        type: 'SELECT',
        order: 7,
        question: 'What is “port forwarding”?',
      },
      {
        id: 908,
        lessonId: 91,
        type: 'SELECT',
        order: 8,
        question: 'What is “demilitarized zone” (DMZ) in networking?',
      },
      {
        id: 909,
        lessonId: 91,
        type: 'ASSIST',
        order: 9,
        question: 'Explain “load balancing” and its importance.',
      },
      {
        id: 910,
        lessonId: 91,
        type: 'ASSIST',
        order: 10,
        question: 'What is “network redundancy”? ',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 901 options
      {
        challengeId: 901,
        imageSrc: '',
        correct: true,
        text: 'The practice of dividing a network into multiple segments to improve security and performance',
        audioSrc: '',
      },
      {
        challengeId: 901,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 901,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 902 options
      {
        challengeId: 902,
        imageSrc: '',
        correct: true,
        text: 'A security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules',
        audioSrc: '',
      },
      {
        challengeId: 902,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 902,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 903 options
      {
        challengeId: 903,
        imageSrc: '',
        correct: true,
        text: 'A system that monitors network traffic for suspicious activity and alerts administrators',
        audioSrc: '',
      },
      {
        challengeId: 903,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 903,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 904 options
      {
        challengeId: 904,
        imageSrc: '',
        correct: true,
        text: 'A network technology that creates a secure connection over a less secure network, such as the Internet',
        audioSrc: '',
      },
      {
        challengeId: 904,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 904,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 905 options
      {
        challengeId: 905,
        imageSrc: '',
        correct: true,
        text: 'A system that enforces policies on who can access network resources and under what conditions',
        audioSrc: '',
      },
      {
        challengeId: 905,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 905,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 906 options
      {
        challengeId: 906,
        imageSrc: '',
        correct: true,
        text: 'A method for modifying IP address information in network packets while they are being routed',
        audioSrc: '',
      },
      {
        challengeId: 906,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 906,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 907 options
      {
        challengeId: 907,
        imageSrc: '',
        correct: true,
        text: 'The process of redirecting network traffic from one IP address and port to another',
        audioSrc: '',
      },
      {
        challengeId: 907,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 907,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 908 options
      {
        challengeId: 908,
        imageSrc: '',
        correct: true,
        text: 'A physical or logical subnetwork that separates an internal network from an external network, such as the Internet',
        audioSrc: '',
      },
      {
        challengeId: 908,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 908,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 909 options
      {
        challengeId: 909,
        imageSrc: '',
        correct: true,
        text: 'The process of distributing network traffic across multiple servers to ensure no single server becomes overwhelmed',
        audioSrc: '',
      },
      {
        challengeId: 909,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 909,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 910 options
      {
        challengeId: 910,
        imageSrc: '',
        correct: true,
        text: 'The practice of duplicating network resources to ensure continuous operation in the event of a failure',
        audioSrc: '',
      },
      {
        challengeId: 910,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 910,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },
    ]);

    // Lesson 92
    await db.insert(schema.challenges).values([
      {
        id: 911,
        lessonId: 92,
        type: 'SELECT',
        order: 1,
        question: 'What is “multi-factor authentication” (MFA)?',
      },
      {
        id: 912,
        lessonId: 92,
        type: 'ASSIST',
        order: 2,
        question: 'Explain “single sign-on” (SSO).',
      },
      {
        id: 913,
        lessonId: 92,
        type: 'ASSIST',
        order: 3,
        question: 'What is “two-factor authentication” (2FA)? ',
      },
      {
        id: 914,
        lessonId: 92,
        type: 'SELECT',
        order: 4,
        question: 'Define “biometric authentication” and its types.',
      },
      {
        id: 915,
        lessonId: 92,
        type: 'ASSIST',
        order: 5,
        question: 'What is “one-time password” (OTP)?',
      },
      {
        id: 916,
        lessonId: 92,
        type: 'ASSIST',
        order: 6,
        question: 'Explain “authentication tokens” and their use.',
      },
      {
        id: 917,
        lessonId: 92,
        type: 'SELECT',
        order: 7,
        question: 'What is “smart card” authentication?',
      },
      {
        id: 918,
        lessonId: 92,
        type: 'SELECT',
        order: 8,
        question: 'What is “security question” authentication?',
      },
      {
        id: 919,
        lessonId: 92,
        type: 'ASSIST',
        order: 9,
        question: 'Explain “password managers” and their benefits.',
      },
      {
        id: 920,
        lessonId: 92,
        type: 'ASSIST',
        order: 10,
        question: 'What is “identity management” in cybersecurity? ',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 911 options
      {
        challengeId: 911,
        imageSrc: '',
        correct: true,
        text: 'A security mechanism that requires more than one form of verification to access a system',
        audioSrc: '',
      },
      {
        challengeId: 911,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 911,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 912 options
      {
        challengeId: 912,
        imageSrc: '',
        correct: true,
        text: 'A method that allows users to access multiple applications with one set of credentials',
        audioSrc: '',
      },
      {
        challengeId: 912,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 912,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 913 options
      {
        challengeId: 913,
        imageSrc: '',
        correct: true,
        text: 'A method that requires two forms of identification from the user, such as a password and a code sent to their phone',
        audioSrc: '',
      },
      {
        challengeId: 913,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 913,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 914 options
      {
        challengeId: 914,
        imageSrc: '',
        correct: true,
        text: 'A method of verifying identity using physical characteristics, such as fingerprints or facial recognition',
        audioSrc: '',
      },
      {
        challengeId: 914,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 914,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 915 options
      {
        challengeId: 915,
        imageSrc: '',
        correct: true,
        text: 'A temporary password that is valid for only one login session or transaction',
        audioSrc: '',
      },
      {
        challengeId: 915,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 915,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 916 options
      {
        challengeId: 916,
        imageSrc: '',
        correct: true,
        text: 'A physical or digital item used to authenticate a user’s identity',
        audioSrc: '',
      },
      {
        challengeId: 916,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 916,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 917 options
      {
        challengeId: 917,
        imageSrc: '',
        correct: true,
        text: 'A card with an embedded microprocessor used to authenticate a user’s identity',
        audioSrc: '',
      },
      {
        challengeId: 917,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 917,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 918 options
      {
        challengeId: 918,
        imageSrc: '',
        correct: true,
        text: 'A method of authentication that involves answering personal questions',
        audioSrc: '',
      },
      {
        challengeId: 918,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 918,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 919 options
      {
        challengeId: 919,
        imageSrc: '',
        correct: true,
        text: 'Software that securely stores and manages passwords for multiple accounts',
        audioSrc: '',
      },
      {
        challengeId: 919,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 919,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 920 options
      {
        challengeId: 920,
        imageSrc: '',
        correct: true,
        text: 'The process of managing user identities and their access to various systems and applications',
        audioSrc: '',
      },
      {
        challengeId: 920,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 920,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },
    ]);

    // Lesson 93
    await db.insert(schema.challenges).values([
      {
        id: 921,
        lessonId: 93,
        type: 'SELECT',
        order: 1,
        question: 'What is “penetration testing”?',
      },
      {
        id: 922,
        lessonId: 93,
        type: 'ASSIST',
        order: 2,
        question: 'Explain the purpose of “vulnerability scanning”.',
      },
      {
        id: 923,
        lessonId: 93,
        type: 'ASSIST',
        order: 3,
        question: 'What is “security audit” and its significance?',
      },
      {
        id: 924,
        lessonId: 93,
        type: 'SELECT',
        order: 4,
        question: 'Define “risk assessment” and its steps.',
      },
      {
        id: 925,
        lessonId: 93,
        type: 'ASSIST',
        order: 5,
        question: 'What is “incident response”?',
      },
      {
        id: 926,
        lessonId: 93,
        type: 'ASSIST',
        order: 6,
        question: 'Explain “data loss prevention” (DLP) and its techniques.',
      },
      {
        id: 927,
        lessonId: 93,
        type: 'SELECT',
        order: 7,
        question: 'What is “cyber threat intelligence”?',
      },
      {
        id: 928,
        lessonId: 93,
        type: 'SELECT',
        order: 8,
        question: 'What is “security information and event management” (SIEM)?',
      },
      {
        id: 929,
        lessonId: 93,
        type: 'ASSIST',
        order: 9,
        question: 'Explain “forensic analysis” in cybersecurity.',
      },
      {
        id: 930,
        lessonId: 93,
        type: 'ASSIST',
        order: 10,
        question: 'What is “security policy” and its importance?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 921 options

      {
        challengeId: 921,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 921,
        imageSrc: '',
        correct: true,
        text: 'A simulated cyber attack to test the security of a system',
        audioSrc: '',
      },
      {
        challengeId: 921,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 922 options

      {
        challengeId: 922,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 922,
        imageSrc: '',
        correct: true,
        text: 'A process of identifying and assessing vulnerabilities in a system',
        audioSrc: '',
      },
      {
        challengeId: 922,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 923 options

      {
        challengeId: 923,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 923,
        imageSrc: '',
        correct: true,
        text: 'A review and evaluation of an organization’s security policies and practices',
        audioSrc: '',
      },
      {
        challengeId: 923,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 924 options

      {
        challengeId: 924,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 924,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 924,
        imageSrc: '',
        correct: true,
        text: 'The process of identifying and assessing potential risks to an organization’s assets',
        audioSrc: '',
      },

      // Challenge 925 options

      {
        challengeId: 925,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 925,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 925,
        imageSrc: '',
        correct: true,
        text: 'The process of managing and responding to security incidents and breaches',
        audioSrc: '',
      },

      // Challenge 926 options
      {
        challengeId: 926,
        imageSrc: '',
        correct: true,
        text: 'Strategies and tools used to prevent data from being lost or stolen',
        audioSrc: '',
      },
      {
        challengeId: 926,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 926,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 927 options

      {
        challengeId: 927,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 927,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 927,
        imageSrc: '',
        correct: true,
        text: 'The collection and analysis of information about potential and existing cyber threats',
        audioSrc: '',
      },

      // Challenge 928 options
      {
        challengeId: 928,
        imageSrc: '',
        correct: true,
        text: 'A system that provides real-time analysis and monitoring of security events and incidents',
        audioSrc: '',
      },
      {
        challengeId: 928,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 928,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 929 options
      {
        challengeId: 929,
        imageSrc: '',
        correct: true,
        text: 'The process of analyzing and investigating cyber incidents to understand their cause and impact',
        audioSrc: '',
      },
      {
        challengeId: 929,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 929,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 930 options

      {
        challengeId: 930,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 930,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 930,
        imageSrc: '',
        correct: true,
        text: 'A set of rules and practices that define how an organization protects its information and technology assets',
        audioSrc: '',
      },
    ]);

    // Lesson 94
    await db.insert(schema.challenges).values([
      {
        id: 931,
        lessonId: 94,
        type: 'SELECT',
        order: 1,
        question: 'What is “firewall” and its function?',
      },
      {
        id: 932,
        lessonId: 94,
        type: 'ASSIST',
        order: 2,
        question: 'Explain “intrusion detection system” (IDS).',
      },
      {
        id: 933,
        lessonId: 94,
        type: 'ASSIST',
        order: 3,
        question: 'What is “network segmentation”?',
      },
      {
        id: 934,
        lessonId: 94,
        type: 'SELECT',
        order: 4,
        question: 'Define “virtual private network” (VPN) and its benefits.',
      },
      {
        id: 935,
        lessonId: 94,
        type: 'ASSIST',
        order: 5,
        question: 'What is “endpoint protection”?',
      },
      {
        id: 936,
        lessonId: 94,
        type: 'ASSIST',
        order: 6,
        question: 'Explain “security operations center” (SOC) and its role.',
      },
      {
        id: 937,
        lessonId: 94,
        type: 'SELECT',
        order: 7,
        question: 'What is “data encryption”?',
      },
      {
        id: 938,
        lessonId: 94,
        type: 'SELECT',
        order: 8,
        question: 'What is “security incident management”?',
      },
      {
        id: 939,
        lessonId: 94,
        type: 'ASSIST',
        order: 9,
        question: 'Explain “security patch management” and its importance.',
      },
      {
        id: 940,
        lessonId: 94,
        type: 'ASSIST',
        order: 10,
        question: 'What is “security policy” and its purpose?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 931 options

      {
        challengeId: 931,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 931,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 931,
        imageSrc: '',
        correct: true,
        text: 'A network security device that monitors and controls incoming and outgoing network traffic based on security rules',
        audioSrc: '',
      },

      // Challenge 932 options

      {
        challengeId: 932,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 932,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 932,
        imageSrc: '',
        correct: true,
        text: 'A system that monitors and analyzes network traffic to detect and respond to potential threats',
        audioSrc: '',
      },

      // Challenge 933 options

      {
        challengeId: 933,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 933,
        imageSrc: '',
        correct: true,
        text: 'The practice of dividing a network into multiple segments to improve security and performance',
        audioSrc: '',
      },
      {
        challengeId: 933,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 934 options
      {
        challengeId: 934,
        imageSrc: '',
        correct: true,
        text: 'A technology that creates a secure, encrypted connection over a less secure network',
        audioSrc: '',
      },
      {
        challengeId: 934,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 934,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 935 options

      {
        challengeId: 935,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 935,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 935,
        imageSrc: '',
        correct: true,
        text: 'Software designed to protect endpoints such as computers and mobile devices from threats',
        audioSrc: '',
      },

      // Challenge 936 options
      {
        challengeId: 936,
        imageSrc: '',
        correct: true,
        text: 'A dedicated team or facility responsible for monitoring and managing an organization’s security posture',
        audioSrc: '',
      },
      {
        challengeId: 936,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 936,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 937 options
      {
        challengeId: 937,
        imageSrc: '',
        correct: true,
        text: 'The process of converting data into a secure format to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 937,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 937,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 938 options

      {
        challengeId: 938,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 938,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 938,
        imageSrc: '',
        correct: true,
        text: 'The process of handling and managing security incidents to minimize damage and recover from breaches',
        audioSrc: '',
      },

      // Challenge 939 options
      {
        challengeId: 939,
        imageSrc: '',
        correct: true,
        text: 'The practice of regularly updating and applying security patches to fix vulnerabilities in software',
        audioSrc: '',
      },
      {
        challengeId: 939,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 939,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 940 options
      {
        challengeId: 940,
        imageSrc: '',
        correct: true,
        text: 'A set of guidelines and rules for managing and protecting information and technology assets',
        audioSrc: '',
      },
      {
        challengeId: 940,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 940,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },
    ]);

    // Lesson 95
    await db.insert(schema.challenges).values([
      {
        id: 941,
        lessonId: 95,
        type: 'SELECT',
        order: 1,
        question: 'What is “network monitoring”?',
      },
      {
        id: 942,
        lessonId: 95,
        type: 'ASSIST',
        order: 2,
        question: 'Explain “intrusion prevention system” (IPS).',
      },
      {
        id: 943,
        lessonId: 95,
        type: 'ASSIST',
        order: 3,
        question: 'What is “malware”?',
      },
      {
        id: 944,
        lessonId: 95,
        type: 'SELECT',
        order: 4,
        question: 'Define “security architecture” and its importance.',
      },
      {
        id: 945,
        lessonId: 95,
        type: 'ASSIST',
        order: 5,
        question: 'What is “vulnerability management”?',
      },
      {
        id: 946,
        lessonId: 95,
        type: 'ASSIST',
        order: 6,
        question: 'Explain “risk assessment” and its process.',
      },
      {
        id: 947,
        lessonId: 95,
        type: 'SELECT',
        order: 7,
        question: 'What is “cybersecurity audit”?',
      },
      {
        id: 948,
        lessonId: 95,
        type: 'SELECT',
        order: 8,
        question: 'What is “access control”?',
      },
      {
        id: 949,
        lessonId: 95,
        type: 'ASSIST',
        order: 9,
        question: 'Explain “security incident response” and its phases.',
      },
      {
        id: 950,
        lessonId: 95,
        type: 'ASSIST',
        order: 10,
        question: 'What is “security training and awareness”?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 941 options

      {
        challengeId: 941,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 941,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 941,
        imageSrc: '',
        correct: true,
        text: 'The process of observing and analyzing network traffic to detect and respond to issues',
        audioSrc: '',
      },

      // Challenge 942 options

      {
        challengeId: 942,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 942,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 942,
        imageSrc: '',
        correct: true,
        text: 'A system that monitors and prevents potential threats in network traffic',
        audioSrc: '',
      },

      // Challenge 943 options

      {
        challengeId: 943,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 943,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 943,
        imageSrc: '',
        correct: true,
        text: 'Malicious software designed to harm or exploit systems',
        audioSrc: '',
      },

      // Challenge 944 options
      {
        challengeId: 944,
        imageSrc: '',
        correct: true,
        text: 'The design and implementation of security measures to protect information systems',
        audioSrc: '',
      },
      {
        challengeId: 944,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 944,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 945 options
      {
        challengeId: 945,
        imageSrc: '',
        correct: true,
        text: 'The process of identifying and mitigating security weaknesses in a system',
        audioSrc: '',
      },
      {
        challengeId: 945,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 945,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 946 options

      {
        challengeId: 946,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 946,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 946,
        imageSrc: '',
        correct: true,
        text: 'The process of evaluating potential risks to an organization and implementing strategies to manage them',
        audioSrc: '',
      },

      // Challenge 947 options
      {
        challengeId: 947,
        imageSrc: '',
        correct: true,
        text: 'An examination of an organization’s security measures to ensure compliance with policies and standards',
        audioSrc: '',
      },
      {
        challengeId: 947,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 947,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 948 options
      {
        challengeId: 948,
        imageSrc: '',
        correct: true,
        text: 'The process of managing and controlling who has access to information and resources',
        audioSrc: '',
      },
      {
        challengeId: 948,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 948,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 949 options
      {
        challengeId: 949,
        imageSrc: '',
        correct: true,
        text: 'The process of managing and responding to security incidents to minimize damage and recover quickly',
        audioSrc: '',
      },
      {
        challengeId: 949,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 949,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 950 options
      {
        challengeId: 950,
        imageSrc: '',
        correct: true,
        text: 'The process of educating employees about security threats and best practices',
        audioSrc: '',
      },
      {
        challengeId: 950,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 950,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 96
    await db.insert(schema.challenges).values([
      {
        id: 951,
        lessonId: 96,
        type: 'SELECT',
        order: 1,
        question: 'What is “data loss prevention” (DLP)?',
      },
      {
        id: 952,
        lessonId: 96,
        type: 'ASSIST',
        order: 2,
        question: 'Explain “security information and event management” (SIEM).',
      },
      {
        id: 953,
        lessonId: 96,
        type: 'ASSIST',
        order: 3,
        question: 'What is “penetration testing”?',
      },
      {
        id: 954,
        lessonId: 96,
        type: 'SELECT',
        order: 4,
        question:
          'Define “identity and access management” (IAM) and its significance.',
      },
      {
        id: 955,
        lessonId: 96,
        type: 'ASSIST',
        order: 5,
        question: 'What is “risk management”?',
      },
      {
        id: 956,
        lessonId: 96,
        type: 'ASSIST',
        order: 6,
        question: 'Explain “cloud security” and its key aspects.',
      },
      {
        id: 957,
        lessonId: 96,
        type: 'SELECT',
        order: 7,
        question: 'What is “security compliance”?',
      },
      {
        id: 958,
        lessonId: 96,
        type: 'SELECT',
        order: 8,
        question: 'What is “data integrity”?',
      },
      {
        id: 959,
        lessonId: 96,
        type: 'ASSIST',
        order: 9,
        question: 'Explain “data classification” and its purpose.',
      },
      {
        id: 960,
        lessonId: 96,
        type: 'ASSIST',
        order: 10,
        question: 'What is “incident response plan” and its components?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 951 options

      {
        challengeId: 951,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 951,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 951,
        imageSrc: '',
        correct: true,
        text: 'A strategy to prevent unauthorized access to or loss of data',
        audioSrc: '',
      },

      // Challenge 952 options

      {
        challengeId: 952,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 952,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 952,
        imageSrc: '',
        correct: true,
        text: 'A system that collects, analyzes, and manages security information and events',
        audioSrc: '',
      },

      // Challenge 953 options

      {
        challengeId: 953,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 953,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 953,
        imageSrc: '',
        correct: true,
        text: 'A simulated cyber attack to test the security of a system',
        audioSrc: '',
      },

      // Challenge 954 options
      {
        challengeId: 954,
        imageSrc: '',
        correct: true,
        text: 'The management of user identities and access to resources within an organization',
        audioSrc: '',
      },
      {
        challengeId: 954,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 954,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 955 options

      {
        challengeId: 955,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 955,
        imageSrc: '',
        correct: true,
        text: 'The process of identifying, assessing, and prioritizing risks followed by coordinated efforts to minimize or control their impact',
        audioSrc: '',
      },
      {
        challengeId: 955,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 956 options
      {
        challengeId: 956,
        imageSrc: '',
        correct: true,
        text: 'The practice of securing cloud computing environments and services',
        audioSrc: '',
      },
      {
        challengeId: 956,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 956,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 957 options
      {
        challengeId: 957,
        imageSrc: '',
        correct: true,
        text: 'The adherence to regulatory and organizational security standards and policies',
        audioSrc: '',
      },
      {
        challengeId: 957,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 957,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 958 options
      {
        challengeId: 958,
        imageSrc: '',
        correct: true,
        text: 'The accuracy and consistency of data over its lifecycle',
        audioSrc: '',
      },
      {
        challengeId: 958,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 958,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 959 options
      {
        challengeId: 959,
        imageSrc: '',
        correct: true,
        text: 'The process of categorizing data based on its sensitivity and the required level of protection',
        audioSrc: '',
      },
      {
        challengeId: 959,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 959,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 960 options
      {
        challengeId: 960,
        imageSrc: '',
        correct: true,
        text: 'A documented plan for managing and responding to security incidents',
        audioSrc: '',
      },
      {
        challengeId: 960,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 960,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 97
    await db.insert(schema.challenges).values([
      {
        id: 961,
        lessonId: 97,
        type: 'SELECT',
        order: 1,
        question: 'What is “firewall” and its function?',
      },
      {
        id: 962,
        lessonId: 97,
        type: 'ASSIST',
        order: 2,
        question: 'Explain “two-factor authentication” (2FA).',
      },
      {
        id: 963,
        lessonId: 97,
        type: 'ASSIST',
        order: 3,
        question: 'What is “cryptographic hash function”?',
      },
      {
        id: 964,
        lessonId: 97,
        type: 'SELECT',
        order: 4,
        question: 'Define “security policy” and its role in an organization.',
      },
      {
        id: 965,
        lessonId: 97,
        type: 'ASSIST',
        order: 5,
        question: 'What is “threat intelligence”?',
      },
      {
        id: 966,
        lessonId: 97,
        type: 'ASSIST',
        order: 6,
        question: 'Explain “endpoint security” and its importance.',
      },
      {
        id: 967,
        lessonId: 97,
        type: 'SELECT',
        order: 7,
        question: 'What is “application security”?',
      },
      {
        id: 968,
        lessonId: 97,
        type: 'SELECT',
        order: 8,
        question: 'What is “network segmentation”?',
      },
      {
        id: 969,
        lessonId: 97,
        type: 'ASSIST',
        order: 9,
        question: 'Explain “data encryption” and its benefits.',
      },
      {
        id: 970,
        lessonId: 97,
        type: 'ASSIST',
        order: 10,
        question: 'What is “security operations center” (SOC)?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 961 options

      {
        challengeId: 961,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 961,
        imageSrc: '',
        correct: true,
        text: 'A network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules',
        audioSrc: '',
      },
      {
        challengeId: 961,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 962 options

      {
        challengeId: 962,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 962,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 962,
        imageSrc: '',
        correct: true,
        text: 'A security process that requires two forms of identification to access an account',
        audioSrc: '',
      },

      // Challenge 963 options
      {
        challengeId: 963,
        imageSrc: '',
        correct: true,
        text: 'A function that converts input data into a fixed-size string of characters, which is typically a hash code',
        audioSrc: '',
      },
      {
        challengeId: 963,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 963,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 964 options
      {
        challengeId: 964,
        imageSrc: '',
        correct: true,
        text: 'A formal set of rules and guidelines that govern the protection of an organization’s assets',
        audioSrc: '',
      },
      {
        challengeId: 964,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 964,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 965 options

      {
        challengeId: 965,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 965,
        imageSrc: '',
        correct: true,
        text: 'Information about potential threats to an organization’s security',
        audioSrc: '',
      },
      {
        challengeId: 965,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 966 options

      {
        challengeId: 966,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 966,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 966,
        imageSrc: '',
        correct: true,
        text: 'The protection of endpoints such as computers and mobile devices from threats',
        audioSrc: '',
      },

      // Challenge 967 options
      {
        challengeId: 967,
        imageSrc: '',
        correct: true,
        text: 'The practice of securing software applications from threats and vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 967,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 967,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 968 options
      {
        challengeId: 968,
        imageSrc: '',
        correct: true,
        text: 'The practice of dividing a network into smaller segments to improve security and performance',
        audioSrc: '',
      },
      {
        challengeId: 968,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 968,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 969 options

      {
        challengeId: 969,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 969,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 969,
        imageSrc: '',
        correct: true,
        text: 'The process of encoding data to prevent unauthorized access and ensure data privacy',
        audioSrc: '',
      },

      // Challenge 970 options
      {
        challengeId: 970,
        imageSrc: '',
        correct: true,
        text: 'A dedicated team responsible for monitoring and responding to security threats',
        audioSrc: '',
      },
      {
        challengeId: 970,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 970,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 98
    await db.insert(schema.challenges).values([
      {
        id: 971,
        lessonId: 98,
        type: 'SELECT',
        order: 1,
        question: 'What is “security patch management”?',
      },
      {
        id: 972,
        lessonId: 98,
        type: 'ASSIST',
        order: 2,
        question: 'Explain “security baseline” and its importance.',
      },
      {
        id: 973,
        lessonId: 98,
        type: 'ASSIST',
        order: 3,
        question: 'What is “endpoint detection and response” (EDR)?',
      },
      {
        id: 974,
        lessonId: 98,
        type: 'SELECT',
        order: 4,
        question: 'Define “threat hunting” and its process.',
      },
      {
        id: 975,
        lessonId: 98,
        type: 'ASSIST',
        order: 5,
        question: 'What is “data masking”?',
      },
      {
        id: 976,
        lessonId: 98,
        type: 'ASSIST',
        order: 6,
        question: 'Explain “network forensics” and its role in security.',
      },
      {
        id: 977,
        lessonId: 98,
        type: 'SELECT',
        order: 7,
        question: 'What is “security operations center” (SOC)?',
      },
      {
        id: 978,
        lessonId: 98,
        type: 'SELECT',
        order: 8,
        question: 'What is “data breach”?',
      },
      {
        id: 979,
        lessonId: 98,
        type: 'ASSIST',
        order: 9,
        question: 'Explain “penetration testing” and its purpose.',
      },
      {
        id: 980,
        lessonId: 98,
        type: 'ASSIST',
        order: 10,
        question: 'What is “incident response plan” and its elements?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 971 options

      {
        challengeId: 971,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 971,
        imageSrc: '',
        correct: true,
        text: 'The process of managing and applying software updates to fix vulnerabilities',
        audioSrc: '',
      },
      {
        challengeId: 971,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },

      // Challenge 972 options
      {
        challengeId: 972,
        imageSrc: '',
        correct: true,
        text: 'A standard set of security measures and controls to ensure baseline protection',
        audioSrc: '',
      },
      {
        challengeId: 972,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 972,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },

      // Challenge 973 options
      {
        challengeId: 973,
        imageSrc: '',
        correct: true,
        text: 'A technology that provides continuous monitoring and response capabilities for endpoints',
        audioSrc: '',
      },
      {
        challengeId: 973,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 973,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 974 options
      {
        challengeId: 974,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 974,
        imageSrc: '',
        correct: true,
        text: 'The process of proactively searching for threats in a network before they can cause harm',
        audioSrc: '',
      },

      {
        challengeId: 974,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 975 options
      {
        challengeId: 975,
        imageSrc: '',
        correct: true,
        text: 'The practice of obfuscating data to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 975,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 975,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 976 options

      {
        challengeId: 976,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 976,
        imageSrc: '',
        correct: true,
        text: 'The analysis of network traffic and data to investigate security incidents and breaches',
        audioSrc: '',
      },
      {
        challengeId: 976,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },

      // Challenge 977 options

      {
        challengeId: 977,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 977,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 977,
        imageSrc: '',
        correct: true,
        text: 'A centralized facility where security-related data is collected, monitored, and analyzed',
        audioSrc: '',
      },

      // Challenge 978 options
      {
        challengeId: 978,
        imageSrc: '',
        correct: true,
        text: 'An incident where unauthorized access to data occurs, potentially leading to data loss or compromise',
        audioSrc: '',
      },
      {
        challengeId: 978,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 978,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 979 options

      {
        challengeId: 979,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 979,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 979,
        imageSrc: '',
        correct: true,
        text: 'The process of simulating attacks to identify and address vulnerabilities',
        audioSrc: '',
      },

      // Challenge 980 options
      {
        challengeId: 980,
        imageSrc: '',
        correct: true,
        text: 'A structured approach to managing and mitigating security incidents',
        audioSrc: '',
      },
      {
        challengeId: 980,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 980,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 99
    await db.insert(schema.challenges).values([
      {
        id: 981,
        lessonId: 99,
        type: 'SELECT',
        order: 1,
        question: 'What is “data encryption”?',
      },
      {
        id: 982,
        lessonId: 99,
        type: 'ASSIST',
        order: 2,
        question: 'Explain “firewall” and its function.',
      },
      {
        id: 983,
        lessonId: 99,
        type: 'ASSIST',
        order: 3,
        question: 'What is “intrusion detection system” (IDS)?',
      },
      {
        id: 984,
        lessonId: 99,
        type: 'SELECT',
        order: 4,
        question: 'Define “security audit” and its process.',
      },
      {
        id: 985,
        lessonId: 99,
        type: 'ASSIST',
        order: 5,
        question: 'What is “penetration testing”?',
      },
      {
        id: 986,
        lessonId: 99,
        type: 'ASSIST',
        order: 6,
        question: 'Explain “security incident response” and its components.',
      },
      {
        id: 987,
        lessonId: 99,
        type: 'SELECT',
        order: 7,
        question: 'What is “threat intelligence”?',
      },
      {
        id: 988,
        lessonId: 99,
        type: 'SELECT',
        order: 8,
        question: 'What is “vulnerability management”?',
      },
      {
        id: 989,
        lessonId: 99,
        type: 'ASSIST',
        order: 9,
        question: 'Explain “security policies” and their importance.',
      },
      {
        id: 990,
        lessonId: 99,
        type: 'ASSIST',
        order: 10,
        question: 'What is “network security”?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 981 options

      {
        challengeId: 981,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
      {
        challengeId: 981,
        imageSrc: '',
        correct: true,
        text: 'The process of converting data into a code to prevent unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 981,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },

      // Challenge 982 options
      {
        challengeId: 982,
        imageSrc: '',
        correct: true,
        text: 'A network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules',
        audioSrc: '',
      },

      {
        challengeId: 982,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 982,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },

      // Challenge 983 options

      {
        challengeId: 983,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 983,
        imageSrc: '',
        correct: true,
        text: 'A system that monitors network traffic for suspicious activity and potential threats',
        audioSrc: '',
      },
      {
        challengeId: 983,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 984 options
      {
        challengeId: 984,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 984,
        imageSrc: '',
        correct: true,
        text: 'A systematic examination of a system’s security measures and controls',
        audioSrc: '',
      },

      {
        challengeId: 984,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 985 options
      {
        challengeId: 985,
        imageSrc: '',
        correct: true,
        text: 'The practice of simulating attacks to find and address security weaknesses',
        audioSrc: '',
      },
      {
        challengeId: 985,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 985,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 986 options
      {
        challengeId: 986,
        imageSrc: '',
        correct: true,
        text: 'The structured process of responding to and managing security incidents',
        audioSrc: '',
      },
      {
        challengeId: 986,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 986,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 987 options

      {
        challengeId: 987,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 987,
        imageSrc: '',
        correct: true,
        text: 'The collection and analysis of information about current and potential threats',
        audioSrc: '',
      },
      {
        challengeId: 987,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 988 options
      {
        challengeId: 988,
        imageSrc: '',
        correct: true,
        text: 'The process of identifying and addressing security vulnerabilities in systems and applications',
        audioSrc: '',
      },
      {
        challengeId: 988,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 988,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 989 options
      {
        challengeId: 989,
        imageSrc: '',
        correct: true,
        text: 'Rules and guidelines that govern how an organization manages and protects its information assets',
        audioSrc: '',
      },
      {
        challengeId: 989,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 989,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 990 options

      {
        challengeId: 990,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 990,
        imageSrc: '',
        correct: true,
        text: 'The measures and practices implemented to protect and secure network infrastructure',
        audioSrc: '',
      },
      {
        challengeId: 990,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },
    ]);

    // Lesson 100
    await db.insert(schema.challenges).values([
      {
        id: 991,
        lessonId: 100,
        type: 'SELECT',
        order: 1,
        question: 'What is “vulnerability assessment”?',
      },
      {
        id: 992,
        lessonId: 100,
        type: 'ASSIST',
        order: 2,
        question:
          'Explain the concept of “network segmentation” and its benefits.',
      },
      {
        id: 993,
        lessonId: 100,
        type: 'ASSIST',
        order: 3,
        question: 'What is “cyber threat intelligence”?',
      },
      {
        id: 994,
        lessonId: 100,
        type: 'SELECT',
        order: 4,
        question: 'Define “security information and event management” (SIEM).',
      },
      {
        id: 995,
        lessonId: 100,
        type: 'ASSIST',
        order: 5,
        question: 'What is “incident management” and why is it important?',
      },
      {
        id: 996,
        lessonId: 100,
        type: 'ASSIST',
        order: 6,
        question: 'Describe “data encryption at rest” and its significance.',
      },
      {
        id: 997,
        lessonId: 100,
        type: 'SELECT',
        order: 7,
        question: 'What is “data loss prevention” (DLP)?',
      },
      {
        id: 998,
        lessonId: 100,
        type: 'SELECT',
        order: 8,
        question: 'What is the role of a “security architect”?',
      },
      {
        id: 999,
        lessonId: 100,
        type: 'ASSIST',
        order: 9,
        question: 'Explain the function of “access control” in cybersecurity.',
      },
      {
        id: 1000,
        lessonId: 100,
        type: 'ASSIST',
        order: 10,
        question: 'What is “cloud security” and what are its key components?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      // Challenge 991 options
      {
        challengeId: 991,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 991,
        imageSrc: '',
        correct: true,
        text: 'The process of identifying and evaluating security weaknesses in a system',
        audioSrc: '',
      },

      {
        challengeId: 991,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 992 options
      {
        challengeId: 992,
        imageSrc: '',
        correct: true,
        text: 'The practice of dividing a network into smaller segments to improve security and performance',
        audioSrc: '',
      },
      {
        challengeId: 992,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 992,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 993 options
      {
        challengeId: 993,
        imageSrc: '',
        correct: true,
        text: 'The collection and analysis of data about potential threats to an organization’s security',
        audioSrc: '',
      },
      {
        challengeId: 993,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 993,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 994 options

      {
        challengeId: 994,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 994,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 994,
        imageSrc: '',
        correct: true,
        text: 'A system that aggregates and analyzes security event data from across an organization',
        audioSrc: '',
      },

      // Challenge 995 options

      {
        challengeId: 995,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 995,
        imageSrc: '',
        correct: true,
        text: 'The process of identifying, managing, and mitigating security incidents',
        audioSrc: '',
      },
      {
        challengeId: 995,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 996 options
      {
        challengeId: 996,
        imageSrc: '',
        correct: true,
        text: 'The practice of encrypting data while it is stored to protect it from unauthorized access',
        audioSrc: '',
      },
      {
        challengeId: 996,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 996,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 997 options

      {
        challengeId: 997,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 997,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },
      {
        challengeId: 997,
        imageSrc: '',
        correct: true,
        text: 'Strategies and tools used to prevent unauthorized access to data',
        audioSrc: '',
      },

      // Challenge 998 options
      {
        challengeId: 998,
        imageSrc: '',
        correct: true,
        text: 'A professional responsible for designing and implementing security architecture',
        audioSrc: '',
      },
      {
        challengeId: 998,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 998,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
        audioSrc: '',
      },

      // Challenge 999 options
      {
        challengeId: 999,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using a single key',
        audioSrc: '',
      },
      {
        challengeId: 999,
        imageSrc: '',
        correct: true,
        text: 'Mechanisms and processes used to control who can access information and resources',
        audioSrc: '',
      },

      {
        challengeId: 999,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing user permissions',
        audioSrc: '',
      },

      // Challenge 1000 options
      {
        challengeId: 1000,
        imageSrc: '',
        correct: true,
        text: 'Security measures and protocols designed to protect cloud-based services and data',
        audioSrc: '',
      },
      {
        challengeId: 1000,
        imageSrc: '',
        correct: false,
        text: 'A method for encrypting data using two different keys',
        audioSrc: '',
      },
      {
        challengeId: 1000,
        imageSrc: '',
        correct: false,
        text: 'A tool for managing network traffic',
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
