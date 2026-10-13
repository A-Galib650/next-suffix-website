export interface RankedCompany {
  rank: number;
  name: string;
  summary: string;
  metrics: {
    employees: string;
    experience: string;
    readySoftware: string;
    customDev: string;
    sectors: string;
  };
}

export const rankedCompaniesData: RankedCompany[] = [
  {
    rank: 1,
    name: "Suffix IT Solutions Ltd.",
    summary:
      "At Suffix IT, we develop innovative products and services providing complete communication and information architectures. Services include custom web development, tailor-made applications, Rupantor ERP, telecom rating systems, e-commerce, managed hosting, and industrial IoT telemetry across national and global clients.",
    metrics: {
      employees: "100+",
      experience: "9+ Years",
      readySoftware: "25+ Enterprise Systems",
      customDev: "Yes (Full-Stack & Mobile)",
      sectors: "ERP, Industrial IoT, Telecom, E-Commerce, Hospitality, Healthcare & Banking",
    },
  },
  {
    rank: 2,
    name: "LeadSoft Bangladesh",
    summary:
      "LeadSoft is an established software company in Bangladesh known for core banking solutions, fintech systems, and large-scale enterprise automation.",
    metrics: {
      employees: "450+",
      experience: "24+ Years",
      readySoftware: "BankUltimus & ERP",
      customDev: "Yes",
      sectors: "Fintech, Banking, Telecom & Enterprise",
    },
  },
  {
    rank: 3,
    name: "DataSoft Systems",
    summary:
      "DataSoft has implemented critical automation projects including Chittagong Port automation, microfinance solutions, and government cloud initiatives.",
    metrics: {
      employees: "400+",
      experience: "25+ Years",
      readySoftware: "Microfin360 & Port Automation",
      customDev: "Yes",
      sectors: "Microfinance, Maritime, Ports & Government",
    },
  },
  {
    rank: 4,
    name: "Brain Station 23",
    summary:
      "A software development and digital transformation partner serving global enterprises in Scandinavia, North America, and the Middle East.",
    metrics: {
      employees: "600+",
      experience: "18+ Years",
      readySoftware: "Fintech & Cloud Solutions",
      customDev: "Yes",
      sectors: "Fintech, Telco, Automotive & Retail",
    },
  },
  {
    rank: 5,
    name: "TigerIT Bangladesh",
    summary:
      "Specializes in Automated Fingerprint Identification Systems (AFIS), biometrics, digital identity registries, and vehicle registration systems.",
    metrics: {
      employees: "300+",
      experience: "20+ Years",
      readySoftware: "National Biometric Identity Engine",
      customDev: "Yes",
      sectors: "Biometrics, Identity, Government & Smart Mobility",
    },
  },
];
