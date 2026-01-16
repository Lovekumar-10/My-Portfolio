
import { useState } from "react";
import { Link } from "react-router-dom";
import theme from "../theme";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_20mgwga",
        "template_jlk0005",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "VXiEVFOvbcWLcc0OH"
      )
      .then(
        (res) => {
          setLoading(false);
          setFormData({ name: "", email: "", message: "" });
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000); // disappears after 3s
        },
        (err) => {
          setLoading(false);
          console.error(err);
        }
      );
  };

  return (
    <section className="min-h-screen px-6 py-24 max-w-7xl mx-auto relative">
      {/* PAGE TITLE */}
      <div className="mb-16 ">
        <h1 className="text-5xl md:text-6xl font-bold font-mono tracking-tight text-black ">
          LET&apos;S CONNECT
        </h1>
        <div className="w-16 h-[4px] bg-yellow-400 mt-4 border-2 border-black" />
        <p className={`mt-6 max-w-md ${theme.colors.secondary}`}>
          Have a project in mind or just want to say hi?
          Drop a message and I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* LEFT – FORM */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-black-700 font-bold-100 text-sm mb-1">
              NAME_
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="YOUR NAME"
              className="w-full px-4 py-3 border-2 border-black outline-none shadow-[4px_4px_0_0_#000] font-mono placeholder-gray-400 focus:bg-yellow-50"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">EMAIL_</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="EMAIL@EXAMPLE.COM"
              className="w-full px-4 py-3 border-2 border-black outline-none shadow-[4px_4px_0_0_#000] font-mono placeholder-gray-400 focus:bg-yellow-50"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">MESSAGE_</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="TELL ME ABOUT YOUR PROJECT..."
              className="w-full px-4 py-3 border-2 border-black shadow-[4px_4px_0_0_#000] outline-none font-mono placeholder-gray-400 resize-none focus:bg-yellow-50"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 px-6 py-3 text-black/100 bg-yellow-400 border-2 border-black font-bold shadow-[2px_2px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_0_#000] flex items-center gap-2 transition"
          >
            {loading ? "SENDING..." : "SEND MESSAGE"} <IoMdSend className="text-xl" />
          </button>
        </form>

        {/* RIGHT – CONTACT INFO */}
        <div className="space-y-8">
          <div className="border-2 border-black p-6 flex items-center justify-between gap-6 shadow-[6px_6px_0_0_#000] max-w-full">
            <div className="flex-1 min-w-0">
              <p className="font-mono text-xs mb-2 text-blue-600">DIRECT_EMAIL</p>
              <a
                href="mailto:Lovekumar161129@gmail.com"
                className="font-mono text-base sm:text-xl font-bold text-black underline underline-offset-4 break-all hover:text-yellow-400 transition block"
              >
                Lovekumar161129@gmail.com
              </a>
            </div>
            <img
              src="/images/email-file.gif"
              alt="email-logo"
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain shrink-0"
            />
          </div>

          {/* SOCIALS */}
          <div>
            <p className="font-mono text-sm mb-3">FIND_ME_ON_</p>
            <p className=" text-xs mb-4 text-gray-600">
              Feel free to connect — I’m always open to opportunities & collaboration.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "GITHUB", link: "https://github.com/Lovekumar-10", icon: <FaGithub /> },
                { name: "LINKEDIN", link: "https://www.linkedin.com/in/love-kumar96", icon: <FaLinkedin /> },
                { name: "INSTAGRAM", link: "https://www.instagram.com/love_kumar9654/", icon: <FaInstagram /> },
                { name: "WHATSAPP", link: "https://wa.me/9654662096", icon: <FaWhatsapp /> },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between px-4 py-3 font-mono font-bold hover:bg-yellow-400 border-2 border-black bg-white shadow-[4px_4px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000] transition-all cursor-pointer"
                >
                  <span>{item.name}</span>
                  <span className="border-2 border-black p-1 text-xl flex items-center justify-center">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-sm">
            <span className="w-3 h-3 rounded-full bg-green-500 border border-black" />
            AVAILABLE FOR NEW OPPORTUNITIES
          </div>
        </div>
      </div>

      {/* TOAST NOTIFICATION */}
      {showToast && (
          <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black/70 text-bold px-6 py-3 rounded-sm shadow-[4px_4px_0_0_#000] z-50 text-center min-w-xs sm:max-w-md w-auto animate-toast">
            Your message has been sent. Thanks for contacting us!
          </div>
      )}

<style>
  {`
    @keyframes toastSlide {
      0% { opacity: 0; transform: translateY(-20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-toast {
      animation: toastSlide 0.4s ease forwards;
    }
  `}
</style>
</section>
  );
};

export default Contact;
