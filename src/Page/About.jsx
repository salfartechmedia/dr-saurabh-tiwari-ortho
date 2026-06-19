import { useState, useEffect, useRef } from "react";

/* ─── SCROLL REVEAL HOOK ─────────────────────────────── */
function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOn(true); }, { threshold });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return [ref, on];
}

/* ─── COUNTER ANIMATION ──────────────────────────────── */
function CountUp({ target, suffix = "", duration = 1800 }) {
  const [val, setVal] = useState(0);
  const [ref, on] = useReveal(0.3);
  useEffect(() => {
    if (!on) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [on, target, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── SECTION WRAPPER ────────────────────────────────── */
function Reveal({ children, delay = 0, style = {} }) {
  const [ref, on] = useReveal();
  return (
    <div ref={ref} style={{
      opacity: on ? 1 : 0,
      transform: on ? "translateY(0)" : "translateY(32px)",
      transition: `opacity .6s ease ${delay}ms, transform .6s ease ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ─── EYEBROW LABEL ──────────────────────────────────── */
function Eyebrow({ children, color = "#00B4D8" }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
      <div style={{ width:24, height:2, background:color }} />
      <span style={{ color, fontSize:11, fontWeight:800, letterSpacing:"0.18em", textTransform:"uppercase" }}>{children}</span>
    </div>
  );
}

/* ─── DATA ───────────────────────────────────────────── */
const MILESTONES = [
  { year:"1994", title:"Foundation",        desc:"Dr. R.K. Sharma establishes a small 20-bed nursing home with a vision of affordable quality care for Prayagraj." },
  { year:"2001", title:"First Expansion",   desc:"Grew to 100 beds. Added surgery, maternity, and paediatric wings. Over 10,000 patients served annually." },
  { year:"2008", title:"Multi-Speciality",  desc:"Launched cardiology, orthopaedics, and neurology departments. Installed first CT scanner in the district." },
  { year:"2014", title:"NABH Accreditation",desc:"Achieved National Accreditation Board for Hospitals certification — a landmark of quality and patient safety." },
  { year:"2019", title:"ICU & Trauma Centre",desc:"Opened a 48-bed ICU and 24×7 trauma emergency wing with dedicated rapid-response team." },
  { year:"2024", title:"30 Years of Healing",desc:"Celebrating three decades — 5,00,000+ patients treated, 500 beds, 12 OT suites, and growing." },
];

const TEAM = [
  { name:"Dr. Rajendra Kumar Sharma",  role:"Founder & Chairman",          spec:"MBBS, MS (General Surgery) — 35+ yrs experience",  img:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80&fit=crop&crop=faces", founder:true },
  { name:"Dr. Priya Sharma",           role:"Managing Director & CEO",      spec:"MBBS, MD (Medicine) — Healthcare Administration",   img:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&fit=crop&crop=faces", founder:false },
  { name:"Dr. Anil Verma",             role:"Chief of Surgery",             spec:"MS, MCh (Cardiothoracic Surgery) — 22 yrs",         img:"https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80&fit=crop&crop=faces", founder:false },
  { name:"Dr. Sunita Mishra",          role:"Head of Gynaecology",          spec:"MBBS, MD, DGO — Laparoscopic Specialist",           img:"https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80&fit=crop&crop=faces", founder:false },
  { name:"Dr. Vivek Pandey",           role:"Chief Neurologist",            spec:"MBBS, DM (Neurology) — Stroke & Epilepsy Care",     img:"https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80&fit=crop&crop=faces", founder:false },
  { name:"Dr. Meera Agarwal",          role:"Head of Paediatrics",          spec:"MBBS, MD (Paediatrics) — Neonatal Specialist",      img:"https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=80&fit=crop&crop=faces", founder:false },
];

const VALUES = [
  { icon:"❤️",  title:"Compassion",   desc:"Every patient is treated like family. Kindness is built into every interaction, at every level." },
  { icon:"🔬",  title:"Precision",    desc:"Clinical decisions backed by evidence, technology, and decades of accumulated expertise." },
  { icon:"🤝",  title:"Accessibility",desc:"World-class care at fair cost. No patient is turned away for inability to pay in an emergency." },
  { icon:"🏅",  title:"Excellence",   desc:"NABH-accredited processes, continuous staff training, and zero-compromise on patient safety." },
];

const ACCREDITATIONS = ["NABH Accredited", "ISO 9001:2015", "MCI Recognised", "CGHS Empanelled", "Ayushman Bharat"];

/* ─── MAIN ───────────────────────────────────────────── */
export default function About() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div style={{ minHeight:"100vh", background:"#F7FAFC", fontFamily:"'Inter', system-ui, sans-serif", color:"#0B1F3A" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=Inter:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .hide-scroll::-webkit-scrollbar { display: none; }
        .team-card:hover .team-overlay { opacity: 1 !important; }
        .team-card:hover img { transform: scale(1.06); }
        .val-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(11,31,58,.12) !important; }
      `}</style>

      {/* ════════════════════════════════
           HERO
          ════════════════════════════════ */}
      <div style={{ position:"relative", minHeight:560, overflow:"hidden", display:"flex", alignItems:"center" }}>
        {/* bg photo */}
        <div style={{
          position:"absolute", inset:0, zIndex:0,
          backgroundImage:"url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=85)",
          backgroundSize:"cover", backgroundPosition:"center 40%",
          filter:"brightness(0.25) saturate(1.1)",
        }} />
        {/* navy gradient */}
        <div style={{ position:"absolute", inset:0, zIndex:1, background:"linear-gradient(120deg,rgba(11,31,58,.92) 0%,rgba(3,60,90,.7) 60%,transparent 100%)" }} />
        {/* teal top line */}
        <div style={{ position:"absolute", top:0, left:0, right:0, height:3, zIndex:10, background:"linear-gradient(90deg,#00B4D8,#0077B6,#00B4D8)" }} />
        {/* bottom wave */}
        <div style={{ position:"absolute", bottom:0, left:0, right:0, zIndex:2 }}>
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" style={{ display:"block", height:60 }}>
            <path d="M0 60V30C360 0 1080 60 1440 30V60H0Z" fill="#F7FAFC" />
          </svg>
        </div>

        <div style={{ position:"relative", zIndex:5, maxWidth:1100, margin:"0 auto", padding:"80px 24px 100px" }}>
          {/* breadcrumb */}
          <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:24, color:"rgba(148,210,230,.7)", fontSize:12 }}>
            <span>Home</span>
            <span style={{ color:"#00B4D8" }}>›</span>
            <span style={{ color:"#fff" }}>About Us</span>
          </div>

          <Reveal>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
              <div style={{ width:28, height:2, background:"#00B4D8" }} />
              <span style={{ color:"#00B4D8", fontSize:11, fontWeight:800, letterSpacing:"0.18em", textTransform:"uppercase" }}>Est. 1994 · Prayagraj</span>
            </div>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontStyle:"italic", fontWeight:900, fontSize:"clamp(38px,5.5vw,68px)", lineHeight:1.05, color:"#fff", maxWidth:700, marginBottom:20 }}>
              Three Decades of<br />
              <span style={{ color:"#00B4D8" }}>Healing with Heart</span>
            </h1>
            <p style={{ color:"rgba(190,220,240,.75)", fontSize:16, lineHeight:1.75, maxWidth:520, marginBottom:36 }}>
              Since 1994, Jeevan Jyoti Hospital has stood as Prayagraj's most trusted multi-speciality centre — combining clinical excellence with the warmth of a family doctor.
            </p>

            {/* Pill badges */}
            <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
              {ACCREDITATIONS.map(a => (
                <span key={a} style={{ background:"rgba(0,180,216,.15)", border:"1px solid rgba(0,180,216,.35)", color:"#7dd3fc", fontSize:12, fontWeight:700, padding:"6px 14px", borderRadius:99 }}>
                  {a}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* ════════════════════════════════
           STATS STRIP
          ════════════════════════════════ */}
      <div style={{ background:"#0B1F3A", padding:"0 24px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:0 }}>
          {[
            { val:500, suf:"+", label:"Beds" },
            { val:30, suf:" yrs", label:"Of Service" },
            { val:500000, suf:"+", label:"Patients Treated" },
            { val:120, suf:"+", label:"Expert Doctors" },
          ].map((s, i) => (
            <div key={s.label} style={{
              padding:"32px 20px", textAlign:"center",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,.08)" : "none",
            }}>
              <p style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:"clamp(28px,3.5vw,44px)", color:"#00B4D8", lineHeight:1 }}>
                <CountUp target={s.val} suffix={s.suf} />
              </p>
              <p style={{ color:"rgba(180,215,240,.5)", fontSize:12, fontWeight:600, marginTop:6, letterSpacing:"0.08em", textTransform:"uppercase" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════
           MISSION / VISION TABS
          ════════════════════════════════ */}
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"72px 24px" }}>
        <Reveal>
          <Eyebrow>Who We Are</Eyebrow>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"clamp(26px,3.5vw,42px)", lineHeight:1.2, marginBottom:40, maxWidth:560 }}>
            Guided by purpose,<br />driven by people
          </h2>
        </Reveal>

        <div style={{ display:"flex", gap:32, flexWrap:"wrap", alignItems:"flex-start" }}>
          {/* Tabs */}
          <Reveal delay={100} style={{ flex:"1 1 340px" }}>
            <div style={{ display:"flex", gap:6, marginBottom:28 }}>
              {[["mission","Our Mission"],["vision","Our Vision"],["values","Our Values"]].map(([k,l]) => (
                <button key={k} onClick={() => setActiveTab(k)} style={{
                  padding:"8px 18px", borderRadius:99, border:"none",
                  fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit",
                  background: activeTab===k ? "#0B1F3A" : "transparent",
                  color: activeTab===k ? "#fff" : "#64748b",
                  boxShadow: activeTab===k ? "0 4px 16px rgba(11,31,58,.2)" : "none",
                  transition:"all .2s",
                }}>
                  {l}
                </button>
              ))}
            </div>

            {activeTab === "mission" && (
              <div>
                <p style={{ fontSize:16, lineHeight:1.85, color:"#475569", marginBottom:20 }}>
                  To provide every person who walks through our doors — regardless of background or income — with honest diagnosis, skilled treatment, and genuine compassion. We exist to serve the sick, not to profit from illness.
                </p>
                <p style={{ fontSize:16, lineHeight:1.85, color:"#475569" }}>
                  Our clinical teams are trained to communicate clearly, listen carefully, and act swiftly. We believe that trust is the foundation of healing.
                </p>
              </div>
            )}
            {activeTab === "vision" && (
              <div>
                <p style={{ fontSize:16, lineHeight:1.85, color:"#475569", marginBottom:20 }}>
                  To become northern India's most patient-centric multi-speciality hospital — where cutting-edge technology meets the human touch, and where no family leaves feeling unheard or uncared for.
                </p>
                <p style={{ fontSize:16, lineHeight:1.85, color:"#475569" }}>
                  We envision a future where preventive care, early diagnosis, and community health programmes make serious illness rarer — not just treatable.
                </p>
              </div>
            )}
            {activeTab === "values" && (
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
                {VALUES.map(v => (
                  <div key={v.title} className="val-card" style={{
                    background:"#fff", borderRadius:14, padding:"18px 16px",
                    boxShadow:"0 4px 16px rgba(11,31,58,.06)",
                    transition:"all .3s",
                  }}>
                    <div style={{ fontSize:24, marginBottom:8 }}>{v.icon}</div>
                    <p style={{ fontWeight:800, fontSize:14, marginBottom:6 }}>{v.title}</p>
                    <p style={{ fontSize:12, color:"#64748b", lineHeight:1.6 }}>{v.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </Reveal>

          {/* Side image block */}
          <Reveal delay={200} style={{ flex:"1 1 300px" }}>
            <div style={{ position:"relative", borderRadius:20, overflow:"hidden", boxShadow:"0 20px 60px rgba(11,31,58,.16)" }}>
              <img src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=700&q=85" alt="ICU" style={{ width:"100%", display:"block", height:340, objectFit:"cover" }} />
              <div style={{ position:"absolute", bottom:0, left:0, right:0, background:"linear-gradient(to top,rgba(11,31,58,.85),transparent)", padding:"28px 22px 20px" }}>
                <p style={{ fontFamily:"'Playfair Display',serif", fontStyle:"italic", color:"#fff", fontSize:18, lineHeight:1.4 }}>
                  "Every life matters. Every patient deserves our best."
                </p>
                <p style={{ color:"#00B4D8", fontSize:12, fontWeight:700, marginTop:8 }}>— Dr. R.K. Sharma, Founder</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ════════════════════════════════
           FOUNDER SECTION — diagonal split
          ════════════════════════════════ */}
      <div style={{ background:"#0B1F3A", overflow:"hidden", position:"relative" }}>
        {/* teal glow */}
        <div style={{ position:"absolute", top:"-30%", right:"-10%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(0,180,216,.12) 0%,transparent 70%)", pointerEvents:"none" }} />

        <div style={{ maxWidth:1100, margin:"0 auto", padding:"80px 24px", display:"flex", gap:0, flexWrap:"wrap", alignItems:"stretch" }}>

          {/* Left — photo */}
          <Reveal style={{ flex:"1 1 320px", position:"relative", minHeight:480 }}>
            <div style={{ height:"100%", minHeight:420, borderRadius:20, overflow:"hidden", position:"relative", boxShadow:"0 32px 80px rgba(0,0,0,.5)" }}>
              <img
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=700&q=85&fit=crop&crop=faces,top"
                alt="Dr. R.K. Sharma"
                style={{ width:"100%", height:"100%", minHeight:420, objectFit:"cover", objectPosition:"top", display:"block" }}
              />
              {/* Gold frame accent */}
              <div style={{ position:"absolute", inset:0, borderRadius:20, boxShadow:"inset 0 0 0 2px rgba(212,160,23,.3)" }} />
              {/* Name tag */}
              <div style={{
                position:"absolute", bottom:0, left:0, right:0,
                background:"linear-gradient(to top,rgba(11,31,58,.95),transparent)",
                padding:"32px 22px 22px",
              }}>
                <p style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#fff", fontSize:20 }}>Dr. Rajendra Kumar Sharma</p>
                <p style={{ color:"#D4A017", fontSize:13, fontWeight:700, marginTop:4 }}>Founder & Chairman</p>
                <p style={{ color:"rgba(180,215,240,.6)", fontSize:12, marginTop:2 }}>MBBS, MS (Surgery) · 35+ Years</p>
              </div>
            </div>
          </Reveal>

          {/* Right — founder story */}
          <Reveal delay={150} style={{ flex:"1 1 380px", padding:"0 0 0 48px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
            <Eyebrow color="#D4A017">Founder's Story</Eyebrow>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontStyle:"italic", fontWeight:900, fontSize:"clamp(28px,3.5vw,46px)", color:"#fff", lineHeight:1.15, marginBottom:24 }}>
              One doctor's dream<br />
              <span style={{ color:"#D4A017" }}>became a city's lifeline</span>
            </h2>

            {/* Big quote */}
            <div style={{ position:"relative", paddingLeft:24, marginBottom:28 }}>
              <div style={{ position:"absolute", left:0, top:0, bottom:0, width:3, background:"#D4A017", borderRadius:2 }} />
              <p style={{ fontFamily:"'Playfair Display',serif", fontStyle:"italic", color:"rgba(220,240,255,.85)", fontSize:18, lineHeight:1.7 }}>
                "I started with 20 beds, borrowed equipment, and an unshakeable belief that the people of Prayagraj deserved better healthcare — not a referral to some distant city."
              </p>
            </div>

            <p style={{ color:"rgba(180,210,240,.65)", fontSize:15, lineHeight:1.8, marginBottom:16 }}>
              Dr. Sharma began his practice in a rented building near Civil Lines in 1994. He performed surgeries himself, managed accounts at night, and personally greeted patients each morning. Within seven years, word spread across the district.
            </p>
            <p style={{ color:"rgba(180,210,240,.65)", fontSize:15, lineHeight:1.8, marginBottom:32 }}>
              Today, the hospital he built from scratch treats over 500 patients daily, employs 600+ staff, and runs free camps in underserved villages every quarter — guided by the same principle that started it all: <em style={{ color:"rgba(220,240,255,.8)" }}>no one should suffer because they cannot afford care.</em>
            </p>

            {/* Founder credentials */}
            <div style={{ display:"flex", gap:20, flexWrap:"wrap" }}>
              {[["35+","Years Practice"],["50,000+","Surgeries"],["3","National Awards"]].map(([v,l]) => (
                <div key={l} style={{ background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.1)", borderRadius:12, padding:"14px 18px", textAlign:"center" }}>
                  <p style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:22, color:"#D4A017" }}>{v}</p>
                  <p style={{ color:"rgba(180,215,240,.55)", fontSize:11, fontWeight:600, marginTop:4, textTransform:"uppercase", letterSpacing:"0.08em" }}>{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* ════════════════════════════════
           JOURNEY TIMELINE
          ════════════════════════════════ */}
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"80px 24px" }}>
        <Reveal>
          <Eyebrow>Our Journey</Eyebrow>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"clamp(26px,3.5vw,42px)", marginBottom:52 }}>
            30 years, milestone by milestone
          </h2>
        </Reveal>

        <div style={{ position:"relative" }}>
          {/* Vertical line */}
          <div style={{ position:"absolute", left:"50%", top:0, bottom:0, width:2, background:"linear-gradient(to bottom,#00B4D8,#0B1F3A)", transform:"translateX(-50%)" }} className="timeline-line" />
          <style>{`@media(max-width:640px){ .timeline-line{ left:20px !important } .tl-item-right,.tl-item-left { padding-left:52px !important; padding-right:0 !important; text-align:left !important; } .tl-dot { left:12px !important; right:auto !important; } }`}</style>

          {MILESTONES.map((m, i) => {
            const left = i % 2 === 0;
            return (
              <Reveal key={m.year} delay={i * 80} style={{ display:"flex", justifyContent: left ? "flex-start" : "flex-end", marginBottom:40, position:"relative" }}>
                {/* Dot */}
                <div className="tl-dot" style={{
                  position:"absolute", left:"50%", top:18, width:14, height:14,
                  background:"#00B4D8", borderRadius:"50%",
                  border:"3px solid #F7FAFC",
                  boxShadow:"0 0 0 3px #00B4D8",
                  transform:"translateX(-50%)",
                  zIndex:2,
                }} />

                <div
                  className={left ? "tl-item-left" : "tl-item-right"}
                  style={{
                    width:"44%", background:"#fff", borderRadius:16,
                    padding:"22px 24px",
                    boxShadow:"0 4px 20px rgba(11,31,58,.07)",
                    border:"1px solid rgba(11,31,58,.06)",
                    paddingRight: left ? "32px" : "24px",
                    paddingLeft:  left ? "24px" : "32px",
                    textAlign: left ? "right" : "left",
                  }}
                >
                  <p style={{ color:"#00B4D8", fontWeight:800, fontSize:13, letterSpacing:"0.08em", marginBottom:4 }}>{m.year}</p>
                  <p style={{ fontWeight:800, fontSize:16, marginBottom:6 }}>{m.title}</p>
                  <p style={{ color:"#64748b", fontSize:14, lineHeight:1.65 }}>{m.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* ════════════════════════════════
           LEADERSHIP TEAM
          ════════════════════════════════ */}
      <div style={{ background:"#fff", padding:"80px 24px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <Reveal>
            <Eyebrow>Our Team</Eyebrow>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"clamp(26px,3.5vw,42px)", marginBottom:48 }}>
              The people behind the care
            </h2>
          </Reveal>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:20 }}>
            {TEAM.map((t, i) => (
              <Reveal key={t.name} delay={i * 70}>
                <div className="team-card" style={{
                  borderRadius:18, overflow:"hidden", position:"relative", cursor:"pointer",
                  boxShadow: t.founder ? "0 8px 32px rgba(0,119,182,.2), 0 0 0 2px #00B4D8" : "0 4px 16px rgba(11,31,58,.08)",
                  transition:"box-shadow .3s",
                }}>
                  {/* Founder badge */}
                  {t.founder && (
                    <div style={{
                      position:"absolute", top:14, left:14, zIndex:3,
                      background:"#D4A017", color:"#fff",
                      fontSize:9, fontWeight:900, padding:"4px 8px", borderRadius:99,
                      letterSpacing:"0.12em", textTransform:"uppercase",
                    }}>Founder</div>
                  )}
                  <img src={t.img} alt={t.name} style={{ width:"100%", height:220, objectFit:"cover", objectPosition:"top", display:"block", transition:"transform .4s" }} />
                  {/* overlay */}
                  <div className="team-overlay" style={{
                    position:"absolute", inset:0,
                    background:"linear-gradient(to top,rgba(11,31,58,.9) 0%,rgba(11,31,58,.3) 50%,transparent 100%)",
                    opacity:0, transition:"opacity .3s",
                    display:"flex", alignItems:"flex-end", padding:16,
                  }}>
                    <p style={{ color:"rgba(180,220,240,.8)", fontSize:12, lineHeight:1.55 }}>{t.spec}</p>
                  </div>
                  {/* Info */}
                  <div style={{ padding:"14px 16px 16px", background:"#fff" }}>
                    <p style={{ fontWeight:800, fontSize:14, lineHeight:1.3, marginBottom:4 }}>{t.name}</p>
                    <p style={{ color:"#00B4D8", fontSize:12, fontWeight:700 }}>{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════
           ACCREDITATIONS STRIP
          ════════════════════════════════ */}
      <div style={{ background:"#F0F6FB", borderTop:"1px solid rgba(11,31,58,.07)", padding:"40px 24px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", textAlign:"center" }}>
          <p style={{ fontSize:11, fontWeight:800, letterSpacing:"0.18em", color:"#94a3b8", textTransform:"uppercase", marginBottom:20 }}>Certifications & Accreditations</p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:12, justifyContent:"center" }}>
            {ACCREDITATIONS.map(a => (
              <div key={a} style={{
                background:"#fff", border:"1.5px solid rgba(11,31,58,.1)",
                borderRadius:12, padding:"10px 22px",
                fontSize:13, fontWeight:700, color:"#0B1F3A",
                boxShadow:"0 2px 8px rgba(11,31,58,.05)",
              }}>
                ✓ {a}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════
           CTA
          ════════════════════════════════ */}
      <div style={{ background:"linear-gradient(135deg,#0B1F3A 0%,#0c3460 100%)", padding:"64px 24px", textAlign:"center" }}>
        <Reveal>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginBottom:14 }}>
            <div style={{ width:24, height:2, background:"#D4A017" }} />
            <span style={{ color:"#D4A017", fontSize:11, fontWeight:800, letterSpacing:"0.18em", textTransform:"uppercase" }}>Experience the Difference</span>
            <div style={{ width:24, height:2, background:"#D4A017" }} />
          </div>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontStyle:"italic", color:"#fff", fontSize:"clamp(26px,4vw,44px)", marginBottom:12 }}>
            Your health. Our priority.
          </h2>
          <p style={{ color:"rgba(180,215,255,.6)", fontSize:15, maxWidth:400, margin:"0 auto 32px", lineHeight:1.7 }}>
            Book a consultation with any of our specialists — same-day appointments available.
          </p>
          <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            <button style={{
              padding:"14px 36px", borderRadius:99, border:"none",
              background:"#DC2626", color:"#fff", fontSize:15, fontWeight:800,
              cursor:"pointer", fontFamily:"inherit",
              boxShadow:"0 8px 24px rgba(220,38,38,.4)",
            }}>Book Appointment</button>
            <button style={{
              padding:"14px 32px", borderRadius:99,
              background:"rgba(255,255,255,.08)", color:"#fff",
              border:"1px solid rgba(255,255,255,.18)",
              fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:"inherit",
            }}>Contact Us →</button>
          </div>
        </Reveal>
      </div>

      {/* FOOTER */}
      <div style={{ background:"#060D1A", padding:"16px 24px", textAlign:"center" }}>
        <p style={{ color:"rgba(100,140,180,.6)", fontSize:13 }}>
          Designed &amp; Developed by <span style={{ color:"#fff", fontWeight:800 }}>Salfartech</span>
        </p>
      </div>
    </div>
  );
}
