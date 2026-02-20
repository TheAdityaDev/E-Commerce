import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";
import { logo } from "../json/common";

const Footer = () => {
  const email = {
    to: `support@${logo.name.toLocaleLowerCase()}.com`,
    email: `support@${logo.name.toLocaleLowerCase()}.com`,
    subject: "Hello!",
    body: "This is a test email.",
  };

  const cleanEmail = email.to
    .trim() // remove spaces
    .replace(/\s/g, "") // remove any remaining whitespace
    .replace(/[\u200B-\u200D\uFEFF]/g, ""); // remove zero-width chars

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  // Decide href based on device
  const href = isMobile
    ? `mailto:${cleanEmail}?subject=${encodeURIComponent(email.subject)}&body=${encodeURIComponent(email.body)}`
    : `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(cleanEmail)}&su=${encodeURIComponent(email.subject)}&body=${encodeURIComponent(email.body)}`;

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-teal mt-10 to-gray-900 text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4 hover:text-indigo-500 transition duration-300">
            {logo.name}
          </h2>
          <p className="text-sm leading-6">
            We build modern digital experiences with cutting-edge technology and
            elegant design solutions.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, index) => (
              <div
                key={index}
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-indigo-600 hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {["Home", "About Us", "Services", "Portfolio", "Contact"].map(
              (item, index) => (
                <li
                  key={index}
                  className="hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-3">
            {[
              "Web Development",
              "UI/UX Design",
              "App Development",
              "SEO Optimization",
              "Cloud Solutions",
            ].map((item, index) => (
              <li
                key={index}
                className="hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Subscribe</h3>
          <p className="text-sm mb-4">
            Subscribe to get the latest updates and offers.
          </p>

          <div className="flex">
            <input
              type="email"
              inputMode="email"
              enterKeyHint="next"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none "
            />
            <button className="bg-indigo-600 px-5 py-2 rounded-r-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300">
              Send
            </button>
          </div>

          <div className="mt-6 gap-1 flex flex-col pb-3 text-sm underline underline-offset-2">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Email: {cleanEmail}
            </a>
            <a href="tel:+918855040187">Phone: +91 8855040187</a>
            <p>Address: 123 Business Street, NY</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {logo.name} All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
