import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, BookOpen, FileText, Share2 } from 'lucide-react';

const projects = [
  {
    title: "Global Business Review",
    category: "PDF to eBook",
    image: "https://picsum.photos/seed/kindle-business-book/600/800",
    desc: "Converted a 500-page complex business PDF into a fluid, interactive EPUB for Kindle and iPad.",
    tags: ["XML", "EPUB", "Interactive"]
  },
  {
    title: "Historical Archives 1920-1950",
    category: "Digitization",
    image: "https://picsum.photos/seed/old-manuscript-scan/600/800",
    desc: "Recovered and digitized over 1,000 missing magazine articles from physical archives.",
    tags: ["OCR", "Recovery", "Archiving"]
  },
  {
    title: "The Digital Author Journey",
    category: "Social Bridge",
    image: "https://picsum.photos/seed/author-signing-ebook/600/800",
    desc: "Bridged a traditional manuscript with a comprehensive social media content strategy.",
    tags: ["Social Media", "Marketing", "Strategy"]
  },
  {
    title: "Scientific Journals Vol. 12",
    category: "Book Structuring",
    image: "https://picsum.photos/seed/scientific-digital-journal/600/800",
    desc: "Structured and completed a series of incomplete scientific journals for digital distribution.",
    tags: ["Editorial", "Formatting", "Science"]
  },
  {
    title: "Modern Poetry Anthology",
    category: "PDF to eBook",
    image: "https://picsum.photos/seed/poetry-ebook-ipad/600/800",
    desc: "Preserved delicate poetic formatting in a reflowable digital format.",
    tags: ["Design", "EPUB", "Poetry"]
  },
  {
    title: "Tech Trends Quarterly",
    category: "Digitization",
    image: "https://picsum.photos/seed/tech-manual-digital/600/800",
    desc: "Digitized a decade of tech magazines into a searchable online database.",
    tags: ["Database", "Searchable", "Tech"]
  }
];

export function Portfolio() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl mb-6">Our Portfolio</h1>
            <p className="text-lg text-slate-600">Explore some of our recent transformations and digital success stories.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-600 hover:text-white transition-all">
                      View Case Study <ExternalLink size={18} />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-brand-600 shadow-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl mb-3">{project.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-md border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl mb-6">The Transformation</h2>
            <p className="text-lg text-slate-600">See how we bridge the gap from traditional print to modern digital formats.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center text-slate-500">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Traditional PDF</h4>
                    <p className="text-sm text-slate-500">Fixed layout, non-responsive</p>
                  </div>
                </div>
                <div className="aspect-video bg-slate-200 rounded-xl overflow-hidden">
                  <img src="https://picsum.photos/seed/pdf-document/800/450" alt="PDF Demo" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-lg">
                  <Share2 size={24} />
                </div>
              </div>
              <div className="bg-brand-50 p-8 rounded-3xl border border-brand-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center text-white">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-900">E-Publish Pro Digital</h4>
                    <p className="text-sm text-brand-600">Fluid, interactive, device-optimized</p>
                  </div>
                </div>
                <div className="aspect-video bg-white rounded-xl overflow-hidden shadow-inner border border-brand-200">
                  <img src="https://picsum.photos/seed/ebook-tablet/800/450" alt="Digital Demo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl">Why Digital Matters</h3>
                <p className="text-slate-600 leading-relaxed">
                  In today's market, readers expect more than just a digital copy of a physical book. They want content that adapts to their lifestyle.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Global Reach", desc: "Instant distribution to millions of readers worldwide." },
                  { title: "Accessibility", desc: "Features like text-to-speech and adjustable font sizes." },
                  { title: "Interactivity", desc: "Embedded media, links, and interactive elements." },
                  { title: "Analytics", desc: "Understand how readers engage with your content." }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
