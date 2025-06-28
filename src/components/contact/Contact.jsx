import contact from "../../assets/contact.jpg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9q2dnan",
        "template_4g8zlzm",
        form.current,
        "eFsOrcFwb7oeD_oO1"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Send Email Successfully", {
            position: toast.POSITION.RIGHT_TOP,
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="min-h-screen"
      id="contact"
      style={{
        background:
          "linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 50%, #FFE4E1 100%)",
      }}
    >
      {/* Main Content */}
      <div className="px-8 py-6">
        <div className="max-w-6xl mx-auto  shadow-2xl overflow-hidden ">
          <div className="flex">
            {/* Left Side - Form */}
            <div className="w-1/2 p-8">
              <div className="mb-6">
                <h1 className="text-5xl font-normal text-[#D52B5C] mb-4">
                  Contact us
                </h1>
                <p className="text-gray-600 text-lg">
                  Get in touch and let us know how we can help
                </p>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-8">
                {/* Name and Email Row */}
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Name"
                      required
                      className="w-full px-0 py-3 text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#D52B5C] focus:outline-none transition-colors duration-300 text-lg placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="from_email"
                      placeholder="E-mail"
                      required
                      className="w-full px-0 py-3 text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#D52B5C] focus:outline-none transition-colors duration-300 text-lg placeholder-gray-500"
                    />
                  </div>
                </div>

                {/* Topic Dropdown */}
                <div className="relative">
                  <select
                    name="topic"
                    className="w-full px-0 py-3 text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#D52B5C] focus:outline-none transition-colors duration-300 text-lg appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Topic
                    </option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="business">Business</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-0 top-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    required
                    rows="4"
                    className="w-full px-0 py-3 text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#D52B5C] focus:outline-none transition-colors duration-300 text-lg resize-none placeholder-gray-500"
                  ></textarea>
                </div>

                {/* Checkbox */}
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 text-[#D52B5C] border-gray-300 rounded focus:ring-[#D52B5C]"
                  />
                  <label htmlFor="newsletter" className="text-gray-600">
                    Please sign me up for the Latest Update
                  </label>
                </div>

                {/* Submit Button and Social */}
                <div className="flex items-center justify-between pt-8">
                  <button
                    type="submit"
                    className="bg-[#D52B5C] hover:bg-[#D52B5C]-600 text-white font-medium py-3 px-8 transition-colors duration-300 text-lg flex items-center space-x-2"
                  >
                    <span>Send Message</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>

                  <div className="flex items-center space-x-4">
                    
                    <div className="flex space-x-2">
                      <a
                        href="#"
                        className="w-8 h-8 bg-[#D52B5C]-500 rounded-full flex items-center justify-center text-white text-sm"
                      >
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Side - Your Image */}
            <div
              className="w-1/2 flex items-center justify-center p-8"
              data-aos="zoom-in-up"
            >
              <img
                src={contact}
                alt="Contact illustration"
                className="w-full h-full object-cover max-w-md"
              />
            </div>
          </div>
          {/* Footer */}
          <div className="px-16 py-8 border-t border-gray-100">
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Contact;
