import { Lock, ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import GlitchText from "@/components/ui/GlitchText";
import { fetchEventsForProgram, Event } from "@/lib/program-mapper";

export default async function Lockedin2026() {
  const currentYear = new Date().getFullYear();
  const slug = `locked-in-${currentYear}`;
  
  let programEvents: Event[] = [];
  try {
    programEvents = await fetchEventsForProgram(slug);
  } catch (error) {
    console.error("Failed to load program events:", error);
    // Graceful degradation: Page loads without the dynamic events section
    programEvents = [];
  }

  return (
    <div className="bg-background min-h-screen text-foreground flex flex-col items-center">
      <section className="max-w-[1600px] w-full px-6 pt-40 pb-20 border-x border-foreground/5">
        <Link href="/programs" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest text-foreground/40 hover:text-accent mb-20 transition-all">
          <ArrowLeft size={16} /> Back to Curriculum
        </Link>
        
        <div className="flex flex-col gap-6 max-w-6xl">
           <div className="flex items-center gap-4">
              <span className="p-2 border border-accent bg-accent/10">
                 <Lock size={24} className="text-accent" />
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-accent">Program / Restricted</span>
           </div>
           <GlitchText as="h1" text="LOCKEDIN // 2026" className="text-6xl md:text-[8rem] font-black leading-[0.85] tracking-tighter text-foreground" />
        </div>
      </section>

      {/* Program Details Content */}
      <section className="max-w-[1600px] w-full border-x border-t border-foreground/5 grid grid-cols-1 lg:grid-cols-12">
        {/* Sidebar / Overview */}
        <div className="lg:col-span-4 border-b lg:border-r border-foreground/5 p-8 md:p-12 lg:p-16 flex flex-col gap-12 bg-foreground/2">
             <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">Program Overview</h3>
                <ul className="space-y-4 text-sm font-medium text-foreground/70">
                    <li className="flex justify-between border-b border-foreground/5 pb-2">
                        <span>Duration</span> 
                        <span className="text-foreground font-bold">January – December 2026</span>
                    </li>
                    <li className="flex justify-between border-b border-foreground/5 pb-2">
                        <span>Mode</span> 
                        <span className="text-foreground font-bold">Online + In-person Workshops</span>
                    </li>
                    <li className="flex justify-between border-b border-foreground/5 pb-2">
                        <span>Audience</span> 
                        <span className="text-foreground font-bold">Students, Architects, Designers</span>
                    </li>
                </ul>
             </div>

             <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">Focus Areas</h3>
                <div className="flex flex-wrap gap-2">
                    {["Practical Design Skills", "Professional Development", "Industry Insights", "Community Engagement"].map(tag => (
                        <span key={tag} className="px-3 py-1 border border-foreground/10 text-[10px] uppercase font-bold tracking-wider hover:bg-foreground hover:text-background transition-colors cursor-default">
                            {tag}
                        </span>
                    ))}
                </div>
             </div>

             <div className="pt-8 mt-auto">
                 <p className="text-xl font-bold leading-tight mb-6">
                    &quot;A pathway to becoming a thinking architect.&quot;
                 </p>
                 <a href="#events" className="btn-primary w-full justify-center py-4">
                    View Schedule
                 </a>
             </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-8 p-8 md:p-12 lg:p-20 flex flex-col gap-20">
            {/* Intro */}
            <div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 max-w-3xl">
                    A Year-Long Architectural Growth Program
                </h2>
                <div className="prose prose-xl text-foreground/60 max-w-none font-medium leading-relaxed">
                    <p>
                        Locked-IN {currentYear} is TTA’s flagship annual program designed for architects, designers, and students seeking intentional professional growth. 
                        Over the course of the year, participants engage in structured learning, live events, and interactive sessions that bridge the gap between architectural education and practice.
                    </p>
                    <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Why Join?</h3>
                    <p>
                        Locked-IN {currentYear} is not just a series of events — it’s a framework for professional intentionality. Participants build skills, connect with mentors, and grow within a community of forward-thinking architects.
                    </p>
                </div>
            </div>

            {/* How It Works Grid */}
            <div>
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-12">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <span className="text-6xl font-black text-foreground/5 mb-4 block">01</span>
                        <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-accent">Dynamic Events</h3>
                        <p className="text-foreground/60 leading-relaxed mb-4">
                            Every event under Locked-IN 2026 is automatically linked to the program. This includes:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-foreground/60">
                            <li>Talks & Masterclasses</li>
                            <li>Q&A Sessions</li>
                            <li>Workshops & Hands-on Labs</li>
                            <li>Guest Panels with industry leaders</li>
                        </ul>
                    </div>
                    <div>
                        <span className="text-6xl font-black text-foreground/5 mb-4 block">02</span>
                        <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-accent">Structured Learning</h3>
                        <ul className="space-y-4 text-foreground/60">
                            <li><strong>Monthly Themes:</strong> Each month focuses on a new area of architectural practice.</li>
                            <li><strong>Practical Exercises:</strong> Actionable exercises aligned with each theme.</li>
                            <li><strong>Mentorship Opportunities:</strong> Access to guidance from seasoned architects.</li>
                        </ul>
                    </div>
                    <div>
                        <span className="text-6xl font-black text-foreground/5 mb-4 block">03</span>
                        <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-accent">Community Engagement</h3>
                        <ul className="space-y-4 text-foreground/60">
                            <li><strong>Interactive Discussions:</strong> Q&A and forums for sharing ideas.</li>
                            <li><strong>Networking Opportunities:</strong> Connect with peers and mentors.</li>
                            <li><strong>Collaborative Projects:</strong> Work on live briefs alongside members.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Highlights Table */}
            <div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">Program Highlights (Sample Events)</h3>
                <div className="border border-foreground/10">
                    {programEvents.slice(0, 5).map((event) => (
                        <div key={event.id} className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-foreground/10 last:border-0 hover:bg-foreground/2 transition-colors">
                            <div className="font-bold">{event.title}</div>
                            <div className="text-sm font-mono text-accent uppercase mt-2 md:mt-0">{event.type || "Event"}</div>
                            <div className="text-sm text-foreground/50 mt-2 md:mt-0">{event.focus || "General Session"}</div>
                        </div>
                    ))}
                    {programEvents.length === 0 && (
                        <div className="p-6 text-foreground/40 italic">No upcoming events scheduled yet.</div>
                    )}
                </div>
                <p className="text-xs text-foreground/40 mt-4 italic">
                    Note: All events are automatically grouped under Locked-IN 2026 on the website using program keywords.
                </p>
            </div>
            
            {/* CTA / Who Should Join */}
             <div className="bg-accent/5 border border-accent/10 p-12">
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">Who Should Join?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {[
                        "Architecture students looking for a professional edge",
                        "Early-career architects wanting structured growth",
                        "Designers seeking mentorship and community",
                        "Anyone passionate about intentional learning"
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-accent" />
                            <span className="font-medium text-foreground/80">{item}</span>
                        </li>
                    ))}
                </ul>

                <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 mt-12">Key Takeaways</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {[
                        "Comprehensive exposure to professional practice",
                        "Access to curated events and live mentorship",
                        "Connection with a like-minded community",
                        "Continuous, structured growth throughout the year"
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-accent" />
                            <span className="font-medium text-foreground/80">{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-12 pt-8 border-t border-accent/20">
                    <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-accent">How to Participate</h3>
                    <ol className="list-decimal pl-5 space-y-3 text-foreground/70 font-medium">
                        <li>Browse the program events listed on the TTA website.</li>
                        <li>Register for the events you’re interested in (registration links provided per event).</li>
                        <li>Attend live sessions or watch recordings at your convenience.</li>
                        <li>Engage with the community through forums, discussions, and collaborative projects.</li>
                    </ol>
                </div>
             </div>

        </div>
      </section>

      <div id="events" /> {/* Anchor for scroll */}

      {programEvents.length > 0 && (
         <section className="max-w-[1600px] w-full px-6 py-20 border-x border-t border-foreground/5">
            <div className="flex items-center gap-4 mb-12">
               <Calendar className="text-accent" />
               <h2 className="text-2xl font-black uppercase tracking-tighter text-foreground">Upcoming Sessions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {programEvents.map(event => (
                  <a 
                    key={event.id}
                    href={event.link}
                    target="_blank"
                    className="group p-8 border border-foreground/10 bg-foreground/2 hover:border-accent transition-all hover:bg-foreground/5 flex flex-col justify-between"
                  >
                     <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-accent mb-4">
                            {event.startDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} • {event.startDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                        </div>
                        <h3 className="text-xl font-bold leading-tight mb-4 group-hover:text-accent transition-colors">{event.title}</h3>
                        <p className="text-sm text-foreground/60 line-clamp-2">{event.description.replace(/\[program:.*?\]/g, '').replace(/#\w+/g, '')}</p>
                     </div>
                     <div className="mt-8 flex justify-end">
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">Register via Luma &rarr;</span>
                     </div>
                  </a>
               ))}
            </div>
         </section>
      )}
    </div>
  );
}


