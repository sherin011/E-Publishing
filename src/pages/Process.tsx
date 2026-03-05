import React from 'react';
import { motion } from 'motion/react';
import { ClipboardList, Search, Code, CheckCircle2, Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: ClipboardList,
    title: "Requirement Gathering",
    desc: "We start by understanding your specific needs, target audience, and the current state of your content.",
    details: ["Project scope definition", "Format requirements", "Timeline planning"]
  },
  {
    icon: Search,
    title: "Content Analysis",
    desc: "Our technical team reviews your source files (PDF, print, or manuscript) to identify the best conversion strategy.",
    details: ["Structure mapping", "Image quality assessment", "OCR requirements"]
  },
  {
    icon: Code,
    title: "XML-Based Conversion",
    desc: "Using our professional publishing pipeline, we transform your content into structured XML and digital formats.",
    details: ["Semantic tagging", "Styling & layout", "Device optimization"]
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    desc: "Every file undergoes rigorous testing across multiple devices to ensure perfect rendering and functionality.",
    details: ["W3C validation", "Multi-device testing", "Proofreading check"]
  },
  {
    icon: Send,
    title: "Delivery & Support",
    desc: "We deliver your digital-ready files and provide ongoing support for distribution and updates.",
    details: ["Final file handover", "Distribution guidance", "Post-launch support"]
  }
];

export function Process() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl mb-6">Our Workflow</h1>
            <p className="text-lg text-slate-600">A professional, XML-based digital publishing pipeline designed for quality and speed.</p>
          </div>

          <div className="relative">
            {/* Vertical Line for Mobile */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-100 md:hidden" />
            
            <div className="space-y-12">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-start gap-8 md:gap-16"
                >
                  {/* Step Number/Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-lg shadow-brand-600/30">
                      <step.icon size={28} />
                    </div>
                    <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center font-bold text-brand-600 shadow-sm">
                      {i + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl mb-4">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed mb-6">{step.desc}</p>
                      </div>
                      <div className="bg-slate-50 rounded-2xl p-6">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">What happens here:</h4>
                        <ul className="space-y-3">
                          {step.details.map((detail, j) => (
                            <li key={j} className="flex items-center gap-3 text-slate-700 font-medium">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl mb-8">Ready to start your project?</h2>
            <p className="text-xl text-slate-600 mb-12">Experience our professional publishing pipeline firsthand.</p>
            <Link to="/contact" className="bg-brand-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all inline-flex items-center gap-2">
              Start Your Transformation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
