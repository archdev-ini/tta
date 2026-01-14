"use client";

import { motion } from "framer-motion";
import GlitchText from "@/components/ui/GlitchText";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function TermsOfService() {
  return (
    <div className="bg-background min-h-screen text-foreground flex flex-col items-center">
      <section className="max-w-[1600px] w-full px-6 pt-28 lg:pt-40 pb-20 border-x border-foreground/5">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col gap-6 max-w-4xl"
        >
           <motion.span 
            variants={itemVariants} 
            className="text-[11px] font-black uppercase tracking-[0.3em] text-accent"
          >
            Legal / Terms
          </motion.span>
          <motion.div variants={itemVariants}>
            <GlitchText 
              as="h1" 
              text="TERMS OF SERVICE" 
              className="text-4xl md:text-8xl font-black leading-[0.9] tracking-tighter text-foreground mb-4" 
            />
            <p className="text-xl text-foreground/40 font-bold uppercase tracking-widest">
              Effective Date: January 2026
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="max-w-[1600px] w-full px-6 py-20 border-x border-t border-foreground/5 mb-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto space-y-16"
        >
          <PolicySection title="1. Introduction">
            <p>These Terms of Service (“Terms”) govern your access to and use of The Thinking Architect (TTA) website, platforms, programs, sessions, events, and related services.</p>
            <p>By accessing or engaging with TTA, you agree to comply with these Terms.</p>
            <p>If you do not agree, please do not use our services.</p>
          </PolicySection>

          <PolicySection title="2. About TTA">
            <p>The Thinking Architect is an architectural platform providing:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-accent">
              <li>Talks and conversations</li>
              <li>Learning sessions and masterclasses</li>
              <li>Long-term professional programs</li>
              <li>Media content and community engagement</li>
            </ul>
            <p className="mt-4">TTA operates as a curated institution focused on architectural thinking and practice.</p>
          </PolicySection>

          <PolicySection title="3. Eligibility & Use">
            <p>By using TTA, you confirm that:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-accent">
              <li>You are at least 18 years old or have appropriate consent</li>
              <li>You will engage respectfully and professionally</li>
              <li>You will not misuse the platform or its content</li>
            </ul>
            <p className="mt-4">We reserve the right to restrict access if these conditions are violated.</p>
          </PolicySection>

          <PolicySection title="4. Programs, Sessions & Events">
            <ul className="list-disc pl-6 space-y-2 marker:text-accent">
              <li>Registration may be required for certain sessions or events</li>
              <li>Some programs or events may be paid</li>
              <li>Details, schedules, and availability may change</li>
            </ul>
            <p className="mt-4">TTA reserves the right to modify, reschedule, or cancel sessions where necessary.</p>
          </PolicySection>

          <PolicySection title="5. Intellectual Property">
            <p>All content provided by TTA — including:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-accent">
              <li>Talks</li>
              <li>Recordings</li>
              <li>Written materials</li>
              <li>Visual assets</li>
              <li>Program structures</li>
            </ul>
            <p className="mt-4">is the intellectual property of The Thinking Architect or its contributors.</p>
            <p>Content may not be copied, distributed, recorded, or reused without prior written permission.</p>
          </PolicySection>

          <PolicySection title="6. Community Conduct">
            <p>TTA community spaces (including Telegram and live sessions) are moderated.</p>
            <p className="mb-2">Participants must:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-accent">
              <li>Engage respectfully</li>
              <li>Avoid harassment, spam, or disruptive behavior</li>
              <li>Respect differing professional perspectives</li>
            </ul>
            <p className="mt-4">TTA reserves the right to remove participants who violate community standards.</p>
          </PolicySection>

          <PolicySection title="7. Third-Party Platforms">
            <p>TTA uses third-party services such as:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-accent">
              <li>Telegram</li>
              <li>Luma</li>
              <li>YouTube</li>
            </ul>
            <p className="mt-4">Your use of these platforms is also governed by their respective terms and policies.</p>
            <p>TTA is not responsible for outages, changes, or policies of third-party services.</p>
          </PolicySection>

          <PolicySection title="8. Limitation of Liability">
            <p>TTA provides educational and professional content for informational purposes.</p>
            <p className="mb-2">We are not responsible for:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-accent">
              <li>Decisions made based on content shared</li>
              <li>Professional, financial, or legal outcomes</li>
              <li>Losses arising from participation or reliance</li>
            </ul>
            <p className="mt-4">Use of TTA content is at your own discretion.</p>
          </PolicySection>

          <PolicySection title="9. Changes to Services or Terms">
            <p>TTA may update these Terms to reflect changes in operations or structure.</p>
            <p>Updated Terms will be posted on this page with a revised effective date. Continued use of TTA indicates acceptance of any updates.</p>
          </PolicySection>

          <PolicySection title="10. Termination">
            <p>TTA reserves the right to suspend or terminate access to any user who violates these Terms or acts contrary to the institution’s purpose and values.</p>
          </PolicySection>

          <PolicySection title="11. Governing Principles">
            <p>TTA is governed by principles of:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-accent">
              <li>Professional integrity</li>
              <li>Clarity</li>
              <li>Respect for architectural discourse</li>
            </ul>
            <p className="mt-4">These Terms are designed to protect the institution and its community.</p>
          </PolicySection>

          <PolicySection title="12. Contact">
            <p>For questions regarding these Terms, please contact:</p>
            <a href="mailto:thethinkingarchitect.africa@gmail.com" className="text-accent hover:underline font-bold mt-2 inline-block">thethinkingarchitect.africa@gmail.com</a>
          </PolicySection>
        </motion.div>
      </section>
       <section className="max-w-[1600px] w-full px-6 py-20 border-x border-t border-foreground/5 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.5em] text-foreground/20">
         <span>Foundation // Legal</span>
         <span>Global Network // <span className="font-logo">TTA</span></span>
      </section>
    </div>
  );
}

function PolicySection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-black uppercase tracking-tighter text-foreground">{title}</h2>
      <div className="text-lg text-foreground/60 leading-relaxed font-medium space-y-4">
        {children}
      </div>
    </div>
  );
}
