import AboutHeadshot from "../assets/Headshot.png"
import { motion } from "framer-motion"

const About = () => {
    return (
        <section id="about">
            <h2 className="flex justify-start mb-6 text-4xl font-bold text-white mt-10">ABOUT</h2>
            <hr className="mb-6 border-slate-700"></hr>
            {/* Grid Wrapper */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">

                {/* Image */}
                <motion.div 
                    className="order-1 md:order-2 flex justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                >
                <img
                    src={AboutHeadshot}
                    alt="Headshot"
                    className="mx-auto max-w-[200px] sm:max-w-[300px] md:max-w-md rounded-full animate-float"
                />
                </motion.div>                


                <div className="text-left sm:text-lg md:text-lg text-slate-300 leading-relaxed max-w-lg mx-auto md:mx-0">
                    <p className="mb-5 md:mb-10">
                        My name is Arossa - I'm a 4th-year Computer Science student at the University of Florida (Go Gators!). 
                    </p>
                    <p>
                        I’m interested in the intersection of product, software, AI, cloud infrastructure, and cybersecurity. I enjoy taking ideas from ambiguity to something people can actually use. I bring this mindset by shaping the product, building the experience, and understanding the infrastructure behind it. 
                        <br></br> <br></br> Outside of tech, I’m passionate about STEM education and mentorship through organizations such as Women in Computer Science & Engineering, Kode With Klossy, and Girls Who Code.            
                    </p>
                </div>
            </div>
       </section>
    )
}

export default About

// mx-auto = horizontal margin auto - centers img inside grid cell