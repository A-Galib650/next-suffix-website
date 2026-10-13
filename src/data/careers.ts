export interface CareerJob {
  id: number;
  title: string;
  department: string;
  location: string;
  jobType: string;
  experience: string;
  salary: string;
  deadline: string;
  email: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const careersData: CareerJob[] = [
  {
    id: 1,
    title: "Head of Business Development",
    department: "Executive & Growth",
    location: "Dhaka (North Badda)",
    jobType: "Full Time",
    experience: "10+ Years in IT Industry",
    salary: "Negotiable (Attractive Package + Performance Bonus)",
    deadline: "Open / Rolling Evaluation",
    email: "career@suffixit.com",
    overview:
      "Lead, plan, and execute high-impact business growth strategies across enterprise software, industrial IoT, AI, communication platforms, and hardware solutions. Drive large-scale corporate and government enterprise engagements.",
    responsibilities: [
      "Lead, plan, and execute business development strategies across software, IoT, AI, communication platforms, and enterprise solutions.",
      "Identify new business opportunities, markets, and potential corporate and government enterprise clients.",
      "Build and manage a high-performing Business Development & Sales team.",
      "Establish and maintain strong relationships with C-suite clients, enterprise partners, and vendors.",
      "Drive sales for product lines including enterprise servers, networking infrastructure, firewalls, call center solutions, and ERP software.",
      "Oversee RFP/RFQ processes, tender documentation, and technical proposal development.",
      "Collaborate with technical and product engineering teams to create market-fit solutions.",
      "Conduct continuous market research, competitor benchmarking, and strategic forecasting.",
      "Represent Suffix IT Solutions at domestic and international tech expos, seminars, and industry conferences.",
    ],
    requirements: [
      "Educational background in Business Administration, Computer Science, Engineering, or related fields (MBA preferred).",
      "Minimum 10+ years of experience in the IT industry with proven leadership in Business Development, Enterprise Sales, or Strategic Growth.",
      "Deep domain understanding of SaaS software products, industrial IoT platforms, AI/ML applications, and enterprise infrastructure.",
      "Proven track record of meeting multi-million enterprise revenue targets and long-term client retention.",
      "Exceptional negotiation, executive presentation, and C-level relationship management skills.",
      "Strong established network within national corporate, telecom, and public sectors.",
    ],
    benefits: [
      "Competitive executive compensation with lucrative performance-based incentives",
      "Executive leadership seat with direct strategic decision-making authority",
      "Fast-paced, innovation-driven culture handling both cutting-edge software and hardware lines",
      "Comprehensive medical insurance, annual increments, and festival bonuses",
      "National and international tech delegation exposure",
    ],
  },
  {
    id: 2,
    title: "Lead Java / Spring Boot Engineer",
    department: "Enterprise Engineering",
    location: "Dhaka (Hybrid Available)",
    jobType: "Full Time",
    experience: "5+ Years",
    salary: "Competitive / Market Leading",
    deadline: "Open Position",
    email: "career@suffixit.com",
    overview:
      "Architect and scale high-throughput enterprise backend services, transactional ERP engines, and telecommunications rating algorithms using Java 21, Spring Boot, and PostgreSQL.",
    responsibilities: [
      "Architect and implement scalable microservices using Java 21, Spring Boot, and Kafka.",
      "Design resilient database schemas, optimize complex SQL queries, and implement distributed caching (Redis).",
      "Perform code reviews, enforce unit and integration test coverage (>85%), and maintain CI/CD pipelines.",
      "Collaborate with product managers and frontend teams to deliver clean OpenAPI/Swagger specifications.",
    ],
    requirements: [
      "B.Sc in Computer Science or Software Engineering.",
      "5+ years of production experience in enterprise Java development (Spring Boot, Spring Security, Hibernate/JPA).",
      "Strong expertise in distributed system design, transactional consistency, and database indexing.",
      "Familiarity with Docker, Kubernetes, and Linux server environments.",
    ],
    benefits: [
      "Attractive salary package with biannual reviews",
      "Festival bonuses and provident fund benefits",
      "Sponsorship for professional cloud certifications (AWS/GCP/Oracle)",
      "Collaborative engineering culture with modern equipment",
    ],
  },
  {
    id: 3,
    title: "Senior Frontend Engineer (React / Next.js)",
    department: "UI/UX & Web Engineering",
    location: "Dhaka (North Badda)",
    jobType: "Full Time",
    experience: "4+ Years",
    salary: "Competitive / Negotiable",
    deadline: "Open Position",
    email: "career@suffixit.com",
    overview:
      "Build blazing-fast, accessible web applications and enterprise dashboard interfaces utilizing Next.js (App Router), React 19, TypeScript, and modern CSS frameworks.",
    responsibilities: [
      "Develop responsive, pixel-perfect user interfaces adhering to strict design systems and WCAG accessibility standards.",
      "Implement server-side rendering, streaming, and efficient client-side state management.",
      "Optimize Core Web Vitals, bundle footprints, and runtime rendering performance.",
      "Mentor junior developers and participate in architectural refinement sessions.",
    ],
    requirements: [
      "B.Sc in Computer Science or relevant technical discipline.",
      "4+ years building production web applications with React, TypeScript, and Next.js.",
      "Mastery of modern CSS (Tailwind CSS), semantic HTML5, and responsive layout math.",
      "Experience integrating RESTful APIs and WebSockets with robust error handling.",
    ],
    benefits: [
      "Market-competitive compensation package",
      "Annual profit sharing and performance incentives",
      "Modern dual-monitor workstation setup",
      "Flexible work schedule and wellness programs",
    ],
  },
  {
    id: 4,
    title: "Software Quality Assurance (QA Automation)",
    department: "Quality Engineering",
    location: "Dhaka (North Badda)",
    jobType: "Full Time",
    experience: "3+ Years",
    salary: "Negotiable",
    deadline: "Open Position",
    email: "career@suffixit.com",
    overview:
      "Ensure flawless software releases by designing comprehensive test plans, authoring automated test suites (Playwright/Cypress), and validating industrial IoT edge data streams.",
    responsibilities: [
      "Review software specifications and write detailed, well-structured test matrices and scenarios.",
      "Develop and maintain automated end-to-end and API testing suites.",
      "Identify, document, isolate, and track software bugs through Jira.",
      "Perform load and stress testing using k6 or JMeter for telecom rating engines.",
    ],
    requirements: [
      "Bachelor's Degree in Computer Science, Engineering, or equivalent experience.",
      "3+ years in software quality assurance with proven automation experience.",
      "Hands-on proficiency with Playwright, Cypress, Selenium, or Postman automation.",
      "Solid knowledge of SQL querying and RESTful API structures.",
    ],
    benefits: [
      "Competitive salary and bi-annual appraisals",
      "2 Festival Bonuses per year",
      "Friendly work culture with structured career progression paths",
    ],
  },
];
