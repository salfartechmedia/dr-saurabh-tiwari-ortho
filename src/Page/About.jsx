import {
  Award,
  Bone,
  HeartHandshake,
  ShieldCheck,
  Activity,
  Stethoscope,
  ChevronRight,
  ArrowRight,
  Hospital,
  Dumbbell,
  BadgeCheck,
  MoveRight,
} from "lucide-react";

import DrSaurabhPhoto from "../assets/DrSaurabhPhoto.png";
// import DrSaurabhPhoto from "../assets/about/DrSaurabhPhoto.png";

const highlights = [
  {
    number: "210+",
    title: "Trauma\nSurgeries",
    icon: Activity,
  },
  {
    number: "150+",
    title: "Joint\nReplacement",
    icon: Bone,
  },
  {
    number: "100+",
    title: "Spine\nProcedures",
    icon: ShieldCheck,
  },
  {
    number: "1000+",
    title: "Patients\nTreated",
    icon: HeartHandshake,
  },
];

const expertise = [
  {
    title: "Joint Replacement",
    icon: Bone,
  },
  {
    title: "Trauma Care",
    icon: Activity,
  },
  {
    title: "Sports Injuries",
    icon: Dumbbell,
  },
  {
    title: "Spine Disorders",
    icon: Hospital,
  },
  {
    title: "Fracture Care",
    icon: Stethoscope,
  },
  {
    title: "Arthroscopy",
    icon: Award,
  },
];

const reasons = [
  "Personalized Treatment Plans",
  "Advanced Surgical Techniques",
  "Evidence-Based Orthopedic Care",
  "Compassionate Patient Care",
  "Modern Diagnostic Approach",
  "Focus on Faster Recovery",
];

export default function About() {
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">

        <img
          src={DrSaurabhPhoto}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-5"
        />

        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100 blur-3xl"></div>

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

              <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

                ABOUT DR. SAURABH TIWARI

              </span>

              <h1 className="mt-6 text-4xl md:text-6xl font-black text-blue-950 leading-tight">

                Dedicated To Restoring
                <br />

                Movement &
                <span className="text-blue-600">
                  {" "}Improving Lives
                </span>

              </h1>

              <p className="mt-8 text-lg leading-8 text-gray-600">

                Dr. Saurabh Tiwari is a dedicated DNB Orthopedic Surgeon
                committed to delivering advanced orthopedic care through
                modern treatment techniques, compassionate care, and
                personalized recovery plans for every patient.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <button className="rounded-xl bg-blue-950 px-8 py-4 text-white font-semibold transition hover:bg-blue-800">

                  Book Appointment

                </button>

                <button className="rounded-xl border-2 border-blue-950 px-8 py-4 font-semibold text-blue-950 hover:bg-blue-950 hover:text-white transition">

                  Contact Now

                </button>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <div className="absolute -left-10 top-20 h-44 w-44 rounded-full bg-blue-100 blur-2xl"></div>

              <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-blue-50 to-white shadow-2xl">

                <img
                  src={DrSaurabhPhoto}
                  alt="Dr Saurabh"
                  className="w-full"
                />

              </div>

              <div className="absolute left-8 bottom-8 rounded-2xl bg-white p-5 shadow-xl">

                <p className="text-3xl font-black text-blue-950">

                  DNB

                </p>

                <p className="text-gray-500">

                  Orthopedics

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <img
                src={DrSaurabhPhoto}
                alt=""
                className="rounded-[35px] shadow-xl"
              />

            </div>

            <div>

              <span className="text-blue-600 font-semibold uppercase tracking-widest">

                Who We Are

              </span>

              <h2 className="mt-4 text-4xl font-black text-blue-950">

                Expert Orthopedic Care
                For Every Stage Of Recovery

              </h2>

              <p className="mt-8 text-gray-600 leading-8">

                Specializing in orthopedic trauma, joint replacement,
                sports injuries, and spine care, Dr. Saurabh Tiwari
                focuses on providing personalized treatment that restores
                mobility, reduces pain, and helps patients return to
                their everyday lives with confidence.

              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-5">

                {[
                  "Patient First Approach",
                  "Advanced Technology",
                  "Accurate Diagnosis",
                  "Evidence-Based Care",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <BadgeCheck className="text-blue-600" />

                    <span className="font-medium">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= HIGHLIGHTS ================= */}

      <section className="bg-blue-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="text-blue-600 font-semibold">

              EXPERIENCE HIGHLIGHTS

            </p>

            <h2 className="mt-3 text-4xl font-black text-blue-950">

              Trusted Expertise In Orthopedic Care

            </h2>

          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {highlights.map((item) => (

              <div
                key={item.number}
                className="group rounded-3xl bg-white p-8 shadow hover:-translate-y-3 transition"
              >

                <item.icon className="h-12 w-12 text-blue-600" />

                <h3 className="mt-6 text-5xl font-black text-blue-950">

                  {item.number}

                </h3>

                <p className="mt-4 whitespace-pre-line text-gray-600">

                  {item.title}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE ================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16">

            <div>

              <span className="text-blue-600 font-semibold">

                WHY CHOOSE US

              </span>

              <h2 className="mt-4 text-4xl font-black text-blue-950">

                Orthopedic Care Built Around You

              </h2>

              <p className="mt-8 text-gray-600 leading-8">

                Every patient receives an individualized treatment plan
                based on their condition, lifestyle, and recovery goals.
                Our priority is helping you regain movement safely and
                confidently.

              </p>

            </div>

            <div className="grid gap-5">

              {reasons.map((item) => (

                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-gray-200 p-5 hover:border-blue-600 transition"
                >

                  <div className="flex items-center gap-4">

                    <ShieldCheck className="text-blue-600" />

                    <span className="font-semibold">

                      {item}

                    </span>

                  </div>

                  <ChevronRight />

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= EXPERTISE ================= */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="text-blue-600 font-semibold">

              SPECIALIZED CARE

            </span>

            <h2 className="mt-4 text-4xl font-black text-blue-950">

              Areas Of Expertise

            </h2>

          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {expertise.map((item) => (

              <div
                key={item.title}
                className="group rounded-3xl border border-gray-200 p-8 hover:border-blue-600 hover:shadow-xl transition"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

                  <item.icon className="h-8 w-8 text-blue-700" />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-blue-950">

                  {item.title}

                </h3>

                <p className="mt-3 text-gray-600">

                  Comprehensive diagnosis and advanced treatment
                  focused on restoring mobility and improving quality
                  of life.

                </p>

                <button className="mt-6 flex items-center gap-2 font-semibold text-blue-700">

                  Learn More

                  <MoveRight size={18} />

                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

            {/* ================= PATIENT CARE ================= */}

      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}

            <div className="relative">

              <img
                src={DrSaurabhPhoto}
                alt="Patient Care"
                className="rounded-[32px] shadow-xl"
              />

              <div className="absolute -bottom-6 -right-6 rounded-3xl bg-blue-950 text-white p-8 shadow-2xl">

                <h3 className="text-4xl font-black">100%</h3>

                <p className="mt-2 text-blue-100">
                  Dedicated to Patient-Centered Care
                </p>

              </div>

            </div>

            {/* Right */}

            <div>

              <span className="text-blue-600 font-semibold uppercase tracking-widest">
                PATIENT FIRST
              </span>

              <h2 className="mt-4 text-4xl font-black text-blue-950 leading-tight">
                Compassionate Care With
                <br />
                Modern Orthopedic Solutions
              </h2>

              <p className="mt-8 text-gray-600 leading-8">
                Every patient deserves personalized attention, accurate diagnosis,
                and a treatment plan tailored to their lifestyle and recovery goals.
                Our focus extends beyond relieving pain—we strive to restore
                confidence, mobility, and overall quality of life.
              </p>

              <div className="mt-10 space-y-5">

                {[
                  "Personalized Treatment Plans",
                  "Advanced Diagnostic Approach",
                  "Minimally Invasive Techniques",
                  "Comprehensive Rehabilitation Guidance",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <BadgeCheck className="h-5 w-5 text-blue-700" />
                    </div>

                    <span className="font-medium text-gray-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= TREATMENT PROCESS ================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              OUR PROCESS
            </span>

            <h2 className="mt-4 text-4xl font-black text-blue-950">
              Your Journey Towards Better Mobility
            </h2>

          </div>

          <div className="mt-20 grid md:grid-cols-5 gap-8">

            {[
              {
                no: "01",
                title: "Consultation",
              },
              {
                no: "02",
                title: "Diagnosis",
              },
              {
                no: "03",
                title: "Treatment Plan",
              },
              {
                no: "04",
                title: "Procedure",
              },
              {
                no: "05",
                title: "Recovery",
              },
            ].map((step) => (

              <div
                key={step.no}
                className="relative rounded-3xl border border-gray-200 bg-white p-8 text-center hover:border-blue-600 hover:shadow-xl transition"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-950 text-white text-xl font-black">

                  {step.no}

                </div>

                <h3 className="mt-6 text-xl font-bold text-blue-950">

                  {step.title}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= MISSION ================= */}

      <section className="bg-blue-950 text-white py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="text-blue-300 uppercase tracking-widest font-semibold">
            OUR MISSION
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black leading-tight">

            Helping People Move Better,
            <br />

            Live Better.

          </h2>

          <p className="mt-8 text-blue-100 leading-8 text-lg">

            Our mission is to provide ethical, evidence-based orthopedic care
            using modern medical advancements while ensuring every patient
            receives compassionate treatment, clear guidance, and long-term
            support throughout their recovery journey.

          </p>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="relative overflow-hidden py-24">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="rounded-[40px] bg-white p-10 md:p-16 shadow-2xl">

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              <div>

                <span className="text-blue-600 font-semibold uppercase tracking-widest">

                  BOOK APPOINTMENT

                </span>

                <h2 className="mt-5 text-4xl font-black text-blue-950 leading-tight">

                  Take The First Step
                  <br />

                  Towards Pain-Free Living

                </h2>

                <p className="mt-6 text-gray-600 leading-8">

                  Whether you're dealing with fractures, joint pain,
                  sports injuries, or spine-related conditions,
                  expert orthopedic care is just one appointment away.

                </p>

              </div>

              <div className="flex flex-wrap justify-center lg:justify-end gap-5">

                <button className="rounded-xl bg-blue-950 px-8 py-4 text-white font-semibold hover:bg-blue-800 transition">

                  Book Appointment

                </button>

                <button className="rounded-xl border-2 border-blue-950 px-8 py-4 font-semibold text-blue-950 hover:bg-blue-950 hover:text-white transition">

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