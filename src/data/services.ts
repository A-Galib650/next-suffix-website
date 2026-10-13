export interface ServiceItem {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  category: "Enterprise Software" | "Cloud & Infrastructure" | "Industrial IoT" | "Specialized Systems";
  iconName: string;
  description: string;
  keyFeatures: string[];
  businessBenefits: string[];
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    slug: "erp-consulting",
    name: "ERP Consulting & Integration",
    tagline: "End-to-end Enterprise Resource Planning architecture and deployment.",
    category: "Enterprise Software",
    iconName: "Briefcase",
    description:
      "We provide comprehensive IT consulting services including project management, process re-engineering, and tailored implementation for enterprise ERP systems like Rupantor ERP. We streamline procurement, inventory, manufacturing, human capital, and financial accounting into unified workflows.",
    keyFeatures: [
      "Custom business workflow assessment and discovery",
      "Rupantor ERP integration with legacy architectures",
      "Real-time corporate ledger, balance sheet, and audit reporting",
      "Cross-departmental role-based access control (RBAC)",
      "Automated procurement and supplier management pipelines",
    ],
    businessBenefits: [
      "35% reduction in cross-departmental reconciliation delays",
      "Single source of truth across operations and finances",
      "Full compliance with international financial reporting standards",
    ],
    deliverables: [
      "ERP Architecture Roadmap & Process Matrix",
      "Custom Module Extensions & API Connectors",
      "User Training & Change Management Documentation",
    ],
  },
  {
    id: 2,
    slug: "web-ecommerce",
    name: "Web & E-Commerce Solutions",
    tagline: "High-conversion omnichannel commerce and bespoke portal ecosystems.",
    category: "Enterprise Software",
    iconName: "ShoppingBag",
    description:
      "We have helped corporations within and across boundaries launch high-traffic e-business solutions with seamless payment gateway integrations, multi-currency support, responsive catalog architectures, and secure client portals.",
    keyFeatures: [
      "Headless and server-rendered e-commerce architectures",
      "Instant checkout integration with local & international gateways",
      "Dynamic inventory synchronization across multiple warehouses",
      "Optimized Core Web Vitals and lightning-fast load times",
    ],
    businessBenefits: [
      "High scalability during flash sales and peak seasonal spikes",
      "Optimized mobile conversion rate across all viewports",
      "Granular analytics for customer acquisition and retention",
    ],
    deliverables: [
      "Production-Ready Next.js Omnichannel Storefront",
      "Admin CMS & Order Fulfillment Dashboard",
      "Automated SMS/Email Notification Pipelines",
    ],
  },
  {
    id: 3,
    slug: "custom-applications",
    name: "Custom Software Applications",
    tagline: "Tailor-made software engineered precisely for unique operational requirements.",
    category: "Enterprise Software",
    iconName: "Cpu",
    description:
      "We work with enterprise clients to assess their unique organizational needs during a thorough discovery phase, define realistic technical scopes, and architect mission-critical software with modular microservices.",
    keyFeatures: [
      "Full-stack development using modern typed frameworks",
      "RESTful and GraphQL API ecosystem development",
      "Automated CI/CD pipelines and unit/integration test suites",
      "Enterprise security audits and vulnerability prevention",
    ],
    businessBenefits: [
      "Software aligned 100% with your competitive advantage",
      "Zero recurring third-party vendor licensing lock-in",
      "High maintainability and scalable cloud architecture",
    ],
    deliverables: [
      "Modular Application Codebase & API Documentation",
      "Dockerized Deployment Containers & Helm Charts",
      "24/7 Production Support & SLA Agreement",
    ],
  },
  {
    id: 4,
    slug: "industrial-monitoring",
    name: "Industrial IoT & Energy Telemetry",
    tagline: "Real-time edge sensor networks, transformer telemetry, and energy analytics.",
    category: "Industrial IoT",
    iconName: "Activity",
    description:
      "Precision industrial automation and IoT telemetry solutions that monitor electrical grids, substation transformers, factory machinery, vibration thresholds, and facility power consumption with sub-second alert mechanisms.",
    keyFeatures: [
      "Hardware-to-cloud edge gateway firmware and integrations",
      "Live transformer temperature, oil level, and load monitoring",
      "Predictive anomaly detection and automated hazard alerts",
      "Interactive industrial scada-grade telemetry dashboards",
    ],
    businessBenefits: [
      "Prevent catastrophic substation and transformer failures",
      "Identify power factor inefficiencies and reduce utility costs",
      "Historical data trends for preventative maintenance planning",
    ],
    deliverables: [
      "Edge IoT Gateway Configuration & Telemetry Broker",
      "Real-Time SCADA/Cloud Web Dashboard",
      "Automated SMS/Email Emergency Alert Dispatcher",
    ],
  },
  {
    id: 5,
    slug: "it-infrastructure",
    name: "IT Infrastructure & Cloud Architecture",
    tagline: "High-availability enterprise server clusters, virtualization, and hybrid cloud.",
    category: "Cloud & Infrastructure",
    iconName: "Server",
    description:
      "Architecting enterprise IT environments with resilient networking, private cloud virtualization, load balancing, Disaster Recovery (DR) sites, and certified server configurations engineered for continuous operation.",
    keyFeatures: [
      "Enterprise virtualization (VMware, Proxmox, Hyper-V)",
      "Multi-region cloud infrastructure and hybrid deployments",
      "Automated failover clustering and zero-downtime migrations",
      "Network switch, router, and enterprise firewall provisioning",
    ],
    businessBenefits: [
      "99.98% operational uptime guarantees",
      "Resilient disaster recovery with RPO/RTO compliance",
      "Lower total cost of infrastructure ownership (TCO)",
    ],
    deliverables: [
      "Infrastructure Topology Blueprint & Network Diagram",
      "Server Cluster Configuration & Monitoring Agents",
      "Automated Backup & Disaster Recovery Runbooks",
    ],
  },
  {
    id: 6,
    slug: "mobile-apps",
    name: "Enterprise Mobile Applications",
    tagline: "Native and cross-platform iOS and Android apps for field teams and consumers.",
    category: "Enterprise Software",
    iconName: "Smartphone",
    description:
      "Get enterprise digital assistants and consumer-facing mobile apps equipped with intuitive UX, offline synchronization capabilities, GPS tracking, and secure biometrics designed for frontline employees and customers.",
    keyFeatures: [
      "Cross-platform Flutter & React Native development",
      "Offline-first local SQLite cache with cloud sync",
      "Native device integration (Biometrics, Camera, Bluetooth, GPS)",
      "Strict data encryption at rest and in transit",
    ],
    businessBenefits: [
      "Empower remote and field personnel with real-time connectivity",
      "Streamlined data capture directly from work sites",
      "Seamless publication to Google Play and Apple App Store",
    ],
    deliverables: [
      "Compiled Production App Bundles (AAB & IPA)",
      "Mobile Backend API Endpoints & Auth Gateways",
      "App Store Asset Package & Release Documentation",
    ],
  },
  {
    id: 7,
    slug: "it-ot-security-solution",
    name: "IT & OT Cybersecurity Solutions",
    tagline: "Defending enterprise information systems and industrial operational technology.",
    category: "Cloud & Infrastructure",
    iconName: "ShieldCheck",
    description:
      "Comprehensive perimeter defense, next-generation firewalls, SIEM logging, endpoint detection, and Operational Technology (OT) air-gap security to protect industrial control systems against targeted intrusions.",
    keyFeatures: [
      "Next-Gen Firewall (NGFW) deployment and traffic inspection",
      "Zero Trust Network Access (ZTNA) and enterprise VPNs",
      "Vulnerability assessment and penetration testing (VAPT)",
      "OT protocol protection (Modbus, BACnet, DNP3)",
    ],
    businessBenefits: [
      "Protect proprietary corporate data and industrial assets",
      "Comply with national and international security regulations",
      "Continuous threat hunting and rapid incident mitigation",
    ],
    deliverables: [
      "Security Audit & Penetration Test Report",
      "Firewall Hardening & Policy Enforcement Matrix",
      "Incident Response Plan & Monitoring Playbook",
    ],
  },
  {
    id: 8,
    slug: "hospital-management",
    name: "Hospital & Healthcare Management",
    tagline: "Integrated HMS covering OPD, IPD, pharmacy, pathology, and patient records.",
    category: "Specialized Systems",
    iconName: "HeartPulse",
    description:
      "Suffix Hospital Management System has a user interface that is intuitive and rapid, streamlining bed management, doctor appointment schedules, electronic medical records (EMR), laboratory reporting, and insurance claims.",
    keyFeatures: [
      "Digital Electronic Health Records (EHR/EMR) with strict privacy",
      "Integrated pharmacy inventory and barcoded dispensing",
      "Automated lab test report generation and online patient portal",
      "Real-time bed availability tracking and billing reconciliation",
    ],
    businessBenefits: [
      "Significant reduction in patient wait times and paperwork errors",
      "Accurate medication billing and stock leakage prevention",
      "Improved clinical workflow collaboration across departments",
    ],
    deliverables: [
      "Hospital Management Core System & Web Portal",
      "Doctor and Nurse Clinical Workstation Interfaces",
      "Laboratory Device Interfacing & Report Formatters",
    ],
  },
  {
    id: 9,
    slug: "learning-management",
    name: "Learning Management System (LMS)",
    tagline: "Scalable interactive platforms for universities, corporate training, and schools.",
    category: "Specialized Systems",
    iconName: "GraduationCap",
    description:
      "A complete educational platform designed for interactive course delivery, live virtual classes, automated quiz evaluations, assignment tracking, student progression analytics, and credential certification.",
    keyFeatures: [
      "Video course streaming with anti-piracy controls",
      "Interactive assessments, timed quizzes, and grading rubrics",
      "Live classroom video integration and whiteboard sharing",
      "Detailed student progress and completion analytics",
    ],
    businessBenefits: [
      "Enables flexible remote training for employees and students",
      "Automates grading and certificate issuance workflows",
      "Scales easily to thousands of concurrent active learners",
    ],
    deliverables: [
      "Instructor & Student Web Portals",
      "Curriculum Management & Evaluation Engine",
      "Automated PDF Certificate Generator",
    ],
  },
  {
    id: 10,
    slug: "storage-backup",
    name: "Storage & Automated Disaster Backup",
    tagline: "Centrally controlled enterprise backup, immutable snapshots, and recovery.",
    category: "Cloud & Infrastructure",
    iconName: "Database",
    description:
      "Enterprise database backup and storage solutions providing centrally controlled protection, encryption, deduplication, and immutable ransomware-resistant retention schedules across on-premises and off-site repositories.",
    keyFeatures: [
      "Automated hourly, daily, and monthly database snapshots",
      "Encrypted offsite replication to secure secondary data centers",
      "Ransomware-proof write-once-read-many (WORM) storage pools",
      "Rapid one-click bare-metal and database state restoration",
    ],
    businessBenefits: [
      "Eliminate risk of catastrophic data loss due to hardware failure",
      "Immediate disaster recovery recovery time objectives (RTO)",
      "Strict data protection compliance",
    ],
    deliverables: [
      "Enterprise Storage SAN/NAS Configuration",
      "Scheduled Replication Daemons & Verification Scripts",
      "Quarterly Disaster Recovery Simulation Protocol",
    ],
  },
  {
    id: 11,
    slug: "domain-hosting",
    name: "Domain, Corporate Mail & Managed Hosting",
    tagline: "Dedicated cloud servers, ultra-reliable email infrastructure, and domain DNS.",
    category: "Cloud & Infrastructure",
    iconName: "Globe",
    description:
      "Enterprise cloud hosting services with guaranteed computing resources, multi-layer spam filtering for corporate webmail, DNS propagation protection, and round-the-clock technical monitoring.",
    keyFeatures: [
      "Enterprise corporate email with DKIM, SPF, and DMARC enforcement",
      "SSD NVMe high-speed storage and cPanel/DirectAdmin management",
      "Unlimited subdomains and automated free SSL provisioning",
      "DDoS mitigation and proactive server health monitoring",
    ],
    businessBenefits: [
      "Flawless corporate email deliverability to client inboxes",
      "Fast page load speeds powered by optimized web servers",
      "Dedicated account engineers on standby 24/7/365",
    ],
    deliverables: [
      "Domain DNS Zone Management & Protection Setup",
      "Webmail Server Configuration & Migration Support",
      "Managed Server Monitoring & Weekly Backup Plan",
    ],
  },
  {
    id: 12,
    slug: "video-conferencing",
    name: "Enterprise Video Conferencing",
    tagline: "Encrypted, high-definition interactive virtual meeting rooms and webinars.",
    category: "Specialized Systems",
    iconName: "Video",
    description:
      "The Suffix Video Conferencing Platform allows organizations, academic institutions, and government bodies to conduct secure video meetings, collaborate on digital canvases, share interactive presentations, and record sessions.",
    keyFeatures: [
      "End-to-end encrypted HD video and crisp multi-party audio",
      "Interactive screen sharing, digital whiteboard, and polls",
      "In-meeting chat, hand-raising, and breakout rooms",
      "Browser-native WebRTC architecture with zero downloads required",
    ],
    businessBenefits: [
      "Host secure confidential corporate discussions on private servers",
      "No reliance on foreign meeting SaaS platforms",
      "Low bandwidth optimization for reliable connectivity",
    ],
    deliverables: [
      "Dedicated WebRTC Meeting Server Deployment",
      "Branded Meeting Web Portal & Mobile Responsive Client",
      "Recording Storage Server & Archiving System",
    ],
  },
];
