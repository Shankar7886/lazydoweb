import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

import companyLogo from "../../assets/onlysloth.png"

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 relative overflow-hidden border-t border-gray-100">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-12 left-12 w-24 h-24 bg-gradient-to-r from-red-50 to-pink-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-12 right-12 w-32 h-32 bg-gradient-to-r from-red-50 to-orange-50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative px-6 md:px-20 pt-12 pb-6">
        {/* Main Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="md:col-span-1 space-y-5">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg p-2">
                  <img
                    src={companyLogo}
                    loading="lazy"
                    alt="lazy do Logo"
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>
                <div>
                  <h1 className="text-gray-900 text-xl font-light tracking-wide">
                   Lazy Do
                  </h1>
                  <p className="text-xs text-red-600 font-medium uppercase tracking-wider">
                    Digital Excellence
                  </p>
                </div>
              </div>

              <p className="text-gray-500 leading-relaxed font-light text-sm">
                Transform your digital presence with cutting-edge solutions
                tailored for your success.
              </p>
            </div>

            <div className="flex space-x-3">
              <div className="w-9 h-9 bg-gray-50 hover:bg-red-50 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:shadow-md group">
                <Linkedin
                  size={16}
                  className="text-gray-400 group-hover:text-red-600 transition-colors"
                />
              </div>
              <div className="w-9 h-9 bg-gray-50 hover:bg-red-50 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:shadow-md group">
                <Twitter
                  size={16}
                  className="text-gray-400 group-hover:text-red-600 transition-colors"
                />
              </div>
              <div className="w-9 h-9 bg-gray-50 hover:bg-red-50 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:shadow-md group">
                <Github
                  size={16}
                  className="text-gray-400 group-hover:text-red-600 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h3 className="text-gray-900 font-light text-lg relative">
              Services
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-700"></div>
            </h3>

            <ul className="space-y-3">
              {[
                {
                  name: "Custom Web Development",
                  path: "/Services/customWebDevlopment",
                },
                {
                  name: "Mobile UI/UX Development",
                  path: "/Services/mobilebDevlopment",
                },
                {
                  name: "CRM Software",
                  path: "/Services/CrmSoftwareDvelopment",
                },
                {
                  name: "Digital Marketing",
                  path: "/Services/DigitalMarketing",
                },
                {
                  name: "Online Shopping App Development",
                  path: "/Services/onlineShoppingAppDevlopment",
                },
              ].map((link, index) => (
                <li key={index} className="group cursor-pointer">
                  <a
                    href={link.path}
                    className="flex items-center space-x-3 text-gray-500 group-hover:text-red-600 transition-all duration-300"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1"
                    />
                    <span className="font-light text-sm">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-gray-900 font-light text-lg relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-700"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/aboutUs" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Blog", path: "/blogs" },
                { name: "Contact Us", path: "/contact" },
              ].map((link, index) => (
                <li key={index} className="group cursor-pointer">
                  <a
                    href={link.path}
                    className="flex items-center space-x-3 text-gray-500 group-hover:text-red-600 transition-all duration-300"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1"
                    />
                    <span className="font-light text-sm">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-gray-900 font-light text-lg relative">
              Get in Touch
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-700"></div>
            </h3>
            <div className="space-y-4">
              <div className="group cursor-pointer">
                <div className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300">
                  <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
                    <Phone className="text-red-600" size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">
                      Call us
                    </p>
                    <p className="text-gray-600 group-hover:text-red-600 transition-colors font-light text-sm">
                      (+91) 9667442617
                    </p>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300">
                  <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
                    <Mail className="text-red-600" size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">
                      Email us
                    </p>
                    <p className="text-gray-600 group-hover:text-red-600 transition-colors font-light text-sm break-all">
                      lazydocorp@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300">
                  <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
                    <MapPin className="text-red-600" size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">
                      Visit us
                    </p>
                    <p className="text-gray-600 leading-relaxed font-light text-sm">
                      Moti Nagar,New Delhi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-4">
          <div className="text-gray-400 font-light text-sm">
            &copy; {new Date().getFullYear()}  Lazy Do. All rights
            reserved.
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="/terms"
              className="text-gray-400 hover:text-red-600 cursor-pointer transition-colors font-light text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
