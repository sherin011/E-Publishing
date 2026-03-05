import React from 'react';
import { motion } from 'motion/react';
import { FileText, Share2, Search, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const services = [
  {
    id: 'pdf-to-ebook',
    visualSeed: 'ebook-on-tablet',
    icon: FileText,
    title: "PDF to eBook Conversion",
    subtitle: "XML-based workflow",
    problem: "Static PDF files are difficult to read on mobile devices and lack the interactivity modern readers expect.",
    solution: "We transform your PDFs into reflowable, high-fidelity eBook formats (EPUB, MOBI) using a professional XML-based pipeline.",
    benefits: ["Optimized for Kindle, iPad, and Android", "Interactive table of contents", "Searchable text and adjustable fonts", "Small file sizes with high-quality images"],
    output: "Digital-ready EPUB/MOBI files",
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: 'social-bridge',
    visualSeed: 'book-social-media',
    icon: Share2,
    title: "Publishing–Social Media Bridge",
    subtitle: "Expand your reach",
    problem: "Traditional publishers often struggle to translate their long-form content into engaging social media snippets.",
    solution: "We create a seamless bridge, extracting key insights and creating shareable digital assets from your books.",
    benefits: ["Automated content snippets", "Social-ready graphics and quotes", "Cross-platform distribution strategy", "Increased author visibility"],
    output: "Social media content kit",
    color: "bg-orange-50 text-orange-600"
  },
  {
    id: 'digitization',
    visualSeed: 'old-books-scanning',
    icon: Search,
    title: "Missing Articles Digitization",
    subtitle: "Recover lost archives",
    problem: "Valuable historical articles and magazines are often trapped in physical formats or low-quality scans.",
    solution: "Our recovery team uses advanced OCR and manual verification to digitize and structure missing archives.",
    benefits: ["High-accuracy text recovery", "Searchable digital archives", "Preservation of original layout/feel", "Metadata tagging for easy retrieval"],
    output: "Structured digital archive",
    color: "bg-purple-50 text-purple-600"
  },
  {
    id: 'structuring',
    visualSeed: 'manuscript-editing',
    icon: BookOpen,
    title: "Incomplete Book Structuring",
    subtitle: "Finish your legacy",
    problem: "Many authors have incomplete manuscripts that lack professional structure or missing chapters.",
    solution: "We provide editorial and technical support to structure, complete, and prepare incomplete books for publishing.",
    benefits: ["Professional narrative structuring", "Chapter-by-chapter analysis", "Formatting for digital & print", "Editorial guidance and completion"],
    output: "Publish-ready manuscript",
    color: "bg-emerald-50 text-emerald-600"
  }
];

export function Services() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl mb-6">Our Core Services</h1>
            <p className="text-lg text-slate-600">Tailored solutions for independent authors and established publishing houses alike.</p>
          </div>

          <div className="space-y-12">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  <div className="lg:col-span-5">
                    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8", service.color)}>
                      <service.icon size={32} />
                    </div>
                    <h2 className="text-3xl mb-2">{service.title}</h2>
                    <p className="text-brand-600 font-semibold mb-6">{service.subtitle}</p>
                    
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
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">The Problem</h4>
                        <p className="text-slate-600">{service.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Our Solution</h4>
                        <p className="text-slate-600">{service.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100">
                    <h4 className="text-xl font-bold mb-6">Key Benefits</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                      {service.benefits.map((benefit, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-brand-600 shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-6">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Final Output</div>
                        <div className="text-lg font-bold text-slate-900">{service.output}</div>
                      </div>
                      <Link to="/contact" className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-700 transition-all flex items-center gap-2">
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
    </div>
  );
}
