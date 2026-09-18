import AboutHeadshotDesktop from "../assets/wicse_speaking.png"
import AboutHeadshotMobile from "../assets/headshot.png"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0a192f] text-white"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-16">

        <h2 className="mb-6 text-4xl font-bold">
          ABOUT
        </h2>

        <hr className="mb-10 border-slate-700" />

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* MOBILE IMAGE */}
          <motion.div
            className="flex justify-center md:hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
              },
              scale: {
                duration: 0.8,
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <img
              src={AboutHeadshotMobile}
              alt="Arossa"
              className="
                h-[300px]
                w-[300px]
                rounded-full
                object-cover
              "
            />
          </motion.div>

          {/* TEXT */}
          <div className="order-2 md:order-1 text-left text-slate-300 leading-relaxed sm:text-lg md:text-lg">
            <p className="mb-6 md:mb-10">
              I'm a 4th-year Computer Science student at
              the University of Florida (Go Gators🐊!) in the Honors Program.
              I'm also obtaining 3 certificates from the university:
              Artificial Intelligence Fundamentals & Applications,
              Engineering Project Management, &
              Engineering Innovation.
            </p>

            <p>
              I’m interested in the intersection of product, software, AI,
              cloud infrastructure, and cybersecurity. I enjoy taking ideas
              from ambiguity to something people can actually use. I bring this
              mindset by shaping the product, building the experience, and
              understanding the infrastructure behind it.
            </p>

            <p className="mt-6">
              Outside of tech, I’m passionate about STEM education and
              mentorship through organizations such as Women in Computer
              Science & Engineering, Kode With Klossy, and Girls Who Code.
            </p>
          </div>

          {/* DESKTOP IMAGE */}
          <motion.div
            className="hidden md:flex md:order-2 justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
              },
              scale: {
                duration: 0.8,
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <img
              src={AboutHeadshotDesktop}
              alt="Arossa"
              className="
                h-[360px]
                w-[360px]
                rounded-full
                object-cover
              "
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About