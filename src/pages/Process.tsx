import React from "react";
import { motion } from "motion/react";
import { ClipboardList, Code, CheckCircle2, Send, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: ClipboardList,
    title: "Expert Consultation and Custom Quote",
    desc: "Begin your ebook publishing journey by submitting your manuscript, document, or PDF file for a detailed assessment. Our specialists carefully evaluate your manuscript formatting needs, digital publishing goals, and technical requirements. This step ensures we understand your project scope and provide the most efficient strategy for high-quality ebook conversion services.",
    details: [
      "Secure manuscript or PDF file upload",
      "Detailed custom quote delivered within 24 hours",
      "Collaborative consultation to define publishing goals"
    ]
  },
  {
    icon: Code,
    title: "Precision Conversion and Professional Formatting",
    desc: "Once approved, our technical publishing experts begin the advanced ebook conversion process. Using professional XML-based workflows and digital publishing tools, we transform your content into high-quality ebook formats while preserving design, structure, and readability across all modern devices and platforms.",
    details: [
      "Conversion to EPUB, MOBI, and platform-specific ebook formats",
      "Optimization for Amazon Kindle, Apple Books, and Google Play",
      "Integration of hyperlinks, images, tables, and interactive elements"
    ]
  },
  {
    icon: CheckCircle2,
    title: "Comprehensive Review and Refinement",
    desc: "Before final delivery, your ebook undergoes a detailed quality review process. Our team validates formatting, layout consistency, navigation, and compatibility across multiple devices. You receive preview files to review the output and request refinements until every detail meets professional publishing standards.",
    details: [
      "Full ebook preview and layout comparison",
      "Unlimited revisions for formatting adjustments",
      "Rigorous quality assurance and validation testing"
    ]
  },
  {
    icon: Send,
    title: "Seamless Delivery and Publishing Guidance",
    desc: "After final approval, we deliver production-ready ebook files along with all necessary assets. Our team also provides strategic guidance for distributing and launching your ebook on leading publishing platforms, ensuring your content reaches readers smoothly and professionally.",
    details: [
      "Final EPUB, MOBI, and source files delivered",
      "SEO-optimized metadata preparation",
      "Expert guidance for Amazon KDP, Smashwords, and major platforms"
    ]
  }
];

export function Process() {
  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl mb-6">
              Our Proven 4-Step Journey to Flawless Ebook Publishing
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              Navigate digital publishing services with confidence through our
              streamlined ebook production process. From professional PDF to
              EPUB conversion to advanced ebook formatting services, every step
              is designed to deliver precision, reliability, and exceptional
              publishing results.
            </p>
          </div>

          {/* PROCESS STEPS */}
          <div className="relative">
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
                  {/* ICON */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-lg shadow-brand-600/30">
                      <step.icon size={28} />
                    </div>

                    <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center font-bold text-brand-600 shadow-sm">
                      {i + 1}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-grow bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl mb-4">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                          {step.desc}
                        </p>
                      </div>

                      <div className="bg-slate-50 rounded-2xl p-6">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                          Key Activities
                        </h4>

                        <ul className="space-y-3">
                          {step.details.map((detail, j) => (
                            <li
                              key={j}
                              className="flex items-center gap-3 text-slate-700 font-medium"
                            >
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

      {/* DELIVERY TEXT */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6">
              Professional Ebook Delivery in Just 3–5 Business Days
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Our efficient publishing workflow allows us to deliver
              high-quality digital books quickly without compromising
              formatting accuracy or publishing standards. Your completed
              ebook will be fully optimized, validated, and ready for global
              distribution across all major digital publishing platforms.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl mb-8">
              Begin Your Publishing Success
            </h2>

            <p className="text-xl text-slate-600 mb-12">
              Elevate your project with professional PDF to EPUB conversion and
              expert ebook formatting services. Start your publishing journey
              today with a free consultation.
            </p>

            <Link
              to="/contact"
              className="bg-brand-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all inline-flex items-center gap-2"
            >
              Schedule Free Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}