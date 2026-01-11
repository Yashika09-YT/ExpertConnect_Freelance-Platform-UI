import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0b1324] to-[#070d1a] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* TOP TEXT (HOW IT WORKS STRIP) */}
        <div className="grid md:grid-cols-3 gap-8 text-center text-sm mb-20 text-gray-400">
          <p>Describe your requirements, timeline, and budget.</p>
          <p>Experts submit proposals. Compare profiles and ratings.</p>
          <p>Choose the best expert and start working securely.</p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* BRAND */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                E
              </div>
              <span className="font-semibold text-lg text-white">
                ExpertConnect
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Connect with the world's top freelance scientists and industry
              experts. Secure, reliable, and on-demand.
            </p>
          </div>

          {/* PLATFORM */}
          <div>
            <h4 className="font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/experts" className="hover:text-white">
                  Browse Experts
                </Link>
              </li>
              <li>
                <Link to="/#how-it-works" className="hover:text-white">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-gray-500">
          © 2026 ExpertConnect Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
