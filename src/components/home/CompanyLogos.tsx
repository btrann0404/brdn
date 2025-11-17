"use client";

import Image from "next/image";

const companies = [
  {
    name: "Societe Generale",
    logo: "/companylogo/socgenlogo.png",
    alt: "SG"
  },
  {
    name: "Roche Diagnostics",
    logo: "/companylogo/rochelogo.png",
    alt: "Roche"
  },
  {
    name: "UC Irvine",
    logo: "/companylogo/ucilogo.png",
    alt: "UCI"
  }
];

export default function CompanyLogos() {
  return (
    <div className="fixed right-12 top-1/2 -translate-y-1/2 z-10">
      <div className="flex flex-col gap-8">
        {companies.map((company) => (
          <div 
            key={company.name}
            className="relative w-16 h-16 transition-all duration-300 grayscale hover:grayscale-0 opacity-50 hover:opacity-100"
          >
            <Image
              src={company.logo}
              alt={company.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

