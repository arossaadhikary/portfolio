import Email from "../assets/icon-email.png"
import LinkedIn from "../assets/icon-linkedin.png"
import Youtube from "../assets/icon-youtube.png"
import GitHub from "../assets/icon-github.png"

const Contact = () => {
  return (
    <section
      id="connect"
      className="bg-[#0a192f] text-white"
    >
      {/* SAME CONTAINER / MARGINS AS OTHER SECTIONS */}
      <div className="mt-20 mx-auto max-w-6xl px-6 sm:px-8 py-16">

        <h2 className="mb-5 text-left text-3xl font-bold sm:text-4xl">
          CONNECT
        </h2>

        <hr className="mb-6 border-slate-700" />

        <h2 className="mb-6 text-center text-base text-slate-300 sm:text-lg md:text-xl">
          Say{" "}
          <span
            role="img"
            aria-label="wave"
            className="inline-block animate-wave origin-bottom-right"
          >
            👋
          </span>
          ! Whether it’s coding, collabs, or just a hello... I’m just a click away.
        </h2>

        {/* Social Icons */}
        <div className="mt-3 flex flex-wrap justify-center gap-6 sm:gap-8">
          <a href="mailto:arossa.adhikaryc@gmail.com">
            <img
              src={Email}
              alt="Email"
              className="h-8 w-8 transition hover:opacity-70"
            />
          </a>

          <a
            href="https://www.youtube.com/@arossa"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Youtube}
              alt="Youtube"
              className="h-8 w-8 transition hover:opacity-70"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/arossaadhikary/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={LinkedIn}
              alt="LinkedIn"
              className="h-8 w-8 transition hover:opacity-70"
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
              className="h-8 w-8 transition hover:opacity-70"
            />
          </a>
        </div>

        {/* Calendar Embed */}
        <div className="mt-8 flex justify-center">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2B_ycPzVQghYMOMAiv3LyJtIozrE6lUojZIxhS-sEJB0wUcDQ15XWVDtSdNo9VwjDAToPhx2b1?gv=true"
            style={{
              border: 0,
              backgroundColor: "white",
            }}
            className="
              h-[400px]
              w-full
              rounded-lg
              shadow-lg
              sm:h-[500px]
              sm:w-4/5
              md:w-3/4
              lg:w-2/3
            "
            frameBorder="0"
            title="Schedule a meeting"
          />
        </div>

      </div>
    </section>
  )
}

export default Contact