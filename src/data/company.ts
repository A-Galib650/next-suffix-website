export interface CompanyInfo {
  name: string;
  tagline: string;
  foundedYear: number;
  establishedDate: string;
  experienceYears: number;
  phone: string;
  email: string;
  careerEmail: string;
  address: {
    suite: string;
    building: string;
    street: string;
    area: string;
    city: string;
    country: string;
    full: string;
  };
  metrics: {
    yearsExperience: string;
    enterpriseClients: string;
    softwareSolutions: string;
    infrastructureUptime: string;
  };
  mission: string;
  vision: string;
  history: string;
  socials: {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
  };
}

export const companyData: CompanyInfo = {
  name: "Suffix IT Solutions Ltd.",
  tagline: "Enterprise Software Engineering, ERP Solutions & Digital Transformation",
  foundedYear: 2017,
  establishedDate: "July 1, 2017",
  experienceYears: Math.max(9, new Date().getFullYear() - 2017),
  phone: "+88 01958 424000",
  email: "info@suffixit.com",
  careerEmail: "career@suffixit.com",
  address: {
    suite: "Suite 9A",
    building: "Rupayan Millennium Square",
    street: "Cha-70, 70/A Progoti Sharoni",
    area: "North Badda, Gulshan",
    city: "Dhaka-1212",
    country: "Bangladesh",
    full: "Cha-70, 70/A, Rupayan Millennium Square (9A), Progoti Sharoni, North Badda, Gulshan, Dhaka-1212, Bangladesh",
  },
  metrics: {
    yearsExperience: "9+",
    enterpriseClients: "150+",
    softwareSolutions: "25+",
    infrastructureUptime: "99.98%",
  },
  history:
    "At Suffix IT, we develop innovative and creative products and services that provide total communication and information solutions. Among a plethora of services, web design and development, tailor made applications, ERPs, CRMs, e-commerce solutions, business-to-business applications, business-to-client applications, managed hosting and internet portal management are a few that we offer. Satisfied clients around the globe bear testimony to the quality of our work. As a leader in technology exploring, Suffix IT is committed to exporting quality software worldwide.",
  vision:
    "Our goal is to become a well-known global ICT solution provider that meets societal needs and contributes favorably to humanity's interests through technological excellence.",
  mission:
    "To use our enthusiasm for technology to bring success and happiness to our clients and staff, thus also providing high-growth possibilities for rewarding employment and thereby serving humanity.",
  socials: {
    facebook: "https://www.facebook.com/suffixit",
    linkedin: "https://www.linkedin.com/company/suffixit",
    twitter: "https://twitter.com/suffixit",
  },
};
