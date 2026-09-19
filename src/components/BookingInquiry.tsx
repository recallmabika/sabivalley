"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { activities } from "@/data/content";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export default function BookingInquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [validationError, setValidationError] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);

  // Initialize Flatpickr
  useEffect(() => {
    if (dateInputRef.current) {
      const fp = flatpickr(dateInputRef.current, {
        minDate: "today",
        dateFormat: "F j, Y",
        disableMobile: true,
        onChange: (selectedDates, dateStr) => {
          setSelectedDate(dateStr);
          setValidationError("");
        },
      });

      return () => {
        fp.destroy();
      };
    }
  }, []);

  // Close custom dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedActivity) {
      setValidationError("Please select an activity from the list.");
      return;
    }
    if (!selectedDate) {
      setValidationError("Please select your preferred date.");
      return;
    }
    setValidationError("");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedActivity("");
      setSelectedDate("");
    }, 5000);
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

            <div className="bg-[#FDFCFA] p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#C27D38] mt-0.5 mr-3 shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#1B3B2B]">Location</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Chipinge Safari Area, South East Lowveld, Zimbabwe</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-[#C27D38] mt-0.5 mr-3 shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#1B3B2B]">Phone</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Contact ZIMPARKS SELR Office</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-[#C27D38] mt-0.5 mr-3 shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#1B3B2B]">Email</h3>
                    <a href="mailto:info@chipingesafari.co.zw" className="text-xs sm:text-sm text-gray-600 hover:text-[#C27D38] transition-colors break-all">
                      info@chipingesafari.co.zw
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#C27D38] mt-0.5 mr-3 shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#1B3B2B]">Operating Hours</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Open Daily: 06:00 – 18:00</p>
                  </div>
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
                {validationError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
                    {validationError}
                  </div>
                )}

                {/* Full Name - Floating Label */}
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder=" "
                    className="peer w-full px-4 pt-5 pb-2 rounded-lg border border-gray-300 focus:border-[#C27D38] outline-none transition-colors bg-transparent text-gray-900"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-4 top-3.5 text-gray-500 text-sm pointer-events-none transition-all duration-200 origin-left peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#C27D38] peer-focus:font-medium peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-500"
                  >
                    Full Name
                  </label>
                </div>

                {/* Email Address - Floating Label */}
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder=" "
                    className="peer w-full px-4 pt-5 pb-2 rounded-lg border border-gray-300 focus:border-[#C27D38] outline-none transition-colors bg-transparent text-gray-900"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-4 top-3.5 text-gray-500 text-sm pointer-events-none transition-all duration-200 origin-left peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#C27D38] peer-focus:font-medium peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-500"
                  >
                    Email Address
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Phone Number - Floating Label */}
                  <div className="relative">
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder=" "
                      className="peer w-full px-4 pt-5 pb-2 rounded-lg border border-gray-300 focus:border-[#C27D38] outline-none transition-colors bg-transparent text-gray-900"
                    />
                    <label 
                      htmlFor="phone" 
                      className="absolute left-4 top-3.5 text-gray-500 text-sm pointer-events-none transition-all duration-200 origin-left peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#C27D38] peer-focus:font-medium peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-500"
                    >
                      Phone Number
                    </label>
                  </div>

                  {/* Number of Visitors - Floating Label */}
                  <div className="relative">
                    <input 
                      type="number" 
                      id="visitors" 
                      min="1" 
                      required 
                      placeholder=" "
                      className="peer w-full px-4 pt-5 pb-2 rounded-lg border border-gray-300 focus:border-[#C27D38] outline-none transition-colors bg-transparent text-gray-900"
                    />
                    <label 
                      htmlFor="visitors" 
                      className="absolute left-4 top-3.5 text-gray-500 text-sm pointer-events-none transition-all duration-200 origin-left peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#C27D38] peer-focus:font-medium peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-500"
                    >
                      Number of Visitors
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Custom Dropdown Field - Floating Style */}
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full px-4 pt-5 pb-2 rounded-lg border text-left bg-white flex items-center justify-between transition-colors outline-none ${
                        isDropdownOpen 
                          ? "border-[#C27D38]" 
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <span className={selectedActivity ? "text-gray-900 text-sm" : "text-transparent text-sm"}>
                        {selectedActivity || "Placeholder"}
                      </span>
                      <span className={`transition-transform duration-200 text-xs text-gray-500 ${isDropdownOpen ? "rotate-180" : ""}`}>
                        ▼
                      </span>
                    </button>

                    <span 
                      className={`absolute left-4 pointer-events-none transition-all duration-200 origin-left text-sm ${
                        selectedActivity || isDropdownOpen
                          ? "top-1.5 text-xs text-[#C27D38] font-medium"
                          : "top-3.5 text-gray-500"
                      }`}
                    >
                      Primary Activity Interest
                    </span>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute z-30 left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl max-h-60 overflow-y-auto py-1"
                        >
                          {activities.map((activity) => (
                            <button
                              key={activity.id}
                              type="button"
                              onClick={() => {
                                setSelectedActivity(activity.title);
                                setIsDropdownOpen(false);
                                setValidationError("");
                              }}
                              className={`w-full px-4 py-2.5 text-left text-sm transition-colors flex items-center justify-between ${
                                selectedActivity === activity.title
                                  ? "bg-[#C27D38]/10 text-[#C27D38] font-semibold"
                                  : "text-gray-700 hover:bg-gray-50"
                              }`}
                            >
                              <span>{activity.title}</span>
                              {selectedActivity === activity.title && (
                                <span className="text-[#C27D38] font-bold">✓</span>
                              )}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Flatpickr Date Field - Floating Label */}
                  <div className="relative">
                    <input 
                      ref={dateInputRef}
                      type="text" 
                      id="flatpickr-date" 
                      placeholder=" "
                      className="peer w-full px-4 pt-5 pb-2 rounded-lg border border-gray-300 focus:border-[#C27D38] outline-none transition-colors bg-white cursor-pointer text-gray-900 text-sm"
                    />
                    <label 
                      htmlFor="flatpickr-date" 
                      className="absolute left-4 top-3.5 text-gray-500 text-sm pointer-events-none transition-all duration-200 origin-left peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#C27D38] peer-focus:font-medium peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-500"
                    >
                      Preferred Date
                    </label>
                  </div>
                </div>

                {/* Message / Special Requests - Floating Label */}
                <div className="relative">
                  <textarea 
                    id="message" 
                    rows={4} 
                    placeholder=" "
                    className="peer w-full px-4 pt-5 pb-2 rounded-lg border border-gray-300 focus:border-[#C27D38] outline-none transition-colors resize-none bg-transparent text-gray-900"
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-4 top-3.5 text-gray-500 text-sm pointer-events-none transition-all duration-200 origin-left peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#C27D38] peer-focus:font-medium peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-500"
                  >
                    Message / Special Requests
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#C27D38] hover:bg-[#8C4F2B] text-white font-semibold py-4 px-6 rounded-lg transition-colors text-center tracking-wide shadow-md"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
