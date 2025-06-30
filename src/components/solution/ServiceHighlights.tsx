import Image from "next/image";

const content = [
  {
    image: "/images/greenhouse.jpg",
    title: "Architectural Design & Pre-Construction Services",
    text: "Azim Construction Company provides end-to-end architectural planning and design consultation. From initial feasibility assessments to final concept drawings, we help clients visualize and plan projects that are practical, sustainable, and aligned with regulatory standards.",
    link: "Explore our planning process",
    reverse: false,
  },
  {
    image: "/images/plant.jpg",
    title: "Engineering & Structural Development",
    text: "Our in-house engineering teams specialize in civil, structural, and mechanical systems. We test project viability and scalability while providing hands-on guidance to ensure safe, efficient, and cost-effective builds across housing, infrastructure, and energy sectors.",
    link: "Learn about our engineering expertise",
    reverse: true,
  },
  {
    image: "/images/fertility.jpg",
    title: "Construction Management & Project Delivery",
    text: "Azim ensures that construction projects are delivered on time, on budget, and to the highest standards. Our experienced teams coordinate every stage—from procurement to quality control—while maintaining transparent communication with stakeholders.",
    link: "See how we manage projects",
    reverse: false,
  },
];

export default function ServiceHighlights() {
  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-16 space-y-24">
        {content.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col-reverse ${
              item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-8 lg:gap-16`}
          >
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                {item.title}
              </h2>
              <p className="text-gray-700">{item.text}</p>
              <p className="mt-4 text-sm font-bold text-gray-700 border-b-[3px] border-[#D4ADFC] w-fit">
                {item.link}
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full object-cover rounded"
              />
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#f9f8f3] px-4 py-16 sm:px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-2/3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              We Want to Build with You
            </h2>
            <p className="text-gray-700 mb-4">
              Azim Construction Company is a trusted partner for governments, developers, and private investors across Africa. With a proven track record in delivering large-scale housing, roads, energy, and infrastructure projects, we bring technical precision and financial innovation to every job. Whether you&apos;re seeking a reliable contractor or a long-term development partner, we are ready to collaborate and deliver lasting impact.
            </p>
            <p className="text-sm font-bold text-gray-700 border-b-[3px] border-[#D4ADFC] w-fit">
              Get in Touch with Us
            </p>
          </div>
          <div className="lg:w-1/3">
            <Image
              src="/images/partnership.jpg"
              alt="Partnership"
              width={500}
              height={300}
              className="w-full object-cover rounded"
            />
          </div>
        </div>
      </section>
    </>
  );
}
