import { motion } from "framer-motion"
import Headshot from '../assets/headshot.png'
import Resume from '../../public/ArossaAdhikaryResume.pdf'

import About from './About'

const Intro = () => {
  return (
    <div>
      <section id="intro" className="text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Grid wrapper */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr] items-center"
            initial={{ opacity: 0, y: 40 }}   
            animate={{ opacity: 1, y: 0 }}   
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Image */}
            <motion.div 
              className="order-1 md:order-2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <img
                src={Headshot}
                alt="Headshot"
                className="mx-auto max-w-[200px] sm:max-w-[300px] md:max-w-md rounded-full animate-float"
              />
            </motion.div>

            {/* Text */}
            <motion.div 
              className="order-2 md:order-1 text-center md:text-left md:pr-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 md:mb-10 flex items-center justify-center md:justify-start gap-2">
                Hi - I'm Arossa 
                <span role="img" aria-label="wave">👋</span> 
              </h1>

              <h2 className="text-base sm:text-lg md:text-2xl mb-4 text-slate-300">
                <em>I build with people in mind.</em>
              </h2>

              <p className="sm:text-lg md:text-xl text-slate-300 leading-relaxed mx-auto md:mx-0 md:pb-8">
                I’m interested in product, cloud infrastructure, cybersecurity, and iOS development. I enjoy taking ideas from concept to execution & building things that solve real world problems.            
              </p>

              <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4 font-semibold mb-8">
                <a
                  href="#connect"
                  className="rounded-full border-2 bg-white text-[#0a192f] px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base"
                >
                  Let's Connect
                </a>
                <a
                  href={Resume}
                  download
                  className="rounded-full border-2 border-white px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base
                  transition-all duration-500 hover:shadow-[0_0_25px_5px_rgba(34,211,238,0.8)] hover:border-blue-300"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <About />
    </div>
   
  )
}

export default Intro
