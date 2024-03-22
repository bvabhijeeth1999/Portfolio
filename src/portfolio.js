const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://bvabhijeeth1999.github.io',
  title: 'VA',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Abhijeeth',
  role: 'MS CS at UW-Madison | Ex-Oracle | Ex-Amazon',
  description:
    'Versatile software developer with proven track record at Oracle and Amazon, optimizing web app performance and automating financial processes. Proficient in C, C++, Java, Python, and a robust tech stack. Certified Professional Scrum Master.',
  resume:
    'https://drive.google.com/file/d/12TIIImiv_ddwhITRG_WVbgshplWiRP5x/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/venkata-abhijeeth-balabhadruni-153b5b169/',
    github: 'https://github.com/bvabhijeeth1999',
  },
}

const education = [
  {
    name: 'University of Wisconsin Madison',
    description: 'Masters in Computer Science',
    stack: ['Sept 2023 - Dec 2024', 'GPA: 4.0/4.0'],
  },
  {
    name: 'BITS Pilani',
    description: 'B.E in Computer Science',
    stack: ['Aug 2017 - Jun 2021', 'GPA: 8.75/10.0'],
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Mini Rel',
    description:
      'Built a mini Relational Database System as part of CS 564 - DBMS Course at UW Madison',
    stack: [
      'C', 'C++', 'SQL', 'DBMS'
    ],
    sourceCode: 'https://github.com/bvabhijeeth1999/Mini-Rel---DBMS'
  },
  {
    name: 'EasyGo',
    description:
      'An online portal built to book bus tickets as part of Software Engineering Course',
    stack: [
      'Software Engineering',
      'MongoDB',
      'JavaScript',
      'React',
      'ExpressJS',
      'NodeJS',
    ],
    sourceCode: 'https://github.com/bvabhijeeth1999/easy-go'
  },
  {
    name: 'KonesPo',
    description:
      'An e-commerce site for food',
    stack: [
    'MongoDB',
    'JavaScript',
    'HTML','CSS','Bootstrap',
    'ExpressJS',
    'NodeJS'],
    sourceCode: 'https://github.com/bvabhijeeth1999/konesPo',
  },
  {
    name: 'Farmer Queries - Data Mining',
    description:
      'To analyse a Farmer Queries Dataset from kisan call center and find intresting patterns, insights using Data Mining Techniques',
    stack: ['Data Mining', 'Machine Learning', 'Python'],
    sourceCode: 'https://github.com/bvabhijeeth1999/Data_Mining_Project'
  },
  {
    name: 'Hotel Booking Portal',
    description:
      'Built a portal for booking rooms across hotels as part of Java Course',
    stack: ['Object Oriented Programming','Java','Swing'],
    sourceCode: 'https://github.com/bvabhijeeth1999/Hotel-booking-Application',
  },
  {
    name: 'Media Rating - Fake News',
    description:
      'A Web Portal which displays the % of fake news across different media articles and gives a rating to media companies using ML models',
    stack: ['Machine Learning', 'Python', 'JavaScript', 'MongoDB', 'HTML', 'CSS', 'BootStrap'],
    sourceCode: 'https://github.com/bvabhijeeth1999/media-project',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C++',
  'Java',
  'Python',
  'SQL',
  'HTML',
  'CSS',
  'JavaScript',
  'Scala',
  'Spark',
  'Node',
  'React',
  'Express',
  'BootStrap',
  'Oracle ADF',
  'Git',
  'MySQL',
  'AWS Cloud',
  'MongoDB',
  'Postman',
  'VBCS'
]

const experience = [
  {
    name: 'Oracle',
    description:
      'Enhanced Procurement web app with API optimizations, boosting performance by 30%. Integrated \'Shopping Lists\' for faster item procurement, achieving a 43% acceleration. Improved security and resolved 200+ bugs, reducing downtimes by 20%. Technologies used : HTML, CSS, JS, OJET, Oracle ADF, Java, VBCS, SQL',
    stack: ['Hyderabad, India', 'Jul 2021 - Aug 2023'],
  },
  {
    name: 'Amazon',
    description:
      'Automated daily financial reconciliation using AWS tools, saving over 200 manual hours annually. Achieved 98% accuracy, enhancing efficiency, ensuring compliance, and streamlining workflows with AWS Step Functions, S3, Lambda, EMR, Athena, Glue, CloudWatch, and CDK.',
    stack: ['Hyderabad, India', 'Jan 2021 - Jun 2021'],
  }
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'bvabhi24@gmail.com',
}

export { header, about, projects, skills, contact, education, experience }
