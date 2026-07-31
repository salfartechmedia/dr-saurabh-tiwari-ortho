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

import OTf from "../../assets/gallery/OTf.jpeg";
import OTc from "../../assets/gallery/OTc.jpeg";
import SEO from "../../Component/SEO";

const conditions = [
  {
    title: "Bone Tumors",
    desc: "Comprehensive management of benign and malignant bone tumors while preserving limb function whenever possible.",
  },
  {
    title: "Complex Fractures",
    desc: "Treatment for severe fractures involving extensive bone and soft tissue damage caused by trauma.",
  },
  {
    title: "Non-Healing Fractures",
    desc: "Advanced reconstruction for delayed union and non-union fractures that fail to heal naturally.",
  },
  {
    title: "Bone Infection",
    desc: "Management of chronic osteomyelitis and deep bone infections using modern limb preservation techniques.",
  },
  {
    title: "Failed Previous Surgery",
    desc: "Revision procedures for unsuccessful orthopedic surgeries causing pain, instability, or deformity.",
  },
  {
    title: "Limb Deformities",
    desc: "Correction of congenital or acquired deformities affecting alignment, function, and mobility.",
  },
  {
    title: "Bone Loss",
    desc: "Reconstruction of bone defects caused by trauma, infection, or tumor removal.",
  },
  {
    title: "Severe Soft Tissue Injury",
    desc: "Combined orthopedic and reconstructive treatment for complex limb injuries.",
  },
];

const symptoms = [
  "Persistent Bone Pain",
  "Swelling Around the Limb",
  "Difficulty Walking",
  "Open Fractures",
  "Bone Infection",
  "Limb Deformity",
  "Instability of the Limb",
  "Repeated Fracture Problems",
];

export default function LimbSalvage() {
  return (
    <>
      <SEO
        title="Limb Salvage Surgery in Prayagraj | Dr. Saurabh Tiwari"
        description="Advanced limb salvage procedures for severe trauma, infections and bone tumors."
        keywords="Limb Salvage Surgery Prayagraj"
        canonical="https://drsaurabhtiwariortho.com/specialities/limb-salvage"
        image="https://drsaurabhtiwariortho.com/og-image.jpg"
      />
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
                  Advanced Limb Preservation Care
                </span>

                <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Limb Salvage Surgery
                </h1>

                <p className="mt-6 text-lg text-blue-100 leading-8">
                  Limb Salvage Surgery focuses on preserving the affected arm or
                  leg using advanced orthopedic reconstruction techniques instead
                  of amputation. Our goal is to restore function, eliminate
                  disease or infection, reduce pain, and help patients regain an
                  active lifestyle with the highest possible quality of life.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">

                  <button className="flex items-center gap-2 rounded-xl bg-white text-blue-950 px-6 py-3 font-semibold hover:bg-blue-100 transition">
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
                    src={OTf}
                    alt="Limb Salvage Surgery"
                    className="w-full h-[500px] object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white text-blue-950 rounded-2xl shadow-xl px-6 py-5">

                  <div className="text-3xl font-bold">
                    Advanced
                  </div>

                  <div className="text-gray-600">
                    Limb Preservation Care
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
                  src={OTc}
                  alt="Limb Salvage Treatment"
                  className="rounded-3xl shadow-lg object-cover w-full h-[500px]"
                />
              </div>

              <div>

                <span className="text-blue-700 font-semibold uppercase tracking-wider">
                  About Limb Salvage Surgery
                </span>

                <h2 className="text-4xl font-bold text-gray-900 mt-3">
                  Preserving Limbs Through Advanced Orthopedic Reconstruction
                </h2>

                <p className="mt-6 text-gray-600 leading-8">
                  Limb Salvage Surgery is a highly specialized orthopedic
                  procedure designed to preserve a patient's arm or leg affected
                  by tumors, severe trauma, bone infections, or complex fractures.
                  Instead of amputation, advanced reconstructive techniques are
                  used to restore stability, movement, and function.
                </p>

                <p className="mt-5 text-gray-600 leading-8">
                  Dr. Saurabh Tiwari provides individualized treatment using
                  modern orthopedic reconstruction, biological bone healing,
                  internal fixation, bone grafting, and limb reconstruction
                  techniques to achieve the best possible functional outcome for
                  every patient.
                </p>

                <div className="grid grid-cols-2 gap-5 mt-10">

                  <div className="rounded-2xl border p-5">

                    <Bone className="text-blue-700 mb-3" />

                    <h3 className="font-semibold text-lg">
                      Limb Preservation
                    </h3>

                    <p className="text-sm text-gray-600 mt-2">
                      Advanced procedures focused on saving the natural limb while
                      restoring strength and function.
                    </p>

                  </div>

                  <div className="rounded-2xl border p-5">

                    <HeartPulse className="text-blue-700 mb-3" />

                    <h3 className="font-semibold text-lg">
                      Functional Recovery
                    </h3>

                    <p className="text-sm text-gray-600 mt-2">
                      Helping patients regain mobility, independence, and a better
                      quality of life after complex orthopedic conditions.
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
                Comprehensive Limb Preservation for Complex Orthopedic Conditions
              </h2>

              <p className="mt-5 text-gray-600 leading-8">
                We provide advanced evaluation, diagnosis, and limb preservation
                treatment for patients suffering from severe bone injuries,
                tumors, infections, deformities, and complicated fractures using
                modern reconstructive orthopedic techniques.
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
                Warning Signs That May Need Limb Salvage Evaluation
              </h2>

              <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
                If you experience persistent pain, severe injury, infection,
                deformity, or difficulty using your arm or leg, early evaluation
                by an orthopedic specialist can significantly improve the chances
                of preserving the affected limb.
              </p>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

              {symptoms.map((item, index) => (

                <div
                  key={index}
                  className="rounded-2xl border bg-white p-6 hover:border-blue-700 hover:-translate-y-1 transition duration-300"
                >

                  <CheckCircle2
                    className="text-green-600 mb-4"
                    size={24}
                  />

                  <h3 className="font-semibold text-lg text-gray-900">
                    {item}
                  </h3>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ================= PART 1 ENDS HERE ================= */}

        {/* ================= TREATMENT ================= */}

        <section className="py-20 bg-slate-50">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <span className="text-blue-700 uppercase font-semibold">
                Treatment Options
              </span>

              <h2 className="text-4xl font-bold mt-3">
                Personalized Limb Salvage Treatment
              </h2>

              <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
                Every patient requires a customized treatment plan depending on
                the severity of injury, infection, tumor, or bone loss. Our goal
                is always to preserve the limb while restoring strength,
                stability, and function.
              </p>

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

                <p className="mt-6 text-gray-600 leading-8">
                  Early-stage conditions and selected patients can often be
                  managed with conservative treatment aimed at reducing pain,
                  controlling infection, and improving limb function.
                </p>

                <ul className="mt-8 space-y-4">

                  {[
                    "Comprehensive Evaluation",
                    "Pain Management",
                    "Advanced Antibiotic Therapy",
                    "Physiotherapy & Rehabilitation",
                    "Protective Bracing",
                    "Regular Clinical Monitoring",
                  ].map((item) => (

                    <li
                      key={item}
                      className="flex items-center gap-3"
                    >
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
                    Advanced Surgical Procedures
                  </h3>

                </div>

                <p className="mt-6 text-blue-100 leading-8">
                  Limb Salvage Surgery combines modern orthopedic reconstruction
                  techniques to preserve the affected limb while restoring maximum
                  mobility and function.
                </p>

                <ul className="mt-8 space-y-4">

                  {[
                    "Bone Tumor Reconstruction",
                    "Limb Reconstruction Surgery",
                    "Bone Grafting Procedures",
                    "Tumor Prosthesis Replacement",
                    "Ilizarov Ring Fixator Technique",
                    "Limb Lengthening Procedures",
                    "Internal & External Fixation",
                    "Microsurgical Soft Tissue Reconstruction",
                  ].map((item) => (

                    <li
                      key={item}
                      className="flex items-center gap-3"
                    >
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
                Recovery & Rehabilitation
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mt-3">
                Restoring Function After Limb Salvage Surgery
              </h2>

              <p className="mt-5 text-gray-600 leading-8">
                Recovery after Limb Salvage Surgery is a gradual process that
                focuses on bone healing, muscle strengthening, rehabilitation,
                and restoring normal daily activities. A structured rehabilitation
                program plays a vital role in achieving the best long-term
                outcome.
              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">

              {[
                {
                  title: "Pain Control",
                  desc: "Modern pain management techniques ensure greater comfort after surgery.",
                },
                {
                  title: "Bone Healing",
                  desc: "Regular follow-up and imaging help monitor successful bone healing.",
                },
                {
                  title: "Physiotherapy",
                  desc: "Customized rehabilitation improves flexibility, strength, and mobility.",
                },
                {
                  title: "Functional Recovery",
                  desc: "Gradual return to walking, work, and normal daily activities.",
                },
                {
                  title: "Long-Term Care",
                  desc: "Regular orthopedic reviews help maintain excellent limb function.",
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

        {/* ======= PART 2A ENDS HERE ======= */}

        {/* ================= FAQ ================= */}

        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6">

            <div className="text-center">

              <span className="text-blue-700 uppercase font-semibold tracking-wide">
                Frequently Asked Questions
              </span>

              <h2 className="text-4xl font-bold mt-3 text-gray-900">
                Limb Salvage Surgery FAQs
              </h2>

              <p className="mt-5 text-gray-600">
                Find answers to the most commonly asked questions about Limb
                Salvage Surgery, recovery, and rehabilitation.
              </p>

            </div>

            <div className="mt-14 space-y-5">

              {[
                {
                  q: "What is Limb Salvage Surgery?",
                  a: "Limb Salvage Surgery is an advanced orthopedic procedure designed to preserve a damaged arm or leg affected by tumors, severe trauma, infection, or complex fractures instead of performing amputation.",
                },
                {
                  q: "Who needs Limb Salvage Surgery?",
                  a: "Patients with bone tumors, severe fractures, chronic bone infections, failed previous surgeries, or major bone loss may benefit from Limb Salvage Surgery after specialist evaluation.",
                },
                {
                  q: "Is Limb Salvage better than amputation?",
                  a: "Whenever medically possible, preserving the natural limb offers better function, improved appearance, and a higher quality of life. However, treatment is individualized for every patient.",
                },
                {
                  q: "How long does the surgery take?",
                  a: "The duration depends on the complexity of the condition and reconstruction required. Most procedures take several hours under specialized orthopedic care.",
                },
                {
                  q: "How long is the recovery period?",
                  a: "Recovery varies depending on the surgery performed. Bone healing and rehabilitation may continue for several months with regular follow-up and physiotherapy.",
                },
                {
                  q: "Will I be able to walk normally again?",
                  a: "Many patients regain good mobility after successful surgery and structured rehabilitation, although recovery differs according to the underlying condition.",
                },
                {
                  q: "Is physiotherapy necessary?",
                  a: "Yes. Physiotherapy is an essential part of recovery to improve strength, flexibility, balance, and overall limb function.",
                },
                {
                  q: "Can bone tumors be treated without amputation?",
                  a: "In many cases, modern orthopedic oncology techniques allow tumor removal while preserving the affected limb through reconstruction and specialized implants.",
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

            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">

              <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

              <div className="relative px-8 md:px-14 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">

                <div className="max-w-2xl">

                  <span className="inline-block bg-white/10 px-4 py-2 rounded-full text-sm font-medium">
                    Schedule Your Consultation
                  </span>

                  <h2 className="text-4xl font-bold mt-5 leading-tight">
                    Preserve Your Limb with Advanced Orthopedic Care
                  </h2>

                  <p className="mt-5 text-blue-100 leading-8">
                    Early diagnosis and timely treatment can significantly improve
                    the chances of preserving your limb, restoring movement, and
                    improving long-term quality of life. Consult
                    <strong> Dr. Saurabh Tiwari </strong>
                    for comprehensive Limb Salvage and Reconstruction Surgery.
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
    </>
  );
}