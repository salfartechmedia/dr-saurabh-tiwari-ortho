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
    desc: "Degeneration of knee cartilage causing pain, stiffness, and reduced mobility.",
  },
  {
    title: "Rheumatoid Arthritis",
    desc: "An autoimmune condition that causes inflammation and damage to the knee joint.",
  },
  {
    title: "Post-Traumatic Arthritis",
    desc: "Arthritis that develops after a previous knee injury or fracture.",
  },
  {
    title: "Severe Knee Pain",
    desc: "Persistent knee pain that interferes with daily activities and quality of life.",
  },
  {
    title: "Knee Deformity",
    desc: "Bow legs or knock knees resulting from advanced joint degeneration.",
  },
  {
    title: "Cartilage Damage",
    desc: "Loss of cartilage leading to friction, pain, and limited movement.",
  },
  {
    title: "Failed Previous Surgery",
    desc: "Patients experiencing pain or complications after previous knee procedures.",
  },
  {
    title: "Joint Stiffness",
    desc: "Chronic stiffness affecting knee flexibility and overall mobility.",
  },
];

const symptoms = [
  "Persistent Knee Pain",
  "Joint Stiffness",
  "Swelling Around Knee",
  "Difficulty Walking",
  "Reduced Range of Motion",
  "Clicking Sounds",
  "Instability While Standing",
  "Difficulty Climbing Stairs",
];

export default function KneeReplacement() {
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
                Knee Replacement Surgery
              </h1>

              <p className="mt-6 text-lg text-blue-100 leading-8">
                Advanced knee replacement solutions for chronic knee pain,
                arthritis, stiffness, and reduced mobility. Our goal is to
                help patients regain movement, reduce pain, and return to
                an active and independent lifestyle.
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
                  src="/images/knee-replacement.jpg"
                  alt="Knee Replacement"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white text-blue-950 rounded-2xl shadow-xl px-6 py-5">
                <div className="text-3xl font-bold">Advanced</div>

                <div className="text-gray-600">
                  Joint Replacement Care
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
                src="/images/knee-treatment.jpg"
                alt="Knee Treatment"
                className="rounded-3xl shadow-lg object-cover w-full h-[500px]"
              />
            </div>

            <div>
              <span className="text-blue-700 font-semibold uppercase tracking-wider">
                About Knee Replacement
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mt-3">
                Comprehensive Care for Knee Joint Problems
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Knee replacement surgery is an effective treatment for
                patients suffering from severe arthritis, chronic pain,
                and limited mobility. The damaged portions of the knee
                joint are replaced with advanced implants designed to
                restore function and improve quality of life.
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                Dr. Saurabh Tiwari provides personalized treatment plans
                using modern techniques and evidence-based orthopedic
                care to help patients achieve faster recovery and
                long-term results.
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
                    Better Mobility
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Helping patients regain confidence and return to
                    daily activities.
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
              Specialized Treatment for Common Knee Conditions
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              We provide comprehensive evaluation and treatment for a
              wide range of knee disorders affecting mobility and
              quality of life.
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
                  "Knee Strengthening Exercises",
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
                  "Partial Knee Replacement",
                  "Revision Knee Replacement",
                  "Robotic Assisted Knee Replacement",
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
              Recovery after knee replacement surgery is gradual and
              varies from patient to patient. Following rehabilitation
              protocols and physiotherapy is essential for achieving
              the best possible outcome.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
            {[
              {
                title: "Early Walking",
                desc: "Begin walking with support within 24 hours after surgery.",
              },
              {
                title: "Pain Control",
                desc: "Proper medication helps ensure a comfortable recovery.",
              },
              {
                title: "Physiotherapy",
                desc: "Strengthening exercises help restore movement and balance.",
              },
              {
                title: "Follow-Up",
                desc: "Regular appointments help monitor healing and progress.",
              },
              {
                title: "Healthy Lifestyle",
                desc: "Maintain a healthy weight to protect your new joint.",
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
              Knee Replacement FAQs
            </h2>

            <p className="mt-5 text-gray-600">
              Find answers to some of the most common questions about
              knee replacement surgery and recovery.
            </p>
          </div>

          <div className="mt-14 space-y-5">
            {[
              {
                q: "What is knee replacement surgery?",
                a: "Knee replacement surgery involves replacing damaged knee joint surfaces with artificial implants to relieve pain and improve mobility.",
              },
              {
                q: "Who is a candidate for knee replacement?",
                a: "Patients with severe arthritis, chronic pain, and reduced mobility that affects daily life may benefit from knee replacement surgery.",
              },
              {
                q: "How long does knee replacement surgery take?",
                a: "The procedure usually takes between 1 and 2 hours depending on the patient's condition.",
              },
              {
                q: "Is knee replacement surgery safe?",
                a: "Yes. Modern knee replacement techniques are considered safe and highly successful when performed by experienced surgeons.",
              },
              {
                q: "How long does recovery take?",
                a: "Most patients can return to normal daily activities within 4–6 weeks, while complete recovery may take a few months.",
              },
              {
                q: "How long do knee implants last?",
                a: "Most modern implants last 15–20 years or more with proper care and regular follow-up.",
              },
              {
                q: "Will I be able to walk normally again?",
                a: "Yes. The majority of patients experience significant improvement in walking and overall mobility after rehabilitation.",
              },
              {
                q: "Can both knees be replaced at the same time?",
                a: "Yes, selected patients may undergo bilateral knee replacement after a detailed evaluation by their orthopedic surgeon.",
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
                  Don't Let Knee Pain Affect Your Lifestyle
                </h2>

                <p className="mt-5 text-blue-100 leading-8">
                  Early diagnosis and timely treatment can help relieve
                  pain, restore movement, and improve your quality of
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