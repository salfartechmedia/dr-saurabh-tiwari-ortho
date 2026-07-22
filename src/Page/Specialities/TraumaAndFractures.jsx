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
    title: "Bone Fractures",
    desc: "Simple and complex fractures requiring expert orthopedic evaluation and treatment.",
  },
  {
    title: "Trauma Injuries",
    desc: "Injuries caused by accidents, falls, or high-impact incidents.",
  },
  {
    title: "Open Fractures",
    desc: "Severe fractures where the bone breaks through the skin and requires urgent care.",
  },
  {
    title: "Multiple Fractures",
    desc: "Patients with injuries affecting multiple bones or body regions.",
  },
  {
    title: "Dislocations",
    desc: "Joint dislocations causing pain, swelling, and instability.",
  },
  {
    title: "Pelvic Fractures",
    desc: "Complex pelvic injuries requiring specialized orthopedic management.",
  },
  {
    title: "Hand & Wrist Fractures",
    desc: "Fractures affecting the hand, wrist, and upper extremities.",
  },
  {
    title: "Lower Limb Injuries",
    desc: "Fractures and trauma involving the hip, femur, knee, and ankle.",
  },
];

const symptoms = [
  "Severe Pain",
  "Swelling",
  "Deformity",
  "Difficulty Walking",
  "Bruising",
  "Limited Movement",
  "Tenderness",
  "Joint Instability",
];

export default function TraumaAndFractures() {
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
                Advanced Trauma & Fracture Care
              </span>

              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Trauma & Fracture Treatment
              </h1>

              <p className="mt-6 text-lg text-blue-100 leading-8">
                Comprehensive trauma and fracture care for patients
                suffering from accidents, sports injuries, and complex
                orthopedic trauma with a focus on rapid recovery and
                long-term function.
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
                  src="/images/trauma-fracture.jpg"
                  alt="Trauma and Fracture Care"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white text-blue-950 rounded-2xl shadow-xl px-6 py-5">
                <div className="text-3xl font-bold">
                  Emergency
                </div>

                <div className="text-gray-600">
                  Orthopedic Care
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
                src="/images/trauma-treatment.jpg"
                alt="Trauma Treatment"
                className="rounded-3xl shadow-lg object-cover w-full h-[500px]"
              />
            </div>

            <div>
              <span className="text-blue-700 font-semibold uppercase tracking-wider">
                About Trauma Care
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mt-3">
                Expert Management of Fractures and Trauma
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Trauma and fracture treatment focuses on the prompt
                diagnosis and management of bone and joint injuries.
                Early intervention plays a critical role in restoring
                function and preventing long-term complications.
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                Dr. Saurabh Tiwari provides comprehensive orthopedic
                trauma care using modern surgical and non-surgical
                techniques tailored to each patient's needs.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-10">
                <div className="rounded-2xl border p-5">
                  <Bone className="text-blue-700 mb-3" />

                  <h3 className="font-semibold text-lg">
                    Advanced Care
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Specialized treatment for simple and complex injuries.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <HeartPulse className="text-blue-700 mb-3" />

                  <h3 className="font-semibold text-lg">
                    Faster Recovery
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Focused on restoring mobility and improving outcomes.
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
              Comprehensive Care for Trauma & Fractures
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mt-16">
            {/* Non Surgical */}

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                  <ShieldCheck className="text-green-600" />
                </div>

                <h3 className="text-2xl font-bold">
                  Non-Surgical Treatment
                </h3>
              </div>

              <ul className="mt-8 space-y-4">
                {[
                  "Casting & Splinting",
                  "Pain Management",
                  "Physiotherapy",
                  "Bracing Support",
                  "Rehabilitation Programs",
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

            {/* Surgical */}

            <div className="bg-blue-950 text-white rounded-3xl p-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Bone />
                </div>

                <h3 className="text-2xl font-bold">
                  Surgical Treatment
                </h3>
              </div>

              <ul className="mt-8 space-y-4">
                {[
                  "Fracture Fixation Surgery",
                  "External Fixation",
                  "Pelvic Reconstruction",
                  "Trauma Reconstruction Surgery",
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
              Recovery After Treatment
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              Helping You Return to Normal Life
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Recovery from fractures and trauma depends on the severity
              of the injury and the treatment performed. Early
              rehabilitation and regular follow-up are essential for
              achieving the best possible outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
            {[
              {
                title: "Pain Control",
                desc: "Effective pain management helps improve comfort during recovery.",
              },
              {
                title: "Bone Healing",
                desc: "Regular monitoring ensures proper alignment and healing.",
              },
              {
                title: "Physiotherapy",
                desc: "Exercises help restore strength, flexibility, and mobility.",
              },
              {
                title: "Follow-Up Care",
                desc: "Routine appointments help track progress and recovery.",
              },
              {
                title: "Return to Activities",
                desc: "Safely resume work, sports, and daily activities over time.",
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
              Trauma & Fracture FAQs
            </h2>

            <p className="mt-5 text-gray-600">
              Find answers to some of the most common questions about
              orthopedic trauma and fracture treatment.
            </p>
          </div>

          <div className="mt-14 space-y-5">
            {[
              {
                q: "What should I do immediately after a fracture?",
                a: "Immobilize the injured area, avoid movement, and seek immediate medical attention for proper evaluation and treatment.",
              },
              {
                q: "How do I know if I have a fracture?",
                a: "Common signs include severe pain, swelling, bruising, deformity, and difficulty moving or bearing weight on the affected area.",
              },
              {
                q: "Do all fractures require surgery?",
                a: "No. Many fractures can be treated without surgery using casts, splints, or braces depending on the type and severity.",
              },
              {
                q: "How long does it take for a fracture to heal?",
                a: "Most fractures heal within 6 to 12 weeks, although recovery time varies depending on age, health, and injury severity.",
              },
              {
                q: "Can I walk with a fracture?",
                a: "It is generally not recommended unless advised by your doctor, as walking may worsen the injury.",
              },
              {
                q: "What is orthopedic trauma?",
                a: "Orthopedic trauma refers to injuries affecting bones, joints, muscles, and ligaments resulting from accidents or high-impact events.",
              },
              {
                q: "Will I need physiotherapy after treatment?",
                a: "Many patients benefit from physiotherapy to regain strength, flexibility, and mobility after fracture treatment.",
              },
              {
                q: "Can fractures heal completely?",
                a: "Yes. With timely treatment and proper rehabilitation, many fractures heal successfully with excellent long-term outcomes.",
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
                  Emergency Orthopedic Consultation
                </span>

                <h2 className="text-4xl font-bold mt-5 leading-tight">
                  Don't Delay Treatment for Fractures & Trauma
                </h2>

                <p className="mt-5 text-blue-100 leading-8">
                  Early diagnosis and timely intervention can help
                  prevent complications and improve recovery. Schedule
                  your consultation with <strong>Dr. Saurabh Tiwari</strong>{" "}
                  today.
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