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
    title: "ACL Injury",
    desc: "Tears or injuries to the anterior cruciate ligament causing instability and pain.",
  },
  {
    title: "Meniscus Tear",
    desc: "Damage to the cartilage cushioning the knee joint resulting in pain and swelling.",
  },
  {
    title: "Shoulder Dislocation",
    desc: "Repeated shoulder dislocations that may require arthroscopic repair.",
  },
  {
    title: "Rotator Cuff Tear",
    desc: "Injury to the shoulder tendons leading to pain and limited movement.",
  },
  {
    title: "Labral Tear",
    desc: "Damage to the cartilage surrounding the shoulder socket.",
  },
  {
    title: "Cartilage Damage",
    desc: "Joint cartilage injuries affecting movement and long-term joint health.",
  },
  {
    title: "Joint Instability",
    desc: "Persistent instability in the knee or shoulder affecting daily activities.",
  },
  {
    title: "Sports Injuries",
    desc: "Acute and chronic sports-related injuries requiring minimally invasive treatment.",
  },
];

const symptoms = [
  "Joint Pain",
  "Swelling",
  "Limited Mobility",
  "Joint Instability",
  "Clicking Sensation",
  "Difficulty Walking",
  "Shoulder Weakness",
  "Sports Injury Pain",
];

export default function Arthroscopy() {
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
                Advanced Arthroscopy & Sports Injury Care
              </span>

              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Arthroscopy Surgery
              </h1>

              <p className="mt-6 text-lg text-blue-100 leading-8">
                Advanced arthroscopic procedures for knee, shoulder,
                and sports injuries using minimally invasive techniques
                to reduce pain, improve recovery, and restore mobility.
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
                  src="/images/arthroscopy.jpg"
                  alt="Arthroscopy Surgery"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white text-blue-950 rounded-2xl shadow-xl px-6 py-5">
                <div className="text-3xl font-bold">
                  Minimally
                </div>

                <div className="text-gray-600">
                  Invasive Joint Care
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
                src="/images/arthroscopy-treatment.jpg"
                alt="Arthroscopy Treatment"
                className="rounded-3xl shadow-lg object-cover w-full h-[500px]"
              />
            </div>

            <div>
              <span className="text-blue-700 font-semibold uppercase tracking-wider">
                About Arthroscopy
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mt-3">
                Comprehensive Care for Joint & Sports Injuries
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Arthroscopy is a minimally invasive surgical procedure
                used to diagnose and treat problems inside the joints.
                It is commonly performed for knee, shoulder, and sports
                injuries, offering faster recovery and smaller incisions.
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                Dr. Saurabh Tiwari provides personalized arthroscopic
                treatment using modern techniques to help patients
                return to their normal activities as quickly and safely
                as possible.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-10">
                <div className="rounded-2xl border p-5">
                  <Bone className="text-blue-700 mb-3" />

                  <h3 className="font-semibold text-lg">
                    Advanced Care
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Modern arthroscopic procedures tailored to each
                    patient's needs.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <HeartPulse className="text-blue-700 mb-3" />

                  <h3 className="font-semibold text-lg">
                    Faster Recovery
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Smaller incisions and quicker rehabilitation for
                    better outcomes.
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
              Specialized Treatment for Joint Injuries
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              We provide comprehensive treatment for a wide range of
              sports injuries and joint disorders using minimally
              invasive arthroscopic techniques.
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
                  "Sports Rehabilitation",
                  "Activity Modification",
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
                  Arthroscopic Procedures
                </h3>
              </div>

              <ul className="mt-8 space-y-4">
                {[
                  "ACL Reconstruction",
                  "Meniscus Repair",
                  "Rotator Cuff Repair",
                  "Shoulder Stabilization Surgery",
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
              Your Journey Towards Better Performance
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Arthroscopic surgery offers faster recovery compared to
              traditional open procedures. A structured rehabilitation
              program helps patients safely return to their normal
              activities and sports.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
            {[
              {
                title: "Minimal Scarring",
                desc: "Small incisions result in better cosmetic outcomes.",
              },
              {
                title: "Pain Control",
                desc: "Modern pain management techniques improve comfort.",
              },
              {
                title: "Rehabilitation",
                desc: "Guided exercises help restore joint function.",
              },
              {
                title: "Regular Follow-Up",
                desc: "Track progress and optimize recovery.",
              },
              {
                title: "Return to Sports",
                desc: "Many patients return to sports after rehabilitation.",
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
              Arthroscopy FAQs
            </h2>

            <p className="mt-5 text-gray-600">
              Find answers to some of the most common questions about
              arthroscopic surgery and sports injury treatment.
            </p>
          </div>

          <div className="mt-14 space-y-5">
            {[
              {
                q: "What is arthroscopy?",
                a: "Arthroscopy is a minimally invasive surgical procedure used to diagnose and treat problems inside the joints using a small camera and specialized instruments.",
              },
              {
                q: "Which joints can be treated with arthroscopy?",
                a: "Arthroscopy is commonly performed on the knee, shoulder, ankle, hip, and wrist joints.",
              },
              {
                q: "Is arthroscopy painful?",
                a: "Most patients experience mild discomfort after surgery, which can usually be managed effectively with medication.",
              },
              {
                q: "How long does arthroscopic surgery take?",
                a: "The procedure generally takes between 30 minutes and 2 hours depending on the condition being treated.",
              },
              {
                q: "How long is the recovery period?",
                a: "Recovery varies depending on the procedure, but many patients resume normal activities within a few weeks.",
              },
              {
                q: "Can I return to sports after arthroscopy?",
                a: "Yes. Many athletes successfully return to sports following proper rehabilitation and medical clearance.",
              },
              {
                q: "Are arthroscopic procedures safe?",
                a: "Yes. Arthroscopy is considered a safe and effective procedure with a low complication rate.",
              },
              {
                q: "What are the advantages of arthroscopy?",
                a: "Smaller incisions, less pain, faster recovery, and reduced hospital stay are some of the key benefits.",
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
                  Don't Let Joint Pain Hold You Back
                </h2>

                <p className="mt-5 text-blue-100 leading-8">
                  Early diagnosis and minimally invasive treatment can
                  help restore movement and improve your quality of life.
                  Schedule your consultation with <strong>Dr. Saurabh Tiwari</strong> today.
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