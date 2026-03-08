import React from 'react';
import { motion } from 'motion/react';
import { FileText, Share2, Search, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const services = [
  {
    id: 'pdf-to-epub',
    visualSeed: 'ebook-on-tablet',
    icon: FileText,
    title: "PDF to EPUB Conversion",
    subtitle: "Device-optimized ebook transformation",
    problem:
      "Static PDF files are difficult to read on mobile devices and often fail to deliver the responsive reading experience modern audiences expect.",
    solution:
      "Our specialists convert PDFs into responsive EPUB and Kindle-compatible formats using a structured XML publishing workflow.",
    benefits: [
      "Optimized for Kindle, iPad, and Android",
      "Interactive table of contents",
      "Searchable and scalable text",
      "Optimized images and lightweight file sizes"
    ],
    output: "EPUB & Kindle-ready ebook files",
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: 'ebook-formatting',
    visualSeed: 'book-social-media',
    icon: Share2,
    title: "Professional Ebook Formatting",
    subtitle: "Beautiful layouts for every device",
    problem:
      "Poorly formatted ebooks lead to reader frustration, negative reviews, and lower discoverability.",
    solution:
      "We design professional ebook layouts with optimized typography, image handling, and responsive formatting.",
    benefits: [
      "Professional typography and spacing",
      "Responsive layouts across devices",
      "Reflowable and fixed-layout options",
      "Optimized navigation and structure"
    ],
    output: "Professionally formatted EPUB / MOBI",
    color: "bg-orange-50 text-orange-600"
  },
  {
    id: 'manuscript-formatting',
    visualSeed: 'old-books-scanning',
    icon: Search,
    title: "Manuscript Formatting Services",
    subtitle: "Transform drafts into publish-ready books",
    problem:
      "Raw manuscripts often lack the structure and formatting required for modern digital publishing platforms.",
    solution:
      "We convert manuscripts into structured publishing formats with chapter hierarchy, metadata, and platform compliance.",
    benefits: [
      "Clean structured formatting",
      "Platform-compliant files",
      "Chapter hierarchy optimization",
      "Metadata and navigation structure"
    ],
    output: "Publish-ready manuscript files",
    color: "bg-purple-50 text-purple-600"
  },
  {
    id: 'digital-publishing',
    visualSeed: 'manuscript-editing',
    icon: BookOpen,
    title: "Digital Publishing Services",
    subtitle: "End-to-end ebook production",
    problem:
      "Publishing a digital book requires multiple technical steps including formatting, metadata creation, and platform optimization.",
    solution:
      "Our end-to-end digital publishing services prepare your ebook for Amazon Kindle, Apple Books, and global platforms.",
    benefits: [
      "SEO-optimized metadata",
      "ISBN integration",
      "Platform compatibility",
      "Distribution-ready files"
    ],
    output: "Global distribution-ready ebooks",
    color: "bg-emerald-50 text-emerald-600"
  }
];

export function Services() {
  return (
    <div className="pt-20">

      {/* HERO */}
      <section className="section-padding bg-transparent">
        <div className="container-custom">

         <div className="text-center max-w-3xl mx-auto mb-12">

      <h1 className="text-4xl md:text-6xl mb-6">
        Ebook Conversion & Digital Publishing Services
      </h1>

      <p className="text-lg text-slate-600 leading-relaxed">
        Professional ebook conversion services including PDF to EPUB conversion, 
        ebook formatting, and digital publishing solutions optimized for Kindle, 
        Apple Books, and major ebook platforms worldwide.
      </p>

      <p className="text-sm text-slate-500 mt-4">
        PDF to EPUB Conversion • Kindle Formatting • Manuscript Formatting • Digital Publishing
      </p>

    </div>
          {/* SERVICES */}
          <div className="space-y-12">

            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden relative"
              >

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                  {/* LEFT */}
                  <div className="lg:col-span-5">

                    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8", service.color)}>
                      <service.icon size={32} />
                    </div>

                    <h2 className="text-3xl mb-2">{service.title}</h2>

                    <p className="text-brand-600 font-semibold mb-6">
                      {service.subtitle}
                    </p>

                    <div className="mb-8 rounded-2xl overflow-hidden border border-slate-100 shadow-inner">
                      <img
                        src={`https://picsum.photos/seed/${service.visualSeed}/600/300`}
                        alt={service.title}
                        className="w-full h-auto object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                          The Problem
                        </h4>
                        <p className="text-slate-600">{service.problem}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Our Solution
                        </h4>
                        <p className="text-slate-600">{service.solution}</p>
                      </div>
                    </div>

                  </div>

                  {/* RIGHT */}
                  <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100">

                    <h4 className="text-xl font-bold mb-6">
                      Benefits of Our Ebook Publishing Services
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">

                      {service.benefits.map((benefit, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-brand-600 shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">
                            {benefit}
                          </span>
                        </div>
                      ))}

                    </div>

                    <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-6">

                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                          Final Output
                        </div>

                        <div className="text-lg font-bold text-slate-900">
                          {service.output}
                        </div>
                      </div>

                      <Link
                        to="/contact"
                        className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-700 transition-all flex items-center gap-2"
                      >
                        Get a Quote <ArrowRight size={18} />
                      </Link>

                    </div>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>


      {/* BENEFITS */}
      <section className="section-padding bg-slate-50">

        <div className="container-custom text-center max-w-4xl mx-auto">

          <h2 className="text-3xl md:text-5xl mb-8">
            Proven Benefits That Drive Author Success
          </h2>

          <p className="text-lg text-slate-600 mb-10">
            Our ebook publishing solutions deliver measurable results by combining 
            advanced formatting technology with publishing expertise.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left text-slate-700">

            <div>✔ Universal compatibility across Kindle, tablets, and mobile devices</div>

            <div>✔ Strategic metadata for enhanced book discoverability</div>

            <div>✔ Professional delivery within 3–5 business days</div>

            <div>✔ Unlimited revisions to guarantee publishing success</div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="section-padding">

        <div className="container-custom text-center">

          <h2 className="text-3xl md:text-5xl mb-6">
            Launch Your Professional Ebook Today
          </h2>

          <p className="text-lg text-slate-600 mb-10">
            Start your publishing journey with a complimentary ebook conversion consultation.
          </p>

          <Link
            to="/contact"
            className="bg-brand-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-brand-700 transition"
          >
            Request Free Quote
          </Link>

        </div>

      </section>

    </div>
  );
}