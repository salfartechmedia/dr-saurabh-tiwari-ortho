import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const SocialBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      link: "https://facebook.com",
      bg: "bg-blue-600",
    },
    {
      icon: <FaInstagram />,
      link: "https://instagram.com",
      bg: "bg-pink-500",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://linkedin.com",
      bg: "bg-blue-700",
    },
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/919999999999",
      bg: "bg-green-500",
    },
  ];

  return (
    <div
      className={`fixed top-1/2 right-0 -translate-y-1/2 z-50 transition-all duration-700 ease-out ${
        show
          ? "translate-x-0 opacity-100"
          : "translate-x-24 opacity-0"
      }`}
    >
      <div className="flex flex-col bg-white rounded-bl-3xl rounded-tl-3xl p-2 gap-3">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${item.bg}
              w-12 h-12
              rounded-full
              flex items-center justify-center
              text-white
              shadow-lg
              hover:scale-110
              hover:rotate-6
              transition-all
              duration-300`}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialBar;