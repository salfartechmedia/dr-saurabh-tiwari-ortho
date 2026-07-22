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
    title: "Post-Surgery Recovery",
    desc: "Rehabilitation programs designed to help patients recover after orthopedic surgery.",
  },
  {
    title: "Sports Injuries",
    desc: "Personalized rehabilitation plans for athletes and active individuals.",
  },
  {
    title: "Chronic Back Pain",
    desc: "Therapy focused on improving mobility and reducing long-term discomfort.",
  },
  {
    title: "Joint Stiffness",
    desc: "Treatment programs to restore flexibility and range of motion.",
  },
  {
    title: "Muscle Weakness",
    desc: "Strengthening exercises designed to improve stability and function.",
  },
  {
    title: "Neurological Rehabilitation",
    desc: "Supportive rehabilitation for patients recovering from neurological conditions.",
  },
  {
    title: "Balance Disorders",
    desc: "Therapy aimed at improving balance and preventing falls.",
  },
  {
    title: "Mobility Limitations",
    desc: "Comprehensive care to help patients regain independence and movement.",
  },
];

const symptoms = [
  "Difficulty Walking",
  "Joint Stiffness",
  "Muscle Weakness",
  "Poor Balance",
  "Limited Mobility",
  "Persistent Pain",
  "Reduced Flexibility",
  "Difficulty Performing Daily Activities",
];

export default function Rehabilitation() {
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
                Advanced Rehabilitation & Physiotherapy Care
              </span>

              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Rehabilitation Services
              </h1>

              <p className="mt-6 text-lg text-blue-100 leading-8">
                Comprehensive rehabilitation programs designed to
                restore strength, improve mobility, and help patients
                return to an active and independent lifestyle.
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
                  src="/images/rehabilitation.jpg"
                  alt="Rehabilitation"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white text-blue-950 rounded-2xl shadow-xl px-6 py-5">
                <div className="text-3xl font-bold">
                  Comprehensive
                </div>

                <div className="text-gray-600">
                  Recovery Care
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
                src="/images/rehabilitation-treatment.jpg"
                alt="Rehabilitation Treatment"
                className="rounded-3xl shadow-lg object-cover w-full h-[500px]"
              />
            </div>

            <div>
              <span className="text-blue-700 font-semibold uppercase tracking-wider">
                About Rehabilitation
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mt-3">
                Personalized Rehabilitation for Better Recovery
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Rehabilitation focuses on restoring movement, strength,
                and function after injury, surgery, or illness. Our
                multidisciplinary approach helps patients achieve their
                recovery goals safely and effectively.
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                Dr. Saurabh Tiwari provides individualized rehabilitation
                plans designed to improve mobility, reduce pain, and
                enhance overall quality of life.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-10">
                <div className="rounded-2xl border p-5">
                  <Bone className="text-blue-700 mb-3" />

                  <h3 className="font-semibold text-lg">
                    Personalized Care
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Customized rehabilitation plans for every patient.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <HeartPulse className="text-blue-700 mb-3" />

                  <h3 className="font-semibold text-lg">
                    Faster Recovery
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Helping patients regain independence and confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS and SYMPTOMS sections remain exactly the same structure as previous pages */}

      {/* PART-2 STARTS HERE */}

            {/* ================= TREATMENT ================= */}

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-blue-700 uppercase font-semibold">
              Rehabilitation Programs
            </span>

            <h2 className="text-4xl font-bold mt-3">
              Personalized Recovery Plans for Every Patient
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mt-16">
            {/* Therapy Programs */}

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                  <ShieldCheck className="text-green-600" />
                </div>

                <h3 className="text-2xl font-bold">
                  Therapy Programs
                </h3>
              </div>

              <ul className="mt-8 space-y-4">
                {[
                  "Physiotherapy",
                  "Strength Training",
                  "Balance Training",
                  "Pain Management",
                  "Sports Rehabilitation",
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

            {/* Specialized Care */}

            <div className="bg-blue-950 text-white rounded-3xl p-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Bone />
                </div>

                <h3 className="text-2xl font-bold">
                  Specialized Care
                </h3>
              </div>

              <ul className="mt-8 space-y-4">
                {[
                  "Post-Surgical Rehabilitation",
                  "Neurological Rehabilitation",
                  "Gait Training",
                  "Occupational Therapy",
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
              Recovery Journey
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              Helping You Regain Independence
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Rehabilitation is a step-by-step process focused on
              restoring function, improving mobility, and helping
              patients return to their daily activities with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
            {[
              {
                title: "Initial Assessment",
                desc: "A detailed evaluation helps create a personalized recovery plan.",
              },
              {
                title: "Pain Management",
                desc: "Effective strategies help reduce pain and discomfort.",
              },
              {
                title: "Guided Therapy",
                desc: "Structured rehabilitation sessions improve strength and mobility.",
              },
              {
                title: "Progress Tracking",
                desc: "Regular assessments ensure continuous improvement.",
              },
              {
                title: "Return to Activities",
                desc: "Achieve greater independence and improved quality of life.",
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
              Rehabilitation FAQs
            </h2>

            <p className="mt-5 text-gray-600">
              Find answers to some of the most common questions about
              rehabilitation and recovery programs.
            </p>
          </div>

          <div className="mt-14 space-y-5">
            {[
              {
                q: "What is rehabilitation?",
                a: "Rehabilitation is a process that helps individuals recover from injury, surgery, or illness and regain their physical abilities.",
              },
              {
                q: "Who can benefit from rehabilitation?",
                a: "Patients recovering from surgery, sports injuries, chronic pain, neurological conditions, and mobility limitations can benefit from rehabilitation.",
              },
              {
                q: "How long does rehabilitation take?",
                a: "The duration varies depending on the patient's condition, goals, and response to treatment.",
              },
              {
                q: "Is physiotherapy part of rehabilitation?",
                a: "Yes. Physiotherapy is one of the key components of many rehabilitation programs.",
              },
              {
                q: "Can rehabilitation reduce pain?",
                a: "Yes. Rehabilitation programs are designed to reduce pain, improve movement, and enhance overall function.",
              },
              {
                q: "Do I need rehabilitation after surgery?",
                a: "Many patients benefit from rehabilitation after orthopedic procedures to improve strength and recovery.",
              },
              {
                q: "Can rehabilitation help athletes?",
                a: "Yes. Sports rehabilitation helps athletes recover from injuries and safely return to their sport.",
              },
              {
                q: "Is rehabilitation personalized?",
                a: "Absolutely. Each rehabilitation program is tailored to the patient's unique needs and recovery goals.",
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
                  Start Your Recovery Today
                </span>

                <h2 className="text-4xl font-bold mt-5 leading-tight">
                  Take the First Step Towards Better Health
                </h2>

                <p className="mt-5 text-blue-100 leading-8">
                  Personalized rehabilitation programs can help restore
                  strength, improve mobility, and enhance your quality
                  of life. Schedule your consultation with{" "}
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