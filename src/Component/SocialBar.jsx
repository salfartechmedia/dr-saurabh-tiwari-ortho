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
      bg: "bg-white",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/bonedoc_drsaurabh?igsh=MW9wZjEzZTUwbWtncA==",
      bg: "bg-white",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://linkedin.com",
      bg: "bg-white",
    },
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/919999999999",
      bg: "bg-white",
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
      <div className="flex flex-col bg-blue-950 rounded-bl-2xl rounded-tl-2xl p-3 gap-3">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${item.bg}
              w-8 h-8
              rounded-full
              flex items-center justify-center
              text-green-600
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