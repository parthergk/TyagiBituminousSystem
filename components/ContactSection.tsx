// ContactSection.tsx
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  // Location details
  const location = {
    address:
      "TYAGI BITUMINOUS SYSTEM, Sarai, Kohand, G.T. Road, Garhi Multan (Panipat)",
    pincode: "132114",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.357026851711!2d76.97198267438328!3d29.505950843885568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dd90040630367%3A0x3cd4539954a3acbf!2sTyagi%20bituminous%20system%20hr!5e0!3m2!1sen!2sin!4v1747376231183!5m2!1sen!2sin",
  };

  // Contact details
  const contactInfo = {
    email: "info@tyagibituminoussystem.in",
    phone: "+91 9997624171",
    address: `${location.address}, Pin - ${location.pincode}`,
  };

  return (
    <section className="pt-16 md:pt-24 lg:pt-32 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug text-black">
            Contact Us
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Contact Information Side */}
          <div className="w-full lg:w-2/5">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Get In Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-700">Email</h4>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-700">Phone</h4>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-700">Address</h4>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="w-full lg:w-3/5">
            <div className="h-96 md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
              <iframe
                src={location.mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
