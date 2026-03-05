import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Shield, Globe, Award, Briefcase } from 'lucide-react';

export function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">Established 2012</div>
              <h1 className="text-4xl md:text-6xl mb-8">From Print to Pixels</h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                E-Publish Pro began with a simple observation: the tools available to authors were stuck in the past, while readers had already moved to the future. Our founders, a group of editors and software engineers, set out to bridge this gap.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                What started as a small digital startup has evolved into a global leader in e-publishing. We've spent over a decade perfecting the art of digital storytelling, ensuring that quality and integrity remain at the heart of every byte.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://picsum.photos/seed/ancient-books-digital-glow/800/600" 
                alt="Our Story" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600">We are committed to providing authors with world-class digital tools and readers with seamless access to information.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Innovation",
                desc: "Leveraging technology to push the boundaries of digital storytelling and creating immersive reading experiences."
              },
              {
                icon: Shield,
                title: "Integrity",
                desc: "Maintaining the highest standards of editorial excellence and author rights. We believe in transparency."
              },
              {
                icon: Users,
                title: "Accessibility",
                desc: "Ensuring our platform is inclusive and reachable for every global reader, regardless of their device or location."
              }
            ].map((value, i) => (
              <div key={i} className="p-10 rounded-3xl bg-slate-50 border border-slate-100 text-center">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-brand-600 mx-auto mb-8 shadow-sm">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl mb-6">Meet the Leadership</h2>
            <p className="text-lg text-slate-600">Guided by veterans from the publishing and technology industries.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Marcus Thorne", role: "Chief Executive Officer", img: "https://i.pravatar.cc/300?u=marcus" },
              { name: "Elena Rodriguez", role: "Editor-in-Chief", img: "https://i.pravatar.cc/300?u=elena" },
              { name: "Julian Vane", role: "Chief Tech Officer", img: "https://i.pravatar.cc/300?u=julian" },
              { name: "Sarah Jenkins", role: "Director of Operations", img: "https://i.pravatar.cc/300?u=sarah" }
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-brand-600 rounded-full scale-0 group-hover:scale-105 transition-transform duration-300 opacity-20" />
                  <img src={member.img} alt={member.name} className="w-48 h-48 rounded-full object-cover relative z-10 border-4 border-white shadow-lg" />
                </div>
                <h4 className="text-xl mb-1">{member.name}</h4>
                <p className="text-brand-600 font-medium text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding bg-brand-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { icon: Globe, label: "Countries Reached", value: "150+" },
              { icon: Award, label: "Industry Awards", value: "25+" },
              { icon: Briefcase, label: "Projects Handled", value: "10k+" },
              { icon: Users, label: "Global Authors", value: "500+" }
            ].map((metric, i) => (
              <div key={i}>
                <div className="flex justify-center mb-4">
                  <metric.icon size={32} className="text-brand-200" />
                </div>
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-brand-100 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
