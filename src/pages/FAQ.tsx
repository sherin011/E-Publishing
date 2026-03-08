import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: "What is XML-based eBook conversion?",
    answer: "XML-based eBook conversion transforms your content into structured XML files that support flexible EPUB layouts and multiple digital formats. At E-PublishPro we use semantic XML tagging to make books searchable, accessible, and adaptable across platforms. This workflow is ideal for academic journals, technical manuals, and complex publications that require precision and long-term compatibility."
  },
  {
    question: "How long does PDF to eBook conversion take?",
    answer: "Most PDF to eBook conversion projects are completed within 3-7 business days depending on page count, formatting complexity, and interactive elements. Our workflow includes technical analysis, EPUB formatting, OCR processing if required, and multi-device testing to ensure a polished result."
  },
  {
    question: "Do you provide Kindle formatting?",
    answer: "Yes. Kindle formatting is one of our core services. We optimize files specifically for Amazon Kindle Direct Publishing (KDP), producing Kindle-ready formats like MOBI and KF8. Layouts are carefully adjusted so images, tables, links, and text display perfectly on Kindle e-readers, tablets, and mobile devices."
  },
  {
    question: "Can you digitize old magazines or archives?",
    answer: "Absolutely. Our digitization services specialize in preserving fragile magazines, newspapers, and archival materials. We perform high-resolution scanning followed by OCR processing to convert scanned pages into fully searchable digital content. The result is a well-structured digital archive that can be easily stored, searched, and shared."
  },
  {
    question: "What file formats do you support?",
    answer: "We accept many source formats including PDF, Word documents, scanned images, InDesign files, and TIFF or JPEG images. Our outputs include EPUB, MOBI, XML, PDF/A, HTML, and custom digital database formats depending on your publishing needs."
  },
  {
    question: "Is your EPUB compatible with all devices?",
    answer: "Yes. Every EPUB we produce follows EPUB 3.0 standards to ensure compatibility with Kindle, Apple Books, Google Play Books, Kobo, tablets, smartphones, and desktop readers. Each file is tested across multiple devices to guarantee smooth reading and proper formatting."
  },
  {
    question: "Do you offer OCR services?",
    answer: "Our OCR services convert scanned PDFs, images, and printed documents into editable and searchable digital text. This technology is especially useful for digitization projects, historical archives, and legacy documents that need to be converted into usable digital content."
  },
  {
    question: "How secure is my content?",
    answer: "Content security is a top priority. All projects are handled under strict NDAs, files are stored on encrypted servers, and access is restricted to assigned team members only. After project completion, files can be securely archived or removed according to client requirements."
  },
  {
    question: "What industries do you serve?",
    answer: "We support a wide range of industries including book publishers, academic institutions, independent authors, research organizations, corporate publishers, and archival institutions. From journals and reports to poetry collections and business publications, we adapt our workflow to each sector."
  },
  {
    question: "Do you provide social media strategy for authors?",
    answer: "Yes. Along with eBook publishing services we offer social media strategies for authors. This includes content planning, audience growth strategies, and promotional campaigns designed to increase visibility for new book launches and drive reader engagement."
  },
  {
    question: "What is the cost of EPUB formatting services?",
    answer: "EPUB formatting services typically start around $99 for simple books. Final pricing depends on page count, design complexity, images, and interactive features. We provide transparent quotes upfront so authors and publishers understand the full scope before starting a project."
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
