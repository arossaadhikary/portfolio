import { motion } from "framer-motion"
import Resume from "../../public/ArossaAdhikaryResume.pdf"
import heroImage from "../assets/test.jpg"

import About from "./About"

const Intro = () => {
  return (
    <>
      <section
        id="intro"
        className="relative h-screen w-full overflow-hidden bg-[#0a192f]"
      >
        {/* IMAGE LAYER - ABOVE BACKGROUND COLOR */}
        <div
          className="absolute inset-0 z-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />

        {/* TEXT LAYER - ABOVE IMAGE */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
          <motion.div
            className="max-w-3xl bg-transparent text-center text-white"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="mb-4 text-5xl font-bold sm:text-6xl md:text-7xl">
              Hi, I'm Arossa 👋
            </h1>

            <h2 className="mb-6 text-xl font-light sm:text-2xl md:text-3xl">
              I build with people in mind.
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed sm:text-lg md:text-xl">
              I’m interested in product, cloud infrastructure, cybersecurity,
              and iOS development. I enjoy taking ideas from concept to execution
              and building things that solve real-world problems.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#connect"
                className="rounded-full bg-white px-8 py-3 font-semibold text-[#0a192f]"
              >
                Let's Connect
              </a>

              <a
                href={Resume}
                download
                className="rounded-full border-2 border-white bg-transparent px-8 py-3 font-semibold text-white"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <About />
    </>
  )
}

export default Intro