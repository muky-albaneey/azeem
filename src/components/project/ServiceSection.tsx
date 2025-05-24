import Image from "next/image";

const services = [
  {
    title: "Laboratory and Greenhouse Services",
    description:
      "In collaboration with our on-site Engineering and Pilot Plant Services...",
    image: "/greenhouse.jpg",
    link: "Taking research to scale",
  },
  {
    title: "Pilot Plant and Engineering Services",
    description:
      "Our Engineering and Pilot Plant Services can help you test feasibility...",
    image: "/pilot-plant.jpg",
    link: "Learn about our services",
  },
  {
    title: "Feed the Future Soil Fertility Technology Project",
    description:
      "IFDC’s work under the Feed the Future SFT agreement bridges the gap...",
    image: "/soil.jpg",
    link: "Bridging the research gap",
  },
];

export default function ServiceSection() {
  return (
    <section className="py-16 space-y-20">
      {services.map((item, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row ${
            idx % 2 === 0 ? "" : "md:flex-row-reverse"
          } items-center gap-8`}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={300}
            height={200}
            className="rounded-lg"
          />
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-gray-800">{item.title}</h2>
            <p className="text-gray-600 mt-4">{item.description}</p>
            <a
              href="#"
              className="mt-4 inline-block font-semibold text-gray-800 border-b-2 border-yellow-500"
            >
              {item.link}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
