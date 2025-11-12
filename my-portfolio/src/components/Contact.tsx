// src/components/Contact.tsx
import Image from 'next/image';
import { FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat. Feel free to reach out!
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left Column: Profile Picture */}
          <div className="lg:w-1/3 text-center">
            <Image
              src="/1759165111506.jpg" // TODO: Make sure this filename matches your picture
              alt="Your Name"
              width={250}
              height={250}
              className="rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-xl"
            />
          </div>

          {/* Right Column: Contact Links */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-gray-800 p-8 rounded-lg shadow-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-center">Let's Connect</h3>
              <div className="space-y-4">
                {/* Email Link */}
                <a
                  href="mailto:rigbewweleslasie@example.com" // TODO: Replace with your email
                  className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
                >
                  <FaEnvelope className="text-2xl text-red-400 mr-4 group-hover:scale-110 transition-transform" />
                  <span>rigbewweleslasie@example.com</span> {/* TODO: Replace with your email */}
                </a>

                {/* LinkedIn Link */}
                <a
                  href="https://www.linkedin.com/in/rigbe-weleslasie-4a339a35a/" // TODO: Replace with your LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
                >
                  <FaLinkedin className="text-2xl text-blue-400 mr-4 group-hover:scale-110 transition-transform" />
                  <span>Connect on LinkedIn</span>
                </a>

                {/* GitHub Link */}
                <a
                  href="https://github.com/RigbeWeleslasie" // TODO: Replace with your GitHub URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
                >
                  <FaGithub className="text-2xl text-gray-400 mr-4 group-hover:scale-110 transition-transform" />
                  <span>Check out my GitHub</span>
                </a>

                {/* Portfolio Link (Optional, but as requested) */}
                <a
                  href="/"
                  className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
                >
                  <FaGlobe className="text-2xl text-green-400 mr-4 group-hover:scale-110 transition-transform" />
                  <span>Portfolio Home</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;