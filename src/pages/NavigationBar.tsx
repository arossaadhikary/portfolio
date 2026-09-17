import { useState } from "react"
import { Link } from "react-router-dom"

import Email from "../assets/icon-email.png"
import GitHub from "../assets/icon-github.png"
import LinkedIn from "../assets/icon-linkedin.png"

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="absolute top-5 left-0 z-50 w-full flex justify-between items-center px-6 sm:px-8 py-4 text-white">
      {/* Logo/Handle */}
      <Link
        to="/"
        className="hover:text-blue-400 transition font-semibold"
      >
        @arossaadhikary
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 text-lg">
        <li>
          <Link
            to="/about"
            className="transition-all duration-200 hover:font-bold"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/projects"
            className="transition-all duration-200 hover:font-bold"
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="/experiences"
            className="transition-all duration-200 hover:font-bold"
          >
            Experiences
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="transition-all duration-200 hover:font-bold"
          >
            Connect
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden md:flex space-x-6">
        <a
          href="https://www.linkedin.com/in/arossaadhikary/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={LinkedIn}
            alt="LinkedIn"
            className="h-6 w-6 hover:opacity-70 transition"
          />
        </a>

        <a
          href="https://github.com/arossaadhikary"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={GitHub}
            alt="GitHub"
            className="h-6 w-6 hover:opacity-70 transition"
          />
        </a>

        <a href="mailto:arossa.adhikaryc@gmail.com">
          <img
            src={Email}
            alt="Email"
            className="h-6 w-6 hover:opacity-70 transition"
          />
        </a>
      </div>

      {/* Mobile button */}
      <button
        className="md:hidden focus:outline-none z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <span className="text-3xl">&times;</span>
        ) : (
          <span className="text-3xl">&#9776;</span>
        )}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-slate-900 flex flex-col items-center justify-center space-y-8 text-2xl z-40">

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="transition-all duration-200 hover:font-bold"
          >
            About
          </Link>

          <Link
            to="/projects"
            onClick={() => setMenuOpen(false)}
            className="transition-all duration-200 hover:font-bold"
          >
            Projects
          </Link>

          <Link
            to="/experiences"
            onClick={() => setMenuOpen(false)}
            className="transition-all duration-200 hover:font-bold"
          >
            Experiences
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="transition-all duration-200 hover:font-bold"
          >
            Connect
          </Link>

          <div className="flex space-x-6 pt-6">
            <a
              href="https://www.linkedin.com/in/arossaadhikary/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={LinkedIn}
                alt="LinkedIn"
                className="h-8 w-8 hover:opacity-70 transition"
              />
            </a>

            <a
              href="https://github.com/arossaadhikary"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={GitHub}
                alt="GitHub"
                className="h-8 w-8 hover:opacity-70 transition"
              />
            </a>

            <a href="mailto:arossa.adhikaryc@gmail.com">
              <img
                src={Email}
                alt="Email"
                className="h-8 w-8 hover:opacity-70 transition"
              />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavigationBar