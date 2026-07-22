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
    title: "Knee Osteoarthritis",
    desc: "Severe degeneration of the knee joint causing pain and reduced mobility.",
  },
  {
    title: "Hip Osteoarthritis",
    desc: "Progressive wear and tear of the hip joint affecting daily activities.",
  },
  {
    title: "Rheumatoid Arthritis",
    desc: "Autoimmune joint inflammation leading to pain, stiffness, and damage.",
  },
  {
    title: "Avascular Necrosis",
    desc: "Loss of blood supply to the bone causing joint collapse and pain.",
  },
  {
    title: "Joint Deformity",
    desc: "Structural abnormalities affecting joint alignment and movement.",
  },
  {
    title: "Chronic Joint Pain",
    desc: "Persistent pain that limits mobility and quality of life.",
  },
  {
    title: "Failed Joint Surgery",
    desc: "Patients experiencing complications or poor outcomes from previous procedures.",
  },
  {
    title: "Advanced Arthritis",
    desc: "End-stage arthritis requiring specialized joint replacement solutions.",
  },
];

const symptoms = [
  "Persistent Joint Pain",
  "Joint Stiffness",
  "Difficulty Walking",
  "Reduced Mobility",
  "Swelling",
  "Joint Instability",
  "Difficulty Climbing Stairs",
  "Pain During Daily Activities",
];

export default function JointReplacement() {
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
                Advanced Joint Replacement Care
              </span>

              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Joint Replacement Surgery
              </h1>

              <p className="mt-6 text-lg text-blue-100 leading-8">
                Advanced joint replacement procedures designed to
                relieve pain, restore movement, and help patients return
                to an active and independent lifestyle.
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
                  src="/images/joint-replacement.jpg"
                  alt="Joint Replacement"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white text-blue-950 rounded-2xl shadow-xl px-6 py-5">
                <div className="text-3xl font-bold">
                  Advanced
                </div>

                <div className="text-gray-600">
                  Joint Care
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
                src="/images/joint-replacement-treatment.jpg"
                alt="Joint Replacement Treatment"
                className="rounded-3xl shadow-lg object-cover w-full h-[500px]"
              />
            </div>

            <div>
              <span className="text-blue-700 font-semibold uppercase tracking-wider">
                About Joint Replacement
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mt-3">
                Restoring Mobility and Improving Quality of Life
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Joint replacement surgery is an effective treatment for
                patients suffering from severe arthritis and chronic
                joint pain. Modern implants and surgical techniques help
                restore function and improve long-term outcomes.
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                Dr. Saurabh Tiwari provides personalized joint
                replacement solutions using evidence-based orthopedic
                care tailored to each patient's needs and lifestyle.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-10">
                <div className="rounded-2xl border p-5">
                  <Bone className="text-blue-700 mb-3" />

                  <h3 className="font-semibold text-lg">
                    Advanced Care
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Personalized treatment plans for optimal outcomes.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <HeartPulse className="text-blue-700 mb-3" />

                  <h3 className="font-semibold text-lg">
                    Better Mobility
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Helping patients return to an active lifestyle.
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
              Personalized Joint Replacement Solutions
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
                  "Lifestyle Modifications",
                  "Weight Management",
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
                  "Total Knee Replacement",
                  "Total Hip Replacement",
                  "Revision Joint Replacement",
                  "Robotic-Assisted Joint Replacement",
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
              Your Journey Towards Pain-Free Movement
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Recovery after joint replacement surgery varies from
              patient to patient. Following your rehabilitation plan
              and physiotherapy sessions can help achieve the best
              possible long-term outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
            {[
              {
                title: "Early Mobilization",
                desc: "Begin walking and moving safely under expert guidance.",
              },
              {
                title: "Pain Management",
                desc: "Modern pain control techniques improve comfort during recovery.",
              },
              {
                title: "Physiotherapy",
                desc: "Exercises help restore strength, flexibility, and balance.",
              },
              {
                title: "Regular Follow-Up",
                desc: "Monitor healing and ensure long-term success.",
              },
              {
                title: "Active Lifestyle",
                desc: "Return to daily activities with improved confidence and mobility.",
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
              Joint Replacement FAQs
            </h2>

            <p className="mt-5 text-gray-600">
              Find answers to some of the most common questions about
              joint replacement surgery and recovery.
            </p>
          </div>

          <div className="mt-14 space-y-5">
            {[
              {
                q: "What is joint replacement surgery?",
                a: "Joint replacement surgery involves replacing damaged joints with artificial implants to relieve pain and improve function.",
              },
              {
                q: "Who needs joint replacement surgery?",
                a: "Patients with severe arthritis, chronic joint pain, and reduced mobility that affects daily life may benefit from joint replacement.",
              },
              {
                q: "Which joints can be replaced?",
                a: "The most commonly replaced joints are the knee and hip, although other joints may also be treated in selected cases.",
              },
              {
                q: "Is joint replacement surgery safe?",
                a: "Yes. Modern joint replacement procedures are considered safe and highly successful when performed by experienced orthopedic surgeons.",
              },
              {
                q: "How long do joint implants last?",
                a: "Most modern implants last between 15 and 20 years or longer with proper care and regular follow-up.",
              },
              {
                q: "How long is the recovery period?",
                a: "Many patients return to normal activities within a few weeks, while complete recovery may take several months.",
              },
              {
                q: "Will I be able to walk normally again?",
                a: "Yes. Most patients experience significant improvements in mobility and quality of life after rehabilitation.",
              },
              {
                q: "Can both joints be replaced together?",
                a: "Selected patients may undergo bilateral joint replacement after a comprehensive evaluation by their surgeon.",
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
                  Don't Let Joint Pain Limit Your Life
                </h2>

                <p className="mt-5 text-blue-100 leading-8">
                  Early diagnosis and advanced joint replacement
                  procedures can help restore movement and improve your
                  quality of life. Schedule your consultation with{" "}
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