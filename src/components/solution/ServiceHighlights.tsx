import Image from "next/image";

const content = [
  {
    image: "/images/greenhouse.jpg",
    title: "Laboratory and Greenhouse Services",
    text: "In collaboration with our on-site Engineering and Pilot Plant Services, and through our presence in various countries around the world, we are the only organization capable of taking a fertilizer technology idea from our labs to production testing to field trial implementation.",
    link: "Taking research to scale",
    reverse: false,
  },
  {
    image: "/images/plant.jpg",
    title: "Pilot Plant and Engineering Services",
    text: "Our Engineering and Pilot Plant Services can help you test feasibility and scalability of any new fertilizer product. From physical properties testing to technical assistance, IFDC’s services will ensure a comprehensive approach to your process development.",
    link: "Learn about our services",
    reverse: true,
  },
  {
    image: "/images/fertility.jpg",
    title: "Feed the Future Soil Fertility Technology Project",
    text: "IFDC’s work under the Feed the Future SFT agreement bridges the gap between scientific research and technology dissemination to smallholder farmers.",
    link: "Bridging the research gap",
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
              <p className="mt-4 text-sm font-bold text-gray-700 border-b-[3px] border-yellow-400 w-fit">
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
              We Want to Work with You
            </h2>
            <p className="text-gray-700 mb-4">
              IFDC has built a reputation in developing major fertilizer products currently in the market that are highly nutrient efficient and well proven in their adoption and use. Beyond fertilizers, IFDC has successfully implemented agricultural technologies at scale through innovative and sustainable agribusiness models and mechanisms, by engaging a variety of partners and building effective public-private partnerships. Whether you are in the private sector, a bilateral organization, a national research organization, or an implementing NGO working directly with large numbers of farmers, we want to partner with you.
            </p>
            <p className="text-sm font-bold text-gray-700 border-b-[3px] border-yellow-400 w-fit">
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
