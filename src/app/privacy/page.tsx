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

export default function PrivacyPolicy() {
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
            Legal / Privacy
          </motion.span>
          <motion.div variants={itemVariants}>
            <GlitchText 
              as="h1" 
              text="PRIVACY POLICY" 
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
            <p>The Thinking Architect (“TTA”, “we”, “our”) respects your privacy and is committed to protecting any personal information you share with us.</p>
            <p>This Privacy Policy explains how we collect, use, store, and protect information when you interact with our website, platforms, programs, and events.</p>
            <p>By engaging with TTA, you agree to the practices described in this policy.</p>
          </PolicySection>

          <PolicySection title="2. Information We Collect">
            <p>We collect only information that is necessary to operate our platform and services.</p>
            <p className="mb-2">This may include:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-accent">
              <li>Your name</li>
              <li>Email address</li>
              <li>Event registration details</li>
              <li>Messages or enquiries sent to us</li>
              <li>Platform interaction data (basic analytics)</li>
            </ul>
            <p className="mt-4">We do not collect sensitive personal data unless explicitly required and clearly stated.</p>
          </PolicySection>

          <PolicySection title="3. How We Use Your Information">
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-accent">
              <li>Communicate about programs, sessions, and events</li>
              <li>Manage event registrations and participation</li>
              <li>Respond to enquiries and correspondence</li>
              <li>Improve our platforms and content</li>
              <li>Maintain the integrity and security of our systems</li>
            </ul>
            <p className="mt-4">We do not sell, rent, or trade your personal information.</p>
          </PolicySection>

          <PolicySection title="4. Third-Party Platforms">
            <p>TTA operates across third-party platforms including:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-accent">
              <li>Telegram</li>
              <li>Luma</li>
              <li>YouTube</li>
            </ul>
            <p className="mt-4">Your interaction with these platforms is also subject to their respective privacy policies. TTA is not responsible for the data practices of third-party services.</p>
          </PolicySection>

          <PolicySection title="5. Data Storage & Security">
            <p>We take reasonable measures to protect your information against unauthorized access, misuse, or disclosure.</p>
            <p>Information is stored only for as long as necessary to fulfill its intended purpose or comply with applicable obligations.</p>
          </PolicySection>

          <PolicySection title="6. Communications">
            <p>By registering for events or joining TTA platforms, you may receive communications related to:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-accent">
              <li>Sessions and programs</li>
              <li>Event updates</li>
              <li>Community announcements</li>
            </ul>
            <p className="mt-4">You may opt out of non-essential communications at any time.</p>
          </PolicySection>

          <PolicySection title="7. Cookies & Analytics">
            <p>TTA may use basic cookies or analytics tools to understand website usage and improve user experience.</p>
            <p>These tools do not collect personal information beyond standard usage data.</p>
          </PolicySection>

          <PolicySection title="8. Your Rights">
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-accent">
              <li>Request access to your personal information</li>
              <li>Request corrections or updates</li>
              <li>Request deletion of your information, where applicable</li>
            </ul>
            <p className="mt-4">Requests can be made by contacting us directly.</p>
          </PolicySection>

          <PolicySection title="9. Policy Updates">
            <p>This Privacy Policy may be updated periodically to reflect changes in operations or legal requirements.</p>
            <p>Any updates will be posted on this page with a revised effective date.</p>
          </PolicySection>

          <PolicySection title="10. Contact">
            <p>For questions regarding this Privacy Policy or your data, please contact:</p>
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
