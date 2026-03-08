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
        <div className="container-custom relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
                <Zap size={14} />
                Multilingual Ebook Conversion Experts
              </div>
<h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
  Multilingual Ebook Conversion & <span className="text-brand-600">EPUB Formatting Services</span>
</h1>

<p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
  Convert your multilingual books into professional digital formats with expert PDF-to-EPUB conversion, Kindle formatting, and structured HTML/XML publishing ready for Amazon Kindle, Apple Books, and global ebook platforms.
</p>


              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg flex items-center justify-center gap-2 group">
                  Request Free Conversion Audit
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link to="/services" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
                  View Services
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-8 text-slate-400">
                <div>
                  <div className="text-2xl font-bold text-slate-900">500k+</div>
                  <div className="text-sm">Pages Converted</div>
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
                  alt="Multilingual ebook conversion"
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
                <p className="text-sm text-slate-500">
                  Our XML-first workflow ensures perfect formatting across every ebook device.
                </p>
              </div>

            </motion.div>

          </div>
        </div>
      </section>


      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl mb-6">Professional Ebook Formatting & Digital Publishing Services</h2>
            <p className="text-lg text-slate-600">
              Our services include multilingual content decoding, HTML/XML production, EPUB conversion, and platform-ready delivery for Kindle, Apple Books, and Google Play Books.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: FileText,
                title: "Multilingual Content Decoding",
                desc: "Extraction of content from print, PDF, or Word into clean structured HTML and XML while preserving language nuances.",
                color: "bg-blue-50 text-blue-600"
              },
              {
                icon: Search,
                title: "HTML & XML Production",
                desc: "Standards-compliant markup designed for ebook publishing and long-term digital content reuse.",
                color: "bg-purple-50 text-purple-600"
              },
              {
                icon: BookOpenCheck,
                title: "Ebook Conversion",
                desc: "High-quality EPUB, MOBI, and Kindle formats built from structured HTML/XML for perfect device compatibility.",
                color: "bg-emerald-50 text-emerald-600"
              },
              {
                icon: Share2,
                title: "Platform Ready Delivery",
                desc: "Files validated and optimized for Amazon KDP, Apple Books, Google Play Books, and major ebook platforms.",
                color: "bg-orange-50 text-orange-600"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl border border-slate-100 hover:border-brand-200 hover:shadow-xl transition-all group"
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


      {/* Workflow */}
      <section className="section-padding bg-white">

        <div className="container-custom">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl mb-6">Simple & Transparent Workflow</h2>
            <p className="text-lg text-slate-600">
              Our streamlined publishing workflow ensures your ebook is converted quickly and accurately.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {[
              { step: "01", title: "Share Your Files", desc: "Upload your PDFs, manuscripts, or print files for a quick technical assessment." },
              { step: "02", title: "HTML/XML Decoding", desc: "We convert your content into structured markup ready for digital publishing." },
              { step: "03", title: "Ebook Build & QA", desc: "EPUB and Kindle versions are created and tested across multiple devices." },
              { step: "04", title: "Final Delivery", desc: "Receive production-ready ebook, HTML, and XML files within 3-5 business days." }
            ].map((item, i) => (
              <div key={i} className="text-center">

                <div className="w-16 h-16 rounded-full bg-brand-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-8">
                  {item.step}
                </div>

                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">

          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center">

            <h2 className="text-4xl md:text-6xl text-white mb-8">
              Start Your Ebook Conversion Project
            </h2>

            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Share a sample of your language book today and discover the best path from print or PDF to clean HTML/XML and market-ready ebooks.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">

              <Link to="/contact" className="bg-brand-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all">
                Get a Free Consultation
              </Link>

              <Link to="/portfolio" className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                View Our Portfolio
              </Link>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}