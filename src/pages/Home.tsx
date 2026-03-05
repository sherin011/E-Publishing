import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, FileText, Share2, Search, BookOpenCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-transparent">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-50/50 rounded-l-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-100/30 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
                <Zap size={14} />
                <span>The Future of Publishing</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
                Transforming Content for the <span className="text-brand-600">Digital Age</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                We bridge the gap between traditional publishers and modern social media platforms, turning manuscripts into global digital masterpieces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-600/20 flex items-center justify-center gap-2 group">
                  Get Started
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
                  View Services
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-8 text-slate-400">
                <div>
                  <div className="text-2xl font-bold text-slate-900">500k+</div>
                  <div className="text-sm">E-books Converted</div>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div>
                  <div className="text-2xl font-bold text-slate-900">120+</div>
                  <div className="text-sm">Countries Reached</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/open-book-digital/800/1000" 
                  alt="Digital Publishing" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 z-20 glass-card p-6 rounded-2xl max-w-[240px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-bold text-slate-900">99.9% Accuracy</span>
                </div>
                <p className="text-sm text-slate-500">Our XML-based workflow ensures perfect formatting on every device.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl mb-6">Comprehensive Digital Solutions</h2>
            <p className="text-lg text-slate-600">We offer specialized services to modernize your publishing workflow and expand your reach.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "PDF to eBook",
                desc: "High-fidelity XML-based conversion for Kindle, iPad, and Android devices.",
                color: "bg-blue-50 text-blue-600"
              },
              {
                icon: Search,
                title: "Content Recovery",
                desc: "Digitization and recovery of missing articles, magazines, and archives.",
                color: "bg-purple-50 text-purple-600"
              },
              {
                icon: BookOpenCheck,
                title: "Book Completion",
                desc: "Professional structuring and completion of incomplete manuscripts.",
                color: "bg-emerald-50 text-emerald-600"
              },
              {
                icon: Share2,
                title: "Social Bridge",
                desc: "Seamlessly connecting traditional publishing with social media platforms.",
                color: "bg-orange-50 text-orange-600"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all group"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", service.color)}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-brand-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-transparent overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-200/20 rounded-full blur-3xl" />
              <div className="relative z-10 space-y-8">
                <h2 className="text-3xl md:text-5xl">Why Choose Us?</h2>
                <p className="text-lg text-slate-600">We combine technical excellence with a passion for literature to deliver results that exceed expectations.</p>
                
                <div className="space-y-6">
                  {[
                    "Industry-Leading Turnaround Times",
                    "99.9% Error-Free Validation Guarantee",
                    "Direct Partnerships with Major Retailers",
                    "24/7 Dedicated Author Support"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="bg-brand-600 text-white p-1 rounded-full">
                        <CheckCircle2 size={18} />
                      </div>
                      <span className="font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-brand-600 rounded-3xl text-white shadow-xl shadow-brand-600/20">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-brand-100 font-medium mb-4">Satisfaction Rate</div>
                  <p className="italic text-brand-50">"The transition from my PDF to a fluid, beautiful E-pub was seamless. Highly recommended!"</p>
                  <div className="mt-4 flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Zap key={s} size={16} fill="currentColor" className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/book-stack-office/800/900" 
                  alt="Our Team" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 glass-card p-8 rounded-3xl hidden md:block">
                <div className="text-slate-900 font-bold text-lg mb-1">Established 2012</div>
                <div className="text-slate-500 text-sm">Over a decade of excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl mb-6">Our Seamless Process</h2>
            <p className="text-lg text-slate-600">From initial requirement to final delivery, we ensure a smooth and transparent workflow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connector Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
            
            {[
              { step: "01", title: "Requirement", desc: "We discuss your project goals and content needs." },
              { step: "02", title: "Analysis", desc: "Our experts analyze the source material for optimal conversion." },
              { step: "03", title: "XML Conversion", desc: "Professional transformation using our proprietary pipeline." },
              { step: "04", title: "Quality Check", desc: "Rigorous testing across multiple devices and platforms." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-8 shadow-lg shadow-brand-600/30">
                  {item.step}
                </div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl text-white mb-8">Ready to publish your masterpiece?</h2>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                Join thousands of authors who have successfully launched their digital publishing careers with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="bg-brand-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all">
                  Get a Custom Quote
                </Link>
                <Link to="/portfolio" className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                  View Our Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
