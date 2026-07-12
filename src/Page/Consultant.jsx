import { useState, useRef, useEffect } from "react";
// import BreadCrumb from "../Component/BreadCrumb";

import DrAnjali from "../assets/Consultants/DrAnjali.jpeg";
import DrLal from "../assets/Consultants/DrLal.jpeg";
import Docemoji from "../assets/Consultants/Docemoji.jpeg";
import { Link } from "react-router-dom";

const doctors = [
  {
    id: 1,
    name: "Dr. Anjali Singh",
    specialty: "Gynecologist & Infertility Specialist",
    qualification: "MBBS, MS(Gold Medalist) FMAS, DNB, MNAMS, CIMP",
    experience: "6 Years",
    timing: "Mon–Sat | 10:00 AM – 2:00 PM",
    emoji: DrAnjali,
    color: "#0B1F3A",
    tagline: "Gynecologist & Infertility Specialist",
  },
  {
    id: 2,
    name: "Dr. Lal Ratnakar Singh",
    specialty: "General Physician",
    qualification: "MBBS, MD, ACPE, CPE (Gold Medalist)",
    experience: "6 Years",
    timing: "Mon–Fri | 11:00 AM – 3:00 PM",
    emoji: DrLal,
    color: "#0B1F3A",
    tagline: "General Physician",
  },
  {
    id: 3,
    name: "Dr. S J Patel",
    specialty: "Pediatrician",
    qualification: "MBBS, DCH",
    experience: "5 Years",
    timing: "Tue–Sun | 3:00 PM – 4:00 PM",
    emoji: Docemoji,
    color: "#0B1F3A",
    tagline: "Child Health Specialist",
  },
  {
    id: 4,
    name: "Dr. Raviraj Patil",
    specialty: "General Surgeon",
    qualification: "MBBS, MS",
    experience: "7 Years",
    timing: "Mon–Sat | 12:00 PM – 4:00 PM",
    emoji: Docemoji,
    color: "#0B1F3A",
    tagline: "General Surgeon",
  },
  {
    id: 5,
    name: "Dr. Pankaj Singh",
    specialty: "Plastic Surgeon",
    qualification: "MBBS, MS, MCh",
    experience: "5 Years",
    timing: "Mon–Sat | 12:00 PM – 4:00 PM",
    emoji: Docemoji,
    color: "#0B1F3A",
    tagline: "Plastic Surgeon",
  },
];

const CARD_GAP = 32;

export default function Consultant() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [hovered, setHovered] = useState(null);

  // ✅ Responsive State
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const CARD_WIDTH =
    screenWidth < 640
      ? 260
      : screenWidth < 1024
      ? 290
      : 320;

  const autoRef = useRef(null);

  const total = doctors.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);

  const next = () => setActive((a) => (a + 1) % total);

    // Auto-slide every 4 seconds
  useEffect(() => {
    autoRef.current = setInterval(next, 4000);
    return () => clearInterval(autoRef.current);
  }, [active]);

  const resetAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(next, 4000);
  };

  const handlePrev = () => {
    prev();
    resetAuto();
  };

  const handleNext = () => {
    next();
    resetAuto();
  };

  // Touch Support
  const onDragStart = (e) => {
    setDragging(true);
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
  };

  const onDragEnd = (e) => {
    if (!dragging) return;

    const endX = e.changedTouches
      ? e.changedTouches[0].clientX
      : e.clientX;

    const diff = startX - endX;

    if (Math.abs(diff) > 40) {
      diff > 0 ? handleNext() : handlePrev();
    }

    setDragging(false);
  };

  // 3D Card Position
  const getCardStyle = (index) => {
    const diff = index - active;

    const wrappedDiff =
      diff > total / 2
        ? diff - total
        : diff < -total / 2
        ? diff + total
        : diff;

    const absD = Math.abs(wrappedDiff);
    const sign = Math.sign(wrappedDiff);

    const translateX =
      wrappedDiff *
      ((screenWidth < 640
        ? CARD_WIDTH * 0.45
        : CARD_WIDTH * 0.70) + CARD_GAP);

    const translateZ =
      absD === 0 ? 0 : absD === 1 ? -120 : -280;

    const rotateY =
      sign * (absD === 0 ? 0 : absD === 1 ? 22 : 40);

    const scale =
      absD === 0 ? 1 : absD === 1 ? 0.85 : 0.7;

    const opacity =
      absD === 0
        ? 1
        : absD === 1
        ? 0.75
        : absD === 2
        ? 0.45
        : 0;

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: 10 - absD,
      filter: `blur(${absD === 0 ? 0 : absD === 1 ? 1 : 3}px)`,
      transition: "all .55s cubic-bezier(.23,1,.32,1)",
      cursor: absD ? "pointer" : "default",
      pointerEvents: absD > 2 ? "none" : "auto",
    };
  };

  const doc = doctors[active];

  return (
    <div
      className="min-h-screen bg-[#0B1F3A] py-14 md:py-20 overflow-hidden"
      style={{
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}

        <div className="text-center mb-12">

          <span className="inline-block bg-[#0B1F3A] text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            OUR MEDICAL TEAM
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Meet Our
            <span className="text-[#FCA311]">
              {" "}Specialists
            </span>
          </h2>

          <p className="text-gray-300 max-w-xl mx-auto mt-5 leading-7">
            Dedicated doctors with years of experience,
            committed to providing compassionate and
            world-class healthcare for every patient.
          </p>

        </div>

        {/* Slider */}

        <div
          className="relative flex justify-center items-center w-full overflow-hidden"
          style={{
            height: screenWidth < 640 ? 580 : 670,
            perspective: "1200px",
          }}
          onMouseDown={onDragStart}
          onMouseUp={onDragEnd}
          onTouchStart={onDragStart}
          onTouchEnd={onDragEnd}
        >

          <div
            className="relative"
            style={{
              width: CARD_WIDTH,
              height: screenWidth < 640 ? 350 : 420,
              transformStyle: "preserve-3d",
            }}
          >
            {doctors.map((doctor, i) => (

              <div
                key={doctor.id}
                className="absolute top-0 left-0"
                style={{
                  width: CARD_WIDTH,
                  ...getCardStyle(i),
                }}
                onClick={() => {
                  if (i !== active) {
                    setActive(i);
                    resetAuto();
                  }
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >

                <DoctorCard
                  doc={doctor}
                  isActive={i === active}
                  hovered={hovered === i}
                />

              </div>

            ))}
          </div>

        </div>

                {/* Active Doctor Info */}

        <div
          className="mt-8 w-full max-w-lg bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex flex-col sm:flex-row items-center gap-4"
        >

          <img
            src={doc.emoji}
            alt={doc.name}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-[#0B1F3A]"
          />

          <div className="flex-1 text-center sm:text-left">

            <h3 className="text-lg font-bold text-[#0B1F3A]">
              {doc.name}
            </h3>

            <p className="text-sm text-gray-500">
              {doc.timing}
            </p>

          </div>

          <Link
            to='/book-appointment'
            className="bg-[#0B1F3A] hover:bg-[#08172d] text-white text-sm font-semibold px-5 py-2 rounded-xl transition-all duration-300"
          >
            Book OPD
          </Link>

        </div>

        {/* Navigation */}

        <div className="flex items-center gap-6 mt-10">

          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow hover:shadow-lg flex items-center justify-center text-[#0B1F3A] transition"
          >

            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                d="M15 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </button>

          {/* Dots */}

          <div className="flex gap-2">

            {doctors.map((_, i) => (

              <button
                key={i}
                onClick={() => {
                  setActive(i);
                  resetAuto();
                }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 28 : 8,
                  height: 8,
                  background:
                    i === active
                      ? "#FCA311"
                      : "#d1d5db",
                }}
              />

            ))}

          </div>

          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow hover:shadow-lg flex items-center justify-center text-[#0B1F3A] transition"
          >

            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </button>

        </div>

      </div>
    </div>
  );
}

function DoctorCard({ doc, isActive, hovered }) {

  const isMobile =
    typeof window !== "undefined" &&
    window.innerWidth < 640;

  return (

    <div
      className="relative w-full max-w-[320px] h-[600px] sm:h-[520px] mx-auto rounded-3xl overflow-hidden bg-white select-none"
      style={{
        boxShadow: isActive
          ? "0 32px 80px rgba(0,0,0,.18),0 4px 24px rgba(0,0,0,.10)"
          : "0 8px 32px rgba(0,0,0,.08)",

        border: isActive
          ? `2px solid ${doc.color}22`
          : "2px solid #f3f4f6",

        transform:
          hovered && isActive
            ? "translateY(-6px)"
            : "none",

        transition:
          "transform .3s ease, box-shadow .3s ease",
      }}
    >

      {/* Top Section */}

      <div
        style={{
          height: 140,
          background: `linear-gradient(135deg, ${doc.color}15 0%, ${doc.color}30 100%)`,
          position: "relative",
        }}
      >

        <div
          style={{
            position: "absolute",
            top: -30,
            right: -30,
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: `${doc.color}20`,
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: -20,
            left: 20,
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: `${doc.color}15`,
          }}
        />

        <img
          src={doc.emoji}
          alt={doc.name}
          className="absolute left-1/2 -translate-x-1/2 rounded-full object-cover bg-white"
          style={{
            bottom: isMobile ? -28 : -36,
            width: isMobile ? 72 : 96,
            height: isMobile ? 72 : 96,
            border: `3px solid ${doc.color}`,
            boxShadow: `0 4px 20px ${doc.color}40`,
          }}
        />

        <div
          className="absolute top-3 right-3 text-white text-xs font-bold px-3 py-1 rounded-full"
          style={{
            background: doc.color,
          }}
        >
          {doc.experience}
        </div>

      </div>

      {/* Card Body */}

      <div className="px-5 pt-16 pb-5 text-center">

        <p
          className="text-xs font-semibold tracking-widest uppercase mb-2"
          style={{ color: doc.color }}
        >
          {doc.tagline}
        </p>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
          {doc.name}
        </h3>

        <p className="text-sm text-gray-600 mt-2">
          {doc.specialty}
        </p>

        <p className="text-sm font-semibold text-gray-700 mt-1 leading-6">
          {doc.qualification}
        </p>

        {/* Divider */}

        <div className="h-px bg-gray-100 my-5"></div>

        {/* Timing */}

        <div className="flex items-center justify-center gap-2 mb-6">

          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke={doc.color}
              strokeWidth="2"
            />

            <path
              d="M12 6v6l4 2"
              stroke={doc.color}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <span className="text-xs text-gray-500">
            {doc.timing}
          </span>

        </div>

        {/* CTA */}

        <Link to ='/book-appointment'
          className="block w-full py-3 rounded-xl text-sm sm:text-base font-semibold text-center transition-all duration-300"
          style={{
            background: isActive ? doc.color : "transparent",
            color: isActive ? "#fff" : doc.color,
            border: `2px solid ${doc.color}`,
          }}
        >
          {isActive ? "Book Appointment" : "View Profile"}
        </Link>

      </div>

    </div>

  );
}
