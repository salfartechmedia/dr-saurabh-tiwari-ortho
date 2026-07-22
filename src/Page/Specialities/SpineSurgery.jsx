import {
  ArrowRight,
  Calendar,
  Phone,
  Bone,
  Activity,
  ShieldCheck,
  Move3D,
  HeartPulse,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const conditions = [
  {
    title: "Herniated Disc",
    desc: "A slipped or bulging disc that presses on nearby nerves, causing pain, numbness, or weakness.",
  },
  {
    title: "Sciatica",
    desc: "Pain that radiates from the lower back through the buttock and down the leg due to nerve irritation.",
  },
  {
    title: "Cervical Spondylosis",
    desc: "Age-related wear and tear affecting the neck, leading to stiffness and chronic pain.",
  },
  {
    title: "Lumbar Spondylosis",
    desc: "Degenerative changes in the lower back that may cause pain and reduced flexibility.",
  },
  {
    title: "Spinal Stenosis",
    desc: "Narrowing of the spinal canal that can compress nerves and affect walking or balance.",
  },
  {
    title: "Slip Disc",
    desc: "Damage to the spinal disc that may lead to severe back pain and nerve compression.",
  },
  {
    title: "Spine Fracture",
    desc: "Fractures caused by trauma or osteoporosis that may require specialized treatment.",
  },
  {
    title: "Spondylolisthesis",
    desc: "A condition where one vertebra slips over another, causing instability and pain.",
  },
];

const symptoms = [
  "Neck Pain",
  "Back Pain",
  "Leg Pain",
  "Arm Pain",
  "Numbness",
  "Tingling",
  "Weakness",
  "Difficulty Walking",
];

export default function SpineSurgery() {
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">

        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left */}

            <div>

              <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
                <ShieldCheck className="w-4 h-4 mr-2 text-cyan-300" />
                Advanced Orthopedic & Spine Care
              </span>

              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Spine Surgery
              </h1>

              <p className="mt-6 text-lg text-blue-100 leading-8">
                Expert diagnosis and advanced treatment for neck pain, back pain,
                slipped disc, sciatica, spinal stenosis, and other spine
                disorders. Our goal is to relieve pain, restore movement, and
                help you return to an active lifestyle.
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

            {/* Right */}

            <div className="relative">

              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">

                <img
                  src="/images/spine-surgery.jpg"
                  alt="Spine Surgery"
                  className="w-full h-[500px] object-cover"
                />

              </div>

              <div className="absolute -bottom-6 -left-6 bg-white text-blue-950 rounded-2xl shadow-xl px-6 py-5">

                <div className="text-3xl font-bold">
                  Advanced
                </div>

                <div className="text-gray-600">
                  Spine Care
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
                src="/images/spine-treatment.jpg"
                alt="Spine Treatment"
                className="rounded-3xl shadow-lg object-cover w-full h-[500px]"
              />

            </div>

            <div>

              <span className="text-blue-700 font-semibold uppercase tracking-wider">
                About Spine Surgery
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mt-3">
                Comprehensive Care for Spine Disorders
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Spine surgery focuses on treating conditions affecting the neck,
                upper back, and lower back. Many spine problems can be managed
                successfully with medication, physiotherapy, and lifestyle
                modifications. Surgery is considered only when conservative
                treatments do not provide adequate relief or when nerve
                compression significantly affects daily life.
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                Dr. Saurabh Tiwari provides patient-centered spine care using
                evidence-based treatment plans tailored to each individual's
                condition, lifestyle, and recovery goals.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-10">

                <div className="rounded-2xl border p-5">

                  <Bone className="text-blue-700 mb-3" />

                  <h3 className="font-semibold text-lg">
                    Advanced Care
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Personalized treatment plans designed for every patient.
                  </p>

                </div>

                <div className="rounded-2xl border p-5">

                  <HeartPulse className="text-blue-700 mb-3" />

                  <h3 className="font-semibold text-lg">
                    Better Recovery
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Focused on reducing pain and restoring mobility.
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
              Specialized Treatment for Common Spine Disorders
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              We provide comprehensive evaluation and treatment for a wide range
              of spinal conditions affecting people of all ages.
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
                  "Lifestyle Modifications",
                  "Spine Strengthening Exercises",
                  "Pain Management",
                ].map((item) => (

                  <li className="flex items-center gap-3">

                    <CheckCircle2 className="text-green-600" size={20} />

                    {item}

                  </li>

                ))}

              </ul>

            </div>

            {/* Surgical */}

            <div className="bg-blue-950 text-white rounded-3xl p-8">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">

                  <Move3D />

                </div>

                <h3 className="text-2xl font-bold">
                  Surgical Treatment
                </h3>

              </div>

              <ul className="mt-8 space-y-4">

                {[
                  "Microdiscectomy",
                  "Laminectomy",
                  "Spinal Fusion",
                  "Minimally Invasive Spine Surgery",
                ].map((item) => (

                  <li className="flex items-center gap-3">

                    <ArrowUpRight size={18} />

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
              Recovery depends on your condition and the type of treatment
              performed. Following your doctor's advice and rehabilitation plan
              plays an important role in achieving the best outcome.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
            {[
              {
                title: "Early Mobilization",
                desc: "Start moving safely as advised by your doctor.",
              },
              {
                title: "Pain Management",
                desc: "Medication and guidance for comfortable recovery.",
              },
              {
                title: "Physiotherapy",
                desc: "Exercises to regain strength and flexibility.",
              },
              {
                title: "Regular Follow-up",
                desc: "Monitor healing and overall progress.",
              },
              {
                title: "Healthy Lifestyle",
                desc: "Maintain posture, activity and healthy weight.",
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
              Spine Surgery FAQs
            </h2>

            <p className="mt-5 text-gray-600">
              Find answers to some of the most common questions about spine
              disorders and treatment.
            </p>
          </div>

          <div className="mt-14 space-y-5">
            {[
              {
                q: "What is spine surgery?",
                a: "Spine surgery is performed to treat conditions affecting the bones, discs, joints, or nerves of the spine when non-surgical treatment does not provide sufficient relief.",
              },
              {
                q: "Is spine surgery always necessary?",
                a: "No. Many patients recover with medications, physiotherapy, exercise, and lifestyle modifications. Surgery is recommended only when required.",
              },
              {
                q: "How do I know if I need spine surgery?",
                a: "Persistent pain, numbness, weakness, difficulty walking, or symptoms that do not improve with conservative treatment may require specialist evaluation.",
              },
              {
                q: "Is spine surgery safe?",
                a: "Modern spine surgery is generally safe when performed for the right indication by an experienced orthopedic spine surgeon.",
              },
              {
                q: "How long is the recovery period?",
                a: "Recovery varies depending on the procedure and your overall health. Most patients gradually return to normal activities with proper rehabilitation.",
              },
              {
                q: "Can a slipped disc heal without surgery?",
                a: "Yes. Many slipped disc cases improve with medication, physiotherapy, and guided exercises without requiring surgery.",
              },
              {
                q: "What are the symptoms of nerve compression?",
                a: "Common symptoms include pain, tingling, numbness, muscle weakness, and difficulty walking or balancing.",
              },
              {
                q: "Which imaging test is best for spine problems?",
                a: "MRI is commonly used to evaluate spinal discs, nerves, and soft tissues. X-rays or CT scans may also be recommended depending on the condition.",
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
                  Don't Ignore Persistent Neck or Back Pain
                </h2>

                <p className="mt-5 text-blue-100 leading-8">
                  Early diagnosis and the right treatment can help relieve pain,
                  restore mobility, and improve your quality of life. Schedule
                  your consultation with <strong>Dr. Saurabh Tiwari</strong>
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