// Footer.tsx
import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  // Company information
  const companyInfo = {
    name: "Tyagi Bituminous System",
    description: "Tyagi Bituminous System is a leading manufacturer of high-quality bitumen emulsions and PMB, delivering reliable solutions for road construction and industrial infrastructure.",
    socials: [
      { name: "Facebook", icon: Facebook, link: "https://facebook.com" },
      { name: "Twitter", icon: Twitter, link: "https://twitter.com" },
      { name: "Instagram", icon: Instagram, link: "https://instagram.com" },
      { name: "LinkedIn", icon: Linkedin, link: "https://linkedin.com" },
      { name: "Email", icon: Mail, link: "mailto:info@tyagibituminous.com" }
    ]
  };

  // Quick links
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-primary text-gray-100 mt-16 md:mt-24 lg:mt-32">
      {/* Main Footer Content */}
      <div className="px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">{companyInfo.name}</h2>
            <p className="mb-6 text-gray-100 max-w-md">{companyInfo.description}</p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {companyInfo.socials.map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-800 p-2 rounded-full hover:text-primary transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <span className="text-gray-100 hover:text-white transition-colors duration-200 cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <address className="not-italic text-gray-100 space-y-2">
              <p>TYAGI BITUMINOUS SYSTEM</p>
              <p>Sarai, Kohand, G.T. Road</p>
              <p>Garhi Multan, Panipat</p>
              <p>Haryana, 132114</p>
              <p className="mt-4">
                <a href="tel:+919876543210" className="hover:text-white transition-colors duration-200">
                  +91 98765 43210
                </a>
              </p>
              <p>
                <a href="mailto:info@tyagibituminous.com" className="hover:text-white transition-colors duration-200">
                  info@tyagibituminous.com
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#e65c00] w-full py-4 text-center px-4">
        <div className=" w-full">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-100 text-sm text-center md:text-left">
              © {currentYear} Tyagi Bituminous System. All rights reserved.
            </p>
            <div className="mt-2 md:mt-0 text-sm text-gray-100">
              <span className="mx-2">Privacy Policy</span>
              <span className="mx-2">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;