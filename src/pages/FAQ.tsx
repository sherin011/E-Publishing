import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: "What is XML-based eBook conversion?",
    answer: "XML-based conversion is a professional publishing workflow where content is first structured into Extensible Markup Language (XML). This allows for perfect separation of content and style, ensuring your eBook looks flawless and functions correctly across all devices, from Kindles to smartphones."
  },
  {
    question: "Can old magazines and newspapers be digitized?",
    answer: "Yes! We specialize in recovering and digitizing historical archives. Our team uses high-end scanning technology and advanced OCR (Optical Character Recognition) combined with manual proofreading to restore missing articles and magazines to high-quality digital formats."
  },
  {
    question: "How is content safety and intellectual property handled?",
    answer: "We take security very seriously. All projects are handled under strict non-disclosure agreements (NDAs). Your files are stored on secure servers and only accessed by the specific team members assigned to your project. We never share or repurpose your content."
  },
  {
    question: "What is the typical workflow and timeline?",
    answer: "A standard conversion project typically takes 5-10 business days, depending on complexity. The process includes requirement gathering, technical analysis, XML conversion, multi-device quality checks, and final delivery. We provide regular updates throughout the process."
  },
  {
    question: "Do you support interactive elements in eBooks?",
    answer: "Absolutely. We can embed audio, video, interactive maps, and external links into your digital publications, provided the target format (like EPUB3) and device support them."
  },
  {
    question: "What formats do you deliver?",
    answer: "Our standard delivery includes EPUB (for Apple Books, Google Play, Kobo) and MOBI/AZW3 (for Amazon Kindle). We can also provide structured XML, HTML5, or print-ready PDF if required."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="pt-20">
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 text-brand-600 font-bold mb-4">
              <HelpCircle size={20} />
              <span>Common Questions</span>
            </div>
            <h1 className="text-4xl md:text-6xl mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-slate-600">Everything you need to know about our digital publishing services and workflow.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={cn(
                  "bg-white rounded-2xl border transition-all duration-300 overflow-hidden",
                  activeIndex === i ? "border-brand-200 shadow-lg shadow-brand-500/5" : "border-slate-100 shadow-sm"
                )}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className={cn("text-lg font-bold transition-colors", activeIndex === i ? "text-brand-600" : "text-slate-900")}>
                    {faq.question}
                  </span>
                  <div className={cn("shrink-0 transition-transform duration-300", activeIndex === i ? "rotate-180" : "rotate-0")}>
                    {activeIndex === i ? <Minus size={20} className="text-brand-600" /> : <Plus size={20} className="text-slate-400" />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-brand-600 rounded-[2.5rem] p-12 text-white shadow-xl shadow-brand-600/20">
            <h3 className="text-2xl mb-4">Still have questions?</h3>
            <p className="text-brand-100 mb-8">Our team is here to help you navigate your digital transformation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:support@epublishpro.com" className="bg-white text-brand-600 px-8 py-4 rounded-xl font-bold hover:bg-brand-50 transition-all">
                Email Support
              </a>
              <a href="/contact" className="bg-brand-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-800 transition-all border border-brand-500">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
