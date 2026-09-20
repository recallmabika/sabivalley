"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { activities } from "@/data/content";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export default function BookingInquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visitors: "",
    message: "",
  });
  const [selectedActivity, setSelectedActivity] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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
          setErrors(prev => ({ ...prev, date: "" }));
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.phone.trim()) {
      const phoneClean = formData.phone.replace(/[\s\-()+]/g, "");
      if (phoneClean.length < 7 || phoneClean.length > 15) {
        newErrors.phone = "Please enter a valid phone number (7-15 digits).";
      }
    }

    const visitorsNum = Number(formData.visitors);
    if (!formData.visitors) {
      newErrors.visitors = "Number of visitors is required.";
    } else if (isNaN(visitorsNum) || visitorsNum < 1) {
      newErrors.visitors = "Must be at least 1 visitor.";
    } else if (visitorsNum > 100) {
      newErrors.visitors = "For groups over 100, please contact us directly.";
    }

    if (!selectedActivity) {
      newErrors.activity = "Please select a primary activity.";
    }

    if (!selectedDate) {
      newErrors.date = "Please select your preferred visit date.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        visitors: "",
        message: "",
      });
      setSelectedActivity("");
      setSelectedDate("");
      if (dateInputRef.current) {
        dateInputRef.current.value = "";
      }
    }, 5000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-white">
      {/* Landscape Sunrise & Wildlife Background covering the whole window - Sharp, No Blur */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Image
          src="/images/safari/contact-bg.jpg"
          alt="Chipinge Safari Area sunrise landscape"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Crisp neutral light wash for perfect readability without blur or goldish tint */}
        <div className="absolute inset-0 bg-white/30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading text-[#1B3B2B] mb-6">Plan Your Visit</h2>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed font-medium">
              Experience the raw beauty of the Chipinge Safari Area. Whether you're seeking a thrilling walking safari or an educational conservation tour, our team is ready to help you plan an unforgettable adventure.
            </p>

            {/* Contact Details Card - Border Removed */}
            <div className="p-5 sm:p-6 rounded-xl mb-6 bg-white/65 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#1B3B2B] mt-0.5 mr-3 shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-[#1B3B2B]">Location</h3>
                    <p className="text-xs sm:text-sm text-gray-900 font-medium">Chipinge Safari Area, South East Lowveld, Zimbabwe</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-[#1B3B2B] mt-0.5 mr-3 shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-[#1B3B2B]">Phone</h3>
                    <p className="text-xs sm:text-sm text-gray-900 font-medium">Contact ZIMPARKS SELR Office</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-[#1B3B2B] mt-0.5 mr-3 shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-[#1B3B2B]">Email</h3>
                    <a href="mailto:info@chipingesafari.co.zw" className="text-xs sm:text-sm text-gray-900 font-semibold hover:text-[#1B3B2B] underline decoration-gray-400 transition-colors break-all">
                      info@chipingesafari.co.zw
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#1B3B2B] mt-0.5 mr-3 shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-[#1B3B2B]">Operating Hours</h3>
                    <p className="text-xs sm:text-sm text-gray-900 font-medium">Open Daily: 06:00 – 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Visitor Notes - Border Removed */}
            <div className="p-6 rounded-xl bg-white/65 shadow-sm">
              <h3 className="font-heading text-xl mb-3 text-[#1B3B2B] font-bold">Important Visitor Notes</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-900 font-medium">
                <li>All walking safaris require a professional armed ranger accompaniment.</li>
                <li>Strictly no littering. Take only photographs, leave only footprints.</li>
                <li>Respect wildlife distances and adhere to all guide instructions.</li>
                <li>Self-driving is permitted only on designated routes with a 4x4 vehicle.</li>
              </ul>
            </div>
          </motion.div>

          {/* Inquiry Form Card - Border Removed */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 md:p-10 rounded-2xl bg-white/65 shadow-sm"
          >
            <h3 className="text-2xl font-heading text-[#1B3B2B] mb-6">Send an Inquiry</h3>
            
            {submitted ? (
              <div className="bg-[#1B3B2B]/10 border border-[#1B3B2B]/20 text-[#1B3B2B] p-6 rounded-lg text-center">
                <p className="font-semibold text-lg mb-2">Thank you for your inquiry!</p>
                <p>Our team will get back to you shortly to help plan your visit.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name - Floating Label */}
                <div>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=" "
                      className={`peer w-full px-4 pt-5 pb-2 rounded-lg border-2 outline-none transition-all bg-white/85 hover:bg-white focus:bg-white text-gray-900 font-semibold text-sm ${
                        errors.name ? "border-red-500 focus:border-red-600" : "border-[#1B3B2B]/35 focus:border-[#1B3B2B]"
                      }`}
                    />
                    <label 
                      htmlFor="name" 
                      className={`absolute left-4 top-3.5 text-sm pointer-events-none transition-all duration-200 origin-left peer-focus:top-1.5 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs font-semibold ${
                        errors.name ? "text-red-600 peer-focus:text-red-600" : "text-gray-800 peer-focus:text-[#1B3B2B] peer-focus:font-bold"
                      }`}
                    >
                      Full Name *
                    </label>
                  </div>
                  {errors.name && <p className="text-xs text-red-600 font-medium mt-1 pl-1">{errors.name}</p>}
                </div>

                {/* Email Address - Floating Label */}
                <div>
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      className={`peer w-full px-4 pt-5 pb-2 rounded-lg border-2 outline-none transition-all bg-white/85 hover:bg-white focus:bg-white text-gray-900 font-semibold text-sm ${
                        errors.email ? "border-red-500 focus:border-red-600" : "border-[#1B3B2B]/35 focus:border-[#1B3B2B]"
                      }`}
                    />
                    <label 
                      htmlFor="email" 
                      className={`absolute left-4 top-3.5 text-sm pointer-events-none transition-all duration-200 origin-left peer-focus:top-1.5 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs font-semibold ${
                        errors.email ? "text-red-600 peer-focus:text-red-600" : "text-gray-800 peer-focus:text-[#1B3B2B] peer-focus:font-bold"
                      }`}
                    >
                      Email Address *
                    </label>
                  </div>
                  {errors.email && <p className="text-xs text-red-600 font-medium mt-1 pl-1">{errors.email}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Phone Number - Floating Label */}
                  <div>
                    <div className="relative">
                      <input 
                        type="tel" 
                        id="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=" "
                        className={`peer w-full px-4 pt-5 pb-2 rounded-lg border-2 outline-none transition-all bg-white/85 hover:bg-white focus:bg-white text-gray-900 font-semibold text-sm ${
                          errors.phone ? "border-red-500 focus:border-red-600" : "border-[#1B3B2B]/35 focus:border-[#1B3B2B]"
                        }`}
                      />
                      <label 
                        htmlFor="phone" 
                        className={`absolute left-4 top-3.5 text-sm pointer-events-none transition-all duration-200 origin-left peer-focus:top-1.5 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs font-semibold ${
                          errors.phone ? "text-red-600 peer-focus:text-red-600" : "text-gray-800 peer-focus:text-[#1B3B2B] peer-focus:font-bold"
                        }`}
                      >
                        Phone Number
                      </label>
                    </div>
                    {errors.phone && <p className="text-xs text-red-600 font-medium mt-1 pl-1">{errors.phone}</p>}
                  </div>

                  {/* Number of Visitors - Floating Label */}
                  <div>
                    <div className="relative">
                      <input 
                        type="number" 
                        id="visitors" 
                        min="1" 
                        value={formData.visitors}
                        onChange={handleChange}
                        placeholder=" "
                        className={`peer w-full px-4 pt-5 pb-2 rounded-lg border-2 outline-none transition-all bg-white/85 hover:bg-white focus:bg-white text-gray-900 font-semibold text-sm ${
                          errors.visitors ? "border-red-500 focus:border-red-600" : "border-[#1B3B2B]/35 focus:border-[#1B3B2B]"
                        }`}
                      />
                      <label 
                        htmlFor="visitors" 
                        className={`absolute left-4 top-3.5 text-sm pointer-events-none transition-all duration-200 origin-left peer-focus:top-1.5 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs font-semibold ${
                          errors.visitors ? "text-red-600 peer-focus:text-red-600" : "text-gray-800 peer-focus:text-[#1B3B2B] peer-focus:font-bold"
                        }`}
                      >
                        Number of Visitors *
                      </label>
                    </div>
                    {errors.visitors && <p className="text-xs text-red-600 font-medium mt-1 pl-1">{errors.visitors}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Custom Dropdown Field - Floating Style */}
                  <div>
                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full px-4 pt-5 pb-2 rounded-lg border-2 text-left bg-white/85 hover:bg-white flex items-center justify-between transition-all outline-none ${
                          errors.activity 
                            ? "border-red-500" 
                            : isDropdownOpen 
                              ? "border-[#1B3B2B]" 
                              : "border-[#1B3B2B]/35 hover:border-[#1B3B2B]"
                        }`}
                      >
                        <span className={selectedActivity ? "text-gray-900 font-semibold text-sm" : "text-transparent text-sm"}>
                          {selectedActivity || "Placeholder"}
                        </span>
                        <span className={`transition-transform duration-200 text-xs text-[#1B3B2B] font-bold ${isDropdownOpen ? "rotate-180" : ""}`}>
                          ▼
                        </span>
                      </button>

                      <span 
                        className={`absolute left-4 pointer-events-none transition-all duration-200 origin-left text-sm font-semibold ${
                          selectedActivity || isDropdownOpen
                            ? "top-1.5 text-xs text-[#1B3B2B] font-bold"
                            : errors.activity 
                              ? "top-3.5 text-red-600" 
                              : "top-3.5 text-gray-800"
                        }`}
                      >
                        Primary Activity Interest *
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
                                  setErrors(prev => ({ ...prev, activity: "" }));
                                }}
                                className={`w-full px-4 py-2.5 text-left text-sm transition-colors flex items-center justify-between ${
                                  selectedActivity === activity.title
                                    ? "bg-[#1B3B2B]/10 text-[#1B3B2B] font-semibold"
                                    : "text-gray-800 hover:bg-gray-50"
                                }`}
                              >
                                <span>{activity.title}</span>
                                {selectedActivity === activity.title && (
                                  <span className="text-[#1B3B2B] font-bold">✓</span>
                                )}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {errors.activity && <p className="text-xs text-red-600 font-medium mt-1 pl-1">{errors.activity}</p>}
                  </div>

                  {/* Flatpickr Date Field - Floating Label */}
                  <div>
                    <div className="relative">
                      <input 
                        ref={dateInputRef}
                        type="text" 
                        id="flatpickr-date" 
                        placeholder=" "
                        className={`peer w-full px-4 pt-5 pb-2 rounded-lg border-2 outline-none transition-all bg-white/85 hover:bg-white focus:bg-white cursor-pointer text-gray-900 font-semibold text-sm ${
                          errors.date ? "border-red-500 focus:border-red-600" : "border-[#1B3B2B]/35 focus:border-[#1B3B2B]"
                        }`}
                      />
                      <label 
                        htmlFor="flatpickr-date" 
                        className={`absolute left-4 top-3.5 text-sm pointer-events-none transition-all duration-200 origin-left peer-focus:top-1.5 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs font-semibold ${
                          errors.date ? "text-red-600 peer-focus:text-red-600" : "text-gray-800 peer-focus:text-[#1B3B2B] peer-focus:font-bold"
                        }`}
                      >
                        Preferred Date *
                      </label>
                    </div>
                    {errors.date && <p className="text-xs text-red-600 font-medium mt-1 pl-1">{errors.date}</p>}
                  </div>
                </div>

                {/* Message / Special Requests - Floating Label */}
                <div>
                  <div className="relative">
                    <textarea 
                      id="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full px-4 pt-5 pb-2 rounded-lg border-2 border-[#1B3B2B]/35 focus:border-[#1B3B2B] outline-none transition-all resize-none bg-white/85 hover:bg-white focus:bg-white text-gray-900 font-semibold text-sm"
                    ></textarea>
                    <label 
                      htmlFor="message" 
                      className="absolute left-4 top-3.5 text-gray-800 font-semibold text-sm pointer-events-none transition-all duration-200 origin-left peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#1B3B2B] peer-focus:font-bold peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-800"
                    >
                      Message / Special Requests
                    </label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#1B3B2B] hover:bg-[#12281D] text-white font-semibold py-4 px-6 rounded-lg transition-colors text-center tracking-wide shadow-md"
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
