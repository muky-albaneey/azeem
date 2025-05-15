import Image from "next/image";

const stats = [
  {
    icon: "/images/demo.png",
    value: "7,564",
    title: "DEMONSTRATION PLOTS ESTABLISHED",
    desc: "Management practices and/or technologies tested in farmer fields for dissemination",
    note: "(compared to 5,661 in 2022)",
  },
  {
    icon: "/images/trained.png",
    value: "464,097",
    title: "FARMERS TRAINED (38% WOMEN)",
    desc: "Direct farmer participants in short-term capacity building on management practices and/or technologies",
    note: "(compared to 258,566 [47% women] in 2022)",
  },
  {
    icon: "/images/gaps.png",
    value: "650,917",
    title: "FARMERS APPLYING GAPS",
    desc: "Farmers who have applied improved farm management practices and/or technologies",
    note: "(compared to 945,930 in 2022)",
  },
  {
    icon: "/images/area.png",
    value: "821,907",
    title: "AREA UNDER GOOD AGRICULTURAL PRACTICES",
    desc: "Hectares under improved management practices and/or technologies (managed or cultivated by farmer partners)",
    note: "(compared to 641,595 in 2022)",
  },
  {
    icon: "/images/partnership.png",
    value: "424",
    title: "PUBLIC–PRIVATE PARTNERSHIPS",
    desc: "Agreements between public and private firms/actors and research, academic, civil society, and stakeholder associations",
    note: "(compared to 331 in 2022)",
  },
  {
    icon: "/images/outreach.png",
    value: "4,887",
    title: "OUTREACH ACTIVITIES",
    desc: "Dissemination activities – Workshops, forums, stakeholder consultations, publications, and print, radio, and television media",
    note: "(compared to 5,083 in 2022)",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-12">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="flex justify-center mb-4">
              <Image src={stat.icon} alt={stat.title} width={100} height={100} />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
            <h4 className="mt-2 text-sm font-bold uppercase text-gray-700">{stat.title}</h4>
            <p className="italic text-sm text-gray-600 mt-1">{stat.desc}</p>
            <p className="text-xs text-gray-500 mt-1">{stat.note}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-right text-gray-500 mt-8 pr-2">*2023 Data</p>
    </section>
  );
}
