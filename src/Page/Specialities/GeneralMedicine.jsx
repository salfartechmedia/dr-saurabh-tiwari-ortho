import React from "react";
import {
  Stethoscope,
  HeartPulse,
  Thermometer,
  Pill,
  Activity,
  Wind,
  Soup,
  Apple,
  ClipboardCheck,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Health Consultation",
    desc: "Comprehensive medical consultations for acute and chronic illnesses with accurate diagnosis and personalized treatment plans.",
  },
  {
    icon: Thermometer,
    title: "Fever & Infection Management",
    desc: "Diagnosis and treatment for viral fever, bacterial infections, dengue, typhoid, malaria, seasonal flu, and respiratory infections.",
  },
  {
    icon: Pill,
    title: "Diabetes Management",
    desc: "Complete diabetes care including blood sugar monitoring, medication management, dietary counseling, and complication prevention.",
  },
  {
    icon: HeartPulse,
    title: "Hypertension & Heart Health",
    desc: "Expert care for high blood pressure, cholesterol disorders, cardiovascular risk assessment, and preventive heart care.",
  },
  {
    icon: Activity,
    title: "Thyroid & Hormonal Disorders",
    desc: "Diagnosis and long-term treatment for thyroid disorders, hormonal imbalance, and metabolism-related conditions.",
  },
  {
    icon: Wind,
    title: "Respiratory Disease Care",
    desc: "Treatment for asthma, bronchitis, allergies, chronic cough, respiratory infections, and other lung-related conditions.",
  },
  {
    icon: Soup,
    title: "Gastrointestinal Disorders",
    desc: "Comprehensive treatment for acidity, gastritis, abdominal pain, constipation, diarrhea, liver disorders, and digestive diseases.",
  },
  {
    icon: Apple,
    title: "Lifestyle Disease Management",
    desc: "Management of obesity, fatty liver, high cholesterol, metabolic syndrome, and other lifestyle-related health conditions.",
  },
  {
    icon: ClipboardCheck,
    title: "Preventive Health Check-ups",
    desc: "Routine health screenings, blood tests, wellness consultations, and preventive healthcare packages for all age groups.",
  },
];

const features = [
  "Experienced General Physicians",
  "15-Bedded Multispecialty Hospital",
  "Comprehensive Health Check-ups",
  "Advanced Diagnostic Facilities",
  "Personalized Treatment Plans",
  "Diabetes & Hypertension Management",
  "Treatment for Acute & Chronic Illnesses",
  "Preventive Healthcare Services",
  "Affordable & Quality Medical Care",
  "Hygienic Infrastructure",
  "24×7 Emergency Medical Support",
  "Patient-Centered Approach",
];

export default function GeneralMedicine() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Section */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-block bg-[#FCA311]/10 text-[#FCA311] font-semibold px-5 py-2 rounded-full">
            General Healthcare
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-6 leading-tight">
            General Medicine Department
          </h2>

          <div className="w-24 h-1 bg-[#FCA311] mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-600 text-lg leading-8 mt-8">
            At <strong>Abhay Jeevan Hospital</strong>, our General Medicine
            Department provides comprehensive diagnosis, treatment, and
            preventive healthcare for patients of all ages. We focus on early
            diagnosis, evidence-based treatment, and personalized care to help
            every patient achieve better health.
          </p>

          <p className="text-gray-600 text-lg leading-8 mt-5">
            Whether you need treatment for common illnesses, chronic diseases,
            preventive health check-ups, or long-term disease management, our
            experienced physicians are committed to delivering trusted and
            compassionate medical care.
          </p>

        </div>

        {/* Services */}

        <div className="mt-24">

          <div className="text-center mb-14">

            <span className="text-[#FCA311] font-semibold uppercase tracking-wider">
              Our Services
            </span>

            <h3 className="text-4xl font-bold text-[#0B1F3A] mt-3">
              Comprehensive Medical Services
            </h3>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Providing expert diagnosis, effective treatment, and preventive
              healthcare services for a healthier life.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {services.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >

                  <div className="w-16 h-16 rounded-2xl bg-[#0B1F3A] group-hover:bg-[#FCA311] duration-300 flex items-center justify-center">

                    <Icon
                      size={30}
                      className="text-white"
                    />

                  </div>

                  <h4 className="text-2xl font-semibold text-[#0B1F3A] mt-6">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 leading-7 mt-4">
                    {item.desc}
                  </p>

                </div>

              );

            })}

          </div>

        </div>
                {/* Why Choose Us */}

        <div className="mt-24 grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}

          <div>

            <span className="text-[#FCA311] font-semibold uppercase tracking-wider">
              Why Choose Us
            </span>

            <h3 className="text-4xl font-bold text-[#0B1F3A] mt-3 leading-tight">
              Why Choose Abhay Jeevan Hospital?
            </h3>

            <p className="text-gray-600 mt-6 leading-8">
              Our General Medicine Department is dedicated to providing
              accurate diagnosis, timely treatment, and compassionate medical
              care. We combine experienced physicians, modern diagnostic
              facilities, and evidence-based treatment to help patients achieve
              better health and long-term wellness.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {features.map((feature, index) => (

                <div
                  key={index}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2
                    size={22}
                    className="text-[#FCA311] mt-1 flex-shrink-0"
                  />

                  <p className="text-gray-700 leading-7">
                    {feature}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-[#0B1F3A] rounded-3xl p-10 md:p-12 text-white shadow-2xl">

            <span className="inline-block bg-[#FCA311]/20 text-[#FCA311] px-4 py-2 rounded-full text-sm font-semibold">
              Our Commitment
            </span>

            <h3 className="text-3xl md:text-4xl font-bold mt-6 leading-tight">
              Your Health Is Our Priority
            </h3>

            <div className="w-24 h-1 bg-[#FCA311] rounded-full mt-5 mb-8"></div>

            <p className="text-gray-200 leading-8">
              At <strong>Abhay Jeevan Hospital</strong>, we believe quality
              healthcare begins with accurate diagnosis, compassionate
              treatment, and preventive care. Our General Medicine Department
              is committed to delivering personalized healthcare services that
              promote long-term health and improve the quality of life for
              every patient.
            </p>

            <p className="text-gray-300 leading-8 mt-6">
              Whether you require routine medical consultation, chronic disease
              management, preventive health check-ups, or emergency medical
              attention, our experienced team is dedicated to providing trusted
              healthcare with professionalism, compassion, and excellence.
            </p>

            <button className="mt-10 bg-[#FCA311] text-[#0B1F3A] font-bold px-8 py-4 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg">
              Book Appointment
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}