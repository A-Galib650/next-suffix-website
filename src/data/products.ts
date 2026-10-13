export interface ProductItem {
  id: number;
  slug: string;
  name: string;
  subtitle: string;
  category: "Enterprise ERP" | "Telecom & Billing" | "Industrial IoT" | "Operational Software";
  description: string;
  modules: string[];
  specs: {
    deployment: string;
    architecture: string;
    targetIndustries: string;
    security: string;
  };
  highlightMetrics: {
    stat: string;
    label: string;
  }[];
  overview: string;
}

export const productsData: ProductItem[] = [
  {
    id: 1,
    slug: "rupantor-erp",
    name: "Rupantor ERP",
    subtitle: "Unified Enterprise Resource Planning for Manufacturing, Supply Chain & Finance",
    category: "Enterprise ERP",
    description:
      "Rupantor ERP integrates all of the critical processes needed to operate your enterprise into a single, cohesive digital backbone. From automated general ledger to multi-warehouse logistics, bill of materials (BOM), and human capital.",
    overview:
      "Engineered specifically to solve complex enterprise operational bottlenecks, Rupantor ERP bridges information silos across corporate departments. Built with modular scalability, it offers real-time inventory tracking, multi-tier procurement approvals, automated ledger postings, and executive Business Intelligence dashboards.",
    modules: [
      "Financial Accounting & General Ledger (GAAP & IFRS Compliant)",
      "Supply Chain & Multi-Warehouse Inventory Control",
      "Manufacturing & Bill of Materials (BOM) Production Scheduling",
      "Sales Order Processing & Customer Relationship Management (CRM)",
      "Human Resource & Integrated Payroll Management",
      "Executive Analytics & Predictive Cashflow Dashboards",
    ],
    specs: {
      deployment: "On-Premises, Private Cloud, or Hybrid Cloud",
      architecture: "Modular Service-Oriented Architecture (SOA) with RESTful APIs",
      targetIndustries: "Manufacturing, FMCG, Pharmaceuticals, Distribution & Large Retail",
      security: "Role-Based Access Control (RBAC), Audit Trails & 256-bit AES Encryption",
    },
    highlightMetrics: [
      { stat: "38%", label: "Average reduction in procurement cycle times" },
      { stat: "100%", label: "Real-time visibility into multi-branch stock levels" },
      { stat: "0", label: "Discrepancy in fiscal audit reconciliation" },
    ],
  },
  {
    id: 2,
    slug: "payroll-system",
    name: "Suffix Payroll System",
    subtitle: "Automated, compliant payroll processing, attendance & tax calculations",
    category: "Operational Software",
    description:
      "Suffix Payroll automates and streamlines all of your HR and payroll routines. Eliminate manual calculation errors, track biometric attendances across multiple shifts, and automate monthly bank salary disbursements with one click.",
    overview:
      "Handling thousands of employees across diverse salary structures, bonus policies, tax deductions, and provident funds is simplified with Suffix Payroll. Seamlessly integrates with physical biometric punch machines and mobile GPS attendance apps.",
    modules: [
      "Multi-Shift Biometric Attendance & Leave Management",
      "Automated Tax Slabs & National Withholding Calculations",
      "Flexible Allowance & Incentive Formula Engine",
      "One-Click Bank Salary Sheet & Pay Slip Generation",
      "Provident Fund (PF) and Gratuity Ledger Sync",
      "Employee Self-Service (ESS) Mobile & Web Portal",
    ],
    specs: {
      deployment: "Cloud SaaS or Dedicated On-Premises Server",
      architecture: "High-throughput calculation engine with background batch queues",
      targetIndustries: "Corporate Enterprises, Garments & RMG, Educational Institutes, Tech Companies",
      security: "Encrypted compensation tables and strict HR permission levels",
    },
    highlightMetrics: [
      { stat: "90%", label: "Reduction in end-of-month payroll computation hours" },
      { stat: "99.99%", label: "Accuracy across overtime, penalty & tax calculations" },
      { stat: "100%", label: "Compliance with local labor law statutes" },
    ],
  },
  {
    id: 3,
    slug: "interconnect-billing",
    name: "Interconnect Billing Platform",
    subtitle: "High-volume CDR rating, partner settlement & telecom reconciliation",
    category: "Telecom & Billing",
    description:
      "Engineered for telecommunications carriers, ISPs, and voice operators. Our platform enables automated Call Detail Record (CDR) mediation, multi-currency tariff rating, dispute resolution, and bilateral interconnect settlement.",
    overview:
      "Processing billions of CDRs without dropping packets or delaying invoice cycles. Suffix Interconnect Billing provides telecom business leaders with instant visibility into route margins, network profitability, bilateral invoice matching, and automated dispute generation.",
    modules: [
      "High-Speed CDR Mediation & Parsing Engine (SS7, SIP, Diameter)",
      "Dynamic Rate Sheet Management & Time-of-Day Tariff Engine",
      "Bilateral Partner Settlement & Netting Matrix",
      "Automated Invoice Generation with Multi-Currency Reconciliation",
      "Leakage Detection & Route Margin Profitability Analytics",
      "Regulatory Reporting & Compliance Export Formats",
    ],
    specs: {
      deployment: "Carrier-Grade Bare Metal or Private Telco Cloud",
      architecture: "Ultra-fast distributed in-memory CDR processing pipeline",
      targetIndustries: "Telecom Operators, ICX, IGW, IPTSP, and Wholesale Voice Carriers",
      security: "Carrier-grade redundancy, dual-site hot standby & encrypted CDR vaults",
    },
    highlightMetrics: [
      { stat: "10M+", label: "CDRs rated and mediated per minute per node" },
      { stat: "0.01%", label: "Dispute margin across international traffic routes" },
      { stat: "100%", label: "Automated invoice matching with partner carriers" },
    ],
  },
  {
    id: 4,
    slug: "e-commerce",
    name: "Suffix Omnichannel E-Commerce",
    subtitle: "Scalable B2B & B2C digital commerce with multi-vendor and inventory sync",
    category: "Enterprise ERP",
    description:
      "We offer full-cycle retail and e-commerce solutions to both B2B and B2C enterprises. Features dynamic product configuration, real-time stock sync with warehouse ERPs, and seamless local and global payment gateways.",
    overview:
      "Built for brands that demand performance, high conversion rates, and robust backend logistics. Supports thousands of concurrent shoppers, automated cart recovery, multi-tier pricing for wholesale buyers, and integrated courier tracking.",
    modules: [
      "High-Performance Next.js Responsive Storefront",
      "B2B Wholesale Catalog with Tiered Price Matrices",
      "Integrated Payment Gateway (bKash, Nagad, Visa, Mastercard, AMEX)",
      "Live Courier API Integration (Pathao, Steadfast, RedX, Paperfly)",
      "Automated Promotional Coupon & Reward Loyalty System",
      "Real-Time Inventory Synchronization with Central ERP",
    ],
    specs: {
      deployment: "Edge Cloud CDN with Auto-Scaling Container Infrastructure",
      architecture: "Headless e-commerce core with modular checkout microservices",
      targetIndustries: "Fashion, Electronics, FMCG, Wholesale Distributors & D2C Brands",
      security: "PCI-DSS compliant payment handoffs and anti-fraud bot mitigation",
    },
    highlightMetrics: [
      { stat: "<1.2s", label: "Average page load time across mobile networks" },
      { stat: "+28%", label: "Average increase in completed checkout conversion" },
      { stat: "99.99%", label: "Platform uptime during flash promotion campaigns" },
    ],
  },
  {
    id: 5,
    slug: "transformer-monitoring",
    name: "Smart Transformer & Grid Telemetry",
    subtitle: "Real-time industrial IoT monitoring for electrical substations & power assets",
    category: "Industrial IoT",
    description:
      "Prevents catastrophic power equipment failure with continuous edge sensor telemetry. Monitors oil temperatures, voltage surges, phase imbalances, harmonic distortions, and vibration metrics with instant emergency alerts.",
    overview:
      "Electrical transformers represent critical capital assets where unpredicted downtime causes massive financial loss. Suffix Smart Transformer integrates custom industrial sensors with cloud telemetry dashboards to predict insulation breakdown and mechanical faults weeks before failure occurs.",
    modules: [
      "Top-Oil & Winding Temperature RTD Sensor Integration",
      "3-Phase Voltage, Current & Power Factor Monitoring",
      "Dissolved Gas Analysis (DGA) Anomaly Detection",
      "Real-Time SCADA/Web Map Dashboard with Substation Geolocation",
      "Automated SMS/Voice Emergency Dispatch on Threshold Breaches",
      "Predictive Life-Expectancy & Maintenance Analytics",
    ],
    specs: {
      deployment: "Industrial Edge Gateway (RS485/Modbus/MQTT) to Secure Cloud",
      architecture: "Time-series database with sub-second telemetry ingestion",
      targetIndustries: "Power Generation, Electric Utilities, Industrial Plants & Data Centers",
      security: "Hardware cryptographic authentication and TLS 1.3 encrypted data pipes",
    },
    highlightMetrics: [
      { stat: "95%", label: "Early detection rate for transformer insulation faults" },
      { stat: "Sub-Second", label: "Emergency notification latency on critical surge" },
      { stat: "-40%", label: "Reduction in unplanned substation emergency shutdowns" },
    ],
  },
  {
    id: 6,
    slug: "field-force-management",
    name: "Field Force Management (FFM)",
    subtitle: "GPS tracking, territory routing, target tracking & mobile field sales",
    category: "Operational Software",
    description:
      "With Suffix Field Force Management, your distribution and sales teams move faster and adapt to customer demands with live geolocation, target KPIs, beat planning, and digital order booking.",
    overview:
      "Designed for consumer goods distributors, pharmaceutical medical reps, and maintenance engineers. Supervise hundreds of field agents in real-time, enforce scheduled outlet visits, take orders offline, and sync stock in real time.",
    modules: [
      "GPS Beat Planning & Route Optimization for Sales Representatives",
      "Offline-Capable Mobile Order Booking & Digital Invoicing",
      "Geo-Fenced Outlet Check-In & Physical Attendance Verification",
      "Real-Time Target vs. Achievement Sales Tracking",
      "Stock Visibility & Merchandising Shelf Audit Tool",
      "Supervisor Dashboard with Live Field Agent Fleet Map",
    ],
    specs: {
      deployment: "SaaS Cloud Backend with Native Android/iOS Mobile Apps",
      architecture: "Optimized mobile location battery-saving sync daemon",
      targetIndustries: "Pharmaceuticals, Beverage & Food, Consumer Electronics, Distribution",
      security: "Device binding, anti-mock GPS detection, and tamper prevention",
    },
    highlightMetrics: [
      { stat: "+32%", label: "Increase in daily merchant store visits per representative" },
      { stat: "0", label: "Fraudulent attendance check-ins with geofence locking" },
      { stat: "100%", label: "Real-time visibility into secondary sales pipeline" },
    ],
  },
  {
    id: 7,
    slug: "provident-fund",
    name: "Provident Fund Management",
    subtitle: "Trustee-grade employee fund accounting, investment tracking & loans",
    category: "Operational Software",
    description:
      "An advanced, audit-ready way to manage employee retirement funds, monthly matching contributions, member ledgers, loan disbursements, and investment interest distribution.",
    overview:
      "Ensures transparent governance for corporate PF trusts. Supports member self-service balance inquiries, automated compound interest crediting, loan against PF processing, and full year-end tax certificates.",
    modules: [
      "Automated Monthly Member & Employer Contribution Split",
      "Investment Portfolio Tracking (FDR, Treasury Bonds, Mutual Funds)",
      "Annual Profit Sharing & Compound Interest Calculation Engine",
      "PF Loan Application, Approval Workflow & EMI Deduction Schedule",
      "Final Settlement & Gratuity Calculation on Employee Departure",
      "Auditor-Ready Trial Balance, Income Statement & Balance Sheet",
    ],
    specs: {
      deployment: "Secure On-Premises or Private Cloud Instance",
      architecture: "Strict double-entry immutable financial ledger design",
      targetIndustries: "Corporations, Banking, Autonomous Bodies, Multinationals",
      security: "Maker-Checker dual approval workflows and immutable audit logs",
    },
    highlightMetrics: [
      { stat: "100%", label: "Automated fiscal profit distribution across all members" },
      { stat: "Zero", label: "Discrepancy in year-end trustee statutory audits" },
      { stat: "Instant", label: "Member ledger generation and tax statement export" },
    ],
  },
  {
    id: 8,
    slug: "hotel-booking-system",
    name: "Cloud Hotel Management & PMS",
    subtitle: "Front-desk, reservations, housekeeping, banquet & restaurant POS",
    category: "Operational Software",
    description:
      "Cloud-based, intuitive, and cost-effective hotel property management system (PMS) designed for boutique hotels, luxury resorts, and hospitality chains.",
    overview:
      "Manage reservations, check-ins, guest billing, restaurant orders, and housekeeping statuses from a single visual dashboard. Integrates with online travel agencies (OTAs) to eliminate double-booking.",
    modules: [
      "Visual Room Grid & Real-Time Availability Matrix",
      "Front-Desk Express Check-In & Guest ID Scanner Integration",
      "Integrated Restaurant/Bar POS with Room Bill Charging",
      "Housekeeping & Maintenance Task Dispatching",
      "Dynamic Rate Management & Seasonal Discount Rules",
      "Guest History & Personalized Hospitality CRM",
    ],
    specs: {
      deployment: "High-Availability Multi-Tenant Cloud Architecture",
      architecture: "Real-time WebSocket room status updates across hotel terminals",
      targetIndustries: "Hotels, Luxury Resorts, Guest Houses, Serviced Apartments",
      security: "Role-based staff permissions and masked guest payment data",
    },
    highlightMetrics: [
      { stat: "0", label: "Overbooking incidents with synchronized room calendar" },
      { stat: "<2 mins", label: "Average guest check-in and room key allocation time" },
      { stat: "+22%", label: "Increase in direct room bookings via integrated portal" },
    ],
  },
  {
    id: 9,
    slug: "rupantor-inventory",
    name: "Rupantor Inventory & Warehouse",
    subtitle: "Multi-location inventory control, barcode batching & stock forecasting",
    category: "Enterprise ERP",
    description:
      "Manage corporate cash flow, prevent stockouts, eliminate dead inventory, and maximize operational profitability with intelligent multi-warehouse control.",
    overview:
      "Provides end-to-end visibility into raw materials, goods in transit, and finished products. Equipped with barcode/QR scanning, serial tracking, batch expiry alerts, and automated purchase reorder triggers.",
    modules: [
      "Multi-Branch & Multi-Warehouse Stock Centralization",
      "FIFO/LIFO/Weighted Average Inventory Valuation",
      "Barcode & QR Code Printing / Mobile Handheld Scanning",
      "Batch Expiry Tracking & Automated Reorder Point Warnings",
      "Inter-Warehouse Transfer Workflows & In-Transit Tracking",
      "Physical Stock Counting & Discrepancy Adjustment Auditing",
    ],
    specs: {
      deployment: "Cloud or Local High-Availability Server with Edge Offline Cache",
      architecture: "Real-time stock ledger with atomic transaction concurrency",
      targetIndustries: "Wholesale Distribution, Retail Chains, Manufacturing, Healthcare",
      security: "Strict authorization for stock write-offs and inventory adjustments",
    },
    highlightMetrics: [
      { stat: "-45%", label: "Reduction in excess holding stock and capital lockup" },
      { stat: "99.8%", label: "Physical inventory to digital system record accuracy" },
      { stat: "Zero", label: "Stockout occurrences for high-velocity SKU items" },
    ],
  },
  {
    id: 10,
    slug: "pos-system",
    name: "Suffix Retail POS & Billing",
    subtitle: "Fast checkout, customer loyalty, barcode scanning & offline billing",
    category: "Operational Software",
    description:
      "A fast, modern point-of-sale terminal software for supermarkets, electronics showrooms, pharmacies, and lifestyle retail stores.",
    overview:
      "Keeps checkouts moving swiftly with barcode scanning, instant digital receipts via SMS, dual screen customer displays, integrated card/mobile wallet terminals, and automatic store inventory updates.",
    modules: [
      "Ultra-Fast Keyboard & Touchscreen Barcode Checkout",
      "Offline Billing Mode with Automatic Cloud Sync on Reconnect",
      "Multi-Payment Split (Cash, Card, MFS bKash/Nagad, Gift Vouchers)",
      "Integrated Digital Weighing Scale & Barcode Label Printing",
      "Customer Loyalty Points & Membership Discount Engine",
      "Shift-Wise Cash Drawer Reconciliation & Daily Sales Summary",
    ],
    specs: {
      deployment: "Desktop App / Web POS with Cloud Sync",
      architecture: "Offline-first IndexedDB cache paired with cloud Postgres synchronization",
      targetIndustries: "Supermarkets, Retail Chains, Boutiques, Pharmacies, Hardware Stores",
      security: "Cashier permission locks, void sale supervisor passwords, and drawer tracking",
    },
    highlightMetrics: [
      { stat: "<3s", label: "Average customer transaction billing duration" },
      { stat: "100%", label: "Continuous operation during internet connectivity drops" },
      { stat: "Real-Time", label: "Profit margin and stock depletion updates" },
    ],
  },
];
