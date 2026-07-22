import {
  ArrowRight,
  Calendar,
  Phone,
  Bone,
  Activity,
  ShieldCheck,
  HeartPulse,
  CheckCircle2,
} from "lucide-react";

const conditions = [
  {
    title: "Herniated Disc",
    desc: "Bulging or slipped discs causing pain, numbness, and nerve compression.",
  },
  {
    title: "Spinal Stenosis",
    desc: "Narrowing of the spinal canal leading to pain and reduced mobility.",
  },
  {
    title: "Joint Disorders",
    desc: "Conditions affecting joints that can be treated using minimally invasive techniques.",
  },
  {
    title: "Sports Injuries",
    desc: "Selected sports-related injuries requiring surgical intervention.",
  },
  {
    title: "Chronic Back Pain",
    desc: "Persistent back pain not responding to conservative treatment.",
  },
  {
    title: "Degenerative Conditions",
    desc: "Age-related conditions affecting the spine and joints.",
  },
  {
    title: "Nerve Compression",
    desc: "Pressure on nerves resulting in pain, weakness, or numbness.",
  },
  {
    title: "Orthopedic Trauma",
    desc: "Selected fractures and injuries suitable for minimally invasive procedures.",
  },
];

const symptoms = [
  "Persistent Pain",
  "Limited Mobility",
  "Numbness",
  "Joint Stiffness",
  "Difficulty Walking",
  "Muscle Weakness",
  "Reduced Flexibility",
  "Chronic Discomfort",
];

export default function MinimallyInvasiveSurgery() {
  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
                <ShieldCheck className="w-4 h-4 mr-2 text-cyan-300" />
                Advanced Minimally Invasive Surgical Care
              </span>

              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Minimally Invasive Surgery
              </h1>

              <p className="mt-6 text-lg text-blue-100 leading-8">
                Advanced minimally invasive procedures designed to
                reduce pain, minimize scarring, and promote faster
                recovery while delivering excellent surgical outcomes.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="flex items-center gap-2 rounded-xl bg-white text-blue-950 px-6 py-3 font-semibold transition hover:bg-blue-100">
                  <Calendar size={20} />
                  Book Appointment
                </button>

                <button className="flex items-center gap-2 rounded-xl border border-white px-6 py-3 font-semibold hover:bg-white hover:text-blue-950 transition">
                  <Phone size={20} />
                  Call Now
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="/images/minimally-invasive-surgery.jpg"
                  alt="Minimally Invasive Surgery"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white text-blue-950 rounded-2xl shadow-xl px-6 py-5">
                <div className="text-3xl font-bold">
                  Advanced
                </div>

                <div className="text-gray-600">
                  Surgical Techniques
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/minimally-invasive-treatment.jpg"
                alt="Minimally Invasive Treatment"
                className="rounded-3xl shadow-lg object-cover w-full h-[500px]"
              />
            </div>

            <div>
              <span className="text-blue-700 font-semibold uppercase tracking-wider">
                About Minimally Invasive Surgery
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mt-3">
                Precision Treatment with Faster Recovery
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Minimally invasive surgery uses advanced techniques and
                specialized instruments to perform procedures through
                smaller incisions, reducing pain, blood loss, and
                hospital stay.
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                Dr. Saurabh Tiwari utilizes modern minimally invasive
                approaches to help patients recover faster and return
                to their daily lives with greater comfort and confidence.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-10">
                <div className="rounded-2xl border p-5">
                  <Bone className="text-blue-700 mb-3" />

                  <h3 className="font-semibold text-lg">
                    Smaller Incisions
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Advanced techniques that minimize tissue damage.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <HeartPulse className="text-blue-700 mb-3" />

                  <h3 className="font-semibold text-lg">
                    Faster Recovery
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Helping patients recover quickly and comfortably.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS SECTION */}
      {/* SYMPTOMS SECTION */}

      {/* PART-2 STARTS HERE */}

            {/* ================= TREATMENT ================= */}

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-blue-700 uppercase font-semibold">
              Treatment Options
            </span>

            <h2 className="text-4xl font-bold mt-3">
              Advanced Procedures with Minimal Disruption
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mt-16">
            {/* Conservative Management */}

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                  <ShieldCheck className="text-green-600" />
                </div>

                <h3 className="text-2xl font-bold">
                  Conservative Management
                </h3>
              </div>

              <ul className="mt-8 space-y-4">
                {[
                  "Medications",
                  "Physiotherapy",
                  "Pain Management",
                  "Lifestyle Modifications",
                  "Image-Guided Injections",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      className="text-green-600"
                      size={20}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Surgical Procedures */}

            <div className="bg-blue-950 text-white rounded-3xl p-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Bone />
                </div>

                <h3 className="text-2xl font-bold">
                  Minimally Invasive Procedures
                </h3>
              </div>

              <ul className="mt-8 space-y-4">
                {[
                  "Minimally Invasive Spine Surgery",
                  "Arthroscopic Procedures",
                  "Endoscopic Techniques",
                  "Percutaneous Fixation Procedures",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <ArrowRight size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RECOVERY ================= */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-700 uppercase font-semibold tracking-wide">
              Recovery Benefits
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              Faster Healing with Modern Surgical Techniques
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Minimally invasive procedures are designed to minimize
              tissue damage, reduce postoperative pain, and help
              patients return to their normal activities sooner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
            {[
              {
                title: "Smaller Incisions",
                desc: "Reduced scarring and improved cosmetic outcomes.",
              },
              {
                title: "Less Pain",
                desc: "Minimized tissue trauma leads to greater comfort.",
              },
              {
                title: "Shorter Hospital Stay",
                desc: "Many patients are discharged earlier than traditional surgery.",
              },
              {
                title: "Faster Recovery",
                desc: "Return to daily activities in a shorter period.",
              },
              {
                title: "Better Outcomes",
                desc: "Advanced technology improves precision and results.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border bg-white p-6 hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <CheckCircle2 className="text-blue-700" />
                </div>

                <h3 className="mt-5 font-bold text-lg text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <span className="text-blue-700 uppercase font-semibold tracking-wide">
              Frequently Asked Questions
            </span>

            <h2 className="text-4xl font-bold mt-3 text-gray-900">
              Minimally Invasive Surgery FAQs
            </h2>

            <p className="mt-5 text-gray-600">
              Find answers to some of the most common questions about
              minimally invasive surgical procedures.
            </p>
          </div>

          <div className="mt-14 space-y-5">
            {[
              {
                q: "What is minimally invasive surgery?",
                a: "It is a modern surgical approach that uses smaller incisions and specialized instruments to perform procedures with less tissue damage.",
              },
              {
                q: "What are the benefits of minimally invasive surgery?",
                a: "Benefits include less pain, reduced scarring, shorter hospital stays, and faster recovery.",
              },
              {
                q: "Is minimally invasive surgery safe?",
                a: "Yes. It is considered safe and effective when performed by trained and experienced surgeons.",
              },
              {
                q: "Will I recover faster?",
                a: "Most patients experience a quicker recovery compared to traditional open surgery.",
              },
              {
                q: "Are all conditions suitable for minimally invasive surgery?",
                a: "No. Suitability depends on the patient's condition, anatomy, and overall health.",
              },
              {
                q: "How long will I stay in the hospital?",
                a: "Hospital stays are often shorter, and some procedures may even be performed on a day-care basis.",
              },
              {
                q: "Will there be visible scars?",
                a: "Scars are typically much smaller and less noticeable compared to traditional surgery.",
              },
              {
                q: "Who is a candidate for minimally invasive surgery?",
                a: "Patients with selected orthopedic and spine conditions may be candidates after evaluation by their surgeon.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl bg-white border overflow-hidden"
              >
                <summary className="cursor-pointer list-none flex justify-between items-center p-6 font-semibold text-lg text-gray-900">
                  {faq.q}

                  <span className="text-blue-700 text-2xl transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="px-6 pb-6 text-gray-600 leading-8">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[32px] bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative px-8 md:px-14 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl">
                <span className="inline-block bg-white/10 px-4 py-2 rounded-full text-sm font-medium">
                  Schedule Your Consultation
                </span>

                <h2 className="text-4xl font-bold mt-5 leading-tight">
                  Experience the Benefits of Modern Surgery
                </h2>

                <p className="mt-5 text-blue-100 leading-8">
                  Advanced minimally invasive techniques can help reduce
                  pain, speed up recovery, and improve your quality of
                  life. Schedule your consultation with{" "}
                  <strong>Dr. Saurabh Tiwari</strong> today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-950 font-semibold px-7 py-4 rounded-xl hover:bg-blue-100 transition flex items-center justify-center gap-2">
                  <Calendar size={20} />
                  Book Appointment
                </button>

                <button className="border border-white px-7 py-4 rounded-xl hover:bg-white hover:text-blue-950 transition flex items-center justify-center gap-2">
                  <Phone size={20} />
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}