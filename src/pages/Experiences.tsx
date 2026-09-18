import { useState } from "react"
import { experiences } from "../data/experiences"
import ExperiencesCard from "../../src/components/Experiences/ExperiencesCard"

const categories = ["Professional", "Leadership", "Community"] as const

const Experiences = () => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof experiences>("Professional")

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="experiences"
      className="bg-[#0a192f] text-white"
    >
      <div className="mt-20 mx-auto max-w-6xl px-6 sm:px-8 py-16">

        {/* Heading */}
        <h2 className="mb-6 text-4xl font-bold">
          EXPERIENCES
        </h2>

        <hr className="mb-6 border-slate-700" />

        {/* Tab Buttons */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat)
                setOpenIndex(null)
              }}
              className={`flex-1 rounded-lg px-4 py-2 text-sm transition sm:text-base ${
                activeTab === cat
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <ul className="space-y-4">
          {experiences[activeTab].map((exp, i) => (
            <ExperiencesCard
              key={i}
              {...exp}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </ul>

      </div>
    </section>
  )
}

export default Experiences