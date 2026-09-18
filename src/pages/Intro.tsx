import { motion } from "framer-motion"
import Resume from "../../public/ArossaAdhikaryResume.pdf"
import heroImage from "../assets/hero_background.webp"

import About from "./About"
import { Link } from "react-router-dom"

const Intro = () => {
  return (
    <>
      <section
        id="intro"
        className="
          relative
          w-full
          min-h-[680px]
          sm:min-h-[720px]
          md:min-h-0
          md:aspect-[16/9]
          overflow-hidden
          bg-[#0a192f]
        "
      >
        {/* BACKGROUND IMAGE */}
        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-[center_top]
            sm:bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />

        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-black/15" />

        {/* CENTER CONTRAST GRADIENT */}
        <div
          className="
            absolute
            inset-0
            z-10
            bg-[radial-gradient(circle_at_center,rgba(10,25,47,0.58)_0%,rgba(10,25,47,0.32)_38%,transparent_72%)]
          "
        />

        {/* TEXT */}
        <div
          className="
            absolute
            inset-0
            z-20
            flex
            items-center
            justify-center
            px-5
            pt-20
            pb-24
            sm:px-6
            sm:pt-24
            md:pt-0
            md:pb-0
          "
        >
          <motion.div
            className="
              w-full
              max-w-3xl
              text-center
              text-white
            "
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <h1
              className="
                mb-3
                text-4xl
                font-bold
                leading-tight
                sm:text-5xl
                md:mb-4
                md:text-6xl
                lg:text-7xl
                drop-shadow-[0_3px_8px_rgba(0,0,0,0.65)]
              "
            >
              Hi, I'm Arossa 👋
            </h1>

            <h2
              className="
                mb-4
                text-base
                font-light
                sm:text-lg
                md:mb-6
                md:text-2xl
                drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]
              "
            >
              I build with people in mind.
            </h2>

            <p
              className="
                mx-auto
                max-w-[90%]
                text-sm
                font-medium
                leading-6
                sm:max-w-xl
                sm:text-base
                md:max-w-2xl
                md:text-lg
                md:leading-relaxed
                drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]
              "
            >
              I’m interested in product, cloud infrastructure, cybersecurity,
              and iOS development. I enjoy taking ideas from concept to execution
              and building things that solve real-world problems.
            </p>

            <div
              className="
                mt-6
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:mt-8
                sm:flex-row
                sm:gap-4
              "
            >
              <Link
                to="/contact"
                className="
                  w-full
                  max-w-[240px]
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-[#0a192f]
                  transition
                  hover:scale-105
                  sm:w-auto
                  sm:max-w-none
                  sm:px-8
                  sm:text-base
                "
              >
                Let's Connect
              </Link>

              <a
                href={Resume}
                download
                className="
                  w-full
                  max-w-[240px]
                  rounded-full
                  border-2
                  border-white
                  bg-transparent
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-white
                  hover:text-[#0a192f]
                  sm:w-auto
                  sm:max-w-none
                  sm:px-8
                  sm:text-base
                "
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM FADE */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-10
            h-24
            w-full
            bg-gradient-to-b
            from-transparent
            to-[#0a192f]
            sm:h-28
            md:h-32
          "
        />
      </section>

      <About />
    </>
  )
}

export default Intro