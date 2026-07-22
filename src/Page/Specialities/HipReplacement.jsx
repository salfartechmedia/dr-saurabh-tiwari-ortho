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
    title: "Hip Osteoarthritis",
    desc: "Degeneration of the hip joint causing pain, stiffness, and reduced mobility.",
  },
  {
    title: "Rheumatoid Arthritis",
    desc: "Inflammation of the hip joint caused by an autoimmune condition.",
  },
  {
    title: "Avascular Necrosis",
    desc: "Loss of blood supply to the hip bone leading to joint damage.",
  },
  {
    title: "Hip Fractures",
    desc: "Serious fractures that may require hip replacement in selected patients.",
  },
  {
    title: "Hip Dysplasia",
    desc: "Abnormal development of the hip joint causing instability and pain.",
  },
  {
    title: "Post-Traumatic Arthritis",
    desc: "Arthritis that develops after a previous injury to the hip.",
  },
  {
    title: "Joint Deformity",
    desc: "Structural changes in the hip joint affecting movement and comfort.",
  },
  {
    title: "Chronic Hip Pain",
    desc: "Persistent pain that interferes with walking and daily activities.",
  },
];

const symptoms = [
  "Hip Pain",
  "Joint Stiffness",
  "Difficulty Walking",
  "Pain While Sitting",
  "Reduced Mobility",
  "Limping",
  "Pain in Groin Area",
  "Difficulty Climbing Stairs",
];

export default function HipReplacement() {
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
                Advanced Orthopedic & Joint Care
              </span>

              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hip Replacement Surgery
              </h1>

              <p className="mt-6 text-lg text-blue-100 leading-8">
                Advanced hip replacement solutions for arthritis,
                chronic hip pain, stiffness, and reduced mobility.
                Our goal is to help patients regain comfort, restore
                movement, and return to an active lifestyle.
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
                  src="/images/hip-replacement.jpg"
                  alt="Hip Replacement"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white text-blue-950 rounded-2xl shadow-xl px-6 py-5">
                <div className="text-3xl font-bold">
                  Advanced
                </div>

                <div className="text-gray-600">
                  Hip Replacement Care
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
                src="/images/hip-treatment.jpg"
                alt="Hip Treatment"
                className="rounded-3xl shadow-lg object-cover w-full h-[500px]"
              />
            </div>

            <div>
              <span className="text-blue-700 font-semibold uppercase tracking-wider">
                About Hip Replacement
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mt-3">
                Comprehensive Care for Hip Joint Disorders
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Hip replacement surgery is an effective treatment for
                patients suffering from severe hip pain and
                degenerative joint diseases. The damaged portions of
                the hip joint are replaced with modern implants
                designed to improve mobility and quality of life.
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                Dr. Saurabh Tiwari provides evidence-based orthopedic
                care and personalized treatment plans to help patients
                achieve long-term pain relief and improved function.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-10">
                <div className="rounded-2xl border p-5">
                  <Bone className="text-blue-700 mb-3" />

                  <h3 className="font-semibold text-lg">
                    Advanced Care
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Personalized treatment plans designed for every
                    patient's needs.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <HeartPulse className="text-blue-700 mb-3" />

                  <h3 className="font-semibold text-lg">
                    Improved Mobility
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Helping patients return to a more active and
                    comfortable lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONDITIONS ================= */}

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-700 font-semibold uppercase">
              Conditions We Treat
            </span>

            <h2 className="text-4xl font-bold mt-3 text-gray-900">
              Specialized Treatment for Common Hip Conditions
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              We provide comprehensive evaluation and treatment for a
              wide range of hip disorders affecting mobility and
              overall quality of life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7 mt-14">
            {conditions.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl transition duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Activity className="text-blue-700" />
                </div>

                <h3 className="mt-6 font-bold text-xl text-gray-900 group-hover:text-blue-700 transition">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SYMPTOMS ================= */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-blue-700 uppercase font-semibold">
              Common Symptoms
            </span>

            <h2 className="text-4xl font-bold mt-3 text-gray-900">
              Signs You Should Not Ignore
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {symptoms.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border p-6 hover:border-blue-700 hover:-translate-y-1 transition"
              >
                <CheckCircle2 className="text-green-600 mb-4" />

                <h3 className="font-semibold text-lg">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PART-2 (Treatment Section) STARTS FROM HERE */}

            {/* ================= TREATMENT ================= */}

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-blue-700 uppercase font-semibold">
              Treatment Options
            </span>

            <h2 className="text-4xl font-bold mt-3">
              Personalized Treatment Based on Your Condition
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
                  "Medications",
                  "Physiotherapy",
                  "Weight Management",
                  "Lifestyle Modifications",
                  "Joint Injections",
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
                  "Total Hip Replacement",
                  "Partial Hip Replacement",
                  "Revision Hip Replacement",
                  "Minimally Invasive Hip Surgery",
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
              Recovery After Surgery
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              Your Journey Towards Better Mobility
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Recovery after hip replacement surgery varies from patient
              to patient. Following your rehabilitation plan and regular
              physiotherapy sessions can help achieve the best possible
              outcome and long-term mobility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
            {[
              {
                title: "Early Walking",
                desc: "Begin walking with support soon after surgery.",
              },
              {
                title: "Pain Management",
                desc: "Medication helps ensure a comfortable recovery.",
              },
              {
                title: "Physiotherapy",
                desc: "Exercises help restore strength and flexibility.",
              },
              {
                title: "Regular Follow-Up",
                desc: "Monitor healing and track recovery progress.",
              },
              {
                title: "Healthy Lifestyle",
                desc: "Maintain a healthy weight and stay active.",
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
              Hip Replacement FAQs
            </h2>

            <p className="mt-5 text-gray-600">
              Find answers to some of the most common questions about
              hip replacement surgery and recovery.
            </p>
          </div>

          <div className="mt-14 space-y-5">
            {[
              {
                q: "What is hip replacement surgery?",
                a: "Hip replacement surgery involves replacing damaged portions of the hip joint with artificial implants to relieve pain and improve mobility.",
              },
              {
                q: "Who needs hip replacement surgery?",
                a: "Patients with severe arthritis, chronic hip pain, and reduced mobility that affects daily activities may benefit from surgery.",
              },
              {
                q: "Is hip replacement surgery safe?",
                a: "Yes. Modern hip replacement surgery is considered safe and highly successful when performed by an experienced orthopedic surgeon.",
              },
              {
                q: "How long does hip replacement surgery take?",
                a: "Most procedures are completed within 1 to 2 hours depending on the complexity of the case.",
              },
              {
                q: "How long is the recovery period?",
                a: "Most patients resume routine activities within 4 to 6 weeks, while complete recovery may take several months.",
              },
              {
                q: "How long do hip implants last?",
                a: "Modern hip implants can last 15 to 20 years or longer with proper care and follow-up.",
              },
              {
                q: "Will I be able to walk normally again?",
                a: "Yes. Most patients experience significant improvements in mobility and quality of life following surgery and rehabilitation.",
              },
              {
                q: "Can both hips be replaced together?",
                a: "Selected patients may undergo bilateral hip replacement after careful evaluation by their orthopedic surgeon.",
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
                  Book Your Consultation
                </span>

                <h2 className="text-4xl font-bold mt-5 leading-tight">
                  Don't Let Hip Pain Limit Your Lifestyle
                </h2>

                <p className="mt-5 text-blue-100 leading-8">
                  Early diagnosis and timely treatment can help restore
                  mobility and improve your quality of life. Schedule
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