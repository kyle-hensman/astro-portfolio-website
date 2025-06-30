import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const software = {
    "Web Development": [
      "Single Page Applications (SPAs)",
      "Full-Stack web applications",
      "Website optimization",
    ],
    "Mobile Development": [
      "Mobile-friendly web apps",
      "React Native mobile apps",
      "Flutter mobile apps",
    ],
    "UI/UX Design": [
      "UI design with Figma",
      "UX research & improvements",
      "Prototyping for web & mobile apps",
    ],
  };

  const blockchain = {
    "Smart Contracts": [
      "Design & development",
      "Security reviews & auditing",
      "NFT minting & DeFi integrations",
    ],
    "Wallets and dApps": [
      "Design and develop Web3 wallets",
      "dApp integrations & development",
      "Improvements & optimizations",
    ],
    "RPC Management": [
      "RPC fine-tuning & maintenance",
      "Networking, optimization & scalability",
      "Monitoring & advanced alert systems"
    ],
  };

  const devops = {
    "CI/CD Pipelines": [
      "Highly performant delivery systems",
      "Secure and reliable deployments",
      "Cost reductions and assessments",
    ],
    "Automation and Tooling": [
      "Advanced scripting & automation",
      "Professional workflow optimizations",
      "Software stability & security testing",
    ],
    "System Observability": [
      "Industry leading service monitoring",
      "Tailtored alerts and messaging",
      "Advanced disaster recovery planning",      
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <div
        className="my-10 md:my-12 mx-auto text-center"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="0"
        data-aos-offset="0"
      >
        <h2 className="text-[var(--white)] text-3xl md:text-4xl font-semibold mb-2">
          Skills & Proficiencies
        </h2>
        <div className="bg-[#a476ff] w-[300px] mx-auto h-[2px]" />
      </div>
      {/* <p
        className="text-center max-w-[800px] w-full mx-auto text-md md:text-2xl text-[var(--white-icon)] mb-10 md:mb-12"
        data-aos="fade-down"
        data-aos-delay="200"
        >
          With experience in Frontend, Backend, and Mobile App Development, I excel at
          bridging technical complexity with business objectives.
      </p> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-10"> */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-12">
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="400"
          data-aos-offset="0"
        >
          <h4 className="text-[var(--white)] font-bold text-lg text-left md:text-xl md:mb-4">Software</h4>
          <ul className="space-y-4 mt-4 text-lg">
            {Object.entries(software).map(([category, items]) => (
              <li key={category} className="w-full">
                <div
                  onClick={() => toggleItem(category)}
                  className="w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
                >
                  <div className="flex items-center gap-3 p-4">
                    <div className="flex items-center gap-2 flex-grow justify-between">
                      <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                        <span className="block truncate text-[var(--white)] text-sm">
                          {category}
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                          openItem === category ? "rotate-180" : ""
                        }`}
                      >
                        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                      </svg>
                    </div>
                  </div>

                  <div
                    className={`transition-all duration-300 px-4 ${
                      openItem === category
                        ? "max-h-[500px] pb-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                      {items.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <span className="pl-1">•</span>
                          <li className="pl-3">{item}</li>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="600"
          data-aos-offset="0"
        >
          <h4 className="text-[var(--white)] font-bold text-lg text-left md:text-xl md:mb-4">Web3</h4>
          <ul className="space-y-4 mt-4 text-lg">
            {Object.entries(blockchain).map(([category, items]) => (
              <li key={category} className="w-full">
                <div
                  onClick={() => toggleItem(category)}
                  className="w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
                >
                  <div className="flex items-center gap-3 p-4">
                    <div className="flex items-center gap-2 flex-grow justify-between">
                      <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                        <span className="block truncate text-[var(--white)] text-sm">
                          {category}
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                          openItem === category ? "rotate-180" : ""
                        }`}
                      >
                        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                      </svg>
                    </div>
                  </div>

                  <div
                    className={`transition-all duration-300 px-4 ${
                      openItem === category
                        ? "max-h-[500px] pb-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                      {items.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <span className="pl-1">•</span>
                          <li className="pl-3">{item}</li>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="800"
          data-aos-offset="0"
        >
          <h4 className="text-[var(--white)] font-bold text-lg text-left md:text-xl md:mb-4">DevOps</h4>
          <ul className="space-y-4 mt-4 text-lg">
            {Object.entries(devops).map(([category, items]) => (
              <li key={category} className="w-full">
                <div
                  onClick={() => toggleItem(category)}
                  className="w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
                >
                  <div className="flex items-center gap-3 p-4">
                    <div className="flex items-center gap-2 flex-grow justify-between">
                      <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                        <span className="block truncate text-[var(--white)] text-sm">
                          {category}
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                          openItem === category ? "rotate-180" : ""
                        }`}
                      >
                        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                      </svg>
                    </div>
                  </div>

                  <div
                    className={`transition-all duration-300 px-4 ${
                      openItem === category
                        ? "max-h-[500px] pb-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                      {items.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <span className="pl-1">•</span>
                          <li className="pl-3">{item}</li>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default SkillsList;
