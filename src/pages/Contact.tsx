import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h1 className="text-4xl md:text-6xl mb-6">Let's Talk Publishing</h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Ready to transform your content? Our experts are here to guide you through every step of the digital publishing journey.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: Mail, title: "Email Us", detail: "shinetech25@yahoo.com ", sub: "Response within 24 hours" },
                  { icon: Phone, title: "Call Us", detail: "+91 8015149162", sub: "Mon-Fri, 9am - 6pm EST" },
                  { icon: MapPin, title: "Visit Us", detail: "21-1/10 Pettai Atrankarai Street", sub: "Kumbakonam - 612001" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-brand-600 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-900 font-medium">{item.detail}</p>
                      <p className="text-sm text-slate-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4 mb-4 text-brand-600">
                  <Clock size={24} />
                  <h4 className="font-bold">Operating Hours</h4>
                </div>
                <div className="space-y-2 text-slate-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-bold text-slate-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-bold text-slate-900">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-bold text-slate-900">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50"
              >
                <div className="mb-10">
                  <h2 className="text-3xl mb-2">Send a Message</h2>
                  <p className="text-slate-500">Fill out the form below and we'll get back to you shortly.</p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-brand-300 focus:ring-4 focus:ring-brand-500/5 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-brand-300 focus:ring-4 focus:ring-brand-500/5 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Service Interested In</label>
                      <select className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-brand-300 focus:ring-4 focus:ring-brand-500/5 outline-none transition-all appearance-none">
                        <option>PDF to eBook</option>
                        <option>Social Bridge</option>
                        <option>Digitization</option>
                        <option>Book Structuring</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Project Timeline</label>
                      <select className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-brand-300 focus:ring-4 focus:ring-brand-500/5 outline-none transition-all appearance-none">
                        <option>Immediate</option>
                        <option>1-3 Months</option>
                        <option>3-6 Months</option>
                        <option>Just Exploring</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Project Details</label>
                    <textarea 
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:border-brand-300 focus:ring-4 focus:ring-brand-500/5 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button className="w-full bg-brand-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20 flex items-center justify-center gap-3 group">
                    Send Message
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 grayscale opacity-50">
          <img 
            src="https://picsum.photos/seed/modern-library-interior/1920/400" 
            alt="Office Location" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="glass-card p-6 rounded-2xl flex items-center gap-4 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-bold">E-Publish Pro HQ</h4>
              <p className="text-sm text-slate-500">Kumbakonam - 612001</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
