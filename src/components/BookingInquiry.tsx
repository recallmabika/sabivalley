"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { activities } from "@/data/content";

export default function BookingInquiry() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-[#F4EFEA]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading text-[#1B3B2B] mb-6">Plan Your Visit</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Experience the raw beauty of the Chipinge Safari Area. Whether you're seeking a thrilling walking safari or an educational conservation tour, our team is ready to help you plan an unforgettable adventure.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start bg-[#FDFCFA] p-6 rounded-xl shadow-sm border border-gray-100">
                <MapPin className="w-6 h-6 text-[#C27D38] mt-1 mr-4 shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#1B3B2B] mb-1">Location</h3>
                  <p className="text-gray-600">Chipinge Safari Area, South East Lowveld Region, Zimbabwe</p>
                </div>
              </div>
              
              <div className="flex items-start bg-[#FDFCFA] p-6 rounded-xl shadow-sm border border-gray-100">
                <Phone className="w-6 h-6 text-[#C27D38] mt-1 mr-4 shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#1B3B2B] mb-1">Phone</h3>
                  <p className="text-gray-600">Contact ZIMPARKS SELR Office</p>
                </div>
              </div>

              <div className="flex items-start bg-[#FDFCFA] p-6 rounded-xl shadow-sm border border-gray-100">
                <Mail className="w-6 h-6 text-[#C27D38] mt-1 mr-4 shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#1B3B2B] mb-1">Email</h3>
                  <p className="text-gray-600">info@chipingesafari.co.zw</p>
                </div>
              </div>

              <div className="flex items-start bg-[#FDFCFA] p-6 rounded-xl shadow-sm border border-gray-100">
                <Clock className="w-6 h-6 text-[#C27D38] mt-1 mr-4 shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#1B3B2B] mb-1">Operating Hours</h3>
                  <p className="text-gray-600">Open Daily: 06:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1B3B2B] text-[#F4EFEA] p-6 rounded-xl shadow-md">
              <h3 className="font-heading text-xl mb-3 text-[#C27D38]">Important Visitor Notes</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
                <li>All walking safaris require a professional armed ranger accompaniment.</li>
                <li>Strictly no littering. Take only photographs, leave only footprints.</li>
                <li>Respect wildlife distances and adhere to all guide instructions.</li>
                <li>Self-driving is permitted only on designated routes with a 4x4 vehicle.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#FDFCFA] p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-heading text-[#1B3B2B] mb-6">Send an Inquiry</h3>
            
            {submitted ? (
              <div className="bg-[#1B3B2B]/10 border border-[#1B3B2B]/20 text-[#1B3B2B] p-6 rounded-lg text-center">
                <p className="font-semibold text-lg mb-2">Thank you for your inquiry!</p>
                <p>Our team will get back to you shortly to help plan your visit.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C27D38] focus:border-transparent outline-none transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C27D38] focus:border-transparent outline-none transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C27D38] focus:border-transparent outline-none transition-colors"
                      placeholder="+263 77 123 4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="visitors" className="block text-sm font-medium text-gray-700 mb-1">Number of Visitors</label>
                    <input 
                      type="number" 
                      id="visitors" 
                      min="1" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C27D38] focus:border-transparent outline-none transition-colors"
                      placeholder="2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="activity" className="block text-sm font-medium text-gray-700 mb-1">Primary Activity Interest</label>
                    <select 
                      id="activity" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C27D38] focus:border-transparent outline-none transition-colors bg-white"
                    >
                      <option value="">Select an activity...</option>
                      {activities.map((activity) => (
                        <option key={activity.id} value={activity.title}>{activity.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C27D38] focus:border-transparent outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message / Special Requests</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C27D38] focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Tell us about your expectations, dietary requirements, or any specific interests..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#C27D38] hover:bg-[#8C4F2B] text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 group"
                >
                  <span>Send Inquiry</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
