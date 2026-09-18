import { motion } from "framer-motion"

// Replace these with your actual thumbnail files
import FeaturedThumb from "../assets/youtube-ghc_thumbnail.jpg"
import Video1 from "../assets/youtube-timetab_thumbnail.jpg"
import Video2 from "../assets/youtube-pseudocode_to_code_thumbnail.jpg"
import Video3 from "../assets/youtube-hedy_lamarr_thumbnail.jpg"
import Video4 from "../assets/youtube-pageturners_thumbnail.jpg"

const videos = [
  {
    title: "TimeTab | iOS Application",
    thumbnail: Video1,
    url: "https://youtu.be/kITodIPGx58?si=whK9kV0TGvEvV-N7",
  },
  {
    title: "Pseudocode to Code",
    thumbnail: Video2,
    url: "https://youtu.be/5IMyND7eiMw?si=aghp9BfbAXlI-a1g/",
  },
  {
    title: "Hedy Lamarr",
    thumbnail: Video3,
    url: "https://youtu.be/H8r9QTxDYUE?si=fw4wHmZcJXGFMzkR",
  },
  {
    title: "Page Turners | iOS Application",
    thumbnail: Video4,
    url: "https://youtu.be/ARF130incFA?si=bHogv9SWFQ-k-GyZ",
  },
]

const YouTube = () => {
  return (
    <section
      id="youtube"
      className="bg-[#0a192f] text-white"
    >
        <h2 className="mb-6 mt-10 text-4xl font-bold">
          CONTENT CREATION
        </h2>

        <hr className="mb-6 border-slate-700" />

        <h2 className="text-left mb-6 text-slate-300 sm:text-lg md:text-lg">
          <em>
            I also make videos showcasing my projects & sharing knowledge with others.
          </em>
        </h2>

      <div className="mx-auto max-w-6xl px-6 sm:px-8">

        {/* FEATURED VIDEO */}
        <motion.a
          href="https://youtube.com/watch?v=MGMTJ6VL-LM"
          target="_blank"
          rel="noreferrer"
          className="group block"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative overflow-hidden rounded-3xl">

            <img
              src={FeaturedThumb}
              alt="Featured YouTube video"
              className="
                aspect-video
                w-full
                object-cover
                transition
                duration-500
                group-hover:scale-[1.02]
              "
            />

            {/* subtle dark overlay */}
            <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/5" />

            {/* play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-white/90
                  text-2xl
                  text-[#0a192f]
                  transition
                  group-hover:scale-110
                "
              >
                ▶
              </div>
            </div>
          </div>

          <div className="mt-5">
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-slate-400">
              Featured video
            </p>

            <h3 className="text-2xl font-bold md:text-3xl">
              GET READY FOR GRACE HOPPER CONFERENCE (GHC) 2026 (3 offers, 4 interviews from GHC)!
            </h3>

            <p className="mt-2 max-w-2xl text-slate-300">
              A Guide from GHC25 Attendee presenting you Tips & Advice you need before going to GHC26. 
            </p>
          </div>
        </motion.a>

        {/* CHANNEL STRIP HEADER */}
        <div className="mt-10 mb-6 flex items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">
              FROM MY CHANNEL
            </h3>

            <p className="mt-1 text-slate-400">
              More videos from @arossa
            </p>
          </div>

          <a
            href="https://www.youtube.com/@arossa"
            target="_blank"
            rel="noreferrer"
            className="
              shrink-0
              text-sm
              font-semibold
              text-slate-300
              transition
              hover:text-white
            "
          >
            View channel ↗
          </a>
        </div>

        {/* HORIZONTAL VIDEO STRIP */}
        <div
          className="
            flex
            gap-6
            overflow-x-auto
            pb-4
            snap-x
            snap-mandatory
          "
        >
          {videos.map((video, index) => (
            <motion.a
              key={index}
              href={video.url}
              target="_blank"
              rel="noreferrer"
              className="
                group
                min-w-[280px]
                sm:min-w-[320px]
                md:min-w-[360px]
                snap-start
              "
              whileHover={{ y: -4 }}
            >
              <div className="relative overflow-hidden rounded-2xl">

                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="
                    aspect-video
                    w-full
                    object-cover
                    transition
                    duration-300
                    group-hover:scale-[1.03]
                  "
                />

                {/* small play icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#0a192f]">
                    ▶
                  </div>
                </div>
              </div>

              <h4 className="mt-3 text-lg font-bold leading-snug">
                {video.title}
              </h4>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default YouTube