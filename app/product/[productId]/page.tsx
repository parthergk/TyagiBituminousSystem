"use client"
import React from "react";
import { useParams } from "next/navigation";
import { products } from "@/lib/ProductData";

const ProductDetailPage: React.FC = () => {
  // Get product ID from URL parameters
  const { productId } = useParams<{ productId: string }>();
  
  // Find the selected product
  const product = products.find(p => p.id === productId);
  
  // If product not found
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold text-red-600">Product not found</h1>
        <p className="mt-4">The product you`&apos;`re looking for doesn`&apos;`t exist or has been removed.</p>
      </div>
    );
  }

  return (
    <main>
            <section
        className=" h-16 bg-primary"
      >
      </section>
    <div className=" pt-12 md:pt-16 px-4 md:px-6 lg:px-8">
      <div className=" rounded-lg  overflow-hidden">
        {/* Product Header */}
        <div className="bg-primary text-white p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{product.name}</h1>
          <p className="mt-2 text-lg opacity-90">
            {product.description}
          </p>
        </div>
        
        <div className="py-6 md:py-8">
          {/* Product Properties */}
          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Technical Properties</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left border border-gray-200 font-semibold">Property</th>
                    <th className="py-3 px-4 text-left border border-gray-200 font-semibold">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {product.properties.map((prop, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-4 border border-gray-200">{prop.name}</td>
                      <td className="py-3 px-4 border border-gray-200">{prop.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          
          {/* Product Advantages */}
          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Advantages</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {product.advantages.map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="ml-2">{advantage.text}</span>
                </li>
              ))}
            </ul>
          </section>
          
          {/* Applications */}
          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Applications</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              {product.applications.map((application, index) => (
                <p key={index} className={index > 0 ? "mt-4" : ""}>{application.text}</p>
              ))}
            </div>
          </section>
          
          {/* Usage Instructions */}
          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">To Ensure Better Results</h2>
            <ul className="list-disc pl-5 space-y-2">
              {product.usage.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </section>
          
          {/* Availability */}
          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Availability</h2>
            <div className="flex flex-wrap gap-3">
              {product.availability.map((option, index) => (
                <span 
                  key={index} 
                  className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full"
                >
                  {option}
                </span>
              ))}
            </div>
          </section>
          
          {/* Additional Information */}
          {product.additionalInfo && (
            <section className="mb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Additional Information</h2>
              <div className="bg-gray-50 border-l-4 border-primary p-4 italic">
                <p>{product.additionalInfo}</p>
              </div>
            </section>
          )}
          
          {/* Quality Assurance */}
          <section className="mt-16 pt-6 border-t border-gray-200">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Quality Assurance</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="mb-4">
                The foremost objective of our entity is to provide quality. Every grade of TBS Emulsion is duely Tested and certified in NABL laboratories.
              </p>
              <h3 className="font-semibold mb-2">We assure our clients to provide quality in terms of material as well as in the whole process of undertaking a project which includes:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Timely Material Supply</li>
                <li>Test Certificates and proper documentation</li>
                <li>Tri-Party MoU with work agency and Client for 1 year</li>
                <li>Pre-work execution-consultation & Guidance</li>
                <li>Technical Support at Site 24/7</li>
                <li>Interim Site Monitoring till 1 year</li>
              </ul>
            </div>
          </section>
          
          {/* Call to Action */}
          <div className="mt-10 flex justify-end">
            <a 
              href="/contact" 
              className="inline-block py-3 px-6 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors text-center"
            >
              Request a Quote
            </a>
            
          </div>
        </div>
      </div>
    </div>
    </main>
  );
};

export default ProductDetailPage;