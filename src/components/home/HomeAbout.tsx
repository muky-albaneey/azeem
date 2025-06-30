import Image from 'next/image';

export default function HomeAboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-700 mb-4">
            Azim Development Company Ltd is a fast-growing, multi-sector company based in Abuja, Nigeria, with a footprint across Africa. We deliver innovative, sustainable solutions in real estate, energy, construction, transport, telecoms, agriculture, and mining—transforming communities and driving economic growth beyond oil
          </p>
          <a
            href="/about"
            className="inline-block text-lg font-medium text-gray-900 underline decoration-[#D4ADFC] decoration-4 mt-10">
            Learn more about Azimco
          </a>
        </div>
        <div className="w-1/2 flex flex-col items-end">
          <Image
            src="/azim3.jpeg"
            alt="Team photo"
            width={400}
            height={300}
            className="rounded"
          />
<h4 className={`w-[65%] text-left mt-10`}>IFDC is comprised of a dynamic team of individuals working worldwide to help improve sustainability.</h4>

<a
            href="#"
            className="inline-block text-lg font-medium text-gray-900 underline decoration-[#D4ADFC] decoration-4">
            Meet Our Team
          </a>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-base text-gray-700 mb-4">
          We are scientists, development professionals, and community members dedicated to scientific innovations that
          increase global food production, protect the environment, and empower smallholder farmers. Since 1974, we
          have worked in more than 100 countries to improve food security from right where it all starts: the soil.
        </p>
        <a
          href="#"
          className="inline-block text-base font-medium text-gray-900 underline decoration-yellow-400 decoration-4 mb-6">
          Learn more about IFDC
        </a>
        <Image
          src="/azim3.jpeg"
          alt="Team photo"
          width={600}
          height={400}
          className="rounded mb-6"
        />
        <p className="text-base text-gray-700">
          IFDC is comprised of a dynamic team of individuals working worldwide to help improve sustainability.
        </p>
        <h2 className="text-xl font-bold mt-4">Meet Our Team</h2>
      </div>
    </div>
  );
}
